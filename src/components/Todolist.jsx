import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  todo_failure_post_handle,
  todo_request_post_handle,
  todo_success_completed_handle,
  todo_success_post_handle,
} from "../redux/action";
import { TodoDetails } from "./TodoDetails";
import { Todoinput } from "./Todoinput";

export const Todolist = () => {
  const dispatch = useDispatch();

  const { todos } = useSelector((store) => {
    return {
      todos: store.todos,
      isLoading: store.isLoading,
    };
  }, shallowEqual);

  const postTodo = (todo) => {
    const postData = {
      title: todo,
      status: false,
      id: Date.now() + todo,
    };
    dispatch(todo_request_post_handle());

    try {
      dispatch(todo_success_post_handle(postData));
    } catch (error) {
      dispatch(todo_failure_post_handle());
    }
  };

  const handleComplete = () => {
    dispatch(todo_success_completed_handle());
  };

  return (
    <>
      <VStack
        h={"500px"}
        border={"1px solid grey"}
        w={"450px"}
        margin={"20px auto"}
        p={"10px 0px"}
        background={"#E0E0E0"}
      >
        <Heading
          border={"1px solid grey"}
          background={"#00B8D4"}
          w={"450px"}
          p={"10px 0px"}
          color={"white"}
        >
          Todo App
        </Heading>
        <Todoinput postData={postTodo} />
        {todos?.map((el, i) => (
          <TodoDetails key={i} {...el} />
        ))}
      </VStack>
      <HStack
        margin={"auto"}
        justify={"space-between"}
        border={"1px solid grey"}
        w={"450px"}
        p={"10px"}
        background={"#00B8D4"}
      >
        <Text w={"200px"} p={"10px"} background={"white"}>
          {todos.length} Items left
        </Text>

        <Button onClick={handleComplete}>Clear Completed</Button>
      </HStack>
    </>
  );
};
