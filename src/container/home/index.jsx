import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from 'src/redux/action/home';
import {Title} from 'src/component';
class Home extends Component {
	constructor(props) {
		super(props);
		this.clickHandle = this.clickHandle.bind(this);
	}

	clickHandle(type) {
		if(type === 1){
			this.props.actions.add_todos();
		} else {
			this.props.actions.subTract_todos();
		}
	}

	render() {
		return (
			<div>
				<button onClick={ e=>this.clickHandle(1)}>点我+1</button>
				<button onClick={ e=>this.clickHandle(2)}>点我-1</button>				
				<p>{this.props.home}</p>
				<Title title="hello" />
			</div>
		)	
	}
}


const mapStateToProps = state => {
	return {
		...state
	}
};

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(HomeActions, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

