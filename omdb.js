

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
        // document.getElementById("demo").innerHTML = xhr.responseText
        var arr = JSON.parse(xhr.response)
        // console.log(arr.Search)
        // console.log(arr.Search.length)
      
    
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
            card.setAttribute('class','card col-md-4 col-sm-12 col-lg-2')
            row.append(card)
           
            var img = document.createElement('img')
            img.setAttribute('class','card-img-top')
            img.src = arr.Search[i].Poster
            

            var cardBody = document.createElement('div')
            cardBody.setAttribute('class','card-body')
            // img.append(cardBody)

            var title = document.createElement('h5')
            title.setAttribute('class','card-title font-size-auto')
            title.innerText = arr.Search[i].Title
            // cardBody.append(title)
            card.append(img,cardBody,title)
        }
    }
    count++
}


// console.log(xhr.status)
// console.log("hello")
// console.log(xhr.respon)