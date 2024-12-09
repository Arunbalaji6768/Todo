import React,{ useState,useEffect } from "react"
function App(){
  const [task,settask]=useState('')
  const [todo,settodo]=useState(['Ronaldo','bellingoal'])
function createtodo(){
  settodo(oldtodo=>{
    return[...oldtodo,task]
  })

}
return<div>
  <h1>Todo app</h1>
  <input type='text' valuee={task} onChange={e=>{
    settask(e.target.value)

  }}/>
  <button onClick={createtodo}>Create</button>


  <ul>
    {todo.map(todo=>{
      return<li>{todo}</li>
    })}
  </ul>
</div>
}
export default App
