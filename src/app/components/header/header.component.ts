import { Component } from '@angular/core';
import { ImagemComponent } from '../widgets/imagem/imagem.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [ImagemComponent],
})
export class HeaderComponent {
  menuAberto = false;

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }
}
