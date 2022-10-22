import { Component,Input, OnInit,} from '@angular/core';
import { SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-album',
  templateUrl: './add-edit-album.component.html',
  styleUrls: ['./add-edit-album.component.css']
})
export class AddEditAlbumComponent implements OnInit {
  constructor(private service:SharedService) { }

  @Input() album:any;
  IdAlbum:string;
  NombreAlbum:string;
  FotoPortada:string;
  Idfotos:string;
  FechaAlbum:string;
  FotoPortadaPath:string;
  
  FotoList:any=[];

  FotoNameFilter:string="";
  FotoListWithoutFilter:any=[];

  ngOnInit(): void {
    this.loadFotoList();
   }

   loadFotoList(){
    this.service.getAllFotosName().subscribe((data:any)=>{
   this.FotoList=data;  

      this.IdAlbum=this.album.IdAlbum;
      this.NombreAlbum=this.album.NombreAlbum;
      this.FotoPortada=this.album.FotoPortada;
      this.Idfotos=this.album.Idfotos;
      this.FechaAlbum=this.album.FechaAlbum;
      this.FotoPortadaPath=this.service.PhotoUrl+this.FotoPortada;
  });

  }


  addAlbumes(){
    var val = {IdAlbum:this.IdAlbum,
               NombreAlbum:this.NombreAlbum,
               FotoPortada:this.FotoPortada,
               Idfotos:this.Idfotos,
               FechaAlbum:this.FechaAlbum};
    this.service.addAlbumes(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateAlbumes(){
    var val = {IdAlbum:this.IdAlbum,
      NombreAlbum:this.NombreAlbum,
      FotoPortada:this.FotoPortada,
      Idfotos:this.Idfotos,
      FechaAlbum:this.FechaAlbum};
this.service.updateAlbumes(val).subscribe(res=>{
alert(res.toString());
    });
  }

  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.FotoPortada=data.toString();
      this.FotoPortadaPath=this.service.PhotoUrl+this.FotoPortada;
    })
  }
}
