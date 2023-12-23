fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
        const postsContainer = document.getElementById("posts-container");

        posts.forEach((post) => {
            const postElement = document.createElement("div");
            postElement.classList.add("post");

            const titleElement = document.createElement("h2");
            titleElement.textContent = post.title;

            const bodyElement = document.createElement("p");
            bodyElement.textContent = post.body;

            postElement.appendChild(titleElement);
            postElement.appendChild(bodyElement);

            postsContainer.appendChild(postElement);
        });
    })
    .catch((error) => console.log("Error fetching data:", error));