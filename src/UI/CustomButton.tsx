import { ArrowRightIcon, CheckIcon } from "@chakra-ui/icons";
import { Button, IconButton, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function CustomButton(props: any) {
  const checkColor = useColorModeValue("green.400", "green.500");
  const arrowColor = useColorModeValue("red.400", "red.500");
  const [status, setStatus] = React.useState(props.status);

  const IconButtonClickHandler = () => {
    if (status === "created") {
      setStatus("ongoing");
    } else if (status === "ongoing") {
      setStatus("completed");
    }
    props.onButtonClick(props.id);
  };

  return (() => {
    if (status === "completed") {
      return (
        <Button
          mt="0.5em"
          width="125px"
          height="50px"
          isDisabled
          float="right"
          colorScheme="green"
        >
          Task Done
        </Button>
      );
    } else {
      return (
        <IconButton
          width="50px"
          height="50px"
          mt="0.5em"
          onClick={IconButtonClickHandler}
          colorScheme={status === "ongoing" ? "green" : "red"}
          float="right"
          bg={status === "created" ? arrowColor : checkColor}
          aria-label="task completed icon"
          icon={status === "ongoing" ? <CheckIcon /> : <ArrowRightIcon />}
        />
      );
    }
  })();
}
