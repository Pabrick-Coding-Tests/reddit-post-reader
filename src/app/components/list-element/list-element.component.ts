import { Component, OnInit, Input, Output } from '@angular/core';
import { ITRedditElement } from 'src/app/app.data';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.sass']
})
export class ListElementComponent implements OnInit {

  @Input() @Output() public data: ITRedditElement;

  constructor(private router: Router, private service: AppService) { }

  ngOnInit() {
  }

  public voteUp() {
    this.data.ups++;
  }

  public voteDown() {
    this.data.downs--;
  }

  public seeDetail() {
    this.service.setCurrent(this.data.id);
    this.router.navigate(['detail']);
  }

}
