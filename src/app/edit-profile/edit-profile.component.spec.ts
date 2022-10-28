import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { NavComponent } from '../nav/nav.component';
import { EditProfileComponent } from './edit-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from "@angular/material";

describe('EditProfileComponent', () => {
  let component: EditProfileComponent;
  let fixture: ComponentFixture<EditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileComponent,
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
    fixture = TestBed.createComponent(EditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('EditProfileComponent should create', () => {
    expect(component).toBeTruthy();
  });
});
