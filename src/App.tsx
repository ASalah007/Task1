import { Layout } from "antd";
import Sidebar from "./components/Sidebar/Sidebar";
import ApplicationFormBuilder from "./components/FormBuilders/ApplicationFormBuilder/ApplicationFormBuilder";
import Navbar from "./components/Navbar/Navbar";

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <Navbar />
        <Content style={{ margin: "0 16px" }}>
          <div>
            <ApplicationFormBuilder />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
