# ManageContractorsApIs.AuthenticationApi

All URIs are relative to *https://mg-eval-test.apigee.net/demo/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**oauthTokenPost**](AuthenticationApi.md#oauthTokenPost) | **POST** /oauth/token | Get Access Token


<a name="oauthTokenPost"></a>
# **oauthTokenPost**
> AccessToken oauthTokenPost(opts)

Get Access Token

Verify client credentials and returns a bearer token.

### Example
```javascript
var ManageContractorsApIs = require('manage_contractors_ap_is');

var apiInstance = new ManageContractorsApIs.AuthenticationApi();

var opts = { 
  'grantType': "client_credentials", // String | The grant type for OAuth2.0
  'clientId': "clientId_example", // String | Client ID
  'clientSecret': "clientSecret_example" // String | Client Secret
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.oauthTokenPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantType** | **String**| The grant type for OAuth2.0 | [optional] [default to client_credentials]
 **clientId** | **String**| Client ID | [optional] 
 **clientSecret** | **String**| Client Secret | [optional] 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

