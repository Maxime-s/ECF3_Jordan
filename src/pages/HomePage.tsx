import  TopBar  from "../components/TopBar/TopBar"
import Header from "../components/Header/Header"
import Products from "../components/Products/Products"
import Footer from "../components/Footer/Footer"

export default function HomePage() {

    return (
        <div>
            <TopBar />
            <Header />
            <Products/>
            <Footer/>
        </div>
    )
}