import { ReduxActionTypes } from "ee/constants/ReduxActionConstants";

export const initExplorerEntityNameEdit = (entityId: string) => {
  return {
    type: ReduxActionTypes.INIT_EXPLORER_ENTITY_NAME_EDIT,
    payload: {
      id: entityId,
    },
  };
};
export const endExplorerEntityNameEdit = () => {
  return {
    type: ReduxActionTypes.END_EXPLORER_ENTITY_NAME_EDIT,
  };
};

/**
 * action that make explorer pin/unpin
 *
 * @param shouldPin
 * @returns
 */
export const setExplorerPinnedAction = (shouldPin: boolean) => {
  return {
    type: ReduxActionTypes.SET_EXPLORER_PINNED,
    payload: {
      shouldPin,
    },
  };
};

/**
 * action that make explorer active/inactive
 * NOTE: active state is used to slide the sidebar in unpinned state on hover.
 *
 * @param shouldPin
 * @returns
 */
export const setExplorerActiveAction = (active: boolean) => {
  return {
    type: ReduxActionTypes.SET_EXPLORER_ACTIVE,
    payload: active,
  };
};

/**
 * action that updates explorer width
 *
 * @param shouldPin
 * @returns
 */
export const updateExplorerWidthAction = (width: number | undefined) => {
  return {
    type: ReduxActionTypes.UPDATE_EXPLORER_WIDTH,
    payload: {
      width,
    },
  };
};
