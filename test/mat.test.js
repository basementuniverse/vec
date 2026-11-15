const { mat, vec2, vec3 } = require('../vec.js');

const times = (f, n) => Array(n).fill(0).map((_, i) => f(i));
const range = n => times(i => i, n);
const floatEquals = (a, b, p = Number.EPSILON) => Math.abs(a - b) < p;

const PRECISION = 0.001;

const assertMatrixClose = (assert, actual, expected, message) => {
  assert.equal(actual.m, expected.m, `${message} (rows)`);
  assert.equal(actual.n, expected.n, `${message} (columns)`);
  assert.ok(
    actual.entries.every((v, i) => floatEquals(v, expected.entries[i], PRECISION)),
    `${message}\nexpected:\n${mat.str(expected)}\nactual:\n${mat.str(actual)}`
  );
};

QUnit.module('Matrix tests');

QUnit.test('Initialise a matrix', assert => {

  // Initialise with no arguments, should get a 4x4 matrix
  assert.deepEqual(mat(), {
    m: 4,
    n: 4,
    entries: [
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0
    ]
  });

  // Initialise with size arguments, should get a 3x3 matrix
  assert.deepEqual(mat(3, 3), {
    m: 3,
    n: 3,
    entries: [
      0, 0, 0,
      0, 0, 0,
      0, 0, 0
    ]
  });

  // Initialise with all entries populated
  assert.deepEqual(mat(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]), {
    m: 3,
    n: 3,
    entries: [
      1, 2, 3,
      4, 5, 6,
      7, 8, 9
    ]
  });

  // Initialise with some entries populated
  assert.deepEqual(mat(3, 3, [1, 2, 3]), {
    m: 3,
    n: 3,
    entries: [
      1, 2, 3,
      0, 0, 0,
      0, 0, 0
    ]
  });
});

QUnit.test('Identity matrix', assert => {

  // 2x2 identity matrix
  assert.deepEqual(mat.identity(2), {
    m: 2,
    n: 2,
    entries: [
      1, 0,
      0, 1
    ]
  });

  // 3x3 identity matrix
  assert.deepEqual(mat.identity(3), {
    m: 3,
    n: 3,
    entries: [
      1, 0, 0,
      0, 1, 0,
      0, 0, 1
    ]
  });

  // 4x4 identity matrix
  assert.deepEqual(mat.identity(4), {
    m: 4,
    n: 4,
    entries: [
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ]
  });
});

QUnit.test('Get and set matrix entries', assert => {
  const a = mat(3, 3, range(9));

  // Get
  assert.equal(mat.get(a, 1, 1), 0);
  assert.equal(mat.get(a, 3, 3), 8);

  // Set
  mat.set(a, 1, 1, 10);
  assert.equal(mat.get(a, 1, 1), 10);

  mat.set(a, 3, 2, 11);
  assert.equal(mat.get(a, 3, 2), 11);
});

QUnit.test('Get matrix rows/columns', assert => {
  const a = mat(4, 4, range(16));

  // Rows
  assert.deepEqual(mat.row(a, 1), [0, 1, 2, 3]);
  assert.deepEqual(mat.row(a, 4), [12, 13, 14, 15]);

  // Columns
  assert.deepEqual(mat.col(a, 1), [0, 4, 8, 12]);
  assert.deepEqual(mat.col(a, 4), [3, 7, 11, 15]);
});

QUnit.test('Matrix addition', assert => {

  // Add matrices of same size
  const a1 = mat(2, 2, [1, 2, 3, 4]);
  const b1 = mat(2, 2, [2, 3, 4, 5]);
  assert.deepEqual(mat.add(a1, b1), {
    m: 2,
    n: 2,
    entries: [3, 5, 7, 9]
  });

  // Add matrices of different size
  const a2 = mat(2, 2, [1, 2, 3, 4]);
  const b2 = mat(2, 1, [2, 3]);
  assert.equal(mat.add(a2, b2), false);
});

