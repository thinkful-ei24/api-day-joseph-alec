const Api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/joseph-alec';

  const getItems = function(callback){
    $.getJSON(`${BASE_URL}/items`, callback)
  };

  const createItem = function(name, callback){
    const newItem = JSON.stringify({name: name});
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback
    })
  };

  const updateItem = function(id, updateData, callback){
    const stringData = JSON.stringify(updateData);
    console.log(updateData);
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: stringData,
      success: callback
    })
  };

  return {
    getItems,
    createItem,
    updateItem
  }
}());
