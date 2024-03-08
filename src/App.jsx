
import './App.css'
import Counter from './counter'
import Team from './team'
import User from './User'
import Friend from './Friend'



function App() {

  function handleClick() {
    alert('button Click')
  }

  const handleClick2 = () => {
    alert('button click 2')
  }

  const addToFive = (num) => {
    alert(num + 5)
  }
  return (
    <>
      <h3>Rect core concept 2</h3>


   
      <Friend></Friend>
     <User></User>

     
      <Team></Team>
      <Counter></Counter>


      {/* <button onclick="handleClick()">Click me</button> */}
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => { alert('theird clicked') }}>Third</button>

      {/* bajeilla */}
      {/* <button onClick={addToFive(5)}>four</button> */}
      <button onClick={() => addToFive(5)}>four</button>

    </>
  )
}

export default App
