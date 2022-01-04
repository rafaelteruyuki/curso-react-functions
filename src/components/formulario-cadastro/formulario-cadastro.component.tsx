import React, { FormEvent, FunctionComponent, useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import { IPessoa } from "../../interfaces/pessoa.interface";

interface FormularioProps {
  onSubmit: (pessoa: IPessoa) => void;
}
 
const FormularioCadastro: FunctionComponent<FormularioProps> = ({onSubmit}) => {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({nome, sobrenome, cpf, promocoes, novidades});
  }

  return (
    <form onSubmit={event => handleFormSubmit(event)}>
      <TextField id="nome" 
        value={nome}
        onChange={event => setNome(event.target.value)}
        label="Nome" 
        variant="outlined" 
        margin="normal" 
        fullWidth 
      />

      <TextField id="sobrenome"
        value={sobrenome}
        onChange={event => setSobrenome(event.target.value)} 
        label="Sobrenome" 
        variant="outlined" 
        margin="normal" 
        fullWidth 
      />

      <TextField id="cpf"
        value={cpf}
        onChange={event => setCpf(event.target.value)} 
        label="CPF" 
        variant="outlined" 
        margin="normal" 
        fullWidth 
      />

      <FormControlLabel label="Promoções"
        control={
          <Switch name="promocoes" 
            color="primary" 
            checked={promocoes}
            onChange={event => setPromocoes(event.target.checked)}
          />
        }
      />

      <FormControlLabel label="Novidades" 
        control={
          <Switch name="novidades" 
            color="primary" 
            checked={novidades}
            onChange={event => setNovidades(event.target.checked)}
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
    </form>
  );
}
 
export default FormularioCadastro;
