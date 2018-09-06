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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ManageContractorsApIs);
  }
}(this, function(expect, ManageContractorsApIs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ManageContractorsApIs.AccessToken();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AccessToken', function() {
    it('should create an instance of AccessToken', function() {
      // uncomment below and update the code to test AccessToken
      //var instane = new ManageContractorsApIs.AccessToken();
      //expect(instance).to.be.a(ManageContractorsApIs.AccessToken);
    });

    it('should have the property tokenType (base name: "token_type")', function() {
      // uncomment below and update the code to test the property tokenType
      //var instane = new ManageContractorsApIs.AccessToken();
      //expect(instance).to.be();
    });

    it('should have the property issuedAt (base name: "issued_at")', function() {
      // uncomment below and update the code to test the property issuedAt
      //var instane = new ManageContractorsApIs.AccessToken();
      //expect(instance).to.be();
    });

    it('should have the property accessToken (base name: "access_token")', function() {
      // uncomment below and update the code to test the property accessToken
      //var instane = new ManageContractorsApIs.AccessToken();
      //expect(instance).to.be();
    });

    it('should have the property expiresIn (base name: "expires_in")', function() {
      // uncomment below and update the code to test the property expiresIn
      //var instane = new ManageContractorsApIs.AccessToken();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ManageContractorsApIs.AccessToken();
      //expect(instance).to.be();
    });

  });

}));