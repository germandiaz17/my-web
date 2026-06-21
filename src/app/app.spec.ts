import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render all section components', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('app-nav')).toBeTruthy();
    expect(el.querySelector('app-hero')).toBeTruthy();
    expect(el.querySelector('app-tech-stack')).toBeTruthy();
    expect(el.querySelector('app-projects')).toBeTruthy();
    expect(el.querySelector('app-experience')).toBeTruthy();
    expect(el.querySelector('app-courses')).toBeTruthy();
    expect(el.querySelector('app-contact')).toBeTruthy();
  });
});
