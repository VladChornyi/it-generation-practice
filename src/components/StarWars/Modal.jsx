import { Component } from "react";
import s from "./Modal.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.onEscPress)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscPress)
  }

  onEscPress = (e) => {
    if (e.code !== 'Escape') {
      return
    }
    this.props.onClickCloseModal()
  }

  onClickBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClickCloseModal()
    }
  }

  render() {
    return (
      <div className={s.backdrop} onClick={this.onClickBackdrop}>
        <div className={s.modal}>
          <button type="button" className={s.closeBtn} onClick={this.props.onClickToggleModal}>
            <AiOutlineCloseCircle size={32} />
          </button>
          {this.props.children}
        </div>
      </div>
    );
  }
}
