import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchCategoryEspPage } from './search-category-esp.page';

describe('SearchCategoryEspPage', () => {
  let component: SearchCategoryEspPage;
  let fixture: ComponentFixture<SearchCategoryEspPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCategoryEspPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchCategoryEspPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
