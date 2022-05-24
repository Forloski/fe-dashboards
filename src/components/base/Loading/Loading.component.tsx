import Image from "next/image";
import LoadingAnimation from "./Loading.animation";

type Props = {
  height: number;
  width: number;
};

const LoadingBaseComponent = (props: Props) => {
  const { height, width } = props;

  return (
    <LoadingAnimation style={{ height, width }}>
      <Image
        src="/PefisaLogo.svg"
        width={width}
        height={height}
        alt="Loading..."
      />
    </LoadingAnimation>
  );
};

export default LoadingBaseComponent;
