const { vec } = require('../vec.js');

const floatEquals = (a, b, p = Number.EPSILON) => Math.abs(a - b) < p;

QUnit.module('Vector tests');

QUnit.test('Initialise a vector', assert => {

  // Initialise with no arguments, should get a zero-vector
  assert.deepEqual(vec(), { x: 0, y: 0 });

  // Initialise with both arguments
  assert.deepEqual(vec(2, 3), { x: 2, y: 3 });

  // Initialise with 1 argument, both components should be equal
  assert.deepEqual(vec(4), { x: 4, y: 4 });

  // Initialise with another vector, should create a copy
  const originalVector = vec(5, 6);
  const copiedVector = vec(originalVector);
  assert.deepEqual(copiedVector, { x: 5, y: 6 });

  // Make sure the copied vector isn't still pointing at the original vector
  originalVector.x = 7;
  assert.equal(copiedVector.x, 5);
});

QUnit.test('Vector components', assert => {
  const a = vec(1, 2);
  const components = vec.components(a);
  assert.equal(components[0], 1);
  assert.equal(components[1], 2);
});

QUnit.test('Unit vectors', assert => {
  assert.deepEqual(vec.ux(), { x: 1, y: 0 });
  assert.deepEqual(vec.uy(), { x: 0, y: 1 });
});

QUnit.test('Vector addition', assert => {
  const a = vec(1, 1);
  const b = vec(2, 3);
  assert.deepEqual(vec.add(a, b), { x: 3, y: 4 });
});

QUnit.test('Vector subtraction', assert => {
  const a = vec(1, 1);
  const b = vec(2, 3);
  assert.deepEqual(vec.sub(a, b), { x: -1, y: -2 });
});

QUnit.test('Vector multiplication', assert => {
  const a = vec(2, 3);
  const b = 2;
  assert.deepEqual(vec.mul(a, b), { x: 4, y: 6 });
});

QUnit.test('Vector length', assert => {
  const a = vec(2, 2);
  assert.equal(vec.len(a), Math.sqrt(8));
});

QUnit.test('Vector length (manhattan)', assert => {
  const a = vec(2, 2);
  assert.equal(vec.manhattan(a), 4);
});

QUnit.test('Normalised vector', assert => {
  const a = vec(2, 3);
  assert.deepEqual(vec.nor(a), {
    x: 0.5547001962252291,
    y: 0.8320502943378437
  });
});

QUnit.test('Vector dot product', assert => {
  const a = vec(2, 3);
  const b = vec(4, 5);
  assert.equal(vec.dot(a, b), 23);
});

QUnit.test('Vector rotation', assert => {
  const a = vec(1, 0);
  const rotatedVector = vec.rot(a, Math.PI / 2);
  assert.equal(floatEquals(rotatedVector.x, 0), true);
  assert.equal(floatEquals(rotatedVector.y, 1), true);
});

QUnit.test('Vector equality', assert => {
  const a = vec(2, 2);
  const b = vec(2, 2);
  const c = vec(2, 3);
  assert.equal(vec.eq(a, b), true);
  assert.equal(vec.eq(b, c), false);
});

QUnit.test('Vector angle in radians', assert => {
  const a = vec(0, 1);
  assert.equal(vec.rad(a), Math.PI / 2);
});

QUnit.test('Copy a vector', assert => {
  const originalVector = vec(2, 3);
  const copiedVector = vec.cpy(originalVector);
  assert.deepEqual(originalVector, copiedVector);

  // Make sure the copied vector isn't still pointing at the original vector
  originalVector.x = 4;
  assert.equal(copiedVector.x, 2);
});

QUnit.test('Mapping a vector', assert => {
  const a = vec(2, 3);
  assert.deepEqual(vec.map(a, v => v + 1), { x: 3, y: 4 });
});

QUnit.test('Vector string conversion', assert => {
  const a = vec(2, 3);
  assert.equal(vec.str(a), '2, 3');
  assert.equal(vec.str(a, ':'), '2:3');
});
