import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

//import validator and FormBuilder
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EngineerService } from '../engineer.service';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.scss']
})
export class AddProfileComponent implements OnInit {
  //Create FormGroup
  requiredForm: FormGroup;
  public input: any;
  technicalSkills: any;
  nonTechnicalSkills: any;
  slots: any;
  selectedSlot:string;
  selectedUserType: string = 'Student';
  currentRating = 3;
  public constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, public snackBar: MatSnackBar
    , private engineerService: EngineerService) {  
    this.myForm();
   }
     //Create required field validator for name
  myForm() {
    this.requiredForm = this.fb.group({
      firstname: ['', Validators.required ],
      lastname: ['', Validators.required ],
      techproficiency: ['', Validators.required],
      nontechproficiency: ['', Validators.required],
      associateid: ['', [Validators.required, 
        Validators.pattern("^(CTS)-[0-9]{6}$")] ],
      mobile: ['', Validators.required ],
      emailaddress: ['', [Validators.required, 
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ]
     });
  }

  ngOnInit() {
    this.input = {
      "firstname": "",
      "lastname": "",
      "associateId": "",
      "emailAddress": "",
      "technicalSkills":"",
      "nonTechnicalSkills":"",
    };
    this.technicalSkills = [
      {id: 1, name: 'WebAPI', proficiency:0},
      {id: 2, name: 'Angular', proficiency:0},
    ];
    this.nonTechnicalSkills = [
      {id: 1, name: 'Spoken', proficiency:0},
      {id: 3, name: 'Aptitude', proficiency:0}
    ];
  }

  public register()
  {
    if (this.requiredForm.invalid) {
      this.requiredForm.get('firstname').markAsTouched();
      this.requiredForm.get('lastname').markAsTouched();
      this.requiredForm.get('associateid').markAsTouched();
      this.requiredForm.get('mobile').markAsTouched();
      this.requiredForm.get('emailaddress').markAsTouched();
      this.requiredForm.get('techproficiency').markAsTouched();
      this.requiredForm.get('nontechproficiency').markAsTouched();
      return;
    }
      this.input.technicalSkills = this.technicalSkills;     
      this.input.nonTechnicalSkills = this.nonTechnicalSkills;
      console.log(JSON.stringify(this.input));

        this.engineerService.createEngineer(JSON.stringify(this.input))
        .pipe(map(result => {}))
        .subscribe(result => {
          this.snackBar.open("Registration Successful!", "Close", {
            duration: 2000,
            });
            this.router.navigateByUrl('/home');
        });
  }
}

