import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavorsPage } from './favors.page';

describe('FavorsPage', () => {
  let component: FavorsPage;
  let fixture: ComponentFixture<FavorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavorsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FavorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
