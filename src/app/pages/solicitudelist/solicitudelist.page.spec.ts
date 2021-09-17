import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolicitudelistPage } from './solicitudelist.page';

describe('SolicitudelistPage', () => {
  let component: SolicitudelistPage;
  let fixture: ComponentFixture<SolicitudelistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudelistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitudelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
