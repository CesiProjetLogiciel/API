module.exports = {
  /**
  * 
  * @param options.accept  

  */
  deliverylist: async (options) => {

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
  * @param options.accept    * @param options.orderId  

  */
  readdelivery: async (options) => {

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
        "id": "<int32>",
        "restaurant_address": "<string>",
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
};
