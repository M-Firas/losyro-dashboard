import "./Home.css";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useContext } from "react";

//assets
import chart from "../../images/chart.svg";

//ChartJs Dependency
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

//Team Data
import { teamData } from "../../data/teamData";

// Todo Context
import { TodosContext } from "../../utils/TodosContext";

//components
import Xpoints from "../../components/Xpoints/Xpoints";
import CurrentSetter from "../CurrentSetter/CurrentSetter";
import Circular from "../../components/Circular/Circular";

const Home = () => {
  const location = useLocation();

  const { actualWorkTodos,completedActualWorkTodos } = useContext(TodosContext);

  return (
    <div className="home">
      {location.pathname === "/dashboard/home" && (
        <div className="home--container">
          <div className="home--top">
            <div className="home--top-left">
              <div className="component--header">
                <div className="header--left">
                  <img src="/icons/trophy.svg" alt="" />
                  <p>Current Setter</p>
                  <span> ( Actual Work ) </span>
                  <img src="/icons/calendar.svg" alt="" />
                </div>
                <div className="header--right">
                  <NavLink to="current-setter">
                    <div className="operations--buttons">
                      <img src="/icons/plus.svg" alt="" />
                    </div>
                  </NavLink>
                  <NavLink to="current-setter">
                    <div className="operations--buttons">
                      <img src="/icons/proceed.svg" alt="" />
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="actualwork--info">
                <div className="actualwork--left">
                  <div className="scroll-div">
                    {actualWorkTodos &&
                      actualWorkTodos.map((todo, index) => (
                        <div key={index} className="todo--list">
                          <button />
                          <p>{todo.text}</p>
                        </div>
                      ))}
                  </div>
                  <div className="add--todo-home">
                    <div>
                      <NavLink to="current-setter">
                        <img src="/icons/plus.svg" alt="" />
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="actualwork--right">
                  <div className="setter--percentage">
                  <Circular
            actualWorkTodos={actualWorkTodos} 
            completedActualWorkTodos={completedActualWorkTodos}  />
                    <p>Setter Percentage</p>
                  </div>
                </div>
              </div>
            </div>
            <Xpoints />
          </div>

          <div className="home--bottom">
            <div className="home--bottom-left">
              <div className="component--header">
                <div className="header--left">
                  <p>Setters Statistics</p>
                </div>
                <div className="header--right">
                  <p>7 Month</p>
                  <img src="/icons/arrowDown.svg" alt="" />
                </div>
              </div>
              <div className="bar--chart">
                <Bar
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                          stepSize: 25,
                          callback: function (value) {
                            return value + "%";
                          },
                        },
                      },
                    },
                    responsive: true,
                  }}
                  data={{
                    labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [
                      {
                        data: [50, 75, 45, 90, 70, 50, 75],
                        backgroundColor: [
                          "rgba(0, 2, 255, 1)",
                          "rgba(0, 2, 255, 1)",
                          "rgba(0, 2, 255, 1)",
                          "rgba(35, 193, 255, 1)",
                          "rgba(0, 2, 255, 1)",
                          "rgba(0, 2, 255, 1)",
                          "rgba(0, 2, 255, 1)",
                        ],
                        borderRadius: 8,
                        categoryPercentage: 0.7,
                      },
                    ],
                  }}
                />
              </div>
            </div>
            <div className="home--bottom-right">
              <div className="component--header">
                <div className="header--left">
                  <img src="/icons/team3.svg" alt="" />
                  <p>Team Mates</p>
                </div>
                <div className="header--right">
                  <div className="operations--buttons">
                    <img src="/icons/refreash.svg" alt="" />
                  </div>
                  <NavLink to="/dashboard/team">
                    <div className="operations--buttons">
                      <img src="/icons/proceed.svg" alt="" />
                    </div>
                  </NavLink>
                </div>
              </div>

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
                          <span className={agencyClass}>{data.agancy}</span>
                        </div>
                      </div>
                    </div>
                    <div className="team--member-right">
                      <p className={percentageClass}>{data.percentage}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {location.pathname === "/dashboard/home/current-setter" && (
        <CurrentSetter />
      )}
    </div>
  );
};

export default Home;
