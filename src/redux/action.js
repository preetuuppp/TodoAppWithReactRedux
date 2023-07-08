import * as types from "./actionType";

// ***** HANDLING POST *******
export const todo_request_post_handle = () => {
  return { type: types.POST_TODO_REQ };
};

export const todo_success_post_handle = (payload) => {
  return { type: types.POST_TODO_SUCC, payload };
};

export const todo_failure_post_handle = () => {
  return { type: types.POST_TODO_FAIL };
};

// ***** HANDLING PATCH *******
export const todo_request_patch_handle = () => {
  return { type: types.PATCH_TODO_REQ };
};

export const todo_success_patch_handle = (payload) => {
  return { type: types.PATCH_TODO_SUCC, payload };
};

export const todo_failure_patch_handle = () => {
  return { type: types.PATCH_TODO_FAIL };
};

// ***** HANDLING DELETE *******

export const todo_request_delete_handle = () => {
  return { type: types.DELETE_TODO_REQ };
};

export const todo_success_delete_handle = (payload) => {
  return { type: types.DELETE_TODO_SUCC, payload };
};

export const todo_failure_delete_handle = () => {
  return { type: types.DELETE_TODO_FAIL };
};

// ***** HANDLING EDIT *******

export const todo_success_edit_handle = (payload) => {
  return { type: types.EDIT_TODO_SUCC, payload };
};

// ***** HANDLING COMPLETED *******
export const todo_success_completed_handle = () => {
  return { type: types.COMPLETED_TODO_SUCC };
};
