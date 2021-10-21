const submitBtn = document.querySelector("#submit");





function objectArrayCardInfo(){
    let i = 0;
    for(i = 0; i<objectArray.length; i++){
        $('#cardContent').append(
            `
                    <div class="card card--style" style="width: 18rem;">
                        <div class="img-container">
                        <img class="card-img-top" src="${objectArray[i].image}" alt="Card image cap">
                        </div>
                        
                        <div class="card-body">
                            <h5 class="card-title">${objectArray[i].artist}</h5>
                            <p class="card-text">${objectArray[i].album}</p>
                            <p class="card-text">${objectArray[i].price}</p>
                            <button id="${objectArray[i].id}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">
                                more info
                            </button>
                        </div>
                    </div>  
           
            `
        );
    };
};



// let brand = [];
// add to an array
// push function will add values to an array
// brand.push('apple, nike, gucci');
// console.log(brand);


function musicGenre(event){
    event.preventDefault();


    // empty array
    let genre = [];
    
        // each() function works like a loop and will loop through each
        // input name="genre" and get the value if it is checked
        $('input[name="genre"]:checked').each(function() {
            genre.push(this.value);
            console.log(genre);
            });


        let i = 0;
        for( i = 0; i < genre.length; i++){
            console.log(genre[i]);
        };

        // passing array through parameters
        displayGenre(genre); 

};


// passing array through parameters

function displayGenre(selectedGenres){
    // console.log(selectedGenres);
    let i = 0;
    for( i = 0; i < selectedGenres.length; i++){
        console.log(selectedGenres[i]);
    }
};


submitBtn.addEventListener("click", musicGenre);
