import { Component,Input, OnInit,} from '@angular/core';
import { SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-fot',
  templateUrl: './add-edit-fot.component.html',
  styleUrls: ['./add-edit-fot.component.css']
})
export class AddEditFotComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() fot:any;
  IdFoto:string;
  Foto:string;
  
 

  ngOnInit(): void {
    this.IdFoto=this.fot.IdFoto;
    this.Foto=this.fot.Foto
  }
  addFotos(){
    var val = {IdFoto:this.IdFoto,
                Foto:this.Foto};
    this.service.addFotos(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateFotos(){
    var val = {IdFoto:this.IdFoto,
      Foto:this.Foto};
    this.service.updateFotos(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
