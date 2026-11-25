import { Component } from '@angular/core';
import { CtaSection } from '../../shared/components/cta-section/cta-section';

@Component({
  selector: 'app-portfolio',
  imports: [CtaSection],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  active = 'All';
  readonly filters = ['All', 'Programmatic', 'Email Marketing', 'Web Design', 'Branding'];
  readonly cases = [
    {filter:'Programmatic',category:'PROGRAMMATIC ADVERTISING',industry:'Fintech',region:'APAC',duration:'90 days',client:'FINEDGE TECHNOLOGIES',headline:'340% increase in qualified leads within 90 days',metrics:[['340%','Increase in Qualified Leads'],['2.8x','ROAS Improvement'],['62%','Reduction in CPL']],color:'blue',icon:'⚡'},
    {filter:'Email Marketing',category:'EMAIL MARKETING',industry:'E-commerce / Beauty',region:'Global',duration:'3 weeks',client:'LUMARA BEAUTY',headline:'58% open rate and $2.1M in attributed revenue from a single launch sequence',metrics:[['58%','Average Open Rate'],['$2.1M','Attributed Revenue'],['12.4%','Click-to-Purchase Rate']],color:'green',icon:'✉'},
    {filter:'Web Design',category:'WEB DESIGN & DEVELOPMENT',industry:'Logistics & Supply Chain',region:'EMEA',duration:'8 weeks',client:'MERIDIAN LOGISTICS',headline:'New site delivers 4.2x more inbound enquiries at 1.1s load time',metrics:[['4.2x','More Inbound Enquiries'],['1.1s','Average Load Time'],['91','Google PageSpeed Score']],color:'orange',icon:'▦'},
    {filter:'Branding',category:'BRANDING & STRATEGY',industry:'Healthcare Technology',region:'Americas',duration:'6 months',client:'VANTARA HEALTH',headline:'Full rebrand drives 210% growth in enterprise pipeline in 6 months',metrics:[['210%','Enterprise Pipeline Growth'],['3.5x','Increase in Demo Requests'],['6','Months to Results']],color:'purple',icon:'◉'},
    {filter:'Programmatic',category:'PROGRAMMATIC ADVERTISING',industry:'Clean Energy',region:'Americas & EMEA',duration:'5 months',client:'SOLARNOVA ENERGY',headline:'Scaled from 3 to 11 markets while maintaining sub-$18 CPL',metrics:[['11','Markets Activated'],['$18','Blended CPL Maintained'],['290%','Total Lead Volume Growth']],color:'blue',icon:'⚡'},
    {filter:'Email Marketing',category:'EMAIL MARKETING',industry:'Retail',region:'APAC',duration:'Ongoing',client:'KOVA RETAIL GROUP',headline:'Automated retention programme reduces churn by 34% year-on-year',metrics:[['34%','Reduction in Churn'],['2.6x','Increase in Repeat Purchase Rate'],['47%','Revenue from Automated Flows']],color:'green',icon:'✉'}
  ];
  get filteredCases() { return this.active === 'All' ? this.cases : this.cases.filter(c => c.filter === this.active); }
}
