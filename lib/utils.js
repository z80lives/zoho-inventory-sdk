const zohoAuthServer = "https://accounts.zoho.com/oauth/v2";
const zohoAPIServer = "https://www.zohoapis.com/inventory/v1";

function getAuthUrl(path){
    return `${zohoAuthServer}/${path}`;
}

function getEndpointUrl(path){
    return `${zohoAPIServer}/${path}`;
}

function makeEncodedParams(params){
    return '?'+ Object.keys(params).map(key => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    }).join('&');
}

module.exports = {
    getAuthUrl,
    getEndpointUrl,
    makeEncodedParams
}