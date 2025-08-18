import{Route, Routes} from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'

import Account from "./assets/pages/Account";
import Home from "./assets/pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Signin from "./assets/pages/Signin";

function App() {
 

  return (
    <>
        <AuthContextProvider>
    <Navbar/>
   
             <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/account" element={<Account/>}/>
             </Routes>
        </AuthContextProvider>
        
    </>
  )
}

export default App
