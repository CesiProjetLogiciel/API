module.exports = {
  /**
  * 
  * @param options.accept  
  * @param options.tokenInlineReqUrlencoded.emailOptional.
  * @param options.tokenInlineReqUrlencoded.grant_type requiredclient_credentials / refresh_token
  * @param options.tokenInlineReqUrlencoded.passwordOptional.
  * @param options.tokenInlineReqUrlencoded.refresh_tokenOptional.

  */
  token: async (options) => {

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
      status = '200';

    return {
      status: status,
      data: data
    };  
  },
};
