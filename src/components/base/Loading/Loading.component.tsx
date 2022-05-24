import * as S from "./Loading.styles";

type Props = {
  height: number;
  width: number;
};

const Loading = (props: Props) => {
  const { height, width } = props;

  return (
    <S.AnimatedImage
      src="/PefisaLogo.svg"
      width={width}
      height={height}
      alt="Loading..."
    />
  );
};

export default Loading;
