import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import City from "./assets/melmel.jpg";
import './assets/cemporcento.css'
import ManageData from "./components/ManageData.jsx";
import ListRender from "./components/ListRender.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div >
           <h1>Avançado em React</h1>
       {/*   imagem em asset */}
           <img src="/mel.jpg" alt="Mel gostosa" width={600}/>

           {/*    img em asset*/}
           <br/>

           <div>
               <img src={City} className={"cem"}   alt=""/>
           </div>

           <ManageData/>

           <ListRender/>
       </div>
    </>
  )
}

export default App
