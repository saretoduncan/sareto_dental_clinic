import NavigationBar from "./components/navbar/NavigationBar";
import Routers from "./routers";

function App() {
  return (
    <>
      <div>
        <header className="fixed w-full z-[100]">
          <NavigationBar />
        </header>
        <main className="relative top-20 lg:top-[87px] bg-white">
          <Routers />
        </main>
      </div>
    </>
  );
}

export default App;
