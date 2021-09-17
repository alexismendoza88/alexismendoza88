import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClassifiedPage } from './classified.page';

describe('ClassifiedPage', () => {
  let component: ClassifiedPage;
  let fixture: ComponentFixture<ClassifiedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassifiedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClassifiedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
