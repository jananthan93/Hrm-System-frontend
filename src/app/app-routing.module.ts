import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';




const routes:Routes=[
  {
    path:'profile',
    loadChildren:'./Trainee/traineeManagement/profile/profile.module#ProfileModule'
  },
  
  {
    path:'par',
    loadChildren:'./Trainee/traineeManagement/par/par.module#ParModule'
  },
  {
    path:'skilldevelopmentplan',
    loadChildren:'./Trainee/traineeManagement/skilldevelopmentplan/skilldevelopmentplan.module#SkilldevelopmentplanModule'
  },
  {
    path:'courseRecord',
    loadChildren:'./Trainee/traineeManagement/course-record/course-record.module#CourseRecordModule'
  },
  {
    path:'attendance',
    loadChildren:'./Trainee/traineeManagement/attendance/attendance.module#AttendanceModule'
  },
  {
    path:'finalassesment',
    loadChildren:'./Trainee/traineeManagement/finalassesment/finalassesment.module#FinalassesmentModule'
  },
  {
    path:'termination',
    loadChildren:'./Trainee/traineeManagement/termination/termination.module#TerminationModule'
  },
  {
    path:'notifications',
    loadChildren:'./Trainee/notifications/notifications.module#NotificationsModule'
  },
  {
    path:'projects',
    loadChildren:'./Trainee/projects/projects.module#ProjectsModule'
  },
  {
    path:'assignments',
    loadChildren:'./Trainee/assignments/assignments.module#AssignmentsModule'
  },
  {
    path:'intake',
    loadChildren:'./Trainee/intake/intake.module#IntakeModule'
  },
  {
    path:'posting',
    loadChildren:'./Trainee/posting/posting.module#PostingModule'
  },
  {
    path:'selfService',
    loadChildren:'./Trainee/self-service/self-service.module#SelfServiceModule'
  },
  {
    path:'schedule',
    loadChildren:'./Trainee/schedule/schedule.module#ScheduleModule'
  },
  {
    path:'trainermanagement',
    loadChildren:'./Trainers/trainer-management/trainer-management.module#TrainerManagementModule'
  },
 
  {
    path:'trainerselfservice',
    loadChildren:'./Trainers/trainer-self-service/trainer-self-service.module#TrainerSelfServiceModule'
  }


]
@NgModule({
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
