import { Component } from "react"
import "./Tabs.css"
import clsx from "clsx"
import { TabsItemBottom } from "../TabsItemBottom/TabsItemBottom"
import { TabsItemTop } from "../TabsItemTop/TabsItemTop"

const arrOfIds = ["1", "2", "3", "4"]

export default class Tabs extends Component {
	state = {
		activeId: "1",
	}

	handleClick = (e) => {
		console.log(e.target.dataset.id)
		this.setState({
			activeId: e.target.dataset.id,
		})
	}

	render() {
		const styles = clsx(this.state.isActive && "active")
		return (
			<>
				<div className="tabs">
					<ul className="tabs__caption">
						{arrOfIds.map((id) => (
							<TabsItemTop key={id} id={id} onClick={this.handleClick} activeId={this.state.activeId} />
						))}
					</ul>
					{arrOfIds.map((id) => (
						<TabsItemBottom key={id} id={id} onClick={this.handleClick} activeId={this.state.activeId} />
					))}
				</div>
			</>
		)
	}
}
