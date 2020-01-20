**Next.js**

*Notes*

- Add server-side rendering to react apps.
  - Improves SEO and decreases the initial loading on the client side for slower devices.
  - Compare source code of CSR and SSR rendered HTML.
  - Pages are built on the server vs build on the client (e.g: CRA, SPA).
  - Next gives a  hybrid between SSR & CSR.
  - The initial load/request is rendered by the server.
  - Typically, API requests are done on the client side.
  - Using Next, API requests are from the server.  
- Create scripts in package.json to run next.
- Create a `pages` directory in the root directory.
  - React components go in here.
- Next creates routes for each page.
  - Name of components do not affect routing.
  - Each route is named after the name of the page file.
    - ex: `about.js` => `http://localhost:3000/about`


  
