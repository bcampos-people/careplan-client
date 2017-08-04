import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssuesComponent } from './issues/issues.component';
import { NocareplanComponent } from './nocareplan/nocareplan.component';
import { CareplanComponent } from './careplan/careplan.component';
import { PacienteComponent } from './paciente/paciente.component';

import { CareplanService } from './service/careplan.service';
import { AllergyService } from './service/allergy.service';
import { LoginService } from './service/login.service';
import { DetectedIssueService } from './service/detected-issue.service';
import { CommunicationService } from './service/communication.service';
import { ValuesetService } from './service/valueset.service';
import { PatientService } from './service/patient.service';
import { GoalService } from './service/goal.service';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CareplanComponent,
    NocareplanComponent,
    IssuesComponent,
    PacienteComponent
  ],
  providers: [
    AllergyService,
    CareplanService,
    CommunicationService,
    DetectedIssueService,
    GoalService,
    LoginService,
    PatientService,
    ValuesetService
  ]
})
export class CareplanModule { }
