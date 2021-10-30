import "../styles/globals.css";
import Sidenav from "../components/sideNav";

function MyApp({ Component, pageProps }) {
    return (
        <>
            {/* <Sidenav></Sidenav> */}
            <Component {...pageProps} />{" "}
        </>
    );
}

export default MyApp;
