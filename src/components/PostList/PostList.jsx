// import { Children } from "react"
import PropTypes from 'prop-types';


import PostItem from "../PostItem/PostItem"

export default function PostList({ posts }) {
	return (
		<>
			<h2 class="post-list-title">Post List</h2>
			<ul class="post-list">
				{posts.map(({ image, title, text, id }) => (
					<PostItem key={id} image={image} title={title} text={text} />
				))}
			</ul>
		</>
	)
}

PostList.propTypes = {
	posts: PropTypes.arrayOf(PropTypes.shape({
		image: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
	  }))
}
