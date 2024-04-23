import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../../utils/axiosConfig';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await instance.post('/auth/register', {
        user: {
          email,
          password,
          password_confirmation
        },
        withCredentials: true,
      });
      navigate('/dashboard');
    } 
    
    catch (error) {
      console.error('Register failed:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    <input
        type="password"
        placeholder="Password Confirmation"
        value={password_confirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
    />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default RegisterPage;