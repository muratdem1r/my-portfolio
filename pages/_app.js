import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const whiteMode = false;

  return (
    <div className={whiteMode ? "white" : ""}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
