import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITRedditElement } from 'src/app/app.data';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  public current: ITRedditElement;

  constructor(private router: Router, private service: AppService) { }

  ngOnInit() {
    this.service.getData().subscribe(() => {
      this.current = this.service.list.find(elem => {
        return elem.data.id === this.service.currentId;
      }).data;
    });
  }

  public navigateToList() {
    this.router.navigate(['list']);
  }

}
