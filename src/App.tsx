import './App.scss';
import { Container, Typography } from '@material-ui/core';
import FormularioCadastro from './components/formulario-cadastro';
import { IErro,} from './interfaces/erros-formulario.interface';
import { ICadastro } from './interfaces/cadastro.interface';

function App() {

  const sumbitForm = (cadastro: ICadastro) => {
    console.log('Formulário enviado');
    console.log(cadastro);
  }

  const validaCPF = (cpf: string): IErro => {   
    let valido = true;
    let texto = '';

    if(cpf.length !== 11) {
      valido = false; 
      texto = 'CPF deve ter 11 digitos';
    }

    return {valido, texto};
  }

  return (
    <Container component="article" maxWidth="sm">

      <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>

      <FormularioCadastro 
        onSubmit={sumbitForm}
        validaCPF={validaCPF}
      />

    </Container>
  );
}

export default App;
