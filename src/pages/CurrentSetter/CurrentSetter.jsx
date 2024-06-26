import './CurrentSetter.css';

//assets
import chart from '../../images/chart.svg'

//react hooks
import { useOutletContext } from 'react-router-dom';

//components
import Xpoints from "../../components/Xpoints/Xpoints";

const CurrentSetter = () => {
  const { openDrawer } = useOutletContext();

  return (
    <div className='currentSetter--container'>
      <div className="currentSetter--top">
        <div className="top--left">
          <h1>TO DO</h1>
          <div className='scroll-div'>
             <div className='to-do--item'>
              <button></button>
              <p>Goal 1</p>
             </div>
          </div>
          <button className='add--todo' onClick={openDrawer}>
            <div><img src="/icons/plus.svg" alt="" /></div>
          </button>
        </div>
        <div className="top--middle">
          <h1>DONE</h1> 
        </div>
        <div className="top--right">
          <div className='setter--percentage'>
          <img src={chart} alt="" />
          <p>Setter Percentage</p>
          </div>
          <h4>Pending: 5</h4>
        </div>
      </div>
      <Xpoints />
    </div>
  );
}

export default CurrentSetter;
