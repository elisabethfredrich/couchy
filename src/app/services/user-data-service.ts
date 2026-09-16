import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SearchResult, User, UserData } from '../models/user-data';

@Service()
export class UserDataService {
  private http = inject(HttpClient);

  private getData(): Observable<UserData> {
    return this.http.get<UserData>('/user_data.json');
  }

  public getCurrentUser(): Observable<User> {
    return this.getData().pipe(map((data) => data.users[0]));
  }

  public searchOffersByCity(city: string): Observable<SearchResult[]> {
    const normalizedCity = city.trim().toLowerCase();
    return this.getData().pipe(
      map((data) =>
        data.users
          .filter((user, index) => index !== 0)
          .filter((user) => user.current_offers.length > 0)
          .filter((user) => user.account_data.address.city.toLowerCase().trim() === normalizedCity)
          .flatMap((user) => user.current_offers.map((offer) => ({ offer, user }))),
      ),
    );
  }

  public getOfferByUri(uri: string): Observable<SearchResult | undefined> {
    return this.getData().pipe(
      map((data) => {
        for (const user of data.users) {
          const offer = user.current_offers.find((offer) => offer.uri === uri);

          if (offer) {
            return {
              offer,
              user,
            };
          }
        }

        return undefined;
      }),
    );
  }
}
