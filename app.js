var after = "";
var subredditName = "pics";

// kemonomimi

const category = {
  0 : "new",
  1 : "hot"
}
Object.freeze(category);

console.log("Milego przegladania :)")
console.log("by: https://luuqe.tk/");

document.title = `Browsing pics from r/${subredditName}`;

async function fetchData() {

  const response = await fetch(`https://www.reddit.com/r/${subredditName}/${category[0]}.json?after=${after}`);
  const body = await response.json();

  let getCategory = category[0];
  let displayCategory = document.getElementById("category_text");
  let displaySubredditName = document.getElementById("subreddit_name")

  if (document.getElementById("anime_baby")) {
    document.getElementById("anime_baby").remove();
  }

  var container = document.getElementById("container");

  try {

    let parentdiv = document.createElement("div");
    parentdiv.id = "anime_baby";
  
    after = body.data.after;
    
    for (let index = 0; index < body.data.children.length; index++) {
      if (body.data.children[index].data.post_hint === "image") {
  
        let div = document.createElement("div");
        let h4 = document.createElement("h4");
        let image = document.createElement("img");
  
        image.src = body.data.children[index].data.url;
        h4.textContent = body.data.children[index].data.title;
        displayCategory.textContent = `Category: ${getCategory}`;
        displaySubredditName.textContent = `Subreddit: ${subredditName}`;
        
        div.appendChild(h4);
        div.appendChild(image);
        parentdiv.appendChild(div);
      }
    }
    container.appendChild(parentdiv);

  } catch (e) {
    console.log(`Error: ${e}`)
  }
}