import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Section from "../../components/Section/Section";

export default function ExercisesPage() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="posts">Posts</NavLink>
          </li>
          <li>
            <NavLink to="products">Products</NavLink>
          </li>
          <li>
            <NavLink to="albums">Albums</NavLink>
          </li>
          <li>
            <NavLink to="starWars">StarWars</NavLink>
          </li>
          <li>
            <NavLink to="goodsList">GoodsList</NavLink>
          </li>
          <li>
            <NavLink to="FAQ">FAQ</NavLink>
          </li>
          <li>
            <NavLink to="counter">Counter</NavLink>
          </li>
          <li>
            <NavLink to="users">Users</NavLink>
          </li>
        </ul>
      </nav>
      <Section>
        <Outlet />
      </Section>
    </>
  );
}
