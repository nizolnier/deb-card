const Card = ({ pic, demo, price, text }) => {
    return <div className="flex flex-col justify-around items-center  lg:w-[70%] w-[40%] cursor-default">
        <h3 className="pb-2 text-center text-zinc-900 text-xl font-medium leading-normal">{demo}</h3>
        <h1 className="flex items-center pb-2 text-center text-zinc-900 text-[40px] font-bold leading-10 lg:ml-[1.8em] ml-[1.5em]">{price} <p className="pl-2 text-center text-zinc-900 text-opacity-50 text-sm font-medium leading-snug">Annual Fee</p></h1>
        <p className="pb-2 text-center text-zinc-900 text-opacity-50 text-sm font-medium leading-snug">{text}</p>
        <img src={pic} />
        <div className="mt-2 text-white text-sm w-[78%] h-[39px] px-4 py-3 bg-red-600 rounded-md text-center justify-center items-center gap-2.5 inline-flex">Get Started</div>
    </div>
}

export default Card