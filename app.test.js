// importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("3.5 euro should be 4.2 dollars", function () {
    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * oneEuroIs.USD;

    // this is the comparison for the unit test
    expect(dollars).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("3.5 dollar should be 373.042 Yen", function () {
    const yens = parseFloat(fromDollarToYen(3.5).toFixed(3))

    const expected = 3.5 * oneEuroIs.JPY;

    expect(yens).toBe(373.042);
})

test("3.5 yen should be 0.022 England Pounds", function () {
    const pounds = parseFloat(fromYenToPound(3.5).toFixed(3))

    const expected = 3.5 * oneEuroIs.GBP;

    expect(pounds).toBe(0.022);
})