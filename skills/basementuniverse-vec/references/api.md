# @basementuniverse/vec API Reference

Implementation and type information in this reference is based on:

- vec.js
- vec.d.ts
- README.md
- README-AI.md
- test suite in test/

## Import and exports

Node (CommonJS):

```js
const { vec2, vec3, mat, isVec2, isVec3, isMat } = require('@basementuniverse/vec');
```

TypeScript / ESM-style import:

```ts
import { vec2, vec3, mat, isVec2, isVec3, isMat } from '@basementuniverse/vec';
```

## Core shapes

- vec2: { x: number, y: number }
- vec3: { x: number, y: number, z: number }
- mat: { m: number, n: number, entries: number[] }

Notes:

- Matrix entries are flattened in row-major order.
- Most operations are immutable and return new values.
- mat.set is intentionally mutable and updates the provided matrix in place.

## Type guards

- isVec2(value): boolean
- isVec3(value): boolean
- isMat(value): boolean

## vec2

Constructor:

- vec2(x?: number | vec2, y?: number): vec2
- vec2(): { x: 0, y: 0 }
- vec2(n): { x: n, y: n }
- vec2(vec2): copy

Statics and methods:

- vec2.components(a): number[]
- vec2.fromComponents(components): vec2
- vec2.ux(): vec2
- vec2.uy(): vec2
- vec2.add(a, b): vec2 where b is vec2 or number
- vec2.addm(...v): vec2
- vec2.sub(a, b): vec2 where b is vec2 or number
- vec2.subm(...v): vec2
- vec2.mul(a, b): vec2 where b is vec2 or number
- vec2.scale(a, s): vec2
- vec2.div(a, b): vec2 where b is vec2 or number
- vec2.len(a): number
- vec2.manhattan(a): number
- vec2.nor(a): vec2
- vec2.dot(a, b): number
- vec2.rot(a, r): vec2 (radians)
- vec2.rotf(a, r): vec2 where r in { 1, -1, 2, -2 } for fast right-angle turns
- vec2.cross(a, b): number (scalar cross product)
- vec2.eq(a, b): boolean
- vec2.rad(a): number
- vec2.cpy(a): vec2
- vec2.map(a, fn): vec2
- vec2.str(a, separator?): string (default ", ")
- vec2.swiz(a, swizzle?): number[] (default "..")
- vec2.polar(a): { r: number, theta: number }
- vec2.fromPolar(r, theta): vec2

Swizzle tokens for vec2:

- x y
- u v aliases for x y
- X Y U V negated aliases
- 0 1 literal passthroughs
- . position-based fallback component (or 0)

## vec3

Constructor:

- vec3(x?: number | vec3 | vec2, y?: number, z?: number): vec3
- vec3(): { x: 0, y: 0, z: 0 }
- vec3(n): { x: n, y: n, z: n }
- vec3(vec3): copy
- vec3(vec2, z?): promotes 2D vector

Statics and methods:

- vec3.components(a): number[]
- vec3.fromComponents(components): vec3
- vec3.ux(): vec3
- vec3.uy(): vec3
- vec3.uz(): vec3
- vec3.add(a, b): vec3 where b is vec3 or number
- vec3.addm(...v): vec3
- vec3.sub(a, b): vec3 where b is vec3 or number
- vec3.subm(...v): vec3
- vec3.mul(a, b): vec3 where b is vec3 or number
- vec3.scale(a, s): vec3
- vec3.div(a, b): vec3 where b is vec3 or number
- vec3.len(a): number
- vec3.manhattan(a): number
- vec3.nor(a): vec3
- vec3.dot(a, b): number
- vec3.rot(a, m): vec3 (matrix-based)
- vec3.rotx(a, r): vec3
- vec3.roty(a, r): vec3
- vec3.rotz(a, r): vec3
- vec3.rotq(a, q): vec3 where q is a 4-number quaternion array
- vec3.rota(a, e): vec3 (Euler angles as vec3)
- vec3.cross(a, b): vec3
- vec3.eq(a, b): boolean
- vec3.radx(a): number
- vec3.rady(a): number
- vec3.radz(a): number
- vec3.cpy(a): vec3
- vec3.map(a, fn): vec3
- vec3.str(a, separator?): string (default ", ")
- vec3.swiz(a, swizzle?): number[] (default "...")
- vec3.polar(a): { r: number, theta: number, phi: number }
- vec3.fromPolar(r, theta, phi): vec3

Swizzle tokens for vec3:

- x y z
- u v w aliases for x y z
- r g b aliases for x y z
- X Y Z U V W R G B negated aliases
- 0 1 literal passthroughs
- . position-based fallback component (or 0)

## mat

Constructor:

- mat(m = 4, n = 4, entries = []): mat
- Missing entries are padded with 0.
- Extra entries are truncated to m * n.

Methods:

- mat.identity(n): mat
- mat.get(a, i, j): number
- mat.set(a, i, j, v): void (mutates a)
- mat.row(a, m): number[]
- mat.col(a, n): number[]
- mat.add(a, b): mat | false
- mat.sub(a, b): mat | false
- mat.mul(a, b): mat | false
- mat.mulv(a, b): vec2 | vec3 | number[] | false
- mat.scale(a, s): mat
- mat.trans(a): mat
- mat.minor(a, i, j): mat | false
- mat.det(a): number | false
- mat.nor(a): mat | false
- mat.adj(a): mat
- mat.inv(a): mat | false
- mat.eq(a, b): boolean
- mat.cpy(a): mat
- mat.map(a, fn): mat
- mat.str(a, columnSeparator = ", ", rowSeparator = "\n"): string

Important conventions:

- mat.get/mat.set/mat.row/mat.col use 1-based row and column indices.
- mat.mul returns false when a.n !== b.m.
- mat.mulv returns false when a.n does not match input vector length.
- mat.minor, mat.det, mat.nor, mat.inv require square matrices.
- mat.inv also returns false for singular matrices (determinant 0).

About mat.nor:

- mat.nor scales each entry by determinant.
- It does not return a unit/orthonormal matrix.

## Behavior notes and edge cases

- vec2.nor and vec3.nor return zero vectors when input length is zero.
- vec3.rotq returns zero vector for invalid quaternions (length not 4 or zero norm).
- vec3.polar on zero vector can produce NaN for angles because r is zero.
- Equality checks are strict component checks (no epsilon tolerance).

## Quick patterns

Add and normalize in 2D:

```ts
const v = vec2.nor(vec2.add(vec2(1, 2), vec2(3, 4)));
```

Rotate in 3D with Euler angles:

```ts
const v = vec3.rota(vec3(1, 0, 0), vec3(0, 0, Math.PI / 2));
```

Multiply matrix by vector:

```ts
const m = mat(2, 2, [1, 2, 3, 4]);
const out = mat.mulv(m, vec2(5, 6));
```
