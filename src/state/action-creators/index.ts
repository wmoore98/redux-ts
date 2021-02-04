import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SEARCH_REPOSITORIES });

    try {
      const { data } = await axios.get(
        "http://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: extractNames(data.objects),
      });
    } catch (error) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: error.message,
      });
    }
  };
};

function extractNames(objects: [{ package: { name: string } }]): string[] {
  return objects.map(({ package: { name } }) => name);
}
