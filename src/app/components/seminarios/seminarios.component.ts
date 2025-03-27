import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-seminarios',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './seminarios.component.html',
  styleUrl: './seminarios.component.css'
})
export class SeminariosComponent {

}
