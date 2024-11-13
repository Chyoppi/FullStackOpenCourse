Kaavio mitä tapahtuu, kun käyttäjä luo uuden muistiinpanon:

```mermaid
graph TD;
    Browser-->new_note(Post)-->Server(HTML)-->Browser;
    Browser-->notes(GET)-->Server(HTML)-->Browser;
    Browser-->main.css(GET)-->Server(CSS)-->Browser;
    Browser-->data.json(GET)-->Server(JSON)-->Browser;
```