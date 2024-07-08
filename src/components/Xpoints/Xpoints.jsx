import "./Xpoints.css";

// react hooks
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useContext } from "react";

// Todo Context
import { TodosContext } from "../../utils/TodosContext";

const Xpoints = () => {
  const location = useLocation();

  const { xPointsTodos, completedXPointsTodos, undoComplete, markComplete } =
    useContext(TodosContext);

  return (
    <div className="currentSetter-container">
      <div className="component--header">
        <div className="header--left">
          <img src="/icons/XP.svg" alt="" />
          <p>
            Current Setter{" "}
            {location.pathname === "/dashboard/home/current-setter" && 22}
          </p>
          <span> ( X Points ) </span>
        </div>
        <div className="header--right">
          <NavLink to="current-setter">
            <div className="operations--buttons">
              <img src="/icons/proceed.svg" alt="" />
            </div>
          </NavLink>
        </div>
      </div>

      <div className="scroll-div">
        {xPointsTodos &&
          xPointsTodos.map(
            (todo, index) =>
              todo && (
                <div className="xpoints--item">
                  <button onClick={() => markComplete(index, "X Points")} />
                  <p>{todo.text}</p>
                </div>
              )
          )}
        {completedXPointsTodos &&
          completedXPointsTodos.map(
            (todo, index) =>
              todo && (
                <div className="xpoints--completed">
                  <button onClick={() => undoComplete(index, "X Points")}>
                    <img src="/icons/completed.svg" alt="" />
                  </button>
                  <p>{todo.text}</p>
                </div>
              )
          )}
      </div>
    </div>
  );
};

export default Xpoints;
