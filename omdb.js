


var count = 0
function search(){
      if(count != 0){
            document.getElementById("editableDiv").remove()
        }

    var title = document.getElementById('searchTitle').value
    var xhr = new XMLHttpRequest();
    xhr.open("GET","http://www.omdbapi.com/?apikey=43517cd7&s="+title)
    xhr.send()
    xhr.onload = function(){
       
        var arr = JSON.parse(xhr.response)
 
        var editDiv = document.createElement('div')
        editDiv.setAttribute("id","editableDiv")
        document.getElementById("posters").append(editDiv)
        
        for(var i = 0; i < arr.Search.length; i++){
            
            if(i % 6 == 0){
                var row = document.createElement('div')
                row.setAttribute('class','row')
                editDiv.append(row)
            }

            var card = document.createElement('div')
            card.setAttribute('class','col-xs-12 col-md-4 col-sm-6 col-lg-2 p-2')
            card.style.backgroundColor = "black"
            row.append(card)
           
            var img = document.createElement('img')
            img.setAttribute('class','card-img-top')
            // img.style.width = "300px"
            // img.style.height = "400px"
            img.src = arr.Search[i].Poster
            

            var cardBody = document.createElement('div')
            cardBody.setAttribute('class','card-body')
         

            var title = document.createElement('h5')
            // title.setAttribute('class','card-title')
            title.style.backgroundColor = "black"
            title.style.color = "white"
            title.innerText = arr.Search[i].Title
            
            var year = document.createElement('h5')
            // year.setAttribute('class','card-title')
            year.innerText = arr.Search[i].Year
            year.style.color = "red"

            card.append(img,cardBody,title,year)
        }
    }
    count++
}
function loadOnStart(){
    var xhr = new XMLHttpRequest();
    var title = 'avengers'
    xhr.open("GET","http://www.omdbapi.com/?apikey=43517cd7&s="+title)
    xhr.send()
    xhr.onload = function(){
        
        var arr = JSON.parse(xhr.response)
 
        var editDiv = document.createElement('div')
        editDiv.setAttribute("id","editableDiv")
        document.getElementById("posters").append(editDiv)
        
        for(var i = 0; i < arr.Search.length; i++){
            
            if(i % 6 == 0){
                var row = document.createElement('div')
                row.setAttribute('class','row')
                editDiv.append(row)
            }

            var card = document.createElement('div')
            card.setAttribute('class','col-xs-12 col-md-4 col-sm-6 col-lg-2 p-2')
            card.style.backgroundColor = "black"
            row.append(card)
           
            var img = document.createElement('img')
            img.setAttribute('class','card-img-top')
            // img.style.width = "300px"
            // img.style.height = "400px"
            img.src = arr.Search[i].Poster
            

            var cardBody = document.createElement('div')
            cardBody.setAttribute('class','card-body')
         

            var title = document.createElement('h5')
            // title.setAttribute('class','card-title')
            title.style.backgroundColor = "black"
            title.style.color = "white"
            title.innerText = arr.Search[i].Title
            
            var year = document.createElement('h5')
            // year.setAttribute('class','card-title')
            year.innerText = arr.Search[i].Year
            year.style.color = "red"

            card.append(img,cardBody,title,year)
        }
    }
    count++
}

