import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	private greetings:string = "Hello world";
  constructor() {}

  get greeting(){
  	return this.greetings;
  }

  test(){
  	alert("Test");
  }

}
