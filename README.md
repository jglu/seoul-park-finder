# Seoul Park Finder

Easily find parks in Seoul. Real parks, real easy.


## Files

```
index.html   page structure (loads the Naver Maps script)
style.css    styling
app.js       map logic
parks.json   park data (name, lat, lng, info)
```

## Run

1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` and choose **Open with Live Server**.
4. The map opens at `http://127.0.0.1:5500`. Allow location access when the browser asks.

## Park data

Add or edit parks in `parks.json`:

```json
{ "name": "Seoul Forest", "lat": 37.5444, "lng": 127.0374, "info": "Large park with trails." }
```
can be changed however needed
