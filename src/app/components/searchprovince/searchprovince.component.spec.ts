import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchprovinceComponent } from './searchprovince.component';

describe('SearchprovinceComponent', () => {
  let component: SearchprovinceComponent;
  let fixture: ComponentFixture<SearchprovinceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchprovinceComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchprovinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
