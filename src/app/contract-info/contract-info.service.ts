import { contract } from "./contract-info.model";

export class contractInfoService{

  private contractList: contract[] = [
    new contract('Chatrin','Sutjitjul','Male','Template Driven Form'),
    new contract('Genelnw','Minecraft','Male','Reactive Form')
  ]

  getContract(){
    return this.contractList.slice();
  }

  addContract(contract: contract){
    this.contractList.push(contract);
  }

}
