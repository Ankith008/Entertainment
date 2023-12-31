let trending = document.querySelector(".trending");
let recom = document.querySelector(".recom");
let data = [];
let intro = document.querySelector(".intro");
let content = document.querySelector(".content");
setTimeout(() => {
    intro.style.transform = 'translateY(-100%)';
}, 2000);


const screensize = window.innerWidth;
function newrefresh(data) {
    data.forEach(element => {
        if (element.isTrending) {
            let newdiv = document.createElement("div");
            newdiv.classList.add("dataa");
            let img1add = document.createElement("img");
            img1add.classList.add("img1");
            img1add.src = element.thumbnail.trending.large;
            
                
            let favimg = document.createElement("img")
            favimg.classList.add("fav");
            
                
            favimg.addEventListener("click", function () {
                favimg.classList.toggle("newone")
            });

            if (element.isBookmarked) {
                favimg.src = "icon-bookmark-full.svg"
            } else {
                favimg.src = "icon-bookmark-empty.svg";
            }
                
            favimg.addEventListener("click", function () {
                if (element.isBookmarked) {
                    element.isBookmarked = false
                    favimg.src = "icon-bookmark-empty.svg";
                } else {
                    element.isBookmarked = true;
                    favimg.src = "icon-bookmark-full.svg";
                }
            });

                

            let detail = document.createElement("div");
            detail.classList.add("detail");

            let detail1 = document.createElement("div");
            detail1.classList.add("detail1");

            let detail2 = document.createElement("div");
            detail2.classList.add("detail2");
                
            let dot1 = document.createElement("div");
            dot1.classList.add("dot1");
            dot1.textContent = ".";
                
            let dot2 = document.createElement("div");
            dot2.classList.add("dot2");
            dot2.textContent = ".";

            let date = document.createElement("p");
            date.classList.add("datep");
            date.textContent = element.year;
                
            let type = document.createElement("img");
            type.classList.add("type");
            if (element.category == "Movie") {
                type.src = "icon-category-movie.svg";
            } else {
                type.src = "icon-category-tv.svg";
            }
            let which = document.createElement("p");
            which.classList.add("which");
            which.textContent = element.category;

            let rate = document.createElement("p");
            rate.classList.add("rate");
            rate.textContent = element.rating;

            let name = document.createElement("p");
            name.classList.add("name");
            name.textContent = element.title;


            let play = document.createElement("div");
            play.classList.add("play");
                
            let playimg = document.createElement("img");
            playimg.classList.add("playimg");
            playimg.src = "icon-play.svg";

            let playcontent = document.createElement("p");
            playcontent.classList.add("playcontent");
            playcontent.textContent = "Play";

            newdiv.appendChild(img1add);
            newdiv.appendChild(favimg);
            detail1.appendChild(date);
            detail1.appendChild(dot2);
            detail1.appendChild(type);
            detail1.appendChild(which);
            detail1.appendChild(dot1);
            detail1.appendChild(rate);
            detail2.appendChild(name);
            detail.appendChild(detail1)
            detail.appendChild(detail2);
            play.appendChild(playimg);
            play.appendChild(playcontent);
            newdiv.appendChild(play);
            newdiv.appendChild(detail);
            trending.appendChild(newdiv);
                
        } else {
            let newdiv1 = document.createElement("div");
            newdiv1.classList.add("dataas")

            let img2add = document.createElement("img");
            img2add.classList.add("img2add");
            img2add.src = element.thumbnail.regular.large;

            let favimgs = document.createElement("img")
            favimgs.classList.add("favs");
                
            if (element.isBookmarked) {
                favimgs.src = "icon-bookmark-full.svg"
            } else {
                favimgs.src = "icon-bookmark-empty.svg";
            }
                
            favimgs.addEventListener("click", function () {
                if (element.isBookmarked) {
                    element.isBookmarked = false
                    favimgs.src = "icon-bookmark-empty.svg";
                } else {
                    element.isBookmarked = true;
                    favimgs.src = "icon-bookmark-full.svg";
                }
            });

            let newdetail = document.createElement("div");
            newdetail.classList.add("newdetail");

            let newdetail1 = document.createElement("div");
            newdetail1.classList.add("newdetail1");

            let newdetail2 = document.createElement("div");
            newdetail2.classList.add("newdetail2");
                
            let newdot1 = document.createElement("div");
            newdot1.classList.add("newdot1");
            newdot1.textContent = ".";
                
            let newdot2 = document.createElement("div");
            newdot2.classList.add("newdot2");
            newdot2.textContent = ".";

            let newdate = document.createElement("p");
            newdate.classList.add("newdatep");
            newdate.textContent = element.year;
                
            let newtype = document.createElement("img");
            newtype.classList.add("newtype");
            if (element.category == "Movie") {
                newtype.src = "icon-category-movie.svg";
            } else {
                newtype.src = "icon-category-tv.svg";
            }
            let newwhich = document.createElement("p");
            newwhich.classList.add("which");
            newwhich.textContent = element.category;

            let newrate = document.createElement("p");
            newrate.classList.add("rate");
            newrate.textContent = element.rating;

            let newname = document.createElement("p");
            newname.classList.add("newname");
            newname.textContent = element.title;

            let newplay = document.createElement("div");
            newplay.classList.add("newplay");
                
            let newplayimg = document.createElement("img");
            newplayimg.classList.add("newplayimg");
            newplayimg.src = "icon-play.svg";

            let newplaycontent = document.createElement("p");
            newplaycontent.classList.add("newplaycontent");
            newplaycontent.textContent = "Play";
                
            newdiv1.appendChild(img2add);
            newdiv1.appendChild(favimgs);
            newdetail1.appendChild(newdate);
            newdetail1.appendChild(newdot2);
            newdetail1.appendChild(newtype);
            newdetail1.appendChild(newwhich);
            newdetail1.appendChild(newdot1);
            newdetail1.appendChild(newrate);
            newdetail2.appendChild(newname);
            newdetail.appendChild(newdetail1);
            newdetail.appendChild(newdetail2);
            newplay.appendChild(newplayimg);
            newplay.appendChild(newplaycontent);
            newdiv1.appendChild(newplay);
            newdiv1.appendChild(newdetail);
            recom.appendChild(newdiv1);
        }
    });
}

