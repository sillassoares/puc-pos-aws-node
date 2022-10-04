"use strict";

var soap = require('strong-soap').soap;
// wsdl of the web service this client is going to invoke. For local wsdl you can use, url = './wsdls/stockquote.wsdl'
var url = 'http://www.dneonline.com/calculator.asmx?WSDL';

var options = {};
soap.createClient(url, options, function(err, client) {

    var intA = Math.floor((Math.random() * 100) + 1);
    var intB = Math.floor((Math.random() * 100) + 1);
    var requestArgs = {
        'intA': intA, 'intB': intB
    };

    var method = client['Add'];
    method(requestArgs, function(err, result, envelope, soapHeader) {
        console.log(`Response Add: ${result.AddResult}`);
    });

    var method = client['Multiply'];
    method(requestArgs, function(err, result, envelope, soapHeader) {
        console.log(`Response Multiply: ${result.MultiplyResult}`);
    });

    var method = client['Subtract'];
    method(requestArgs, function(err, result, envelope, soapHeader) {
        console.log(`Response Subtract: ${result.SubtractResult}`);
    });
});