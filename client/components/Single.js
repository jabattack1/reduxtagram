import React from 'react';
import {Link} from 'react-router';
import Photo from './Photo.js';
import Comments from './Comments.js'

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
		//index of the post
		// const [postId] = this.props.params;
		const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
		// console.log(i);
		//get us the post
		const post = this.props.posts[i];
		// // console.log(this.props.comments);
		// const commentId = this.props.params.postId;
		const postComments = this.props.comments[this.props.params.postId] || [];
		// console.log(comment);
		return(
			<div className='single-photo'>
				<Photo i={i} post={post} {...this.props} />
				<Comments postComments={postComments} {...this.props}/>
			</div>
		)
	}
}

export default Single;