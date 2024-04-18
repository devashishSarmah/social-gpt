import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { IMAGE_LOADER, PRECONNECT_CHECK_BLOCKLIST } from '@angular/common';
import { environment } from '../../../environments/environment';
import imageLoader from '../../shared/utils/cloudinary-loader';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [{ provide: IMAGE_LOADER, useValue: imageLoader(environment.cloudinary) }, {provide: PRECONNECT_CHECK_BLOCKLIST, useValue: 'https://res.cloudinary.com'}]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
