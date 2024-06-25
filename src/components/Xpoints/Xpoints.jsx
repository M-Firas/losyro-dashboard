import './Xpoints.css'
// react hooks
import { useLocation } from "react-router-dom";

const Xpoints = () => {
  const location = useLocation();


  return (
    <div className='currentSetter-container'>

         <div className="component--header">
            <div className="header--left">
              <img src="/icons/XP.svg" alt="" />
              <p>Current Setter {location.pathname === "/dashboard/home/current-setter" && (
        22
      )}</p>
              <span> ( X Points ) </span>
            </div>
            <div className="header--right">
              <div className="operations--buttons">
                <img src="/icons/proceed.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="component--content">
              
          </div>
    </div>
  )
}

export default Xpoints