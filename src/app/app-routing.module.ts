import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './commerce/products/products.component';
import { MusicComponent } from './commerce/music/music.component';
import { YoungComponent } from './commerce/young/young.component';
import { TechComponent } from './commerce/tech/tech.component';


const routes: Routes = [
 {path:'',component:ProductsComponent},
  {path:"all",component:ProductsComponent},
{path:"women",component:MusicComponent},
{path:"man",component:YoungComponent},
{path:"electronics",component:TechComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
