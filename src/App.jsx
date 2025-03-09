import './App.css'
import { useState } from 'react'

function App() {
//Aquí tu código
const[name,setName]=useState('Sofia'); //variables de estado name = Var setName = funcion que cambia valor de name
const[newName,setNewName]=useState('');

const teachers=['Data','Reyes','Yolanda'];

const changeName=(name)=>{
    setName(name);
};

return (
    <div>
        <h2>Teacher Name: {name}</h2>
        <ul>
            {teachers.map((teacher,ind)=>(
                <li key={ind} onClick={()=>changeName(teacher)}>
                    {teacher}
                </li>
            ))}
        </ul>
    </div>
);
//react necesita la key para identificar cada li 
}

export default App;
