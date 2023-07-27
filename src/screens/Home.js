import { useState } from "react"
import Banner from "../components/Banner"
import Compare from "../components/Compare"
import Modal from "../components/Modal"

const Home = () => {
  const [close, setClose] = useState(true)
  return (
    <div>
      <Modal close={close} setClose={setClose} />
      <Banner />
      <Compare />
    </div>
  )
}

export default Home
