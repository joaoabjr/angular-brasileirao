import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class CampeonatoService {
	key: string = 'test_866bb4eb4c7f025eec26ddef788ed5';
	url: string = 'https://api.api-futebol.com.br/v1/campeonatos/13/tabela';

	constructor(private httpClient: HttpClient) {}

	getTabelaSerieB(): Observable<any> {
		const headers = new HttpHeaders({
			Authorization: `Bearer ${this.key}`,
		});

		const requestOptions = { headers: headers };

		return this.httpClient.get<any>(this.url, requestOptions);
	}
}
