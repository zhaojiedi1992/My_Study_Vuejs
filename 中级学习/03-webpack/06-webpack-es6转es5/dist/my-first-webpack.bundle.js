(() => {
    "use strict";

    function n(n, t) {
        (null == t || t > n.length) && (t = n.length);
        for (var r = 0, e = new Array(t); r < t; r++) e[r] = n[r];
        return e
    }

    function t(n, t) {
        return n + t
    }

    function r(n, t) {
        return n - t
    }

    function e(t) {
        var r, e = 0, o = function (t, r) {
            var e;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (e = function (t, r) {
                    if (t) {
                        if ("string" == typeof t) return n(t, r);
                        var e = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? n(t, r) : void 0
                    }
                }(t)) || r && t && "number" == typeof t.length) {
                    e && (t = e);
                    var o = 0, u = function () {
                    };
                    return {
                        s: u, n: function () {
                            return o >= t.length ? {done: !0} : {done: !1, value: t[o++]}
                        }, e: function (n) {
                            throw n
                        }, f: u
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, l = !0, a = !1;
            return {
                s: function () {
                    e = t[Symbol.iterator]()
                }, n: function () {
                    var n = e.next();
                    return l = n.done, n
                }, e: function (n) {
                    a = !0, i = n
                }, f: function () {
                    try {
                        l || null == e.return || e.return()
                    } finally {
                        if (a) throw i
                    }
                }
            }
        }(t);
        try {
            for (o.s(); !(r = o.n()).done;) num = r.value, e += num
        } catch (n) {
            o.e(n)
        } finally {
            o.f()
        }
        return e
    }

    console.log(t(1, 2323)), console.log(r(1, 22)), e([234, 4, 545]), e([234, 4, 545]), console.log(t(1, 2323)), console.log(r(1, 22))
})();