//OBS : arrumar o required ( nao consigo mudar o texto)

import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

import {
  Grommet,
  Box,
  Form,
  FormField,
  TextInput,
  MaskedInput,
  Text,
  Button,
  Heading,
} from "grommet";
import { dark } from "grommet/themes";
import {
  MailOption,
  User,
  Phone,
  Hide,
  View,
  Lock,
  StatusGood,
} from "grommet-icons";

import { useState } from "react";

import { useHistory } from "react-router-dom";
const requi = "*";
const UserRegister = (props) => {
  const history = useHistory();
  const [nameVal, setNameVal] = useState(false);
  const [lastNameVal, setLastNameVal] = useState(false);
  const [phoneVal, setPhoneVal] = useState(false);
  const [emailVal, setEmailVal] = useState(false);
  const [passwordVal, setPasswordVal] = useState(false);
  const [confirmPasswordVal, setConfirmPasswordVal] = useState(false);

  const [value, setValue] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [reveal, setReveal] = useState(false);

  const onFinish = (values) => {
    console.log(values);
    //history.push('/login')
    // Testes da API, levar para a pagina de login depois.
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Box round background="rgba(0, 0, 0, 0.7)">
        {/* <Box
        background="#FFC15E"
        justify="center"
        align="center"
        round
        pad={{ horizontal: "xsmall", vertical: "xsmall" }}
      >
        <h2>Registre-se</h2>
      </Box> */}
        <Header>
          <div>
            <Link to="/login">Já sou cadastrado</Link>
          </div>
        </Header>
        <Box
          background="rgba(0, 0, 0, 0)"
          align="center"
          justify="center"
          pad="xsmall"
        >
          <Form
            value={value}
            validate="blur"
            onChange={(val) => setValue(val)}
            onSubmit={({ value: val }) => onFinish(val)}
          >
            <Box direction="row" pad="medium" margin={{ left: "large" }}>
              <FormField
                label="Nome"
                name="name"
                icon={<User />}
                component={TextInput}
                required="*"
                validate={[
                  { regexp: /^[a-zA-Z]+$/i, message: "Somente letras." },
                  (name) => {
                    if (name.length >= 3) {
                      setNameVal(true);
                    }
                    return undefined;
                  },
                ]}
              />
              <Box align="center" justify="center">
                {nameVal && <StatusGood />}
              </Box>
            </Box>

            <Box direction="row" pad="medium" margin={{ left: "large" }}>
              <FormField
                label="Sobrenome"
                name="lastName"
                icon={<User />}
                validate={[
                  { regexp: /^[a-zA-Z ]+$/i, message: "Somente letras." },
                  (lastName) => {
                    if (lastName.length >= 2) {
                      setLastNameVal(true);
                    }
                    return undefined;
                  },
                ]}
              />
              <Box align="center" justify="center">
                {lastNameVal && <StatusGood />}
              </Box>
            </Box>

            <Box direction="row" pad="medium" margin={{ left: "large" }}>
              <FormField
                label="Telefone"
                name="phone"
                icon={<Phone />}
                validate={[
                  {
                    regexp: /^[0-9]{10}$/i,
                    message: "Somente números, dez dígitos",
                  },
                  (phone) => {
                    if (phone.length === 10) {
                      setPhoneVal(true);
                    }
                    return undefined;
                  },
                ]}
              />
              <Box align="center" justify="center">
                {phoneVal && <StatusGood />}
              </Box>
            </Box>

            <Box direction="row" pad="medium" margin={{ left: "large" }}>
              <FormField
                label="E-mail"
                name="email"
                icon={<MailOption />}
                required
                validate={[
                  {
                    regexp: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))+$/,
                    placeholder: "exemplo@ex.com",
                    message: "E-mail inválido.",
                  },
                  (email) => {
                    if (email.length > 5) {
                      setEmailVal(true);
                    }
                    return undefined;
                  },
                ]}
              />
              <Box align="center" justify="center">
                {emailVal && <StatusGood />}
              </Box>
            </Box>

            <Box direction="row" pad="medium" margin={{ left: "large" }}>
              <FormField
                label="Senha"
                name="password"
                required
                icon={<Lock />}
                type={reveal ? "text" : "password"}
                // Tentar aplicar mais obrigações a senha
                validate={[
                  {
                    regexp: /[A-Z][0-9]+$/,
                    message: "Ao menos uma letra maiúscula e um número.",
                  },
                  (password) => {
                    if (password.length > 2) {
                      setPasswordVal(true);
                    }
                    return undefined;
                  },
                ]}
              />
              <Button
                icon={reveal ? <View size="medium" /> : <Hide size="medium" />}
                onClick={() => setReveal(!reveal)}
              />
              <Box align="center" justify="center">
                {passwordVal && <StatusGood />}
              </Box>
            </Box>
            <Box direction="row" pad="medium" margin={{ left: "large" }}>
              <FormField
                label="Confirmar Senha"
                name="confirmPassword"
                required
                icon={<Lock />}
                type={reveal ? "text" : "password"}
                validate={[
                  (confirmPassword) => {
                    if (confirmPassword === value.password) {
                      setConfirmPasswordVal(true);
                    }
                    return { message: "As senhas não estão iguais!" };
                  },
                ]}
              />
              <Box align="center" justify="center">
                {confirmPasswordVal && <StatusGood />}
              </Box>
            </Box>
            <Box align="center" pad="small">
              <Button primary label="Enviar" type="submit" />
            </Box>
          </Form>
        </Box>
      </Box>
      <Footer />
    </motion.div>
  );
};

export default UserRegister;

export const Header = styled.div`
  width: 100%;
  height: 5vh;
  background-color: #ff9f1c;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  div {
    margin: 0 1%;
  }
`;
