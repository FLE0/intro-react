import {useState} from 'react';

export function ButtonAdd({parameterButtonAdd}) {


 const [nouveauTodo, setNouveauTodo] = useState("");

  const handleSubmit = (event) => {
  event.preventDefault();
  parameterButtonAdd(nouveauTodo);
  setNouveauTodo("")
  
}
const handleChange = (event) => {
  setNouveauTodo(event.target.value)
  
}

return(

  <div >
    <form action="submit" className="card" onSubmit={handleSubmit}>
      <input
        value={nouveauTodo}
        type="text" 
        placeholder="Que faire ?"
        onChange={handleChange}
      />
      <button>Ajouter un objectif</button>
    </form>
   
  </div>
  )
}

