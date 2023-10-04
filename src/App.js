import './App.css';
import './lookGood.css';
import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Outlet/>
      {/* <Link to={"/home"} className='flex justify-self-center text-center fixed top-[50%] left-[46%] text-sky-500 font-extrabold'>Link to Home</Link> */}
    </div>
  );
}

export default App;
