// netlify/functions/hello-world.js
exports.handler = async (event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Hello from Netlify!' })
    };
  };
  