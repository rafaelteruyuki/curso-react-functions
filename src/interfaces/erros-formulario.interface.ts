export interface IErrosFormulario {
  cpf: IErro;
}

export interface IErro {
  valido: boolean;
  texto: string;
}