import Tct2024HomeTop from "./partials/Tct2024HomeTop.jsx";
import Tct2023HomeMain from "./partials/Tct2024HomeMain.jsx";
import Tct2024HomeBottom from "./partials/Tct2024HomeBottom.jsx";
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
export default function Tct2024() {

    return (
        <>
            <Header />
            <Tct2024HomeTop/>
            <Tct2023HomeMain/>
            <Tct2024HomeBottom/>
            {/*<Footer />*/}
        </>
    )
}
