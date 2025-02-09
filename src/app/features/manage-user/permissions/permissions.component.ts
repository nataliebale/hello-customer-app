import {Component, signal, ViewChildren, QueryList} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {PermissionsAccessFormComponent} from './permissions-access-form/permissions-access-form.component';

@Component({
  selector: 'app-permissions',
  imports: [MatExpansionModule, PermissionsAccessFormComponent],
  templateUrl: './permissions.component.html',
  styleUrl: './permissions.component.scss'
})
export class PermissionsComponent {
  readonly panelOpenStateForOntwikkel = signal(true);
  readonly panelOpenStateForClientTeam = signal(true);

  @ViewChildren(PermissionsAccessFormComponent)
  permissionForms!: QueryList<PermissionsAccessFormComponent>;

  resetAllForms() {
    this.permissionForms.forEach(formComp => formComp.form.reset());
  }

  getAllPermissionsData() {
    return this.permissionForms.map(formComp => formComp.form.value);
  }
}
