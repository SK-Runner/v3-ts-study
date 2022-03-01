interface person {
  firstName,
  lastName
}
let getInfo = function(person:person){
  console.log(`${person.firstName}-${person.lastName}`);
}
let p = {
  firstName:'Jack',
  lastName:'Jones'
}
getInfo(p);