1 + 80 // 81
60 - 40 // 20
2 * 3.4 // 6.8 (there's that floating-point arithmetic again...)
5.0 / 2.5 // 2

function add(a, b) {
  return a + b
}
function subtract(a, b) {
  return a - b
}
function multiply(a, b) {
  return a * b
}
function divide(a, b) {
  return a / b
}
function inc(a) {
  return a + 1
}
function dec(a) {
  return a - 1
}

function makeInt(n) {
  return parseInt(n, 10)
}
/*function makeInt('0x2328') {
  return 0
}
function isNaN(makeInt('sldkjflksjf')) {
  return true
}*/
function preserveDecimal(n) {
  return parseFloat(2.222)
}
function isNaN(preserveDecimal('sldkjflksjf')) {
  return true
}