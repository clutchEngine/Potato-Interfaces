<!DOCTYPE html>
<html lang="en">
  <body>
    <link rel="icon" href="/static/img/search-grey.svg" />
    <title>Potato | Search</title>
    <link
      rel="stylesheet"
      href="style.css"
    />
    <div id="header">
      <a href="https://openweathermap.org/"
        ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff1493"><path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H260Zm0-80h480q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41Zm220-240Z"/></svg></a
      ><div class="header-links"><a onclick="document.getElementById('weatherSettings').classList.toggle('hidden')"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff1493"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg></a></div>
    </div>
    <potato title="SearchFart" id="potato"></potato>
    <div class="logo-and-form">
      <h1 class="logo big" id="logo-main" style="color: white;">potato</h1>
      <form action="/redirector.html" method="get">
        <input
          name="q"
          placeholder=""
          id="weather-desc"
          autocomplete="off"
    	  autofocus
        /><!--<a id="cam-btn" label="search images"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#aaa"><path d="M480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240l74 80h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm0-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240Z"/></svg></a>--><button type="submit" id="serp-btn"><img src="/static/img/search-white.svg"></button>
      </form>
      
    </div><div class="links hidden" id="weatherSettings" style="width: 49vw; margin: auto; color: #aaa;">
        <span id="weather-all">
          weather:
          <input id="weather-apikey" placeholder="your api key" /><input
            id="weather-location"
            placeholder="your location" /><button
            onclick="wf()"
            id="getWeatherBtn"
          >
            get weather
          </button></span>
        
      </div>
              <div id="gadgets" style="color: white; letter-spacing: -1px; width: 49vw; margin: auto; margin-top: 10px;">
              <h2 id="user-name" style="padding: 0; margin: 0; margin-bottom: 8px;"></h2><small style="font-weight: bold;"><small>WEATHER</small></small>
              <h3 style="padding: 0; margin: 0;"><span id="weather-summary"></span>, <span id="weather-temp"></span></h3>
              <!--<div class="rss-news" style="margin-top: 8px;">
              <details><summary>
              	<small style="font-weight: bold;"><small>RSS FEEDS</small></small></summary>
              	<h3 style="padding: 0; margin: 0;">Latest</h3>
              	<div class="posts-categories">
              		<div id="rss-categories"></div>
              		<div id="rss-posts"></div>
              	</div>
              </details>
              </div>-->
              </div>
              <footer><div><a href="/plus/webmaster.html">Webmaster</a> &nbsp;&nbsp; <a href="/plus/terms.html">Privacy + Terms</a></div><div>&copy; Potato Technologies</div></footer>
                  <!--<script>
                  	async function loadForumPosts() {
                  const forumPosts = await fetch("/static/json/forums.json");
					const forumPostsBruh = await forumPosts.json();
					console.log(forumPostsBruh)
                        for (i = 0; i <= 6; i++) {
                            document.getElementById("forum-categories").innerHTML += `
                                	<div style="background: ${forumPostsBruh[i]['bgcolor']}; padding: 3px;">${forumPostsBruh[i]["category"]}</div>
                                `
                            document.getElementById("forum-posts").innerHTML += `
                                	<div style="background: ${forumPostsBruh[i]['bgcolor']}; padding: 3px;" class="forum-post" onclick="window.location.href='${forumPostsBruh[i][url]};'">${forumPostsBruh[i]["content"]}</div>
                                `
                        }
              }
loadForumPosts();
                  </script>-->
    <style>
                      :root {
                          --acc: #ff1493;
                      }
                      .posts-categories {display: flex; width: 100%; justify-content: space-between;}
#rss-categories {width: 20%; color: white;  box-sizing: border-box; flex-shrink: 0; display: inline-block; padding: 3px;}
.rss-category:nth-of-type(1) {background: green;} .rss-category:nth-of-type(2) {background: lightblue;} .rss-category:nth-of-type(3) {background: orange;} .rss-category:nth-of-type(4) {background: deeppink;}
#rss-posts {width: 79%; flex-shrink: 0; display: flex; justify-content: space-between; overflow-x: scroll;}
#rss-posts .rss-post {padding: 3px; max-width: 20%;}
.rss-news {
                  width: 70vw; margin: auto;
              }

      .logo-and-form {
        margin: auto;
        margin-top: 18vw;
        width: 49vw;
        border-radius: 3px;
        color: black;
                  display: flex;
                  gap: 10px;
      }

      .logo-and-form .form-container {
        display: flex;
        flex-direction: column;
        background: linear-gradient(to bottom, lightgrey, darkgrey);
      }

      .logo-and-form form {
        width: 80%;

        display: flex;
        justify-content: space-between;
      }

      .logo-and-form form input {
        width: 82%;
        outline: none;
        padding: 3px;
        font-style: normal;
        
          border: 1px solid lightgrey;border-right: none;
      }

      .logo-and-form form #serp-btn {
        width: 18%;
        background: rgba(0,0,0,1);
		backdrop-filter: blur(4px);
        color: white;
        padding: 3px;
        border: none;
        border-radius: 0;
        box-shadow: none;
        transition: 0.1s all ease-in-out;
      }

