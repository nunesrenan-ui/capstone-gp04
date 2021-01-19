import { useState } from "react";

import { useHistory } from "react-router-dom";

import { Box, Form, FormField, TextInput, Button } from "grommet";

import { MailOption, Hide, View, Lock, StatusGood } from "grommet-icons";

const UserLogin = () => {
  const history = useHistory();
  const [reveal, setReveal] = useState(false);
  const [emailVal, setEmailVal] = useState(false);
  const [passwordVal, setPasswordVal] = useState(false);

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
      <Box round background="rgba(0, 0, 0, 0.5)">
        <Box background="#FFC15E" justify="center" align="center" round>
          <h2>Login</h2>
        </Box>
        <Box align="center" justify="center" pad="xsmall" round>
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
              </Box>
              <Button
                icon={reveal ? <View size="medium" /> : <Hide size="medium" />}
                onClick={() => setReveal(!reveal)}
              />
            </Box>
            <Box align="center" pad="xsmall">
              <Button primary label="Enviar" type="submit" />
            </Box>
          </Form>
        </Box>
      </Box>
    </>
  );
};

export default UserLogin;
