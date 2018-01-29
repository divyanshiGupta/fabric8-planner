import { async } from '@angular/core/testing';

import { WorkItemTypeMapper, WorkItemTypeUI, WorkItemTypeService } from './work-item-type';

describe('IterationMapper', () => {
    let workItemTypeMapper: WorkItemTypeMapper;
    let workItemTypeUI: WorkItemTypeUI;
    let workItemTypeService: WorkItemTypeService;

    workItemTypeUI = {
        id: '',
        name: '',
        icon: '',
        version: 0,
        type: '',
        description: ''
    } as WorkItemTypeUI;

    workItemTypeService = {
        id: '',
        type: '',
        attributes: {
            name: '',
            version: 0,
            description: '',
            icon: '',
        }
    } as WorkItemTypeService
    
    beforeEach(async(() => {
        workItemTypeMapper = new WorkItemTypeMapper();
    }));

    it('should execute the canary test', () => {
        return expect(true).toBe(true)
      });
  
    it('should correctly convert to service model - 1', () => {
        expect(workItemTypeMapper.toServiceModel(workItemTypeUI)).toEqual(workItemTypeService);
    });

    it('should correctly convert to UI model - 2', () => {
        expect(workItemTypeMapper.toUIModel(workItemTypeService)).toEqual(workItemTypeUI);
    });
});