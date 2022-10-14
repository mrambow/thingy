import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Params } from '@angular/router';
import { StepContent } from '../stepper/stepper-component/stepper.component';

@Component( {
  selector: 'app-stepper-test',
  templateUrl: './stepper-test.page.html',
  styleUrls: ['./stepper-test.page.scss'],
} )
export class StepperTestPage implements AfterViewInit, OnInit {
  @ViewChild( 'formStart' ) step1: TemplateRef<ElementRef>;
  @ViewChild( 'formEnd' ) step2: TemplateRef<ElementRef>;
  params: Params;
  steps: StepContent[];
  contactForm: FormGroup;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.steps = [
      {
        template: this.step1,
        canGoNext: () => this.contactForm.valid,
        finalizeStep: () => this.onSubmit(),
      },
      {
        template: this.step2,
        canGoNext: () => true,
        finalizeStep: () => console.log('finalizeStep'),
      },
    ];
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl(''),
      isMarried: new FormControl(''),
      country: new FormControl('')
    });
  }

}
