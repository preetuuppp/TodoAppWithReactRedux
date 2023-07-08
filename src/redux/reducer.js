import * as types from "./actionType";
const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_TODO_REQ:
      return { ...state, isLoading: true };

    case types.GET_TODO_SUCC:
      return { ...state, isLoading: false, todos: payload };

    case types.GET_TODO_FAIL:
      return { ...state, isLoading: false, isError: true };

    case types.POST_TODO_REQ:
      return { ...state, isLoading: true };

    case types.POST_TODO_SUCC:
      return { ...state, isLoading: false, todos: [...state.todos, payload] };

    case types.POST_TODO_FAIL:
      return { ...state, isLoading: false, isError: true };

    case types.PATCH_TODO_REQ:
      return { ...state, isLoading: true };

    case types.PATCH_TODO_SUCC:
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, status: payload.status };
        }
        return todo;
      });
      return {
        ...state,
        isLoading: false,
        todos: updatedTodos,
      };

    case types.PATCH_TODO_FAIL:
      return { ...state, isLoading: false, isError: true };

    case types.DELETE_TODO_REQ:
      return { ...state, isLoading: true };

    case types.DELETE_TODO_SUCC:
      const updatedTodo = state.todos.filter((el) => el.id !== payload);
      return { ...state, isLoading: false, todos: updatedTodo };

    case types.DELETE_TODO_FAIL:
      return { ...state, isLoading: false, isError: true };

    case types.EDIT_TODO_SUCC:
      const editedTodos = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, title: payload.title };
        }
        return todo;
      });
      return {
        ...state,
        isLoading: false,
        todos: editedTodos,
      };

    case types.COMPLETED_TODO_SUCC:
      const completedTodo = state.todos.filter((el) => el.status === false);
      return { ...state, isLoading: false, todos: completedTodo };

    default:
      return initialState;
  }
};
