import styles from "./GoodsList.module.css";
import GoodsListItem from "./GoodsListItem";
import { Component } from "react";
import Goback from "../Goback/Goback";

export default class GoodsList extends Component {
  state = {
    activeElement: "id",
  };

  onClickChange = (event) => {
    this.setState({ activeElement: event.currentTarget.id });
  };

  render() {
    return (
      <>
        <Goback />
        <ul className={styles.list}>
          {this.props.goods.map(({ name, description, id }) => (
            <GoodsListItem
              id={id}
              onClickChange={this.onClickChange}
              activeElement={this.state.activeElement}
              key={id}
              name={name}
              description={description}
            />
          ))}
        </ul>
      </>
    );
  }
}
