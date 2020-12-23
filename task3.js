function seleksiNilai(num1, num2, array){
    let newArr = array.sort((min, max) => min - max)
    let len = newArr.length
    if(num1 < num2 && len >=5){
        const numberFilter = newArr.filter(number => number >= num1 && number <= num2)
        console.log(numberFilter)
    }else if(num1 > num2){
        console.log(`Nilai akhir harus lebih besar dari nilai awal`)
    }else{
        console.log(`Jumlah angka dalam dataArray harus lebih dari 5`)
    }
}
seleksiNilai(1, 5, [1,20,5,10,15])