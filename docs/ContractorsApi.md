# ManageContractorsApIs.ContractorsApi

All URIs are relative to *https://mg-eval-test.apigee.net/demo/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contractorsEmployeeIDDelete**](ContractorsApi.md#contractorsEmployeeIDDelete) | **DELETE** /contractors/{employeeID} | Deletes an Employee record
[**contractorsEmployeeIDGet**](ContractorsApi.md#contractorsEmployeeIDGet) | **GET** /contractors/{employeeID} | Retrieves an Employee record
[**contractorsGet**](ContractorsApi.md#contractorsGet) | **GET** /contractors | Retrieves all Employee records
[**contractorsPost**](ContractorsApi.md#contractorsPost) | **POST** /contractors | Creates an Employees


<a name="contractorsEmployeeIDDelete"></a>
# **contractorsEmployeeIDDelete**
> contractorsEmployeeIDDelete(employeeID)

Deletes an Employee record

Deletes the profile of an employee.

### Example
```javascript
var ManageContractorsApIs = require('manage_contractors_ap_is');
var defaultClient = ManageContractorsApIs.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ManageContractorsApIs.ContractorsApi();

var employeeID = 56; // Number | The unique ID of employee.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.contractorsEmployeeIDDelete(employeeID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employeeID** | **Number**| The unique ID of employee. | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contractorsEmployeeIDGet"></a>
# **contractorsEmployeeIDGet**
> Employee contractorsEmployeeIDGet(employeeID)

Retrieves an Employee record

Retrieves the profile of an employee.

### Example
```javascript
var ManageContractorsApIs = require('manage_contractors_ap_is');
var defaultClient = ManageContractorsApIs.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ManageContractorsApIs.ContractorsApi();

var employeeID = 56; // Number | The unique ID of employee.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contractorsEmployeeIDGet(employeeID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employeeID** | **Number**| The unique ID of employee. | 

### Return type

[**Employee**](Employee.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contractorsGet"></a>
# **contractorsGet**
> ERRORUNKNOWN contractorsGet()

Retrieves all Employee records

Retrieves the profile of all employees.

### Example
```javascript
var ManageContractorsApIs = require('manage_contractors_ap_is');
var defaultClient = ManageContractorsApIs.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ManageContractorsApIs.ContractorsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contractorsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ERRORUNKNOWN**](ERRORUNKNOWN.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contractorsPost"></a>
# **contractorsPost**
> contractorsPost(opts)

Creates an Employees

Registers a new employee for the client.

### Example
```javascript
var ManageContractorsApIs = require('manage_contractors_ap_is');
var defaultClient = ManageContractorsApIs.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ManageContractorsApIs.ContractorsApi();

var opts = { 
  'employee': new ManageContractorsApIs.Employee() // Employee | The Employee
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.contractorsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employee** | [**Employee**](Employee.md)| The Employee | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

