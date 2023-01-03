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
import { Formik } from "formik";
import FormFormik from "./FormFormik/FormFormik";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (obj) => {
    setUsers((prevState) => [...prevState, { ...obj, id: nanoid() }]);
  };
  return (
    <>
      <FormFormik addUser={addUser} />
      {/* <Header headerData={headerData} /> */}
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
    </>
  );
}

export default App;
