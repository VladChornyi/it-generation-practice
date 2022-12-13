import PropTypes from 'prop-types';

export default function PostItem({ image, title, text}) {
	return (
		<li class="post-list-item">
			<img class="post-list-img" src={image} alt="" />
			<h4 class="post-list-item-title">{title}</h4>
			<p class="post-list-item-text">{text}</p>
		</li>
	)
}

PostItem.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
}
