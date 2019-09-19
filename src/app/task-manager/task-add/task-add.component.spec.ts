import { FormBuilder } from '@angular/forms';
import { TaskAddComponent } from './task-add.component';
import { TaskApiService } from '../services/task.service';
import { DatePipe } from '@angular/common';
import { Task } from '../models/task.model';

describe('TaskAddComponent', () => {
  let component: TaskAddComponent;
  let mockService: TaskApiService;
  let testBuilder: Task;
  
  beforeEach(() => {
    testBuilder = new Task(); 
    mockService = jasmine.createSpyObj("taskService", ["post", "get", "getById"]);
    (mockService.get as jasmine.Spy).and.returnValue(of(testBuilder.withDefaultTasks()));
    (mockService.post as jasmine.Spy).and.returnValue(of({}));
    (mockService.getById as jasmine.Spy).and.returnValue(of(testBuilder.withDefaultTask()));

    component = new TaskAddComponent(new FormBuilder(), mockService);
  });

  it('should set values on ngOnInit as expected', () => {
    // Act
    component.ngOnInit();
    
    // Assert
    expect(component.addTaskForm).toBeDefined();
    expect(component.parentTasks$).toBeDefined();
  });

  describe("onSubmit", () => {
    it("should call taskService post as expecte for valid form details", () => {
      // Arrange
      component.ngOnInit();
      component.addTaskForm.patchValue(testBuilder.withDefaultTask());

      // Act
      component.onSubmit();

      // Assert
      expect(mockService.post).toHaveBeenCalled();
    });

    it("should call taskService post as expecte for valid form details", () => {
      // Arrange
      component.ngOnInit();

      // Act
      component.onSubmit();

      // Assert
      expect(mockService.post).not.toHaveBeenCalled();
    });
  });

  it("should call form reset as expected on onReset", () => {
    // Arrange
    component.ngOnInit();
    spyOn(component.addTaskForm, "reset").and.callThrough();
    
    // Act
    component.onReset();

    // Assert
    expect(component.addTaskForm.reset).toHaveBeenCalled();
  });
});
