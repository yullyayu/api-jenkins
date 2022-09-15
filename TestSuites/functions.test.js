const { isInteger, isString } = require('lodash');
var service = require('../tests/functions');
var srvs = 'functions';

test('Test Data Type', async() => {
    var result = await service.getData();
    expect(result.statusCode).toBe(200)
    //Test data type
    expect(isInteger(result.body[0].userId)).toBe(true)
    expect(isInteger(result.body[0].id)).toBe(true)
    expect(isString(result.body[0].title)).toBe(true)
    expect(isString(result.body[0].body)).toBe(true)
    //Test value
    expect(result.body[0].userId).toBe(1)
    expect(result.body[0].id).toBe(1)
    expect(result.body[0].title).toBe("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
    expect(result.body[0].body).toBe("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto")    
});

test('Test Post Data', async() => {
    const data = {
        title: "recommendation",
        body: "motorcycle",
        userId: 12
    }
    var result = await service.postData(data.title, data.body, data.userId)
    expect(result.statusCode).toBe(201)   
});



