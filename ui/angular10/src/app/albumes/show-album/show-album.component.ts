import { Component, OnInit } from '@angular/core';
import { SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-album',
  templateUrl: './show-album.component.html',
  styleUrls: ['./show-album.component.css']
})
export class ShowAlbumComponent implements OnInit {

  constructor(private service:SharedService) { }

  AlbumList:any=[];

  ModalTitle:string;
  ActivateAddEditAlbumComp:boolean=false;
  album:any;


  ngOnInit(): void {
    this.refreshAlbumList();
  }

  addClick(){
    this.album={
      IdAlbum:0,
      NombreAlbum:"",
      FotoPortada:"anonymous.png",
      Idfotos:"",
      FechaAlbum:""
    }
    this.ModalTitle="AGREGAR ALBUM";
    this.ActivateAddEditAlbumComp=true;

  }

  editClick(item){
    console.log(item);
    this.album=item;
    this.ModalTitle="EDITAR ALBUM";
    this.ActivateAddEditAlbumComp=true;
  }

  deleteClick(item){
    if(confirm('ESTAS SEGURO??')){
      this.service.deleteAlbumes(item.IdAlbum).subscribe(data=>{
        alert(data.toString());
        this.refreshAlbumList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditAlbumComp=false;
    this.refreshAlbumList();
  }


  refreshAlbumList(){
    this.service.getAlbumList().subscribe(data=>{
      this.AlbumList=data;
      
    });
  }

}

