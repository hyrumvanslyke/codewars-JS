function otterPopulationPercent(maleOtters, femaleOtters){
    totalOtters = maleOtters+ femaleOtters
    malePecent = maleOtters/ totalOtters
    femalePecent = femaleOtters/ totalOtters
return `male percentage is ${malePecent}, while female percent is ${femalePecent}`

}

console.log(otterPopulationPercent(13, 13))