const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}`;

test('Should add 2 numbers', () => {
    const result = add(200, 13);

    expect(result).toBe(213);
});

test('Should be "Hello Anton"', () => {
    const result = generateGreeting('Anton');

    expect(result).toBe('Hello Anton');
});