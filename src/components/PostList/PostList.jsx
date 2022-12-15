// import { Children } from "react"
import PropTypes from 'prop-types';

import {
  WrapperPostList,
  Title,
  PostListStyled,
  Button,
} from './PostList.styled';

import PostItem from '../PostItem/PostItem';

export default function PostList({posts}) {
  return (
    <WrapperPostList bg="#34e7e4" fontSize="24px">
      <Title>Post List</Title>
      <PostListStyled>
        {posts.map(({image, title, text, id}) => (
          <PostItem
            key={id}
            image={image}
            title={title}
            text={text}
          />
        ))}
      </PostListStyled>
      <Button>Click me!</Button>
    </WrapperPostList>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
