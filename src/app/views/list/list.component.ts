import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  constructor(private service: AppService) { }

  ngOnInit() {
    // this.service.getData().subscribe(() => { console.log(this.service.list); });
  }

}
