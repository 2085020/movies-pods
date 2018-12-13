import { MovieEntity } from "../../../core/store/model";
import { actionsEnums, BaseAction } from "../../../common-app/actions";

export type movieCollection =  MovieEntity[];

export const moviesReducer = (state:movieCollection = new Array(), action:BaseAction) => {
    switch (action.type) {
      case actionsEnums.MOVIES_REQUEST:
        return handleMovieRequestCompletedAction(state);
    }
  
    return state;
};

const handleMovieRequestCompletedAction = (state:movieCollection) => (
  state
  );
  