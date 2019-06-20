# jsonqs
A simple module provides utilities for parsing and formatting URL query strings with JSON.

```javascript
    import jsonqs from 'jsonqs'

    let data = {
        a: 123,
        b: {
            c: 456,
            d: [789, '#000']
        }
    }
    
    let query = jsonqs.stringify(data)
    console.log(query)
    // output: 'a=123&b.c=456&b.d=789&b.d=%23000'
    
    console.log(jsonqs.parse(query))
    /* 
        output: [Object: null prototype] { a: '123', b: { c: '456', d: [ '789', '#000' ] } }
    */
```