import BulletPoint from "../components/BulletPoint"
import TextBanner from "../components/TextBanner"

const HowTo = () => {
    return (
      <div>
        <TextBanner subtitle="How to Credit Card" title="Getting Started with your first credit card" />
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="mt-[4em] my-[2em] p-10 h-[60%] w-[90%] text-zinc-900 bg-rose-300 border-8 rounded-md border-rose-300 flex-col justify-start items-start inline-flex">
            <BulletPoint title="1. Understand the Basics:" 
            c1="- A credit card is like a loan from the bank that you need to repay later."
            c2="- Every month, you'll receive a statement showing your purchases, balance, and minimum payment due."
            c3="- Interest will be charged on the outstanding balance if you don't pay it off in full each month."
            />
            <BulletPoint title="2. Choose Wisely:"
            c1="- Before getting a credit card, compare offers from different banks to find the best terms, such as interest rates, rewards, and fees." 
            c2="- Consider your needs and spending habits to select a card that suits you best." c3="" />
            <BulletPoint title="3. Create a Budget:"  
            c1="- Set a monthly budget to track your spending and ensure you can pay off your credit card balance."
            c2="- Avoid spending more than you can afford to pay back."
            c3=""
            />
          </div>
          <div className="my-[2em] p-10 h-[60%] w-[90%] text-white bg-[#004879] border-8 rounded-md border-[#004879] flex-col justify-start items-start inline-flex" >
            <BulletPoint title="4. Pay on Time, Every Time:"
            c1="- Missing credit card payments can lead to late fees and damage your credit score."
            c2="- Set reminders or use automatic payments to avoid missing due dates."
            c3=""
            />
            <BulletPoint title="5. Pay in Full:"
            c1="- Always strive to pay the full balance on your credit card each month to avoid interest charges."
            c2="- If you can't pay the full balance, pay as much as you can to reduce interest costs."
            c3=""
            />
            <BulletPoint title="6. Understand Interest Rates:"
            c1="- Credit cards have an Annual Percentage Rate (APR) that determines the interest charged on outstanding balances."
            c2="- The APR can vary based on the type of transaction (e.g., purchases, cash advances) and your creditworthiness."
            c3=""
            />
          </div>
          <div className="mb-[4em] my-[2em] p-10 h-[60%] w-[90%] text-zinc-900 bg-rose-300 border-8 rounded-md border-rose-300 flex-col justify-start items-start inline-flex">
            <BulletPoint title="7. Limit Credit Utilization:"
            c1="- Try to keep your credit card balance below 30% of your credit limit."
            c2="- High credit utilization can negatively impact your credit score."
            c3=""
            />
            <BulletPoint title="8. Avoid Cash Advances:"
            c1="- Cash advances often have high-interest rates and additional fees."
            c2="- Only use them in emergencies and pay them back as soon as possible."
            c3=""
            />
            <BulletPoint title="9. Monitor Your Statements:"
            c1="- Regularly review your credit card statements to check for any errors or unauthorized charges."
            c2="- Report discrepancies to your bank immediately."
            c3=""
            />
          </div>
        </div>
      </div>
    )
  }
  
  export default HowTo
  