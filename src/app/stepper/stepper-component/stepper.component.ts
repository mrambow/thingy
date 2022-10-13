import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
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

@Component( {
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ionic-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  encapsulation: ViewEncapsulation.None,
} )
export class StepperComponent implements OnInit {
  @ViewChild(
    'swiper',
    { static: false } ) swiper?: SwiperComponent;
  config: SwiperOptions = {
    keyboard: true,
    pagination: { type: 'fraction' },
    zoom: true,
    navigation: true, // direction: 'vertical',
    scrollbar: { draggable: true },
  };

  constructor() {
  }

  slideNext() {
    this.swiper.swiperRef.slideNext( 100 );
  }

  slidePrev() {
    this.swiper.swiperRef.slidePrev( 100 );
  }

  ngOnInit(): void {
  }

}
