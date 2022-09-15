const superagent = require('superagent');
const transport = 'https://jsonplaceholder.cypress.io';
var resp;

var getData = async() => {
    resp = await superagent.get(transport + '/posts')
    .then(res => {
        console.log(res.body);
        return res;
    })
    .catch(err => {
        console.log(err);
        return err;
    })
    return resp;
}

var postData = async(title, body, userId) => {
    resp = await superagent.post(transport + '/posts')
    .set('Content-Type', 'application/json')
    .send({
        "title": title,
        "body": body,
        "userId": userId
    })
    .then(res => {
        console.log('Post Data Request: \n', res.request.url, '\n Header : ', res.request.header);
        console.log('Post Data Response: \n', res.statusCode, ' \n ', JSON.stringify(res.body, null, 4));
        return res;
    })
    .catch(err => {
        //console.log(err);
        console.log('Post Data Request: \n', err.response.request.url, '\n Header : ', err.response.request.header);
        console.log('Post Data Response: \n', err.response.statusCode, ' \n ', JSON.stringify(err.response.body, null, 4));
        return err;
    })
    return resp;
}

// (async() => {
//     var hit = await postData("test", "test", 13);
// })();

module.exports = {
    getData, 
    postData
};