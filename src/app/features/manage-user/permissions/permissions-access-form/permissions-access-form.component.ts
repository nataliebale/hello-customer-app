import {Component, Input} from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {emailsMatchValidator} from '../../../../shared/validators/emails-match.validator';
import {PermissionsAccessFormControls} from '../../../../shared/interfaces/permissions-access-form.interface';

@Component({
  selector: 'app-permissions-access-form',
  imports: [MatCheckboxModule, FormsModule, ReactiveFormsModule],
  templateUrl: './permissions-access-form.component.html',
  styleUrl: './permissions-access-form.component.scss'
})
export class PermissionsAccessFormComponent {
  @Input() set companyName(value: string){
    if(value){
      this.form?.get('companyName')?.setValue(value);
    }
  }

  form: FormGroup<PermissionsAccessFormControls> = this.createForm();

  private createForm(): FormGroup<PermissionsAccessFormControls> {
    return new FormGroup({
        companyName: new FormControl(''),
        tpEmail1DashboardDefault: new FormControl(false),
        tpEmail1DashboardCustomNPS: new FormControl(false),
        tpEmail2DashboardDefault: new FormControl(false),
        tpEmail1ReportsDefault: new FormControl(false),
        tpEmail2ReportsDefault: new FormControl(false),
      },
      {
        validators: [emailsMatchValidator]
      }
    );
  }

  resetForm() {
    this.form.reset();
  }
}
