import Footer from './components/footer';
import NavigationBar from './components/navbar/NavigationBar';
import Routers from './routers';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen w-full">
        <section className="w-full">
          <header className="relative w-full">
            <div className="fixed w-full z-[100]">
              <NavigationBar />
            </div>
          </header>

          <main className="pt-20 lg:top-[87px] bg-white w-full">
            <Routers />
          </main>
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
