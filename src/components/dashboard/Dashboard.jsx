import { useEffect, useState } from 'react'
import axios from 'axios';
import LogoutForm from '../auth/LogoutForm';
function Dashboard() {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Dashboard');
    const getProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/projects/', {withCredentials: true});
        setData(response.data);
        console.log(response.data);
      }
      
      catch (error) {
        setError(error);
      }
      
      finally {
        setLoading(false);
      }
    }
    
    getProjects();
  }, []);
  
  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
      <LogoutForm />
    </div>
  );
}

export default Dashboard;