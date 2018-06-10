export const addItem = (item) => {
    return {
      type: 'ADD_ITEM',
      item
    };
  };

    
  export const deleteItem = (itemId) => {
    return {
      type: 'DELETE_ITEM',
      itemId
    };
  };
  