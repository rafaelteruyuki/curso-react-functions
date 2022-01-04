import Button from "@material-ui/core/Button";
import { FunctionComponent } from "react";

interface FormularioProps {
  
}
 
const FormularioCadastro: FunctionComponent<FormularioProps> = () => {
  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <input id="nome" type="text" />

      <label htmlFor="sobrenome">Sobrenome</label>
      <input id="sobrenome" type="text" />

      <label htmlFor="cpf">CPF</label>
      <input id="cpf" type="text" />

      <label htmlFor="promocoes">Promoções</label>
      <input id="promocoes" type="checkbox" />

      <label htmlFor="novidades">Novidades</label>
      <input id="novidades" type="checkbox" />

      <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
    </form>
  );
}
 
export default FormularioCadastro;
