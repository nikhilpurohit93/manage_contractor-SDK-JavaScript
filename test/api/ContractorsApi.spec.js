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
    instance = new ManageContractorsApIs.ContractorsApi();
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

  describe('ContractorsApi', function() {
    describe('contractorsEmployeeIDDelete', function() {
      it('should call contractorsEmployeeIDDelete successfully', function(done) {
        //uncomment below and update the code to test contractorsEmployeeIDDelete
        //instance.contractorsEmployeeIDDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('contractorsEmployeeIDGet', function() {
      it('should call contractorsEmployeeIDGet successfully', function(done) {
        //uncomment below and update the code to test contractorsEmployeeIDGet
        //instance.contractorsEmployeeIDGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('contractorsGet', function() {
      it('should call contractorsGet successfully', function(done) {
        //uncomment below and update the code to test contractorsGet
        //instance.contractorsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('contractorsPost', function() {
      it('should call contractorsPost successfully', function(done) {
        //uncomment below and update the code to test contractorsPost
        //instance.contractorsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
