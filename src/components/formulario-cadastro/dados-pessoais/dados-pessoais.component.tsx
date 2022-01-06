import { FormEvent, FunctionComponent, useContext, useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import { IPessoa } from "../../../interfaces/pessoa.interface";
import ValidacoesDadosPessoais from "../../../contexts/validacoes-dados-pessoais.context";
import useErros from "../../../hooks/useErros.hook";
interface DadosPessoaisProps {
  onSubmit: (pessoa: IPessoa) => void;
}
 
const DadosPessoais: FunctionComponent<DadosPessoaisProps> = ({onSubmit}) => {
  const validacoes = useContext(ValidacoesDadosPessoais);

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(possoEnviar()) {
      onSubmit({nome, sobrenome, cpf, promocoes, novidades});
    }
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
        onBlur={event => validarCampos(event)}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        label="CPF"
        name="cpf"
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

      <Button type="submit" 
        variant="contained" 
        color="primary"
      >Cadastrar</Button>
    </form>
  );
}
 
export default DadosPessoais;
