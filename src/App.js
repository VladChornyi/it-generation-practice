import postsData from "./assets/posts.json";
import PostList from "./components/PostList/PostList";
import Section from "./components/Section/Section";
import Header from "./components/Header/Header";
import headerData from "./assets/nav.json";
import Container from "./components/Container/Container";
import AccordionItem from "./components/AccordionItem/AccordionItem";

function App() {
  return (
    <>
      <Header headerData={headerData} />
      {/* <Section title="title">
        <h2
          className="header-title"
          style={{ fontSize: "24px", color: "tomato", textAlign: "center" }}>
          "Котик на дієті - сумний котик" {true}
        </h2>
      </Section>
      <Section title="Posts">
        <PostList posts={postsData} />
      </Section> */}
      <AccordionItem />
    </>
  );
}

export default App;
