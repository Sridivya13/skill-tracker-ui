import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HomeComponent } from './home/home.component';
import { SearchProfileComponent } from './search-profile/search-profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-profile', component: AddProfileComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'search-profile', component: SearchProfileComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
