import Logo from "../../ui/Logo"
import Navbar from "./Navbar"
import TopBarIcons from "./TopBarIcons"

const TopBar = () => {
    return (
        <div className="flex items-center justify-between h-18 border">
            <Logo />
            <Navbar />
            <TopBarIcons />
        </div>
    )
}

export default TopBar