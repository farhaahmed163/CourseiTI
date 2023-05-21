import { Component } from '@angular/core';
import { StoreData } from 'src/app/viewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
storeInfo: StoreData;
isImageShown:boolean=true;
constructor(){
  this.storeInfo=new StoreData('Farha Store','https://picsum.photos/id/237/400/300',['Cairo','Alex','Mansoura','Gouna'])

}
toggleImage(){
  this.isImageShown=!this.isImageShown;
}
}
