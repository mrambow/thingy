import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-stepper-test',
  templateUrl: './stepper-test.page.html',
  styleUrls: ['./stepper-test.page.scss'],
})
export class StepperTestPage implements OnInit {

  params: Params;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.params = this.route.snapshot.params;
  }

}
