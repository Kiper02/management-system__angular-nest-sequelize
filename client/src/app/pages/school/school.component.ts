import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';


@Component({
  selector: 'app-school',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './school.component.html',
  styleUrl: './school.component.scss'
})
export class SchoolComponent {

}
