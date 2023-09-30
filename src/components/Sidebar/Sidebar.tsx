import { useState } from "react";
import {
  MenuOutlined,
  HomeOutlined,
  FileTextOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);

  const handleClick: MenuProps["onClick"] = ({ key }) => {
    switch (key) {
      case "1":
        setCollapsed((oldValue) => !oldValue);
        break;
      // rest cases go here
    }
  };

  return (
    <Layout.Sider
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      theme="light"
    >
      <Menu selectable={false} onClick={handleClick}>
        <Menu.Item
          key="1"
          icon={collapsed ? <MenuOutlined /> : <CloseOutlined />}
          title="Open"
          style={{ marginBottom: 40 }}
        >
          Close
        </Menu.Item>

        <Menu.Item key="2" icon={<HomeOutlined />}>
          Home
        </Menu.Item>

        <Menu.Item key="3" icon={<FileTextOutlined />}>
          Applications
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}
