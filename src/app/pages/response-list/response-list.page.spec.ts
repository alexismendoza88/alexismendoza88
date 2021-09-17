import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResponseListPage } from './response-list.page';

describe('ResponseListPage', () => {
  let component: ResponseListPage;
  let fixture: ComponentFixture<ResponseListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResponseListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
