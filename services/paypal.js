module.exports = {
  /**
  * 
  * @param options.accept  
  * @param options.createPaypalinfoInlineReqUrlencoded.paypal_address required
  * @param options.createPaypalinfoInlineReqUrlencoded.user_id required

  */
  createPaypalinfo: async (options) => {

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
  * @param options.accept    * @param options.userId  

  */
  readPaypalinfo: async (options) => {

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
        "paypal": "<string>",
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
  * @param options.accept    * @param options.userId  
  * @param options.updatePaypalinfoInlineReqUrlencoded.paypal_address required

  */
  updatePaypalinfo: async (options) => {

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
  * @param options.accept    * @param options.userId  

  */
  deletePaypalinfo: async (options) => {

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
};
