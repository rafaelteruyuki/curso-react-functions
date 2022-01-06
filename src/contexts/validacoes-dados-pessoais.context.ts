import React from 'react';
import { IValidacoes, IValido } from '../interfaces/validators.interfaces';

const validaCPF = (cpf: string): IValido => {
  return cpf.length !== 11 ? 
    {valido: false, texto: 'CPF deve ter 11 dígitos'} : {valido: true, texto: ''};
};

const defaultValue: IValidacoes = {
  cpf: validaCPF
};

const ValidacoesDadosPessoais = React.createContext(defaultValue);

export default ValidacoesDadosPessoais;
