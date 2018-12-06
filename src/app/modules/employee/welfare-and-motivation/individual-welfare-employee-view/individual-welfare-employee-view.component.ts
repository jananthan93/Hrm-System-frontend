import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { IndividualWelfareService } from '../Service/individual-welfare.service';
import { IndividualWelfare } from '../Model/individual-welfare';

@Component({
  selector: 'app-individual-welfare-employee-view',
  templateUrl: './individual-welfare-employee-view.component.html',
  styleUrls: ['./individual-welfare-employee-view.component.css']
})
export class IndividualWelfareEmployeeViewComponent implements OnInit {

  displayedColumns: string[] = ['name', 'allowance', 'amount', 'date'];

  individualWelfareObj = new IndividualWelfare();
  
  msg: any;
  individualwelfare:any;
  dataSource = new MatTableDataSource<any>(this.individualwelfare);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private individualWelfareService: IndividualWelfareService) { }

  ngOnInit() {
    
    this.getIndividualWelfare();
  }
  getIndividualWelfare() {
    this.individualWelfareService.getAllIndividualWelfare().subscribe(data => {
      this.individualwelfare = data;
      this.dataSource = new MatTableDataSource<any> (this.individualwelfare);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
      console.log(data);
    });

  }
  

  
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}


