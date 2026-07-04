---
name: basementuniverse-vec
description: >
  Use and troubleshoot the @basementuniverse/vec TypeScript library for
  immutable vector and matrix math in 2D and 3D. Use when implementing,
  debugging, or documenting geometry/math behaviour driven by this package.
---

# Basement Universe Vec

Use this skill when working with @basementuniverse/vec.

This package provides immutable operations for vec2, vec3, and mat values.
It is intended for game math, geometry helpers, coordinate transforms, and
linear algebra tasks where callers want plain objects and predictable returns.

## When to use

Use this skill for:

- Creating or updating vec2, vec3, or mat calculations.
- Choosing the right operation for arithmetic, rotation, swizzling, or
  coordinate conversion.
- Composing matrix and matrix-vector multiplication pipelines.
- Troubleshooting wrong dimensions, false-returning matrix operations, or
  unexpected rotation output.

Do not use this skill for:

- Rendering concerns (Canvas/WebGL draw loops, scene graph management,
  shaders, sprite batching).
- Physics or collision systems unrelated to the vector/matrix helpers in
  this package.

## Workflow

1. Identify math domain and data shape:
   - 2D values: vec2
   - 3D values: vec3
   - tabular linear algebra: mat
2. Confirm construction and dimensions early:
   - vec2 defaults to (0, 0)
   - vec3 defaults to (0, 0, 0)
   - mat defaults to a zero 4x4 matrix
3. Choose operation family:
   - component-wise/scalar arithmetic: add, sub, mul, div, scale
   - geometry: len, manhattan, nor, dot, cross
   - orientation/rotation: rot/rotf (vec2), rotx/roty/rotz/rotq/rota (vec3)
   - conversion: components, fromComponents, polar, fromPolar, swiz, str
   - matrix algebra: mul, mulv, trans, det, inv
4. Validate matrix constraints before calling:
   - add/sub require same dimensions
   - mul requires a.n === b.m
   - mulv requires a.n === vector length
   - minor/det/nor/inv require square matrices
5. Verify behavior assumptions with tests:
   - operations are immutable except mat.set (mutates)
   - many invalid matrix operations return false
   - matrix indexing helpers use 1-based row/column offsets

## Troubleshooting checklist

- Matrix method returns false:
  - check dimension compatibility (especially mat.mul and mat.mulv)
  - check square-matrix requirement for det/minor/nor/inv
- Vector looks unmodified:
  - ensure return value is assigned (operations return new objects)
  - do not expect in-place updates except mat.set
- Rotation output is unexpected:
  - verify radians (not degrees)
  - verify quaternion has 4 components for vec3.rotq
  - verify matrix orientation/order in vec3.rot and multiplication chains
- Swizzle output is surprising:
  - check aliases and negated labels (for example x/y/z vs X/Y/Z)
  - check '.' behavior (position-based fallback component)
- Angle/polar edge cases:
  - normalizing a zero-length vector returns zero vector
  - vec3.polar on zero vector can produce NaN angles

## References

- Public API surface: [references/api.md](references/api.md)
