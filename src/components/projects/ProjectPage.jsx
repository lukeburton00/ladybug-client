import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import instance from '../../utils/axiosConfig';

function ProjectPage() {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

    useEffect(() => {
        const getProject = async () => {
            try {
                const response = await instance.get(`/projects/${id}`, {withCredentials: true});
                setData(response.data);
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
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            {data.project.name}
        </div>
    )
}

export default ProjectPage;
