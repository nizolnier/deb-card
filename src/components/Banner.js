import cards from "../assets/cards.svg"

const Banner = () => {
  return (
    <div className="h-[30%] bg-[#A0D9FF] flex justify-around pt-6 cursor-default">
      <div className="w-[40%] flex flex-col items-center justify-center mb-6 ml-4">
        <h1 className="text-zinc-900 text-[5rem] flex self-start">SuperOpp</h1>
        <h3 className="text-zinc-900 text-[2rem] flex self-start">The ideal card for you</h3>
      </div>
      <div className="w-[40%]">
        <img className="w-[100%]" src={cards} />
      </div>
    </div>
  )
}

export default Banner

