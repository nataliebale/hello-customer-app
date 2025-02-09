import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ManageUserComponent} from './features/manage-user/manage-user.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ManageUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hello-customer-app';
}
