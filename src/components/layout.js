import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      // <h1 className="main-heading">
      //   <Link to="/">{title}</Link>
      // </h1>
      <Link className="logo" to="/">
        {title}
      </Link>
    )
  } else {
    header = (
      <Link className="logo" to="/">
        {title}
      </Link>
    )
  }


  return (

    <div data-is-root-path={isRootPath}>
      <header className="header mrb-2">
        <div className="header-container container pdb-2 pdt-2 mrb-4">
          <div className="header-container__left">
            {header}
          </div>
          <div className="header-container__right">
            <Link className="header-container__link" to="/">Home</Link>
            <Link className="header-container__link" to="/blog">Blog</Link>
            <Link className="header-container__link" to="/contact">Contact</Link>
          </div>
        </div>
        <div className="site-separator"></div>

      </header>
      <main className="global-wrapper">{children}</main>
      <footer className="container">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