QUnit.test('Matrix subtraction', assert => {
  const a = mat(2, 2, [1, 2, 3, 4]);
  const b = mat(2, 2, [1, 1, 1, 1]);
  assert.deepEqual(mat.sub(a, b), {
    m: 2,
    n: 2,
    entries: [0, 1, 2, 3]
  });
});

QUnit.test('Matrix multiplication', assert => {

  // a columns === b rows
  const a1 = mat(2, 3, [1, 2, 3, 4, 5, 6]);
  const b1 = mat(3, 2, [7, 8, 9, 10, 11, 12]);
  assert.deepEqual(mat.mul(a1, b1), {
    m: 2,
    n: 2,
    entries: [58, 64, 139, 154]
  });

  // a columns !== b rows
  const a2 = mat(2, 2, [1, 2, 3, 4]);
  const b2 = mat(3, 3, [1, 2, 3, 4, 5, 6]);
  assert.equal(mat.mul(a2, b2), false);
});

QUnit.test('Matrix scalar multiplication', assert => {
  const a = mat(2, 2, [1, 2, 3, 4]);
  const b = 2;
  assert.deepEqual(mat.scale(a, b), {
    m: 2,
    n: 2,
    entries: [2, 4, 6, 8]
  });
});

QUnit.test('Matrix transposition', assert => {
  const a = mat(2, 3, [1, 2, 3, 4, 5, 6]);
  assert.deepEqual(mat.trans(a), {
    m: 3,
    n: 2,
    entries: [1, 4, 2, 5, 3, 6]
  });
});

QUnit.test('Matrix minor', assert => {

  // Minor of a square matrix
  const a = mat(4, 4, range(16));
  assert.deepEqual(mat.minor(a, 2, 2), {
    m: 3,
    n: 3,
    entries: [0, 2, 3, 8, 10, 11, 12, 14, 15]
  });
  assert.deepEqual(mat.minor(a, 4, 4), {
    m: 3,
    n: 3,
    entries: [0, 1, 2, 4, 5, 6, 8, 9, 10]
  });

  // Minor of a non-square matrix
  const b = mat(2, 3, [1, 2, 3, 4, 5, 6]);
  assert.equal(mat.minor(b, 1, 1), false);
});

QUnit.test('Matrix determinant', assert => {
  const a = mat(3, 3, [6, 1, 1, 4, -2, 5, 2, 8, 7]);
  assert.equal(mat.det(a), -306);

  // Determinant of a non-square matrix
  const b = mat(2, 3, [1, 2, 3, 4, 5, 6]);
  assert.equal(mat.det(b), false);
});

QUnit.test('Normalised matrix', assert => {
  const a = mat(3, 3, [6, 1, 1, 4, -2, 5, 2, 8, 7]);
  assert.deepEqual(mat.nor(a), {
    m: 3,
    n: 3,
    entries: [
      -1836, -306, -306,
      -1224, 612, -1530,
      -612, -2448, -2142
    ]
  });

  // Normalise a non-square matrix
  const b = mat(2, 3, [1, 2, 3, 4, 5, 6]);
  assert.equal(mat.nor(b), false);
});

QUnit.test('Matrix adjugate', assert => {
  const a = mat(3, 3, [3, 0, 2, 2, 0, -2, 0, 1, 1]);
  assert.deepEqual(mat.adj(a), {
    m: 3,
    n: 3,
    entries: [2, 2, 0, -2, 3, 10, 2, -3, 0]
  });
});

QUnit.test('Matrix adjugate and inverse (1x1)', assert => {
  assert.deepEqual(mat.adj(mat(1, 1, [5])), { m: 1, n: 1, entries: [1] });
  assert.deepEqual(mat.adj(mat(1, 1, [0])), { m: 1, n: 1, entries: [1] });
  assertMatrixClose(assert, mat.inv(mat(1, 1, [5])), mat(1, 1, [0.2]), '1x1 inverse');
  assertMatrixClose(assert, mat.inv(mat(1, 1, [-4])), mat(1, 1, [-0.25]), '1x1 negative inverse');
  assert.equal(mat.inv(mat(1, 1, [0])), false);
});

