import './App.scss';
import { Container, Typography } from '@material-ui/core';
import FormularioCadastro from './components/formulario-cadastro';
import { ICadastro } from './interfaces/cadastro.interface';

function App() {

  const sumbitForm = (cadastro: ICadastro) => {
    console.log('Formulário enviado');
    console.log(cadastro);
  }

  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
      <FormularioCadastro onSubmit={sumbitForm} />
    </Container>
  );
}

export default App;
