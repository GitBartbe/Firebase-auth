import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/HomePage/HomePage";
import { SignIn } from "./components/SignIn/SignIn";
import { SignUp } from "./components/SignUP/SignUp";


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element = {<SignUp />} />
      <Route path='/signin' element = {<SignIn />} />
      <Route path='home' element = {<HomePage />} />
      </Routes>
      
    </div>
  );
}

export default App;
