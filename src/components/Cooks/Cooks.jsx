import PropTypes from 'prop-types'

const Cooks = ({ cooks }) => {
    return (
        <div className="w-1/3 border">
            <h2>Currently cooking: {cooks.length}</h2>
        </div>
    );
};

Cooks.propTypes = {
    cooks: PropTypes.object
}
export default Cooks;