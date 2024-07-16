import "./CurrentSetter.css";
import  { useContext } from "react";
import { useOutletContext } from "react-router-dom";

// assets


// Todo Context
import { TodosContext } from "../../utils/TodosContext";

// components
import Xpoints from "../../components/Xpoints/Xpoints";
import Circular from "../../components/Circular/Circular";

const CurrentSetter = () => {
  const { openDrawer } = useOutletContext();
  const {
    actualWorkTodos,
    completedActualWorkTodos,
    undoComplete,
    markComplete,
  } = useContext(TodosContext);

  return (
    <div className="currentSetter--container">
      <div className="currentSetter--top">
        <div className="top--left">
          <h1>TO DO</h1>
          <div className="scroll-div">
            {actualWorkTodos &&
              actualWorkTodos.map((todo, index) => (
                <div key={index} className="todo--item">
                  <button
                    onClick={() => markComplete(index, "Actual Work")}
                  ></button>
                  <p>{todo.text}</p>
                </div>
              ))}
          </div>
          <button className="add--todo" onClick={openDrawer}>
            <div>
              <img src="/icons/plus.svg" alt="" />
            </div>
          </button>
        </div>
        <div className="top--middle">
          <h1>DONE</h1>
          <div className="scroll-div">
            {completedActualWorkTodos &&
              completedActualWorkTodos.map(
                (todo, index) =>
                  todo && (
                    <div key={index} className="completed--todo">
                      <button
                        onClick={() => undoComplete(index, "Actual Work")}
                      >
                        <img src="/icons/completed.svg" alt="" />
                      </button>
                      <p>{todo.text}</p>
                    </div>
                  )
              )}
          </div>
        </div>
        <div className="top--right">
          <div className="setter--percentage">
            <Circular
            actualWorkTodos={actualWorkTodos} 
            completedActualWorkTodos={completedActualWorkTodos}  />
            <p>Setter Percentage</p>
          </div>
          <h4>Pending: {actualWorkTodos.length}</h4>
        </div>
      </div>

      <Xpoints />
      
    </div>
  );
};

export default CurrentSetter;
