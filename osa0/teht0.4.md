Kaavio mitä tapahtuu, kun käyttäjä luo uuden muistiinpanon:

```mermaid
graph AC;
    Browser-->new_note POST-->Server HTML -->Browser;
    Browser-->notes GET-->Server HTML-->Browser;
    Browser-->main.css GET-->Server CSS -->Browser;
    Browser-->data.json GET -->Server JSON -->Browser;
```
