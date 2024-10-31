import Footer from "../organisms/Footer";
import Hero from "../organisms/Hero";
import ListTile from "../organisms/ListTile";
import CodeSnippet from "../organisms/CodeSnippet";
import Navbar from "../organisms/Navbar";
import SeeMore from "../atoms/buttons/SeeMore";
import Activity from "../organisms/Activity";

export default function MainLayout() {
  return (
    <div className="md:px-28 2xl:px-72">
      <Navbar />
      <Hero />
      <Activity />
      <ListTile />
      <div className="text-5xl font-bold my-12">Code Snippet</div>
      <CodeSnippet />
      <SeeMore />
      <Footer />
    </div>
  );
}
