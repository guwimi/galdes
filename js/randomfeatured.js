function randomFeatured(e) {
    j = showRandomImg ? Math.floor((imgr.length + 1) * Math.random()) : 0, img = new Array, numposts1 <= e.feed.entry.length ? maxpost = numposts1 : maxpost = e.feed.entry.length;
    for (var t = 0; t < maxpost; t++) {
        var i, n = e.feed.entry[t],
            r = n.title.$t,
            l = n.category[0].term;
        if (newsize, t == e.feed.entry.length) break;
        for (var m = 0; m < n.link.length; m++)
            if ("alternate" == n.link[m].rel) { i = n.link[m].href; break }
        for (m = 0; m < n.link.length; m++)
            if ("replies" == n.link[m].rel && "text/html" == n.link[m].type) { n.link[m].title.split(" ")[0]; break }
        if ("content" in n) var o = n.content.$t;
        else o = "summary" in n ? n.summary.$t : "";
        postdate = n.published.$t, j > imgr.length - 1 && (j = 0), img[t] = imgr[j], s = o, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), -1 != a && -1 != b && -1 != c && "" != d && (img[t] = d);
        for (var g = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], f = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"], A = (postdate.split("-")[2].substring(0, 2), postdate.split("-")[1]), u = (postdate.split("-")[0], 0); u < g.length; u++)
            if (parseInt(A) == g[u]) { A = f[u]; break }
        if (0 == t) {
            var h = '<div class="featured-news-lg box-6"><div class="news-image"><picture><img src="' + img[t].replace("/s640/", "/w0-h400-c/") + '" height="400" width="0"/></picture></div><div class="news-detail"><h2 class="title color white">' + r + '</h2></div><a href="' + i + '" target="_self" class="link-overlay"></a></div>';
            document.write(h)
        }
            2 == t && (h = '<div class="featured-news-sm box-3"><div class="news-image"><picture><img src="' + img[t].replace("/s640/", "/w0-h200-c/") + '" height="200" width="0"/></picture></div><div class="news-detail"><h2 class="title color white">' + r + '</h2></div><a href="' + i + '" target="_self" class="link-overlay"></a></div>', document.write(h)),
            3 == t && (h = '<div class="featured-news-sm box-3"><div class="news-image"><picture><img src="' + img[t].replace("/s640/", "/w0-h200-c/") + '" height="200" width="0"/></picture></div><div class="news-detail"><h2 class="title color white">' + r + '</h2></div><a href="' + i + '" target="_self" class="link-overlay"></a></div>', document.write(h)),
            4 == t && (h = '<div class="featured-news-sm box-3"><div class="news-image"><picture><img src="' + img[t].replace("/s640/", "/w0-h200-c/") + '" height="200" width="0"/></picture></div><div class="news-detail"><h2 class="title color white">' + r + '</h2></div><a href="' + i + '" target="_self" class="link-overlay"></a></div>', document.write(h)),
            5 == t && (h = '<div class="featured-news-sm box-3"><div class="news-image"><picture><img src="' + img[t].replace("/s640/", "/w0-h200-c/") + '" height="200" width="0"/></picture></div><div class="news-detail"><h2 class="title color white">' + r + '</h2></div><a href="' + i + '" target="_self" class="link-overlay"></a></div>', document.write(h)), j++
    }
}
imgr = new Array, imgr[0] = "data:image/gif;base64,R0lGODlhAQABAIAAAPHx8AAAACH5BAEAAAAALAAAAAABAAEAQAICRAEAOw==", showRandomImg = !0, aBold = !0, numposts1 = 6, numposts11 = 1, newsize = 320;