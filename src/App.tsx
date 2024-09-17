import Sidebar from "./components/navbar/Sidebar";
import Topbar from "./components/navbar/Topbar";

function App() {
  return (
    <>
      <div>
        <header>
          <Topbar />
          <Sidebar />
        </header>
      </div>
    </>
  );
}

export default App;
