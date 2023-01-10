import { Component } from "react";
import AccordionItem from "../AccordionItem/AccordionItem";
import Goback from "../Goback/Goback";
import style from "./FAQ.module.css";
export class FAQ extends Component {
  state = {
    isAllOpen: false,
  };
  onOpenAll = () => {
    this.setState({
      isAllOpen: true,
    });
  };
  onCloseAll = () => {
    this.setState({
      isAllOpen: false,
    });
  };
  render() {
    return (
      <div className={style.accordion}>
        <Goback />
        <h1>FAQ</h1>
        <button
          type="button"
          className={style.btn}
          id="expand-all"
          onClick={this.onOpenAll}>
          Expand All
        </button>
        <button
          type="button"
          className={style.btn}
          id="collapse-all"
          onClick={this.onCloseAll}>
          Collapse All
        </button>
        <ul className={style.FAQList}>
          <li className={style.FAQItem}>
            <AccordionItem isAllOpen={this.state.isAllOpen} />
          </li>

          <li className={style.FAQItem}>
            <AccordionItem isAllOpen={this.state.isAllOpen} />
          </li>
          <li className={style.FAQItem}>
            <AccordionItem isAllOpen={this.state.isAllOpen} />
          </li>
          <li className={style.FAQItem}>
            <AccordionItem isAllOpen={this.state.isAllOpen} />
          </li>
          <li className={style.FAQItem}>
            <AccordionItem isAllOpen={this.state.isAllOpen} />
          </li>
        </ul>
      </div>
    );
  }
}

export default FAQ;
