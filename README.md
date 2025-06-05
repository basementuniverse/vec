# vec

A small vector and matrix library.

Includes 2d vectors, 3d vectors, and matrices of any size.

Vectors and matrices are generally immutable; operations will return new instances.

## Installation

```bash
npm i @basementuniverse/vec
```

## Usage

Node:

```javascript
const { vec2, vec3, mat } = require('@basementuniverse/vec');
```

Browser:

```html
<script src="vec.js"></script>
```

Typescript:

```typescript
import { vec2, vec3, mat } from '@basementuniverse/vec';
```

## Contents

* [vec2](#vec2)
* [vec3](#vec3)
* [mat](#mat)

## Functions

<dl>
<dt><a href="#vec2">vec2([x], [y])</a> ⇒ <code><a href="#vec2">vec2</a></code></dt>
<dd><p>Create a new 2d vector</p>
</dd>
<dt><a href="#vec3">vec3([x], [y], [z])</a> ⇒ <code><a href="#vec3">vec3</a></code></dt>
<dd><p>Create a new 3d vector</p>
</dd>
<dt><a href="#mat">mat([m], [n], [entries])</a> ⇒ <code><a href="#mat">mat</a></code></dt>
<dd><p>Create a new matrix</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#vec2">vec2</a> : <code>Object</code></dt>
<dd><p>A 2d vector</p>
</dd>
<dt><a href="#vec2MapCallback">vec2MapCallback</a> ⇒ <code>number</code></dt>
<dd><p>A function to call on each component of a 2d vector</p>
</dd>
<dt><a href="#polarCoordinates2d">polarCoordinates2d</a> : <code>Object</code></dt>
<dd><p>Polar coordinates for a 2d vector</p>
</dd>
<dt><a href="#vec3">vec3</a> : <code>Object</code></dt>
<dd><p>A 3d vector</p>
</dd>
<dt><a href="#vec3MapCallback">vec3MapCallback</a> ⇒ <code>number</code></dt>
<dd><p>A function to call on each component of a 3d vector</p>
</dd>
<dt><a href="#polarCoordinates3d">polarCoordinates3d</a> : <code>Object</code></dt>
<dd><p>Polar coordinates for a 3d vector</p>
</dd>
<dt><a href="#mat">mat</a> : <code>Object</code></dt>
<dd><p>A matrix</p>
</dd>
<dt><a href="#matrixMapCallback">matrixMapCallback</a> ⇒ <code>number</code></dt>
<dd><p>A function to call on each entry of a matrix</p>
</dd>
</dl>

<a name="vec2"></a>

## vec2([x], [y]) ⇒ [<code>vec2</code>](#vec2)
Create a new 2d vector

**Kind**: global function  
**Returns**: [<code>vec2</code>](#vec2) - A new 2d vector  

| Param | Type | Description |
| --- | --- | --- |
| [x] | <code>number</code> \| [<code>vec2</code>](#vec2) | The x component of the vector, or a vector to copy |
| [y] | <code>number</code> | The y component of the vector |

**Example** *(various ways to initialise a vector)*  
```js
let a = vec2(3, 2); // (3, 2)
let b = vec2(4);    // (4, 4)
let c = vec2(a);    // (3, 2)
let d = vec2();     // (0, 0)
```

* [vec2([x], [y])](#vec2) ⇒ [<code>vec2</code>](#vec2)
    * [.components(a)](#vec2.components) ⇒ <code>Array.&lt;number&gt;</code>
    * [.fromComponents(components)](#vec2.fromComponents) ⇒ [<code>vec2</code>](#vec2)
    * [.ux()](#vec2.ux) ⇒ [<code>vec2</code>](#vec2)
    * [.uy()](#vec2.uy) ⇒ [<code>vec2</code>](#vec2)
    * [.add(a, b)](#vec2.add) ⇒ [<code>vec2</code>](#vec2)
    * [.sub(a, b)](#vec2.sub) ⇒ [<code>vec2</code>](#vec2)
    * [.mul(a, b)](#vec2.mul) ⇒ [<code>vec2</code>](#vec2)
    * [.scale(a, b)](#vec2.scale) ⇒ [<code>vec2</code>](#vec2)
    * [.div(a, b)](#vec2.div) ⇒ [<code>vec2</code>](#vec2)
    * [.len(a)](#vec2.len) ⇒ <code>number</code>
    * [.manhattan(a)](#vec2.manhattan) ⇒ <code>number</code>
    * [.nor(a)](#vec2.nor) ⇒ [<code>vec2</code>](#vec2)
    * [.dot(a, b)](#vec2.dot) ⇒ <code>number</code>
    * [.rot(a, r)](#vec2.rot) ⇒ [<code>vec2</code>](#vec2)
    * [.rotf(a, r)](#vec2.rotf) ⇒ [<code>vec2</code>](#vec2)
    * [.cross(a, b)](#vec2.cross) ⇒ <code>number</code>
    * [.eq(a, b)](#vec2.eq) ⇒ <code>boolean</code>
    * [.rad(a)](#vec2.rad) ⇒ <code>number</code>
    * [.cpy(a)](#vec2.cpy) ⇒ [<code>vec2</code>](#vec2)
    * [.map(a, f)](#vec2.map) ⇒ [<code>vec2</code>](#vec2)
    * [.str(a, [s])](#vec2.str) ⇒ <code>string</code>
    * [.swiz(a, [s])](#vec2.swiz) ⇒ <code>Array.&lt;number&gt;</code>
    * [.polar(a)](#vec2.polar) ⇒ [<code>polarCoordinates2d</code>](#polarCoordinates2d)
    * [.fromPolar(r, theta)](#vec2.fromPolar) ⇒ [<code>vec2</code>](#vec2)

<a name="vec2.components"></a>

### vec2.components(a) ⇒ <code>Array.&lt;number&gt;</code>
Get the components of a vector as an array

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: <code>Array.&lt;number&gt;</code> - The vector components as an array  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | The vector to get components from |

<a name="vec2.fromComponents"></a>

### vec2.fromComponents(components) ⇒ [<code>vec2</code>](#vec2)
Create a vector from an array of components

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>vec2</code>](#vec2) - A new vector  

| Param | Type | Description |
| --- | --- | --- |
| components | <code>Array.&lt;number&gt;</code> | The components of the vector |

<a name="vec2.ux"></a>

### vec2.ux() ⇒ [<code>vec2</code>](#vec2)
Return a unit vector (1, 0)

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>vec2</code>](#vec2) - A unit vector (1, 0)  
<a name="vec2.uy"></a>

### vec2.uy() ⇒ [<code>vec2</code>](#vec2)
Return a unit vector (0, 1)

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>vec2</code>](#vec2) - A unit vector (0, 1)  
<a name="vec2.add"></a>

### vec2.add(a, b) ⇒ [<code>vec2</code>](#vec2)
Add vectors

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>vec2</code>](#vec2) - a + b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | Vector a |
| b | [<code>vec2</code>](#vec2) \| <code>number</code> | Vector or scalar b |

<a name="vec2.sub"></a>

### vec2.sub(a, b) ⇒ [<code>vec2</code>](#vec2)
Subtract vectors

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>vec2</code>](#vec2) - a - b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | Vector a |
| b | [<code>vec2</code>](#vec2) \| <code>number</code> | Vector or scalar b |

<a name="vec2.mul"></a>

### vec2.mul(a, b) ⇒ [<code>vec2</code>](#vec2)
Scale a vector

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>vec2</code>](#vec2) - a * b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | Vector a |
| b | [<code>vec2</code>](#vec2) \| <code>number</code> | Vector or scalar b |

<a name="vec2.scale"></a>

### vec2.scale(a, b) ⇒ [<code>vec2</code>](#vec2)
Scale a vector by a scalar, alias for vec2.mul

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>vec2</code>](#vec2) - a * b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | Vector a |
| b | <code>number</code> | Scalar b |

<a name="vec2.div"></a>

### vec2.div(a, b) ⇒ [<code>vec2</code>](#vec2)
Divide a vector

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>vec2</code>](#vec2) - a / b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | Vector a |
| b | [<code>vec2</code>](#vec2) \| <code>number</code> | Vector or scalar b |

<a name="vec2.len"></a>

### vec2.len(a) ⇒ <code>number</code>
Get the length of a vector

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: <code>number</code> - |a|  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | Vector a |

<a name="vec2.manhattan"></a>

### vec2.manhattan(a) ⇒ <code>number</code>
Get the length of a vector using taxicab geometry

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: <code>number</code> - |a|  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | Vector a |

<a name="vec2.nor"></a>

### vec2.nor(a) ⇒ [<code>vec2</code>](#vec2)
Normalise a vector

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>vec2</code>](#vec2) - ^a  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | The vector to normalise |

<a name="vec2.dot"></a>

### vec2.dot(a, b) ⇒ <code>number</code>
Get a dot product of vectors

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: <code>number</code> - a ∙ b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | Vector a |
| b | [<code>vec2</code>](#vec2) | Vector b |

<a name="vec2.rot"></a>

### vec2.rot(a, r) ⇒ [<code>vec2</code>](#vec2)
Rotate a vector by r radians

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>vec2</code>](#vec2) - A rotated vector  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | The vector to rotate |
| r | <code>number</code> | The angle to rotate by, measured in radians |

<a name="vec2.rotf"></a>

### vec2.rotf(a, r) ⇒ [<code>vec2</code>](#vec2)
Fast method to rotate a vector by -90, 90 or 180 degrees

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>vec2</code>](#vec2) - A rotated vector  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | The vector to rotate |
| r | <code>number</code> | 1 for 90 degrees (cw), -1 for -90 degrees (ccw), 2 or -2 for 180 degrees |

<a name="vec2.cross"></a>

### vec2.cross(a, b) ⇒ <code>number</code>
Scalar cross product of two vectors

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: <code>number</code> - a × b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | Vector a |
| b | [<code>vec2</code>](#vec2) | Vector b |

<a name="vec2.eq"></a>

### vec2.eq(a, b) ⇒ <code>boolean</code>
Check if two vectors are equal

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: <code>boolean</code> - True if vectors a and b are equal, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | Vector a |
| b | [<code>vec2</code>](#vec2) | Vector b |

<a name="vec2.rad"></a>

### vec2.rad(a) ⇒ <code>number</code>
Get the angle of a vector

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: <code>number</code> - The angle of vector a in radians  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | Vector a |

<a name="vec2.cpy"></a>

### vec2.cpy(a) ⇒ [<code>vec2</code>](#vec2)
Copy a vector

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>vec2</code>](#vec2) - A copy of vector a  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | The vector to copy |

<a name="vec2.map"></a>

### vec2.map(a, f) ⇒ [<code>vec2</code>](#vec2)
Call a function on each component of a vector and build a new vector from the results

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>vec2</code>](#vec2) - Vector a mapped through f  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | Vector a |
| f | [<code>vec2MapCallback</code>](#vec2MapCallback) | The function to call on each component of the vector |

<a name="vec2.str"></a>

### vec2.str(a, [s]) ⇒ <code>string</code>
Convert a vector into a string

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: <code>string</code> - A string representation of the vector  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| a | [<code>vec2</code>](#vec2) |  | The vector to convert |
| [s] | <code>string</code> | <code>&quot;&#x27;, &#x27;&quot;</code> | The separator string |

<a name="vec2.swiz"></a>

### vec2.swiz(a, [s]) ⇒ <code>Array.&lt;number&gt;</code>
Swizzle a vector with a string of component labels

The string can contain:
- `x` or `y`
- `u` or `v` (aliases for `x` and `y`, respectively)
- `X`, `Y`, `U`, `V` (negated versions of the above)
- `0` or `1` (these will be passed through unchanged)
- `.` to return the component that would normally be at this position (or 0)

Any other characters will default to 0

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: <code>Array.&lt;number&gt;</code> - The swizzled components  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| a | [<code>vec2</code>](#vec2) |  | The vector to swizzle |
| [s] | <code>string</code> | <code>&quot;&#x27;..&#x27;&quot;</code> | The swizzle string |

**Example** *(swizzling a vector)*  
```js
let a = vec2(3, -2);
vec2.swiz(a, 'x');    // [3]
vec2.swiz(a, 'yx');   // [-2, 3]
vec2.swiz(a, 'xY');   // [3, 2]
vec2.swiz(a, 'Yy');   // [2, -2]
vec2.swiz(a, 'x.x');  // [3, -2, 3]
vec2.swiz(a, 'y01x'); // [-2, 0, 1, 3]
```
<a name="vec2.polar"></a>

### vec2.polar(a) ⇒ [<code>polarCoordinates2d</code>](#polarCoordinates2d)
Convert a vector into polar coordinates

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>polarCoordinates2d</code>](#polarCoordinates2d) - The magnitude and angle of the vector  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | The vector to convert |

<a name="vec2.fromPolar"></a>

### vec2.fromPolar(r, theta) ⇒ [<code>vec2</code>](#vec2)
Convert polar coordinates into a vector

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>vec2</code>](#vec2) - A vector with the given angle and magnitude  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | The magnitude (radius) of the vector |
| theta | <code>number</code> | The angle of the vector |

<a name="vec3"></a>

## vec3([x], [y], [z]) ⇒ [<code>vec3</code>](#vec3)
Create a new 3d vector

**Kind**: global function  
**Returns**: [<code>vec3</code>](#vec3) - A new 3d vector  

| Param | Type | Description |
| --- | --- | --- |
| [x] | <code>number</code> \| [<code>vec3</code>](#vec3) \| [<code>vec2</code>](#vec2) | The x component of the vector, or a vector to copy |
| [y] | <code>number</code> | The y component of the vector, or the z component if x is a vec2 |
| [z] | <code>number</code> | The z component of the vector |

**Example** *(various ways to initialise a vector)*  
```js
let a = vec3(3, 2, 1);       // (3, 2, 1)
let b = vec3(4, 5);          // (4, 5, 0)
let c = vec3(6);             // (6, 6, 6)
let d = vec3(a);             // (3, 2, 1)
let e = vec3();              // (0, 0, 0)
let f = vec3(vec2(1, 2), 3); // (1, 2, 3)
let g = vec3(vec2(4, 5));    // (4, 5, 0)
```

* [vec3([x], [y], [z])](#vec3) ⇒ [<code>vec3</code>](#vec3)
    * [.components(a)](#vec3.components) ⇒ <code>Array.&lt;number&gt;</code>
    * [.fromComponents(components)](#vec3.fromComponents) ⇒ [<code>vec3</code>](#vec3)
    * [.ux()](#vec3.ux) ⇒ [<code>vec3</code>](#vec3)
    * [.uy()](#vec3.uy) ⇒ [<code>vec3</code>](#vec3)
    * [.uz()](#vec3.uz) ⇒ [<code>vec3</code>](#vec3)
    * [.add(a, b)](#vec3.add) ⇒ [<code>vec3</code>](#vec3)
    * [.sub(a, b)](#vec3.sub) ⇒ [<code>vec3</code>](#vec3)
    * [.mul(a, b)](#vec3.mul) ⇒ [<code>vec3</code>](#vec3)
    * [.scale(a, b)](#vec3.scale) ⇒ [<code>vec3</code>](#vec3)
    * [.div(a, b)](#vec3.div) ⇒ [<code>vec3</code>](#vec3)
    * [.len(a)](#vec3.len) ⇒ <code>number</code>
    * [.manhattan(a)](#vec3.manhattan) ⇒ <code>number</code>
    * [.nor(a)](#vec3.nor) ⇒ [<code>vec3</code>](#vec3)
    * [.dot(a, b)](#vec3.dot) ⇒ <code>number</code>
    * [.rot(a, m)](#vec3.rot) ⇒ [<code>vec3</code>](#vec3)
    * [.rotx(a, r)](#vec3.rotx) ⇒ [<code>vec3</code>](#vec3)
    * [.roty(a, r)](#vec3.roty) ⇒ [<code>vec3</code>](#vec3)
    * [.rotz(a, r)](#vec3.rotz) ⇒ [<code>vec3</code>](#vec3)
    * [.rotq(a, q)](#vec3.rotq) ⇒ [<code>vec3</code>](#vec3)
    * [.rota(a, e)](#vec3.rota) ⇒ [<code>vec3</code>](#vec3)
    * [.cross(a, b)](#vec3.cross) ⇒ [<code>vec3</code>](#vec3)
    * [.eq(a, b)](#vec3.eq) ⇒ <code>boolean</code>
    * [.radx(a)](#vec3.radx) ⇒ <code>number</code>
    * [.rady(a)](#vec3.rady) ⇒ <code>number</code>
    * [.radz(a)](#vec3.radz) ⇒ <code>number</code>
    * [.cpy(a)](#vec3.cpy) ⇒ [<code>vec3</code>](#vec3)
    * [.map(a, f)](#vec3.map) ⇒ [<code>vec3</code>](#vec3)
    * [.str(a, [s])](#vec3.str) ⇒ <code>string</code>
    * [.swiz(a, [s])](#vec3.swiz) ⇒ <code>Array.&lt;number&gt;</code>
    * [.polar(a)](#vec3.polar) ⇒ [<code>polarCoordinates3d</code>](#polarCoordinates3d)
    * [.fromPolar(r, theta, phi)](#vec3.fromPolar) ⇒ [<code>vec3</code>](#vec3)

<a name="vec3.components"></a>

### vec3.components(a) ⇒ <code>Array.&lt;number&gt;</code>
Get the components of a vector as an array

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: <code>Array.&lt;number&gt;</code> - The vector components as an array  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | The vector to get components from |

<a name="vec3.fromComponents"></a>

### vec3.fromComponents(components) ⇒ [<code>vec3</code>](#vec3)
Create a vector from an array of components

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - A new vector  

| Param | Type | Description |
| --- | --- | --- |
| components | <code>Array.&lt;number&gt;</code> | The components of the vector |

<a name="vec3.ux"></a>

### vec3.ux() ⇒ [<code>vec3</code>](#vec3)
Return a unit vector (1, 0, 0)

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - A unit vector (1, 0, 0)  
<a name="vec3.uy"></a>

### vec3.uy() ⇒ [<code>vec3</code>](#vec3)
Return a unit vector (0, 1, 0)

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - A unit vector (0, 1, 0)  
<a name="vec3.uz"></a>

### vec3.uz() ⇒ [<code>vec3</code>](#vec3)
Return a unit vector (0, 0, 1)

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - A unit vector (0, 0, 1)  
<a name="vec3.add"></a>

### vec3.add(a, b) ⇒ [<code>vec3</code>](#vec3)
Add vectors

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - a + b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | Vector a |
| b | [<code>vec3</code>](#vec3) \| <code>number</code> | Vector or scalar b |

<a name="vec3.sub"></a>

### vec3.sub(a, b) ⇒ [<code>vec3</code>](#vec3)
Subtract vectors

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - a - b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | Vector a |
| b | [<code>vec3</code>](#vec3) \| <code>number</code> | Vector or scalar b |

<a name="vec3.mul"></a>

### vec3.mul(a, b) ⇒ [<code>vec3</code>](#vec3)
Scale a vector

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - a * b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | Vector a |
| b | [<code>vec3</code>](#vec3) \| <code>number</code> | Vector or scalar b |

<a name="vec3.scale"></a>

### vec3.scale(a, b) ⇒ [<code>vec3</code>](#vec3)
Scale a vector by a scalar, alias for vec3.mul

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - a * b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | Vector a |
| b | <code>number</code> | Scalar b |

<a name="vec3.div"></a>

### vec3.div(a, b) ⇒ [<code>vec3</code>](#vec3)
Divide a vector

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - a / b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | Vector a |
| b | [<code>vec3</code>](#vec3) \| <code>number</code> | Vector or scalar b |

<a name="vec3.len"></a>

### vec3.len(a) ⇒ <code>number</code>
Get the length of a vector

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: <code>number</code> - |a|  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | Vector a |

<a name="vec3.manhattan"></a>

### vec3.manhattan(a) ⇒ <code>number</code>
Get the length of a vector using taxicab geometry

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: <code>number</code> - |a|  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | Vector a |

<a name="vec3.nor"></a>

### vec3.nor(a) ⇒ [<code>vec3</code>](#vec3)
Normalise a vector

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - ^a  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | The vector to normalise |

<a name="vec3.dot"></a>

### vec3.dot(a, b) ⇒ <code>number</code>
Get a dot product of vectors

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: <code>number</code> - a ∙ b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | Vector a |
| b | [<code>vec3</code>](#vec3) | Vector b |

<a name="vec3.rot"></a>

### vec3.rot(a, m) ⇒ [<code>vec3</code>](#vec3)
Rotate a vector using a rotation matrix

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - A rotated vector  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | The vector to rotate |
| m | [<code>mat</code>](#mat) | The rotation matrix |

<a name="vec3.rotx"></a>

### vec3.rotx(a, r) ⇒ [<code>vec3</code>](#vec3)
Rotate a vector by r radians around the x axis

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - A rotated vector  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | The vector to rotate |
| r | <code>number</code> | The angle to rotate by, measured in radians |

<a name="vec3.roty"></a>

### vec3.roty(a, r) ⇒ [<code>vec3</code>](#vec3)
Rotate a vector by r radians around the y axis

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - A rotated vector  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | The vector to rotate |
| r | <code>number</code> | The angle to rotate by, measured in radians |

<a name="vec3.rotz"></a>

### vec3.rotz(a, r) ⇒ [<code>vec3</code>](#vec3)
Rotate a vector by r radians around the z axis

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - A rotated vector  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | The vector to rotate |
| r | <code>number</code> | The angle to rotate by, measured in radians |

<a name="vec3.rotq"></a>

### vec3.rotq(a, q) ⇒ [<code>vec3</code>](#vec3)
Rotate a vector using a quaternion

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - A rotated vector  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | The vector to rotate |
| q | <code>Array.&lt;number&gt;</code> | The quaternion to rotate by |

<a name="vec3.rota"></a>

### vec3.rota(a, e) ⇒ [<code>vec3</code>](#vec3)
Rotate a vector using Euler angles

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - A rotated vector  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | The vector to rotate |
| e | [<code>vec3</code>](#vec3) | The Euler angles to rotate by |

<a name="vec3.cross"></a>

### vec3.cross(a, b) ⇒ [<code>vec3</code>](#vec3)
Get the cross product of vectors

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - a × b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | Vector a |
| b | [<code>vec3</code>](#vec3) | Vector b |

<a name="vec3.eq"></a>

### vec3.eq(a, b) ⇒ <code>boolean</code>
Check if two vectors are equal

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: <code>boolean</code> - True if vectors a and b are equal, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | Vector a |
| b | [<code>vec3</code>](#vec3) | Vector b |

<a name="vec3.radx"></a>

### vec3.radx(a) ⇒ <code>number</code>
Get the angle of a vector from the x axis

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: <code>number</code> - The angle of vector a in radians  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | Vector a |

<a name="vec3.rady"></a>

### vec3.rady(a) ⇒ <code>number</code>
Get the angle of a vector from the y axis

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: <code>number</code> - The angle of vector a in radians  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | Vector a |

<a name="vec3.radz"></a>

### vec3.radz(a) ⇒ <code>number</code>
Get the angle of a vector from the z axis

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: <code>number</code> - The angle of vector a in radians  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | Vector a |

<a name="vec3.cpy"></a>

### vec3.cpy(a) ⇒ [<code>vec3</code>](#vec3)
Copy a vector

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - A copy of vector a  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | The vector to copy |

<a name="vec3.map"></a>

### vec3.map(a, f) ⇒ [<code>vec3</code>](#vec3)
Call a function on each component of a vector and build a new vector from the results

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - Vector a mapped through f  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | Vector a |
| f | [<code>vec3MapCallback</code>](#vec3MapCallback) | The function to call on each component of the vector |

<a name="vec3.str"></a>

### vec3.str(a, [s]) ⇒ <code>string</code>
Convert a vector into a string

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: <code>string</code> - A string representation of the vector  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| a | [<code>vec3</code>](#vec3) |  | The vector to convert |
| [s] | <code>string</code> | <code>&quot;&#x27;, &#x27;&quot;</code> | The separator string |

<a name="vec3.swiz"></a>

### vec3.swiz(a, [s]) ⇒ <code>Array.&lt;number&gt;</code>
Swizzle a vector with a string of component labels

The string can contain:
- `x`, `y` or `z`
- `u`, `v` or `w` (aliases for `x`, `y` and `z`, respectively)
- `r`, `g` or `b` (aliases for `x`, `y` and `z`, respectively)
- `X`, `Y`, `Z`, `U`, `V`, `W`, `R`, `G`, `B` (negated versions of the above)
- `0` or `1` (these will be passed through unchanged)
- `.` to return the component that would normally be at this position (or 0)

Any other characters will default to 0

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: <code>Array.&lt;number&gt;</code> - The swizzled components  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| a | [<code>vec3</code>](#vec3) |  | The vector to swizzle |
| [s] | <code>string</code> | <code>&quot;&#x27;...&#x27;&quot;</code> | The swizzle string |

**Example** *(swizzling a vector)*  
```js
let a = vec3(3, -2, 1);
vec3.swiz(a, 'x');     // [3]
vec3.swiz(a, 'zyx');   // [1, -2, 3]
vec3.swiz(a, 'xYZ');   // [3, 2, -1]
vec3.swiz(a, 'Zzx');   // [-1, 1, 3]
vec3.swiz(a, 'x.x');   // [3, -2, 3]
vec3.swiz(a, 'y01zx'); // [-2, 0, 1, 1, 3]
```
<a name="vec3.polar"></a>

### vec3.polar(a) ⇒ [<code>polarCoordinates3d</code>](#polarCoordinates3d)
Convert a vector into polar coordinates

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>polarCoordinates3d</code>](#polarCoordinates3d) - The magnitude, tilt and pan of the vector  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | The vector to convert |

<a name="vec3.fromPolar"></a>

### vec3.fromPolar(r, theta, phi) ⇒ [<code>vec3</code>](#vec3)
Convert polar coordinates into a vector

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - A vector with the given angle and magnitude  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | The magnitude (radius) of the vector |
| theta | <code>number</code> | The tilt of the vector |
| phi | <code>number</code> | The pan of the vector |

<a name="mat"></a>

## mat([m], [n], [entries]) ⇒ [<code>mat</code>](#mat)
Create a new matrix

**Kind**: global function  
**Returns**: [<code>mat</code>](#mat) - A new matrix  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [m] | <code>number</code> | <code>4</code> | The number of rows |
| [n] | <code>number</code> | <code>4</code> | The number of columns |
| [entries] | <code>Array.&lt;number&gt;</code> | <code>[]</code> | Matrix values in reading order |


* [mat([m], [n], [entries])](#mat) ⇒ [<code>mat</code>](#mat)
    * [.identity(n)](#mat.identity) ⇒ [<code>mat</code>](#mat)
    * [.get(a, i, j)](#mat.get) ⇒ <code>number</code>
    * [.set(a, i, j, v)](#mat.set)
    * [.row(a, m)](#mat.row) ⇒ <code>Array.&lt;number&gt;</code>
    * [.col(a, n)](#mat.col) ⇒ <code>Array.&lt;number&gt;</code>
    * [.add(a, b)](#mat.add) ⇒ [<code>mat</code>](#mat)
    * [.sub(a, b)](#mat.sub) ⇒ [<code>mat</code>](#mat)
    * [.mul(a, b)](#mat.mul) ⇒ [<code>mat</code>](#mat) \| <code>false</code>
    * [.mulv(a, b)](#mat.mulv) ⇒ [<code>vec2</code>](#vec2) \| [<code>vec3</code>](#vec3) \| <code>Array.&lt;number&gt;</code> \| <code>false</code>
    * [.scale(a, b)](#mat.scale) ⇒ [<code>mat</code>](#mat)
    * [.trans(a)](#mat.trans) ⇒ [<code>mat</code>](#mat)
    * [.minor(a, i, j)](#mat.minor) ⇒ [<code>mat</code>](#mat) \| <code>false</code>
    * [.det(a)](#mat.det) ⇒ <code>number</code> \| <code>false</code>
    * [.nor(a)](#mat.nor) ⇒ [<code>mat</code>](#mat) \| <code>false</code>
    * [.adj(a)](#mat.adj) ⇒ [<code>mat</code>](#mat)
    * [.inv(a)](#mat.inv) ⇒ [<code>mat</code>](#mat) \| <code>false</code>
    * [.eq(a, b)](#mat.eq) ⇒ <code>boolean</code>
    * [.cpy(a)](#mat.cpy) ⇒ [<code>mat</code>](#mat)
    * [.map(a, f)](#mat.map) ⇒ [<code>mat</code>](#mat)
    * [.str(a, [ms], [ns])](#mat.str) ⇒ <code>string</code>

<a name="mat.identity"></a>

### mat.identity(n) ⇒ [<code>mat</code>](#mat)
Get an identity matrix of size n

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) - An identity matrix  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | The size of the matrix |

<a name="mat.get"></a>

### mat.get(a, i, j) ⇒ <code>number</code>
Get an entry from a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: <code>number</code> - The value at position (i, j) in matrix a  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |
| i | <code>number</code> | The row offset |
| j | <code>number</code> | The column offset |

<a name="mat.set"></a>

### mat.set(a, i, j, v)
Set an entry of a matrix

**Kind**: static method of [<code>mat</code>](#mat)  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |
| i | <code>number</code> | The row offset |
| j | <code>number</code> | The column offset |
| v | <code>number</code> | The value to set in matrix a |

<a name="mat.row"></a>

### mat.row(a, m) ⇒ <code>Array.&lt;number&gt;</code>
Get a row from a matrix as an array

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: <code>Array.&lt;number&gt;</code> - Row m from matrix a  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |
| m | <code>number</code> | The row offset |

<a name="mat.col"></a>

### mat.col(a, n) ⇒ <code>Array.&lt;number&gt;</code>
Get a column from a matrix as an array

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: <code>Array.&lt;number&gt;</code> - Column n from matrix a  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |
| n | <code>number</code> | The column offset |

<a name="mat.add"></a>

### mat.add(a, b) ⇒ [<code>mat</code>](#mat)
Add matrices

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) - a + b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |
| b | [<code>mat</code>](#mat) | Matrix b |

<a name="mat.sub"></a>

### mat.sub(a, b) ⇒ [<code>mat</code>](#mat)
Subtract matrices

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) - a - b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |
| b | [<code>mat</code>](#mat) | Matrix b |

<a name="mat.mul"></a>

### mat.mul(a, b) ⇒ [<code>mat</code>](#mat) \| <code>false</code>
Multiply matrices

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) \| <code>false</code> - ab or false if the matrices cannot be multiplied  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |
| b | [<code>mat</code>](#mat) | Matrix b |

<a name="mat.mulv"></a>

### mat.mulv(a, b) ⇒ [<code>vec2</code>](#vec2) \| [<code>vec3</code>](#vec3) \| <code>Array.&lt;number&gt;</code> \| <code>false</code>
Multiply a matrix by a vector

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>vec2</code>](#vec2) \| [<code>vec3</code>](#vec3) \| <code>Array.&lt;number&gt;</code> \| <code>false</code> - ab or false if the matrix and vector cannot be multiplied  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |
| b | [<code>vec2</code>](#vec2) \| [<code>vec3</code>](#vec3) \| <code>Array.&lt;number&gt;</code> | Vector b |

<a name="mat.scale"></a>

### mat.scale(a, b) ⇒ [<code>mat</code>](#mat)
Scale a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) - a * b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |
| b | <code>number</code> | Scalar b |

<a name="mat.trans"></a>

### mat.trans(a) ⇒ [<code>mat</code>](#mat)
Transpose a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) - A transposed matrix  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | The matrix to transpose |

<a name="mat.minor"></a>

### mat.minor(a, i, j) ⇒ [<code>mat</code>](#mat) \| <code>false</code>
Get the minor of a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) \| <code>false</code> - The (i, j) minor of matrix a or false if the matrix is not square  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |
| i | <code>number</code> | The row offset |
| j | <code>number</code> | The column offset |

<a name="mat.det"></a>

### mat.det(a) ⇒ <code>number</code> \| <code>false</code>
Get the determinant of a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: <code>number</code> \| <code>false</code> - |a| or false if the matrix is not square  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |

<a name="mat.nor"></a>

### mat.nor(a) ⇒ [<code>mat</code>](#mat) \| <code>false</code>
Normalise a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) \| <code>false</code> - ^a or false if the matrix is not square  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | The matrix to normalise |

<a name="mat.adj"></a>

### mat.adj(a) ⇒ [<code>mat</code>](#mat)
Get the adjugate of a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) - The adjugate of a  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | The matrix from which to get the adjugate |

<a name="mat.inv"></a>

### mat.inv(a) ⇒ [<code>mat</code>](#mat) \| <code>false</code>
Get the inverse of a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) \| <code>false</code> - a^-1 or false if the matrix has no inverse  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | The matrix to invert |

<a name="mat.eq"></a>

### mat.eq(a, b) ⇒ <code>boolean</code>
Check if two matrices are equal

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: <code>boolean</code> - True if matrices a and b are identical, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |
| b | [<code>mat</code>](#mat) | Matrix b |

<a name="mat.cpy"></a>

### mat.cpy(a) ⇒ [<code>mat</code>](#mat)
Copy a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) - A copy of matrix a  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | The matrix to copy |

<a name="mat.map"></a>

### mat.map(a, f) ⇒ [<code>mat</code>](#mat)
Call a function on each entry of a matrix and build a new matrix from the results

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) - Matrix a mapped through f  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |
| f | [<code>matrixMapCallback</code>](#matrixMapCallback) | The function to call on each entry of the matrix |

<a name="mat.str"></a>

### mat.str(a, [ms], [ns]) ⇒ <code>string</code>
Convert a matrix into a string

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: <code>string</code> - A string representation of the matrix  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| a | [<code>mat</code>](#mat) |  | The matrix to convert |
| [ms] | <code>string</code> | <code>&quot;&#x27;, &#x27;&quot;</code> | The separator string for columns |
| [ns] | <code>string</code> | <code>&quot;&#x27;\\n&#x27;&quot;</code> | The separator string for rows |

<a name="vec2"></a>

## vec2 : <code>Object</code>
A 2d vector

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The x component of the vector |
| y | <code>number</code> | The y component of the vector |


* [vec2](#vec2) : <code>Object</code>
    * [.components(a)](#vec2.components) ⇒ <code>Array.&lt;number&gt;</code>
    * [.fromComponents(components)](#vec2.fromComponents) ⇒ [<code>vec2</code>](#vec2)
    * [.ux()](#vec2.ux) ⇒ [<code>vec2</code>](#vec2)
    * [.uy()](#vec2.uy) ⇒ [<code>vec2</code>](#vec2)
    * [.add(a, b)](#vec2.add) ⇒ [<code>vec2</code>](#vec2)
    * [.sub(a, b)](#vec2.sub) ⇒ [<code>vec2</code>](#vec2)
    * [.mul(a, b)](#vec2.mul) ⇒ [<code>vec2</code>](#vec2)
    * [.scale(a, b)](#vec2.scale) ⇒ [<code>vec2</code>](#vec2)
    * [.div(a, b)](#vec2.div) ⇒ [<code>vec2</code>](#vec2)
    * [.len(a)](#vec2.len) ⇒ <code>number</code>
    * [.manhattan(a)](#vec2.manhattan) ⇒ <code>number</code>
    * [.nor(a)](#vec2.nor) ⇒ [<code>vec2</code>](#vec2)
    * [.dot(a, b)](#vec2.dot) ⇒ <code>number</code>
    * [.rot(a, r)](#vec2.rot) ⇒ [<code>vec2</code>](#vec2)
    * [.rotf(a, r)](#vec2.rotf) ⇒ [<code>vec2</code>](#vec2)
    * [.cross(a, b)](#vec2.cross) ⇒ <code>number</code>
    * [.eq(a, b)](#vec2.eq) ⇒ <code>boolean</code>
    * [.rad(a)](#vec2.rad) ⇒ <code>number</code>
    * [.cpy(a)](#vec2.cpy) ⇒ [<code>vec2</code>](#vec2)
    * [.map(a, f)](#vec2.map) ⇒ [<code>vec2</code>](#vec2)
    * [.str(a, [s])](#vec2.str) ⇒ <code>string</code>
    * [.swiz(a, [s])](#vec2.swiz) ⇒ <code>Array.&lt;number&gt;</code>
    * [.polar(a)](#vec2.polar) ⇒ [<code>polarCoordinates2d</code>](#polarCoordinates2d)
    * [.fromPolar(r, theta)](#vec2.fromPolar) ⇒ [<code>vec2</code>](#vec2)

<a name="vec2.components"></a>

### vec2.components(a) ⇒ <code>Array.&lt;number&gt;</code>
Get the components of a vector as an array

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: <code>Array.&lt;number&gt;</code> - The vector components as an array  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | The vector to get components from |

<a name="vec2.fromComponents"></a>

### vec2.fromComponents(components) ⇒ [<code>vec2</code>](#vec2)
Create a vector from an array of components

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>vec2</code>](#vec2) - A new vector  

| Param | Type | Description |
| --- | --- | --- |
| components | <code>Array.&lt;number&gt;</code> | The components of the vector |

<a name="vec2.ux"></a>

### vec2.ux() ⇒ [<code>vec2</code>](#vec2)
Return a unit vector (1, 0)

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>vec2</code>](#vec2) - A unit vector (1, 0)  
<a name="vec2.uy"></a>

### vec2.uy() ⇒ [<code>vec2</code>](#vec2)
Return a unit vector (0, 1)

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>vec2</code>](#vec2) - A unit vector (0, 1)  
<a name="vec2.add"></a>

### vec2.add(a, b) ⇒ [<code>vec2</code>](#vec2)
Add vectors

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>vec2</code>](#vec2) - a + b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | Vector a |
| b | [<code>vec2</code>](#vec2) \| <code>number</code> | Vector or scalar b |

<a name="vec2.sub"></a>

### vec2.sub(a, b) ⇒ [<code>vec2</code>](#vec2)
Subtract vectors

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>vec2</code>](#vec2) - a - b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | Vector a |
| b | [<code>vec2</code>](#vec2) \| <code>number</code> | Vector or scalar b |

<a name="vec2.mul"></a>

### vec2.mul(a, b) ⇒ [<code>vec2</code>](#vec2)
Scale a vector

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>vec2</code>](#vec2) - a * b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | Vector a |
| b | [<code>vec2</code>](#vec2) \| <code>number</code> | Vector or scalar b |

<a name="vec2.scale"></a>

### vec2.scale(a, b) ⇒ [<code>vec2</code>](#vec2)
Scale a vector by a scalar, alias for vec2.mul

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>vec2</code>](#vec2) - a * b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | Vector a |
| b | <code>number</code> | Scalar b |

<a name="vec2.div"></a>

### vec2.div(a, b) ⇒ [<code>vec2</code>](#vec2)
Divide a vector

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>vec2</code>](#vec2) - a / b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | Vector a |
| b | [<code>vec2</code>](#vec2) \| <code>number</code> | Vector or scalar b |

<a name="vec2.len"></a>

### vec2.len(a) ⇒ <code>number</code>
Get the length of a vector

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: <code>number</code> - |a|  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | Vector a |

<a name="vec2.manhattan"></a>

### vec2.manhattan(a) ⇒ <code>number</code>
Get the length of a vector using taxicab geometry

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: <code>number</code> - |a|  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | Vector a |

<a name="vec2.nor"></a>

### vec2.nor(a) ⇒ [<code>vec2</code>](#vec2)
Normalise a vector

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>vec2</code>](#vec2) - ^a  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | The vector to normalise |

<a name="vec2.dot"></a>

### vec2.dot(a, b) ⇒ <code>number</code>
Get a dot product of vectors

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: <code>number</code> - a ∙ b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | Vector a |
| b | [<code>vec2</code>](#vec2) | Vector b |

<a name="vec2.rot"></a>

### vec2.rot(a, r) ⇒ [<code>vec2</code>](#vec2)
Rotate a vector by r radians

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>vec2</code>](#vec2) - A rotated vector  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | The vector to rotate |
| r | <code>number</code> | The angle to rotate by, measured in radians |

<a name="vec2.rotf"></a>

### vec2.rotf(a, r) ⇒ [<code>vec2</code>](#vec2)
Fast method to rotate a vector by -90, 90 or 180 degrees

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>vec2</code>](#vec2) - A rotated vector  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | The vector to rotate |
| r | <code>number</code> | 1 for 90 degrees (cw), -1 for -90 degrees (ccw), 2 or -2 for 180 degrees |

<a name="vec2.cross"></a>

### vec2.cross(a, b) ⇒ <code>number</code>
Scalar cross product of two vectors

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: <code>number</code> - a × b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | Vector a |
| b | [<code>vec2</code>](#vec2) | Vector b |

<a name="vec2.eq"></a>

### vec2.eq(a, b) ⇒ <code>boolean</code>
Check if two vectors are equal

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: <code>boolean</code> - True if vectors a and b are equal, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | Vector a |
| b | [<code>vec2</code>](#vec2) | Vector b |

<a name="vec2.rad"></a>

### vec2.rad(a) ⇒ <code>number</code>
Get the angle of a vector

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: <code>number</code> - The angle of vector a in radians  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | Vector a |

<a name="vec2.cpy"></a>

### vec2.cpy(a) ⇒ [<code>vec2</code>](#vec2)
Copy a vector

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>vec2</code>](#vec2) - A copy of vector a  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | The vector to copy |

<a name="vec2.map"></a>

### vec2.map(a, f) ⇒ [<code>vec2</code>](#vec2)
Call a function on each component of a vector and build a new vector from the results

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>vec2</code>](#vec2) - Vector a mapped through f  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | Vector a |
| f | [<code>vec2MapCallback</code>](#vec2MapCallback) | The function to call on each component of the vector |

<a name="vec2.str"></a>

### vec2.str(a, [s]) ⇒ <code>string</code>
Convert a vector into a string

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: <code>string</code> - A string representation of the vector  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| a | [<code>vec2</code>](#vec2) |  | The vector to convert |
| [s] | <code>string</code> | <code>&quot;&#x27;, &#x27;&quot;</code> | The separator string |

<a name="vec2.swiz"></a>

### vec2.swiz(a, [s]) ⇒ <code>Array.&lt;number&gt;</code>
Swizzle a vector with a string of component labels

The string can contain:
- `x` or `y`
- `u` or `v` (aliases for `x` and `y`, respectively)
- `X`, `Y`, `U`, `V` (negated versions of the above)
- `0` or `1` (these will be passed through unchanged)
- `.` to return the component that would normally be at this position (or 0)

Any other characters will default to 0

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: <code>Array.&lt;number&gt;</code> - The swizzled components  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| a | [<code>vec2</code>](#vec2) |  | The vector to swizzle |
| [s] | <code>string</code> | <code>&quot;&#x27;..&#x27;&quot;</code> | The swizzle string |

**Example** *(swizzling a vector)*  
```js
let a = vec2(3, -2);
vec2.swiz(a, 'x');    // [3]
vec2.swiz(a, 'yx');   // [-2, 3]
vec2.swiz(a, 'xY');   // [3, 2]
vec2.swiz(a, 'Yy');   // [2, -2]
vec2.swiz(a, 'x.x');  // [3, -2, 3]
vec2.swiz(a, 'y01x'); // [-2, 0, 1, 3]
```
<a name="vec2.polar"></a>

### vec2.polar(a) ⇒ [<code>polarCoordinates2d</code>](#polarCoordinates2d)
Convert a vector into polar coordinates

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>polarCoordinates2d</code>](#polarCoordinates2d) - The magnitude and angle of the vector  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec2</code>](#vec2) | The vector to convert |

<a name="vec2.fromPolar"></a>

### vec2.fromPolar(r, theta) ⇒ [<code>vec2</code>](#vec2)
Convert polar coordinates into a vector

**Kind**: static method of [<code>vec2</code>](#vec2)  
**Returns**: [<code>vec2</code>](#vec2) - A vector with the given angle and magnitude  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | The magnitude (radius) of the vector |
| theta | <code>number</code> | The angle of the vector |

<a name="vec2MapCallback"></a>

## vec2MapCallback ⇒ <code>number</code>
A function to call on each component of a 2d vector

**Kind**: global typedef  
**Returns**: <code>number</code> - The mapped component  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The component value |
| label | <code>&#x27;x&#x27;</code> \| <code>&#x27;y&#x27;</code> | The component label (x or y) |

<a name="polarCoordinates2d"></a>

## polarCoordinates2d : <code>Object</code>
Polar coordinates for a 2d vector

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | The magnitude (radius) of the vector |
| theta | <code>number</code> | The angle of the vector |

<a name="vec3"></a>

## vec3 : <code>Object</code>
A 3d vector

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The x component of the vector |
| y | <code>number</code> | The y component of the vector |
| z | <code>number</code> | The z component of the vector |


* [vec3](#vec3) : <code>Object</code>
    * [.components(a)](#vec3.components) ⇒ <code>Array.&lt;number&gt;</code>
    * [.fromComponents(components)](#vec3.fromComponents) ⇒ [<code>vec3</code>](#vec3)
    * [.ux()](#vec3.ux) ⇒ [<code>vec3</code>](#vec3)
    * [.uy()](#vec3.uy) ⇒ [<code>vec3</code>](#vec3)
    * [.uz()](#vec3.uz) ⇒ [<code>vec3</code>](#vec3)
    * [.add(a, b)](#vec3.add) ⇒ [<code>vec3</code>](#vec3)
    * [.sub(a, b)](#vec3.sub) ⇒ [<code>vec3</code>](#vec3)
    * [.mul(a, b)](#vec3.mul) ⇒ [<code>vec3</code>](#vec3)
    * [.scale(a, b)](#vec3.scale) ⇒ [<code>vec3</code>](#vec3)
    * [.div(a, b)](#vec3.div) ⇒ [<code>vec3</code>](#vec3)
    * [.len(a)](#vec3.len) ⇒ <code>number</code>
    * [.manhattan(a)](#vec3.manhattan) ⇒ <code>number</code>
    * [.nor(a)](#vec3.nor) ⇒ [<code>vec3</code>](#vec3)
    * [.dot(a, b)](#vec3.dot) ⇒ <code>number</code>
    * [.rot(a, m)](#vec3.rot) ⇒ [<code>vec3</code>](#vec3)
    * [.rotx(a, r)](#vec3.rotx) ⇒ [<code>vec3</code>](#vec3)
    * [.roty(a, r)](#vec3.roty) ⇒ [<code>vec3</code>](#vec3)
    * [.rotz(a, r)](#vec3.rotz) ⇒ [<code>vec3</code>](#vec3)
    * [.rotq(a, q)](#vec3.rotq) ⇒ [<code>vec3</code>](#vec3)
    * [.rota(a, e)](#vec3.rota) ⇒ [<code>vec3</code>](#vec3)
    * [.cross(a, b)](#vec3.cross) ⇒ [<code>vec3</code>](#vec3)
    * [.eq(a, b)](#vec3.eq) ⇒ <code>boolean</code>
    * [.radx(a)](#vec3.radx) ⇒ <code>number</code>
    * [.rady(a)](#vec3.rady) ⇒ <code>number</code>
    * [.radz(a)](#vec3.radz) ⇒ <code>number</code>
    * [.cpy(a)](#vec3.cpy) ⇒ [<code>vec3</code>](#vec3)
    * [.map(a, f)](#vec3.map) ⇒ [<code>vec3</code>](#vec3)
    * [.str(a, [s])](#vec3.str) ⇒ <code>string</code>
    * [.swiz(a, [s])](#vec3.swiz) ⇒ <code>Array.&lt;number&gt;</code>
    * [.polar(a)](#vec3.polar) ⇒ [<code>polarCoordinates3d</code>](#polarCoordinates3d)
    * [.fromPolar(r, theta, phi)](#vec3.fromPolar) ⇒ [<code>vec3</code>](#vec3)

<a name="vec3.components"></a>

### vec3.components(a) ⇒ <code>Array.&lt;number&gt;</code>
Get the components of a vector as an array

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: <code>Array.&lt;number&gt;</code> - The vector components as an array  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | The vector to get components from |

<a name="vec3.fromComponents"></a>

### vec3.fromComponents(components) ⇒ [<code>vec3</code>](#vec3)
Create a vector from an array of components

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - A new vector  

| Param | Type | Description |
| --- | --- | --- |
| components | <code>Array.&lt;number&gt;</code> | The components of the vector |

<a name="vec3.ux"></a>

### vec3.ux() ⇒ [<code>vec3</code>](#vec3)
Return a unit vector (1, 0, 0)

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - A unit vector (1, 0, 0)  
<a name="vec3.uy"></a>

### vec3.uy() ⇒ [<code>vec3</code>](#vec3)
Return a unit vector (0, 1, 0)

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - A unit vector (0, 1, 0)  
<a name="vec3.uz"></a>

### vec3.uz() ⇒ [<code>vec3</code>](#vec3)
Return a unit vector (0, 0, 1)

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - A unit vector (0, 0, 1)  
<a name="vec3.add"></a>

### vec3.add(a, b) ⇒ [<code>vec3</code>](#vec3)
Add vectors

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - a + b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | Vector a |
| b | [<code>vec3</code>](#vec3) \| <code>number</code> | Vector or scalar b |

<a name="vec3.sub"></a>

### vec3.sub(a, b) ⇒ [<code>vec3</code>](#vec3)
Subtract vectors

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - a - b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | Vector a |
| b | [<code>vec3</code>](#vec3) \| <code>number</code> | Vector or scalar b |

<a name="vec3.mul"></a>

### vec3.mul(a, b) ⇒ [<code>vec3</code>](#vec3)
Scale a vector

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - a * b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | Vector a |
| b | [<code>vec3</code>](#vec3) \| <code>number</code> | Vector or scalar b |

<a name="vec3.scale"></a>

### vec3.scale(a, b) ⇒ [<code>vec3</code>](#vec3)
Scale a vector by a scalar, alias for vec3.mul

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - a * b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | Vector a |
| b | <code>number</code> | Scalar b |

<a name="vec3.div"></a>

### vec3.div(a, b) ⇒ [<code>vec3</code>](#vec3)
Divide a vector

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - a / b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | Vector a |
| b | [<code>vec3</code>](#vec3) \| <code>number</code> | Vector or scalar b |

<a name="vec3.len"></a>

### vec3.len(a) ⇒ <code>number</code>
Get the length of a vector

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: <code>number</code> - |a|  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | Vector a |

<a name="vec3.manhattan"></a>

### vec3.manhattan(a) ⇒ <code>number</code>
Get the length of a vector using taxicab geometry

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: <code>number</code> - |a|  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | Vector a |

<a name="vec3.nor"></a>

### vec3.nor(a) ⇒ [<code>vec3</code>](#vec3)
Normalise a vector

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - ^a  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | The vector to normalise |

<a name="vec3.dot"></a>

### vec3.dot(a, b) ⇒ <code>number</code>
Get a dot product of vectors

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: <code>number</code> - a ∙ b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | Vector a |
| b | [<code>vec3</code>](#vec3) | Vector b |

<a name="vec3.rot"></a>

### vec3.rot(a, m) ⇒ [<code>vec3</code>](#vec3)
Rotate a vector using a rotation matrix

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - A rotated vector  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | The vector to rotate |
| m | [<code>mat</code>](#mat) | The rotation matrix |

<a name="vec3.rotx"></a>

### vec3.rotx(a, r) ⇒ [<code>vec3</code>](#vec3)
Rotate a vector by r radians around the x axis

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - A rotated vector  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | The vector to rotate |
| r | <code>number</code> | The angle to rotate by, measured in radians |

<a name="vec3.roty"></a>

### vec3.roty(a, r) ⇒ [<code>vec3</code>](#vec3)
Rotate a vector by r radians around the y axis

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - A rotated vector  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | The vector to rotate |
| r | <code>number</code> | The angle to rotate by, measured in radians |

<a name="vec3.rotz"></a>

### vec3.rotz(a, r) ⇒ [<code>vec3</code>](#vec3)
Rotate a vector by r radians around the z axis

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - A rotated vector  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | The vector to rotate |
| r | <code>number</code> | The angle to rotate by, measured in radians |

<a name="vec3.rotq"></a>

### vec3.rotq(a, q) ⇒ [<code>vec3</code>](#vec3)
Rotate a vector using a quaternion

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - A rotated vector  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | The vector to rotate |
| q | <code>Array.&lt;number&gt;</code> | The quaternion to rotate by |

<a name="vec3.rota"></a>

### vec3.rota(a, e) ⇒ [<code>vec3</code>](#vec3)
Rotate a vector using Euler angles

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - A rotated vector  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | The vector to rotate |
| e | [<code>vec3</code>](#vec3) | The Euler angles to rotate by |

<a name="vec3.cross"></a>

### vec3.cross(a, b) ⇒ [<code>vec3</code>](#vec3)
Get the cross product of vectors

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - a × b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | Vector a |
| b | [<code>vec3</code>](#vec3) | Vector b |

<a name="vec3.eq"></a>

### vec3.eq(a, b) ⇒ <code>boolean</code>
Check if two vectors are equal

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: <code>boolean</code> - True if vectors a and b are equal, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | Vector a |
| b | [<code>vec3</code>](#vec3) | Vector b |

<a name="vec3.radx"></a>

### vec3.radx(a) ⇒ <code>number</code>
Get the angle of a vector from the x axis

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: <code>number</code> - The angle of vector a in radians  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | Vector a |

<a name="vec3.rady"></a>

### vec3.rady(a) ⇒ <code>number</code>
Get the angle of a vector from the y axis

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: <code>number</code> - The angle of vector a in radians  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | Vector a |

<a name="vec3.radz"></a>

### vec3.radz(a) ⇒ <code>number</code>
Get the angle of a vector from the z axis

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: <code>number</code> - The angle of vector a in radians  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | Vector a |

<a name="vec3.cpy"></a>

### vec3.cpy(a) ⇒ [<code>vec3</code>](#vec3)
Copy a vector

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - A copy of vector a  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | The vector to copy |

<a name="vec3.map"></a>

### vec3.map(a, f) ⇒ [<code>vec3</code>](#vec3)
Call a function on each component of a vector and build a new vector from the results

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - Vector a mapped through f  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | Vector a |
| f | [<code>vec3MapCallback</code>](#vec3MapCallback) | The function to call on each component of the vector |

<a name="vec3.str"></a>

### vec3.str(a, [s]) ⇒ <code>string</code>
Convert a vector into a string

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: <code>string</code> - A string representation of the vector  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| a | [<code>vec3</code>](#vec3) |  | The vector to convert |
| [s] | <code>string</code> | <code>&quot;&#x27;, &#x27;&quot;</code> | The separator string |

<a name="vec3.swiz"></a>

### vec3.swiz(a, [s]) ⇒ <code>Array.&lt;number&gt;</code>
Swizzle a vector with a string of component labels

The string can contain:
- `x`, `y` or `z`
- `u`, `v` or `w` (aliases for `x`, `y` and `z`, respectively)
- `r`, `g` or `b` (aliases for `x`, `y` and `z`, respectively)
- `X`, `Y`, `Z`, `U`, `V`, `W`, `R`, `G`, `B` (negated versions of the above)
- `0` or `1` (these will be passed through unchanged)
- `.` to return the component that would normally be at this position (or 0)

Any other characters will default to 0

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: <code>Array.&lt;number&gt;</code> - The swizzled components  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| a | [<code>vec3</code>](#vec3) |  | The vector to swizzle |
| [s] | <code>string</code> | <code>&quot;&#x27;...&#x27;&quot;</code> | The swizzle string |

**Example** *(swizzling a vector)*  
```js
let a = vec3(3, -2, 1);
vec3.swiz(a, 'x');     // [3]
vec3.swiz(a, 'zyx');   // [1, -2, 3]
vec3.swiz(a, 'xYZ');   // [3, 2, -1]
vec3.swiz(a, 'Zzx');   // [-1, 1, 3]
vec3.swiz(a, 'x.x');   // [3, -2, 3]
vec3.swiz(a, 'y01zx'); // [-2, 0, 1, 1, 3]
```
<a name="vec3.polar"></a>

### vec3.polar(a) ⇒ [<code>polarCoordinates3d</code>](#polarCoordinates3d)
Convert a vector into polar coordinates

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>polarCoordinates3d</code>](#polarCoordinates3d) - The magnitude, tilt and pan of the vector  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec3</code>](#vec3) | The vector to convert |

<a name="vec3.fromPolar"></a>

### vec3.fromPolar(r, theta, phi) ⇒ [<code>vec3</code>](#vec3)
Convert polar coordinates into a vector

**Kind**: static method of [<code>vec3</code>](#vec3)  
**Returns**: [<code>vec3</code>](#vec3) - A vector with the given angle and magnitude  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | The magnitude (radius) of the vector |
| theta | <code>number</code> | The tilt of the vector |
| phi | <code>number</code> | The pan of the vector |

<a name="vec3MapCallback"></a>

## vec3MapCallback ⇒ <code>number</code>
A function to call on each component of a 3d vector

**Kind**: global typedef  
**Returns**: <code>number</code> - The mapped component  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The component value |
| label | <code>&#x27;x&#x27;</code> \| <code>&#x27;y&#x27;</code> \| <code>&#x27;z&#x27;</code> | The component label (x, y or z) |

<a name="polarCoordinates3d"></a>

## polarCoordinates3d : <code>Object</code>
Polar coordinates for a 3d vector

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | The magnitude (radius) of the vector |
| theta | <code>number</code> | The tilt angle of the vector |
| phi | <code>number</code> | The pan angle of the vector |

<a name="mat"></a>

## mat : <code>Object</code>
A matrix

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| m | <code>number</code> | The number of rows in the matrix |
| n | <code>number</code> | The number of columns in the matrix |
| entries | <code>Array.&lt;number&gt;</code> | The matrix values |


* [mat](#mat) : <code>Object</code>
    * [.identity(n)](#mat.identity) ⇒ [<code>mat</code>](#mat)
    * [.get(a, i, j)](#mat.get) ⇒ <code>number</code>
    * [.set(a, i, j, v)](#mat.set)
    * [.row(a, m)](#mat.row) ⇒ <code>Array.&lt;number&gt;</code>
    * [.col(a, n)](#mat.col) ⇒ <code>Array.&lt;number&gt;</code>
    * [.add(a, b)](#mat.add) ⇒ [<code>mat</code>](#mat)
    * [.sub(a, b)](#mat.sub) ⇒ [<code>mat</code>](#mat)
    * [.mul(a, b)](#mat.mul) ⇒ [<code>mat</code>](#mat) \| <code>false</code>
    * [.mulv(a, b)](#mat.mulv) ⇒ [<code>vec2</code>](#vec2) \| [<code>vec3</code>](#vec3) \| <code>Array.&lt;number&gt;</code> \| <code>false</code>
    * [.scale(a, b)](#mat.scale) ⇒ [<code>mat</code>](#mat)
    * [.trans(a)](#mat.trans) ⇒ [<code>mat</code>](#mat)
    * [.minor(a, i, j)](#mat.minor) ⇒ [<code>mat</code>](#mat) \| <code>false</code>
    * [.det(a)](#mat.det) ⇒ <code>number</code> \| <code>false</code>
    * [.nor(a)](#mat.nor) ⇒ [<code>mat</code>](#mat) \| <code>false</code>
    * [.adj(a)](#mat.adj) ⇒ [<code>mat</code>](#mat)
    * [.inv(a)](#mat.inv) ⇒ [<code>mat</code>](#mat) \| <code>false</code>
    * [.eq(a, b)](#mat.eq) ⇒ <code>boolean</code>
    * [.cpy(a)](#mat.cpy) ⇒ [<code>mat</code>](#mat)
    * [.map(a, f)](#mat.map) ⇒ [<code>mat</code>](#mat)
    * [.str(a, [ms], [ns])](#mat.str) ⇒ <code>string</code>

<a name="mat.identity"></a>

### mat.identity(n) ⇒ [<code>mat</code>](#mat)
Get an identity matrix of size n

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) - An identity matrix  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | The size of the matrix |

<a name="mat.get"></a>

### mat.get(a, i, j) ⇒ <code>number</code>
Get an entry from a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: <code>number</code> - The value at position (i, j) in matrix a  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |
| i | <code>number</code> | The row offset |
| j | <code>number</code> | The column offset |

<a name="mat.set"></a>

### mat.set(a, i, j, v)
Set an entry of a matrix

**Kind**: static method of [<code>mat</code>](#mat)  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |
| i | <code>number</code> | The row offset |
| j | <code>number</code> | The column offset |
| v | <code>number</code> | The value to set in matrix a |

<a name="mat.row"></a>

### mat.row(a, m) ⇒ <code>Array.&lt;number&gt;</code>
Get a row from a matrix as an array

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: <code>Array.&lt;number&gt;</code> - Row m from matrix a  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |
| m | <code>number</code> | The row offset |

<a name="mat.col"></a>

### mat.col(a, n) ⇒ <code>Array.&lt;number&gt;</code>
Get a column from a matrix as an array

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: <code>Array.&lt;number&gt;</code> - Column n from matrix a  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |
| n | <code>number</code> | The column offset |

<a name="mat.add"></a>

### mat.add(a, b) ⇒ [<code>mat</code>](#mat)
Add matrices

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) - a + b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |
| b | [<code>mat</code>](#mat) | Matrix b |

<a name="mat.sub"></a>

### mat.sub(a, b) ⇒ [<code>mat</code>](#mat)
Subtract matrices

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) - a - b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |
| b | [<code>mat</code>](#mat) | Matrix b |

<a name="mat.mul"></a>

### mat.mul(a, b) ⇒ [<code>mat</code>](#mat) \| <code>false</code>
Multiply matrices

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) \| <code>false</code> - ab or false if the matrices cannot be multiplied  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |
| b | [<code>mat</code>](#mat) | Matrix b |

<a name="mat.mulv"></a>

### mat.mulv(a, b) ⇒ [<code>vec2</code>](#vec2) \| [<code>vec3</code>](#vec3) \| <code>Array.&lt;number&gt;</code> \| <code>false</code>
Multiply a matrix by a vector

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>vec2</code>](#vec2) \| [<code>vec3</code>](#vec3) \| <code>Array.&lt;number&gt;</code> \| <code>false</code> - ab or false if the matrix and vector cannot be multiplied  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |
| b | [<code>vec2</code>](#vec2) \| [<code>vec3</code>](#vec3) \| <code>Array.&lt;number&gt;</code> | Vector b |

<a name="mat.scale"></a>

### mat.scale(a, b) ⇒ [<code>mat</code>](#mat)
Scale a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) - a * b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |
| b | <code>number</code> | Scalar b |

<a name="mat.trans"></a>

### mat.trans(a) ⇒ [<code>mat</code>](#mat)
Transpose a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) - A transposed matrix  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | The matrix to transpose |

<a name="mat.minor"></a>

### mat.minor(a, i, j) ⇒ [<code>mat</code>](#mat) \| <code>false</code>
Get the minor of a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) \| <code>false</code> - The (i, j) minor of matrix a or false if the matrix is not square  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |
| i | <code>number</code> | The row offset |
| j | <code>number</code> | The column offset |

<a name="mat.det"></a>

### mat.det(a) ⇒ <code>number</code> \| <code>false</code>
Get the determinant of a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: <code>number</code> \| <code>false</code> - |a| or false if the matrix is not square  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |

<a name="mat.nor"></a>

### mat.nor(a) ⇒ [<code>mat</code>](#mat) \| <code>false</code>
Normalise a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) \| <code>false</code> - ^a or false if the matrix is not square  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | The matrix to normalise |

<a name="mat.adj"></a>

### mat.adj(a) ⇒ [<code>mat</code>](#mat)
Get the adjugate of a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) - The adjugate of a  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | The matrix from which to get the adjugate |

<a name="mat.inv"></a>

### mat.inv(a) ⇒ [<code>mat</code>](#mat) \| <code>false</code>
Get the inverse of a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) \| <code>false</code> - a^-1 or false if the matrix has no inverse  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | The matrix to invert |

<a name="mat.eq"></a>

### mat.eq(a, b) ⇒ <code>boolean</code>
Check if two matrices are equal

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: <code>boolean</code> - True if matrices a and b are identical, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |
| b | [<code>mat</code>](#mat) | Matrix b |

<a name="mat.cpy"></a>

### mat.cpy(a) ⇒ [<code>mat</code>](#mat)
Copy a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) - A copy of matrix a  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | The matrix to copy |

<a name="mat.map"></a>

### mat.map(a, f) ⇒ [<code>mat</code>](#mat)
Call a function on each entry of a matrix and build a new matrix from the results

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) - Matrix a mapped through f  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |
| f | [<code>matrixMapCallback</code>](#matrixMapCallback) | The function to call on each entry of the matrix |

<a name="mat.str"></a>

### mat.str(a, [ms], [ns]) ⇒ <code>string</code>
Convert a matrix into a string

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: <code>string</code> - A string representation of the matrix  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| a | [<code>mat</code>](#mat) |  | The matrix to convert |
| [ms] | <code>string</code> | <code>&quot;&#x27;, &#x27;&quot;</code> | The separator string for columns |
| [ns] | <code>string</code> | <code>&quot;&#x27;\\n&#x27;&quot;</code> | The separator string for rows |

<a name="matrixMapCallback"></a>

## matrixMapCallback ⇒ <code>number</code>
A function to call on each entry of a matrix

**Kind**: global typedef  
**Returns**: <code>number</code> - The mapped entry  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The entry value |
| index | <code>number</code> | The entry index |
| entries | <code>Array.&lt;number&gt;</code> | The array of matrix entries |

