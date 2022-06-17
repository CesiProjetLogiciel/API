module.exports = {
  /**
  * 
  * @param options.accept  

  */
  restaurantlist: async (options) => {

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
  * @param options.createrestaurantInlineReqUrlencoded.category required
  * @param options.createrestaurantInlineReqUrlencoded.descriptionOptional.
  * @param options.createrestaurantInlineReqUrlencoded.imageOptional. Base64
  * @param options.createrestaurantInlineReqUrlencoded.name required

  */
  createrestaurant: async (options) => {

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
  readrestaurant: async (options) => {

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
        "category": "<string>",
        "description": "<string>",
        "id": "<int32>",
        "image": "<string>",
        "name": "<string>",
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
  * @param options.editrestaurantInlineReqUrlencoded.categoryOptional.
  * @param options.editrestaurantInlineReqUrlencoded.descriptionOptional.
  * @param options.editrestaurantInlineReqUrlencoded.imageOptional. Base64
  * @param options.editrestaurantInlineReqUrlencoded.nameOptional.

  */
  editrestaurant: async (options) => {

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
  * @param options.accept    * @param options.id  

  */
  deleterestaurant: async (options) => {

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
  * @param options.accept    * @param options.restaurantId  

  */
  menulist: async (options) => {

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
  * @param options.accept    * @param options.restaurantId  
  * @param options.createmenuInlineReqUrlencoded.name required
  * @param options.createmenuInlineReqUrlencoded.price required
  * @param options.createmenuInlineReqUrlencoded.product_ids required

  */
  createmenu: async (options) => {

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
  * @param options.accept    * @param options.menuId    * @param options.restaurantId  

  */
  readmenu: async (options) => {

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
        "id": "<int32>",
        "name": "<string>",
        "price": "<number>",
        "products": "<array>",
        "restaurant_id": "<int32>",
      },
      status = '200';

    return {
      status: status,
      data: data
    };  
  },

  /**
  * 
  * @param options.accept    * @param options.menuId    * @param options.restaurantId  
  * @param options.updatemenuInlineReqUrlencoded.nameOptional.
  * @param options.updatemenuInlineReqUrlencoded.priceOptional.
  * @param options.updatemenuInlineReqUrlencoded.product_idsOptional.

  */
  updatemenu: async (options) => {

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
  * @param options.accept    * @param options.menuId    * @param options.restaurantId  

  */
  deletemenu: async (options) => {

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
  * @param options.accept    * @param options.menuId    * @param options.restaurantId  
  * @param options.addproducttomenuInlineReqUrlencoded.product_id required

  */
  addproducttomenu: async (options) => {

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
  * @param options.accept    * @param options.menuId    * @param options.productId    * @param options.restaurantId  

  */
  removeproductfrommenu: async (options) => {

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
  * @param options.accept    * @param options.restaurantId  

  */
  productlist: async (options) => {

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
  * @param options.accept    * @param options.restaurantId  
  * @param options.createproductInlineReqUrlencoded.descriptionOptional.
  * @param options.createproductInlineReqUrlencoded.imageOptional. Base64
  * @param options.createproductInlineReqUrlencoded.name required
  * @param options.createproductInlineReqUrlencoded.price required

  */
  createproduct: async (options) => {

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
  * @param options.accept    * @param options.productId    * @param options.restaurantId  

  */
  readproduct: async (options) => {

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
        "description": "<string>",
        "id": "<int32>",
        "image": "<string>",
        "name": "<string>",
        "price": "<number>",
        "restaurant_id": "<int32>",
      },
      status = '200';

    return {
      status: status,
      data: data
    };  
  },

  /**
  * 
  * @param options.accept    * @param options.productId    * @param options.restaurantId  
  * @param options.editproductInlineReqUrlencoded.descriptionOptional.
  * @param options.editproductInlineReqUrlencoded.imageOptional. Base64
  * @param options.editproductInlineReqUrlencoded.nameOptional.
  * @param options.editproductInlineReqUrlencoded.priceOptional.

  */
  editproduct: async (options) => {

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
  * @param options.accept    * @param options.productId    * @param options.restaurantId  

  */
  deleteproduct: async (options) => {

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
  * @param options.accept    * @param options.restaurantId  

  */
  restaurantstatistics: async (options) => {

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
        "stats": "<string>",
      },
      status = '200';

    return {
      status: status,
      data: data
    };  
  },
};
