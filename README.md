# HoloGif API Documentation

## Introduction

HoloGif API is a simple API that provides information about Hololive members along with their GIF animations. This API can be used to retrieve quotes, social media links, and GIF links of Hololive members.

## Basic Usage

HoloGif API can be accessed using HTTP GET requests. Here are some example requests that can be made:

1. Get information about a Hololive member based on their name:

`GET https://hologif.api.fujitime.my.id/?name=<character-name>`

2. Get a quote from a Hololive member:

`GET https://hologif.api.fujitime.my.id/?name=<character-name>&format=quote`

3. Get the GIF link of a Hololive member:

`GET https://hologif.api.fujitime.my.id/?name=<character-name>&format=gif`

4. Get the social media links of a Hololive member:

`GET https://hologif.api.fujitime.my.id/?name=<character-name>&format=social_media`

## API Response

HoloGif API will send responses in JSON format. Here are some example responses that can be received:

```json
{
  "quote": "In this world, I am destroyer Shirakami Fubuki! We meet at last! I'm Hololive's virtual fox, Shirakami Fubuki!"
}
```

```json
{
  "gif": "shirakami.gif"
}
```

```json
{
  "social_media": {
    "youtube": "https://www.youtube.com/channel/UCdn5BQ06XqgXoAxIhbqw5Rg",
    "twitter": "https://twitter.com/shirakamifubuki"
  }
}
```

## List of Hololive Members

Here is a list of the available Hololive member names in the API:

- Shirakami Fubuki
- Houshou Marine
- Minato Aqua
- Akai Haato
- Natsuiro Matsuri
- Amane Kanata
- Nakiri Ayame
- Shirogane Noel
- Murasaki Shion
- Aki Rosenthal
- Tsunomaki Watame
- Omaru Polka
- Himemori Luna
- Yukihana Lamy
- Momosuzu Nene
- Shishiro Botan
- Tokino Sora
- Roboco
- Sakura Miko
- Hoshimachi Suisei
- AZKi
- Yozora Mel
- Gawr Gura
- Ninomae Ina'nis
- Takanashi Kiara
- Watson Amelia
- Yuzuki Choco
- Oozora Subaru
- Nekomata Okayu
- Inugami Korone
- Ookami Mio

## Contribution

If you would like to contribute to the improvement of HoloGif API, you can send pull requests to the fujitime GitHub repository. We greatly appreciate any contributions made to the development of this API.

We apologize if the quotes from each character are not accurate. If you have any questions or issues, feel free to contact us.

