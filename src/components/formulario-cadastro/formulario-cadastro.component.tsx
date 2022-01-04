import { FunctionComponent } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

interface FormularioProps {
  
}
 
const FormularioCadastro: FunctionComponent<FormularioProps> = () => {
  return (
    <form>
      <TextField id="nome" label="Nome" variant="outlined" fullWidth />
      <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth />
      <TextField id="cpf" label="CPF" variant="outlined" fullWidth />

      <label htmlFor="promocoes">Promoções</label>
      <input id="promocoes" type="checkbox" />

      <label htmlFor="novidades">Novidades</label>
      <input id="novidades" type="checkbox" />

      <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
    </form>
  );
}
 
export default FormularioCadastro;
