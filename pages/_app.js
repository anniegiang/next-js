import App from "next/app";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;

// OLD SYNTAX

// class MyApp extends App {
//   // Only uncomment this method if you have blocking data requirements for
//   // every single page in your application. This disables the ability to
//   // perform automatic static optimization, causing every page in your app to
//   // be server-side rendered.
//   //
//   // static async getInitialProps(appContext) {
//   //   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   //   const appProps = await App.getInitialProps(appContext);

//   //   return { ...appProps }
//   // }

//   render() {
//     const { Component, pageProps } = this.props;
//     return (
//       <>
//         <NavBar />
//         <Component {...pageProps} />
//       </>
//     );
//   }
// }

// export default MyApp;
