import Github from "../../components/resume/repositoriesList/githubAPI/github";

test("getInfoOfRepositoriesList get details about the repository", () => {
  return Github.createRepositoriesWithDetailsList("eidiinnn", ["Personal-website"]).then(
    (returnedList) => {
      expect(returnedList.list[0].id).toBe(434252369);
    }
  );
});

test("getInfoOfRepositoriesList don't list a repository get a bad request", () => {
  return Github.createRepositoriesWithDetailsList("eidiinnn", [
    "repository-does-not-exist",
    "Personal-website",
  ]).then((returnedList) => {
    expect(returnedList.list[0].id).toBe(434252369);
  });
});

test("getInfoOfRepositoriesList detect if all requests fail", () => {
  return Github.createRepositoriesWithDetailsList("eidiinnn", [
    "repository-not-exist",
  ]).then((returnedList) => {
    expect(returnedList.requisitionsStatus.allFail).toBe(true);
  });
});

test("getInfoOfRepositoriesList return more than one repository", () => {
  return Github.createRepositoriesWithDetailsList("eidiinnn", [
    "Token",
    "Personal-website",
  ]).then((returnedList) => {
    expect(returnedList.list.length).toBe(2);
  });
});

test("getInfoOfRepositoriesList detect more than one repeated repositories", () => {
  return Github.createRepositoriesWithDetailsList("eidiinnn", [
    "repository-not-exist",
    "repository-not-exist",
    "repository-not-exist",
  ]).then((returnedList) => {
    expect(returnedList.requisitionsStatus.failNumber).toBe(3);
  });
});
