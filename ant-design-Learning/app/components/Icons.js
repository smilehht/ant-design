import React from 'react';
import { Icon } from 'antd';
import common from './common.css';

class Icons extends React.Component{
	render(){
		return (
			<div className='main'>
				<div className='intro'>
					<h1 className='title'>Icon组件的各种样式</h1>
				</div>
				<div className='icon'>
					<Icon type="step-backward" />
					<Icon type="step-forward" />
					<Icon type="fast-backward" />
					<Icon type="fast-forward" />
					<Icon type="shrink" />
				</div>
			</div>
		);
	}
} 

export default Icons;

