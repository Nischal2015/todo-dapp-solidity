import styled from "@emotion/styled";
import { IListProps, ListProps } from "./List.d";
import { ListItem } from "./ListItem";
import { Droppable } from "@hello-pangea/dnd";
import { Typography } from "~/components";

const StyledList = styled.div({
  display: "flex",
  flexDirection: "column",
});

function List({ datas, column }: IListProps) {
  return (
    <>
      <Typography as='h2'>{column.title}</Typography>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <StyledList ref={provided.innerRef} {...provided.droppableProps}>
            {datas.map((data: ListProps, index: number) => (
              <ListItem
                key={data.id}
                title={data.title}
                id={data.id}
                index={index}
              />
            ))}
            {provided.placeholder}
          </StyledList>
        )}
      </Droppable>
    </>
  );
}

export default List;
