import "./css/App.css";
import Favourite from './Pages/Favourite'
import Home from './Pages/Home';
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import { MovieProvider } from "./contexts/MovieContexts"; 


function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}
export default App;
