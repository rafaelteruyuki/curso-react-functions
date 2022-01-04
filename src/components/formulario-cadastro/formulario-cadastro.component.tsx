import { FunctionComponent } from "react";
import { IPessoa } from "../../interfaces/pessoa.interface";
import { IErro } from "../../interfaces/erros-formulario.interface";
import DadosPessoais from "./dados-pessoais";
import Login from "./login";
import Entrega from "./entrega";

interface FormularioProps {
  onSubmit: (pessoa: IPessoa) => void;
  validaCPF: (cpf: string) => IErro;
}
 
const FormularioCadastro: FunctionComponent<FormularioProps> = ({onSubmit, validaCPF}) => {

  return (
    <>
      <DadosPessoais onSubmit={onSubmit} validaCPF={validaCPF} />
      <Login />
      <Entrega />
    </>
  );
}
 
export default FormularioCadastro;
