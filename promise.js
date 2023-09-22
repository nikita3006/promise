


// creating a post
function createPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts.push(post);
      resolve(post);
    }, 1000);
  });
}

//  updating user's last activity time
function updateLastUserActivityTime(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      user.lastActivityTime = new Date().toISOString();
      resolve(user.lastActivityTime);
    }, 1000);
  });
}

// delete last post
function deleteLastPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length === 0) {
        reject('No posts to delete.');
      } else {
        const deletedPost = posts.pop();
        resolve(deletedPost);
      }
    }, 1000);
  });
}

//  update user's last activity time
createPost({ title: 'Post 1', content: 'This is the first post.' })
  .then((createdPost) => {
    console.log('Post created:', createdPost);
    return updateLastUserActivityTime(user);
  })
  .then((activityTime) => {
    console.log('User last activity time updated:', activityTime);

    // Delete last post
    return deleteLastPost();
  })
  .then((deletedPost) => {
    console.log('Deleted post:', deletedPost);
    console.log('Remaining posts:', posts);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
