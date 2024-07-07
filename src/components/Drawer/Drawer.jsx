import './Drawer.css';
import { useState, useContext } from 'react';

// Todo Context
import { TodosContext } from '../../utils/TodosContext';

const Drawer = ({ isOpen, onClose }) => {
  const [category, setCategory] = useState('Actual Work');
  const [showAttachment, setShowAttachment] = useState(true);
  const [goalText, setGoalText] = useState('');
  const { addTodo } = useContext(TodosContext);

  const handleButtonClick = () => {
    if (category === 'Actual Work') {
      setCategory('X Points');
      setShowAttachment(false);
    } else {
      setCategory('Actual Work');
      setShowAttachment(true);
    }
  };

  const handleSaveGoal = () => {
    if (goalText.trim()) {
      addTodo(goalText, category);
      setGoalText('');
      onClose();
    }
  };

  return (
    <div className={`drawer--container ${isOpen ? 'open' : ''}`}>
      <div className='drawer--left'>
        <button className='drawer--close' onClick={onClose}>
          <img src="/icons/drawerClose.svg" alt="Close" />
        </button>
      </div>
      <div className='drawer--right'>
        <div className='right--top'>
          <div className="goal--setting">
            <button className='check'></button>
            <input 
              value={goalText}
              onChange={(e) => setGoalText(e.target.value)}
            />
            <button className='category' onClick={handleButtonClick}>{category}</button>
          </div>
          <div className='goal--assignee'>
            <div><p>Assignee :</p> <span>Maya AB</span></div>
            <div><p>Goal Setter :</p> <span>23 (This Setter)</span></div>
          </div>
          <textarea placeholder='Goal Description' />
          {showAttachment && <div className='attachment'><p>Goal Attachment</p></div>}
        </div>
        <div className='right--bottom'>
          <button className='cancel--goal' onClick={onClose}>Cancel</button>
          <button className='save--goal' onClick={handleSaveGoal}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
