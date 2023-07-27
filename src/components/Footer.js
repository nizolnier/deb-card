import logo from "../assets/co-logo.svg"
import FootItem from "./FootItem"
import FootItemCO from "./FootItemCO"

const Footer = () => {
  return (
    <div className="flex h-[20%] justify-around p-[5em] border-t border-gray-200">
      <div>
        <img className="w-[70%]" src={logo} />
      </div>
      <div className="flex flex-col w-[20%]">
        <h1 className="text-zinc-900 text-lg font-medium pb-3">About</h1>
        <FootItem title="Features" path="/" />
        <FootItem title="Pricing" path="/" />
        <FootItem title="Support" path="/how-to" />
      </div>
      <div className="flex flex-col w-[20%]">
        <h1 className="text-zinc-900 text-lg font-medium pb-3">Blog</h1>
        <FootItemCO title="Products" path="https://www.capitalone.com/credit-cards/" />
        <FootItemCO title="Technology" path="https://www.capitalone.com/tech/" />
        <FootItemCO title="Crypto" path="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
      </div>
      <div className="flex flex-col w-[20%]">
        <h1 className="text-zinc-900 text-lg font-medium pb-3">Social Media</h1>
        <FootItemCO title="Twitter" path="https://twitter.com/CapitalOne" />
        <FootItemCO title="Instagram" path="https://www.instagram.com/capitalone" />
        <FootItemCO title="LinkedIn" path="https://www.linkedin.com/company/capital-one/" />
      </div>
    </div>
  )
}

export default Footer
