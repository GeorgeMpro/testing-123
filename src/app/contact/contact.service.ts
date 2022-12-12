import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ContactMessageModel} from './contact-message.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
//    Send Grid route from app.js
  private BACKEND_URL = environment.apiURL;
  private SEND_GRID_ENDPOINT = this.BACKEND_URL + '/contact/send';
  // todo
  // testing route - need to build angular into backend/dist before running
  // private SEND_GRID_ENDPOINT = 'http://localhost:3000/contact/send';

  constructor(private http: HttpClient) {
  }

  /**
   * Return an Observable for accessing the Send Grid route endpoint.
   * @param contactMessage
   */
  sendContactEmail(contactMessage: ContactMessageModel) {
    return this.http.post<{
      message: string,
      content: {}
    }>(
      this.SEND_GRID_ENDPOINT, contactMessage
    );
  }
}
