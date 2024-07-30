import { Card, CardBody, Image } from "@chakra-ui/react";
interface Props {
  image: string;
}
const ImageCard = ({ image }: Props) => {
  return (
    <Card>
      <CardBody>
        <Image overflow="hidden" src={image} />
      </CardBody>
    </Card>
  );
};

export default ImageCard;
