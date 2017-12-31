import { Action } from '@ngrx/store';
import { iterateListLike } from '@angular/core/src/change_detection/change_detection_util';

export const ADD            = '[Iteration] Add';
export const UPDATE         = '[Iteration] Update';
export const GET            = '[Iteration] Get';
export const GET_SUCCESS    = '[Iteration] GetSuccess';
export const GET_ERROR      = '[Iteration] GetError';
export const ADD_SUCCESS    = '[Iteration] AddSuccess';
export const ADD_ERROR      = '[Iteration] AddError';

export class Add implements Action {
  iteration ; parentIteration: any;
  constructor(iteration: any, parentIteration: any){
    this.iteration = iteration;
    this.parentIteration = parentIteration;
  }
  readonly type = ADD;
}

export class Update implements Action {
  iteration : any;
  constructor(iteration : any){
    this.iteration = iteration;
  }
  readonly type = UPDATE;
}

export class Get implements Action {
  readonly type = GET;
}

export class GetSuccess implements Action {
  payload : any;
  constructor(payload: any){
    this.payload = payload;
  };
  readonly type = GET_SUCCESS;
}

export class GetError implements Action {
  readonly type = GET_ERROR;
}

export class AddSuccess implements Action {
  payload : any;
  constructor(payload: any){
    this.payload = payload;
  };
  readonly type = ADD_SUCCESS;
}

export class AddError implements Action {
  readonly type = ADD_ERROR;
}



export type All
  = Add
  | Update
  | Get
  | GetSuccess
  | GetError
  | AddSuccess
  | AddError;