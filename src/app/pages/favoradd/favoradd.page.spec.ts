import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavoraddPage } from './favoradd.page';

describe('FavoraddPage', () => {
  let component: FavoraddPage;
  let fixture: ComponentFixture<FavoraddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoraddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FavoraddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
