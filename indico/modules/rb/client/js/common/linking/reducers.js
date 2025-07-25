// This file is part of Indico.
// Copyright (C) 2002 - 2025 CERN
//
// Indico is free software; you can redistribute it and/or
// modify it under the terms of the MIT License; see the
// LICENSE file for more details.

import {actions as bookRoomActions} from '../../modules/bookRoom';

import * as linkingActions from './actions';

const initialState = {
  type: null,
  id: null,
  title: null,
  eventURL: null,
  eventTitle: null,
  ownRoomId: null,
  ownRoomName: null,
  earlier: 0,
  later: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case linkingActions.SET_OBJECT:
      return {
        type: action.objectType,
        id: action.objectId,
        title: action.objectTitle,
        eventURL: action.eventURL,
        eventTitle: action.eventTitle,
        ownRoomId: action.ownRoomId,
        ownRoomName: action.ownRoomName,
        startDt: action.startDt,
        endDt: action.endDt,
        earlier: 0,
        later: 0,
      };
    case linkingActions.CLEAR_OBJECT:
    case bookRoomActions.CREATE_BOOKING_SUCCESS:
      return initialState;
    case linkingActions.ADD_EARLIER:
      return {
        ...state,
        earlier: state.earlier + action.days,
      };
    case linkingActions.ADD_LATER:
      return {
        ...state,
        later: state.later + action.days,
      };
    default:
      return state;
  }
};
