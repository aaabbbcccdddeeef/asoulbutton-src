import './App.css';
import { PageHeader, Button, Drawer, Tooltip, Divider, Layout } from "antd";
import { MenuOutlined, GithubOutlined, TranslationOutlined, HeartOutlined } from "@ant-design/icons";
import {useState, useEffect} from "react";
import SectionCard from "./SectionCard";
import AboutInformation from "./AboutInformation";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from "react-router-dom";


function App() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [fileTree, setFileTree] = useState(null);
  const {Header, Content, Footer} = Layout;

  const handleMenu = () => {
    setDrawerVisible((prev) => !prev);
  }

  const renderCards = () => {
    return (
        <div style={{minHeight: '720px'}}>
           {
            fileTree ? fileTree.sections.map((section) =>
              <SectionCard config={section} />
            ) : <div></div>
           }
        </div>
    )
  }

  const toggleDrawer = () => {
      setDrawerVisible(false)
  }

  useEffect(() => {
      console.log("loading data")
      fetch('config.json').then((response) => {
          console.log(response)
          return response.json()
      }).then((response) => {
          console.log(response);
          setFileTree(response);
      }).catch((err) => {
          console.log(err);
      })
  }, [])

  return (
      <Router>
          <Layout>
              <PageHeader
                  backIcon={<MenuOutlined />}
                  title="A-soul按钮"
                  extra={[
                      <Tooltip placement="bottom" title="罕见模式（暂未开放）" key="language">
                          <Button shape="circle" icon={<TranslationOutlined />} />
                      </Tooltip>,
                      <Tooltip placement="bottom" title="开源仓库" key="github">
                          <Button shape="circle" icon={<GithubOutlined />} />
                      </Tooltip>
                  ]}
                  onBack={handleMenu}
              />
              <Content>
                  <Switch>
                      <Route path="/about">
                          <AboutInformation />
                      </Route>
                      <Route path="/">
                          {renderCards()}
                      </Route>
                  </Switch>
              </Content>
              <Footer style={{textAlign: 'center'}}>
                  Made with <HeartOutlined /> by asoul-button team
              </Footer>
              <Drawer
                  title="A-soul按钮"
                  placement="left"
                  visible={drawerVisible}
                  closable={false}
                  onClose={toggleDrawer}
              >
                  <Button type="text" block={true} style={{textAlign: 'left'}} onClick={toggleDrawer}>
                      <Link to="/">主页</Link>
                  </Button>
                  <Button type="text" block={true} style={{textAlign: 'left'}} onClick={toggleDrawer}>
                      <Link to="/about">关于</Link>
                  </Button>
                  <Divider orientation="left">链接</Divider>
                  <Button type="link" target="_blank" href="https://space.bilibili.com/703007996">A-SOUL_Official B站</Button>
              </Drawer>
          </Layout>
      </Router>

  );
}

export default App;
