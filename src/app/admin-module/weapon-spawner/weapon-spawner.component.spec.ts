import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponSpawnerComponent } from './weapon-spawner.component';

describe('WeaponSpawnerComponent', () => {
  let component: WeaponSpawnerComponent;
  let fixture: ComponentFixture<WeaponSpawnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponSpawnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaponSpawnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
