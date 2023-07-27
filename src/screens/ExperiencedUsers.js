import BulletPoint from "../components/BulletPoint"
import TextBanner from "../components/TextBanner"

const ExperiencedUsers = () => {
    return (
        <div>
        <TextBanner subtitle="Already has experience?" title="Mastering Credit Card Usage" />
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="mt-[4em] my-[2em] p-10 h-[60%] w-[90%] text-zinc-900 bg-rose-300 border-8 rounded-md border-rose-300 flex-col justify-start items-start inline-flex">
            <BulletPoint title="1. Understanding Your Credit Card:" 
            c1="- Review your credit card statement: Familiarize yourself with the key information on your credit card statement, such as the billing cycle, due date, minimum payment, and credit limit."
            c2="" c3=""
            />
            <BulletPoint title="2. Paying On Time and In Full:"
            c1="- Before getting a credit card, compare offers from different banks to find the best terms, such as interest rates, rewards, and fees." 
            c2="- Consider your needs and spending habits to select a card that suits you best." c3="" />
            <BulletPoint title="3. Credit Utilization:"  
            c1="- Keep credit utilization below 30%: To maintain a healthy credit score, aim to use no more than 30% of your credit limit. High utilization can negatively impact your credit rating."
            c2=""
            c3=""
            />
          </div>
          <div className="my-[2em] p-10 h-[60%] w-[90%] text-white bg-[#004879] border-8 rounded-md border-[#004879] flex-col justify-start items-start inline-flex" >
            <BulletPoint title="4. Be Mindful of Fees:"
            c1="- Avoid unnecessary fees: Be aware of fees such as annual fees, foreign transaction fees, and cash advance fees. Minimize their impact by choosing cards with no or low fees."
            c2=""
            c3=""
            />
            <BulletPoint  title="5. Monitoring Your Transactions:"
            c1="- Regularly review transactions: Keep track of your purchases and check your credit card statement to ensure accuracy and detect any unauthorized charges promptly."
            c2=""
            c3=""
            />
            <BulletPoint title="6. Credit Card Security:"
            c1="- Protect your card information: Never share your credit card details with anyone you don't trust, and be cautious when making online purchases.
            "
            c2="- Enable alerts: Set up transaction alerts to receive notifications for any activities on your card."
            c3=""
            />
          </div>
          <div className="mb-[4em] my-[2em] p-10 h-[60%] w-[90%] text-zinc-900 bg-rose-300 border-8 rounded-md border-rose-300 flex-col justify-start items-start inline-flex">
            <BulletPoint title="7. Rewards and Benefits:"
            c1="- Utilize rewards wisely: Take advantage of cashback, points, or miles rewards offered by your card. Redeem them regularly or save for bigger rewards."
            c2="- Explore card benefits: Check your card's perks, such as travel insurance, extended warranties, or purchase protection, and use them when applicable."
            c3=""
            />
            <BulletPoint title="8. Avoid Cash Advances:"
            c1="- Limit cash advances: Cash advances often come with high fees and interest rates. Try to avoid using your credit card for cash withdrawals unless absolutely necessary."
            c2=""
            c3=""
            />
            <BulletPoint title="9. Reviewing Your Credit Report:"
            c1="- Check your credit report annually: Obtain a free copy of your credit report from each of the three major credit bureaus (Equifax, Experian, and TransUnion) to ensure accuracy and identify any potential issues."
            c2=""
            c3=""
            />
          </div>
        </div>
      </div>
    )
}

export default ExperiencedUsers
