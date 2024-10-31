import Footer from "../organisms/Footer";
import ListTile from "../organisms/ListTile";
import Navbar from "../organisms/Navbar";
import Ornament from "../atoms/Ornament";

function PortofolioPage() {
  return (
    <div className="md:px-28 2xl:px-72">
      <Navbar />
      <div className="flex flex-row items-center">
        <div className=" text-4xl font-bold w-3/12 mt-8 mb-12">
          Project that i has been done
        </div>
        <Ornament name="arrowOrnament" size={140} />
      </div>
      <ListTile />
      <Footer />
    </div>
  );
}

export default PortofolioPage;
