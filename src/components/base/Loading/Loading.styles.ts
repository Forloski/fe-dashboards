import { styled } from "@mui/material/styles";
import Image from "next/image";

export const AnimatedImage = styled(Image)`
animation: rotation 2.5s ease 0s infinite;

@keyframes rotation {
  0% {transform: rotateY(0deg)}
  20% {transform: rotateY(0deg)}
  100% {transform: rotateY(360deg)}}
}
`;
