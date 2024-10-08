import "../styles/app.css";
import Header from "./Header";
import Popup from "./Popup";

function App() {
  return (
    <div className="App">
      <Header />
      <Popup>This is the popup content.</Popup>
    </div>
  );
}

export default App;
