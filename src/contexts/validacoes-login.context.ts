import React from "react";
import { IValidacoes, IValido } from "../interfaces/validators.interfaces";

const validaSenha = (senha: string): IValido => {
  return senha.length < 4 || senha.length > 72 ? 
  {valido: false, texto:'Senha deve ter de 4 a 72 dígitos'} : {valido: true, texto: ''};
}

const defaultValue: IValidacoes = {
  senha: validaSenha
};

const ValidacoesLogin = React.createContext(defaultValue);

export default ValidacoesLogin;