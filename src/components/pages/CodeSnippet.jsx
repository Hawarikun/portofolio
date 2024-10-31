import SearchInput from "../atoms/SearchInput";
import CodeSnippet from "../organisms/CodeSnippet";
import Footer from "../organisms/Footer";
import Navbar from "../organisms/Navbar";

export default function CodeSnippetPage() {
  return (
    <div className="md:px-28 2xl:px-72">
      <Navbar />

      <div className="flex flex-col">
        <div className="text-5xl font-bold mt-12 my-8">Code Snippet</div>
        <div className="text-base font-bold mb-4">Search code snippet</div>
        <SearchInput />
        <CodeSnippet />
      </div>

      <Footer />
    </div>
  );
}
