import { Checkbox, Switch } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import ConfigProvider from "antd/es/config-provider";
import { useState } from "react";

type PlainItemData = {
  check: boolean;
  show: boolean;
};

type PlainItemProps = {
  label: React.ReactNode;
  checkLabel: React.ReactNode;
  data?: PlainItemData;
  onChange?: (data: PlainItemData) => void;
};

export default function PlainItem(props: PlainItemProps) {
  const { onChange } = props;
  const [data, setData] = useState(props.data);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#087B2F",
        },
      }}
    >
      <div className="flex items-center justify-between">
        <div className="font-bold">{props.label}</div>
        {data && (
          <div className="flex items-center gap-8">
            <Checkbox
              checked={data.check}
              onChange={(e: CheckboxChangeEvent) => {
                setData({ ...data, check: e.target.checked });
                onChange && onChange({ ...data, check: e.target.checked });
              }}
            >
              {props.checkLabel}
            </Checkbox>
            <div className="flex items-center gap-2">
              <div className="z-10">
                <Switch
                  checked={data?.show}
                  onChange={(checked) => {
                    setData({ ...data, show: checked });
                    onChange && onChange({ ...data, show: checked });
                  }}
                  className="rotate-180 bg-gray-300 border"
                />
              </div>
              <div className="w-8 ">{data.show ? "Show" : "Hide"}</div>
            </div>
          </div>
        )}
      </div>
    </ConfigProvider>
  );
}
