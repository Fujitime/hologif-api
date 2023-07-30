const data = require('../../img/info.json');

exports.handler = async (event) => {
  try {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (event.httpMethod === 'GET') {
      const { name, format } = event.queryStringParameters || {};

      if (!name) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'Name parameter is required' }),
        };
      }

      const member = data.hololive_members.find((m) => m.name.toLowerCase() === name.toLowerCase());
      if (!member) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: 'Member not found' }),
        };
      }

      if (format === 'quote') {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ quote: member.quote }),
        };
      } else if (format === 'gif') {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ gif: member.gif }),
        };
      } else if (format === 'social_media') {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ social_media: member.social_media }),
        };
      } else {
        // Return the full member object if no specific format is requested
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(member),
        };
      }
    }

    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ error: 'Endpoint not found' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
