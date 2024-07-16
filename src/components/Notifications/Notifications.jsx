import "./Notifications.css";
//hooks
import { useState, useEffect, useRef } from "react";

const Notifications = () => {
  //Notifications Data
  const notificationsData = [
    {
      icon: "/icons/hard.svg",
      title: "Hard Reminder",
      description: "A Hard reminder has been sent to you by the admin",
      date: "12/12/2023",
    },
    {
      icon: "/icons/soft.svg",
      title: "Soft Reminder",
      description: "A Soft reminder has been sent to you by the admin",
      date: "12/12/2023",
    },
    {
      icon: "/icons/good.svg",
      title: "Good Job",
      description: "A Good Job reminder has been sent to you by the admin",
      date: "12/12/2023",
    },
    {
        icon: "/icons/good.svg",
        title: "Good Job",
        description: "A Good Job reminder has been sent to you by the admin",
        date: "12/12/2023",
      },
  ];

  //updating the state when opening or closing the Notifiactions
  const [isActive, setIsActive] = useState(false);

  //funtion that closes Notifiactions when the user clicks anywhere on the screen.
  const notificationsRef = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(e.target)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className="notifications--container">
      <div className="notifications--btn" onClick={() => setIsActive(!isActive)}>
        <img src="/icons/bill.svg" alt="" />
      </div>
      {isActive && (
        <div className="notifications--content" ref={notificationsRef}>
          <div className="header">
             <p>Notifications</p>
             <div className="operations--buttons">
                    <img src="/icons/refreash.svg" alt="" />
            </div>
          </div>
          <div className="scroll--div">
            {notificationsData.map((data) => (
              <div
                key={data}
                className="notifications--item"
              >
                <div className="left--item">
                    <img src={data.icon} alt="" />
                </div>
                <div className="right--item">
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                    <span><img src='/icons/date.svg' alt="" />{data.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
