import NavigationBar from "./components/navbar/NavigationBar";
import Routers from "./routers";

function App() {
  return (
    <>
      <div>
        <header>
          <NavigationBar />
        </header>
        <main>
          <Routers />
        </main>
      </div>
    </>
  );
}

export default App;
