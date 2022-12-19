/// <reference types="typescript" />

/**
 * A 2d vector
 * @typedef {Object} vec
 * @property {number} x The x component of the vector
 * @property {number} y The y component of the vector
 */
declare type vec = {
  x: number,
  y: number
}

/**
 * A function to call on each component of a vector
 * @callback vectorMapCallback
 * @param {number} value The component value
 * @param {'x' | 'y'} label The component label (x or y)
 * @return {number} The mapped component
 */
type vectorMapCallback = (i: number) => any;

declare const vec: {
  /**
   * Create a new vector
   * @param {number|vec} [x] The x component of the vector, or a vector to copy
   * @param {number} [y] The y component of the vector
   * @return {vec} A new vector
   * @example <caption>Various ways to initialise a vector</caption>
   * let a = vec(3, 2);  // (3, 2)
   * let b = vec(4);     // (4, 4)
   * let c = vec(a);     // (3, 2)
   * let d = vec();      // (0, 0)
   */
  (x?: number, y?: number): vec,

  /**
   * Get the components of a vector as an array
   * @param {vec} a The vector to get components from
   * @return {Array<number>} The vector components as an array
   */
  components(a: vec): Array<number>,

  /**
   * Return a unit vector (1, 0)
   * @return {vec} A unit vector (1, 0)
   */
  ux(): vec,

  /**
   * Return a unit vector (0, 1)
   * @return {vec} A unit vector (0, 1)
   */
  uy(): vec,

  /**
   * Add vectors
   * @param {vec} a Vector a
   * @param {vec} b Vector b
   * @return {vec} a + b
   */
  add(a: vec, b: vec): vec,

  /**
   * Scale a vector
   * @param {vec} a Vector a
   * @param {number} b Scalar b
   * @return {vec} a * b
   */
  mul(a: vec, b: number): vec,

  /**
   * Subtract vectors
   * @param {vec} a Vector a
   * @param {vec} b Vector b
   * @return {vec} a - b
   */
  sub(a: vec, b: vec): vec,

  /**
   * Get the length of a vector
   * @param {vec} a Vector a
   * @return {number} |a|
   */
  len(a: vec): number,

  /**
   * Get the length of a vector using taxicab geometry
   * @param {vec} a Vector a
   * @return {number} |a|
   */
  manhattan(a: vec): number,

  /**
   * Normalise a vector
   * @param {vec} a The vector to normalise
   * @return {vec} ^a
   */
  nor(a: vec): vec,

  /**
   * Get a dot product of vectors
   * @param {vec} a Vector a
   * @param {vec} b Vector b
   * @return {number} a ∙ b
   */
  dot(a: vec, b: vec): number,

  /**
   * Rotate a vector by r radians
   * @param {vec} a The vector to rotate
   * @param {number} r The angle to rotate by, measured in radians
   * @return {vec} A rotated vector
   */
  rot(a: vec, r: number): vec,

  /**
   * Check if two vectors are equal
   * @param {vec} a Vector a
   * @param {vec} b Vector b
   * @return {boolean} True if vectors a and b are equal, false otherwise
   */
  eq(a: vec, b: vec): boolean,

  /**
   * Get the angle of a vector
   * @param {vec} a Vector a
   * @return {number} The angle of vector a in radians
   */
  rad(a: vec): number,

  /**
   * Copy a vector
   * @param {vec} a The vector to copy
   * @return {vec} A copy of vector a
   */
  cpy(a: vec): vec,

  /**
   * Call a function on each component of a vector and build a new vector from the results
   * @param {vec} a Vector a
   * @param {vectorMapCallback} f The function to call on each component of the vector
   * @return {vec} Vector a mapped through f
   */
  map(a: vec, f: vectorMapCallback): vec,

  /**
   * Convert a vector into a string
   * @param {vec} a The vector to convert
   * @param {string} [s=', '] The separator string
   * @return {string} A string representation of the vector
   */
  str(a: vec, s?:string): string,
}

/**
 * A matrix
 * @typedef {Object} mat
 * @property {number} m The number of rows in the matrix
 * @property {number} n The number of columns in the matrix
 * @property {Array<number>} entries The matrix values
 */
