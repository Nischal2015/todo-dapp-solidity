import { PlusIcon } from "@heroicons/react/24/outline";
import { StyledButton } from "./Styles";

interface AddButtonProps {
  onClick?: () => any;
}

function AddButton({ onClick = () => {} }: AddButtonProps) {
  return (
    <StyledButton onClick={onClick}>
      <PlusIcon height={20} />
    </StyledButton>
  );
}

export default AddButton;
