var after = "";
var subredditName = "poland";

// kemonomimi

const category = {
  0 : "new",
  1 : "hot"
}
Object.freeze(category);

console.log("Milego przegladania :)")

document.title = `Pics from r/${subredditName}`;

async function fetchDailyData() {

    const response = await fetch(`https://www.reddit.com/r/${subredditName}/${category[0]}.json?after=${after}`);
    const body = await response.json();
  
    let getCategory = category[0];
    let displayCategory = document.getElementById("category_text");
    let displaySubredditName = document.getElementById("subreddit_name")
  
    if (document.getElementById("anime_baby")) {
      document.getElementById("anime_baby").remove();
    }
  
    try {
  
      let parentdiv = document.createElement("div");
      parentdiv.id = "anime_baby";
    
      after = body.data.after;
      var dailyNumer = getCurrentDay();
      console.log(body.data.children)
      console.log(dailyNumer)
      console.log(getCurrentDay())
  
      if (body.data.children[dailyNumer].data.post_hint === "image") {
  
        let container = document.getElementById("container");
        let div = document.createElement("div");
        let h4 = document.createElement("h4");
        let image = document.createElement("img");
  
        image.src = body.data.children[dailyNumer].data.url;
        h4.textContent = body.data.children[dailyNumer].data.title;
        displayCategory.textContent = `Category: ${getCategory}`;
        displaySubredditName.textContent = `Subreddit: ${subredditName}`;
        
        div.appendChild(h4);
        div.appendChild(image);
        parentdiv.appendChild(div);
        container.appendChild(parentdiv);
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
  
  function getCurrentDay() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
  
    today = mm + '/' + dd + '/' + yyyy;
    
    if(dd >= 24) {
      dd =- 7;
    }
    return dd;
  }