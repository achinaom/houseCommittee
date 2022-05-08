import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Messages } from '../classes/messages';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(public http:HttpClient) { }
  message:Messages = new Messages();
  listMessages:Array<Messages>=new Array<Messages>()
url="https://localhost:44339/api/Messages/"

AddMessage(m:Messages):Observable<Messages>
{debugger
  return this.http.post<Messages>(this.url+"AddMessage",m)
}
getAllMessages(buildingId:number):Observable<Array<Messages>>
{
  return this.http.get<Array<Messages>>(this.url+"GetallMessages/"+buildingId)
}
}