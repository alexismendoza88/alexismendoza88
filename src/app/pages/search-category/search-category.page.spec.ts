import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchCategoryPage } from './search-category.page';

describe('SearchCategoryPage', () => {
  let component: SearchCategoryPage;
  let fixture: ComponentFixture<SearchCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCategoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
