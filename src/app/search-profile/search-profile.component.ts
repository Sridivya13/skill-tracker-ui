import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-search-profile',
  templateUrl: './search-profile.component.html',
  styleUrls: ['./search-profile.component.scss']
})
export class SearchProfileComponent implements OnInit {

  parentForm;  
  associateId: string;
  skillName: string;
  engineerName: string;
  engineers: any;
  technicalSkills: any;
  selectedSkill = 0;
  public input: any;
  public constructor(private http: HttpClient, private router: Router
    , public snackBar: MatSnackBar
    , private adminService: AdminService) {  
      this.input = {
        "associateId" : "",
        "name" : "",
        "skill" : ""
      }
   }
  ngOnInit() {
    this.technicalSkills = [
      {id: 1, name: 'WebAPI', proficiency:0},
      {id: 2, name: 'Angular', proficiency:0},
    ];
  }

  findAssociate()
  {
    if(!this.associateId && !this.engineerName && !this.selectedSkill)
    {
      this.snackBar.open("At least one search criteria is mandatory!", "Close", {
        duration: 2000,
     });
     return;
    }
    this.input.associateId = this.associateId;
    this.input.name = this.engineerName;
    this.input.skill = this.selectedSkill;
    this.adminService.searchEngineerProfiles(this.input).subscribe(data => {
      this.engineers = data;
      console.log("Engineer details: ",this.engineers);
    });
  }
}

