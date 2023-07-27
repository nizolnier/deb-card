import logo from "../assets/co-logo.svg"
import FootItem from "./FootItem"
import FootItemCO from "./FootItemCO"

const Footer = () => {
  return (
    <div className="flex h-[20%] justify-around lg:p-[5em] p-[1em] pt-[2em] w-full border-t border-gray-200">
      <div className="w-[20%]">
        <img className="w-[100%]" src={logo} />
      </div>
      <div className="flex flex-col lg:w-[20%] w-[25%]">
        <h1 className="text-zinc-900 lg:text-lg text-base font-medium pb-3">About</h1>
        <FootItem title="Features" path="/" />
        <FootItem title="Pricing" path="/" />
        <FootItem title="Support" path="/how-to" />
      </div>
      <div className="flex flex-col lg:w-[20%] w-[25%]">
        <h1 className="text-zinc-900 lg:text-lg text-base font-medium pb-3">Blog</h1>
        <FootItemCO title="Products" path="https://www.capitalone.com/credit-cards/" />
        <FootItemCO title="Technology" path="https://www.capitalone.com/tech/" />
        <FootItemCO title="Crypto" path="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
      </div>
      <div className="flex flex-col lg:w-[20%] w-[25%]">
        <h1 className="text-zinc-900 lg:text-lg text-base font-medium pb-3">Social Media</h1>
        <FootItemCO title="Twitter" path="https://twitter.com/CapitalOne" />
        <FootItemCO title="Instagram" path="https://www.instagram.com/capitalone" />
        <FootItemCO title="LinkedIn" path="https://www.linkedin.com/company/capital-one/" />
      </div>
    </div>
  )
}

export default Footer
