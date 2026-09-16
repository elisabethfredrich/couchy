import { Service } from '@angular/core';
import { SearchResult } from '../models/user-data';

@Service()
export class SearchStateService {
  public city: string = '';
  public results: SearchResult[] = [];
  public currentPage: number = 1;
  public hasSearched: boolean = false;
}
