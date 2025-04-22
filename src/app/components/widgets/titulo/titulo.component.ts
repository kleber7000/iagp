import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-titulo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css'],
})
export class TituloComponent {
  @Input() texto: string = '';
  @Input() cor: string = '#00376B';
  @Input() alinhamento: string = 'left';
  @Input() tamanho: string = '35px';
  @Input() alturaLinha: string = '1.2'; // novo - altura da linha
  @Input() espessura: string = '400'; // novo - font-weight (normal é 400)
}
