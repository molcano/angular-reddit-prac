
angular.module('app')
.controller('postsController', function () {
  const vm = this
  const votes = 0

  vm.$onInit = function () {
    vm.postForm = false
       var posts=[
        {title: 'This is cool', body: 'Way cool, am I right?', author: 'Dr.Dolittle', imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtSMPbFiO0QkjMuuKylahuAX-PqwJ28X4PWITyD29wz03hCCR9b4QycBS', votes: 12, date: 1495221088055, comments: [
          {text: "how cool"},
          {text: "noo"}
      ]},
        {title: 'Are you cool?', body: 'cool as a cucumber?', author: 'Dr.Dolittle', imageURL: 'http://media.gettyimages.com/vectors/cool-as-a-cucumber-vector-id114453666?s=170667a', votes: 11, date: 1495231088053, comments:[
          {text: "whoa"}
        ]},
        {title: 'My baby', body: 'is my baby', author: 'baby doll', imageURL: 'https://i.ytimg.com/vi/wfvxTyFJOiU/maxresdefault.jpg', votes: 9, date: 1495231788055, comments:[
          {text: "baaaby"}
        ]}

      ]
      vm.posts = posts
  }

  vm.addPost = function () {
    vm.posts.push(vm.post)
    vm.post.votes = 0
    vm.post.comments = []
    vm.post.date = Date.now()
    console.log(vm.post.date)
    delete vm.post
    vm.postForm = false
  }

  vm.deleteItem = function(e, post){
    e.preventDefault()
        vm.posts.splice(vm.posts.indexOf(post), 1)
  }
  vm.upvote = function(post){
    post.votes ++
  }
  vm.downvote = function(post) {
    if (post.votes >= 1){
    post.votes --
    }
  }
  vm.addComment = function (post) {
    var commentSection= post.comments
    commentSection.push(vm.newComment)
    delete vm.newComment
  }
vm.showAddPost = function () {
  if (!vm.postForm){
    vm.postForm = true
  } else {
    vm.postForm = false
  }
}
})
