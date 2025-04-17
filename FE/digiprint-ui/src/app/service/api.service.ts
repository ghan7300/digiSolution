import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service } from '../model/service.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/api/services';

  constructor(private http: HttpClient) {}

  getAllServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.baseUrl);
  }

  createService(service: Service): Observable<Service> {
    return this.http.post<Service>(this.baseUrl, service);
  }
}
