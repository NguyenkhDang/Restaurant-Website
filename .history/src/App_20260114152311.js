import BackgroundImage from "./image/pho.jpg"
import './App.css';
import NavigationBar from './NavigationBar';
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <img src={BackgroundImage}/>
    </div>
  );
}

export default App;
