import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolicitudeDetailPage } from './solicitude-detail.page';

describe('SolicitudeDetailPage', () => {
  let component: SolicitudeDetailPage;
  let fixture: ComponentFixture<SolicitudeDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudeDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitudeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
