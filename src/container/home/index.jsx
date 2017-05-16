import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from 'src/redux/action/home';

class Home extends Component {
	constructor(props) {
		super(props);
		this.clickHandle = this.clickHandle.bind(this);
	}

	clickHandle() {
		this.props.actions.add_todos();
	}

	render() {
		return <div onClick={this.clickHandle}>add</div>	
	}
}


const mapStateToProps = state => {
	return {
		...state,
		home: state.home
	}
};

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(HomeActions, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

