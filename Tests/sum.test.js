const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

test("asignación de un objeto", () => {
  const datos = { uno: 1 };
  datos["dos"] = 2;
  expect(datos).toEqual({ uno: 1, dos: 2 });
});

test("agregando un numero positivo que no sea 0", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("cero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test('dos mas dos', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe y toEqual son equivalentes para números
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  test('agregando números de punto flotante', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3); Esto no funcionará debido al error de redondeo
    expect(value).toBeCloseTo(0.3); // Esto funciona.
  });