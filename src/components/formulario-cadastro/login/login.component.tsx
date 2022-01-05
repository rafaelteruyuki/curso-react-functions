import { Button, TextField } from "@material-ui/core";
import { FormEvent, FunctionComponent, useState } from "react";
import { ILogin } from "../../../interfaces/login.interface";

interface LoginProps {
  onSubmit: (login: ILogin) => void;
}
 
const Login: FunctionComponent<LoginProps> = ({onSubmit}) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({email, senha});
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
      >Cadastrar</Button>

    </form>
  );
}
 
export default Login;
