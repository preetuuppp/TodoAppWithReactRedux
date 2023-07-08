import { EditIcon } from "@chakra-ui/icons";
import { Button, HStack, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  todo_success_delete_handle,
  todo_success_edit_handle,
  todo_success_patch_handle,
} from "../redux/action";

export const TodoDetails = (props) => {
  const { title, status, id } = props;

  const [isEdit, setisEdit] = useState(false);
  const [text, setText] = useState(title);
  const dispatch = useDispatch();

  // deleting todo***
  const deleteTodo = (id) => {
    dispatch(todo_success_delete_handle(id));
  };

  //**UPDATING TODO */
  const updateTodo = (id, newStatus) => {
    const payload = {
      id,
      status: newStatus,
    };

    dispatch(todo_success_patch_handle(payload));
  };

  const editTodo = (id, newTitle) => {
    const payload = {
      id,
      title: newTitle,
    };

    dispatch(todo_success_edit_handle(payload));
    setisEdit(false);
  };

  return (
    <>
      <HStack
        justify={"space-between"}
        alignItems={"center"}
        minW={"400px"}
        p={"20px"}
        boxSizing={"border-box"}
      >
        <HStack>
          <Button
            colorScheme={status ? "blue" : "gray"}
            border={"none"}
            onClick={() => updateTodo(id, !status)}
          ></Button>
          {!isEdit ? (
            <Text
              textDecoration={status ? "line-through" : "none"}
              color={status ? "grey" : "black"}
              fontSize={"18px"}
              pl={"10px"}
            >
              {title}
            </Text>
          ) : (
            <HStack>
              <Input value={text} onChange={(e) => setText(e.target.value)} />
            </HStack>
          )}
        </HStack>

        <HStack>
          {!isEdit ? (
            <Button colorScheme="gray" onClick={() => setisEdit(true)}>
              <EditIcon />
            </Button>
          ) : (
            <Button onClick={() => editTodo(id, text)}>Submit</Button>
          )}
          <Button onClick={() => deleteTodo(id)} colorScheme="red">
            X
          </Button>
        </HStack>
      </HStack>
    </>
  );
};
