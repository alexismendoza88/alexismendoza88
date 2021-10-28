import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeekendPage } from './weekend.page';

describe('WeekendPage', () => {
  let component: WeekendPage;
  let fixture: ComponentFixture<WeekendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeekendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
