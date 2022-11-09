// algo
// 1. Create index of last entry commit in array which has initial value 0
// 2. Iterate through array of commits
//   2.0. Take current commit
//   2.1. Create difference between current date and pointed date
//   2.2. Count entries of commit in subarray starting with index from 1-s step
//     2.2.1 Filter subarray with element
//   2.3. Find index of last commit which is equal email of author of the current commit
//   2.4. If count greater then 0 push to acc (the spreading of author object and add count field)
//   2.5. Else return acc

const _getDiffDate = days => {
  const currentDate = new Date();
  const diffDate = new Date(currentDate.setDate(currentDate.getDate() - days));
  return diffDate;
};

const _countCommitEntriesInArray = (startIndex, commitsArray, diffDate, author) =>
  commitsArray
    .slice(startIndex)
    .filter(
      itemCommit =>
        author.email === itemCommit.commit.author.email &&
        new Date(itemCommit.commit.author.date) >= diffDate,
    ).length;

const _pushCommitToAcc = (acc, count, author) => {
  if (count > 0) {
    acc.push({
      ...author,
      count,
    });
  }
};

const _transformCommitsAccordingEntries = (commitsArray, days) => {
  const diffDate = _getDiffDate(days);
  return commitsArray.reduce((acc, commitObject, index, arrayObject) => {
    const { author } = commitObject.commit;
    const isStoreAuthorInAcc =
      acc.findIndex(commitItem => author.email === commitItem.email) !== -1;
    if (!isStoreAuthorInAcc) {
      const count = _countCommitEntriesInArray(index, arrayObject, diffDate, author);
      _pushCommitToAcc(acc, count, author);
    }
    return acc;
  }, []);
};

const _receiveCommitsRequest = (userId, repoId) =>
  fetch(`https://api.github.com/repos/${userId}/${repoId}/commits?per_page=100`, {
    method: 'GET',
    headers: {
      Authorization: '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',
    },
  }).then(response => response.json());

export const getMostActiveDevs = ({ days, userId, repoId }) =>
  _receiveCommitsRequest(userId, repoId)
    .then(commits => _transformCommitsAccordingEntries(commits, days))
    .then(commits =>
      commits
        .map(({ count, name, email }) => ({ count, name, email }))
        .sort((commit1, commit2) => commit2.count - commit1.count),
    );

getMostActiveDevs({ days: 92, userId: 'airbnb', repoId: 'javascript' }).then(result =>
  console.log(result),
);
