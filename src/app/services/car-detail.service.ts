import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { CarDetailResponseModel } from 'src/app/models/carDetailResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl = "https://localhost:44308/api/cars/detail"

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<CarDetailResponseModel> {
    return this.httpClient.get<CarDetailResponseModel>(this.apiUrl)
    
  };
}