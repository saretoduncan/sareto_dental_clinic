import Footer from "./components/footer";
import NavigationBar from "./components/navbar/NavigationBar";
import Routers from "./routers";

function App() {
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen">
        <section className="">
          <header className="relative w-full">
            <div className="fixed w-full z-[100]">
              <NavigationBar />
            </div>
          </header>

          <main className="pt-20 lg:top-[87px] bg-white">
            <Routers />
          </main>
        </section>
        <section>
          <Footer/>
        </section>
      </div>
    </>
  );
}

export default App;
