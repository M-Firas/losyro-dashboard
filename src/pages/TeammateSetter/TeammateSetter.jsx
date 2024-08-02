import "./TeammateSetter.css";
import { useContext } from "react";
// components
import Circular from "../../components/Circular/Circular";
// Todo Context
import { TodosContext } from "../../utils/TodosContext";
// assets
import userAvatar from "../../images/userAvatar.png";

const TeammateSetter = () => {

  //Todos Data
  const {
    actualWorkTodos,
    completedActualWorkTodos,
    xPointsTodos,
    completedXPointsTodos,
  } = useContext(TodosContext);

  //User Info Data
  const userInfo = [
    { icon: "/icons/email.svg", label: "obada@mail.com" },
    { icon: "/icons/phone.svg", label: "+976 456 456 45" },
    { icon: "/icons/bookmark.svg", label: "ArtSyro , ISyro" },
  ];

  return (
    <div className="teammateSetter--container">
      {/*START OF TOP SECTION */}
      <div className="teammateSetter--top">
        {/*START OF TOP LEFT SECTION */}
        <div className="top--left">
          <div className="userInfo--top">
            <img src={userAvatar} alt="" />
            <div className="right">
              <h1>Obada Rudainy</h1>
              <p>DevSyro</p>
              <span>#56</span>
            </div>
          </div>
          <div className="userInfo--bottom">
            <div className="left">
              {userInfo.map((item) => {
                return (
                  <div>
                    <img src={item.icon} alt="" />
                    <p>{item.label}</p>
                  </div>
                );
              })}
            </div>
            <div className="right">
              <span>Bio</span>
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliqlit. Nunc vulputate
                libero et velit interdum, ac aliq
              </p>
            </div>
          </div>
        </div>
        {/* END OF TOP LEFT SECTION */}

        {/* START OF TOP RIGHT SECTION */}
        <div className="top--right">
          <div className="setter--percentage">
            <Circular
              actualWorkTodos={actualWorkTodos}
              completedActualWorkTodos={completedActualWorkTodos}
            />
            <p>Setter Percentage</p>
          </div>
          <p>Pending: {actualWorkTodos.length}</p>
        </div>
        {/* END OF TOP RIGHT SECTION */}
      </div>
      {/* END OF TOP SECTION */}

      {/* START OF BOTTOM SECTION */}
      <div className="teammateSetter--bottom">
        {/* START OF BOTTOM LEFT SECTION */}
        <div className="bottom--left">
          <h1>GOALS</h1>
          <div className="scroll-div">
            {actualWorkTodos &&
              actualWorkTodos.map((todo, index) => (
                <div key={index} className="todo--item">
                  <button></button>
                  <p>{todo.text}</p>
                </div>
              ))}
            {completedActualWorkTodos &&
              completedActualWorkTodos.map(
                (todo, index) =>
                  todo && (
                    <div key={index} className="completedTodo--item">
                      <button>
                        <img src="/icons/completed.svg" alt="" />
                      </button>
                      <p>{todo.text}</p>
                    </div>
                  )
              )}
          </div>
        </div>
        {/* END OF BOTTOM LEFT SECTION */}
        <div className="bottom--right">
        <h1>X-POINT</h1>
          <div className="scroll-div">
            {xPointsTodos &&
              xPointsTodos.map((todo, index) => (
                <div key={index} className="todo--item">
                  <button></button>
                  <p>{todo.text}</p>
                </div>
              ))}
            {completedXPointsTodos &&
              completedXPointsTodos.map(
                (todo, index) =>
                  todo && (
                    <div key={index} className="completedTodo--item">
                      <button>
                        <img src="/icons/completed.svg" alt="" />
                      </button>
                      <p>{todo.text}</p>
                    </div>
                  )
              )}
          </div>
        </div>
      </div>
      {/* END OF BOTTOM SECTION */}
    </div>
  );
};

export default TeammateSetter;
