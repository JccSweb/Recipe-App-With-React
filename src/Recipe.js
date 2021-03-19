import React from "react"

//Custom css
import style from "./recipe.module.css"

const Recipe = (prop) => {
    prop.ingredients.map(ingredient => console.log(ingredient))
    return (
        <div className={style.recipe}>
            <h1 >{prop.title}</h1>
            <p>{prop.calories}</p>
            <img className={style.image} src={prop.image} alt="" />
            <ul>
                {prop.ingredients.map((ingredient) => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default Recipe