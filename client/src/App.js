
// import logo from './IMG/redlogo.png';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Book from './Pages/Book/Book';
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
    <Routes>
      
        {/* <Routes> */}
        <Route path="/book" element={<Book />}/>
        <Route path="/" element={<Home />} />
    </Routes>
    </div>
  );
}

export default App;















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
