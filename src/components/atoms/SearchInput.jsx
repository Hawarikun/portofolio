function SearchInput() {
  return (
    <div className="input-box">
      <input
        type="search"
        name="search-form"
        id="search-form"
        className="search-input w-full text-base px-6 py-4 rounded-xl bg-black bg-opacity-80 text-gray-400"
        //   onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Type your favorite snippet here, hehehe ....."
      />
      <i className="fa fa-search" aria-hidden="true"></i>
    </div>
  );
}

export default SearchInput;
