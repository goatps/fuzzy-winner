import React from "react";

import {
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

export default function AddTodo(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const titleChangeHandler = (e: any) => {
    setTitle(e.target.value);
  };

  const descriptionChangeHandler = (e: any) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // alert(`Submitting Name : Title ${title} Desc : ${description}`);
    props.onAddTodo(title, description);
    onClose();
    setTitle("");
    setDescription(""); 
  };
  
  return (
    <div>
      <Button onClick={onOpen} colorScheme="blue" mt={4} width="100%">
        ADD TASK
      </Button>
      {/* <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add your Task</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel>TITLE</FormLabel>
                <Input ref={initialRef} placeholder="Title" onChange={titleChangeHandler} />
              </FormControl>

              <FormControl mt={4} isRequired>
                <FormLabel>DESCRIPTION</FormLabel>
                <Textarea placeholder="Description" onChange={descriptionChangeHandler} />
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
    </div>
  );
}
