import React, {useState} from 'react';
import {DesktopOutlined,FileOutlined,PieChartOutlined,TeamOutlined,UserOutlined,} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, message } from 'antd';
import '../static/css/AdminIndex.css';
import {Router, Route, Routes} from 'react-router-dom'
import AddArticle from './AddArticle'
import ArticleList from './ArticleList'
import { useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, items) {
  return {
    key,
    icon,
    items,
    label,
  };
}

function AdminIndex() {
  const [collapsed, setCollapsed] = useState(false);  // 控制侧栏不是合上

  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };

  const navigate = useNavigate();
  const handleClickArticle = (e) => {
    console.log('click on: ', e.key);
    if (e.key === 'dashboard') {
      navigate('/index/');
    } else if (e.key === 'addArticle'){
      navigate('/index/add/');
    } else if (e.key === 'articleList') {
      navigate('/index/list/');
    } else {
      message.error('跳转失败');
    }
  }
  
  const items = [
    // getItem('工作台', 'dashboard', <PieChartOutlined />),
    getItem('文章列表', 'articleList', <FileOutlined />),
    getItem('添加文章', 'addArticle', <DesktopOutlined />),
    // getItem('Team', 'sub1', <UserOutlined />, [
    //   getItem('Tom', '3'),
    //   getItem('Bill', '4'),
    //   getItem('Alex', '5'),
    // ]),
    getItem('评论管理', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  ];

  return (
    <Layout style={{minHeight: '100vh'}}>
      
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['dashboard']} mode="inline" items={items} onClick={handleClickArticle}/>
      </Sider>
      
      <Layout className="site-layout">
        {/* <Header className="site-layout-background" style={{padding: 0}}/> */}
        <Content style={{margin: '0 16px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            {/* <Breadcrumb.Item>后台管理系统</Breadcrumb.Item> */}
            {/* <Breadcrumb.Item>工作台</Breadcrumb.Item> */}
          </Breadcrumb>
          <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
            <div>
              <Routes>
                {/* export declare function Route(_props: PathRouteProps | LayoutRouteProps | IndexRouteProps): React.ReactElement | null;
 */}
                  {/* <Route path='' exact element={<AddArticle to='/index/'/>} /> */}
                  <Route path='/add/' exact element={<AddArticle to='/index/add/'/>} />
                  <Route path='/list/' exact element={<ArticleList to='/index/list/'/>} /> {/* path: url input; to: route */}
                  <Route path='/add/:id' exact element={<AddArticle to='/index/add/'/>} />

                  {/* <Route path='*' element={<AddArticle to='/index'/>} /> */}
                  {/* <Route path='' exact element={<AddArticle to='/index/'/>} /> */}
                  {/* <Route path='/index/add/' exact element={<AddArticle to='/index/add/'/>} /> */}
                  {/* <Route path='*' exact element={<ArticleList to='/index/list/'/>} /> */}
                  {/* <Route path='' exact element={<ArticleList to='/index/'/>} /> http://localhost:3000/index/list/ */}

              </Routes>
            </div>
          </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    
    </Layout>
  );
};

export default AdminIndex;