import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WECOME TO';
  course = 'Angular';
  image = 'https://media.glassdoor.com/l/8c/88/2f/8b/evry-india-office.jpg';

  

  currentBeverage= " "
  beverage =['Learn about the work environment','Spend time with other employees','Make a strong first impression',
                'Participate in meetings','Offer to help others','Set bounderies','Schedule time for development'];

  addBeverage(newBeverage: string){
    this.beverage.push(newBeverage);
 
  }
  
  title1= "LifecycleHook";

  inputText: string = '';
  destroy: boolean = true; 

  onSubmit(inputEl: HTMLInputElement) {
   this.inputText = inputEl.value;
  }
  DestroyComponent(){
    this.destroy = false;
  }
  goback(): void{}
}
