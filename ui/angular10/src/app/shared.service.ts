import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:53535/api";
readonly PhotoUrl = "http://localhost:53535/Photos/";

constructor(private http:HttpClient) { }

getFotList():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/fotos');
}

addFotos(val:any){
  return this.http.post(this.APIUrl+'/fotos',val);
}

updateFotos(val:any){
  return this.http.put(this.APIUrl+'/fotos',val);
}

deleteFotos(val:any){
  return this.http.delete(this.APIUrl+'/fotos/'+val);
}


getAlbumList():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/albumes');
}

addAlbumes(val:any){
  return this.http.post(this.APIUrl+'/albumes',val);
}

updateAlbumes(val:any){
  return this.http.put(this.APIUrl+'/albumes',val);
}

deleteAlbumes(val:any){
  return this.http.delete(this.APIUrl+'/albumes/'+val);
}


UploadPhoto(val:any){
  return this.http.post(this.APIUrl+'/Albumes/SaveFile',val);
}

getAllFotosName():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+'/Albumes/GetAllFoto');
}
}