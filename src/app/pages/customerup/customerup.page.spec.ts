import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerupPage } from './customerup.page';

describe('CustomerupPage', () => {
  let component: CustomerupPage;
  let fixture: ComponentFixture<CustomerupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
