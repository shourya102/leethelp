import './App.css';
import'./components/sidebar/Sidebar'
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <Footer></Footer>
    </div>
  );
}

export default App;
