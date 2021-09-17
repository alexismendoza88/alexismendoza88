import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResetpassupPage } from './resetpassup.page';

describe('ResetpassupPage', () => {
  let component: ResetpassupPage;
  let fixture: ComponentFixture<ResetpassupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetpassupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResetpassupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
