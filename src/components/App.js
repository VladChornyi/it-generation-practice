import goods from "../assets/goods.json";
import postsData from "../assets/posts.json";
import PostList from "./PostList/PostList";
import Section from "./Section/Section";
import Header from "./Header/Header";
import headerData from "../assets/nav.json";
import Container from "./Container/Container";
import AccordionItem from "./AccordionItem/AccordionItem";
import FAQ from './FAQ/FAQ';
import GoodsList from './GoodsList/GoodsList';
 

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
      <FAQ />
      <Container>
      <GoodsList
      goods={goods}
      />
      </Container>
    </>
  );
}

export default App;
