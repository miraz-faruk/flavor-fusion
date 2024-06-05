import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types'

const Recipes = ({ handleAddToCooks }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);

    return (
        <div className="w-2/3 grid grid-cols-2 gap-6">
            {
                recipes.map(recipe => <Recipe
                    key={recipe.id}
                    recipe={recipe}
                    handleAddToCooks={handleAddToCooks}
                ></Recipe>)
            }
        </div>
    );
};

Recipes.propTypes = {
    handleAddToCooks: PropTypes.func
}
export default Recipes;