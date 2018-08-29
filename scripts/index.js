/* global shoppingList, store Api $ */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  Api.getItems((items) => {
  const item = items[0];

  Api.updateItem(item.id, { name: 'foobar' }, () => {
    console.log('updated!');
  });
});

});

/*
Api.getItems=(items)=>{

}
*/
