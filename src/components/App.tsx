import { Provider } from "react-redux";
import { store } from "../state";
import { RepositoriesList } from "./RepositoriesList";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For an NPM Package</h1>
      </div>
      <RepositoriesList />
    </Provider>
  );
};

export default App;
