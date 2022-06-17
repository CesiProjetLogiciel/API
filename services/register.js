module.exports = {
  /**
  * 
  * @param options.accept  
  * @param options.registerInlineReqUrlencoded.email required
  * @param options.registerInlineReqUrlencoded.first_name required
  * @param options.registerInlineReqUrlencoded.last_name required
  * @param options.registerInlineReqUrlencoded.password required
  * @param options.registerInlineReqUrlencoded.user-type required

  */
  register: async (options) => {

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
        "access_token": "<string>",
        "expires_in": "<int32>",
        "refresh_token": "<string>",
        "user_id": "<int32>",
      },
      status = '201';

    return {
      status: status,
      data: data
    };  
  },
};
