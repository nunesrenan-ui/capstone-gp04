import { Box, Form, FormField, Button, TextArea, CheckBox } from "grommet";

import { FormEdit } from "grommet-icons";

import { useState } from "react";

import { Container } from "./style";

const DonateTab = () => {
  const [cloth, setCloth] = useState({ check: true, value: "" });
  const [book, setBook] = useState({ check: false, value: "" });
  const [eletronic, setEletronic] = useState({ check: false, value: "" });

  const [value, setValue] = useState({
    brand: "",
    model: "",
    description: "",
    size: "",
    author: "",
    title: "",
  });

  const onFinish = (values) => {
    console.log(values);
    //history.push('/login')
    // Testes da API, levar para a pagina de login depois.
  };

  return (
    <Box round background="rgba(0, 0, 0, 0.7)">
      <Form
        value={value}
        onChange={(val) => setValue(val)}
        onSubmit={({ value: val }) => onFinish(val)}
      >
        <Box
          direction="row"
          pad="xsmall"
          margin={{ left: "small", right: "small" }}
        >
          <FormField label="Tipo de doação">
            <Container direction="row" pad="xsmall" margin={{ left: "small" }}>
              <CheckBox
                checked={cloth.check}
                onChange={(event) => {
                  setCloth({ check: event.target.checked, value: "vestuario" });
                  setBook({ check: false, value: "" });
                  setEletronic({ check: false, value: "" });
                }}
                label="Vestuário"
              />
              <CheckBox
                checked={book.check}
                onChange={(event) => {
                  setBook({ check: event.target.checked, value: "livro" });
                  setCloth({ check: false, value: "" });
                  setEletronic({ check: false, value: "" });
                }}
                label="Livro"
              />
              <CheckBox
                checked={eletronic.check}
                onChange={(event) => {
                  setEletronic({
                    check: event.target.checked,
                    value: "eletronico",
                  });
                  setBook({ check: false, value: "" });
                  setCloth({ check: false, value: "" });
                }}
                label="Eletrônico"
              />
            </Container>
          </FormField>
        </Box>
        {(cloth.check || eletronic.check) && (
          <Box
            direction="row"
            pad="xsmall"
            margin={{ left: "small", right: "small" }}
          >
            <FormField label="Marca" name="brand" icon={<FormEdit />} />
          </Box>
        )}
        {eletronic.check && (
          <Box
            direction="row"
            pad="xsmall"
            margin={{ left: "small", right: "small" }}
          >
            <FormField label="Modelo" name="model" icon={<FormEdit />} />
          </Box>
        )}
        {cloth.check && (
          <Box
            direction="row"
            pad="xsmall"
            margin={{ left: "small", right: "small" }}
          >
            <FormField label="Tamanho" name="size" icon={<FormEdit />} />
          </Box>
        )}
        {book.check && (
          <Box
            direction="row"
            pad="xsmall"
            margin={{ left: "small", right: "small" }}
          >
            <FormField label="Autor" name="author" icon={<FormEdit />} />
          </Box>
        )}
        {book.check && (
          <Box
            direction="row"
            pad="xsmall"
            margin={{ left: "small", right: "small" }}
          >
            <FormField icon={<FormEdit />} label="Título" name="title" />
          </Box>
        )}

        <Box
          direction="row"
          pad="xsmall"
          margin={{ left: "small", right: "small" }}
        >
          <FormField
            label="Descrição"
            name="description"
            icon={<FormEdit />}
            htmlFor="text-area"
            component={TextArea}
          />
        </Box>
        <Box align="center" pad="small">
          <Button primary label="Enviar" type="submit" />
        </Box>
      </Form>
    </Box>
  );
};

export default DonateTab;
