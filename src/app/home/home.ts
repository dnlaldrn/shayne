import { Component } from '@angular/core';
import { Contact } from '../contact/contact';

interface CardInfo {
  image: string;
  description: string;
}

@Component({
  selector: 'app-home',
  imports: [Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  cards: CardInfo[] = [
    {
      image: 'assets/images/image1.jpg',
      description: 'Gandaa mooo hihihihi',
    },
    {
      image: 'assets/images/image2.jpg',
      description: 'First pic natin together',
    },
    {
      image: 'assets/images/image3.jpg',
      description: 'Apakaaa gandaa mo mybabyy',
    },
    {
      image: 'assets/images/image4.jpg',
      description: 'Pang clout chase nya daw',
    },
    {
      image: 'assets/images/image5.jpg',
      description: 'Nasa Coli ang Disney Princess ko',
    },
    {
      image: 'assets/images/image6.jpg',
      description: 'Seryoso si Engr. Pakiss nga',
    },
    {
      image: 'assets/images/image7.jpg',
      description: 'Lowkey munaa',
    },
    {
      image: 'assets/images/image8.jpg',
      description: 'Ang ganda ng ngitii moo',
    },
  ];
}
