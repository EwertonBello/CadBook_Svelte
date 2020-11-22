import type { IBook } from './shared/ibook';
import type { IHttpClientRequestParameters } from 'http/shared/ihttpclientrequestparameters';
import { http } from 'http/httpclient';

export class BookService {

    all(): Promise<IBook[]> {
        const requestParameters: IHttpClientRequestParameters<IBook[]> = {
          url: 'https://cadbook.herokuapp.com/api/v1/books',
          requiresToken: false
        }

        return http.get<IBook[]>(requestParameters);
    }

    byID(id: number): Promise<IBook> {
        const requestParameters: IHttpClientRequestParameters<IBook> = {
          url: `https://cadbook.herokuapp.com/api/v1/books/${id}`,
          requiresToken: false
        }

        return http.get<IBook>(requestParameters);
    }
  }

export const book = new BookService();
