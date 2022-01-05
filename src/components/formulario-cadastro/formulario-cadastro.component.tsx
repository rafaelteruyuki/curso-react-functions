import { FunctionComponent, useEffect, useState } from "react";
import { IErro } from "../../interfaces/erros-formulario.interface";
import DadosPessoais from "./dados-pessoais";
import Login from "./login";
import Entrega from "./entrega";
import { ILogin } from "../../interfaces/login.interface";
import { IPessoa } from "../../interfaces/pessoa.interface";
import { IEndereco } from "../../interfaces/endereco.interface";
import { ICadastro } from "../../interfaces/cadastro.interface";
import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";

interface FormularioProps {
  onSubmit: (cadastro: ICadastro) => void;
  validaCPF: (cpf: string) => IErro;
}

const FormularioCadastro: FunctionComponent<FormularioProps> = ({ onSubmit, validaCPF }) => {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [cadastro, setDatos] = useState<ICadastro>();

  useEffect(() => {
    if(etapaAtual === forms.length-1) {
      onSubmit(cadastro as ICadastro);
    }
  })

  const proximo = () => {
    setEtapaAtual(etapaAtual+1);
  };

  const coletarDados = (dados: ILogin | IPessoa | IEndereco) => {
    setDatos({...cadastro as ICadastro, ...dados});
    proximo();
  };

  const forms = [
    <Login onSubmit={coletarDados} />,
    <DadosPessoais onSubmit={coletarDados} validaCPF={validaCPF} />,
    <Entrega onSubmit={coletarDados} />,
    <Typography variant="h5" align="center">Obrigado pelo cadastro!</Typography>
  ];

  const formularioAtual = (etapa: number): JSX.Element => {
    return forms[etapa];
  };

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Endereço</StepLabel></Step>
        <Step completed={(etapaAtual === forms.length-1)}><StepLabel>Finalização</StepLabel></Step>
      </Stepper>

      {formularioAtual(etapaAtual)}
    </>
  );
}

export default FormularioCadastro;
