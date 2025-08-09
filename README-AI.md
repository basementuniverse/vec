# @basementuniverse/vec library

This readme provides an overview of the `@basementuniverse/vec` library specifically for AI agents. When prompting an AI, include this file as context to ensure optimal usage of the library.

## Overview

A comprehensive vector and matrix library providing:

1. **2D Vectors (vec2)** - For 2D geometry, graphics, physics
2. **3D Vectors (vec3)** - For 3D geometry, graphics, physics
3. **Matrices (mat)** - For transformations, solving systems of equations

Key features:
- All operations are immutable (return new instances)
- Extensive vector operations (add, multiply, dot product, cross product, etc.)
- Complete matrix operations (multiply, transpose, inverse, determinant, etc.)
- Support for vector swizzling (like GLSL)
- Polar coordinate conversions
- Rotation utilities (Euler angles, quaternions, rotation matrices)

Example:
```ts
const a = vec2(1, 2);
const b = vec2(3, 4);
const c = vec2.add(a, b);
// a is still (1, 2)
// b is still (3, 4)
// c is a new vec2 instance (4, 6)
```

## Types

### vec2

```ts
type vec2 = {
  x: number;
  y: number;
};
```

### vec3

```ts
type vec3 = {
  x: number;
  y: number;
  z: number;
};
```

### mat

```ts
type mat = {
  m: number; // number of rows
  n: number; // number of columns
  entries: number[]; // flattened array of entries in row-major order
};
```

## Creating a new vec2

```ts
const a = vec2(); // default to (0, 0)
const b = vec2(1); // (1, 1)
const c = vec2(1, 2); // (1, 2)
const d = vec2({ x: 3, y: 4 }); // (3, 4)
const e = vec2(c); // create a copy of c, i.e. (1, 2)
```

## Operations on vec2

```ts
// Returns the components of the vec2 as an array
vec2.components(a: vec2): number[];

// Returns a new vec2 from an array of components
vec2.fromComponents(components: number[]): vec2;

// Returns a unit vector in the x direction
vec2.ux(): vec2;

// Returns a unit vector in the y direction
vec2.uy(): vec2;

// Adds two vectors or a vector and a scalar
vec2.add(a: vec2, b: vec2 | number): vec2;

// Subtracts two vectors or a scalar from a vector
vec2.sub(a: vec2, b: vec2 | number): vec2;

// Multiplies two vectors or a vector by a scalar
vec2.mul(a: vec2, b: vec2 | number): vec2;

// Alias for vec2.mul but only takes a vector and a scalar
vec2.scale(a: vec2, s: number): vec2;

// Divides two vectors or a vector by a scalar
vec2.div(a: vec2, b: vec2 | number): vec2;

// Returns the length of a vector
vec2.len(a: vec2): number;

// Returns the length of a vector using manhattan distance
vec2.manhattan(a: vec2): number;

// Normalises a vector to unit length
vec2.nor(a: vec2): number;

// Returns the dot product of two vectors
vec2.dot(a: vec2, b: vec2): number;

// Rotates a vector by a given angle in radians
vec2.rot(a: vec2, r: number): vec2;

// A fast method for rotating a vector -90, 90, or 180 degrees
// r can be -1, 1, or 2 respectively
vec2.rotf(a: vec2, r: number): vec2;

// Scalar cross product of two vectors
vec2.cross(a: vec2, b: vec2): number;

// Check if two vectors are equal
vec2.eq(a: vec2, b: vec2): boolean;

// Get the angle of a vector in radians
vec2.rad(a: vec2): number;

// Copy a vector
vec2.cpy(a: vec2): vec2;

// Call a function for each component of the vector
// The function receives the component value and its name ('x' or 'y')
vec2.map(a: vec2, fn: (x: number, component: string) => number): vec2;

// Convert a vector to a string representation
// Default separator is ", "
vec2.str(a: vec2, separator: string): string;

// Similar to "swizzling" in GLSL, allows you to extract components in any order, repeated, omitted, negated, etc.
// The swizzle string can contain:
// - `x` or `y`
// - `u` or `v` (aliases for `x` and `y`, respectively)
// - `X`, `Y`, `U`, `V` (negated versions of the above)
// - `0` or `1` (these will be passed through unchanged)
// - `.` to return the component that would normally be at this position (or 0)
vec2.swiz(a: vec2, swizzle: string): number[];

// Swizzle examples:
const a = vec2(1, 2);
vec2.swiz(a, 'xy'); // [1, 2]
vec2.swiz(a, 'yx'); // [2, 1]
vec2.swiz(a, 'x0'); // [1, 0]
vec2.swiz(a, '0y'); // [0, 2]
vec2.swiz(a, 'xX'); // [1, -1]
vec2.swiz(a, '0.'); // [0, 2] (the `.` returns the component that would normally be at this position)

// Convert a vector to polar coordinates
vec2.polar(a: vec2): { r: number; theta: number };

// Create a vector from polar coordinates
vec2.fromPolar(r: number; theta: number): vec2;
```

