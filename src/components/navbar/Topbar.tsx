import logo from "../../assets/logo.webp";
import { FaBars } from "react-icons/fa6";
const Topbar = () => {
  return (
    <>
      <div className="bg-blue-900  flex px-4  w-full justify-between items-center ">
        <section>
          <img src={logo} alt="logo" className="w-16" />
        </section>

        <section className="hidden lg:flex">
          <section></section>
          <section></section>
          <section></section>
          <section></section>
        </section>
        <section className="hidden lg:block">
          <button></button>
        </section>
        <section>
          <div>
            <FaBars className="text-white text-3xl lg:hidden " />
          </div>
        </section>
      </div>
    </>
  );
};

export default Topbar;
