import {
  Box,
  Button,
  Form,
  FormField,
  RadioButtonGroup,
  Select,
  TextArea,
  TextInput,
  DateInput,
} from "grommet";

import { useState } from "react";

const DonateTab = () => {
  const [donation, setDonation] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [model, setModel] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [comments, setComments] = useState("");

  /*   const onFinish = (values) => {
    console.log(values);
    history.push('/login')
     Testes da API, levar para a pagina de login depois.
  }; */

  return (
    <Box round background="rgba(0, 0, 0, 0.7)" direction="row" pad="small">
      <Form
        onChange={(value) => console.log("Change", value)}
        onReset={() => {
          setDonation("");
          setBrand("");
          setSize("");
          setModel("");
          setComments("");
        }}
        onSubmit={(event) => console.log("Submit", event.value, event.touched)}
      >
        <FormField name="donation" label="Tipo de Doação">
          <RadioButtonGroup
            direction="row"
            name="donation"
            options={["Vestuário", "Livros", "Eletrônicos"]}
            value={donation}
            onChange={(event) => setDonation(event.target.value)}
          />
        </FormField>

        {(donation === "Vestuário" || donation === "Eletrônicos") && (
          <FormField label="Marca" name="brand">
            <TextInput
              name="brand"
              value={brand}
              onChange={(event) => setBrand(event.target.value)}
            />
          </FormField>
        )}

        {donation === "Vestuário" && (
          <FormField label="Tamanho" name="size">
            <Select
              name="size"
              options={["P", "M", "G", "GG", "XGG"]}
              value={size}
              onChange={(event) => setSize(event.option)}
            />
          </FormField>
        )}

        {donation === "Eletrônicos" && (
          <FormField label="Modelo" name="model">
            <TextInput
              name="model"
              value={model}
              onChange={(event) => setModel(event.target.value)}
            />
          </FormField>
        )}

        {donation === "Livros" && (
          <Box>
            <FormField label="Autor" name="author">
              <TextInput
                name="author"
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
              />
            </FormField>
            <FormField label="Título" name="title">
              <TextInput
                name="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </FormField>
          </Box>
        )}

        <FormField label="Foto Frontal" name="title">
          <TextInput
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </FormField>

        <FormField label="Foto Traseira" name="title">
          <TextInput
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </FormField>

        <FormField label="Foto Lateral" name="title">
          <TextInput
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </FormField>

        <FormField label="Data para Sorteio">
          <DateInput />
        </FormField>

        <FormField label="Descrição" name="comments">
          <TextArea
            name="comments"
            value={comments}
            onChange={(event) => setComments(event.target.value)}
          />
        </FormField>
        <Box direction="row" justify="between" margin={{ top: "medium" }}>
          <Button label="Cancel" />
          <Button type="reset" label="Reset" />
          <Button type="submit" label="Update" primary />
        </Box>
      </Form>
    </Box>
  );
};

export default DonateTab;
