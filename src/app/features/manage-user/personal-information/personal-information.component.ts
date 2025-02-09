import {Component} from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule, FormControl} from '@angular/forms';
import {PersonalInfoFormControls} from '../../../shared/interfaces/personal-info-form.interface';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-personal-information',
  imports: [FormsModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.scss'
})
export class PersonalInformationComponent {

  personalInfoForm: FormGroup<PersonalInfoFormControls> = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    emailAddress: new FormControl(''),
    confirmEmailAddress: new FormControl(''),
    language: new FormControl(''),
  });

}
