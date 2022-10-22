import { Component, OnInit } from '@angular/core';
import { SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-fot',
  templateUrl: './show-fot.component.html',
  styleUrls: ['./show-fot.component.css']
})
export class ShowFotComponent implements OnInit {

  constructor(private service:SharedService) { }

  FotoList:any=[];

  ModalTitle:string;
  ActivateAddEditFotComp:boolean=false;
  fot:any;

  IdFotoFilter:string="";
  FotoNameFilter:string="";
  FotoListWithoutFilter:any=[];
  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick(){
    this.fot={
      IdFoto:0,
      Foto:""
    }
    this.ModalTitle="AGREGAR FOTO";
    this.ActivateAddEditFotComp=true;

  }

  editClick(item){
    this.fot=item;
    this.ModalTitle="EDITAR FOTO";
    this.ActivateAddEditFotComp=true;
  }
  
  deleteClick(item){
    if(confirm('ESTA SEGURO??')){
      this.service.deleteFotos(item.IdFoto).subscribe(data=>{
        alert(data.toString());
        this.refreshDepList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditFotComp=false;
    this.refreshDepList();
  }


  refreshDepList(){
    this.service.getFotList().subscribe(data=>{
      this.FotoList=data;
      this.FotoListWithoutFilter=data;
    });
  }

  FilterFn(){
    var IdFotoFilter = this.IdFotoFilter;
    var FotoNameFilter = this.FotoNameFilter;

    this.FotoList = this.FotoListWithoutFilter.filter(function (el){
        return el.Idfoto.toString().toLowerCase().includes(
          IdFotoFilter.toString().trim().toLowerCase()
        )&&
        el.foto.toString().toLowerCase().includes(
          FotoNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult( prop, asc){
    this.FotoList = this.FotoListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
