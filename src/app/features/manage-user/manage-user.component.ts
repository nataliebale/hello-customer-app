import {Component, ViewChild} from '@angular/core';
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
  @ViewChild(PersonalInformationComponent)
  personalInfoComp!: PersonalInformationComponent;

  @ViewChild(RoleAssignmentComponent)
  roleAssignmentComp!: RoleAssignmentComponent;

  @ViewChild(PermissionsComponent)
  permissionsComp!: PermissionsComponent;


  onCancel() {
    this.personalInfoComp.clearForm();
    this.roleAssignmentComp.roleAssignment.reset();
    this.permissionsComp.resetAllForms();
  }

  onSaveUser() {
    const personalInfoData = this.personalInfoComp.form.value;
    const roleAssignmentData = this.roleAssignmentComp.roleAssignment.value;
    const permissionsData = this.permissionsComp.getAllPermissionsData();

    const userData = {
      personalInfo: personalInfoData,
      roleAssignment: roleAssignmentData,
      permissions: permissionsData
    };

    console.log('Full user data:', userData);
  }
}
