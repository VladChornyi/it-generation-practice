export function TabsItemTop({ id, onClick, activeId }) {
	return (
		<li data-id={id} onClick={onClick} className={activeId === id ? "active" : ""}>
			Вкладка № {id}
		</li>
	)
}
