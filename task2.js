const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth', 
    'Ella', 'Faith', 'Olivia', 'Penelope']


function seleksiNama(key, range, callback){
    const nameLowerCase = name.map(value => value.toLowerCase());
    const newArr = nameLowerCase. filter((items) => {
        if(items.match(key.toLowerCase())){
            return items
        }else{
            return undefined
        }
    })
    callback(newArr, range)
}
function range(element, range){
    const len = element.length
    if(element == []){
        console.log('data not found')
    }else{
        if(range > len){
            range = len
        }
        const result = []
        for(i = 0; i < range; i++){
            result.push(element[i])
        }
        console.log(result)
    }
}
seleksiNama('xx', 10, range)
