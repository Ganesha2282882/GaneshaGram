const socket = io.connect("https://PlogoGram.rohilpatel.repl.co");
$(document).ready(function(){
$("#newpostbutton").click(function() {
  $(".createPost").css("display", "block")
});
});
$("#submit").click(function(){
  socket.emit("posts", {
    username: $("#username").val(),
    title: $("#title").val(),
    context: $("#about").val()
  });
  $(".createPost").css("display", "none");
  
  if(document.getElementById("username").value === ""){
  alert("h")
}

});


socket.on("posts", (data) => {
  document.getElementById("aaaa").innerHTML += `    
  <div id = "postCard" class = "post">
      <h2>${data.title}</h2>
      <p>Written By ${data.username}</p><hr/>
      <p>${data.context}</p>
    </div>
`
});

socket.on("recent", (data) => {
  document.getElementById("a").innerText = `${data.title}`;
  document.getElementById("b").innerText = `Written By: ${data.username}`;
  document.getElementById("c").innerText = data.context;

})


