import { links } from "../../data/NavbarLinks"

const Navbar = () => {
    return (
        <nav >
            <ul className='flex items-center gap-8'>
                {
                    links.map((link) => (
                        <li>
                            <a href="">
                                {link.label}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar