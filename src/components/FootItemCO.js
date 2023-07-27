import { Link } from "react-router-dom"

const FootItemCO = ({title, path}) => {
    return (
        <a href={path} target="_blank" className="text-zinc-900 text-opacity-50 lg:text-base text-sm font-medium leading-relaxed cursor-pointer">
            {title}
        </a>
    )

}  

export default FootItemCO