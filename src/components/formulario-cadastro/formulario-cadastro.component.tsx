import { FunctionComponent } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

interface FormularioProps {
  
}
 
const FormularioCadastro: FunctionComponent<FormularioProps> = () => {
  return (
    <form>
      <TextField id="nome" 
        label="Nome" 
        variant="outlined" 
        margin="normal" 
        fullWidth 
      />

      <TextField id="sobrenome" 
        label="Sobrenome" 
        variant="outlined" 
        margin="normal" 
        fullWidth 
      />

      <TextField id="cpf" 
        label="CPF" 
        variant="outlined" 
        margin="normal" 
        fullWidth 
      />

      <FormControlLabel label="Promoções"
        control={
          <Switch name="promocoes" 
            color="primary" 
            defaultChecked={true} 
          />
        }
      />

      <FormControlLabel label="Novidades" 
        control={
          <Switch name="novidades" 
            color="primary" 
            defaultChecked={true}
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
    </form>
  );
}
 
export default FormularioCadastro;
