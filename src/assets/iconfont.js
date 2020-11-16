!(function(e) {
  var t,
    n,
    o,
    i,
    c,
    d,
    s =
      '<svg><symbol id="icon-add" viewBox="0 0 1024 1024"><path d="M512 65C265.1 65 65 265.1 65 512s200.1 447 447 447 447-200.1 447-447S758.9 65 512 65z m266.3 433c0 17.6-14.4 32-32 32H558v188.3c0 17.6-14.4 32-32 32s-32-14.4-32-32V530H305.7c-17.6 0-32-14.4-32-32s14.4-32 32-32H494V277.7c0-17.6 14.4-32 32-32s32 14.4 32 32V466h188.3c17.6 0 32 14.4 32 32z" fill="#81C1ED" ></path></symbol></svg>',
    l = (l = document.getElementsByTagName("script"))[
      l.length - 1
    ].getAttribute("data-injectcss");
  if (l && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  function a() {
    c || ((c = !0), o());
  }
  (t = function() {
    var e, t, n, o;
    ((o = document.createElement("div")).innerHTML = s),
      (s = null),
      (n = o.getElementsByTagName("svg")[0]) &&
        (n.setAttribute("aria-hidden", "true"),
        (n.style.position = "absolute"),
        (n.style.width = 0),
        (n.style.height = 0),
        (n.style.overflow = "hidden"),
        (e = n),
        (t = document.body).firstChild
          ? ((o = e), (n = t.firstChild).parentNode.insertBefore(o, n))
          : t.appendChild(e));
  }),
    document.addEventListener
      ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((n = function() {
            document.removeEventListener("DOMContentLoaded", n, !1), t();
          }),
          document.addEventListener("DOMContentLoaded", n, !1))
      : document.attachEvent &&
        ((o = t),
        (i = e.document),
        (c = !1),
        (d = function() {
          try {
            i.documentElement.doScroll("left");
          } catch (e) {
            return void setTimeout(d, 50);
          }
          a();
        })(),
        (i.onreadystatechange = function() {
          "complete" == i.readyState && ((i.onreadystatechange = null), a());
        }));
})(window);
