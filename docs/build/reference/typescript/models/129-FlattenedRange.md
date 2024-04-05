
# FlattenedRange

This is a DAG-Safe minimal representation of a Range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**score** | [**Score**](Score) |  | [optional] [default to undefined]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**to** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**from** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**between** | **boolean** |  | [optional] [default to undefined]
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries) |  | [optional] [default to undefined]
**conversations** | [**FlattenedConversations**](FlattenedConversations) |  | [optional] [default to undefined]

## Example

```typescript
import { FlattenedRange } from '';

// TODO: Update the object below with actual values
const example: FlattenedRange = {
    "schema": null, // 
    "id": null, // 
    "score": null, // 
    "created": null, // 
    "updated": null, // 
    "to": null, // 
    "from": null, // 
    "between": null, // 
    "summaries": null, // 
    "conversations": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedRange;
console.log(exampleParsed);
```



