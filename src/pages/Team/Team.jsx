import './Team.css'
import { NavLink } from 'react-router-dom';

//Team Data
import { teamData } from "../../data/teamData"; 


const Team = () => {
  return (
    <div className='team--container'>
      <div className="team--buttons">
        <button>Leadership Board</button>
        <button>Team Agencies</button>
      </div>
      <div className='team--content'>
      {teamData.map((data, index) => {
                // logic to change the color of the percentage text.
                let percentageClass = "";

                if (data.percentage === "25%") {
                  percentageClass = "percentage-red";
                } else if (data.percentage === "50%") {
                  percentageClass = "percentage-yellow";
                } else if (data.percentage === "75%") {
                  percentageClass = "percentage-green";
                }

                //logic to change the color of the agency text.
                let agencyClass = "";

                if (data.agancy === "Product Syro") {
                  agencyClass = "agency-cayn";
                } else if (data.agancy === "Art Syro") {
                  agencyClass = "agency-purple";
                } else {
                  agencyClass = "agency-white";
                }

                return (
                  <div className="team--member" key={index}>
                    <NavLink className='navlink' to="/dashboard/teammate">
                     <div className="team--member-left">
                      <div className="rank">
                        <img src={data.rank} alt="" />
                      </div>
                      <div className="team--member-info">
                        <div className="avatar">
                          <img src={data.avatar} alt="" />
                        </div>
                        <div className="info">
                          <p>{data.name}</p>
                        </div>
                       <div >
                       <p className={agencyClass}>{data.agancy}</p>
                       </div>
                      </div>
                    </div>
                    </NavLink>
                    <div className="team--member-right">
                      <p className={percentageClass}>{data.percentage}</p>
                    </div>
                  </div>
                );
              })}
      </div>
    </div>
  )
}

export default Team