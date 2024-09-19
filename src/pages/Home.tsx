import { useState } from "react"
import HeroBanner from "../Components/HeroBanner"
import SearchExcercises from "../Components/SearchExcercises"
import Excercises from "../Components/Excercises"

const Home = () => {
  return (
    <div>
      <HeroBanner/>
      <SearchExcercises/>
      <Excercises/>
    </div>
  )
}

export default Home
