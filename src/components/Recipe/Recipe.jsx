import PropTypes from 'prop-types'
import './Recipe.css'

const Recipe = ({ recipe, handleAddToCooks }) => {
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;
    return (
        <div className="card border p-6">
            <figure className="mb-6">
                <img src={recipe_image} alt="Shoes" className="rounded-2xl " />
            </figure>
            <div>
                <h2 className="card-title mb-4">{recipe_name}</h2>
                <p className='text-[#878787] mb-4'>{short_description}</p>
                <div className='border-t-2 mb-4'>
                    <h2 className='mt-6 mb-4 text-lg font-medium'>Ingredients: {ingredients.length}</h2>
                    <ul className='circle-bullets text-[#878787]'>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <div className='flex justify-between border-t-2 pt-6 text-[#282828CC] mb-7'>
                    <div className='flex items-center gap-3'>
                        <i className="fa-regular fa-clock"></i>
                        <p>{preparing_time}</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <i className="fa-solid fa-fire-flame-curved"></i>
                        <p>{calories}</p>
                    </div>
                </div>
                <div className="card-actions">
                    <button onClick={() => handleAddToCooks(recipe)} className="bg-[#0BE58A] border-none rounded-full text-lg font-medium px-6 py-3 text-black mr-8 hover:bg-slate-100">Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleAddToCooks: PropTypes.func
}
export default Recipe;