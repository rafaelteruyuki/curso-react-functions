import React, { FormEvent } from 'react';
import { Container, Typography } from '@material-ui/core';
import './App.scss';
import FormularioCadastro from './components/formulario-cadastro';
import { IPessoa } from './interfaces/pessoa.interface';

function App() {

  const sumbitForm = (pessoa: IPessoa) => {
    console.log('Formulário enviado');
    console.log(pessoa);
  }

  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
      <FormularioCadastro onSubmit={sumbitForm} />
    </Container>
  );
}

export default App;
