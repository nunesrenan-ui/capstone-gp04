import { useState } from "react";

import { useHistory } from "react-router-dom";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { Box, Form, FormField, TextInput, Button } from "grommet";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

import { MailOption, Hide, View, Lock, StatusGood } from "grommet-icons";

const UserLogin = () => {
  const history = useHistory();
  const [reveal, setReveal] = useState(false);
  const [emailVal, setEmailVal] = useState(false);
  const [passwordVal, setPasswordVal] = useState(false);
  const [failedLogin, setFailedLogin] = useState(false);

  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const tryLogin = (values) => {
    console.log(values);
    //history.push('/perfil')
    //validação do email e senha com a API
    //inserir mensagem de erro depois,
    //caso conta nao seja encontrada.(E-mail ou senha inválidos.)
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <Box round background="rgba(0, 0, 0, 0.7)">
          {/* <Box background="#FFC15E" justify="center" align="center" round>
          <h2>Login</h2>
        </Box> */}

          <Header>
            <div>
              <Link to="/cadastro">Não é um Giver? Cadastre-se</Link>
            </div>
          </Header>
          <Box
            align="center"
            justify="center"
            pad="xsmall"
            round
            direction="column"
          >
            <Form
              value={value}
              onChange={(val) => setValue(val)}
              onSubmit={({ value: val }) => tryLogin(val)}
            >
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
                  validate={[
                    (password) => {
                      if (password.length > 2) {
                        setPasswordVal(true);
                      }
                      return undefined;
                    },
                  ]}
                />
                <Box align="center" justify="center">
                  {passwordVal && <StatusGood />}

                  <Button
                    icon={
                      reveal ? <View size="medium" /> : <Hide size="medium" />
                    }
                    onClick={() => setReveal(!reveal)}
                  />
                </Box>
              </Box>
              <Box align="center" pad="xsmall">
                <Button primary label="Enviar" type="submit" />
              </Box>
              {failedLogin && <span>Login ou senha inválidos.</span>}
            </Form>
          </Box>
        </Box>
        <Footer />
      </motion.div>
    </>
  );
};

export default UserLogin;

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
