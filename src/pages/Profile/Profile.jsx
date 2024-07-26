import './Profile.css'
//react hooks
import { useState, useEffect, useRef } from "react";
//assets
import avatar from '../../images/avatar.png'
import arrow from "../../images/dropArrow.svg";


const Profile = () => {
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  //Intersted Agancy Array
  const intrestedAgancyData = [
    { icon: "/icons/orangeCircle.svg", name: "AISyro" },
    { icon: "/icons/purpleCircle.svg", name: "AISyro" },
    { icon: "/icons/cyanCircle.svg", name: "ProSyro" },
    { icon: "/icons/whiteCircle.svg", name: "DevSyro" },
  ];

  const [selectedInterestedAgency, setSelectedInterestedAgency] = useState("");
  const handleInterestedAgencySelect = (intrestedAgency) => {
    setSelectedInterestedAgency(intrestedAgency);
    setIsActive(false);
  };

  return (
    <div className='profile--container'>
      <div className="profile--top">
        <img src={avatar} alt="" />
        <button>Upload Your Photo</button>
      </div>
      <h1>Personal Info</h1>
      <div className="profile--middle">
        <div className='middle--left'>

        <label>Name</label>
        <input type='text'></input>

        <label>Email</label>
        <input type='email'></input>

        <label>Phone Number</label>
        <input type='text'></input>
        </div>
        <div className='middle--right'>

        <label>Bio</label>
        <textarea type='text' className='bio'></textarea>

        <label>Intrested Agency</label>
        <div className="agancy-select--container" ref={menuRef}>
          <div className="select--btn" onClick={() => setIsActive(!isActive)}>
          {selectedInterestedAgency ||"ArtSyro"}
            <img src={arrow} alt="" />
          </div>
          {isActive && (
            <div className="select--content">
              <div className="scroll--div">
                {intrestedAgancyData.map((data) => (
                  <div
                    key={data.name}
                    className="select--item"
                    onClick={() => handleInterestedAgencySelect(data.name)}
                  >
                    {data.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        </div>
      </div>
      <h1>Password</h1>
      <div className="profile--bottom">
        <div className="bottom--left">
        <label>New Password</label>
        <input type='password'></input>
        <label>Rewrite New Password</label>
        <input type='password'></input>
        </div>
        <div className="bottom--right">
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </div>
    </div>
  )
}

export default Profile