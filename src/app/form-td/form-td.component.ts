import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { contract } from '../contract-info/contract-info.model';
import { contractInfoService } from '../contract-info/contract-info.service';

@Component({
  selector: 'app-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTDComponent implements OnInit {

  @ViewChild('f') contractForm: NgForm;
  trySubmit: boolean = false;
  isSubmit: boolean = false;


  constructor(private contractInfoSrv: contractInfoService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.trySubmit = true;
    if(this.contractForm.valid){
    const newContract = new contract(
      form.value.firstname,
      form.value.lastname,
      form.value.gender,
      'Template-Driven Form'
    )
    this.contractInfoSrv.addContract(newContract);
    this.isSubmit = true
    }
  }

  onClear(){
    this.contractForm.reset();
    this.trySubmit = false;
    this.isSubmit = false;
  }

}
