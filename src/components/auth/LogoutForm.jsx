import { useNavigate } from 'react-router-dom';
import instance from '../../utils/axiosConfig';

function LogoutForm() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await instance.post('/api/auth/logout');
      navigate('/');
    } 
    
    catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <button class="btn btn-primary" onClick={handleLogout}>Log Out</button>
  );
}

export default LogoutForm;