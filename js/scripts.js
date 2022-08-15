const firsth1 = document.querySelector("h1");
firsth1.remove();

const secondh1 = document.createElement("h1");
secondh1.innerHTML = "website recreation";
document.body.append(secondh1);

const paragraph = document.createElement("p");
paragraph.innerHTML = "The HTML on this page was created with JavaScript";
secondh1.after(paragraph);

const img = document.createElement("img");
img.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
img.setAttribute
img.setAttribute