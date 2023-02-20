import { TestBed } from '@angular/core/testing';

import { ToDoListRepositoryService } from './to-do-list-repository.service';

describe('ToDoListRepositoryService', () => {
  let service: ToDoListRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoListRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
