import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CropcommodityService {

  private localJsonUrl = '/assets/localJson/crops.json';

  constructor(
    private http: HttpClient
  ) { }

  getCrops(): Observable<any> {
    const cropsUrl = `${environment.base_url + 'crop'}`;
    return this.http.get(cropsUrl);
  }

  getCropsFromLocal(): Observable<any> {
    return this.http.get(this.localJsonUrl);
  }
}
