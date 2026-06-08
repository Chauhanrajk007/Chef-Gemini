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
    {if(ingredientsListItems.length>0)
    &&
    <section>
      <h2>Ingredients on hand:</h2>
      <ul>
      {ingredientsListItems}
      </ul>
      <div className="box">
          <div>
              <h3>Ready for a recipe</h3>
              <p>Generate a recipe from your list of ingredients</p>
          </div>
          <button>Get a recipe</button>
       </div>
    </section>
    }
    
  </main>
)
}
