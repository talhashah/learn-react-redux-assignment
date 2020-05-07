import { default as _ } from "lodash-uuid";
import * as actionTypes from "../../store/action";
import faker from "faker";

// Initial State
const initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: _.uuid(),
        name: action.name,
        age: action.age,
      };
      return {
        ...state,
        persons: state.persons.concat(newPerson),
      };
    case actionTypes.DEL_PERSON:
      let newPersonsArray = state.persons.filter((person) =>
        person.id === action.payload ? false : true
      );
      return {
        ...state,
        persons: newPersonsArray,
      };
    default:
      // no matching action
      return state;
  }
};

export default reducer;
