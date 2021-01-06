import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [query, setQuery] = useState("Bret");

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?username=${query}`
      );
      const resJson = await response.json();
      setUser(resJson[0]);
    };
    fetchUser();
  }, [query]);

  console.log(user);

  return (
    <div className="App">
      <h1>Query Json Users</h1>
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      {user ? (
        <div>
          <h1>Username: {user.name}</h1>
        </div>
      ) : (
        <h6> No User Found</h6>
      )}
    </div>
  );
}

export default App;
