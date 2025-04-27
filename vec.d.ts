/// <reference types="typescript" />

import { mat } from './vec';

/**
 * A 2d vector
 * @typedef {Object} vec2
 * @property {number} x The x component of the vector
 * @property {number} y The y component of the vector
 */
declare type vec2 = {
  x: number;
  y: number;
};

/**
 * A function to call on each component of a 2d vector
 * @callback vec2MapCallback
 * @param {number} value The component value
 * @param {'x' | 'y'} label The component label (x or y)
 * @return {number} The mapped component
 */
type vec2MapCallback = (i: number, label: 'x' | 'y') => number;

/**
 * Polar coordinates for a 2d vector
 * @typedef {Object} polarCoordinates2d
 * @property {number} r The magnitude (radius) of the vector
 * @property {number} theta The angle of the vector
 */
type polarCoordinates2d = {
  r: number;
  theta: number;
};

declare const vec2: {
  /**
   * Create a new 2d vector
   * @param {number|vec2} [x] The x component of the vector, or a vector to copy
   * @param {number} [y] The y component of the vector
   * @return {vec2} A new 2d vector
   * @example <caption>Various ways to initialise a vector</caption>
   * let a = vec2(3, 2); // (3, 2)
   * let b = vec2(4);    // (4, 4)
   * let c = vec2(a);    // (3, 2)
   * let d = vec2();     // (0, 0)
   */
  (x?: number | vec2, y?: number): vec2;

  /**
   * Get the components of a vector as an array
   * @param {vec2} a The vector to get components from
   * @return {Array<number>} The vector components as an array
   */
  components(a: vec2): Array<number>;

  /**
   * Create a vector from an array of components
   * @param {Array<number>} components The components of the vector
   * @return {vec2} A new vector
   */
  fromComponents(components: Array<number>): vec2;

  /**
   * Return a unit vector (1, 0)
   * @return {vec2} A unit vector (1, 0)
   */
  ux(): vec2;

  /**
   * Return a unit vector (0, 1)
   * @return {vec2} A unit vector (0, 1)
   */
  uy(): vec2;

  /**
   * Add vectors
   * @param {vec2} a Vector a
   * @param {vec2|number} b Vector or scalar b
   * @return {vec2} a + b
   */
  add(a: vec2, b: vec2 | number): vec2;

  /**
   * Subtract vectors
   * @param {vec2} a Vector a
   * @param {vec2|number} b Vector or scalar b
   * @return {vec2} a - b
   */
  sub(a: vec2, b: vec2 | number): vec2;

  /**
   * Scale a vector
   * @param {vec2} a Vector a
   * @param {vec2|number} b Vector or scalar b
   * @return {vec2} a * b
   */
  mul(a: vec2, b: vec2 | number): vec2;

  /**
   * Scale a vector by a scalar, alias for mul
   * @param {vec2} a Vector a
   * @param {number} b Scalar b
   * @return {vec2} a * b
   */
  scale(a: vec2, b: number): vec2;

  /**
   * Divide a vector
   * @param {vec2} a Vector a
   * @param {vec2|number} b Vector or scalar b
   * @return {vec2} a / b
   */
  div(a: vec2, b: vec2 | number): vec2;

  /**
   * Get the length of a vector
   * @param {vec2} a Vector a
   * @return {number} |a|
   */
  len(a: vec2): number;

  /**
   * Get the length of a vector using taxicab geometry
   * @param {vec2} a Vector a
   * @return {number} |a|
   */
  manhattan(a: vec2): number;

  /**
   * Normalise a vector
   * @param {vec2} a The vector to normalise
   * @return {vec2} ^a
   */
  nor(a: vec2): vec2;

  /**
   * Get a dot product of vectors
   * @param {vec2} a Vector a
   * @param {vec2} b Vector b
   * @return {number} a ∙ b
   */
  dot(a: vec2, b: vec2): number;

  /**
   * Rotate a vector by r radians
   * @param {vec2} a The vector to rotate
   * @param {number} r The angle to rotate by, measured in radians
   * @return {vec2} A rotated vector
   */
  rot(a: vec2, r: number): vec2;

  /**
   * Fast method to rotate a vector by -90, 90 or 180 degrees
   * @param {vec2} a The vector to rotate
   * @param {number} r 1 for 90 degrees (cw), -1 for -90 degrees (ccw), 2 or -2 for 180 degrees
   * @return {vec2} A rotated vector
   */
  rotf(a: vec2, r: number): vec2;

  /**
   * Scalar cross product of two vectors
   * @param {vec2} a Vector a
   * @param {vec2} b Vector b
   * @return {number} a × b
   */
  cross(a: vec2, b: vec2): number;

  /**
   * Check if two vectors are equal
   * @param {vec2} a Vector a
   * @param {vec2} b Vector b
   * @return {boolean} True if vectors a and b are equal, false otherwise
   */
  eq(a: vec2, b: vec2): boolean;

  /**
   * Get the angle of a vector
   * @param {vec2} a Vector a
   * @return {number} The angle of vector a in radians
   */
  rad(a: vec2): number;

  /**
   * Copy a vector
   * @param {vec2} a The vector to copy
   * @return {vec2} A copy of vector a
   */
  cpy(a: vec2): vec2;

  /**
   * Call a function on each component of a vector and build a new vector from the results
   * @param {vec2} a Vector a
   * @param {vec2MapCallback} f The function to call on each component of the vector
   * @return {vec2} Vector a mapped through f
   */
  map(a: vec2, f: vec2MapCallback): vec2;

  /**
   * Convert a vector into a string
   * @param {vec2} a The vector to convert
   * @param {string} [s=', '] The separator string
   * @return {string} A string representation of the vector
   */
  str(a: vec2, s?:string): string;

  /**
   * Swizzle a vector with a string of component labels
   *
   * The string can contain:
   * - `x` or `y`
   * - `u` or `v` (aliases for `x` and `y`, respectively)
   * - `X`, `Y`, `U`, `V` (negated versions of the above)
   * - `0` or `1` (these will be passed through unchanged)
   * - `.` to return the component that would normally be at this position (or 0)
   *
   * Any other characters will default to 0
   * @param {vec2} a The vector to swizzle
   * @param {string} [s='..'] The swizzle string
   * @return {Array<number>} The swizzled components
   * @example <caption>swizzling a vector</caption>
   * let a = vec2(3, -2);
   * vec2.swiz(a, 'x');    // [3]
   * vec2.swiz(a, 'yx');   // [-2, 3]
   * vec2.swiz(a, 'xY');   // [3, 2]
   * vec2.swiz(a, 'Yy');   // [2, -2]
   * vec2.swiz(a, 'x.x');  // [3, -2, 3]
   * vec2.swiz(a, 'y01x'); // [-2, 0, 1, 3]
   */
  swiz(a: vec2, s?: string): Array<number>;

  /**
   * Convert a vector into polar coordinates
   * @param {vec2} a The vector to convert
   * @return {polarCoordinates2d} The magnitude and angle of the vector
   */
  polar(a: vec2): polarCoordinates2d;

  /**
   * Convert polar coordinates into a vector
   * @param {number} r The magnitude (radius) of the vector
   * @param {number} theta The angle of the vector
   * @return {vec2} A vector with the given angle and magnitude
   */
  fromPolar(r: number, theta: number): vec2;
};

