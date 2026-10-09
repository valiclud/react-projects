import * as React from "react";

import { STORIES } from "./constants/STORIES";
import List from "./components/List";
import Search from "./components/Search";

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem("search") || "React",
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    localStorage.setItem("search", event.target.value);
  };

  const searchedStories = STORIES.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search search={searchTerm} onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
    </div>
  );
};

export default App;
