import nock from "nock";

const fakeApi = nock("http://localhost/api");

export const getJobsSuccess = () =>
  fakeApi
    .get("/jobs")
    .query(true)
    .reply(200, {
      rows: [
        {
          title: "Frontend Developer",
          location: "São Paulo",
        },
        {
          title: "Backend Developer",
          location: "São Paulo",
        },
      ],
      count: 2,
    })
    .persist();

export const resetMocks = () => {
  nock.cleanAll();
};
