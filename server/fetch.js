import fetch from "node-fetch";

const noaaAPI = async () => {
  const datasetData = await fetch(
    `https://www.ncei.noaa.gov/cdo-web/api/v2/datacategories?offset=20`,
    {
      headers: {
        token: `${NOAA_KEY}`,
      },
    }
  );
  const jsonifiedData = await datasetData.json();
  console.log(jsonifiedData);
};
noaaAPI();
