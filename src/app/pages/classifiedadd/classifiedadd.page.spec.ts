import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClassifiedaddPage } from './classifiedadd.page';

describe('ClassifiedaddPage', () => {
  let component: ClassifiedaddPage;
  let fixture: ComponentFixture<ClassifiedaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassifiedaddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClassifiedaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
