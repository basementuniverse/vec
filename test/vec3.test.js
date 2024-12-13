const { vec3, mat } = require('../vec.js');

const floatEquals = (a, b, p = Number.EPSILON) => Math.abs(a - b) < p;

const PRECISION = 0.001;

QUnit.module('3d vector tests');

QUnit.test('Initialise a vector', assert => {
  // Initialise with no arguments, should get a zero-vector
  assert.deepEqual(vec3(), { x: 0, y: 0, z: 0 });

  // Initialise with all arguments
  assert.deepEqual(vec3(2, 3, 4), { x: 2, y: 3, z: 4 });

  // Initialise with 1 argument, all components should be equal
  assert.deepEqual(vec3(4), { x: 4, y: 4, z: 4 });

  // Initialise with another vector, should create a copy
  const originalVector = vec3(5, 6, 7);
  const copiedVector = vec3(originalVector);
  assert.deepEqual(copiedVector, { x: 5, y: 6, z: 7 });

  // Make sure the copied vector isn't still pointing at the original vector
  originalVector.x = 7;
  assert.equal(copiedVector.x, 5);

  // Initialise with a 2d vector and a z component
  assert.deepEqual(vec3({ x: 1, y: 2 }, 3), { x: 1, y: 2, z: 3 });
});

QUnit.test('Vector components', assert => {
  const a = vec3(1, 2, 3);
  const components = vec3.components(a);
  assert.equal(components[0], 1);
  assert.equal(components[1], 2);
  assert.equal(components[2], 3);
});

QUnit.test('Initialise vector from components', assert => {
  const components = [3, 4, 5];
  assert.deepEqual(vec3.fromComponents(components), { x: 3, y: 4, z: 5 });
});

QUnit.test('Unit vectors', assert => {
  assert.deepEqual(vec3.ux(), { x: 1, y: 0, z: 0 });
  assert.deepEqual(vec3.uy(), { x: 0, y: 1, z: 0 });
  assert.deepEqual(vec3.uz(), { x: 0, y: 0, z: 1 });
});

QUnit.test('Vector addition', assert => {
  const a = vec3(1, 1, 1);
  const b = vec3(2, 3, 4);
  assert.deepEqual(vec3.add(a, b), { x: 3, y: 4, z: 5 });
});

QUnit.test('Vector subtraction', assert => {
  const a = vec3(1, 1, 1);
  const b = vec3(2, 3, 4);
  assert.deepEqual(vec3.sub(a, b), { x: -1, y: -2, z: -3 });
});

QUnit.test('Vector multiplication', assert => {
  const a = vec3(2, 3, 4);
  const b = 2;
  assert.deepEqual(vec3.mul(a, b), { x: 4, y: 6, z: 8 });
});

QUnit.test('Vector length', assert => {
  const a = vec3(2, 2, 2);
  assert.equal(vec3.len(a), Math.sqrt(12));
});

QUnit.test('Vector length (manhattan)', assert => {
  const a = vec3(2, 2, 2);
  assert.equal(vec3.manhattan(a), 6);
});

QUnit.test('Normalised vector', assert => {
  const a = vec3(2, 3, 4);
  const len = vec3.len(a);
  const normalized = vec3.nor(a);
  assert.ok(floatEquals(normalized.x, 2 / len, PRECISION));
  assert.ok(floatEquals(normalized.y, 3 / len, PRECISION));
  assert.ok(floatEquals(normalized.z, 4 / len, PRECISION));
});

QUnit.test('Vector dot product', assert => {
  const a = vec3(1, 2, 3);
  const b = vec3(4, 5, 6);
  assert.equal(vec3.dot(a, b), 1 * 4 + 2 * 5 + 3 * 6);
});

QUnit.test('Vector cross product', assert => {
  const a = vec3(1, 2, 3);
  const b = vec3(4, 5, 6);
  assert.deepEqual(vec3.cross(a, b), { x: -3, y: 6, z: -3 });
});

QUnit.test('Vector rotate using a matrix', assert => {
  const a = vec3(1, 0, 0);
  const m = mat(3, 3, [
    0, -1, 0,
    1, 0, 0,
    0, 0, 1
  ]);
  assert.deepEqual(vec3.rot(a, m), { x: 0, y: 1, z: 0 });
});

