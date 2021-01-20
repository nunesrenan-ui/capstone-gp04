import { CardItemCategory, CardCategorys } from "./style";
import { Desktop, Book, Java, StreetView, Basket } from "grommet-icons";

const CardCategory = () => {
  return (
    <CardCategorys>
      <CardItemCategory>
        <Desktop />
        Eletrônicos
      </CardItemCategory>
      <CardItemCategory>
        <Book />
        Livros
      </CardItemCategory>
      <CardItemCategory>
        <Java />
        Objetos
      </CardItemCategory>
      <CardItemCategory>
        <StreetView />
        Roupas
      </CardItemCategory>
      <CardItemCategory>
        <Basket />
        Comidas
      </CardItemCategory>
    </CardCategorys>
  );
};

export default CardCategory;
