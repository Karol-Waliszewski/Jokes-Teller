const generateJoke = function() {
  let $jokeContainer = document.getElementById("joke");
  fetch("http://api.icndb.com/jokes/random").then(res => {
    res.json().then(data => {
      $jokeContainer.innerHTML = data.value.joke;
    });
  }).catch(err => {
    $jokeContainer.innerHTML = err;
  })
}

document.addEventListener('DOMContentLoaded', generateJoke)
