//var url = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';  
         
function fetchData(){
fetch("https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72")
            .then(response => {
        if(!response.ok){
            throw Error('Erro !');
        }
    return response.json();
   })
    .then(data => {
        
 data.forEach((item) => {
       console.log(item.name);
    const html = data.map(item =>{
            return  innerHtml = `
<div class="card1"  >

  <img class="card-img-top" style="width: 290px; height:200px; " src="${item.photo}" alt="Card image cap">
<div class="container">
<h3 class="card-title" >${item.name}</h3>
<h5 class="card-title" >${item.property_type}</h5>
    <p class="card-text">R$: ${item.price}</p>
  </div> 
</div>
`;
           
        })
       .join("");
     document.querySelector("#nome").insertAdjacentHTML("afterbegin",html);
    });

        
    
    document.querySelector("#nome").insertAdjacentHTML("afterbegin",html);
            })
    .catch(err => {
     console.log(err);
 });
            
    
 }
 fetchData();



//const postsPromisse = fetch('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72');
//console.log(postsPromisse);
//postsPromisse
//.then(data => data.json())
//.then(data => {
  //  data.forEach((item) => {
    //    console.log(item.name);                          
    //});
//})
            
            
        



/*
	1 - Loop Through Array & Access each value
  2 - Create Table Rows & append to table
*/


var state = {
    'querySet': tableData,

    'page': 1,
    'rows': 5,
    'window': 5,
}

buildTable()

function pagination(querySet, page, rows) {

    var trimStart = (page - 1) * rows
    var trimEnd = trimStart + rows

    var trimmedData = querySet.slice(trimStart, trimEnd)

    var pages = Math.round(querySet.length / rows);

    return {
        'querySet': trimmedData,
        'pages': pages,
    }
}

function pageButtons(pages) {
    var wrapper = document.getElementById('pagination-wrapper')

    wrapper.innerHTML = ``
	console.log('Pages:', pages)

    var maxLeft = (state.page - Math.floor(state.window / 2))
    var maxRight = (state.page + Math.floor(state.window / 2))

    if (maxLeft < 1) {
        maxLeft = 1
        maxRight = state.window
    }

    if (maxRight > pages) {
        maxLeft = pages - (state.window - 1)
        
        if (maxLeft < 1){
        	maxLeft = 1
        }
        maxRight = pages
    }
    
    

    for (var page = maxLeft; page <= maxRight; page++) {
    	wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`
    }

    if (state.page != 1) {
        wrapper.innerHTML = `<button value=${1} class="page btn btn-sm btn-info">&#171; First</button>` + wrapper.innerHTML
    }

    if (state.page != pages) {
        wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-info">Last &#187;</button>`
    }

    $('.page').on('click', function() {
        $('#table-body').empty()

        state.page = Number($(this).val())

        buildTable()
    })

}


function buildTable() {
    var table = $('#table-body')

    var data = pagination(state.querySet, state.page, state.rows)
    var myList = data.querySet

    for (var i = 1 in myList) {
        //Keep in mind we are using "Template Litterals to create rows"
        var row = `<tr>
                  <td>${item.name}</td>
                 
                  </tr>`;
        table.append(row)
    }

    pageButtons(data.pages)
}



            
            
            
            
            
            
            
            
            
            
            
            
            
            
         