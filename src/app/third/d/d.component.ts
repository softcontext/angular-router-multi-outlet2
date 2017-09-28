import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.css']
})
export class DComponent implements OnInit {
  currentvalue;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((values: { id: number }) => {
      this.currentvalue = values.id;
    })
  }

}
