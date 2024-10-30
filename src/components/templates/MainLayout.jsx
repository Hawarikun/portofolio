import Footer from "../organisms/Footer";
import Hero from "../organisms/Hero";
import ListTile from "../organisms/ListTile";
import CodeSnippet from "../organisms/CodeSnippet";
import Navbar from "../organisms/Navbar";

export default function MainLayout() {
  return (
    <div className="md:px-28 2xl:px-72">
      <Navbar />
      <Hero />
      <ListTile />
      <CodeSnippet />
      <Footer />
    </div>
  );
}
