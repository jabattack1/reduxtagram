import React from 'react';
import {Link} from 'react-router';

// const Main = React.createClass({
// 	render(){
// 		return(
// 			<div>
// 				<h1>
// 					<Link to='/'>Reduxtagram</Link>
// 				</h1>
// 			</div>
// 		)
// 	}
// });

class Single extends React.Component{
	render(){
		return(
			<div className='single-photo'>
			I'm the single Grid
			</div>
		)
	}
}

export default Single;