//STYLE
import { Card, CardImage, CardBody } from "./style";

const CardItem = ({ donation, description }) => {
  return (
    <Card>
      <CardImage />
      <CardBody>
        <h2>{donation}</h2>
        <span>{description}</span>
      </CardBody>
    </Card>
  );
};
export default CardItem;
