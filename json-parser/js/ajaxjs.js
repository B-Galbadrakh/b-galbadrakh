$(document).ready(function() {
  $("#getUser").on("click", getUserInfo);
});

function getUserInfo() {
  var a = $("#inputusername").val();
  console.log(a);
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users/" + a,
    method: "POST",
    success: function(user) {
      //   console.log(user);
      $("#name").html("");
      $("#usertitle").html("");
      $("#username").html("");
      $("#name").append(user.name);
      $("#usertitle").append(user.email);
      $("#username").append(user.username);
    },
    error: function(err, result) {
      console.log(err);
    }
  });

  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/",
    method: "POST",
    data: { userId: $("#inputusername").val() },
    success: function(posts) {
      console.log(posts);
      for (postIndex in posts) {
        $("#posts").append(
          posts[postIndex].title +
            "<br>" +
            posts[postIndex].body +
            "<br><br><br><br>" +
            "<button id='" +
            posts[postIndex].id +
            '\' onclick="getComment(this.id)">Comment</button><br><br><br><br><div id="showcomment"><div>'
        );
      }
    },
    error: function(err) {
      console.log(err);
    }
  });
}

function getComment(id) {
  console.log(id);
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/" + id + "/comments",
    method: "POST",
    data: { postId: id },
    success: function(comments) {
      console.log(comments);
      for (i in comments) {
        $("#showcomment").append(comments[i].body + "<br><br><br><br>");
      }
    },
    error: function(err) {
      console.log(err);
    }
  });
}
