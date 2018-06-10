let count = 1

export default (state = [], action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        const newItem = Object.assign({}, action.item, {id: count++})
        return state.concat(newItem);
      case 'DELETE_ITEM': { 
        const index = state.findIndex(item => item.id == action.itemId);
        const removedItemObject = [
              ...state.slice(0, index),
              ...state.slice(index + 1)
              ];
        return removedItemObject
        }
        return state;
      default:
        return state;
    }
  };


