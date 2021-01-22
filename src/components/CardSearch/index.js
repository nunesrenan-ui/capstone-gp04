import CardCategory from "../../components/CardCategory";
import CardItem from "../CardItem/index";
import { DivContainer, CardInput, CardsContainer } from "./style";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { productItemThunk } from "../../store/modules/Product/thunks";

const CardSearch = () => {
  const productsData = useSelector((state) => state.products);
  console.log(productsData);

  const [inputValue, setInputValue] = useState("");

  const [buttonCategory, setButtonCategory] = useState({
    active: false,
    category: "",
  });

  const { active, category } = buttonCategory;

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  const findProduct = productsData.filter((item) =>
    item.nome.toLowerCase().includes(inputValue)
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const moreInfo = (products) => {
    dispatch(productItemThunk(products));
    history.push("/description");
  };

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
        <CardInput value={inputValue} onChange={onChange} />
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
        <CardsContainer>
          {findProduct.map((value, index) => (
            <CardItem
              key={index}
              descricao={value.descricao}
              nome={value.nome}
              imagem={value.imagem}
              info={() => moreInfo(value)}
            />
          ))}
        </CardsContainer>
      </DivContainer>
      <CardsContainer>
        {findProduct.map((value, index) => (
          <CardItem
            key={index}
            descricao={value.descricao}
            nome={value.nome}
            imagem={value.imagem}
            info={() => moreInfo(value)}
          />
        ))}
      </CardsContainer>
    </>
  );
};

export default CardSearch;
