import CardCategory from "../../components/CardCategory";
import CardItem from "../CardItem/index";

import { DivContainer, CardInput, CardsContainer } from "./style";
import { useSelector } from "react-redux";
import { useState } from "react";

const CartSearch = () => {
  const productsData = useSelector((state) => state.products);
  console.log(productsData);

  const [inputValue, setInputValue] = useState("");

  const [buttonCategory, setButtonCategory] = useState({
    active: false,
    category: "",
  });

  const { active, category } = buttonCategory;

  const onchange = (event) => {
    setInputValue(event.target.value);
  };

  const findProduct = productsData.filter((item) =>
    item.nome.toLowerCase().match(inputValue)
  );

  //Usar quando a api estiver funcionando
  /*   const setFilter = productsData.filter((item) =>
    item.donation.toLowerCase().includes(category)
  );

  const findFiltered = setFilter.filter((item) =>
    item.nome.toLowerCase().includes(inputValue)
  ); */

  return (
    <>
      <DivContainer>
        <CardInput value={inputValue} onChange={onchange} />
        <CardCategory
          onClickEletronic={() =>
            setButtonCategory({ active: true, category: "Eletrônicos" })
          }
          onClickClothes={() =>
            setButtonCategory({ active: true, category: "Vestuário" })
          }
          onClickBooks={() =>
            setButtonCategory({ active: true, category: "Livros" })
          }
        />
      </DivContainer>
      <CardsContainer>
        {findProduct.map(({ descricao, nome }) => (
          <CardItem descricao={descricao} nome={nome} />
        ))}
      </CardsContainer>
    </>
  );
};

export default CartSearch;
