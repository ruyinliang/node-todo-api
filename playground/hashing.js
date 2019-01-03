const {SHA256} = require('crypto-js');
//const jwt = require('jsonwebtoken');

// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);
//
var message = 'I am user number 3';
var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

var data = {
  id: 5
};
var token = {
  data,
  hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}
console.log(token.hash);

token.data.id = 5;
token.hash = SHA256(JSON.stringify({ id: 5 })).toString();
console.log(token.data);
console.log(token.hash);


var resultHash = SHA256(JSON.stringify({ id: 5 }) + 'somesecret').toString();
console.log(resultHash);
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust!');
// }