declare type mat = {
  m: number,
  n: number,
  entries: Array<number>
}

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
  (m?: number, n?: number, entries?: Array<number>): mat,

  /**
   * Get an identity matrix of size n
   * @param {number} n The size of the matrix
   * @return {mat} An identity matrix
   */
  identity(n: number): mat,

  /**
   * Get an entry from a matrix
   * @param {mat} a Matrix a
   * @param {number} i The row offset
   * @param {number} j The column offset
   * @return {number} The value at position (i, j) in matrix a
   */
  get(a: mat, i: number, j: number): number,

  /**
   * Set an entry of a matrix
   * @param {mat} a Matrix a
   * @param {number} i The row offset
   * @param {number} j The column offset
   * @param {number} v The value to set in matrix a
   */
  set(a: mat, i: number, j: number, v: number): void,

  /**
   * Get a row from a matrix as an array
   * @param {mat} a Matrix a
   * @param {number} m The row offset
   * @return {Array<number>} Row m from matrix a
   */
  row(a: mat, m: number): Array<number>,

  /**
   * Get a column from a matrix as an array
   * @param {mat} a Matrix a
   * @param {number} n The column offset
   * @return {Array<number>} Column n from matrix a
   */
  col(a: mat, n: number): Array<number>,

  /**
   * Add matrices
   * @param {mat} a Matrix a
   * @param {mat} b Matrix b
   * @return {mat} a + b
   */
  add(a: mat, b: mat): mat,

  /**
   * Subtract matrices
   * @param {mat} a Matrix a
   * @param {mat} b Matrix b
   * @return {mat} a - b
   */
  sub(a: mat, b: mat): mat,

  /**
   * Multiply matrices
   * @param {mat} a Matrix a
   * @param {mat} b Matrix b
   * @return {mat|boolean} ab or false if the matrices cannot be multiplied
   */
  mul(a: mat, b: mat): mat | boolean,

  /**
   * Scale a matrix
   * @param {mat} a Matrix a
   * @param {number} b Scalar b
   * @return {mat} a * b
   */
  scale(a: mat, b: number): mat,

  /**
   * Transpose a matrix
   * @param {mat} a The matrix to transpose
   * @return {mat} A transposed matrix
   */
  trans(a: mat): mat,

  /**
   * Get the minor of a matrix
   * @param {mat} a Matrix a
   * @param {number} i The row offset
   * @param {number} j The column offset
   * @return {mat|boolean} The (i, j) minor of matrix a or false if the matrix is not square
   */
  minor(a: mat, i: number, j: number): mat | boolean,

  /**
   * Get the determinant of a matrix
   * @param {mat} a Matrix a
   * @return {number|boolean} |a| or false if the matrix is not square
   */
  det(a: mat): number | boolean,

  /**
   * Normalise a matrix
   * @param {mat} a The matrix to normalise
   * @return {mat|boolean} ^a or false if the matrix is not square
   */
  nor(a: mat): mat | boolean,

  /**
   * Get the adjugate of a matrix
   * @param {mat} a The matrix from which to get the adjugate
   * @return {mat} The adjugate of a
   */
  adj(a: mat): mat,

  /**
   * Get the inverse of a matrix
   * @param {mat} a The matrix to invert
   * @return {mat|boolean} a^-1 or false if the matrix has no inverse
   */
  inv(a: mat): mat | boolean,

  /**
   * Check if two matrices are equal
   * @param {mat} a Matrix a
   * @param {mat} b Matrix b
   * @return {boolean} True if matrices a and b are identical, false otherwise
   */
  eq(a: mat, b: mat): boolean,

  /**
   * Copy a matrix
   * @param {mat} a The matrix to copy
   * @return {mat} A copy of matrix a
   */
  cpy(a: mat): mat,

  /**
   * Call a function on each entry of a matrix and build a new matrix from the results
   * @param {mat} a Matrix a
   * @param {matrixMapCallback} f The function to call on each entry of the matrix
   * @return {mat} Matrix a mapped through f
   */
  map(a: mat, f: matrixMapCallback): mat,

  /**
   * Convert a matrix into a string
   * @param {mat} a The matrix to convert
   * @param {string} [ms=', '] The separator string for columns
   * @param {string} [ns='\n'] The separator string for rows
   * @return {string} A string representation of the matrix
   */
  str(a: mat, ms?: string, ns?: string): string,
}

export { vec, mat }
