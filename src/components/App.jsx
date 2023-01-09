import goods from "../assets/goods.json";
import postsData from "../assets/posts.json";
import PostList from "./PostList/PostList";
import Section from "./Section/Section";
import Header from "./Header/Header";
import headerData from "../assets/nav.json";
import Container from "./Container/Container";
import AccordionItem from "./AccordionItem/AccordionItem";
import FAQ from "./FAQ/FAQ";
import GoodsList from "./GoodsList/GoodsList";
import Products from "./Products/Products";
import Albums from "./Albums/Albums";
import { StarWars } from "./StarWars/StarWars";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Layout from "./Layout/Layout";
import ExercisesPage from "../pages/ExercisesPage/ExercisesPage";

function App() {
  console.log(headerData);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="exercises" element={<ExercisesPage />} />
        </Route>
      </Routes>

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
      {/* <FAQ />
      <Container>
      <GoodsList
      goods={goods}
      />
      </Container>
      <Container>
      <Products />
      </Container> */}
      {/* <Albums /> */}
      {/* <StarWars /> */}
    </>
  );
}

export default App;
