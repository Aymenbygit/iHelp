import {
    SAVED_OP,
    FINISH_SAVED_OP
  } from "../actions/types";

const SavedOperation = (state = {saved:null,isEdited:false}, action) => {
    switch (action.type) {
        case SAVED_OP:
            return {
              saved:action.payload,
            };
        case FINISH_SAVED_OP:
            return {
              ...state,
              isEdited: !state.isEdited
            };
        default:
          return state;
      }
};

export default SavedOperation;
