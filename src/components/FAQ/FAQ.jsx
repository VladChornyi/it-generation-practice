import { Component } from "react";
import AccordionItem from "../AccordionItem/AccordionItem";
import style from "./FAQ.module.css";
export class FAQ extends Component {
  state = {
    isAllOpen: true,
    buttonPushed: false,
  };
  onOpenAll = () => {
    this.setState({
      isAllOpen: true,
      buttonPushed: true,
    });
  };
  onCloseAll = () => {
    this.setState({
      isAllOpen: false,
      buttonPushed: true,
    });
  };
  onTriggerButton = () => {
    this.setState({
      buttonPushed: false,
    });
  };
  render() {
    return (
      <div className={style.accordion}>
        <h1>FAQ</h1>
        <button
          onClick={this.onOpenAll}
          type="button"
          className={style.btn}
          id="expand-all"
        >
          Expand All
        </button>
        <button
          onClick={this.onCloseAll}
          type="button"
          className={style.btn}
          id="collapse-all"
        >
          Collapse All
        </button>
        <ul className={style.FAQList}>
          <li className={style.FAQItem}>
            <AccordionItem
              buttonPushed={this.state.buttonPushed}
              onTriggerButton={this.onTriggerButton}
              isAllOpen={this.state.isAllOpen}
            />
          </li>
          <li className={style.FAQItem}>
            <AccordionItem
              buttonPushed={this.state.buttonPushed}
              onTriggerButton={this.onTriggerButton}
              isAllOpen={this.state.isAllOpen}
            />
          </li>
          <li className={style.FAQItem}>
            <AccordionItem
              buttonPushed={this.state.buttonPushed}
              onTriggerButton={this.onTriggerButton}
              isAllOpen={this.state.isAllOpen}
            />
          </li>
          <li className={style.FAQItem}>
            <AccordionItem
              buttonPushed={this.state.buttonPushed}
              onTriggerButton={this.onTriggerButton}
              isAllOpen={this.state.isAllOpen}
            />
          </li>
          <li className={style.FAQItem}>
            <AccordionItem
              buttonPushed={this.state.buttonPushed}
              onTriggerButton={this.onTriggerButton}
              isAllOpen={this.state.isAllOpen}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default FAQ;
