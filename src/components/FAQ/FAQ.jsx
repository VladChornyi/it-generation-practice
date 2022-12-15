import { Component } from "react";
import AccordionItem from '../AccordionItem/AccordionItem';
import style from './FAQ.module.css'
export class FAQ extends Component {
  state = {
    isAllOpen: false
  };

  render() {
  return (
    <div className={style.accordion}>
      <h1>FAQ</h1>
      <button type="button" className={style.btn} id="expand-all">
        Expand All
      </button>
      <button type="button" className={style.btn} id="collapse-all">
        Collapse All
      </button>
      <ul className={style.FAQList}>
        <li className={style.FAQItem}><AccordionItem isAllOpen={this.state.isAllOpen} /></li>
        <li className={style.FAQItem}><AccordionItem isAllOpen={this.state.isAllOpen} /></li>
        <li className={style.FAQItem}><AccordionItem isAllOpen={this.state.isAllOpen} /></li>
        <li className={style.FAQItem}><AccordionItem isAllOpen={this.state.isAllOpen} /></li>
        <li className={style.FAQItem}><AccordionItem isAllOpen={this.state.isAllOpen} /></li>
      </ul>
    </div>
  );
}}

export default FAQ;
