import { Component, OnInit } from '@angular/core';
import { contract } from './contract-info.model';
import { contractInfoService } from './contract-info.service';

@Component({
  selector: 'app-contract-info',
  templateUrl: './contract-info.component.html',
  styleUrls: ['./contract-info.component.css']
})
export class ContractInfoComponent implements OnInit {

  contractList: contract[] = [];

  constructor(private ContractInfoSrv: contractInfoService) {}

  ngOnInit(): void {
    this.contractList = this.ContractInfoSrv.getContract();
  }

}
