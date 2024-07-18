import Carousel from "./components/carousel/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Poster from "./components/Poster";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />

      <div className="pl-[158px] bg-[#130F0C] w-[100vw]">
        <Main />
        <Carousel />
        <Poster />

        <Footer />
      </div>

      <Sidebar />
    </>
  );
}

export default App;
