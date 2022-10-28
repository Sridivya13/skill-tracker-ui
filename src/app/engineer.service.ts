import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class EngineerService {
    constructor(private http: HttpClient) { 

    }

    getEngineer(associateId: string) {
        return this.http.get<any>(`http://engineerservice.westus.azurecontainer.io/Engineers/${associateId}`);
    }
    updateEngineer(engineer: any) {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type':  'application/json'})};
        return this.http.put("http://engineerservice.westus.azurecontainer.io/Engineers/",engineer, httpOptions);
    }
    createEngineer(engineer: any) {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type':  'application/json'})};
        return this.http.post("http://engineerservice.westus.azurecontainer.io/Engineers/",engineer, httpOptions);
    }
}