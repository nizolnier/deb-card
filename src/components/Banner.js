import cards from "../assets/cards.svg"

const Banner = () => {
  return (
    <div className="h-[30%] bg-[#A0D9FF] flex justify-around pt-6 cursor-default">
      <div className="w-[40%] justify-center flex flex-col ml-4">
        <h1 className="h-[60%] font-semibold text-zinc-900 lg:mt-[1em] lg:text-[5rem] text-xl">SuperOpp</h1>
        <h3 className="h-[50%] text-zinc-900 lg:text-[2rem] mb-[1.5em] text-sm">The ideal card for you</h3>
      </div>
      <div className="w-[40%]">
        <img className="w-[100%]" src={cards} />
      </div>
    </div>
  )
}

export default Banner

