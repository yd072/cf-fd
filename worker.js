addEventListener(
  "fetch",event => {
    let url=new URL(event.request.url);
    url.hostname="域名";
    let request=new Request(url,event.request);
    event. respondWith(
      fetch(request)
    )
  }
)
