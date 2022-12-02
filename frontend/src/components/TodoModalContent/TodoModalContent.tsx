import { RefObject } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "../Button";
import { TextField } from "../TextField";
import { Typography } from "../Typography";
import { TodoProps } from "~/lib/fetchData";
import { HoverSpan, Header, Body, Footer } from "./Styles";

interface TodoModalContentProps {
  heading: string;
  titlePlaceholder: string;
  descriptionPlaceHolder: string;
  setOpenModal: (value: boolean) => void;
  buttonHandler: any;
  buttonText: string;
  titleRef: RefObject<HTMLInputElement>;
  descriptionRef: RefObject<HTMLTextAreaElement>;
  data?: TodoProps;
}

function TodoModalContent({
  heading,
  titlePlaceholder,
  descriptionPlaceHolder,
  setOpenModal,
  buttonHandler,
  buttonText,
  titleRef,
  descriptionRef,
  data,
}: TodoModalContentProps) {
  return (
    <>
      <Header>
        <Typography as='h2'>{heading}</Typography>
        <HoverSpan size='3.2rem'>
          <XMarkIcon
            height={28}
            onClick={() => setOpenModal(false)}
            cursor='pointer'
          />
        </HoverSpan>
      </Header>
      <Body>
        <TextField
          label='Title'
          variant='contained'
          placeholder={titlePlaceholder}
          ref={titleRef}
          defaultValue={data?.taskTitle}
        />
        <TextField
          as='textarea'
          label='description'
          variant='contained'
          rows={8}
          placeholder={descriptionPlaceHolder}
          ref={descriptionRef}
          defaultValue={data?.taskDescription}
        />
      </Body>
      <Footer>
        <Button variant='outlined' onClick={() => setOpenModal(false)}>
          Cancel
        </Button>
        <Button onClick={buttonHandler}>{buttonText}</Button>
      </Footer>
    </>
  );
}

export default TodoModalContent;