.logo.big {background: deeppink; color: transparent; background-clip: text;}

body {
    /*background: linear-gradient(134deg, #00bce9 0%, #00bce9 12%, #58849d 12%, #58849d 24%, #fc6b02 24%, #fc6b02 72%, #fa007d 72%, #fa007d  100%);*/
}
                                
                                #header, footer {background: linear-gradient(#333, black);}

#mic-btn, #cam-btn, #status-btn {background: white; border-radius: 0; border: 1px solid lightgrey; border-left: none; display: inline-block; padding: 7px; padding-top: 8px;}

#cam-btn, #status-btn {border-right: none; padding-top: 7px;}

      .logo-and-form form button:hover,
      .logo-and-form form button.DEV-hover {
        box-shadow: 1px 1px 0px lightgrey;
      }

      .logo-and-form form button:active,
      .logo-and-form form button.DEV-pressed {
        box-shadow: 1px 1px 0px black;
      }

      a {
        text-decoration: underline;
        user-select: none;
        color: var(--acc);
      }

      a:hover {
        cursor: pointer;
      }

      
      #weather-apikey,
      #weather-location {
        width: 100px;
      }
		body {min-height: 100vh;}
		footer {
            color: grey;
            /*border-top: 1px solid lightgrey;*/
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 3px;
            position: fixed;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            box-sizing: border-box;
        }
    </style>
    <script src="js/weather3.js"></script>
        <script>const $_GET = (sget) => new URLSearchParams(window.location.search).get(sget);if($_GET("i") == "1") {window.location.href='/';} document.getElementById("mic-btn").addEventListener("click", (e)=>{e.preventDefault; window.location.href="https://vocaroo.com/";}); /*mic btn not working, maybe add Vocaroo's code here? FIXED*/ if($_GET("q") != "" && $_GET("q") != null) {window.location.href="/redirector.html?q="+$_GET("q");} document.getElementById("cam-btn").addEventListener("click", ()=>{document.getElementById("weather-desc").value += " @images"}); document.getElementById("status-btn").addEventListener("click", ()=>{document.getElementById("weather-desc").placeholder = "not crawling"; setTimeout(()=>{wf();}, 2000)}); document.getElementById("personal").addEventListener("click", ()=>{const persName = localStorage.getItem("personalized-search-name") || "potato"; document.getElementById("logo-main").innerText = persName;}); const persName = "Hi, " + localStorage.getItem("personalized-search-name") || ""; document.getElementById("user-name").innerText = persName;
// RSS, Fellipão will be happy

async function getFeed(url) {
    const urlPotato = await fetch(url);
    const potatoText = await urlPotato.text();
    const parser = new DOMParser();
    const xmld = parser.parseFromString(potatoText, "text/xml");
    
    const itms = xmld.getElementsByTagName("item");
    for (let item of itms) {
        const ttle = item.getElementsByTagName("title")[0]?.textContent;
        const link = item.getElementsByTagName("link")[0]?.textContent;
        console.log(ttle + " " + link)
        // Display the rss here
            document.getElementById("rss-posts").insertAdjacentHTML("beforeend", `<div class="rss-post" onclick="window.location.href=link;">${ttle}</div>`);
        
    }
    const imgs = xmld.getElementsByTagName("channel");
    for (let item of imgs) {
        const ttle = item.getElementsByTagName("title")[0].textContent;
        console.log(ttle);
        // Display the categories here
        document.getElementById("rss-categories").insertAdjacentHTML("beforeend", `<div class="rss-category">${ttle}</div>`);
        
    }
}

async function loadFeeds() {
    const feeds = [
        "/plus/rss/feeds/blog.xml",
        "/plus/rss/feeds/rss.xml",
        "/plus/rss/feeds/feed.xml",
        "/plus/rss/feeds/webring.xml"
    ];

    for (const feed of feeds) {
        await getFeed(feed);
    }
}
loadFeeds();

if ($_GET("nlhe") !== "on") {
    window.location.href="/check.html";
}
</script>
  </body>
</html>