/**
 * A 3d vector
 * @typedef {Object} vec3
 * @property {number} x The x component of the vector
 * @property {number} y The y component of the vector
 * @property {number} z The z component of the vector
 */
declare type vec3 = {
  x: number;
  y: number;
  z: number;
};

/**
 * A function to call on each component of a 3d vector
 * @callback vec3MapCallback
 * @param {number} value The component value
 * @param {'x' | 'y'} label The component label (x, y or z)
 * @return {number} The mapped component
 */
type vec3MapCallback = (i: number, label: 'x' | 'y' | 'z') => number;

/**
 * Polar coordinates for a 3d vector
 * @typedef {Object} polarCoordinates3d
 * @property {number} r The magnitude (radius) of the vector
 * @property {number} theta The tilt angle of the vector
 * @property {number} phi The pan angle of the vector
 */
type polarCoordinates3d = {
  r: number;
  theta: number;
  phi: number;
};

declare const vec3: {
  /**
   * Create a new 3d vector
   * @param {number|vec3|vec2} [x] The x component of the vector, or a vector to copy
   * @param {number} [y] The y component of the vector, or the z component if x is a vec2
   * @param {number} [z] The z component of the vector
   * @return {vec3} A new 3d vector
   * @example <caption>Various ways to initialise a vector</caption>
   * let a = vec3(3, 2, 1);       // (3, 2, 1)
   * let b = vec3(4, 5);          // (4, 5, 0)
   * let c = vec3(6);             // (6, 6, 6)
   * let d = vec3(a);             // (3, 2, 1)
   * let e = vec3();              // (0, 0, 0)
   * let f = vec3(vec2(1, 2), 3); // (1, 2, 3)
   * let g = vec3(vec2(4, 5));    // (4, 5, 0)
   */
  (x?: number | vec3 | vec2, y?: number, z?: number): vec3;

  /**
   * Get the components of a vector as an array
   * @param {vec3} a The vector to get components from
   * @return {Array<number>} The vector components as an array
   */
  components(a: vec3): Array<number>;

  /**
   * Create a vector from an array of components
   * @param {Array<number>} components The components of the vector
   * @return {vec3} A new vector
   */
  fromComponents(components: Array<number>): vec3;

  /**
   * Return a unit vector (1, 0, 0)
   * @return {vec3} A unit vector (1, 0, 0)
   */
  ux(): vec3;

  /**
   * Return a unit vector (0, 1, 0)
   * @return {vec3} A unit vector (0, 1, 0)
   */
  uy(): vec3;

  /**
   * Return a unit vector (0, 0, 1)
   * @return {vec3} A unit vector (0, 0, 1)
   */
  uz(): vec3;

  /**
   * Add vectors
   * @param {vec3} a Vector a
   * @param {vec3|number} b Vector or scalar b
   * @return {vec3} a + b
   */
  add(a: vec3, b: vec3 | number): vec3;

  /**
   * Subtract vectors
   * @param {vec3} a Vector a
   * @param {vec3|number} b Vector or scalar b
   * @return {vec3} a - b
   */
  sub(a: vec3, b: vec3 | number): vec3;

  /**
   * Scale a vector
   * @param {vec3} a Vector a
   * @param {vec3|number} b Vector or scalar b
   * @return {vec3} a * b
   */
  mul(a: vec3, b: vec3 | number): vec3;

  /**
   * Scale a vector by a scalar, alias for mul
   * @param {vec3} a Vector a
   * @param {number} b Scalar b
   * @return {vec3} a * b
   */
  scale(a: vec3, b: number): vec3;

  /**
   * Divide a vector
   * @param {vec3} a Vector a
   * @param {vec3|number} b Vector or scalar b
   * @return {vec3} a / b
   */
  div(a: vec3, b: vec3 | number): vec3;

  /**
   * Get the length of a vector
   * @param {vec3} a Vector a
   * @return {number} |a|
   */
  len(a: vec3): number;

  /**
   * Get the length of a vector using taxicab geometry
   * @param {vec3} a Vector a
   * @return {number} |a|
   */
  manhattan(a: vec3): number;

  /**
   * Normalise a vector
   * @param {vec3} a The vector to normalise
   * @return {vec3} ^a
   */
  nor(a: vec3): vec3;

  /**
   * Get a dot product of vectors
   * @param {vec3} a Vector a
   * @param {vec3} b Vector b
   * @return {number} a ∙ b
   */
  dot(a: vec3, b: vec3): number;

  /**
   * Rotate a vector using a rotation matrix
   * @param {vec3} a The vector to rotate
   * @param {mat} m The rotation matrix
   * @return {vec3} A rotated vector
   */
  rot(a: vec3, m: mat): vec3;

  /**
   * Rotate a vector by r radians around the x axis
   * @param {vec3} a The vector to rotate
   * @param {number} r The angle to rotate by, measured in radians
   * @return {vec3} A rotated vector
   */
  rotx(a: vec3, r: number): vec3;

  /**
   * Rotate a vector by r radians around the y axis
   * @param {vec3} a The vector to rotate
   * @param {number} r The angle to rotate by, measured in radians
   * @return {vec3} A rotated vector
   */
  roty(a: vec3, r: number): vec3;

  /**
   * Rotate a vector by r radians around the z axis
   * @param {vec3} a The vector to rotate
   * @param {number} r The angle to rotate by, measured in radians
   * @return {vec3} A rotated vector
   */
  rotz(a: vec3, r: number): vec3;

  /**
   * Rotate a vector using a quaternion
   * @param {vec3} a The vector to rotate
   * @param {Array<number>} q The quaternion to rotate by
   * @return {vec3} A rotated vector
   */
  rotq(a: vec3, q: vec3): vec3;

  /**
   * Rotate a vector using Euler angles
   * @param {vec3} a The vector to rotate
   * @param {vec3} e The Euler angles to rotate by
   * @return {vec3} A rotated vector
   */
  rota(a: vec3, e: vec3): vec3;

  /**
   * Get the cross product of vectors
   * @param {vec3} a Vector a
   * @param {vec3} b Vector b
   * @return {vec3} a × b
   */
  cross(a: vec3, b: vec3): vec3;

  /**
   * Check if two vectors are equal
   * @param {vec3} a Vector a
   * @param {vec3} b Vector b
   * @return {boolean} True if vectors a and b are equal, false otherwise
   */
  eq(a: vec3, b: vec3): boolean;

  /**
   * Get the angle of a vector from the x axis
   * @param {vec3} a Vector a
   * @return {number} The angle of vector a in radians
   */
  radx(a: vec3): number;

  /**
   * Get the angle of a vector from the y axis
   * @param {vec3} a Vector a
   * @return {number} The angle of vector a in radians
   */
  rady(a: vec3): number;

  /**
   * Get the angle of a vector from the z axis
   * @param {vec3} a Vector a
   * @return {number} The angle of vector a in radians
   */
  radz(a: vec3): number;

  /**
   * Copy a vector
   * @param {vec3} a The vector to copy
   * @return {vec3} A copy of vector a
   */
  cpy(a: vec3): vec3;

  /**
   * Call a function on each component of a vector and build a new vector from the results
   * @param {vec3} a Vector a
   * @param {vec3MapCallback} f The function to call on each component of the vector
   * @return {vec3} Vector a mapped through f
   */
  map(a: vec3, f: vec3MapCallback): vec3;

  /**
   * Convert a vector into a string
   * @param {vec3} a The vector to convert
   * @param {string} [s=', '] The separator string
   * @return {string} A string representation of the vector
   */
  str(a: vec3, s?: string): string;

  /**
   * Swizzle a vector with a string of component labels
   *
   * The string can contain:
   * - `x`, `y` or `z`
   * - `u`, `v` or `w` (aliases for `x`, `y` and `z`, respectively)
   * - `r`, `g` or `b` (aliases for `x`, `y` and `z`, respectively)
   * - `X`, `Y`, `Z`, `U`, `V`, `W`, `R`, `G`, `B` (negated versions of the above)
   * - `0` or `1` (these will be passed through unchanged)
   * - `.` to return the component that would normally be at this position (or 0)
   *
   * Any other characters will default to 0
   * @param {vec3} a The vector to swizzle
   * @param {string} [s='...'] The swizzle string
   * @return {Array<number>} The swizzled components
   * @example <caption>swizzling a vector</caption>
   * let a = vec3(3, -2, 1);
   * vec3.swiz(a, 'x');     // [3]
   * vec3.swiz(a, 'zyx');   // [1, -2, 3]
   * vec3.swiz(a, 'xYZ');   // [3, 2, -1]
   * vec3.swiz(a, 'Zzx');   // [-1, 1, 3]
   * vec3.swiz(a, 'x.x');   // [3, -2, 3]
   * vec3.swiz(a, 'y01zx'); // [-2, 0, 1, 1, 3]
   */
  swiz(a: vec3, s?: string): Array<number>;

  /**
   * Convert a vector into polar coordinates
   * @param {vec3} a The vector to convert
   * @return {polarCoordinates3d} The magnitude, tilt and pan of the vector
   */
  polar(a: vec3): polarCoordinates3d;

  /**
   * Convert polar coordinates into a vector
   * @param {number} r The magnitude (radius) of the vector
   * @param {number} theta The tilt of the vector
   * @param {number} phi The pan of the vector
   * @return {vec3} A vector with the given angle and magnitude
   */
  fromPolar(r: number, theta: number, phi: number): vec3;
};

