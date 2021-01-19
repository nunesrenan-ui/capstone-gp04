import CardCategory from "../../components/CardCategory";
import { CustomSuggestions } from "../../components/SearchInput";
import { SearchButton } from "../../components/SearchButton";

import { Card, CardInput, CardTop } from "./style";

const CartSearch = () => {
  return (
    <>
      <Card>
        <CardTop>
          <CustomSuggestions />
          <SearchButton />
        </CardTop>
        <CardCategory />
      </Card>
    </>
  );
};

export default CartSearch;
