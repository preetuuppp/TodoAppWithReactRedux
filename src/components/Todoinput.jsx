import { Button, HStack, Input } from "@chakra-ui/react";
import React, { useState } from "react";

export const Todoinput = ({ postData }) => {
  const [input, setInput] = useState("");

  const getInput = () => {
    postData(input);
    setInput("");
  };
  return (
    <HStack margintop={"20px"}>
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="add a new Todo"
      />
      <Button color={"black"} disabled={!input} onClick={getInput}>
        Add
      </Button>
    </HStack>
  );
};
