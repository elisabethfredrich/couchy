import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { DatePipe, Location } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { UserDataService } from '../../../../services/user-data-service';
import { SearchResult } from '../../../../models/user-data';

@Component({
  selector: 'app-details',
  imports: [DatePipe, RouterLink],
  templateUrl: './details.html',
})
export class Details implements OnInit {
  private route = inject(ActivatedRoute);
  private dataService = inject(UserDataService);
  private cdr = inject(ChangeDetectorRef);
  private location = inject(Location);

  goBack(): void {
    this.location.back();
  }

  result?: SearchResult;

  ngOnInit(): void {
    const offerUri = this.route.snapshot.queryParamMap.get('offer');

    if (!offerUri) {
      return;
    }

    this.dataService.getOfferByUri(offerUri).subscribe({
      next: (result) => {
        this.result = result;
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error('Fehler beim Laden des Angebots:', error);
        this.cdr.markForCheck();
      },
    });
  }

  getAge(birthday: string): number {
    const birthDate = new Date(birthday);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

  getDisplayName(): string {
    if (!this.result) {
      return '';
    }

    const address = this.result.user.account_data.address;

    const firstName = address.firstname;
    const lastNameInitial = address.lastname.charAt(0);

    return `${firstName} ${lastNameInitial}.`;
  }
}
