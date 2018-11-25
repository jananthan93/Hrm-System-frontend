import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LeaveRequest } from 'src/app/models/leave-management/leave-request';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {

  constructor(private http:HttpClient) { }

  private baseUrl = "http://localhost:8090/hrm_system/leaverequest";

  public getAllLeaveRequest(){
    return this.http.get<LeaveRequest[]>(this.baseUrl)
  }
}
