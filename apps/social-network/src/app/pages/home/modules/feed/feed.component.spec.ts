import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedComponent } from './feed.component';
import { IMAGE_LOADER, PRECONNECT_CHECK_BLOCKLIST } from '@angular/common';
import { environment } from '../../../../../environments/environment';
import imageLoader from '../../../../shared/utils/cloudinary-loader';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedComponent],
      providers: [{ provide: IMAGE_LOADER, useValue: imageLoader(environment.cloudinary) }, {provide: PRECONNECT_CHECK_BLOCKLIST, useValue: 'https://res.cloudinary.com'}]
    }).compileComponents();

    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
