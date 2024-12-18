import PropTypes from 'prop-types';

const Logout = ({ logoutHandler }) => (
  <div>
    <button data-testid="logoutButton" type="button" onClick={logoutHandler}>
      Logout
    </button>
  </div>
);

Logout.propTypes = {
  logoutHandler: PropTypes.func.isRequired,
};

export default Logout;
