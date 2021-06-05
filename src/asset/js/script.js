var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// API request to get the Mock data and format it using HTML
function makeAjaxCall(url, methodType) {
    var promiseObj = new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(methodType, url, true);
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // xhr done successfully
                    var resp = xhr.responseText;
                    var respJson = JSON.parse(resp);
                    resolve(respJson);
                } else {
                    // xhr failed
                    reject(xhr.status);
                }
            }
        }
    });
    return promiseObj;
}

exports.makeAjaxCall = makeAjaxCall
