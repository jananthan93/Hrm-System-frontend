import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerManagementComponent } from './trainer-management.component';

import { RouterModule, Routes } from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { TrainingHistoryService } from 'src/app/services/training-history/training-history.service';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { AddAcademicQualificationComponent } from './profile/add-academic-qualification/add-academic-qualification.component';
import { AddProfessionalQualificationComponent } from './profile/add-professional-qualification/add-professional-qualification.component';
import { AcademicQualificationComponent } from './profile/academic-qualification/academic-qualification.component';
import { ProfessionalQualificationComponent } from './profile/professional-qualification/professional-qualification.component';
import { ProfessionalMenberShipsComponent } from './profile/professional-menber-ships/professional-menber-ships.component';
import { ViewProfileComponent } from './profile/view-profile/view-profile.component';
import { FormProfessionalComponent } from './profile/form-professional/form-professional.component';
import { FormUniversityComponent } from './profile/form-university/form-university.component';
import { EditModalComponent } from './profile/academic-qualification/Modal/edit-modal/edit-modal.component';
import { DeleteModalComponent } from './profile/academic-qualification/Modal/delete-modal/delete-modal.component';
import { SuggestionAndFeedbackComponent } from './suggestion-and-feedback/suggestion-and-feedback.component';
import { GeneralInformationComponent } from './profile/general-information/general-information.component';
import { TechnologySkillLevelComponent } from './profile/technology-skill-level/technology-skill-level.component';
import { RecordOfEmploymentComponent } from './profile/record-of-employment/record-of-employment.component';
import { AddRecordOfEmploymentComponent } from './profile/record-of-employment/add-record-of-employment/add-record-of-employment.component';
import { EditRecordOfEmploymentComponent } from './profile/record-of-employment/edit-record-of-employment/edit-record-of-employment.component';
import { AddTechnologySkillLevelComponent } from './profile/technology-skill-level/add-technology-skill-level/add-technology-skill-level.component';
import { EditTechnologySkillLevelComponent } from './profile/technology-skill-level/edit-technology-skill-level/edit-technology-skill-level.component';
import { SuggestionService } from '../Service/suggestion.service';
import { TrainerAvailabilityComponent } from './trainer-availability/trainer-availability.component';
import { ViewAvailabilityComponent } from './trainer-availability/view-availability/view-availability.component';
import { AddAvailabilityComponent } from './trainer-availability/add-availability/add-availability.component';


import { AddGeneralInformationComponent } from './profile/general-information/Modal/add-general-information/add-general-information.component';
import { EditGeneralInformationComponent } from './profile/general-information/Modal/edit-general-information/edit-general-information.component';
import { AddSuggestionComponent } from './suggestion-and-feedback/add-suggestion/add-suggestion.component';
import { ViewOwnSuggestionComponent } from './suggestion-and-feedback/view-own-suggestion/view-own-suggestion.component';
import { ViewSuggestionComponent } from './suggestion-and-feedback/view-suggestion/view-suggestion.component';
import { AddFeedbackComponent } from './suggestion-and-feedback/add-feedback/add-feedback.component';

import { PreRequestComponent } from './pre-request/pre-request.component';
import { PreRequestFormComponent } from './pre-request/pre-request-form/pre-request-form.component';
import { ViewPreRequestComponent } from './pre-request/view-pre-request/view-pre-request.component';
import { PreRequestWiewCardComponent } from './pre-request/pre-request-wiew-card/pre-request-wiew-card.component';
import { PaymentInitiateComponent } from './payment-initiate/payment-initiate.component';
import { AddPaymentInitiateComponent } from './payment-initiate/add-payment-initiate/add-payment-initiate.component';
import { ViewPaymentInitiateComponent } from './payment-initiate/view-payment-initiate/view-payment-initiate.component';
import { ViewPaymentComponent } from './payment-initiate/view-payment/view-payment.component';
import { AddProfileTrainerInfoComponent } from './ProfileTrainer/add-profile-trainer-info/add-profile-trainer-info.component';
import { ViewProfileTrainerInfoComponent } from './ProfileTrainer/view-profile-trainer-info/view-profile-trainer-info.component';
import { ProfileTrainerComponent } from './ProfileTrainer/view-profile-trainer-info/profile-trainer/profile-trainer.component';
import { ProfileTrainerTableComponent } from './ProfileTrainer/view-profile-trainer-info/profile-trainer-table/profile-trainer-table.component';
import { ProfileTrainerInfoComponent } from './profile-trainer-info/profile-trainer-info.component';
import { AddTechnologySkillComponent } from './ProfileTrainer/add-profile-trainer-info/add-technology-skill/add-technology-skill.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentDetailsComponent } from './appointment/appointment-details/appointment-details.component';
import { TrainingScheduleComponent } from './training-schedule/training-schedule.component';



const routes: Routes = [

  // {
  //   path: 'profile',
  //   component: ProfileTrainerInfoComponent
  // },
  {
    path: 'appointment',
    component: AppointmentComponent
  },
  {
    path: 'suggestion',
    component: SuggestionAndFeedbackComponent
  },
  {

    path: 'trainer-availability',
    component: TrainerAvailabilityComponent
  },
  {
    path: 'training-initiate',
    component: PaymentInitiateComponent
  },
  {
    path: 'training-initiate',
    component: PaymentInitiateComponent,
    children:[
      {
        path: 'paymentInitiate',
        component:AddPaymentInitiateComponent 
      },
      {
        path: 'payment',
        component:ViewPaymentComponent 
      }
    ]
  },
  {
    path: 'availability',
    component: TrainerAvailabilityComponent
  },{
    path: 'pre-request',
    component: PreRequestComponent
  },
  {
    path: 'training-schedule',
    component: TrainingScheduleComponent
  }
  
  


];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TrainerManagementComponent,
   
    
    ProfileComponent,
    AddAcademicQualificationComponent,
    AddProfessionalQualificationComponent,
    AcademicQualificationComponent,
    ProfessionalQualificationComponent,
    ProfessionalMenberShipsComponent,
    ViewProfileComponent,
    FormProfessionalComponent,
    FormUniversityComponent,
    EditModalComponent,
    DeleteModalComponent,
    SuggestionAndFeedbackComponent,
    GeneralInformationComponent,
    TechnologySkillLevelComponent,
    RecordOfEmploymentComponent,
    AddSuggestionComponent,
    ViewOwnSuggestionComponent,
    ViewSuggestionComponent,
    AddRecordOfEmploymentComponent,
    EditRecordOfEmploymentComponent,
    AddTechnologySkillLevelComponent,
    EditTechnologySkillLevelComponent,
    TrainerAvailabilityComponent,
    ViewAvailabilityComponent,
    AddAvailabilityComponent,
    
   
    AddGeneralInformationComponent,
    EditGeneralInformationComponent,
     AddFeedbackComponent,
   
    PreRequestComponent,
    PreRequestFormComponent,
    ViewPreRequestComponent,
    PreRequestWiewCardComponent,
    PaymentInitiateComponent,
    AddPaymentInitiateComponent,
    ViewPaymentInitiateComponent,
    ViewPaymentComponent,
    AddProfileTrainerInfoComponent,
    ViewProfileTrainerInfoComponent,
    ProfileTrainerComponent,
    ProfileTrainerTableComponent,
    ProfileTrainerInfoComponent,
    AddTechnologySkillComponent,
    AppointmentComponent,
    AppointmentDetailsComponent,
    TrainingScheduleComponent,
  ],
  providers: [ SuggestionService]
})
export class TrainerManagementModule { }
