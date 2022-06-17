module.exports = {
  /**
  * Get user info
  * @param options.accept    * @param options.userId  

  */
  readuser: async (options) => {

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
        "email": "<string>",
        "firstname": "<string>",
        "id": "<int32>",
        "lastname": "<string>",
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
  * @param options.updateuserInlineReqUrlencoded.firstnameOptional.
  * @param options.updateuserInlineReqUrlencoded.lastnameOptional.

  */
  updateuser: async (options) => {

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
  deleteuser: async (options) => {

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
  readaddress: async (options) => {

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
  * @param options.createaddressInlineReqUrlencoded.additional_infoOptional. Additional info
  * @param options.createaddressInlineReqUrlencoded.address required
  * @param options.createaddressInlineReqUrlencoded.city required
  * @param options.createaddressInlineReqUrlencoded.country required
  * @param options.createaddressInlineReqUrlencoded.first_name required
  * @param options.createaddressInlineReqUrlencoded.last_name required
  * @param options.createaddressInlineReqUrlencoded.phone_number required
  * @param options.createaddressInlineReqUrlencoded.stateOptional.
  * @param options.createaddressInlineReqUrlencoded.zipcode required

  */
  createaddress: async (options) => {

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
  * @param options.accept    * @param options.addressId    * @param options.userId  
  * @param options.updateaddressInlineReqUrlencoded.additional_infoOptional. Additional info
  * @param options.updateaddressInlineReqUrlencoded.addressOptional.
  * @param options.updateaddressInlineReqUrlencoded.cityOptional.
  * @param options.updateaddressInlineReqUrlencoded.countryOptional.
  * @param options.updateaddressInlineReqUrlencoded.first_nameOptional.
  * @param options.updateaddressInlineReqUrlencoded.last_nameOptional.
  * @param options.updateaddressInlineReqUrlencoded.phone_numberOptional.
  * @param options.updateaddressInlineReqUrlencoded.stateOptional.
  * @param options.updateaddressInlineReqUrlencoded.zipcodeOptional.

  */
  updateaddress: async (options) => {

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
  * @param options.accept    * @param options.addressId    * @param options.userId  

  */
  deleteaddress: async (options) => {

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
  readbillingaddress: async (options) => {

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
  * @param options.createbillingaddressInlineReqUrlencoded.additional_infoOptional. Additional info
  * @param options.createbillingaddressInlineReqUrlencoded.address required
  * @param options.createbillingaddressInlineReqUrlencoded.city required
  * @param options.createbillingaddressInlineReqUrlencoded.country required
  * @param options.createbillingaddressInlineReqUrlencoded.first_name required
  * @param options.createbillingaddressInlineReqUrlencoded.last_name required
  * @param options.createbillingaddressInlineReqUrlencoded.phone_number required
  * @param options.createbillingaddressInlineReqUrlencoded.stateOptional.
  * @param options.createbillingaddressInlineReqUrlencoded.zipcode required

  */
  createbillingaddress: async (options) => {

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
  * @param options.accept    * @param options.billingId    * @param options.userId  
  * @param options.updatebillingaddressInlineReqUrlencoded.additional_infoOptional. Additional info
  * @param options.updatebillingaddressInlineReqUrlencoded.addressOptional.
  * @param options.updatebillingaddressInlineReqUrlencoded.cityOptional.
  * @param options.updatebillingaddressInlineReqUrlencoded.countryOptional.
  * @param options.updatebillingaddressInlineReqUrlencoded.first_nameOptional.
  * @param options.updatebillingaddressInlineReqUrlencoded.last_nameOptional.
  * @param options.updatebillingaddressInlineReqUrlencoded.phone_numberOptional.
  * @param options.updatebillingaddressInlineReqUrlencoded.stateOptional.
  * @param options.updatebillingaddressInlineReqUrlencoded.zipcodeOptional.

  */
  updatebillingaddress: async (options) => {

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
  * @param options.accept    * @param options.billingId    * @param options.userId  

  */
  deletebillingaddress: async (options) => {

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
