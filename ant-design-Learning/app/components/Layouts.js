import React from 'react';
import { Layout , Menu, Breadcrumb } from 'antd';
import common from './common.css';


const { Header, Footer, Sider, Content } = Layout;

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
					<Content>
						<Layout>
							<Breadcrumb>
								<Breadcrumb.Item>Home</Breadcrumb.Item>
								<Breadcrumb.Item>List</Breadcrumb.Item>
								<Breadcrumb.Item>App</Breadcrumb.Item>
							</Breadcrumb>
						</Layout>
						<Layout>
						
						</Layout>
					</Content>
				</Layout>
			</div>
		);
	}
}

export default Layouts;

