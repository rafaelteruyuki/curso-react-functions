import { IEndereco } from "./endereco.interface";
import { ILogin } from "./login.interface";
import { IPessoa } from "./pessoa.interface";

export interface ICadastro extends ILogin, IPessoa, IEndereco { }
