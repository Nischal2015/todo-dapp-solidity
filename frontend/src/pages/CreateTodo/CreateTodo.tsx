import { useRef, useState } from "react";
import { Button, Modal, TodoModalContent } from "~/components";
import { PlusIcon } from "@heroicons/react/24/solid";
import { ButtonItemSpan, ButtonWrapper } from "./Styles";
import { fetchData } from "~/lib/fetchData";
import { useTodo } from "~/context";

function CreateTodo() {
  const [openModal, setOpenModal] = useState(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const { addTodo } = fetchData();
  const { setTodos } = useTodo();

  const buttonClickHandler = async () => {
    setOpenModal(false);
    const latestData = await addTodo(
      titleRef.current!.value,
      descriptionRef.current!.value
    );
    setTodos(latestData);
  };

  return (
    <>
      <ButtonWrapper>
        <Button onClick={() => setOpenModal(true)}>
          <ButtonItemSpan>
            <PlusIcon height={22} />
            Create New Todo
          </ButtonItemSpan>
        </Button>
      </ButtonWrapper>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        renderContent={
          <TodoModalContent
            heading='Create Todo'
            titlePlaceholder='Todo Name'
            descriptionPlaceHolder='Todo description...'
            buttonText='Create'
            setOpenModal={setOpenModal}
            buttonHandler={buttonClickHandler}
            titleRef={titleRef}
            descriptionRef={descriptionRef}
          />
        }
      />
    </>
  );
}

export default CreateTodo;
