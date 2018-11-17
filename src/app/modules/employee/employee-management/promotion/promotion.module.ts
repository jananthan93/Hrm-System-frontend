import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionComponent } from './promotion.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { PromotionEligibilityComponent } from './promotion-eligibility/promotion-eligibility.component';
import { PromotionEligibilityCreditCheckComponent } from './promotion-eligibility/promotion-eligibility-credit-check/promotion-eligibility-credit-check.component';
import { InsertPromotionComponent } from './insert-promotion/insert-promotion.component';
import { PromotionHistoryComponent } from './promotion-history/promotion-history.component';
import { EduQualListComponent } from './promotion-eligibility/promotion-eligibility-credit-check/modal/edu-qual-list/edu-qual-list.component';
import { ParHistListComponent } from './promotion-eligibility/promotion-eligibility-credit-check/modal/par-hist-list/par-hist-list.component';
import { LeaveHistListComponent } from './promotion-eligibility/promotion-eligibility-credit-check/modal/leave-hist-list/leave-hist-list.component';
import { PromotionDeniedHistoryComponent } from './promotion-denied-history/promotion-denied-history.component';
import { DeniedPromotionComponent } from './denied-promotion/denied-promotion.component';
import { EditPromotionHistoryComponent } from './promotion-history/modal/edit-promotion-history/edit-promotion-history.component';
import { EditPromotionDeniedHistoryComponent } from './promotion-denied-history/modal/edit-promotion-denied-history/edit-promotion-denied-history.component';

const routes:Routes=[
  {
    path:'',
   component:PromotionComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PromotionComponent, PromotionEligibilityComponent,  PromotionEligibilityCreditCheckComponent, InsertPromotionComponent, PromotionHistoryComponent, EduQualListComponent, ParHistListComponent, LeaveHistListComponent, PromotionDeniedHistoryComponent, DeniedPromotionComponent, EditPromotionHistoryComponent, EditPromotionDeniedHistoryComponent]
})
export class PromotionModule { }