let innercontainer=document.querySelector(".innercontent")
  
function onlymovies(data) {
    innercontainer.innerHTML = "";

    data.forEach(element => {
        if (element.category === "Movie") {
            let newdiv1 = document.createElement("div");
            newdiv1.classList.add("dataas")

            let img2add = document.createElement("img");
            img2add.classList.add("img2add");
            img2add.src = element.thumbnail.regular.large;

            let favimgs = document.createElement("img")
            favimgs.classList.add("favs");
                
            if (element.isBookmarked) {
                favimgs.src = "icon-bookmark-full.svg"
            } else {
                favimgs.src = "icon-bookmark-empty.svg";
            }
                
            favimgs.addEventListener("click", function () {
                if (element.isBookmarked) {
                    element.isBookmarked = false
                    favimgs.src = "icon-bookmark-empty.svg";
                } else {
                    element.isBookmarked = true;
                    favimgs.src = "icon-bookmark-full.svg";
                }
            });

            let newdetail = document.createElement("div");
            newdetail.classList.add("newdetail");

            let newdetail1 = document.createElement("div");
            newdetail1.classList.add("newdetail1");

            let newdetail2 = document.createElement("div");
            newdetail2.classList.add("newdetail2");
                
            let newdot1 = document.createElement("div");
            newdot1.classList.add("newdot1");
            newdot1.textContent = ".";
                
            let newdot2 = document.createElement("div");
            newdot2.classList.add("newdot2");
            newdot2.textContent = ".";

            let newdate = document.createElement("p");
            newdate.classList.add("newdatep");
            newdate.textContent = element.year;
                
            let newtype = document.createElement("img");
            newtype.classList.add("newtype");
            if (element.category == "Movie") {
                newtype.src = "icon-category-movie.svg";
            } else {
                newtype.src = "icon-category-tv.svg";
            }
            let newwhich = document.createElement("p");
            newwhich.classList.add("which");
            newwhich.textContent = element.category;

            let newrate = document.createElement("p");
            newrate.classList.add("rate");
            newrate.textContent = element.rating;

            let newname = document.createElement("p");
            newname.classList.add("newname");
            newname.textContent = element.title;

            let newplay = document.createElement("div");
            newplay.classList.add("newplay");
                
            let newplayimg = document.createElement("img");
            newplayimg.classList.add("newplayimg");
            newplayimg.src = "icon-play.svg";

            let newplaycontent = document.createElement("p");
            newplaycontent.classList.add("newplaycontent");
            newplaycontent.textContent = "Play";
                
            newdiv1.appendChild(img2add);
            newdiv1.appendChild(favimgs);
            newdetail1.appendChild(newdate);
            newdetail1.appendChild(newdot2);
            newdetail1.appendChild(newtype);
            newdetail1.appendChild(newwhich);
            newdetail1.appendChild(newdot1);
            newdetail1.appendChild(newrate);
            newdetail2.appendChild(newname);
            newdetail.appendChild(newdetail1);
            newdetail.appendChild(newdetail2);
            newplay.appendChild(newplayimg);
            newplay.appendChild(newplaycontent);
            newdiv1.appendChild(newplay);
            newdiv1.appendChild(newdetail);
            innercontainer.appendChild(newdiv1);
        }
    });
}
function onlytv(data) {
    innercontainer.innerHTML = "";

    data.forEach(element => {
        if (element.category === "TV Series") {
            let newdiv1 = document.createElement("div");
            newdiv1.classList.add("dataas")

            let img2add = document.createElement("img");
            img2add.classList.add("img2add");
            img2add.src = element.thumbnail.regular.large;

            let favimgs = document.createElement("img")
            favimgs.classList.add("favs");
                
            if (element.isBookmarked) {
                favimgs.src = "icon-bookmark-full.svg"
            } else {
                favimgs.src = "icon-bookmark-empty.svg";
            }
                
            favimgs.addEventListener("click", function () {
                if (element.isBookmarked) {
                    element.isBookmarked = false
                    favimgs.src = "icon-bookmark-empty.svg";
                } else {
                    element.isBookmarked = true;
                    favimgs.src = "icon-bookmark-full.svg";
                }
            });

            let newdetail = document.createElement("div");
            newdetail.classList.add("newdetail");

            let newdetail1 = document.createElement("div");
            newdetail1.classList.add("newdetail1");

            let newdetail2 = document.createElement("div");
            newdetail2.classList.add("newdetail2");
                
            let newdot1 = document.createElement("div");
            newdot1.classList.add("newdot1");
            newdot1.textContent = ".";
                
            let newdot2 = document.createElement("div");
            newdot2.classList.add("newdot2");
            newdot2.textContent = ".";

            let newdate = document.createElement("p");
            newdate.classList.add("newdatep");
            newdate.textContent = element.year;
                
            let newtype = document.createElement("img");
            newtype.classList.add("newtype");
            if (element.category == "Movie") {
                newtype.src = "icon-category-movie.svg";
            } else {
                newtype.src = "icon-category-tv.svg";
            }
            let newwhich = document.createElement("p");
            newwhich.classList.add("which");
            newwhich.textContent = element.category;

            let newrate = document.createElement("p");
            newrate.classList.add("rate");
            newrate.textContent = element.rating;

            let newname = document.createElement("p");
            newname.classList.add("newname");
            newname.textContent = element.title;

            let newplay = document.createElement("div");
            newplay.classList.add("newplay");
                
            let newplayimg = document.createElement("img");
            newplayimg.classList.add("newplayimg");
            newplayimg.src = "icon-play.svg";

            let newplaycontent = document.createElement("p");
            newplaycontent.classList.add("newplaycontent");
            newplaycontent.textContent = "Play";
                
            newdiv1.appendChild(img2add);
            newdiv1.appendChild(favimgs);
            newdetail1.appendChild(newdate);
            newdetail1.appendChild(newdot2);
            newdetail1.appendChild(newtype);
            newdetail1.appendChild(newwhich);
            newdetail1.appendChild(newdot1);
            newdetail1.appendChild(newrate);
            newdetail2.appendChild(newname);
            newdetail.appendChild(newdetail1);
            newdetail.appendChild(newdetail2);
            newplay.appendChild(newplayimg);
            newplay.appendChild(newplaycontent);
            newdiv1.appendChild(newplay);
            newdiv1.appendChild(newdetail);
            innercontainer.appendChild(newdiv1);
        }
    });
}
function onlybook(data) {
    innercontainer.innerHTML = "";

    data.forEach(element => {
        if (element.isBookmarked) {
            let newdiv1 = document.createElement("div");
            newdiv1.classList.add("dataas")

            let img2add = document.createElement("img");
            img2add.classList.add("img2add");
            img2add.src = element.thumbnail.regular.large;

            let favimgs = document.createElement("img")
            favimgs.classList.add("favs");
                
            if (element.isBookmarked) {
                favimgs.src = "icon-bookmark-full.svg"
            } else {
                favimgs.src = "icon-bookmark-empty.svg";
            }
                
            favimgs.addEventListener("click", function () {
                if (element.isBookmarked) {
                    element.isBookmarked = false
                    favimgs.src = "icon-bookmark-empty.svg";
                } else {
                    element.isBookmarked = true;
                    favimgs.src = "icon-bookmark-full.svg";
                }
            });

            let newdetail = document.createElement("div");
            newdetail.classList.add("newdetail");

            let newdetail1 = document.createElement("div");
            newdetail1.classList.add("newdetail1");

            let newdetail2 = document.createElement("div");
            newdetail2.classList.add("newdetail2");
                
            let newdot1 = document.createElement("div");
            newdot1.classList.add("newdot1");
            newdot1.textContent = ".";
                
            let newdot2 = document.createElement("div");
            newdot2.classList.add("newdot2");
            newdot2.textContent = ".";

            let newdate = document.createElement("p");
            newdate.classList.add("newdatep");
            newdate.textContent = element.year;
                
            let newtype = document.createElement("img");
            newtype.classList.add("newtype");
            if (element.category == "Movie") {
                newtype.src = "icon-category-movie.svg";
            } else {
                newtype.src = "icon-category-tv.svg";
            }
            let newwhich = document.createElement("p");
            newwhich.classList.add("which");
            newwhich.textContent = element.category;

            let newrate = document.createElement("p");
            newrate.classList.add("rate");
            newrate.textContent = element.rating;

            let newname = document.createElement("p");
            newname.classList.add("newname");
            newname.textContent = element.title;

            let newplay = document.createElement("div");
            newplay.classList.add("newplay");
                
            let newplayimg = document.createElement("img");
            newplayimg.classList.add("newplayimg");
            newplayimg.src = "icon-play.svg";

            let newplaycontent = document.createElement("p");
            newplaycontent.classList.add("newplaycontent");
            newplaycontent.textContent = "Play";
                
            newdiv1.appendChild(img2add);
            newdiv1.appendChild(favimgs);
            newdetail1.appendChild(newdate);
            newdetail1.appendChild(newdot2);
            newdetail1.appendChild(newtype);
            newdetail1.appendChild(newwhich);
            newdetail1.appendChild(newdot1);
            newdetail1.appendChild(newrate);
            newdetail2.appendChild(newname);
            newdetail.appendChild(newdetail1);
            newdetail.appendChild(newdetail2);
            newplay.appendChild(newplayimg);
            newplay.appendChild(newplaycontent);
            newdiv1.appendChild(newplay);
            newdiv1.appendChild(newdetail);
            innercontainer.appendChild(newdiv1);
        }
    });
}


           



