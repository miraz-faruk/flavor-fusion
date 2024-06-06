import PropTypes from 'prop-types'

const Cook = ({ cook, index, handleAddToCurrentlyCooking }) => {
    const { recipe_name, preparing_time, calories } = cook;
    return (
        <tr className='flex justify-between bg-[#28282808] py-5 px-6 items-center'>
            <td className='text-[#282828CC] font-semibold'>{index}</td>
            <td className='w-1/5'>{recipe_name}</td>
            <td className='w-1/5'>{preparing_time}</td>
            <td className='w-1/5'>{calories}</td>
            <td className='w-1/5'>
                <button onClick={() => handleAddToCurrentlyCooking(cook)} className='bg-[#0BE58A] border-none rounded-full text-lg font-medium px-4 py-2 text-black hover:bg-slate-100'>Preparing</button>
            </td>
        </tr>
    );
};

Cook.propTypes = {
    cook: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleAddToCurrentlyCooking: PropTypes.func.isRequired
}

export default Cook;