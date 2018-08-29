/* global $ */

const Api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/joseph-alec';

  const getItems = function(callback){
    $.getJSON(`${BASE_URL}/items`, callback);
  };

  const createItem = function(name, callback){
    const newItem = JSON.stringify({name: name});
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback
    });
  };

  const updateItem = function(id, updateData, callback){
    const stringData = JSON.stringify(updateData);
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: stringData,
      success: callback
    });
  };

 const deleteItem = function(id, callback){
   const stringData = JSON.stringify({id: id});
   $.ajax({
     url: `${BASE_URL}/items/${id}`,
     method: 'DELETE',
     contentType: 'application/json',
     data: stringData,
     success: callback
   });
 }

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };
}());
