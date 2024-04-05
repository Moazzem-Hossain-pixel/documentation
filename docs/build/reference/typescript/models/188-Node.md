
# Node

This describes a node within a relationship graph used to related like types. ie asset to asset, tag to tag, ...etc  created: is here to let us know when the node was attached.  id: this is the the id of the type ie, if the type is Asset the id here points to the asset that this node represents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**type** | [**NodeTypeEnum**](NodeTypeEnum) |  | [default to undefined]
**root** | **boolean** | This is a boolean to let us know if this node is the root or origin of the relationship graph. | [default to undefined]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]

## Example

```typescript
import { Node } from '';

// TODO: Update the object below with actual values
const example: Node = {
    "id": null, // 
    "type": null, // 
    "root": null, // This is a boolean to let us know if this node is the root or origin of the relationship graph.
    "created": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Node;
console.log(exampleParsed);
```



