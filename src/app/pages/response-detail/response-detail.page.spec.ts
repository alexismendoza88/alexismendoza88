import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResponseDetailPage } from './response-detail.page';

describe('ResponseDetailPage', () => {
  let component: ResponseDetailPage;
  let fixture: ComponentFixture<ResponseDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResponseDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
