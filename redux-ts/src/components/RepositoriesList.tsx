import { FormEvent, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";


const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const {data, error, loading} = useTypedSelector((state) => state.repositories);
  const { searchRepositories } = useActions();


  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={e => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  )
}

export default RepositoriesList;