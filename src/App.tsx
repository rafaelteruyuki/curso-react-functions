import { Container, Typography } from '@material-ui/core';
import React from 'react';
import './App.scss';
import FormularioCadastro from './components/formulario-cadastro';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
      <FormularioCadastro />
    </Container>
  );
}

export default App;
