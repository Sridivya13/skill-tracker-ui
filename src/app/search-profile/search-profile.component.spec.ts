import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { NavComponent } from '../nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from "@angular/material";
import { SearchProfileComponent } from './search-profile.component';

describe('SearchProfileComponent', () => {
  let component: SearchProfileComponent;
  let fixture: ComponentFixture<SearchProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProfileComponent,
        AppComponent,
        NavComponent],
        imports: [ ReactiveFormsModule,
          RouterModule.forRoot([]),
          MatSnackBarModule,
          HttpClientTestingModule ]     
      })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
