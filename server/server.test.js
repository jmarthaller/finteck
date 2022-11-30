const dataModel = [
  {
    _id: "[SAMPLE_ID_AUTO_GEN_FROM_MONGO",
    name: "Bolsa Chica",
    position: "Orange County",
    level: "Standard",
    confidenceScore: 0.75,
    mapSRCForIframe: "https://stubbed_in_url.com",
  },
];

test("validates that the data model is populated", () => {
  expect(dataModel.length).toBeGreaterThan(0);
});

test("validates id for beach data model", () => {
  expect(dataModel[0]._id).not.toBeUndefined();
});

test("validates name for beach data model", () => {
  expect(typeof dataModel[0].name).toBe("string");

  expect(dataModel[0].name.length).toBeGreaterThan(0);
});

test("validates position for beach data model", () => {
  expect(typeof dataModel[0].position).toBe("string");

  expect(dataModel[0].position.length).toBeGreaterThan(0);
});

test("validates level for beach data model", () => {
  expect(typeof dataModel[0].level).toBe("string");

  expect(dataModel[0].level.length).toBeGreaterThan(0);
});

test("validates confidenceScore for beach data model", () => {
  expect(typeof dataModel[0].confidenceScore).toBe("number");

  expect(dataModel[0].confidenceScore).toBeGreaterThan(0);
  expect(dataModel[0].confidenceScore).toBeLessThan(1);
});

test("validates iframe for beach data model", () => {
  expect(typeof dataModel[0].mapSRCForIframe).toBeTruthy();

  expect(dataModel[0].mapSRCForIframe.length).toBeGreaterThan(0);
});
