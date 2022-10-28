import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { NavComponent } from '../nav/nav.component';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from "@angular/material";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent,
        AppComponent,
        NavComponent],
        imports: [ RouterModule.forRoot([]),
          HttpClientTestingModule ]     
      })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('HomeComponent should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h6').textContent).toContain('Welcome to Skill Tracker!');
  });
});
