import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanyupPage } from './companyup.page';

describe('CompanyupPage', () => {
  let component: CompanyupPage;
  let fixture: ComponentFixture<CompanyupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
