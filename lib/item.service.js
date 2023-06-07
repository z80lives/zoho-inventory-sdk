const {makeEncodedParams, getEndpointUrl} = require("./utils");

class ItemService{
    default_filter = {
        page: 0,
        per_page: 25
    }

    constructor(
        dispatcherService
    ){
        this._dispatcherService = dispatcherService;
    }

    fetchItems(filter = {}){
        const url = getEndpointUrl('items');
        const urlWithParams = url + makeEncodedParams({
            ...this.default_filter,
            ...filter
        })
        return this._dispatcherService.dispatch(urlWithParams, 'GET'
        );
    }

    createItem(item){
        const url = getEndpointUrl('items');
        return this._dispatcherService.dispatch(url, 'POST', {
            body: JSON.stringify(item)
        });
    }

    updateItem(item){
        const url = getEndpointUrl('items');
        return this._dispatcherService.dispatch(url, 'PUT', {
            body: JSON.stringify(item)
        });
    }

    deleteItem(item_id){
        const url = getEndpointUrl('items/'+item_id);
        return this._dispatcherService.dispatch(url, 'DELETE');
    }
}

module.exports = ItemService;