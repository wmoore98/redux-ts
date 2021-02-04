import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { usedTypedSelector } from "../hooks/useTypedSelector";

export const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, isLoading, error } = usedTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    searchRepositories(term);
  };

  const renderData = () => {
    return data.length ? (
      <ul>
        {data.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    ) : (
      <div>No packages found</div>
    );
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
      <hr />
      {error && <h3>{error}</h3>}
      {isLoading && <h3>Loading...</h3>}
      {!error && !isLoading && renderData()}
    </div>
  );
};
