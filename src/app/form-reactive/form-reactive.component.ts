import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { contract } from '../contract-info/contract-info.model';
import { contractInfoService } from '../contract-info/contract-info.service';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  contractForm: FormGroup;
  trySubmit: boolean = false;
  isSubmit: boolean = false;

  constructor(private contractInfoSrv: contractInfoService) { }

  ngOnInit(): void {
    this.contractForm = new FormGroup({
      'firstname': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, Validators.required),
      'gender': new FormControl(null, Validators.required)
    })
  }

  onSubmit(){
    this.trySubmit = true;
    if(this.contractForm.valid){
    const newContract = new contract(
      this.contractForm.get('firstname').value,
      this.contractForm.get('lastname').value,
      this.contractForm.get('gender').value,
      'Reactive Form'
    )
    this.contractInfoSrv.addContract(newContract);
    this.isSubmit = true
    this.contractForm.get('firstname').disable();
    this.contractForm.get('lastname').disable();
    this.contractForm.get('gender').disable();
    }
  }

  onClear(){
    this.contractForm.reset();
    this.contractForm.get('firstname').enable();
    this.contractForm.get('lastname').enable();
    this.contractForm.get('gender').enable()
    this.trySubmit = false;
    this.isSubmit = false;
  }

}
