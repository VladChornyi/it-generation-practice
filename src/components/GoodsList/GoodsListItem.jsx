import PropTypes from "prop-types";
import { Component } from "react";
import styles from "./GoodsList.module.css";

export default class GoodsListItem extends Component {
  render() {
    const { onClickChange, activeElement, id, name, description } = this.props;
    return (
      <li className={styles.item} onClick={onClickChange} id={id}>
        <p
          className={`${styles.textName} ${
            activeElement === id ? styles.boldText : ""
          }`}>
          {name}
        </p>
        <p className={styles.textDesc}>{description}</p>
      </li>
    );
  }
}

GoodsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
