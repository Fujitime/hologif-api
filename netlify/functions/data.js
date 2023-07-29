import data from '../../info.json';

export async function handler(event) {
  try {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (event.httpMethod === 'OPTIONS') {
      return {
        statusCode: 200,
        headers,
        body: 'Options OK',
      };
    }

    if (event.httpMethod === 'GET') {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(data),
      };
    }

    if (event.httpMethod === 'GET' && event.queryStringParameters && event.queryStringParameters.name) {
      const name = event.queryStringParameters.name;
      const member = hololive_members.find((m) => m.name.toLowerCase() === name.toLowerCase());
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
}
