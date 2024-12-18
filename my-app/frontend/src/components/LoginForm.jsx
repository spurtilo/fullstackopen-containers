import { useState } from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({ authenticateUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    authenticateUser({
      username,
      password,
    });

    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            value={username}
            name="Username"
            id="Username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            value={password}
            name="Password"
            id="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  authenticateUser: PropTypes.func.isRequired,
};

export default LoginForm;
