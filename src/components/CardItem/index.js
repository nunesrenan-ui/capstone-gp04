//STYLE
import { Card, CardImage, CardBody, CardDescription, CardTitle } from "./style";

const CardItem = () => {
  return (
    <>
      <Card>
        <CardImage />
        <CardBody>
          <CardTitle>Lorem Impsun</CardTitle>
          <CardDescription>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI,{" "}
          </CardDescription>
        </CardBody>
      </Card>
    </>
  );
};
export default CardItem;
