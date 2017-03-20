import React, {Component} from 'react';
import { Button , Radio, Icon , Menu, Dropdown } from 'antd';
import common from './common.css';


// const menu={
// 		<Menu>
// 			<Menu.item key='1st item'>1st item</Menu.item>
// 			<Menu.item key='2st item'>2st item</Menu.item>
// 			<Menu.item key='3st item'>3st item</Menu.item>
// 		</Menu>
// 	};

const ButtonGroup=Button.Group;

const intro=[
	{
		'key': 1,
		'property': 'type',
		'intro': '改变按钮样式',
		'value': 'primary、default、dashed、danger',
	},
	{
		'key': 2,
		'property': 'shape',
		'intro': '改变显示形状',
		'value': 'circle、不设值',
	},
	{
		'key': 3,
		'property': 'size',
		'intro': '改变组件的大小',
		'value': 'small、large、不设值',
	},
	{
		'key': 4,
		'property': 'loading',
		'intro': '控制是否加载',
		'value': 'true、false',
	},
	{
		'key': 5,
		'property': 'ghost',
		'intro': '幽灵模式',
		'value': 'true、false',
	},
	{
		'key': 6,
		'property': 'onClick',
		'intro': '点击事件',
		'value': '函数',
	},
];


class Buttons extends React.Component{
	
	// getInitialState(){
	// 	return ({result:[]});
	// }

	getIntro(){
		let result=[];
		for(var item in intro){
			result.push(<li key={intro[item]['key']}>{intro[item]['property']} : {intro[item]['intro']}，取值：{intro[item]['value']}</li>);
		};
		// this.setState({result: result});
		return result;
	}

	componentDidMount() {
		this.getIntro();
	}
	
	render() {

		let result=this.getIntro();

		return (
			<div className='main'>
				<div className='intro'>
					<h1 className='title'>Button组件的各种样式</h1>
					<h3>参数说明：</h3><br/>
					<ul>
						{result}

						{/*<li>type:改变按钮样式，取值：primary、default、dashed、danger</li>
						<li>shape:改变显示形状，取值：circle、不设值</li>
						<li>size:改变组件的大小，取值：small、large、不设值</li>
						<li>icon:改变显示图标，取值：search、download、poweroff、cloud</li>
						<li>loading:控制是否加载</li>
						<li>ghost:幽灵模式</li>
						<li>onClick:点击事件</li>*/}
					</ul>
				</div>
				<div>
					<h3>普通的button——type改变显示样式</h3><br/>
					<Button type='primary'>Primary</Button>
					<Button>Default</Button>
					<Button type='dashed'>Dashed</Button>
					<Button type='danger'>Danger</Button>
				</div>
				<hr className='divider' />
				<div>
					<h3>icon为search类型的Button——icon改变显示类型</h3><br/>
					<Button icon='search'></Button>
					<Button icon='search'>Search</Button>
					<Button type="primary" icon='search'></Button>
					<Button type="primary" icon='search'>Search</Button>
					{/*<Button shape="circle" icon="search"></Button>
					<Button type="primary" shape="circle" icon="search"></Button>*/}
					<Button type="dashed" shape="circle" icon="search"></Button>
					<Button type="dashed"  icon="search">Search</Button>
				</div>
				<hr className='divider' />
				<div>
					<h3>icon为download类型的Button——size改变显示的大小</h3><br/>
					<Button type="primary" icon="download" shape='circle' />
					<Button type="primary" icon="download" shape='circle' size='large'/>
					<Button type="primary" icon="download"  size='large'>Download</Button>
				</div>
				<hr className='divider' />
				<div>
					<h3>Radio类型的按钮——Radio.Group按钮组</h3><br/>
					<Radio.Group>
						<Radio.Button value='small'>Small</Radio.Button>
						<Radio.Button value='default1'>Default1</Radio.Button>
						<Radio.Button value='default2'>Default2</Radio.Button>
						<Radio.Button value='large'>Large</Radio.Button>
					</Radio.Group>
				</div>
				<hr className='divider' />
				<div>
					<h3>Button.Group类型的按钮——Icon显示图标，type控制图标样式</h3><br/>
					<Button.Group>
						<Button type="primary">
							<Icon type="left"></Icon>Backward
						</Button>
						<Button type="primary">
							Forword<Icon type="right"></Icon>
						</Button>
					</Button.Group>
				</div>
				<hr className='divider' />
				<div>
					<h3>不可点击类型的按钮——disabled控制样式的点击，Button组件上加disabled即可,可以通过this.state来改变disabled的值</h3><br/>
					<Button type="primary">Primary</Button>
					<Button type="primary" disabled>Primary</Button>
					<Button type="dashed" disabled>Primary</Button>
				</div>
				<hr className='divider' />
				<div>
					<h3>加载类型的按钮——loading控制加载样式，Button组件上加loading即可，可以通过this.state来改变loading的值</h3><br/>
					<Button type="primary" icon='poweroff'>icon='poweroff'</Button>
					<Button type="primary" loading>Loading</Button>
					<Button type="primary" disabled loading>Loading</Button>
					<Button type="dashed" disabled loading>Loading</Button>
				</div>
				<hr className='divider' />
				<div>
					<h3>多按钮组合-------有问题</h3><br/>
					{/*<Dropdown overlay={menu}>
					<Button>
						more <Icon type="down" />
					</Button>
					</Dropdown>*/}
				</div>
				<hr className='divider' />
				<div>
					<h3>const ButtonGroup = Button.Group</h3><br/>
					<ButtonGroup>
						<Button>Default</Button>
						<Button type='primary'>Concel</Button>
					</ButtonGroup>
					<ButtonGroup>
						<Button disabled>Left</Button>
						<Button type='primary' disabled>Medium</Button>
						<Button type='primary' disabled>Right</Button>
					</ButtonGroup>
					<ButtonGroup>
						<Button type='primary'>Left</Button>
						<Button >Medium</Button>
						<Button >Medium</Button>
						<Button type='dashed' disabled>Right</Button>
					</ButtonGroup>
					<ButtonGroup>
						<Button>
							<Icon type='left'/>Backward</Button>
						<Button>
							Backward
							<Icon type='right'/>
						</Button>
					</ButtonGroup>
					<ButtonGroup>
						<Button type='primary' icon="cloud"></Button>
						<Button type='primary' icon="cloud-download"></Button>
					</ButtonGroup>
				</div>
				<hr className='divider' />
				<div>
					<h3>幽灵按钮——添加ghost属性</h3><br/>
					<Button type="primary" ghost>Primary</Button>
					<Button type="default" ghost>Defualt</Button>
					<Button type="dashed" ghost>Dashed</Button>
				</div>
			</div>
		);
	}
}

export default Buttons;

