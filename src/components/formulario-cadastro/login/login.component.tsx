import { Button, TextField } from "@material-ui/core";
import { FormEvent, FunctionComponent, useContext, useState } from "react";
import ValidacoesLogin from "../../../contexts/validacoes-login.context";
import useErros from "../../../hooks/useErros.hook";
import { ILogin } from "../../../interfaces/login.interface";

interface LoginProps {
  onSubmit: (login: ILogin) => void;
}
 
const Login: FunctionComponent<LoginProps> = ({onSubmit}) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const validacoes = useContext(ValidacoesLogin);

  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(possoEnviar()) onSubmit({email, senha});
  };

  return (
    <form onSubmit={event => handleFormSubmit(event)}>
      
      <TextField id="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        label="E-mail" 
        type="email"
        variant="outlined" 
        margin="normal" 
        fullWidth
        required
      />

      <TextField id="senha"
        value={senha}
        onChange={e => setSenha(e.target.value)}
        onBlur={event => validarCampos(event)}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        name="senha"
        label="Senha" 
        type="password"
        variant="outlined" 
        margin="normal" 
        fullWidth
        required
      />

      <Button type="submit"
        variant="contained" 
        color="primary"
      >Próximo</Button>

    </form>
  );
}
 
export default Login;
