import CardCategory from "../../components/CardCategory";

import { Card, CardInput, CardTop } from "./style";

import { grommet, Form, Box, Button, Grommet, TextInput, Text } from "grommet";
// import { grommet } from "grommet/themes";

const coloredButton = {
  button: {
    border: {
      color: "none",
    },
    color: { dark: "accent-1", light: "dark-2" },
    primary: {
      color: "#D3F3B7",
    },
  },
};

const Input = {
  button: {
    border: {
      color: "none",
    },
    color: { dark: "accent-1", light: "dark-2" },
    primary: {
      color: "#D3F3B7",
    },
  },
};

const CartSearch = () => {
  return (
    <>
      <Card>
        <CardTop>
          <Box round>
            <CardInput>
              <TextInput name="name" placeholder="Buscar doações" />
            </CardInput>
          </Box>
          <Grommet theme={coloredButton}>
            <Box align="end" pad="medium">
              <Button primary label="Search" />
            </Box>
          </Grommet>
        </CardTop>
        <CardCategory />
      </Card>
    </>
  );
};

export default CartSearch;
