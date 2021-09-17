import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RouteComponent } from './route.component';

describe('RouteComponent', () => {
  let component: RouteComponent;
  let fixture: ComponentFixture<RouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
