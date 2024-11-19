import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getInPlayGames(): Observable<any> {
    return this.http.post<any>('https://ag.bet36.live/api-V2/getInPlayGames', {});
  }
  getTodayGames(): Observable<any> {
    return this.http.post<any>('https://ag.bet36.live/api-V2/getTodayGames', {});
  }
  getTomorrowGames(): Observable<any> {
    return this.http.post<any>('https://ag.bet36.live/api-V2/getTomorrowGames', {});
  }
}
