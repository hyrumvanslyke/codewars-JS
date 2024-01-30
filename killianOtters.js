function otterPopulationPercent(maleOtters, femaleOtters){
    totalOtters = maleOtters+ femaleOtters
    malePecent = (maleOtters/ totalOtters)*100
    femalePecent = (femaleOtters/ totalOtters)*100
return `male percentage is ${Math.round(malePecent)}%, while female percent is ${Math.round(femalePecent)}%`

}

console.log(otterPopulationPercent(45, 13))