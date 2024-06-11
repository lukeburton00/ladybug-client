import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import instance from '../../utils/axiosConfig';
import { DragDropContext } from 'react-beautiful-dnd';

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
        };
    
        getProject();
        getTasks();
    }, [id]);

    const handleCreateTask = async () => {
      navigate(`/projects/${id}/create-task`);  
    };

    const handleDeleteTask = async (taskId) => {
        try {
            await instance.delete(`/projects/${id}/tasks/${taskId}`, {withCredentials: true});
            var response = await instance.get(`/projects/${id}`, {withCredentials: true});
            setProject(response.data);
            response = await instance.get(`/projects/${id}/tasks`, {withCredentials: true});
            setTasks(response.data);
            navigate(`/projects/${id}/`);
        }
    
        catch (error) {
            console.error('Delete task failed:', error);
        }
      };

    const onDragEnd = (result) => {
        console.log("Drag End");
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const tasksList = tasks.tasks.map((task) => {
        return (
            <div class="row p-3">
                <div class="w-25 p-2 rounded shadow">
                    <p>{task.title}</p>
                    <button class="btn btn-danger m-1" onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    <button class="btn btn-primary m-1" onClick={() => handleNavigateToTask(task.id)}>Open</button>
                </div>
            </div>
        )
    })

    return (
            <div class="container m-5">
                <h1 class="display-5"> {project.project.name}</h1>
                <h4 class="">{tasksList}</h4>
                <button class="btn btn-primary w-25 shadow-lg rounded" onClick={handleCreateTask}>Create Task</button>
            </div>
    )
}

export default ProjectPage;
