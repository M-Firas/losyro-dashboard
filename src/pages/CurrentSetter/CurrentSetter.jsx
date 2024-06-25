import './CurrentSetter.css'
//components
import Xpoints from "../../components/Xpoints/Xpoints";

const CurrentSetter = () => {
  return (
    <div className='currentSetter--container'>
      <div className="currentSetter--top">
        <div className="top--left">
          <h1>TO DO</h1>
        </div>
        <div className="top--middle">
        <h1>DONE</h1>
        </div>
        <div className="top--right"></div>
      </div>
      <Xpoints />
    </div>
  )
}

export default CurrentSetter;