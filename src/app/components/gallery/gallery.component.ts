
import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {

  flexBorderSize: number = 3
  flexImageSize: number = 7
  galleryName: string = ''
  showAllImg: any;
  eventsData: any = 0;
  showEventOne: boolean;
  showEventTwo: boolean;
  showEventThree: boolean;
  showEventFour: boolean;
  showEventFive: boolean;
  showEventSix: boolean;
  showAll: boolean = true;
  showEventSeven: boolean;
  showEventEight: boolean;
  showEventNine: boolean;
  showEventTen: boolean;
  showEventEleven: boolean;
  showEventtwelve: boolean;
  EventHeader: string = "All";
  constructor() {

  }


  galleryOptions: NgxGalleryOptions[];
  galleryOptionsAll: NgxGalleryOptions[];
  allevents: NgxGalleryImage[];
  event1: NgxGalleryImage[];
  event2: NgxGalleryImage[];
  event3: NgxGalleryImage[];
  event4: NgxGalleryImage[];
  event5: NgxGalleryImage[];
  event6: NgxGalleryImage[];
  event7: NgxGalleryImage[];
  event8: NgxGalleryImage[];
  event9: NgxGalleryImage[];
  event10: NgxGalleryImage[];
  event11: NgxGalleryImage[];
  event12: NgxGalleryImage[];

  // showAll(){
  //   console.log("show all");
  //   this.showAllImg=true;
  //   console.log(this.showAllImg);
  //   }
  //   showNews(){
  //     console.log("show news");
  //     this.showNews;
  //     this.showAllImg=false;
  //   }
  //   showgallery(){
  //     console.log("show Gallery");
  //     this.showgallery;
  //   }
  eventName: string = "xyz";
  Events = [
    { id: 0, name: 'All' },
    { id: 1, name: 'Business event 2013' },
    { id: 2, name: 'Business event 2015' },
    { id: 3, name: 'Brics 2015' },
    { id: 4, name: 'IFTAR 2015' },
    { id: 5, name: 'IFTAR 2017' },
    { id: 6, name: ' Money ' },
    { id: 7, name: 'Business event 2017' },
    { id: 8, name: 'Meeting with DG' },
    { id: 9, name: 'Get together 2013' },
    { id: 10, name: 'VAT clint 2017' },
    { id: 11, name: 'VAT Return & Compliance' },
    { id: 12, name: 'Kizod' },

  ];


  selectEvent() {
    console.log(this.eventsData);
    if (this.eventsData == 0) {
      this.showAll = true;
      this.EventHeader = "All";
      this.showEventOne = false;
      this.showEventTwo = false;
      this.showEventThree = false;
      this.showEventFour = false;
      this.showEventFive = false;
      this.showEventSix = false;
      this.showEventSeven = false;
      this.showEventEight = false;
      this.showEventNine = false;
      this.showEventTen = false;
      this.showEventEleven = false;
      this.showEventtwelve = false;
    }

    else if (this.eventsData == 1) {
      this.EventHeader = "Business event 2013";
      this.showAll = false;
      this.showEventOne = true;
      this.showEventTwo = false;
      this.showEventThree = false;
      this.showEventFour = false;
      this.showEventFive = false;
      this.showEventSix = false;
      this.showEventSeven = false;
      this.showEventEight = false;
      this.showEventNine = false;
      this.showEventTen = false;
      this.showEventEleven = false;
      this.showEventtwelve = false;

    }
    else if (this.eventsData == 2) {
      this.EventHeader = "Business event 2015";
      this.showAll = false;
      this.showEventOne = false;
      this.showEventTwo = true;
      this.showEventThree = false;
      this.showEventFour = false;
      this.showEventFive = false;
      this.showEventSix = false;
      this.showEventSeven = false;
      this.showEventEight = false;
      this.showEventNine = false;
      this.showEventTen = false;
      this.showEventEleven = false;
      this.showEventtwelve = false;
    }
    else if (this.eventsData == 3) {
      this.EventHeader = "Brics 2015";
      this.showAll = false;
      this.showEventOne = false;
      this.showEventTwo = false;
      this.showEventThree = true;
      this.showEventFour = false;
      this.showEventFive = false;
      this.showEventSix = false;
      this.showEventSeven = false;
      this.showEventEight = false;
      this.showEventNine = false;
      this.showEventTen = false;
      this.showEventEleven = false;
      this.showEventtwelve = false;
    }

    else if (this.eventsData == 4) {
      this.EventHeader = "IFTAR 2015";
      this.showAll = false;
      this.showEventOne = false;
      this.showEventTwo = false;
      this.showEventThree = false;
      this.showEventFour = true;
      this.showEventFive = false;
      this.showEventSix = false;
      this.showEventSeven = false;
      this.showEventEight = false;
      this.showEventNine = false;
      this.showEventTen = false;
      this.showEventEleven = false;
      this.showEventtwelve = false;
    }

    else if (this.eventsData == 5) {
      this.EventHeader = "IFTAR 2017";
      this.showAll = false;
      this.showEventOne = false;
      this.showEventTwo = false;
      this.showEventThree = false;
      this.showEventFour = false;
      this.showEventFive = true;
      this.showEventSix = false;
      this.showEventSeven = false;
      this.showEventEight = false;
      this.showEventNine = false;
      this.showEventTen = false;
      this.showEventEleven = false;
      this.showEventtwelve = false;
    }

    else if (this.eventsData == 6) {
      this.EventHeader = "Money";
      this.showAll = false;
      this.showEventOne = false;
      this.showEventTwo = false;
      this.showEventThree = false;
      this.showEventFour = false;
      this.showEventFive = false;
      this.showEventSix = true;
      this.showEventSeven = false;
      this.showEventEight = false;
      this.showEventNine = false;
      this.showEventTen = false;
      this.showEventEleven = false;
      this.showEventtwelve = false;
    }

    else if (this.eventsData == 7) {
      this.EventHeader = "Business event 2017";
      this.showAll = false;
      this.showEventOne = false;
      this.showEventTwo = false;
      this.showEventThree = false;
      this.showEventFour = false;
      this.showEventFive = false;
      this.showEventSix = false;
      this.showEventSeven = true;
      this.showEventEight = false;
      this.showEventNine = false;
      this.showEventTen = false;
      this.showEventEleven = false;
      this.showEventtwelve = false;

    }
    else if (this.eventsData == 8) {
      this.EventHeader = "Meeting with DG";
      this.showAll = false;
      this.showEventOne = false;
      this.showEventTwo = false;
      this.showEventThree = false;
      this.showEventFour = false;
      this.showEventFive = false;
      this.showEventSix = false;
      this.showEventSeven = false;
      this.showEventEight = true;
      this.showEventNine = false;
      this.showEventTen = false;
      this.showEventEleven = false;
      this.showEventtwelve = false;
    }
    else if (this.eventsData == 9) {
      this.EventHeader = "Get together 2013";
      this.showAll = false;
      this.showEventOne = false;
      this.showEventTwo = false;
      this.showEventThree = false;
      this.showEventFour = false;
      this.showEventFive = false;
      this.showEventSix = false;
      this.showEventSeven = false;
      this.showEventEight = false;
      this.showEventNine = true;
      this.showEventTen = false;
      this.showEventEleven = false;
      this.showEventtwelve = false;
    }

    else if (this.eventsData == 10) {
      this.EventHeader = "VAT clint 2017";
      this.showAll = false;
      this.showEventOne = false;
      this.showEventTwo = false;
      this.showEventThree = false;
      this.showEventFour = false;
      this.showEventFive = false;
      this.showEventSix = false;
      this.showEventSeven = false;
      this.showEventEight = false;
      this.showEventNine = false;
      this.showEventTen = true;
      this.showEventEleven = false;
      this.showEventtwelve = false;
    }

    else if (this.eventsData == 11) {
      this.EventHeader = "VAT Return & Compliance";
      this.showAll = false;
      this.showEventOne = false;
      this.showEventTwo = false;
      this.showEventThree = false;
      this.showEventFour = false;
      this.showEventFive = false;
      this.showEventSix = false;
      this.showEventSeven = false;
      this.showEventEight = false;
      this.showEventNine = false;
      this.showEventTen = false;
      this.showEventEleven = true;
      this.showEventtwelve = false;
    }

    else if (this.eventsData == 12) {
      this.EventHeader = "Kizod";
      this.showAll = false;
      this.showEventOne = false;
      this.showEventTwo = false;
      this.showEventThree = false;
      this.showEventFour = false;
      this.showEventFive = false;
      this.showEventSix = false;
      this.showEventSeven = false;
      this.showEventEight = false;
      this.showEventNine = false;
      this.showEventTen = false;
      this.showEventEleven = false;
      this.showEventtwelve = true;
      console.log(this.showEventtwelve);
    }

    else {

    }


  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    // this.galleryOptions = [
    //   {
    //     thumbnails: true,
    //     image: false,
    //     thumbnailsSwipe: true,
    //     thumbnailsPercent: 10,
    //     thumbnailsMargin: 30,
    //     thumbnailMargin: 30,
    //     width: "100%",
    //     height: "200px",
    //     thumbnailsColumns: 6,
    //     imageAnimation: NgxGalleryAnimation.Zoom
    //   },
    // max-width 800
    // {
    //   breakpoint: 800,


    //   image: false,
    //   thumbnailsPercent: 10,

    // },
    // max-width 400
    // {
    //   breakpoint: 400,
    //   preview: false
    // }

    this.galleryOptions = [
      {
        width: '100%',
        height: '600px',
        image: false,
        thumbnailsMargin: 30,
        previewSwipe: true,
        thumbnailsColumns: 3,
        thumbnailsRows: 2,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '400px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: true
      }
    ];
    this.galleryOptionsAll = [
      {
        width: '100%',
        height: '600px',
        image: false,
        thumbnailsMargin: 30,
        previewSwipe: true,
        thumbnailsColumns: 5,
        thumbnailsRows: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: true
      }
    ];




    this.allevents = [

      //event 1

      {
        small: 'assets/img/events/BS-2013/1.jpg',
        medium: 'assets/img/events/BS-2013/1.jpg',
        big: 'assets/img/events/BS-2013/1.jpg',
      },
      {
        small: 'assets/img/events/BS-2013/2.jpg',
        medium: 'assets/img/events/BS-2013/2.jpg',
        big: 'assets/img/events/BS-2013/2.jpg',
      },
      {
        small: 'assets/img/events/BS-2013/3.jpg',
        medium: 'assets/img/events/BS-2013/3.jpg',
        big: 'assets/img/events/BS-2013/3.jpg',
      },
      {
        small: 'assets/img/events/BS-2013/4.jpg',
        medium: 'assets/img/events/BS-2013/4.jpg',
        big: 'assets/img/events/BS-2013/1.jpg',
      },
      {
        small: 'assets/img/events/BS-2013/5.jpg',
        medium: 'assets/img/events/BS-2013/5.jpg',
        big: 'assets/img/events/BS-2013/5.jpg',
      },
      {
        small: 'assets/img/events/BS-2013/6.jpg',
        medium: 'assets/img/events/BS-2013/6.jpg',
        big: 'assets/img/events/BS-2013/6.jpg',
      },

      //event 2

      {
        small: 'assets/img/events/BE-2015/1.JPG',
        medium: 'assets/img/events/BE-2015/1.JPG',
        big: 'assets/img/events/BE-2015/1.JPG',
        description: ''
      },
      {
        small: 'assets/img/events/BE-2015/2.JPG',
        medium: 'assets/img/events/BE-2015/2.JPG',
        big: 'assets/img/events/BE-2015/2.JPG',
      },
      {
        small: 'assets/img/events/BE-2015/3.JPG',
        medium: 'assets/img/events/BE-2015/3.JPG',
        big: 'assets/img/events/BE-2015/3.JPG',
      },
      {
        small: 'assets/img/events/BE-2015/4.JPG',
        medium: 'assets/img/events/BE-2015/4.JPG',
        big: 'assets/img/events/BE-2015/4.JPG',
      },
      {
        small: 'assets/img/events/BE-2015/5.JPG',
        medium: 'assets/img/events/BE-2015/5.JPG',
        big: 'assets/img/events/BE-2015/5.JPG',
      },

      //event 3

      {
        small: 'assets/img/events/BRICKS2015/1.jpg',
        medium: 'assets/img/events/BRICKS2015/1.jpg',
        big: 'assets/img/events/BRICKS2015/1.jpg',
      },
      {
        small: 'assets/img/events/BRICKS2015/2.jpg',
        medium: 'assets/img/events/BRICKS2015/2.jpg',
        big: 'assets/img/events/BRICKS2015/2.jpg',
      },
      {
        small: 'assets/img/events/BRICKS2015/3.jpg',
        medium: 'assets/img/events/BRICKS2015/3.jpg',
        big: 'assets/img/events/BRICKS2015/3.jpg'
      },
      {
        small: 'assets/img/events/BRICKS2015/4.jpg',
        medium: 'assets/img/events/BRICKS2015/4.jpg',
        big: 'assets/img/events/BRICKS2015/4.jpg'
      },
      {
        small: 'assets/img/events/BRICKS2015/5.jpg',
        medium: 'assets/img/events/BRICKS2015/5.jpg',
        big: 'assets/img/events/BRICKS2015/5.jpg'
      },
      {
        small: 'assets/img/events/BRICKS2015/6.jpg',
        medium: 'assets/img/events/BRICKS2015/6.jpg',
        big: 'assets/img/events/BRICKS2015/6.jpg'
      },
      //event 4
      {
        small: 'assets/img/events/iftar-15/1.jpg',
        medium: 'assets/img/events/iftar-15/1.jpg',
        big: 'assets/img/events/iftar-15/1.jpg',
        description: ''
      },
      {
        small: 'assets/img/events/iftar-15/2.jpg',
        medium: 'assets/img/events/iftar-15/2.jpg',
        big: 'assets/img/events/iftar-15/2.jpg'
      },
      {
        small: 'assets/img/events/iftar-15/3.jpg',
        medium: 'assets/img/events/iftar-15/3.jpg',
        big: 'assets/img/events/iftar-15/3.jpg'
      },
      {
        small: 'assets/img/events/iftar-15/4.jpg',
        medium: 'assets/img/events/iftar-15/4.jpg',
        big: 'assets/img/events/iftar-15/4.jpg'
      },
      {
        small: 'assets/img/events/iftar-15/5.jpg',
        medium: 'assets/img/events/iftar-15/5.jpg',
        big: 'assets/img/events/iftar-15/5.jpg'
      },

      //event 5
      {
        small: 'assets/img/events/iftar-17/1.jpg',
        medium: 'assets/img/events/iftar-17/1.jpg',
        big: 'assets/img/events/iftar-17/1.jpg',
      },
      {
        small: 'assets/img/events/iftar-17/2.jpg',
        medium: 'assets/img/events/iftar-17/2.jpg',
        big: 'assets/img/events/iftar-17/2.jpg',
      },
      {
        small: 'assets/img/events/iftar-17/3.jpg',
        medium: 'assets/img/events/iftar-17/3.jpg',
        big: 'assets/img/events/iftar-17/3.jpg',
      },
      {
        small: 'assets/img/events/iftar-17/4.jpg',
        medium: 'assets/img/events/iftar-17/4.jpg',
        big: 'assets/img/events/iftar-17/4.jpg',
      },
      {
        small: 'assets/img/events/iftar-17/5.jpg',
        medium: 'assets/img/events/iftar-17/5.jpg',
        big: 'assets/img/events/iftar-17/5.jpg',
      },
      {
        small: 'assets/img/events/iftar-17/6.jpg',
        medium: 'assets/img/events/iftar-17/6.jpg',
        big: 'assets/img/events/iftar-17/6.jpg',
      },
      {
        small: 'assets/img/events/iftar-17/7.jpg',
        medium: 'assets/img/events/iftar-17/7.jpg',
        big: 'assets/img/events/iftar-17/7.jpg',
      },

      //event 6

      {
        small: 'assets/img/events/money/1.jpg',
        medium: 'assets/img/events/money/1.jpg',
        big: 'assets/img/events/money/1.jpg',
        description: ''
      },
      {
        small: 'assets/img/events/money/2.jpg',
        medium: 'assets/img/events/money/2.jpg',
        big: 'assets/img/events/money/2.jpg',
      },
      {
        small: 'assets/img/events/money/3.jpg',
        medium: 'assets/img/events/money/3.jpg',
        big: 'assets/img/events/money/3.jpg',
      },
      {

        small: 'assets/img/events/money/4.jpg',
        medium: 'assets/img/events/money/4.jpg',
        big: 'assets/img/events/money/4.jpg',
      },
      {
        small: 'assets/img/events/money/5.jpg',
        medium: 'assets/img/events/money/5.jpg',
        big: 'assets/img/events/money/5.jpg',
      },
      // event 7
      {
        small: 'assets/img/events/BS-2017/1.jpg',
        medium: 'assets/img/events/BS-2017/1.jpg',
        big: 'assets/img/events/BS-2017/1.jpg',
        description: ''
      },
      {
        small: 'assets/img/events/BS-2017/2.jpg',
        medium: 'assets/img/events/BS-2017/2.jpg',
        big: 'assets/img/events/BS-2017/2.jpg',
      },
      {
        small: 'assets/img/events/BS-2017/3.jpg',
        medium: 'assets/img/events/BS-2017/3.jpg',
        big: 'assets/img/events/BS-2017/3.jpg',
      },
      {
        small: 'assets/img/events/BS-2017/4.jpg',
        medium: 'assets/img/events/BS-2017/4.jpg',
        big: 'assets/img/events/BS-2017/4.jpg',
      },
      {
        small: 'assets/img/events/BS-2017/5.jpg',
        medium: 'assets/img/events/BS-2017/5.jpg',
        big: 'assets/img/events/BS-2017/5.jpg',
      },
      //event 8
      {
        small: 'assets/img/events/meeting-with-dg/1.jpg',
        medium: 'assets/img/events/meeting-with-dg/1.jpg',
        big: 'assets/img/events/meeting-with-dg/1.jpg',
        description: ''
      },
      {
        small: 'assets/img/events/meeting-with-dg/2.jpg',
        medium: 'assets/img/events/meeting-with-dg/2.jpg',
        big: 'assets/img/events/meeting-with-dg/2.jpg',
      },
      {
        small: 'assets/img/events/meeting-with-dg/3.jpg',
        medium: 'assets/img/events/meeting-with-dg/3.jpg',
        big: 'assets/img/events/meeting-with-dg/3.jpg',
        description: ''
      },
      {
        small: 'assets/img/events/meeting-with-dg/4.jpg',
        medium: 'assets/img/events/meeting-with-dg/4.jpg',
        big: 'assets/img/events/meeting-with-dg/4.jpg',
      },
      //event 9
      {
        small: 'assets/img/events/get-together-2013/1.jpg',
        medium: 'assets/img/events/get-together-2013/1.jpg',
        big: 'assets/img/events/get-together-2013/1.jpg',
      },
      {
        small: 'assets/img/events/get-together-2013/2.jpg',
        medium: 'assets/img/events/get-together-2013/2.jpg',
        big: 'assets/img/events/get-together-2013/2.jpg',
      },
      {
        small: 'assets/img/events/get-together-2013/3.jpg',
        medium: 'assets/img/events/get-together-2013/3.jpg',
        big: 'assets/img/events/get-together-2013/3.jpg',
      },
      {
        small: 'assets/img/events/get-together-2013/4.jpg',
        medium: 'assets/img/events/get-together-2013/4.jpg',
        big: 'assets/img/events/get-together-2013/4.jpg',
      },
      {
        small: 'assets/img/events/get-together-2013/5.jpg',
        medium: 'assets/img/events/get-together-2013/5.jpg',
        big: 'assets/img/events/get-together-2013/5.jpg',
      },
      {
        small: 'assets/img/events/get-together-2013/6.jpg',
        medium: 'assets/img/events/get-together-2013/6.jpg',
        big: 'assets/img/events/get-together-2013/6.jpg',
      },
      //event 10
      {
        small: 'assets/img/events/vat-clinic-2017/1.jpg',
        medium: 'assets/img/events/vat-clinic-2017/1.jpg',
        big: 'assets/img/events/vat-clinic-2017/1.jpg',
        description: ''
      },
      {
        small: 'assets/img/events/vat-clinic-2017/2.jpg',
        medium: 'assets/img/events/vat-clinic-2017/2.jpg',
        big: 'assets/img/events/vat-clinic-2017/2.jpg',
      },

      {
        small: 'assets/img/events/vat-clinic-2017/3.jpg',
        medium: 'assets/img/events/vat-clinic-2017/3.jpg',
        big: 'assets/img/events/vat-clinic-2017/3.jpg',
      },
      {

        small: 'assets/img/events/vat-clinic-2017/4.jpg',
        medium: 'assets/img/events/vat-clinic-2017/4.jpg',
        big: 'assets/img/events/vat-clinic-2017/4.jpg',
      },
      //event 11
      {
        small: 'assets/img/events/vat-r&c/1.JPG',
        medium: 'assets/img/events/vat-r&c/1.JPG',
        big: 'assets/img/events/vat-r&c/1.JPG',
        description: ''
      },
      {
        small: 'assets/img/events/vat-r&c/2.JPG',
        medium: 'assets/img/events/vat-r&c/2.JPG',
        big: 'assets/img/events/vat-r&c/2.JPG',
      },
      {
        small: 'assets/img/events/vat-r&c/3.jpg',
        medium: 'assets/img/events/vat-r&c/3.jpg',
        big: 'assets/img/events/vat-r&c/3.jpg',
      },
      {
        small: 'assets/img/events/vat-r&c/4.jpg',
        medium: 'assets/img/events/vat-r&c/4.jpg',
        big: 'assets/img/events/vat-r&c/4.jpg',
      },
      //event 12
      {
        small: 'assets/img/events/Kizad/1.JPG',
        medium: 'assets/img/events/Kizad/1.JPG',
        big: 'assets/img/events/Kizad/1.JPG'
      },
      {
        small: 'assets/img/events/Kizad/2.JPG',
        medium: 'assets/img/events/Kizad/2.JPG',
        big: 'assets/img/events/Kizad/2.JPG',
      },
      {
        small: 'assets/img/events/Kizad/3.JPG',
        medium: 'assets/img/events/Kizad/3.JPG',
        big: 'assets/img/events/Kizad/3.JPG',
      },
      {
        small: 'assets/img/events/Kizad/4.JPG',
        medium: 'assets/img/events/Kizad/4.JPG',
        big: 'assets/img/events/Kizad/4.JPG',
      },
      {
        small: 'assets/img/events/Kizad/5.JPG',
        medium: 'assets/img/events/Kizad/5.JPG',
        big: 'assets/img/events/Kizad/5.JPG',
      }
    ];

    this.event1 = [
      {
        small: 'assets/img/events/BS-2013/1.jpg',
        medium: 'assets/img/events/BS-2013/1.jpg',
        big: 'assets/img/events/BS-2013/1.jpg',
      },
      {
        small: 'assets/img/events/BS-2013/2.jpg',
        medium: 'assets/img/events/BS-2013/2.jpg',
        big: 'assets/img/events/BS-2013/2.jpg',
      },
      {
        small: 'assets/img/events/BS-2013/3.jpg',
        medium: 'assets/img/events/BS-2013/3.jpg',
        big: 'assets/img/events/BS-2013/3.jpg',
      },
      {
        small: 'assets/img/events/BS-2013/4.jpg',
        medium: 'assets/img/events/BS-2013/4.jpg',
        big: 'assets/img/events/BS-2013/1.jpg',
      },
      {
        small: 'assets/img/events/BS-2013/5.jpg',
        medium: 'assets/img/events/BS-2013/5.jpg',
        big: 'assets/img/events/BS-2013/5.jpg',
      },
      {
        small: 'assets/img/events/BS-2013/6.jpg',
        medium: 'assets/img/events/BS-2013/6.jpg',
        big: 'assets/img/events/BS-2013/6.jpg',
      }
    ];

    this.event2 = [
      {

        small: 'assets/img/events/BE-2015/1.JPG',
        medium: 'assets/img/events/BE-2015/1.JPG',
        big: 'assets/img/events/BE-2015/1.JPG',
        description: ''
      },
      {

        small: 'assets/img/events/BE-2015/2.JPG',
        medium: 'assets/img/events/BE-2015/2.JPG',
        big: 'assets/img/events/BE-2015/2.JPG',
      },
      {
        small: 'assets/img/events/BE-2015/3.JPG',
        medium: 'assets/img/events/BE-2015/3.JPG',
        big: 'assets/img/events/BE-2015/3.JPG',
      },
      {

        small: 'assets/img/events/BE-2015/4.JPG',
        medium: 'assets/img/events/BE-2015/4.JPG',
        big: 'assets/img/events/BE-2015/4.JPG',
      },
      {
        small: 'assets/img/events/BE-2015/5.JPG',
        medium: 'assets/img/events/BE-2015/5.JPG',
        big: 'assets/img/events/BE-2015/5.JPG',
      },

    ];


    this.event3 = [
      {

        small: 'assets/img/events/BRICKS2015/1.jpg',
        medium: 'assets/img/events/BRICKS2015/1.jpg',
        big: 'assets/img/events/BRICKS2015/1.jpg',
        description: ''
      },
      {

        small: 'assets/img/events/BRICKS2015/2.jpg',
        medium: 'assets/img/events/BRICKS2015/2.jpg',
        big: 'assets/img/events/BRICKS2015/2.jpg',
      },
      {

        small: 'assets/img/events/BRICKS2015/3.jpg',
        medium: 'assets/img/events/BRICKS2015/3.jpg',
        big: 'assets/img/events/BRICKS2015/3.jpg'
      },
      {

        small: 'assets/img/events/BRICKS2015/4.jpg',
        medium: 'assets/img/events/BRICKS2015/4.jpg',
        big: 'assets/img/events/BRICKS2015/4.jpg'
      },
      {

        small: 'assets/img/events/BRICKS2015/5.jpg',
        medium: 'assets/img/events/BRICKS2015/5.jpg',
        big: 'assets/img/events/BRICKS2015/5.jpg'
      },
      {
        small: 'assets/img/events/BRICKS2015/6.jpg',
        medium: 'assets/img/events/BRICKS2015/6.jpg',
        big: 'assets/img/events/BRICKS2015/6.jpg'
      }
    ];


    this.event5 = [
      {
        small: 'assets/img/events/iftar-17/1.jpg',
        medium: 'assets/img/events/iftar-17/1.jpg',
        big: 'assets/img/events/iftar-17/1.jpg',
        description: ''
      },
      {

        small: 'assets/img/events/iftar-17/2.jpg',
        medium: 'assets/img/events/iftar-17/2.jpg',
        big: 'assets/img/events/iftar-17/2.jpg',
      },
      {

        small: 'assets/img/events/iftar-17/3.jpg',
        medium: 'assets/img/events/iftar-17/3.jpg',
        big: 'assets/img/events/iftar-17/3.jpg',
      },
      {

        small: 'assets/img/events/iftar-17/4.jpg',
        medium: 'assets/img/events/iftar-17/4.jpg',
        big: 'assets/img/events/iftar-17/4.jpg',
      },
      {

        small: 'assets/img/events/iftar-17/5.jpg',
        medium: 'assets/img/events/iftar-17/5.jpg',
        big: 'assets/img/events/iftar-17/5.jpg',
      },
      {

        small: 'assets/img/events/iftar-17/6.jpg',
        medium: 'assets/img/events/iftar-17/6.jpg',
        big: 'assets/img/events/iftar-17/6.jpg',
      },
      {

        small: 'assets/img/events/iftar-17/7.jpg',
        medium: 'assets/img/events/iftar-17/7.jpg',
        big: 'assets/img/events/iftar-17/7.jpg',
      }
    ];


    this.event4 = [
      {
        small: 'assets/img/events/iftar-15/1.jpg',
        medium: 'assets/img/events/iftar-15/1.jpg',
        big: 'assets/img/events/iftar-15/1.jpg',
        description: ''
      },
      {

        small: 'assets/img/events/iftar-15/2.jpg',
        medium: 'assets/img/events/iftar-15/2.jpg',
        big: 'assets/img/events/iftar-15/2.jpg'
      },
      {
        small: 'assets/img/events/iftar-15/3.jpg',
        medium: 'assets/img/events/iftar-15/3.jpg',
        big: 'assets/img/events/iftar-15/3.jpg'
      },
      {
        small: 'assets/img/events/iftar-15/4.jpg',
        medium: 'assets/img/events/iftar-15/4.jpg',
        big: 'assets/img/events/iftar-15/4.jpg'
      },
      {

        small: 'assets/img/events/iftar-15/5.jpg',
        medium: 'assets/img/events/iftar-15/5.jpg',
        big: 'assets/img/events/iftar-15/5.jpg'
      },
      {

        small: 'assets/img/events/iftar-15/6.jpg',
        medium: 'assets/img/events/iftar-15/6.jpg',
        big: 'assets/img/events/iftar-15/6.jpg'
      }
    ];
    this.event6 = [
      {
        small: 'assets/img/events/money/1.jpg',
        medium: 'assets/img/events/money/1.jpg',
        big: 'assets/img/events/money/1.jpg',
        description: ''
      },
      {

        small: 'assets/img/events/money/2.jpg',
        medium: 'assets/img/events/money/2.jpg',
        big: 'assets/img/events/money/2.jpg',
      },
      {
        small: 'assets/img/events/money/3.jpg',
        medium: 'assets/img/events/money/3.jpg',
        big: 'assets/img/events/money/3.jpg',
      },
      {

        small: 'assets/img/events/money/4.jpg',
        medium: 'assets/img/events/money/4.jpg',
        big: 'assets/img/events/money/4.jpg',
      },
      {
        small: 'assets/img/events/money/5.jpg',
        medium: 'assets/img/events/money/5.jpg',
        big: 'assets/img/events/money/5.jpg',
      }

    ];
    this.event7 = [
      {
        small: 'assets/img/events/BS-2017/1.jpg',
        medium: 'assets/img/events/BS-2017/1.jpg',
        big: 'assets/img/events/BS-2017/1.jpg',
        description: ''
      },
      {
        small: 'assets/img/events/BS-2017/2.jpg',
        medium: 'assets/img/events/BS-2017/2.jpg',
        big: 'assets/img/events/BS-2017/2.jpg',
      },
      {
        small: 'assets/img/events/BS-2017/3.jpg',
        medium: 'assets/img/events/BS-2017/3.jpg',
        big: 'assets/img/events/BS-2017/3.jpg',
      },
      {
        small: 'assets/img/events/BS-2017/4.jpg',
        medium: 'assets/img/events/BS-2017/4.jpg',
        big: 'assets/img/events/BS-2017/4.jpg',
      },
      {

        small: 'assets/img/events/BS-2017/5.jpg',
        medium: 'assets/img/events/BS-2017/5.jpg',
        big: 'assets/img/events/BS-2017/5.jpg',
      },

    ];
    this.event8 = [
      {
        small: 'assets/img/events/meeting-with-dg/1.jpg',
        medium: 'assets/img/events/meeting-with-dg/1.jpg',
        big: 'assets/img/events/meeting-with-dg/1.jpg',
        description: ''
      },
      {
        small: 'assets/img/events/meeting-with-dg/2.jpg',
        medium: 'assets/img/events/meeting-with-dg/2.jpg',
        big: 'assets/img/events/meeting-with-dg/2.jpg',
      },
      {
        small: 'assets/img/events/meeting-with-dg/3.jpg',
        medium: 'assets/img/events/meeting-with-dg/3.jpg',
        big: 'assets/img/events/meeting-with-dg/3.jpg',
        description: ''
      },
      {
        small: 'assets/img/events/meeting-with-dg/4.jpg',
        medium: 'assets/img/events/meeting-with-dg/4.jpg',
        big: 'assets/img/events/meeting-with-dg/4.jpg',
      }
    ];
    this.event9 = [
      {
        small: 'assets/img/events/get-together-2013/1.jpg',
        medium: 'assets/img/events/get-together-2013/1.jpg',
        big: 'assets/img/events/get-together-2013/1.jpg',
      },
      {
        small: 'assets/img/events/get-together-2013/2.jpg',
        medium: 'assets/img/events/get-together-2013/2.jpg',
        big: 'assets/img/events/get-together-2013/2.jpg',
      },
      {
        small: 'assets/img/events/get-together-2013/3.jpg',
        medium: 'assets/img/events/get-together-2013/3.jpg',
        big: 'assets/img/events/get-together-2013/3.jpg',
      },
      {
        small: 'assets/img/events/get-together-2013/4.jpg',
        medium: 'assets/img/events/get-together-2013/4.jpg',
        big: 'assets/img/events/get-together-2013/4.jpg',
      },
      {
        small: 'assets/img/events/get-together-2013/5.jpg',
        medium: 'assets/img/events/get-together-2013/5.jpg',
        big: 'assets/img/events/get-together-2013/5.jpg',
      },
      {
        small: 'assets/img/events/get-together-2013/6.jpg',
        medium: 'assets/img/events/get-together-2013/6.jpg',
        big: 'assets/img/events/get-together-2013/6.jpg',
      },
    ];

    this.event11 = [
      {
        small: 'assets/img/events/vat-r&c/1.JPG',
        medium: 'assets/img/events/vat-r&c/1.JPG',
        big: 'assets/img/events/vat-r&c/1.JPG',
        description: ''
      },
      {
        small: 'assets/img/events/vat-r&c/2.JPG',
        medium: 'assets/img/events/vat-r&c/2.JPG',
        big: 'assets/img/events/vat-r&c/2.JPG',
      },
      {
        small: 'assets/img/events/vat-r&c/3.jpg',
        medium: 'assets/img/events/vat-r&c/3.jpg',
        big: 'assets/img/events/vat-r&c/3.jpg',
      },
      {
        small: 'assets/img/events/vat-r&c/4.jpg',
        medium: 'assets/img/events/vat-r&c/4.jpg',
        big: 'assets/img/events/vat-r&c/4.jpg',
      },

    ];
    this.event10 = [
      {
        small: 'assets/img/events/vat-clinic-2017/1.jpg',
        medium: 'assets/img/events/vat-clinic-2017/1.jpg',
        big: 'assets/img/events/vat-clinic-2017/1.jpg',
        description: ''
      },
      {
        small: 'assets/img/events/vat-clinic-2017/2.jpg',
        medium: 'assets/img/events/vat-clinic-2017/2.jpg',
        big: 'assets/img/events/vat-clinic-2017/2.jpg',
      },

      {
        small: 'assets/img/events/vat-clinic-2017/3.jpg',
        medium: 'assets/img/events/vat-clinic-2017/3.jpg',
        big: 'assets/img/events/vat-clinic-2017/3.jpg',
      },
      {

        small: 'assets/img/events/vat-clinic-2017/4.jpg',
        medium: 'assets/img/events/vat-clinic-2017/4.jpg',
        big: 'assets/img/events/vat-clinic-2017/4.jpg',
      },

    ];

    this.event12 = [
      {
        small: 'assets/img/events/Kizad/1.JPG',
        medium: 'assets/img/events/Kizad/1.JPG',
        big: 'assets/img/events/Kizad/1.JPG'
      },
      {
        small: 'assets/img/events/Kizad/2.JPG',
        medium: 'assets/img/events/Kizad/2.JPG',
        big: 'assets/img/events/Kizad/2.JPG',
      },
      {
        small: 'assets/img/events/Kizad/3.JPG',
        medium: 'assets/img/events/Kizad/3.JPG',
        big: 'assets/img/events/Kizad/3.JPG',
      },
      {
        small: 'assets/img/events/Kizad/4.JPG',
        medium: 'assets/img/events/Kizad/4.JPG',
        big: 'assets/img/events/Kizad/4.JPG',
      },
      {
        small: 'assets/img/events/Kizad/5.JPG',
        medium: 'assets/img/events/Kizad/5.JPG',
        big: 'assets/img/events/Kizad/5.JPG',
      }
    ];
  }

}


