export default function PostItem({ image, title, text, id }) {
	return (
		<li class="post-list-item">
			<img class="post-list-img" src={image} alt="" />
			<h4 class="post-list-item-title">{title}</h4>
			<p class="post-list-item-text">{text}</p>
		</li>
	)
}
