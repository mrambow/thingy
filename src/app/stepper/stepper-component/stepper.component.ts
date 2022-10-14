import { AfterViewInit, Component, ElementRef, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import SwiperCore, { A11y, Keyboard, Navigation, Pagination, Scrollbar, SwiperOptions, Zoom } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use( [
  Navigation,
  Pagination,
  Zoom,
  Scrollbar,
  A11y,
  Keyboard,
  IonicSlides,
] );

export class StepContent {
  template: TemplateRef<ElementRef>;
  canGoNext: () => boolean;
  finalizeStep: () => void;
}

@Component( {
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ionic-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  encapsulation: ViewEncapsulation.None,
} )
export class StepperComponent {
  @Input() steps: StepContent[];
  @ViewChild(
    'swiper',
    { static: false } ) swiper?: SwiperComponent;
  config: SwiperOptions = {
    keyboard: true,
    pagination: { type: 'fraction' },
    navigation: {
      enabled: false,
    },
    zoom: true,
    scrollbar: { draggable: false },
    allowTouchMove: false,
  };

  constructor() {
  }

  slideNext() {
    const stepContent = this.steps[this.swiper.swiperRef.activeIndex];
    const canGoNext = stepContent.canGoNext();
    if ( !canGoNext ) {
      return;
    }

    stepContent.finalizeStep();
    this.swiper.swiperRef.slideNext( 100 );
  }
}
