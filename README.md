**Next.js**

*Notes*

- Add server-side rendering to React apps.
  - Improves SEO and decreases the initial loading on the client side for slower devices.
  - Next bridges SSR & CSR.
  - Compare source code of CSR and SSR rendered HTML.
  - Pages are built on the server vs build on the client (e.g: CRA, SPA).
  - The initial load/request is rendered by the server.
  - Typically, API requests are done on the client side.
  - Using Next, API requests are from the server.  
- Create scripts in package.json to run next.
- Create a `pages` directory in the root directory.
  - React components go in here.
- Next creates routes for each page.
  - No need to use react-router.
  - Name of components do not affect routing.
  - Each route is named after the name of the page file.
    - ex: `about.js` => `http://localhost:3000/about`


  
