import { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';

const { Header, Footer, Sider, Content } = Layout;

// 引入子菜单组件
const SubMenu = Menu.SubMenu; 

class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider width={256} style={{ minHeight: '100vh' }}>
          <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" >
                <Link to="/helloworld">
                    <Icon type="pie-chart" />
                    <span>Helloworld</span>
                </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
            >
               <Menu.Item key="2"><Link to="/dashboard/fenxi">分析页</Link></Menu.Item>
               <Menu.Item key="3"><Link to="/dashboard/jiankong">监控页</Link></Menu.Item>
               <Menu.Item key="4"><Link to="/dashboard/gongzuotai">工作台</Link></Menu.Item>
               <Menu.Item key="5"><Link to="/dashboard/kapian">卡片页面</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="dashboard" /><span>配置平台</span></span>}
            >
               <Menu.Item key="6"><Link to="/peizhipingtai/table">表格页面</Link></Menu.Item>
               <Menu.Item key="7"><Link to="/dashboard/jiankong">查看数据</Link></Menu.Item>
               <Menu.Item key="8"><Link to="/dashboard/gongzuotai">模型配置</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout >
          <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}
export default BasicLayout;