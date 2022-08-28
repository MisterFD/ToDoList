// give the current date

// module.exports = getDate; return only all object if you have 1

//return the particular function
module.exports.getDate = function(){
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  };

return today.toLocaleDateString("en-US", options);

}

//return the particular function
module.exports.getDay = function (){
  const today = new Date();

  const options = {
    weekday: "long",

  };

  return today.toLocaleDateString("en-US", options);

}
