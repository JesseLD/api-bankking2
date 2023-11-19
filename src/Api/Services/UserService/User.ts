export interface UserInterface {
  id: number;
  cpf: string;
  email: string;
  uuid: string;
  balance: number;
  name: string;
  type: "PF" | "PJ";
  password: string;
}

export class User implements UserInterface {
  id: number;
  cpf: string;
  email: string;
  uuid: string;
  balance: number;
  name: string;
  type: "PF" | "PJ";
  password: string;

  constructor(
    id: number,
    cpf: string,
    email: string,
    uuid: string,
    balance: number,
    name: string,
    type: "PF" | "PJ",
    password: string
  ) {
    this.id = id;
    this.cpf = cpf;
    this.email = email;
    this.uuid = uuid;
    this.balance = balance;
    this.name = name;
    this.type = type;
    this.password = password;
  }
  /*
        Cannot be changed
    */
  async getId() {}
  async getCpf() {}
  async getEmail() {}
  async getUUID() {}

  /*
    Can be changed
  */

  async getBalance() {}
  async getName() {}
  async getType() {}
  async getPassword() {}

  async setBalance() {}
  async setName() {}
  async setType() {}
  async setPassword() {}
}
