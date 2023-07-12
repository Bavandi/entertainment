import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navs/navbar/navbar.component';
import { FooterComponent } from './components/navs/footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [NavbarComponent, FooterComponent]
})
export class CoreModule { }
