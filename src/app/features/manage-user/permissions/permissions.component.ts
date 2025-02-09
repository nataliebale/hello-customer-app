import {Component, signal} from '@angular/core';
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
}
