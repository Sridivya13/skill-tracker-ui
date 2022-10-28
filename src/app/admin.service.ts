import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }
    searchEngineerProfiles(searchParameters: any) {
      console.log("Search Parameters: ",searchParameters);
      return this.http.post<any>("http://adminservice.westus.azurecontainer.io/api/Admin", searchParameters);
  }
}
