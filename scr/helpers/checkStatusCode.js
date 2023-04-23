const checkStatusCode = (response, expectedStatus = 200) => {
  if (response.status === expectedStatus) {
    return response;
  }

  const { method, url, data, headers } = response.req;
  const { status, body, error } = response;

  const errorMsg = `
    request-method  : ${JSON.stringify(method)}
    request-url     : ${JSON.stringify(url)}
    request-data    : ${JSON.stringify(data)}
    request-headers : ${JSON.stringify(headers)}
    response-status : ${JSON.stringify(status)}
    response-body   : ${JSON.stringify(body)}
    response-error  : ${JSON.stringify(error)}
  `;

  throw new Error(errorMsg);
};

module.exports = { checkStatusCode };
