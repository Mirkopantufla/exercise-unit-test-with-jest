let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// esta es mi función que suma dos números

const sum = (a, b) => {
    return a + b
}

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD;
}

const fromDollarToYen = (dolar) => {
    return (dolar * 0.8333333333333333) * oneEuroIs.JPY;
}

const fromYenToPound = (yen) => {
    return (yen * 0.00781860828772487) * oneEuroIs.GBP;
}

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};
