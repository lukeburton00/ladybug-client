import { useEffect, useState } from 'react'
import instance from '../../utils/axiosConfig';
import { useNavigate } from 'react-router-dom'
import LogoutForm from '../auth/LogoutForm';
function Dashboard() {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await instance.get('/projects/', {withCredentials: true});
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

    const handleCreateProject = async () => {
        navigate('/create-project');        
    }

    const handleDeleteProject = async (projectId) => {
        try {
            await instance.delete(`/projects/${projectId}`);
            const response = await instance.get('/projects/', {withCredentials: true});
            setData(response.data);
            navigate('/dashboard');
        }

        catch (error) {
            console.log(error);
        }

    }
    
    const handleNavigateToProject = async (projectName) => {
        try {
            navigate(`/projects/${projectName}`);
        }

        catch (error) {
            console.log(error);      
        }
    }


  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div class="container">
      <div>
        <h1 class="py-5 my-2">Projects</h1>
        {data.projects.map(project => 
            <div class="row p-3">
                <div class="w-25 p-2 rounded shadow">
                    <p class="fw-bold">{project.name}</p>
                    <button class="btn btn-danger m-1" onClick={() => handleDeleteProject(project.id)}>Delete</button>
                    <button class="btn btn-primary m-1" onClick={() => handleNavigateToProject(project.id)}>Open</button>
                </div>
            </div>
        )}
        <div class="row p-3">
            <button class="btn btn-primary w-25 shadow-lg rounded" onClick={handleCreateProject}>Create Project</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
