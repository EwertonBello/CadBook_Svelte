import type { IBook } from './shared/ibook';
import type { IHttpClientRequestParameters } from 'http/shared/ihttpclientrequestparameters';
import { http } from 'http/httpclient';

import { BOOKS_BASE_URL } from '../endpoints.config';

export class BookService {
    private readonly BASE_URL = BOOKS_BASE_URL;

    all(): Promise<IBook[]> {        
        const requestParameters: IHttpClientRequestParameters<IBook[]> = {
          url: this.BASE_URL+'/books',
          requiresToken: false
        }

        return http.get<IBook[]>(requestParameters);
    }

    byID(id: number): Promise<IBook> {
        const requestParameters: IHttpClientRequestParameters<IBook> = {
          url: this.BASE_URL+`/books/${id}`,
          requiresToken: false
        }

        return http.get<IBook>(requestParameters);
    }
  }

export const bookservice = new BookService();
