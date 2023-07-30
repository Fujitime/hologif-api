const data = require('../../img/info.json');

exports.handler = async (event) => {
  // Add CORS headers
  const responseHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
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
          body: JSON.stringify({ id: member.id, quote: member.quote }),
        };
      } else if (format === 'gif') {
        return {
          statusCode: 200,
          headers: responseHeaders,
          body: JSON.stringify({ id: member.id, gif: member.gif }),
        };
      } else if (format === 'social_media') {
        return {
          statusCode: 200,
          headers: responseHeaders,
          body: JSON.stringify({ id: member.id, social_media: member.social_media }),
        };
      } else {
        // Return the full member object if no specific format is requested
        return {
          statusCode: 200,
          headers: responseHeaders,
          body: JSON.stringify({ id: member.id, ...member }),
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
