import React from 'react';
import {Link} from 'react-router';
import Photo from './Photo.js';

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
class PhotoGrid extends React.Component{
	render(){
		return(
			<div className='photo-grid'>
				{this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
			</div>
		)
	}
}

export default PhotoGrid;