import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { NavComponent } from '../nav/nav.component';
import { AddProfileComponent } from './add-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from "@angular/material";

describe('AddProfileComponent', () => {
  let component: AddProfileComponent;
  let fixture: ComponentFixture<AddProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProfileComponent,
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
    fixture = TestBed.createComponent(AddProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('AddProfileComponent should create', () => {
    expect(component).toBeTruthy();
  });
});
