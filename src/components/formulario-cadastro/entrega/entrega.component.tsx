import { Button, TextField } from "@material-ui/core";
import { FormEvent, FunctionComponent, useState } from "react";
import { IEndereco } from "../../../interfaces/endereco.interface";

interface EntregaProps {
  onSubmit: (endereco: IEndereco) => void;
}

const Entrega: FunctionComponent<EntregaProps> = ({onSubmit}) => {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({cep, endereco, numero, estado, cidade});
  }

  return (
    <form onSubmit={event => handleFormSubmit(event)}>
      <TextField id="cep"
        value={cep}
        onChange={e => setCep(e.target.value)}
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
      />

      <TextField id="endereco"
        value={endereco}
        onChange={e => setEndereco(e.target.value)}
        label="Endereco"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField id="numero"
        value={numero}
        onChange={e => setNumero(e.target.value)}
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
      />

      <TextField id="estado"
        value={estado}
        onChange={e => setEstado(e.target.value)}
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
      />

      <TextField id="cidade"
        value={cidade}
        onChange={e => setCidade(e.target.value)}
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
      />

      <Button type="submit"
        variant="contained"
        color="primary"
        fullWidth
      >Finalizar cadastro</Button>

    </form>
  );
}

export default Entrega;
