import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import instance from '../../utils/axiosConfig';

function NewTaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [external_link, setLink] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const handleCreateTask = async () => {
    try {
      await instance.post(`/projects/${id}/tasks`, {
        task: {
          title,
          description,
          external_link,
          status: 'to_do'
        },
        withCredentials: true,
      });
      navigate(`/projects/${id}`);
    } 
    
    catch (error) {
      console.error('Create task failed:', error);
    }
  };

  return (
    <div>
      <h2>New Task</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="text"
        placeholder="External Link"
        value={external_link}
        onChange={(e) => setLink(e.target.value)}
      />
     <button onClick={handleCreateTask}>Create</button>
    </div>
  );
}

export default NewTaskForm;