/**
 * A matrix
 * @typedef {Object} mat
 * @property {number} m The number of rows in the matrix
 * @property {number} n The number of columns in the matrix
 * @property {Array<number>} entries The matrix values
 */
declare type mat = {
  m: number;
  n: number;
  entries: Array<number>;
};

/**
 * A function to call on each entry of a matrix
 * @callback matrixMapCallback
 * @param {number} value The entry value
 * @param {number} index The entry index
 * @param {Array<number>} entries The array of matrix entries
 * @return {number} The mapped entry
 */
type matrixMapCallback = (value: number, index: number, entries: Array<number>) => any;

declare const mat: {
  /**
   * Create a new matrix
   * @param {number} [m=4] The number of rows
   * @param {number} [n=4] The number of columns
   * @param {Array<number>} [entries=[]] Matrix values in reading order
   * @return {mat} A new matrix
   */
  (m?: number, n?: number, entries?: Array<number>): mat;

  /**
   * Get an identity matrix of size n
   * @param {number} n The size of the matrix
   * @return {mat} An identity matrix
   */
  identity(n: number): mat;

  /**
   * Get an entry from a matrix
   * @param {mat} a Matrix a
   * @param {number} i The row offset
   * @param {number} j The column offset
   * @return {number} The value at position (i, j) in matrix a
   */
  get(a: mat, i: number, j: number): number;

  /**
   * Set an entry of a matrix
   * @param {mat} a Matrix a
   * @param {number} i The row offset
   * @param {number} j The column offset
   * @param {number} v The value to set in matrix a
   */
  set(a: mat, i: number, j: number, v: number): void;

  /**
   * Get a row from a matrix as an array
   * @param {mat} a Matrix a
   * @param {number} m The row offset
   * @return {Array<number>} Row m from matrix a
   */
  row(a: mat, m: number): Array<number>;

  /**
   * Get a column from a matrix as an array
   * @param {mat} a Matrix a
   * @param {number} n The column offset
   * @return {Array<number>} Column n from matrix a
   */
  col(a: mat, n: number): Array<number>;

  /**
   * Add matrices
   * @param {mat} a Matrix a
   * @param {mat} b Matrix b
   * @return {mat} a + b
   */
  add(a: mat, b: mat): mat;

  /**
   * Subtract matrices
   * @param {mat} a Matrix a
   * @param {mat} b Matrix b
   * @return {mat} a - b
   */
  sub(a: mat, b: mat): mat;

  /**
   * Multiply matrices
   * @param {mat} a Matrix a
   * @param {mat} b Matrix b
   * @return {mat|boolean} ab or false if the matrices cannot be multiplied
   */
  mul(a: mat, b: mat): mat | false;

  /**
   * Multiply a matrix by a vector
   * @param {mat} a Matrix a
   * @param {vec2|vec3|number[]} b Vector b
   * @return {mat|boolean} ab or false if the matrix and vector cannot be multiplied
   */
  mulv(a: mat, b: vec2 | vec3 | number[]): mat | false;

  /**
   * Scale a matrix
   * @param {mat} a Matrix a
   * @param {number} b Scalar b
   * @return {mat} a * b
   */
  scale(a: mat, b: number): mat;

  /**
   * Transpose a matrix
   * @param {mat} a The matrix to transpose
   * @return {mat} A transposed matrix
   */
  trans(a: mat): mat;

  /**
   * Get the minor of a matrix
   * @param {mat} a Matrix a
   * @param {number} i The row offset
   * @param {number} j The column offset
   * @return {mat|boolean} The (i, j) minor of matrix a or false if the matrix is not square
   */
  minor(a: mat, i: number, j: number): mat | boolean;

  /**
   * Get the determinant of a matrix
   * @param {mat} a Matrix a
   * @return {number|boolean} |a| or false if the matrix is not square
   */
  det(a: mat): number | boolean;

  /**
   * Normalise a matrix
   * @param {mat} a The matrix to normalise
   * @return {mat|boolean} ^a or false if the matrix is not square
   */
  nor(a: mat): mat | boolean;

  /**
   * Get the adjugate of a matrix
   * @param {mat} a The matrix from which to get the adjugate
   * @return {mat} The adjugate of a
   */
  adj(a: mat): mat;

  /**
   * Get the inverse of a matrix
   * @param {mat} a The matrix to invert
   * @return {mat|boolean} a^-1 or false if the matrix has no inverse
   */
  inv(a: mat): mat | boolean;

  /**
   * Check if two matrices are equal
   * @param {mat} a Matrix a
   * @param {mat} b Matrix b
   * @return {boolean} True if matrices a and b are identical, false otherwise
   */
  eq(a: mat, b: mat): boolean;

  /**
   * Copy a matrix
   * @param {mat} a The matrix to copy
   * @return {mat} A copy of matrix a
   */
  cpy(a: mat): mat;

  /**
   * Call a function on each entry of a matrix and build a new matrix from the results
   * @param {mat} a Matrix a
   * @param {matrixMapCallback} f The function to call on each entry of the matrix
   * @return {mat} Matrix a mapped through f
   */
  map(a: mat, f: matrixMapCallback): mat;

  /**
   * Convert a matrix into a string
   * @param {mat} a The matrix to convert
   * @param {string} [ms=', '] The separator string for columns
   * @param {string} [ns='\n'] The separator string for rows
   * @return {string} A string representation of the matrix
   */
  str(a: mat, ms?: string, ns?: string): string;
};

export { vec2, vec3, mat };
