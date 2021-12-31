import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from '../authentication/login/login.component';
import { BgcolorDirective } from './directives/bgcolor.directive';
import { CustomStructuralDirective } from './directives/custom-structural.directive';
import { CustomPipe } from './pipes/custom.pipe';

const routes: Routes = [
  { path: 'login', component: LoginComponent }
]

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BgcolorDirective,
    CustomStructuralDirective,
    CustomPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HeaderComponent, FooterComponent, FontAwesomeModule, BgcolorDirective,
    CustomStructuralDirective, CustomPipe, FormsModule
  ]
})
export class SharedmoduleModule { }
