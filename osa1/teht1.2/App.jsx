const Header = (props) => {
  return (
    <div>
      <p>{props.course}</p>
    </div>
  );
};

const Part1 = () => {
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

const Part2 = () => {
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

const Part3 = () => {
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

const Content = () => {
  return (
    <div>
      <Part1 />
      <Part2 />
      <Part3 />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
