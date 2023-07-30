# HoloGif API Documentation

## Introduction
Welcome to the HoloGif API documentation. This API allows you to retrieve information about various Hololive members, including their quotes, GIF links, and social media links.

## Base URL
The base URL for accessing the HoloGif API is:

https://hologif.api.fujitime.my.id/

## Endpoints
The API provides the following endpoints:

### 1. Get information about a Hololive member based on their ID:
Endpoint: /api
Method: GET

Parameters:
- id: The ID of the Hololive member (required)

Example Request: GET https://hologif.api.fujitime.my.id/api?id=1

Example Response:
```json
{
  "id": 1,
  "name": "Shirakami Fubuki",
  "quote": "In this world, I am destroyer Shirakami Fubuki! We meet at last! I'm Hololive's virtual fox, Shirakami Fubuki!",
  "gif": "https://cdn.discordapp.com/attachments/1135208574369398814/1135209335270670396/shirakami.gif",
  "social_media": {
    "youtube": "https://www.youtube.com/channel/UCdn5BQ06XqgXoAxIhbqw5Rg",
    "twitter": "https://twitter.com/shirakamifubuki"
  }
}
```

### 2. Get a quote from a Hololive member:
Endpoint: /api
Method: GET

Parameters:
- id: The ID of the Hololive member (required)
- format: Use 'quote' to get the quote (optional)

Example Request: GET https://hologif.api.fujitime.my.id/api?id=1&format=quote

Example Response:
```json
{
  "id": 1,
  "quote": "In this world, I am destroyer Shirakami Fubuki! We meet at last! I'm Hololive's virtual fox, Shirakami Fubuki!"
}
```

### 3. Get the GIF link of a Hololive member:
Endpoint: /api
Method: GET

Parameters:
- id: The ID of the Hololive member (required)
- format: Use 'gif' to get the GIF link (optional)

Example Request: GET https://hologif.api.fujitime.my.id/api?id=1&format=gif

Example Response:
```json
{
  "id": 1,
  "gif": "https://cdn.discordapp.com/attachments/1135208574369398814/1135209335270670396/shirakami.gif"
}
```

### 4. Get the social media links of a Hololive member:
Endpoint: /api
Method: GET

Parameters:
- id: The ID of the Hololive member (required)
- format: Use 'social_media' to get the social media links (optional)

Example Request: GET https://hologif.api.fujitime.my.id/api?id=1&format=social_media

Example Response:
```json
{
  "id": 1,
  "social_media": {
    "youtube": "https://www.youtube.com/channel/UCdn5BQ06XqgXoAxIhbqw5Rg",
    "twitter": "https://twitter.com/shirakamifubuki"
  }
}
```

## Response Format
The API responds with a JSON object containing the requested information.

## Error Handling
If the requested Hololive member is not found, the API will respond with a 404 Not Found status code and an error message. If the 'id' parameter is missing in the request, the API will respond with a 400 Bad Request status code and an error message.

## Contribution
If you wish to contribute to the development of HoloGif API, you can submit a pull request to the GitHub repository at https://github.com/fujitime/hologif-api. We appreciate any contributions to enhance this API.

Thank you for using the HoloGif API! If you have any questions or issues, feel free to contact us.
