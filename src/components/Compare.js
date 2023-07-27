import Card from "../components/Card"
import rcard from "../assets/card-red.svg"
import bcard from "../assets/card-blue.svg"
import Check from "../components/Check"
import Info from "../components/Info.js"
import pcard from "../assets/pcard.svg"
import vcard from "../assets/vcard.svg"
import web from "../assets/web.svg"
import safe from "../assets/safe.svg"
import wireless from "../assets/wireless.svg"
import diamond from "../assets/diamond.svg"
import bank from "../assets/bank.svg"
import stats from "../assets/stats.svg"
import mobile from "../assets/mobile.svg"
import money from "../assets/money.svg"

const Compare = () => {
  return (
    <div className="w-[100%] cursor-pointer">
      <div className="flex">
        <div className="w-[35%] lg:block hidden"></div>
        <div className="lg:w-[50%] w-[80%] flex justify-between items-center py-6 m-auto">
          <Card pic={rcard} demo="Students" text="Until you graduate" price="$0" />
          <Card pic={bcard} demo="Prime" text="But with a lot of benefits" price="$40" />
        </div>
      </div>
      <table className="lg:w-[90%] w-[100%] py-4 m-auto">
        <tr className="border-b border-gray-200">
          <th className="text-left lg:pl-[5em] pl-4 lg:w-[35%] w-[70%] pb-4">Credit Card</th>
          <th className="lg:w-[30%] w-[15%]"></th>
          <th className="lg:w-[30%] w-[15%]"></th>
        </tr>
        <tr className="border-y border-gray-200 text-center py-2">
          <td><Info icon={pcard} title="Physical Card" text="For everyday use" /></td>
          <td><Check /></td>
          <td><Check /></td>
        </tr>
        <tr className="text-center border-y border-gray-200">
          <td><Info icon={money} title="Mobile Payments" text="For when you forget your wallet" /></td>
          <td><Check /></td>
          <td><Check /></td>
        </tr>
        <tr className="text-center border-y border-gray-200">
          <td ><Info icon={wireless} title="Contactless Payments" text="Who needs a chip anyway?" /></td>
          <td><Check /></td>
          <td><Check /></td>
        </tr>
      </table>
      <div className="h-[3em]" ></div>
      <table className="lg:w-[90%] w-[100%] m-auto">
        <tr className="border-b border-gray-200">
          <th className="text-left lg:pl-[5em] pl-4 lg:w-[35%] w-[70%] pb-4">Bank Account</th>
          <th className="lg:w-[30%] w-[15%]"></th>
          <th className="lg:w-[30%] w-[15%]"></th>
        </tr>
        <tr className="border-y border-gray-200 text-center py-2">
          <td><Info icon={web} title="Free Payments Worldwide" text="No extra fees" /></td>
          <td><Check /></td>
          <td><Check /></td>
        </tr>
        <tr className="text-center border-y border-gray-200">
          <td><Info icon={bank} title="Credit Line Limit" text="Try to limit to 50% usage" /></td>
          <td>$ 10,000</td>
          <td>$ 10,000</td>
        </tr>
        <tr className="text-center border-y border-gray-200">
          <td><Info icon={stats} title="Annual Interest Rate" text="Also known as APR" /></td>
          <td>10% - 12%</td>
          <td>10%</td>
        </tr>
      </table>
      <div className="h-[3em]" ></div>
      <table className="lg:w-[90%] w-[100%] m-auto">
        <tr className="border-b border-gray-200">
          <th className="text-left lg:pl-[5em] pl-4 lg:w-[35%] w-[70%] pb-4">Extra Features</th>
          <th className="lg:w-[30%] w-[15%]"></th>
          <th className="lg:w-[30%] w-[15%]"></th>
        </tr>
        <tr className="text-center border-y border-gray-200">
          <td><Info icon={money} title="Deffered Payment Plans" text="For when your budget is tight" /></td>
          <td>3, 6, 9 months</td>
          <td>-</td>
        </tr>
        <tr className="text-center border-y border-gray-200">
          <td><Info icon={safe} title="Balance Transfer" text="For when your budget is tight" /></td>
          <td><Check /></td>
          <td><Check /></td>
        </tr>
        <tr className="text-center border-y border-gray-200">
          <td><Info icon={stats} title="Advanced Statistics" text="Know how you can improve your credit" /></td>
          <td><Check /></td>
          <td><Check /></td>
        </tr>
        <tr className="text-center border-y border-gray-200">
          <td className="lg:w-[35%] w-[40%]"><Info icon={diamond} title="Personalized Offers" text="Tailored towards your preferences" /></td>
          <td><Check /></td>
          <td><Check /></td>
        </tr>
        <tr className="text-center border-y border-gray-200">
          <td className="lg:w-[35%] w-[40%]"><Info icon={mobile} title="Exclusive Offers" text="For our partner HSI and HBCU institutions" /></td>
          <td><Check /></td>
          <td>-</td>
        </tr>
      </table>
      <div className="h-[5em]" ></div>
    </div>
  )
}

export default Compare
