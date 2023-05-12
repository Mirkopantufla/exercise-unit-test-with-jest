let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// esta es mi función que suma dos números

const sum = (a, b) => {
    return a + b
}

const fromDollarToYen = (dolar) => {
    return dolar * oneEuroIs.JPY;
}

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD;
}

const fromYenToPound = (yen) => {
    return yen * oneEuroIs.GBP;
}

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = {
    sum,
    fromEuroToDollar
};
