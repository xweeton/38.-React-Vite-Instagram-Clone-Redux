import { Button, Image } from "react-bootstrap";

export default function IconButton({
  isTop,
  isBottom,
  className,
  onClick,
  src,
  isImage,
}) {
  let margin = "light";

  if (isTop) {
    margin = "light my-4";
  } else if (isBottom) {
    margin = "light mt-auto mb-3";
  } else if (isImage) {
    margin = "light mt-3";
  }

  return (
    <Button variant={margin} style={{ marginBottom: "7px" }} onClick={onClick}>
      <i className={className} style={{ fontSize: "24px" }} />
      <Image src={src} height={"35px"} />
    </Button>
  );
}
