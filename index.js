#! /usr/bin/env/ Node
var pem = require('pem');

pem.createCertificate({days: 365, selfSigned: true}, function (err, keys) {
	console.log("Key: ");
	console.log(keys.serviceKey);
	console.log("Cert:");
	console.log(keys.certificate);
})
