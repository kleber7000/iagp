import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- IMPORTAR ISSO!

@Component({
  selector: 'app-imagem',
  standalone: true, // << já é standalone mesmo!
  imports: [CommonModule], // <-- ADICIONA ISSO!
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css'],
})
export class ImagemComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() largura: string = '100%';
  @Input() altura: string = 'auto';
  @Input() link: string = '';
}
