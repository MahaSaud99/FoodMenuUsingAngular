import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu';
  total : number=0;
  qty=0;
  searchTerm = '';

  
  menu = [
    {
      id: 1,
      name: 'Spaghetti',
      price: 30,
      description: 'Classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
      image: './assets/download.jpg'
    },
    {
      id: 2,
      name: 'Margherita Pizza',
      price: 25.50,
      description: 'Traditional pizza topped with tomatoes, mozzarella cheese, and fresh basil.',
      image: './assets/pizza.jpg'
    },
    {
      id: 3,
      name: 'Caesar Salad',
      price: 18,
      description: 'Crisp romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese.',
      image: './assets/salad.jpg'
    }
  ];
  filteredMenu = this.menu; 



   sum(event : any , price : number) {
    const isChecked:boolean = event.target.checked;

    if(isChecked){
      this.total+=price;
      this.qty++;
    }else{
    this.total-=price;
    this.qty--;
  }

}


search() {
  this.filteredMenu = this.menu.filter(item =>
    item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
}

}