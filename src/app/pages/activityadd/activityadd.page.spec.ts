import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivityaddPage } from './activityadd.page';

describe('ActivityaddPage', () => {
  let component: ActivityaddPage;
  let fixture: ComponentFixture<ActivityaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityaddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivityaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
