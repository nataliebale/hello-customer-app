import { Component } from '@angular/core';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-role-assignment',
  imports: [MatRadioGroup, MatRadioButton],
  templateUrl: './role-assignment.component.html',
  styleUrl: './role-assignment.component.scss'
})
export class RoleAssignmentComponent {
  roleAssignment = new FormControl('');

}
