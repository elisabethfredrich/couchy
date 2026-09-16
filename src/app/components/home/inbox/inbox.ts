import { Component } from '@angular/core';
import { Enquiry } from '../../../models/user-data';

@Component({
  imports: [],
  selector: 'app-inbox',
  templateUrl: './inbox.html',
})
export class Inbox {
  protected enquiries: Enquiry[] = [
    {
      sender: 'Artur22',
      date: '16.09.2026',
      title: 'Neue Anfrage zu et hic tempore',
      message: 'Cupiditate deleniti faciacere ea dolore velit.',
    },
    {
      sender: 'Leif_Kuhn4',
      date: '15.09.2026',
      title: 'Neue Anfrage zu et hic tempore',
      message: 'Cupiditate deleniti faciacere ea dolore velit.',
    },
    {
      sender: 'Medine65',
      date: '14.09.2026',
      title: 'Neue Anfrage zu et hic tempore',
      message: 'Cupiditate deleniti faciacere ea dolore velit.',
    },
    {
      sender: 'Cecilia_Hold61',
      date: '13.09.2026',
      title: 'Neue Anfrage zu et hic tempore',
      message: 'Cupiditate deleniti faciacere ea dolore velit.',
    },
    {
      sender: 'Marisa.Diekmann13',
      date: '12.09.2026',
      title: 'Neue Anfrage zu et hic tempore',
      message: 'Cupiditate deleniti faciacere ea dolore velit.',
    },
  ];
}
