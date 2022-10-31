"use strict";

var soap = require('strong-soap').soap;
var request = require('request');

var url = 'http://www.dneonline.com/calculator.asmx?WSDL';
var request_with_defaults = request.defaults({'proxy': '127.0.0.1:9090'});
var options = {'request': request_with_defaults};
soap.createClient(url, {}, function(err, client) {

    if (!client) {
        return ;
    }

    var intA, intB, requestArgs, method;

    intA = Math.floor((Math.random() * 100) + 1);
    intB = Math.floor((Math.random() * 100) + 1);
    requestArgs = {
        'intA': intA, 'intB': intB
    };

    method = client['Add'];
    method(requestArgs, function(err, result, envelope, soapHeader) {
        console.log(`Response Add: ${intA} + ${intB} = ${result.AddResult}`);
    });

    intA = Math.floor((Math.random() * 100) + 1);
    intB = Math.floor((Math.random() * 100) + 1);
    requestArgs = {
        'intA': intA, 'intB': intB
    };

    method = client['Multiply'];
    method(requestArgs, function(err, result, envelope, soapHeader) {
        console.log(`Response Multiply: ${intA} * ${intB} = ${result.MultiplyResult}`);
    });

    intA = Math.floor((Math.random() * 100) + 1);
    intB = Math.floor((Math.random() * 100) + 1);
    requestArgs = {
        'intA': intA, 'intB': intB
    };

    method = client['Subtract'];
    method(requestArgs, function(err, result, envelope, soapHeader) {
        console.log(`Response Subtract:  ${intA} - ${intB} = ${result.SubtractResult}`);
    });
});