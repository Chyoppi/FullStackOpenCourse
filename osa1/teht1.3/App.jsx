const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };
  const point_exerchise = "exercises";

  return (
    <div>
      <p>{course}</p>
      <p>{part1.name}</p>
      <p>Exercises: {part1[point_exerchise]}</p>
      <p>{part2.name}</p>
      <p>Exercises: {part2[point_exerchise]}</p>
      <p>{part3.name}</p>
      <p>Exercises: {part3[point_exerchise]}</p>
    </div>
  );
};

export default App;
