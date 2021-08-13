import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './component/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule,  } from '@angular/material/slider';
import { RegistroComponent } from './pages/registro/registro.component'
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    RegistroComponent

  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule, BrowserAnimationsModule, // Necesario para usar FormModules
    MatSliderModule,MatInputModule // Importar Componentes Material.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
