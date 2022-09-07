import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import CoinPage from "./pages/CoinPage";	

function App() {
  return (
    <BrowserRouter>
      <Header />
    <Routes>

      <Route path="/" exact component={Homepage} />
      <Route path="/coins/:id" exact component={CoinPage} />
  
    
    </Routes>

    </BrowserRouter>
   
  )
}

export default App;
