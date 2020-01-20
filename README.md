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
  - A new request is sent each time you go to a route.
  - No need to use react-router.
  - Name of components do not affect routing.
  - Each route is named after the name of the page file.
    - ex: `about.js` => `http://localhost:3000/about`
- Use the `Link` component for CSR routing.
  - Include `href` attribute
    - ex: `<Link href="/about"><a>About Us</a></Link>`
  - Under the hood, `Link` passes down the `onClick` function its to children elements.
    - The child element must be able to accept `onClick`.
- Override `_app.js`
    - Create `_app.js` under pages.
    - Need to add specific code found in docs.
- SSR API calls
  - Typically, we fetch data using hooks/lifecycle methods (CSR).
  - We could fetch in the `constructor`, but we would make 2 calls both in CSR and SSR.
  - Next uses `renderToString()` from `ReactDOMServer`
  - `getInitialProps()`
    - Returns an object, which will populate the inital props in a component.
    - For the initial page load, it will execute on the server only.
    - Will execute on the client only when navigating to a different route via `Link` or routing APIs.