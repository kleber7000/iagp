import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  currentIndex: number = 0;
  slides = [
    { img: 'https://via.placeholder.com/1920x700?text=Imagem+1', title: 'Título 1', description: 'Breve descrição sobre a imagem 1.', link: '/link1' },
    { img: 'https://via.placeholder.com/1920x700?text=Imagem+2', title: 'Título 2', description: 'Breve descrição sobre a imagem 2.', link: '/link2' },
    { img: 'https://via.placeholder.com/1920x700?text=Imagem+3', title: 'Título 3', description: 'Breve descrição sobre a imagem 3.', link: '/link3' },
    { img: 'https://via.placeholder.com/1920x700?text=Imagem+4', title: 'Título 4', description: 'Breve descrição sobre a imagem 4.', link: '/link4' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Iniciar o carrossel automático
    setInterval(() => {
      this.moveSlide(1);
    }, 2000);
  }

  // Função para mover o carrossel
  moveSlide(step: number): void {
    const totalSlides = this.slides.length;

    this.currentIndex += step;

    if (this.currentIndex >= totalSlides) {
      this.currentIndex = 0; // Voltar para o primeiro slide
    }

    if (this.currentIndex < 0) {
      this.currentIndex = totalSlides - 1; // Voltar para o último slide
    }
  }
}
