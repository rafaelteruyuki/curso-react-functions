export interface IValido {
  valido: boolean;
  texto: string;
}

export interface IValidacoes {
  [key: string]: (term: string) => IValido;
}

export interface IErros {
  [key: string]: IValido;
}
