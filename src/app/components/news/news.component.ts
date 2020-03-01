import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news:any= [
    //
    {
    header:"UAE economy rebounds slower than expected  in 2018 | 9 APRIL 2019",
    body:"The United Arab Emirates' economy grew by around 1.7 percent in 2018, slower than projected despite a boost from higher oil prices, official preliminary data showed. The UAE growth figures follow Dubai's disclosure last week that its economy grew by 1.94 percent in 2018",
    readMoreLink:"https://www.facebook.com/notes/ibpc-rak-bulletin/uae-economy-rebounds-slower-than-expected-in-2018/591843877951316/"
    },
    //
    {
      header:"Mantis to operate new Jebel Jais luxury camp | 9 APRIL 2019",
      body:"Ras Al Khaimah Tourism Development Authority (RAKTDA) has entered into agreement with Mantis to operate a luxury camping project on Jebel Jais, the highest mountain in the UAE",
      readMoreLink:"https://www.facebook.com/notes/ibpc-rak-bulletin/mantis-to-operate-new-jebel-jais-luxury-camp/591839544618416/",
    },
    //
    {
      header:"Ras Al Khaimah sets out to triple tourist numbers | 11 MARCH 2019",
      body:"Ras Al Khaimah Tourism Development Authority has announced its consolidated results for the full year of 2018, with a record 1,072,066 visitors from domestic and key international markets choosing to stay in Ras Al Khaimah during 2018",
      readMoreLink:"//www.facebook.com/notes/ibpc-rak-bulletin/ras-al-khaimah-sets-out-to-triple-tourist-numbers/577219592747078/"
    },
    //
    {
      header:"How India’s economy has fared under Modi |  11 MARCH 2019",
      body:"In May 2019, India is about to start the biggest electoral exercise in the world as the World’s Largest Democracy.  Elections involving more than 900 million people will have chosen 543 members of the Lok Sabha and therefore a new government",
      readMoreLink:"https://www.facebook.com/notes/ibpc-rak-bulletin/how-indias-economy-has-fared-under-modi/577221579413546/"
    },
    //
    {
      header:"Ice Skating rink now open at top of Jebel al Jais | 12 FEBRUARY 2019",
      body:"The highest peak in the Emirates has a new attraction — it’s now home to the country’s highest skating rink. Perched 1,300 metres above sea level, the Jebel Jais skating rink is open for winter fun.",
      readMoreLink:"https://www.facebook.com/notes/ibpc-rak-bulletin/ice-skating-rink-now-open-at-top-of-jebel-al-jais/562945880841116/"
    },
    //
    {
      header:"RAKTDA to focus more on Central & Eastern Europe visitors | 12 FEBRUARY 2019",
      body:"Ras al Khaimah has lofty targets when it comes to attracting visitors to the Emirate by 2020. Central and Eastern European countries have shown increased interest in the emirate over the past few years with significant growth year-on-year.",
      readMoreLink:"https://www.facebook.com/notes/ibpc-rak-bulletin/raktda-to-focus-more-on-central-eastern-europe-visitors/562947037507667/"
    }
]

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0)
  }

}
