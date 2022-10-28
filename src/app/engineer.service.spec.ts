import { TestBed } from '@angular/core/testing';
import { EngineerService } from './engineer.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('EngineerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [EngineerService],
  }));

  it('EngineerService should be created', () => {
    const service: EngineerService = TestBed.get(EngineerService);
    expect(service).toBeTruthy();
  });
  it('Create an Engineer on Service method', () => {
    const service: EngineerService = TestBed.get(EngineerService);
    let employeeServiceMock = spyOn(service, 'createEngineer').withArgs({})
      .and.returnValue(of())

    service.createEngineer({}).subscribe((data) => {
      expect(data).toEqual(of());
    }); 
    expect(service.createEngineer).toHaveBeenCalled();
  });
  
  it('Update an Engineer on Service method', () => {
    const service: EngineerService = TestBed.get(EngineerService);
    let employeeServiceMock = spyOn(service, 'updateEngineer').withArgs({})
      .and.returnValue(of())

    service.updateEngineer({}).subscribe((data) => {
      expect(data).toEqual(of());
    }); 
    expect(service.updateEngineer).toHaveBeenCalled();
  });
});
