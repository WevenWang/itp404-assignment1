$('#search-form').on('submit',function(event)
{

  event.preventDefault();
  $('#results').html('Loading...');

  let url = 'https://www.reddit.com/r/';
  console.log(url);

  let form = $(this);
  let term = form.find('input[name="subreddit"]').val();
  console.log(term);

  url = url + term + '.json'
  console.log(url);


  let promise = fetch(url).then(function(response){
    let promise = response.json();
    return promise;
  });



  promise.then(function(titles) {
    console.log('success',titles);
    let html = '';
    let dataInside = titles.data.children;
    
      
    
    dataInside.forEach(function(child){

    	html += `<div><strong>Title:</strong> ${child.data.title}</div>
    			<div><strong>Score:</strong> ${child.data.score}</div>
    			<div><strong>Author:</strong> ${child.data.author}</div>
          <br></br>




    	  	
    	`;


    });

    $('#results').html(html);

},function(error){
    let html = '';
    html += `No such subreddit`;
    console.log('error',error);
    $('#results').html(html);

});

});