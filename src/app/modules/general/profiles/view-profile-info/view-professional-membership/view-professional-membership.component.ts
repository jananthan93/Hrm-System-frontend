import { Component, OnInit } from '@angular/core';
import { ViewProfessionalMembership } from './view-professional-membership';
import { ViewProfessionalMembershipService } from './view-professional-membership.service';
import { Router } from '@angular/router';
import { ProfileInfoService } from '../profile-table/profile-info.service';

@Component({
  selector: 'app-view-professional-membership',
  templateUrl: './view-professional-membership.component.html',
  styleUrls: ['./view-professional-membership.component.css']
})
export class ViewProfessionalMembershipComponent implements OnInit {
  memberships:ViewProfessionalMembership[];

  constructor(private router: Router, 
    private profileInfoService:ProfileInfoService,
    private professionalMembershipService: ViewProfessionalMembershipService) { }
    userid:Number
  ngOnInit() {
    this.profileInfoService.profileuserObservable$.subscribe(userId=>{
      this.getProMembershipByUserId(userId);
      this.userid=userId
    })
  }
  
  getProMembershipByUserId(uid){
    this.professionalMembershipService.getProMembershipByUserId(uid).subscribe(data=>{
      this.memberships=data;
      console.log(data);
    })
  }
  getProMembership(){
    this.professionalMembershipService.getAllProMembership().subscribe(data=>{
      this.memberships=data;
      console.log(data);
    })
  }
  membershipObj=new ViewProfessionalMembership();
  getProId(data){
    this.membershipObj=Object.assign({},data)
  }
  editProMembership(){
    this.membershipObj.user=this.userid
    this.professionalMembershipService.editProMembership(this.membershipObj).subscribe(data=>{
      this.getProMembershipByUserId(this.userid)
    })
  }
  deleteProMembership(){
    this.professionalMembershipService.deleteProMembership(this.membershipObj).subscribe(data=>{
      this.getProMembershipByUserId(this.userid)
    })
  }
}
