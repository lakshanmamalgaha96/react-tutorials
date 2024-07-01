import './App.css';
import Conditions from './day3/conditions'
import UseStateHook from './day3/use-state-hook'
function App() {

  // console.log("I am console")
  // console.error("I am error")
  // console.warn("I am console",3,[1,2,3])

  function clickMe(name) {
    console.log("I am clicked", name)
  }


  return (
    <div className="App" style={{ color: "red" }}>
      <header className="App-header">
        {/* <button onClick={()=>clickMe(3)}>Click me</button> */}
        {/* <Conditions value={20}/> */}
        <UseStateHook />
      </header>
    </div>
  );
}

export default App;
