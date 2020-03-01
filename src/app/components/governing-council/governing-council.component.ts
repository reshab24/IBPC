import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-governing-council',
  templateUrl: './governing-council.component.html',
  styleUrls: ['./governing-council.component.css']
})
export class GoverningCouncilComponent implements OnInit {
 
  filesScale1: any = [
    //President data
    {
    img:"assets/img/governing-council/president.jpg",
     name:"Mr. L. K. Verma",
     position:"President",
     post:"Managing Director",
     company:"Orange Management Consultants",
     contact:"050-3743314/055-9501172",
     email:"president@ibpcrakuae.com"
    },
    //Secretary data
    {
    img:"assets/img/governing-council/secretary.jpg",
    name:"Mr. Subrata Mukherjee",
    position:"Hon. Secretary General",
    post:"Deputy General Manager",
    company:"Finance, CERAMIN ",
    contact:"055-2193599/055- 4114235",
    email:"ssmk999@gmail.com"
    },
    //Treasurer data
    {
    img:"assets/img/governing-council/treasurer.jpg",
    name:"Mr. Ajith Abraham Jacob",
    position:"Hon. Treasurer",
    post:"Partner",
    company:" Stuart & Hamlyn Chartered Accountant ",
    contact:" 050 4972307 / 055 9566861 ",
    email:"treasurer@ibpcrakuae.com "
    },
    
    {
      img:"assets/img/governing-council/vsPresident.jpg",
    name:"Mr. T.V. Abdulla Kunhi ",
    position:"Hon. Vice President",
    post:"MD",
    company:"RAKPACK ",
    contact:"050 670 1415 / 07-2446050 ",
    email:"tvkappil@hotmail.com"
  },

 // {img:"assets/img/governing-council/vsSecretary.jpg"},
    {
    img:"assets/img/governing-council/vsSecretary.jpg",
    name:"Mr. Tansen Habib",
    position:"Hon. Jt Secretary General",
    post:"Managing Director ",
    company:" Al Sadaf Printing Press LLC",
    contact:" 055-5504323 / 07-2337760 ",
    email:"tansen.habib@gmail.com"
    },
  
    // {img:"assets/img/governing-council/vsTreasurer.jpg"},
    {
    img:"assets/img/governing-council/vsTreasurer.jpg",
    name:"Mr. Brijesh Joshi",
    position:"Hon. Jt Treasurer",
    // post:"Director",
    // company:"Future Architectural Glass LLC",
    contact:"050-2778419",
    email:"brijesh.j@gmail.com"
    },

    // {img:"assets/img/governing-council/member1.jpg"},

    {
    img:"assets/img/governing-council//member1.jpg",
    name:"Adv. Sunny Varughese ",
    position:"Hon. Member",
    post:"CEO",
    company:"Arab Business Centre",
    contact:"050 6702424/ 07-2046225",
    email:"abcenteruae@gmail.com"
    },

    // {img:"assets/img/governing-council/member2.jpg"},
    {
    img:"assets/img/governing-council/member2.jpg",
    name:"Mrs. Sakina I. Safdari",
    position:"Hon. Member",
    // post:"Senior Manage",
    // company:"RAK",
    contact:"050-4956554",
    email:"sis@saftech.ae"
    },
    // {img:"assets/img/governing-council/member3.jpg"},
    // {
    // img:"assets/img/governing-council/member3.jpg",
    // name:"Mr. Saju Augustine",
    // position:"Hon. Member",
    // post:"Senior Manage",
    // company:"Morison Menon CA",
    // contact:"050-6317153",
    // email:" saju@morisonmenon.com"
    // },
    // {img:"assets/img/governing-council/member4.jpg"},
    {
    img:"assets/img/governing-council/member4.jpg",
    name:"Mr. Baby Thankachan",
    position:"Hon. Member",
    post:"MD",
    company:"Abusultan General Cleaning Services",
    contact:"050-4867889/ 07-2361813",
    email:"babythankachan@gmail.com"
    },

    // {img:"assets/img/governing-council/member5.jpg"},
    {
    img:"assets/img/governing-council/member5.jpg",
    name:"Mr. JRC Babu",
    position:"Hon. Member",
    post:"MD",
    company:"Al Jazaa Electrical & Sanitary ",
    contact:"050-6476642/ 07-2227970",
    email:"groupofjazaa@gmail.com"
    },
    {
      img:"assets/img/governing-council/member6.jpg",
      name:"Shiv Shankar Kumar Sharma",
      position:"Hon. Member",
      // post:"MD",
      // company:"Al Jazaa Electrical & Sanitary ",
      contact:"050-3568071",
      email:"SHIVSHANKER09876@yahoo.co.in"
      },
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.filesScale1);
    window.scrollTo(0, 0);
  }

}
