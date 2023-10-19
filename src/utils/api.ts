export function getPlanetsAPI() {
  const PLANETS_API = 'https://swapi.dev/api/planets';
  const result = fetch(PLANETS_API)
    .then((response) => response.json())
    .then((data) => {
      const { results } = data;
      return results;
    });
  return result;
}
