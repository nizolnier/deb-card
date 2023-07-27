import { Link } from "react-router-dom"

const NavItem = ({title, path}) => {
    return (
        <Link to={path} className="p-3 text-zinc-900 lg:text-base text-sm font-medium hover:bg-stone-50 hover:rounded-md cursor-pointer">
            {title}
        </Link>
    )

}  

export default NavItem