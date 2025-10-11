import './App.css';
import Sidebar from './Components/Sidebar';
import Homepage from './Pages/Homepage';
import BottomDock from './Components/BottomDock.jsx';

function App() {
  return (
    <div className='animate-fade'>
      {/* <Sidebar/> */}
      {/* <BottomDock/> */}
      <Homepage/>   
      {/* <ScrollBtn/> */}
    </div>
  );
}

export default App;
