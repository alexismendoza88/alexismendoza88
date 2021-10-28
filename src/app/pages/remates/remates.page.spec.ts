import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RematesPage } from './remates.page';

describe('RematesPage', () => {
  let component: RematesPage;
  let fixture: ComponentFixture<RematesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RematesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RematesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
