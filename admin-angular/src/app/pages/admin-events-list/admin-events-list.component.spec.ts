import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { AdminApiService } from '../../services/admin-api.service';
import { AdminEventsListComponent } from './admin-events-list.component';

describe('AdminEventsListComponent', () => {
  it('deve criar componente com sucesso', async () => {
    const apiStub = { listEvents: () => of([]) };

    await TestBed.configureTestingModule({
      imports: [AdminEventsListComponent],
      providers: [
        provideRouter([]),
        { provide: AdminApiService, useValue: apiStub }
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(AdminEventsListComponent);
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });
});
