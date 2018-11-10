import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParComponent } from './par.component';
import { ParScheduleComponent } from './par-schedule/par-schedule.component';
import { ParHistoryComponent } from './par-history/par-history.component';

import {RouterModule,Routes} from '@angular/router';
const routes:Routes=[
{
  path:'',
  component:ParComponent
}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ParComponent, ParScheduleComponent, ParHistoryComponent]
})
export class ParModule { }