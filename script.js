const Actors = [
    {
        name: "Вячеслав Васильевич Тихонов",
        img: "Тихонов 1.jpg",
        link: "Slava.html"
    },
    {
        name:"Василий Семёнович Лановой",
        img:"Лановой.webp"
    },
    {
        name: "Олег Иванович Янковский",
        img:"Янковский.webp"
    },
    {
        name: "Элина Авраамовна Быстрицкая",
        img:"Быстрицкая.webp"
    },
    {
        name: "Светлана Сергеевна Дружинина",
        img:"дружинина 1.jpg"
    },

]

function displayActors(actors){
    var container = document.getElementById("container");
    container.innerHTML = "";
  

    actors.forEach(function(actor, index) {
        var card = document.createElement("div");
        card.classList.add("card")
        

        var image = document.createElement("img");
        image.style.maxWidth = "250px";
        image.src = actor.img;
        image.alt = "";

        var name = document.createElement("p");
        
        
        card.appendChild(image);
        if(actor.link){
            var link = document.createElement("a");
            link.textContent = actor.name;
            link.href = actor.link;
            name.appendChild(link);
            card.appendChild(name);
        } else{ name.textContent = actor.name;
            card.appendChild(name);}
        

        container.appendChild(card);
    })

}


document.addEventListener("DOMContentLoaded", function() {
    displayActors(Actors);
  });
  
  function searchActors(actors) {
    var searchQuery = document.getElementById("Search").value.toLowerCase();
    var dataList = [];
 
    for (var i = 0; i < actors.length; i++) {
        var actor = actors[i];
        if (actor.name.toLowerCase().includes(searchQuery)) {
            dataList.push(actor);

        }
    }

    displayActors(dataList);

  }document.addEventListener("DOMContentLoaded", function() {
    var searchInput = document.getElementById("Search");
    var searchBtn = document.getElementById("SearchBtn");

    searchInput.addEventListener("input", function(event) {
        searchActors(Actors);
        });

    searchBtn.addEventListener("click", function() {
        searchActors(Actors);
    });
});
