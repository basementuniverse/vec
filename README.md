# vec

A small vector and matrix library

## Usage

Node:

```javascript
const { vec, mat } = require('@basementuniverse/vec');
```

Browser:

```html
<script src="vec.js"></script>
```

Typescript:

```typescript
import { vec, mat } from '@basementuniverse/vec';
```

## Contents

* [vec](#vec)
* [mat](#mat)

## Functions

<dl>
<dt><a href="#vec">vec([x], [y])</a> ⇒ <code><a href="#vec">vec</a></code></dt>
<dd><p>Create a new vector</p>
</dd>
<dt><a href="#mat">mat([m], [n], [entries])</a> ⇒ <code><a href="#mat">mat</a></code></dt>
<dd><p>Create a new matrix</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#vec">vec</a> : <code>Object</code></dt>
<dd><p>A 2d vector</p>
</dd>
<dt><a href="#vectorMapCallback">vectorMapCallback</a> ⇒ <code>number</code></dt>
<dd><p>A function to call on each component of a vector</p>
</dd>
<dt><a href="#mat">mat</a> : <code>Object</code></dt>
<dd><p>A matrix</p>
</dd>
<dt><a href="#matrixMapCallback">matrixMapCallback</a> ⇒ <code>number</code></dt>
<dd><p>A function to call on each entry of a matrix</p>
</dd>
</dl>

<a name="vec"></a>

## vec([x], [y]) ⇒ [<code>vec</code>](#vec)
Create a new vector

**Kind**: global function  
**Returns**: [<code>vec</code>](#vec) - A new vector  

| Param | Type | Description |
| --- | --- | --- |
| [x] | <code>number</code> \| [<code>vec</code>](#vec) | The x component of the vector, or a vector to copy |
| [y] | <code>number</code> | The y component of the vector |

**Example** *(Various ways to initialise a vector)*  
```js
let a = vec(3, 2);  // (3, 2)
let b = vec(4);     // (4, 4)
let c = vec(a);     // (3, 2)
let d = vec();      // (0, 0)
```

* [vec([x], [y])](#vec) ⇒ [<code>vec</code>](#vec)
    * [.components(a)](#vec.components) ⇒ <code>Array.&lt;number&gt;</code>
    * [.ux()](#vec.ux) ⇒ [<code>vec</code>](#vec)
    * [.uy()](#vec.uy) ⇒ [<code>vec</code>](#vec)
    * [.add(a, b)](#vec.add) ⇒ [<code>vec</code>](#vec)
    * [.mul(a, b)](#vec.mul) ⇒ [<code>vec</code>](#vec)
    * [.sub(a, b)](#vec.sub) ⇒ [<code>vec</code>](#vec)
    * [.len(a)](#vec.len) ⇒ <code>number</code>
    * [.manhattan(a)](#vec.manhattan) ⇒ <code>number</code>
    * [.nor(a)](#vec.nor) ⇒ [<code>vec</code>](#vec)
    * [.dot(a, b)](#vec.dot) ⇒ <code>number</code>
    * [.rot(a, r)](#vec.rot) ⇒ [<code>vec</code>](#vec)
    * [.eq(a, b)](#vec.eq) ⇒ <code>boolean</code>
    * [.rad(a)](#vec.rad) ⇒ <code>number</code>
    * [.cpy(a)](#vec.cpy) ⇒ [<code>vec</code>](#vec)
    * [.map(a, f)](#vec.map) ⇒ [<code>vec</code>](#vec)
    * [.str(a, [s])](#vec.str) ⇒ <code>string</code>

<a name="vec.components"></a>

### vec.components(a) ⇒ <code>Array.&lt;number&gt;</code>
Get the components of a vector as an array

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: <code>Array.&lt;number&gt;</code> - The vector components as an array  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) | The vector to get components from |

<a name="vec.ux"></a>

### vec.ux() ⇒ [<code>vec</code>](#vec)
Return a unit vector (1, 0)

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - A unit vector (1, 0)  
<a name="vec.uy"></a>

### vec.uy() ⇒ [<code>vec</code>](#vec)
Return a unit vector (0, 1)

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - A unit vector (0, 1)  
<a name="vec.add"></a>

### vec.add(a, b) ⇒ [<code>vec</code>](#vec)
Add vectors

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - a + b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) | Vector a |
| b | [<code>vec</code>](#vec) | Vector b |

<a name="vec.mul"></a>

### vec.mul(a, b) ⇒ [<code>vec</code>](#vec)
Scale a vector

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - a * b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) | Vector a |
| b | <code>number</code> | Scalar b |

<a name="vec.sub"></a>

### vec.sub(a, b) ⇒ [<code>vec</code>](#vec)
Subtract vectors

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - a - b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) | Vector a |
| b | [<code>vec</code>](#vec) | Vector b |

<a name="vec.len"></a>

### vec.len(a) ⇒ <code>number</code>
Get the length of a vector

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: <code>number</code> - |a|  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) | Vector a |

<a name="vec.manhattan"></a>

### vec.manhattan(a) ⇒ <code>number</code>
Get the length of a vector using taxicab geometry

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: <code>number</code> - |a|  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) | Vector a |

<a name="vec.nor"></a>

### vec.nor(a) ⇒ [<code>vec</code>](#vec)
Normalise a vector

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - ^a  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) | The vector to normalise |

<a name="vec.dot"></a>

### vec.dot(a, b) ⇒ <code>number</code>
Get a dot product of vectors

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: <code>number</code> - a ∙ b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) | Vector a |
| b | [<code>vec</code>](#vec) | Vector b |

<a name="vec.rot"></a>

### vec.rot(a, r) ⇒ [<code>vec</code>](#vec)
Rotate a vector by r radians

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - A rotated vector  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) | The vector to rotate |
| r | <code>number</code> | The angle to rotate by, measured in radians |

<a name="vec.eq"></a>

### vec.eq(a, b) ⇒ <code>boolean</code>
Check if two vectors are equal

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: <code>boolean</code> - True if vectors a and b are equal, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) | Vector a |
| b | [<code>vec</code>](#vec) | Vector b |

<a name="vec.rad"></a>

### vec.rad(a) ⇒ <code>number</code>
Get the angle of a vector

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: <code>number</code> - The angle of vector a in radians  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) | Vector a |

<a name="vec.cpy"></a>

### vec.cpy(a) ⇒ [<code>vec</code>](#vec)
Copy a vector

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - A copy of vector a  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) | The vector to copy |

<a name="vec.map"></a>

### vec.map(a, f) ⇒ [<code>vec</code>](#vec)
Call a function on each component of a vector and build a new vector from the results

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - Vector a mapped through f  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) | Vector a |
| f | [<code>vectorMapCallback</code>](#vectorMapCallback) | The function to call on each component of the vector |

<a name="vec.str"></a>

### vec.str(a, [s]) ⇒ <code>string</code>
Convert a vector into a string

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: <code>string</code> - A string representation of the vector  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| a | [<code>vec</code>](#vec) |  | The vector to convert |
| [s] | <code>string</code> | <code>&quot;&#x27;, &#x27;&quot;</code> | The separator string |

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
    * [.mul(a, b)](#mat.mul) ⇒ [<code>mat</code>](#mat) \| <code>boolean</code>
    * [.scale(a, b)](#mat.scale) ⇒ [<code>mat</code>](#mat)
    * [.trans(a)](#mat.trans) ⇒ [<code>mat</code>](#mat)
    * [.minor(a, i, j)](#mat.minor) ⇒ [<code>mat</code>](#mat) \| <code>boolean</code>
    * [.det(a)](#mat.det) ⇒ <code>number</code> \| <code>boolean</code>
    * [.nor(a)](#mat.nor) ⇒ [<code>mat</code>](#mat) \| <code>boolean</code>
    * [.adj(a)](#mat.adj) ⇒ [<code>mat</code>](#mat)
    * [.inv(a)](#mat.inv) ⇒ [<code>mat</code>](#mat) \| <code>boolean</code>
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

### mat.mul(a, b) ⇒ [<code>mat</code>](#mat) \| <code>boolean</code>
Multiply matrices

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) \| <code>boolean</code> - ab or false if the matrices cannot be multiplied  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |
| b | [<code>mat</code>](#mat) | Matrix b |

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

### mat.minor(a, i, j) ⇒ [<code>mat</code>](#mat) \| <code>boolean</code>
Get the minor of a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) \| <code>boolean</code> - The (i, j) minor of matrix a or false if the matrix is not square  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |
| i | <code>number</code> | The row offset |
| j | <code>number</code> | The column offset |

<a name="mat.det"></a>

### mat.det(a) ⇒ <code>number</code> \| <code>boolean</code>
Get the determinant of a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: <code>number</code> \| <code>boolean</code> - |a| or false if the matrix is not square  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |

<a name="mat.nor"></a>

### mat.nor(a) ⇒ [<code>mat</code>](#mat) \| <code>boolean</code>
Normalise a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) \| <code>boolean</code> - ^a or false if the matrix is not square  

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

### mat.inv(a) ⇒ [<code>mat</code>](#mat) \| <code>boolean</code>
Get the inverse of a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) \| <code>boolean</code> - a^-1 or false if the matrix has no inverse  

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

<a name="vec"></a>

## vec : <code>Object</code>
A 2d vector

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The x component of the vector |
| y | <code>number</code> | The y component of the vector |


* [vec](#vec) : <code>Object</code>
    * [.components(a)](#vec.components) ⇒ <code>Array.&lt;number&gt;</code>
    * [.ux()](#vec.ux) ⇒ [<code>vec</code>](#vec)
    * [.uy()](#vec.uy) ⇒ [<code>vec</code>](#vec)
    * [.add(a, b)](#vec.add) ⇒ [<code>vec</code>](#vec)
    * [.mul(a, b)](#vec.mul) ⇒ [<code>vec</code>](#vec)
    * [.sub(a, b)](#vec.sub) ⇒ [<code>vec</code>](#vec)
    * [.len(a)](#vec.len) ⇒ <code>number</code>
    * [.manhattan(a)](#vec.manhattan) ⇒ <code>number</code>
    * [.nor(a)](#vec.nor) ⇒ [<code>vec</code>](#vec)
    * [.dot(a, b)](#vec.dot) ⇒ <code>number</code>
    * [.rot(a, r)](#vec.rot) ⇒ [<code>vec</code>](#vec)
    * [.eq(a, b)](#vec.eq) ⇒ <code>boolean</code>
    * [.rad(a)](#vec.rad) ⇒ <code>number</code>
    * [.cpy(a)](#vec.cpy) ⇒ [<code>vec</code>](#vec)
    * [.map(a, f)](#vec.map) ⇒ [<code>vec</code>](#vec)
    * [.str(a, [s])](#vec.str) ⇒ <code>string</code>

<a name="vec.components"></a>

### vec.components(a) ⇒ <code>Array.&lt;number&gt;</code>
Get the components of a vector as an array

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: <code>Array.&lt;number&gt;</code> - The vector components as an array  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) | The vector to get components from |

<a name="vec.ux"></a>

### vec.ux() ⇒ [<code>vec</code>](#vec)
Return a unit vector (1, 0)

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - A unit vector (1, 0)  
<a name="vec.uy"></a>

### vec.uy() ⇒ [<code>vec</code>](#vec)
Return a unit vector (0, 1)

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - A unit vector (0, 1)  
<a name="vec.add"></a>

### vec.add(a, b) ⇒ [<code>vec</code>](#vec)
Add vectors

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - a + b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) | Vector a |
| b | [<code>vec</code>](#vec) | Vector b |

<a name="vec.mul"></a>

### vec.mul(a, b) ⇒ [<code>vec</code>](#vec)
Scale a vector

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - a * b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) | Vector a |
| b | <code>number</code> | Scalar b |

<a name="vec.sub"></a>

### vec.sub(a, b) ⇒ [<code>vec</code>](#vec)
Subtract vectors

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - a - b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) | Vector a |
| b | [<code>vec</code>](#vec) | Vector b |

<a name="vec.len"></a>

### vec.len(a) ⇒ <code>number</code>
Get the length of a vector

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: <code>number</code> - |a|  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) | Vector a |

<a name="vec.manhattan"></a>

### vec.manhattan(a) ⇒ <code>number</code>
Get the length of a vector using taxicab geometry

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: <code>number</code> - |a|  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) | Vector a |

<a name="vec.nor"></a>

### vec.nor(a) ⇒ [<code>vec</code>](#vec)
Normalise a vector

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - ^a  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) | The vector to normalise |

<a name="vec.dot"></a>

### vec.dot(a, b) ⇒ <code>number</code>
Get a dot product of vectors

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: <code>number</code> - a ∙ b  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) | Vector a |
| b | [<code>vec</code>](#vec) | Vector b |

<a name="vec.rot"></a>

### vec.rot(a, r) ⇒ [<code>vec</code>](#vec)
Rotate a vector by r radians

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - A rotated vector  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) | The vector to rotate |
| r | <code>number</code> | The angle to rotate by, measured in radians |

<a name="vec.eq"></a>

### vec.eq(a, b) ⇒ <code>boolean</code>
Check if two vectors are equal

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: <code>boolean</code> - True if vectors a and b are equal, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) | Vector a |
| b | [<code>vec</code>](#vec) | Vector b |

<a name="vec.rad"></a>

### vec.rad(a) ⇒ <code>number</code>
Get the angle of a vector

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: <code>number</code> - The angle of vector a in radians  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) | Vector a |

<a name="vec.cpy"></a>

### vec.cpy(a) ⇒ [<code>vec</code>](#vec)
Copy a vector

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - A copy of vector a  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) | The vector to copy |

<a name="vec.map"></a>

### vec.map(a, f) ⇒ [<code>vec</code>](#vec)
Call a function on each component of a vector and build a new vector from the results

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - Vector a mapped through f  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) | Vector a |
| f | [<code>vectorMapCallback</code>](#vectorMapCallback) | The function to call on each component of the vector |

<a name="vec.str"></a>

### vec.str(a, [s]) ⇒ <code>string</code>
Convert a vector into a string

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: <code>string</code> - A string representation of the vector  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| a | [<code>vec</code>](#vec) |  | The vector to convert |
| [s] | <code>string</code> | <code>&quot;&#x27;, &#x27;&quot;</code> | The separator string |

<a name="vectorMapCallback"></a>

## vectorMapCallback ⇒ <code>number</code>
A function to call on each component of a vector

**Kind**: global typedef  
**Returns**: <code>number</code> - The mapped component  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The component value |
| label | <code>&#x27;x&#x27;</code> \| <code>&#x27;y&#x27;</code> | The component label (x or y) |

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
    * [.mul(a, b)](#mat.mul) ⇒ [<code>mat</code>](#mat) \| <code>boolean</code>
    * [.scale(a, b)](#mat.scale) ⇒ [<code>mat</code>](#mat)
    * [.trans(a)](#mat.trans) ⇒ [<code>mat</code>](#mat)
    * [.minor(a, i, j)](#mat.minor) ⇒ [<code>mat</code>](#mat) \| <code>boolean</code>
    * [.det(a)](#mat.det) ⇒ <code>number</code> \| <code>boolean</code>
    * [.nor(a)](#mat.nor) ⇒ [<code>mat</code>](#mat) \| <code>boolean</code>
    * [.adj(a)](#mat.adj) ⇒ [<code>mat</code>](#mat)
    * [.inv(a)](#mat.inv) ⇒ [<code>mat</code>](#mat) \| <code>boolean</code>
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

### mat.mul(a, b) ⇒ [<code>mat</code>](#mat) \| <code>boolean</code>
Multiply matrices

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) \| <code>boolean</code> - ab or false if the matrices cannot be multiplied  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |
| b | [<code>mat</code>](#mat) | Matrix b |

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

### mat.minor(a, i, j) ⇒ [<code>mat</code>](#mat) \| <code>boolean</code>
Get the minor of a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) \| <code>boolean</code> - The (i, j) minor of matrix a or false if the matrix is not square  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |
| i | <code>number</code> | The row offset |
| j | <code>number</code> | The column offset |

<a name="mat.det"></a>

### mat.det(a) ⇒ <code>number</code> \| <code>boolean</code>
Get the determinant of a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: <code>number</code> \| <code>boolean</code> - |a| or false if the matrix is not square  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) | Matrix a |

<a name="mat.nor"></a>

### mat.nor(a) ⇒ [<code>mat</code>](#mat) \| <code>boolean</code>
Normalise a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) \| <code>boolean</code> - ^a or false if the matrix is not square  

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

### mat.inv(a) ⇒ [<code>mat</code>](#mat) \| <code>boolean</code>
Get the inverse of a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) \| <code>boolean</code> - a^-1 or false if the matrix has no inverse  

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

