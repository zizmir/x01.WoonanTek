function length(str) {
  return str.length
}

// 1 min
function toLowerCase(str) {
	return str.toLowerCase()
}

// 1 min
function toUpperCase(str) {
	return str.toUpperCase()
}
// 10 min
function capitalize(str){
  return str.replace(/\b\w/g, s => s.toUpperCase());
}
// 2 min
function decapitalize(str){
  return str.replace(/\b\w/g, s => s.toLowerCase());
}
// 1 min
function kebabCase(str){
  return str.replace(/\s/g, '-');
}

// 3 min
function snakeCase(str){
  return str.replace(/\s|\-/g, '_');
}

// 8 min
function swapCase(str){
  str = str.replace(/[a-z]/g, s => s.toUpperCase());

  return str.replace(/\b\w/g, s => s.toLowerCase());
}

function chartAt(str, index){
  return str.charAt(index);
}

function chartAt(str, index){

  return str.charAt(index);
}

function first(str, index){
  return str.substring(0, index);
}

function last(str, index){
  return str.substring(str.length-index, str.length );
}

function slice(str, index, end = 7){
  return str.slice(index);
}

function count(str){
  return str.length
}

function countSubStrings(str , search){
 var regex  = new RegExp(search , 'g')
 return str.match(regex).length;
}

function countWords(str ){
   str =  str.replace(/([a-z])([A-Z])/g, "$1-$2")
   .match(/\b[\w]+\b/g).length
 return str;
}
function indexOf(str = '' , search ){
  return str.indexOf(search)
}
function lastIndexOf(str = '' , search ){
  return str.lastIndexOf(search)
}

function insert(str,index){
  str.indexOf(index)
}



module.exports = {
  length,
  toLowerCase,
  toUpperCase,
  capitalize,
  decapitalize,
  kebabCase,
  snakeCase,
  swapCase,
  chartAt,
  first,
  last,
  slice,
  count,
  countSubStrings,
  countWords,
  indexOf,
  lastIndexOf
}
