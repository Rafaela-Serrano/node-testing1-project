const utils = require('./index')

// describe('[Exercise 1] trimProperties', () => {
//   test('[1] returns an object with the properties trimmed',() => {
//     // EXAMPLE
//     const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
//     const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
//     const actual = utils.trimProperties(input)
//     expect(actual).toEqual(expected)
//   })
//   test('[2] returns a copy, leaving the original object intact',() => {
//     const input ={ name:' name', lastname:'lastname ', age:' age '}
//     const trimCopy = utils.trimProperties(input)
//     expect(trimCopy).not.toBe(input)
//   })
// })

// describe('[Exercise 2] trimPropertiesMutation', () => {
//   test('[3] returns an object with the properties trimmed', () => {
//     const input = {name:' name',age:' age ',dateOfBirth:'dateOfBirth'}
//     const expected = {name:'name',age:'age',dateOfBirth:'dateOfBirth'}
//     const trim = utils.trimPropertiesMutation(input)
//     expect(trim).toEqual(expected)
//   })
//   test('[4] the object returned is the exact same one we passed in', () => {
//     const input = {foo: 'foo ', bar: '  bar'}
//     const trim = utils.trimPropertiesMutation(input)
//     expect(trim).toBe(input)
//   })
// })

// describe('[Exercise 3] findLargestInteger', () => {
//   test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
//     const case1 = [ { integer : 1 }, { integer : 2 } ];
//     const case3 = [ { integer : 8 }, { integer : 12 } ];

//     const firstLarge = utils.findLargestInteger(case1)
//     const thirdLarge = utils.findLargestInteger(case3)

//     expect(firstLarge).toEqual(2)
//     expect(thirdLarge).toEqual(12)
//   })
// })

// describe('[Exercise 4] Counter', () => {
//   let counter 
//   beforeEach(() => {
//     counter = new utils.Counter(3) // each test must start with a fresh couter
//   })
//   test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
//     expect(counter.countDown()).toBe(3)
//   })
//   test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
//     counter.countDown()
//     expect(counter.countDown()).toBe(2)
//   })
//   test('[8] the count eventually reaches zero but does not go below zero', () => {
//     counter.countDown()
//     counter.countDown()
//     counter.countDown()
//     counter.countDown()
//     expect(counter.countDown()).toBe(0)
//   })
// })

// describe('[Exercise 5] Seasons', () => {
//   let seasons
//   beforeEach(() => {
//     seasons = new utils.Seasons() // each test must start with fresh seasons
//   })
//   test('[9] the FIRST call of seasons.next returns "summer"', () => {
//     expect(seasons.next()).toBe("summer")
//   })
//   test('[10] the SECOND call of seasons.next returns "fall"', () => {
//     seasons.next()
//     expect(seasons.next()).toBe("fall")
//   })
//   test('[11] the THIRD call of seasons.next returns "winter"', () => {
//     seasons.next()
//     seasons.next()
//     expect(seasons.next()).toBe("winter")
//   })
//   test('[12] the FOURTH call of seasons.next returns "spring"', () => {
//     seasons.next()
//     seasons.next()
//     seasons.next()
//     expect(seasons.next()).toBe("spring")
//   })
//   test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
//     seasons.next()
//     seasons.next()
//     seasons.next()
//     seasons.next()
//     expect(seasons.next()).toBe("summer")
//   })
//   test('[14] the 40th call of seasons.next returns "spring"', () => {

//     for ( let i = 0 ; i < 39 ; i++ ){
//       seasons.next()
//     }

//     expect(seasons.next()).toBe("spring")
//   })
// })

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    expect(focus.drive(100)).toBe(100)
    expect(focus.drive(100)).toBe(200)
    expect(focus.drive(100)).toBe(300)
    expect(focus.drive(200)).toBe(500)
  })
  test('[16] driving the car uses gas', () => {
    focus.drive(600)
    expect(focus.drive(100)).toBe(600)
    expect(focus.drive(100)).toBe(600)
    expect(focus.drive(100)).toBe(600)
    expect(focus.tank).toBe(0)
  })
  test('[17] refueling allows to keep driving', () => {
    focus.drive(600)
    focus.refuel(10)
    focus.drive(600)
    expect(focus.odometor).toBe(900)
    focus.refuel(20)
    focus.drive(600)
    expect(focus.odometor).toBe(1500)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    focus.refuel(2000000)
    focus.drive(10000)
    expect(focus.odometor).toBe(600)
  })
})

// describe('[Exercise 7] isEvenNumberAsync', () => {
//   test('[19] resolves true if passed an even number', async () => {
//     const result = await utils.isEvenNumberAsync(2)
//     expect(result).toBe(true)
//   })
//   test('[20] resolves false if passed an odd number', async () => {
//     const result = await utils.isEvenNumberAsync(3)
//     expect(result).toBe(false)
//   })
// })
