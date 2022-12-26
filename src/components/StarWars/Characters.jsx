import { Component } from 'react';
import Modal from './Modal';
import UserInfo from './UserInfo';

export default class Characters extends Component {
  state = {
    isModalOpen: false,
    currentId: null,
  }

  onClickOpenModal = (e) => {
    const currentId = e.currentTarget.dataset.id
    this.setState(({isModalOpen}) => ({
      isModalOpen: !isModalOpen,
      currentId,
    }))
  }

  onClickCloseModal = (e) => {
    this.setState({
      isModalOpen: false
    })
  }

  render() {
    const currentItem = this.props.users.find(user => user.id === this.state.currentId)
    return (
      <>
      <ul>
      {this.props.users.map((item) => {
        return (
          <li key={item.name}>
            <p>{item.name}</p>
            <p>{item.gender}</p>
            <button type="button" data-id={item.id} onClick={this.onClickOpenModal}>Read more</button>
          </li>
        );
      })}
    </ul>
    {this.state.isModalOpen && (
      <Modal onClickCloseModal={this.onClickCloseModal}>
        <UserInfo item={currentItem}/>
      </Modal>
    )}
    </>
    );
  };
};