//alert('hi');<script type="text/javascript">
    // Event listener for our cat-button
    

      // Storing our giphy API URL for a random cat image
      var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=trump";

      // TrumpID: l0Iyau7QcKtKUYIda
      // link to JSON

      // Perfoming an AJAX GET request to our queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })

      // After the data from the AJAX request comes back
      .done(function(response) {

        // Saving the image_original_url property
        var imageUrl = response.data.image_original_url;

        // Creating and storing an image tag
        var trumpImage = $("<img>");

        // Setting the catImage src attribute to imageUrl
        trumpImage.attr("src", imageUrl);
        trumpImage.attr("alt", "trump image");

        // Prepending the catImage to the images div
        $("#television").prepend(trumpImage);
      });
    
  </script>

<script type="text/javascript">
    // Event listener for our cat-button
    

      // Storing our giphy API URL for a random cat image
      var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=trump";

      // TrumpID: l0Iyau7QcKtKUYIda
      // link to JSON

      // Perfoming an AJAX GET request to our queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })

      // After the data from the AJAX request comes back
      .done(function(response) {

        // Saving the image_original_url property
        var imageUrl = response.data.image_original_url;

        // Creating and storing an image tag
        var trumpImage = $("<img>");

        // Setting the catImage src attribute to imageUrl
        trumpImage.attr("src", imageUrl);
        trumpImage.attr("alt", "trump image");

        // Prepending the catImage to the images div
        $("#television").prepend(trumpImage);
      });
    
  </script>