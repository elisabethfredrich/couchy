import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserDataService } from '../../../services/user-data-service';
import { SearchResult } from '../../../models/user-data';
import { SearchStateService } from '../../../services/search-state-service';

@Component({
  selector: 'app-search',
  imports: [FormsModule, RouterLink],
  templateUrl: './search.html',
})
export class Search {
  private dataService: UserDataService = inject(UserDataService);
  private cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
  private searchState: SearchStateService = inject(SearchStateService);

  // the current content of the input field
  protected searchCity: string = '';

  // The city that was searched for when pressing submit
  protected searchedCity: string = '';

  protected results: SearchResult[] = [];

  protected currentPage: number = 1;
  private readonly resultsPerPage: number = 5;

  protected hasSearched: boolean = false;

  ngOnInit(): void {
    this.searchCity = this.searchState.city;
    this.searchedCity = this.searchState.city;
    this.results = this.searchState.results;
    this.currentPage = this.searchState.currentPage;
    this.hasSearched = this.searchState.hasSearched;
  }

  protected get totalPages(): number {
    return Math.ceil(this.results.length / this.resultsPerPage);
  }

  protected get paginatedResults(): SearchResult[] {
    const startIndex = (this.currentPage - 1) * this.resultsPerPage;

    return this.results.slice(startIndex, startIndex + this.resultsPerPage);
  }

  protected handleSearch(): void {
    const city = this.searchCity.trim();
    if (!city) {
      this.results = [];
      this.hasSearched = false;
      this.currentPage = 1;
      this.searchState.city = '';
      this.searchState.results = [];
      this.searchState.currentPage = 1;
      this.searchState.hasSearched = false;
      this.cdr.markForCheck();
      return;
    }
    // update local state
    this.searchedCity = city;
    this.hasSearched = true;
    this.currentPage = 1;

    // save state in the service to be able to go back to the results from the details page
    this.searchState.city = city;
    this.searchState.currentPage = 1;
    this.searchState.hasSearched = true;

    this.dataService.searchOffersByCity(city).subscribe({
      next: (results) => {
        this.results = results;
        this.searchState.results = results;
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error('Fehler bei der Suche:', error);
        this.results = [];
        this.searchState.results = [];
        this.cdr.markForCheck();
      },
    });
  }

  protected goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }

    this.currentPage = page;
    this.searchState.currentPage = page;
  }

  protected previousPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  protected nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }
}
