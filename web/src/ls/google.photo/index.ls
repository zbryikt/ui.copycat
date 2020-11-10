view = new ldView do
  root: document.body
  action: click:
    "album-sitelink": ->
      view.get("album-panel").classList.toggle \d-none, false
      view.get("photo-panel").classList.toggle \d-none, true
    "photo-sitelink": ->
      view.get("album-panel").classList.toggle \d-none, true
      view.get("photo-panel").classList.toggle \d-none, false
