// SETUP VARIABLES
// =========================================
// You can grab your own at http://developer.nytimes.com/signup Then select Article Search API
// API DOCs http://web.archive.org/web/20160413164846/http://developer.nytimes.com/docs/read/article_search_api_v2

var authKey = "9d304a55c1934c5bbaa46a117466c120"

// Search Parameters Set variables to store your queryTerm, Number of results, Start year and End Year



// URL Base
var queryURLBase = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey; 

// create variable to track number of articles


// FUNCTIONS
// =========================================

function runQuery(numArticles, queryURL){

	// AJAX Function
	$.ajax({url: queryURL, method: "GET"})
		.done(function(NYTData) {

			// Logging to Console response and number of articles.
			console.log(NYTData);

			// Clear the wells from the previous run


			for (var i=0; i<numArticles; i++){

				// Start Dumping to HTML Here


				// Check if things exist if it does print the headline
				if(NYTData.response.docs[i].headline != "null") {


				}

				// Check if the byline exist if it does added to the html
				if(NYTData.response.docs[i].byline && NYTData.response.docs[i].byline.hasOwnProperty("original")){

				}

				// Attach the content to the appropriate well


			}


		})

}

// MAIN PROCESSES
// =========================================

$('#searchBtn').on('click', function() {

	// Get Search Term
	

	// create a variable that contains the base url and appends the query term.


	// Get the Number of Records and save it to the result variable previously created


	// Get the Start Year and End Year and save it to the result variable previously created



	if (parseInt(startYear)) {

		// Add the necessary fields
		startYear = startYear + "0101";

		// Add the date information to the newly created URL variable
		
	}

	if(parseInt(endYear)){

		// Add the necessary fields
		endYear = endYear + "0101";
		
		// Add the date information to the newly created URL variable
		
	} 

	// Send the AJAX Call the newly assembled URL 
	runQuery(numResults, newURL);

	return false;

})
