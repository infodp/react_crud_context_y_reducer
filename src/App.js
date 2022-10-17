import Create from "./components/Create";
import Show from "./components/Show";

function App() {
  return (
    <div className='container text-center'>
      {/* <h2>CRUD Context API - Reducer</h2> */}
      <Create />
      <Show />
    </div>
  );
}

export default App;
