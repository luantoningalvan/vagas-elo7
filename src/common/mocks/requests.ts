import nock from "nock";
import { GET_JOBS_RESPONSE_MOCK } from "./responses";

const fakeApi = nock("http://localhost/api");

export const getJobsSuccess = () =>
  fakeApi.get("/jobs").query(true).reply(200, GET_JOBS_RESPONSE_MOCK).persist();

export const getJobsError = () =>
  fakeApi
    .get("/jobs")
    .query(true)
    .reply(500, "Internal Server Error")
    .persist();

export const resetMocks = () => {
  nock.cleanAll();
};
