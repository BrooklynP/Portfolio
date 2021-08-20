import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-page',
  templateUrl: './cv-page.component.html',
  styleUrls: ['./cv-page.component.scss']
})
export class CvPageComponent implements OnInit {

  public SelectedPage = 1

  constructor() { }

  ngOnInit() {
  }

  public goToPage(pageNumber: number){
    this.SelectedPage = pageNumber;
  }

}
