let singlePosts=document.querySelector(".single-posts")
let multiplePosts=document.querySelector(".multiple-posts")
let square=document.querySelector(".square")
let grid=document.querySelector(".grid")

grid.addEventListener("click", () => {
    multiplePosts.classList.remove("hidden")
    multiplePosts.classList.add("show")
    singlePosts.classList.add("hidden")
})
square.addEventListener("click", () => {
    multiplePosts.classList.add("hidden")
    singlePosts.classList.remove("hidden")
    singlePosts.classList.add("show")
})