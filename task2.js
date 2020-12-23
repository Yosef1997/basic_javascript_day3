const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth', 
    'Ella', 'Faith', 'Olivia', 'Penelope']


function seleksiNama(string, number, callback){
    const nametoLowerCase = name.map(e.toLowerCase())
    const newArr = nametoLowerCase.filter((elemen) =>{
        if(elemen.match(string.toLowerCase())){
            return elemen
        }else{
            return undefined
        }
    })
    callback(newArr, number)
}
function range(data, number){
    if(typeof data == 'null'){
        console.log('no data')
    }else{
        if(number > data.length){
            number = data.length
        }else{
            console.log(newArr)
        }
    }
}

seleksiNama('an', 3, range)
