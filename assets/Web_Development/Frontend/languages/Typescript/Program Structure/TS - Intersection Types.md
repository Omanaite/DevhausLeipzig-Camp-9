
[[TS - Intersection Types|Intersection types]] are closely related to union types, but they are used very differently. An intersection type combines multiple types into one. This allows you to add together existing types to get a single type that has all the features you need. ^713950

```TS
interface ErrorHandling {
success: boolean;
error?: { message: string };
}

interface ArtworksData {
artworks: { title: string }[];
}

interface ArtistsData {
artists: { name: string }[];
}

type ArtworksResponse = ArtworksData & ErrorHandling;

type ArtistsResponse = ArtistsData & ErrorHandling;
```