QUnit.test('Matrix adjugate (even sizes)', assert => {
  // 2x2: adj([a, b; c, d]) = [d, -b; -c, a]
  const a = mat(2, 2, [1, 2, 3, 4]);
  assert.deepEqual(mat.adj(a), {
    m: 2,
    n: 2,
    entries: [4, -2, -3, 1]
  });

  // 4x4 block lower-triangular matrix [D, 0; r, 1] with D = diag(2, 3, 4)
  // and r = [1, 2, 3]. Its inverse is [D^-1, 0; -r D^-1, 1] and det = 24,
  // so adj = 24 * inverse
  const b = mat(4, 4, [
    2, 0, 0, 0,
    0, 3, 0, 0,
    0, 0, 4, 0,
    1, 2, 3, 1
  ]);
  assert.deepEqual(mat.adj(b), {
    m: 4,
    n: 4,
    entries: [
      12, 0, 0, 0,
      0, 8, 0, 0,
      0, 0, 6, 0,
      -12, -16, -18, 24
    ]
  });
});

QUnit.test('Matrix inverse', assert => {
  const a = mat(3, 3, [3, 0, 2, 2, 0, -2, 0, 1, 1]);
  const aInverse = mat.inv(a);
  assert.equal(aInverse.m, 3);
  assert.equal(aInverse.n, 3);
  const expectedEntries = [0.2, 0.2, 0, -0.2, 0.3, 1, 0.2, -0.3, 0];
  for (let i = 0; i < expectedEntries.length; i++) {
    assert.ok(floatEquals(aInverse.entries[i], expectedEntries[i], PRECISION));
  }

  // Invert a non-square matrix
  const b = mat(2, 3, [1, 2, 3, 4, 5, 6]);
  assert.equal(mat.inv(b), false);

  // Invert a singular/degenerate matrix
  const c = mat(2, 2, [3, 4, 6, 8]);
  assert.equal(mat.inv(c), false);
});

QUnit.test('Matrix inverse (even sizes)', assert => {
  // 2x2
  const a = mat(2, 2, [1, 2, 3, 4]);
  assertMatrixClose(assert, mat.inv(a), mat(2, 2, [-2, 1, 1.5, -0.5]), '2x2 inverse');

  // 4x4 translation by (5, -3, 2), inverse translates by (-5, 3, -2)
  const t = mat(4, 4, [
    1, 0, 0, 5,
    0, 1, 0, -3,
    0, 0, 1, 2,
    0, 0, 0, 1
  ]);
  assertMatrixClose(assert, mat.inv(t), mat(4, 4, [
    1, 0, 0, -5,
    0, 1, 0, 3,
    0, 0, 1, -2,
    0, 0, 0, 1
  ]), '4x4 translation inverse');

  // 4x4 rigid transform [R | t] with R a 90 degree rotation about z and
  // t = (1, 2, 3); inverse is [R^T | -R^T t] = [R^T | (-2, 1, -3)]
  const r90 = mat(4, 4, [
    0, -1, 0, 1,
    1, 0, 0, 2,
    0, 0, 1, 3,
    0, 0, 0, 1
  ]);
  assertMatrixClose(assert, mat.inv(r90), mat(4, 4, [
    0, 1, 0, -2,
    -1, 0, 0, 1,
    0, 0, 1, -3,
    0, 0, 0, 1
  ]), '4x4 rigid transform (90 degree z rotation) inverse');

  // 4x4 rigid transform with a general rotation (Rx(0.3) * Rz(0.7)) and
  // translation; compare against [R^T | -R^T t]
  const cx = Math.cos(0.3), sx = Math.sin(0.3);
  const cz = Math.cos(0.7), sz = Math.sin(0.7);
  const R = mat.mul(
    mat(3, 3, [1, 0, 0, 0, cx, -sx, 0, sx, cx]),
    mat(3, 3, [cz, -sz, 0, sz, cz, 0, 0, 0, 1])
  );
  const tv = [4, -1, 2.5];
  const rigid = mat(4, 4, [
    ...mat.row(R, 1), tv[0],
    ...mat.row(R, 2), tv[1],
    ...mat.row(R, 3), tv[2],
    0, 0, 0, 1
  ]);
  const Rt = mat.trans(R);
  const negRtT = mat.mulv(Rt, tv).map(v => -v);
  assertMatrixClose(assert, mat.inv(rigid), mat(4, 4, [
    ...mat.row(Rt, 1), negRtT[0],
    ...mat.row(Rt, 2), negRtT[1],
    ...mat.row(Rt, 3), negRtT[2],
    0, 0, 0, 1
  ]), '4x4 rigid transform (general rotation) inverse');
});

