import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-simposios',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './simposios.component.html',
  styleUrl: './simposios.component.css'
})
export class SimposiosComponent {

}
