export default function Main(){
  const ingredients=[]
  const ingredientsListItems = ingredients.map(ingrdients=>(<li key={ingredient}>{ingredient}</li>li>))
  function handleSubmit(event)
  {
    event.preventDefault()
    const formData=new FormData(event.currentTarget)
    const newIngredient=formData.get("ingredient")
    ingredients.push(newIngredient)
  }
return (
  <main>
    <form onSubmit={handleSubmit}>
      <input  type="text" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient"/>
      <button>Add ingredient</button>
    </form>
  </main>
)
}
