import type { IBook } from './shared/ibook';
import type { IHttpClientRequestParameters } from 'http/shared/ihttpclientrequestparameters';
import { http } from 'http/httpclient';

export class BookService {

    private BASE_URL: string = process.env['API_BASE_URL'];

    all(): Promise<IBook[]> {
        console.log(this.BASE_URL);
        
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

export const book = new BookService();
