import React from 'react'
import Header from '../Header/Header'
import css from '../Layout/Layout.module.css'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
  <Header/>
  <main>
<Outlet/>
  </main>
  <footer className={css.footer}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta totam magni quam nulla at laudantium error ducimus dolore, aspernatur sint.
  </footer>
  </>
  )
}
