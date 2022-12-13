import { Children } from "react"
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
