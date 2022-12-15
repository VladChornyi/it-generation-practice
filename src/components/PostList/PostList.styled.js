import styled from 'styled-components';

export const WrapperPostList = styled.div`
  background-color: ${(props) => props.bg};
  text-align: center;
  border: 2px solid #ff00ff;
  padding-bottom: 30px;
  font-size: ${(props) => props.fontSize};
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #ff00ff;
  padding-top: 20px;
`;

export const PostListStyled = styled.ul`
  list-style-type: none;
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  color: ${(props) => (props.main ? '#ff00ff' : 'grey')};
  background-color: ${(props) =>
    props.main ? '#3c40c6' : '#34e7e4'};
  border-color: ${(props) => (props.main ? '#ffdd59' : '#ef5777')};
`;
