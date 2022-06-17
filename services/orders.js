module.exports = {
  /**
  * 
  * @param options.accept  

  */
  orderlist: async (options) => {

    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500

    var data = {
        "data": "<array>",
        "items_per_page": "<int32>",
        "next": "<string>",
        "page": "<int32>",
        "prev": "<string>",
        "total_items": "<int32>",
        "total_pages": "<int32>",
      },
      status = '200';

    return {
      status: status,
      data: data
    };  
  },

  /**
  * 
  * @param options.accept  
  * @param options.createorderInlineReqUrlencoded.delivery_address required
  * @param options.createorderInlineReqUrlencoded.price required
  * @param options.createorderInlineReqUrlencoded.product_ids required
  * @param options.createorderInlineReqUrlencoded.restaurant_id required
  * @param options.createorderInlineReqUrlencoded.user_id required

  */
  createorder: async (options) => {

    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500

    var data = {
        "result": "<string>",
      },
      status = '201';

    return {
      status: status,
      data: data
    };  
  },

  /**
  * 
  * @param options.accept    * @param options.id  

  */
  readorder: async (options) => {

    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500

    var data = {
        "delivery_address": "<string>",
        "deliveryman_id": "<int32>",
        "price": "<number>",
        "product_ids": "<array>",
        "restaurant_id": "<int32>",
        "status": "<string>",
        "user_id": "<int32>",
      },
      status = '200';

    return {
      status: status,
      data: data
    };  
  },

  /**
  * 
  * @param options.accept    * @param options.id  
  * @param options.updateorderInlineReqUrlencoded.deliveryman_idOptional.
  * @param options.updateorderInlineReqUrlencoded.statusOptional.

  */
  updateorder: async (options) => {

    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500

    var data = {
        "result": "<string>",
      },
      status = '200';

    return {
      status: status,
      data: data
    };  
  },

  /**
  * 
  * @param options.id  

  */
  validatepayment: async (options) => {

    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500

    var data = {},
      status = '200';

    return {
      status: status,
      data: data
    };  
  },
};
