/**
 * Manage Contractors APIs
 * This API supports all services required to manage Employees on HR system
 *
 * OpenAPI spec version: 0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 1.0.16
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccessToken'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AccessToken'));
  } else {
    // Browser globals (root is window)
    if (!root.ManageContractorsApIs) {
      root.ManageContractorsApIs = {};
    }
    root.ManageContractorsApIs.AuthenticationApi = factory(root.ManageContractorsApIs.ApiClient, root.ManageContractorsApIs.AccessToken);
  }
}(this, function(ApiClient, AccessToken) {
  'use strict';

  /**
   * Authentication service.
   * @module api/AuthenticationApi
   * @version 0.1
   */

  /**
   * Constructs a new AuthenticationApi. 
   * @alias module:api/AuthenticationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the oauthTokenPost operation.
     * @callback module:api/AuthenticationApi~oauthTokenPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccessToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Access Token
     * Verify client credentials and returns a bearer token.
     * @param {Object} opts Optional parameters
     * @param {String} opts.grantType The grant type for OAuth2.0 (default to client_credentials)
     * @param {String} opts.clientId Client ID
     * @param {String} opts.clientSecret Client Secret
     * @param {module:api/AuthenticationApi~oauthTokenPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccessToken}
     */
    this.oauthTokenPost = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'grant_type': opts['grantType'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'client_id': opts['clientId'],
        'client_secret': opts['clientSecret']
      };

      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = AccessToken;

      return this.apiClient.callApi(
        '/oauth/token', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));