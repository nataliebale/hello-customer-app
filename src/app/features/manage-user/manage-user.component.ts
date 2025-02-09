import {Component} from '@angular/core';
import {PersonalInformationComponent} from './personal-information/personal-information.component';
import {PermissionsComponent} from './permissions/permissions.component';
import {RoleAssignmentComponent} from './role-assignment/role-assignment.component';

@Component({
  selector: 'app-manage-user',
  imports: [PersonalInformationComponent, PermissionsComponent, RoleAssignmentComponent],
  templateUrl: './manage-user.component.html',
  styleUrl: './manage-user.component.scss'
})
export class ManageUserComponent {

}
