const { buildPrefillUrl, consentAllowed } = require('../src/helpers');

describe('helpers', () => {
  test('buildPrefillUrl adds params when provided', () => {
    const url = buildPrefillUrl('https://calendly.com/dembeleabou2004/45min', { name: 'Max Mustermann', email: 'max@example.com', service: 'Haarschnitt' });
    expect(url).toContain('calendly.com/dembeleabou2004/45min');
    expect(url).toContain('name=Max+Mustermann');
    expect(url).toContain('email=max%40example.com');
    expect(url).toContain('a1=Haarschnitt');
  });

  test('buildPrefillUrl returns baseUrl when no values', () => {
    const url = buildPrefillUrl('https://calendly.com/dembeleabou2004/45min', {});
    expect(url).toBe('https://calendly.com/dembeleabou2004/45min');
  });

  test('consentAllowed returns true for truthy, false for falsy', () => {
    expect(consentAllowed(true)).toBe(true);
    expect(consentAllowed(false)).toBe(false);
    expect(consentAllowed(null)).toBe(false);
    expect(consentAllowed('')).toBe(false);
    expect(consentAllowed('yes')).toBe(true);
  });
});