QUnit.test('Matrix inverse round-trips to identity', assert => {
  // Small deterministic PRNG so the test is reproducible
  let seed = 12345;
  const random = () => {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    return seed / 2147483648;
  };

  for (let n = 1; n <= 5; n++) {
    for (let k = 0; k < 5; k++) {
      // Random entries in [-5, 5), with a dominant diagonal so the matrix is
      // guaranteed to be non-singular
      const a = mat(n, n, times(
        i => (random() * 10 - 5) + (Math.floor(i / n) === i % n ? 6 * n : 0),
        n * n
      ));
      const aInverse = mat.inv(a);
      assert.ok(aInverse, `${n}x${n} matrix #${k} is invertible`);
      assertMatrixClose(assert, mat.mul(a, aInverse), mat.identity(n), `${n}x${n} a * inv(a) = I (#${k})`);
      assertMatrixClose(assert, mat.mul(aInverse, a), mat.identity(n), `${n}x${n} inv(a) * a = I (#${k})`);
    }
  }
});

QUnit.test('Matrix equality', assert => {
  const a = mat(2, 2, [1, 2, 3, 4]);
  const b = mat(2, 2, [1, 2, 3, 4]);
  const c = mat(2, 2, [1, 2, 3, 5]);
  const d = mat(3, 2, [1, 2, 3, 4]);
  assert.equal(mat.eq(a, b), true);
  assert.equal(mat.eq(b, c), false);
  assert.equal(mat.eq(b, d), false);
});

QUnit.test('Copy a matrix', assert => {
  const originalMatrix = mat(2, 2, [1, 2, 3, 4]);
  const copiedMatrix = mat.cpy(originalMatrix);
  assert.deepEqual(originalMatrix, copiedMatrix);

  // Make sure the copied matrix isn't still pointing at the original matrix
  mat.set(originalMatrix, 1, 1, 5);
  assert.equal(mat.get(copiedMatrix, 1, 1), 1);
});

QUnit.test('Mapping a matrix', assert => {
  const a = mat(2, 2, [1, 2, 3, 4]);
  assert.deepEqual(mat.map(a, v => v + 1), {
    m: 2,
    n: 2,
    entries: [2, 3, 4, 5]
  });
});

QUnit.test('Matrix string conversion', assert => {
  const a = mat(2, 2, [1, 2, 3, 4]);
  assert.equal(mat.str(a), '1, 2\n3, 4');
  assert.equal(mat.str(a, ' '), '1 2\n3 4');
  assert.equal(mat.str(a, '-', '--'), '1-2--3-4');
});

QUnit.test('Matrix-vector multiplication', assert => {
  // Multiply with vec3
  const m1 = mat(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const v1 = vec3(1, 2, 3);
  assert.deepEqual(mat.mulv(m1, v1), {
    x: 14,
    y: 32,
    z: 50,
  });

  // Multiply with vec2
  const m2 = mat(2, 2, [1, 2, 3, 4]);
  const v2 = vec2(1, 2);
  assert.deepEqual(mat.mulv(m2, v2), {
    x: 5,
    y: 11,
  });

  // Multiply with array
  const m3 = mat(2, 3, [1, 2, 3, 4, 5, 6]);
  const v3 = [1, 2, 3];
  assert.deepEqual(mat.mulv(m3, v3), [
    14,
    32,
  ]);

  // Invalid multiplication (dimension mismatch)
  const m4 = mat(2, 3, [1, 2, 3, 4, 5, 6]);
  const v4 = [1, 2];
  assert.equal(mat.mulv(m4, v4), false);
});
