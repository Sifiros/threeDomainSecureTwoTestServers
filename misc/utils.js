const threeDSData = require('../appData/threeDSServerPData') 

let jsonError = (message) => {
    return {
        'status': 'ko',
        'message': message
    }
}

let isCreditCardInRange = (cardNumber) => {
    let pRes = threeDSData.PResponseHeader 
    let isCardInRange = false

    if (!pRes || !pRes.cardRangeData) {return false}

    pRes.cardRangeData.forEach(elem => {
        if (cardNumber >= elem.startRange && cardNumber <= elem.endRange) {
            isCardInRange = true
        }
        
    })
    return isCardInRange
}

module.exports = {
    jsonError,
    isCreditCardInRange
}