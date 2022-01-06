import React, { useState } from 'react';
import { IErros, IValidacoes } from '../interfaces/validators.interfaces'; 

const criarEstadoInicial = (validacoes: IValidacoes) => {
  const estadoInicial: IErros = {};

  for(let item in validacoes) {
    estadoInicial[item] = { valido: true, texto: '' }
  }

  return estadoInicial;
}

const useErros = (validacoes: IValidacoes) => {
  const estadoInicial = criarEstadoInicial(validacoes);
  const [erros, setErros] = useState<IErros>(estadoInicial);

  const validarCampos = (event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>) => {
    const { name, value } = event.target;
    const novoEstado = {...erros};
    novoEstado[name] = validacoes[name](value);

    setErros(novoEstado);  
  }

  const possoEnviar = (): boolean => {
    for(let campo in erros) {
      if(!erros[campo].valido) return false;
    }
    return true;
  }


  return [erros, validarCampos, possoEnviar] as const;
}


export default useErros;
