import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Search } from "./search/search";









@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header,],
 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {

 
  protected readonly title = signal('E-comers');

  
 
}
