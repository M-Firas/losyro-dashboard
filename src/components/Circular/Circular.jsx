import "./Circular.css";

const Circular = ({ actualWorkTodos, completedActualWorkTodos }) => {

  const validCompletedTodos = completedActualWorkTodos.filter(
    (todo) => todo != null
  );

  const totalTodos = actualWorkTodos.length + validCompletedTodos.length;
  const completedPercentage = totalTodos === 0 ? 0 : (validCompletedTodos.length / totalTodos) * 100;

  console.log("totalTodos: ", totalTodos);
  console.log("completedPercentage: ", completedPercentage);

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (completedPercentage / 100) * circumference;

  console.log("circumference: ", circumference);
  console.log("offset: ", offset);

  const progress = (
    <svg
      id="progress"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="190px"
      height="190px"
    >
      <defs>
        <linearGradient id="GradientColor">
          <stop offset="0.519418" stopColor="#0F55E8" />
          <stop offset="0.759246" stopColor="#6DCFFA" />
        </linearGradient>
      </defs>
      <circle
        cx="95"
        cy="95"
        r={radius}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={totalTodos === 0 ? circumference : offset}
      />
    </svg>
  );

  return (
    <div className="circular--container">
      <div className="outer">
        <div className="inner">
          <p className="number">{Math.round(completedPercentage)}%</p>
        </div>
      </div>
      {progress}
    </div>
  );
};

export default Circular;
