const Show = ({ filteredCountries, ix }) => {
  let i = 0;
  !ix?i=0:i=ix

  const country = filteredCountries[i];
  console.log(filteredCountries,'ddd')
  const area = country.area;
  const capital = country.capital[i];
  const languages = country.languages;
  const flag = country.flags.svg;
  return (
    <>
      <h1>{country.name.common}</h1>
      <p>{area}</p>
      <p>{capital}</p>
      <p>languages</p>
      <ul>
        {Object.values(languages).map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      <img
        src={flag}
        alt="flag of country"
        width={300}
        style={{ boder: "1px solid #000" }}
      />
    </>
  );
};

export default Show;
