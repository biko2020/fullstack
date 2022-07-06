title New note

user->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/new_note
server->user: HTML-code
user->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server->user: main.css
user->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js 
server->user: main.js

note over user:
browser starts executing js-code
that requests JSON data from server 
end note


user->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server->user: [{content: 'new_note', date: '2022-07-05T18:17:06.883Z'}, ...]

note over user:
browser executes the event handler
that renders notes to display
end note