//fetching
fetch("./data.json")
    .then(response => response.json())
    .then(responsedata => {
        data=responsedata
        newrefresh(data);
        
    })
    .catch(error => console.error(error));

//refreshing 
function refreshing() {
    trending.innerHTML = "";
    recom.innerHTML = "";
    fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        newrefresh(data);
       
    })
    .catch(error => console.error("error"));
}

let ulog = document.querySelector(".ulog");
ulog.addEventListener("click", refreshing)

let uhom = document.querySelector(".uhom");
let cat = document.querySelector(".cat");
uhom.addEventListener("click", function () {
    cat.style.display = "flex";
})





function searchfunction(data, text) {
    innercontainer.innerHTML = "";
    data.forEach(element => {
        if (element.title.toLowerCase().includes(text.toLowerCase())) {

            let newdiv1 = document.createElement("div");
            newdiv1.classList.add("dataas")

            let img2add = document.createElement("img");
            img2add.classList.add("img2add");
            img2add.src = element.thumbnail.regular.large;

            let favimgs = document.createElement("img")
            favimgs.classList.add("favs");
                
            if (element.isBookmarked) {
                favimgs.src = "icon-bookmark-full.svg"
            } else {
                favimgs.src = "icon-bookmark-empty.svg";
            }
                
            favimgs.addEventListener("click", function () {
                if (element.isBookmarked) {
                    element.isBookmarked = false
                    favimgs.src = "icon-bookmark-empty.svg";
                } else {
                    element.isBookmarked = true;
                    favimgs.src = "icon-bookmark-full.svg";
                }
            });

            let newdetail = document.createElement("div");
            newdetail.classList.add("newdetail");

            let newdetail1 = document.createElement("div");
            newdetail1.classList.add("newdetail1");

            let newdetail2 = document.createElement("div");
            newdetail2.classList.add("newdetail2");
                
            let newdot1 = document.createElement("div");
            newdot1.classList.add("newdot1");
            newdot1.textContent = ".";
                
            let newdot2 = document.createElement("div");
            newdot2.classList.add("newdot2");
            newdot2.textContent = ".";

            let newdate = document.createElement("p");
            newdate.classList.add("newdatep");
            newdate.textContent = element.year;
                
            let newtype = document.createElement("img");
            newtype.classList.add("newtype");
            if (element.category == "Movie") {
                newtype.src = "icon-category-movie.svg";
            } else {
                newtype.src = "icon-category-tv.svg";
            }
            let newwhich = document.createElement("p");
            newwhich.classList.add("which");
            newwhich.textContent = element.category;

            let newrate = document.createElement("p");
            newrate.classList.add("rate");
            newrate.textContent = element.rating;

            let newname = document.createElement("p");
            newname.classList.add("newname");
            newname.textContent = element.title;

            let newplay = document.createElement("div");
            newplay.classList.add("newplay");
                
            let newplayimg = document.createElement("img");
            newplayimg.classList.add("newplayimg");
            newplayimg.src = "icon-play.svg";

            let newplaycontent = document.createElement("p");
            newplaycontent.classList.add("newplaycontent");
            newplaycontent.textContent = "Play";
                
            newdiv1.appendChild(img2add);
            newdiv1.appendChild(favimgs);
            newdetail1.appendChild(newdate);
            newdetail1.appendChild(newdot2);
            newdetail1.appendChild(newtype);
            newdetail1.appendChild(newwhich);
            newdetail1.appendChild(newdot1);
            newdetail1.appendChild(newrate);
            newdetail2.appendChild(newname);
            newdetail.appendChild(newdetail1);
            newdetail.appendChild(newdetail2);
            newplay.appendChild(newplayimg);
            newplay.appendChild(newplaycontent);
            newdiv1.appendChild(newplay);
            newdiv1.appendChild(newdetail);
            innercontainer.appendChild(newdiv1);
            innercontainer.classList.add("content");
        }
    });
}


