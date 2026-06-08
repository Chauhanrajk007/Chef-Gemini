import React from "react"
export default function Main(){
  const [ingredients,setIngredients]=React.useState([])
  const ingredientsListItems = ingredients.map(ingredients=>(<li key={ingredients}>{ingredients}</li>))
  function handleSubmit(event)
  {
    event.preventDefault()
    const formData=new FormData(event.currentTarget)
    const newIngredient=formData.get("ingredient")
    setIngredients(ingredients=>[...ingredients,newIngredient])
    event.currentTarget.reset()
  }
return (
  <main>
    <form onSubmit={handleSubmit}>
      <input  type="text" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient"/>
      <button>Add ingredient</button>
    </form>
    <ul>
      {ingredientsListItems}
    </ul>
  </main>
)
}
