import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanysolPage } from './companysol.page';

describe('CompanysolPage', () => {
  let component: CompanysolPage;
  let fixture: ComponentFixture<CompanysolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanysolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanysolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
