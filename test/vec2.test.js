const { vec2 } = require('../vec.js');

const floatEquals = (a, b, p = Number.EPSILON) => Math.abs(a - b) < p;

const PRECISION = 0.001;

QUnit.module('2d vector tests');

QUnit.test('Initialise a vector', assert => {
  // Initialise with no arguments, should get a zero-vector
  assert.deepEqual(vec2(), { x: 0, y: 0 });

  // Initialise with both arguments
  assert.deepEqual(vec2(2, 3), { x: 2, y: 3 });

  // Initialise with 1 argument, both components should be equal
  assert.deepEqual(vec2(4), { x: 4, y: 4 });

  // Initialise with another vector, should create a copy
  const originalVector = vec2(5, 6);
  const copiedVector = vec2(originalVector);
  assert.deepEqual(copiedVector, { x: 5, y: 6 });

  // Make sure the copied vector isn't still pointing at the original vector
  originalVector.x = 7;
  assert.equal(copiedVector.x, 5);
});

QUnit.test('Vector components', assert => {
  const a = vec2(1, 2);
  const components = vec2.components(a);
  assert.equal(components[0], 1);
  assert.equal(components[1], 2);
});

QUnit.test('Initialise vector from components', assert => {
  const components = [3, 4];
  assert.deepEqual(vec2.fromComponents(components), { x: 3, y: 4 });
});

QUnit.test('Unit vectors', assert => {
  assert.deepEqual(vec2.ux(), { x: 1, y: 0 });
  assert.deepEqual(vec2.uy(), { x: 0, y: 1 });
});

QUnit.test('Vector addition', assert => {
  const a = vec2(1, 1);
  const b = vec2(2, 3);
  assert.deepEqual(vec2.add(a, b), { x: 3, y: 4 });
});

QUnit.test('Vector addition (scalar)', assert => {
  const a = vec2(1, 2);
  const b = 2;
  assert.deepEqual(vec2.add(a, b), { x: 3, y: 4 });
});

QUnit.test('Vector subtraction', assert => {
  const a = vec2(1, 1);
  const b = vec2(2, 3);
  assert.deepEqual(vec2.sub(a, b), { x: -1, y: -2 });
});

QUnit.test('Vector subtraction (scalar)', assert => {
  const a = vec2(1, 2);
  const b = 2;
  assert.deepEqual(vec2.sub(a, b), { x: -1, y: 0 });
});

QUnit.test('Vector multiplication', assert => {
  const a = vec2(2, 3);
  const b = vec2(2, 3);
  assert.deepEqual(vec2.mul(a, b), { x: 4, y: 9 });
});

QUnit.test('Vector multiplication (scalar)', assert => {
  const a = vec2(2, 3);
  const b = 2;
  assert.deepEqual(vec2.mul(a, b), { x: 4, y: 6 });
});

QUnit.test('Vector scaling (alias for multiplication, scalar)', assert => {
  const a = vec2(2, 3);
  const b = 2;
  assert.deepEqual(vec2.scale(a, b), { x: 4, y: 6 });
});

QUnit.test('Vector division', assert => {
  const a = vec2(2, 3);
  const b = vec2(2, 3);
  assert.deepEqual(vec2.div(a, b), { x: 1, y: 1 });
});

QUnit.test('Vector division (scalar)', assert => {
  const a = vec2(2, 3);
  const b = 2;
  assert.deepEqual(vec2.div(a, b), { x: 1, y: 1.5 });
});

QUnit.test('Vector length', assert => {
  const a = vec2(2, 2);
  assert.equal(vec2.len(a), Math.sqrt(8));
});

QUnit.test('Vector length (manhattan)', assert => {
  const a = vec2(2, 2);
  assert.equal(vec2.manhattan(a), 4);
});

QUnit.test('Normalised vector', assert => {
  const a = vec2(2, 3);
  assert.deepEqual(vec2.nor(a), {
    x: 0.5547001962252291,
    y: 0.8320502943378437
  });
});

QUnit.test('Vector dot product', assert => {
  const a = vec2(2, 3);
  const b = vec2(4, 5);
  assert.equal(vec2.dot(a, b), 23);
});

QUnit.test('Vector rotation', assert => {
  const a = vec2(1, 0);
  const rotatedVector = vec2.rot(a, Math.PI / 2);
  assert.ok(floatEquals(rotatedVector.x, 0, PRECISION));
  assert.ok(floatEquals(rotatedVector.y, 1, PRECISION));
});

QUnit.test('Fast vector rotation', assert => {
  const a = vec2(1, 0);
  const rotatedVector1 = vec2.rotf(a, 0);
  const rotatedVector2 = vec2.rotf(a, 1);
  const rotatedVector3 = vec2.rotf(a, -1);
  const rotatedVector4 = vec2.rotf(a, 2);
  const rotatedVector5 = vec2.rotf(a, -2);
  assert.deepEqual(rotatedVector1, { x: 1, y: 0 });
  assert.deepEqual(rotatedVector2, { x: 0, y: -1 });
  assert.deepEqual(rotatedVector3, { x: 0, y: 1 });
  assert.deepEqual(rotatedVector4, { x: -1, y: 0 });
  assert.deepEqual(rotatedVector5, { x: -1, y: 0 });
})

QUnit.test('Vector equality', assert => {
  const a = vec2(2, 2);
  const b = vec2(2, 2);
  const c = vec2(2, 3);
  assert.equal(vec2.eq(a, b), true);
  assert.equal(vec2.eq(b, c), false);
});

QUnit.test('Vector angle in radians', assert => {
  const a = vec2(0, 1);
  assert.equal(vec2.rad(a), Math.PI / 2);
});

QUnit.test('Copy a vector', assert => {
  const originalVector = vec2(2, 3);
  const copiedVector = vec2.cpy(originalVector);
  assert.deepEqual(originalVector, copiedVector);

  // Make sure the copied vector isn't still pointing at the original vector
  originalVector.x = 4;
  assert.equal(copiedVector.x, 2);
});

QUnit.test('Mapping a vector', assert => {
  const a = vec2(2, 3);
  assert.deepEqual(vec2.map(a, v => v + 1), { x: 3, y: 4 });
});

QUnit.test('Vector string conversion', assert => {
  const a = vec2(2, 3);
  assert.equal(vec2.str(a), '2, 3');
  assert.equal(vec2.str(a, ':'), '2:3');
});

QUnit.test('Swizzling a vector', assert => {
  const a = vec2(3, -2);
  assert.deepEqual(vec2.swiz(a, 'x'), [3]);
  assert.deepEqual(vec2.swiz(a, 'yx'), [-2, 3]);
  assert.deepEqual(vec2.swiz(a, 'xY'), [3, 2]);
  assert.deepEqual(vec2.swiz(a, 'Yy'), [2, -2]);
  assert.deepEqual(vec2.swiz(a, 'x.x'), [3, -2, 3]);
  assert.deepEqual(vec2.swiz(a, 'y01x'), [-2, 0, 1, 3]);
});

QUnit.test('Vector to polar coordinates', assert => {
  const a = vec2(1, 1);
  const p = vec2.polar(a);
  assert.ok(floatEquals(p.r, Math.sqrt(2), PRECISION));
  assert.ok(floatEquals(p.theta, Math.PI / 4, PRECISION));
});

QUnit.test('Polar coordinates to vector', assert => {
  const p = vec2.fromPolar(Math.sqrt(2), Math.PI / 4);
  assert.ok(floatEquals(p.x, 1, PRECISION));
  assert.ok(floatEquals(p.y, 1, PRECISION));
});
