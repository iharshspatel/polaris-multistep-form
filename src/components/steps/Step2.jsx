import React, { useEffect, useState } from 'react';
import { Card, Select, Spinner } from '@shopify/polaris';
import { URLS } from '../../constants/constants';

const Step2 = ({ formState, updateFormState, errors }) => {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCities = async (countryCode) => {
    //TODO : ADD PAGINATION
    setLoading(true);
    const response = await fetch(`${URLS.CITIS}?countryIds=${countryCode}`, {
      headers: { 'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY },
    });
    const citiesData = await response.json();
    setCities(citiesData.data.map((city) => ({ label: city.name, value: city.name })));
    setLoading(false);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(URLS.COUNTRIES);
      const countriesData = await response.json();
      setCountries(
        countriesData.map((country) => ({
          label: country.name.common,
          value: country.cca2,
        }))
      );
    };
    fetchCountries();
    if(formState.location.city){
      fetchCities()
    }
  }, []);


  return (
    <Card>
      <Select
        label="Country"
        options={countries}
        onChange={(value) => {
           console.log(value)
          updateFormState('location', 'country', countries.filter((c)=>c.value===value)[0]["label"]);
          fetchCities(value);
        }}
        value={countries.filter((c)=>c.label===formState.location.country)
          .length > 0 && countries.filter((c)=>c.label===formState.location.country)[0]["value"]}
        error={errors.country}
      />
      <br/>

      {loading ? (
        <Spinner />
      ) : (
        <Select
          label="City"
          options={cities}
          onChange={(value) => updateFormState('location', 'city', value)}
          value={formState.location.city}
          error={errors.city}
        />
      )}
    </Card>
  );
};

export default Step2;
