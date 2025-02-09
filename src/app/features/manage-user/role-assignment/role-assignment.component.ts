import {Component} from '@angular/core';
import {MatRadioButton, MatRadioGroup, MatRadioModule} from '@angular/material/radio';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {RolesEnum} from '../../../shared/enums/roles.enum';

@Component({
  selector: 'app-role-assignment',
  imports: [ReactiveFormsModule, MatRadioGroup, MatRadioButton],
  templateUrl: './role-assignment.component.html',
  styleUrl: './role-assignment.component.scss'
})
export class RoleAssignmentComponent {
  readonly RolesEnum = RolesEnum;

  roleAssignment = new FormControl(RolesEnum.EMPLOYEE);

  clearRole() {
    this.roleAssignment?.setValue(RolesEnum.EMPLOYEE);
  }
}
