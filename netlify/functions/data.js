const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  // Add CORS headers
  const responseHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
    'Vary': 'Origin',
  };

  if (event.httpMethod === 'OPTIONS') {
    // Preflight request, respond with CORS headers only
    return {
      statusCode: 204, // No Content
      headers: responseHeaders,
    };
  }

  try {
    if (event.httpMethod === 'GET') {
      const { name, format } = event.queryStringParameters || {};

      if (!name) {
        return {
          statusCode: 400,
          headers: responseHeaders,
          body: JSON.stringify({ error: 'Name parameter is required' }),
        };
      }

      const infoFilePath = path.join(__dirname, '../../img/info.json');
      const rawData = fs.readFileSync(infoFilePath);
      const data = JSON.parse(rawData);

      const member = data.hololive_members.find((m) => m.name.toLowerCase() === name.toLowerCase());
      if (!member) {
        return {
          statusCode: 404,
          headers: responseHeaders,
          body: JSON.stringify({ error: 'Member not found' }),
        };
      }

      if (format === 'quote') {
        return {
          statusCode: 200,
          headers: responseHeaders,
          body: JSON.stringify({ quote: member.quote }),
        };
      } else if (format === 'gif') {
        // Assume the `member.gif` contains the filename of the GIF in the img folder
        const gifFilePath = path.join(__dirname, '../../img', member.gif);
        const gifData = fs.readFileSync(gifFilePath, { encoding: 'base64' });

        return {
          statusCode: 200,
          headers: { ...responseHeaders, 'Content-Type': 'application/json' },
          body: JSON.stringify({ gif: `data:image/gif;base64,${gifData}` }),
        };
      } else if (format === 'social_media') {
        return {
          statusCode: 200,
          headers: responseHeaders,
          body: JSON.stringify({ social_media: member.social_media }),
        };
      } else {
        // Return the full member object if no specific format is requested
        return {
          statusCode: 200,
          headers: responseHeaders,
          body: JSON.stringify(member),
        };
      }
    }

    return {
      statusCode: 404,
      headers: responseHeaders,
      body: JSON.stringify({ error: 'Endpoint not found' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: responseHeaders,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
