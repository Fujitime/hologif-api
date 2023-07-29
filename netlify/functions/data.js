const data = require('../../info.json');

exports.handler = async (event) => {
  try {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (event.httpMethod === 'GET') {
      const name = event.queryStringParameters && event.queryStringParameters.name;
      if (!name) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'Name parameter is required' }),
        };
      }

      const member = data.hololive_members.find((m) => m.name.toLowerCase() === name.toLowerCase());
      if (member) {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(member),
        };
      } else {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: 'Member not found' }),
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
