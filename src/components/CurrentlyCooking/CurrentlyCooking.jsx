import PropTypes from 'prop-types'

const CurrentlyCooking = ({ currentlyCooking }) => {

    const totalTime = currentlyCooking.reduce((sum, cook) => sum + parseInt(cook.preparing_time, 10), 0);
    const totalCalories = currentlyCooking.reduce((sum, cook) => sum + parseInt(cook.calories, 10), 0);

    return (
        <div className="border rounded-2xl">
            <h2 className='text-center text-2xl font-semibold border-b-2 pb-4 mx-16 mt-8'>Currently Cooking: {currentlyCooking.length}</h2>
            {currentlyCooking.length > 0 && (
                <table className='table-fixed my-4 mt-6 text-[#878787] w-full'>
                    <thead>
                        <tr className='flex justify-between px-6 mb-4'>
                            <th className='w-1/4'>Name</th>
                            <th className='w-1/4'>Time</th>
                            <th className='w-1/4'>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentlyCooking.map((cook, index) => (
                            <tr key={index} className='flex justify-between bg-[#28282808] py-5 px-6 items-center'>
                                <td className='w-1/4text-[#282828CC] font-semibold'>{index + 1}</td>
                                <td className='w-1/4'>{cook.recipe_name}</td>
                                <td className='w-1/4'>{cook.preparing_time}</td>
                                <td className='w-1/4'>{cook.calories}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className='flex justify-between bg-[#28282808] py-5 px-6 items-center'>
                            <td className='w-1/5'></td>
                            <td className='w-1/5'></td>
                            <td className='w-1/5 font-semibold'>Total time = {totalTime} minutes</td>
                            <td className='w-1/5 font-semibold'>Total calories = {totalCalories} calories</td>
                        </tr>
                    </tfoot>
                </table>
            )}
        </div>
    );
};

CurrentlyCooking.propTypes = {
    currentlyCooking: PropTypes.array.isRequired
}

export default CurrentlyCooking;