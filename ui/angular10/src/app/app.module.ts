import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { SharedService } from './shared.service';
import { AlbumesComponent } from './albumes/albumes.component';
import { ShowAlbumComponent } from './albumes/show-album/show-album.component';
import { AddEditAlbumComponent } from './albumes/add-edit-album/add-edit-album.component';
import { FotosComponent } from './fotos/fotos.component';
import { ShowFotComponent } from './fotos/show-fot/show-fot.component';
import { AddEditFotComponent } from './fotos/add-edit-fot/add-edit-fot.component';


@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDepComponent,
    AddEditDepComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    AlbumesComponent,
    ShowAlbumComponent,
    AddEditAlbumComponent,
    FotosComponent,
    ShowFotComponent,
    AddEditFotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
