import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Messages } from '../classes/messages';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(public http:HttpClient) { }
  messages:Messages
//url="https://localhost:44339/api/Messages/"

}