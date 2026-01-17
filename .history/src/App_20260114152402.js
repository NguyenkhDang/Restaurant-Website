import BackgroundImage from "./image/pho.jpg"
import './App.css';
import NavigationBar from './NavigationBar';
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <img 
        src={BackgroundImage}
        style={{width: "100vw", height:"20vh"}}/>
    </div>
  );
}

export default App;
