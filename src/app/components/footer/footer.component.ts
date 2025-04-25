import { Component } from '@angular/core';
import { ImagemComponent } from '../widgets/imagem/imagem.component';

@Component({
  selector: 'app-footer',
  imports: [ImagemComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
