import { contract } from "./contract-info.model";

export class contractInfoService{

  private testContractList: contract[] = [
    new contract('Chatrin','Sutjitjul','Male','Template Driven Form'),
  ]

  constructor(){
    if(sessionStorage.getItem('contract') === null){
      sessionStorage.setItem('contract', JSON.stringify(this.testContractList))
    }
  }

  getContract(){
    let contractList: contract[] = []
    contractList = JSON.parse(sessionStorage.getItem('contract'))
    return contractList;
  }

  addContract(contract: contract){
    let contractList: contract[] = []
    contractList = JSON.parse(sessionStorage.getItem('contract'))
    contractList.push(contract);
    sessionStorage.setItem('contract', JSON.stringify(contractList))
  }

}
