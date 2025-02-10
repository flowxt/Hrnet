import { ADD_EMPLOYEE, LOAD_EMPLOYEES } from "./actions";

const initialState = {
  employees: [],
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    case LOAD_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
      };
    default:
      return state;
  }
};

export default employeeReducer;
