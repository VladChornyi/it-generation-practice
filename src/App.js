import postsData from "./assets/posts.json"
import PostList from "./components/PostList/PostList"

function App() {
	return (
		<>
			<h2 className="header-title" style={{ fontSize: "24px", color: "tomato", textAlign: "center" }}>
				"Котик на дієті - сумний котик"
			</h2>
			<PostList posts={postsData} />
		</>
	)
}

export default App
