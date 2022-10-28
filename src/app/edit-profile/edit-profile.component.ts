import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { EngineerService } from '../engineer.service';
import {ChangeDetectorRef } from '@angular/core';

//import validator and FormBuilder
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  //Create FormGroup
  findForm: FormGroup;
  updateForm: FormGroup;
  associateId: string;
  engineer: any;
  public constructor( private cdref: ChangeDetectorRef, private fb: FormBuilder, private http: HttpClient, private router: Router
    , public snackBar: MatSnackBar
    , private engineerService: EngineerService) {  
      this.myForm();
   }
   ngAfterContentChecked() {
    this.cdref.detectChanges();
  }
   myForm() {
    this.findForm = this.fb.group({
      associateid: ['', [Validators.required, 
        Validators.pattern("^(CTS)-[0-9]{6}$")] ]
     });
     this.updateForm = this.fb.group({
      techproficiency: ['', Validators.required],
      nontechproficiency: ['', Validators.required]
     });
  }
  ngOnInit() {
  }

  findAssociate()
  {
    if (this.findForm.invalid) {
      this.findForm.get('associateid').markAsTouched();
      return;
    }
    this.engineer = null;
    console.log("You are searching accosiate: ",this.associateId);
    this.engineerService.getEngineer(this.associateId).subscribe(data => {
      this.engineer = data;
      console.log("Engineer details: ",this.engineer);
    });
  }
  public updateprofile()
  {
    if (this.updateForm.invalid) {
      this.updateForm.get('techproficiency').markAsTouched();
      this.updateForm.get('nontechproficiency').markAsTouched();
      return;
    }
      console.log(JSON.stringify(this.engineer));
      console.log(this.engineer);
      this.engineerService.updateEngineer(JSON.stringify(this.engineer))
      .pipe(map(result => {}))
      .subscribe(result => {
        this.snackBar.open("Profile updated successfully!", "Close", {
          duration: 2000,
       });
        });
  }
}

