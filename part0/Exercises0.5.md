title single page app
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
server->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server->browser: spa.js

note over browser:
browser starts executing js-code
that requests JSON data from server 
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server->browser: [{"content":"rumham","date":"2022-07-05T12:02:54.355Z"}, ...]

note over browser:
browser executes the event handler
that renders notes to display
end note