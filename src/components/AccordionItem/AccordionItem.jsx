import { Component } from "react";
import style from "./AccordionItem.module.css";

export class AccordionItem extends Component {
  state = {
    expanded: false,
  };

  onClickEventHandler = (event) => {
    this.setState((prevState) => {
      return { expanded: !prevState.expanded };
    });
  };

  componentDidUpdate() {
    console.log(this.props.buttonPushed);
    if (!this.props.buttonPushed) {
      return;
    }
    if (this.props.isAllOpen){
      this.setState({
        expanded: true,
      });
      this.props.onTriggerButton()
    }
    if (!this.props.isAllOpen){
      this.setState({
        expanded: false,
      });
      this.props.onTriggerButton()
    }
  }

  render() {
    return (
      <div className={style.container} onClick={this.onClickEventHandler}>
        <div className={style.accordion}>
          <div className={style.accordionItem}>
            <p
              className={`${style.title} ${
                this.state.expanded ? style.isExpanded : ""
              }`}
            >
              First Question
            </p>
            <div
              className={`${style.content} ${
                this.state.expanded ? style.isExpanded : ""
              }`}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eu interdum diam. Donec interdum porttitor risus non bibendum.
                Maecenas sollicitudin eros in quam imperdiet placerat. Cras
                justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec
                dignissim arcu nec elit faucibus condimentum. Donec facilisis
                consectetur enim sit amet varius. Pellentesque justo dui,
                sodales quis luctus a, iaculis eget mauris. Aliquam dapibus,
                ante quis fringilla feugiat, mauris risus condimentum massa, at
                elementum libero quam ac ligula. Pellentesque at rhoncus dolor.
                Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor
                venenatis mauris placerat tristique eget id dolor. Quisque
                blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec
                elementum tincidunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccordionItem;
