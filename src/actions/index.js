export const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    payload: item
  };
};

export const getItems = (stuff) => {
    return {
      type: 'GET_ITEMS',
      payload: stuff
    };
  };