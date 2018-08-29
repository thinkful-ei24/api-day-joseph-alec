/* global shoppingList, store Api $ */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  Api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
});
