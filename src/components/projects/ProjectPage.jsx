import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import instance from '../../utils/axiosConfig';

function ProjectPage() {
  const [project, setProject] = useState('');
  const [tasks, setTasks] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

    useEffect(() => {
        const getProject = async () => {
            try {
                const response = await instance.get(`/projects/${id}`, {withCredentials: true});
                setProject(response.data);
                console.log(response.data);
            }
      
            catch (error) {
                setError(error);
            }
        };

        const getTasks = async () => {
            try {
                const response = await instance.get(`/projects/${id}/tasks`, {withCredentials: true});
                setTasks(response.data);
                console.log(response.data);
            }

            catch (error) {
                setError(error);
            }
      
            finally {
                setLoading(false);
            }
        }
    
        getProject();
        getTasks();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div class="container m-5">
            <h1 class="display-5"> {project.project.name}</h1>
            <h1 class="display-5"> {tasks.tasks[0]}</h1>
        </div>
    )
}

export default ProjectPage;
