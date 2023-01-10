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
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/exercises" element={<ExercisesPage />}>
            <Route index element={<PostList posts={postsData} />} />
            <Route path="posts" element={<PostList posts={postsData} />} />
            <Route path="products" element={<Products />} />
            <Route path="albums" element={<Albums />} />
            <Route path="starWars" element={<StarWars />} />
            <Route path="goodsList" element={<GoodsList goods={goods} />} />
            <Route path="FAQ" element={<FAQ />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
