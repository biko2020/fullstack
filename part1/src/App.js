const Hello = (props) => {
return (
  <div>
    <p>Hello {props.name}, you are {props.age}</p>
  </div>
)
}

const Footer = () => {
  return(
    <div>
      greeting app created by <a href="http://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

const App = () => {
  const name = 'Peters'
  const age = 10
  return (
    <div>
      <h1>Geentings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </div>
  );
};
export default App;
