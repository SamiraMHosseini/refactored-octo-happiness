import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  environment = 'OS Windows 10 and WSL';
  ide = 'ViSual Studio Code';
  constructor() { }

  ngOnInit(): void {
  }

}
