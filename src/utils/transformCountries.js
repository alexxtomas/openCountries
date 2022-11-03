export const transformCountries = (countries) => {
  if (countries?.length) {
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
  } else {
    const { name, currencies, capital, region, subregion, languages, translations, maps, population, timezones, flags, capitalInfo } = countries
    return {
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

    }
  }
}
