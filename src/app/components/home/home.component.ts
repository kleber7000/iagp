import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { TituloComponent } from '../widgets/titulo/titulo.component';
import { ImagemComponent } from '../widgets/imagem/imagem.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, TituloComponent, ImagemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  texto: any;
  estilos: any;
}