QUnit.test('Vector rotate around an axis', assert => {
  const a = vec3(1, 2, 3);
  const x = vec3.rotx(a, Math.PI / 2);
  const y = vec3.roty(a, Math.PI / 2);
  const z = vec3.rotz(a, Math.PI / 2);
  assert.ok(floatEquals(x.x, 1, PRECISION));
  assert.ok(floatEquals(x.y, -3, PRECISION));
  assert.ok(floatEquals(x.z, 2, PRECISION));
  assert.ok(floatEquals(y.x, 3, PRECISION));
  assert.ok(floatEquals(y.y, 2, PRECISION));
  assert.ok(floatEquals(y.z, -1, PRECISION));
  assert.ok(floatEquals(z.x, -2, PRECISION));
  assert.ok(floatEquals(z.y, 1, PRECISION));
  assert.ok(floatEquals(z.z, 3, PRECISION));
});

QUnit.test('Vector rotate using a quaternion', assert => {
  const a = vec3(1, 2, 3);
  const q = [0, 0, 1, 1];
  const rotated = vec3.rotq(a, q);
  assert.ok(floatEquals(rotated.x, -2, PRECISION));
  assert.ok(floatEquals(rotated.y, 1, PRECISION));
  assert.ok(floatEquals(rotated.z, 3, PRECISION));
});

QUnit.test('Vector rotate using Euler angles', assert => {
  const a = vec3(1, 2, 3);
  const e = vec3(0, 0, Math.PI / 2);
  const rotated = vec3.rota(a, e);
  assert.ok(floatEquals(rotated.x, -2, PRECISION));
  assert.ok(floatEquals(rotated.y, 1, PRECISION));
  assert.ok(floatEquals(rotated.z, 3, PRECISION));
});

QUnit.test('Vector equality', assert => {
  const a = vec3(1, 2, 3);
  const b = vec3(1, 2, 3);
  const c = vec3(4, 5, 6);
  assert.ok(vec3.eq(a, b));
  assert.notOk(vec3.eq(a, c));
});

QUnit.test('Vector angle', assert => {
  assert.equal(vec3.radx(vec3(0, 1, 0)), 0);
  assert.equal(vec3.rady(vec3(0, 0, 1)), 0);
  assert.equal(vec3.radz(vec3(1, 0, 0)), 0);
});

QUnit.test('Copy a vector', assert => {
  const a = vec3(1, 2, 3);
  const b = vec3.cpy(a);
  assert.deepEqual(b, { x: 1, y: 2, z: 3 });
  a.x = 4;
  assert.equal(b.x, 1);
});

QUnit.test('Mapping a vector', assert => {
  const a = vec3(1, 2, 3);
  const b = vec3.map(a, x => x * 2);
  assert.deepEqual(b, { x: 2, y: 4, z: 6 });
});

QUnit.test('Vector string conversion', assert => {
  const a = vec3(1, 2, 3);
  assert.equal(vec3.str(a), '1, 2, 3');
});

QUnit.test('Swizzling a vector', assert => {
  const a = vec3(3, -2, 1);
  assert.deepEqual(vec3.swiz(a, 'x'), [3]);
  assert.deepEqual(vec3.swiz(a, 'zyx'), [1, -2, 3]);
  assert.deepEqual(vec3.swiz(a, 'xYZ'), [3, 2, -1]);
  assert.deepEqual(vec3.swiz(a, 'Zzx'), [-1, 1, 3]);
  assert.deepEqual(vec3.swiz(a, 'x.x'), [3, -2, 3]);
  assert.deepEqual(vec3.swiz(a, 'y01zx'), [-2, 0, 1, 1, 3]);
});

QUnit.test('Vector to polar coordinates', assert => {
  const a = vec3(1, 1, 1);
  const polar = vec3.polar(a);
  assert.ok(floatEquals(polar.r, Math.sqrt(3), PRECISION));
  assert.ok(floatEquals(polar.theta, Math.acos(1 / Math.sqrt(3)), PRECISION));
  assert.ok(floatEquals(polar.phi, Math.PI / 4, PRECISION));
});

QUnit.test('Polar coordinates to vector', assert => {
  const a = vec3.fromPolar(Math.sqrt(3), Math.acos(1 / Math.sqrt(3)), Math.PI / 4);
  assert.ok(floatEquals(a.x, 1, PRECISION));
  assert.ok(floatEquals(a.y, 1, PRECISION));
  assert.ok(floatEquals(a.z, 1, PRECISION));
});
