import PropTypes from 'prop-types'
import Cook from '../Cook/Cook';

const Cooks = ({ cooks }) => {
    return (
        <div className="w-2/5 border rounded-2xl mb-8">
            <h2 className='text-center text-2xl font-semibold border-b-2 pb-4 mx-16 mt-8'>Want to cook: {cooks.length}</h2>
            {cooks.length > 0 && (
                <table className='table-fixed my-4 mt-6 text-[#878787] w-full'>
                    <thead>
                        <tr className='flex justify-between px-6'>
                            <th className='w-1/4'>Name</th>
                            <th className='w-1/4'>Time</th>
                            <th className='w-1/4'>Calories</th>
                            <th className='w-1/4'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cooks.map((cook, index) => (
                            <Cook key={index} cook={cook} index={index + 1}></Cook>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

Cooks.propTypes = {
    cooks: PropTypes.array.isRequired
}
export default Cooks;