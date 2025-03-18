import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-regions-action-modal',
  templateUrl: './regions-action-modal.component.html',
  styleUrls: ['./regions-action-modal.component.scss']
})
export class RegionsActionModalComponent implements OnInit {

  constructor(private formBuilder : UntypedFormBuilder,@Inject(MAT_DIALOG_DATA) data) { 
    this.modalType = data.type;
    this.modalData = data.data;
  }
  form:UntypedFormGroup;
  modalType:string;
  modalData:any;
  ngOnInit(): void {
    this.setupForm();
  }
  setupForm(){
    this.form = this.formBuilder.group({
      RegionName:[this.modalData?.regionName,[Validators.required]]
    })
  }
}
