import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { IMAGE_LOADER, PRECONNECT_CHECK_BLOCKLIST } from '@angular/common';
import { environment } from '../../../../environments/environment';
import imageLoader from '../../../shared/utils/cloudinary-loader';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [{ provide: IMAGE_LOADER, useValue: imageLoader(environment.cloudinary) }, {provide: PRECONNECT_CHECK_BLOCKLIST, useValue: 'https://res.cloudinary.com'}]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
