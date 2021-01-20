import CardCategory from "../../components/CardCategory";
import { CustomSuggestions } from "../../components/SearchInput";
import { DivContainer } from "./style";

const CartSearch = () => {
  return (
    <>
      <DivContainer>
        <CustomSuggestions />
        {/* <Btn>Buscar</Btn> */}
        <CardCategory />
      </DivContainer>
    </>
  );
};

export default CartSearch;
