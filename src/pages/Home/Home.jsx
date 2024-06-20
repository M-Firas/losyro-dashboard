import "./Home.css";

//assets

//ChartJs Dependency
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

//components
import CurrentSetter from "../../components/CurrentSetter/CurrentSetter";



const Home = () => {
  

  return (
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
              <div className="operations--buttons">
                <img src="/icons/plus.svg" alt="" />
              </div>
              <div className="operations--buttons">
                <img src="/icons/proceed.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
       <CurrentSetter />
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
            options= {{
              plugins: {
                legend: {
                  display: false
                }
              },
              scales: {
                y: {
                  beginAtZero: true, // Ensure the scale starts at 0
                  max: 100, // Ensure the scale ends at 100
                  ticks: {
                    stepSize: 25, // Ensure the step size between ticks is 25
                    callback: function(value) {
                      return value + '%';
                    }
                  }
                }
              },
              responsive: true,
            }}
            
            data={{
              labels: ["Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
              datasets:[
                {
                  data: [50,75,45,90,70,50,75],
                  backgroundColor: [
                    "rgba(0, 2, 255, 1)",
                    "rgba(0, 2, 255, 1)",
                    "rgba(0, 2, 255, 1)",
                    'rgba(35, 193, 255, 1)',
                    "rgba(0, 2, 255, 1)",
                    "rgba(0, 2, 255, 1)",
                    "rgba(0, 2, 255, 1)",
                  ],
                  borderRadius: 8,
                  categoryPercentage: 0.7
                }
              ]
            }} />
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
              <div className="operations--buttons">
                <img src="/icons/proceed.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
