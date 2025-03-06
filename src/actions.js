export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const REMOVE_EMPLOYEE = "REMOVE_EMPLOYEE";
export const ARCHIVE_EMPLOYEE = "ARCHIVE_EMPLOYEE";

export const addEmployee = (employee) => ({
  type: ADD_EMPLOYEE,
  payload: employee,
});

export const removeEmployee = (employeeId) => ({
  type: REMOVE_EMPLOYEE,
  payload: employeeId,
});

export const archiveEmployee = (employeeId) => ({
  type: ARCHIVE_EMPLOYEE,
  payload: employeeId,
});
