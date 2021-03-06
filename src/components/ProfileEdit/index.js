//GROMMET COMPONENTS
import { Box, Form, FormField, TextInput, Button } from "grommet";

import {
  User,
  Phone,
  Hide,
  View,
  Camera,
  Lock,
  StatusGood,
} from "grommet-icons";

//HOOKS
import { useState } from "react";
import axios from "axios";

const ProfileEdit = ({ userId, token }) => {
  const [nameVal, setNameVal] = useState("");
  const [lastNameVal, setLastNameVal] = useState("");
  const [phoneVal, setPhoneVal] = useState("");
  const [photoVal, setPhotoVal] = useState("");
  const [passwordVal, setPassworVal] = useState("");

  const [value, setValue] = useState({
    name: "",
    lastName: "",
    phone: "",
    profilePicture: "",
    password: "",
  });

  const clear = () => {
    setValue({
      name: "",
      lastName: "",
      phone: "",
      profilePicture: "",
      password: "",
    });
  };

  const { name, lastName, phone, profilePicture, password } = value;

  const checkData = () => {
    if (name === "") {
      delete value.name;
    }
    if (lastName === "") {
      delete value.lastName;
    }
    if (phone === "") {
      delete value.phone;
    }
    if (profilePicture === "") {
      delete value.profilePicture;
    }
    if (password === "") {
      delete value.password;
    }
  };

  checkData();

  const [reveal, setReveal] = useState(false);

  const onSubmit = () => {
    checkData();
    axios
      .patch(
        `https://api-capstone-grupo04.herokuapp.com/users/${userId}`,
        value,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        clear();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box round background="rgba(0, 0, 0, 0.7)" pad="medium">
      <Form value={value} onChange={(val) => setValue(val)} onSubmit={onSubmit}>
        <Box>
          <FormField
            label="Nome"
            name="name"
            value={nameVal}
            icon={<User />}
            component={TextInput}
            onChange={(event) => setNameVal(event.target.value)}
          ></FormField>
          <Box align="center" justify="center">
            {name && <StatusGood />}
          </Box>
        </Box>

        <Box>
          <FormField
            label="Sobrenome"
            name="lastName"
            icon={<User />}
            component={TextInput}
            value={lastNameVal}
            onChange={(event) => setLastNameVal(event.target.value)}
          />
          <Box align="center" justify="center">
            {lastName && <StatusGood />}
          </Box>
        </Box>

        <Box>
          <FormField
            label="Telefone"
            name="phone"
            icon={<Phone />}
            component={TextInput}
            value={phoneVal}
            onChange={(event) => setPhoneVal(event.target.value)}
          />
          <Box align="center" justify="center">
            {phone && <StatusGood />}
          </Box>
        </Box>

        <Box>
          <FormField
            label="Foto de Perfil"
            name="profilePicture"
            icon={<Camera />}
            component={TextInput}
            value={photoVal}
            onChange={(event) => setPhotoVal(event.target.value)}
          />
        </Box>

        <Box direction="row">
          <FormField
            label="Senha"
            name="password"
            icon={<Lock />}
            type={reveal ? "text" : "password"}
            value={passwordVal}
            onChange={(event) => setPassworVal(event.target.value)}
          />

          <Button
            icon={reveal ? <View size="small" /> : <Hide size="small" />}
            onClick={() => setReveal(!reveal)}
          />

          <Box align="center" justify="center">
            {password && <StatusGood />}
          </Box>
        </Box>
        <Box align="center" pad="small">
          <Button primary label="Enviar" type="submit" />
        </Box>
      </Form>
    </Box>
  );
};

export default ProfileEdit;
