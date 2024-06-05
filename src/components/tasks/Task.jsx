import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../../utils/axiosConfig';

function NewProjectForm() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleCreateTask = async () => {
    try {
      await instance.post('/projects/', {
        task: {
          name,
        },
        withCredentials: true,
      });
      navigate('/dashboard');
    } 
    
    catch (error) {
      console.error('Create project failed:', error);
    }
  };

  return (
    <div>
      <h2>New Project</h2>
      <input
        type="text"
        placeholder="Project Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
     <button onClick={handleCreateTask}>Create</button>
    </div>
  );
}

export default NewProjectForm;
