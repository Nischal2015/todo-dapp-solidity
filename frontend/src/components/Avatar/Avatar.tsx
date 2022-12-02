import { StyledDiv, StyledImg } from "./Styles";

interface AvatarProps {
  src: string;
  altText?: string;
}

function Avatar({ src, altText }: AvatarProps) {
  return (
    <StyledDiv>
      <StyledImg src={src} alt={altText || "Description of Image"} />
    </StyledDiv>
  );
}

export default Avatar;
