(window._iconfont_svg_string_4469708 =
  '<svg><symbol id="icon-mycpersonnel" viewBox="0 0 1024 1024"><path d="M322.3552 257.31072a174.08 174.08 0 1 1 348.16 0 174.08 174.08 0 0 1-348.16 0z m174.08-112.64a112.64 112.64 0 1 0 0 225.28 112.64 112.64 0 0 0 0-225.28z m-107.88864 389.12h215.69536c44.72832 0 80.19968 0 108.7488 2.33472 29.24544 2.41664 53.94432 7.3728 76.55424 18.8416a194.56 194.56 0 0 1 84.992 85.07392c11.50976 22.56896 16.50688 47.3088 18.88256 76.51328 2.33472 28.59008 2.33472 64.02048 2.33472 108.7488v25.92768a30.72 30.72 0 0 1-30.72 30.72h-737.28a30.72 30.72 0 0 1-30.72-30.72v-25.92768c0-44.72832 0-80.15872 2.33472-108.7488 2.37568-29.20448 7.3728-53.94432 18.8416-76.51328a194.56 194.56 0 0 1 85.07392-85.03296c22.528-11.4688 47.26784-16.46592 76.51328-18.8416 28.59008-2.37568 64.02048-2.37568 108.7488-2.37568z m-157.36832 75.93984a133.12 133.12 0 0 0-58.1632 58.1632c-6.38976 12.4928-10.32192 28.2624-12.41088 53.6576-2.00704 24.61696-2.12992 55.78752-2.12992 98.95936h675.84c0-43.17184-0.12288-74.3424-2.12992-98.95936-2.048-25.3952-6.02112-41.1648-12.36992-53.6576a133.12 133.12 0 0 0-58.1632-58.1632c-12.4928-6.3488-28.2624-10.28096-53.6576-12.36992-25.8048-2.08896-58.69568-2.12992-105.10336-2.12992h-212.992c-46.36672 0-79.33952 0-105.10336 2.12992-25.3952 2.048-41.1648 6.02112-53.6576 12.36992z" fill="#666666" ></path></symbol></svg>'),
  (function (n) {
    var e = (e = document.getElementsByTagName('script'))[e.length - 1],
      t = e.getAttribute('data-injectcss'),
      e = e.getAttribute('data-disable-injectsvg');
    if (!e) {
      var o,
        i,
        c,
        a,
        d,
        s = function (e, t) {
          t.parentNode.insertBefore(e, t);
        };
      if (t && !n.__iconfont__svg__cssinject__) {
        n.__iconfont__svg__cssinject__ = !0;
        try {
          document.write(
            '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>',
          );
        } catch (e) {
          console && console.log(e);
        }
      }
      (o = function () {
        var e,
          t = document.createElement('div');
        (t.innerHTML = n._iconfont_svg_string_4469708),
          (t = t.getElementsByTagName('svg')[0]) &&
            (t.setAttribute('aria-hidden', 'true'),
            (t.style.position = 'absolute'),
            (t.style.width = 0),
            (t.style.height = 0),
            (t.style.overflow = 'hidden'),
            (t = t),
            (e = document.body).firstChild
              ? s(t, e.firstChild)
              : e.appendChild(t));
      }),
        document.addEventListener
          ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
            ? setTimeout(o, 0)
            : ((i = function () {
                document.removeEventListener('DOMContentLoaded', i, !1), o();
              }),
              document.addEventListener('DOMContentLoaded', i, !1))
          : document.attachEvent &&
            ((c = o),
            (a = n.document),
            (d = !1),
            r(),
            (a.onreadystatechange = function () {
              'complete' == a.readyState &&
                ((a.onreadystatechange = null), l());
            }));
    }
    function l() {
      d || ((d = !0), c());
    }
    function r() {
      try {
        a.documentElement.doScroll('left');
      } catch (e) {
        return void setTimeout(r, 50);
      }
      l();
    }
  })(window);
