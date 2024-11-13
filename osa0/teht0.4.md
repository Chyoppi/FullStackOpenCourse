Kaavio mitä tapahtuu, kun käyttäjä luo uuden muistiinpanon:

```mermaid
graph TD;
    Browser-->new_note.html-->POST-->Server -->Browser;
    Browser-->notes.html-->GET-->Server-->Browser;
    Browser-->main.css-->GET-->Server-->Browser;
    Browser-->data.json-->GET-->Server-->Browser;
```
