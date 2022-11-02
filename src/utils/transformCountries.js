export const transformCountries = (countries) => {
  return countries.map(({ name, currencies, capital, region, subregion, languages, translations, maps, population, timezones, flags, capitalInfo }) => ({
    commonName: name.common,
    officialName: name.official,
    currencies,
    capital: { name: capital, latlng: capitalInfo.latlng },
    region,
    subregion,
    languages,
    translations,
    map: maps.googleMaps,
    population,
    timeZones: timezones,
    flag: flags.png

  }))
}
