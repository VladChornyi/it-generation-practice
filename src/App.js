import postsData from "./assets/posts.json";
import PostList from "./components/PostList/PostList";
import Section from "./components/Section/Section";

function App() {

  return (
    <>
      <Section title='title'>
        <h2
          className="header-title"
          style={{ fontSize: "24px", color: "tomato", textAlign: "center" }}
        >
          "Котик на дієті - сумний котик" {true}
        </h2>
	
      </Section>
      <Section title='Posts'>
        <PostList posts={postsData}/>
      </Section>
    </>
  );
}



export default App;
