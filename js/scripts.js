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
img.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
img.setAttribute("style", "width:50%");
paragraph.after(img);

const thirdh1 = document.createElement("h1");
thirdh1.innerHTML = "Facts about the Multicolored Tanager";
img.after(thirdh1);

const ul = document.createElement("ul");
thirdh1.after(ul);

const li1 = document.createElement("li");
li1.innerHTML = "It is endemic to the mountains of Colombia."
const li2 = document.createElement("li");
li2.innerHTML = "It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet."

ul.prepend(li1);
ul.append(li2);

const ancor = document.createElement("a");
ancor.innerHTML = "clickhere";
ancor.setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager");
ul.after(ancor);

