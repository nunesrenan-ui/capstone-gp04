import { CardItemCaterory, CardCategorys } from "./style";
import { Desktop } from "grommet-icons";

const CardCategory = () => {
  return (
    <>
      <CardCategorys>
        <CardItemCaterory>
          <Desktop />
        </CardItemCaterory>
        <CardItemCaterory>a</CardItemCaterory>
        <CardItemCaterory>a</CardItemCaterory>
        <CardItemCaterory>a</CardItemCaterory>
      </CardCategorys>
    </>
  );
};

export default CardCategory;
