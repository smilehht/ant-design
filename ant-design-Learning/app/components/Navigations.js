import React from 'react';
import { Affix, Button, BackTop, Breadcrumb, Icon } from 'antd';
import common from './common.css';

export default class Navigations extends React.Component{
	render(){
		return (

			<div className='main'>
				<div className='intro'>
					<h1 className='title'>Navigators组件的各种样式</h1>
				</div>
				<h3>Affix固钉</h3>
				<Affix offsetTop={120}>
					<Button type='primary'> Affix Top </Button>
				</Affix><br/>
				<h3>BackTop返回顶部</h3>
				<BackTop/>
				<BackTop style={{bottom: 200, width:40, height:40}}>
			    	<div style={{background: '#57C5F7'}}>UP</div>
			    </BackTop>
				<h3>Breadcrumb面包屑</h3>
				<Breadcrumb separator='>'>
					<Breadcrumb.Item><a href=''><Icon type='home' /> Home</a></Breadcrumb.Item>
					<Breadcrumb.Item><a href="">List</a></Breadcrumb.Item>
					<Breadcrumb.Item><a href=''>App</a></Breadcrumb.Item>
				</Breadcrumb>
			</div>
		);
	}
}
