import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-oficinas',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './oficinas.component.html',
  styleUrl: './oficinas.component.css'
})
export class OficinasComponent {

}
