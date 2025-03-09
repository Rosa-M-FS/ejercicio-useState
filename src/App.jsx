import './App.css'
import { useState } from 'react'

function App() {
//Aquí tu código
const[name,setName]=useState('Sofia'); //variables de estado name = Var setName = funcion que cambia valor de name
const[newName,setNewName]=useState('');

const teachers=['Data','Reyes','Yolanda'];

const changeName=()=>{
    if(newName.trim())
    setName(newName);//cambio el nombre de name con el newname
    setNewName('');
};
/* onsubmit = action="/nuevonombre Method= post" se gestiona solo desde react */
/*preventDefault evita que el form se recargue */
/**onchange se dispara cada vez que se escribe o borra algo(cada vez que el campo de entrada cambia) */
return (
    <div>
        <h2>Teacher Name: {name}</h2>
        
        <form onSubmit={(event) =>{
            event.preventDefault(); changeName();
        }}>
            <input type="text" name="newName" id="newName" value={newName} placeholder='add name' onChange={(event)=>setNewName(event.target.value)}/>
            <button type='submit'>Add</button>
        </form>

        <ul>
            {teachers.map((teacher,ind)=>(
                <li key={ind} onClick={()=>setName(teacher)}>
                    {teacher}
                </li>
            ))}
        </ul>
    </div>
);
//react necesita la key para identificar cada li 
}

export default App;
