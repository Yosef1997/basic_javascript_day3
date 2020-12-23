//no.1
//length = untuk menghitung jumlah properti dalam string
let string1 = 'contoh method string length'
let stringLength = string1.length
//console.log(stringLength)
//indexOf() = untuk mencari kata dalam variabel string dari propeti awal/1 dengan output index kata yang dicari
const string2 = 'contoh method string indexof()'
const stringindexof = string2.indexOf('method')
//console.log(stringindexof)
//lastIndexOf() = untuk mencari kata dalam variabel string dari propeti terakhir dengan output index kata yang dicari
const string3 = 'contoh method string lastIndexof() contoh'
const stringLastIndexOf = string3.lastIndexOf('contoh')
//console.log(stringLastIndexOf)
//search() = untuk mencari kata yang diinput dalam variabel
const string4 =  'contoh method string search() contoh'
const stringSearch = string4.search('contoh')
//console.log(stringSearch)
//toUpperCase() = merubah seluruh nilai variabel string dari huruf kecil ke huruf besar
const string5 = 'contoh method string toUpperCase()'
const stringUpper = string5.toUpperCase()
//console.log(stringUpper)
////toLowerCase() = merubah seluruh nilai variabel string dari huruf besar ke huruf kecil
const string6 = stringUpper
const stringLower = string6.toLowerCase()
//console.log(stringLower)
//toString() = mengubah variabel number menjadi string
const number1 = 1234567
const numToString = number1.toString()
//console.log(numToString)
// join() = menghubungkan element array dengan penghubung yang ditentukan dan mengubah array menjadi string
const array1 = ['mobil','motor','pesawat']
const arrJoin = array1.join(',')
//console.log(arrJoin)
// split() = mengubah elemen string menjadi elemen array
const array2 = arrJoin
const arrSplit = array2.split()
//console.log(arrSplit)
//replace() = mengubah nilai variabel string dengan nilai string yang baru
const string7 = 'saya ikut bootcamp'
const strReplace = string7.replace('bootcamp', 'Arkademy')
///console.log(strReplace)