## Operations on vec3

```ts
// Returns the components of the vec3 as an array
vec3.components(a: vec3): number[];

// Returns a new vec3 from an array of components
vec3.fromComponents(components: number[]): vec3;

// Returns a unit vector in the x direction
vec3.ux(): vec3;

// Returns a unit vector in the y direction
vec3.uy(): vec3;

// Returns a unit vector in the z direction
vec3.uz(): vec3;

// Adds two vectors or a vector and a scalar
vec3.add(a: vec3, b: vec3 | number): vec3;

// Subtracts two vectors or a scalar from a vector
vec3.sub(a: vec3, b: vec3 | number): vec3;

// Multiplies two vectors or a vector by a scalar
vec3.mul(a: vec3, b: vec3 | number): vec3;

// Alias for vec3.mul but only takes a vector and a scalar
vec3.scale(a: vec3, s: number): vec3;

// Divides two vectors or a vector by a scalar
vec3.div(a: vec3, b: vec3 | number): vec3;

// Returns the length of a vector
vec3.len(a: vec3): number;

// Returns the length of a vector using manhattan distance
vec3.manhattan(a: vec3): number;

// Normalises a vector to unit length
vec3.nor(a: vec3): vec3;

// Returns the dot product of two vectors
vec3.dot(a: vec3, b: vec3): number;

// Rotate a vector using a rotation matrix
vec3.rot(a: vec3, m: mat): vec3;

// Rotate a vector by r radians around the x axis
vec3.rotx(a: vec3, r: number): vec3;

// Rotate a vector by r radians around the y axis
vec3.roty(a: vec3, r: number): vec3;

// Rotate a vector by r radians around the z axis
vec3.rotz(a: vec3, r: number): vec3;

// Rotate a vector using a quaternion
vec3.rotq(a: vec3, q: number[]): vec3;

// Rotate a vector using Euler angles (x, y, z)
vec3.rota(a: vec3, e: vec3): vec3;

// Returns the cross product of two vectors
vec3.cross(a: vec3, b: vec3): vec3;

// Check if two vectors are equal
vec3.eq(a: vec3, b: vec3): boolean;

// Get angle from x axis in radians
vec3.radx(a: vec3): number;

// Get angle from y axis in radians
vec3.rady(a: vec3): number;

// Get angle from z axis in radians
vec3.radz(a: vec3): number;

// Copy a vector
vec3.cpy(a: vec3): vec3;

// Call a function for each component of the vector
// The function receives the component value and its name ('x', 'y', or 'z')
vec3.map(a: vec3, fn: (x: number, component: string) => number): vec3;

// Convert a vector to a string representation
// Default separator is ", "
vec3.str(a: vec3, separator: string): string;

// Similar to "swizzling" in GLSL, allows you to extract components in any order, repeated, omitted, negated, etc.
// The swizzle string can contain:
// - `x`, `y`, or `z`
// - `u`, `v`, or `w` (aliases for `x`, `y`, and `z`, respectively)
// - `r`, `g`, or `b` (aliases for `x`, `y`, and `z`, respectively)
// - `X`, `Y`, `Z`, `U`, `V`, `W`, `R`, `G`, `B` (negated versions of the above)
// - `0` or `1` (these will be passed through unchanged)
// - `.` to return the component that would normally be at this position (or 0)
vec3.swiz(a: vec3, swizzle: string): number[];

// Convert a vector to spherical coordinates
vec3.polar(a: vec3): { r: number; theta: number; phi: number };

// Create a vector from spherical coordinates
vec3.fromPolar(r: number, theta: number, phi: number): vec3;

// Example usage:
const a = vec3(1, 2, 3);       // (1, 2, 3)
const b = vec3(4, 5);          // (4, 5, 0)
const c = vec3(6);             // (6, 6, 6)
const d = vec3(a);             // (1, 2, 3)
const e = vec3();              // (0, 0, 0)
const f = vec3(vec2(1, 2), 3); // (1, 2, 3)
const g = vec3(vec2(4, 5));    // (4, 5, 0)

// Swizzle examples:
vec3.swiz(a, 'xyz');   // [1, 2, 3]
vec3.swiz(a, 'zyx');   // [3, 2, 1]
vec3.swiz(a, 'xYZ');   // [1, -2, -3]
vec3.swiz(a, 'Zzx');   // [-3, 3, 1]
vec3.swiz(a, 'x.x');   // [1, 2, 1]
vec3.swiz(a, 'y01zx'); // [2, 0, 1, 3, 1]
```

