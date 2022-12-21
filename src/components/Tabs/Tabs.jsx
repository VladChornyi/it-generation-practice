import { Component } from "react";
import "./Tabs.css";
import clsx from "clsx";
import { TabsItemBottom } from "../TabsItemBottom/TabsItemBottom";
import { TabsItemTop } from "../TabsItemTop/TabsItemTop";

const arrOfIds = ["1", "2", "3", "4"];

export default class Tabs extends Component {
  state = {
    activeId: localStorage.getItem("activeId") ?? "1",
  };

  //   componentDidMount() {
  //     const localActiveId = localStorage.getItem("activeId");
  //     if (localActiveId) {
  //       this.setState({
  //         activeId: localActiveId,
  //       });
  //     }
  //   }

  componentDidUpdate(_, prevstate) {
    if (this.state.activeId !== prevstate.activeId) {
      localStorage.setItem("activeId", this.state.activeId);
    }
  }

  handleClick = (e) => {
    this.setState({
      activeId: e.target.dataset.id,
    });
  };

  render() {
    const styles = clsx(this.state.isActive && "active");
    return (
      <>
        <div className="tabs">
          <ul className="tabs__caption">
            {arrOfIds.map((id) => (
              <TabsItemTop
                key={id}
                id={id}
                onClick={this.handleClick}
                activeId={this.state.activeId}
              />
            ))}
          </ul>
          {arrOfIds.map((id) => (
            <TabsItemBottom
              key={id}
              id={id}
              onClick={this.handleClick}
              activeId={this.state.activeId}
            />
          ))}
        </div>
      </>
    );
  }
}
