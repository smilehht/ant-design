import React from 'react';
import { Row, Col , Slider } from 'antd';

import style from 'antd/dist/antd.css';
import common from './common.css';

const backgroundColor={
	background: 'green'
};

const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;



class Grid extends React.Component{

	

	constructor(){
		super();
		this.state = {
			gutterKey:1,
			colCountKey:2,
		};

		this.gutters={};
		this.colCounts={};
		[2, 4, 6, 8, 12].forEach((value,i)=>{this.gutters[i]=value;});
		[2, 3, 4, 6, 8].forEach((value, i)=>{this.colCounts[i]=value;});
	}

	onGutterChange (gutterKey) {
		this.setState({	gutterKey });
		// console.log(gutterKey);
	}

	onColCountChange (colCountKey) {
		this.setState({ colCountKey });
		// console.log(colCountKey);
	}

	render(){
		
		const { gutterKey, colCountKey } = this.state;
		const cols = [];
		const colCounts = this.colCounts[colCountKey];
		// console.log("colCountKey"+colCountKey);
		// console.log("colCounts"+colCounts);

		let colCode='';
		for( let i = 0; i<colCounts; i++ ){
			cols.push(
				<Col key={i.toString()} span={24 / colCounts } style={{border:'1px solid green'}}>
					<div>column{i}</div>
				</Col>
			);
			colCode += ' <Col span={${24 / colCounts }}/> \n';
		}

		return (
			<div className='main'>
				<div className='intro'>
					<h1 className='title'>栅格布局</h1>
				</div>
				<h3>一行用Row组件表示，一行中的栅格数用Col组件表示</h3><br/>
				<Row>
					<Col style={backgroundColor} className="gutter-row" span={12}>col-12</Col>
					<Col className="gutter-row" span={12}>col-12</Col>
				</Row><br/>
				<h3>span:水平方向的长度</h3><br/>
				<Row>
					<Col style={backgroundColor} span={8}>col-8</Col>
					<Col  span={8}>col-8</Col>
					<Col style={backgroundColor} span={8}>col-8</Col>
				</Row><br/>
				<h3>通过设置长度，显示不同的栅格</h3><br/>
				<Row>
					<Col style={backgroundColor} span={4}>col-6</Col>
					<Col  span={4}>col-6</Col>
					<Col style={{backgroundColor:'yellow'}} span={4}>col-6</Col>
					<Col style={backgroundColor} span={4}>col-6</Col>
					<Col style={{backgroundColor:'blue'}} span={2}>col-2</Col>
					<Col style={backgroundColor} span={6}>col-6</Col>
				</Row><br/>
				<h3 style={{color:'red'}}>通过gutter设置栅格间距，貌似没用</h3><br/>
				<Row gutter={16}>
					<Col style={backgroundColor} span={6}>
        				<div style={backgroundColor}>col-6</div>
    				</Col>
					<Col style={backgroundColor} span={6}>
						<div style={backgroundColor}> col-6</div>
					</Col>
					<Col  span={6}>
						<div> col-6</div>
					</Col>
					<Col style={backgroundColor} span={6}>
						<div style={backgroundColor}> col-6</div>
					</Col>
				</Row><br/>
				<h3>通过设置offset属性，改变栅格的偏移</h3><br/>
				<Row>
					<Col style={backgroundColor} span={8}>col-8</Col>
					<Col style={backgroundColor} offset={6} span={8}>向右偏移了6个单位col-8</Col>
				</Row><br/>
				<h3>push和pull改变栅格的顺序</h3><br/>
				<Row>
					<Col style={backgroundColor} span={18} push={6}>111</Col>
					<Col style={{backgroundColor:'yellow'}} span={6} pull={18}>333</Col>
				</Row><br/>
				<h3>Flex布局：type='flex',justify='start'</h3><br/>
				<Row type='flex' justify='start'>
					<Col style={backgroundColor} span={4}>col-4</Col>
					<Col style={backgroundColor} span={4}>col-4</Col>
					<Col style={backgroundColor} span={4}>col-4</Col>
					<Col style={backgroundColor} span={4}>col-4</Col>
				</Row><br/>
				<h3>Flex布局：type='flex',justify='center'</h3><br/>
				<Row type='flex' justify='center'>
					<Col style={backgroundColor} span={4}>col-4</Col>
					<Col style={backgroundColor} span={4}>col-4</Col>
					<Col style={backgroundColor} span={4}>col-4</Col>
					<Col style={backgroundColor} span={4}>col-4</Col>
				</Row><br/>
				<h3>Flex布局：type='flex',justify='end'</h3><br/>
				<Row type='flex' justify='end'>
					<Col style={backgroundColor} span={4}>col-4</Col>
					<Col style={backgroundColor} span={4}>col-4</Col>
					<Col style={backgroundColor} span={4}>col-4</Col>
					<Col style={backgroundColor} span={4}>col-4</Col>
				</Row><br/>
				<h3>Flex布局：type='flex',justify='space-between'</h3><br/>
				<Row type='flex' justify='space-between'>
					<Col style={backgroundColor} span={4}>col-4</Col>
					<Col style={backgroundColor} span={4}>col-4</Col>
					<Col style={backgroundColor} span={4}>col-4</Col>
					<Col style={backgroundColor} span={4}>col-4</Col>
				</Row><br/>
				<h3  style={{color:'red'}}>Flex布局：type='flex',justify='center',align='top',下面的value无效</h3><br/>
				<Row type='flex' justify='center' align='top'>
					<Col style={backgroundColor} span={4}><DemoBox value={100}>col-4</DemoBox></Col>
					<Col style={backgroundColor} span={4}><DemoBox value={18}>col-4</DemoBox></Col>
					<Col style={backgroundColor} span={4}><DemoBox value={80}>col-4</DemoBox></Col>
					<Col style={backgroundColor} span={4}><DemoBox value={30}>col-4</DemoBox></Col>
				</Row><br/>
				<h3>Flex布局：type='flex',通过设置order的值改变Col的显示顺序</h3><br/>
				<Row type='flex'>
					<Col span={6} order={3} style={{backgroundColor:'blue'}} >col-6：order={3},代码位置在最前面</Col>
					<Col span={6} order={4} style={{backgroundColor:'yellow'}}>col-6：order={4},代码位置在第二</Col>
					<Col span={6} order={2} style={backgroundColor} >col-6：order={2},代码位置在第三</Col>
					<Col span={6} order={1}>col-6：order={4},代码位置在第四</Col>
				</Row><br/>
				<h3>响应式布局——四个尺寸：xs、sm、md、lg</h3>
				<Row>
					<Col xs={2} sm={4} md={6} lg={8} style={{backgroundColor:'blue'}}>Col1</Col>
					<Col xs={20} sm={8} md={10} lg={8} style={{backgroundColor:'green'}}>Col2</Col>
					<Col xs={2} sm={12} md={8} lg={8} style={{backgroundColor:'blue'}}>Col3</Col>
				</Row><br/>
				<h3>属性的内嵌写法：xs= span: 5, offset: 1 ; lg=span: 6, offset: 2 </h3>
				<Row>
					<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}  style={{backgroundColor:'blue'}}>Col</Col>
					<Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}  style={{backgroundColor:'green'}}>Col</Col>
					<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}  style={{backgroundColor:'blue'}}>Col</Col>
				</Row><br/>
				<h3>响应式组件——Slider设置水平数值条，并设置一些属性，通过与this.state与Col关联起来，从而改变布局</h3>
				<div style={{ marginBottom: 16}}>
					<span style={{marginRight: 6}}>Gutter (px):</span>
					<div style={{width: '50%'}}>
						<Slider 
							min={0}
							max={Object.keys(this.gutters).length - 1 }
							value={gutterKey}
							onChange={this.onGutterChange}
							marks={ this.gutters }
							step={ null }
						/>
					</div>
					<span style={{ marginRight: 6 }}>Column Count:</span>
					<div style={{ width: '50%' }}>
						<Slider
							min={0}
							max={Object.keys(this.colCounts).length - 1}
							value={colCountKey}
							onChange={this.onColCountChange}
							marks={this.colCounts}
							step={null}
						/>
					</div>
					<Row gutter={this.gutters[gutterKey]}>
							{/*<pre>{`<Row gutter={${this.gutters[gutterKey]}}>\n${colCode}</Row>`}</pre>*/}
							{cols}
					</Row>
				</div>


			</div>
		);
	}
}

export default Grid;