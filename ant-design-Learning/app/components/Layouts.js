import React from 'react';
import { Layout , Menu, Breadcrumb, Icon} from 'antd';
import common from './common.css';


const { Header, Footer, Sider, Content } = Layout;

const { SubMenu } = Menu;

const header_footer={	
	backgroundColor: '#7DBCEA'
};

const sider={
	backgroundColor: '#3BA0E9'
}

class Layouts extends React.Component{
	render(){
		return (
			<div className='main'>
				<div className='intro'>
					<h1 className='title'>Layout各种布局</h1>
				</div>
				<h3>普通布局</h3>
				<Layout>
					<Header style={ header_footer } >Header</Header>
					<Content className='content' >Content</Content>
					<Footer className='header_footer'>Footer</Footer>
				</Layout><br/><br/>
				<h3>左侧边栏布局</h3>
				<Layout>
					<Header style={ header_footer }>Header</Header>
					<Layout>
						<Sider style={ sider }>Sider</Sider>
						<Content  className='content'>Content</Content>
					</Layout>
					<Footer className='header_footer'>Footer</Footer>
				</Layout><br/><br/>
				<h3>右侧边栏布局</h3>
				<Layout>
					<Header style={ header_footer }>Header</Header>
					<Layout>
						<Content  className='content'>Content</Content>
						<Sider style={ sider }>Sider</Sider>
					</Layout>
					<Footer className='header_footer'>Footer</Footer>
				</Layout><br/><br/>
				<h3>左侧</h3>
				<Layout>
					<Sider style={ sider }>sider</Sider>
					<Content>
						<Header style={ header_footer }>Header</Header>
						<Content className='content' >Content</Content>
						<Footer className='header_footer'>Footer</Footer>
					</Content>
				</Layout><br/><br/>
				<h3>上中下布局</h3>
				<Layout className='layout'>
					<Header>
						<div className='logo'></div>
						<Menu
							theme='#3BA0E9'
							mode='horizontal'
							defaultSeletedKeys={['2']}
							style={{ lineHeight: '64px' }}
						>
							<Menu.Item key='1'>Menu 1</Menu.Item>
							<Menu.Item key='2'>Menu 2</Menu.Item>
							<Menu.Item key='3'>Menu 3</Menu.Item>
						</Menu>
					</Header>
					<Content style={{ padding: '0 50px' }}>
						<Breadcrumb style={{ margin: '12px 0' }}>
							<Breadcrumb.Item>Home</Breadcrumb.Item>
							<Breadcrumb.Item>List</Breadcrumb.Item>
							<Breadcrumb.Item>App</Breadcrumb.Item>
						</Breadcrumb>
						<div style={{ minHeight: 280, padding: 24, backgroundColor: '#fff' }}>Content</div>
					</Content>
					<Footer style={{ height: 20, textAlign: 'center'}}>
						@滔滔江水
					</Footer>
				</Layout><br/><br/>
				<h3>顶部侧边栏布局</h3>
				<Layout>
					<Header style={ header_footer }>
						{/*<div className='logo'/>*/}
						<Menu
							theme='dark'
							mode='horizontal'
							defaultSeletedKeys={['2']}
							style={{ lineHeight: '64px' }}
						>
							<Menu.Item key='1'>Menu 3</Menu.Item>
							<Menu.Item key='2'>Menu 1</Menu.Item>
							<Menu.Item key='3'>Menu 3</Menu.Item>
							<Menu.Item key='4'>Menu 4</Menu.Item>
						</Menu>
					</Header>
					<Layout>
						<Sider width={200} style={{ background: '#fff' }}>
							<Menu
								mode="inline"
								defaultSelectedKeys={['1']}
								defaultOpenKeys={['sub1']}
								style={{ height: '100%' }}
							>
								<SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
									<Menu.Item key="1">option1</Menu.Item>
									<Menu.Item key="2">option2</Menu.Item>
									<Menu.Item key="3">option3</Menu.Item>
									<Menu.Item key="4">option4</Menu.Item>
								</SubMenu>
								<SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
									<Menu.Item key="5">option5</Menu.Item>
									<Menu.Item key="6">option6</Menu.Item>
									<Menu.Item key="7">option7</Menu.Item>
									<Menu.Item key="8">option8</Menu.Item>
								</SubMenu>
								<SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
									<Menu.Item key="9">option9</Menu.Item>
									<Menu.Item key="10">option10</Menu.Item>
									<Menu.Item key="11">option11</Menu.Item>
									<Menu.Item key="12">option12</Menu.Item>
								</SubMenu>
							</Menu>
						</Sider>
						<Layout style={{ padding: '0 24px 24px' }}>
							<Breadcrumb style={{ margin: '12px 0' }}>
								<Breadcrumb.Item>Home</Breadcrumb.Item>
								<Breadcrumb.Item>List</Breadcrumb.Item>
								<Breadcrumb.Item>App</Breadcrumb.Item>
							</Breadcrumb>
							<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
								Content
							</Content>
						</Layout>
					</Layout>
				</Layout>
			</div>
		);
	}
}

export default Layouts;

