import SeeMore from "../atoms/buttons/SeeMore";
import Footer from "../organisms/Footer";
import ListTile from "../organisms/ListTile";
import Navbar from "../organisms/Navbar";

function PortofolioPage() {
  return (
    <div className="md:px-28 2xl:px-72">
      <Navbar />
      <div className=" text-4xl font-bold w-3/12 my-8">
        Project that i has been done
      </div>
      <ListTile />
      <SeeMore />
      <Footer />
    </div>
  );
}

export default PortofolioPage;
