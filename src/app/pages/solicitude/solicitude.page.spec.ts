import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolicitudePage } from './solicitude.page';

describe('SolicitudePage', () => {
  let component: SolicitudePage;
  let fixture: ComponentFixture<SolicitudePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitudePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
