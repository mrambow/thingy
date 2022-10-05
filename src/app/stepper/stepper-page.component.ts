import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import SwiperCore, { A11y, Keyboard, Navigation, Pagination, Scrollbar, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use( [
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
  IonicSlides
] );

@Component( {
  selector: 'app-folder',
  templateUrl: './stepper-page.component.html',
  styleUrls: ['./stepper-page.component.scss'],
  encapsulation: ViewEncapsulation.None
} )
export class StepperPage {
  @ViewChild(
    'swiper',
    { static: false } ) swiper?: SwiperComponent;
  config: SwiperOptions = {
    spaceBetween: 50,
    navigation: true,
    pagination: {
      clickable: true,
      renderBullet: ( index, className ) => '<span class="' + className + '">' + ( index + 1 ) + '</span>',
    },
    scrollbar: { draggable: true },
  };

  slideNext() {
    this.swiper.swiperRef.slideNext( 100 );
  }

  slidePrev() {
    this.swiper.swiperRef.slidePrev( 100 );
  }

  onSwiper( [swiper] ) {
    console.log( swiper );
  }

  onSlideChange() {
    console.log( 'slide change' );
  }

}
