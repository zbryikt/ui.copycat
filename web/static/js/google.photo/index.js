// Generated by LiveScript 1.3.1
var view;
view = new ldView({
  root: document.body,
  action: {
    click: {
      "album-sitelink": function(){
        view.get("album-panel").classList.toggle('d-none', false);
        return view.get("photo-panel").classList.toggle('d-none', true);
      },
      "photo-sitelink": function(){
        view.get("album-panel").classList.toggle('d-none', true);
        return view.get("photo-panel").classList.toggle('d-none', false);
      }
    }
  }
});