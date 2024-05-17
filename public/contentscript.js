const pageReload = () => {
  if (location.host === "www.facebook.com") {
    // Reload the page
    location.reload();

    document.ready(() => {
      let itemT;
      let itemC;
      const el = document.getElementsByClassName(
        "x9f619 x78zum5 x1iyjqo2 x5yr21d x4p5aij x19um543 x1j85h84 x1m6msm x1n2onr6 xh8yej3"
      );
      const element = document.getElementsByClassName(
        "x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xudqn12 x676frb x1lkfr7t x1lbecb7 x1s688f xzsf02u"
      );
      const title = el[0]?.childNodes[0]?.alt;
      const cost = element[0]?.childNodes[0]?.data;

      try {
        itemT = sessionStorage.getItem("itemT");
        itemC = sessionStorage.getItem("itemC");
      } catch (error) {
        console.log(error);
      }

      if ((title !== itemT || cost !== itemC) && title) {
        // Body/data
        let body = {
          title: title,
          cost: cost,
        };

        // The options object contains the method, headers, and body of the request
        let options = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        };

        // The url of the server endpoint that handles the POST request
        let url = "http://localhost:1234/mail";

        // Calling the fetch function with the url and options as arguments
        // The fetch function returns a promise that resolves to a response object
        fetch(url, options)
          .then((response) => {
            // Checking if the response status is OK (200)
            if (response.ok) {
              // Parsing the response body as JSON and returning it
              return response.json();
            } else {
              // Throwing an error if the response status is not OK
              throw new Error("Something went wrong");
            }
          })
          .then((data) => {
            // Handling the data received from the server
            console.log("The server responded with:", data);
          })
          .catch((error) => {
            // Handling the error if the request failed
            console.error("The request failed with:", error);
          });
      }

      // save the data
      sessionStorage.setItem("itemT", title);
      sessionStorage.setItem("itemC", cost);
    });
  }
};

setInterval(pageReload, 60000);
