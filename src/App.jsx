import './App.css'
import Counter from './Country'
import Friends from './Students'
import Team from './Team'
import Users from './Users'


function App() {

  function handleClick (){
    alert('Button Clicked')
  }

  const handleClick2 = ()=>{
    alert('Button 2 Clicked')
  }

  const addToFive = (num)=>{
    alert(num+5)
  }
  return (
    <>
      <h3>React Core Concepts Part 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={()=>{alert('Third Clicked')}}>Third Click</button>
      <button onClick={()=> addToFive(3)}>Four</button>
    </>
  )
}

export default App
