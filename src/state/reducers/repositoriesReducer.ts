import { ActionType } from "../action-types";
import { Action } from "../actions";

interface RepositoriesState {
  isLoading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { isLoading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { isLoading: false, error: null, data: [...action.payload] };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { isLoading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