var input = document.querySelector("input");
input.addEventListener("keydown",(event)=>{
    if (event.key == "Enter") {
        if (input.value.length != 0) {
            let text = input.value;
            searchfunction(data,text)

        }
    }
})
let movies = document.querySelector("#movies");
let booked = document.querySelector("#booked");
let tv = document.querySelector("#tv");


let umov = document.querySelector(".umov");
umov.addEventListener("click", function () {
    onlymovies(data);
    innercontainer.classList.add("content");
    movies.style.display = "flex";
    booked.style.display = "none";
    tv.style.display = "none";
});

let u = document.querySelector(".u");
u.addEventListener("click", function () {
    onlytv(data);
    innercontainer.classList.add("content");
    tv.style.display = "flex";
    movies.style.display = "none";
    booked.style.display = "none";
});
    
let ubook = document.querySelector(".ubook");
ubook.addEventListener("click", function () {
    onlybook(data);
    innercontainer.classList.add("content");
    movies.style.display = "none";
    booked.style.display = "flex";
    tv.style.display = "none";
});

let mov = document.querySelector(".mov");
let tvse = document.querySelector(".tvse");
let bookmark = document.querySelector(".bookmark");

mov.addEventListener("click", function () {
    cat.style.display = "none";
    onlymovies(data);
    innercontainer.classList.add("content");
    movies.style.display = "flex";
    booked.style.display = "none";
    tv.style.display = "none";
});

tvse.addEventListener("click", function () {
    onlytv(data);
    cat.style.display = "none";
    innercontainer.classList.add("content");
    tv.style.display = "flex";
    movies.style.display = "none";
    booked.style.display = "none";
});

bookmark.addEventListener("click", function () {
    onlybook(data);
    cat.style.display = "none";
    innercontainer.classList.add("content");
    movies.style.display = "none";
    booked.style.display = "flex";
    tv.style.display = "none";
})
