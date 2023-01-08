const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const mainEl = document.getElementById("main");
const doubleClickLike = document.getElementsByClassName("db-click-like");

function render() {
  let innerHtml = "";
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    innerHtml += `<section class="post">
                    <section class="section-header">
                        <img class="avatar" src="${post.avatar}">
                        <div class="avatar-info">
                            <h3 class="name">${post.name}</h3>
                            <h3 class="location">${post.location}</h3>
                        </div>
                    </section>
                    <img class="post-image db-click-like" ondblclick="${liked(
                      i
                    )}" src="${post.post}">
                    <section class="section-data">
                        <div class="buttons">
                            <img class="heart-icon db-click-like" ondblclick="${liked(
                              i
                            )}" src="images/icon-heart.png">
                            <img class="comment-icon" src="images/icon-comment.png">
                            <img class="dm-icon" src="images/icon-dm.png">
                        </div>
                        <h3 class="likes">${post.likes} likes</h3>
                        <h3 class="description">${
                          post.username
                        } <span class="lighter">${post.comment}</span></h3>
                    </section>
                </section>`;
  }

  mainEl.innerHTML = innerHtml;
}

render();

function liked(postNumber) {
  posts[postNumber].likes += 1;
  render();
}
