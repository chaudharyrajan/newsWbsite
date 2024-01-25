import { useState } from 'react'
import NavBar from './newBar'
import NewsBoard from './newsBorad'


export const App = () => {
  const [category,setCategory] =useState("general")
   return (
    <div>
      <NavBar setCategory={setCategory}/>
      <NewsBoard  category={category}/>
    </div>
  )
}
export default App
