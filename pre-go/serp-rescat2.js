function echo(elementId, string) {
        document.getElementById(elementId).innerText = string;
      }



      const $_GET = (sget) => new URLSearchParams(window.location.search).get(sget);
      async function include(elementId, file) {
      const response = await fetch(file);
      if (!response.ok) {
          throw new Error("Could not get file");
        }
        document.getElementById(elementId).innerHTML = await response.text();
      }
        
        const params = new URLSearchParams(window.location.search);
        currentPage = params.get("p");

      async function peelPotato() {
      const userSearchQuery = $_GET("q").toLowerCase().replace("the", " ").replace("how to", " ").replace("an", " ").replace(" is ", " ").replace("so", " ").replace("why", " ").replace("what", " ").replace("fuck", " ").replace("who", " ").replace("a ", " ").replace(" a ", " ").replace("?", "");
          document.getElementById("weather-desc").value = $_GET("q");
      const potato = await fetch("/idx/search.php?q="+userSearchQuery);
      const peeledPotato = await potato.json();
      console.log("Peeled potato: " + peeledPotato)
      // console.log(peeledPotato) stop showing results in console
      // console.log(peeledPotato["results"])
      // console.log(peeledPotato["results"].length)
          filter = ["anal","analsex","blowjob","blowjobs","boob","boobs","clitoris","cock","cocks","cum","dick","dicks","gangbang","gangbangs","gangbanging","oral","oralsex","porn","porno","pussy","pussies","sex","sexy","tit","tits","xxx","xxxx","xxxx"];
        const potatoRegex = new RegExp(filter.join("|"), "i");
        
        //const potatoRegexSpamSnippet = new RegExp(spamFilterSnippets.join("|"), "i");
        
        //const potatoRegexSpamUrl = new RegExp(spamFilterUrls.join("|"), "i");
		const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		const safeSnippets = (typeof spamFilterSnippets !== 'undefined' ? spamFilterSnippets : []).filter(Boolean).map(escapeRegex);
		const safeUrls = (typeof spamFilterUrls !== 'undefined' ? spamFilterUrls : []).filter(Boolean).map(escapeRegex);
		const potatoRegexSpamSnippet = safeSnippets.length ? new RegExp(safeSnippets.join("|"), "i") : /$./;
		const potatoRegexSpamUrl = safeUrls.length ? new RegExp(safeUrls.join("|"), "i") : /$./;

        
      peeledPotato["results"].forEach((slice, index)=>{
          
        const potatoContainsSpamSnippet = potatoRegexSpamSnippet.test(slice["snippet"]);
            const potatoContainsFilterWord = potatoRegex.test(slice["title"]);
            const potatoContainsSpamUrl = potatoRegexSpamUrl.test(slice["url"]);
        if (!potatoContainsFilterWord && !potatoContainsSpamSnippet && !potatoContainsSpamUrl) {
            
        /*console.log(slice["title"]);
        console.log(slice["url"]);
        console.log(slice["snippet"]);*/
        potatoId = slice["title"].split(' ');
        fullPotatoId = "RESULT-" + "potatoId-INDEX-" + index;
        potatoTitle = fullPotatoId + "-TITLE";
        potatoUrl = fullPotatoId + "-URL";
        potatoSnippet = fullPotatoId + "-SNIPPET";
            if (!$_GET("p")) {
        // Categories
                if (index < 10) {
            if (slice["url"].includes("https://en.wikipedia.org/wiki/") || index == 0 || index == 1 || index == 2) {
                if (slice["url"].includes("https://en.wikipedia.org/wiki/")) {
                    document.getElementById("top-results").insertAdjacentHTML("afterbegin", `
          <div class="result" id="${fullPotatoId}">
            <a href="${slice["url"]}"><h3 id="${potatoTitle}"></h3></a>
              <small><strong id="${potatoUrl}"></strong></small>
            <p id="${potatoSnippet}"></p>
          </div>
        `);
                } else {
                document.getElementById("top-results").innerHTML += `
          <div class="result" id="${fullPotatoId}">
            <a href="${slice["url"]}"><h3 id="${potatoTitle}"></h3></a>
              <small><strong id="${potatoUrl}"></strong></small>
            <p id="${potatoSnippet}"></p>
          </div>
        `;}
                document.getElementById("top-resbtn").innerHTML = `<button class="result-category top-res">Top</button><br>`
            } else if (slice["title"].includes("Blog") || slice["title"].includes("blog")) {
                document.getElementById("blog-results").innerHTML += `
          <div class="result" id="${fullPotatoId}">
            <a href="${slice["url"]}"><h3 id="${potatoTitle}"></h3></a>
              <small><strong id="${potatoUrl}"></strong></small>
            <p id="${potatoSnippet}"></p>
          </div>
        `
                document.getElementById("blog-resbtn").innerHTML = `<button class="result-category blog-res">Blogs</button><br>`
            } else if (slice["title"].includes("forum") || slice["title"].includes("Forum") || slice["title"].includes("Forums") || slice["title"].includes("forums")) {
                document.getElementById("forum-results").innerHTML += `
          <div class="result" id="${fullPotatoId}">
            <a href="${slice["url"]}"><h3 id="${potatoTitle}"></h3></a>
              <small><strong id="${potatoUrl}"></strong></small>
            <p id="${potatoSnippet}"></p>
          </div>
        `;
                document.getElementById("forum-resbtn").innerHTML = `<button class="result-category forum-res">Forums</button><br>`
            } else if (slice["title"].includes("Podcast") || slice["title"].includes("podcast") || slice["title"].includes("podcasts") || slice["title"].includes("Podcasts") || slice["url"].includes("podcasts.apple.com")) {
                document.getElementById("podcast-results").innerHTML += `
          <div class="result" id="${fullPotatoId}">
            <a href="${slice["url"]}"><h3 id="${potatoTitle}"></h3></a>
              <small><strong id="${potatoUrl}"></strong></small>
            <p id="${potatoSnippet}"></p>
          </div>
        `;
                document.getElementById("podcast-resbtn").innerHTML = `<button class="result-category podcast-res">Podcasts</button><br>`
            } else if (slice["title"].includes("ticket") || slice["title"].includes("tickets") || slice["title"].includes("Ticket") || slice["title"].includes("Tickets")) {
                document.getElementById("ticket-results").innerHTML += `
          <div class="result" id="${fullPotatoId}">
            <a href="${slice["url"]}"><h3 id="${potatoTitle}"></h3></a>
              <small><strong id="${potatoUrl}"></strong></small>
            <p id="${potatoSnippet}"></p>
          </div>
        `;
                document.getElementById("ticket-resbtn").innerHTML = `<button class="result-category ticket-res">Tickets</button><br>`
            } else if (slice["title"].includes("movie") || slice["title"].includes("movies") || slice["title"].includes("Movie") || slice["title"].includes("Movies") || slice["title"].includes("film") || slice["title"].includes("films") || slice["title"].includes("Film") || slice["title"].includes("Films") || slice["url"].includes("imdb.com") || slice["title"].includes("actor") || slice["title"].includes("actress") || slice["title"].includes("acting")) {
                document.getElementById("blog-results").innerHTML += `
          <div class="result" id="${fullPotatoId}">
            <a href="${slice["url"]}"><h3 id="${potatoTitle}"></h3></a>
              <small><strong id="${potatoUrl}"></strong></small>
            <p id="${potatoSnippet}"></p>
          </div>
        `;
                document.getElementById("movie-resbtn").innerHTML = `<button class="result-category movie-res">Movies</button><br>`
            } else if (slice["title"].includes("music") || slice["title"].includes("Music") || slice["title"].includes("song") || slice["title"].includes("Song") || slice["title"].includes("songs") || slice["title"].includes("Songs") || slice["title"].includes("album") || slice["title"].includes("Album")) {
                document.getElementById("forum-results").innerHTML += `
          <div class="result" id="${fullPotatoId}">
            <a href="${slice["url"]}"><h3 id="${potatoTitle}"></h3></a>
              <small><strong id="${potatoUrl}"></strong></small>
            <p id="${potatoSnippet}"></p>
          </div>
        `;
                document.getElementById("music-resbtn").innerHTML = `<button class="result-category music-res">Music</button><br>`
            } else {
                document.getElementById("other-results").innerHTML += `
          <div class="result" id="${fullPotatoId}">
            <a href="${slice["url"]}"><h3 id="${potatoTitle}"></h3></a>
              <small><strong id="${potatoUrl}"></strong></small>
            <p id="${potatoSnippet}"></p>
          </div>
        `;
                document.getElementById("other-resbtn").innerHTML = `<button class="result-category other-res">Other</button><br>`
            }
        document.getElementById(potatoTitle).innerText = slice["title"];
        document.getElementById(potatoUrl).innerText = slice["url"];
        document.getElementById(potatoSnippet).innerText = slice["snippet"];
            /*if (document.getElementById(fullPotatoSnippet).innerText = "") {
                document.getElementById(fullPotatoId).remove();
            }*/}
        } else if (currentPage == "2") {
             if (index > 10 && index <= 20) {
                 if (slice["title"].includes("Blog") || slice["title"].includes("blog")) {
                document.getElementById("blog-results").innerHTML += `
          <div class="result" id="${fullPotatoId}">
            <a href="${slice["url"]}"><h3 id="${potatoTitle}"></h3></a>
              <small><strong id="${potatoUrl}"></strong></small>
            <p id="${potatoSnippet}"></p>
          </div>
        `
            } else if (slice["title"].includes("forum") || slice["title"].includes("Forum") || slice["title"].includes("Forums") || slice["title"].includes("forums")) {
                document.getElementById("forum-results").innerHTML += `
          <div class="result" id="${fullPotatoId}">
            <a href="${slice["url"]}"><h3 id="${potatoTitle}"></h3></a>
              <small><strong id="${potatoUrl}"></strong></small>
            <p id="${potatoSnippet}"></p>
          </div>
        `
            } else {
                document.getElementById("other-results").innerHTML += `
          <div class="result" id="${fullPotatoId}">
            <a href="${slice["url"]}"><h3 id="${potatoTitle}"></h3></a>
              <small><strong id="${potatoUrl}"></strong></small>
            <p id="${potatoSnippet}"></p>
          </div>
        `
            }
        document.getElementById(potatoTitle).innerText = slice["title"];
        document.getElementById(potatoUrl).innerText = slice["url"];
        document.getElementById(potatoSnippet).innerText = slice["snippet"];
            /*if (document.getElementById(fullPotatoSnippet).innerText = "") {
                document.getElementById(fullPotatoId).remove();
            }*/}
        }
                
      } else if (potatoContainsSpamSnippet) {
        console.log("[spam]")
      }
      })
    }
    peelPotato();
    document.getElementById("toplink-web").href = "/search.html?q=" + $_GET("q");
    document.getElementById("toplink-images").href = "/images.html?q=" + $_GET("q");
	document.getElementById("toplink-dictionary").href = "/dictionary.html?q=" + $_GET("q");
    
        document.getElementById("weather-desc").value = $_GET("q");
        
        
        
        function cookPotato(time) {
            setTimeout(()=>{
                if (document.getElementById("top-results").innerHTML == "") {
            document.getElementById("top-results").style.display = "none";
        }
                if (document.getElementById("blog-results").innerHTML == "") {
            document.getElementById("blog-results").style.display = "none";
        }
                if (document.getElementById("forum-results").innerHTML == "") {
            document.getElementById("forum-results").style.display = "none";
        }
                if (document.getElementById("other-results").innerHTML == "") {
            document.getElementById("other-results").style.display = "none";
        }
                if (document.getElementById("podcast-results").innerHTML == "") {
            document.getElementById("podcast-results").style.display = "none";
        }
                if (document.getElementById("ticket-results").innerHTML == "") {
            document.getElementById("ticket-results").style.display = "none";
        }
                if (document.getElementById("movie-results").innerHTML == "") {
            document.getElementById("movie-results").style.display = "none";
        }
                if (document.getElementById("music-results").innerHTML == "") {
            document.getElementById("music-results").style.display = "none";
        }
            }, time);
        }
        
        cookPotato(400);

const allCategoryButtonIds=["top","blog","forum","other","ticket","podcast","movie","music"];allCategoryButtonIds.forEach(e=>{document.getElementById(e+"-resbtn").addEventListener("mouseover",()=>{document.getElementById(e+"-results").classList.add("rescat-selected")}),document.getElementById(e+"-resbtn").addEventListener("mouseleave",()=>{document.getElementById(e+"-results").classList.remove("rescat-selected")})});document.title=$_GET("q") + " - potato search"
