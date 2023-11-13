import axios from "axios";
import { Dispatch  } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";


export const searchRepositories = (term: string) => {
  return async (dispath: Dispatch<Action>) => {
    dispath({
      type: ActionType.SEARCH_REPOSITORIES
    });

    try {
      const {data} = await axios.get("https://registry.npmjs.org/-/v1/search", {params: { text: term }});
      const names = data.objects.map((result: any) => {
        return result.package.name;
      });
      dispath({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names
      })
    } catch (error) {
      if (error instanceof Error) {
        dispath({
          type: ActionType.SEARCH_REPOSITORIES_ERROR,
          payload: error.message
        })
      };
    }
  };
}