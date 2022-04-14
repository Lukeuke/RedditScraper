var after = "";
var subredditName = "pics";
var category = "new";

// kemonomimi

console.log("Milego przegladania :)")

document.title = `Pics from r/${subredditName}`;

async function fetchData() {

  const response = await fetch(`https://www.reddit.com/r/${subredditName}/${category}.json?after=${after}`);
  const body = await response.json();

  if (document.getElementById("anime_baby")) {
    document.getElementById("anime_baby").remove();
  }

  try {

    let parentdiv = document.createElement("div");
    parentdiv.id = "anime_baby";
  
    after = body.data.after;
    
    for (let index = 0; index < body.data.children.length; index++) {
      if (body.data.children[index].data.post_hint === "image") {
  
        let container = document.getElementById("container");
        let div = document.createElement("div");
        let h4 = document.createElement("h4");
        let image = document.createElement("img");
  
        image.src = body.data.children[index].data.url;
        h4.textContent = body.data.children[index].data.title;
        
        div.appendChild(h4);
        div.appendChild(image);
        parentdiv.appendChild(div);
        container.appendChild(parentdiv);
      }
    }
    document.body.appendChild(parentdiv);

  } catch (e) {
    console.log(`Error: ${e}`)
  }
}

async function fetchDailyData() {
  const response = await fetch(`https://www.reddit.com/r/${subredditName}/${category}.json?after=${after}`);
  const body = await response.json();

  if (document.getElementById("anime_baby")) {
    document.getElementById("anime_baby").remove();
  }

  try {

    let parentdiv = document.createElement("div");
    parentdiv.id = "anime_baby";
  
    after = body.data.after;
  
    var dailyIndex = getRandomInt(0, body.data.children.length)

    console.log(body.data.children);
    console.log(dailyIndex);

    if (body.data.children[dailyIndex].data.post_hint === "image") {
      let div = document.createElement("div");
      let h4 = document.createElement("h4");
      let image = document.createElement("img");

      image.src = body.data.children[dailyIndex].data.url;
      h4.textContent = body.data.children[dailyIndex].data.title;
      
      div.appendChild(h4);
      div.appendChild(image);
      parentdiv.appendChild(div);
    }
    document.body.appendChild(parentdiv);

  } catch (e) {
    console.log(`Error: ${e}`)
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}