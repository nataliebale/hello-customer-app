import {Component} from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-permissions-access-form',
  imports: [MatCheckboxModule],
  templateUrl: './permissions-access-form.component.html',
  styleUrl: './permissions-access-form.component.scss'
})
export class PermissionsAccessFormComponent {

}
