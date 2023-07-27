import NavItem from "./NavItem"
import logo from "../assets/co-logo.svg"

const Navbar = () => {
  return (
    <div className="w-[100%] flex justify-between items-center h-[20%] text-center cursor-default p-3">
      <img className="w-[20%] lg:w-[10%]" src={logo} />
      <div className="flex lg:w-[40%] w-[90%] justify-between items-center">
        <NavItem path="/" title="Compare" />
        <NavItem path="/how-to" title="How to Credit Card" />
        <NavItem path="/experienced" title="Experienced Users" />
      </div>
      <div className="lg:w-[20%] lg:flex hidden items-center justify-around">
        <div className="text-red-600 text-lg font-bold">
          Log in
        </div>
        <div className="text-white text-center text-[15px] font-medium w-[135px] h-[39px] px-4 py-3 bg-red-600 rounded-md justify-center items-center gap-2.5 inline-flex">
          Open Account
        </div>
      </div>
    </div>
  )
}

export default Navbar
