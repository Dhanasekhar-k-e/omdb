

// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function(){
//     if(this.status == 200){
//         document.getElementById("demo").innerHTML = xhr.responseText
//         document.getElementById("status").innerText = "status code is "+ xhr.status
//     }
// }
//     xhr.open("GET","http://www.omdbapi.com/?apikey=43517cd7&s=god")
//     xhr.send()
//     console.log(this.response)
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
            card.style.backgroundColor = "turquoise"
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
            title.style.backgroundColor = "turquoise"
            title.innerText = arr.Search[i].Title
            
            var year = document.createElement('h5')
            // year.setAttribute('class','card-title')
            year.innerText = arr.Search[i].Year

            card.append(img,cardBody,title,year)
        }
    }
    count++
}

