import { ListProps } from "../List.d";

export interface ListItemProps extends ListProps {
  index: number;
}

export interface StyledListItemProps {
  isDragging: boolean;
}
