import { EditIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

export default function EditTodo(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [title, setTitle] = React.useState(props.title);
  const [description, setDescription] = React.useState(props.description);

  const titleChangeHandler = (e: any) => {
    setTitle(e.target.value);
  };

  const descriptionChangeHandler = (e: any) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // alert(`Submitting Name : Title ${title} Desc : ${description}`);
    props.onEditClick(props.id, title, description);
    onClose();
    // setTitle("");
    // setDescription("");
  };
  return (
    <>
    <IconButton
      onClick={onOpen}
      width="50px"
      mr="0.5em"
      height="50px"
      mt="0.5em"
      float="right"
      colorScheme="blue"
      aria-label="Call Segun"
      size="lg"
      icon={<EditIcon />}
    />
    <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit your Task</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel>TITLE</FormLabel>
                <Input
                  ref={initialRef}
                  defaultValue={props.title}
                  onChange={titleChangeHandler}
                />
              </FormControl>

              <FormControl mt={4} isRequired>
                <FormLabel>DESCRIPTION</FormLabel>
                <Textarea
                  defaultValue={props.description}
                  onChange={descriptionChangeHandler}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
      </>
  );
}
