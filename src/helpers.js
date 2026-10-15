// Pure helper functions used by tests (Node) and mirrored logic in the browser script.
// Keep these pure to allow reliable unit testing.

function buildPrefillUrl(baseUrl, values = {}){
  const url = new URL(baseUrl);
  if (values.name) url.searchParams.set('name', values.name);
  if (values.email) url.searchParams.set('email', values.email);
  if (values.service) url.searchParams.set('a1', values.service);
  return url.toString();
}

function consentAllowed(consentChecked){
  return Boolean(consentChecked);
}

module.exports = { buildPrefillUrl, consentAllowed };
