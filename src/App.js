import './App.css';
import MainScreen from './components/MainScreen/MainScreen';
import SideScreen from './components/SideScreen/SideScreen';

function App() {
  return (
    <div className="App">
      <div style={{width:"70%"}}>
        <MainScreen />
      </div>
      <div style={{backgroundColor:"#fbf9f4", width:"30%", height: "100vh"}}>
       <SideScreen />
      </div>
    </div>
  );
}

export default App;
