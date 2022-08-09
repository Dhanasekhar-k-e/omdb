

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

    var editDiv = document.createElement('div')
    editDiv.setAttribute("id","editableDiv")
    document.getElementById("posters").append(editDiv)

    var title = document.getElementById('searchTitle').value
    var xhr = new XMLHttpRequest();
    xhr.open("GET","http://www.omdbapi.com/?apikey=43517cd7&s="+title)
    xhr.send()
    xhr.onload = function(){
        // document.getElementById("demo").innerHTML = xhr.responseText
        var arr = JSON.parse(xhr.response)
        // console.log(arr.Search)
        // console.log(arr.Search.length)

        
        for(var i = 0; i < arr.Search.length; i++){
            console.log(arr.Search[i].Title)
            var block = document.createElement('div')
            block.style.height = "340px"
            block.style.width = "200px"
            block.style.border = "1px solid black"
            var image = document.createElement('img')
            image.src = arr.Search[i].Poster
            image.style.width = "200px"
            image.style.height="300px"
            var brk = document.createElement('br')
            block.append(image,brk,arr.Search[i].Title,brk,arr.Search[i].Year)
            document.getElementById("editableDiv").append(block)
        }
    }
    count++
}


// console.log(xhr.status)
// console.log("hello")
// console.log(xhr.respon)