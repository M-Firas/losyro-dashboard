import "./Home.css";
//assets


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
        <div className="home--top-right">
      
        </div>
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