## Operations on mat

```ts
// Create a new matrix
// If entries is shorter than m*n, remaining entries are filled with 0
const m = mat(m: number = 4, n: number = 4, entries: number[] = []): mat;

// Create an identity matrix of size n
mat.identity(n: number): mat;

// Get an entry from the matrix at position (i,j) (1-based indices)
mat.get(a: mat, i: number, j: number): number;

// Set an entry in the matrix at position (i,j) (1-based indices)
mat.set(a: mat, i: number, j: number, v: number): void;

// Get a row from the matrix as an array (1-based index)
mat.row(a: mat, m: number): number[];

// Get a column from the matrix as an array (1-based index)
mat.col(a: mat, n: number): number[];

// Add two matrices
// Returns false if dimensions don't match
mat.add(a: mat, b: mat): mat | false;

// Subtract two matrices
// Returns false if dimensions don't match
mat.sub(a: mat, b: mat): mat | false;

// Multiply two matrices
// Returns false if dimensions don't allow multiplication
mat.mul(a: mat, b: mat): mat | false;

// Multiply a matrix by a vector
// Returns false if dimensions don't match
mat.mulv(a: mat, b: vec2 | vec3 | number[]): vec2 | vec3 | number[] | false;

// Scale a matrix by a scalar
mat.scale(a: mat, b: number): mat;

// Transpose a matrix
mat.trans(a: mat): mat;

// Get the minor of a matrix
// Returns false if matrix is not square
mat.minor(a: mat, i: number, j: number): mat | false;

// Get the determinant of a matrix
// Returns false if matrix is not square
mat.det(a: mat): number | false;

// Normalize a matrix
// Returns false if matrix is not square
mat.nor(a: mat): mat | false;

// Get the adjugate of a matrix
mat.adj(a: mat): mat;

// Get the inverse of a matrix
// Returns false if matrix has no inverse
mat.inv(a: mat): mat | false;

// Check if two matrices are equal
mat.eq(a: mat, b: mat): boolean;

// Copy a matrix
mat.cpy(a: mat): mat;

// Call a function for each entry of the matrix
mat.map(a: mat, fn: (value: number, index: number, entries: number[]) => number): mat;

// Convert a matrix to a string representation
// Default separators are ", " for columns and "\n" for rows
mat.str(a: mat, columnSeparator?: string, rowSeparator?: string): string;

// Example usage:
const m = mat(2, 2, [1, 2, 3, 4]); // 2x2 matrix: [[1, 2], [3, 4]]
const i = mat.identity(2); // 2x2 identity matrix: [[1, 0], [0, 1]]
const v = mat.mulv(m, vec2(5, 6)); // Multiply matrix by vector
const t = mat.trans(m); // Transpose: [[1, 3], [2, 4]]
const d = mat.det(m); // Determinant: -2
const inv = mat.inv(m); // Inverse: [[-2, 1], [1.5, -0.5]]

// Matrix chain multiplication example:
const result = mat.mul(mat.mul(a, b), c); // (AB)C
```
