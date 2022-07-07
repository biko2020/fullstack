const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = () => {
  return (
    <div>
      <PartOne />
      <PartTwo />
      <PartThree />
    </div>
  );
};

const PartOne = () => {
  const part1 = "Fundamentals of React";
  const exercises1 = 10;

  return (
    <div>
      <p>
        {part1} {exercises1}
      </p>
    </div>
  );
};

const PartTwo = () => {
  const part2 = "Using props to pass data";
  const exercises2 = 7;

  return (
    <div>
      <p>
        {part2} {exercises2}
      </p>
    </div>
  );
};

const PartThree = () => {
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <p>
        {part3} {exercises3}
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        {props.msg} is {props.total}
      </p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;
  const msg = "total number of exercises";

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total msg={msg} total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};
export default App;
