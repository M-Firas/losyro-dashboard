import "./WorkInfo.css";
//hooks
import { useState, useEffect, useRef } from "react";
//assets
import avatar from "../../images/avatar.png";
import arrow from "../../images/dropArrow.svg";

const WorkInfo = ({ formData, setFormData }) => {

  //defining data arrays for the selection fields
  const breakpointData = ["Breakpoint 1", "Breakpoint 2", "Breakpoint 3"];

  const agancyData = [
    { icon: "/icons/orangeCircle.svg", name: "AISyro" },
    { icon: "/icons/purpleCircle.svg", name: "AISyro" },
    { icon: "/icons/cyanCircle.svg", name: "ProSyro" },
    { icon: "/icons/whiteCircle.svg", name: "DevSyro" },
  ];

  const intrestedAgancyData = [
    { icon: "/icons/orangeCircle.svg", name: "AISyro" },
    { icon: "/icons/purpleCircle.svg", name: "AISyro" },
    { icon: "/icons/cyanCircle.svg", name: "ProSyro" },
    { icon: "/icons/whiteCircle.svg", name: "DevSyro" },
  ];

  //updating the state when opening or closing the selection menu
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  //updating the state when selecting a value in the selection menu
  const [selectedBreakpoint, setSelectedBreakpoint] = useState("");
  const [selectedAgency, setSelectedAgency] = useState("");
  const [selectedInterestedAgency, setSelectedInterestedAgency] = useState("");
  
  //funtion that closes the selection menu when the user clicks anywhere on the screen.
  const menuRef1 = useRef();
  const menuRef2 = useRef();
  const menuRef3 = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (menuRef1.current && !menuRef1.current.contains(e.target)) {
        setIsActive(false);
      }
      if (menuRef2.current && !menuRef2.current.contains(e.target)) {
        setIsActive2(false);
      }
      if (menuRef3.current && !menuRef3.current.contains(e.target)) {
        setIsActive3(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  //updating the state of user selection and sending it to the form data.
  const handleBreakpointSelect = (breakpoint) => {
    setSelectedBreakpoint(breakpoint);
    setFormData({ ...formData,  backpoint:breakpoint });
    setIsActive(false);
  };

  const handleAgencySelect = (agency) => {
    setSelectedAgency(agency);
    setFormData({ ...formData, agancy:agency });
    setIsActive2(false);
  };

  const handleInterestedAgencySelect = (intrestedAgency) => {
    setSelectedInterestedAgency(intrestedAgency);
    setFormData({ ...formData, intrestedAgancy:intrestedAgency });
    setIsActive3(false);
  };

  return (
    <div className="workInfo--container">
      <div className="upload--picture">
        <img src={avatar} alt="" />
        <button>Upload Your Photo</button>
      </div>

      <form>
        <div className="select--container" ref={menuRef1}>
          <div className="select--btn" onClick={() => setIsActive(!isActive)}>
            {selectedBreakpoint || "Select Your BreakPoint"}
            <img src={arrow} alt="" />
          </div>
          {isActive && (
            <div className="select--content">
              <div className="scroll--div">
                {breakpointData.map((data) => (
                  <div
                    key={data}
                    className="select--item"
                    onClick={() => handleBreakpointSelect(data)}
                  >
                    {data}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="select--container" ref={menuRef2}>
          <div className="select--btn" onClick={() => setIsActive2(!isActive2)}>
            {selectedAgency || "Select Your Agency"}
            <img src={arrow} alt="" />
          </div>
          {isActive2 && (
            <div className="select--content">
              <div className="scroll--div">
                {agancyData.map((data) => (
                  <div
                    key={data.name}
                    className="select--item"
                    onClick={() => handleAgencySelect(data.name)}
                  >
                    <img src={data.icon} alt="" />
                    {data.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="select--container" ref={menuRef3}>
          <div className="select--btn" onClick={() => setIsActive3(!isActive3)}>
          {selectedInterestedAgency ||"Select Interested Agencies"}
            <img src={arrow} alt="" />
          </div>
          {isActive3 && (
            <div className="select--content">
              <div className="scroll--div">
                {intrestedAgancyData.map((data) => (
                  <div
                    key={data.name}
                    className="select--item"
                    onClick={() => handleInterestedAgencySelect(data.name)}
                  >
                    <img src={data.icon} alt="" />
                    {data.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default WorkInfo;
