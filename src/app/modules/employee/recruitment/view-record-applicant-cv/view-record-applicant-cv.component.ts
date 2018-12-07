import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { RecordApplicantCvService } from '../Service/record-applicant-cv.service';
import { JobService } from '../Service/job.service';
import { HighestQualificationService } from '../Service/highest-qualification.service';
import { RecordApplicantCv } from '../Modal/record-applicant-cv';
import { Job } from '../Modal/job';
import { HighestQualification } from '../Modal/highest-qualification';

@Component({
  selector: 'app-view-record-applicant-cv',
  templateUrl: './view-record-applicant-cv.component.html',
  styleUrls: ['./view-record-applicant-cv.component.css']
})
export class ViewRecordApplicantCvComponent implements OnInit {

  constructor(private recordApplicantCvService: RecordApplicantCvService,
    private jobServices: JobService,
    private highQulificationServices: HighestQualificationService,) { }

  recordOfApplicantObj:RecordApplicantCv = new RecordApplicantCv();
  recordOfApplicantAdd: RecordApplicantCv[];
 

  job: Job[];
  hightQulification: HighestQualification[];

  ngOnInit() {
    this.getAllJobList();
    this.getAllHighQulificationList();
    this.getAllApplicantList();
    
  }

  getAllApplicantList() {
    this.recordApplicantCvService.getAllApplicants().subscribe(data => {
      this.recordOfApplicantAdd = data;
      console.log(data);
    });
  }
  getAllJobList() {
    this.jobServices.getAllJob().subscribe(data => {
      this.job = data;
      console.log(data);
    });
  }

  getAllHighQulificationList() {
    this.highQulificationServices.getAllHighestQualification().subscribe(datahighQulification => {
      this.hightQulification = datahighQulification;
      console.log(datahighQulification);
    });
  }

  editStatus(applicn) {
    this.recordOfApplicantObj = Object.assign({}, applicn);
  }

  updateApplicantById() {
    this.recordApplicantCvService.updateApplicants(this.recordOfApplicantObj).subscribe(data => {
      //alert("Applicant Cv updated"); 
      this.getAllApplicantList();
    });

  }
 

  deleteApplicantById(deleteApplicant) {
    this.recordApplicantCvService.deleteApplicants(deleteApplicant).subscribe(data => {
     // this.recordOfApplicantObj.id = deleteApplicant.id;
      // alert("Applicant Cv's Deleted");
      this.getAllApplicantList();
    });

  }
}