/*! mh-v2 - v0.0.1 - 2015-02-03 */
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = a.length, c = _.type(a);
        return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }
    function d(a, b, c) {
        if (_.isFunction(b)) return _.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        });
        if (b.nodeType) return _.grep(a, function(a) {
            return a === b !== c;
        });
        if ("string" == typeof b) {
            if (hb.test(b)) return _.filter(b, a, c);
            b = _.filter(b, a);
        }
        return _.grep(a, function(a) {
            return U.call(b, a) >= 0 !== c;
        });
    }
    function e(a, b) {
        for (;(a = a[b]) && 1 !== a.nodeType; ) ;
        return a;
    }
    function f(a) {
        var b = ob[a] = {};
        return _.each(a.match(nb) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), 
        _.ready();
    }
    function h() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {};
            }
        }), this.expando = _.expando + h.uid++;
    }
    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(ub, "-$1").toLowerCase(), 
        c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : tb.test(c) ? _.parseJSON(c) : c;
            } catch (e) {}
            sb.set(a, b, c);
        } else c = void 0;
        return c;
    }
    function j() {
        return !0;
    }
    function k() {
        return !1;
    }
    function l() {
        try {
            return Z.activeElement;
        } catch (a) {}
    }
    function m(a, b) {
        return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }
    function o(a) {
        var b = Kb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function p(a, b) {
        for (var c = 0, d = a.length; d > c; c++) rb.set(a[c], "globalEval", !b || rb.get(b[c], "globalEval"));
    }
    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (rb.hasData(a) && (f = rb.access(a), g = rb.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c]);
            }
            sb.hasData(a) && (h = sb.access(a), i = _.extend({}, h), sb.set(b, i));
        }
    }
    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && _.nodeName(a, b) ? _.merge([ a ], c) : c;
    }
    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && yb.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
    }
    function t(b, c) {
        var d, e = _(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
        return e.detach(), f;
    }
    function u(a) {
        var b = Z, c = Ob[a];
        return c || (c = t(a, b), "none" !== c && c || (Nb = (Nb || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), 
        b = Nb[0].contentDocument, b.write(), b.close(), c = t(a, b), Nb.detach()), Ob[a] = c), 
        c;
    }
    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Rb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), 
        Qb.test(g) && Pb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, 
        g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
    }
    function w(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            }
        };
    }
    function x(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xb.length; e--; ) if (b = Xb[e] + c, 
        b in a) return b;
        return d;
    }
    function y(a, b, c) {
        var d = Tb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + wb[f], !0, e)), 
        d ? ("content" === c && (g -= _.css(a, "padding" + wb[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wb[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wb[f], !0, e), 
        "padding" !== c && (g += _.css(a, "border" + wb[f] + "Width", !0, e)));
        return g;
    }
    function A(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Rb(a), g = "border-box" === _.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qb.test(e)) return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function B(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = rb.get(d, "olddisplay"), 
        c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xb(d) && (f[g] = rb.access(d, "olddisplay", u(d.nodeName)))) : (e = xb(d), 
        "none" === c && e || rb.set(d, "olddisplay", e ? c : _.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e);
    }
    function D() {
        return setTimeout(function() {
            Yb = void 0;
        }), Yb = _.now();
    }
    function E(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wb[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e;
    }
    function F(a, b, c) {
        for (var d, e = (cc[b] || []).concat(cc["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function G(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && xb(a), p = rb.get(a, "fxshow");
        c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, 
        h.empty.fire = function() {
            h.unqueued || i();
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, _.queue(a, "fx").length || h.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [ n.overflow, n.overflowX, n.overflowY ], 
        j = _.css(a, "display"), k = "none" === j ? rb.get(a, "olddisplay") || u(a.nodeName) : j, 
        "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), 
        c.overflow && (n.overflow = "hidden", l.always(function() {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2];
        }));
        for (d in b) if (e = b[d], $b.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                if ("show" !== e || !p || void 0 === p[d]) continue;
                o = !0;
            }
            m[d] = p && p[d] || _.style(a, d);
        } else j = void 0;
        if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j); else {
            p ? "hidden" in p && (o = p.hidden) : p = rb.access(a, "fxshow", {}), f && (p.hidden = !o), 
            o ? _(a).show() : l.done(function() {
                _(a).hide();
            }), l.done(function() {
                var b;
                rb.remove(a, "fxshow");
                for (b in m) _.style(a, b, m[b]);
            });
            for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, 
            g.start = "width" === d || "height" === d ? 1 : 0));
        }
    }
    function H(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function I(a, b, c) {
        var d, e, f = 0, g = bc.length, h = _.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = Yb || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: _.extend({}, b),
            opts: _.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Yb || D(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [ j, b ]) : h.rejectWith(a, [ j, b ]), this;
            }
        }), k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++) if (d = bc[f].call(j, a, k, j.opts)) return d;
        return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    function J(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(nb) || [];
            if (_.isFunction(c)) for (;d = f[e++]; ) "+" === d[0] ? (d = d.slice(1) || "*", 
            (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, _.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                e(j), !1);
            }), i;
        }
        var f = {}, g = a === tc;
        return e(b.dataTypes[0]) || !f["*"] && e("*");
    }
    function L(a, b) {
        var c, d, e = _.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && _.extend(!0, a, d), a;
    }
    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; ) i.shift(), 
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break;
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function N(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; ) if (a.responseFields[f] && (c[a.responseFields[f]] = b), 
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    function O(a, b, c, d) {
        var e;
        if (_.isArray(b)) _.each(b, function(b, e) {
            c || yc.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== _.type(b)) d(a, b); else for (e in b) O(a + "[" + e + "]", b[e], c, d);
    }
    function P(a) {
        return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    var Q = [], R = Q.slice, S = Q.concat, T = Q.push, U = Q.indexOf, V = {}, W = V.toString, X = V.hasOwnProperty, Y = {}, Z = a.document, $ = "2.1.3", _ = function(a, b) {
        return new _.fn.init(a, b);
    }, ab = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, bb = /^-ms-/, cb = /-([\da-z])/gi, db = function(a, b) {
        return b.toUpperCase();
    };
    _.fn = _.prototype = {
        jquery: $,
        constructor: _,
        selector: "",
        length: 0,
        toArray: function() {
            return R.call(this);
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this);
        },
        pushStack: function(a) {
            var b = _.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function(a, b) {
            return _.each(this, a, b);
        },
        map: function(a) {
            return this.pushStack(_.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function() {
            return this.pushStack(R.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: T,
        sort: Q.sort,
        splice: Q.splice
    }, _.extend = _.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), 
        h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], 
        d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, 
        f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g;
    }, _.extend({
        expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === _.type(a);
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window;
        },
        isNumeric: function(a) {
            return !_.isArray(a) && a - parseFloat(a) + 1 >= 0;
        },
        isPlainObject: function(a) {
            return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a;
        },
        globalEval: function(a) {
            var b, c = eval;
            a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), 
            b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a));
        },
        camelCase: function(a) {
            return a.replace(bb, "ms-").replace(cb, db);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
                if (h) for (;g > f && (e = b.apply(a[f], d), e !== !1); f++) ; else for (f in a) if (e = b.apply(a[f], d), 
                e === !1) break;
            } else if (h) for (;g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++) ; else for (f in a) if (e = b.call(a[f], f, a[f]), 
            e === !1) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(ab, "");
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [ a ] : a) : T.call(d, a)), 
            d;
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : U.call(b, a, c);
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e;
        },
        map: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h) for (;g > f; f++) e = b(a[f], f, d), null != e && i.push(e); else for (f in a) e = b(a[f], f, d), 
            null != e && i.push(e);
            return S.apply([], i);
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), 
            e = function() {
                return a.apply(b || this, d.concat(R.call(arguments)));
            }, e.guid = a.guid = a.guid || _.guid++, e) : void 0;
        },
        now: Date.now,
        support: Y
    }), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        V["[object " + b + "]"] = b.toLowerCase();
    });
    var eb = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, 
            "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
            if (!d && I) {
                if (11 !== h && (e = sb.exec(a))) if (g = e[1]) {
                    if (9 === h) {
                        if (f = b.getElementById(g), !f || !f.parentNode) return c;
                        if (f.id === g) return c.push(f), c;
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), 
                    c;
                } else {
                    if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                    if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), 
                    c;
                }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ub, "\\$&") : b.setAttribute("id", n), 
                        n = "[id='" + n + "'] ", i = j.length; i--; ) j[i] = n + m(j[i]);
                        o = tb.test(a) && k(b.parentNode) || b, p = j.join(",");
                    }
                    if (p) try {
                        return $.apply(c, o.querySelectorAll(p)), c;
                    } catch (q) {} finally {
                        l || b.removeAttribute("id");
                    }
                }
            }
            return B(a.replace(ib, "$1"), b, c, d);
        }
        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d;
            }
            var b = [];
            return a;
        }
        function d(a) {
            return a[N] = !0, a;
        }
        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--; ) w.attrHandle[c[d]] = b;
        }
        function g(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d) return d;
            if (c) for (;c = c.nextSibling; ) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function j(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; ) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        function l() {}
        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function n(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = Q++;
            return b.first ? function(b, c, f) {
                for (;b = b[d]; ) if (1 === b.nodeType || e) return a(b, c, f);
            } : function(b, c, g) {
                var h, i, j = [ P, f ];
                if (g) {
                    for (;b = b[d]; ) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                } else for (;b = b[d]; ) if (1 === b.nodeType || e) {
                    if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g)) return !0;
                }
            };
        }
        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d;
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), 
            j && b.push(h));
            return g;
        }
        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, r = d || p(b || "*", h.nodeType ? [ h ] : h, []), s = !a || !d && b ? r : q(r, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e) for (j = q(t, n), e(j, [], h, i), k = j.length; k--; ) (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--; ) (l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i);
                        }
                        for (k = t.length; k--; ) (l = t[k]) && (j = f ? ab(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l));
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t);
            });
        }
        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                return a === b;
            }, g, !0), j = n(function(a) {
                return ab(b, a) > -1;
            }, g, !0), k = [ function(a, c, d) {
                var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                return b = null, e;
            } ]; e > h; h++) if (c = w.relative[a[h].type]) k = [ n(o(k), c) ]; else {
                if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                    for (d = ++h; e > d && !w.relative[a[d].type]; d++) ;
                    return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                        value: " " === a[h - 2].type ? "*" : ""
                    })).replace(ib, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a));
                }
                k.push(c);
            }
            return o(k);
        }
        function t(a, c) {
            var e = c.length > 0, f = a.length > 0, g = function(d, g, h, i, j) {
                var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && w.find.TAG("*", j), u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                    if (f && k) {
                        for (l = 0; m = a[l++]; ) if (m(k, g, h)) {
                            i.push(k);
                            break;
                        }
                        j && (P = u);
                    }
                    e && ((k = !m && k) && n--, d && p.push(k));
                }
                if (n += o, e && o !== n) {
                    for (l = 0; m = c[l++]; ) m(p, r, g, h);
                    if (d) {
                        if (n > 0) for (;o--; ) p[o] || r[o] || (r[o] = Y.call(i));
                        r = q(r);
                    }
                    $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i);
                }
                return j && (P = u, C = s), p;
            };
            return e ? d(g) : g;
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date(), O = a.document, P = 0, Q = 0, R = c(), S = c(), T = c(), U = function(a, b) {
            return a === b && (E = !0), 0;
        }, V = 1 << 31, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push, $ = X.push, _ = X.slice, ab = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
            return -1;
        }, bb = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", cb = "[\\x20\\t\\r\\n\\f]", db = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", eb = db.replace("w", "w#"), fb = "\\[" + cb + "*(" + db + ")(?:" + cb + "*([*^$|!~]?=)" + cb + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + eb + "))|)" + cb + "*\\]", gb = ":(" + db + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fb + ")*)|.*)\\)|)", hb = new RegExp(cb + "+", "g"), ib = new RegExp("^" + cb + "+|((?:^|[^\\\\])(?:\\\\.)*)" + cb + "+$", "g"), jb = new RegExp("^" + cb + "*," + cb + "*"), kb = new RegExp("^" + cb + "*([>+~]|" + cb + ")" + cb + "*"), lb = new RegExp("=" + cb + "*([^\\]'\"]*?)" + cb + "*\\]", "g"), mb = new RegExp(gb), nb = new RegExp("^" + eb + "$"), ob = {
            ID: new RegExp("^#(" + db + ")"),
            CLASS: new RegExp("^\\.(" + db + ")"),
            TAG: new RegExp("^(" + db.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + fb),
            PSEUDO: new RegExp("^" + gb),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + cb + "*(even|odd|(([+-]|)(\\d*)n|)" + cb + "*(?:([+-]|)" + cb + "*(\\d+)|))" + cb + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + bb + ")$", "i"),
            needsContext: new RegExp("^" + cb + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + cb + "*((?:-\\d)?\\d*)" + cb + "*\\)|)(?=[^-]|$)", "i")
        }, pb = /^(?:input|select|textarea|button)$/i, qb = /^h\d$/i, rb = /^[^{]+\{\s*\[native \w/, sb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, tb = /[+~]/, ub = /'|\\/g, vb = new RegExp("\\\\([\\da-f]{1,6}" + cb + "?|(" + cb + ")|.)", "ig"), wb = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        }, xb = function() {
            F();
        };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType;
        } catch (yb) {
            $ = {
                apply: X.length ? function(a, b) {
                    Z.apply(a, _.call(b));
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; ) ;
                    a.length = c - 1;
                }
            };
        }
        v = b.support = {}, y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
        }, F = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, 
            c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xb, !1) : c.attachEvent && c.attachEvent("onunload", xb)), 
            I = !y(d), v.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), v.getElementsByTagName = e(function(a) {
                return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length;
            }), v.getElementsByClassName = rb.test(d.getElementsByClassName), v.getById = e(function(a) {
                return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length;
            }), v.getById ? (w.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [ c ] : [];
                }
            }, w.filter.ID = function(a) {
                var b = a.replace(vb, wb);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete w.find.ID, w.filter.ID = function(a) {
                var b = a.replace(vb, wb);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (;c = f[e++]; ) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                return I ? b.getElementsByClassName(a) : void 0;
            }, K = [], J = [], (v.qsa = rb.test(d.querySelectorAll)) && (e(function(a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", 
                a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + cb + "*(?:''|\"\")"), 
                a.querySelectorAll("[selected]").length || J.push("\\[" + cb + "*(?:value|" + bb + ")"), 
                a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), 
                a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]");
            }), e(function(a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + cb + "*[*^$|!~]?="), 
                a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), 
                J.push(",.*:");
            })), (v.matchesSelector = rb.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", gb);
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), 
            b = rb.test(H.compareDocumentPosition), M = b || rb.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                return !1;
            }, U = b ? function(a, b) {
                if (a === b) return E = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 
                1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? ab(D, a) - ab(D, b) : 0 : 4 & c ? -1 : 1);
            } : function(a, b) {
                if (a === b) return E = !0, 0;
                var c, e = 0, f = a.parentNode, h = b.parentNode, i = [ a ], j = [ b ];
                if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? ab(D, a) - ab(D, b) : 0;
                if (f === h) return g(a, b);
                for (c = a; c = c.parentNode; ) i.unshift(c);
                for (c = b; c = c.parentNode; ) j.unshift(c);
                for (;i[e] === j[e]; ) e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0;
            }, d) : G;
        }, b.matches = function(a, c) {
            return b(a, null, null, c);
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(lb, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return b(c, G, null, [ a ]).length > 0;
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b);
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()], d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, b.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (;b = a[e++]; ) b === a[e] && (d = c.push(e));
                for (;d--; ) a.splice(c[d], 1);
            }
            return D = null, a;
        }, x = b.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a);
                } else if (3 === e || 4 === e) return a.nodeValue;
            } else for (;b = a[d++]; ) c += x(b);
            return c;
        }, w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: ob,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(vb, wb), a[3] = (a[3] || a[4] || a[5] || "").replace(vb, wb), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return ob.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && mb.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), 
                    a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(vb, wb).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + cb + ")" + a + "(" + cb + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(hb, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (;p; ) {
                                    for (l = b; l = l[p]; ) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], 
                                l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); ) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [ P, n, m ];
                                    break;
                                }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1]; else for (;(l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [ P, m ]), 
                            l !== b)); ) ;
                            return m -= e, m === d || m % d === 0 && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [ a, a, "", c ], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--; ) d = ab(a, e[g]), a[d] = !(b[d] = e[g]);
                    }) : function(a) {
                        return f(a, 0, e);
                    }) : f;
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [], c = [], e = A(a.replace(ib, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--; ) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop();
                    };
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0;
                    };
                }),
                contains: d(function(a) {
                    return a = a.replace(vb, wb), function(b) {
                        return (b.textContent || b.innerText || x(b)).indexOf(a) > -1;
                    };
                }),
                lang: d(function(a) {
                    return nb.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(vb, wb).toLowerCase(), 
                    function(b) {
                        var c;
                        do if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                        c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === H;
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === !1;
                },
                disabled: function(a) {
                    return a.disabled === !0;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !w.pseudos.empty(a);
                },
                header: function(a) {
                    return qb.test(a.nodeName);
                },
                input: function(a) {
                    return pb.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                },
                first: j(function() {
                    return [ 0 ];
                }),
                last: j(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: j(function(a, b, c) {
                    return [ 0 > c ? c + b : c ];
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a;
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (u in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[u] = h(u);
        for (u in {
            submit: !0,
            reset: !0
        }) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l(), z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h; ) {
                (!d || (e = jb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                d = !1, (e = kb.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ib, " ")
                }), h = h.slice(d.length));
                for (g in w.filter) !(e = ob[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), 
                f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break;
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0);
        }, A = b.compile = function(a, b) {
            var c, d = [], e = [], f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--; ) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a;
            }
            return f;
        }, B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a, l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(vb, wb), b) || [])[0], !b) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length);
                }
                for (e = ob.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]); ) if ((i = w.find[h]) && (d = i(g.matches[0].replace(vb, wb), tb.test(f[0].type) && k(b.parentNode) || b))) {
                    if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                    break;
                }
            }
            return (j || A(a, l))(d, b, !I, c, tb.test(a) && k(b.parentNode) || b), c;
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, 
        F(), v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"));
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), v.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), e(function(a) {
            return null == a.getAttribute("disabled");
        }) || f(bb, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), b;
    }(a);
    _.find = eb, _.expr = eb.selectors, _.expr[":"] = _.expr.pseudos, _.unique = eb.uniqueSort, 
    _.text = eb.getText, _.isXMLDoc = eb.isXML, _.contains = eb.contains;
    var fb = _.expr.match.needsContext, gb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, hb = /^.[^:#\[\.,]*$/;
    _.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [ d ] : [] : _.find.matches(a, _.grep(b, function(a) {
            return 1 === a.nodeType;
        }));
    }, _.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a) return this.pushStack(_(a).filter(function() {
                for (b = 0; c > b; b++) if (_.contains(e[b], this)) return !0;
            }));
            for (b = 0; c > b; b++) _.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, 
            d;
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1));
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0));
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && fb.test(a) ? _(a) : a || [], !1).length;
        }
    });
    var ib, jb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, kb = _.fn.init = function(a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [ null, a, null ] : jb.exec(a), 
            !c || !c[1] && b) return !b || b.jquery ? (b || ib).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), 
                gb.test(c[1]) && _.isPlainObject(b)) for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this;
            }
            return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), 
            this.context = Z, this.selector = a, this;
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ib.ready ? ib.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, 
        this.context = a.context), _.makeArray(a, this));
    };
    kb.prototype = _.fn, ib = _(Z);
    var lb = /^(?:parents|prev(?:Until|All))/, mb = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    _.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; ) if (1 === a.nodeType) {
                if (e && _(a).is(c)) break;
                d.push(a);
            }
            return d;
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    }), _.fn.extend({
        has: function(a) {
            var b = _(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++) if (_.contains(this, b[a])) return !0;
            });
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = fb.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? _.unique(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            return this.pushStack(_.unique(_.merge(this.get(), _(a, b))));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    }), _.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return _.dir(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return _.dir(a, "parentNode", c);
        },
        next: function(a) {
            return e(a, "nextSibling");
        },
        prev: function(a) {
            return e(a, "previousSibling");
        },
        nextAll: function(a) {
            return _.dir(a, "nextSibling");
        },
        prevAll: function(a) {
            return _.dir(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return _.dir(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return _.dir(a, "previousSibling", c);
        },
        siblings: function(a) {
            return _.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return _.sibling(a.firstChild);
        },
        contents: function(a) {
            return a.contentDocument || _.merge([], a.childNodes);
        }
    }, function(a, b) {
        _.fn[a] = function(c, d) {
            var e = _.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), 
            this.length > 1 && (mb[a] || _.unique(e), lb.test(a) && e.reverse()), this.pushStack(e);
        };
    });
    var nb = /\S+/g, ob = {};
    _.Callbacks = function(a) {
        a = "string" == typeof a ? ob[a] || f(a) : _.extend({}, a);
        var b, c, d, e, g, h, i = [], j = !a.once && [], k = function(f) {
            for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++) if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                b = !1;
                break;
            }
            d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable());
        }, l = {
            add: function() {
                if (i) {
                    var c = i.length;
                    !function f(b) {
                        _.each(b, function(b, c) {
                            var d = _.type(c);
                            "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c);
                        });
                    }(arguments), d ? g = i.length : b && (e = c, k(b));
                }
                return this;
            },
            remove: function() {
                return i && _.each(arguments, function(a, b) {
                    for (var c; (c = _.inArray(b, i, c)) > -1; ) i.splice(c, 1), d && (g >= c && g--, 
                    h >= c && h--);
                }), this;
            },
            has: function(a) {
                return a ? _.inArray(a, i) > -1 : !(!i || !i.length);
            },
            empty: function() {
                return i = [], g = 0, this;
            },
            disable: function() {
                return i = j = b = void 0, this;
            },
            disabled: function() {
                return !i;
            },
            lock: function() {
                return j = void 0, b || l.disable(), this;
            },
            locked: function() {
                return !j;
            },
            fireWith: function(a, b) {
                return !i || c && !j || (b = b || [], b = [ a, b.slice ? b.slice() : b ], d ? j.push(b) : k(b)), 
                this;
            },
            fire: function() {
                return l.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!c;
            }
        };
        return l;
    }, _.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", _.Callbacks("once memory"), "resolved" ], [ "reject", "fail", _.Callbacks("once memory"), "rejected" ], [ "notify", "progress", _.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var a = arguments;
                    return _.Deferred(function(c) {
                        _.each(b, function(b, f) {
                            var g = _.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? _.extend(a, d) : d;
                }
            }, e = {};
            return d.pipe = d.then, _.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function(a) {
            var b, c, d, e = 0, f = R.call(arguments), g = f.length, h = 1 !== g || a && _.isFunction(a.promise) ? g : 0, i = 1 === h ? a : _.Deferred(), j = function(a, c, d) {
                return function(e) {
                    c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d);
                };
            };
            if (g > 1) for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise();
        }
    });
    var pb;
    _.fn.ready = function(a) {
        return _.ready.promise().done(a), this;
    }, _.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? _.readyWait++ : _.ready(!0);
        },
        ready: function(a) {
            (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pb.resolveWith(Z, [ _ ]), 
            _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))));
        }
    }), _.ready.promise = function(b) {
        return pb || (pb = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), 
        a.addEventListener("load", g, !1))), pb.promise(b);
    }, _.ready.promise();
    var qb = _.access = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === _.type(c)) {
            e = !0;
            for (h in c) _.access(a, b, h, c[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), 
        b = null) : (j = b, b = function(a, b, c) {
            return j.call(_(a), c);
        })), b)) for (;i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    };
    _.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
        key: function(a) {
            if (!h.accepts(a)) return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = h.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b);
                } catch (d) {
                    b[this.expando] = c, _.extend(a, b);
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c;
        },
        set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b) f[b] = c; else if (_.isEmptyObject(f)) _.extend(this.cache[e], b); else for (d in b) f[d] = b[d];
            return f;
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b];
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), 
            void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b) this.cache[f] = {}; else {
                _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [ b, e ] : (d = e, 
                d = d in g ? [ d ] : d.match(nb) || [])), c = d.length;
                for (;c--; ) delete g[d[c]];
            }
        },
        hasData: function(a) {
            return !_.isEmptyObject(this.cache[a[this.expando]] || {});
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]];
        }
    };
    var rb = new h(), sb = new h(), tb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ub = /([A-Z])/g;
    _.extend({
        hasData: function(a) {
            return sb.hasData(a) || rb.hasData(a);
        },
        data: function(a, b, c) {
            return sb.access(a, b, c);
        },
        removeData: function(a, b) {
            sb.remove(a, b);
        },
        _data: function(a, b, c) {
            return rb.access(a, b, c);
        },
        _removeData: function(a, b) {
            rb.remove(a, b);
        }
    }), _.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = sb.get(f), 1 === f.nodeType && !rb.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--; ) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), 
                    i(f, d, e[d])));
                    rb.set(f, "hasDataAttrs", !0);
                }
                return e;
            }
            return "object" == typeof a ? this.each(function() {
                sb.set(this, a);
            }) : qb(this, function(b) {
                var c, d = _.camelCase(a);
                if (f && void 0 === b) {
                    if (c = sb.get(f, a), void 0 !== c) return c;
                    if (c = sb.get(f, d), void 0 !== c) return c;
                    if (c = i(f, d, void 0), void 0 !== c) return c;
                } else this.each(function() {
                    var c = sb.get(this, d);
                    sb.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sb.set(this, a, b);
                });
            }, null, b, arguments.length > 1, null, !0);
        },
        removeData: function(a) {
            return this.each(function() {
                sb.remove(this, a);
            });
        }
    }), _.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = rb.get(a, b), c && (!d || _.isArray(c) ? d = rb.access(a, b, _.makeArray(c)) : d.push(c)), 
            d || []) : void 0;
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = _.queue(a, b), d = c.length, e = c.shift(), f = _._queueHooks(a, b), g = function() {
                _.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return rb.get(a, c) || rb.access(a, c, {
                empty: _.Callbacks("once memory").add(function() {
                    rb.remove(a, [ b + "queue", c ]);
                })
            });
        }
    }), _.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = _.queue(this, a, b);
                _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                _.dequeue(this, a);
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, b) {
            var c, d = 1, e = _.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [ f ]);
            };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--; ) c = rb.get(f[g], a + "queueHooks"), 
            c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var vb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, wb = [ "Top", "Right", "Bottom", "Left" ], xb = function(a, b) {
        return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a);
    }, yb = /^(?:checkbox|radio)$/i;
    !function() {
        var a = Z.createDocumentFragment(), b = a.appendChild(Z.createElement("div")), c = Z.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), 
        b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();
    var zb = "undefined";
    Y.focusinBubbles = "onfocusin" in a;
    var Ab = /^key/, Bb = /^(?:mouse|pointer|contextmenu)|click/, Cb = /^(?:focusinfocus|focusoutblur)$/, Db = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = rb.get(a);
            if (q) for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), 
            (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                return typeof _ !== zb && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0;
            }), b = (b || "").match(nb) || [ "" ], j = b.length; j--; ) h = Db.exec(b[j]) || [], 
            n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, 
            n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
                type: n,
                origType: p,
                data: d,
                handler: c,
                guid: c.guid,
                selector: e,
                needsContext: e && _.expr.match.needsContext.test(e),
                namespace: o.join(".")
            }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), 
            l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), 
            _.event.global[n] = !0);
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = rb.hasData(a) && rb.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(nb) || [ "" ], j = b.length; j--; ) if (h = Db.exec(b[j]) || [], 
                n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], 
                    h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--; ) k = m[f], 
                    !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), 
                    k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), 
                    delete i[n]);
                } else for (n in i) _.event.remove(a, n + b[j], c, d, !0);
                _.isEmptyObject(i) && (delete q.handle, rb.remove(a, "events"));
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [ d || Z ], n = X.call(b, "type") ? b.type : b, o = X.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Cb.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), 
            n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), 
            b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            b.result = void 0, b.target || (b.target = d), c = null == c ? [ b ] : _.makeArray(c, [ b ]), 
            l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !_.isWindow(d)) {
                    for (i = l.delegateType || n, Cb.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), 
                    h = g;
                    h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a);
                }
                for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); ) b.type = f > 1 ? i : l.bindType || n, 
                k = (rb.get(g, "events") || {})[b.type] && rb.get(g, "handle"), k && k.apply(g, c), 
                k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], 
                h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), 
                b.result;
            }
        },
        dispatch: function(a) {
            a = _.event.fix(a);
            var b, c, d, e, f, g = [], h = R.call(arguments), i = (rb.get(this, "events") || {})[a.type] || [], j = _.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = _.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped(); ) for (a.currentTarget = e.elem, 
                c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped(); ) (!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, 
                a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), 
                void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) for (;i !== this; i = i.parentNode || this) if (i.disabled !== !0 || "click" !== a.type) {
                for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [ i ]).length), 
                d[e] && d.push(f);
                d.length && g.push({
                    elem: i,
                    handlers: d
                });
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, 
                d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), 
                a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), 
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
            }
        },
        fix: function(a) {
            if (a[_.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Bb.test(e) ? this.mouseHooks : Ab.test(e) ? this.keyHooks : {}), 
            d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--; ) c = d[b], 
            a[c] = f[c];
            return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
            g.filter ? g.filter(a, f) : a;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== l() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === l() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(a) {
                    return _.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = _.extend(new _.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        }
    }, _.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    }, _.Event = function(a, b) {
        return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, 
        b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void (this[_.expando] = !0)) : new _.Event(a, b);
    }, _.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault();
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        _.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), Y.focusinBubbles || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0);
        };
        _.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = rb.access(d, b);
                e || d.addEventListener(a, c, !0), rb.access(d, b, (e || 0) + 1);
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = rb.access(d, b) - 1;
                e ? rb.access(d, b, e) : (d.removeEventListener(a, c, !0), rb.remove(d, b));
            }
        };
    }), _.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this;
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, 
            c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k; else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return _().off(a), f.apply(this, arguments);
            }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
                _.event.add(this, a, d, c, b);
            });
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), 
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this;
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), 
            this.each(function() {
                _.event.remove(this, a, c, b);
            });
        },
        trigger: function(a, b) {
            return this.each(function() {
                _.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? _.event.trigger(a, b, c, !0) : void 0;
        }
    });
    var Eb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Fb = /<([\w:]+)/, Gb = /<|&#?\w+;/, Hb = /<(?:script|style|link)/i, Ib = /checked\s*(?:[^=]|=\s*.checked.)/i, Jb = /^$|\/(?:java|ecma)script/i, Kb = /^true\/(.*)/, Lb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Mb = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    Mb.optgroup = Mb.option, Mb.tbody = Mb.tfoot = Mb.colgroup = Mb.caption = Mb.thead, 
    Mb.th = Mb.td, _.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = _.contains(a.ownerDocument, a);
            if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a))) for (g = r(h), 
            f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
            if (b) if (c) for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]); else q(a, h);
            return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h;
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++) if (e = a[m], 
            e || 0 === e) if ("object" === _.type(e)) _.merge(l, e.nodeType ? [ e ] : e); else if (Gb.test(e)) {
                for (f = f || k.appendChild(b.createElement("div")), g = (Fb.exec(e) || [ "", "" ])[1].toLowerCase(), 
                h = Mb[g] || Mb._default, f.innerHTML = h[1] + e.replace(Eb, "<$1></$2>") + h[2], 
                j = h[0]; j--; ) f = f.lastChild;
                _.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
            } else l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++]; ) if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), 
            f = r(k.appendChild(e), "script"), i && p(f), c)) for (j = 0; e = f[j++]; ) Jb.test(e.type || "") && c.push(e);
            return k;
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (_.acceptData(c) && (e = c[rb.expando], e && (b = rb.cache[e]))) {
                    if (b.events) for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                    rb.cache[e] && delete rb.cache[e];
                }
                delete sb.cache[c[sb.expando]];
            }
        }
    }), _.fn.extend({
        text: function(a) {
            return qb(this, function(a) {
                return void 0 === a ? _.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
                });
            }, null, a, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        remove: function(a, b) {
            for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), 
            c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
            return this;
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), 
            a.textContent = "");
            return this;
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return _.clone(this, a, b);
            });
        },
        html: function(a) {
            return qb(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Hb.test(a) && !Mb[(Fb.exec(a) || [ "", "" ])[1].toLowerCase()]) {
                    a = a.replace(Eb, "<$1></$2>");
                    try {
                        for (;d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), 
                        b.innerHTML = a);
                        b = 0;
                    } catch (e) {}
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this);
            }), a && (a.length || a.nodeType) ? this : this.remove();
        },
        detach: function(a) {
            return this.remove(a, !0);
        },
        domManip: function(a, b) {
            a = S.apply([], a);
            var c, d, e, f, g, h, i = 0, j = this.length, k = this, l = j - 1, m = a[0], p = _.isFunction(m);
            if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ib.test(m)) return this.each(function(c) {
                var d = k.eq(c);
                p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b);
            });
            if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 
            1 === c.childNodes.length && (c = d), d)) {
                for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), 
                f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
                if (f) for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], 
                Jb.test(g.type || "") && !rb.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(Lb, "")));
            }
            return this;
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        _.fn[a] = function(a) {
            for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), 
            _(e[g])[b](c), T.apply(d, c.get());
            return this.pushStack(d);
        };
    });
    var Nb, Ob = {}, Pb = /^margin/, Qb = new RegExp("^(" + vb + ")(?!px)[a-z%]+$", "i"), Rb = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
    };
    !function() {
        function b() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", 
            g.innerHTML = "", e.appendChild(f);
            var b = a.getComputedStyle(g, null);
            c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f);
        }
        var c, d, e = Z.documentElement, f = Z.createElement("div"), g = Z.createElement("div");
        g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", 
        Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", 
        f.appendChild(g), a.getComputedStyle && _.extend(Y, {
            pixelPosition: function() {
                return b(), c;
            },
            boxSizingReliable: function() {
                return null == d && b(), d;
            },
            reliableMarginRight: function() {
                var b, c = g.appendChild(Z.createElement("div"));
                return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), 
                b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), 
                b;
            }
        }));
    }(), _.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
    };
    var Sb = /^(none|table(?!-c[ea]).+)/, Tb = new RegExp("^(" + vb + ")(.*)$", "i"), Ub = new RegExp("^([+-])=(" + vb + ")", "i"), Vb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Wb = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Xb = [ "Webkit", "O", "Moz", "ms" ];
    _.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = v(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = _.camelCase(b), i = a.style;
                return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], 
                void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, 
                "string" === f && (e = Ub.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), 
                f = "number"), null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), 
                Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), 
                g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = _.camelCase(b);
            return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], 
            g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wb && (e = Wb[b]), 
            "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e;
        }
    }), _.each([ "height", "width" ], function(a, b) {
        _.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Sb.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Vb, function() {
                    return A(a, b, d);
                }) : A(a, b, d) : void 0;
            },
            set: function(a, c, d) {
                var e = d && Rb(a);
                return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0);
            }
        };
    }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
        return b ? _.swap(a, {
            display: "inline-block"
        }, v, [ a, "marginRight" ]) : void 0;
    }), _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        _.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + wb[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, Pb.test(a) || (_.cssHooks[a + b].set = y);
    }), _.fn.extend({
        css: function(a, b) {
            return qb(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (_.isArray(b)) {
                    for (d = Rb(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? _.style(a, b, c) : _.css(a, b);
            }, a, b, arguments.length > 1);
        },
        show: function() {
            return B(this, !0);
        },
        hide: function() {
            return B(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                xb(this) ? _(this).show() : _(this).hide();
            });
        }
    }), _.Tween = C, C.prototype = {
        constructor: C,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), 
            this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = C.propHooks[this.prop];
            return this.pos = b = this.options.duration ? _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : C.propHooks._default.set(this), this;
        }
    }, C.prototype.init.prototype = C.prototype, C.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0) : a.elem[a.prop];
            },
            set: function(a) {
                _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            }
        }
    }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, _.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }
    }, _.fx = C.prototype.init, _.fx.step = {};
    var Yb, Zb, $b = /^(?:toggle|show|hide)$/, _b = new RegExp("^(?:([+-])=|)(" + vb + ")([a-z%]*)$", "i"), ac = /queueHooks$/, bc = [ G ], cc = {
        "*": [ function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = _b.exec(b), f = e && e[3] || (_.cssNumber[a] ? "" : "px"), g = (_.cssNumber[a] || "px" !== f && +d) && _b.exec(_.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), 
            c;
        } ]
    };
    _.Animation = _.extend(I, {
        tweener: function(a, b) {
            _.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cc[c] = cc[c] || [], cc[c].unshift(b);
        },
        prefilter: function(a, b) {
            b ? bc.unshift(a) : bc.push(a);
        }
    }), _.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? _.extend({}, a) : {
            complete: c || !c && b || _.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !_.isFunction(b) && b
        };
        return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, 
        (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue);
        }, d;
    }, _.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(xb).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = _.isEmptyObject(a), f = _.speed(b, c, d), g = function() {
                var b = I(this, _.extend({}, a), f);
                (e || rb.get(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = _.timers, g = rb.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && ac.test(e) && d(g[e]);
                for (e = f.length; e--; ) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), 
                b = !1, f.splice(e, 1));
                (b || !c) && _.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = rb.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = _.timers, g = d ? d.length : 0;
                for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), _.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = _.fn[b];
        _.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e);
        };
    }), _.each({
        slideDown: E("show"),
        slideUp: E("hide"),
        slideToggle: E("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        _.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), _.timers = [], _.fx.tick = function() {
        var a, b = 0, c = _.timers;
        for (Yb = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || _.fx.stop(), Yb = void 0;
    }, _.fx.timer = function(a) {
        _.timers.push(a), a() ? _.fx.start() : _.timers.pop();
    }, _.fx.interval = 13, _.fx.start = function() {
        Zb || (Zb = setInterval(_.fx.tick, _.fx.interval));
    }, _.fx.stop = function() {
        clearInterval(Zb), Zb = null;
    }, _.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, _.fn.delay = function(a, b) {
        return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d);
            };
        });
    }, function() {
        var a = Z.createElement("input"), b = Z.createElement("select"), c = b.appendChild(Z.createElement("option"));
        a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, 
        Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", 
        Y.radioValue = "t" === a.value;
    }();
    var dc, ec, fc = _.expr.attrHandle;
    _.fn.extend({
        attr: function(a, b) {
            return qb(this, _.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                _.removeAttr(this, a);
            });
        }
    }), _.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === zb ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), 
            d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? ec : dc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), 
            null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), 
            c) : void _.removeAttr(a, b));
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(nb);
            if (f && 1 === a.nodeType) for (;c = f[e++]; ) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), 
            a.removeAttribute(c);
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        }
    }), ec = {
        set: function(a, b, c) {
            return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = fc[b] || _.find.attr;
        fc[b] = function(a, b, d) {
            var e, f;
            return d || (f = fc[b], fc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, 
            fc[b] = f), e;
        };
    });
    var gc = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({
        prop: function(a, b) {
            return qb(this, _.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[_.propFix[a] || a];
            });
        }
    }), _.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, 
            e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || gc.test(a.nodeName) || a.href ? a.tabIndex : -1;
                }
            }
        }
    }), Y.optSelected || (_.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        }
    }), _.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        _.propFix[this.toLowerCase()] = this;
    });
    var hc = /[\t\r\n\f]/g;
    _.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).addClass(a.call(this, b, this.className));
            });
            if (h) for (b = (a || "").match(nb) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hc, " ") : " ")) {
                for (f = 0; e = b[f++]; ) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = _.trim(d), c.className !== g && (c.className = g);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).removeClass(a.call(this, b, this.className));
            });
            if (h) for (b = (a || "").match(nb) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hc, " ") : "")) {
                for (f = 0; e = b[f++]; ) for (;d.indexOf(" " + e + " ") >= 0; ) d = d.replace(" " + e + " ", " ");
                g = a ? _.trim(d) : "", c.className !== g && (c.className = g);
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function(c) {
                _(this).toggleClass(a.call(this, c, this.className, b), b);
            } : function() {
                if ("string" === c) for (var b, d = 0, e = _(this), f = a.match(nb) || []; b = f[d++]; ) e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else (c === zb || "boolean" === c) && (this.className && rb.set(this, "__className__", this.className), 
                this.className = this.className || a === !1 ? "" : rb.get(this, "__className__") || "");
            });
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hc, " ").indexOf(b) >= 0) return !0;
            return !1;
        }
    });
    var ic = /\r/g;
    _.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length) return d = _.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
                        return null == a ? "" : a + "";
                    })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
                });
                if (e) return b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, 
                "string" == typeof c ? c.replace(ic, "") : null == c ? "" : c);
            }
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = _.find.attr(a, "value");
                    return null != b ? b : _.trim(_.text(a));
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], 
                    !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
                        if (b = _(c).val(), f) return b;
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--; ) d = e[g], 
                    (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        }
    }), _.each([ "radio", "checkbox" ], function() {
        _.valHooks[this] = {
            set: function(a, b) {
                return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0;
            }
        }, Y.checkOn || (_.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        _.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), _.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    });
    var jc = _.now(), kc = /\?/;
    _.parseJSON = function(a) {
        return JSON.parse(a + "");
    }, _.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser(), b = c.parseFromString(a, "text/xml");
        } catch (d) {
            b = void 0;
        }
        return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), 
        b;
    };
    var lc = /#.*$/, mc = /([?&])_=[^&]*/, nc = /^(.*?):[ \t]*([^\r\n]*)$/gm, oc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, pc = /^(?:GET|HEAD)$/, qc = /^\/\//, rc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, sc = {}, tc = {}, uc = "*/".concat("*"), vc = a.location.href, wc = rc.exec(vc.toLowerCase()) || [];
    _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vc,
            type: "GET",
            isLocal: oc.test(wc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": uc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": _.parseJSON,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a);
        },
        ajaxPrefilter: J(sc),
        ajaxTransport: J(tc),
        ajax: function(a, b) {
            function c(a, b, c, g) {
                var i, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, 
                i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), 
                i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), 
                u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, 
                k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), 
                v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [ k, w, v ]) : o.rejectWith(m, [ v, w, r ]), 
                v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [ v, l, i ? k : r ]), 
                p.fireWith(m, [ v, w ]), j && (n.trigger("ajaxComplete", [ v, l ]), --_.active || _.event.trigger("ajaxStop")));
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b), m = l.context || l, n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event, o = _.Deferred(), p = _.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!g) for (g = {}; b = nc.exec(f); ) g[b[1].toLowerCase()] = b[2];
                        b = g[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? f : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return t || (l.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > t) for (b in a) q[b] = [ q[b], a[b] ]; else v.always(a[v.status]);
                    return this;
                },
                abort: function(a) {
                    var b = a || u;
                    return d && d.abort(b), c(0, b), this;
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vc) + "").replace(lc, "").replace(qc, wc[1] + "//"), 
            l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(nb) || [ "" ], 
            null == l.crossDomain && (i = rc.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wc[1] && i[2] === wc[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wc[3] || ("http:" === wc[1] ? "80" : "443")))), 
            l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), 
            K(sc, l, b, v), 2 === t) return v;
            j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), 
            l.type = l.type.toUpperCase(), l.hasContent = !pc.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kc.test(e) ? "&" : "?") + l.data, 
            delete l.data), l.cache === !1 && (l.url = mc.test(e) ? e.replace(mc, "$1_=" + jc++) : e + (kc.test(e) ? "&" : "?") + "_=" + jc++)), 
            l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), 
            _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), 
            v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + uc + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (k in {
                success: 1,
                error: 1,
                complete: 1
            }) v[k](l[k]);
            if (d = K(tc, l, b, v)) {
                v.readyState = 1, j && n.trigger("ajaxSend", [ v, l ]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout");
                }, l.timeout));
                try {
                    t = 1, d.send(r, c);
                } catch (w) {
                    if (!(2 > t)) throw w;
                    c(-1, w);
                }
            } else c(-1, "No Transport");
            return v;
        },
        getJSON: function(a, b, c) {
            return _.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return _.get(a, void 0, b, "script");
        }
    }), _.each([ "get", "post" ], function(a, b) {
        _[b] = function(a, c, d, e) {
            return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            });
        };
    }), _._evalUrl = function(a) {
        return _.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        });
    }, _.fn.extend({
        wrapAll: function(a) {
            var b;
            return _.isFunction(a) ? this.each(function(b) {
                _(this).wrapAll(a.call(this, b));
            }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), 
            b.map(function() {
                for (var a = this; a.firstElementChild; ) a = a.firstElementChild;
                return a;
            }).append(this)), this);
        },
        wrapInner: function(a) {
            return this.each(_.isFunction(a) ? function(b) {
                _(this).wrapInner(a.call(this, b));
            } : function() {
                var b = _(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = _.isFunction(a);
            return this.each(function(c) {
                _(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                _.nodeName(this, "body") || _(this).replaceWith(this.childNodes);
            }).end();
        }
    }), _.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }, _.expr.filters.visible = function(a) {
        return !_.expr.filters.hidden(a);
    };
    var xc = /%20/g, yc = /\[\]$/, zc = /\r?\n/g, Ac = /^(?:submit|button|image|reset|file)$/i, Bc = /^(?:input|select|textarea|keygen)/i;
    _.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function() {
            e(this.name, this.value);
        }); else for (c in a) O(c, a[c], b, e);
        return d.join("&").replace(xc, "+");
    }, _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = _.prop(this, "elements");
                return a ? _.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !_(this).is(":disabled") && Bc.test(this.nodeName) && !Ac.test(a) && (this.checked || !yb.test(a));
            }).map(function(a, b) {
                var c = _(this).val();
                return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(zc, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(zc, "\r\n")
                };
            }).get();
        }
    }), _.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest();
        } catch (a) {}
    };
    var Cc = 0, Dc = {}, Ec = {
        0: 200,
        1223: 204
    }, Fc = _.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Dc) Dc[a]();
    }), Y.cors = !!Fc && "withCredentials" in Fc, Y.ajax = Fc = !!Fc, _.ajaxTransport(function(a) {
        var b;
        return Y.cors || Fc && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(), g = ++Cc;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Dc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()));
                    };
                }, f.onload = b(), f.onerror = b("error"), b = Dc[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null);
                } catch (h) {
                    if (b) throw h;
                }
            },
            abort: function() {
                b && b();
            }
        } : void 0;
    }), _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return _.globalEval(a), a;
            }
        }
    }), _.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), _.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = _("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type);
                    }), Z.head.appendChild(b[0]);
                },
                abort: function() {
                    c && c();
                }
            };
        }
    });
    var Gc = [], Hc = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Gc.pop() || _.expando + "_" + jc++;
            return this[a] = !0, a;
        }
    }), _.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Hc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, 
        h ? b[h] = b[h].replace(Hc, "$1" + e) : b.jsonp !== !1 && (b.url += (kc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), 
        b.converters["script json"] = function() {
            return g || _.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments;
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gc.push(e)), g && _.isFunction(f) && f(g[0]), 
            g = f = void 0;
        }), "script") : void 0;
    }), _.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || Z;
        var d = gb.exec(a), e = !c && [];
        return d ? [ b.createElement(d[1]) ] : (d = _.buildFragment([ a ], b, e), e && e.length && _(e).remove(), 
        _.merge([], d.childNodes));
    };
    var Ic = _.fn.load;
    _.fn.load = function(a, b, c) {
        if ("string" != typeof a && Ic) return Ic.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, 
        b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a);
        }).complete(c && function(a, b) {
            g.each(c, f || [ a.responseText, b, a ]);
        }), this;
    }, _.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        _.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), _.expr.filters.animated = function(a) {
        return _.grep(_.timers, function(b) {
            return a === b.elem;
        }).length;
    };
    var Jc = a.document.documentElement;
    _.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = _.css(a, "position"), l = _(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), 
            i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, 
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), 
            _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), 
            null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        }
    }, _.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                _.offset.setOffset(this, a, b);
            });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            if (f) return b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== zb && (e = d.getBoundingClientRect()), 
            c = P(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e;
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), 
                d.left += _.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - _.css(c, "marginTop", !0),
                    left: b.left - d.left - _.css(c, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Jc; a && !_.nodeName(a, "html") && "static" === _.css(a, "position"); ) a = a.offsetParent;
                return a || Jc;
            });
        }
    }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        _.fn[b] = function(e) {
            return qb(this, function(b, e, f) {
                var g = P(b);
                return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
            }, b, e, arguments.length, null);
        };
    }), _.each([ "top", "left" ], function(a, b) {
        _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
            return c ? (c = v(a, b), Qb.test(c) ? _(a).position()[b] + "px" : c) : void 0;
        });
    }), _.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        _.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            _.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return qb(this, function(b, c, d) {
                    var e;
                    return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, 
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g);
                }, b, f ? d : void 0, f, null);
            };
        });
    }), _.fn.size = function() {
        return this.length;
    }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _;
    });
    var Kc = a.jQuery, Lc = a.$;
    return _.noConflict = function(b) {
        return a.$ === _ && (a.$ = Lc), b && a.jQuery === _ && (a.jQuery = Kc), _;
    }, typeof b === zb && (a.jQuery = a.$ = _), _;
}), function(a) {
    a([ "jquery" ], function(a) {
        return function() {
            function b(a, b, c) {
                return o({
                    type: v.error,
                    iconClass: p().iconClasses.error,
                    message: a,
                    optionsOverride: c,
                    title: b
                });
            }
            function c(b, c) {
                return b || (b = p()), r = a("#" + b.containerId), r.length ? r : (c && (r = l(b)), 
                r);
            }
            function d(a, b, c) {
                return o({
                    type: v.info,
                    iconClass: p().iconClasses.info,
                    message: a,
                    optionsOverride: c,
                    title: b
                });
            }
            function e(a) {
                s = a;
            }
            function f(a, b, c) {
                return o({
                    type: v.success,
                    iconClass: p().iconClasses.success,
                    message: a,
                    optionsOverride: c,
                    title: b
                });
            }
            function g(a, b, c) {
                return o({
                    type: v.warning,
                    iconClass: p().iconClasses.warning,
                    message: a,
                    optionsOverride: c,
                    title: b
                });
            }
            function h(a) {
                var b = p();
                r || c(b), k(a, b) || j(b);
            }
            function i(b) {
                var d = p();
                return r || c(d), b && 0 === a(":focus", b).length ? void q(b) : void (r.children().length && r.remove());
            }
            function j(b) {
                for (var c = r.children(), d = c.length - 1; d >= 0; d--) k(a(c[d]), b);
            }
            function k(b, c) {
                return b && 0 === a(":focus", b).length ? (b[c.hideMethod]({
                    duration: c.hideDuration,
                    easing: c.hideEasing,
                    complete: function() {
                        q(b);
                    }
                }), !0) : !1;
            }
            function l(b) {
                return r = a("<div/>").attr("id", b.containerId).addClass(b.positionClass).attr("aria-live", "polite").attr("role", "alert"), 
                r.appendTo(a(b.target)), r;
            }
            function m() {
                return {
                    tapToDismiss: !0,
                    toastClass: "toast",
                    containerId: "toast-container",
                    debug: !1,
                    showMethod: "fadeIn",
                    showDuration: 300,
                    showEasing: "swing",
                    onShown: void 0,
                    hideMethod: "fadeOut",
                    hideDuration: 1e3,
                    hideEasing: "swing",
                    onHidden: void 0,
                    extendedTimeOut: 1e3,
                    iconClasses: {
                        error: "toast-error",
                        info: "toast-info",
                        success: "toast-success",
                        warning: "toast-warning"
                    },
                    iconClass: "toast-info",
                    positionClass: "toast-top-right",
                    timeOut: 5e3,
                    titleClass: "toast-title",
                    messageClass: "toast-message",
                    target: "body",
                    closeHtml: "<button>&times;</button>",
                    newestOnTop: !0,
                    preventDuplicates: !1,
                    progressBar: !1
                };
            }
            function n(a) {
                s && s(a);
            }
            function o(b) {
                function d(b) {
                    return !a(":focus", k).length || b ? (clearTimeout(v.intervalId), k[h.hideMethod]({
                        duration: h.hideDuration,
                        easing: h.hideEasing,
                        complete: function() {
                            q(k), h.onHidden && "hidden" !== w.state && h.onHidden(), w.state = "hidden", w.endTime = new Date(), 
                            n(w);
                        }
                    })) : void 0;
                }
                function e() {
                    (h.timeOut > 0 || h.extendedTimeOut > 0) && (j = setTimeout(d, h.extendedTimeOut), 
                    v.maxHideTime = parseFloat(h.extendedTimeOut), v.hideEta = new Date().getTime() + v.maxHideTime);
                }
                function f() {
                    clearTimeout(j), v.hideEta = 0, k.stop(!0, !0)[h.showMethod]({
                        duration: h.showDuration,
                        easing: h.showEasing
                    });
                }
                function g() {
                    var a = (v.hideEta - new Date().getTime()) / v.maxHideTime * 100;
                    o.width(a + "%");
                }
                var h = p(), i = b.iconClass || h.iconClass;
                if (h.preventDuplicates) {
                    if (b.message === t) return;
                    t = b.message;
                }
                "undefined" != typeof b.optionsOverride && (h = a.extend(h, b.optionsOverride), 
                i = b.optionsOverride.iconClass || i), u++, r = c(h, !0);
                var j = null, k = a("<div/>"), l = a("<div/>"), m = a("<div/>"), o = a("<div/>"), s = a(h.closeHtml), v = {
                    intervalId: null,
                    hideEta: null,
                    maxHideTime: null
                }, w = {
                    toastId: u,
                    state: "visible",
                    startTime: new Date(),
                    options: h,
                    map: b
                };
                return b.iconClass && k.addClass(h.toastClass).addClass(i), b.title && (l.append(b.title).addClass(h.titleClass), 
                k.append(l)), b.message && (m.append(b.message).addClass(h.messageClass), k.append(m)), 
                h.closeButton && (s.addClass("toast-close-button").attr("role", "button"), k.prepend(s)), 
                h.progressBar && (o.addClass("toast-progress"), k.prepend(o)), k.hide(), h.newestOnTop ? r.prepend(k) : r.append(k), 
                k[h.showMethod]({
                    duration: h.showDuration,
                    easing: h.showEasing,
                    complete: h.onShown
                }), h.timeOut > 0 && (j = setTimeout(d, h.timeOut), v.maxHideTime = parseFloat(h.timeOut), 
                v.hideEta = new Date().getTime() + v.maxHideTime, h.progressBar && (v.intervalId = setInterval(g, 10))), 
                k.hover(f, e), !h.onclick && h.tapToDismiss && k.click(d), h.closeButton && s && s.click(function(a) {
                    a.stopPropagation ? a.stopPropagation() : void 0 !== a.cancelBubble && a.cancelBubble !== !0 && (a.cancelBubble = !0), 
                    d(!0);
                }), h.onclick && k.click(function() {
                    h.onclick(), d();
                }), n(w), h.debug && console && console.log(w), k;
            }
            function p() {
                return a.extend({}, m(), w.options);
            }
            function q(a) {
                r || (r = c()), a.is(":visible") || (a.remove(), a = null, 0 === r.children().length && r.remove());
            }
            var r, s, t, u = 0, v = {
                error: "error",
                info: "info",
                success: "success",
                warning: "warning"
            }, w = {
                clear: h,
                remove: i,
                error: b,
                getContainer: c,
                info: d,
                options: {},
                subscribe: e,
                success: f,
                version: "2.1.0",
                warning: g
            };
            return w;
        }();
    });
}("function" == typeof define && define.amd ? define : function(a, b) {
    "undefined" != typeof module && module.exports ? module.exports = b(require("jquery")) : window.toastr = b(window.jQuery);
}), function(a, b, c) {
    "use strict";
    function d(a, b) {
        return b = b || Error, function() {
            var c, d, e = arguments[0], f = "[" + (a ? a + ":" : "") + e + "] ", g = arguments[1], h = arguments;
            for (c = f + g.replace(/\{\d+\}/g, function(a) {
                var b = +a.slice(1, -1);
                return b + 2 < h.length ? mb(h[b + 2]) : a;
            }), c = c + "\nhttp://errors.angularjs.org/1.3.11/" + (a ? a + "/" : "") + e, d = 2; d < arguments.length; d++) c = c + (2 == d ? "?" : "&") + "p" + (d - 2) + "=" + encodeURIComponent(mb(arguments[d]));
            return new b(c);
        };
    }
    function e(a) {
        if (null == a || z(a)) return !1;
        var b = a.length;
        return a.nodeType === qe && b ? !0 : u(a) || je(a) || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }
    function f(a, b, c) {
        var d, g;
        if (a) if (x(a)) for (d in a) "prototype" == d || "length" == d || "name" == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d, a); else if (je(a) || e(a)) {
            var h = "object" != typeof a;
            for (d = 0, g = a.length; g > d; d++) (h || d in a) && b.call(c, a[d], d, a);
        } else if (a.forEach && a.forEach !== f) a.forEach(b, c, a); else for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d, a);
        return a;
    }
    function g(a) {
        return Object.keys(a).sort();
    }
    function h(a, b, c) {
        for (var d = g(a), e = 0; e < d.length; e++) b.call(c, a[d[e]], d[e]);
        return d;
    }
    function i(a) {
        return function(b, c) {
            a(c, b);
        };
    }
    function j() {
        return ++he;
    }
    function k(a, b) {
        b ? a.$$hashKey = b : delete a.$$hashKey;
    }
    function l(a) {
        for (var b = a.$$hashKey, c = 1, d = arguments.length; d > c; c++) {
            var e = arguments[c];
            if (e) for (var f = Object.keys(e), g = 0, h = f.length; h > g; g++) {
                var i = f[g];
                a[i] = e[i];
            }
        }
        return k(a, b), a;
    }
    function m(a) {
        return parseInt(a, 10);
    }
    function n(a, b) {
        return l(Object.create(a), b);
    }
    function o() {}
    function p(a) {
        return a;
    }
    function q(a) {
        return function() {
            return a;
        };
    }
    function r(a) {
        return "undefined" == typeof a;
    }
    function s(a) {
        return "undefined" != typeof a;
    }
    function t(a) {
        return null !== a && "object" == typeof a;
    }
    function u(a) {
        return "string" == typeof a;
    }
    function v(a) {
        return "number" == typeof a;
    }
    function w(a) {
        return "[object Date]" === ee.call(a);
    }
    function x(a) {
        return "function" == typeof a;
    }
    function y(a) {
        return "[object RegExp]" === ee.call(a);
    }
    function z(a) {
        return a && a.window === a;
    }
    function A(a) {
        return a && a.$evalAsync && a.$watch;
    }
    function B(a) {
        return "[object File]" === ee.call(a);
    }
    function C(a) {
        return "[object FormData]" === ee.call(a);
    }
    function D(a) {
        return "[object Blob]" === ee.call(a);
    }
    function E(a) {
        return "boolean" == typeof a;
    }
    function F(a) {
        return a && x(a.then);
    }
    function G(a) {
        return !(!a || !(a.nodeName || a.prop && a.attr && a.find));
    }
    function H(a) {
        var b, c = {}, d = a.split(",");
        for (b = 0; b < d.length; b++) c[d[b]] = !0;
        return c;
    }
    function I(a) {
        return Ud(a.nodeName || a[0] && a[0].nodeName);
    }
    function J(a, b) {
        var c = a.indexOf(b);
        return c >= 0 && a.splice(c, 1), b;
    }
    function K(a, b, c, d) {
        if (z(a) || A(a)) throw fe("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
        if (b) {
            if (a === b) throw fe("cpi", "Can't copy! Source and destination are identical.");
            if (c = c || [], d = d || [], t(a)) {
                var e = c.indexOf(a);
                if (-1 !== e) return d[e];
                c.push(a), d.push(b);
            }
            var g;
            if (je(a)) {
                b.length = 0;
                for (var h = 0; h < a.length; h++) g = K(a[h], null, c, d), t(a[h]) && (c.push(a[h]), 
                d.push(g)), b.push(g);
            } else {
                var i = b.$$hashKey;
                je(b) ? b.length = 0 : f(b, function(a, c) {
                    delete b[c];
                });
                for (var j in a) a.hasOwnProperty(j) && (g = K(a[j], null, c, d), t(a[j]) && (c.push(a[j]), 
                d.push(g)), b[j] = g);
                k(b, i);
            }
        } else if (b = a, a) if (je(a)) b = K(a, [], c, d); else if (w(a)) b = new Date(a.getTime()); else if (y(a)) b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), 
        b.lastIndex = a.lastIndex; else if (t(a)) {
            var l = Object.create(Object.getPrototypeOf(a));
            b = K(a, l, c, d);
        }
        return b;
    }
    function L(a, b) {
        if (je(a)) {
            b = b || [];
            for (var c = 0, d = a.length; d > c; c++) b[c] = a[c];
        } else if (t(a)) {
            b = b || {};
            for (var e in a) ("$" !== e.charAt(0) || "$" !== e.charAt(1)) && (b[e] = a[e]);
        }
        return b || a;
    }
    function M(a, b) {
        if (a === b) return !0;
        if (null === a || null === b) return !1;
        if (a !== a && b !== b) return !0;
        var d, e, f, g = typeof a, h = typeof b;
        if (g == h && "object" == g) {
            if (!je(a)) {
                if (w(a)) return w(b) ? M(a.getTime(), b.getTime()) : !1;
                if (y(a) && y(b)) return a.toString() == b.toString();
                if (A(a) || A(b) || z(a) || z(b) || je(b)) return !1;
                f = {};
                for (e in a) if ("$" !== e.charAt(0) && !x(a[e])) {
                    if (!M(a[e], b[e])) return !1;
                    f[e] = !0;
                }
                for (e in b) if (!f.hasOwnProperty(e) && "$" !== e.charAt(0) && b[e] !== c && !x(b[e])) return !1;
                return !0;
            }
            if (!je(b)) return !1;
            if ((d = a.length) == b.length) {
                for (e = 0; d > e; e++) if (!M(a[e], b[e])) return !1;
                return !0;
            }
        }
        return !1;
    }
    function N(a, b, c) {
        return a.concat(be.call(b, c));
    }
    function O(a, b) {
        return be.call(a, b || 0);
    }
    function P(a, b) {
        var c = arguments.length > 2 ? O(arguments, 2) : [];
        return !x(b) || b instanceof RegExp ? b : c.length ? function() {
            return arguments.length ? b.apply(a, N(c, arguments, 0)) : b.apply(a, c);
        } : function() {
            return arguments.length ? b.apply(a, arguments) : b.call(a);
        };
    }
    function Q(a, d) {
        var e = d;
        return "string" == typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? e = c : z(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : A(d) && (e = "$SCOPE"), 
        e;
    }
    function R(a, b) {
        return "undefined" == typeof a ? c : (v(b) || (b = b ? 2 : null), JSON.stringify(a, Q, b));
    }
    function S(a) {
        return u(a) ? JSON.parse(a) : a;
    }
    function T(a) {
        a = $d(a).clone();
        try {
            a.empty();
        } catch (b) {}
        var c = $d("<div>").append(a).html();
        try {
            return a[0].nodeType === re ? Ud(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + Ud(b);
            });
        } catch (b) {
            return Ud(c);
        }
    }
    function U(a) {
        try {
            return decodeURIComponent(a);
        } catch (b) {}
    }
    function V(a) {
        var b, c, d = {};
        return f((a || "").split("&"), function(a) {
            if (a && (b = a.replace(/\+/g, "%20").split("="), c = U(b[0]), s(c))) {
                var e = s(b[1]) ? U(b[1]) : !0;
                Vd.call(d, c) ? je(d[c]) ? d[c].push(e) : d[c] = [ d[c], e ] : d[c] = e;
            }
        }), d;
    }
    function W(a) {
        var b = [];
        return f(a, function(a, c) {
            je(a) ? f(a, function(a) {
                b.push(Y(c, !0) + (a === !0 ? "" : "=" + Y(a, !0)));
            }) : b.push(Y(c, !0) + (a === !0 ? "" : "=" + Y(a, !0)));
        }), b.length ? b.join("&") : "";
    }
    function X(a) {
        return Y(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
    }
    function Y(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+");
    }
    function Z(a, b) {
        var c, d, e = ne.length;
        for (a = $d(a), d = 0; e > d; ++d) if (c = ne[d] + b, u(c = a.attr(c))) return c;
        return null;
    }
    function $(a, b) {
        var c, d, e = {};
        f(ne, function(b) {
            var e = b + "app";
            !c && a.hasAttribute && a.hasAttribute(e) && (c = a, d = a.getAttribute(e));
        }), f(ne, function(b) {
            var e, f = b + "app";
            !c && (e = a.querySelector("[" + f.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(f));
        }), c && (e.strictDi = null !== Z(c, "strict-di"), b(c, d ? [ d ] : [], e));
    }
    function _(c, d, e) {
        t(e) || (e = {});
        var g = {
            strictDi: !1
        };
        e = l(g, e);
        var h = function() {
            if (c = $d(c), c.injector()) {
                var a = c[0] === b ? "document" : T(c);
                throw fe("btstrpd", "App Already Bootstrapped with this Element '{0}'", a.replace(/</, "&lt;").replace(/>/, "&gt;"));
            }
            d = d || [], d.unshift([ "$provide", function(a) {
                a.value("$rootElement", c);
            } ]), e.debugInfoEnabled && d.push([ "$compileProvider", function(a) {
                a.debugInfoEnabled(!0);
            } ]), d.unshift("ng");
            var f = Sb(d, e.strictDi);
            return f.invoke([ "$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, d) {
                a.$apply(function() {
                    b.data("$injector", d), c(b)(a);
                });
            } ]), f;
        }, i = /^NG_ENABLE_DEBUG_INFO!/, j = /^NG_DEFER_BOOTSTRAP!/;
        return a && i.test(a.name) && (e.debugInfoEnabled = !0, a.name = a.name.replace(i, "")), 
        a && !j.test(a.name) ? h() : (a.name = a.name.replace(j, ""), void (ge.resumeBootstrap = function(a) {
            f(a, function(a) {
                d.push(a);
            }), h();
        }));
    }
    function ab() {
        a.name = "NG_ENABLE_DEBUG_INFO!" + a.name, a.location.reload();
    }
    function bb(a) {
        var b = ge.element(a).injector();
        if (!b) throw fe("test", "no injector found for element argument to getTestability");
        return b.get("$$testability");
    }
    function cb(a, b) {
        return b = b || "_", a.replace(oe, function(a, c) {
            return (c ? b : "") + a.toLowerCase();
        });
    }
    function db() {
        var b;
        pe || (_d = a.jQuery, _d && _d.fn.on ? ($d = _d, l(_d.fn, {
            scope: Je.scope,
            isolateScope: Je.isolateScope,
            controller: Je.controller,
            injector: Je.injector,
            inheritedData: Je.inheritedData
        }), b = _d.cleanData, _d.cleanData = function(a) {
            var c;
            if (ie) ie = !1; else for (var d, e = 0; null != (d = a[e]); e++) c = _d._data(d, "events"), 
            c && c.$destroy && _d(d).triggerHandler("$destroy");
            b(a);
        }) : $d = ub, ge.element = $d, pe = !0);
    }
    function eb(a, b, c) {
        if (!a) throw fe("areq", "Argument '{0}' is {1}", b || "?", c || "required");
        return a;
    }
    function fb(a, b, c) {
        return c && je(a) && (a = a[a.length - 1]), eb(x(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), 
        a;
    }
    function gb(a, b) {
        if ("hasOwnProperty" === a) throw fe("badname", "hasOwnProperty is not a valid {0} name", b);
    }
    function hb(a, b, c) {
        if (!b) return a;
        for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++) d = e[h], 
        a && (a = (f = a)[d]);
        return !c && x(a) ? P(f, a) : a;
    }
    function ib(a) {
        var b = a[0], c = a[a.length - 1], d = [ b ];
        do {
            if (b = b.nextSibling, !b) break;
            d.push(b);
        } while (b !== c);
        return $d(d);
    }
    function jb() {
        return Object.create(null);
    }
    function kb(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c());
        }
        var c = d("$injector"), e = d("ng"), f = b(a, "angular", Object);
        return f.$$minErr = f.$$minErr || d, b(f, "module", function() {
            var a = {};
            return function(d, f, g) {
                var h = function(a, b) {
                    if ("hasOwnProperty" === a) throw e("badname", "hasOwnProperty is not a valid {0} name", b);
                };
                return h(d, "module"), f && a.hasOwnProperty(d) && (a[d] = null), b(a, d, function() {
                    function a(a, c, d, e) {
                        return e || (e = b), function() {
                            return e[d || "push"]([ a, c, arguments ]), j;
                        };
                    }
                    if (!f) throw c("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", d);
                    var b = [], e = [], h = [], i = a("$injector", "invoke", "push", e), j = {
                        _invokeQueue: b,
                        _configBlocks: e,
                        _runBlocks: h,
                        requires: f,
                        name: d,
                        provider: a("$provide", "provider"),
                        factory: a("$provide", "factory"),
                        service: a("$provide", "service"),
                        value: a("$provide", "value"),
                        constant: a("$provide", "constant", "unshift"),
                        animation: a("$animateProvider", "register"),
                        filter: a("$filterProvider", "register"),
                        controller: a("$controllerProvider", "register"),
                        directive: a("$compileProvider", "directive"),
                        config: i,
                        run: function(a) {
                            return h.push(a), this;
                        }
                    };
                    return g && i(g), j;
                });
            };
        });
    }
    function lb(a) {
        var b = [];
        return JSON.stringify(a, function(a, c) {
            if (c = Q(a, c), t(c)) {
                if (b.indexOf(c) >= 0) return "<<already seen>>";
                b.push(c);
            }
            return c;
        });
    }
    function mb(a) {
        return "function" == typeof a ? a.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof a ? "undefined" : "string" != typeof a ? lb(a) : a;
    }
    function nb(b) {
        l(b, {
            bootstrap: _,
            copy: K,
            extend: l,
            equals: M,
            element: $d,
            forEach: f,
            injector: Sb,
            noop: o,
            bind: P,
            toJson: R,
            fromJson: S,
            identity: p,
            isUndefined: r,
            isDefined: s,
            isString: u,
            isFunction: x,
            isObject: t,
            isNumber: v,
            isElement: G,
            isArray: je,
            version: ve,
            isDate: w,
            lowercase: Ud,
            uppercase: Wd,
            callbacks: {
                counter: 0
            },
            getTestability: bb,
            $$minErr: d,
            $$csp: me,
            reloadWithDebugInfo: ab
        }), ae = kb(a);
        try {
            ae("ngLocale");
        } catch (c) {
            ae("ngLocale", []).provider("$locale", qc);
        }
        ae("ng", [ "ngLocale" ], [ "$provide", function(a) {
            a.provider({
                $$sanitizeUri: Wc
            }), a.provider("$compile", Zb).directive({
                a: Bf,
                input: Sf,
                textarea: Sf,
                form: Gf,
                script: Hg,
                select: Kg,
                style: Mg,
                option: Lg,
                ngBind: Vf,
                ngBindHtml: Xf,
                ngBindTemplate: Wf,
                ngClass: Zf,
                ngClassEven: _f,
                ngClassOdd: $f,
                ngCloak: ag,
                ngController: bg,
                ngForm: Hf,
                ngHide: Bg,
                ngIf: eg,
                ngInclude: fg,
                ngInit: hg,
                ngNonBindable: vg,
                ngPluralize: wg,
                ngRepeat: xg,
                ngShow: Ag,
                ngStyle: Cg,
                ngSwitch: Dg,
                ngSwitchWhen: Eg,
                ngSwitchDefault: Fg,
                ngOptions: Jg,
                ngTransclude: Gg,
                ngModel: sg,
                ngList: ig,
                ngChange: Yf,
                pattern: Og,
                ngPattern: Og,
                required: Ng,
                ngRequired: Ng,
                minlength: Qg,
                ngMinlength: Qg,
                maxlength: Pg,
                ngMaxlength: Pg,
                ngValue: Uf,
                ngModelOptions: ug
            }).directive({
                ngInclude: gg
            }).directive(Cf).directive(cg), a.provider({
                $anchorScroll: Tb,
                $animate: Te,
                $browser: Wb,
                $cacheFactory: Xb,
                $controller: bc,
                $document: cc,
                $exceptionHandler: dc,
                $filter: gd,
                $interpolate: oc,
                $interval: pc,
                $http: kc,
                $httpBackend: mc,
                $location: Ec,
                $log: Fc,
                $parse: Qc,
                $rootScope: Vc,
                $q: Rc,
                $$q: Sc,
                $sce: $c,
                $sceDelegate: Zc,
                $sniffer: _c,
                $templateCache: Yb,
                $templateRequest: ad,
                $$testability: bd,
                $timeout: cd,
                $window: fd,
                $$rAF: Uc,
                $$asyncCallback: Ub,
                $$jqLite: Nb
            });
        } ]);
    }
    function ob() {
        return ++xe;
    }
    function pb(a) {
        return a.replace(Ae, function(a, b, c, d) {
            return d ? c.toUpperCase() : c;
        }).replace(Be, "Moz$1");
    }
    function qb(a) {
        return !Fe.test(a);
    }
    function rb(a) {
        var b = a.nodeType;
        return b === qe || !b || b === te;
    }
    function sb(a, b) {
        var c, d, e, g, h = b.createDocumentFragment(), i = [];
        if (qb(a)) i.push(b.createTextNode(a)); else {
            for (c = c || h.appendChild(b.createElement("div")), d = (Ge.exec(a) || [ "", "" ])[1].toLowerCase(), 
            e = Ie[d] || Ie._default, c.innerHTML = e[1] + a.replace(He, "<$1></$2>") + e[2], 
            g = e[0]; g--; ) c = c.lastChild;
            i = N(i, c.childNodes), c = h.firstChild, c.textContent = "";
        }
        return h.textContent = "", h.innerHTML = "", f(i, function(a) {
            h.appendChild(a);
        }), h;
    }
    function tb(a, c) {
        c = c || b;
        var d;
        return (d = Ee.exec(a)) ? [ c.createElement(d[1]) ] : (d = sb(a, c)) ? d.childNodes : [];
    }
    function ub(a) {
        if (a instanceof ub) return a;
        var b;
        if (u(a) && (a = ke(a), b = !0), !(this instanceof ub)) {
            if (b && "<" != a.charAt(0)) throw De("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new ub(a);
        }
        b ? Eb(this, tb(a)) : Eb(this, a);
    }
    function vb(a) {
        return a.cloneNode(!0);
    }
    function wb(a, b) {
        if (b || yb(a), a.querySelectorAll) for (var c = a.querySelectorAll("*"), d = 0, e = c.length; e > d; d++) yb(c[d]);
    }
    function xb(a, b, c, d) {
        if (s(d)) throw De("offargs", "jqLite#off() does not support the `selector` argument");
        var e = zb(a), g = e && e.events, h = e && e.handle;
        if (h) if (b) f(b.split(" "), function(b) {
            if (s(c)) {
                var d = g[b];
                if (J(d || [], c), d && d.length > 0) return;
            }
            ze(a, b, h), delete g[b];
        }); else for (b in g) "$destroy" !== b && ze(a, b, h), delete g[b];
    }
    function yb(a, b) {
        var d = a.ng339, e = d && we[d];
        if (e) {
            if (b) return void delete e.data[b];
            e.handle && (e.events.$destroy && e.handle({}, "$destroy"), xb(a)), delete we[d], 
            a.ng339 = c;
        }
    }
    function zb(a, b) {
        var d = a.ng339, e = d && we[d];
        return b && !e && (a.ng339 = d = ob(), e = we[d] = {
            events: {},
            data: {},
            handle: c
        }), e;
    }
    function Ab(a, b, c) {
        if (rb(a)) {
            var d = s(c), e = !d && b && !t(b), f = !b, g = zb(a, !e), h = g && g.data;
            if (d) h[b] = c; else {
                if (f) return h;
                if (e) return h && h[b];
                l(h, b);
            }
        }
    }
    function Bb(a, b) {
        return a.getAttribute ? (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1 : !1;
    }
    function Cb(a, b) {
        b && a.setAttribute && f(b.split(" "), function(b) {
            a.setAttribute("class", ke((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + ke(b) + " ", " ")));
        });
    }
    function Db(a, b) {
        if (b && a.setAttribute) {
            var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            f(b.split(" "), function(a) {
                a = ke(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ");
            }), a.setAttribute("class", ke(c));
        }
    }
    function Eb(a, b) {
        if (b) if (b.nodeType) a[a.length++] = b; else {
            var c = b.length;
            if ("number" == typeof c && b.window !== b) {
                if (c) for (var d = 0; c > d; d++) a[a.length++] = b[d];
            } else a[a.length++] = b;
        }
    }
    function Fb(a, b) {
        return Gb(a, "$" + (b || "ngController") + "Controller");
    }
    function Gb(a, b, d) {
        a.nodeType == te && (a = a.documentElement);
        for (var e = je(b) ? b : [ b ]; a; ) {
            for (var f = 0, g = e.length; g > f; f++) if ((d = $d.data(a, e[f])) !== c) return d;
            a = a.parentNode || a.nodeType === ue && a.host;
        }
    }
    function Hb(a) {
        for (wb(a, !0); a.firstChild; ) a.removeChild(a.firstChild);
    }
    function Ib(a, b) {
        b || wb(a);
        var c = a.parentNode;
        c && c.removeChild(a);
    }
    function Jb(b, c) {
        c = c || a, "complete" === c.document.readyState ? c.setTimeout(b) : $d(c).on("load", b);
    }
    function Kb(a, b) {
        var c = Ke[b.toLowerCase()];
        return c && Le[I(a)] && c;
    }
    function Lb(a, b) {
        var c = a.nodeName;
        return ("INPUT" === c || "TEXTAREA" === c) && Me[b];
    }
    function Mb(a, b) {
        var c = function(c, d) {
            c.isDefaultPrevented = function() {
                return c.defaultPrevented;
            };
            var e = b[d || c.type], f = e ? e.length : 0;
            if (f) {
                if (r(c.immediatePropagationStopped)) {
                    var g = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function() {
                        c.immediatePropagationStopped = !0, c.stopPropagation && c.stopPropagation(), g && g.call(c);
                    };
                }
                c.isImmediatePropagationStopped = function() {
                    return c.immediatePropagationStopped === !0;
                }, f > 1 && (e = L(e));
                for (var h = 0; f > h; h++) c.isImmediatePropagationStopped() || e[h].call(a, c);
            }
        };
        return c.elem = a, c;
    }
    function Nb() {
        this.$get = function() {
            return l(ub, {
                hasClass: function(a, b) {
                    return a.attr && (a = a[0]), Bb(a, b);
                },
                addClass: function(a, b) {
                    return a.attr && (a = a[0]), Db(a, b);
                },
                removeClass: function(a, b) {
                    return a.attr && (a = a[0]), Cb(a, b);
                }
            });
        };
    }
    function Ob(a, b) {
        var c = a && a.$$hashKey;
        if (c) return "function" == typeof c && (c = a.$$hashKey()), c;
        var d = typeof a;
        return c = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || j)() : d + ":" + a;
    }
    function Pb(a, b) {
        if (b) {
            var c = 0;
            this.nextUid = function() {
                return ++c;
            };
        }
        f(a, this.put, this);
    }
    function Qb(a) {
        var b = a.toString().replace(Qe, ""), c = b.match(Ne);
        return c ? "function(" + (c[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
    }
    function Rb(a, b, c) {
        var d, e, g, h;
        if ("function" == typeof a) {
            if (!(d = a.$inject)) {
                if (d = [], a.length) {
                    if (b) throw u(c) && c || (c = a.name || Qb(a)), Re("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", c);
                    e = a.toString().replace(Qe, ""), g = e.match(Ne), f(g[1].split(Oe), function(a) {
                        a.replace(Pe, function(a, b, c) {
                            d.push(c);
                        });
                    });
                }
                a.$inject = d;
            }
        } else je(a) ? (h = a.length - 1, fb(a[h], "fn"), d = a.slice(0, h)) : fb(a, "fn", !0);
        return d;
    }
    function Sb(a, b) {
        function d(a) {
            return function(b, c) {
                return t(b) ? void f(b, i(a)) : a(b, c);
            };
        }
        function e(a, b) {
            if (gb(a, "service"), (x(b) || je(b)) && (b = A.instantiate(b)), !b.$get) throw Re("pget", "Provider '{0}' must define $get factory method.", a);
            return z[a + v] = b;
        }
        function g(a, b) {
            return function() {
                var c = C.invoke(b, this);
                if (r(c)) throw Re("undef", "Provider '{0}' must return a value from $get factory method.", a);
                return c;
            };
        }
        function h(a, b, c) {
            return e(a, {
                $get: c !== !1 ? g(a, b) : b
            });
        }
        function j(a, b) {
            return h(a, [ "$injector", function(a) {
                return a.instantiate(b);
            } ]);
        }
        function k(a, b) {
            return h(a, q(b), !1);
        }
        function l(a, b) {
            gb(a, "constant"), z[a] = b, B[a] = b;
        }
        function m(a, b) {
            var c = A.get(a + v), d = c.$get;
            c.$get = function() {
                var a = C.invoke(d, c);
                return C.invoke(b, null, {
                    $delegate: a
                });
            };
        }
        function n(a) {
            var b, c = [];
            return f(a, function(a) {
                function d(a) {
                    var b, c;
                    for (b = 0, c = a.length; c > b; b++) {
                        var d = a[b], e = A.get(d[0]);
                        e[d[1]].apply(e, d[2]);
                    }
                }
                if (!y.get(a)) {
                    y.put(a, !0);
                    try {
                        u(a) ? (b = ae(a), c = c.concat(n(b.requires)).concat(b._runBlocks), d(b._invokeQueue), 
                        d(b._configBlocks)) : x(a) ? c.push(A.invoke(a)) : je(a) ? c.push(A.invoke(a)) : fb(a, "module");
                    } catch (e) {
                        throw je(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), 
                        Re("modulerr", "Failed to instantiate module {0} due to:\n{1}", a, e.stack || e.message || e);
                    }
                }
            }), c;
        }
        function p(a, c) {
            function d(b, d) {
                if (a.hasOwnProperty(b)) {
                    if (a[b] === s) throw Re("cdep", "Circular dependency found: {0}", b + " <- " + w.join(" <- "));
                    return a[b];
                }
                try {
                    return w.unshift(b), a[b] = s, a[b] = c(b, d);
                } catch (e) {
                    throw a[b] === s && delete a[b], e;
                } finally {
                    w.shift();
                }
            }
            function e(a, c, e, f) {
                "string" == typeof e && (f = e, e = null);
                var g, h, i, j = [], k = Rb(a, b, f);
                for (h = 0, g = k.length; g > h; h++) {
                    if (i = k[h], "string" != typeof i) throw Re("itkn", "Incorrect injection token! Expected service name as string, got {0}", i);
                    j.push(e && e.hasOwnProperty(i) ? e[i] : d(i, f));
                }
                return je(a) && (a = a[g]), a.apply(c, j);
            }
            function f(a, b, c) {
                var d = Object.create((je(a) ? a[a.length - 1] : a).prototype || null), f = e(a, d, b, c);
                return t(f) || x(f) ? f : d;
            }
            return {
                invoke: e,
                instantiate: f,
                get: d,
                annotate: Rb,
                has: function(b) {
                    return z.hasOwnProperty(b + v) || a.hasOwnProperty(b);
                }
            };
        }
        b = b === !0;
        var s = {}, v = "Provider", w = [], y = new Pb([], !0), z = {
            $provide: {
                provider: d(e),
                factory: d(h),
                service: d(j),
                value: d(k),
                constant: d(l),
                decorator: m
            }
        }, A = z.$injector = p(z, function(a, b) {
            throw ge.isString(b) && w.push(b), Re("unpr", "Unknown provider: {0}", w.join(" <- "));
        }), B = {}, C = B.$injector = p(B, function(a, b) {
            var d = A.get(a + v, b);
            return C.invoke(d.$get, d, c, a);
        });
        return f(n(a), function(a) {
            C.invoke(a || o);
        }), C;
    }
    function Tb() {
        var a = !0;
        this.disableAutoScrolling = function() {
            a = !1;
        }, this.$get = [ "$window", "$location", "$rootScope", function(b, c, d) {
            function e(a) {
                var b = null;
                return Array.prototype.some.call(a, function(a) {
                    return "a" === I(a) ? (b = a, !0) : void 0;
                }), b;
            }
            function f() {
                var a = h.yOffset;
                if (x(a)) a = a(); else if (G(a)) {
                    var c = a[0], d = b.getComputedStyle(c);
                    a = "fixed" !== d.position ? 0 : c.getBoundingClientRect().bottom;
                } else v(a) || (a = 0);
                return a;
            }
            function g(a) {
                if (a) {
                    a.scrollIntoView();
                    var c = f();
                    if (c) {
                        var d = a.getBoundingClientRect().top;
                        b.scrollBy(0, d - c);
                    }
                } else b.scrollTo(0, 0);
            }
            function h() {
                var a, b = c.hash();
                b ? (a = i.getElementById(b)) ? g(a) : (a = e(i.getElementsByName(b))) ? g(a) : "top" === b && g(null) : g(null);
            }
            var i = b.document;
            return a && d.$watch(function() {
                return c.hash();
            }, function(a, b) {
                (a !== b || "" !== a) && Jb(function() {
                    d.$evalAsync(h);
                });
            }), h;
        } ];
    }
    function Ub() {
        this.$get = [ "$$rAF", "$timeout", function(a, b) {
            return a.supported ? function(b) {
                return a(b);
            } : function(a) {
                return b(a, 0, !1);
            };
        } ];
    }
    function Vb(a, b, d, e) {
        function g(a) {
            try {
                a.apply(null, O(arguments, 1));
            } finally {
                if (x--, 0 === x) for (;y.length; ) try {
                    y.pop()();
                } catch (b) {
                    d.error(b);
                }
            }
        }
        function h(a) {
            var b = a.indexOf("#");
            return -1 === b ? "" : a.substr(b + 1);
        }
        function i(a, b) {
            !function c() {
                f(A, function(a) {
                    a();
                }), z = b(c, a);
            }();
        }
        function j() {
            k(), l();
        }
        function k() {
            B = a.history.state, B = r(B) ? null : B, M(B, I) && (B = I), I = B;
        }
        function l() {
            (D !== n.url() || C !== B) && (D = n.url(), C = B, f(G, function(a) {
                a(n.url(), B);
            }));
        }
        function m(a) {
            try {
                return decodeURIComponent(a);
            } catch (b) {
                return a;
            }
        }
        var n = this, p = b[0], q = a.location, s = a.history, t = a.setTimeout, v = a.clearTimeout, w = {};
        n.isMock = !1;
        var x = 0, y = [];
        n.$$completeOutstandingRequest = g, n.$$incOutstandingRequestCount = function() {
            x++;
        }, n.notifyWhenNoOutstandingRequests = function(a) {
            f(A, function(a) {
                a();
            }), 0 === x ? a() : y.push(a);
        };
        var z, A = [];
        n.addPollFn = function(a) {
            return r(z) && i(100, t), A.push(a), a;
        };
        var B, C, D = q.href, E = b.find("base"), F = null;
        k(), C = B, n.url = function(b, c, d) {
            if (r(d) && (d = null), q !== a.location && (q = a.location), s !== a.history && (s = a.history), 
            b) {
                var f = C === d;
                if (D === b && (!e.history || f)) return n;
                var g = D && vc(D) === vc(b);
                return D = b, C = d, !e.history || g && f ? (g || (F = b), c ? q.replace(b) : g ? q.hash = h(b) : q.href = b) : (s[c ? "replaceState" : "pushState"](d, "", b), 
                k(), C = B), n;
            }
            return F || q.href.replace(/%27/g, "'");
        }, n.state = function() {
            return B;
        };
        var G = [], H = !1, I = null;
        n.onUrlChange = function(b) {
            return H || (e.history && $d(a).on("popstate", j), $d(a).on("hashchange", j), H = !0), 
            G.push(b), b;
        }, n.$$checkUrlChange = l, n.baseHref = function() {
            var a = E.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
        };
        var J = {}, K = "", L = n.baseHref();
        n.cookies = function(a, b) {
            var e, f, g, h, i;
            if (!a) {
                if (p.cookie !== K) for (K = p.cookie, f = K.split("; "), J = {}, h = 0; h < f.length; h++) g = f[h], 
                i = g.indexOf("="), i > 0 && (a = m(g.substring(0, i)), J[a] === c && (J[a] = m(g.substring(i + 1))));
                return J;
            }
            b === c ? p.cookie = encodeURIComponent(a) + "=;path=" + L + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : u(b) && (e = (p.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(b) + ";path=" + L).length + 1, 
            e > 4096 && d.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + e + " > 4096 bytes)!"));
        }, n.defer = function(a, b) {
            var c;
            return x++, c = t(function() {
                delete w[c], g(a);
            }, b || 0), w[c] = !0, c;
        }, n.defer.cancel = function(a) {
            return w[a] ? (delete w[a], v(a), g(o), !0) : !1;
        };
    }
    function Wb() {
        this.$get = [ "$window", "$log", "$sniffer", "$document", function(a, b, c, d) {
            return new Vb(a, d, b, c);
        } ];
    }
    function Xb() {
        this.$get = function() {
            function a(a, c) {
                function e(a) {
                    a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null);
                }
                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a));
                }
                if (a in b) throw d("$cacheFactory")("iid", "CacheId '{0}' is already taken!", a);
                var g = 0, h = l({}, c, {
                    id: a
                }), i = {}, j = c && c.capacity || Number.MAX_VALUE, k = {}, m = null, n = null;
                return b[a] = {
                    put: function(a, b) {
                        if (j < Number.MAX_VALUE) {
                            var c = k[a] || (k[a] = {
                                key: a
                            });
                            e(c);
                        }
                        if (!r(b)) return a in i || g++, i[a] = b, g > j && this.remove(n.key), b;
                    },
                    get: function(a) {
                        if (j < Number.MAX_VALUE) {
                            var b = k[a];
                            if (!b) return;
                            e(b);
                        }
                        return i[a];
                    },
                    remove: function(a) {
                        if (j < Number.MAX_VALUE) {
                            var b = k[a];
                            if (!b) return;
                            b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete k[a];
                        }
                        delete i[a], g--;
                    },
                    removeAll: function() {
                        i = {}, g = 0, k = {}, m = n = null;
                    },
                    destroy: function() {
                        i = null, h = null, k = null, delete b[a];
                    },
                    info: function() {
                        return l({}, h, {
                            size: g
                        });
                    }
                };
            }
            var b = {};
            return a.info = function() {
                var a = {};
                return f(b, function(b, c) {
                    a[c] = b.info();
                }), a;
            }, a.get = function(a) {
                return b[a];
            }, a;
        };
    }
    function Yb() {
        this.$get = [ "$cacheFactory", function(a) {
            return a("templates");
        } ];
    }
    function Zb(a, d) {
        function e(a, b) {
            var c = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/, d = {};
            return f(a, function(a, e) {
                var f = a.match(c);
                if (!f) throw Ue("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", b, e, a);
                d[e] = {
                    mode: f[1][0],
                    collection: "*" === f[2],
                    optional: "?" === f[3],
                    attrName: f[4] || e
                };
            }), d;
        }
        var g = {}, h = "Directive", j = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, k = /(([\w\-]+)(?:\:([^;]+))?;?)/, m = H("ngSrc,ngSrcset,src,srcset"), r = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, v = /^(on[a-z]+|formaction)$/;
        this.directive = function y(b, c) {
            return gb(b, "directive"), u(b) ? (eb(c, "directiveFactory"), g.hasOwnProperty(b) || (g[b] = [], 
            a.factory(b + h, [ "$injector", "$exceptionHandler", function(a, c) {
                var d = [];
                return f(g[b], function(f, g) {
                    try {
                        var h = a.invoke(f);
                        x(h) ? h = {
                            compile: q(h)
                        } : !h.compile && h.link && (h.compile = q(h.link)), h.priority = h.priority || 0, 
                        h.index = g, h.name = h.name || b, h.require = h.require || h.controller && h.name, 
                        h.restrict = h.restrict || "EA", t(h.scope) && (h.$$isolateBindings = e(h.scope, h.name)), 
                        d.push(h);
                    } catch (i) {
                        c(i);
                    }
                }), d;
            } ])), g[b].push(c)) : f(b, i(y)), this;
        }, this.aHrefSanitizationWhitelist = function(a) {
            return s(a) ? (d.aHrefSanitizationWhitelist(a), this) : d.aHrefSanitizationWhitelist();
        }, this.imgSrcSanitizationWhitelist = function(a) {
            return s(a) ? (d.imgSrcSanitizationWhitelist(a), this) : d.imgSrcSanitizationWhitelist();
        };
        var w = !0;
        this.debugInfoEnabled = function(a) {
            return s(a) ? (w = a, this) : w;
        }, this.$get = [ "$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(a, d, e, i, q, s, y, z, B, C, D) {
            function E(a, b) {
                try {
                    a.addClass(b);
                } catch (c) {}
            }
            function F(a, b, c, d, e) {
                a instanceof $d || (a = $d(a)), f(a, function(b, c) {
                    b.nodeType == re && b.nodeValue.match(/\S+/) && (a[c] = $d(b).wrap("<span></span>").parent()[0]);
                });
                var g = H(a, b, a, c, d, e);
                F.$$addScopeClass(a);
                var h = null;
                return function(b, c, d) {
                    eb(b, "scope"), d = d || {};
                    var e = d.parentBoundTranscludeFn, f = d.transcludeControllers, i = d.futureParentElement;
                    e && e.$$boundTransclude && (e = e.$$boundTransclude), h || (h = G(i));
                    var j;
                    if (j = "html" !== h ? $d($(h, $d("<div>").append(a).html())) : c ? Je.clone.call(a) : a, 
                    f) for (var k in f) j.data("$" + k + "Controller", f[k].instance);
                    return F.$$addScopeInfo(j, b), c && c(j, b), g && g(b, j, j, e), j;
                };
            }
            function G(a) {
                var b = a && a[0];
                return b && "foreignobject" !== I(b) && b.toString().match(/SVG/) ? "svg" : "html";
            }
            function H(a, b, d, e, f, g) {
                function h(a, d, e, f) {
                    var g, h, i, j, k, l, m, n, q;
                    if (o) {
                        var r = d.length;
                        for (q = new Array(r), k = 0; k < p.length; k += 3) m = p[k], q[m] = d[m];
                    } else q = d;
                    for (k = 0, l = p.length; l > k; ) i = q[p[k++]], g = p[k++], h = p[k++], g ? (g.scope ? (j = a.$new(), 
                    F.$$addScopeInfo($d(i), j)) : j = a, n = g.transcludeOnThisElement ? K(a, g.transclude, f, g.elementTranscludeOnThisElement) : !g.templateOnThisElement && f ? f : !f && b ? K(a, b) : null, 
                    g(h, j, i, e, n)) : h && h(a, i.childNodes, c, f);
                }
                for (var i, j, k, l, m, n, o, p = [], q = 0; q < a.length; q++) i = new gb(), j = L(a[q], [], i, 0 === q ? e : c, f), 
                k = j.length ? Q(j, a[q], i, b, d, null, [], [], g) : null, k && k.scope && F.$$addScopeClass(i.$$element), 
                m = k && k.terminal || !(l = a[q].childNodes) || !l.length ? null : H(l, k ? (k.transcludeOnThisElement || !k.templateOnThisElement) && k.transclude : b), 
                (k || m) && (p.push(q, k, m), n = !0, o = o || k), g = null;
                return n ? h : null;
            }
            function K(a, b, c) {
                var d = function(d, e, f, g, h) {
                    return d || (d = a.$new(!1, h), d.$$transcluded = !0), b(d, e, {
                        parentBoundTranscludeFn: c,
                        transcludeControllers: f,
                        futureParentElement: g
                    });
                };
                return d;
            }
            function L(a, b, c, d, e) {
                var f, g, h = a.nodeType, i = c.$attr;
                switch (h) {
                  case qe:
                    S(b, $b(I(a)), "E", d, e);
                    for (var l, m, n, o, p, q, r = a.attributes, s = 0, v = r && r.length; v > s; s++) {
                        var w = !1, x = !1;
                        l = r[s], m = l.name, p = ke(l.value), o = $b(m), (q = lb.test(o)) && (m = m.replace(Ve, "").substr(8).replace(/_(.)/g, function(a, b) {
                            return b.toUpperCase();
                        }));
                        var y = o.replace(/(Start|End)$/, "");
                        U(y) && o === y + "Start" && (w = m, x = m.substr(0, m.length - 5) + "end", m = m.substr(0, m.length - 6)), 
                        n = $b(m.toLowerCase()), i[n] = m, (q || !c.hasOwnProperty(n)) && (c[n] = p, Kb(a, n) && (c[n] = !0)), 
                        ab(a, b, p, n, q), S(b, n, "A", d, e, w, x);
                    }
                    if (g = a.className, t(g) && (g = g.animVal), u(g) && "" !== g) for (;f = k.exec(g); ) n = $b(f[2]), 
                    S(b, n, "C", d, e) && (c[n] = ke(f[3])), g = g.substr(f.index + f[0].length);
                    break;

                  case re:
                    Z(b, a.nodeValue);
                    break;

                  case se:
                    try {
                        f = j.exec(a.nodeValue), f && (n = $b(f[1]), S(b, n, "M", d, e) && (c[n] = ke(f[2])));
                    } catch (z) {}
                }
                return b.sort(X), b;
            }
            function N(a, b, c) {
                var d = [], e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a) throw Ue("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", b, c);
                        a.nodeType == qe && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), 
                        a = a.nextSibling;
                    } while (e > 0);
                } else d.push(a);
                return $d(d);
            }
            function P(a, b, c) {
                return function(d, e, f, g, h) {
                    return e = N(e[0], b, c), a(d, e, f, g, h);
                };
            }
            function Q(a, g, h, i, j, k, l, m, n) {
                function o(a, b, c, d) {
                    a && (c && (a = P(a, c, d)), a.require = z.require, a.directiveName = B, (I === z || z.$$isolateScope) && (a = db(a, {
                        isolateScope: !0
                    })), l.push(a)), b && (c && (b = P(b, c, d)), b.require = z.require, b.directiveName = B, 
                    (I === z || z.$$isolateScope) && (b = db(b, {
                        isolateScope: !0
                    })), m.push(b));
                }
                function p(a, b, c, d) {
                    var e, g, h = "data", i = !1, j = c;
                    if (u(b)) {
                        if (g = b.match(r), b = b.substring(g[0].length), g[3] && (g[1] ? g[3] = null : g[1] = g[3]), 
                        "^" === g[1] ? h = "inheritedData" : "^^" === g[1] && (h = "inheritedData", j = c.parent()), 
                        "?" === g[2] && (i = !0), e = null, d && "data" === h && (e = d[b]) && (e = e.instance), 
                        e = e || j[h]("$" + b + "Controller"), !e && !i) throw Ue("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", b, a);
                        return e || null;
                    }
                    return je(b) && (e = [], f(b, function(b) {
                        e.push(p(a, b, c, d));
                    })), e;
                }
                function v(a, b, e, i, j) {
                    function k(a, b, d) {
                        var e;
                        return A(a) || (d = b, b = a, a = c), U && (e = v), d || (d = U ? x.parent() : x), 
                        j(a, b, e, d, D);
                    }
                    var n, o, r, t, u, v, w, x, z;
                    if (g === e ? (z = h, x = h.$$element) : (x = $d(e), z = new gb(x, h)), I && (u = b.$new(!0)), 
                    j && (w = k, w.$$boundTransclude = j), H && (y = {}, v = {}, f(H, function(a) {
                        var c, d = {
                            $scope: a === I || a.$$isolateScope ? u : b,
                            $element: x,
                            $attrs: z,
                            $transclude: w
                        };
                        t = a.controller, "@" == t && (t = z[a.name]), c = s(t, d, !0, a.controllerAs), 
                        v[a.name] = c, U || x.data("$" + a.name + "Controller", c.instance), y[a.name] = c;
                    })), I) {
                        F.$$addScopeInfo(x, u, !0, !(J && (J === I || J === I.$$originalDirective))), F.$$addScopeClass(x, !0);
                        var B = y && y[I.name], C = u;
                        B && B.identifier && I.bindToController === !0 && (C = B.instance), f(u.$$isolateBindings = I.$$isolateBindings, function(a, c) {
                            var e, f, g, h, i = a.attrName, j = a.optional, k = a.mode;
                            switch (k) {
                              case "@":
                                z.$observe(i, function(a) {
                                    C[c] = a;
                                }), z.$$observers[i].$$scope = b, z[i] && (C[c] = d(z[i])(b));
                                break;

                              case "=":
                                if (j && !z[i]) return;
                                f = q(z[i]), h = f.literal ? M : function(a, b) {
                                    return a === b || a !== a && b !== b;
                                }, g = f.assign || function() {
                                    throw e = C[c] = f(b), Ue("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", z[i], I.name);
                                }, e = C[c] = f(b);
                                var l = function(a) {
                                    return h(a, C[c]) || (h(a, e) ? g(b, a = C[c]) : C[c] = a), e = a;
                                };
                                l.$stateful = !0;
                                var m;
                                m = a.collection ? b.$watchCollection(z[i], l) : b.$watch(q(z[i], l), null, f.literal), 
                                u.$on("$destroy", m);
                                break;

                              case "&":
                                f = q(z[i]), C[c] = function(a) {
                                    return f(b, a);
                                };
                            }
                        });
                    }
                    for (y && (f(y, function(a) {
                        a();
                    }), y = null), n = 0, o = l.length; o > n; n++) r = l[n], fb(r, r.isolateScope ? u : b, x, z, r.require && p(r.directiveName, r.require, x, v), w);
                    var D = b;
                    for (I && (I.template || null === I.templateUrl) && (D = u), a && a(D, e.childNodes, c, j), 
                    n = m.length - 1; n >= 0; n--) r = m[n], fb(r, r.isolateScope ? u : b, x, z, r.require && p(r.directiveName, r.require, x, v), w);
                }
                n = n || {};
                for (var w, y, z, B, C, D, E, G = -Number.MAX_VALUE, H = n.controllerDirectives, I = n.newIsolateScopeDirective, J = n.templateDirective, K = n.nonTlbTranscludeDirective, Q = !1, S = !1, U = n.hasElementTranscludeDirective, X = h.$$element = $d(g), Z = k, _ = i, ab = 0, cb = a.length; cb > ab; ab++) {
                    z = a[ab];
                    var eb = z.$$start, hb = z.$$end;
                    if (eb && (X = N(g, eb, hb)), C = c, G > z.priority) break;
                    if ((E = z.scope) && (z.templateUrl || (t(E) ? (Y("new/isolated scope", I || w, z, X), 
                    I = z) : Y("new/isolated scope", I, z, X)), w = w || z), B = z.name, !z.templateUrl && z.controller && (E = z.controller, 
                    H = H || {}, Y("'" + B + "' controller", H[B], z, X), H[B] = z), (E = z.transclude) && (Q = !0, 
                    z.$$tlb || (Y("transclusion", K, z, X), K = z), "element" == E ? (U = !0, G = z.priority, 
                    C = X, X = h.$$element = $d(b.createComment(" " + B + ": " + h[B] + " ")), g = X[0], 
                    bb(j, O(C), g), _ = F(C, i, G, Z && Z.name, {
                        nonTlbTranscludeDirective: K
                    })) : (C = $d(vb(g)).contents(), X.empty(), _ = F(C, i))), z.template) if (S = !0, 
                    Y("template", J, z, X), J = z, E = x(z.template) ? z.template(X, h) : z.template, 
                    E = kb(E), z.replace) {
                        if (Z = z, C = qb(E) ? [] : ac($(z.templateNamespace, ke(E))), g = C[0], 1 != C.length || g.nodeType !== qe) throw Ue("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", B, "");
                        bb(j, X, g);
                        var ib = {
                            $attr: {}
                        }, jb = L(g, [], ib), lb = a.splice(ab + 1, a.length - (ab + 1));
                        I && R(jb), a = a.concat(jb).concat(lb), V(h, ib), cb = a.length;
                    } else X.html(E);
                    if (z.templateUrl) S = !0, Y("template", J, z, X), J = z, z.replace && (Z = z), 
                    v = W(a.splice(ab, a.length - ab), X, h, j, Q && _, l, m, {
                        controllerDirectives: H,
                        newIsolateScopeDirective: I,
                        templateDirective: J,
                        nonTlbTranscludeDirective: K
                    }), cb = a.length; else if (z.compile) try {
                        D = z.compile(X, h, _), x(D) ? o(null, D, eb, hb) : D && o(D.pre, D.post, eb, hb);
                    } catch (mb) {
                        e(mb, T(X));
                    }
                    z.terminal && (v.terminal = !0, G = Math.max(G, z.priority));
                }
                return v.scope = w && w.scope === !0, v.transcludeOnThisElement = Q, v.elementTranscludeOnThisElement = U, 
                v.templateOnThisElement = S, v.transclude = _, n.hasElementTranscludeDirective = U, 
                v;
            }
            function R(a) {
                for (var b = 0, c = a.length; c > b; b++) a[b] = n(a[b], {
                    $$isolateScope: !0
                });
            }
            function S(b, d, f, i, j, k, l) {
                if (d === j) return null;
                var m = null;
                if (g.hasOwnProperty(d)) for (var o, p = a.get(d + h), q = 0, r = p.length; r > q; q++) try {
                    o = p[q], (i === c || i > o.priority) && -1 != o.restrict.indexOf(f) && (k && (o = n(o, {
                        $$start: k,
                        $$end: l
                    })), b.push(o), m = o);
                } catch (s) {
                    e(s);
                }
                return m;
            }
            function U(b) {
                if (g.hasOwnProperty(b)) for (var c, d = a.get(b + h), e = 0, f = d.length; f > e; e++) if (c = d[e], 
                c.multiElement) return !0;
                return !1;
            }
            function V(a, b) {
                var c = b.$attr, d = a.$attr, e = a.$$element;
                f(a, function(d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), 
                    a.$set(e, d, !0, c[e]));
                }), f(b, function(b, f) {
                    "class" == f ? (E(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), 
                    a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, 
                    d[f] = c[f]);
                });
            }
            function W(a, b, c, d, e, g, h, j) {
                var k, m, n = [], o = b[0], p = a.shift(), q = l({}, p, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: p
                }), r = x(p.templateUrl) ? p.templateUrl(b, c) : p.templateUrl, s = p.templateNamespace;
                return b.empty(), i(B.getTrustedResourceUrl(r)).then(function(i) {
                    var l, u, v, w;
                    if (i = kb(i), p.replace) {
                        if (v = qb(i) ? [] : ac($(s, ke(i))), l = v[0], 1 != v.length || l.nodeType !== qe) throw Ue("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", p.name, r);
                        u = {
                            $attr: {}
                        }, bb(d, b, l);
                        var x = L(l, [], u);
                        t(p.scope) && R(x), a = x.concat(a), V(c, u);
                    } else l = o, b.html(i);
                    for (a.unshift(q), k = Q(a, l, c, e, b, p, g, h, j), f(d, function(a, c) {
                        a == l && (d[c] = b[0]);
                    }), m = H(b[0].childNodes, e); n.length; ) {
                        var y = n.shift(), z = n.shift(), A = n.shift(), B = n.shift(), C = b[0];
                        if (!y.$$destroyed) {
                            if (z !== o) {
                                var D = z.className;
                                j.hasElementTranscludeDirective && p.replace || (C = vb(l)), bb(A, $d(z), C), E($d(C), D);
                            }
                            w = k.transcludeOnThisElement ? K(y, k.transclude, B) : B, k(m, y, C, d, w);
                        }
                    }
                    n = null;
                }), function(a, b, c, d, e) {
                    var f = e;
                    b.$$destroyed || (n ? n.push(b, c, d, f) : (k.transcludeOnThisElement && (f = K(b, k.transclude, e)), 
                    k(m, b, c, d, f)));
                };
            }
            function X(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
            }
            function Y(a, b, c, d) {
                if (b) throw Ue("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", b.name, c.name, a, T(d));
            }
            function Z(a, b) {
                var c = d(b, !0);
                c && a.push({
                    priority: 0,
                    compile: function(a) {
                        var b = a.parent(), d = !!b.length;
                        return d && F.$$addBindingClass(b), function(a, b) {
                            var e = b.parent();
                            d || F.$$addBindingClass(e), F.$$addBindingInfo(e, c.expressions), a.$watch(c, function(a) {
                                b[0].nodeValue = a;
                            });
                        };
                    }
                });
            }
            function $(a, c) {
                switch (a = Ud(a || "html")) {
                  case "svg":
                  case "math":
                    var d = b.createElement("div");
                    return d.innerHTML = "<" + a + ">" + c + "</" + a + ">", d.childNodes[0].childNodes;

                  default:
                    return c;
                }
            }
            function _(a, b) {
                if ("srcdoc" == b) return B.HTML;
                var c = I(a);
                return "xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b) ? B.RESOURCE_URL : void 0;
            }
            function ab(a, b, c, e, f) {
                var g = _(a, e);
                f = m[e] || f;
                var h = d(c, !0, g, f);
                if (h) {
                    if ("multiple" === e && "select" === I(a)) throw Ue("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", T(a));
                    b.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(a, b, i) {
                                    var j = i.$$observers || (i.$$observers = {});
                                    if (v.test(e)) throw Ue("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                    var k = i[e];
                                    k !== c && (h = k && d(k, !0, g, f), c = k), h && (i[e] = h(a), (j[e] || (j[e] = [])).$$inter = !0, 
                                    (i.$$observers && i.$$observers[e].$$scope || a).$watch(h, function(a, b) {
                                        "class" === e && a != b ? i.$updateClass(a, b) : i.$set(e, a);
                                    }));
                                }
                            };
                        }
                    });
                }
            }
            function bb(a, c, d) {
                var e, f, g = c[0], h = c.length, i = g.parentNode;
                if (a) for (e = 0, f = a.length; f > e; e++) if (a[e] == g) {
                    a[e++] = d;
                    for (var j = e, k = j + h - 1, l = a.length; l > j; j++, k++) l > k ? a[j] = a[k] : delete a[j];
                    a.length -= h - 1, a.context === g && (a.context = d);
                    break;
                }
                i && i.replaceChild(d, g);
                var m = b.createDocumentFragment();
                m.appendChild(g), $d(d).data($d(g).data()), _d ? (ie = !0, _d.cleanData([ g ])) : delete $d.cache[g[$d.expando]];
                for (var n = 1, o = c.length; o > n; n++) {
                    var p = c[n];
                    $d(p).remove(), m.appendChild(p), delete c[n];
                }
                c[0] = d, c.length = 1;
            }
            function db(a, b) {
                return l(function() {
                    return a.apply(null, arguments);
                }, a, b);
            }
            function fb(a, b, c, d, f, g) {
                try {
                    a(b, c, d, f, g);
                } catch (h) {
                    e(h, T(c));
                }
            }
            var gb = function(a, b) {
                if (b) {
                    var c, d, e, f = Object.keys(b);
                    for (c = 0, d = f.length; d > c; c++) e = f[c], this[e] = b[e];
                } else this.$attr = {};
                this.$$element = a;
            };
            gb.prototype = {
                $normalize: $b,
                $addClass: function(a) {
                    a && a.length > 0 && C.addClass(this.$$element, a);
                },
                $removeClass: function(a) {
                    a && a.length > 0 && C.removeClass(this.$$element, a);
                },
                $updateClass: function(a, b) {
                    var c = _b(a, b);
                    c && c.length && C.addClass(this.$$element, c);
                    var d = _b(b, a);
                    d && d.length && C.removeClass(this.$$element, d);
                },
                $set: function(a, b, d, g) {
                    var h, i = this.$$element[0], j = Kb(i, a), k = Lb(i, a), l = a;
                    if (j ? (this.$$element.prop(a, b), g = j) : k && (this[k] = b, l = k), this[a] = b, 
                    g ? this.$attr[a] = g : (g = this.$attr[a], g || (this.$attr[a] = g = cb(a, "-"))), 
                    h = I(this.$$element), "a" === h && "href" === a || "img" === h && "src" === a) this[a] = b = D(b, "src" === a); else if ("img" === h && "srcset" === a) {
                        for (var m = "", n = ke(b), o = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, p = /\s/.test(n) ? o : /(,)/, q = n.split(p), r = Math.floor(q.length / 2), s = 0; r > s; s++) {
                            var t = 2 * s;
                            m += D(ke(q[t]), !0), m += " " + ke(q[t + 1]);
                        }
                        var u = ke(q[2 * s]).split(/\s/);
                        m += D(ke(u[0]), !0), 2 === u.length && (m += " " + ke(u[1])), this[a] = b = m;
                    }
                    d !== !1 && (null === b || b === c ? this.$$element.removeAttr(g) : this.$$element.attr(g, b));
                    var v = this.$$observers;
                    v && f(v[l], function(a) {
                        try {
                            a(b);
                        } catch (c) {
                            e(c);
                        }
                    });
                },
                $observe: function(a, b) {
                    var c = this, d = c.$$observers || (c.$$observers = jb()), e = d[a] || (d[a] = []);
                    return e.push(b), y.$evalAsync(function() {
                        !e.$$inter && c.hasOwnProperty(a) && b(c[a]);
                    }), function() {
                        J(e, b);
                    };
                }
            };
            var hb = d.startSymbol(), ib = d.endSymbol(), kb = "{{" == hb || "}}" == ib ? p : function(a) {
                return a.replace(/\{\{/g, hb).replace(/}}/g, ib);
            }, lb = /^ngAttr[A-Z]/;
            return F.$$addBindingInfo = w ? function(a, b) {
                var c = a.data("$binding") || [];
                je(b) ? c = c.concat(b) : c.push(b), a.data("$binding", c);
            } : o, F.$$addBindingClass = w ? function(a) {
                E(a, "ng-binding");
            } : o, F.$$addScopeInfo = w ? function(a, b, c, d) {
                var e = c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                a.data(e, b);
            } : o, F.$$addScopeClass = w ? function(a, b) {
                E(a, b ? "ng-isolate-scope" : "ng-scope");
            } : o, F;
        } ];
    }
    function $b(a) {
        return pb(a.replace(Ve, ""));
    }
    function _b(a, b) {
        var c = "", d = a.split(/\s+/), e = b.split(/\s+/);
        a: for (var f = 0; f < d.length; f++) {
            for (var g = d[f], h = 0; h < e.length; h++) if (g == e[h]) continue a;
            c += (c.length > 0 ? " " : "") + g;
        }
        return c;
    }
    function ac(a) {
        a = $d(a);
        var b = a.length;
        if (1 >= b) return a;
        for (;b--; ) {
            var c = a[b];
            c.nodeType === se && ce.call(a, b, 1);
        }
        return a;
    }
    function bc() {
        var a = {}, b = !1, e = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(b, c) {
            gb(b, "controller"), t(b) ? l(a, b) : a[b] = c;
        }, this.allowGlobals = function() {
            b = !0;
        }, this.$get = [ "$injector", "$window", function(f, g) {
            function h(a, b, c, e) {
                if (!a || !t(a.$scope)) throw d("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", e, b);
                a.$scope[b] = c;
            }
            return function(d, i, j, k) {
                var m, n, o, p;
                if (j = j === !0, k && u(k) && (p = k), u(d) && (n = d.match(e), o = n[1], p = p || n[3], 
                d = a.hasOwnProperty(o) ? a[o] : hb(i.$scope, o, !0) || (b ? hb(g, o, !0) : c), 
                fb(d, o, !0)), j) {
                    var q = (je(d) ? d[d.length - 1] : d).prototype;
                    return m = Object.create(q || null), p && h(i, p, m, o || d.name), l(function() {
                        return f.invoke(d, m, i, o), m;
                    }, {
                        instance: m,
                        identifier: p
                    });
                }
                return m = f.instantiate(d, i, o), p && h(i, p, m, o || d.name), m;
            };
        } ];
    }
    function cc() {
        this.$get = [ "$window", function(a) {
            return $d(a.document);
        } ];
    }
    function dc() {
        this.$get = [ "$log", function(a) {
            return function() {
                a.error.apply(a, arguments);
            };
        } ];
    }
    function ec(a, b) {
        if (u(a)) {
            var c = a.replace($e, "").trim();
            if (c) {
                var d = b("Content-Type");
                (d && 0 === d.indexOf(We) || fc(c)) && (a = S(c));
            }
        }
        return a;
    }
    function fc(a) {
        var b = a.match(Ye);
        return b && Ze[b[0]].test(a);
    }
    function gc(a) {
        var b, c, d, e = jb();
        return a ? (f(a.split("\n"), function(a) {
            d = a.indexOf(":"), b = Ud(ke(a.substr(0, d))), c = ke(a.substr(d + 1)), b && (e[b] = e[b] ? e[b] + ", " + c : c);
        }), e) : e;
    }
    function hc(a) {
        var b = t(a) ? a : c;
        return function(c) {
            if (b || (b = gc(a)), c) {
                var d = b[Ud(c)];
                return void 0 === d && (d = null), d;
            }
            return b;
        };
    }
    function ic(a, b, c, d) {
        return x(d) ? d(a, b, c) : (f(d, function(d) {
            a = d(a, b, c);
        }), a);
    }
    function jc(a) {
        return a >= 200 && 300 > a;
    }
    function kc() {
        var a = this.defaults = {
            transformResponse: [ ec ],
            transformRequest: [ function(a) {
                return !t(a) || B(a) || D(a) || C(a) ? a : R(a);
            } ],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                post: L(Xe),
                put: L(Xe),
                patch: L(Xe)
            },
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN"
        }, b = !1;
        this.useApplyAsync = function(a) {
            return s(a) ? (b = !!a, this) : b;
        };
        var e = this.interceptors = [];
        this.$get = [ "$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(g, i, j, k, m, n) {
            function o(b) {
                function e(a) {
                    var b = l({}, a);
                    return b.data = a.data ? ic(a.data, a.headers, a.status, i.transformResponse) : a.data, 
                    jc(a.status) ? b : m.reject(b);
                }
                function g(a) {
                    var b, c = {};
                    return f(a, function(a, d) {
                        x(a) ? (b = a(), null != b && (c[d] = b)) : c[d] = a;
                    }), c;
                }
                function h(b) {
                    var c, d, e, f = a.headers, h = l({}, b.headers);
                    f = l({}, f.common, f[Ud(b.method)]);
                    a: for (c in f) {
                        d = Ud(c);
                        for (e in h) if (Ud(e) === d) continue a;
                        h[c] = f[c];
                    }
                    return g(h);
                }
                if (!ge.isObject(b)) throw d("$http")("badreq", "Http request configuration must be an object.  Received: {0}", b);
                var i = l({
                    method: "get",
                    transformRequest: a.transformRequest,
                    transformResponse: a.transformResponse
                }, b);
                i.headers = h(b), i.method = Wd(i.method);
                var j = function(b) {
                    var d = b.headers, g = ic(b.data, hc(d), c, b.transformRequest);
                    return r(g) && f(d, function(a, b) {
                        "content-type" === Ud(b) && delete d[b];
                    }), r(b.withCredentials) && !r(a.withCredentials) && (b.withCredentials = a.withCredentials), 
                    v(b, g).then(e, e);
                }, k = [ j, c ], n = m.when(i);
                for (f(A, function(a) {
                    (a.request || a.requestError) && k.unshift(a.request, a.requestError), (a.response || a.responseError) && k.push(a.response, a.responseError);
                }); k.length; ) {
                    var o = k.shift(), p = k.shift();
                    n = n.then(o, p);
                }
                return n.success = function(a) {
                    return n.then(function(b) {
                        a(b.data, b.status, b.headers, i);
                    }), n;
                }, n.error = function(a) {
                    return n.then(null, function(b) {
                        a(b.data, b.status, b.headers, i);
                    }), n;
                }, n;
            }
            function p() {
                f(arguments, function(a) {
                    o[a] = function(b, c) {
                        return o(l(c || {}, {
                            method: a,
                            url: b
                        }));
                    };
                });
            }
            function q() {
                f(arguments, function(a) {
                    o[a] = function(b, c, d) {
                        return o(l(d || {}, {
                            method: a,
                            url: b,
                            data: c
                        }));
                    };
                });
            }
            function v(d, e) {
                function f(a, c, d, e) {
                    function f() {
                        h(c, a, d, e);
                    }
                    n && (jc(a) ? n.put(w, [ a, c, gc(d), e ]) : n.remove(w)), b ? k.$applyAsync(f) : (f(), 
                    k.$$phase || k.$apply());
                }
                function h(a, b, c, e) {
                    b = Math.max(b, 0), (jc(b) ? q.resolve : q.reject)({
                        data: a,
                        status: b,
                        headers: hc(c),
                        config: d,
                        statusText: e
                    });
                }
                function j(a) {
                    h(a.data, a.status, L(a.headers()), a.statusText);
                }
                function l() {
                    var a = o.pendingRequests.indexOf(d);
                    -1 !== a && o.pendingRequests.splice(a, 1);
                }
                var n, p, q = m.defer(), u = q.promise, v = d.headers, w = y(d.url, d.params);
                if (o.pendingRequests.push(d), u.then(l, l), !d.cache && !a.cache || d.cache === !1 || "GET" !== d.method && "JSONP" !== d.method || (n = t(d.cache) ? d.cache : t(a.cache) ? a.cache : z), 
                n && (p = n.get(w), s(p) ? F(p) ? p.then(j, j) : je(p) ? h(p[1], p[0], L(p[2]), p[3]) : h(p, 200, {}, "OK") : n.put(w, u)), 
                r(p)) {
                    var x = ed(d.url) ? i.cookies()[d.xsrfCookieName || a.xsrfCookieName] : c;
                    x && (v[d.xsrfHeaderName || a.xsrfHeaderName] = x), g(d.method, w, e, f, v, d.timeout, d.withCredentials, d.responseType);
                }
                return u;
            }
            function y(a, b) {
                if (!b) return a;
                var c = [];
                return h(b, function(a, b) {
                    null === a || r(a) || (je(a) || (a = [ a ]), f(a, function(a) {
                        t(a) && (a = w(a) ? a.toISOString() : R(a)), c.push(Y(b) + "=" + Y(a));
                    }));
                }), c.length > 0 && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&")), a;
            }
            var z = j("$http"), A = [];
            return f(e, function(a) {
                A.unshift(u(a) ? n.get(a) : n.invoke(a));
            }), o.pendingRequests = [], p("get", "delete", "head", "jsonp"), q("post", "put", "patch"), 
            o.defaults = a, o;
        } ];
    }
    function lc() {
        return new a.XMLHttpRequest();
    }
    function mc() {
        this.$get = [ "$browser", "$window", "$document", function(a, b, c) {
            return nc(a, lc, a.defer, b.angular.callbacks, c[0]);
        } ];
    }
    function nc(a, b, d, e, g) {
        function h(a, b, c) {
            var d = g.createElement("script"), f = null;
            return d.type = "text/javascript", d.src = a, d.async = !0, f = function(a) {
                ze(d, "load", f), ze(d, "error", f), g.body.removeChild(d), d = null;
                var h = -1, i = "unknown";
                a && ("load" !== a.type || e[b].called || (a = {
                    type: "error"
                }), i = a.type, h = "error" === a.type ? 404 : 200), c && c(h, i);
            }, ye(d, "load", f), ye(d, "error", f), g.body.appendChild(d), f;
        }
        return function(g, i, j, k, l, m, n, p) {
            function q() {
                u && u(), v && v.abort();
            }
            function r(b, e, f, g, h) {
                y !== c && d.cancel(y), u = v = null, b(e, f, g, h), a.$$completeOutstandingRequest(o);
            }
            if (a.$$incOutstandingRequestCount(), i = i || a.url(), "jsonp" == Ud(g)) {
                var t = "_" + (e.counter++).toString(36);
                e[t] = function(a) {
                    e[t].data = a, e[t].called = !0;
                };
                var u = h(i.replace("JSON_CALLBACK", "angular.callbacks." + t), t, function(a, b) {
                    r(k, a, e[t].data, "", b), e[t] = o;
                });
            } else {
                var v = b();
                v.open(g, i, !0), f(l, function(a, b) {
                    s(a) && v.setRequestHeader(b, a);
                }), v.onload = function() {
                    var a = v.statusText || "", b = "response" in v ? v.response : v.responseText, c = 1223 === v.status ? 204 : v.status;
                    0 === c && (c = b ? 200 : "file" == dd(i).protocol ? 404 : 0), r(k, c, b, v.getAllResponseHeaders(), a);
                };
                var w = function() {
                    r(k, -1, null, null, "");
                };
                if (v.onerror = w, v.onabort = w, n && (v.withCredentials = !0), p) try {
                    v.responseType = p;
                } catch (x) {
                    if ("json" !== p) throw x;
                }
                v.send(j || null);
            }
            if (m > 0) var y = d(q, m); else F(m) && m.then(q);
        };
    }
    function oc() {
        var a = "{{", b = "}}";
        this.startSymbol = function(b) {
            return b ? (a = b, this) : a;
        }, this.endSymbol = function(a) {
            return a ? (b = a, this) : b;
        }, this.$get = [ "$parse", "$exceptionHandler", "$sce", function(c, d, e) {
            function f(a) {
                return "\\\\\\" + a;
            }
            function g(f, g, m, n) {
                function o(c) {
                    return c.replace(j, a).replace(k, b);
                }
                function p(a) {
                    try {
                        return a = D(a), n && !s(a) ? a : E(a);
                    } catch (b) {
                        var c = _e("interr", "Can't interpolate: {0}\n{1}", f, b.toString());
                        d(c);
                    }
                }
                n = !!n;
                for (var q, t, u, v = 0, w = [], y = [], z = f.length, A = [], B = []; z > v; ) {
                    if (-1 == (q = f.indexOf(a, v)) || -1 == (t = f.indexOf(b, q + h))) {
                        v !== z && A.push(o(f.substring(v)));
                        break;
                    }
                    v !== q && A.push(o(f.substring(v, q))), u = f.substring(q + h, t), w.push(u), y.push(c(u, p)), 
                    v = t + i, B.push(A.length), A.push("");
                }
                if (m && A.length > 1) throw _e("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", f);
                if (!g || w.length) {
                    var C = function(a) {
                        for (var b = 0, c = w.length; c > b; b++) {
                            if (n && r(a[b])) return;
                            A[B[b]] = a[b];
                        }
                        return A.join("");
                    }, D = function(a) {
                        return m ? e.getTrusted(m, a) : e.valueOf(a);
                    }, E = function(a) {
                        if (null == a) return "";
                        switch (typeof a) {
                          case "string":
                            break;

                          case "number":
                            a = "" + a;
                            break;

                          default:
                            a = R(a);
                        }
                        return a;
                    };
                    return l(function(a) {
                        var b = 0, c = w.length, e = new Array(c);
                        try {
                            for (;c > b; b++) e[b] = y[b](a);
                            return C(e);
                        } catch (g) {
                            var h = _e("interr", "Can't interpolate: {0}\n{1}", f, g.toString());
                            d(h);
                        }
                    }, {
                        exp: f,
                        expressions: w,
                        $$watchDelegate: function(a, b, c) {
                            var d;
                            return a.$watchGroup(y, function(c, e) {
                                var f = C(c);
                                x(b) && b.call(this, f, c !== e ? d : f, a), d = f;
                            }, c);
                        }
                    });
                }
            }
            var h = a.length, i = b.length, j = new RegExp(a.replace(/./g, f), "g"), k = new RegExp(b.replace(/./g, f), "g");
            return g.startSymbol = function() {
                return a;
            }, g.endSymbol = function() {
                return b;
            }, g;
        } ];
    }
    function pc() {
        this.$get = [ "$rootScope", "$window", "$q", "$$q", function(a, b, c, d) {
            function e(e, g, h, i) {
                var j = b.setInterval, k = b.clearInterval, l = 0, m = s(i) && !i, n = (m ? d : c).defer(), o = n.promise;
                return h = s(h) ? h : 0, o.then(null, null, e), o.$$intervalId = j(function() {
                    n.notify(l++), h > 0 && l >= h && (n.resolve(l), k(o.$$intervalId), delete f[o.$$intervalId]), 
                    m || a.$apply();
                }, g), f[o.$$intervalId] = n, o;
            }
            var f = {};
            return e.cancel = function(a) {
                return a && a.$$intervalId in f ? (f[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), 
                delete f[a.$$intervalId], !0) : !1;
            }, e;
        } ];
    }
    function qc() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [ {
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    } ],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                    SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                    DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                    SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                    AMPMS: [ "AM", "PM" ],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function(a) {
                    return 1 === a ? "one" : "other";
                }
            };
        };
    }
    function rc(a) {
        for (var b = a.split("/"), c = b.length; c--; ) b[c] = X(b[c]);
        return b.join("/");
    }
    function sc(a, b) {
        var c = dd(a);
        b.$$protocol = c.protocol, b.$$host = c.hostname, b.$$port = m(c.port) || bf[c.protocol] || null;
    }
    function tc(a, b) {
        var c = "/" !== a.charAt(0);
        c && (a = "/" + a);
        var d = dd(a);
        b.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname), 
        b.$$search = V(d.search), b.$$hash = decodeURIComponent(d.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path);
    }
    function uc(a, b) {
        return 0 === b.indexOf(a) ? b.substr(a.length) : void 0;
    }
    function vc(a) {
        var b = a.indexOf("#");
        return -1 == b ? a : a.substr(0, b);
    }
    function wc(a) {
        return a.replace(/(#.+)|#$/, "$1");
    }
    function xc(a) {
        return a.substr(0, vc(a).lastIndexOf("/") + 1);
    }
    function yc(a) {
        return a.substring(0, a.indexOf("/", a.indexOf("//") + 2));
    }
    function zc(a, b) {
        this.$$html5 = !0, b = b || "";
        var d = xc(a);
        sc(a, this), this.$$parse = function(a) {
            var b = uc(d, a);
            if (!u(b)) throw cf("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', a, d);
            tc(b, this), this.$$path || (this.$$path = "/"), this.$$compose();
        }, this.$$compose = function() {
            var a = W(this.$$search), b = this.$$hash ? "#" + X(this.$$hash) : "";
            this.$$url = rc(this.$$path) + (a ? "?" + a : "") + b, this.$$absUrl = d + this.$$url.substr(1);
        }, this.$$parseLinkUrl = function(e, f) {
            if (f && "#" === f[0]) return this.hash(f.slice(1)), !0;
            var g, h, i;
            return (g = uc(a, e)) !== c ? (h = g, i = (g = uc(b, g)) !== c ? d + (uc("/", g) || g) : a + h) : (g = uc(d, e)) !== c ? i = d + g : d == e + "/" && (i = d), 
            i && this.$$parse(i), !!i;
        };
    }
    function Ac(a, b) {
        var c = xc(a);
        sc(a, this), this.$$parse = function(d) {
            function e(a, b, c) {
                var d, e = /^\/[A-Z]:(\/.*)/;
                return 0 === b.indexOf(c) && (b = b.replace(c, "")), e.exec(b) ? a : (d = e.exec(a), 
                d ? d[1] : a);
            }
            var f, g = uc(a, d) || uc(c, d);
            "#" === g.charAt(0) ? (f = uc(b, g), r(f) && (f = g)) : f = this.$$html5 ? g : "", 
            tc(f, this), this.$$path = e(this.$$path, f, a), this.$$compose();
        }, this.$$compose = function() {
            var c = W(this.$$search), d = this.$$hash ? "#" + X(this.$$hash) : "";
            this.$$url = rc(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + (this.$$url ? b + this.$$url : "");
        }, this.$$parseLinkUrl = function(b) {
            return vc(a) == vc(b) ? (this.$$parse(b), !0) : !1;
        };
    }
    function Bc(a, b) {
        this.$$html5 = !0, Ac.apply(this, arguments);
        var c = xc(a);
        this.$$parseLinkUrl = function(d, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g;
            return a == vc(d) ? f = d : (g = uc(c, d)) ? f = a + b + g : c === d + "/" && (f = c), 
            f && this.$$parse(f), !!f;
        }, this.$$compose = function() {
            var c = W(this.$$search), d = this.$$hash ? "#" + X(this.$$hash) : "";
            this.$$url = rc(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + b + this.$$url;
        };
    }
    function Cc(a) {
        return function() {
            return this[a];
        };
    }
    function Dc(a, b) {
        return function(c) {
            return r(c) ? this[a] : (this[a] = b(c), this.$$compose(), this);
        };
    }
    function Ec() {
        var a = "", b = {
            enabled: !1,
            requireBase: !0,
            rewriteLinks: !0
        };
        this.hashPrefix = function(b) {
            return s(b) ? (a = b, this) : a;
        }, this.html5Mode = function(a) {
            return E(a) ? (b.enabled = a, this) : t(a) ? (E(a.enabled) && (b.enabled = a.enabled), 
            E(a.requireBase) && (b.requireBase = a.requireBase), E(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), 
            this) : b;
        }, this.$get = [ "$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(c, d, e, f, g) {
            function h(a, b, c) {
                var e = j.url(), f = j.$$state;
                try {
                    d.url(a, b, c), j.$$state = d.state();
                } catch (g) {
                    throw j.url(e), j.$$state = f, g;
                }
            }
            function i(a, b) {
                c.$broadcast("$locationChangeSuccess", j.absUrl(), a, j.$$state, b);
            }
            var j, k, l, m = d.baseHref(), n = d.url();
            if (b.enabled) {
                if (!m && b.requireBase) throw cf("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                l = yc(n) + (m || "/"), k = e.history ? zc : Bc;
            } else l = vc(n), k = Ac;
            j = new k(l, "#" + a), j.$$parseLinkUrl(n, n), j.$$state = d.state();
            var o = /^\s*(javascript|mailto):/i;
            f.on("click", function(a) {
                if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
                    for (var e = $d(a.target); "a" !== I(e[0]); ) if (e[0] === f[0] || !(e = e.parent())[0]) return;
                    var h = e.prop("href"), i = e.attr("href") || e.attr("xlink:href");
                    t(h) && "[object SVGAnimatedString]" === h.toString() && (h = dd(h.animVal).href), 
                    o.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || j.$$parseLinkUrl(h, i) && (a.preventDefault(), 
                    j.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0));
                }
            }), j.absUrl() != n && d.url(j.absUrl(), !0);
            var p = !0;
            return d.onUrlChange(function(a, b) {
                c.$evalAsync(function() {
                    var d, e = j.absUrl(), f = j.$$state;
                    j.$$parse(a), j.$$state = b, d = c.$broadcast("$locationChangeStart", a, e, b, f).defaultPrevented, 
                    j.absUrl() === a && (d ? (j.$$parse(e), j.$$state = f, h(e, !1, f)) : (p = !1, i(e, f)));
                }), c.$$phase || c.$digest();
            }), c.$watch(function() {
                var a = wc(d.url()), b = wc(j.absUrl()), f = d.state(), g = j.$$replace, k = a !== b || j.$$html5 && e.history && f !== j.$$state;
                (p || k) && (p = !1, c.$evalAsync(function() {
                    var b = j.absUrl(), d = c.$broadcast("$locationChangeStart", b, a, j.$$state, f).defaultPrevented;
                    j.absUrl() === b && (d ? (j.$$parse(a), j.$$state = f) : (k && h(b, g, f === j.$$state ? null : j.$$state), 
                    i(a, f)));
                })), j.$$replace = !1;
            }), j;
        } ];
    }
    function Fc() {
        var a = !0, b = this;
        this.debugEnabled = function(b) {
            return s(b) ? (a = b, this) : a;
        }, this.$get = [ "$window", function(c) {
            function d(a) {
                return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), 
                a;
            }
            function e(a) {
                var b = c.console || {}, e = b[a] || b.log || o, g = !1;
                try {
                    g = !!e.apply;
                } catch (h) {}
                return g ? function() {
                    var a = [];
                    return f(arguments, function(b) {
                        a.push(d(b));
                    }), e.apply(b, a);
                } : function(a, b) {
                    e(a, null == b ? "" : b);
                };
            }
            return {
                log: e("log"),
                info: e("info"),
                warn: e("warn"),
                error: e("error"),
                debug: function() {
                    var c = e("debug");
                    return function() {
                        a && c.apply(b, arguments);
                    };
                }()
            };
        } ];
    }
    function Gc(a, b) {
        if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a) throw ef("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", b);
        return a;
    }
    function Hc(a, b) {
        if (a) {
            if (a.constructor === a) throw ef("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
            if (a.window === a) throw ef("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", b);
            if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw ef("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", b);
            if (a === Object) throw ef("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", b);
        }
        return a;
    }
    function Ic(a, b) {
        if (a) {
            if (a.constructor === a) throw ef("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
            if (a === ff || a === gf || a === hf) throw ef("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", b);
        }
    }
    function Jc(a) {
        return a.constant;
    }
    function Kc(a, b, c, d, e) {
        Hc(a, e), Hc(b, e);
        for (var f, g = c.split("."), h = 0; g.length > 1; h++) {
            f = Gc(g.shift(), e);
            var i = 0 === h && b && b[f] || a[f];
            i || (i = {}, a[f] = i), a = Hc(i, e);
        }
        return f = Gc(g.shift(), e), Hc(a[f], e), a[f] = d, d;
    }
    function Lc(a) {
        return "constructor" == a;
    }
    function Mc(a, b, d, e, f, g, h) {
        Gc(a, g), Gc(b, g), Gc(d, g), Gc(e, g), Gc(f, g);
        var i = function(a) {
            return Hc(a, g);
        }, j = h || Lc(a) ? i : p, k = h || Lc(b) ? i : p, l = h || Lc(d) ? i : p, m = h || Lc(e) ? i : p, n = h || Lc(f) ? i : p;
        return function(g, h) {
            var i = h && h.hasOwnProperty(a) ? h : g;
            return null == i ? i : (i = j(i[a]), b ? null == i ? c : (i = k(i[b]), d ? null == i ? c : (i = l(i[d]), 
            e ? null == i ? c : (i = m(i[e]), f ? null == i ? c : i = n(i[f]) : i) : i) : i) : i);
        };
    }
    function Nc(a, b) {
        return function(c, d) {
            return a(c, d, Hc, b);
        };
    }
    function Oc(a, b, d) {
        var e = b.expensiveChecks, g = e ? pf : of, h = g[a];
        if (h) return h;
        var i = a.split("."), j = i.length;
        if (b.csp) h = 6 > j ? Mc(i[0], i[1], i[2], i[3], i[4], d, e) : function(a, b) {
            var f, g = 0;
            do f = Mc(i[g++], i[g++], i[g++], i[g++], i[g++], d, e)(a, b), b = c, a = f; while (j > g);
            return f;
        }; else {
            var k = "";
            e && (k += "s = eso(s, fe);\nl = eso(l, fe);\n");
            var l = e;
            f(i, function(a, b) {
                Gc(a, d);
                var c = (b ? "s" : '((l&&l.hasOwnProperty("' + a + '"))?l:s)') + "." + a;
                (e || Lc(a)) && (c = "eso(" + c + ", fe)", l = !0), k += "if(s == null) return undefined;\ns=" + c + ";\n";
            }), k += "return s;";
            var m = new Function("s", "l", "eso", "fe", k);
            m.toString = q(k), l && (m = Nc(m, d)), h = m;
        }
        return h.sharedGetter = !0, h.assign = function(b, c, d) {
            return Kc(b, d, a, c, a);
        }, g[a] = h, h;
    }
    function Pc(a) {
        return x(a.valueOf) ? a.valueOf() : qf.call(a);
    }
    function Qc() {
        var a = jb(), b = jb();
        this.$get = [ "$filter", "$sniffer", function(c, d) {
            function e(a) {
                var b = a;
                return a.sharedGetter && (b = function(b, c) {
                    return a(b, c);
                }, b.literal = a.literal, b.constant = a.constant, b.assign = a.assign), b;
            }
            function g(a, b) {
                for (var c = 0, d = a.length; d > c; c++) {
                    var e = a[c];
                    e.constant || (e.inputs ? g(e.inputs, b) : -1 === b.indexOf(e) && b.push(e));
                }
                return b;
            }
            function h(a, b) {
                return null == a || null == b ? a === b : "object" == typeof a && (a = Pc(a), "object" == typeof a) ? !1 : a === b || a !== a && b !== b;
            }
            function i(a, b, c, d) {
                var e, f = d.$$inputs || (d.$$inputs = g(d.inputs, []));
                if (1 === f.length) {
                    var i = h;
                    return f = f[0], a.$watch(function(a) {
                        var b = f(a);
                        return h(b, i) || (e = d(a), i = b && Pc(b)), e;
                    }, b, c);
                }
                for (var j = [], k = 0, l = f.length; l > k; k++) j[k] = h;
                return a.$watch(function(a) {
                    for (var b = !1, c = 0, g = f.length; g > c; c++) {
                        var i = f[c](a);
                        (b || (b = !h(i, j[c]))) && (j[c] = i && Pc(i));
                    }
                    return b && (e = d(a)), e;
                }, b, c);
            }
            function j(a, b, c, d) {
                var e, f;
                return e = a.$watch(function(a) {
                    return d(a);
                }, function(a, c, d) {
                    f = a, x(b) && b.apply(this, arguments), s(a) && d.$$postDigest(function() {
                        s(f) && e();
                    });
                }, c);
            }
            function k(a, b, c, d) {
                function e(a) {
                    var b = !0;
                    return f(a, function(a) {
                        s(a) || (b = !1);
                    }), b;
                }
                var g, h;
                return g = a.$watch(function(a) {
                    return d(a);
                }, function(a, c, d) {
                    h = a, x(b) && b.call(this, a, c, d), e(a) && d.$$postDigest(function() {
                        e(h) && g();
                    });
                }, c);
            }
            function l(a, b, c, d) {
                var e;
                return e = a.$watch(function(a) {
                    return d(a);
                }, function() {
                    x(b) && b.apply(this, arguments), e();
                }, c);
            }
            function m(a, b) {
                if (!b) return a;
                var c = a.$$watchDelegate, d = c !== k && c !== j, e = d ? function(c, d) {
                    var e = a(c, d);
                    return b(e, c, d);
                } : function(c, d) {
                    var e = a(c, d), f = b(e, c, d);
                    return s(e) ? f : e;
                };
                return a.$$watchDelegate && a.$$watchDelegate !== i ? e.$$watchDelegate = a.$$watchDelegate : b.$stateful || (e.$$watchDelegate = i, 
                e.inputs = [ a ]), e;
            }
            var n = {
                csp: d.csp,
                expensiveChecks: !1
            }, p = {
                csp: d.csp,
                expensiveChecks: !0
            };
            return function(d, f, g) {
                var h, q, r;
                switch (typeof d) {
                  case "string":
                    r = d = d.trim();
                    var s = g ? b : a;
                    if (h = s[r], !h) {
                        ":" === d.charAt(0) && ":" === d.charAt(1) && (q = !0, d = d.substring(2));
                        var t = g ? p : n, u = new mf(t), v = new nf(u, c, t);
                        h = v.parse(d), h.constant ? h.$$watchDelegate = l : q ? (h = e(h), h.$$watchDelegate = h.literal ? k : j) : h.inputs && (h.$$watchDelegate = i), 
                        s[r] = h;
                    }
                    return m(h, f);

                  case "function":
                    return m(d, f);

                  default:
                    return m(o, f);
                }
            };
        } ];
    }
    function Rc() {
        this.$get = [ "$rootScope", "$exceptionHandler", function(a, b) {
            return Tc(function(b) {
                a.$evalAsync(b);
            }, b);
        } ];
    }
    function Sc() {
        this.$get = [ "$browser", "$exceptionHandler", function(a, b) {
            return Tc(function(b) {
                a.defer(b);
            }, b);
        } ];
    }
    function Tc(a, b) {
        function e(a, b, c) {
            function d(b) {
                return function(c) {
                    e || (e = !0, b.call(a, c));
                };
            }
            var e = !1;
            return [ d(b), d(c) ];
        }
        function g() {
            this.$$state = {
                status: 0
            };
        }
        function h(a, b) {
            return function(c) {
                b.call(a, c);
            };
        }
        function i(a) {
            var d, e, f;
            f = a.pending, a.processScheduled = !1, a.pending = c;
            for (var g = 0, h = f.length; h > g; ++g) {
                e = f[g][0], d = f[g][a.status];
                try {
                    x(d) ? e.resolve(d(a.value)) : 1 === a.status ? e.resolve(a.value) : e.reject(a.value);
                } catch (i) {
                    e.reject(i), b(i);
                }
            }
        }
        function j(b) {
            !b.processScheduled && b.pending && (b.processScheduled = !0, a(function() {
                i(b);
            }));
        }
        function k() {
            this.promise = new g(), this.resolve = h(this, this.resolve), this.reject = h(this, this.reject), 
            this.notify = h(this, this.notify);
        }
        function l(a) {
            var b = new k(), c = 0, d = je(a) ? [] : {};
            return f(a, function(a, e) {
                c++, r(a).then(function(a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
                }, function(a) {
                    d.hasOwnProperty(e) || b.reject(a);
                });
            }), 0 === c && b.resolve(d), b.promise;
        }
        var m = d("$q", TypeError), n = function() {
            return new k();
        };
        g.prototype = {
            then: function(a, b, c) {
                var d = new k();
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([ d, a, b, c ]), 
                this.$$state.status > 0 && j(this.$$state), d.promise;
            },
            "catch": function(a) {
                return this.then(null, a);
            },
            "finally": function(a, b) {
                return this.then(function(b) {
                    return q(b, !0, a);
                }, function(b) {
                    return q(b, !1, a);
                }, b);
            }
        }, k.prototype = {
            resolve: function(a) {
                this.promise.$$state.status || (a === this.promise ? this.$$reject(m("qcycle", "Expected promise to be resolved with value other than itself '{0}'", a)) : this.$$resolve(a));
            },
            $$resolve: function(a) {
                var c, d;
                d = e(this, this.$$resolve, this.$$reject);
                try {
                    (t(a) || x(a)) && (c = a && a.then), x(c) ? (this.promise.$$state.status = -1, c.call(a, d[0], d[1], this.notify)) : (this.promise.$$state.value = a, 
                    this.promise.$$state.status = 1, j(this.promise.$$state));
                } catch (f) {
                    d[1](f), b(f);
                }
            },
            reject: function(a) {
                this.promise.$$state.status || this.$$reject(a);
            },
            $$reject: function(a) {
                this.promise.$$state.value = a, this.promise.$$state.status = 2, j(this.promise.$$state);
            },
            notify: function(c) {
                var d = this.promise.$$state.pending;
                this.promise.$$state.status <= 0 && d && d.length && a(function() {
                    for (var a, e, f = 0, g = d.length; g > f; f++) {
                        e = d[f][0], a = d[f][3];
                        try {
                            e.notify(x(a) ? a(c) : c);
                        } catch (h) {
                            b(h);
                        }
                    }
                });
            }
        };
        var o = function(a) {
            var b = new k();
            return b.reject(a), b.promise;
        }, p = function(a, b) {
            var c = new k();
            return b ? c.resolve(a) : c.reject(a), c.promise;
        }, q = function(a, b, c) {
            var d = null;
            try {
                x(c) && (d = c());
            } catch (e) {
                return p(e, !1);
            }
            return F(d) ? d.then(function() {
                return p(a, b);
            }, function(a) {
                return p(a, !1);
            }) : p(a, b);
        }, r = function(a, b, c, d) {
            var e = new k();
            return e.resolve(a), e.promise.then(b, c, d);
        }, s = function u(a) {
            function b(a) {
                d.resolve(a);
            }
            function c(a) {
                d.reject(a);
            }
            if (!x(a)) throw m("norslvr", "Expected resolverFn, got '{0}'", a);
            if (!(this instanceof u)) return new u(a);
            var d = new k();
            return a(b, c), d.promise;
        };
        return s.defer = n, s.reject = o, s.when = r, s.all = l, s;
    }
    function Uc() {
        this.$get = [ "$window", "$timeout", function(a, b) {
            var c = a.requestAnimationFrame || a.webkitRequestAnimationFrame, d = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame, e = !!c, f = e ? function(a) {
                var b = c(a);
                return function() {
                    d(b);
                };
            } : function(a) {
                var c = b(a, 16.66, !1);
                return function() {
                    b.cancel(c);
                };
            };
            return f.supported = e, f;
        } ];
    }
    function Vc() {
        var a = 10, b = d("$rootScope"), c = null, g = null;
        this.digestTtl = function(b) {
            return arguments.length && (a = b), a;
        }, this.$get = [ "$injector", "$exceptionHandler", "$parse", "$browser", function(d, h, i, k) {
            function l() {
                this.$id = j(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, 
                this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, 
                this.$$isolateBindings = null;
            }
            function m(a) {
                if (v.$$phase) throw b("inprog", "{0} already in progress", v.$$phase);
                v.$$phase = a;
            }
            function n() {
                v.$$phase = null;
            }
            function p(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent);
            }
            function q() {}
            function s() {
                for (;z.length; ) try {
                    z.shift()();
                } catch (a) {
                    h(a);
                }
                g = null;
            }
            function u() {
                null === g && (g = k.defer(function() {
                    v.$apply(s);
                }));
            }
            l.prototype = {
                constructor: l,
                $new: function(a, b) {
                    function c() {
                        d.$$destroyed = !0;
                    }
                    var d;
                    return b = b || this, a ? (d = new l(), d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = function() {
                        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, 
                        this.$$listeners = {}, this.$$listenerCount = {}, this.$id = j(), this.$$ChildScope = null;
                    }, this.$$ChildScope.prototype = this), d = new this.$$ChildScope()), d.$parent = b, 
                    d.$$prevSibling = b.$$childTail, b.$$childHead ? (b.$$childTail.$$nextSibling = d, 
                    b.$$childTail = d) : b.$$childHead = b.$$childTail = d, (a || b != this) && d.$on("$destroy", c), 
                    d;
                },
                $watch: function(a, b, d) {
                    var e = i(a);
                    if (e.$$watchDelegate) return e.$$watchDelegate(this, b, d, e);
                    var f = this, g = f.$$watchers, h = {
                        fn: b,
                        last: q,
                        get: e,
                        exp: a,
                        eq: !!d
                    };
                    return c = null, x(b) || (h.fn = o), g || (g = f.$$watchers = []), g.unshift(h), 
                    function() {
                        J(g, h), c = null;
                    };
                },
                $watchGroup: function(a, b) {
                    function c() {
                        i = !1, j ? (j = !1, b(e, e, h)) : b(e, d, h);
                    }
                    var d = new Array(a.length), e = new Array(a.length), g = [], h = this, i = !1, j = !0;
                    if (!a.length) {
                        var k = !0;
                        return h.$evalAsync(function() {
                            k && b(e, e, h);
                        }), function() {
                            k = !1;
                        };
                    }
                    return 1 === a.length ? this.$watch(a[0], function(a, c, f) {
                        e[0] = a, d[0] = c, b(e, a === c ? e : d, f);
                    }) : (f(a, function(a, b) {
                        var f = h.$watch(a, function(a, f) {
                            e[b] = a, d[b] = f, i || (i = !0, h.$evalAsync(c));
                        });
                        g.push(f);
                    }), function() {
                        for (;g.length; ) g.shift()();
                    });
                },
                $watchCollection: function(a, b) {
                    function c(a) {
                        f = a;
                        var b, c, d, h, i;
                        if (!r(f)) {
                            if (t(f)) if (e(f)) {
                                g !== n && (g = n, q = g.length = 0, l++), b = f.length, q !== b && (l++, g.length = q = b);
                                for (var j = 0; b > j; j++) i = g[j], h = f[j], d = i !== i && h !== h, d || i === h || (l++, 
                                g[j] = h);
                            } else {
                                g !== o && (g = o = {}, q = 0, l++), b = 0;
                                for (c in f) f.hasOwnProperty(c) && (b++, h = f[c], i = g[c], c in g ? (d = i !== i && h !== h, 
                                d || i === h || (l++, g[c] = h)) : (q++, g[c] = h, l++));
                                if (q > b) {
                                    l++;
                                    for (c in g) f.hasOwnProperty(c) || (q--, delete g[c]);
                                }
                            } else g !== f && (g = f, l++);
                            return l;
                        }
                    }
                    function d() {
                        if (p ? (p = !1, b(f, f, j)) : b(f, h, j), k) if (t(f)) if (e(f)) {
                            h = new Array(f.length);
                            for (var a = 0; a < f.length; a++) h[a] = f[a];
                        } else {
                            h = {};
                            for (var c in f) Vd.call(f, c) && (h[c] = f[c]);
                        } else h = f;
                    }
                    c.$stateful = !0;
                    var f, g, h, j = this, k = b.length > 1, l = 0, m = i(a, c), n = [], o = {}, p = !0, q = 0;
                    return this.$watch(m, d);
                },
                $digest: function() {
                    var d, e, f, i, j, l, o, p, r, t, u = a, z = this, A = [];
                    m("$digest"), k.$$checkUrlChange(), this === v && null !== g && (k.defer.cancel(g), 
                    s()), c = null;
                    do {
                        for (l = !1, p = z; w.length; ) {
                            try {
                                t = w.shift(), t.scope.$eval(t.expression, t.locals);
                            } catch (B) {
                                h(B);
                            }
                            c = null;
                        }
                        a: do {
                            if (i = p.$$watchers) for (j = i.length; j--; ) try {
                                if (d = i[j]) if ((e = d.get(p)) === (f = d.last) || (d.eq ? M(e, f) : "number" == typeof e && "number" == typeof f && isNaN(e) && isNaN(f))) {
                                    if (d === c) {
                                        l = !1;
                                        break a;
                                    }
                                } else l = !0, c = d, d.last = d.eq ? K(e, null) : e, d.fn(e, f === q ? e : f, p), 
                                5 > u && (r = 4 - u, A[r] || (A[r] = []), A[r].push({
                                    msg: x(d.exp) ? "fn: " + (d.exp.name || d.exp.toString()) : d.exp,
                                    newVal: e,
                                    oldVal: f
                                }));
                            } catch (B) {
                                h(B);
                            }
                            if (!(o = p.$$childHead || p !== z && p.$$nextSibling)) for (;p !== z && !(o = p.$$nextSibling); ) p = p.$parent;
                        } while (p = o);
                        if ((l || w.length) && !u--) throw n(), b("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", a, A);
                    } while (l || w.length);
                    for (n(); y.length; ) try {
                        y.shift()();
                    } catch (B) {
                        h(B);
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        if (this.$broadcast("$destroy"), this.$$destroyed = !0, this !== v) {
                            for (var b in this.$$listenerCount) p(this, this.$$listenerCount[b], b);
                            a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), 
                            this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), 
                            this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = o, 
                            this.$on = this.$watch = this.$watchGroup = function() {
                                return o;
                            }, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null;
                        }
                    }
                },
                $eval: function(a, b) {
                    return i(a)(this, b);
                },
                $evalAsync: function(a, b) {
                    v.$$phase || w.length || k.defer(function() {
                        w.length && v.$digest();
                    }), w.push({
                        scope: this,
                        expression: a,
                        locals: b
                    });
                },
                $$postDigest: function(a) {
                    y.push(a);
                },
                $apply: function(a) {
                    try {
                        return m("$apply"), this.$eval(a);
                    } catch (b) {
                        h(b);
                    } finally {
                        n();
                        try {
                            v.$digest();
                        } catch (b) {
                            throw h(b), b;
                        }
                    }
                },
                $applyAsync: function(a) {
                    function b() {
                        c.$eval(a);
                    }
                    var c = this;
                    a && z.push(b), u();
                },
                $on: function(a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []), c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                    var e = this;
                    return function() {
                        var d = c.indexOf(b);
                        -1 !== d && (c[d] = null, p(e, 1, a));
                    };
                },
                $emit: function(a) {
                    var b, c, d, e = [], f = this, g = !1, i = {
                        name: a,
                        targetScope: f,
                        stopPropagation: function() {
                            g = !0;
                        },
                        preventDefault: function() {
                            i.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    }, j = N([ i ], arguments, 1);
                    do {
                        for (b = f.$$listeners[a] || e, i.currentScope = f, c = 0, d = b.length; d > c; c++) if (b[c]) try {
                            b[c].apply(null, j);
                        } catch (k) {
                            h(k);
                        } else b.splice(c, 1), c--, d--;
                        if (g) return i.currentScope = null, i;
                        f = f.$parent;
                    } while (f);
                    return i.currentScope = null, i;
                },
                $broadcast: function(a) {
                    var b = this, c = b, d = b, e = {
                        name: a,
                        targetScope: b,
                        preventDefault: function() {
                            e.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    };
                    if (!b.$$listenerCount[a]) return e;
                    for (var f, g, i, j = N([ e ], arguments, 1); c = d; ) {
                        for (e.currentScope = c, f = c.$$listeners[a] || [], g = 0, i = f.length; i > g; g++) if (f[g]) try {
                            f[g].apply(null, j);
                        } catch (k) {
                            h(k);
                        } else f.splice(g, 1), g--, i--;
                        if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== b && c.$$nextSibling)) for (;c !== b && !(d = c.$$nextSibling); ) c = c.$parent;
                    }
                    return e.currentScope = null, e;
                }
            };
            var v = new l(), w = v.$$asyncQueue = [], y = v.$$postDigestQueue = [], z = v.$$applyAsyncQueue = [];
            return v;
        } ];
    }
    function Wc() {
        var a = /^\s*(https?|ftp|mailto|tel|file):/, b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(b) {
            return s(b) ? (a = b, this) : a;
        }, this.imgSrcSanitizationWhitelist = function(a) {
            return s(a) ? (b = a, this) : b;
        }, this.$get = function() {
            return function(c, d) {
                var e, f = d ? b : a;
                return e = dd(c).href, "" === e || e.match(f) ? c : "unsafe:" + e;
            };
        };
    }
    function Xc(a) {
        if ("self" === a) return a;
        if (u(a)) {
            if (a.indexOf("***") > -1) throw rf("iwcard", "Illegal sequence *** in string matcher.  String: {0}", a);
            return a = le(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + a + "$");
        }
        if (y(a)) return new RegExp("^" + a.source + "$");
        throw rf("imatcher", 'Matchers may only be "self", string patterns or RegExp objects');
    }
    function Yc(a) {
        var b = [];
        return s(a) && f(a, function(a) {
            b.push(Xc(a));
        }), b;
    }
    function Zc() {
        this.SCE_CONTEXTS = sf;
        var a = [ "self" ], b = [];
        this.resourceUrlWhitelist = function(b) {
            return arguments.length && (a = Yc(b)), a;
        }, this.resourceUrlBlacklist = function(a) {
            return arguments.length && (b = Yc(a)), b;
        }, this.$get = [ "$injector", function(d) {
            function e(a, b) {
                return "self" === a ? ed(b) : !!a.exec(b.href);
            }
            function f(c) {
                var d, f, g = dd(c.toString()), h = !1;
                for (d = 0, f = a.length; f > d; d++) if (e(a[d], g)) {
                    h = !0;
                    break;
                }
                if (h) for (d = 0, f = b.length; f > d; d++) if (e(b[d], g)) {
                    h = !1;
                    break;
                }
                return h;
            }
            function g(a) {
                var b = function(a) {
                    this.$$unwrapTrustedValue = function() {
                        return a;
                    };
                };
                return a && (b.prototype = new a()), b.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue();
                }, b.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString();
                }, b;
            }
            function h(a, b) {
                var d = m.hasOwnProperty(a) ? m[a] : null;
                if (!d) throw rf("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", a, b);
                if (null === b || b === c || "" === b) return b;
                if ("string" != typeof b) throw rf("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", a);
                return new d(b);
            }
            function i(a) {
                return a instanceof l ? a.$$unwrapTrustedValue() : a;
            }
            function j(a, b) {
                if (null === b || b === c || "" === b) return b;
                var d = m.hasOwnProperty(a) ? m[a] : null;
                if (d && b instanceof d) return b.$$unwrapTrustedValue();
                if (a === sf.RESOURCE_URL) {
                    if (f(b)) return b;
                    throw rf("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", b.toString());
                }
                if (a === sf.HTML) return k(b);
                throw rf("unsafe", "Attempting to use an unsafe value in a safe context.");
            }
            var k = function() {
                throw rf("unsafe", "Attempting to use an unsafe value in a safe context.");
            };
            d.has("$sanitize") && (k = d.get("$sanitize"));
            var l = g(), m = {};
            return m[sf.HTML] = g(l), m[sf.CSS] = g(l), m[sf.URL] = g(l), m[sf.JS] = g(l), m[sf.RESOURCE_URL] = g(m[sf.URL]), 
            {
                trustAs: h,
                getTrusted: j,
                valueOf: i
            };
        } ];
    }
    function $c() {
        var a = !0;
        this.enabled = function(b) {
            return arguments.length && (a = !!b), a;
        }, this.$get = [ "$parse", "$sceDelegate", function(b, c) {
            if (a && 8 > Zd) throw rf("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
            var d = L(sf);
            d.isEnabled = function() {
                return a;
            }, d.trustAs = c.trustAs, d.getTrusted = c.getTrusted, d.valueOf = c.valueOf, a || (d.trustAs = d.getTrusted = function(a, b) {
                return b;
            }, d.valueOf = p), d.parseAs = function(a, c) {
                var e = b(c);
                return e.literal && e.constant ? e : b(c, function(b) {
                    return d.getTrusted(a, b);
                });
            };
            var e = d.parseAs, g = d.getTrusted, h = d.trustAs;
            return f(sf, function(a, b) {
                var c = Ud(b);
                d[pb("parse_as_" + c)] = function(b) {
                    return e(a, b);
                }, d[pb("get_trusted_" + c)] = function(b) {
                    return g(a, b);
                }, d[pb("trust_as_" + c)] = function(b) {
                    return h(a, b);
                };
            }), d;
        } ];
    }
    function _c() {
        this.$get = [ "$window", "$document", function(a, b) {
            var c, d, e = {}, f = m((/android (\d+)/.exec(Ud((a.navigator || {}).userAgent)) || [])[1]), g = /Boxee/i.test((a.navigator || {}).userAgent), h = b[0] || {}, i = /^(Moz|webkit|ms)(?=[A-Z])/, j = h.body && h.body.style, k = !1, l = !1;
            if (j) {
                for (var n in j) if (d = i.exec(n)) {
                    c = d[0], c = c.substr(0, 1).toUpperCase() + c.substr(1);
                    break;
                }
                c || (c = "WebkitOpacity" in j && "webkit"), k = !!("transition" in j || c + "Transition" in j), 
                l = !!("animation" in j || c + "Animation" in j), !f || k && l || (k = u(h.body.style.webkitTransition), 
                l = u(h.body.style.webkitAnimation));
            }
            return {
                history: !(!a.history || !a.history.pushState || 4 > f || g),
                hasEvent: function(a) {
                    if ("input" === a && 11 >= Zd) return !1;
                    if (r(e[a])) {
                        var b = h.createElement("div");
                        e[a] = "on" + a in b;
                    }
                    return e[a];
                },
                csp: me(),
                vendorPrefix: c,
                transitions: k,
                animations: l,
                android: f
            };
        } ];
    }
    function ad() {
        this.$get = [ "$templateCache", "$http", "$q", function(a, b, c) {
            function d(e, f) {
                function g(a) {
                    if (!f) throw Ue("tpload", "Failed to load template: {0}", e);
                    return c.reject(a);
                }
                d.totalPendingRequests++;
                var h = b.defaults && b.defaults.transformResponse;
                je(h) ? h = h.filter(function(a) {
                    return a !== ec;
                }) : h === ec && (h = null);
                var i = {
                    cache: a,
                    transformResponse: h
                };
                return b.get(e, i)["finally"](function() {
                    d.totalPendingRequests--;
                }).then(function(a) {
                    return a.data;
                }, g);
            }
            return d.totalPendingRequests = 0, d;
        } ];
    }
    function bd() {
        this.$get = [ "$rootScope", "$browser", "$location", function(a, b, c) {
            var d = {};
            return d.findBindings = function(a, b, c) {
                var d = a.getElementsByClassName("ng-binding"), e = [];
                return f(d, function(a) {
                    var d = ge.element(a).data("$binding");
                    d && f(d, function(d) {
                        if (c) {
                            var f = new RegExp("(^|\\s)" + le(b) + "(\\s|\\||$)");
                            f.test(d) && e.push(a);
                        } else -1 != d.indexOf(b) && e.push(a);
                    });
                }), e;
            }, d.findModels = function(a, b, c) {
                for (var d = [ "ng-", "data-ng-", "ng\\:" ], e = 0; e < d.length; ++e) {
                    var f = c ? "=" : "*=", g = "[" + d[e] + "model" + f + '"' + b + '"]', h = a.querySelectorAll(g);
                    if (h.length) return h;
                }
            }, d.getLocation = function() {
                return c.url();
            }, d.setLocation = function(b) {
                b !== c.url() && (c.url(b), a.$digest());
            }, d.whenStable = function(a) {
                b.notifyWhenNoOutstandingRequests(a);
            }, d;
        } ];
    }
    function cd() {
        this.$get = [ "$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(a, b, c, d, e) {
            function f(f, h, i) {
                var j, k = s(i) && !i, l = (k ? d : c).defer(), m = l.promise;
                return j = b.defer(function() {
                    try {
                        l.resolve(f());
                    } catch (b) {
                        l.reject(b), e(b);
                    } finally {
                        delete g[m.$$timeoutId];
                    }
                    k || a.$apply();
                }, h), m.$$timeoutId = j, g[j] = l, m;
            }
            var g = {};
            return f.cancel = function(a) {
                return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], 
                b.defer.cancel(a.$$timeoutId)) : !1;
            }, f;
        } ];
    }
    function dd(a) {
        var b = a;
        return Zd && (tf.setAttribute("href", b), b = tf.href), tf.setAttribute("href", b), 
        {
            href: tf.href,
            protocol: tf.protocol ? tf.protocol.replace(/:$/, "") : "",
            host: tf.host,
            search: tf.search ? tf.search.replace(/^\?/, "") : "",
            hash: tf.hash ? tf.hash.replace(/^#/, "") : "",
            hostname: tf.hostname,
            port: tf.port,
            pathname: "/" === tf.pathname.charAt(0) ? tf.pathname : "/" + tf.pathname
        };
    }
    function ed(a) {
        var b = u(a) ? dd(a) : a;
        return b.protocol === uf.protocol && b.host === uf.host;
    }
    function fd() {
        this.$get = q(a);
    }
    function gd(a) {
        function b(d, e) {
            if (t(d)) {
                var g = {};
                return f(d, function(a, c) {
                    g[c] = b(c, a);
                }), g;
            }
            return a.factory(d + c, e);
        }
        var c = "Filter";
        this.register = b, this.$get = [ "$injector", function(a) {
            return function(b) {
                return a.get(b + c);
            };
        } ], b("currency", kd), b("date", vd), b("filter", hd), b("json", wd), b("limitTo", xd), 
        b("lowercase", zf), b("number", ld), b("orderBy", yd), b("uppercase", Af);
    }
    function hd() {
        return function(a, b, c) {
            if (!je(a)) return a;
            var d, e;
            switch (typeof b) {
              case "function":
                d = b;
                break;

              case "boolean":
              case "number":
              case "string":
                e = !0;

              case "object":
                d = id(b, c, e);
                break;

              default:
                return a;
            }
            return a.filter(d);
        };
    }
    function id(a, b, c) {
        var d, e = t(a) && "$" in a;
        return b === !0 ? b = M : x(b) || (b = function(a, b) {
            return t(a) || t(b) ? !1 : (a = Ud("" + a), b = Ud("" + b), -1 !== a.indexOf(b));
        }), d = function(d) {
            return e && !t(d) ? jd(d, a.$, b, !1) : jd(d, a, b, c);
        };
    }
    function jd(a, b, c, d, e) {
        var f = typeof a, g = typeof b;
        if ("string" === g && "!" === b.charAt(0)) return !jd(a, b.substring(1), c, d);
        if (je(a)) return a.some(function(a) {
            return jd(a, b, c, d);
        });
        switch (f) {
          case "object":
            var h;
            if (d) {
                for (h in a) if ("$" !== h.charAt(0) && jd(a[h], b, c, !0)) return !0;
                return e ? !1 : jd(a, b, c, !1);
            }
            if ("object" === g) {
                for (h in b) {
                    var i = b[h];
                    if (!x(i)) {
                        var j = "$" === h, k = j ? a : a[h];
                        if (!jd(k, i, c, j, j)) return !1;
                    }
                }
                return !0;
            }
            return c(a, b);

          case "function":
            return !1;

          default:
            return c(a, b);
        }
    }
    function kd(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c, d) {
            return r(c) && (c = b.CURRENCY_SYM), r(d) && (d = b.PATTERNS[1].maxFrac), null == a ? a : md(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, d).replace(/\u00A4/g, c);
        };
    }
    function ld(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c) {
            return null == a ? a : md(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
        };
    }
    function md(a, b, c, d, e) {
        if (!isFinite(a) || t(a)) return "";
        var f = 0 > a;
        a = Math.abs(a);
        var g = a + "", h = "", i = [], j = !1;
        if (-1 !== g.indexOf("e")) {
            var k = g.match(/([\d\.]+)e(-?)(\d+)/);
            k && "-" == k[2] && k[3] > e + 1 ? a = 0 : (h = g, j = !0);
        }
        if (j) e > 0 && 1 > a && (h = a.toFixed(e), a = parseFloat(h)); else {
            var l = (g.split(vf)[1] || "").length;
            r(e) && (e = Math.min(Math.max(b.minFrac, l), b.maxFrac)), a = +(Math.round(+(a.toString() + "e" + e)).toString() + "e" + -e);
            var m = ("" + a).split(vf), n = m[0];
            m = m[1] || "";
            var o, p = 0, q = b.lgSize, s = b.gSize;
            if (n.length >= q + s) for (p = n.length - q, o = 0; p > o; o++) (p - o) % s === 0 && 0 !== o && (h += c), 
            h += n.charAt(o);
            for (o = p; o < n.length; o++) (n.length - o) % q === 0 && 0 !== o && (h += c), 
            h += n.charAt(o);
            for (;m.length < e; ) m += "0";
            e && "0" !== e && (h += d + m.substr(0, e));
        }
        return 0 === a && (f = !1), i.push(f ? b.negPre : b.posPre, h, f ? b.negSuf : b.posSuf), 
        i.join("");
    }
    function nd(a, b, c) {
        var d = "";
        for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b; ) a = "0" + a;
        return c && (a = a.substr(a.length - b)), d + a;
    }
    function od(a, b, c, d) {
        return c = c || 0, function(e) {
            var f = e["get" + a]();
            return (c > 0 || f > -c) && (f += c), 0 === f && -12 == c && (f = 12), nd(f, b, d);
        };
    }
    function pd(a, b) {
        return function(c, d) {
            var e = c["get" + a](), f = Wd(b ? "SHORT" + a : a);
            return d[f][e];
        };
    }
    function qd(a) {
        var b = -1 * a.getTimezoneOffset(), c = b >= 0 ? "+" : "";
        return c += nd(Math[b > 0 ? "floor" : "ceil"](b / 60), 2) + nd(Math.abs(b % 60), 2);
    }
    function rd(a) {
        var b = new Date(a, 0, 1).getDay();
        return new Date(a, 0, (4 >= b ? 5 : 12) - b);
    }
    function sd(a) {
        return new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay()));
    }
    function td(a) {
        return function(b) {
            var c = rd(b.getFullYear()), d = sd(b), e = +d - +c, f = 1 + Math.round(e / 6048e5);
            return nd(f, a);
        };
    }
    function ud(a, b) {
        return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1];
    }
    function vd(a) {
        function b(a) {
            var b;
            if (b = a.match(c)) {
                var d = new Date(0), e = 0, f = 0, g = b[8] ? d.setUTCFullYear : d.setFullYear, h = b[8] ? d.setUTCHours : d.setHours;
                b[9] && (e = m(b[9] + b[10]), f = m(b[9] + b[11])), g.call(d, m(b[1]), m(b[2]) - 1, m(b[3]));
                var i = m(b[4] || 0) - e, j = m(b[5] || 0) - f, k = m(b[6] || 0), l = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
                return h.call(d, i, j, k, l), d;
            }
            return a;
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, d, e) {
            var g, h, i = "", j = [];
            if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, u(c) && (c = yf.test(c) ? m(c) : b(c)), 
            v(c) && (c = new Date(c)), !w(c)) return c;
            for (;d; ) h = xf.exec(d), h ? (j = N(j, h, 1), d = j.pop()) : (j.push(d), d = null);
            return e && "UTC" === e && (c = new Date(c.getTime()), c.setMinutes(c.getMinutes() + c.getTimezoneOffset())), 
            f(j, function(b) {
                g = wf[b], i += g ? g(c, a.DATETIME_FORMATS) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'");
            }), i;
        };
    }
    function wd() {
        return function(a, b) {
            return r(b) && (b = 2), R(a, b);
        };
    }
    function xd() {
        return function(a, b) {
            return v(a) && (a = a.toString()), je(a) || u(a) ? (b = 1/0 === Math.abs(Number(b)) ? Number(b) : m(b), 
            b ? b > 0 ? a.slice(0, b) : a.slice(b) : u(a) ? "" : []) : a;
        };
    }
    function yd(a) {
        return function(b, c, d) {
            function f(a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e) return e;
                }
                return 0;
            }
            function g(a, b) {
                return b ? function(b, c) {
                    return a(c, b);
                } : a;
            }
            function h(a) {
                switch (typeof a) {
                  case "number":
                  case "boolean":
                  case "string":
                    return !0;

                  default:
                    return !1;
                }
            }
            function i(a) {
                return null === a ? "null" : "function" == typeof a.valueOf && (a = a.valueOf(), 
                h(a)) ? a : "function" == typeof a.toString && (a = a.toString(), h(a)) ? a : "";
            }
            function j(a, b) {
                var c = typeof a, d = typeof b;
                return c === d && "object" === c && (a = i(a), b = i(b)), c === d ? ("string" === c && (a = a.toLowerCase(), 
                b = b.toLowerCase()), a === b ? 0 : b > a ? -1 : 1) : d > c ? -1 : 1;
            }
            return e(b) ? (c = je(c) ? c : [ c ], 0 === c.length && (c = [ "+" ]), c = c.map(function(b) {
                var c = !1, d = b || p;
                if (u(b)) {
                    if (("+" == b.charAt(0) || "-" == b.charAt(0)) && (c = "-" == b.charAt(0), b = b.substring(1)), 
                    "" === b) return g(j, c);
                    if (d = a(b), d.constant) {
                        var e = d();
                        return g(function(a, b) {
                            return j(a[e], b[e]);
                        }, c);
                    }
                }
                return g(function(a, b) {
                    return j(d(a), d(b));
                }, c);
            }), be.call(b).sort(g(f, d))) : b;
        };
    }
    function zd(a) {
        return x(a) && (a = {
            link: a
        }), a.restrict = a.restrict || "AC", q(a);
    }
    function Ad(a, b) {
        a.$name = b;
    }
    function Bd(a, b, d, e, g) {
        var h = this, i = [], j = h.$$parentForm = a.parent().controller("form") || Df;
        h.$error = {}, h.$$success = {}, h.$pending = c, h.$name = g(b.name || b.ngForm || "")(d), 
        h.$dirty = !1, h.$pristine = !0, h.$valid = !0, h.$invalid = !1, h.$submitted = !1, 
        j.$addControl(h), h.$rollbackViewValue = function() {
            f(i, function(a) {
                a.$rollbackViewValue();
            });
        }, h.$commitViewValue = function() {
            f(i, function(a) {
                a.$commitViewValue();
            });
        }, h.$addControl = function(a) {
            gb(a.$name, "input"), i.push(a), a.$name && (h[a.$name] = a);
        }, h.$$renameControl = function(a, b) {
            var c = a.$name;
            h[c] === a && delete h[c], h[b] = a, a.$name = b;
        }, h.$removeControl = function(a) {
            a.$name && h[a.$name] === a && delete h[a.$name], f(h.$pending, function(b, c) {
                h.$setValidity(c, null, a);
            }), f(h.$error, function(b, c) {
                h.$setValidity(c, null, a);
            }), f(h.$$success, function(b, c) {
                h.$setValidity(c, null, a);
            }), J(i, a);
        }, Qd({
            ctrl: this,
            $element: a,
            set: function(a, b, c) {
                var d = a[b];
                if (d) {
                    var e = d.indexOf(c);
                    -1 === e && d.push(c);
                } else a[b] = [ c ];
            },
            unset: function(a, b, c) {
                var d = a[b];
                d && (J(d, c), 0 === d.length && delete a[b]);
            },
            parentForm: j,
            $animate: e
        }), h.$setDirty = function() {
            e.removeClass(a, lg), e.addClass(a, mg), h.$dirty = !0, h.$pristine = !1, j.$setDirty();
        }, h.$setPristine = function() {
            e.setClass(a, lg, mg + " " + Ef), h.$dirty = !1, h.$pristine = !0, h.$submitted = !1, 
            f(i, function(a) {
                a.$setPristine();
            });
        }, h.$setUntouched = function() {
            f(i, function(a) {
                a.$setUntouched();
            });
        }, h.$setSubmitted = function() {
            e.addClass(a, Ef), h.$submitted = !0, j.$setSubmitted();
        };
    }
    function Cd(a) {
        a.$formatters.push(function(b) {
            return a.$isEmpty(b) ? b : b.toString();
        });
    }
    function Dd(a, b, c, d, e, f) {
        Ed(a, b, c, d, e, f), Cd(d);
    }
    function Ed(a, b, c, d, e, f) {
        var g = Ud(b[0].type);
        if (!e.android) {
            var h = !1;
            b.on("compositionstart", function() {
                h = !0;
            }), b.on("compositionend", function() {
                h = !1, i();
            });
        }
        var i = function(a) {
            if (j && (f.defer.cancel(j), j = null), !h) {
                var e = b.val(), i = a && a.type;
                "password" === g || c.ngTrim && "false" === c.ngTrim || (e = ke(e)), (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, i);
            }
        };
        if (e.hasEvent("input")) b.on("input", i); else {
            var j, k = function(a, b, c) {
                j || (j = f.defer(function() {
                    j = null, b && b.value === c || i(a);
                }));
            };
            b.on("keydown", function(a) {
                var b = a.keyCode;
                91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || k(a, this, this.value);
            }), e.hasEvent("paste") && b.on("paste cut", k);
        }
        b.on("change", i), d.$render = function() {
            b.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue);
        };
    }
    function Fd(a, b) {
        if (w(a)) return a;
        if (u(a)) {
            Of.lastIndex = 0;
            var c = Of.exec(a);
            if (c) {
                var d = +c[1], e = +c[2], f = 0, g = 0, h = 0, i = 0, j = rd(d), k = 7 * (e - 1);
                return b && (f = b.getHours(), g = b.getMinutes(), h = b.getSeconds(), i = b.getMilliseconds()), 
                new Date(d, 0, j.getDate() + k, f, g, h, i);
            }
        }
        return 0/0;
    }
    function Gd(a, b) {
        return function(c, d) {
            var e, g;
            if (w(c)) return c;
            if (u(c)) {
                if ('"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1)), 
                If.test(c)) return new Date(c);
                if (a.lastIndex = 0, e = a.exec(c)) return e.shift(), g = d ? {
                    yyyy: d.getFullYear(),
                    MM: d.getMonth() + 1,
                    dd: d.getDate(),
                    HH: d.getHours(),
                    mm: d.getMinutes(),
                    ss: d.getSeconds(),
                    sss: d.getMilliseconds() / 1e3
                } : {
                    yyyy: 1970,
                    MM: 1,
                    dd: 1,
                    HH: 0,
                    mm: 0,
                    ss: 0,
                    sss: 0
                }, f(e, function(a, c) {
                    c < b.length && (g[b[c]] = +a);
                }), new Date(g.yyyy, g.MM - 1, g.dd, g.HH, g.mm, g.ss || 0, 1e3 * g.sss || 0);
            }
            return 0/0;
        };
    }
    function Hd(a, b, d, e) {
        return function(f, g, h, i, j, k, l) {
            function m(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime());
            }
            function n(a) {
                return s(a) ? w(a) ? a : d(a) : c;
            }
            Id(f, g, h, i), Ed(f, g, h, i, j, k);
            var o, p = i && i.$options && i.$options.timezone;
            if (i.$$parserName = a, i.$parsers.push(function(a) {
                if (i.$isEmpty(a)) return null;
                if (b.test(a)) {
                    var e = d(a, o);
                    return "UTC" === p && e.setMinutes(e.getMinutes() - e.getTimezoneOffset()), e;
                }
                return c;
            }), i.$formatters.push(function(a) {
                if (a && !w(a)) throw qg("datefmt", "Expected `{0}` to be a date", a);
                if (m(a)) {
                    if (o = a, o && "UTC" === p) {
                        var b = 6e4 * o.getTimezoneOffset();
                        o = new Date(o.getTime() + b);
                    }
                    return l("date")(a, e, p);
                }
                return o = null, "";
            }), s(h.min) || h.ngMin) {
                var q;
                i.$validators.min = function(a) {
                    return !m(a) || r(q) || d(a) >= q;
                }, h.$observe("min", function(a) {
                    q = n(a), i.$validate();
                });
            }
            if (s(h.max) || h.ngMax) {
                var t;
                i.$validators.max = function(a) {
                    return !m(a) || r(t) || d(a) <= t;
                }, h.$observe("max", function(a) {
                    t = n(a), i.$validate();
                });
            }
        };
    }
    function Id(a, b, d, e) {
        var f = b[0], g = e.$$hasNativeValidators = t(f.validity);
        g && e.$parsers.push(function(a) {
            var d = b.prop(Td) || {};
            return d.badInput && !d.typeMismatch ? c : a;
        });
    }
    function Jd(a, b, d, e, f, g) {
        if (Id(a, b, d, e), Ed(a, b, d, e, f, g), e.$$parserName = "number", e.$parsers.push(function(a) {
            return e.$isEmpty(a) ? null : Lf.test(a) ? parseFloat(a) : c;
        }), e.$formatters.push(function(a) {
            if (!e.$isEmpty(a)) {
                if (!v(a)) throw qg("numfmt", "Expected `{0}` to be a number", a);
                a = a.toString();
            }
            return a;
        }), d.min || d.ngMin) {
            var h;
            e.$validators.min = function(a) {
                return e.$isEmpty(a) || r(h) || a >= h;
            }, d.$observe("min", function(a) {
                s(a) && !v(a) && (a = parseFloat(a, 10)), h = v(a) && !isNaN(a) ? a : c, e.$validate();
            });
        }
        if (d.max || d.ngMax) {
            var i;
            e.$validators.max = function(a) {
                return e.$isEmpty(a) || r(i) || i >= a;
            }, d.$observe("max", function(a) {
                s(a) && !v(a) && (a = parseFloat(a, 10)), i = v(a) && !isNaN(a) ? a : c, e.$validate();
            });
        }
    }
    function Kd(a, b, c, d, e, f) {
        Ed(a, b, c, d, e, f), Cd(d), d.$$parserName = "url", d.$validators.url = function(a, b) {
            var c = a || b;
            return d.$isEmpty(c) || Jf.test(c);
        };
    }
    function Ld(a, b, c, d, e, f) {
        Ed(a, b, c, d, e, f), Cd(d), d.$$parserName = "email", d.$validators.email = function(a, b) {
            var c = a || b;
            return d.$isEmpty(c) || Kf.test(c);
        };
    }
    function Md(a, b, c, d) {
        r(c.name) && b.attr("name", j());
        var e = function(a) {
            b[0].checked && d.$setViewValue(c.value, a && a.type);
        };
        b.on("click", e), d.$render = function() {
            var a = c.value;
            b[0].checked = a == d.$viewValue;
        }, c.$observe("value", d.$render);
    }
    function Nd(a, b, c, e, f) {
        var g;
        if (s(e)) {
            if (g = a(e), !g.constant) throw d("ngModel")("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", c, e);
            return g(b);
        }
        return f;
    }
    function Od(a, b, c, d, e, f, g, h) {
        var i = Nd(h, a, "ngTrueValue", c.ngTrueValue, !0), j = Nd(h, a, "ngFalseValue", c.ngFalseValue, !1), k = function(a) {
            d.$setViewValue(b[0].checked, a && a.type);
        };
        b.on("click", k), d.$render = function() {
            b[0].checked = d.$viewValue;
        }, d.$isEmpty = function(a) {
            return a === !1;
        }, d.$formatters.push(function(a) {
            return M(a, i);
        }), d.$parsers.push(function(a) {
            return a ? i : j;
        });
    }
    function Pd(a, b) {
        return a = "ngClass" + a, [ "$animate", function(c) {
            function d(a, b) {
                var c = [];
                a: for (var d = 0; d < a.length; d++) {
                    for (var e = a[d], f = 0; f < b.length; f++) if (e == b[f]) continue a;
                    c.push(e);
                }
                return c;
            }
            function e(a) {
                if (je(a)) return a;
                if (u(a)) return a.split(" ");
                if (t(a)) {
                    var b = [];
                    return f(a, function(a, c) {
                        a && (b = b.concat(c.split(" ")));
                    }), b;
                }
                return a;
            }
            return {
                restrict: "AC",
                link: function(g, h, i) {
                    function j(a) {
                        var b = l(a, 1);
                        i.$addClass(b);
                    }
                    function k(a) {
                        var b = l(a, -1);
                        i.$removeClass(b);
                    }
                    function l(a, b) {
                        var c = h.data("$classCounts") || {}, d = [];
                        return f(a, function(a) {
                            (b > 0 || c[a]) && (c[a] = (c[a] || 0) + b, c[a] === +(b > 0) && d.push(a));
                        }), h.data("$classCounts", c), d.join(" ");
                    }
                    function m(a, b) {
                        var e = d(b, a), f = d(a, b);
                        e = l(e, 1), f = l(f, -1), e && e.length && c.addClass(h, e), f && f.length && c.removeClass(h, f);
                    }
                    function n(a) {
                        if (b === !0 || g.$index % 2 === b) {
                            var c = e(a || []);
                            if (o) {
                                if (!M(a, o)) {
                                    var d = e(o);
                                    m(d, c);
                                }
                            } else j(c);
                        }
                        o = L(a);
                    }
                    var o;
                    g.$watch(i[a], n, !0), i.$observe("class", function() {
                        n(g.$eval(i[a]));
                    }), "ngClass" !== a && g.$watch("$index", function(c, d) {
                        var f = 1 & c;
                        if (f !== (1 & d)) {
                            var h = e(g.$eval(i[a]));
                            f === b ? j(h) : k(h);
                        }
                    });
                }
            };
        } ];
    }
    function Qd(a) {
        function b(a, b, i) {
            b === c ? d("$pending", a, i) : e("$pending", a, i), E(b) ? b ? (l(h.$error, a, i), 
            k(h.$$success, a, i)) : (k(h.$error, a, i), l(h.$$success, a, i)) : (l(h.$error, a, i), 
            l(h.$$success, a, i)), h.$pending ? (f(pg, !0), h.$valid = h.$invalid = c, g("", null)) : (f(pg, !1), 
            h.$valid = Rd(h.$error), h.$invalid = !h.$valid, g("", h.$valid));
            var j;
            j = h.$pending && h.$pending[a] ? c : h.$error[a] ? !1 : h.$$success[a] ? !0 : null, 
            g(a, j), m.$setValidity(a, j, h);
        }
        function d(a, b, c) {
            h[a] || (h[a] = {}), k(h[a], b, c);
        }
        function e(a, b, d) {
            h[a] && l(h[a], b, d), Rd(h[a]) && (h[a] = c);
        }
        function f(a, b) {
            b && !j[a] ? (n.addClass(i, a), j[a] = !0) : !b && j[a] && (n.removeClass(i, a), 
            j[a] = !1);
        }
        function g(a, b) {
            a = a ? "-" + cb(a, "-") : "", f(jg + a, b === !0), f(kg + a, b === !1);
        }
        var h = a.ctrl, i = a.$element, j = {}, k = a.set, l = a.unset, m = a.parentForm, n = a.$animate;
        j[kg] = !(j[jg] = i.hasClass(jg)), h.$setValidity = b;
    }
    function Rd(a) {
        if (a) for (var b in a) return !1;
        return !0;
    }
    var Sd = /^\/(.+)\/([a-z]*)$/, Td = "validity", Ud = function(a) {
        return u(a) ? a.toLowerCase() : a;
    }, Vd = Object.prototype.hasOwnProperty, Wd = function(a) {
        return u(a) ? a.toUpperCase() : a;
    }, Xd = function(a) {
        return u(a) ? a.replace(/[A-Z]/g, function(a) {
            return String.fromCharCode(32 | a.charCodeAt(0));
        }) : a;
    }, Yd = function(a) {
        return u(a) ? a.replace(/[a-z]/g, function(a) {
            return String.fromCharCode(-33 & a.charCodeAt(0));
        }) : a;
    };
    "i" !== "I".toLowerCase() && (Ud = Xd, Wd = Yd);
    var Zd, $d, _d, ae, be = [].slice, ce = [].splice, de = [].push, ee = Object.prototype.toString, fe = d("ng"), ge = a.angular || (a.angular = {}), he = 0;
    Zd = b.documentMode, o.$inject = [], p.$inject = [];
    var ie, je = Array.isArray, ke = function(a) {
        return u(a) ? a.trim() : a;
    }, le = function(a) {
        return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
    }, me = function() {
        if (s(me.isActive_)) return me.isActive_;
        var a = !(!b.querySelector("[ng-csp]") && !b.querySelector("[data-ng-csp]"));
        if (!a) try {
            new Function("");
        } catch (c) {
            a = !0;
        }
        return me.isActive_ = a;
    }, ne = [ "ng-", "data-ng-", "ng:", "x-ng-" ], oe = /[A-Z]/g, pe = !1, qe = 1, re = 3, se = 8, te = 9, ue = 11, ve = {
        full: "1.3.11",
        major: 1,
        minor: 3,
        dot: 11,
        codeName: "spiffy-manatee"
    };
    ub.expando = "ng339";
    var we = ub.cache = {}, xe = 1, ye = function(a, b, c) {
        a.addEventListener(b, c, !1);
    }, ze = function(a, b, c) {
        a.removeEventListener(b, c, !1);
    };
    ub._data = function(a) {
        return this.cache[a[this.expando]] || {};
    };
    var Ae = /([\:\-\_]+(.))/g, Be = /^moz([A-Z])/, Ce = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
    }, De = d("jqLite"), Ee = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Fe = /<|&#?\w+;/, Ge = /<([\w:]+)/, He = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Ie = {
        option: [ 1, '<select multiple="multiple">', "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    Ie.optgroup = Ie.option, Ie.tbody = Ie.tfoot = Ie.colgroup = Ie.caption = Ie.thead, 
    Ie.th = Ie.td;
    var Je = ub.prototype = {
        ready: function(c) {
            function d() {
                e || (e = !0, c());
            }
            var e = !1;
            "complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), ub(a).on("load", d));
        },
        toString: function() {
            var a = [];
            return f(this, function(b) {
                a.push("" + b);
            }), "[" + a.join(", ") + "]";
        },
        eq: function(a) {
            return $d(a >= 0 ? this[a] : this[this.length + a]);
        },
        length: 0,
        push: de,
        sort: [].sort,
        splice: [].splice
    }, Ke = {};
    f("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(a) {
        Ke[Ud(a)] = a;
    });
    var Le = {};
    f("input,select,option,textarea,button,form,details".split(","), function(a) {
        Le[a] = !0;
    });
    var Me = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
    };
    f({
        data: Ab,
        removeData: yb
    }, function(a, b) {
        ub[b] = a;
    }), f({
        data: Ab,
        inheritedData: Gb,
        scope: function(a) {
            return $d.data(a, "$scope") || Gb(a.parentNode || a, [ "$isolateScope", "$scope" ]);
        },
        isolateScope: function(a) {
            return $d.data(a, "$isolateScope") || $d.data(a, "$isolateScopeNoTemplate");
        },
        controller: Fb,
        injector: function(a) {
            return Gb(a, "$injector");
        },
        removeAttr: function(a, b) {
            a.removeAttribute(b);
        },
        hasClass: Bb,
        css: function(a, b, c) {
            return b = pb(b), s(c) ? void (a.style[b] = c) : a.style[b];
        },
        attr: function(a, b, d) {
            var e = Ud(b);
            if (Ke[e]) {
                if (!s(d)) return a[b] || (a.attributes.getNamedItem(b) || o).specified ? e : c;
                d ? (a[b] = !0, a.setAttribute(b, e)) : (a[b] = !1, a.removeAttribute(e));
            } else if (s(d)) a.setAttribute(b, d); else if (a.getAttribute) {
                var f = a.getAttribute(b, 2);
                return null === f ? c : f;
            }
        },
        prop: function(a, b, c) {
            return s(c) ? void (a[b] = c) : a[b];
        },
        text: function() {
            function a(a, b) {
                if (r(b)) {
                    var c = a.nodeType;
                    return c === qe || c === re ? a.textContent : "";
                }
                a.textContent = b;
            }
            return a.$dv = "", a;
        }(),
        val: function(a, b) {
            if (r(b)) {
                if (a.multiple && "select" === I(a)) {
                    var c = [];
                    return f(a.options, function(a) {
                        a.selected && c.push(a.value || a.text);
                    }), 0 === c.length ? null : c;
                }
                return a.value;
            }
            a.value = b;
        },
        html: function(a, b) {
            return r(b) ? a.innerHTML : (wb(a, !0), void (a.innerHTML = b));
        },
        empty: Hb
    }, function(a, b) {
        ub.prototype[b] = function(b, d) {
            var e, f, g = this.length;
            if (a !== Hb && (2 == a.length && a !== Bb && a !== Fb ? b : d) === c) {
                if (t(b)) {
                    for (e = 0; g > e; e++) if (a === Ab) a(this[e], b); else for (f in b) a(this[e], f, b[f]);
                    return this;
                }
                for (var h = a.$dv, i = h === c ? Math.min(g, 1) : g, j = 0; i > j; j++) {
                    var k = a(this[j], b, d);
                    h = h ? h + k : k;
                }
                return h;
            }
            for (e = 0; g > e; e++) a(this[e], b, d);
            return this;
        };
    }), f({
        removeData: yb,
        on: function Rg(a, b, c, d) {
            if (s(d)) throw De("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
            if (rb(a)) {
                var e = zb(a, !0), f = e.events, g = e.handle;
                g || (g = e.handle = Mb(a, f));
                for (var h = b.indexOf(" ") >= 0 ? b.split(" ") : [ b ], i = h.length; i--; ) {
                    b = h[i];
                    var j = f[b];
                    j || (f[b] = [], "mouseenter" === b || "mouseleave" === b ? Rg(a, Ce[b], function(a) {
                        var c = this, d = a.relatedTarget;
                        (!d || d !== c && !c.contains(d)) && g(a, b);
                    }) : "$destroy" !== b && ye(a, b, g), j = f[b]), j.push(c);
                }
            }
        },
        off: xb,
        one: function(a, b, c) {
            a = $d(a), a.on(b, function d() {
                a.off(b, c), a.off(b, d);
            }), a.on(b, c);
        },
        replaceWith: function(a, b) {
            var c, d = a.parentNode;
            wb(a), f(new ub(b), function(b) {
                c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b;
            });
        },
        children: function(a) {
            var b = [];
            return f(a.childNodes, function(a) {
                a.nodeType === qe && b.push(a);
            }), b;
        },
        contents: function(a) {
            return a.contentDocument || a.childNodes || [];
        },
        append: function(a, b) {
            var c = a.nodeType;
            if (c === qe || c === ue) {
                b = new ub(b);
                for (var d = 0, e = b.length; e > d; d++) {
                    var f = b[d];
                    a.appendChild(f);
                }
            }
        },
        prepend: function(a, b) {
            if (a.nodeType === qe) {
                var c = a.firstChild;
                f(new ub(b), function(b) {
                    a.insertBefore(b, c);
                });
            }
        },
        wrap: function(a, b) {
            b = $d(b).eq(0).clone()[0];
            var c = a.parentNode;
            c && c.replaceChild(b, a), b.appendChild(a);
        },
        remove: Ib,
        detach: function(a) {
            Ib(a, !0);
        },
        after: function(a, b) {
            var c = a, d = a.parentNode;
            b = new ub(b);
            for (var e = 0, f = b.length; f > e; e++) {
                var g = b[e];
                d.insertBefore(g, c.nextSibling), c = g;
            }
        },
        addClass: Db,
        removeClass: Cb,
        toggleClass: function(a, b, c) {
            b && f(b.split(" "), function(b) {
                var d = c;
                r(d) && (d = !Bb(a, b)), (d ? Db : Cb)(a, b);
            });
        },
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== ue ? b : null;
        },
        next: function(a) {
            return a.nextElementSibling;
        },
        find: function(a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b) : [];
        },
        clone: vb,
        triggerHandler: function(a, b, c) {
            var d, e, g, h = b.type || b, i = zb(a), j = i && i.events, k = j && j[h];
            k && (d = {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                },
                isDefaultPrevented: function() {
                    return this.defaultPrevented === !0;
                },
                stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = !0;
                },
                isImmediatePropagationStopped: function() {
                    return this.immediatePropagationStopped === !0;
                },
                stopPropagation: o,
                type: h,
                target: a
            }, b.type && (d = l(d, b)), e = L(k), g = c ? [ d ].concat(c) : [ d ], f(e, function(b) {
                d.isImmediatePropagationStopped() || b.apply(a, g);
            }));
        }
    }, function(a, b) {
        ub.prototype[b] = function(b, c, d) {
            for (var e, f = 0, g = this.length; g > f; f++) r(e) ? (e = a(this[f], b, c, d), 
            s(e) && (e = $d(e))) : Eb(e, a(this[f], b, c, d));
            return s(e) ? e : this;
        }, ub.prototype.bind = ub.prototype.on, ub.prototype.unbind = ub.prototype.off;
    }), Pb.prototype = {
        put: function(a, b) {
            this[Ob(a, this.nextUid)] = b;
        },
        get: function(a) {
            return this[Ob(a, this.nextUid)];
        },
        remove: function(a) {
            var b = this[a = Ob(a, this.nextUid)];
            return delete this[a], b;
        }
    };
    var Ne = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, Oe = /,/, Pe = /^\s*(_?)(\S+?)\1\s*$/, Qe = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Re = d("$injector");
    Sb.$$annotate = Rb;
    var Se = d("$animate"), Te = [ "$provide", function(a) {
        this.$$selectors = {}, this.register = function(b, c) {
            var d = b + "-animation";
            if (b && "." != b.charAt(0)) throw Se("notcsel", "Expecting class selector starting with '.' got '{0}'.", b);
            this.$$selectors[b.substr(1)] = d, a.factory(d, c);
        }, this.classNameFilter = function(a) {
            return 1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null), 
            this.$$classNameFilter;
        }, this.$get = [ "$$q", "$$asyncCallback", "$rootScope", function(a, b, c) {
            function d(b) {
                var d, e = a.defer();
                return e.promise.$$cancelFn = function() {
                    d && d();
                }, c.$$postDigest(function() {
                    d = b(function() {
                        e.resolve();
                    });
                }), e.promise;
            }
            function e(a, b) {
                var c = [], d = [], e = jb();
                return f((a.attr("class") || "").split(/\s+/), function(a) {
                    e[a] = !0;
                }), f(b, function(a, b) {
                    var f = e[b];
                    a === !1 && f ? d.push(b) : a !== !0 || f || c.push(b);
                }), c.length + d.length > 0 && [ c.length ? c : null, d.length ? d : null ];
            }
            function g(a, b, c) {
                for (var d = 0, e = b.length; e > d; ++d) {
                    var f = b[d];
                    a[f] = c;
                }
            }
            function h() {
                return j || (j = a.defer(), b(function() {
                    j.resolve(), j = null;
                })), j.promise;
            }
            function i(a, b) {
                if (ge.isObject(b)) {
                    var c = l(b.from || {}, b.to || {});
                    a.css(c);
                }
            }
            var j;
            return {
                animate: function(a, b, c) {
                    return i(a, {
                        from: b,
                        to: c
                    }), h();
                },
                enter: function(a, b, c, d) {
                    return i(a, d), c ? c.after(a) : b.prepend(a), h();
                },
                leave: function(a) {
                    return a.remove(), h();
                },
                move: function(a, b, c, d) {
                    return this.enter(a, b, c, d);
                },
                addClass: function(a, b, c) {
                    return this.setClass(a, b, [], c);
                },
                $$addClassImmediately: function(a, b, c) {
                    return a = $d(a), b = u(b) ? b : je(b) ? b.join(" ") : "", f(a, function(a) {
                        Db(a, b);
                    }), i(a, c), h();
                },
                removeClass: function(a, b, c) {
                    return this.setClass(a, [], b, c);
                },
                $$removeClassImmediately: function(a, b, c) {
                    return a = $d(a), b = u(b) ? b : je(b) ? b.join(" ") : "", f(a, function(a) {
                        Cb(a, b);
                    }), i(a, c), h();
                },
                setClass: function(a, b, c, f) {
                    var h = this, i = "$$animateClasses", j = !1;
                    a = $d(a);
                    var k = a.data(i);
                    k ? f && k.options && (k.options = ge.extend(k.options || {}, f)) : (k = {
                        classes: {},
                        options: f
                    }, j = !0);
                    var l = k.classes;
                    return b = je(b) ? b : b.split(" "), c = je(c) ? c : c.split(" "), g(l, b, !0), 
                    g(l, c, !1), j && (k.promise = d(function(b) {
                        var c = a.data(i);
                        if (a.removeData(i), c) {
                            var d = e(a, c.classes);
                            d && h.$$setClassImmediately(a, d[0], d[1], c.options);
                        }
                        b();
                    }), a.data(i, k)), k.promise;
                },
                $$setClassImmediately: function(a, b, c, d) {
                    return b && this.$$addClassImmediately(a, b), c && this.$$removeClassImmediately(a, c), 
                    i(a, d), h();
                },
                enabled: o,
                cancel: o
            };
        } ];
    } ], Ue = d("$compile");
    Zb.$inject = [ "$provide", "$$sanitizeUriProvider" ];
    var Ve = /^((?:x|data)[\:\-_])/i, We = "application/json", Xe = {
        "Content-Type": We + ";charset=utf-8"
    }, Ye = /^\[|^\{(?!\{)/, Ze = {
        "[": /]$/,
        "{": /}$/
    }, $e = /^\)\]\}',?\n/, _e = d("$interpolate"), af = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, bf = {
        http: 80,
        https: 443,
        ftp: 21
    }, cf = d("$location"), df = {
        $$html5: !1,
        $$replace: !1,
        absUrl: Cc("$$absUrl"),
        url: function(a) {
            if (r(a)) return this.$$url;
            var b = af.exec(a);
            return (b[1] || "" === a) && this.path(decodeURIComponent(b[1])), (b[2] || b[1] || "" === a) && this.search(b[3] || ""), 
            this.hash(b[5] || ""), this;
        },
        protocol: Cc("$$protocol"),
        host: Cc("$$host"),
        port: Cc("$$port"),
        path: Dc("$$path", function(a) {
            return a = null !== a ? a.toString() : "", "/" == a.charAt(0) ? a : "/" + a;
        }),
        search: function(a, b) {
            switch (arguments.length) {
              case 0:
                return this.$$search;

              case 1:
                if (u(a) || v(a)) a = a.toString(), this.$$search = V(a); else {
                    if (!t(a)) throw cf("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                    a = K(a, {}), f(a, function(b, c) {
                        null == b && delete a[c];
                    }), this.$$search = a;
                }
                break;

              default:
                r(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b;
            }
            return this.$$compose(), this;
        },
        hash: Dc("$$hash", function(a) {
            return null !== a ? a.toString() : "";
        }),
        replace: function() {
            return this.$$replace = !0, this;
        }
    };
    f([ Bc, Ac, zc ], function(a) {
        a.prototype = Object.create(df), a.prototype.state = function(b) {
            if (!arguments.length) return this.$$state;
            if (a !== zc || !this.$$html5) throw cf("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
            return this.$$state = r(b) ? null : b, this;
        };
    });
    var ef = d("$parse"), ff = Function.prototype.call, gf = Function.prototype.apply, hf = Function.prototype.bind, jf = jb();
    f({
        "null": function() {
            return null;
        },
        "true": function() {
            return !0;
        },
        "false": function() {
            return !1;
        },
        undefined: function() {}
    }, function(a, b) {
        a.constant = a.literal = a.sharedGetter = !0, jf[b] = a;
    }), jf["this"] = function(a) {
        return a;
    }, jf["this"].sharedGetter = !0;
    var kf = l(jb(), {
        "+": function(a, b, d, e) {
            return d = d(a, b), e = e(a, b), s(d) ? s(e) ? d + e : d : s(e) ? e : c;
        },
        "-": function(a, b, c, d) {
            return c = c(a, b), d = d(a, b), (s(c) ? c : 0) - (s(d) ? d : 0);
        },
        "*": function(a, b, c, d) {
            return c(a, b) * d(a, b);
        },
        "/": function(a, b, c, d) {
            return c(a, b) / d(a, b);
        },
        "%": function(a, b, c, d) {
            return c(a, b) % d(a, b);
        },
        "===": function(a, b, c, d) {
            return c(a, b) === d(a, b);
        },
        "!==": function(a, b, c, d) {
            return c(a, b) !== d(a, b);
        },
        "==": function(a, b, c, d) {
            return c(a, b) == d(a, b);
        },
        "!=": function(a, b, c, d) {
            return c(a, b) != d(a, b);
        },
        "<": function(a, b, c, d) {
            return c(a, b) < d(a, b);
        },
        ">": function(a, b, c, d) {
            return c(a, b) > d(a, b);
        },
        "<=": function(a, b, c, d) {
            return c(a, b) <= d(a, b);
        },
        ">=": function(a, b, c, d) {
            return c(a, b) >= d(a, b);
        },
        "&&": function(a, b, c, d) {
            return c(a, b) && d(a, b);
        },
        "||": function(a, b, c, d) {
            return c(a, b) || d(a, b);
        },
        "!": function(a, b, c) {
            return !c(a, b);
        },
        "=": !0,
        "|": !0
    }), lf = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "	",
        v: "",
        "'": "'",
        '"': '"'
    }, mf = function(a) {
        this.options = a;
    };
    mf.prototype = {
        constructor: mf,
        lex: function(a) {
            for (this.text = a, this.index = 0, this.tokens = []; this.index < this.text.length; ) {
                var b = this.text.charAt(this.index);
                if ('"' === b || "'" === b) this.readString(b); else if (this.isNumber(b) || "." === b && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdent(b)) this.readIdent(); else if (this.is(b, "(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: b
                }), this.index++; else if (this.isWhitespace(b)) this.index++; else {
                    var c = b + this.peek(), d = c + this.peek(2), e = kf[b], f = kf[c], g = kf[d];
                    if (e || f || g) {
                        var h = g ? d : f ? c : b;
                        this.tokens.push({
                            index: this.index,
                            text: h,
                            operator: !0
                        }), this.index += h.length;
                    } else this.throwError("Unexpected next character ", this.index, this.index + 1);
                }
            }
            return this.tokens;
        },
        is: function(a, b) {
            return -1 !== b.indexOf(a);
        },
        peek: function(a) {
            var b = a || 1;
            return this.index + b < this.text.length ? this.text.charAt(this.index + b) : !1;
        },
        isNumber: function(a) {
            return a >= "0" && "9" >= a && "string" == typeof a;
        },
        isWhitespace: function(a) {
            return " " === a || "\r" === a || "	" === a || "\n" === a || "" === a || " " === a;
        },
        isIdent: function(a) {
            return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a;
        },
        isExpOperator: function(a) {
            return "-" === a || "+" === a || this.isNumber(a);
        },
        throwError: function(a, b, c) {
            c = c || this.index;
            var d = s(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c;
            throw ef("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", a, d, this.text);
        },
        readNumber: function() {
            for (var a = "", b = this.index; this.index < this.text.length; ) {
                var c = Ud(this.text.charAt(this.index));
                if ("." == c || this.isNumber(c)) a += c; else {
                    var d = this.peek();
                    if ("e" == c && this.isExpOperator(d)) a += c; else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1)) a += c; else {
                        if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1)) break;
                        this.throwError("Invalid exponent");
                    }
                }
                this.index++;
            }
            this.tokens.push({
                index: b,
                text: a,
                constant: !0,
                value: Number(a)
            });
        },
        readIdent: function() {
            for (var a = this.index; this.index < this.text.length; ) {
                var b = this.text.charAt(this.index);
                if (!this.isIdent(b) && !this.isNumber(b)) break;
                this.index++;
            }
            this.tokens.push({
                index: a,
                text: this.text.slice(a, this.index),
                identifier: !0
            });
        },
        readString: function(a) {
            var b = this.index;
            this.index++;
            for (var c = "", d = a, e = !1; this.index < this.text.length; ) {
                var f = this.text.charAt(this.index);
                if (d += f, e) {
                    if ("u" === f) {
                        var g = this.text.substring(this.index + 1, this.index + 5);
                        g.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + g + "]"), 
                        this.index += 4, c += String.fromCharCode(parseInt(g, 16));
                    } else {
                        var h = lf[f];
                        c += h || f;
                    }
                    e = !1;
                } else if ("\\" === f) e = !0; else {
                    if (f === a) return this.index++, void this.tokens.push({
                        index: b,
                        text: d,
                        constant: !0,
                        value: c
                    });
                    c += f;
                }
                this.index++;
            }
            this.throwError("Unterminated quote", b);
        }
    };
    var nf = function(a, b, c) {
        this.lexer = a, this.$filter = b, this.options = c;
    };
    nf.ZERO = l(function() {
        return 0;
    }, {
        sharedGetter: !0,
        constant: !0
    }), nf.prototype = {
        constructor: nf,
        parse: function(a) {
            this.text = a, this.tokens = this.lexer.lex(a);
            var b = this.statements();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), 
            b.literal = !!b.literal, b.constant = !!b.constant, b;
        },
        primary: function() {
            var a;
            this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.peek().identifier && this.peek().text in jf ? a = jf[this.consume().text] : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var b, c; b = this.expect("(", "[", "."); ) "(" === b.text ? (a = this.functionCall(a, c), 
            c = null) : "[" === b.text ? (c = a, a = this.objectIndex(a)) : "." === b.text ? (c = a, 
            a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
            return a;
        },
        throwError: function(a, b) {
            throw ef("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw ef("ueoe", "Unexpected end of expression: {0}", this.text);
            return this.tokens[0];
        },
        peek: function(a, b, c, d) {
            return this.peekAhead(0, a, b, c, d);
        },
        peekAhead: function(a, b, c, d, e) {
            if (this.tokens.length > a) {
                var f = this.tokens[a], g = f.text;
                if (g === b || g === c || g === d || g === e || !b && !c && !d && !e) return f;
            }
            return !1;
        },
        expect: function(a, b, c, d) {
            var e = this.peek(a, b, c, d);
            return e ? (this.tokens.shift(), e) : !1;
        },
        consume: function(a) {
            if (0 === this.tokens.length) throw ef("ueoe", "Unexpected end of expression: {0}", this.text);
            var b = this.expect(a);
            return b || this.throwError("is unexpected, expecting [" + a + "]", this.peek()), 
            b;
        },
        unaryFn: function(a, b) {
            var c = kf[a];
            return l(function(a, d) {
                return c(a, d, b);
            }, {
                constant: b.constant,
                inputs: [ b ]
            });
        },
        binaryFn: function(a, b, c, d) {
            var e = kf[b];
            return l(function(b, d) {
                return e(b, d, a, c);
            }, {
                constant: a.constant && c.constant,
                inputs: !d && [ a, c ]
            });
        },
        identifier: function() {
            for (var a = this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "("); ) a += this.consume().text + this.consume().text;
            return Oc(a, this.options, this.text);
        },
        constant: function() {
            var a = this.consume().value;
            return l(function() {
                return a;
            }, {
                constant: !0,
                literal: !0
            });
        },
        statements: function() {
            for (var a = []; ;) if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), 
            !this.expect(";")) return 1 === a.length ? a[0] : function(b, c) {
                for (var d, e = 0, f = a.length; f > e; e++) d = a[e](b, c);
                return d;
            };
        },
        filterChain: function() {
            for (var a, b = this.expression(); a = this.expect("|"); ) b = this.filter(b);
            return b;
        },
        filter: function(a) {
            var b, d, e = this.$filter(this.consume().text);
            if (this.peek(":")) for (b = [], d = []; this.expect(":"); ) b.push(this.expression());
            var f = [ a ].concat(b || []);
            return l(function(f, g) {
                var h = a(f, g);
                if (d) {
                    d[0] = h;
                    for (var i = b.length; i--; ) d[i + 1] = b[i](f, g);
                    return e.apply(c, d);
                }
                return e(h);
            }, {
                constant: !e.$stateful && f.every(Jc),
                inputs: !e.$stateful && f
            });
        },
        expression: function() {
            return this.assignment();
        },
        assignment: function() {
            var a, b, c = this.ternary();
            return (b = this.expect("=")) ? (c.assign || this.throwError("implies assignment but [" + this.text.substring(0, b.index) + "] can not be assigned to", b), 
            a = this.ternary(), l(function(b, d) {
                return c.assign(b, a(b, d), d);
            }, {
                inputs: [ c, a ]
            })) : c;
        },
        ternary: function() {
            var a, b, c = this.logicalOR();
            if ((b = this.expect("?")) && (a = this.assignment(), this.consume(":"))) {
                var d = this.assignment();
                return l(function(b, e) {
                    return c(b, e) ? a(b, e) : d(b, e);
                }, {
                    constant: c.constant && a.constant && d.constant
                });
            }
            return c;
        },
        logicalOR: function() {
            for (var a, b = this.logicalAND(); a = this.expect("||"); ) b = this.binaryFn(b, a.text, this.logicalAND(), !0);
            return b;
        },
        logicalAND: function() {
            for (var a, b = this.equality(); a = this.expect("&&"); ) b = this.binaryFn(b, a.text, this.equality(), !0);
            return b;
        },
        equality: function() {
            for (var a, b = this.relational(); a = this.expect("==", "!=", "===", "!=="); ) b = this.binaryFn(b, a.text, this.relational());
            return b;
        },
        relational: function() {
            for (var a, b = this.additive(); a = this.expect("<", ">", "<=", ">="); ) b = this.binaryFn(b, a.text, this.additive());
            return b;
        },
        additive: function() {
            for (var a, b = this.multiplicative(); a = this.expect("+", "-"); ) b = this.binaryFn(b, a.text, this.multiplicative());
            return b;
        },
        multiplicative: function() {
            for (var a, b = this.unary(); a = this.expect("*", "/", "%"); ) b = this.binaryFn(b, a.text, this.unary());
            return b;
        },
        unary: function() {
            var a;
            return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(nf.ZERO, a.text, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.text, this.unary()) : this.primary();
        },
        fieldAccess: function(a) {
            var b = this.identifier();
            return l(function(d, e, f) {
                var g = f || a(d, e);
                return null == g ? c : b(g);
            }, {
                assign: function(c, d, e) {
                    var f = a(c, e);
                    return f || a.assign(c, f = {}, e), b.assign(f, d);
                }
            });
        },
        objectIndex: function(a) {
            var b = this.text, d = this.expression();
            return this.consume("]"), l(function(e, f) {
                var g, h = a(e, f), i = d(e, f);
                return Gc(i, b), h ? g = Hc(h[i], b) : c;
            }, {
                assign: function(c, e, f) {
                    var g = Gc(d(c, f), b), h = Hc(a(c, f), b);
                    return h || a.assign(c, h = {}, f), h[g] = e;
                }
            });
        },
        functionCall: function(a, b) {
            var d = [];
            if (")" !== this.peekToken().text) do d.push(this.expression()); while (this.expect(","));
            this.consume(")");
            var e = this.text, f = d.length ? [] : null;
            return function(g, h) {
                var i = b ? b(g, h) : s(b) ? c : g, j = a(g, h, i) || o;
                if (f) for (var k = d.length; k--; ) f[k] = Hc(d[k](g, h), e);
                Hc(i, e), Ic(j, e);
                var l = j.apply ? j.apply(i, f) : j(f[0], f[1], f[2], f[3], f[4]);
                return Hc(l, e);
            };
        },
        arrayDeclaration: function() {
            var a = [];
            if ("]" !== this.peekToken().text) do {
                if (this.peek("]")) break;
                a.push(this.expression());
            } while (this.expect(","));
            return this.consume("]"), l(function(b, c) {
                for (var d = [], e = 0, f = a.length; f > e; e++) d.push(a[e](b, c));
                return d;
            }, {
                literal: !0,
                constant: a.every(Jc),
                inputs: a
            });
        },
        object: function() {
            var a = [], b = [];
            if ("}" !== this.peekToken().text) do {
                if (this.peek("}")) break;
                var c = this.consume();
                c.constant ? a.push(c.value) : c.identifier ? a.push(c.text) : this.throwError("invalid key", c), 
                this.consume(":"), b.push(this.expression());
            } while (this.expect(","));
            return this.consume("}"), l(function(c, d) {
                for (var e = {}, f = 0, g = b.length; g > f; f++) e[a[f]] = b[f](c, d);
                return e;
            }, {
                literal: !0,
                constant: b.every(Jc),
                inputs: b
            });
        }
    };
    var of = jb(), pf = jb(), qf = Object.prototype.valueOf, rf = d("$sce"), sf = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }, Ue = d("$compile"), tf = b.createElement("a"), uf = dd(a.location.href);
    gd.$inject = [ "$provide" ], kd.$inject = [ "$locale" ], ld.$inject = [ "$locale" ];
    var vf = ".", wf = {
        yyyy: od("FullYear", 4),
        yy: od("FullYear", 2, 0, !0),
        y: od("FullYear", 1),
        MMMM: pd("Month"),
        MMM: pd("Month", !0),
        MM: od("Month", 2, 1),
        M: od("Month", 1, 1),
        dd: od("Date", 2),
        d: od("Date", 1),
        HH: od("Hours", 2),
        H: od("Hours", 1),
        hh: od("Hours", 2, -12),
        h: od("Hours", 1, -12),
        mm: od("Minutes", 2),
        m: od("Minutes", 1),
        ss: od("Seconds", 2),
        s: od("Seconds", 1),
        sss: od("Milliseconds", 3),
        EEEE: pd("Day"),
        EEE: pd("Day", !0),
        a: ud,
        Z: qd,
        ww: td(2),
        w: td(1)
    }, xf = /((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/, yf = /^\-?\d+$/;
    vd.$inject = [ "$locale" ];
    var zf = q(Ud), Af = q(Wd);
    yd.$inject = [ "$parse" ];
    var Bf = q({
        restrict: "E",
        compile: function(a, b) {
            return b.href || b.xlinkHref || b.name ? void 0 : function(a, b) {
                if ("a" === b[0].nodeName.toLowerCase()) {
                    var c = "[object SVGAnimatedString]" === ee.call(b.prop("href")) ? "xlink:href" : "href";
                    b.on("click", function(a) {
                        b.attr(c) || a.preventDefault();
                    });
                }
            };
        }
    }), Cf = {};
    f(Ke, function(a, b) {
        if ("multiple" != a) {
            var c = $b("ng-" + b);
            Cf[c] = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    link: function(a, d, e) {
                        a.$watch(e[c], function(a) {
                            e.$set(b, !!a);
                        });
                    }
                };
            };
        }
    }), f(Me, function(a, b) {
        Cf[b] = function() {
            return {
                priority: 100,
                link: function(a, c, d) {
                    if ("ngPattern" === b && "/" == d.ngPattern.charAt(0)) {
                        var e = d.ngPattern.match(Sd);
                        if (e) return void d.$set("ngPattern", new RegExp(e[1], e[2]));
                    }
                    a.$watch(d[b], function(a) {
                        d.$set(b, a);
                    });
                }
            };
        };
    }), f([ "src", "srcset", "href" ], function(a) {
        var b = $b("ng-" + a);
        Cf[b] = function() {
            return {
                priority: 99,
                link: function(c, d, e) {
                    var f = a, g = a;
                    "href" === a && "[object SVGAnimatedString]" === ee.call(d.prop("href")) && (g = "xlinkHref", 
                    e.$attr[g] = "xlink:href", f = null), e.$observe(b, function(b) {
                        return b ? (e.$set(g, b), void (Zd && f && d.prop(f, e[g]))) : void ("href" === a && e.$set(g, null));
                    });
                }
            };
        };
    });
    var Df = {
        $addControl: o,
        $$renameControl: Ad,
        $removeControl: o,
        $setValidity: o,
        $setDirty: o,
        $setPristine: o,
        $setSubmitted: o
    }, Ef = "ng-submitted";
    Bd.$inject = [ "$element", "$attrs", "$scope", "$animate", "$interpolate" ];
    var Ff = function(a) {
        return [ "$timeout", function(b) {
            var d = {
                name: "form",
                restrict: a ? "EAC" : "E",
                controller: Bd,
                compile: function(a) {
                    return a.addClass(lg).addClass(jg), {
                        pre: function(a, d, e, f) {
                            if (!("action" in e)) {
                                var g = function(b) {
                                    a.$apply(function() {
                                        f.$commitViewValue(), f.$setSubmitted();
                                    }), b.preventDefault();
                                };
                                ye(d[0], "submit", g), d.on("$destroy", function() {
                                    b(function() {
                                        ze(d[0], "submit", g);
                                    }, 0, !1);
                                });
                            }
                            var h = f.$$parentForm, i = f.$name;
                            i && (Kc(a, null, i, f, i), e.$observe(e.name ? "name" : "ngForm", function(b) {
                                i !== b && (Kc(a, null, i, c, i), i = b, Kc(a, null, i, f, i), h.$$renameControl(f, i));
                            })), d.on("$destroy", function() {
                                h.$removeControl(f), i && Kc(a, null, i, c, i), l(f, Df);
                            });
                        }
                    };
                }
            };
            return d;
        } ];
    }, Gf = Ff(), Hf = Ff(!0), If = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, Jf = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, Kf = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, Lf = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Mf = /^(\d{4})-(\d{2})-(\d{2})$/, Nf = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Of = /^(\d{4})-W(\d\d)$/, Pf = /^(\d{4})-(\d\d)$/, Qf = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Rf = {
        text: Dd,
        date: Hd("date", Mf, Gd(Mf, [ "yyyy", "MM", "dd" ]), "yyyy-MM-dd"),
        "datetime-local": Hd("datetimelocal", Nf, Gd(Nf, [ "yyyy", "MM", "dd", "HH", "mm", "ss", "sss" ]), "yyyy-MM-ddTHH:mm:ss.sss"),
        time: Hd("time", Qf, Gd(Qf, [ "HH", "mm", "ss", "sss" ]), "HH:mm:ss.sss"),
        week: Hd("week", Of, Fd, "yyyy-Www"),
        month: Hd("month", Pf, Gd(Pf, [ "yyyy", "MM" ]), "yyyy-MM"),
        number: Jd,
        url: Kd,
        email: Ld,
        radio: Md,
        checkbox: Od,
        hidden: o,
        button: o,
        submit: o,
        reset: o,
        file: o
    }, Sf = [ "$browser", "$sniffer", "$filter", "$parse", function(a, b, c, d) {
        return {
            restrict: "E",
            require: [ "?ngModel" ],
            link: {
                pre: function(e, f, g, h) {
                    h[0] && (Rf[Ud(g.type)] || Rf.text)(e, f, g, h[0], b, a, c, d);
                }
            }
        };
    } ], Tf = /^(true|false|\d+)$/, Uf = function() {
        return {
            restrict: "A",
            priority: 100,
            compile: function(a, b) {
                return Tf.test(b.ngValue) ? function(a, b, c) {
                    c.$set("value", a.$eval(c.ngValue));
                } : function(a, b, c) {
                    a.$watch(c.ngValue, function(a) {
                        c.$set("value", a);
                    });
                };
            }
        };
    }, Vf = [ "$compile", function(a) {
        return {
            restrict: "AC",
            compile: function(b) {
                return a.$$addBindingClass(b), function(b, d, e) {
                    a.$$addBindingInfo(d, e.ngBind), d = d[0], b.$watch(e.ngBind, function(a) {
                        d.textContent = a === c ? "" : a;
                    });
                };
            }
        };
    } ], Wf = [ "$interpolate", "$compile", function(a, b) {
        return {
            compile: function(d) {
                return b.$$addBindingClass(d), function(d, e, f) {
                    var g = a(e.attr(f.$attr.ngBindTemplate));
                    b.$$addBindingInfo(e, g.expressions), e = e[0], f.$observe("ngBindTemplate", function(a) {
                        e.textContent = a === c ? "" : a;
                    });
                };
            }
        };
    } ], Xf = [ "$sce", "$parse", "$compile", function(a, b, c) {
        return {
            restrict: "A",
            compile: function(d, e) {
                var f = b(e.ngBindHtml), g = b(e.ngBindHtml, function(a) {
                    return (a || "").toString();
                });
                return c.$$addBindingClass(d), function(b, d, e) {
                    c.$$addBindingInfo(d, e.ngBindHtml), b.$watch(g, function() {
                        d.html(a.getTrustedHtml(f(b)) || "");
                    });
                };
            }
        };
    } ], Yf = q({
        restrict: "A",
        require: "ngModel",
        link: function(a, b, c, d) {
            d.$viewChangeListeners.push(function() {
                a.$eval(c.ngChange);
            });
        }
    }), Zf = Pd("", !0), $f = Pd("Odd", 0), _f = Pd("Even", 1), ag = zd({
        compile: function(a, b) {
            b.$set("ngCloak", c), a.removeClass("ng-cloak");
        }
    }), bg = [ function() {
        return {
            restrict: "A",
            scope: !0,
            controller: "@",
            priority: 500
        };
    } ], cg = {}, dg = {
        blur: !0,
        focus: !0
    };
    f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
        var b = $b("ng-" + a);
        cg[b] = [ "$parse", "$rootScope", function(c, d) {
            return {
                restrict: "A",
                compile: function(e, f) {
                    var g = c(f[b], null, !0);
                    return function(b, c) {
                        c.on(a, function(c) {
                            var e = function() {
                                g(b, {
                                    $event: c
                                });
                            };
                            dg[a] && d.$$phase ? b.$evalAsync(e) : b.$apply(e);
                        });
                    };
                }
            };
        } ];
    });
    var eg = [ "$animate", function(a) {
        return {
            multiElement: !0,
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function(c, d, e, f, g) {
                var h, i, j;
                c.$watch(e.ngIf, function(c) {
                    c ? i || g(function(c, f) {
                        i = f, c[c.length++] = b.createComment(" end ngIf: " + e.ngIf + " "), h = {
                            clone: c
                        }, a.enter(c, d.parent(), d);
                    }) : (j && (j.remove(), j = null), i && (i.$destroy(), i = null), h && (j = ib(h.clone), 
                    a.leave(j).then(function() {
                        j = null;
                    }), h = null));
                });
            }
        };
    } ], fg = [ "$templateRequest", "$anchorScroll", "$animate", "$sce", function(a, b, c, d) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: ge.noop,
            compile: function(e, f) {
                var g = f.ngInclude || f.src, h = f.onload || "", i = f.autoscroll;
                return function(e, f, j, k, l) {
                    var m, n, o, p = 0, q = function() {
                        n && (n.remove(), n = null), m && (m.$destroy(), m = null), o && (c.leave(o).then(function() {
                            n = null;
                        }), n = o, o = null);
                    };
                    e.$watch(d.parseAsResourceUrl(g), function(d) {
                        var g = function() {
                            !s(i) || i && !e.$eval(i) || b();
                        }, j = ++p;
                        d ? (a(d, !0).then(function(a) {
                            if (j === p) {
                                var b = e.$new();
                                k.template = a;
                                var i = l(b, function(a) {
                                    q(), c.enter(a, null, f).then(g);
                                });
                                m = b, o = i, m.$emit("$includeContentLoaded", d), e.$eval(h);
                            }
                        }, function() {
                            j === p && (q(), e.$emit("$includeContentError", d));
                        }), e.$emit("$includeContentRequested", d)) : (q(), k.template = null);
                    });
                };
            }
        };
    } ], gg = [ "$compile", function(a) {
        return {
            restrict: "ECA",
            priority: -400,
            require: "ngInclude",
            link: function(c, d, e, f) {
                return /SVG/.test(d[0].toString()) ? (d.empty(), void a(sb(f.template, b).childNodes)(c, function(a) {
                    d.append(a);
                }, {
                    futureParentElement: d
                })) : (d.html(f.template), void a(d.contents())(c));
            }
        };
    } ], hg = zd({
        priority: 450,
        compile: function() {
            return {
                pre: function(a, b, c) {
                    a.$eval(c.ngInit);
                }
            };
        }
    }), ig = function() {
        return {
            restrict: "A",
            priority: 100,
            require: "ngModel",
            link: function(a, b, d, e) {
                var g = b.attr(d.$attr.ngList) || ", ", h = "false" !== d.ngTrim, i = h ? ke(g) : g, j = function(a) {
                    if (!r(a)) {
                        var b = [];
                        return a && f(a.split(i), function(a) {
                            a && b.push(h ? ke(a) : a);
                        }), b;
                    }
                };
                e.$parsers.push(j), e.$formatters.push(function(a) {
                    return je(a) ? a.join(g) : c;
                }), e.$isEmpty = function(a) {
                    return !a || !a.length;
                };
            }
        };
    }, jg = "ng-valid", kg = "ng-invalid", lg = "ng-pristine", mg = "ng-dirty", ng = "ng-untouched", og = "ng-touched", pg = "ng-pending", qg = new d("ngModel"), rg = [ "$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(a, b, d, e, g, h, i, j, k, l) {
        this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = c, 
        this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], 
        this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, 
        this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, 
        this.$pending = c, this.$name = l(d.name || "", !1)(a);
        var m = g(d.ngModel), n = m.assign, p = m, q = n, t = null, u = this;
        this.$$setOptions = function(a) {
            if (u.$options = a, a && a.getterSetter) {
                var b = g(d.ngModel + "()"), c = g(d.ngModel + "($$$p)");
                p = function(a) {
                    var c = m(a);
                    return x(c) && (c = b(a)), c;
                }, q = function(a) {
                    x(m(a)) ? c(a, {
                        $$$p: u.$modelValue
                    }) : n(a, u.$modelValue);
                };
            } else if (!m.assign) throw qg("nonassign", "Expression '{0}' is non-assignable. Element: {1}", d.ngModel, T(e));
        }, this.$render = o, this.$isEmpty = function(a) {
            return r(a) || "" === a || null === a || a !== a;
        };
        var w = e.inheritedData("$formController") || Df, y = 0;
        Qd({
            ctrl: this,
            $element: e,
            set: function(a, b) {
                a[b] = !0;
            },
            unset: function(a, b) {
                delete a[b];
            },
            parentForm: w,
            $animate: h
        }), this.$setPristine = function() {
            u.$dirty = !1, u.$pristine = !0, h.removeClass(e, mg), h.addClass(e, lg);
        }, this.$setDirty = function() {
            u.$dirty = !0, u.$pristine = !1, h.removeClass(e, lg), h.addClass(e, mg), w.$setDirty();
        }, this.$setUntouched = function() {
            u.$touched = !1, u.$untouched = !0, h.setClass(e, ng, og);
        }, this.$setTouched = function() {
            u.$touched = !0, u.$untouched = !1, h.setClass(e, og, ng);
        }, this.$rollbackViewValue = function() {
            i.cancel(t), u.$viewValue = u.$$lastCommittedViewValue, u.$render();
        }, this.$validate = function() {
            if (!v(u.$modelValue) || !isNaN(u.$modelValue)) {
                var a = u.$$lastCommittedViewValue, b = u.$$rawModelValue, d = u.$$parserName || "parse", e = u.$error[d] ? !1 : c, f = u.$valid, g = u.$modelValue, h = u.$options && u.$options.allowInvalid;
                u.$$runValidators(e, b, a, function(a) {
                    h || f === a || (u.$modelValue = a ? b : c, u.$modelValue !== g && u.$$writeModelToScope());
                });
            }
        }, this.$$runValidators = function(a, b, d, e) {
            function g(a) {
                var b = u.$$parserName || "parse";
                if (a === c) j(b, null); else if (j(b, a), !a) return f(u.$validators, function(a, b) {
                    j(b, null);
                }), f(u.$asyncValidators, function(a, b) {
                    j(b, null);
                }), !1;
                return !0;
            }
            function h() {
                var a = !0;
                return f(u.$validators, function(c, e) {
                    var f = c(b, d);
                    a = a && f, j(e, f);
                }), a ? !0 : (f(u.$asyncValidators, function(a, b) {
                    j(b, null);
                }), !1);
            }
            function i() {
                var a = [], e = !0;
                f(u.$asyncValidators, function(f, g) {
                    var h = f(b, d);
                    if (!F(h)) throw qg("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", h);
                    j(g, c), a.push(h.then(function() {
                        j(g, !0);
                    }, function() {
                        e = !1, j(g, !1);
                    }));
                }), a.length ? k.all(a).then(function() {
                    l(e);
                }, o) : l(!0);
            }
            function j(a, b) {
                m === y && u.$setValidity(a, b);
            }
            function l(a) {
                m === y && e(a);
            }
            y++;
            var m = y;
            return g(a) && h() ? void i() : void l(!1);
        }, this.$commitViewValue = function() {
            var a = u.$viewValue;
            i.cancel(t), (u.$$lastCommittedViewValue !== a || "" === a && u.$$hasNativeValidators) && (u.$$lastCommittedViewValue = a, 
            u.$pristine && this.$setDirty(), this.$$parseAndValidate());
        }, this.$$parseAndValidate = function() {
            function b() {
                u.$modelValue !== h && u.$$writeModelToScope();
            }
            var d = u.$$lastCommittedViewValue, e = d, f = r(e) ? c : !0;
            if (f) for (var g = 0; g < u.$parsers.length; g++) if (e = u.$parsers[g](e), r(e)) {
                f = !1;
                break;
            }
            v(u.$modelValue) && isNaN(u.$modelValue) && (u.$modelValue = p(a));
            var h = u.$modelValue, i = u.$options && u.$options.allowInvalid;
            u.$$rawModelValue = e, i && (u.$modelValue = e, b()), u.$$runValidators(f, e, u.$$lastCommittedViewValue, function(a) {
                i || (u.$modelValue = a ? e : c, b());
            });
        }, this.$$writeModelToScope = function() {
            q(a, u.$modelValue), f(u.$viewChangeListeners, function(a) {
                try {
                    a();
                } catch (c) {
                    b(c);
                }
            });
        }, this.$setViewValue = function(a, b) {
            u.$viewValue = a, (!u.$options || u.$options.updateOnDefault) && u.$$debounceViewValueCommit(b);
        }, this.$$debounceViewValueCommit = function(b) {
            var c, d = 0, e = u.$options;
            e && s(e.debounce) && (c = e.debounce, v(c) ? d = c : v(c[b]) ? d = c[b] : v(c["default"]) && (d = c["default"])), 
            i.cancel(t), d ? t = i(function() {
                u.$commitViewValue();
            }, d) : j.$$phase ? u.$commitViewValue() : a.$apply(function() {
                u.$commitViewValue();
            });
        }, a.$watch(function() {
            var b = p(a);
            if (b !== u.$modelValue) {
                u.$modelValue = u.$$rawModelValue = b;
                for (var d = u.$formatters, e = d.length, f = b; e--; ) f = d[e](f);
                u.$viewValue !== f && (u.$viewValue = u.$$lastCommittedViewValue = f, u.$render(), 
                u.$$runValidators(c, b, f, o));
            }
            return b;
        });
    } ], sg = [ "$rootScope", function(a) {
        return {
            restrict: "A",
            require: [ "ngModel", "^?form", "^?ngModelOptions" ],
            controller: rg,
            priority: 1,
            compile: function(b) {
                return b.addClass(lg).addClass(ng).addClass(jg), {
                    pre: function(a, b, c, d) {
                        var e = d[0], f = d[1] || Df;
                        e.$$setOptions(d[2] && d[2].$options), f.$addControl(e), c.$observe("name", function(a) {
                            e.$name !== a && f.$$renameControl(e, a);
                        }), a.$on("$destroy", function() {
                            f.$removeControl(e);
                        });
                    },
                    post: function(b, c, d, e) {
                        var f = e[0];
                        f.$options && f.$options.updateOn && c.on(f.$options.updateOn, function(a) {
                            f.$$debounceViewValueCommit(a && a.type);
                        }), c.on("blur", function() {
                            f.$touched || (a.$$phase ? b.$evalAsync(f.$setTouched) : b.$apply(f.$setTouched));
                        });
                    }
                };
            }
        };
    } ], tg = /(\s+|^)default(\s+|$)/, ug = function() {
        return {
            restrict: "A",
            controller: [ "$scope", "$attrs", function(a, b) {
                var d = this;
                this.$options = a.$eval(b.ngModelOptions), this.$options.updateOn !== c ? (this.$options.updateOnDefault = !1, 
                this.$options.updateOn = ke(this.$options.updateOn.replace(tg, function() {
                    return d.$options.updateOnDefault = !0, " ";
                }))) : this.$options.updateOnDefault = !0;
            } ]
        };
    }, vg = zd({
        terminal: !0,
        priority: 1e3
    }), wg = [ "$locale", "$interpolate", function(a, b) {
        var c = /{}/g, d = /^when(Minus)?(.+)$/;
        return {
            restrict: "EA",
            link: function(e, g, h) {
                function i(a) {
                    g.text(a || "");
                }
                var j, k = h.count, l = h.$attr.when && g.attr(h.$attr.when), m = h.offset || 0, n = e.$eval(l) || {}, o = {}, p = b.startSymbol(), q = b.endSymbol(), r = p + k + "-" + m + q, s = ge.noop;
                f(h, function(a, b) {
                    var c = d.exec(b);
                    if (c) {
                        var e = (c[1] ? "-" : "") + Ud(c[2]);
                        n[e] = g.attr(h.$attr[b]);
                    }
                }), f(n, function(a, d) {
                    o[d] = b(a.replace(c, r));
                }), e.$watch(k, function(b) {
                    var c = parseFloat(b), d = isNaN(c);
                    d || c in n || (c = a.pluralCat(c - m)), c === j || d && isNaN(j) || (s(), s = e.$watch(o[c], i), 
                    j = c);
                });
            }
        };
    } ], xg = [ "$parse", "$animate", function(a, g) {
        var h = "$$NG_REMOVED", i = d("ngRepeat"), j = function(a, b, c, d, e, f, g) {
            a[c] = d, e && (a[e] = f), a.$index = b, a.$first = 0 === b, a.$last = b === g - 1, 
            a.$middle = !(a.$first || a.$last), a.$odd = !(a.$even = 0 === (1 & b));
        }, k = function(a) {
            return a.clone[0];
        }, l = function(a) {
            return a.clone[a.clone.length - 1];
        };
        return {
            restrict: "A",
            multiElement: !0,
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            $$tlb: !0,
            compile: function(d, m) {
                var n = m.ngRepeat, o = b.createComment(" end ngRepeat: " + n + " "), p = n.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                if (!p) throw i("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", n);
                var q = p[1], r = p[2], s = p[3], t = p[4];
                if (p = q.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !p) throw i("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", q);
                var u = p[3] || p[1], v = p[2];
                if (s && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(s))) throw i("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", s);
                var w, x, y, z, A = {
                    $id: Ob
                };
                return t ? w = a(t) : (y = function(a, b) {
                    return Ob(b);
                }, z = function(a) {
                    return a;
                }), function(a, b, d, m, p) {
                    w && (x = function(b, c, d) {
                        return v && (A[v] = b), A[u] = c, A.$index = d, w(a, A);
                    });
                    var q = jb();
                    a.$watchCollection(r, function(d) {
                        var m, r, t, w, A, B, C, D, E, F, G, H, I = b[0], J = jb();
                        if (s && (a[s] = d), e(d)) E = d, D = x || y; else {
                            D = x || z, E = [];
                            for (var K in d) d.hasOwnProperty(K) && "$" != K.charAt(0) && E.push(K);
                            E.sort();
                        }
                        for (w = E.length, G = new Array(w), m = 0; w > m; m++) if (A = d === E ? m : E[m], 
                        B = d[A], C = D(A, B, m), q[C]) F = q[C], delete q[C], J[C] = F, G[m] = F; else {
                            if (J[C]) throw f(G, function(a) {
                                a && a.scope && (q[a.id] = a);
                            }), i("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", n, C, B);
                            G[m] = {
                                id: C,
                                scope: c,
                                clone: c
                            }, J[C] = !0;
                        }
                        for (var L in q) {
                            if (F = q[L], H = ib(F.clone), g.leave(H), H[0].parentNode) for (m = 0, r = H.length; r > m; m++) H[m][h] = !0;
                            F.scope.$destroy();
                        }
                        for (m = 0; w > m; m++) if (A = d === E ? m : E[m], B = d[A], F = G[m], F.scope) {
                            t = I;
                            do t = t.nextSibling; while (t && t[h]);
                            k(F) != t && g.move(ib(F.clone), null, $d(I)), I = l(F), j(F.scope, m, u, B, v, A, w);
                        } else p(function(a, b) {
                            F.scope = b;
                            var c = o.cloneNode(!1);
                            a[a.length++] = c, g.enter(a, null, $d(I)), I = c, F.clone = a, J[F.id] = F, j(F.scope, m, u, B, v, A, w);
                        });
                        q = J;
                    });
                };
            }
        };
    } ], yg = "ng-hide", zg = "ng-hide-animate", Ag = [ "$animate", function(a) {
        return {
            restrict: "A",
            multiElement: !0,
            link: function(b, c, d) {
                b.$watch(d.ngShow, function(b) {
                    a[b ? "removeClass" : "addClass"](c, yg, {
                        tempClasses: zg
                    });
                });
            }
        };
    } ], Bg = [ "$animate", function(a) {
        return {
            restrict: "A",
            multiElement: !0,
            link: function(b, c, d) {
                b.$watch(d.ngHide, function(b) {
                    a[b ? "addClass" : "removeClass"](c, yg, {
                        tempClasses: zg
                    });
                });
            }
        };
    } ], Cg = zd(function(a, b, c) {
        a.$watchCollection(c.ngStyle, function(a, c) {
            c && a !== c && f(c, function(a, c) {
                b.css(c, "");
            }), a && b.css(a);
        });
    }), Dg = [ "$animate", function(a) {
        return {
            restrict: "EA",
            require: "ngSwitch",
            controller: [ "$scope", function() {
                this.cases = {};
            } ],
            link: function(c, d, e, g) {
                var h = e.ngSwitch || e.on, i = [], j = [], k = [], l = [], m = function(a, b) {
                    return function() {
                        a.splice(b, 1);
                    };
                };
                c.$watch(h, function(c) {
                    var d, e;
                    for (d = 0, e = k.length; e > d; ++d) a.cancel(k[d]);
                    for (k.length = 0, d = 0, e = l.length; e > d; ++d) {
                        var h = ib(j[d].clone);
                        l[d].$destroy();
                        var n = k[d] = a.leave(h);
                        n.then(m(k, d));
                    }
                    j.length = 0, l.length = 0, (i = g.cases["!" + c] || g.cases["?"]) && f(i, function(c) {
                        c.transclude(function(d, e) {
                            l.push(e);
                            var f = c.element;
                            d[d.length++] = b.createComment(" end ngSwitchWhen: ");
                            var g = {
                                clone: d
                            };
                            j.push(g), a.enter(d, f.parent(), f);
                        });
                    });
                });
            }
        };
    } ], Eg = zd({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(a, b, c, d, e) {
            d.cases["!" + c.ngSwitchWhen] = d.cases["!" + c.ngSwitchWhen] || [], d.cases["!" + c.ngSwitchWhen].push({
                transclude: e,
                element: b
            });
        }
    }), Fg = zd({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(a, b, c, d, e) {
            d.cases["?"] = d.cases["?"] || [], d.cases["?"].push({
                transclude: e,
                element: b
            });
        }
    }), Gg = zd({
        restrict: "EAC",
        link: function(a, b, c, e, f) {
            if (!f) throw d("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", T(b));
            f(function(a) {
                b.empty(), b.append(a);
            });
        }
    }), Hg = [ "$templateCache", function(a) {
        return {
            restrict: "E",
            terminal: !0,
            compile: function(b, c) {
                if ("text/ng-template" == c.type) {
                    var d = c.id, e = b[0].text;
                    a.put(d, e);
                }
            }
        };
    } ], Ig = d("ngOptions"), Jg = q({
        restrict: "A",
        terminal: !0
    }), Kg = [ "$compile", "$parse", function(a, d) {
        var e = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, h = {
            $setViewValue: o
        };
        return {
            restrict: "E",
            require: [ "select", "?ngModel" ],
            controller: [ "$element", "$scope", "$attrs", function(a, b, c) {
                var d, e, f = this, g = {}, i = h;
                f.databound = c.ngModel, f.init = function(a, b, c) {
                    i = a, d = b, e = c;
                }, f.addOption = function(b, c) {
                    gb(b, '"option value"'), g[b] = !0, i.$viewValue == b && (a.val(b), e.parent() && e.remove()), 
                    c && c[0].hasAttribute("selected") && (c[0].selected = !0);
                }, f.removeOption = function(a) {
                    this.hasOption(a) && (delete g[a], i.$viewValue === a && this.renderUnknownOption(a));
                }, f.renderUnknownOption = function(b) {
                    var c = "? " + Ob(b) + " ?";
                    e.val(c), a.prepend(e), a.val(c), e.prop("selected", !0);
                }, f.hasOption = function(a) {
                    return g.hasOwnProperty(a);
                }, b.$on("$destroy", function() {
                    f.renderUnknownOption = o;
                });
            } ],
            link: function(h, i, j, k) {
                function l(a, b, c, d) {
                    c.$render = function() {
                        var a = c.$viewValue;
                        d.hasOption(a) ? (z.parent() && z.remove(), b.val(a), "" === a && o.prop("selected", !0)) : r(a) && o ? b.val("") : d.renderUnknownOption(a);
                    }, b.on("change", function() {
                        a.$apply(function() {
                            z.parent() && z.remove(), c.$setViewValue(b.val());
                        });
                    });
                }
                function m(a, b, c) {
                    var d;
                    c.$render = function() {
                        var a = new Pb(c.$viewValue);
                        f(b.find("option"), function(b) {
                            b.selected = s(a.get(b.value));
                        });
                    }, a.$watch(function() {
                        M(d, c.$viewValue) || (d = L(c.$viewValue), c.$render());
                    }), b.on("change", function() {
                        a.$apply(function() {
                            var a = [];
                            f(b.find("option"), function(b) {
                                b.selected && a.push(b.value);
                            }), c.$setViewValue(a);
                        });
                    });
                }
                function n(b, h, i) {
                    function j(a, c, d) {
                        return M[B] = d, E && (M[E] = c), a(b, M);
                    }
                    function k() {
                        b.$apply(function() {
                            var a, c = H(b) || [];
                            if (t) a = [], f(h.val(), function(b) {
                                b = J ? K[b] : b, a.push(l(b, c[b]));
                            }); else {
                                var d = J ? K[h.val()] : h.val();
                                a = l(d, c[d]);
                            }
                            i.$setViewValue(a), r();
                        });
                    }
                    function l(a, b) {
                        if ("?" === a) return c;
                        if ("" === a) return null;
                        var d = D ? D : G;
                        return j(d, a, b);
                    }
                    function m() {
                        var a, c = H(b);
                        if (c && je(c)) {
                            a = new Array(c.length);
                            for (var d = 0, e = c.length; e > d; d++) a[d] = j(A, d, c[d]);
                            return a;
                        }
                        if (c) {
                            a = {};
                            for (var f in c) c.hasOwnProperty(f) && (a[f] = j(A, f, c[f]));
                        }
                        return a;
                    }
                    function n(a) {
                        var b;
                        if (t) if (J && je(a)) {
                            b = new Pb([]);
                            for (var c = 0; c < a.length; c++) b.put(j(J, null, a[c]), !0);
                        } else b = new Pb(a); else J && (a = j(J, null, a));
                        return function(c, d) {
                            var e;
                            return e = J ? J : D ? D : G, t ? s(b.remove(j(e, c, d))) : a === j(e, c, d);
                        };
                    }
                    function o() {
                        w || (b.$$postDigest(r), w = !0);
                    }
                    function q(a, b, c) {
                        a[b] = a[b] || 0, a[b] += c ? 1 : -1;
                    }
                    function r() {
                        w = !1;
                        var a, c, d, e, k, l, m, o, r, u, z, B, C, D, G, I, N, O = {
                            "": []
                        }, P = [ "" ], Q = i.$viewValue, R = H(b) || [], S = E ? g(R) : R, T = {}, U = n(Q), V = !1;
                        for (K = {}, B = 0; u = S.length, u > B; B++) m = B, E && (m = S[B], "$" === m.charAt(0)) || (o = R[m], 
                        a = j(F, m, o) || "", (c = O[a]) || (c = O[a] = [], P.push(a)), C = U(m, o), V = V || C, 
                        I = j(A, m, o), I = s(I) ? I : "", N = J ? J(b, M) : E ? S[B] : B, J && (K[N] = m), 
                        c.push({
                            id: N,
                            label: I,
                            selected: C
                        }));
                        for (t || (v || null === Q ? O[""].unshift({
                            id: "",
                            label: "",
                            selected: !V
                        }) : V || O[""].unshift({
                            id: "?",
                            label: "",
                            selected: !0
                        })), z = 0, r = P.length; r > z; z++) {
                            for (a = P[z], c = O[a], L.length <= z ? (e = {
                                element: y.clone().attr("label", a),
                                label: c.label
                            }, k = [ e ], L.push(k), h.append(e.element)) : (k = L[z], e = k[0], e.label != a && e.element.attr("label", e.label = a)), 
                            D = null, B = 0, u = c.length; u > B; B++) d = c[B], (l = k[B + 1]) ? (D = l.element, 
                            l.label !== d.label && (q(T, l.label, !1), q(T, d.label, !0), D.text(l.label = d.label), 
                            D.prop("label", l.label)), l.id !== d.id && D.val(l.id = d.id), D[0].selected !== d.selected && (D.prop("selected", l.selected = d.selected), 
                            Zd && D.prop("selected", l.selected))) : ("" === d.id && v ? G = v : (G = x.clone()).val(d.id).prop("selected", d.selected).attr("selected", d.selected).prop("label", d.label).text(d.label), 
                            k.push(l = {
                                element: G,
                                label: d.label,
                                id: d.id,
                                selected: d.selected
                            }), q(T, d.label, !0), D ? D.after(G) : e.element.append(G), D = G);
                            for (B++; k.length > B; ) d = k.pop(), q(T, d.label, !1), d.element.remove();
                        }
                        for (;L.length > z; ) {
                            for (c = L.pop(), B = 1; B < c.length; ++B) q(T, c[B].label, !1);
                            c[0].element.remove();
                        }
                        f(T, function(a, b) {
                            a > 0 ? p.addOption(b) : 0 > a && p.removeOption(b);
                        });
                    }
                    var z;
                    if (!(z = u.match(e))) throw Ig("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", u, T(h));
                    var A = d(z[2] || z[1]), B = z[4] || z[6], C = / as /.test(z[0]) && z[1], D = C ? d(C) : null, E = z[5], F = d(z[3] || ""), G = d(z[2] ? z[1] : B), H = d(z[7]), I = z[8], J = I ? d(z[8]) : null, K = {}, L = [ [ {
                        element: h,
                        label: ""
                    } ] ], M = {};
                    v && (a(v)(b), v.removeClass("ng-scope"), v.remove()), h.empty(), h.on("change", k), 
                    i.$render = r, b.$watchCollection(H, o), b.$watchCollection(m, o), t && b.$watchCollection(function() {
                        return i.$modelValue;
                    }, o);
                }
                if (k[1]) {
                    for (var o, p = k[0], q = k[1], t = j.multiple, u = j.ngOptions, v = !1, w = !1, x = $d(b.createElement("option")), y = $d(b.createElement("optgroup")), z = x.clone(), A = 0, B = i.children(), C = B.length; C > A; A++) if ("" === B[A].value) {
                        o = v = B.eq(A);
                        break;
                    }
                    p.init(q, v, z), t && (q.$isEmpty = function(a) {
                        return !a || 0 === a.length;
                    }), u ? n(h, i, q) : t ? m(h, i, q) : l(h, i, q, p);
                }
            }
        };
    } ], Lg = [ "$interpolate", function(a) {
        var b = {
            addOption: o,
            removeOption: o
        };
        return {
            restrict: "E",
            priority: 100,
            compile: function(c, d) {
                if (r(d.value)) {
                    var e = a(c.text(), !0);
                    e || d.$set("value", c.text());
                }
                return function(a, c, d) {
                    var f = "$selectController", g = c.parent(), h = g.data(f) || g.parent().data(f);
                    h && h.databound || (h = b), e ? a.$watch(e, function(a, b) {
                        d.$set("value", a), b !== a && h.removeOption(b), h.addOption(a, c);
                    }) : h.addOption(d.value, c), c.on("$destroy", function() {
                        h.removeOption(d.value);
                    });
                };
            }
        };
    } ], Mg = q({
        restrict: "E",
        terminal: !1
    }), Ng = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(a, b, c, d) {
                d && (c.required = !0, d.$validators.required = function(a, b) {
                    return !c.required || !d.$isEmpty(b);
                }, c.$observe("required", function() {
                    d.$validate();
                }));
            }
        };
    }, Og = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(a, b, e, f) {
                if (f) {
                    var g, h = e.ngPattern || e.pattern;
                    e.$observe("pattern", function(a) {
                        if (u(a) && a.length > 0 && (a = new RegExp("^" + a + "$")), a && !a.test) throw d("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", h, a, T(b));
                        g = a || c, f.$validate();
                    }), f.$validators.pattern = function(a) {
                        return f.$isEmpty(a) || r(g) || g.test(a);
                    };
                }
            }
        };
    }, Pg = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(a, b, c, d) {
                if (d) {
                    var e = -1;
                    c.$observe("maxlength", function(a) {
                        var b = m(a);
                        e = isNaN(b) ? -1 : b, d.$validate();
                    }), d.$validators.maxlength = function(a, b) {
                        return 0 > e || d.$isEmpty(a) || b.length <= e;
                    };
                }
            }
        };
    }, Qg = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(a, b, c, d) {
                if (d) {
                    var e = 0;
                    c.$observe("minlength", function(a) {
                        e = m(a) || 0, d.$validate();
                    }), d.$validators.minlength = function(a, b) {
                        return d.$isEmpty(b) || b.length >= e;
                    };
                }
            }
        };
    };
    return a.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (db(), 
    nb(ge), void $d(b).ready(function() {
        $(b, _);
    }));
}(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>'), 
function(a, b, c) {
    "use strict";
    function d(a) {
        return null != a && "" !== a && "hasOwnProperty" !== a && h.test("." + a);
    }
    function e(a, b) {
        if (!d(b)) throw g("badmember", 'Dotted member path "@{0}" is invalid.', b);
        for (var e = b.split("."), f = 0, h = e.length; h > f && a !== c; f++) {
            var i = e[f];
            a = null !== a ? a[i] : c;
        }
        return a;
    }
    function f(a, c) {
        c = c || {}, b.forEach(c, function(a, b) {
            delete c[b];
        });
        for (var d in a) !a.hasOwnProperty(d) || "$" === d.charAt(0) && "$" === d.charAt(1) || (c[d] = a[d]);
        return c;
    }
    var g = b.$$minErr("$resource"), h = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;
    b.module("ngResource", [ "ng" ]).provider("$resource", function() {
        var a = this;
        this.defaults = {
            stripTrailingSlashes: !0,
            actions: {
                get: {
                    method: "GET"
                },
                save: {
                    method: "POST"
                },
                query: {
                    method: "GET",
                    isArray: !0
                },
                remove: {
                    method: "DELETE"
                },
                "delete": {
                    method: "DELETE"
                }
            }
        }, this.$get = [ "$http", "$q", function(d, h) {
            function i(a) {
                return j(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
            }
            function j(a, b) {
                return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+");
            }
            function k(b, c) {
                this.template = b, this.defaults = o({}, a.defaults, c), this.urlParams = {};
            }
            function l(i, j, r, s) {
                function t(a, b) {
                    var c = {};
                    return b = o({}, j, b), n(b, function(b, d) {
                        q(b) && (b = b()), c[d] = b && b.charAt && "@" == b.charAt(0) ? e(a, b.substr(1)) : b;
                    }), c;
                }
                function u(a) {
                    return a.resource;
                }
                function v(a) {
                    f(a || {}, this);
                }
                var w = new k(i, s);
                return r = o({}, a.defaults.actions, r), v.prototype.toJSON = function() {
                    var a = o({}, this);
                    return delete a.$promise, delete a.$resolved, a;
                }, n(r, function(a, e) {
                    var i = /^(POST|PUT|PATCH)$/i.test(a.method);
                    v[e] = function(j, k, l, r) {
                        var s, x, y, z = {};
                        switch (arguments.length) {
                          case 4:
                            y = r, x = l;

                          case 3:
                          case 2:
                            if (!q(k)) {
                                z = j, s = k, x = l;
                                break;
                            }
                            if (q(j)) {
                                x = j, y = k;
                                break;
                            }
                            x = k, y = l;

                          case 1:
                            q(j) ? x = j : i ? s = j : z = j;
                            break;

                          case 0:
                            break;

                          default:
                            throw g("badargs", "Expected up to 4 arguments [params, data, success, error], got {0} arguments", arguments.length);
                        }
                        var A = this instanceof v, B = A ? s : a.isArray ? [] : new v(s), C = {}, D = a.interceptor && a.interceptor.response || u, E = a.interceptor && a.interceptor.responseError || c;
                        n(a, function(a, b) {
                            "params" != b && "isArray" != b && "interceptor" != b && (C[b] = p(a));
                        }), i && (C.data = s), w.setUrlParams(C, o({}, t(s, a.params || {}), z), a.url);
                        var F = d(C).then(function(c) {
                            var d = c.data, h = B.$promise;
                            if (d) {
                                if (b.isArray(d) !== !!a.isArray) throw g("badcfg", "Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2}", e, a.isArray ? "array" : "object", b.isArray(d) ? "array" : "object");
                                a.isArray ? (B.length = 0, n(d, function(a) {
                                    B.push("object" == typeof a ? new v(a) : a);
                                })) : (f(d, B), B.$promise = h);
                            }
                            return B.$resolved = !0, c.resource = B, c;
                        }, function(a) {
                            return B.$resolved = !0, (y || m)(a), h.reject(a);
                        });
                        return F = F.then(function(a) {
                            var b = D(a);
                            return (x || m)(b, a.headers), b;
                        }, E), A ? F : (B.$promise = F, B.$resolved = !1, B);
                    }, v.prototype["$" + e] = function(a, b, c) {
                        q(a) && (c = b, b = a, a = {});
                        var d = v[e].call(this, a, this, b, c);
                        return d.$promise || d;
                    };
                }), v.bind = function(a) {
                    return l(i, o({}, j, a), r);
                }, v;
            }
            var m = b.noop, n = b.forEach, o = b.extend, p = b.copy, q = b.isFunction;
            return k.prototype = {
                setUrlParams: function(a, c, d) {
                    var e, f, h = this, j = d || h.template, k = h.urlParams = {};
                    n(j.split(/\W/), function(a) {
                        if ("hasOwnProperty" === a) throw g("badname", "hasOwnProperty is not a valid parameter name.");
                        !new RegExp("^\\d+$").test(a) && a && new RegExp("(^|[^\\\\]):" + a + "(\\W|$)").test(j) && (k[a] = !0);
                    }), j = j.replace(/\\:/g, ":"), c = c || {}, n(h.urlParams, function(a, d) {
                        e = c.hasOwnProperty(d) ? c[d] : h.defaults[d], b.isDefined(e) && null !== e ? (f = i(e), 
                        j = j.replace(new RegExp(":" + d + "(\\W|$)", "g"), function(a, b) {
                            return f + b;
                        })) : j = j.replace(new RegExp("(/?):" + d + "(\\W|$)", "g"), function(a, b, c) {
                            return "/" == c.charAt(0) ? c : b + c;
                        });
                    }), h.defaults.stripTrailingSlashes && (j = j.replace(/\/+$/, "") || "/"), j = j.replace(/\/\.(?=\w+($|\?))/, "."), 
                    a.url = j.replace(/\/\\\./, "/."), n(c, function(b, c) {
                        h.urlParams[c] || (a.params = a.params || {}, a.params[c] = b);
                    });
                }
            }, l;
        } ];
    });
}(window, window.angular), function(a, b) {
    "use strict";
    function c() {
        function a(a, c) {
            return b.extend(Object.create(a), c);
        }
        function c(a, b) {
            var c = b.caseInsensitiveMatch, d = {
                originalPath: a,
                regexp: a
            }, e = d.keys = [];
            return a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function(a, b, c, d) {
                var f = "?" === d ? d : null, g = "*" === d ? d : null;
                return e.push({
                    name: c,
                    optional: !!f
                }), b = b || "", "" + (f ? "" : b) + "(?:" + (f ? b : "") + (g && "(.+?)" || "([^/]+)") + (f || "") + ")" + (f || "");
            }).replace(/([\/$\*])/g, "\\$1"), d.regexp = new RegExp("^" + a + "$", c ? "i" : ""), 
            d;
        }
        var d = {};
        this.when = function(a, e) {
            var f = b.copy(e);
            if (b.isUndefined(f.reloadOnSearch) && (f.reloadOnSearch = !0), b.isUndefined(f.caseInsensitiveMatch) && (f.caseInsensitiveMatch = this.caseInsensitiveMatch), 
            d[a] = b.extend(f, a && c(a, f)), a) {
                var g = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
                d[g] = b.extend({
                    redirectTo: a
                }, c(g, f));
            }
            return this;
        }, this.caseInsensitiveMatch = !1, this.otherwise = function(a) {
            return "string" == typeof a && (a = {
                redirectTo: a
            }), this.when(null, a), this;
        }, this.$get = [ "$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", function(c, e, f, g, i, j, k) {
            function l(a, b) {
                var c = b.keys, d = {};
                if (!b.regexp) return null;
                var e = b.regexp.exec(a);
                if (!e) return null;
                for (var f = 1, g = e.length; g > f; ++f) {
                    var h = c[f - 1], i = e[f];
                    h && i && (d[h.name] = i);
                }
                return d;
            }
            function m(a) {
                var d = t.current;
                q = o(), r = q && d && q.$$route === d.$$route && b.equals(q.pathParams, d.pathParams) && !q.reloadOnSearch && !s, 
                r || !d && !q || c.$broadcast("$routeChangeStart", q, d).defaultPrevented && a && a.preventDefault();
            }
            function n() {
                var a = t.current, d = q;
                r ? (a.params = d.params, b.copy(a.params, f), c.$broadcast("$routeUpdate", a)) : (d || a) && (s = !1, 
                t.current = d, d && d.redirectTo && (b.isString(d.redirectTo) ? e.path(p(d.redirectTo, d.params)).search(d.params).replace() : e.url(d.redirectTo(d.pathParams, e.path(), e.search())).replace()), 
                g.when(d).then(function() {
                    if (d) {
                        var a, c, e = b.extend({}, d.resolve);
                        return b.forEach(e, function(a, c) {
                            e[c] = b.isString(a) ? i.get(a) : i.invoke(a, null, null, c);
                        }), b.isDefined(a = d.template) ? b.isFunction(a) && (a = a(d.params)) : b.isDefined(c = d.templateUrl) && (b.isFunction(c) && (c = c(d.params)), 
                        c = k.getTrustedResourceUrl(c), b.isDefined(c) && (d.loadedTemplateUrl = c, a = j(c))), 
                        b.isDefined(a) && (e.$template = a), g.all(e);
                    }
                }).then(function(e) {
                    d == t.current && (d && (d.locals = e, b.copy(d.params, f)), c.$broadcast("$routeChangeSuccess", d, a));
                }, function(b) {
                    d == t.current && c.$broadcast("$routeChangeError", d, a, b);
                }));
            }
            function o() {
                var c, f;
                return b.forEach(d, function(d) {
                    !f && (c = l(e.path(), d)) && (f = a(d, {
                        params: b.extend({}, e.search(), c),
                        pathParams: c
                    }), f.$$route = d);
                }), f || d[null] && a(d[null], {
                    params: {},
                    pathParams: {}
                });
            }
            function p(a, c) {
                var d = [];
                return b.forEach((a || "").split(":"), function(a, b) {
                    if (0 === b) d.push(a); else {
                        var e = a.match(/(\w+)(?:[?*])?(.*)/), f = e[1];
                        d.push(c[f]), d.push(e[2] || ""), delete c[f];
                    }
                }), d.join("");
            }
            var q, r, s = !1, t = {
                routes: d,
                reload: function() {
                    s = !0, c.$evalAsync(function() {
                        m(), n();
                    });
                },
                updateParams: function(a) {
                    if (!this.current || !this.current.$$route) throw h("norout", "Tried updating route when with no current route");
                    var c = {}, d = this;
                    b.forEach(Object.keys(a), function(b) {
                        d.current.pathParams[b] || (c[b] = a[b]);
                    }), a = b.extend({}, this.current.params, a), e.path(p(this.current.$$route.originalPath, a)), 
                    e.search(b.extend({}, e.search(), c));
                }
            };
            return c.$on("$locationChangeStart", m), c.$on("$locationChangeSuccess", n), t;
        } ];
    }
    function d() {
        this.$get = function() {
            return {};
        };
    }
    function e(a, c, d) {
        return {
            restrict: "ECA",
            terminal: !0,
            priority: 400,
            transclude: "element",
            link: function(e, f, g, h, i) {
                function j() {
                    n && (d.cancel(n), n = null), l && (l.$destroy(), l = null), m && (n = d.leave(m), 
                    n.then(function() {
                        n = null;
                    }), m = null);
                }
                function k() {
                    var g = a.current && a.current.locals, h = g && g.$template;
                    if (b.isDefined(h)) {
                        var k = e.$new(), n = a.current, q = i(k, function(a) {
                            d.enter(a, null, m || f).then(function() {
                                !b.isDefined(o) || o && !e.$eval(o) || c();
                            }), j();
                        });
                        m = q, l = n.scope = k, l.$emit("$viewContentLoaded"), l.$eval(p);
                    } else j();
                }
                var l, m, n, o = g.autoscroll, p = g.onload || "";
                e.$on("$routeChangeSuccess", k), k();
            }
        };
    }
    function f(a, b, c) {
        return {
            restrict: "ECA",
            priority: -400,
            link: function(d, e) {
                var f = c.current, g = f.locals;
                e.html(g.$template);
                var h = a(e.contents());
                if (f.controller) {
                    g.$scope = d;
                    var i = b(f.controller, g);
                    f.controllerAs && (d[f.controllerAs] = i), e.data("$ngControllerController", i), 
                    e.children().data("$ngControllerController", i);
                }
                h(d);
            }
        };
    }
    var g = b.module("ngRoute", [ "ng" ]).provider("$route", c), h = b.$$minErr("ngRoute");
    g.provider("$routeParams", d), g.directive("ngView", e), g.directive("ngView", f), 
    e.$inject = [ "$route", "$anchorScroll", "$animate" ], f.$inject = [ "$compile", "$controller", "$route" ];
}(window, window.angular), function(a, b, c) {
    "use strict";
    b.module("ngAnimate", [ "ng" ]).directive("ngAnimateChildren", function() {
        var a = "$$ngAnimateChildren";
        return function(c, d, e) {
            var f = e.ngAnimateChildren;
            b.isString(f) && 0 === f.length ? d.data(a, !0) : c.$watch(f, function(b) {
                d.data(a, !!b);
            });
        };
    }).factory("$$animateReflow", [ "$$rAF", "$document", function(a, b) {
        var c = b[0].body;
        return function(b) {
            return a(function() {
                c.offsetWidth + 1;
                b();
            });
        };
    } ]).config([ "$provide", "$animateProvider", function(d, e) {
        function f(a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (c.nodeType == q) return c;
            }
        }
        function g(a) {
            return a && b.element(a);
        }
        function h(a) {
            return b.element(f(a));
        }
        function i(a, b) {
            return f(a) == f(b);
        }
        var j, k = b.noop, l = b.forEach, m = e.$$selectors, n = b.isArray, o = b.isString, p = b.isObject, q = 1, r = "$$ngAnimateState", s = "$$ngAnimateChildren", t = "ng-animate", u = {
            running: !0
        };
        d.decorator("$animate", [ "$delegate", "$$q", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", "$templateRequest", "$$jqLite", function(a, c, d, q, v, w, x, y, z, A) {
            function B(a, b) {
                var c = a.data(r) || {};
                return b && (c.running = !0, c.structural = !0, a.data(r, c)), c.disabled || c.running && c.structural;
            }
            function C(a) {
                var b, d = c.defer();
                return d.promise.$$cancelFn = function() {
                    b && b();
                }, x.$$postDigest(function() {
                    b = a(function() {
                        d.resolve();
                    });
                }), d.promise;
            }
            function D(a) {
                return p(a) ? (a.tempClasses && o(a.tempClasses) && (a.tempClasses = a.tempClasses.split(/\s+/)), 
                a) : void 0;
            }
            function E(a, b, c) {
                c = c || {};
                var d = {};
                l(c, function(a, b) {
                    l(b.split(" "), function(b) {
                        d[b] = a;
                    });
                });
                var e = Object.create(null);
                l((a.attr("class") || "").split(/\s+/), function(a) {
                    e[a] = !0;
                });
                var f = [], g = [];
                return l(b && b.classes || [], function(a, b) {
                    var c = e[b], h = d[b] || {};
                    a === !1 ? (c || "addClass" == h.event) && g.push(b) : a === !0 && (c && "removeClass" != h.event || f.push(b));
                }), f.length + g.length > 0 && [ f.join(" "), g.join(" ") ];
            }
            function F(a) {
                if (a) {
                    var b = [], c = {}, e = a.substr(1).split(".");
                    (q.transitions || q.animations) && b.push(d.get(m[""]));
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f], h = m[g];
                        h && !c[g] && (b.push(d.get(h)), c[g] = !0);
                    }
                    return b;
                }
            }
            function G(a, c, d, e) {
                function f(a, b) {
                    var c = a[b], d = a["before" + b.charAt(0).toUpperCase() + b.substr(1)];
                    return c || d ? ("leave" == b && (d = c, c = null), w.push({
                        event: b,
                        fn: c
                    }), t.push({
                        event: b,
                        fn: d
                    }), !0) : void 0;
                }
                function g(b, c, f) {
                    function g(a) {
                        if (c) {
                            if ((c[a] || k)(), ++m < h.length) return;
                            c = null;
                        }
                        f();
                    }
                    var h = [];
                    l(b, function(a) {
                        a.fn && h.push(a);
                    });
                    var m = 0;
                    l(h, function(b, f) {
                        var h = function() {
                            g(f);
                        };
                        switch (b.event) {
                          case "setClass":
                            c.push(b.fn(a, i, j, h, e));
                            break;

                          case "animate":
                            c.push(b.fn(a, d, e.from, e.to, h));
                            break;

                          case "addClass":
                            c.push(b.fn(a, i || d, h, e));
                            break;

                          case "removeClass":
                            c.push(b.fn(a, j || d, h, e));
                            break;

                          default:
                            c.push(b.fn(a, h, e));
                        }
                    }), c && 0 === c.length && f();
                }
                var h = a[0];
                if (h) {
                    e && (e.to = e.to || {}, e.from = e.from || {});
                    var i, j;
                    n(d) && (i = d[0], j = d[1], i ? j ? d = i + " " + j : (d = i, c = "addClass") : (d = j, 
                    c = "removeClass"));
                    var m = "setClass" == c, o = m || "addClass" == c || "removeClass" == c || "animate" == c, p = a.attr("class"), q = p + " " + d;
                    if (O(q)) {
                        var r = k, s = [], t = [], u = k, v = [], w = [], x = (" " + q).replace(/\s+/g, ".");
                        return l(F(x), function(a) {
                            var b = f(a, c);
                            !b && m && (f(a, "addClass"), f(a, "removeClass"));
                        }), {
                            node: h,
                            event: c,
                            className: d,
                            isClassBased: o,
                            isSetClassOperation: m,
                            applyStyles: function() {
                                e && a.css(b.extend(e.from || {}, e.to || {}));
                            },
                            before: function(a) {
                                r = a, g(t, s, function() {
                                    r = k, a();
                                });
                            },
                            after: function(a) {
                                u = a, g(w, v, function() {
                                    u = k, a();
                                });
                            },
                            cancel: function() {
                                s && (l(s, function(a) {
                                    (a || k)(!0);
                                }), r(!0)), v && (l(v, function(a) {
                                    (a || k)(!0);
                                }), u(!0));
                            }
                        };
                    }
                }
            }
            function H(a, c, d, e, f, g, h, i) {
                function m(b) {
                    var e = "$animate:" + b;
                    x && x[e] && x[e].length > 0 && w(function() {
                        d.triggerHandler(e, {
                            event: a,
                            className: c
                        });
                    });
                }
                function n() {
                    m("before");
                }
                function o() {
                    m("after");
                }
                function p() {
                    m("close"), i();
                }
                function q() {
                    q.hasBeenRun || (q.hasBeenRun = !0, g());
                }
                function s() {
                    if (!s.hasBeenRun) {
                        v && v.applyStyles(), s.hasBeenRun = !0, h && h.tempClasses && l(h.tempClasses, function(a) {
                            j.removeClass(d, a);
                        });
                        var b = d.data(r);
                        b && (v && v.isClassBased ? J(d, c) : (w(function() {
                            var b = d.data(r) || {};
                            H == b.index && J(d, c, a);
                        }), d.data(r, b))), p();
                    }
                }
                var u = k, v = G(d, a, c, h);
                if (!v) return q(), n(), o(), s(), u;
                a = v.event, c = v.className;
                var x = b.element._data(v.node);
                if (x = x && x.events, e || (e = f ? f.parent() : d.parent()), K(d, e)) return q(), 
                n(), o(), s(), u;
                var y = d.data(r) || {}, z = y.active || {}, A = y.totalActive || 0, B = y.last, C = !1;
                if (A > 0) {
                    var D = [];
                    if (v.isClassBased) {
                        if ("setClass" == B.event) D.push(B), J(d, c); else if (z[c]) {
                            var E = z[c];
                            E.event == a ? C = !0 : (D.push(E), J(d, c));
                        }
                    } else if ("leave" == a && z["ng-leave"]) C = !0; else {
                        for (var F in z) D.push(z[F]);
                        y = {}, J(d, !0);
                    }
                    D.length > 0 && l(D, function(a) {
                        a.cancel();
                    });
                }
                if (!v.isClassBased || v.isSetClassOperation || "animate" == a || C || (C = "addClass" == a == d.hasClass(c)), 
                C) return q(), n(), o(), p(), u;
                z = y.active || {}, A = y.totalActive || 0, "leave" == a && d.one("$destroy", function() {
                    var a = b.element(this), c = a.data(r);
                    if (c) {
                        var d = c.active["ng-leave"];
                        d && (d.cancel(), J(a, "ng-leave"));
                    }
                }), j.addClass(d, t), h && h.tempClasses && l(h.tempClasses, function(a) {
                    j.addClass(d, a);
                });
                var H = M++;
                return A++, z[c] = v, d.data(r, {
                    last: v,
                    active: z,
                    index: H,
                    totalActive: A
                }), n(), v.before(function(b) {
                    var e = d.data(r);
                    b = b || !e || !e.active[c] || v.isClassBased && e.active[c].event != a, q(), b === !0 ? s() : (o(), 
                    v.after(s));
                }), v.cancel;
            }
            function I(a) {
                var c = f(a);
                if (c) {
                    var d = b.isFunction(c.getElementsByClassName) ? c.getElementsByClassName(t) : c.querySelectorAll("." + t);
                    l(d, function(a) {
                        a = b.element(a);
                        var c = a.data(r);
                        c && c.active && l(c.active, function(a) {
                            a.cancel();
                        });
                    });
                }
            }
            function J(a, b) {
                if (i(a, v)) u.disabled || (u.running = !1, u.structural = !1); else if (b) {
                    var c = a.data(r) || {}, d = b === !0;
                    !d && c.active && c.active[b] && (c.totalActive--, delete c.active[b]), (d || !c.totalActive) && (j.removeClass(a, t), 
                    a.removeData(r));
                }
            }
            function K(a, c) {
                if (u.disabled) return !0;
                if (i(a, v)) return u.running;
                var d, e, f;
                do {
                    if (0 === c.length) break;
                    var g = i(c, v), h = g ? u : c.data(r) || {};
                    if (h.disabled) return !0;
                    if (g && (f = !0), d !== !1) {
                        var j = c.data(s);
                        b.isDefined(j) && (d = j);
                    }
                    e = e || h.running || h.last && !h.last.isClassBased;
                } while (c = c.parent());
                return !f || !d && e;
            }
            j = A, v.data(r, u);
            var L = x.$watch(function() {
                return z.totalPendingRequests;
            }, function(a) {
                0 === a && (L(), x.$$postDigest(function() {
                    x.$$postDigest(function() {
                        u.running = !1;
                    });
                }));
            }), M = 0, N = e.classNameFilter(), O = N ? function(a) {
                return N.test(a);
            } : function() {
                return !0;
            };
            return {
                animate: function(a, b, c, d, e) {
                    return d = d || "ng-inline-animate", e = D(e) || {}, e.from = c ? b : null, e.to = c ? c : b, 
                    C(function(b) {
                        return H("animate", d, h(a), null, null, k, e, b);
                    });
                },
                enter: function(c, d, e, f) {
                    return f = D(f), c = b.element(c), d = g(d), e = g(e), B(c, !0), a.enter(c, d, e), 
                    C(function(a) {
                        return H("enter", "ng-enter", h(c), d, e, k, f, a);
                    });
                },
                leave: function(c, d) {
                    return d = D(d), c = b.element(c), I(c), B(c, !0), C(function(b) {
                        return H("leave", "ng-leave", h(c), null, null, function() {
                            a.leave(c);
                        }, d, b);
                    });
                },
                move: function(c, d, e, f) {
                    return f = D(f), c = b.element(c), d = g(d), e = g(e), I(c), B(c, !0), a.move(c, d, e), 
                    C(function(a) {
                        return H("move", "ng-move", h(c), d, e, k, f, a);
                    });
                },
                addClass: function(a, b, c) {
                    return this.setClass(a, b, [], c);
                },
                removeClass: function(a, b, c) {
                    return this.setClass(a, [], b, c);
                },
                setClass: function(c, d, e, g) {
                    g = D(g);
                    var i = "$$animateClasses";
                    if (c = b.element(c), c = h(c), B(c)) return a.$$setClassImmediately(c, d, e, g);
                    var j, k = c.data(i), m = !!k;
                    return k || (k = {}, k.classes = {}), j = k.classes, d = n(d) ? d : d.split(" "), 
                    l(d, function(a) {
                        a && a.length && (j[a] = !0);
                    }), e = n(e) ? e : e.split(" "), l(e, function(a) {
                        a && a.length && (j[a] = !1);
                    }), m ? (g && k.options && (k.options = b.extend(k.options || {}, g)), k.promise) : (c.data(i, k = {
                        classes: j,
                        options: g
                    }), k.promise = C(function(b) {
                        var d = c.parent(), e = f(c), g = e.parentNode;
                        if (!g || g.$$NG_REMOVED || e.$$NG_REMOVED) return void b();
                        var h = c.data(i);
                        c.removeData(i);
                        var j = c.data(r) || {}, k = E(c, h, j.active);
                        return k ? H("setClass", k, c, d, null, function() {
                            k[0] && a.$$addClassImmediately(c, k[0]), k[1] && a.$$removeClassImmediately(c, k[1]);
                        }, h.options, b) : b();
                    }));
                },
                cancel: function(a) {
                    a.$$cancelFn();
                },
                enabled: function(a, b) {
                    switch (arguments.length) {
                      case 2:
                        if (a) J(b); else {
                            var c = b.data(r) || {};
                            c.disabled = !0, b.data(r, c);
                        }
                        break;

                      case 1:
                        u.disabled = !a;
                        break;

                      default:
                        a = !u.disabled;
                    }
                    return !!a;
                }
            };
        } ]), e.register("", [ "$window", "$sniffer", "$timeout", "$$animateReflow", function(d, e, g, h) {
            function i() {
                J || (J = h(function() {
                    W = [], J = null, U = {};
                }));
            }
            function m(a, b) {
                J && J(), W.push(b), J = h(function() {
                    l(W, function(a) {
                        a();
                    }), W = [], J = null, U = {};
                });
            }
            function p(a, c) {
                var d = f(a);
                a = b.element(d), Z.push(a);
                var e = Date.now() + c;
                Y >= e || (g.cancel(X), Y = e, X = g(function() {
                    r(Z), Z = [];
                }, c, !1));
            }
            function r(a) {
                l(a, function(a) {
                    var b = a.data(Q);
                    b && l(b.closeAnimationFns, function(a) {
                        a();
                    });
                });
            }
            function s(a, b) {
                var c = b ? U[b] : null;
                if (!c) {
                    var e = 0, f = 0, g = 0, h = 0;
                    l(a, function(a) {
                        if (a.nodeType == q) {
                            var b = d.getComputedStyle(a) || {}, c = b[E + K];
                            e = Math.max(t(c), e);
                            var i = b[E + M];
                            f = Math.max(t(i), f);
                            {
                                b[G + M];
                            }
                            h = Math.max(t(b[G + M]), h);
                            var j = t(b[G + K]);
                            j > 0 && (j *= parseInt(b[G + N], 10) || 1), g = Math.max(j, g);
                        }
                    }), c = {
                        total: 0,
                        transitionDelay: f,
                        transitionDuration: e,
                        animationDelay: h,
                        animationDuration: g
                    }, b && (U[b] = c);
                }
                return c;
            }
            function t(a) {
                var b = 0, c = o(a) ? a.split(/\s*,\s*/) : [];
                return l(c, function(a) {
                    b = Math.max(parseFloat(a) || 0, b);
                }), b;
            }
            function u(a) {
                var b = a.parent(), c = b.data(P);
                return c || (b.data(P, ++V), c = V), c + "-" + f(a).getAttribute("class");
            }
            function v(a, b, c, d) {
                var e = [ "ng-enter", "ng-leave", "ng-move" ].indexOf(c) >= 0, g = u(b), h = g + " " + c, i = U[h] ? ++U[h].total : 0, k = {};
                if (i > 0) {
                    var l = c + "-stagger", m = g + " " + l, n = !U[m];
                    n && j.addClass(b, l), k = s(b, m), n && j.removeClass(b, l);
                }
                j.addClass(b, c);
                var o = b.data(Q) || {}, p = s(b, h), q = p.transitionDuration, r = p.animationDuration;
                if (e && 0 === q && 0 === r) return j.removeClass(b, c), !1;
                var t = d || e && q > 0, v = r > 0 && k.animationDelay > 0 && 0 === k.animationDuration, w = o.closeAnimationFns || [];
                b.data(Q, {
                    stagger: k,
                    cacheKey: h,
                    running: o.running || 0,
                    itemIndex: i,
                    blockTransition: t,
                    closeAnimationFns: w
                });
                var z = f(b);
                return t && (x(z, !0), d && b.css(d)), v && y(z, !0), !0;
            }
            function w(a, b, c, d, e) {
                function h() {
                    b.off(M, i), j.removeClass(b, n), j.removeClass(b, o), K && g.cancel(K), C(b, c);
                    var a = f(b);
                    for (var d in r) a.style.removeProperty(r[d]);
                }
                function i(a) {
                    a.stopPropagation();
                    var b = a.originalEvent || a, c = b.$manualTimeStamp || b.timeStamp || Date.now(), e = parseFloat(b.elapsedTime.toFixed(R));
                    Math.max(c - L, 0) >= G && e >= D && d();
                }
                var k = f(b), m = b.data(Q);
                if (-1 == k.getAttribute("class").indexOf(c) || !m) return void d();
                var n = "", o = "";
                l(c.split(" "), function(a, b) {
                    var c = (b > 0 ? " " : "") + a;
                    n += c + "-active", o += c + "-pending";
                });
                var q = "", r = [], t = m.itemIndex, u = m.stagger, v = 0;
                if (t > 0) {
                    var w = 0;
                    u.transitionDelay > 0 && 0 === u.transitionDuration && (w = u.transitionDelay * t);
                    var z = 0;
                    u.animationDelay > 0 && 0 === u.animationDuration && (z = u.animationDelay * t, 
                    r.push(I + "animation-play-state")), v = Math.round(100 * Math.max(w, z)) / 100;
                }
                v || (j.addClass(b, n), m.blockTransition && x(k, !1));
                var A = m.cacheKey + " " + n, B = s(b, A), D = Math.max(B.transitionDuration, B.animationDuration);
                if (0 === D) return j.removeClass(b, n), C(b, c), void d();
                !v && e && Object.keys(e).length > 0 && (B.transitionDuration || (b.css("transition", B.animationDuration + "s linear all"), 
                r.push("transition")), b.css(e));
                var E = Math.max(B.transitionDelay, B.animationDelay), G = E * T;
                if (r.length > 0) {
                    var J = k.getAttribute("style") || "";
                    ";" !== J.charAt(J.length - 1) && (J += ";"), k.setAttribute("style", J + " " + q);
                }
                var K, L = Date.now(), M = H + " " + F, N = (E + D) * S, O = (v + N) * T;
                return v > 0 && (j.addClass(b, o), K = g(function() {
                    K = null, B.transitionDuration > 0 && x(k, !1), B.animationDuration > 0 && y(k, !1), 
                    j.addClass(b, n), j.removeClass(b, o), e && (0 === B.transitionDuration && b.css("transition", B.animationDuration + "s linear all"), 
                    b.css(e), r.push("transition"));
                }, v * T, !1)), b.on(M, i), m.closeAnimationFns.push(function() {
                    h(), d();
                }), m.running++, p(b, O), h;
            }
            function x(a, b) {
                a.style[E + L] = b ? "none" : "";
            }
            function y(a, b) {
                a.style[G + O] = b ? "paused" : "";
            }
            function z(a, b, c, d) {
                return v(a, b, c, d) ? function(a) {
                    a && C(b, c);
                } : void 0;
            }
            function A(a, b, c, d, e) {
                return b.data(Q) ? w(a, b, c, d, e) : (C(b, c), void d());
            }
            function B(a, b, c, d, e) {
                var f = z(a, b, c, e.from);
                if (!f) return i(), void d();
                var g = f;
                return m(b, function() {
                    g = A(a, b, c, d, e.to);
                }), function(a) {
                    (g || k)(a);
                };
            }
            function C(a, b) {
                j.removeClass(a, b);
                var c = a.data(Q);
                c && (c.running && c.running--, c.running && 0 !== c.running || a.removeData(Q));
            }
            function D(a, b) {
                var c = "";
                return a = n(a) ? a : a.split(/\s+/), l(a, function(a, d) {
                    a && a.length > 0 && (c += (d > 0 ? " " : "") + a + b);
                }), c;
            }
            var E, F, G, H, I = "";
            a.ontransitionend === c && a.onwebkittransitionend !== c ? (I = "-webkit-", E = "WebkitTransition", 
            F = "webkitTransitionEnd transitionend") : (E = "transition", F = "transitionend"), 
            a.onanimationend === c && a.onwebkitanimationend !== c ? (I = "-webkit-", G = "WebkitAnimation", 
            H = "webkitAnimationEnd animationend") : (G = "animation", H = "animationend");
            var J, K = "Duration", L = "Property", M = "Delay", N = "IterationCount", O = "PlayState", P = "$$ngAnimateKey", Q = "$$ngAnimateCSS3Data", R = 3, S = 1.5, T = 1e3, U = {}, V = 0, W = [], X = null, Y = 0, Z = [];
            return {
                animate: function(a, b, c, d, e, f) {
                    return f = f || {}, f.from = c, f.to = d, B("animate", a, b, e, f);
                },
                enter: function(a, b, c) {
                    return c = c || {}, B("enter", a, "ng-enter", b, c);
                },
                leave: function(a, b, c) {
                    return c = c || {}, B("leave", a, "ng-leave", b, c);
                },
                move: function(a, b, c) {
                    return c = c || {}, B("move", a, "ng-move", b, c);
                },
                beforeSetClass: function(a, b, c, d, e) {
                    e = e || {};
                    var f = D(c, "-remove") + " " + D(b, "-add"), g = z("setClass", a, f, e.from);
                    return g ? (m(a, d), g) : (i(), void d());
                },
                beforeAddClass: function(a, b, c, d) {
                    d = d || {};
                    var e = z("addClass", a, D(b, "-add"), d.from);
                    return e ? (m(a, c), e) : (i(), void c());
                },
                beforeRemoveClass: function(a, b, c, d) {
                    d = d || {};
                    var e = z("removeClass", a, D(b, "-remove"), d.from);
                    return e ? (m(a, c), e) : (i(), void c());
                },
                setClass: function(a, b, c, d, e) {
                    e = e || {}, c = D(c, "-remove"), b = D(b, "-add");
                    var f = c + " " + b;
                    return A("setClass", a, f, d, e.to);
                },
                addClass: function(a, b, c, d) {
                    return d = d || {}, A("addClass", a, D(b, "-add"), c, d.to);
                },
                removeClass: function(a, b, c, d) {
                    return d = d || {}, A("removeClass", a, D(b, "-remove"), c, d.to);
                }
            };
        } ]);
    } ]);
}(window, window.angular), function(a, b, c) {
    "use strict";
    function d(a) {
        return D(a) ? a : Object.keys(a).map(function(b) {
            return a[b];
        });
    }
    function e(a) {
        return null === a;
    }
    function f(a, b) {
        var d = Object.keys(a);
        return -1 == d.map(function(d) {
            return b[d] !== c && b[d] == a[d];
        }).indexOf(!1);
    }
    function g(a, b) {
        if ("" === b) return a;
        var c = a.indexOf(b.charAt(0));
        return -1 === c ? !1 : g(a.substr(c + 1), b.substr(1));
    }
    function h(a, b, c) {
        var d = 0;
        return a.filter(function(a) {
            var e = x(c) ? b > d && c(a) : b > d;
            return d = e ? d + 1 : d, e;
        });
    }
    function i(a, b, c) {
        return c.round(a * c.pow(10, b)) / c.pow(10, b);
    }
    function j(a, b, c) {
        b = b || [];
        var d = Object.keys(a);
        return d.forEach(function(d) {
            if (C(a[d]) && !D(a[d])) {
                var e = c ? c + "." + d : c;
                j(a[d], b, e || d);
            } else {
                var f = c ? c + "." + d : d;
                b.push(f);
            }
        }), b;
    }
    function k(a) {
        return a && a.$evalAsync && a.$watch;
    }
    function l() {
        return function(a, b) {
            return a > b;
        };
    }
    function m() {
        return function(a, b) {
            return a >= b;
        };
    }
    function n() {
        return function(a, b) {
            return b > a;
        };
    }
    function o() {
        return function(a, b) {
            return b >= a;
        };
    }
    function p() {
        return function(a, b) {
            return a == b;
        };
    }
    function q() {
        return function(a, b) {
            return a != b;
        };
    }
    function r() {
        return function(a, b) {
            return a === b;
        };
    }
    function s() {
        return function(a, b) {
            return a !== b;
        };
    }
    function t(a) {
        return function(b, c) {
            return b = C(b) ? d(b) : b, !D(b) || y(c) ? !1 : b.some(function(b) {
                return C(b) || z(c) ? a(c)(b) : b === c;
            });
        };
    }
    function u(a, b) {
        return b = b || 0, b >= a.length ? a : D(a[b]) ? u(a.slice(0, b).concat(a[b], a.slice(b + 1)), b) : u(a, b + 1);
    }
    function v(a) {
        return function(b, c) {
            function e(a, b) {
                return y(b) ? !1 : a.some(function(a) {
                    return H(a, b);
                });
            }
            if (b = C(b) ? d(b) : b, !D(b)) return b;
            var f = [], g = a(c);
            return b.filter(y(c) ? function(a, b, c) {
                return c.indexOf(a) === b;
            } : function(a) {
                var b = g(a);
                return e(f, b) ? !1 : (f.push(b), !0);
            });
        };
    }
    function w(a, b, c) {
        return b ? a + c + w(a, --b, c) : a;
    }
    var x = b.isDefined, y = b.isUndefined, z = b.isFunction, A = b.isString, B = b.isNumber, C = b.isObject, D = b.isArray, E = b.forEach, F = b.extend, G = b.copy, H = b.equals;
    String.prototype.contains || (String.prototype.contains = function() {
        return -1 !== String.prototype.indexOf.apply(this, arguments);
    }), b.module("a8m.angular", []).filter("isUndefined", function() {
        return function(a) {
            return b.isUndefined(a);
        };
    }).filter("isDefined", function() {
        return function(a) {
            return b.isDefined(a);
        };
    }).filter("isFunction", function() {
        return function(a) {
            return b.isFunction(a);
        };
    }).filter("isString", function() {
        return function(a) {
            return b.isString(a);
        };
    }).filter("isNumber", function() {
        return function(a) {
            return b.isNumber(a);
        };
    }).filter("isArray", function() {
        return function(a) {
            return b.isArray(a);
        };
    }).filter("isObject", function() {
        return function(a) {
            return b.isObject(a);
        };
    }).filter("isEqual", function() {
        return function(a, c) {
            return b.equals(a, c);
        };
    }), b.module("a8m.conditions", []).filter({
        isGreaterThan: l,
        ">": l,
        isGreaterThanOrEqualTo: m,
        ">=": m,
        isLessThan: n,
        "<": n,
        isLessThanOrEqualTo: o,
        "<=": o,
        isEqualTo: p,
        "==": p,
        isNotEqualTo: q,
        "!=": q,
        isIdenticalTo: r,
        "===": r,
        isNotIdenticalTo: s,
        "!==": s
    }), b.module("a8m.is-null", []).filter("isNull", function() {
        return function(a) {
            return e(a);
        };
    }), b.module("a8m.after-where", []).filter("afterWhere", function() {
        return function(a, b) {
            if (a = C(a) ? d(a) : a, !D(a) || y(b)) return a;
            var c = a.map(function(a) {
                return f(b, a);
            }).indexOf(!0);
            return a.slice(-1 === c ? 0 : c);
        };
    }), b.module("a8m.after", []).filter("after", function() {
        return function(a, b) {
            return a = C(a) ? d(a) : a, D(a) ? a.slice(b) : a;
        };
    }), b.module("a8m.before-where", []).filter("beforeWhere", function() {
        return function(a, b) {
            if (a = C(a) ? d(a) : a, !D(a) || y(b)) return a;
            var c = a.map(function(a) {
                return f(b, a);
            }).indexOf(!0);
            return a.slice(0, -1 === c ? a.length : ++c);
        };
    }), b.module("a8m.before", []).filter("before", function() {
        return function(a, b) {
            return a = C(a) ? d(a) : a, D(a) ? a.slice(0, b ? --b : b) : a;
        };
    }), b.module("a8m.concat", []).filter("concat", [ function() {
        return function(a, b) {
            if (y(b)) return a;
            if (D(a)) return a.concat(C(b) ? d(b) : b);
            if (C(a)) {
                var c = d(a);
                return c.concat(C(b) ? d(b) : b);
            }
            return a;
        };
    } ]), b.module("a8m.contains", []).filter({
        contains: [ "$parse", t ],
        some: [ "$parse", t ]
    }), b.module("a8m.count-by", []).filter("countBy", [ "$parse", function(a) {
        return function(b, c) {
            var e, f = {}, g = a(c);
            return b = C(b) ? d(b) : b, !D(b) || y(c) ? b : (b.forEach(function(a) {
                e = g(a), f[e] || (f[e] = 0), f[e]++;
            }), f);
        };
    } ]), b.module("a8m.defaults", []).filter("defaults", [ "$parse", function(a) {
        return function(b, c) {
            if (b = C(b) ? d(b) : b, !D(b) || !C(c)) return b;
            var e = j(c);
            return b.forEach(function(b) {
                e.forEach(function(d) {
                    var e = a(d), f = e.assign;
                    y(e(b)) && f(b, e(c));
                });
            }), b;
        };
    } ]), b.module("a8m.every", []).filter("every", [ "$parse", function(a) {
        return function(b, c) {
            return b = C(b) ? d(b) : b, !D(b) || y(c) ? !0 : b.every(function(b) {
                return C(b) || z(c) ? a(c)(b) : b === c;
            });
        };
    } ]), b.module("a8m.filter-by", []).filter("filterBy", [ "$parse", function(a) {
        return function(b, e, f) {
            var g;
            return f = A(f) || B(f) ? String(f).toLowerCase() : c, b = C(b) ? d(b) : b, !D(b) || y(f) ? b : b.filter(function(b) {
                return e.some(function(c) {
                    if (~c.indexOf("+")) {
                        var d = c.replace(new RegExp("\\s", "g"), "").split("+");
                        g = d.reduce(function(c, d, e) {
                            return 1 === e ? a(c)(b) + " " + a(d)(b) : c + " " + a(d)(b);
                        });
                    } else g = a(c)(b);
                    return A(g) || B(g) ? String(g).toLowerCase().contains(f) : !1;
                });
            });
        };
    } ]), b.module("a8m.first", []).filter("first", [ "$parse", function(a) {
        return function(b) {
            var e, f, g;
            return b = C(b) ? d(b) : b, D(b) ? (g = Array.prototype.slice.call(arguments, 1), 
            e = B(g[0]) ? g[0] : 1, f = B(g[0]) ? B(g[1]) ? c : g[1] : g[0], g.length ? h(b, e, f ? a(f) : f) : b[0]) : b;
        };
    } ]), b.module("a8m.flatten", []).filter("flatten", function() {
        return function(a, b) {
            return b = b || !1, a = C(a) ? d(a) : a, D(a) ? b ? [].concat.apply([], a) : u(a, 0) : a;
        };
    }), b.module("a8m.fuzzy-by", []).filter("fuzzyBy", [ "$parse", function(a) {
        return function(b, c, e, f) {
            var h, i, j = f || !1;
            return b = C(b) ? d(b) : b, !D(b) || y(c) || y(e) ? b : (i = a(c), b.filter(function(a) {
                return h = i(a), A(h) ? (h = j ? h : h.toLowerCase(), e = j ? e : e.toLowerCase(), 
                g(h, e) !== !1) : !1;
            }));
        };
    } ]), b.module("a8m.fuzzy", []).filter("fuzzy", function() {
        return function(a, b, c) {
            function e(a, b) {
                var c, d, e = Object.keys(a);
                return 0 < e.filter(function(e) {
                    return c = a[e], d ? !0 : A(c) ? (c = f ? c : c.toLowerCase(), d = g(c, b) !== !1) : !1;
                }).length;
            }
            var f = c || !1;
            return a = C(a) ? d(a) : a, !D(a) || y(b) ? a : (b = f ? b : b.toLowerCase(), a.filter(function(a) {
                return A(a) ? (a = f ? a : a.toLowerCase(), g(a, b) !== !1) : C(a) ? e(a, b) : !1;
            }));
        };
    }), b.module("a8m.group-by", [ "a8m.filter-watcher" ]).filter("groupBy", [ "$parse", "filterWatcher", function(a, b) {
        return function(c, d) {
            function e(a, b) {
                var c, d = {};
                return E(a, function(a) {
                    c = b(a), d[c] || (d[c] = []), d[c].push(a);
                }), d;
            }
            if (!C(c) || y(d)) return c;
            var f = a(d);
            return b.isMemoized("groupBy", arguments) || b.memoize("groupBy", arguments, this, e(c, f));
        };
    } ]), b.module("a8m.is-empty", []).filter("isEmpty", function() {
        return function(a) {
            return C(a) ? !d(a).length : !a.length;
        };
    }), b.module("a8m.join", []).filter("join", function() {
        return function(a, b) {
            return y(a) || !D(a) ? a : (y(b) && (b = " "), a.join(b));
        };
    }), b.module("a8m.last", []).filter("last", [ "$parse", function(a) {
        return function(b) {
            var e, f, g, i = G(b);
            return i = C(i) ? d(i) : i, D(i) ? (g = Array.prototype.slice.call(arguments, 1), 
            e = B(g[0]) ? g[0] : 1, f = B(g[0]) ? B(g[1]) ? c : g[1] : g[0], g.length ? h(i.reverse(), e, f ? a(f) : f).reverse() : i[i.length - 1]) : i;
        };
    } ]), b.module("a8m.map", []).filter("map", [ "$parse", function(a) {
        return function(b, c) {
            return b = C(b) ? d(b) : b, !D(b) || y(c) ? b : b.map(function(b) {
                return a(c)(b);
            });
        };
    } ]), b.module("a8m.omit", []).filter("omit", [ "$parse", function(a) {
        return function(b, c) {
            return b = C(b) ? d(b) : b, !D(b) || y(c) ? b : b.filter(function(b) {
                return !a(c)(b);
            });
        };
    } ]), b.module("a8m.pick", []).filter("pick", [ "$parse", function(a) {
        return function(b, c) {
            return b = C(b) ? d(b) : b, !D(b) || y(c) ? b : b.filter(function(b) {
                return a(c)(b);
            });
        };
    } ]), b.module("a8m.remove-with", []).filter("removeWith", function() {
        return function(a, b) {
            return y(b) ? a : (a = C(a) ? d(a) : a, a.filter(function(a) {
                return !f(b, a);
            }));
        };
    }), b.module("a8m.remove", []).filter("remove", function() {
        return function(a) {
            a = C(a) ? d(a) : a;
            var b = Array.prototype.slice.call(arguments, 1);
            return D(a) ? a.filter(function(a) {
                return !b.some(function(b) {
                    return H(b, a);
                });
            }) : a;
        };
    }), b.module("a8m.reverse", []).filter("reverse", [ function() {
        return function(a) {
            return a = C(a) ? d(a) : a, A(a) ? a.split("").reverse().join("") : D(a) ? a.slice().reverse() : a;
        };
    } ]), b.module("a8m.search-field", []).filter("searchField", [ "$parse", function(a) {
        return function(b) {
            var c, e;
            b = C(b) ? d(b) : b;
            var f = Array.prototype.slice.call(arguments, 1);
            return D(b) && f.length ? b.map(function(b) {
                return e = f.map(function(d) {
                    return (c = a(d))(b);
                }).join(" "), F(b, {
                    searchField: e
                });
            }) : b;
        };
    } ]), b.module("a8m.to-array", []).filter("toArray", function() {
        return function(a, b) {
            return C(a) ? b ? Object.keys(a).map(function(b) {
                return F(a[b], {
                    $key: b
                });
            }) : d(a) : a;
        };
    }), b.module("a8m.unique", []).filter({
        unique: [ "$parse", v ],
        uniq: [ "$parse", v ]
    }), b.module("a8m.where", []).filter("where", function() {
        return function(a, b) {
            return y(b) ? a : (a = C(a) ? d(a) : a, a.filter(function(a) {
                return f(b, a);
            }));
        };
    }), b.module("a8m.xor", []).filter("xor", [ "$parse", function(a) {
        return function(b, c, e) {
            function f(b, c) {
                var d = a(e);
                return c.some(function(a) {
                    return e ? H(d(a), d(b)) : H(a, b);
                });
            }
            return e = e || !1, b = C(b) ? d(b) : b, c = C(c) ? d(c) : c, D(b) && D(c) ? b.concat(c).filter(function(a) {
                return !(f(a, b) && f(a, c));
            }) : b;
        };
    } ]), b.module("a8m.math.byteFmt", [ "a8m.math" ]).filter("byteFmt", [ "$math", function(a) {
        return function(b, c) {
            return B(c) && isFinite(c) && c % 1 === 0 && c >= 0 && B(b) && isFinite(b) ? 1024 > b ? i(b, c, a) + " B" : 1048576 > b ? i(b / 1024, c, a) + " KB" : 1073741824 > b ? i(b / 1048576, c, a) + " MB" : i(b / 1073741824, c, a) + " GB" : "NaN";
        };
    } ]), b.module("a8m.math.degrees", [ "a8m.math" ]).filter("degrees", [ "$math", function(a) {
        return function(b, c) {
            if (B(c) && isFinite(c) && c % 1 === 0 && c >= 0 && B(b) && isFinite(b)) {
                var d = 180 * b / a.PI;
                return a.round(d * a.pow(10, c)) / a.pow(10, c);
            }
            return "NaN";
        };
    } ]), b.module("a8m.math.kbFmt", [ "a8m.math" ]).filter("kbFmt", [ "$math", function(a) {
        return function(b, c) {
            return B(c) && isFinite(c) && c % 1 === 0 && c >= 0 && B(b) && isFinite(b) ? 1024 > b ? i(b, c, a) + " KB" : 1048576 > b ? i(b / 1024, c, a) + " MB" : i(b / 1048576, c, a) + " GB" : "NaN";
        };
    } ]), b.module("a8m.math", []).factory("$math", [ "$window", function(a) {
        return a.Math;
    } ]), b.module("a8m.math.max", [ "a8m.math" ]).filter("max", [ "$math", "$parse", function(a, b) {
        function c(c, d) {
            var e = c.map(function(a) {
                return b(d)(a);
            });
            return e.indexOf(a.max.apply(a, e));
        }
        return function(b, d) {
            return D(b) ? y(d) ? a.max.apply(a, b) : b[c(b, d)] : b;
        };
    } ]), b.module("a8m.math.min", [ "a8m.math" ]).filter("min", [ "$math", "$parse", function(a, b) {
        function c(c, d) {
            var e = c.map(function(a) {
                return b(d)(a);
            });
            return e.indexOf(a.min.apply(a, e));
        }
        return function(b, d) {
            return D(b) ? y(d) ? a.min.apply(a, b) : b[c(b, d)] : b;
        };
    } ]), b.module("a8m.math.percent", [ "a8m.math" ]).filter("percent", [ "$math", "$window", function(a, b) {
        return function(c, d, e) {
            var f = A(c) ? b.Number(c) : c;
            return d = d || 100, e = e || !1, !B(f) || b.isNaN(f) ? c : e ? a.round(f / d * 100) : f / d * 100;
        };
    } ]), b.module("a8m.math.radians", [ "a8m.math" ]).filter("radians", [ "$math", function(a) {
        return function(b, c) {
            if (B(c) && isFinite(c) && c % 1 === 0 && c >= 0 && B(b) && isFinite(b)) {
                var d = 3.14159265359 * b / 180;
                return a.round(d * a.pow(10, c)) / a.pow(10, c);
            }
            return "NaN";
        };
    } ]), b.module("a8m.math.radix", []).filter("radix", function() {
        return function(a, b) {
            var c = /^[2-9]$|^[1-2]\d$|^3[0-6]$/;
            return B(a) && c.test(b) ? a.toString(b).toUpperCase() : a;
        };
    }), b.module("a8m.math.shortFmt", [ "a8m.math" ]).filter("shortFmt", [ "$math", function(a) {
        return function(b, c) {
            return B(c) && isFinite(c) && c % 1 === 0 && c >= 0 && B(b) && isFinite(b) ? 1e3 > b ? b : 1e6 > b ? i(b / 1e3, c, a) + " K" : 1e9 > b ? i(b / 1e6, c, a) + " M" : i(b / 1e9, c, a) + " B" : "NaN";
        };
    } ]), b.module("a8m.math.sum", []).filter("sum", function() {
        return function(a, b) {
            return D(a) ? a.reduce(function(a, b) {
                return a + b;
            }, b || 0) : a;
        };
    }), b.module("a8m.ends-with", []).filter("endsWith", function() {
        return function(a, b, c) {
            var d, e = c || !1;
            return !A(a) || y(b) ? a : (a = e ? a : a.toLowerCase(), d = a.length - b.length, 
            -1 !== a.indexOf(e ? b : b.toLowerCase(), d));
        };
    }), b.module("a8m.ltrim", []).filter("ltrim", function() {
        return function(a, b) {
            var c = b || "\\s";
            return A(a) ? a.replace(new RegExp("^" + c + "+"), "") : a;
        };
    }), b.module("a8m.repeat", []).filter("repeat", [ function() {
        return function(a, b, c) {
            var d = ~~b;
            return A(a) && d ? w(a, --b, c || "") : a;
        };
    } ]), b.module("a8m.rtrim", []).filter("rtrim", function() {
        return function(a, b) {
            var c = b || "\\s";
            return A(a) ? a.replace(new RegExp(c + "+$"), "") : a;
        };
    }), b.module("a8m.slugify", []).filter("slugify", [ function() {
        return function(a, b) {
            var c = y(b) ? "-" : b;
            return A(a) ? a.toLowerCase().replace(/\s+/g, c) : a;
        };
    } ]), b.module("a8m.starts-with", []).filter("startsWith", function() {
        return function(a, b, c) {
            var d = c || !1;
            return !A(a) || y(b) ? a : (a = d ? a : a.toLowerCase(), !a.indexOf(d ? b : b.toLowerCase()));
        };
    }), b.module("a8m.stringular", []).filter("stringular", function() {
        return function(a) {
            var b = Array.prototype.slice.call(arguments, 1);
            return a.replace(/{(\d+)}/g, function(a, c) {
                return y(b[c]) ? a : b[c];
            });
        };
    }), b.module("a8m.strip-tags", []).filter("stripTags", function() {
        return function(a) {
            return A(a) ? a.replace(/<\S[^><]*>/g, "") : a;
        };
    }), b.module("a8m.trim", []).filter("trim", function() {
        return function(a, b) {
            var c = b || "\\s";
            return A(a) ? a.replace(new RegExp("^" + c + "+|" + c + "+$", "g"), "") : a;
        };
    }), b.module("a8m.truncate", []).filter("truncate", function() {
        return function(a, b, c, d) {
            return b = y(b) ? a.length : b, d = d || !1, c = c || "", !A(a) || a.length <= b ? a : a.substring(0, d ? -1 === a.indexOf(" ", b) ? a.length : a.indexOf(" ", b) : b) + c;
        };
    }), b.module("a8m.ucfirst", []).filter("ucfirst", [ function() {
        return function(a) {
            return A(a) ? a.split(" ").map(function(a) {
                return a.charAt(0).toUpperCase() + a.substring(1);
            }).join(" ") : a;
        };
    } ]), b.module("a8m.uri-component-encode", []).filter("uriComponentEncode", [ "$window", function(a) {
        return function(b) {
            return A(b) ? a.encodeURIComponent(b) : b;
        };
    } ]), b.module("a8m.uri-encode", []).filter("uriEncode", [ "$window", function(a) {
        return function(b) {
            return A(b) ? a.encodeURI(b) : b;
        };
    } ]), b.module("a8m.wrap", []).filter("wrap", function() {
        return function(a, b, c) {
            return !A(a) || y(b) ? a : [ b, a, c || b ].join("");
        };
    }), b.module("a8m.filter-watcher", []).provider("filterWatcher", function() {
        this.$get = [ "$window", "$rootScope", function(a, c) {
            function d(a, c) {
                return [ a, b.toJson(c) ].join("#").replace(/"/g, "");
            }
            function e(a) {
                var b = a.targetScope.$id;
                E(l[b], function(a) {
                    delete j[a];
                }), delete l[b];
            }
            function f() {
                m(function() {
                    c.$$phase || (j = {});
                });
            }
            function g(a, b) {
                var c = a.$id;
                return y(l[c]) && (a.$on("$destroy", e), l[c] = []), l[c].push(b);
            }
            function h(a, b) {
                var c = d(a, b);
                return j[c];
            }
            function i(a, b, c, e) {
                var h = d(a, b);
                return j[h] = e, k(c) ? g(c, h) : f(), e;
            }
            var j = {}, l = {}, m = a.setTimeout;
            return {
                isMemoized: h,
                memoize: i
            };
        } ];
    }), b.module("angular.filter", [ "a8m.ucfirst", "a8m.uri-encode", "a8m.uri-component-encode", "a8m.slugify", "a8m.strip-tags", "a8m.stringular", "a8m.truncate", "a8m.starts-with", "a8m.ends-with", "a8m.wrap", "a8m.trim", "a8m.ltrim", "a8m.rtrim", "a8m.repeat", "a8m.to-array", "a8m.concat", "a8m.contains", "a8m.unique", "a8m.is-empty", "a8m.after", "a8m.after-where", "a8m.before", "a8m.before-where", "a8m.defaults", "a8m.where", "a8m.reverse", "a8m.remove", "a8m.remove-with", "a8m.group-by", "a8m.count-by", "a8m.search-field", "a8m.fuzzy-by", "a8m.fuzzy", "a8m.omit", "a8m.pick", "a8m.every", "a8m.filter-by", "a8m.xor", "a8m.map", "a8m.first", "a8m.last", "a8m.flatten", "a8m.join", "a8m.math", "a8m.math.max", "a8m.math.min", "a8m.math.percent", "a8m.math.radix", "a8m.math.sum", "a8m.math.degrees", "a8m.math.radians", "a8m.math.byteFmt", "a8m.math.kbFmt", "a8m.math.shortFmt", "a8m.angular", "a8m.conditions", "a8m.is-null", "a8m.filter-watcher" ]);
}(window, window.angular), function(a) {
    function b() {
        var a, b;
        for (a = 0; a < this.length; a++) b = this[a], c(b) || (d(b), i(b));
    }
    function c(a) {
        var b = a.value, c = a.$$currentValue;
        return b || c ? b === c : !0;
    }
    function d(a) {
        a.$$currentValue = a.value;
    }
    function e(b) {
        var c = a.jQuery || a.angular.element, d = c.prototype, e = d.val;
        d.val = function(a) {
            var c = e.apply(this, arguments);
            return arguments.length > 0 && h(this, function(c) {
                b(c, a);
            }), c;
        };
    }
    function f(a, b) {
        function c(a) {
            var c = a.target;
            b(c);
        }
        k.addEventListener(a, c, !0);
    }
    function g(a) {
        for (;a; ) {
            if ("FORM" === a.nodeName) return j(a);
            a = a.parentNode;
        }
        return j();
    }
    function h(a, b) {
        if (a.forEach) return a.forEach(b);
        var c;
        for (c = 0; c < a.length; c++) b(a[c]);
    }
    function i(b) {
        var c = a.document, d = c.createEvent("HTMLEvents");
        d.initEvent("change", !0, !0), b.dispatchEvent(d);
    }
    var j = a.jQuery || a.angular.element, k = a.document.documentElement, l = j(k);
    f("change", d), e(d), j.prototype.checkAndTriggerAutoFillEvent = b, f("blur", function(b) {
        a.setTimeout(function() {
            g(b).find("input").checkAndTriggerAutoFillEvent();
        }, 20);
    }), a.document.addEventListener("DOMContentLoaded", function() {
        a.setTimeout(function() {
            l.find("input").checkAndTriggerAutoFillEvent();
        }, 200);
    }, !1);
}(window), angular.module("mm.foundation", [ "mm.foundation.accordion", "mm.foundation.alert", "mm.foundation.bindHtml", "mm.foundation.buttons", "mm.foundation.position", "mm.foundation.mediaQueries", "mm.foundation.dropdownToggle", "mm.foundation.interchange", "mm.foundation.transition", "mm.foundation.modal", "mm.foundation.offcanvas", "mm.foundation.pagination", "mm.foundation.tooltip", "mm.foundation.popover", "mm.foundation.progressbar", "mm.foundation.rating", "mm.foundation.tabs", "mm.foundation.topbar", "mm.foundation.tour", "mm.foundation.typeahead" ]), 
angular.module("mm.foundation.accordion", []).constant("accordionConfig", {
    closeOthers: !0
}).controller("AccordionController", [ "$scope", "$attrs", "accordionConfig", function(a, b, c) {
    this.groups = [], this.closeOthers = function(d) {
        var e = angular.isDefined(b.closeOthers) ? a.$eval(b.closeOthers) : c.closeOthers;
        e && angular.forEach(this.groups, function(a) {
            a !== d && (a.isOpen = !1);
        });
    }, this.addGroup = function(a) {
        var b = this;
        this.groups.push(a), a.$on("$destroy", function() {
            b.removeGroup(a);
        });
    }, this.removeGroup = function(a) {
        var b = this.groups.indexOf(a);
        -1 !== b && this.groups.splice(this.groups.indexOf(a), 1);
    };
} ]).directive("accordion", function() {
    return {
        restrict: "EA",
        controller: "AccordionController",
        transclude: !0,
        replace: !1,
        templateUrl: "template/accordion/accordion.html"
    };
}).directive("accordionGroup", [ "$parse", function(a) {
    return {
        require: "^accordion",
        restrict: "EA",
        transclude: !0,
        replace: !0,
        templateUrl: "template/accordion/accordion-group.html",
        scope: {
            heading: "@"
        },
        controller: function() {
            this.setHeading = function(a) {
                this.heading = a;
            };
        },
        link: function(b, c, d, e) {
            var f, g;
            e.addGroup(b), b.isOpen = !1, d.isOpen && (f = a(d.isOpen), g = f.assign, b.$parent.$watch(f, function(a) {
                b.isOpen = !!a;
            })), b.$watch("isOpen", function(a) {
                a && e.closeOthers(b), g && g(b.$parent, a);
            });
        }
    };
} ]).directive("accordionHeading", function() {
    return {
        restrict: "EA",
        transclude: !0,
        template: "",
        replace: !0,
        require: "^accordionGroup",
        compile: function(a, b, c) {
            return function(a, b, d, e) {
                e.setHeading(c(a, function() {}));
            };
        }
    };
}).directive("accordionTransclude", function() {
    return {
        require: "^accordionGroup",
        link: function(a, b, c, d) {
            a.$watch(function() {
                return d[c.accordionTransclude];
            }, function(a) {
                a && (b.html(""), b.append(a));
            });
        }
    };
}), angular.module("mm.foundation.alert", []).controller("AlertController", [ "$scope", "$attrs", function(a, b) {
    a.closeable = "close" in b;
} ]).directive("alert", function() {
    return {
        restrict: "EA",
        controller: "AlertController",
        templateUrl: "template/alert/alert.html",
        transclude: !0,
        replace: !0,
        scope: {
            type: "=",
            close: "&"
        }
    };
}), angular.module("mm.foundation.bindHtml", []).directive("bindHtmlUnsafe", function() {
    return function(a, b, c) {
        b.addClass("ng-binding").data("$binding", c.bindHtmlUnsafe), a.$watch(c.bindHtmlUnsafe, function(a) {
            b.html(a || "");
        });
    };
}), angular.module("mm.foundation.buttons", []).constant("buttonConfig", {
    activeClass: "active",
    toggleEvent: "click"
}).controller("ButtonsController", [ "buttonConfig", function(a) {
    this.activeClass = a.activeClass, this.toggleEvent = a.toggleEvent;
} ]).directive("btnRadio", function() {
    return {
        require: [ "btnRadio", "ngModel" ],
        controller: "ButtonsController",
        link: function(a, b, c, d) {
            var e = d[0], f = d[1];
            f.$render = function() {
                b.toggleClass(e.activeClass, angular.equals(f.$modelValue, a.$eval(c.btnRadio)));
            }, b.bind(e.toggleEvent, function() {
                b.hasClass(e.activeClass) || a.$apply(function() {
                    f.$setViewValue(a.$eval(c.btnRadio)), f.$render();
                });
            });
        }
    };
}).directive("btnCheckbox", function() {
    return {
        require: [ "btnCheckbox", "ngModel" ],
        controller: "ButtonsController",
        link: function(a, b, c, d) {
            function e() {
                return g(c.btnCheckboxTrue, !0);
            }
            function f() {
                return g(c.btnCheckboxFalse, !1);
            }
            function g(b, c) {
                var d = a.$eval(b);
                return angular.isDefined(d) ? d : c;
            }
            var h = d[0], i = d[1];
            i.$render = function() {
                b.toggleClass(h.activeClass, angular.equals(i.$modelValue, e()));
            }, b.bind(h.toggleEvent, function() {
                a.$apply(function() {
                    i.$setViewValue(b.hasClass(h.activeClass) ? f() : e()), i.$render();
                });
            });
        }
    };
}), angular.module("mm.foundation.position", []).factory("$position", [ "$document", "$window", function(a, b) {
    function c(a, c) {
        return a.currentStyle ? a.currentStyle[c] : b.getComputedStyle ? b.getComputedStyle(a)[c] : a.style[c];
    }
    function d(a) {
        return "static" === (c(a, "position") || "static");
    }
    var e = function(b) {
        for (var c = a[0], e = b.offsetParent || c; e && e !== c && d(e); ) e = e.offsetParent;
        return e || c;
    };
    return {
        position: function(b) {
            var c = this.offset(b), d = {
                top: 0,
                left: 0
            }, f = e(b[0]);
            f != a[0] && (d = this.offset(angular.element(f)), d.top += f.clientTop - f.scrollTop, 
            d.left += f.clientLeft - f.scrollLeft);
            var g = b[0].getBoundingClientRect();
            return {
                width: g.width || b.prop("offsetWidth"),
                height: g.height || b.prop("offsetHeight"),
                top: c.top - d.top,
                left: c.left - d.left
            };
        },
        offset: function(c) {
            var d = c[0].getBoundingClientRect();
            return {
                width: d.width || c.prop("offsetWidth"),
                height: d.height || c.prop("offsetHeight"),
                top: d.top + (b.pageYOffset || a[0].body.scrollTop || a[0].documentElement.scrollTop),
                left: d.left + (b.pageXOffset || a[0].body.scrollLeft || a[0].documentElement.scrollLeft)
            };
        }
    };
} ]), angular.module("mm.foundation.mediaQueries", []).factory("matchMedia", [ "$document", "$window", function(a, b) {
    return b.matchMedia || function(a) {
        var b, c = a.documentElement, d = c.firstElementChild || c.firstChild, e = a.createElement("body"), f = a.createElement("div");
        return f.id = "mq-test-1", f.style.cssText = "position:absolute;top:-100em", e.style.background = "none", 
        e.appendChild(f), function(a) {
            return f.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>', 
            c.insertBefore(e, d), b = 42 === f.offsetWidth, c.removeChild(e), {
                matches: b,
                media: a
            };
        };
    }(a[0]);
} ]).factory("mediaQueries", [ "$document", "matchMedia", function(a, b) {
    var c = angular.element(a[0].querySelector("head"));
    c.append('<meta class="foundation-mq-topbar" />'), c.append('<meta class="foundation-mq-small" />'), 
    c.append('<meta class="foundation-mq-medium" />'), c.append('<meta class="foundation-mq-large" />');
    var d = /^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, e = {
        topbar: getComputedStyle(c[0].querySelector("meta.foundation-mq-topbar")).fontFamily.replace(d, ""),
        small: getComputedStyle(c[0].querySelector("meta.foundation-mq-small")).fontFamily.replace(d, ""),
        medium: getComputedStyle(c[0].querySelector("meta.foundation-mq-medium")).fontFamily.replace(d, ""),
        large: getComputedStyle(c[0].querySelector("meta.foundation-mq-large")).fontFamily.replace(d, "")
    };
    return {
        topbarBreakpoint: function() {
            return !b(e.topbar).matches;
        },
        small: function() {
            return b(e.small).matches;
        },
        medium: function() {
            return b(e.medium).matches;
        },
        large: function() {
            return b(e.large).matches;
        }
    };
} ]), angular.module("mm.foundation.dropdownToggle", [ "mm.foundation.position", "mm.foundation.mediaQueries" ]).controller("DropdownToggleController", [ "$scope", "$attrs", "mediaQueries", function(a, b, c) {
    this.small = function() {
        return c.small() && !c.medium();
    };
} ]).directive("dropdownToggle", [ "$document", "$window", "$location", "$position", function(a, b, c, d) {
    var e = null, f = angular.noop;
    return {
        restrict: "CA",
        scope: {
            dropdownToggle: "@"
        },
        controller: "DropdownToggleController",
        link: function(c, g, h, i) {
            var j = g.parent(), k = angular.element(a[0].querySelector(c.dropdownToggle)), l = function() {
                return j.hasClass("has-dropdown");
            }, m = function(h) {
                k = angular.element(a[0].querySelector(c.dropdownToggle));
                var m = g === e;
                if (h.preventDefault(), h.stopPropagation(), e && f(), !m && !g.hasClass("disabled") && !g.prop("disabled")) {
                    k.css("display", "block");
                    var n = d.offset(g), o = d.offset(angular.element(k[0].offsetParent)), p = k.prop("offsetWidth"), q = {
                        top: n.top - o.top + n.height + "px"
                    };
                    if (i.small()) q.left = Math.max((o.width - p) / 2, 8) + "px", q.position = "absolute", 
                    q.width = "95%", q["max-width"] = "none"; else {
                        var r = Math.round(n.left - o.left), s = b.innerWidth - p - 8;
                        r > s && (r = s, k.removeClass("left").addClass("right")), q.left = r + "px", q.position = null, 
                        q["max-width"] = null;
                    }
                    k.css(q), l() && j.addClass("hover"), e = g, f = function() {
                        a.off("click", f), k.css("display", "none"), f = angular.noop, e = null, j.hasClass("hover") && j.removeClass("hover");
                    }, a.on("click", f);
                }
            };
            k && k.css("display", "none"), c.$watch("$location.path", function() {
                f();
            }), g.on("click", m), g.on("$destroy", function() {
                g.off("click", m);
            });
        }
    };
} ]), angular.module("mm.foundation.interchange", [ "mm.foundation.mediaQueries" ]).factory("interchangeQueries", [ "$document", function(a) {
    for (var b, c, d = {
        "default": "only screen",
        landscape: "only screen and (orientation: landscape)",
        portrait: "only screen and (orientation: portrait)",
        retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"
    }, e = "foundation-mq-", f = [ "small", "medium", "large", "xlarge", "xxlarge" ], g = angular.element(a[0].querySelector("head")), h = 0; h < f.length; h++) g.append('<meta class="' + e + f[h] + '" />'), 
    b = getComputedStyle(g[0].querySelector("meta." + e + f[h])), c = b.fontFamily.replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""), 
    d[f[h]] = c;
    return d;
} ]).factory("interchangeQueriesManager", [ "interchangeQueries", function(a) {
    return {
        add: function(b, c) {
            return b && c && angular.isString(b) && angular.isString(c) && !a[b] ? (a[b] = c, 
            !0) : !1;
        }
    };
} ]).factory("interchangeTools", [ "$window", "matchMedia", "interchangeQueries", function(a, b, c) {
    var d = function(a) {
        for (var b, c = a.split(/\[(.*?)\]/), d = c.length, e = /^(.+)\,\ \((.+)\)$/, f = {}; d--; ) c[d].replace(/[\W\d]+/, "").length > 4 && (b = e.exec(c[d]), 
        b && 3 === b.length && (f[b[2]] = b[1]));
        return f;
    }, e = function(a) {
        var d, e, f;
        for (d in a) if (e = c[d] || d, f = b(e), f.matches) return a[d];
    };
    return {
        parseAttribute: d,
        findCurrentMediaFile: e
    };
} ]).directive("interchange", [ "$window", "$rootScope", "interchangeTools", function(a, b, c) {
    var d = /[A-Za-z0-9-_]+\.(jpg|jpeg|png|gif|bmp|tiff)\ *,/i;
    return {
        restrict: "A",
        scope: !0,
        priority: 450,
        compile: function(e, f) {
            return "DIV" !== e[0].nodeName || d.test(f.interchange) || e.html('<ng-include src="currentFile"></ng-include>'), 
            {
                pre: function() {},
                post: function(d, e, f) {
                    var g, h;
                    switch (h = e && e[0] && e[0].nodeName, d.fileMap = c.parseAttribute(f.interchange), 
                    h) {
                      case "DIV":
                        g = c.findCurrentMediaFile(d.fileMap), d.type = /[A-Za-z0-9-_]+\.(jpg|jpeg|png|gif|bmp|tiff)$/i.test(g) ? "background" : "include";
                        break;

                      case "IMG":
                        d.type = "image";
                        break;

                      default:
                        return;
                    }
                    var i = function(a) {
                        var f = c.findCurrentMediaFile(d.fileMap);
                        if (!d.currentFile || d.currentFile !== f) {
                            switch (d.currentFile = f, d.type) {
                              case "image":
                                e.attr("src", d.currentFile);
                                break;

                              case "background":
                                e.css("background-image", "url(" + d.currentFile + ")");
                            }
                            b.$emit("replace", e, d), a && d.$apply();
                        }
                    };
                    i(), a.addEventListener("resize", i), d.$on("$destroy", function() {
                        a.removeEventListener("resize", i);
                    });
                }
            };
        }
    };
} ]), angular.module("mm.foundation.transition", []).factory("$transition", [ "$q", "$timeout", "$rootScope", function(a, b, c) {
    function d(a) {
        for (var b in a) if (void 0 !== f.style[b]) return a[b];
    }
    var e = function(d, f, g) {
        g = g || {};
        var h = a.defer(), i = e[g.animation ? "animationEndEventName" : "transitionEndEventName"], j = function() {
            c.$apply(function() {
                d.unbind(i, j), h.resolve(d);
            });
        };
        return i && d.bind(i, j), b(function() {
            angular.isString(f) ? d.addClass(f) : angular.isFunction(f) ? f(d) : angular.isObject(f) && d.css(f), 
            i || h.resolve(d);
        }), h.promise.cancel = function() {
            i && d.unbind(i, j), h.reject("Transition cancelled");
        }, h.promise;
    }, f = document.createElement("trans"), g = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        transition: "transitionend"
    }, h = {
        WebkitTransition: "webkitAnimationEnd",
        MozTransition: "animationend",
        OTransition: "oAnimationEnd",
        transition: "animationend"
    };
    return e.transitionEndEventName = d(g), e.animationEndEventName = d(h), e;
} ]), angular.module("mm.foundation.modal", [ "mm.foundation.transition" ]).factory("$$stackedMap", function() {
    return {
        createNew: function() {
            var a = [];
            return {
                add: function(b, c) {
                    a.push({
                        key: b,
                        value: c
                    });
                },
                get: function(b) {
                    for (var c = 0; c < a.length; c++) if (b == a[c].key) return a[c];
                },
                keys: function() {
                    for (var b = [], c = 0; c < a.length; c++) b.push(a[c].key);
                    return b;
                },
                top: function() {
                    return a[a.length - 1];
                },
                remove: function(b) {
                    for (var c = -1, d = 0; d < a.length; d++) if (b == a[d].key) {
                        c = d;
                        break;
                    }
                    return a.splice(c, 1)[0];
                },
                removeTop: function() {
                    return a.splice(a.length - 1, 1)[0];
                },
                length: function() {
                    return a.length;
                }
            };
        }
    };
}).directive("modalBackdrop", [ "$modalStack", "$timeout", function(a, b) {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/modal/backdrop.html",
        link: function(c) {
            c.animate = !1, b(function() {
                c.animate = !0;
            }), c.close = function(b) {
                var c = a.getTop();
                c && c.value.backdrop && "static" != c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), 
                b.stopPropagation(), a.dismiss(c.key, "backdrop click"));
            };
        }
    };
} ]).directive("modalWindow", [ "$modalStack", "$timeout", function(a, b) {
    return {
        restrict: "EA",
        scope: {
            index: "@",
            animate: "="
        },
        replace: !0,
        transclude: !0,
        templateUrl: "template/modal/window.html",
        link: function(a, c, d) {
            a.windowClass = d.windowClass || "", b(function() {
                a.animate = !0, c[0].querySelectorAll("[autofocus]").length > 0 ? c[0].querySelectorAll("[autofocus]")[0].focus() : c[0].querySelector("div").focus();
            });
        }
    };
} ]).factory("$modalStack", [ "$window", "$transition", "$timeout", "$document", "$compile", "$rootScope", "$$stackedMap", function(a, b, c, d, e, f, g) {
    function h() {
        for (var a = -1, b = o.keys(), c = 0; c < b.length; c++) o.get(b[c]).value.backdrop && (a = c);
        return a;
    }
    function i(a) {
        var b = d.find("body").eq(0), c = o.get(a).value;
        o.remove(a), k(c.modalDomEl, c.modalScope, 300, function() {
            c.modalScope.$destroy(), b.toggleClass(n, o.length() > 0), j();
        });
    }
    function j() {
        if (l && -1 == h()) {
            var a = m;
            k(l, m, 150, function() {
                a.$destroy(), a = null;
            }), l = void 0, m = void 0;
        }
    }
    function k(a, d, e, f) {
        function g() {
            g.done || (g.done = !0, a.remove(), f && f());
        }
        d.animate = !1;
        var h = b.transitionEndEventName;
        if (h) {
            var i = c(g, e);
            a.bind(h, function() {
                c.cancel(i), g(), d.$apply();
            });
        } else c(g, 0);
    }
    var l, m, n = "modal-open", o = g.createNew(), p = {};
    return f.$watch(h, function(a) {
        m && (m.index = a);
    }), d.bind("keydown", function(a) {
        var b;
        27 === a.which && (b = o.top(), b && b.value.keyboard && f.$apply(function() {
            p.dismiss(b.key);
        }));
    }), p.open = function(b, c) {
        o.add(b, {
            deferred: c.deferred,
            modalScope: c.scope,
            backdrop: c.backdrop,
            keyboard: c.keyboard
        });
        var g = d.find("body").eq(0), i = h();
        i >= 0 && !l && (m = f.$new(!0), m.index = i, l = e("<div modal-backdrop></div>")(m), 
        g.append(l));
        var j = angular.element('<div class="reveal-modal" style="z-index:-1""></div>');
        g.append(j[0]);
        var k = parseInt(getComputedStyle(j[0]).top) || 0;
        j.remove();
        var p = a.pageYOffset || 0, q = p + k, r = angular.element('<div modal-window style="visibility: visible; top:' + q + 'px;"></div>');
        r.attr("window-class", c.windowClass), r.attr("index", o.length() - 1), r.attr("animate", "animate"), 
        r.html(c.content);
        var s = e(r)(c.scope);
        o.top().value.modalDomEl = s, g.append(s), g.addClass(n);
    }, p.close = function(a, b) {
        var c = o.get(a).value;
        c && (c.deferred.resolve(b), i(a));
    }, p.dismiss = function(a, b) {
        var c = o.get(a).value;
        c && (c.deferred.reject(b), i(a));
    }, p.dismissAll = function(a) {
        for (var b = this.getTop(); b; ) this.dismiss(b.key, a), b = this.getTop();
    }, p.getTop = function() {
        return o.top();
    }, p;
} ]).provider("$modal", function() {
    var a = {
        options: {
            backdrop: !0,
            keyboard: !0
        },
        $get: [ "$injector", "$rootScope", "$q", "$http", "$templateCache", "$controller", "$modalStack", function(b, c, d, e, f, g, h) {
            function i(a) {
                return a.template ? d.when(a.template) : e.get(a.templateUrl, {
                    cache: f
                }).then(function(a) {
                    return a.data;
                });
            }
            function j(a) {
                var c = [];
                return angular.forEach(a, function(a) {
                    (angular.isFunction(a) || angular.isArray(a)) && c.push(d.when(b.invoke(a)));
                }), c;
            }
            var k = {};
            return k.open = function(b) {
                var e = d.defer(), f = d.defer(), k = {
                    result: e.promise,
                    opened: f.promise,
                    close: function(a) {
                        h.close(k, a);
                    },
                    dismiss: function(a) {
                        h.dismiss(k, a);
                    }
                };
                if (b = angular.extend({}, a.options, b), b.resolve = b.resolve || {}, !b.template && !b.templateUrl) throw new Error("One of template or templateUrl options is required.");
                var l = d.all([ i(b) ].concat(j(b.resolve)));
                return l.then(function(a) {
                    var d = (b.scope || c).$new();
                    d.$close = k.close, d.$dismiss = k.dismiss;
                    var f, i = {}, j = 1;
                    b.controller && (i.$scope = d, i.$modalInstance = k, angular.forEach(b.resolve, function(b, c) {
                        i[c] = a[j++];
                    }), f = g(b.controller, i)), h.open(k, {
                        scope: d,
                        deferred: e,
                        content: a[0],
                        backdrop: b.backdrop,
                        keyboard: b.keyboard,
                        windowClass: b.windowClass
                    });
                }, function(a) {
                    e.reject(a);
                }), l.then(function() {
                    f.resolve(!0);
                }, function() {
                    f.reject(!1);
                }), k;
            }, k;
        } ]
    };
    return a;
}), angular.module("mm.foundation.offcanvas", []).directive("offCanvasWrap", [ "$window", function(a) {
    return {
        scope: {},
        restrict: "C",
        link: function(b, c) {
            var d = angular.element(a), e = b.sidebar = c;
            b.hide = function() {
                e.removeClass("move-left"), e.removeClass("move-right");
            }, d.bind("resize.body", b.hide), b.$on("$destroy", function() {
                d.unbind("resize.body", b.hide);
            });
        },
        controller: [ "$scope", function(a) {
            this.leftToggle = function() {
                a.sidebar.toggleClass("move-right");
            }, this.rightToggle = function() {
                a.sidebar.toggleClass("move-left");
            }, this.hide = function() {
                a.hide();
            };
        } ]
    };
} ]).directive("leftOffCanvasToggle", [ function() {
    return {
        require: "^offCanvasWrap",
        restrict: "C",
        link: function(a, b, c, d) {
            b.on("click", function() {
                d.leftToggle();
            });
        }
    };
} ]).directive("rightOffCanvasToggle", [ function() {
    return {
        require: "^offCanvasWrap",
        restrict: "C",
        link: function(a, b, c, d) {
            b.on("click", function() {
                d.rightToggle();
            });
        }
    };
} ]).directive("exitOffCanvas", [ function() {
    return {
        require: "^offCanvasWrap",
        restrict: "C",
        link: function(a, b, c, d) {
            b.on("click", function() {
                d.hide();
            });
        }
    };
} ]).directive("offCanvasList", [ function() {
    return {
        require: "^offCanvasWrap",
        restrict: "C",
        link: function(a, b, c, d) {
            b.on("click", function() {
                d.hide();
            });
        }
    };
} ]), angular.module("mm.foundation.pagination", []).controller("PaginationController", [ "$scope", "$attrs", "$parse", "$interpolate", function(a, b, c, d) {
    var e = this, f = b.numPages ? c(b.numPages).assign : angular.noop;
    this.init = function(d) {
        b.itemsPerPage ? a.$parent.$watch(c(b.itemsPerPage), function(b) {
            e.itemsPerPage = parseInt(b, 10), a.totalPages = e.calculateTotalPages();
        }) : this.itemsPerPage = d;
    }, this.noPrevious = function() {
        return 1 === this.page;
    }, this.noNext = function() {
        return this.page === a.totalPages;
    }, this.isActive = function(a) {
        return this.page === a;
    }, this.calculateTotalPages = function() {
        var b = this.itemsPerPage < 1 ? 1 : Math.ceil(a.totalItems / this.itemsPerPage);
        return Math.max(b || 0, 1);
    }, this.getAttributeValue = function(b, c, e) {
        return angular.isDefined(b) ? e ? d(b)(a.$parent) : a.$parent.$eval(b) : c;
    }, this.render = function() {
        this.page = parseInt(a.page, 10) || 1, this.page > 0 && this.page <= a.totalPages && (a.pages = this.getPages(this.page, a.totalPages));
    }, a.selectPage = function(b) {
        !e.isActive(b) && b > 0 && b <= a.totalPages && (a.page = b, a.onSelectPage({
            page: b
        }));
    }, a.$watch("page", function() {
        e.render();
    }), a.$watch("totalItems", function() {
        a.totalPages = e.calculateTotalPages();
    }), a.$watch("totalPages", function(b) {
        f(a.$parent, b), e.page > b ? a.selectPage(b) : e.render();
    });
} ]).constant("paginationConfig", {
    itemsPerPage: 10,
    boundaryLinks: !1,
    directionLinks: !0,
    firstText: "First",
    previousText: "Previous",
    nextText: "Next",
    lastText: "Last",
    rotate: !0
}).directive("pagination", [ "$parse", "paginationConfig", function(a, b) {
    return {
        restrict: "EA",
        scope: {
            page: "=",
            totalItems: "=",
            onSelectPage: " &"
        },
        controller: "PaginationController",
        templateUrl: "template/pagination/pagination.html",
        replace: !0,
        link: function(c, d, e, f) {
            function g(a, b, c, d) {
                return {
                    number: a,
                    text: b,
                    active: c,
                    disabled: d
                };
            }
            var h, i = f.getAttributeValue(e.boundaryLinks, b.boundaryLinks), j = f.getAttributeValue(e.directionLinks, b.directionLinks), k = f.getAttributeValue(e.firstText, b.firstText, !0), l = f.getAttributeValue(e.previousText, b.previousText, !0), m = f.getAttributeValue(e.nextText, b.nextText, !0), n = f.getAttributeValue(e.lastText, b.lastText, !0), o = f.getAttributeValue(e.rotate, b.rotate);
            f.init(b.itemsPerPage), e.maxSize && c.$parent.$watch(a(e.maxSize), function(a) {
                h = parseInt(a, 10), f.render();
            }), f.getPages = function(a, b) {
                var c = [], d = 1, e = b, p = angular.isDefined(h) && b > h;
                p && (o ? (d = Math.max(a - Math.floor(h / 2), 1), e = d + h - 1, e > b && (e = b, 
                d = e - h + 1)) : (d = (Math.ceil(a / h) - 1) * h + 1, e = Math.min(d + h - 1, b)));
                for (var q = d; e >= q; q++) {
                    var r = g(q, q, f.isActive(q), !1);
                    c.push(r);
                }
                if (p && !o) {
                    if (d > 1) {
                        var s = g(d - 1, "...", !1, !1);
                        c.unshift(s);
                    }
                    if (b > e) {
                        var t = g(e + 1, "...", !1, !1);
                        c.push(t);
                    }
                }
                if (j) {
                    var u = g(a - 1, l, !1, f.noPrevious());
                    c.unshift(u);
                    var v = g(a + 1, m, !1, f.noNext());
                    c.push(v);
                }
                if (i) {
                    var w = g(1, k, !1, f.noPrevious());
                    c.unshift(w);
                    var x = g(b, n, !1, f.noNext());
                    c.push(x);
                }
                return c;
            };
        }
    };
} ]).constant("pagerConfig", {
    itemsPerPage: 10,
    previousText: "« Previous",
    nextText: "Next »",
    align: !0
}).directive("pager", [ "pagerConfig", function(a) {
    return {
        restrict: "EA",
        scope: {
            page: "=",
            totalItems: "=",
            onSelectPage: " &"
        },
        controller: "PaginationController",
        templateUrl: "template/pagination/pager.html",
        replace: !0,
        link: function(b, c, d, e) {
            function f(a, b, c, d, e) {
                return {
                    number: a,
                    text: b,
                    disabled: c,
                    previous: i && d,
                    next: i && e
                };
            }
            var g = e.getAttributeValue(d.previousText, a.previousText, !0), h = e.getAttributeValue(d.nextText, a.nextText, !0), i = e.getAttributeValue(d.align, a.align);
            e.init(a.itemsPerPage), e.getPages = function(a) {
                return [ f(a - 1, g, e.noPrevious(), !0, !1), f(a + 1, h, e.noNext(), !1, !0) ];
            };
        }
    };
} ]), angular.module("mm.foundation.tooltip", [ "mm.foundation.position", "mm.foundation.bindHtml" ]).provider("$tooltip", function() {
    function a(a) {
        var b = /[A-Z]/g, c = "-";
        return a.replace(b, function(a, b) {
            return (b ? c : "") + a.toLowerCase();
        });
    }
    var b = {
        placement: "top",
        animation: !0,
        popupDelay: 0
    }, c = {
        mouseenter: "mouseleave",
        click: "click",
        focus: "blur"
    }, d = {};
    this.options = function(a) {
        angular.extend(d, a);
    }, this.setTriggers = function(a) {
        angular.extend(c, a);
    }, this.$get = [ "$window", "$compile", "$timeout", "$parse", "$document", "$position", "$interpolate", function(e, f, g, h, i, j, k) {
        return function(e, l, m) {
            function n(a) {
                var b = a || o.trigger || m, d = c[b] || b;
                return {
                    show: b,
                    hide: d
                };
            }
            var o = angular.extend({}, b, d), p = a(e), q = k.startSymbol(), r = k.endSymbol(), s = "<div " + p + '-popup title="' + q + "tt_title" + r + '" content="' + q + "tt_content" + r + '" placement="' + q + "tt_placement" + r + '" animation="tt_animation" is-open="tt_isOpen"></div>';
            return {
                restrict: "EA",
                scope: !0,
                compile: function() {
                    var a = f(s);
                    return function(b, c, d) {
                        function f() {
                            b.tt_isOpen ? m() : k();
                        }
                        function k() {
                            (!z || b.$eval(d[l + "Enable"])) && (b.tt_popupDelay ? (v = g(p, b.tt_popupDelay, !1), 
                            v.then(function(a) {
                                a();
                            })) : p()());
                        }
                        function m() {
                            b.$apply(function() {
                                q();
                            });
                        }
                        function p() {
                            return b.tt_content ? (r(), u && g.cancel(u), t.css({
                                top: 0,
                                left: 0,
                                display: "block"
                            }), w ? i.find("body").append(t) : c.after(t), A(), b.tt_isOpen = !0, b.$digest(), 
                            A) : angular.noop;
                        }
                        function q() {
                            b.tt_isOpen = !1, g.cancel(v), b.tt_animation ? u = g(s, 500) : s();
                        }
                        function r() {
                            t && s(), t = a(b, function() {}), b.$digest();
                        }
                        function s() {
                            t && (t.remove(), t = null);
                        }
                        var t, u, v, w = angular.isDefined(o.appendToBody) ? o.appendToBody : !1, x = n(void 0), y = !1, z = angular.isDefined(d[l + "Enable"]), A = function() {
                            var a, d, e, f;
                            switch (a = w ? j.offset(c) : j.position(c), d = t.prop("offsetWidth"), e = t.prop("offsetHeight"), 
                            b.tt_placement) {
                              case "right":
                                f = {
                                    top: a.top + a.height / 2 - e / 2,
                                    left: a.left + a.width + 10
                                };
                                break;

                              case "bottom":
                                f = {
                                    top: a.top + a.height + 10,
                                    left: a.left
                                };
                                break;

                              case "left":
                                f = {
                                    top: a.top + a.height / 2 - e / 2,
                                    left: a.left - d - 10
                                };
                                break;

                              default:
                                f = {
                                    top: a.top - e - 10,
                                    left: a.left
                                };
                            }
                            f.top += "px", f.left += "px", t.css(f);
                        };
                        b.tt_isOpen = !1, d.$observe(e, function(a) {
                            b.tt_content = a, !a && b.tt_isOpen && q();
                        }), d.$observe(l + "Title", function(a) {
                            b.tt_title = a;
                        }), d[l + "Placement"] = d[l + "Placement"] || null, d.$observe(l + "Placement", function(a) {
                            b.tt_placement = angular.isDefined(a) && a ? a : o.placement;
                        }), d[l + "PopupDelay"] = d[l + "PopupDelay"] || null, d.$observe(l + "PopupDelay", function(a) {
                            var c = parseInt(a, 10);
                            b.tt_popupDelay = isNaN(c) ? o.popupDelay : c;
                        });
                        var B = function() {
                            y && (angular.isFunction(x.show) ? C() : (c.unbind(x.show, k), c.unbind(x.hide, m)));
                        }, C = function() {};
                        d[l + "Trigger"] = d[l + "Trigger"] || null, d.$observe(l + "Trigger", function(a) {
                            B(), C(), x = n(a), angular.isFunction(x.show) ? C = b.$watch(function() {
                                return x.show(b, c, d);
                            }, function(a) {
                                return g(a ? p : q);
                            }) : x.show === x.hide ? c.bind(x.show, f) : (c.bind(x.show, k), c.bind(x.hide, m)), 
                            y = !0;
                        });
                        var D = b.$eval(d[l + "Animation"]);
                        b.tt_animation = angular.isDefined(D) ? !!D : o.animation, d.$observe(l + "AppendToBody", function(a) {
                            w = angular.isDefined(a) ? h(a)(b) : w;
                        }), w && b.$on("$locationChangeSuccess", function() {
                            b.tt_isOpen && q();
                        }), b.$on("$destroy", function() {
                            g.cancel(u), g.cancel(v), B(), C(), s();
                        });
                    };
                }
            };
        };
    } ];
}).directive("tooltipPopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-popup.html"
    };
}).directive("tooltip", [ "$tooltip", function(a) {
    return a("tooltip", "tooltip", "mouseenter");
} ]).directive("tooltipHtmlUnsafePopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"
    };
}).directive("tooltipHtmlUnsafe", [ "$tooltip", function(a) {
    return a("tooltipHtmlUnsafe", "tooltip", "mouseenter");
} ]), angular.module("mm.foundation.popover", [ "mm.foundation.tooltip" ]).directive("popoverPopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            title: "@",
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/popover/popover.html"
    };
}).directive("popover", [ "$tooltip", function(a) {
    return a("popover", "popover", "click");
} ]), angular.module("mm.foundation.progressbar", [ "mm.foundation.transition" ]).constant("progressConfig", {
    animate: !0,
    max: 100
}).controller("ProgressController", [ "$scope", "$attrs", "progressConfig", "$transition", function(a, b, c, d) {
    var e = this, f = [], g = angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max, h = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate;
    this.addBar = function(a, b) {
        var c = 0, d = a.$parent.$index;
        angular.isDefined(d) && f[d] && (c = f[d].value), f.push(a), this.update(b, a.value, c), 
        a.$watch("value", function(a, c) {
            a !== c && e.update(b, a, c);
        }), a.$on("$destroy", function() {
            e.removeBar(a);
        });
    }, this.update = function(a, b, c) {
        var e = this.getPercentage(b);
        h ? (a.css("width", this.getPercentage(c) + "%"), d(a, {
            width: e + "%"
        })) : a.css({
            transition: "none",
            width: e + "%"
        });
    }, this.removeBar = function(a) {
        f.splice(f.indexOf(a), 1);
    }, this.getPercentage = function(a) {
        return Math.round(100 * a / g);
    };
} ]).directive("progress", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        controller: "ProgressController",
        require: "progress",
        scope: {},
        template: '<div class="progress" ng-transclude></div>'
    };
}).directive("bar", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        require: "^progress",
        scope: {
            value: "=",
            type: "@"
        },
        templateUrl: "template/progressbar/bar.html",
        link: function(a, b, c, d) {
            d.addBar(a, b);
        }
    };
}).directive("progressbar", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        controller: "ProgressController",
        scope: {
            value: "=",
            type: "@"
        },
        templateUrl: "template/progressbar/progressbar.html",
        link: function(a, b, c, d) {
            d.addBar(a, angular.element(b.children()[0]));
        }
    };
}), angular.module("mm.foundation.rating", []).constant("ratingConfig", {
    max: 5,
    stateOn: null,
    stateOff: null
}).controller("RatingController", [ "$scope", "$attrs", "$parse", "ratingConfig", function(a, b, c, d) {
    this.maxRange = angular.isDefined(b.max) ? a.$parent.$eval(b.max) : d.max, this.stateOn = angular.isDefined(b.stateOn) ? a.$parent.$eval(b.stateOn) : d.stateOn, 
    this.stateOff = angular.isDefined(b.stateOff) ? a.$parent.$eval(b.stateOff) : d.stateOff, 
    this.createRateObjects = function(a) {
        for (var b = {
            stateOn: this.stateOn,
            stateOff: this.stateOff
        }, c = 0, d = a.length; d > c; c++) a[c] = angular.extend({
            index: c
        }, b, a[c]);
        return a;
    }, a.range = this.createRateObjects(angular.isDefined(b.ratingStates) ? angular.copy(a.$parent.$eval(b.ratingStates)) : new Array(this.maxRange)), 
    a.rate = function(b) {
        a.value === b || a.readonly || (a.value = b);
    }, a.enter = function(b) {
        a.readonly || (a.val = b), a.onHover({
            value: b
        });
    }, a.reset = function() {
        a.val = angular.copy(a.value), a.onLeave();
    }, a.$watch("value", function(b) {
        a.val = b;
    }), a.readonly = !1, b.readonly && a.$parent.$watch(c(b.readonly), function(b) {
        a.readonly = !!b;
    });
} ]).directive("rating", function() {
    return {
        restrict: "EA",
        scope: {
            value: "=",
            onHover: "&",
            onLeave: "&"
        },
        controller: "RatingController",
        templateUrl: "template/rating/rating.html",
        replace: !0
    };
}), angular.module("mm.foundation.tabs", []).controller("TabsetController", [ "$scope", function(a) {
    var b = this, c = b.tabs = a.tabs = [];
    b.select = function(a) {
        angular.forEach(c, function(a) {
            a.active = !1;
        }), a.active = !0;
    }, b.addTab = function(a) {
        c.push(a), (1 === c.length || a.active) && b.select(a);
    }, b.removeTab = function(a) {
        var d = c.indexOf(a);
        if (a.active && c.length > 1) {
            var e = d == c.length - 1 ? d - 1 : d + 1;
            b.select(c[e]);
        }
        c.splice(d, 1);
    };
} ]).directive("tabset", function() {
    return {
        restrict: "EA",
        transclude: !0,
        replace: !0,
        scope: {},
        controller: "TabsetController",
        templateUrl: "template/tabs/tabset.html",
        link: function(a, b, c) {
            a.vertical = angular.isDefined(c.vertical) ? a.$parent.$eval(c.vertical) : !1, a.justified = angular.isDefined(c.justified) ? a.$parent.$eval(c.justified) : !1, 
            a.type = angular.isDefined(c.type) ? a.$parent.$eval(c.type) : "tabs";
        }
    };
}).directive("tab", [ "$parse", function(a) {
    return {
        require: "^tabset",
        restrict: "EA",
        replace: !0,
        templateUrl: "template/tabs/tab.html",
        transclude: !0,
        scope: {
            heading: "@",
            onSelect: "&select",
            onDeselect: "&deselect"
        },
        controller: function() {},
        compile: function(b, c, d) {
            return function(b, c, e, f) {
                var g, h;
                e.active ? (g = a(e.active), h = g.assign, b.$parent.$watch(g, function(a, c) {
                    a !== c && (b.active = !!a);
                }), b.active = g(b.$parent)) : h = g = angular.noop, b.$watch("active", function(a) {
                    angular.isFunction(h) && (h(b.$parent, a), a ? (f.select(b), b.onSelect()) : b.onDeselect());
                }), b.disabled = !1, e.disabled && b.$parent.$watch(a(e.disabled), function(a) {
                    b.disabled = !!a;
                }), b.select = function() {
                    b.disabled || (b.active = !0);
                }, f.addTab(b), b.$on("$destroy", function() {
                    f.removeTab(b);
                }), b.$transcludeFn = d;
            };
        }
    };
} ]).directive("tabHeadingTransclude", [ function() {
    return {
        restrict: "A",
        require: "^tab",
        link: function(a, b) {
            a.$watch("headingElement", function(a) {
                a && (b.html(""), b.append(a));
            });
        }
    };
} ]).directive("tabContentTransclude", function() {
    function a(a) {
        return a.tagName && (a.hasAttribute("tab-heading") || a.hasAttribute("data-tab-heading") || "tab-heading" === a.tagName.toLowerCase() || "data-tab-heading" === a.tagName.toLowerCase());
    }
    return {
        restrict: "A",
        require: "^tabset",
        link: function(b, c, d) {
            var e = b.$eval(d.tabContentTransclude);
            e.$transcludeFn(e.$parent, function(b) {
                angular.forEach(b, function(b) {
                    a(b) ? e.headingElement = b : c.append(b);
                });
            });
        }
    };
}), angular.module("mm.foundation.topbar", [ "mm.foundation.mediaQueries" ]).factory("closest", [ function() {
    return function(a, b) {
        for (var c = function(a, b) {
            for (var c = (a.parentNode || a.document).querySelectorAll(b), d = -1; c[++d] && c[d] != a; ) ;
            return !!c[d];
        }, d = a[0]; d; ) {
            if (c(d, b)) return angular.element(d);
            d = d.parentElement;
        }
        return !1;
    };
} ]).directive("topBar", [ "$timeout", "$compile", "$window", "$document", "mediaQueries", function(a, b, c, d, e) {
    return {
        scope: {
            stickyClass: "@",
            backText: "@",
            stickyOn: "=",
            customBackText: "=",
            isHover: "=",
            mobileShowParentLink: "=",
            scrolltop: "="
        },
        restrict: "EA",
        replace: !0,
        templateUrl: "template/topbar/top-bar.html",
        transclude: !0,
        link: function(a, b) {
            var f = a.topbar = b, g = f.parent(), h = angular.element(d[0].querySelector("body")), i = a.isSticky = function() {
                var b = g.hasClass(a.settings.stickyClass);
                return b && "all" === a.settings.stickyOn ? !0 : b && e.small() && "small" === a.settings.stickyOn ? !0 : b && e.medium() && "medium" === a.settings.stickyOn ? !0 : b && e.large() && "large" === a.settings.stickyOn ? !0 : !1;
            }, j = function() {
                if (a.stickyTopbar && a.isSticky()) {
                    var b = angular.element(d[0].querySelector("." + a.settings.stickyClass)), e = k;
                    c.pageYOffset > e && !b.hasClass("fixed") ? (b.addClass("fixed"), h.css("padding-top", a.originalHeight + "px")) : c.pageYOffset <= e && b.hasClass("fixed") && (b.removeClass("fixed"), 
                    h.css("padding-top", ""));
                }
            };
            if (a.toggle = function(b) {
                if (!e.topbarBreakpoint()) return !1;
                var d = void 0 === b ? !f.hasClass("expanded") : b;
                d ? f.addClass("expanded") : f.removeClass("expanded"), a.settings.scrolltop ? !d && f.hasClass("fixed") ? (f.parent().addClass("fixed"), 
                f.removeClass("fixed"), h.css("padding-top", a.originalHeight + "px")) : d && f.parent().hasClass("fixed") && (f.parent().removeClass("fixed"), 
                f.addClass("fixed"), h.css("padding-top", ""), c.scrollTo(0, 0)) : (i() && f.parent().addClass("fixed"), 
                f.parent().hasClass("fixed") && (d ? (f.addClass("fixed"), f.parent().addClass("expanded"), 
                h.css("padding-top", a.originalHeight + "px")) : (f.removeClass("fixed"), f.parent().removeClass("expanded"), 
                j())));
            }, g.hasClass("fixed") || i()) {
                a.stickyTopbar = !0, a.height = g[0].offsetHeight;
                var k = g[0].getBoundingClientRect().top;
            } else a.height = f[0].offsetHeight;
            a.originalHeight = a.height, a.$watch("height", function(a) {
                a ? f.css("height", a + "px") : f.css("height", "");
            });
            var l = e.topbarBreakpoint();
            angular.element(c).bind("resize", function() {
                var b = e.topbarBreakpoint();
                if (l !== b) {
                    l = e.topbarBreakpoint(), f.removeClass("expanded"), f.parent().removeClass("expanded"), 
                    a.height = "";
                    var c = angular.element(f[0].querySelectorAll("section"));
                    angular.forEach(c, function(a) {
                        angular.element(a.querySelectorAll("li.moved")).removeClass("moved");
                    }), a.$apply();
                }
            }), angular.element(c).bind("scroll", function() {
                j(), a.$apply();
            }), a.$on("$destroy", function() {
                angular.element(c).unbind("scroll"), angular.element(c).unbind("resize");
            }), g.hasClass("fixed") && h.css("padding-top", a.originalHeight + "px");
        },
        controller: [ "$window", "$scope", "closest", function(b, c, f) {
            c.settings = {}, c.settings.stickyClass = c.stickyClass || "sticky", c.settings.backText = c.backText || "Back", 
            c.settings.stickyOn = c.stickyOn || "all", c.settings.customBackText = void 0 === c.customBackText ? !0 : c.customBackText, 
            c.settings.isHover = void 0 === c.isHover ? !0 : c.isHover, c.settings.mobileShowParentLink = void 0 === c.mobileShowParentLink ? !0 : c.mobileShowParentLink, 
            c.settings.scrolltop = void 0 === c.scrolltop ? !0 : c.scrolltop, this.settings = c.settings, 
            c.index = 0;
            var g = function(a) {
                var b = a.offsetHeight, c = a.currentStyle || getComputedStyle(a);
                return b += parseInt(c.marginTop, 10) + parseInt(c.marginBottom, 10);
            }, h = [];
            this.addSection = function(a) {
                h.push(a);
            }, this.removeSection = function(a) {
                var b = h.indexOf(a);
                b > -1 && h.splice(b, 1);
            };
            var i = /rtl/i.test(d.find("html").attr("dir")) ? "right" : "left";
            c.$watch("index", function(a) {
                for (var b = 0; b < h.length; b++) h[b].move(i, a);
            }), this.toggle = function(a) {
                c.toggle(a);
                for (var b = 0; b < h.length; b++) h[b].reset();
                c.index = 0, c.height = "", c.$apply();
            }, this.back = function(b) {
                if (!(c.index < 1) && e.topbarBreakpoint()) {
                    var d = angular.element(b.currentTarget), h = f(d, "li.moved"), i = h.parent();
                    c.index = c.index - 1, c.height = 0 === c.index ? "" : c.originalHeight + g(i[0]), 
                    a(function() {
                        h.removeClass("moved");
                    }, 300);
                }
            }, this.forward = function(a) {
                if (!e.topbarBreakpoint()) return !1;
                var b = angular.element(a.currentTarget), d = f(b, "li");
                d.addClass("moved"), c.height = c.originalHeight + g(b.parent()[0].querySelector("ul")), 
                c.index = c.index + 1, c.$apply();
            };
        } ]
    };
} ]).directive("toggleTopBar", [ "closest", function(a) {
    return {
        scope: {},
        require: "^topBar",
        restrict: "A",
        replace: !0,
        templateUrl: "template/topbar/toggle-top-bar.html",
        transclude: !0,
        link: function(b, c, d, e) {
            c.bind("click", function(b) {
                var c = a(angular.element(b.currentTarget), "li");
                c.hasClass("back") || c.hasClass("has-dropdown") || e.toggle();
            }), b.$on("$destroy", function() {
                c.unbind("click");
            });
        }
    };
} ]).directive("topBarSection", [ "$compile", "closest", function(a, b) {
    return {
        scope: {},
        require: "^topBar",
        restrict: "EA",
        replace: !0,
        templateUrl: "template/topbar/top-bar-section.html",
        transclude: !0,
        link: function(a, c, d, e) {
            var f = c;
            a.reset = function() {
                angular.element(f[0].querySelectorAll("li.moved")).removeClass("moved");
            }, a.move = function(a, b) {
                f.css("left" === a ? {
                    left: -100 * b + "%"
                } : {
                    right: -100 * b + "%"
                });
            }, e.addSection(a), a.$on("$destroy", function() {
                e.removeSection(a);
            });
            var g = f[0].querySelectorAll("li>a");
            angular.forEach(g, function(c) {
                var d = angular.element(c), f = b(d, "li");
                f.hasClass("has-dropdown") || f.hasClass("back") || f.hasClass("title") || (d.bind("click", function() {
                    e.toggle(!1);
                }), a.$on("$destroy", function() {
                    d.bind("click");
                }));
            });
        }
    };
} ]).directive("hasDropdown", [ "mediaQueries", function(a) {
    return {
        scope: {},
        require: "^topBar",
        restrict: "A",
        templateUrl: "template/topbar/has-dropdown.html",
        replace: !0,
        transclude: !0,
        link: function(b, c, d, e) {
            b.triggerLink = c.children("a")[0];
            var f = angular.element(b.triggerLink);
            f.bind("click", function(a) {
                e.forward(a);
            }), b.$on("$destroy", function() {
                f.unbind("click");
            }), c.bind("mouseenter", function() {
                e.settings.isHover && !a.topbarBreakpoint() && c.addClass("not-click");
            }), c.bind("click", function() {
                e.settings.isHover || a.topbarBreakpoint() || c.toggleClass("not-click");
            }), c.bind("mouseleave", function() {
                c.removeClass("not-click");
            }), b.$on("$destroy", function() {
                c.unbind("click"), c.unbind("mouseenter"), c.unbind("mouseleave");
            });
        },
        controller: [ "$window", "$scope", function(a, b) {
            this.triggerLink = b.triggerLink;
        } ]
    };
} ]).directive("topBarDropdown", [ "$compile", function(a) {
    return {
        scope: {},
        require: [ "^topBar", "^hasDropdown" ],
        restrict: "A",
        replace: !0,
        templateUrl: "template/topbar/top-bar-dropdown.html",
        transclude: !0,
        link: function(b, c, d, e) {
            var f = e[0], g = e[1], h = angular.element(g.triggerLink), i = h.attr("href");
            b.linkText = h.text(), b.back = function(a) {
                f.back(a);
            }, b.backText = f.settings.customBackText ? f.settings.backText : "&laquo; " + h.html();
            var j;
            j = angular.element(f.settings.mobileShowParentLink && i && i.length > 1 ? '<li class="title back js-generated"><h5><a href="#" ng-click="back($event);">{{backText}}</a></h5></li><li><a class="parent-link js-generated" href="' + i + '">{{linkText}}</a></li>' : '<li class="title back js-generated"><h5><a href="" ng-click="back($event);">{{backText}}</a></h5></li>'), 
            a(j)(b), c.prepend(j);
        }
    };
} ]), angular.module("mm.foundation.tour", [ "mm.foundation.position", "mm.foundation.tooltip" ]).service("$tour", [ "$window", function(a) {
    function b() {
        return parseInt(a.localStorage.getItem("mm.tour.step"), 10);
    }
    function c(b) {
        d = b, a.localStorage.setItem("mm.tour.step", b);
    }
    var d = b(), e = {};
    this.add = function(a, b) {
        e[a] = b;
    }, this.has = function(a) {
        return !!e[a];
    }, this.isActive = function() {
        return d > 0;
    }, this.current = function(a) {
        return a ? void c(d) : d;
    }, this.start = function() {
        c(1);
    }, this.next = function() {
        c(d + 1);
    }, this.end = function() {
        c(0);
    };
} ]).directive("stepTextPopup", [ "$tour", function(a) {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            title: "@",
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tour/tour.html",
        link: function(b, c) {
            b.isLastStep = function() {
                return !a.has(a.current() + 1);
            }, b.endTour = function() {
                c.remove(), a.end();
            }, b.nextStep = function() {
                c.remove(), a.next();
            };
        }
    };
} ]).directive("stepText", [ "$position", "$tooltip", "$tour", "$window", function(a, b, c, d) {
    function e(a) {
        var b = a[0].getBoundingClientRect();
        return b.top >= 0 && b.left >= 0 && b.bottom <= d.innerHeight - 80 && b.right <= d.innerWidth;
    }
    function f(b, f, g) {
        var h = parseInt(g.stepIndex, 10);
        if (c.isActive() && h && (c.add(h, g), h === c.current())) {
            if (!e(f)) {
                var i = a.offset(f);
                d.scrollTo(0, i.top - d.innerHeight / 2);
            }
            return !0;
        }
        return !1;
    }
    return b("stepText", "step", f);
} ]), angular.module("mm.foundation.typeahead", [ "mm.foundation.position", "mm.foundation.bindHtml" ]).factory("typeaheadParser", [ "$parse", function(a) {
    var b = /^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;
    return {
        parse: function(c) {
            var d = c.match(b);
            if (!d) throw new Error("Expected typeahead specification in form of '_modelValue_ (as _label_)? for _item_ in _collection_' but got '" + c + "'.");
            return {
                itemName: d[3],
                source: a(d[4]),
                viewMapper: a(d[2] || d[1]),
                modelMapper: a(d[1])
            };
        }
    };
} ]).directive("typeahead", [ "$compile", "$parse", "$q", "$timeout", "$document", "$position", "typeaheadParser", function(a, b, c, d, e, f, g) {
    var h = [ 9, 13, 27, 38, 40 ];
    return {
        require: "ngModel",
        link: function(i, j, k, l) {
            var m, n = i.$eval(k.typeaheadMinLength) || 1, o = i.$eval(k.typeaheadWaitMs) || 0, p = i.$eval(k.typeaheadEditable) !== !1, q = b(k.typeaheadLoading).assign || angular.noop, r = b(k.typeaheadOnSelect), s = k.typeaheadInputFormatter ? b(k.typeaheadInputFormatter) : void 0, t = k.typeaheadAppendToBody ? b(k.typeaheadAppendToBody) : !1, u = b(k.ngModel).assign, v = g.parse(k.typeahead), w = angular.element("<div typeahead-popup></div>");
            w.attr({
                matches: "matches",
                active: "activeIdx",
                select: "select(activeIdx)",
                query: "query",
                position: "position"
            }), angular.isDefined(k.typeaheadTemplateUrl) && w.attr("template-url", k.typeaheadTemplateUrl);
            var x = i.$new();
            i.$on("$destroy", function() {
                x.$destroy();
            });
            var y = function() {
                x.matches = [], x.activeIdx = -1;
            }, z = function(a) {
                var b = {
                    $viewValue: a
                };
                q(i, !0), c.when(v.source(i, b)).then(function(c) {
                    if (a === l.$viewValue && m) {
                        if (c.length > 0) {
                            x.activeIdx = 0, x.matches.length = 0;
                            for (var d = 0; d < c.length; d++) b[v.itemName] = c[d], x.matches.push({
                                label: v.viewMapper(x, b),
                                model: c[d]
                            });
                            x.query = a, x.position = t ? f.offset(j) : f.position(j), x.position.top = x.position.top + j.prop("offsetHeight");
                        } else y();
                        q(i, !1);
                    }
                }, function() {
                    y(), q(i, !1);
                });
            };
            y(), x.query = void 0;
            var A;
            l.$parsers.unshift(function(a) {
                return a && a.length >= n ? o > 0 ? (A && d.cancel(A), A = d(function() {
                    z(a);
                }, o)) : z(a) : (q(i, !1), y()), p ? a : a ? void l.$setValidity("editable", !1) : (l.$setValidity("editable", !0), 
                a);
            }), l.$formatters.push(function(a) {
                var b, c, d = {};
                return s ? (d.$model = a, s(i, d)) : (d[v.itemName] = a, b = v.viewMapper(i, d), 
                d[v.itemName] = void 0, c = v.viewMapper(i, d), b !== c ? b : a);
            }), x.select = function(a) {
                var b, c, d = {};
                d[v.itemName] = c = x.matches[a].model, b = v.modelMapper(i, d), u(i, b), l.$setValidity("editable", !0), 
                r(i, {
                    $item: c,
                    $model: b,
                    $label: v.viewMapper(i, d)
                }), y(), j[0].focus();
            }, j.bind("keydown", function(a) {
                0 !== x.matches.length && -1 !== h.indexOf(a.which) && (a.preventDefault(), 40 === a.which ? (x.activeIdx = (x.activeIdx + 1) % x.matches.length, 
                x.$digest()) : 38 === a.which ? (x.activeIdx = (x.activeIdx ? x.activeIdx : x.matches.length) - 1, 
                x.$digest()) : 13 === a.which || 9 === a.which ? x.$apply(function() {
                    x.select(x.activeIdx);
                }) : 27 === a.which && (a.stopPropagation(), y(), x.$digest()));
            }), j.bind("blur", function() {
                m = !1;
            }), j.bind("focus", function() {
                m = !0;
            });
            var B = function(a) {
                j[0] !== a.target && (y(), x.$digest());
            };
            e.bind("click", B), i.$on("$destroy", function() {
                e.unbind("click", B);
            });
            var C = a(w)(x);
            t ? e.find("body").append(C) : j.after(C);
        }
    };
} ]).directive("typeaheadPopup", function() {
    return {
        restrict: "EA",
        scope: {
            matches: "=",
            query: "=",
            active: "=",
            position: "=",
            select: "&"
        },
        replace: !0,
        templateUrl: "template/typeahead/typeahead-popup.html",
        link: function(a, b, c) {
            a.templateUrl = c.templateUrl, a.isOpen = function() {
                return a.matches.length > 0;
            }, a.isActive = function(b) {
                return a.active == b;
            }, a.selectActive = function(b) {
                a.active = b;
            }, a.selectMatch = function(b) {
                a.select({
                    activeIdx: b
                });
            };
        }
    };
}).directive("typeaheadMatch", [ "$http", "$templateCache", "$compile", "$parse", function(a, b, c, d) {
    return {
        restrict: "EA",
        scope: {
            index: "=",
            match: "=",
            query: "="
        },
        link: function(e, f, g) {
            var h = d(g.templateUrl)(e.$parent) || "template/typeahead/typeahead-match.html";
            a.get(h, {
                cache: b
            }).success(function(a) {
                f.replaceWith(c(a.trim())(e));
            });
        }
    };
} ]).filter("typeaheadHighlight", function() {
    function a(a) {
        return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    }
    return function(b, c) {
        return c ? b.replace(new RegExp(a(c), "gi"), "<strong>$&</strong>") : b;
    };
}), angular.module("mm.foundation", [ "mm.foundation.tpls", "mm.foundation.accordion", "mm.foundation.alert", "mm.foundation.bindHtml", "mm.foundation.buttons", "mm.foundation.position", "mm.foundation.mediaQueries", "mm.foundation.dropdownToggle", "mm.foundation.interchange", "mm.foundation.transition", "mm.foundation.modal", "mm.foundation.offcanvas", "mm.foundation.pagination", "mm.foundation.tooltip", "mm.foundation.popover", "mm.foundation.progressbar", "mm.foundation.rating", "mm.foundation.tabs", "mm.foundation.topbar", "mm.foundation.tour", "mm.foundation.typeahead" ]), 
angular.module("mm.foundation.tpls", [ "template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/modal/backdrop.html", "template/modal/window.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-unsafe-popup.html", "template/tooltip/tooltip-popup.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/progressbar/progressbar.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/topbar/has-dropdown.html", "template/topbar/toggle-top-bar.html", "template/topbar/top-bar-dropdown.html", "template/topbar/top-bar-section.html", "template/topbar/top-bar.html", "template/tour/tour.html", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html" ]), 
angular.module("mm.foundation.accordion", []).constant("accordionConfig", {
    closeOthers: !0
}).controller("AccordionController", [ "$scope", "$attrs", "accordionConfig", function(a, b, c) {
    this.groups = [], this.closeOthers = function(d) {
        var e = angular.isDefined(b.closeOthers) ? a.$eval(b.closeOthers) : c.closeOthers;
        e && angular.forEach(this.groups, function(a) {
            a !== d && (a.isOpen = !1);
        });
    }, this.addGroup = function(a) {
        var b = this;
        this.groups.push(a), a.$on("$destroy", function() {
            b.removeGroup(a);
        });
    }, this.removeGroup = function(a) {
        var b = this.groups.indexOf(a);
        -1 !== b && this.groups.splice(this.groups.indexOf(a), 1);
    };
} ]).directive("accordion", function() {
    return {
        restrict: "EA",
        controller: "AccordionController",
        transclude: !0,
        replace: !1,
        templateUrl: "template/accordion/accordion.html"
    };
}).directive("accordionGroup", [ "$parse", function(a) {
    return {
        require: "^accordion",
        restrict: "EA",
        transclude: !0,
        replace: !0,
        templateUrl: "template/accordion/accordion-group.html",
        scope: {
            heading: "@"
        },
        controller: function() {
            this.setHeading = function(a) {
                this.heading = a;
            };
        },
        link: function(b, c, d, e) {
            var f, g;
            e.addGroup(b), b.isOpen = !1, d.isOpen && (f = a(d.isOpen), g = f.assign, b.$parent.$watch(f, function(a) {
                b.isOpen = !!a;
            })), b.$watch("isOpen", function(a) {
                a && e.closeOthers(b), g && g(b.$parent, a);
            });
        }
    };
} ]).directive("accordionHeading", function() {
    return {
        restrict: "EA",
        transclude: !0,
        template: "",
        replace: !0,
        require: "^accordionGroup",
        compile: function(a, b, c) {
            return function(a, b, d, e) {
                e.setHeading(c(a, function() {}));
            };
        }
    };
}).directive("accordionTransclude", function() {
    return {
        require: "^accordionGroup",
        link: function(a, b, c, d) {
            a.$watch(function() {
                return d[c.accordionTransclude];
            }, function(a) {
                a && (b.html(""), b.append(a));
            });
        }
    };
}), angular.module("mm.foundation.alert", []).controller("AlertController", [ "$scope", "$attrs", function(a, b) {
    a.closeable = "close" in b;
} ]).directive("alert", function() {
    return {
        restrict: "EA",
        controller: "AlertController",
        templateUrl: "template/alert/alert.html",
        transclude: !0,
        replace: !0,
        scope: {
            type: "=",
            close: "&"
        }
    };
}), angular.module("mm.foundation.bindHtml", []).directive("bindHtmlUnsafe", function() {
    return function(a, b, c) {
        b.addClass("ng-binding").data("$binding", c.bindHtmlUnsafe), a.$watch(c.bindHtmlUnsafe, function(a) {
            b.html(a || "");
        });
    };
}), angular.module("mm.foundation.buttons", []).constant("buttonConfig", {
    activeClass: "active",
    toggleEvent: "click"
}).controller("ButtonsController", [ "buttonConfig", function(a) {
    this.activeClass = a.activeClass, this.toggleEvent = a.toggleEvent;
} ]).directive("btnRadio", function() {
    return {
        require: [ "btnRadio", "ngModel" ],
        controller: "ButtonsController",
        link: function(a, b, c, d) {
            var e = d[0], f = d[1];
            f.$render = function() {
                b.toggleClass(e.activeClass, angular.equals(f.$modelValue, a.$eval(c.btnRadio)));
            }, b.bind(e.toggleEvent, function() {
                b.hasClass(e.activeClass) || a.$apply(function() {
                    f.$setViewValue(a.$eval(c.btnRadio)), f.$render();
                });
            });
        }
    };
}).directive("btnCheckbox", function() {
    return {
        require: [ "btnCheckbox", "ngModel" ],
        controller: "ButtonsController",
        link: function(a, b, c, d) {
            function e() {
                return g(c.btnCheckboxTrue, !0);
            }
            function f() {
                return g(c.btnCheckboxFalse, !1);
            }
            function g(b, c) {
                var d = a.$eval(b);
                return angular.isDefined(d) ? d : c;
            }
            var h = d[0], i = d[1];
            i.$render = function() {
                b.toggleClass(h.activeClass, angular.equals(i.$modelValue, e()));
            }, b.bind(h.toggleEvent, function() {
                a.$apply(function() {
                    i.$setViewValue(b.hasClass(h.activeClass) ? f() : e()), i.$render();
                });
            });
        }
    };
}), angular.module("mm.foundation.position", []).factory("$position", [ "$document", "$window", function(a, b) {
    function c(a, c) {
        return a.currentStyle ? a.currentStyle[c] : b.getComputedStyle ? b.getComputedStyle(a)[c] : a.style[c];
    }
    function d(a) {
        return "static" === (c(a, "position") || "static");
    }
    var e = function(b) {
        for (var c = a[0], e = b.offsetParent || c; e && e !== c && d(e); ) e = e.offsetParent;
        return e || c;
    };
    return {
        position: function(b) {
            var c = this.offset(b), d = {
                top: 0,
                left: 0
            }, f = e(b[0]);
            f != a[0] && (d = this.offset(angular.element(f)), d.top += f.clientTop - f.scrollTop, 
            d.left += f.clientLeft - f.scrollLeft);
            var g = b[0].getBoundingClientRect();
            return {
                width: g.width || b.prop("offsetWidth"),
                height: g.height || b.prop("offsetHeight"),
                top: c.top - d.top,
                left: c.left - d.left
            };
        },
        offset: function(c) {
            var d = c[0].getBoundingClientRect();
            return {
                width: d.width || c.prop("offsetWidth"),
                height: d.height || c.prop("offsetHeight"),
                top: d.top + (b.pageYOffset || a[0].body.scrollTop || a[0].documentElement.scrollTop),
                left: d.left + (b.pageXOffset || a[0].body.scrollLeft || a[0].documentElement.scrollLeft)
            };
        }
    };
} ]), angular.module("mm.foundation.mediaQueries", []).factory("matchMedia", [ "$document", "$window", function(a, b) {
    return b.matchMedia || function(a) {
        var b, c = a.documentElement, d = c.firstElementChild || c.firstChild, e = a.createElement("body"), f = a.createElement("div");
        return f.id = "mq-test-1", f.style.cssText = "position:absolute;top:-100em", e.style.background = "none", 
        e.appendChild(f), function(a) {
            return f.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>', 
            c.insertBefore(e, d), b = 42 === f.offsetWidth, c.removeChild(e), {
                matches: b,
                media: a
            };
        };
    }(a[0]);
} ]).factory("mediaQueries", [ "$document", "matchMedia", function(a, b) {
    var c = angular.element(a[0].querySelector("head"));
    c.append('<meta class="foundation-mq-topbar" />'), c.append('<meta class="foundation-mq-small" />'), 
    c.append('<meta class="foundation-mq-medium" />'), c.append('<meta class="foundation-mq-large" />');
    var d = /^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, e = {
        topbar: getComputedStyle(c[0].querySelector("meta.foundation-mq-topbar")).fontFamily.replace(d, ""),
        small: getComputedStyle(c[0].querySelector("meta.foundation-mq-small")).fontFamily.replace(d, ""),
        medium: getComputedStyle(c[0].querySelector("meta.foundation-mq-medium")).fontFamily.replace(d, ""),
        large: getComputedStyle(c[0].querySelector("meta.foundation-mq-large")).fontFamily.replace(d, "")
    };
    return {
        topbarBreakpoint: function() {
            return !b(e.topbar).matches;
        },
        small: function() {
            return b(e.small).matches;
        },
        medium: function() {
            return b(e.medium).matches;
        },
        large: function() {
            return b(e.large).matches;
        }
    };
} ]), angular.module("mm.foundation.dropdownToggle", [ "mm.foundation.position", "mm.foundation.mediaQueries" ]).controller("DropdownToggleController", [ "$scope", "$attrs", "mediaQueries", function(a, b, c) {
    this.small = function() {
        return c.small() && !c.medium();
    };
} ]).directive("dropdownToggle", [ "$document", "$window", "$location", "$position", function(a, b, c, d) {
    var e = null, f = angular.noop;
    return {
        restrict: "CA",
        scope: {
            dropdownToggle: "@"
        },
        controller: "DropdownToggleController",
        link: function(c, g, h, i) {
            var j = g.parent(), k = angular.element(a[0].querySelector(c.dropdownToggle)), l = function() {
                return j.hasClass("has-dropdown");
            }, m = function(h) {
                k = angular.element(a[0].querySelector(c.dropdownToggle));
                var m = g === e;
                if (h.preventDefault(), h.stopPropagation(), e && f(), !m && !g.hasClass("disabled") && !g.prop("disabled")) {
                    k.css("display", "block");
                    var n = d.offset(g), o = d.offset(angular.element(k[0].offsetParent)), p = k.prop("offsetWidth"), q = {
                        top: n.top - o.top + n.height + "px"
                    };
                    if (i.small()) q.left = Math.max((o.width - p) / 2, 8) + "px", q.position = "absolute", 
                    q.width = "95%", q["max-width"] = "none"; else {
                        var r = Math.round(n.left - o.left), s = b.innerWidth - p - 8;
                        r > s && (r = s, k.removeClass("left").addClass("right")), q.left = r + "px", q.position = null, 
                        q["max-width"] = null;
                    }
                    k.css(q), l() && j.addClass("hover"), e = g, f = function() {
                        a.off("click", f), k.css("display", "none"), f = angular.noop, e = null, j.hasClass("hover") && j.removeClass("hover");
                    }, a.on("click", f);
                }
            };
            k && k.css("display", "none"), c.$watch("$location.path", function() {
                f();
            }), g.on("click", m), g.on("$destroy", function() {
                g.off("click", m);
            });
        }
    };
} ]), angular.module("mm.foundation.interchange", [ "mm.foundation.mediaQueries" ]).factory("interchangeQueries", [ "$document", function(a) {
    for (var b, c, d = {
        "default": "only screen",
        landscape: "only screen and (orientation: landscape)",
        portrait: "only screen and (orientation: portrait)",
        retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"
    }, e = "foundation-mq-", f = [ "small", "medium", "large", "xlarge", "xxlarge" ], g = angular.element(a[0].querySelector("head")), h = 0; h < f.length; h++) g.append('<meta class="' + e + f[h] + '" />'), 
    b = getComputedStyle(g[0].querySelector("meta." + e + f[h])), c = b.fontFamily.replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""), 
    d[f[h]] = c;
    return d;
} ]).factory("interchangeQueriesManager", [ "interchangeQueries", function(a) {
    return {
        add: function(b, c) {
            return b && c && angular.isString(b) && angular.isString(c) && !a[b] ? (a[b] = c, 
            !0) : !1;
        }
    };
} ]).factory("interchangeTools", [ "$window", "matchMedia", "interchangeQueries", function(a, b, c) {
    var d = function(a) {
        for (var b, c = a.split(/\[(.*?)\]/), d = c.length, e = /^(.+)\,\ \((.+)\)$/, f = {}; d--; ) c[d].replace(/[\W\d]+/, "").length > 4 && (b = e.exec(c[d]), 
        b && 3 === b.length && (f[b[2]] = b[1]));
        return f;
    }, e = function(a) {
        var d, e, f;
        for (d in a) if (e = c[d] || d, f = b(e), f.matches) return a[d];
    };
    return {
        parseAttribute: d,
        findCurrentMediaFile: e
    };
} ]).directive("interchange", [ "$window", "$rootScope", "interchangeTools", function(a, b, c) {
    var d = /[A-Za-z0-9-_]+\.(jpg|jpeg|png|gif|bmp|tiff)\ *,/i;
    return {
        restrict: "A",
        scope: !0,
        priority: 450,
        compile: function(e, f) {
            return "DIV" !== e[0].nodeName || d.test(f.interchange) || e.html('<ng-include src="currentFile"></ng-include>'), 
            {
                pre: function() {},
                post: function(d, e, f) {
                    var g, h;
                    switch (h = e && e[0] && e[0].nodeName, d.fileMap = c.parseAttribute(f.interchange), 
                    h) {
                      case "DIV":
                        g = c.findCurrentMediaFile(d.fileMap), d.type = /[A-Za-z0-9-_]+\.(jpg|jpeg|png|gif|bmp|tiff)$/i.test(g) ? "background" : "include";
                        break;

                      case "IMG":
                        d.type = "image";
                        break;

                      default:
                        return;
                    }
                    var i = function(a) {
                        var f = c.findCurrentMediaFile(d.fileMap);
                        if (!d.currentFile || d.currentFile !== f) {
                            switch (d.currentFile = f, d.type) {
                              case "image":
                                e.attr("src", d.currentFile);
                                break;

                              case "background":
                                e.css("background-image", "url(" + d.currentFile + ")");
                            }
                            b.$emit("replace", e, d), a && d.$apply();
                        }
                    };
                    i(), a.addEventListener("resize", i), d.$on("$destroy", function() {
                        a.removeEventListener("resize", i);
                    });
                }
            };
        }
    };
} ]), angular.module("mm.foundation.transition", []).factory("$transition", [ "$q", "$timeout", "$rootScope", function(a, b, c) {
    function d(a) {
        for (var b in a) if (void 0 !== f.style[b]) return a[b];
    }
    var e = function(d, f, g) {
        g = g || {};
        var h = a.defer(), i = e[g.animation ? "animationEndEventName" : "transitionEndEventName"], j = function() {
            c.$apply(function() {
                d.unbind(i, j), h.resolve(d);
            });
        };
        return i && d.bind(i, j), b(function() {
            angular.isString(f) ? d.addClass(f) : angular.isFunction(f) ? f(d) : angular.isObject(f) && d.css(f), 
            i || h.resolve(d);
        }), h.promise.cancel = function() {
            i && d.unbind(i, j), h.reject("Transition cancelled");
        }, h.promise;
    }, f = document.createElement("trans"), g = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        transition: "transitionend"
    }, h = {
        WebkitTransition: "webkitAnimationEnd",
        MozTransition: "animationend",
        OTransition: "oAnimationEnd",
        transition: "animationend"
    };
    return e.transitionEndEventName = d(g), e.animationEndEventName = d(h), e;
} ]), angular.module("mm.foundation.modal", [ "mm.foundation.transition" ]).factory("$$stackedMap", function() {
    return {
        createNew: function() {
            var a = [];
            return {
                add: function(b, c) {
                    a.push({
                        key: b,
                        value: c
                    });
                },
                get: function(b) {
                    for (var c = 0; c < a.length; c++) if (b == a[c].key) return a[c];
                },
                keys: function() {
                    for (var b = [], c = 0; c < a.length; c++) b.push(a[c].key);
                    return b;
                },
                top: function() {
                    return a[a.length - 1];
                },
                remove: function(b) {
                    for (var c = -1, d = 0; d < a.length; d++) if (b == a[d].key) {
                        c = d;
                        break;
                    }
                    return a.splice(c, 1)[0];
                },
                removeTop: function() {
                    return a.splice(a.length - 1, 1)[0];
                },
                length: function() {
                    return a.length;
                }
            };
        }
    };
}).directive("modalBackdrop", [ "$modalStack", "$timeout", function(a, b) {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/modal/backdrop.html",
        link: function(c) {
            c.animate = !1, b(function() {
                c.animate = !0;
            }), c.close = function(b) {
                var c = a.getTop();
                c && c.value.backdrop && "static" != c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), 
                b.stopPropagation(), a.dismiss(c.key, "backdrop click"));
            };
        }
    };
} ]).directive("modalWindow", [ "$modalStack", "$timeout", function(a, b) {
    return {
        restrict: "EA",
        scope: {
            index: "@",
            animate: "="
        },
        replace: !0,
        transclude: !0,
        templateUrl: "template/modal/window.html",
        link: function(a, c, d) {
            a.windowClass = d.windowClass || "", b(function() {
                a.animate = !0, c[0].querySelectorAll("[autofocus]").length > 0 ? c[0].querySelectorAll("[autofocus]")[0].focus() : c[0].querySelector("div").focus();
            });
        }
    };
} ]).factory("$modalStack", [ "$window", "$transition", "$timeout", "$document", "$compile", "$rootScope", "$$stackedMap", function(a, b, c, d, e, f, g) {
    function h() {
        for (var a = -1, b = o.keys(), c = 0; c < b.length; c++) o.get(b[c]).value.backdrop && (a = c);
        return a;
    }
    function i(a) {
        var b = d.find("body").eq(0), c = o.get(a).value;
        o.remove(a), k(c.modalDomEl, c.modalScope, 300, function() {
            c.modalScope.$destroy(), b.toggleClass(n, o.length() > 0), j();
        });
    }
    function j() {
        if (l && -1 == h()) {
            var a = m;
            k(l, m, 150, function() {
                a.$destroy(), a = null;
            }), l = void 0, m = void 0;
        }
    }
    function k(a, d, e, f) {
        function g() {
            g.done || (g.done = !0, a.remove(), f && f());
        }
        d.animate = !1;
        var h = b.transitionEndEventName;
        if (h) {
            var i = c(g, e);
            a.bind(h, function() {
                c.cancel(i), g(), d.$apply();
            });
        } else c(g, 0);
    }
    var l, m, n = "modal-open", o = g.createNew(), p = {};
    return f.$watch(h, function(a) {
        m && (m.index = a);
    }), d.bind("keydown", function(a) {
        var b;
        27 === a.which && (b = o.top(), b && b.value.keyboard && f.$apply(function() {
            p.dismiss(b.key);
        }));
    }), p.open = function(b, c) {
        o.add(b, {
            deferred: c.deferred,
            modalScope: c.scope,
            backdrop: c.backdrop,
            keyboard: c.keyboard
        });
        var g = d.find("body").eq(0), i = h();
        i >= 0 && !l && (m = f.$new(!0), m.index = i, l = e("<div modal-backdrop></div>")(m), 
        g.append(l));
        var j = angular.element('<div class="reveal-modal" style="z-index:-1""></div>');
        g.append(j[0]);
        var k = parseInt(getComputedStyle(j[0]).top) || 0;
        j.remove();
        var p = a.pageYOffset || 0, q = p + k, r = angular.element('<div modal-window style="visibility: visible; top:' + q + 'px;"></div>');
        r.attr("window-class", c.windowClass), r.attr("index", o.length() - 1), r.attr("animate", "animate"), 
        r.html(c.content);
        var s = e(r)(c.scope);
        o.top().value.modalDomEl = s, g.append(s), g.addClass(n);
    }, p.close = function(a, b) {
        var c = o.get(a).value;
        c && (c.deferred.resolve(b), i(a));
    }, p.dismiss = function(a, b) {
        var c = o.get(a).value;
        c && (c.deferred.reject(b), i(a));
    }, p.dismissAll = function(a) {
        for (var b = this.getTop(); b; ) this.dismiss(b.key, a), b = this.getTop();
    }, p.getTop = function() {
        return o.top();
    }, p;
} ]).provider("$modal", function() {
    var a = {
        options: {
            backdrop: !0,
            keyboard: !0
        },
        $get: [ "$injector", "$rootScope", "$q", "$http", "$templateCache", "$controller", "$modalStack", function(b, c, d, e, f, g, h) {
            function i(a) {
                return a.template ? d.when(a.template) : e.get(a.templateUrl, {
                    cache: f
                }).then(function(a) {
                    return a.data;
                });
            }
            function j(a) {
                var c = [];
                return angular.forEach(a, function(a) {
                    (angular.isFunction(a) || angular.isArray(a)) && c.push(d.when(b.invoke(a)));
                }), c;
            }
            var k = {};
            return k.open = function(b) {
                var e = d.defer(), f = d.defer(), k = {
                    result: e.promise,
                    opened: f.promise,
                    close: function(a) {
                        h.close(k, a);
                    },
                    dismiss: function(a) {
                        h.dismiss(k, a);
                    }
                };
                if (b = angular.extend({}, a.options, b), b.resolve = b.resolve || {}, !b.template && !b.templateUrl) throw new Error("One of template or templateUrl options is required.");
                var l = d.all([ i(b) ].concat(j(b.resolve)));
                return l.then(function(a) {
                    var d = (b.scope || c).$new();
                    d.$close = k.close, d.$dismiss = k.dismiss;
                    var f, i = {}, j = 1;
                    b.controller && (i.$scope = d, i.$modalInstance = k, angular.forEach(b.resolve, function(b, c) {
                        i[c] = a[j++];
                    }), f = g(b.controller, i)), h.open(k, {
                        scope: d,
                        deferred: e,
                        content: a[0],
                        backdrop: b.backdrop,
                        keyboard: b.keyboard,
                        windowClass: b.windowClass
                    });
                }, function(a) {
                    e.reject(a);
                }), l.then(function() {
                    f.resolve(!0);
                }, function() {
                    f.reject(!1);
                }), k;
            }, k;
        } ]
    };
    return a;
}), angular.module("mm.foundation.offcanvas", []).directive("offCanvasWrap", [ "$window", function(a) {
    return {
        scope: {},
        restrict: "C",
        link: function(b, c) {
            var d = angular.element(a), e = b.sidebar = c;
            b.hide = function() {
                e.removeClass("move-left"), e.removeClass("move-right");
            }, d.bind("resize.body", b.hide), b.$on("$destroy", function() {
                d.unbind("resize.body", b.hide);
            });
        },
        controller: [ "$scope", function(a) {
            this.leftToggle = function() {
                a.sidebar.toggleClass("move-right");
            }, this.rightToggle = function() {
                a.sidebar.toggleClass("move-left");
            }, this.hide = function() {
                a.hide();
            };
        } ]
    };
} ]).directive("leftOffCanvasToggle", [ function() {
    return {
        require: "^offCanvasWrap",
        restrict: "C",
        link: function(a, b, c, d) {
            b.on("click", function() {
                d.leftToggle();
            });
        }
    };
} ]).directive("rightOffCanvasToggle", [ function() {
    return {
        require: "^offCanvasWrap",
        restrict: "C",
        link: function(a, b, c, d) {
            b.on("click", function() {
                d.rightToggle();
            });
        }
    };
} ]).directive("exitOffCanvas", [ function() {
    return {
        require: "^offCanvasWrap",
        restrict: "C",
        link: function(a, b, c, d) {
            b.on("click", function() {
                d.hide();
            });
        }
    };
} ]).directive("offCanvasList", [ function() {
    return {
        require: "^offCanvasWrap",
        restrict: "C",
        link: function(a, b, c, d) {
            b.on("click", function() {
                d.hide();
            });
        }
    };
} ]), angular.module("mm.foundation.pagination", []).controller("PaginationController", [ "$scope", "$attrs", "$parse", "$interpolate", function(a, b, c, d) {
    var e = this, f = b.numPages ? c(b.numPages).assign : angular.noop;
    this.init = function(d) {
        b.itemsPerPage ? a.$parent.$watch(c(b.itemsPerPage), function(b) {
            e.itemsPerPage = parseInt(b, 10), a.totalPages = e.calculateTotalPages();
        }) : this.itemsPerPage = d;
    }, this.noPrevious = function() {
        return 1 === this.page;
    }, this.noNext = function() {
        return this.page === a.totalPages;
    }, this.isActive = function(a) {
        return this.page === a;
    }, this.calculateTotalPages = function() {
        var b = this.itemsPerPage < 1 ? 1 : Math.ceil(a.totalItems / this.itemsPerPage);
        return Math.max(b || 0, 1);
    }, this.getAttributeValue = function(b, c, e) {
        return angular.isDefined(b) ? e ? d(b)(a.$parent) : a.$parent.$eval(b) : c;
    }, this.render = function() {
        this.page = parseInt(a.page, 10) || 1, this.page > 0 && this.page <= a.totalPages && (a.pages = this.getPages(this.page, a.totalPages));
    }, a.selectPage = function(b) {
        !e.isActive(b) && b > 0 && b <= a.totalPages && (a.page = b, a.onSelectPage({
            page: b
        }));
    }, a.$watch("page", function() {
        e.render();
    }), a.$watch("totalItems", function() {
        a.totalPages = e.calculateTotalPages();
    }), a.$watch("totalPages", function(b) {
        f(a.$parent, b), e.page > b ? a.selectPage(b) : e.render();
    });
} ]).constant("paginationConfig", {
    itemsPerPage: 10,
    boundaryLinks: !1,
    directionLinks: !0,
    firstText: "First",
    previousText: "Previous",
    nextText: "Next",
    lastText: "Last",
    rotate: !0
}).directive("pagination", [ "$parse", "paginationConfig", function(a, b) {
    return {
        restrict: "EA",
        scope: {
            page: "=",
            totalItems: "=",
            onSelectPage: " &"
        },
        controller: "PaginationController",
        templateUrl: "template/pagination/pagination.html",
        replace: !0,
        link: function(c, d, e, f) {
            function g(a, b, c, d) {
                return {
                    number: a,
                    text: b,
                    active: c,
                    disabled: d
                };
            }
            var h, i = f.getAttributeValue(e.boundaryLinks, b.boundaryLinks), j = f.getAttributeValue(e.directionLinks, b.directionLinks), k = f.getAttributeValue(e.firstText, b.firstText, !0), l = f.getAttributeValue(e.previousText, b.previousText, !0), m = f.getAttributeValue(e.nextText, b.nextText, !0), n = f.getAttributeValue(e.lastText, b.lastText, !0), o = f.getAttributeValue(e.rotate, b.rotate);
            f.init(b.itemsPerPage), e.maxSize && c.$parent.$watch(a(e.maxSize), function(a) {
                h = parseInt(a, 10), f.render();
            }), f.getPages = function(a, b) {
                var c = [], d = 1, e = b, p = angular.isDefined(h) && b > h;
                p && (o ? (d = Math.max(a - Math.floor(h / 2), 1), e = d + h - 1, e > b && (e = b, 
                d = e - h + 1)) : (d = (Math.ceil(a / h) - 1) * h + 1, e = Math.min(d + h - 1, b)));
                for (var q = d; e >= q; q++) {
                    var r = g(q, q, f.isActive(q), !1);
                    c.push(r);
                }
                if (p && !o) {
                    if (d > 1) {
                        var s = g(d - 1, "...", !1, !1);
                        c.unshift(s);
                    }
                    if (b > e) {
                        var t = g(e + 1, "...", !1, !1);
                        c.push(t);
                    }
                }
                if (j) {
                    var u = g(a - 1, l, !1, f.noPrevious());
                    c.unshift(u);
                    var v = g(a + 1, m, !1, f.noNext());
                    c.push(v);
                }
                if (i) {
                    var w = g(1, k, !1, f.noPrevious());
                    c.unshift(w);
                    var x = g(b, n, !1, f.noNext());
                    c.push(x);
                }
                return c;
            };
        }
    };
} ]).constant("pagerConfig", {
    itemsPerPage: 10,
    previousText: "« Previous",
    nextText: "Next »",
    align: !0
}).directive("pager", [ "pagerConfig", function(a) {
    return {
        restrict: "EA",
        scope: {
            page: "=",
            totalItems: "=",
            onSelectPage: " &"
        },
        controller: "PaginationController",
        templateUrl: "template/pagination/pager.html",
        replace: !0,
        link: function(b, c, d, e) {
            function f(a, b, c, d, e) {
                return {
                    number: a,
                    text: b,
                    disabled: c,
                    previous: i && d,
                    next: i && e
                };
            }
            var g = e.getAttributeValue(d.previousText, a.previousText, !0), h = e.getAttributeValue(d.nextText, a.nextText, !0), i = e.getAttributeValue(d.align, a.align);
            e.init(a.itemsPerPage), e.getPages = function(a) {
                return [ f(a - 1, g, e.noPrevious(), !0, !1), f(a + 1, h, e.noNext(), !1, !0) ];
            };
        }
    };
} ]), angular.module("mm.foundation.tooltip", [ "mm.foundation.position", "mm.foundation.bindHtml" ]).provider("$tooltip", function() {
    function a(a) {
        var b = /[A-Z]/g, c = "-";
        return a.replace(b, function(a, b) {
            return (b ? c : "") + a.toLowerCase();
        });
    }
    var b = {
        placement: "top",
        animation: !0,
        popupDelay: 0
    }, c = {
        mouseenter: "mouseleave",
        click: "click",
        focus: "blur"
    }, d = {};
    this.options = function(a) {
        angular.extend(d, a);
    }, this.setTriggers = function(a) {
        angular.extend(c, a);
    }, this.$get = [ "$window", "$compile", "$timeout", "$parse", "$document", "$position", "$interpolate", function(e, f, g, h, i, j, k) {
        return function(e, l, m) {
            function n(a) {
                var b = a || o.trigger || m, d = c[b] || b;
                return {
                    show: b,
                    hide: d
                };
            }
            var o = angular.extend({}, b, d), p = a(e), q = k.startSymbol(), r = k.endSymbol(), s = "<div " + p + '-popup title="' + q + "tt_title" + r + '" content="' + q + "tt_content" + r + '" placement="' + q + "tt_placement" + r + '" animation="tt_animation" is-open="tt_isOpen"></div>';
            return {
                restrict: "EA",
                scope: !0,
                compile: function() {
                    var a = f(s);
                    return function(b, c, d) {
                        function f() {
                            b.tt_isOpen ? m() : k();
                        }
                        function k() {
                            (!z || b.$eval(d[l + "Enable"])) && (b.tt_popupDelay ? (v = g(p, b.tt_popupDelay, !1), 
                            v.then(function(a) {
                                a();
                            })) : p()());
                        }
                        function m() {
                            b.$apply(function() {
                                q();
                            });
                        }
                        function p() {
                            return b.tt_content ? (r(), u && g.cancel(u), t.css({
                                top: 0,
                                left: 0,
                                display: "block"
                            }), w ? i.find("body").append(t) : c.after(t), A(), b.tt_isOpen = !0, b.$digest(), 
                            A) : angular.noop;
                        }
                        function q() {
                            b.tt_isOpen = !1, g.cancel(v), b.tt_animation ? u = g(s, 500) : s();
                        }
                        function r() {
                            t && s(), t = a(b, function() {}), b.$digest();
                        }
                        function s() {
                            t && (t.remove(), t = null);
                        }
                        var t, u, v, w = angular.isDefined(o.appendToBody) ? o.appendToBody : !1, x = n(void 0), y = !1, z = angular.isDefined(d[l + "Enable"]), A = function() {
                            var a, d, e, f;
                            switch (a = w ? j.offset(c) : j.position(c), d = t.prop("offsetWidth"), e = t.prop("offsetHeight"), 
                            b.tt_placement) {
                              case "right":
                                f = {
                                    top: a.top + a.height / 2 - e / 2,
                                    left: a.left + a.width + 10
                                };
                                break;

                              case "bottom":
                                f = {
                                    top: a.top + a.height + 10,
                                    left: a.left
                                };
                                break;

                              case "left":
                                f = {
                                    top: a.top + a.height / 2 - e / 2,
                                    left: a.left - d - 10
                                };
                                break;

                              default:
                                f = {
                                    top: a.top - e - 10,
                                    left: a.left
                                };
                            }
                            f.top += "px", f.left += "px", t.css(f);
                        };
                        b.tt_isOpen = !1, d.$observe(e, function(a) {
                            b.tt_content = a, !a && b.tt_isOpen && q();
                        }), d.$observe(l + "Title", function(a) {
                            b.tt_title = a;
                        }), d[l + "Placement"] = d[l + "Placement"] || null, d.$observe(l + "Placement", function(a) {
                            b.tt_placement = angular.isDefined(a) && a ? a : o.placement;
                        }), d[l + "PopupDelay"] = d[l + "PopupDelay"] || null, d.$observe(l + "PopupDelay", function(a) {
                            var c = parseInt(a, 10);
                            b.tt_popupDelay = isNaN(c) ? o.popupDelay : c;
                        });
                        var B = function() {
                            y && (angular.isFunction(x.show) ? C() : (c.unbind(x.show, k), c.unbind(x.hide, m)));
                        }, C = function() {};
                        d[l + "Trigger"] = d[l + "Trigger"] || null, d.$observe(l + "Trigger", function(a) {
                            B(), C(), x = n(a), angular.isFunction(x.show) ? C = b.$watch(function() {
                                return x.show(b, c, d);
                            }, function(a) {
                                return g(a ? p : q);
                            }) : x.show === x.hide ? c.bind(x.show, f) : (c.bind(x.show, k), c.bind(x.hide, m)), 
                            y = !0;
                        });
                        var D = b.$eval(d[l + "Animation"]);
                        b.tt_animation = angular.isDefined(D) ? !!D : o.animation, d.$observe(l + "AppendToBody", function(a) {
                            w = angular.isDefined(a) ? h(a)(b) : w;
                        }), w && b.$on("$locationChangeSuccess", function() {
                            b.tt_isOpen && q();
                        }), b.$on("$destroy", function() {
                            g.cancel(u), g.cancel(v), B(), C(), s();
                        });
                    };
                }
            };
        };
    } ];
}).directive("tooltipPopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-popup.html"
    };
}).directive("tooltip", [ "$tooltip", function(a) {
    return a("tooltip", "tooltip", "mouseenter");
} ]).directive("tooltipHtmlUnsafePopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"
    };
}).directive("tooltipHtmlUnsafe", [ "$tooltip", function(a) {
    return a("tooltipHtmlUnsafe", "tooltip", "mouseenter");
} ]), angular.module("mm.foundation.popover", [ "mm.foundation.tooltip" ]).directive("popoverPopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            title: "@",
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/popover/popover.html"
    };
}).directive("popover", [ "$tooltip", function(a) {
    return a("popover", "popover", "click");
} ]), angular.module("mm.foundation.progressbar", [ "mm.foundation.transition" ]).constant("progressConfig", {
    animate: !0,
    max: 100
}).controller("ProgressController", [ "$scope", "$attrs", "progressConfig", "$transition", function(a, b, c, d) {
    var e = this, f = [], g = angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max, h = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate;
    this.addBar = function(a, b) {
        var c = 0, d = a.$parent.$index;
        angular.isDefined(d) && f[d] && (c = f[d].value), f.push(a), this.update(b, a.value, c), 
        a.$watch("value", function(a, c) {
            a !== c && e.update(b, a, c);
        }), a.$on("$destroy", function() {
            e.removeBar(a);
        });
    }, this.update = function(a, b, c) {
        var e = this.getPercentage(b);
        h ? (a.css("width", this.getPercentage(c) + "%"), d(a, {
            width: e + "%"
        })) : a.css({
            transition: "none",
            width: e + "%"
        });
    }, this.removeBar = function(a) {
        f.splice(f.indexOf(a), 1);
    }, this.getPercentage = function(a) {
        return Math.round(100 * a / g);
    };
} ]).directive("progress", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        controller: "ProgressController",
        require: "progress",
        scope: {},
        template: '<div class="progress" ng-transclude></div>'
    };
}).directive("bar", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        require: "^progress",
        scope: {
            value: "=",
            type: "@"
        },
        templateUrl: "template/progressbar/bar.html",
        link: function(a, b, c, d) {
            d.addBar(a, b);
        }
    };
}).directive("progressbar", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        controller: "ProgressController",
        scope: {
            value: "=",
            type: "@"
        },
        templateUrl: "template/progressbar/progressbar.html",
        link: function(a, b, c, d) {
            d.addBar(a, angular.element(b.children()[0]));
        }
    };
}), angular.module("mm.foundation.rating", []).constant("ratingConfig", {
    max: 5,
    stateOn: null,
    stateOff: null
}).controller("RatingController", [ "$scope", "$attrs", "$parse", "ratingConfig", function(a, b, c, d) {
    this.maxRange = angular.isDefined(b.max) ? a.$parent.$eval(b.max) : d.max, this.stateOn = angular.isDefined(b.stateOn) ? a.$parent.$eval(b.stateOn) : d.stateOn, 
    this.stateOff = angular.isDefined(b.stateOff) ? a.$parent.$eval(b.stateOff) : d.stateOff, 
    this.createRateObjects = function(a) {
        for (var b = {
            stateOn: this.stateOn,
            stateOff: this.stateOff
        }, c = 0, d = a.length; d > c; c++) a[c] = angular.extend({
            index: c
        }, b, a[c]);
        return a;
    }, a.range = this.createRateObjects(angular.isDefined(b.ratingStates) ? angular.copy(a.$parent.$eval(b.ratingStates)) : new Array(this.maxRange)), 
    a.rate = function(b) {
        a.value === b || a.readonly || (a.value = b);
    }, a.enter = function(b) {
        a.readonly || (a.val = b), a.onHover({
            value: b
        });
    }, a.reset = function() {
        a.val = angular.copy(a.value), a.onLeave();
    }, a.$watch("value", function(b) {
        a.val = b;
    }), a.readonly = !1, b.readonly && a.$parent.$watch(c(b.readonly), function(b) {
        a.readonly = !!b;
    });
} ]).directive("rating", function() {
    return {
        restrict: "EA",
        scope: {
            value: "=",
            onHover: "&",
            onLeave: "&"
        },
        controller: "RatingController",
        templateUrl: "template/rating/rating.html",
        replace: !0
    };
}), angular.module("mm.foundation.tabs", []).controller("TabsetController", [ "$scope", function(a) {
    var b = this, c = b.tabs = a.tabs = [];
    b.select = function(a) {
        angular.forEach(c, function(a) {
            a.active = !1;
        }), a.active = !0;
    }, b.addTab = function(a) {
        c.push(a), (1 === c.length || a.active) && b.select(a);
    }, b.removeTab = function(a) {
        var d = c.indexOf(a);
        if (a.active && c.length > 1) {
            var e = d == c.length - 1 ? d - 1 : d + 1;
            b.select(c[e]);
        }
        c.splice(d, 1);
    };
} ]).directive("tabset", function() {
    return {
        restrict: "EA",
        transclude: !0,
        replace: !0,
        scope: {},
        controller: "TabsetController",
        templateUrl: "template/tabs/tabset.html",
        link: function(a, b, c) {
            a.vertical = angular.isDefined(c.vertical) ? a.$parent.$eval(c.vertical) : !1, a.justified = angular.isDefined(c.justified) ? a.$parent.$eval(c.justified) : !1, 
            a.type = angular.isDefined(c.type) ? a.$parent.$eval(c.type) : "tabs";
        }
    };
}).directive("tab", [ "$parse", function(a) {
    return {
        require: "^tabset",
        restrict: "EA",
        replace: !0,
        templateUrl: "template/tabs/tab.html",
        transclude: !0,
        scope: {
            heading: "@",
            onSelect: "&select",
            onDeselect: "&deselect"
        },
        controller: function() {},
        compile: function(b, c, d) {
            return function(b, c, e, f) {
                var g, h;
                e.active ? (g = a(e.active), h = g.assign, b.$parent.$watch(g, function(a, c) {
                    a !== c && (b.active = !!a);
                }), b.active = g(b.$parent)) : h = g = angular.noop, b.$watch("active", function(a) {
                    angular.isFunction(h) && (h(b.$parent, a), a ? (f.select(b), b.onSelect()) : b.onDeselect());
                }), b.disabled = !1, e.disabled && b.$parent.$watch(a(e.disabled), function(a) {
                    b.disabled = !!a;
                }), b.select = function() {
                    b.disabled || (b.active = !0);
                }, f.addTab(b), b.$on("$destroy", function() {
                    f.removeTab(b);
                }), b.$transcludeFn = d;
            };
        }
    };
} ]).directive("tabHeadingTransclude", [ function() {
    return {
        restrict: "A",
        require: "^tab",
        link: function(a, b) {
            a.$watch("headingElement", function(a) {
                a && (b.html(""), b.append(a));
            });
        }
    };
} ]).directive("tabContentTransclude", function() {
    function a(a) {
        return a.tagName && (a.hasAttribute("tab-heading") || a.hasAttribute("data-tab-heading") || "tab-heading" === a.tagName.toLowerCase() || "data-tab-heading" === a.tagName.toLowerCase());
    }
    return {
        restrict: "A",
        require: "^tabset",
        link: function(b, c, d) {
            var e = b.$eval(d.tabContentTransclude);
            e.$transcludeFn(e.$parent, function(b) {
                angular.forEach(b, function(b) {
                    a(b) ? e.headingElement = b : c.append(b);
                });
            });
        }
    };
}), angular.module("mm.foundation.topbar", [ "mm.foundation.mediaQueries" ]).factory("closest", [ function() {
    return function(a, b) {
        for (var c = function(a, b) {
            for (var c = (a.parentNode || a.document).querySelectorAll(b), d = -1; c[++d] && c[d] != a; ) ;
            return !!c[d];
        }, d = a[0]; d; ) {
            if (c(d, b)) return angular.element(d);
            d = d.parentElement;
        }
        return !1;
    };
} ]).directive("topBar", [ "$timeout", "$compile", "$window", "$document", "mediaQueries", function(a, b, c, d, e) {
    return {
        scope: {
            stickyClass: "@",
            backText: "@",
            stickyOn: "=",
            customBackText: "=",
            isHover: "=",
            mobileShowParentLink: "=",
            scrolltop: "="
        },
        restrict: "EA",
        replace: !0,
        templateUrl: "template/topbar/top-bar.html",
        transclude: !0,
        link: function(a, b) {
            var f = a.topbar = b, g = f.parent(), h = angular.element(d[0].querySelector("body")), i = a.isSticky = function() {
                var b = g.hasClass(a.settings.stickyClass);
                return b && "all" === a.settings.stickyOn ? !0 : b && e.small() && "small" === a.settings.stickyOn ? !0 : b && e.medium() && "medium" === a.settings.stickyOn ? !0 : b && e.large() && "large" === a.settings.stickyOn ? !0 : !1;
            }, j = function() {
                if (a.stickyTopbar && a.isSticky()) {
                    var b = angular.element(d[0].querySelector("." + a.settings.stickyClass)), e = k;
                    c.pageYOffset > e && !b.hasClass("fixed") ? (b.addClass("fixed"), h.css("padding-top", a.originalHeight + "px")) : c.pageYOffset <= e && b.hasClass("fixed") && (b.removeClass("fixed"), 
                    h.css("padding-top", ""));
                }
            };
            if (a.toggle = function(b) {
                if (!e.topbarBreakpoint()) return !1;
                var d = void 0 === b ? !f.hasClass("expanded") : b;
                d ? f.addClass("expanded") : f.removeClass("expanded"), a.settings.scrolltop ? !d && f.hasClass("fixed") ? (f.parent().addClass("fixed"), 
                f.removeClass("fixed"), h.css("padding-top", a.originalHeight + "px")) : d && f.parent().hasClass("fixed") && (f.parent().removeClass("fixed"), 
                f.addClass("fixed"), h.css("padding-top", ""), c.scrollTo(0, 0)) : (i() && f.parent().addClass("fixed"), 
                f.parent().hasClass("fixed") && (d ? (f.addClass("fixed"), f.parent().addClass("expanded"), 
                h.css("padding-top", a.originalHeight + "px")) : (f.removeClass("fixed"), f.parent().removeClass("expanded"), 
                j())));
            }, g.hasClass("fixed") || i()) {
                a.stickyTopbar = !0, a.height = g[0].offsetHeight;
                var k = g[0].getBoundingClientRect().top;
            } else a.height = f[0].offsetHeight;
            a.originalHeight = a.height, a.$watch("height", function(a) {
                a ? f.css("height", a + "px") : f.css("height", "");
            });
            var l = e.topbarBreakpoint();
            angular.element(c).bind("resize", function() {
                var b = e.topbarBreakpoint();
                if (l !== b) {
                    l = e.topbarBreakpoint(), f.removeClass("expanded"), f.parent().removeClass("expanded"), 
                    a.height = "";
                    var c = angular.element(f[0].querySelectorAll("section"));
                    angular.forEach(c, function(a) {
                        angular.element(a.querySelectorAll("li.moved")).removeClass("moved");
                    }), a.$apply();
                }
            }), angular.element(c).bind("scroll", function() {
                j(), a.$apply();
            }), a.$on("$destroy", function() {
                angular.element(c).unbind("scroll"), angular.element(c).unbind("resize");
            }), g.hasClass("fixed") && h.css("padding-top", a.originalHeight + "px");
        },
        controller: [ "$window", "$scope", "closest", function(b, c, f) {
            c.settings = {}, c.settings.stickyClass = c.stickyClass || "sticky", c.settings.backText = c.backText || "Back", 
            c.settings.stickyOn = c.stickyOn || "all", c.settings.customBackText = void 0 === c.customBackText ? !0 : c.customBackText, 
            c.settings.isHover = void 0 === c.isHover ? !0 : c.isHover, c.settings.mobileShowParentLink = void 0 === c.mobileShowParentLink ? !0 : c.mobileShowParentLink, 
            c.settings.scrolltop = void 0 === c.scrolltop ? !0 : c.scrolltop, this.settings = c.settings, 
            c.index = 0;
            var g = function(a) {
                var b = a.offsetHeight, c = a.currentStyle || getComputedStyle(a);
                return b += parseInt(c.marginTop, 10) + parseInt(c.marginBottom, 10);
            }, h = [];
            this.addSection = function(a) {
                h.push(a);
            }, this.removeSection = function(a) {
                var b = h.indexOf(a);
                b > -1 && h.splice(b, 1);
            };
            var i = /rtl/i.test(d.find("html").attr("dir")) ? "right" : "left";
            c.$watch("index", function(a) {
                for (var b = 0; b < h.length; b++) h[b].move(i, a);
            }), this.toggle = function(a) {
                c.toggle(a);
                for (var b = 0; b < h.length; b++) h[b].reset();
                c.index = 0, c.height = "", c.$apply();
            }, this.back = function(b) {
                if (!(c.index < 1) && e.topbarBreakpoint()) {
                    var d = angular.element(b.currentTarget), h = f(d, "li.moved"), i = h.parent();
                    c.index = c.index - 1, c.height = 0 === c.index ? "" : c.originalHeight + g(i[0]), 
                    a(function() {
                        h.removeClass("moved");
                    }, 300);
                }
            }, this.forward = function(a) {
                if (!e.topbarBreakpoint()) return !1;
                var b = angular.element(a.currentTarget), d = f(b, "li");
                d.addClass("moved"), c.height = c.originalHeight + g(b.parent()[0].querySelector("ul")), 
                c.index = c.index + 1, c.$apply();
            };
        } ]
    };
} ]).directive("toggleTopBar", [ "closest", function(a) {
    return {
        scope: {},
        require: "^topBar",
        restrict: "A",
        replace: !0,
        templateUrl: "template/topbar/toggle-top-bar.html",
        transclude: !0,
        link: function(b, c, d, e) {
            c.bind("click", function(b) {
                var c = a(angular.element(b.currentTarget), "li");
                c.hasClass("back") || c.hasClass("has-dropdown") || e.toggle();
            }), b.$on("$destroy", function() {
                c.unbind("click");
            });
        }
    };
} ]).directive("topBarSection", [ "$compile", "closest", function(a, b) {
    return {
        scope: {},
        require: "^topBar",
        restrict: "EA",
        replace: !0,
        templateUrl: "template/topbar/top-bar-section.html",
        transclude: !0,
        link: function(a, c, d, e) {
            var f = c;
            a.reset = function() {
                angular.element(f[0].querySelectorAll("li.moved")).removeClass("moved");
            }, a.move = function(a, b) {
                f.css("left" === a ? {
                    left: -100 * b + "%"
                } : {
                    right: -100 * b + "%"
                });
            }, e.addSection(a), a.$on("$destroy", function() {
                e.removeSection(a);
            });
            var g = f[0].querySelectorAll("li>a");
            angular.forEach(g, function(c) {
                var d = angular.element(c), f = b(d, "li");
                f.hasClass("has-dropdown") || f.hasClass("back") || f.hasClass("title") || (d.bind("click", function() {
                    e.toggle(!1);
                }), a.$on("$destroy", function() {
                    d.bind("click");
                }));
            });
        }
    };
} ]).directive("hasDropdown", [ "mediaQueries", function(a) {
    return {
        scope: {},
        require: "^topBar",
        restrict: "A",
        templateUrl: "template/topbar/has-dropdown.html",
        replace: !0,
        transclude: !0,
        link: function(b, c, d, e) {
            b.triggerLink = c.children("a")[0];
            var f = angular.element(b.triggerLink);
            f.bind("click", function(a) {
                e.forward(a);
            }), b.$on("$destroy", function() {
                f.unbind("click");
            }), c.bind("mouseenter", function() {
                e.settings.isHover && !a.topbarBreakpoint() && c.addClass("not-click");
            }), c.bind("click", function() {
                e.settings.isHover || a.topbarBreakpoint() || c.toggleClass("not-click");
            }), c.bind("mouseleave", function() {
                c.removeClass("not-click");
            }), b.$on("$destroy", function() {
                c.unbind("click"), c.unbind("mouseenter"), c.unbind("mouseleave");
            });
        },
        controller: [ "$window", "$scope", function(a, b) {
            this.triggerLink = b.triggerLink;
        } ]
    };
} ]).directive("topBarDropdown", [ "$compile", function(a) {
    return {
        scope: {},
        require: [ "^topBar", "^hasDropdown" ],
        restrict: "A",
        replace: !0,
        templateUrl: "template/topbar/top-bar-dropdown.html",
        transclude: !0,
        link: function(b, c, d, e) {
            var f = e[0], g = e[1], h = angular.element(g.triggerLink), i = h.attr("href");
            b.linkText = h.text(), b.back = function(a) {
                f.back(a);
            }, b.backText = f.settings.customBackText ? f.settings.backText : "&laquo; " + h.html();
            var j;
            j = angular.element(f.settings.mobileShowParentLink && i && i.length > 1 ? '<li class="title back js-generated"><h5><a href="#" ng-click="back($event);">{{backText}}</a></h5></li><li><a class="parent-link js-generated" href="' + i + '">{{linkText}}</a></li>' : '<li class="title back js-generated"><h5><a href="" ng-click="back($event);">{{backText}}</a></h5></li>'), 
            a(j)(b), c.prepend(j);
        }
    };
} ]), angular.module("mm.foundation.tour", [ "mm.foundation.position", "mm.foundation.tooltip" ]).service("$tour", [ "$window", function(a) {
    function b() {
        return parseInt(a.localStorage.getItem("mm.tour.step"), 10);
    }
    function c(b) {
        d = b, a.localStorage.setItem("mm.tour.step", b);
    }
    var d = b(), e = {};
    this.add = function(a, b) {
        e[a] = b;
    }, this.has = function(a) {
        return !!e[a];
    }, this.isActive = function() {
        return d > 0;
    }, this.current = function(a) {
        return a ? void c(d) : d;
    }, this.start = function() {
        c(1);
    }, this.next = function() {
        c(d + 1);
    }, this.end = function() {
        c(0);
    };
} ]).directive("stepTextPopup", [ "$tour", function(a) {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            title: "@",
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tour/tour.html",
        link: function(b, c) {
            b.isLastStep = function() {
                return !a.has(a.current() + 1);
            }, b.endTour = function() {
                c.remove(), a.end();
            }, b.nextStep = function() {
                c.remove(), a.next();
            };
        }
    };
} ]).directive("stepText", [ "$position", "$tooltip", "$tour", "$window", function(a, b, c, d) {
    function e(a) {
        var b = a[0].getBoundingClientRect();
        return b.top >= 0 && b.left >= 0 && b.bottom <= d.innerHeight - 80 && b.right <= d.innerWidth;
    }
    function f(b, f, g) {
        var h = parseInt(g.stepIndex, 10);
        if (c.isActive() && h && (c.add(h, g), h === c.current())) {
            if (!e(f)) {
                var i = a.offset(f);
                d.scrollTo(0, i.top - d.innerHeight / 2);
            }
            return !0;
        }
        return !1;
    }
    return b("stepText", "step", f);
} ]), angular.module("mm.foundation.typeahead", [ "mm.foundation.position", "mm.foundation.bindHtml" ]).factory("typeaheadParser", [ "$parse", function(a) {
    var b = /^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;
    return {
        parse: function(c) {
            var d = c.match(b);
            if (!d) throw new Error("Expected typeahead specification in form of '_modelValue_ (as _label_)? for _item_ in _collection_' but got '" + c + "'.");
            return {
                itemName: d[3],
                source: a(d[4]),
                viewMapper: a(d[2] || d[1]),
                modelMapper: a(d[1])
            };
        }
    };
} ]).directive("typeahead", [ "$compile", "$parse", "$q", "$timeout", "$document", "$position", "typeaheadParser", function(a, b, c, d, e, f, g) {
    var h = [ 9, 13, 27, 38, 40 ];
    return {
        require: "ngModel",
        link: function(i, j, k, l) {
            var m, n = i.$eval(k.typeaheadMinLength) || 1, o = i.$eval(k.typeaheadWaitMs) || 0, p = i.$eval(k.typeaheadEditable) !== !1, q = b(k.typeaheadLoading).assign || angular.noop, r = b(k.typeaheadOnSelect), s = k.typeaheadInputFormatter ? b(k.typeaheadInputFormatter) : void 0, t = k.typeaheadAppendToBody ? b(k.typeaheadAppendToBody) : !1, u = b(k.ngModel).assign, v = g.parse(k.typeahead), w = angular.element("<div typeahead-popup></div>");
            w.attr({
                matches: "matches",
                active: "activeIdx",
                select: "select(activeIdx)",
                query: "query",
                position: "position"
            }), angular.isDefined(k.typeaheadTemplateUrl) && w.attr("template-url", k.typeaheadTemplateUrl);
            var x = i.$new();
            i.$on("$destroy", function() {
                x.$destroy();
            });
            var y = function() {
                x.matches = [], x.activeIdx = -1;
            }, z = function(a) {
                var b = {
                    $viewValue: a
                };
                q(i, !0), c.when(v.source(i, b)).then(function(c) {
                    if (a === l.$viewValue && m) {
                        if (c.length > 0) {
                            x.activeIdx = 0, x.matches.length = 0;
                            for (var d = 0; d < c.length; d++) b[v.itemName] = c[d], x.matches.push({
                                label: v.viewMapper(x, b),
                                model: c[d]
                            });
                            x.query = a, x.position = t ? f.offset(j) : f.position(j), x.position.top = x.position.top + j.prop("offsetHeight");
                        } else y();
                        q(i, !1);
                    }
                }, function() {
                    y(), q(i, !1);
                });
            };
            y(), x.query = void 0;
            var A;
            l.$parsers.unshift(function(a) {
                return a && a.length >= n ? o > 0 ? (A && d.cancel(A), A = d(function() {
                    z(a);
                }, o)) : z(a) : (q(i, !1), y()), p ? a : a ? void l.$setValidity("editable", !1) : (l.$setValidity("editable", !0), 
                a);
            }), l.$formatters.push(function(a) {
                var b, c, d = {};
                return s ? (d.$model = a, s(i, d)) : (d[v.itemName] = a, b = v.viewMapper(i, d), 
                d[v.itemName] = void 0, c = v.viewMapper(i, d), b !== c ? b : a);
            }), x.select = function(a) {
                var b, c, d = {};
                d[v.itemName] = c = x.matches[a].model, b = v.modelMapper(i, d), u(i, b), l.$setValidity("editable", !0), 
                r(i, {
                    $item: c,
                    $model: b,
                    $label: v.viewMapper(i, d)
                }), y(), j[0].focus();
            }, j.bind("keydown", function(a) {
                0 !== x.matches.length && -1 !== h.indexOf(a.which) && (a.preventDefault(), 40 === a.which ? (x.activeIdx = (x.activeIdx + 1) % x.matches.length, 
                x.$digest()) : 38 === a.which ? (x.activeIdx = (x.activeIdx ? x.activeIdx : x.matches.length) - 1, 
                x.$digest()) : 13 === a.which || 9 === a.which ? x.$apply(function() {
                    x.select(x.activeIdx);
                }) : 27 === a.which && (a.stopPropagation(), y(), x.$digest()));
            }), j.bind("blur", function() {
                m = !1;
            }), j.bind("focus", function() {
                m = !0;
            });
            var B = function(a) {
                j[0] !== a.target && (y(), x.$digest());
            };
            e.bind("click", B), i.$on("$destroy", function() {
                e.unbind("click", B);
            });
            var C = a(w)(x);
            t ? e.find("body").append(C) : j.after(C);
        }
    };
} ]).directive("typeaheadPopup", function() {
    return {
        restrict: "EA",
        scope: {
            matches: "=",
            query: "=",
            active: "=",
            position: "=",
            select: "&"
        },
        replace: !0,
        templateUrl: "template/typeahead/typeahead-popup.html",
        link: function(a, b, c) {
            a.templateUrl = c.templateUrl, a.isOpen = function() {
                return a.matches.length > 0;
            }, a.isActive = function(b) {
                return a.active == b;
            }, a.selectActive = function(b) {
                a.active = b;
            }, a.selectMatch = function(b) {
                a.select({
                    activeIdx: b
                });
            };
        }
    };
}).directive("typeaheadMatch", [ "$http", "$templateCache", "$compile", "$parse", function(a, b, c, d) {
    return {
        restrict: "EA",
        scope: {
            index: "=",
            match: "=",
            query: "="
        },
        link: function(e, f, g) {
            var h = d(g.templateUrl)(e.$parent) || "template/typeahead/typeahead-match.html";
            a.get(h, {
                cache: b
            }).success(function(a) {
                f.replaceWith(c(a.trim())(e));
            });
        }
    };
} ]).filter("typeaheadHighlight", function() {
    function a(a) {
        return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    }
    return function(b, c) {
        return c ? b.replace(new RegExp(a(c), "gi"), "<strong>$&</strong>") : b;
    };
}), angular.module("template/accordion/accordion-group.html", []).run([ "$templateCache", function(a) {
    a.put("template/accordion/accordion-group.html", '<dd>\n  <a ng-click="isOpen = !isOpen" ng-class="{ active: isOpen }"  accordion-transclude="heading">{{heading}}</a>\n  <div class="content" ng-style="isOpen ? {display: \'block\'} : {}" ng-transclude></div>\n</dd>\n');
} ]), angular.module("template/accordion/accordion.html", []).run([ "$templateCache", function(a) {
    a.put("template/accordion/accordion.html", '<dl class="accordion" ng-transclude></dl>\n');
} ]), angular.module("template/alert/alert.html", []).run([ "$templateCache", function(a) {
    a.put("template/alert/alert.html", "<div class='alert-box' ng-class='(type || \"\")'>\n  <span ng-transclude></span>\n  <a ng-show='closeable' class='close' ng-click='close()'>&times;</a>\n</div>\n");
} ]), angular.module("template/modal/backdrop.html", []).run([ "$templateCache", function(a) {
    a.put("template/modal/backdrop.html", '<div class="reveal-modal-bg fade" ng-class="{in: animate}" ng-click="close($event)" style="display: block"></div>\n');
} ]), angular.module("template/modal/window.html", []).run([ "$templateCache", function(a) {
    a.put("template/modal/window.html", '<div tabindex="-1" class="reveal-modal fade {{ windowClass }}"\n  ng-class="{in: animate}" style="display: block; visibility: visible">\n  <div ng-transclude></div>\n</div>\n');
} ]), angular.module("template/pagination/pager.html", []).run([ "$templateCache", function(a) {
    a.put("template/pagination/pager.html", '<ul class="pagination">\n  <li ng-repeat="page in pages" class="arrow" ng-class="{unavailable: page.disabled, left: page.previous, right: page.next}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n</ul>\n');
} ]), angular.module("template/pagination/pagination.html", []).run([ "$templateCache", function(a) {
    a.put("template/pagination/pagination.html", '<ul class="pagination">\n  <li ng-repeat="page in pages" ng-class="{arrow: $first || $last, current: page.active, unavailable: page.disabled}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n</ul>\n');
} ]), angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run([ "$templateCache", function(a) {
    a.put("template/tooltip/tooltip-html-unsafe-popup.html", '<span class="tooltip tip-{{placement}}"\n  ng-class="{ in: isOpen(), fade: animation() }"\n  style="width: auto">\n  <span bind-html-unsafe="content"></span>\n  <span class="nub"></span>\n</span>\n');
} ]), angular.module("template/tooltip/tooltip-popup.html", []).run([ "$templateCache", function(a) {
    a.put("template/tooltip/tooltip-popup.html", '<span class="tooltip tip-{{placement}}"\n  ng-class="{ in: isOpen(), fade: animation() }"\n  style="width: auto">\n  <span ng-bind="content"></span>\n  <span class="nub"></span>\n</span>\n');
} ]), angular.module("template/popover/popover.html", []).run([ "$templateCache", function(a) {
    a.put("template/popover/popover.html", '<div class="joyride-tip-guide" ng-class="{ in: isOpen(), fade: animation() }">\n  <span class="joyride-nub" ng-class="{\n    bottom: placement === \'top\',\n    left: placement === \'right\',\n    right: placement === \'left\',\n    top: placement === \'bottom\'\n  }"></span>\n  <div class="joyride-content-wrapper">\n    <h4 ng-bind="title" ng-show="title"></h4>\n    <p ng-bind="content"></p>\n  </div>\n</div>\n');
} ]), angular.module("template/progressbar/bar.html", []).run([ "$templateCache", function(a) {
    a.put("template/progressbar/bar.html", '<span class="meter" ng-transclude></span>\n');
} ]), angular.module("template/progressbar/progress.html", []).run([ "$templateCache", function(a) {
    a.put("template/progressbar/progress.html", '<div class="progress" ng-class="type" ng-transclude></div>\n');
} ]), angular.module("template/progressbar/progressbar.html", []).run([ "$templateCache", function(a) {
    a.put("template/progressbar/progressbar.html", '<div class="progress" ng-class="type">\n  <span class="meter" ng-transclude></span>\n</div>\n');
} ]), angular.module("template/rating/rating.html", []).run([ "$templateCache", function(a) {
    a.put("template/rating/rating.html", '<span ng-mouseleave="reset()">\n  <i ng-repeat="r in range" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="fa"\n    ng-class="$index < val && (r.stateOn || \'fa-star\') || (r.stateOff || \'fa-star-o\')"></i>\n</span>\n');
} ]), angular.module("template/tabs/tab.html", []).run([ "$templateCache", function(a) {
    a.put("template/tabs/tab.html", '<dd ng-class="{active: active}">\n  <a ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</dd>\n');
} ]), angular.module("template/tabs/tabset.html", []).run([ "$templateCache", function(a) {
    a.put("template/tabs/tabset.html", '<div class="tabbable">\n  <dl class="tabs" ng-class="{\'vertical\': vertical}" ng-transclude></dl>\n  <div class="tabs-content" ng-class="{\'vertical\': vertical}">\n    <div class="content" \n      ng-repeat="tab in tabs" \n      ng-class="{active: tab.active}">\n      <div tab-content-transclude="tab"></div>\n    </div>\n  </div>\n</div>\n');
} ]), angular.module("template/topbar/has-dropdown.html", []).run([ "$templateCache", function(a) {
    a.put("template/topbar/has-dropdown.html", '<li class="has-dropdown" ng-transclude></li>');
} ]), angular.module("template/topbar/toggle-top-bar.html", []).run([ "$templateCache", function(a) {
    a.put("template/topbar/toggle-top-bar.html", '<li class="toggle-topbar menu-icon" ng-transclude></li>');
} ]), angular.module("template/topbar/top-bar-dropdown.html", []).run([ "$templateCache", function(a) {
    a.put("template/topbar/top-bar-dropdown.html", '<ul class="dropdown" ng-transclude></ul>');
} ]), angular.module("template/topbar/top-bar-section.html", []).run([ "$templateCache", function(a) {
    a.put("template/topbar/top-bar-section.html", '<section class="top-bar-section" ng-transclude></section>');
} ]), angular.module("template/topbar/top-bar.html", []).run([ "$templateCache", function(a) {
    a.put("template/topbar/top-bar.html", '<nav class="top-bar" ng-transclude></nav>');
} ]), angular.module("template/tour/tour.html", []).run([ "$templateCache", function(a) {
    a.put("template/tour/tour.html", '<div class="joyride-tip-guide" ng-class="{ in: isOpen(), fade: animation() }">\n  <span class="joyride-nub" ng-class="{\n    bottom: placement === \'top\',\n    left: placement === \'right\',\n    right: placement === \'left\',\n    top: placement === \'bottom\'\n  }"></span>\n  <div class="joyride-content-wrapper">\n    <h4 ng-bind="title" ng-show="title"></h4>\n    <p ng-bind="content"></p>\n    <a class="small button joyride-next-tip" ng-show="!isLastStep()" ng-click="nextStep()">Next</a>\n    <a class="small button joyride-next-tip" ng-show="isLastStep()" ng-click="endTour()">End</a>\n    <a class="joyride-close-tip" ng-click="endTour()">&times;</a>\n  </div>\n</div>\n');
} ]), angular.module("template/typeahead/typeahead-match.html", []).run([ "$templateCache", function(a) {
    a.put("template/typeahead/typeahead-match.html", '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>');
} ]), angular.module("template/typeahead/typeahead-popup.html", []).run([ "$templateCache", function(a) {
    a.put("template/typeahead/typeahead-popup.html", "<ul class=\"f-dropdown\" ng-style=\"{display: isOpen()&&'block' || 'none', top: position.top+'px', left: position.left+'px'}\">\n" + '    <li ng-repeat="match in matches" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n');
} ]), function() {
    "use strict";
    angular.module("base64", []).constant("$base64", function() {
        function a(a, b) {
            var c = f.indexOf(a.charAt(b));
            if (-1 == c) throw "Cannot decode base64";
            return c;
        }
        function b(b) {
            b = "" + b;
            var c, d, f, g = b.length;
            if (0 == g) return b;
            if (g % 4 != 0) throw "Cannot decode base64";
            c = 0, b.charAt(g - 1) == e && (c = 1, b.charAt(g - 2) == e && (c = 2), g -= 4);
            var h = [];
            for (d = 0; g > d; d += 4) f = a(b, d) << 18 | a(b, d + 1) << 12 | a(b, d + 2) << 6 | a(b, d + 3), 
            h.push(String.fromCharCode(f >> 16, f >> 8 & 255, 255 & f));
            switch (c) {
              case 1:
                f = a(b, d) << 18 | a(b, d + 1) << 12 | a(b, d + 2) << 6, h.push(String.fromCharCode(f >> 16, f >> 8 & 255));
                break;

              case 2:
                f = a(b, d) << 18 | a(b, d + 1) << 12, h.push(String.fromCharCode(f >> 16));
            }
            return h.join("");
        }
        function c(a, b) {
            var c = a.charCodeAt(b);
            if (c > 255) throw "INVALID_CHARACTER_ERR: DOM Exception 5";
            return c;
        }
        function d(a) {
            if (1 != arguments.length) throw "SyntaxError: Not enough arguments";
            var b, d, g = [];
            a = "" + a;
            var h = a.length - a.length % 3;
            if (0 == a.length) return a;
            for (b = 0; h > b; b += 3) d = c(a, b) << 16 | c(a, b + 1) << 8 | c(a, b + 2), g.push(f.charAt(d >> 18)), 
            g.push(f.charAt(d >> 12 & 63)), g.push(f.charAt(d >> 6 & 63)), g.push(f.charAt(63 & d));
            switch (a.length - h) {
              case 1:
                d = c(a, b) << 16, g.push(f.charAt(d >> 18) + f.charAt(d >> 12 & 63) + e + e);
                break;

              case 2:
                d = c(a, b) << 16 | c(a, b + 1) << 8, g.push(f.charAt(d >> 18) + f.charAt(d >> 12 & 63) + f.charAt(d >> 6 & 63) + e);
            }
            return g.join("");
        }
        var e = "=", f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        return {
            encode: d,
            decode: b
        };
    }());
}(), !function(a) {
    "function" == typeof define && define.amd ? define("picker", [ "angular" ], a) : this.Picker = a(angular);
}(function(a) {
    function b(a, d, e, g) {
        function h() {
            return b._.node("div", b._.node("div", b._.node("div", b._.node("div", r.component.nodes(o.open), n.box), n.wrap), n.frame), n.holder);
        }
        function i() {
            p.data(d, r), p.addClass(n.input), p[0].value = p.attr("data-value") ? r.get("select", m.format) : a.value, 
            angular.element(document.querySelectorAll("#" + o.id)).on("focus", l), angular.element(document.querySelectorAll("#" + o.id)).on("click", l), 
            m.editable || angular.element(document.querySelectorAll("#" + o.id)).on("keydown", function(a) {
                var b = a.keyCode, c = /^(8|46)$/.test(b);
                return 27 == b ? (r.close(), !1) : void ((32 == b || c || !o.open && r.component.key[b]) && (a.preventDefault(), 
                a.stopPropagation(), c ? r.clear().close() : r.open()));
            }), c(a, {
                haspopup: !0,
                expanded: !1,
                readonly: !1,
                owns: a.id + "_root" + (r._hidden ? " " + r._hidden.id : "")
            });
        }
        function j() {
            function d() {
                angular.element(r.$root[0].querySelectorAll("[data-pick], [data-nav], [data-clear]")).on("click", function() {
                    var c = angular.element(this), e = c.hasClass(n.navDisabled) || c.hasClass(n.disabled), f = document.activeElement;
                    f = f && (f.type || f.href) && f, (e || f && !r.$root[0].contains(f)) && a.focus(), 
                    c.attr("data-nav") && !e ? (r.set("highlight", r.component.item.highlight, {
                        nav: parseInt(c.attr("data-nav"))
                    }), d()) : b._.isInteger(parseInt(c.attr("data-pick"))) && !e ? (r.set("select", parseInt(c.attr("data-pick"))).close(!0), 
                    d()) : c.attr("data-clear") && (r.clear().close(!0), d());
                });
            }
            r.$root.on("focusin", function(a) {
                r.$root.removeClass(n.focused), c(r.$root[0], "selected", !1), a.stopPropagation();
            }), r.$root.on("mousedown click", function(b) {
                var c = b.target;
                c != r.$root.children()[0] && (b.stopPropagation(), "mousedown" == b.type && "input" !== angular.element(c)[0].tagName && "OPTION" != c.nodeName && (b.preventDefault(), 
                a.focus()));
            }), d(), c(r.$root[0], "hidden", !0);
        }
        function k() {
            var b = [ "string" == typeof m.hiddenPrefix ? m.hiddenPrefix : "", "string" == typeof m.hiddenSuffix ? m.hiddenSuffix : "_submit" ];
            r._hidden = angular.element('<input type=hidden name="' + b[0] + a.name + b[1] + '"id="' + b[0] + a.id + b[1] + '"' + (p.attr("data-value") || a.value ? ' value="' + r.get("select", m.formatSubmit) + '"' : "") + ">")[0], 
            p.on("change." + o.id, function() {
                r._hidden.value = a.value ? r.get("select", m.formatSubmit) : "";
            }).after(r._hidden);
        }
        function l(a) {
            a.stopPropagation(), "focus" == a.type && (r.$root.addClass(n.focused), c(r.$root[0], "selected", !0)), 
            r.open();
        }
        if (!a) return b;
        var m;
        e ? (m = e.defaults, angular.extend(m, g)) : m = g || {};
        var n = b.klasses();
        angular.extend(n, m.klass);
        var o = {
            id: a.id || "P" + Math.abs(~~(Math.random() * new Date()))
        }, p = angular.element(a), q = function() {
            return this.start();
        }, r = q.prototype = {
            constructor: q,
            $node: p,
            start: function() {
                return o && o.start ? r : (o.methods = {}, o.start = !0, o.open = !1, o.type = a.type, 
                a.autofocus = a == document.activeElement, a.type = "text", a.readOnly = !m.editable, 
                a.id = a.id || o.id, r.component = new e(r, m), r.$root = angular.element(b._.node("div", h(), n.picker, 'id="' + a.id + '_root"')), 
                j(), m.formatSubmit && k(), i(), m.container ? angular.element(m.container).append(r.$root) : p.after(r.$root), 
                r.on({
                    start: r.component.onStart,
                    render: r.component.onRender,
                    stop: r.component.onStop,
                    open: r.component.onOpen,
                    close: r.component.onClose,
                    set: r.component.onSet
                }).on({
                    start: m.onStart,
                    render: m.onRender,
                    stop: m.onStop,
                    open: m.onOpen,
                    close: m.onClose,
                    set: m.onSet
                }), a.autofocus && r.open(), r.trigger("start").trigger("render"));
            },
            render: function(a) {
                return a ? r.$root.html(h()) : angular.element(r.$root[0].querySelectorAll("." + n.box)).html(r.component.nodes(o.open)), 
                r.trigger("render");
            },
            stop: function() {
                return o.start ? (r.close(), r._hidden && r._hidden.parentNode.removeChild(r._hidden), 
                r.$root.remove(), p.removeClass(n.input).removeData(d), setTimeout(function() {
                    p.off("." + o.id);
                }, 0), a.type = o.type, a.readOnly = !1, r.trigger("stop"), o.methods = {}, o.start = !1, 
                r) : r;
            },
            open: function(d) {
                return o.open ? r : (p.addClass(n.active), c(a, "expanded", !0), r.$root.addClass(n.opened), 
                c(r.$root[0], "hidden", !1), d !== !1 && (o.open = !0, p.triggerHandler("focus"), 
                angular.element(document.querySelectorAll("#" + o.id)).on("click focusin", function(b) {
                    var c = b.target;
                    c != a && c != document && 3 != b.which && r.close(c === r.$root.children()[0]);
                }), angular.element(document.querySelectorAll("#" + o.id)).on("keydown", function(c) {
                    var d = c.keyCode, e = r.component.key[d], f = c.target;
                    27 == d ? r.close(!0) : f != a || !e && 13 != d ? r.$root[0].contains(f) && 13 == d && (c.preventDefault(), 
                    f.click()) : (c.preventDefault(), e ? b._.trigger(r.component.key.go, r, [ b._.trigger(e) ]) : angular.element(r.$root[0].querySelectorAll("." + n.highlighted)).hasClass(n.disabled) || r.set("select", r.component.item.highlight).close());
                })), r.trigger("open"));
            },
            close: function(b) {
                return b && (p.off("focus." + o.id), p.triggerHandler("focus"), setTimeout(function() {
                    angular.element(document.querySelectorAll("#" + o.id)).on("focus", l);
                }, 0)), p.removeClass(n.active), c(a, "expanded", !1), r.$root.removeClass(n.opened + " " + n.focused), 
                c(r.$root[0], "hidden", !0), c(r.$root[0], "selected", !1), o.open ? (setTimeout(function() {
                    o.open = !1;
                }, 1e3), f.off("." + o.id), r.trigger("close")) : r;
            },
            clear: function() {
                return r.set("clear");
            },
            set: function(a, b, c) {
                var d, e, f = angular.isObject(a), g = f ? a : {};
                if (c = f && angular.isObject(b) ? b : c || {}, a) {
                    f || (g[a] = b);
                    for (d in g) e = g[d], d in r.component.item && r.component.set(d, e, c), ("select" == d || "clear" == d) && (p[0].value = "clear" == d ? "" : r.get(d, m.format), 
                    p.triggerHandler("change"));
                    r.render();
                }
                return c.muted ? r : r.trigger("set", g);
            },
            get: function(c, d) {
                return c = c || "value", null != o[c] ? o[c] : "value" == c ? a.value : c in r.component.item ? "string" == typeof d ? b._.trigger(r.component.formats.toString, r.component, [ d, r.component.get(c) ]) : r.component.get(c) : void 0;
            },
            on: function(a, b) {
                var c, d, e = angular.isObject(a), f = e ? a : {};
                if (a) {
                    e || (f[a] = b);
                    for (c in f) d = f[c], o.methods[c] = o.methods[c] || [], o.methods[c].push(d);
                }
                return r;
            },
            off: function() {
                var a, b, c = arguments;
                for (a = 0, namesCount = c.length; namesCount > a; a += 1) b = c[a], b in o.methods && delete o.methods[b];
                return r;
            },
            trigger: function(a, c) {
                var d = o.methods[a];
                return d && d.map(function(a) {
                    b._.trigger(a, r, [ c ]);
                }), r;
            }
        };
        return new q();
    }
    function c(a, b, c) {
        if (angular.isObject(b)) for (var e in b) d(a, e, b[e]); else d(a, b, c);
    }
    function d(a, b, c) {
        angular.element(a).attr(("role" == b ? "" : "aria-") + b, c);
    }
    function e(a, b) {
        angular.isObject(a) || (a = {
            attribute: b
        }), b = "";
        for (var c in a) {
            var d = ("role" == c ? "" : "aria-") + c, e = a[c];
            b += null == e ? "" : d + '="' + a[c] + '"';
        }
        return b;
    }
    var f = angular.element(document);
    return b.klasses = function(a) {
        return a = a || "picker", {
            picker: a,
            opened: a + "--opened",
            focused: a + "--focused",
            input: a + "__input",
            active: a + "__input--active",
            holder: a + "__holder",
            frame: a + "__frame",
            wrap: a + "__wrap",
            box: a + "__box"
        };
    }, b._ = {
        group: function(a) {
            for (var c, d = "", e = b._.trigger(a.min, a); e <= b._.trigger(a.max, a, [ e ]); e += a.i) c = b._.trigger(a.item, a, [ e ]), 
            d += b._.node(a.node, c[0], c[1], c[2]);
            return d;
        },
        node: function(b, c, d, e) {
            return c ? (c = a.isArray(c) ? c.join("") : c, d = d ? ' class="' + d + '"' : "", 
            e = e ? " " + e : "", "<" + b + d + e + ">" + c + "</" + b + ">") : "";
        },
        lead: function(a) {
            return (10 > a ? "0" : "") + a;
        },
        trigger: function(a, b, c) {
            return "function" == typeof a ? a.apply(b, c || []) : a;
        },
        digits: function(a) {
            return /\d/.test(a[1]) ? 2 : 1;
        },
        isDate: function(a) {
            return {}.toString.call(a).indexOf("Date") > -1 && this.isInteger(a.getDate());
        },
        isInteger: function(a) {
            return {}.toString.call(a).indexOf("Number") > -1 && a % 1 === 0;
        },
        ariaAttr: e
    }, b.extend = function(a, c) {
        angular.element.prototype[a] = function(d, e) {
            var f = this.data(a);
            if ("picker" == d) return f;
            if (f && "string" == typeof d) return b._.trigger(f[d], f, [ e ]), this;
            for (var g = 0; g < this.length; g++) {
                var h = angular.element(this[g]);
                h.data(a) || new b(h[0], a, c, d);
            }
        }, angular.element.prototype[a].defaults = c.defaults;
    }, b;
}), !function(a) {
    "function" == typeof define && define.amd ? define([ "picker", "angular" ], a) : a(Picker, angular);
}(function(a, b) {
    function c(a, c) {
        var d = this, e = a.$node[0].value, f = a.$node.attr("data-value"), g = f || e, h = f ? c.formatSubmit : c.format, i = function() {
            return "rtl" === getComputedStyle(a.$root[0]).direction;
        };
        d.settings = c, d.$node = a.$node, d.queue = {
            min: "measure create",
            max: "measure create",
            now: "now create",
            select: "parse create validate",
            highlight: "parse navigate create validate",
            view: "parse create validate viewset",
            disable: "deactivate",
            enable: "activate"
        }, d.item = {}, d.item.disable = (c.disable || []).slice(0), d.item.enable = -function(a) {
            return a[0] === !0 ? a.shift() : -1;
        }(d.item.disable), d.set("min", c.min).set("max", c.max).set("now"), g ? d.set("select", g, {
            format: h,
            fromValue: !!e
        }) : d.set("select", null).set("highlight", d.item.now), d.key = {
            40: 7,
            38: -7,
            39: function() {
                return i() ? -1 : 1;
            },
            37: function() {
                return i() ? 1 : -1;
            },
            go: function(a) {
                var b = d.item.highlight, c = new Date(b.year, b.month, b.date + a);
                d.set("highlight", [ c.getFullYear(), c.getMonth(), c.getDate() ], {
                    interval: a
                }), this.render();
            }
        }, a.on("render", function() {
            b.element(a.$root[0].querySelectorAll("." + c.klass.selectMonth)).on("change", function() {
                var d = this.value;
                d && (a.set("highlight", [ a.get("view").year, d, a.get("highlight").date ]), b.element(a.$root[0].querySelectorAll("." + c.klass.selectMonth)).triggerHandler("focus"));
            }), b.element(a.$root[0].querySelectorAll("." + c.klass.selectYear)).on("change", function() {
                var d = this.value;
                d && (a.set("highlight", [ d, a.get("view").month, a.get("highlight").date ]), b.element(a.$root[0].querySelectorAll("." + c.klass.selectYear)).triggerHandler("focus"));
            });
        }).on("open", function() {
            b.element(a.$root[0].querySelectorAll("button, select")).attr("disabled", !1);
        }).on("close", function() {
            b.element(a.$root[0].querySelectorAll("button, select")).attr("disabled", !0);
        });
    }
    var d = 7, e = 6, f = a._;
    c.prototype.set = function(a, b, c) {
        var d = this, e = d.item;
        return null === b ? (e[a] = b, d) : (e["enable" == a ? "disable" : "flip" == a ? "enable" : a] = d.queue[a].split(" ").map(function(e) {
            return b = d[e](a, b, c);
        }).pop(), "select" == a ? d.set("highlight", e.select, c) : "highlight" == a ? d.set("view", e.highlight, c) : a.match(/^(flip|min|max|disable|enable)$/) && (e.select && d.disabled(e.select) && d.set("select", e.select, c), 
        e.highlight && d.disabled(e.highlight) && d.set("highlight", e.highlight, c)), d);
    }, c.prototype.get = function(a) {
        return this.item[a];
    }, c.prototype.create = function(a, c, d) {
        var e, g = this;
        return c = void 0 === c ? a : c, c == -1 / 0 || 1 / 0 == c ? e = c : b.isObject(c) && f.isInteger(c.pick) ? c = c.obj : b.isArray(c) ? (c = new Date(c[0], c[1], c[2]), 
        c = f.isDate(c) ? c : g.create().obj) : c = f.isInteger(c) || f.isDate(c) ? g.normalize(new Date(c), d) : g.now(a, c, d), 
        {
            year: e || c.getFullYear(),
            month: e || c.getMonth(),
            date: e || c.getDate(),
            day: e || c.getDay(),
            obj: e || c,
            pick: e || c.getTime()
        };
    }, c.prototype.createRange = function(a, c) {
        var d = this, e = function(a) {
            return a === !0 || b.isArray(a) || f.isDate(a) ? d.create(a) : a;
        };
        return f.isInteger(a) || (a = e(a)), f.isInteger(c) || (c = e(c)), f.isInteger(a) && b.isObject(c) ? a = [ c.year, c.month, c.date + a ] : f.isInteger(c) && b.isObject(a) && (c = [ a.year, a.month, a.date + c ]), 
        {
            from: e(a),
            to: e(c)
        };
    }, c.prototype.withinRange = function(a, b) {
        return a = this.createRange(a.from, a.to), b.pick >= a.from.pick && b.pick <= a.to.pick;
    }, c.prototype.overlapRanges = function(a, b) {
        var c = this;
        return a = c.createRange(a.from, a.to), b = c.createRange(b.from, b.to), c.withinRange(a, b.from) || c.withinRange(a, b.to) || c.withinRange(b, a.from) || c.withinRange(b, a.to);
    }, c.prototype.now = function(a, b, c) {
        return b = new Date(), c && c.rel && b.setDate(b.getDate() + c.rel), this.normalize(b, c);
    }, c.prototype.navigate = function(a, c, d) {
        var e, f, g, h, i = b.isArray(c), j = b.isObject(c), k = this.item.view;
        if (i || j) {
            for (j ? (f = c.year, g = c.month, h = c.date) : (f = +c[0], g = +c[1], h = +c[2]), 
            d && d.nav && k && k.month !== g && (f = k.year, g = k.month), e = new Date(f, g + (d && d.nav ? d.nav : 0), 1), 
            f = e.getFullYear(), g = e.getMonth(); new Date(f, g, h).getMonth() !== g; ) h -= 1;
            c = [ f, g, h ];
        }
        return c;
    }, c.prototype.normalize = function(a) {
        return a.setHours(0, 0, 0, 0), a;
    }, c.prototype.measure = function(a, b) {
        var c = this;
        return b ? f.isInteger(b) && (b = c.now(a, b, {
            rel: b
        })) : b = "min" == a ? -1 / 0 : 1 / 0, b;
    }, c.prototype.viewset = function(a, b) {
        return this.create([ b.year, b.month, 1 ]);
    }, c.prototype.validate = function(a, c, d) {
        var e, g, h, i, j = this, k = c, l = d && d.interval ? d.interval : 1, m = -1 === j.item.enable, n = j.item.min, o = j.item.max, p = m && j.item.disable.filter(function(a) {
            if (b.isArray(a)) {
                var d = j.create(a).pick;
                d < c.pick ? e = !0 : d > c.pick && (g = !0);
            }
            return f.isInteger(a);
        }).length;
        if ((!d || !d.nav) && (!m && j.disabled(c) || m && j.disabled(c) && (p || e || g) || !m && (c.pick <= n.pick || c.pick >= o.pick))) for (m && !p && (!g && l > 0 || !e && 0 > l) && (l *= -1); j.disabled(c) && (Math.abs(l) > 1 && (c.month < k.month || c.month > k.month) && (c = k, 
        l = l > 0 ? 1 : -1), c.pick <= n.pick ? (h = !0, l = 1, c = j.create([ n.year, n.month, n.date - 1 ])) : c.pick >= o.pick && (i = !0, 
        l = -1, c = j.create([ o.year, o.month, o.date + 1 ])), !h || !i); ) c = j.create([ c.year, c.month, c.date + l ]);
        return c;
    }, c.prototype.disabled = function(a) {
        var c = this, d = c.item.disable.filter(function(d) {
            return f.isInteger(d) ? a.day === (c.settings.firstDay ? d : d - 1) % 7 : b.isArray(d) || f.isDate(d) ? a.pick === c.create(d).pick : b.isObject(d) ? c.withinRange(d, a) : void 0;
        });
        return d = d.length && !d.filter(function(a) {
            return b.isArray(a) && "inverted" == a[3] || b.isObject(a) && a.inverted;
        }).length, -1 === c.item.enable ? !d : d || a.pick < c.item.min.pick || a.pick > c.item.max.pick;
    }, c.prototype.parse = function(a, c, d) {
        var e, g = this, h = {};
        return !c || f.isInteger(c) || b.isArray(c) || f.isDate(c) || b.isObject(c) && f.isInteger(c.pick) ? c : (d && d.format || (d = d || {}, 
        d.format = g.settings.format), e = "string" != typeof c || d.fromValue ? 0 : 1, 
        g.formats.toArray(d.format).map(function(a) {
            var b = g.formats[a], d = b ? f.trigger(b, g, [ c, h ]) : a.replace(/^!/, "").length;
            b && (h[a] = c.substr(0, d)), c = c.substr(d);
        }), [ h.yyyy || h.yy, +(h.mm || h.m) - e, h.dd || h.d ]);
    }, c.prototype.formats = function() {
        function a(a, b, c) {
            var d = a.match(/\w+/)[0];
            return c.mm || c.m || (c.m = b.indexOf(d)), d.length;
        }
        function b(a) {
            return a.match(/\w+/)[0].length;
        }
        return {
            d: function(a, b) {
                return a ? f.digits(a) : b.date;
            },
            dd: function(a, b) {
                return a ? 2 : f.lead(b.date);
            },
            ddd: function(a, c) {
                return a ? b(a) : this.settings.weekdaysShort[c.day];
            },
            dddd: function(a, c) {
                return a ? b(a) : this.settings.weekdaysFull[c.day];
            },
            m: function(a, b) {
                return a ? f.digits(a) : b.month + 1;
            },
            mm: function(a, b) {
                return a ? 2 : f.lead(b.month + 1);
            },
            mmm: function(b, c) {
                var d = this.settings.monthsShort;
                return b ? a(b, d, c) : d[c.month];
            },
            mmmm: function(b, c) {
                var d = this.settings.monthsFull;
                return b ? a(b, d, c) : d[c.month];
            },
            yy: function(a, b) {
                return a ? 2 : ("" + b.year).slice(2);
            },
            yyyy: function(a, b) {
                return a ? 4 : b.year;
            },
            toArray: function(a) {
                return a.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g);
            },
            toString: function(a, b) {
                var c = this;
                return c.formats.toArray(a).map(function(a) {
                    return f.trigger(c.formats[a], c, [ 0, b ]) || a.replace(/^!/, "");
                }).join("");
            }
        };
    }(), c.prototype.isDateExact = function(a, c) {
        var d = this;
        return f.isInteger(a) && f.isInteger(c) || "boolean" == typeof a && "boolean" == typeof c ? a === c : (f.isDate(a) || b.isArray(a)) && (f.isDate(c) || b.isArray(c)) ? d.create(a).pick === d.create(c).pick : b.isObject(a) && b.isObject(c) ? d.isDateExact(a.from, c.from) && d.isDateExact(a.to, c.to) : !1;
    }, c.prototype.isDateOverlap = function(a, c) {
        var d = this;
        return f.isInteger(a) && (f.isDate(c) || b.isArray(c)) ? a === d.create(c).day + 1 : f.isInteger(c) && (f.isDate(a) || b.isArray(a)) ? c === d.create(a).day + 1 : b.isObject(a) && b.isObject(c) ? d.overlapRanges(a, c) : !1;
    }, c.prototype.flipEnable = function(a) {
        var b = this.item;
        b.enable = a || (-1 == b.enable ? 1 : -1);
    }, c.prototype.deactivate = function(a, c) {
        var d = this, e = d.item.disable.slice(0);
        return "flip" == c ? d.flipEnable() : c === !1 ? (d.flipEnable(1), e = []) : c === !0 ? (d.flipEnable(-1), 
        e = []) : c.map(function(a) {
            for (var c, g = 0; g < e.length; g += 1) if (d.isDateExact(a, e[g])) {
                c = !0;
                break;
            }
            c || (f.isInteger(a) || f.isDate(a) || b.isArray(a) || b.isObject(a) && a.from && a.to) && e.push(a);
        }), e;
    }, c.prototype.activate = function(a, c) {
        var d = this, e = d.item.disable, g = e.length;
        return "flip" == c ? d.flipEnable() : c === !0 ? (d.flipEnable(1), e = []) : c === !1 ? (d.flipEnable(-1), 
        e = []) : c.map(function(a) {
            var c, h, i, j;
            for (i = 0; g > i; i += 1) {
                if (h = e[i], d.isDateExact(h, a)) {
                    c = e[i] = null, j = !0;
                    break;
                }
                if (d.isDateOverlap(h, a)) {
                    b.isObject(a) ? (a.inverted = !0, c = a) : b.isArray(a) ? (c = a, c[3] || c.push("inverted")) : f.isDate(a) && (c = [ a.getFullYear(), a.getMonth(), a.getDate(), "inverted" ]);
                    break;
                }
            }
            if (c) for (i = 0; g > i; i += 1) if (d.isDateExact(e[i], a)) {
                e[i] = null;
                break;
            }
            if (j) for (i = 0; g > i; i += 1) if (d.isDateOverlap(e[i], a)) {
                e[i] = null;
                break;
            }
            c && e.push(c);
        }), e.filter(function(a) {
            return null != a;
        });
    }, c.prototype.nodes = function(a) {
        var b = this, c = b.settings, g = b.item, h = g.now, i = g.select, j = g.highlight, k = g.view, l = g.disable, m = g.min, n = g.max, o = function(a) {
            return c.firstDay && a.push(a.shift()), f.node("thead", f.node("tr", f.group({
                min: 0,
                max: d - 1,
                i: 1,
                node: "th",
                item: function(b) {
                    return [ a[b], c.klass.weekdays ];
                }
            })));
        }((c.showWeekdaysFull ? c.weekdaysFull : c.weekdaysShort).slice(0)), p = function(a) {
            return f.node("div", " ", c.klass["nav" + (a ? "Next" : "Prev")] + (a && k.year >= n.year && k.month >= n.month || !a && k.year <= m.year && k.month <= m.month ? " " + c.klass.navDisabled : ""), "data-nav=" + (a || -1));
        }, q = function(b) {
            return c.selectMonths ? f.node("select", f.group({
                min: 0,
                max: 11,
                i: 1,
                node: "option",
                item: function(a) {
                    return [ b[a], 0, "value=" + a + (k.month == a ? " selected" : "") + (k.year == m.year && a < m.month || k.year == n.year && a > n.month ? " disabled" : "") ];
                }
            }), c.klass.selectMonth, a ? "" : "disabled") : f.node("div", b[k.month], c.klass.month);
        }, r = function() {
            var b = k.year, d = c.selectYears === !0 ? 5 : ~~(c.selectYears / 2);
            if (d) {
                var e = m.year, g = n.year, h = b - d, i = b + d;
                if (e > h && (i += e - h, h = e), i > g) {
                    var j = h - e, l = i - g;
                    h -= j > l ? l : j, i = g;
                }
                return f.node("select", f.group({
                    min: h,
                    max: i,
                    i: 1,
                    node: "option",
                    item: function(a) {
                        return [ a, 0, "value=" + a + (b == a ? " selected" : "") ];
                    }
                }), c.klass.selectYear, a ? "" : "disabled");
            }
            return f.node("div", b, c.klass.year);
        };
        return f.node("div", p() + p(1) + q(c.showMonthsShort ? c.monthsShort : c.monthsFull) + r(), c.klass.header) + f.node("table", o + f.node("tbody", f.group({
            min: 0,
            max: e - 1,
            i: 1,
            node: "tr",
            item: function(a) {
                var e = c.firstDay && 0 === b.create([ k.year, k.month, 1 ]).day ? -7 : 0;
                return [ f.group({
                    min: d * a - k.day + e + 1,
                    max: function() {
                        return this.min + d - 1;
                    },
                    i: 1,
                    node: "td",
                    item: function(a) {
                        a = b.create([ k.year, k.month, a + (c.firstDay ? 1 : 0) ]);
                        var d = i && i.pick == a.pick, e = j && j.pick == a.pick, g = l && b.disabled(a) || a.pick < m.pick || a.pick > n.pick;
                        return [ f.node("div", a.date, function(b) {
                            return b.push(k.month == a.month ? c.klass.infocus : c.klass.outfocus), h.pick == a.pick && b.push(c.klass.now), 
                            d && b.push(c.klass.selected), e && b.push(c.klass.highlighted), g && b.push(c.klass.disabled), 
                            b.join(" ");
                        }([ c.klass.day ]), "data-pick=" + a.pick + " " + f.ariaAttr({
                            role: "button",
                            controls: b.$node[0].id,
                            checked: d && b.$node[0].value === f.trigger(b.formats.toString, b, [ c.format, a ]) ? !0 : null,
                            activedescendant: e ? !0 : null,
                            disabled: g ? !0 : null
                        })) ];
                    }
                }) ];
            }
        })), c.klass.table) + f.node("div", f.node("button", c.today, c.klass.buttonToday, "type=button data-pick=" + h.pick + (a ? "" : " disabled")) + f.node("button", c.clear, c.klass.buttonClear, "type=button data-clear=1" + (a ? "" : " disabled")), c.klass.footer);
    }, c.defaults = function(a) {
        return {
            monthsFull: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
            monthsShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
            weekdaysFull: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
            weekdaysShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
            today: "Today",
            clear: "Clear",
            format: "d mmmm, yyyy",
            klass: {
                table: a + "table",
                header: a + "header",
                navPrev: a + "nav--prev",
                navNext: a + "nav--next",
                navDisabled: a + "nav--disabled",
                month: a + "month",
                year: a + "year",
                selectMonth: a + "select--month",
                selectYear: a + "select--year",
                weekdays: a + "weekday",
                day: a + "day",
                disabled: a + "day--disabled",
                selected: a + "day--selected",
                highlighted: a + "day--highlighted",
                now: a + "day--today",
                infocus: a + "day--infocus",
                outfocus: a + "day--outfocus",
                footer: a + "footer",
                buttonClear: a + "button--clear",
                buttonToday: a + "button--today"
            }
        };
    }(a.klasses().picker + "__"), a.extend("pickadate", c);
}), !function(a) {
    "function" == typeof define && define.amd ? define([ "picker", "angular" ], a) : a(Picker, angular);
}(function(a, b) {
    function c(a, b) {
        var c = this, d = a.$node[0].value, e = a.$node.data("value"), f = e || d, g = e ? b.formatSubmit : b.format;
        c.settings = b, c.$node = a.$node, c.queue = {
            interval: "i",
            min: "measure create",
            max: "measure create",
            now: "now create",
            select: "parse create validate",
            highlight: "parse create validate",
            view: "parse create validate",
            disable: "deactivate",
            enable: "activate"
        }, c.item = {}, c.item.interval = b.interval || 30, c.item.disable = (b.disable || []).slice(0), 
        c.item.enable = -function(a) {
            return a[0] === !0 ? a.shift() : -1;
        }(c.item.disable), c.set("min", b.min).set("max", b.max).set("now"), f ? c.set("select", f, {
            format: g,
            fromValue: !!d
        }) : c.set("select", null).set("highlight", c.item.now), c.key = {
            40: 1,
            38: -1,
            39: 1,
            37: -1,
            go: function(a) {
                c.set("highlight", c.item.highlight.pick + a * c.item.interval, {
                    interval: a * c.item.interval
                }), this.render();
            }
        }, a.on("render", function() {
            var c = a.$root.children(), d = c.find("." + b.klass.viewset);
            d.length && (c[0].scrollTop = ~~d.position().top - 2 * d[0].clientHeight);
        }).on("open", function() {
            a.$root.find("button").attr("disable", !1);
        }).on("close", function() {
            a.$root.find("button").attr("disable", !0);
        });
    }
    var d = 24, e = 60, f = 12, g = d * e, h = a._;
    c.prototype.set = function(a, b, c) {
        var d = this, e = d.item;
        return null === b ? (e[a] = b, d) : (e["enable" == a ? "disable" : "flip" == a ? "enable" : a] = d.queue[a].split(" ").map(function(e) {
            return b = d[e](a, b, c);
        }).pop(), "select" == a ? d.set("highlight", e.select, c) : "highlight" == a ? d.set("view", e.highlight, c) : "interval" == a ? d.set("min", e.min, c).set("max", e.max, c) : a.match(/^(flip|min|max|disable|enable)$/) && ("min" == a && d.set("max", e.max, c), 
        e.select && d.disabled(e.select) && d.set("select", e.select, c), e.highlight && d.disabled(e.highlight) && d.set("highlight", e.highlight, c)), 
        d);
    }, c.prototype.get = function(a) {
        return this.item[a];
    }, c.prototype.create = function(a, c, f) {
        var i = this;
        return c = void 0 === c ? a : c, h.isDate(c) && (c = [ c.getHours(), c.getMinutes() ]), 
        b.isObject(c) && h.isInteger(c.pick) ? c = c.pick : b.isArray(c) ? c = +c[0] * e + +c[1] : h.isInteger(c) || (c = i.now(a, c, f)), 
        "max" == a && c < i.item.min.pick && (c += g), "min" != a && "max" != a && (c - i.item.min.pick) % i.item.interval !== 0 && (c += i.item.interval), 
        c = i.normalize(a, c, f), {
            hour: ~~(d + c / e) % d,
            mins: (e + c % e) % e,
            time: (g + c) % g,
            pick: c
        };
    }, c.prototype.createRange = function(a, c) {
        var d = this, e = function(a) {
            return a === !0 || b.isArray(a) || h.isDate(a) ? d.create(a) : a;
        };
        return h.isInteger(a) || (a = e(a)), h.isInteger(c) || (c = e(c)), h.isInteger(a) && b.isObject(c) ? a = [ c.hour, c.mins + a * d.settings.interval ] : h.isInteger(c) && b.isObject(a) && (c = [ a.hour, a.mins + c * d.settings.interval ]), 
        {
            from: e(a),
            to: e(c)
        };
    }, c.prototype.withinRange = function(a, b) {
        return a = this.createRange(a.from, a.to), b.pick >= a.from.pick && b.pick <= a.to.pick;
    }, c.prototype.overlapRanges = function(a, b) {
        var c = this;
        return a = c.createRange(a.from, a.to), b = c.createRange(b.from, b.to), c.withinRange(a, b.from) || c.withinRange(a, b.to) || c.withinRange(b, a.from) || c.withinRange(b, a.to);
    }, c.prototype.now = function(a, b) {
        var c, d = this.item.interval, f = new Date(), g = f.getHours() * e + f.getMinutes(), i = h.isInteger(b);
        return g -= g % d, c = 0 > b && -d >= d * b + g, g += "min" == a && c ? 0 : d, i && (g += d * (c && "max" != a ? b + 1 : b)), 
        g;
    }, c.prototype.normalize = function(a, b) {
        var c = this.item.interval, d = this.item.min && this.item.min.pick || 0;
        return b -= "min" == a ? 0 : (b - d) % c;
    }, c.prototype.measure = function(a, c, f) {
        var g = this;
        return c ? c === !0 || h.isInteger(c) ? c = g.now(a, c, f) : b.isObject(c) && h.isInteger(c.pick) && (c = g.normalize(a, c.pick, f)) : c = "min" == a ? [ 0, 0 ] : [ d - 1, e - 1 ], 
        c;
    }, c.prototype.validate = function(a, b, c) {
        var d = this, e = c && c.interval ? c.interval : d.item.interval;
        return d.disabled(b) && (b = d.shift(b, e)), b = d.scope(b), d.disabled(b) && (b = d.shift(b, -1 * e)), 
        b;
    }, c.prototype.disabled = function(a) {
        var c = this, d = c.item.disable.filter(function(d) {
            return h.isInteger(d) ? a.hour == d : b.isArray(d) || h.isDate(d) ? a.pick == c.create(d).pick : b.isObject(d) ? c.withinRange(d, a) : void 0;
        });
        return d = d.length && !d.filter(function(a) {
            return b.isArray(a) && "inverted" == a[2] || b.isObject(a) && a.inverted;
        }).length, -1 === c.item.enable ? !d : d || a.pick < c.item.min.pick || a.pick > c.item.max.pick;
    }, c.prototype.shift = function(a, b) {
        var c = this, d = c.item.min.pick, e = c.item.max.pick;
        for (b = b || c.item.interval; c.disabled(a) && (a = c.create(a.pick += b), !(a.pick <= d || a.pick >= e)); ) ;
        return a;
    }, c.prototype.scope = function(a) {
        var b = this.item.min.pick, c = this.item.max.pick;
        return this.create(a.pick > c ? c : a.pick < b ? b : a);
    }, c.prototype.parse = function(a, c, d) {
        var f, g, i, j, k, l = this, m = {};
        if (!c || h.isInteger(c) || b.isArray(c) || h.isDate(c) || b.isObject(c) && h.isInteger(c.pick)) return c;
        d && d.format || (d = d || {}, d.format = l.settings.format), l.formats.toArray(d.format).map(function(a) {
            var b, d = l.formats[a], e = d ? h.trigger(d, l, [ c, m ]) : a.replace(/^!/, "").length;
            d && (b = c.substr(0, e), m[a] = b.match(/^\d+$/) ? +b : b), c = c.substr(e);
        });
        for (j in m) k = m[j], h.isInteger(k) ? j.match(/^(h|hh)$/i) ? (f = k, ("h" == j || "hh" == j) && (f %= 12)) : "i" == j && (g = k) : j.match(/^a$/i) && k.match(/^p/i) && ("h" in m || "hh" in m) && (i = !0);
        return (i ? f + 12 : f) * e + g;
    }, c.prototype.formats = {
        h: function(a, b) {
            return a ? h.digits(a) : b.hour % f || f;
        },
        hh: function(a, b) {
            return a ? 2 : h.lead(b.hour % f || f);
        },
        H: function(a, b) {
            return a ? h.digits(a) : "" + b.hour % 24;
        },
        HH: function(a, b) {
            return a ? h.digits(a) : h.lead(b.hour % 24);
        },
        i: function(a, b) {
            return a ? 2 : h.lead(b.mins);
        },
        a: function(a, b) {
            return a ? 4 : g / 2 > b.time % g ? "a.m." : "p.m.";
        },
        A: function(a, b) {
            return a ? 2 : g / 2 > b.time % g ? "AM" : "PM";
        },
        toArray: function(a) {
            return a.split(/(h{1,2}|H{1,2}|i|a|A|!.)/g);
        },
        toString: function(a, b) {
            var c = this;
            return c.formats.toArray(a).map(function(a) {
                return h.trigger(c.formats[a], c, [ 0, b ]) || a.replace(/^!/, "");
            }).join("");
        }
    }, c.prototype.isTimeExact = function(a, c) {
        var d = this;
        return h.isInteger(a) && h.isInteger(c) || "boolean" == typeof a && "boolean" == typeof c ? a === c : (h.isDate(a) || b.isArray(a)) && (h.isDate(c) || b.isArray(c)) ? d.create(a).pick === d.create(c).pick : b.isObject(a) && b.isObject(c) ? d.isTimeExact(a.from, c.from) && d.isTimeExact(a.to, c.to) : !1;
    }, c.prototype.isTimeOverlap = function(a, c) {
        var d = this;
        return h.isInteger(a) && (h.isDate(c) || b.isArray(c)) ? a === d.create(c).hour : h.isInteger(c) && (h.isDate(a) || b.isArray(a)) ? c === d.create(a).hour : b.isObject(a) && b.isObject(c) ? d.overlapRanges(a, c) : !1;
    }, c.prototype.flipEnable = function(a) {
        var b = this.item;
        b.enable = a || (-1 == b.enable ? 1 : -1);
    }, c.prototype.deactivate = function(a, c) {
        var d = this, e = d.item.disable.slice(0);
        return "flip" == c ? d.flipEnable() : c === !1 ? (d.flipEnable(1), e = []) : c === !0 ? (d.flipEnable(-1), 
        e = []) : c.map(function(a) {
            for (var c, f = 0; f < e.length; f += 1) if (d.isTimeExact(a, e[f])) {
                c = !0;
                break;
            }
            c || (h.isInteger(a) || h.isDate(a) || b.isArray(a) || b.isObject(a) && a.from && a.to) && e.push(a);
        }), e;
    }, c.prototype.activate = function(a, c) {
        var d = this, e = d.item.disable, f = e.length;
        return "flip" == c ? d.flipEnable() : c === !0 ? (d.flipEnable(1), e = []) : c === !1 ? (d.flipEnable(-1), 
        e = []) : c.map(function(a) {
            var c, g, i, j;
            for (i = 0; f > i; i += 1) {
                if (g = e[i], d.isTimeExact(g, a)) {
                    c = e[i] = null, j = !0;
                    break;
                }
                if (d.isTimeOverlap(g, a)) {
                    b.isObject(a) ? (a.inverted = !0, c = a) : b.isArray(a) ? (c = a, c[2] || c.push("inverted")) : h.isDate(a) && (c = [ a.getFullYear(), a.getMonth(), a.getDate(), "inverted" ]);
                    break;
                }
            }
            if (c) for (i = 0; f > i; i += 1) if (d.isTimeExact(e[i], a)) {
                e[i] = null;
                break;
            }
            if (j) for (i = 0; f > i; i += 1) if (d.isTimeOverlap(e[i], a)) {
                e[i] = null;
                break;
            }
            c && e.push(c);
        }), e.filter(function(a) {
            return null != a;
        });
    }, c.prototype.i = function(a, b) {
        return h.isInteger(b) && b > 0 ? b : this.item.interval;
    }, c.prototype.nodes = function(a) {
        var b = this, c = b.settings, d = b.item.select, e = b.item.highlight, f = b.item.view, g = b.item.disable;
        return h.node("ul", h.group({
            min: b.item.min.pick,
            max: b.item.max.pick,
            i: b.item.interval,
            node: "li",
            item: function(a) {
                a = b.create(a);
                var i = a.pick, j = d && d.pick == i, k = e && e.pick == i, l = g && b.disabled(a);
                return [ h.trigger(b.formats.toString, b, [ h.trigger(c.formatLabel, b, [ a ]) || c.format, a ]), function(a) {
                    return j && a.push(c.klass.selected), k && a.push(c.klass.highlighted), f && f.pick == i && a.push(c.klass.viewset), 
                    l && a.push(c.klass.disabled), a.join(" ");
                }([ c.klass.listItem ]), "data-pick=" + a.pick + " " + h.ariaAttr({
                    role: "button",
                    controls: b.$node[0].id,
                    checked: j && b.$node.val() === h.trigger(b.formats.toString, b, [ c.format, a ]) ? !0 : null,
                    activedescendant: k ? !0 : null,
                    disabled: l ? !0 : null
                }) ];
            }
        }) + h.node("li", h.node("button", c.clear, c.klass.buttonClear, "type=button data-clear=1" + (a ? "" : " disable"))), c.klass.list);
    }, c.defaults = function(a) {
        return {
            clear: "Clear",
            format: "h:i A",
            interval: 30,
            klass: {
                picker: a + " " + a + "--time",
                holder: a + "__holder",
                list: a + "__list",
                listItem: a + "__list-item",
                disabled: a + "__list-item--disabled",
                selected: a + "__list-item--selected",
                highlighted: a + "__list-item--highlighted",
                viewset: a + "__list-item--viewset",
                now: a + "__list-item--now",
                buttonClear: a + "__button--clear"
            }
        };
    }(a.klasses().picker), a.extend("pickatime", c);
}), [].map || (Array.prototype.map = function(a, b) {
    for (var c = this, d = c.length, e = new Array(d), f = 0; d > f; f++) f in c && (e[f] = a.call(b, c[f], f, c));
    return e;
}), [].filter || (Array.prototype.filter = function(a) {
    if (null == this) throw new TypeError();
    var b = Object(this), c = b.length >>> 0;
    if ("function" != typeof a) throw new TypeError();
    for (var d = [], e = arguments[1], f = 0; c > f; f++) if (f in b) {
        var g = b[f];
        a.call(e, g, f, b) && d.push(g);
    }
    return d;
}), [].indexOf || (Array.prototype.indexOf = function(a) {
    if (null == this) throw new TypeError();
    var b = Object(this), c = b.length >>> 0;
    if (0 === c) return -1;
    var d = 0;
    if (arguments.length > 1 && (d = Number(arguments[1]), d != d ? d = 0 : 0 !== d && 1 / 0 != d && d != -1 / 0 && (d = (d > 0 || -1) * Math.floor(Math.abs(d)))), 
    d >= c) return -1;
    for (var e = d >= 0 ? d : Math.max(c - Math.abs(d), 0); c > e; e++) if (e in b && b[e] === a) return e;
    return -1;
});

var nativeSplit = String.prototype.split, compliantExecNpcg = void 0 === /()??/.exec("")[1];

String.prototype.split = function(a, b) {
    var c = this;
    if ("[object RegExp]" !== Object.prototype.toString.call(a)) return nativeSplit.call(c, a, b);
    var d, e, f, g, h = [], i = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.extended ? "x" : "") + (a.sticky ? "y" : ""), j = 0;
    for (a = new RegExp(a.source, i + "g"), c += "", compliantExecNpcg || (d = new RegExp("^" + a.source + "$(?!\\s)", i)), 
    b = void 0 === b ? -1 >>> 0 : b >>> 0; (e = a.exec(c)) && (f = e.index + e[0].length, 
    !(f > j && (h.push(c.slice(j, e.index)), !compliantExecNpcg && e.length > 1 && e[0].replace(d, function() {
        for (var a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (e[a] = void 0);
    }), e.length > 1 && e.index < c.length && Array.prototype.push.apply(h, e.slice(1)), 
    g = e[0].length, j = f, h.length >= b))); ) a.lastIndex === e.index && a.lastIndex++;
    return j === c.length ? (g || !a.test("")) && h.push("") : h.push(c.slice(j)), h.length > b ? h.slice(0, b) : h;
}, angular.module("angular-datepicker", []).directive("pickADate", function() {
    return {
        restrict: "A",
        scope: {
            pickADate: "=",
            pickADateOptions: "="
        },
        link: function(a, b) {
            function c(c) {
                if ("function" == typeof f && f.apply(this, arguments), !a.$$phase && !a.$root.$$phase) {
                    var d = b.pickadate("picker").get("select");
                    a.$apply(function() {
                        return c.hasOwnProperty("clear") ? void (a.pickADate = null) : (a.pickADate && "string" != typeof a.pickADate || (a.pickADate = new Date(0)), 
                        a.pickADate.setYear(d.obj.getYear() + 1900), a.pickADate.setMonth(d.obj.getMonth()), 
                        void a.pickADate.setDate(d.obj.getDate()));
                    });
                }
            }
            function d() {
                if ("function" == typeof g && g.apply(this, arguments), "undefined" != typeof cordova && cordova.plugins && cordova.plugins.Keyboard) {
                    var a = function() {
                        cordova.plugins.Keyboard.close(), window.removeEventListener("native.keyboardshow", this);
                    };
                    window.addEventListener("native.keyboardshow", a), setTimeout(function() {
                        window.removeEventListener("native.keyboardshow", a);
                    }, 500);
                }
            }
            var e = a.pickADateOptions || {}, f = e.onSet, g = e.onClose;
            b.pickadate(angular.extend(e, {
                onSet: c,
                onClose: d,
                container: document.body
            })), setTimeout(function() {
                a.pickADate && b.pickadate("picker").set("select", a.pickADate);
            }, 1e3);
        }
    };
}).directive("pickATime", function() {
    return {
        restrict: "A",
        scope: {
            pickATime: "=",
            pickATimeOptions: "="
        },
        link: function(a, b) {
            function c(c) {
                if ("function" == typeof f && f.apply(this, arguments), !a.$$phase && !a.$root.$$phase) {
                    var d = b.pickatime("picker").get("select");
                    a.$apply(function() {
                        return c.hasOwnProperty("clear") ? void (a.pickATime = null) : (a.pickATime && "string" != typeof a.pickATime || (a.pickATime = new Date()), 
                        a.pickATime.setHours(d.hour), a.pickATime.setMinutes(d.mins), a.pickATime.setSeconds(0), 
                        void a.pickATime.setMilliseconds(0));
                    });
                }
            }
            function d() {
                if ("function" == typeof g && g.apply(this, arguments), "undefined" != typeof cordova && cordova.plugins && cordova.plugins.Keyboard) {
                    var a = function() {
                        cordova.plugins.Keyboard.close(), window.removeEventListener("native.keyboardshow", this);
                    };
                    window.addEventListener("native.keyboardshow", a), setTimeout(function() {
                        window.removeEventListener("native.keyboardshow", a);
                    }, 500);
                }
            }
            var e = a.pickATimeOptions || {}, f = e.onSet, g = e.onClose;
            b.pickatime(angular.extend(e, {
                onSet: c,
                onClose: d,
                container: document.body
            })), setTimeout(function() {
                a.pickATime && b.pickatime("picker").set("select", a.pickATime);
            }, 1e3);
        }
    };
}), angular.module("ng-currency", []).directive("ngCurrency", [ "$filter", "$locale", function(a, b) {
    return {
        require: "ngModel",
        scope: {
            min: "=min",
            max: "=max",
            currencySymbol: "@",
            ngRequired: "=ngRequired"
        },
        link: function(c, d, e, f) {
            function g(a) {
                return RegExp("\\d|\\-|\\" + a, "g");
            }
            function h(a) {
                return RegExp("\\-{0,1}((\\" + a + ")|([0-9]{1,}\\" + a + "?))&?[0-9]{0,2}", "g");
            }
            function i(a) {
                a = String(a);
                var c = b.NUMBER_FORMATS.DECIMAL_SEP, d = null;
                return RegExp("^-[\\s]*$", "g").test(a) && (a = "-0"), g(c).test(a) ? (d = a.match(g(c)).join("").match(h(c)), 
                d = d ? d[0].replace(c, ".") : null) : cleaned = null, d;
            }
            function j() {
                return angular.isDefined(c.currencySymbol) ? c.currencySymbol : b.NUMBER_FORMATS.CURRENCY_SYM;
            }
            function k(a) {
                if (c.ngRequired || !isNaN(a)) {
                    if (c.min) {
                        var b = parseFloat(c.min);
                        f.$setValidity("min", a >= b);
                    }
                    if (c.max) {
                        var d = parseFloat(c.max);
                        f.$setValidity("max", d >= a);
                    }
                }
            }
            f.$parsers.push(function(a) {
                return cVal = i(a), parseFloat(cVal);
            }), d.on("blur", function() {
                d.val(a("currency")(f.$modelValue, j()));
            }), f.$formatters.unshift(function(b) {
                return a("currency")(b, j());
            }), c.$watch(function() {
                return f.$modelValue;
            }, function(a) {
                k(a);
            });
        }
    };
} ]), angular.module("ngScrollTo", []), angular.module("ngScrollTo").directive("scrollTo", [ "ScrollTo", function(a) {
    return {
        restrict: "AC",
        compile: function() {
            return function(b, c, d) {
                c.bind("click", function() {
                    a.idOrName(d.scrollTo, d.offset);
                });
            };
        }
    };
} ]).service("ScrollTo", [ "$window", "ngScrollToOptions", function(a, b) {
    this.idOrName = function(c, d, e) {
        var f = a.document;
        c || a.scrollTo(0, 0), void 0 === e && (e = !0);
        var g = f.getElementById(c);
        g || (g = f.getElementsByName(c), g = g && g.length ? g[0] : null), g && (e && g.focus(), 
        b.handler(g, d));
    };
} ]).provider("ngScrollToOptions", function() {
    this.options = {
        handler: function(a, b) {
            if (b) {
                var c = $(a).offset().top - b;
                window.scrollTo(0, c);
            } else a.scrollIntoView();
        }
    }, this.$get = function() {
        return this.options;
    }, this.extend = function(a) {
        this.options = angular.extend(this.options, a);
    };
}), function(a, b) {
    "use strict";
    function c(a) {
        return /^-?\d+\.?\d*$/.test(a.replace(/["']/g, ""));
    }
    var d = b.isDefined, e = b.isUndefined, f = b.isNumber, g = b.isObject, h = b.isArray, i = b.extend, j = b.toJson, k = b.fromJson, l = b.module("LocalStorageModule", []);
    l.provider("localStorageService", function() {
        this.prefix = "ls", this.storageType = "localStorage", this.cookie = {
            expiry: 30,
            path: "/"
        }, this.notify = {
            setItem: !0,
            removeItem: !1
        }, this.setPrefix = function(a) {
            return this.prefix = a, this;
        }, this.setStorageType = function(a) {
            return this.storageType = a, this;
        }, this.setStorageCookie = function(a, b) {
            return this.cookie = {
                expiry: a,
                path: b
            }, this;
        }, this.setStorageCookieDomain = function(a) {
            return this.cookie.domain = a, this;
        }, this.setNotify = function(a, b) {
            return this.notify = {
                setItem: a,
                removeItem: b
            }, this;
        }, this.$get = [ "$rootScope", "$window", "$document", "$parse", function(a, b, l, m) {
            var n, o = this, p = o.prefix, q = o.cookie, r = o.notify, s = o.storageType;
            l ? l[0] && (l = l[0]) : l = document, "." !== p.substr(-1) && (p = p ? p + "." : "");
            var t = function(a) {
                return p + a;
            }, u = function() {
                try {
                    var c = s in b && null !== b[s], d = t("__" + Math.round(1e7 * Math.random()));
                    return c && (n = b[s], n.setItem(d, ""), n.removeItem(d)), c;
                } catch (e) {
                    return s = "cookie", a.$broadcast("LocalStorageModule.notification.error", e.message), 
                    !1;
                }
            }(), v = function(b, c) {
                if (e(c) ? c = null : (g(c) || h(c) || f(+c || c)) && (c = j(c)), !u || "cookie" === o.storageType) return u || a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), 
                r.setItem && a.$broadcast("LocalStorageModule.notification.setitem", {
                    key: b,
                    newvalue: c,
                    storageType: "cookie"
                }), B(b, c);
                try {
                    (g(c) || h(c)) && (c = j(c)), n && n.setItem(t(b), c), r.setItem && a.$broadcast("LocalStorageModule.notification.setitem", {
                        key: b,
                        newvalue: c,
                        storageType: o.storageType
                    });
                } catch (d) {
                    return a.$broadcast("LocalStorageModule.notification.error", d.message), B(b, c);
                }
                return !0;
            }, w = function(b) {
                if (!u || "cookie" === o.storageType) return u || a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), 
                C(b);
                var d = n ? n.getItem(t(b)) : null;
                return d && "null" !== d ? "{" === d.charAt(0) || "[" === d.charAt(0) || c(d) ? k(d) : d : null;
            }, x = function(b) {
                if (!u || "cookie" === o.storageType) return u || a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), 
                r.removeItem && a.$broadcast("LocalStorageModule.notification.removeitem", {
                    key: b,
                    storageType: "cookie"
                }), D(b);
                try {
                    n.removeItem(t(b)), r.removeItem && a.$broadcast("LocalStorageModule.notification.removeitem", {
                        key: b,
                        storageType: o.storageType
                    });
                } catch (c) {
                    return a.$broadcast("LocalStorageModule.notification.error", c.message), D(b);
                }
                return !0;
            }, y = function() {
                if (!u) return a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), 
                !1;
                var b = p.length, c = [];
                for (var d in n) if (d.substr(0, b) === p) try {
                    c.push(d.substr(b));
                } catch (e) {
                    return a.$broadcast("LocalStorageModule.notification.error", e.Description), [];
                }
                return c;
            }, z = function(b) {
                b = b || "";
                var c = p.slice(0, -1), d = new RegExp(c + "." + b);
                if (!u || "cookie" === o.storageType) return u || a.$broadcast("LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED"), 
                E();
                var e = p.length;
                for (var f in n) if (d.test(f)) try {
                    x(f.substr(e));
                } catch (g) {
                    return a.$broadcast("LocalStorageModule.notification.error", g.message), E();
                }
                return !0;
            }, A = function() {
                try {
                    return b.navigator.cookieEnabled || "cookie" in l && (l.cookie.length > 0 || (l.cookie = "test").indexOf.call(l.cookie, "test") > -1);
                } catch (c) {
                    return a.$broadcast("LocalStorageModule.notification.error", c.message), !1;
                }
            }(), B = function(b, c) {
                if (e(c)) return !1;
                if ((h(c) || g(c)) && (c = j(c)), !A) return a.$broadcast("LocalStorageModule.notification.error", "COOKIES_NOT_SUPPORTED"), 
                !1;
                try {
                    var d = "", f = new Date(), i = "";
                    if (null === c ? (f.setTime(f.getTime() + -864e5), d = "; expires=" + f.toGMTString(), 
                    c = "") : 0 !== q.expiry && (f.setTime(f.getTime() + 24 * q.expiry * 60 * 60 * 1e3), 
                    d = "; expires=" + f.toGMTString()), b) {
                        var k = "; path=" + q.path;
                        q.domain && (i = "; domain=" + q.domain), l.cookie = t(b) + "=" + encodeURIComponent(c) + d + k + i;
                    }
                } catch (m) {
                    return a.$broadcast("LocalStorageModule.notification.error", m.message), !1;
                }
                return !0;
            }, C = function(b) {
                if (!A) return a.$broadcast("LocalStorageModule.notification.error", "COOKIES_NOT_SUPPORTED"), 
                !1;
                for (var c = l.cookie && l.cookie.split(";") || [], d = 0; d < c.length; d++) {
                    for (var e = c[d]; " " === e.charAt(0); ) e = e.substring(1, e.length);
                    if (0 === e.indexOf(t(b) + "=")) {
                        var f = decodeURIComponent(e.substring(p.length + b.length + 1, e.length));
                        try {
                            var g = JSON.parse(f);
                            return k(g);
                        } catch (h) {
                            return f;
                        }
                    }
                }
                return null;
            }, D = function(a) {
                B(a, null);
            }, E = function() {
                for (var a = null, b = p.length, c = l.cookie.split(";"), d = 0; d < c.length; d++) {
                    for (a = c[d]; " " === a.charAt(0); ) a = a.substring(1, a.length);
                    var e = a.substring(b, a.indexOf("="));
                    D(e);
                }
            }, F = function() {
                return s;
            }, G = function(a, b, c, e) {
                e = e || b;
                var f = w(e);
                return null === f && d(c) ? f = c : g(f) && g(c) && (f = i(c, f)), m(b).assign(a, f), 
                a.$watch(b, function(a) {
                    v(e, a);
                }, g(a[b]));
            }, H = function() {
                for (var a = 0, c = b[s], d = 0; d < c.length; d++) 0 === c.key(d).indexOf(p) && a++;
                return a;
            };
            return {
                isSupported: u,
                getStorageType: F,
                set: v,
                add: v,
                get: w,
                keys: y,
                remove: x,
                clearAll: z,
                bind: G,
                deriveKey: t,
                length: H,
                cookie: {
                    isSupported: A,
                    set: B,
                    add: B,
                    get: C,
                    remove: D,
                    clearAll: E
                }
            };
        } ];
    });
}(window, window.angular), function(a) {
    var b = {
        vertical: {
            x: !1,
            y: !0
        },
        horizontal: {
            x: !0,
            y: !1
        },
        both: {
            x: !0,
            y: !0
        },
        x: {
            x: !0,
            y: !1
        },
        y: {
            x: !1,
            y: !0
        }
    }, c = {
        duration: "fast",
        direction: "both"
    }, d = /^(?:html)$/i, e = function(b, c) {
        c = c || (document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(b, null) : b.currentStyle);
        var d = document.defaultView && document.defaultView.getComputedStyle ? !0 : !1, e = {
            top: parseFloat(d ? c.borderTopWidth : a.css(b, "borderTopWidth")) || 0,
            left: parseFloat(d ? c.borderLeftWidth : a.css(b, "borderLeftWidth")) || 0,
            bottom: parseFloat(d ? c.borderBottomWidth : a.css(b, "borderBottomWidth")) || 0,
            right: parseFloat(d ? c.borderRightWidth : a.css(b, "borderRightWidth")) || 0
        };
        return {
            top: e.top,
            left: e.left,
            bottom: e.bottom,
            right: e.right,
            vertical: e.top + e.bottom,
            horizontal: e.left + e.right
        };
    }, f = function(b) {
        var c = a(window), f = d.test(b[0].nodeName);
        return {
            border: f ? {
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
            } : e(b[0]),
            scroll: {
                top: (f ? c : b).scrollTop(),
                left: (f ? c : b).scrollLeft()
            },
            scrollbar: {
                right: f ? 0 : b.innerWidth() - b[0].clientWidth,
                bottom: f ? 0 : b.innerHeight() - b[0].clientHeight
            },
            rect: function() {
                var a = b[0].getBoundingClientRect();
                return {
                    top: f ? 0 : a.top,
                    left: f ? 0 : a.left,
                    bottom: f ? b[0].clientHeight : a.bottom,
                    right: f ? b[0].clientWidth : a.right
                };
            }()
        };
    };
    a.fn.extend({
        scrollintoview: function(e) {
            e = a.extend({}, c, e), e.direction = b["string" == typeof e.direction && e.direction.toLowerCase()] || b.both;
            var g = "";
            e.direction.x === !0 && (g = "horizontal"), e.direction.y === !0 && (g = g ? "both" : "vertical");
            var h = this.eq(0), i = h.closest(":scrollable(" + g + ")");
            if (i.length > 0) {
                i = i.eq(0);
                var j = {
                    e: f(h),
                    s: f(i)
                }, k = {
                    top: j.e.rect.top - (j.s.rect.top + j.s.border.top),
                    bottom: j.s.rect.bottom - j.s.border.bottom - j.s.scrollbar.bottom - j.e.rect.bottom,
                    left: j.e.rect.left - (j.s.rect.left + j.s.border.left),
                    right: j.s.rect.right - j.s.border.right - j.s.scrollbar.right - j.e.rect.right
                };
                null !== e.yOffset && void 0 !== e.yOffset && (k.bottom = k.bottom + e.yOffset), 
                k.top = k.top - e.yOffset;
                var l = {};
                e.direction.y === !0 && (k.top < 0 ? l.scrollTop = j.s.scroll.top + k.top : k.top > 0 && k.bottom < 0 && (l.scrollTop = j.s.scroll.top + Math.min(k.top, -k.bottom))), 
                e.direction.x === !0 && (k.left < 0 ? l.scrollLeft = j.s.scroll.left + k.left : k.left > 0 && k.right < 0 && (l.scrollLeft = j.s.scroll.left + Math.min(k.left, -k.right))), 
                a.isEmptyObject(l) ? a.isFunction(e.complete) && e.complete.call(i[0]) : (d.test(i[0].nodeName) && (i = a("html,body")), 
                i.animate(l, e.duration).eq(0).queue(function(b) {
                    a.isFunction(e.complete) && e.complete.call(i[0]), b();
                }));
            }
            return this;
        }
    });
    var g = {
        auto: !0,
        scroll: !0,
        visible: !1,
        hidden: !1
    };
    a.extend(a.expr[":"], {
        scrollable: function(a, c, e) {
            var f = b["string" == typeof e[3] && e[3].toLowerCase()] || b.both, h = document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(a, null) : a.currentStyle, i = {
                x: g[h.overflowX.toLowerCase()] || !1,
                y: g[h.overflowY.toLowerCase()] || !1,
                isRoot: d.test(a.nodeName)
            };
            if (!i.x && !i.y && !i.isRoot) return !1;
            var j = {
                height: {
                    scroll: a.scrollHeight,
                    client: a.clientHeight
                },
                width: {
                    scroll: a.scrollWidth,
                    client: a.clientWidth
                },
                scrollableX: function() {
                    return (i.x || i.isRoot) && this.width.scroll > this.width.client;
                },
                scrollableY: function() {
                    return (i.y || i.isRoot) && this.height.scroll > this.height.client;
                }
            };
            return f.y && j.scrollableY() || f.x && j.scrollableX();
        }
    });
}(jQuery), function() {
    var a = this, b = a._, c = {}, d = Array.prototype, e = Object.prototype, f = Function.prototype, g = d.push, h = d.slice, i = d.concat, j = e.toString, k = e.hasOwnProperty, l = d.forEach, m = d.map, n = d.reduce, o = d.reduceRight, p = d.filter, q = d.every, r = d.some, s = d.indexOf, t = d.lastIndexOf, u = Array.isArray, v = Object.keys, w = f.bind, x = function(a) {
        return a instanceof x ? a : this instanceof x ? void (this._wrapped = a) : new x(a);
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), 
    exports._ = x) : a._ = x, x.VERSION = "1.6.0";
    var y = x.each = x.forEach = function(a, b, d) {
        if (null == a) return a;
        if (l && a.forEach === l) a.forEach(b, d); else if (a.length === +a.length) {
            for (var e = 0, f = a.length; f > e; e++) if (b.call(d, a[e], e, a) === c) return;
        } else for (var g = x.keys(a), e = 0, f = g.length; f > e; e++) if (b.call(d, a[g[e]], g[e], a) === c) return;
        return a;
    };
    x.map = x.collect = function(a, b, c) {
        var d = [];
        return null == a ? d : m && a.map === m ? a.map(b, c) : (y(a, function(a, e, f) {
            d.push(b.call(c, a, e, f));
        }), d);
    };
    var z = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function(a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), n && a.reduce === n) return d && (b = x.bind(b, d)), 
        e ? a.reduce(b, c) : a.reduce(b);
        if (y(a, function(a, f, g) {
            e ? c = b.call(d, c, a, f, g) : (c = a, e = !0);
        }), !e) throw new TypeError(z);
        return c;
    }, x.reduceRight = x.foldr = function(a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), o && a.reduceRight === o) return d && (b = x.bind(b, d)), 
        e ? a.reduceRight(b, c) : a.reduceRight(b);
        var f = a.length;
        if (f !== +f) {
            var g = x.keys(a);
            f = g.length;
        }
        if (y(a, function(h, i, j) {
            i = g ? g[--f] : --f, e ? c = b.call(d, c, a[i], i, j) : (c = a[i], e = !0);
        }), !e) throw new TypeError(z);
        return c;
    }, x.find = x.detect = function(a, b, c) {
        var d;
        return A(a, function(a, e, f) {
            return b.call(c, a, e, f) ? (d = a, !0) : void 0;
        }), d;
    }, x.filter = x.select = function(a, b, c) {
        var d = [];
        return null == a ? d : p && a.filter === p ? a.filter(b, c) : (y(a, function(a, e, f) {
            b.call(c, a, e, f) && d.push(a);
        }), d);
    }, x.reject = function(a, b, c) {
        return x.filter(a, function(a, d, e) {
            return !b.call(c, a, d, e);
        }, c);
    }, x.every = x.all = function(a, b, d) {
        b || (b = x.identity);
        var e = !0;
        return null == a ? e : q && a.every === q ? a.every(b, d) : (y(a, function(a, f, g) {
            return (e = e && b.call(d, a, f, g)) ? void 0 : c;
        }), !!e);
    };
    var A = x.some = x.any = function(a, b, d) {
        b || (b = x.identity);
        var e = !1;
        return null == a ? e : r && a.some === r ? a.some(b, d) : (y(a, function(a, f, g) {
            return e || (e = b.call(d, a, f, g)) ? c : void 0;
        }), !!e);
    };
    x.contains = x.include = function(a, b) {
        return null == a ? !1 : s && a.indexOf === s ? -1 != a.indexOf(b) : A(a, function(a) {
            return a === b;
        });
    }, x.invoke = function(a, b) {
        var c = h.call(arguments, 2), d = x.isFunction(b);
        return x.map(a, function(a) {
            return (d ? b : a[b]).apply(a, c);
        });
    }, x.pluck = function(a, b) {
        return x.map(a, x.property(b));
    }, x.where = function(a, b) {
        return x.filter(a, x.matches(b));
    }, x.findWhere = function(a, b) {
        return x.find(a, x.matches(b));
    }, x.max = function(a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535) return Math.max.apply(Math, a);
        var d = -1/0, e = -1/0;
        return y(a, function(a, f, g) {
            var h = b ? b.call(c, a, f, g) : a;
            h > e && (d = a, e = h);
        }), d;
    }, x.min = function(a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535) return Math.min.apply(Math, a);
        var d = 1/0, e = 1/0;
        return y(a, function(a, f, g) {
            var h = b ? b.call(c, a, f, g) : a;
            e > h && (d = a, e = h);
        }), d;
    }, x.shuffle = function(a) {
        var b, c = 0, d = [];
        return y(a, function(a) {
            b = x.random(c++), d[c - 1] = d[b], d[b] = a;
        }), d;
    }, x.sample = function(a, b, c) {
        return null == b || c ? (a.length !== +a.length && (a = x.values(a)), a[x.random(a.length - 1)]) : x.shuffle(a).slice(0, Math.max(0, b));
    };
    var B = function(a) {
        return null == a ? x.identity : x.isFunction(a) ? a : x.property(a);
    };
    x.sortBy = function(a, b, c) {
        return b = B(b), x.pluck(x.map(a, function(a, d, e) {
            return {
                value: a,
                index: d,
                criteria: b.call(c, a, d, e)
            };
        }).sort(function(a, b) {
            var c = a.criteria, d = b.criteria;
            if (c !== d) {
                if (c > d || void 0 === c) return 1;
                if (d > c || void 0 === d) return -1;
            }
            return a.index - b.index;
        }), "value");
    };
    var C = function(a) {
        return function(b, c, d) {
            var e = {};
            return c = B(c), y(b, function(f, g) {
                var h = c.call(d, f, g, b);
                a(e, h, f);
            }), e;
        };
    };
    x.groupBy = C(function(a, b, c) {
        x.has(a, b) ? a[b].push(c) : a[b] = [ c ];
    }), x.indexBy = C(function(a, b, c) {
        a[b] = c;
    }), x.countBy = C(function(a, b) {
        x.has(a, b) ? a[b]++ : a[b] = 1;
    }), x.sortedIndex = function(a, b, c, d) {
        c = B(c);
        for (var e = c.call(d, b), f = 0, g = a.length; g > f; ) {
            var h = f + g >>> 1;
            c.call(d, a[h]) < e ? f = h + 1 : g = h;
        }
        return f;
    }, x.toArray = function(a) {
        return a ? x.isArray(a) ? h.call(a) : a.length === +a.length ? x.map(a, x.identity) : x.values(a) : [];
    }, x.size = function(a) {
        return null == a ? 0 : a.length === +a.length ? a.length : x.keys(a).length;
    }, x.first = x.head = x.take = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[0] : 0 > b ? [] : h.call(a, 0, b);
    }, x.initial = function(a, b, c) {
        return h.call(a, 0, a.length - (null == b || c ? 1 : b));
    }, x.last = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[a.length - 1] : h.call(a, Math.max(a.length - b, 0));
    }, x.rest = x.tail = x.drop = function(a, b, c) {
        return h.call(a, null == b || c ? 1 : b);
    }, x.compact = function(a) {
        return x.filter(a, x.identity);
    };
    var D = function(a, b, c) {
        return b && x.every(a, x.isArray) ? i.apply(c, a) : (y(a, function(a) {
            x.isArray(a) || x.isArguments(a) ? b ? g.apply(c, a) : D(a, b, c) : c.push(a);
        }), c);
    };
    x.flatten = function(a, b) {
        return D(a, b, []);
    }, x.without = function(a) {
        return x.difference(a, h.call(arguments, 1));
    }, x.partition = function(a, b) {
        var c = [], d = [];
        return y(a, function(a) {
            (b(a) ? c : d).push(a);
        }), [ c, d ];
    }, x.uniq = x.unique = function(a, b, c, d) {
        x.isFunction(b) && (d = c, c = b, b = !1);
        var e = c ? x.map(a, c, d) : a, f = [], g = [];
        return y(e, function(c, d) {
            (b ? d && g[g.length - 1] === c : x.contains(g, c)) || (g.push(c), f.push(a[d]));
        }), f;
    }, x.union = function() {
        return x.uniq(x.flatten(arguments, !0));
    }, x.intersection = function(a) {
        var b = h.call(arguments, 1);
        return x.filter(x.uniq(a), function(a) {
            return x.every(b, function(b) {
                return x.contains(b, a);
            });
        });
    }, x.difference = function(a) {
        var b = i.apply(d, h.call(arguments, 1));
        return x.filter(a, function(a) {
            return !x.contains(b, a);
        });
    }, x.zip = function() {
        for (var a = x.max(x.pluck(arguments, "length").concat(0)), b = new Array(a), c = 0; a > c; c++) b[c] = x.pluck(arguments, "" + c);
        return b;
    }, x.object = function(a, b) {
        if (null == a) return {};
        for (var c = {}, d = 0, e = a.length; e > d; d++) b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c;
    }, x.indexOf = function(a, b, c) {
        if (null == a) return -1;
        var d = 0, e = a.length;
        if (c) {
            if ("number" != typeof c) return d = x.sortedIndex(a, b), a[d] === b ? d : -1;
            d = 0 > c ? Math.max(0, e + c) : c;
        }
        if (s && a.indexOf === s) return a.indexOf(b, c);
        for (;e > d; d++) if (a[d] === b) return d;
        return -1;
    }, x.lastIndexOf = function(a, b, c) {
        if (null == a) return -1;
        var d = null != c;
        if (t && a.lastIndexOf === t) return d ? a.lastIndexOf(b, c) : a.lastIndexOf(b);
        for (var e = d ? c : a.length; e--; ) if (a[e] === b) return e;
        return -1;
    }, x.range = function(a, b, c) {
        arguments.length <= 1 && (b = a || 0, a = 0), c = arguments[2] || 1;
        for (var d = Math.max(Math.ceil((b - a) / c), 0), e = 0, f = new Array(d); d > e; ) f[e++] = a, 
        a += c;
        return f;
    };
    var E = function() {};
    x.bind = function(a, b) {
        var c, d;
        if (w && a.bind === w) return w.apply(a, h.call(arguments, 1));
        if (!x.isFunction(a)) throw new TypeError();
        return c = h.call(arguments, 2), d = function() {
            if (!(this instanceof d)) return a.apply(b, c.concat(h.call(arguments)));
            E.prototype = a.prototype;
            var e = new E();
            E.prototype = null;
            var f = a.apply(e, c.concat(h.call(arguments)));
            return Object(f) === f ? f : e;
        };
    }, x.partial = function(a) {
        var b = h.call(arguments, 1);
        return function() {
            for (var c = 0, d = b.slice(), e = 0, f = d.length; f > e; e++) d[e] === x && (d[e] = arguments[c++]);
            for (;c < arguments.length; ) d.push(arguments[c++]);
            return a.apply(this, d);
        };
    }, x.bindAll = function(a) {
        var b = h.call(arguments, 1);
        if (0 === b.length) throw new Error("bindAll must be passed function names");
        return y(b, function(b) {
            a[b] = x.bind(a[b], a);
        }), a;
    }, x.memoize = function(a, b) {
        var c = {};
        return b || (b = x.identity), function() {
            var d = b.apply(this, arguments);
            return x.has(c, d) ? c[d] : c[d] = a.apply(this, arguments);
        };
    }, x.delay = function(a, b) {
        var c = h.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(null, c);
        }, b);
    }, x.defer = function(a) {
        return x.delay.apply(x, [ a, 1 ].concat(h.call(arguments, 1)));
    }, x.throttle = function(a, b, c) {
        var d, e, f, g = null, h = 0;
        c || (c = {});
        var i = function() {
            h = c.leading === !1 ? 0 : x.now(), g = null, f = a.apply(d, e), d = e = null;
        };
        return function() {
            var j = x.now();
            h || c.leading !== !1 || (h = j);
            var k = b - (j - h);
            return d = this, e = arguments, 0 >= k ? (clearTimeout(g), g = null, h = j, f = a.apply(d, e), 
            d = e = null) : g || c.trailing === !1 || (g = setTimeout(i, k)), f;
        };
    }, x.debounce = function(a, b, c) {
        var d, e, f, g, h, i = function() {
            var j = x.now() - g;
            b > j ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e), f = e = null));
        };
        return function() {
            f = this, e = arguments, g = x.now();
            var j = c && !d;
            return d || (d = setTimeout(i, b)), j && (h = a.apply(f, e), f = e = null), h;
        };
    }, x.once = function(a) {
        var b, c = !1;
        return function() {
            return c ? b : (c = !0, b = a.apply(this, arguments), a = null, b);
        };
    }, x.wrap = function(a, b) {
        return x.partial(b, a);
    }, x.compose = function() {
        var a = arguments;
        return function() {
            for (var b = arguments, c = a.length - 1; c >= 0; c--) b = [ a[c].apply(this, b) ];
            return b[0];
        };
    }, x.after = function(a, b) {
        return function() {
            return --a < 1 ? b.apply(this, arguments) : void 0;
        };
    }, x.keys = function(a) {
        if (!x.isObject(a)) return [];
        if (v) return v(a);
        var b = [];
        for (var c in a) x.has(a, c) && b.push(c);
        return b;
    }, x.values = function(a) {
        for (var b = x.keys(a), c = b.length, d = new Array(c), e = 0; c > e; e++) d[e] = a[b[e]];
        return d;
    }, x.pairs = function(a) {
        for (var b = x.keys(a), c = b.length, d = new Array(c), e = 0; c > e; e++) d[e] = [ b[e], a[b[e]] ];
        return d;
    }, x.invert = function(a) {
        for (var b = {}, c = x.keys(a), d = 0, e = c.length; e > d; d++) b[a[c[d]]] = c[d];
        return b;
    }, x.functions = x.methods = function(a) {
        var b = [];
        for (var c in a) x.isFunction(a[c]) && b.push(c);
        return b.sort();
    }, x.extend = function(a) {
        return y(h.call(arguments, 1), function(b) {
            if (b) for (var c in b) a[c] = b[c];
        }), a;
    }, x.pick = function(a) {
        var b = {}, c = i.apply(d, h.call(arguments, 1));
        return y(c, function(c) {
            c in a && (b[c] = a[c]);
        }), b;
    }, x.omit = function(a) {
        var b = {}, c = i.apply(d, h.call(arguments, 1));
        for (var e in a) x.contains(c, e) || (b[e] = a[e]);
        return b;
    }, x.defaults = function(a) {
        return y(h.call(arguments, 1), function(b) {
            if (b) for (var c in b) void 0 === a[c] && (a[c] = b[c]);
        }), a;
    }, x.clone = function(a) {
        return x.isObject(a) ? x.isArray(a) ? a.slice() : x.extend({}, a) : a;
    }, x.tap = function(a, b) {
        return b(a), a;
    };
    var F = function(a, b, c, d) {
        if (a === b) return 0 !== a || 1 / a == 1 / b;
        if (null == a || null == b) return a === b;
        a instanceof x && (a = a._wrapped), b instanceof x && (b = b._wrapped);
        var e = j.call(a);
        if (e != j.call(b)) return !1;
        switch (e) {
          case "[object String]":
            return a == String(b);

          case "[object Number]":
            return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;

          case "[object Date]":
          case "[object Boolean]":
            return +a == +b;

          case "[object RegExp]":
            return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
        }
        if ("object" != typeof a || "object" != typeof b) return !1;
        for (var f = c.length; f--; ) if (c[f] == a) return d[f] == b;
        var g = a.constructor, h = b.constructor;
        if (g !== h && !(x.isFunction(g) && g instanceof g && x.isFunction(h) && h instanceof h) && "constructor" in a && "constructor" in b) return !1;
        c.push(a), d.push(b);
        var i = 0, k = !0;
        if ("[object Array]" == e) {
            if (i = a.length, k = i == b.length) for (;i-- && (k = F(a[i], b[i], c, d)); ) ;
        } else {
            for (var l in a) if (x.has(a, l) && (i++, !(k = x.has(b, l) && F(a[l], b[l], c, d)))) break;
            if (k) {
                for (l in b) if (x.has(b, l) && !i--) break;
                k = !i;
            }
        }
        return c.pop(), d.pop(), k;
    };
    x.isEqual = function(a, b) {
        return F(a, b, [], []);
    }, x.isEmpty = function(a) {
        if (null == a) return !0;
        if (x.isArray(a) || x.isString(a)) return 0 === a.length;
        for (var b in a) if (x.has(a, b)) return !1;
        return !0;
    }, x.isElement = function(a) {
        return !(!a || 1 !== a.nodeType);
    }, x.isArray = u || function(a) {
        return "[object Array]" == j.call(a);
    }, x.isObject = function(a) {
        return a === Object(a);
    }, y([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(a) {
        x["is" + a] = function(b) {
            return j.call(b) == "[object " + a + "]";
        };
    }), x.isArguments(arguments) || (x.isArguments = function(a) {
        return !(!a || !x.has(a, "callee"));
    }), "function" != typeof /./ && (x.isFunction = function(a) {
        return "function" == typeof a;
    }), x.isFinite = function(a) {
        return isFinite(a) && !isNaN(parseFloat(a));
    }, x.isNaN = function(a) {
        return x.isNumber(a) && a != +a;
    }, x.isBoolean = function(a) {
        return a === !0 || a === !1 || "[object Boolean]" == j.call(a);
    }, x.isNull = function(a) {
        return null === a;
    }, x.isUndefined = function(a) {
        return void 0 === a;
    }, x.has = function(a, b) {
        return k.call(a, b);
    }, x.noConflict = function() {
        return a._ = b, this;
    }, x.identity = function(a) {
        return a;
    }, x.constant = function(a) {
        return function() {
            return a;
        };
    }, x.property = function(a) {
        return function(b) {
            return b[a];
        };
    }, x.matches = function(a) {
        return function(b) {
            if (b === a) return !0;
            for (var c in a) if (a[c] !== b[c]) return !1;
            return !0;
        };
    }, x.times = function(a, b, c) {
        for (var d = Array(Math.max(0, a)), e = 0; a > e; e++) d[e] = b.call(c, e);
        return d;
    }, x.random = function(a, b) {
        return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1));
    }, x.now = Date.now || function() {
        return new Date().getTime();
    };
    var G = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    G.unescape = x.invert(G.escape);
    var H = {
        escape: new RegExp("[" + x.keys(G.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + x.keys(G.unescape).join("|") + ")", "g")
    };
    x.each([ "escape", "unescape" ], function(a) {
        x[a] = function(b) {
            return null == b ? "" : ("" + b).replace(H[a], function(b) {
                return G[a][b];
            });
        };
    }), x.result = function(a, b) {
        if (null == a) return void 0;
        var c = a[b];
        return x.isFunction(c) ? c.call(a) : c;
    }, x.mixin = function(a) {
        y(x.functions(a), function(b) {
            var c = x[b] = a[b];
            x.prototype[b] = function() {
                var a = [ this._wrapped ];
                return g.apply(a, arguments), M.call(this, c.apply(x, a));
            };
        });
    };
    var I = 0;
    x.uniqueId = function(a) {
        var b = ++I + "";
        return a ? a + b : b;
    }, x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var J = /(.)^/, K = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, L = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function(a, b, c) {
        var d;
        c = x.defaults({}, c, x.templateSettings);
        var e = new RegExp([ (c.escape || J).source, (c.interpolate || J).source, (c.evaluate || J).source ].join("|") + "|$", "g"), f = 0, g = "__p+='";
        a.replace(e, function(b, c, d, e, h) {
            return g += a.slice(f, h).replace(L, function(a) {
                return "\\" + K[a];
            }), c && (g += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'"), d && (g += "'+\n((__t=(" + d + "))==null?'':__t)+\n'"), 
            e && (g += "';\n" + e + "\n__p+='"), f = h + b.length, b;
        }), g += "';\n", c.variable || (g = "with(obj||{}){\n" + g + "}\n"), g = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + g + "return __p;\n";
        try {
            d = new Function(c.variable || "obj", "_", g);
        } catch (h) {
            throw h.source = g, h;
        }
        if (b) return d(b, x);
        var i = function(a) {
            return d.call(this, a, x);
        };
        return i.source = "function(" + (c.variable || "obj") + "){\n" + g + "}", i;
    }, x.chain = function(a) {
        return x(a).chain();
    };
    var M = function(a) {
        return this._chain ? x(a).chain() : a;
    };
    x.mixin(x), y([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(a) {
        var b = d[a];
        x.prototype[a] = function() {
            var c = this._wrapped;
            return b.apply(c, arguments), "shift" != a && "splice" != a || 0 !== c.length || delete c[0], 
            M.call(this, c);
        };
    }), y([ "concat", "join", "slice" ], function(a) {
        var b = d[a];
        x.prototype[a] = function() {
            return M.call(this, b.apply(this._wrapped, arguments));
        };
    }), x.extend(x.prototype, {
        chain: function() {
            return this._chain = !0, this;
        },
        value: function() {
            return this._wrapped;
        }
    }), "function" == typeof define && define.amd && define("underscore", [], function() {
        return x;
    });
}.call(this), function() {
    angular.module("app", [ "ngRoute", "ngAnimate", "mm.foundation", "LocalStorageModule", "ng-currency", "ngScrollTo", "base64", "angular.filter", "angular-datepicker" ]), 
    angular.element(document).ready(function() {
        return String.prototype.toProperCase = function() {
            return this.toLowerCase().replace(/^(.)|\s(.)/g, function(a) {
                return a.toUpperCase();
            });
        }, String.prototype.shorten = function(a) {
            return "undefined" != typeof this && null !== this ? this.length > a ? this.substring(0, a - 3) + "..." : this.toString() : "";
        }, angular.bootstrap(document, [ "app" ]);
    });
}.call(this), function() {
    var a;
    a = function() {
        function a(a) {
            this.credentials = "", this.http = a;
        }
        return a.prototype.setPath = function(a, b, c) {
            return this.domain = a, this.extension = b, this.ssl = c;
        }, a.prototype.url = function(a) {
            var b;
            return null != a ? (a = a.replace(this.extension, ""), a = a.replace(this.domain, ""), 
            a = a.replace("http://", ""), a = a.replace("https://", "")) : a = "", b = "http", 
            this.ssl && (b += "s"), b = b + "://" + this.domain + this.extension + a;
        }, a.prototype.setCredentials = function(a) {
            this.credentials = a;
        }, a.prototype.clearCredentials = function() {
            return this.credentials = "";
        }, a.prototype.setHeader = function(a, b) {
            return this.http.defaults.headers.common[a] = b;
        }, a.prototype.setAuth = function() {
            return "" !== this.credentials ? this.setHeader("Authorization", "Basic " + this.credentials.auth) : void 0;
        }, a.prototype.prepCall = function(a) {
            return this.setAuth(), a = a || "";
        }, a.prototype.get = function(a) {
            return a = this.prepCall(a), this.http({
                method: "GET",
                url: this.url(a)
            }).then(function(a) {
                return a;
            });
        }, a.prototype.checkCredentials = function(a) {
            return this.setHeader("Authorization", "Basic " + a.auth), this.http({
                method: "GET",
                url: this.url()
            });
        }, a.prototype.put = function(a, b) {
            return a = this.prepCall(a), this.http({
                method: "PUT",
                url: this.url(a),
                data: b
            });
        }, a.prototype.post = function(a, b) {
            return a = this.prepCall(a), this.http({
                method: "POST",
                url: this.url(a),
                data: b
            });
        }, a.prototype["delete"] = function(a) {
            return a = this.prepCall(a), this.http({
                method: "DELETE",
                url: this.url(a)
            });
        }, a;
    }(), angular.module("app").factory("api", function() {
        return a;
    });
}.call(this), function() {
    angular.module("app").factory("dropdown", [ "$http", "$q", function(a, b) {
        var c;
        return c = function() {
            function c() {
                this.http = a, this.items = [];
            }
            return c.prototype.generate = function(a) {
                var c;
                return c = b.defer(), this.loaded = c.promise, this.items = a, c.resolve(a);
            }, c.prototype.removeAll = function() {
                return this.items = [];
            }, c.prototype.load = function(b) {
                var c, d = this;
                return c = a.get(b).then(function(a) {
                    var b, c, e, f, g, h, i;
                    for (h = a.data, i = [], f = 0, g = h.length; g > f; f++) b = h[f], c = null, e = null, 
                    null != b.name && (c = b.name), null != b.value && (e = b.value), null === c && null === e ? (c = b, 
                    e = b) : null === c ? c = e : null === e && (e = c), i.push(d.add(c, e));
                    return i;
                });
            }, c.prototype.add = function(a, b, c) {
                var d;
                return null != a ? (null == b && (b = a), d = {
                    name: a,
                    value: b
                }, null != c && "" !== c && jQuery.extend(d, c), this.items.push(d)) : void 0;
            }, c.prototype.gangByCount = function() {
                var a, b, c, d, e, f, g;
                for (d = [], a = [], g = this.items, b = e = 0, f = g.length; f > e; b = ++e) c = g[b], 
                a.push(c), (b + 1) % 3 === 0 && (d.push(a), a = []);
                return a.length > 0 && d.push(a), d;
            }, c;
        }();
    } ]);
}.call(this), function() {
    var a = {}.hasOwnProperty, b = function(b, c) {
        function d() {
            this.constructor = b;
        }
        for (var e in c) a.call(c, e) && (b[e] = c[e]);
        return d.prototype = c.prototype, b.prototype = new d(), b.__super__ = c.prototype, 
        b;
    };
    angular.module("app").factory("dropdownFromJson", [ "$http", "dropdown", function(a, c) {
        var d;
        return d = function(c) {
            function d(a) {
                d.__super__.constructor.call(this), null != a && (this.loaded = this.load(a));
            }
            return b(d, c), d.prototype.load = function(b) {
                var c, d = this;
                return c = a.get(b).then(function(a) {
                    var b, c, e, f, g, h, i;
                    for (h = a.data, i = [], f = 0, g = h.length; g > f; f++) b = h[f], c = null, e = null, 
                    null != b.name && (c = b.name), null != b.value && (e = b.value), null === c && null === e ? (c = b, 
                    e = b) : null === c ? c = e : null === e && (e = c), delete b.name, delete b.value, 
                    i.push(d.add(c, e, b));
                    return i;
                });
            }, d;
        }(c);
    } ]);
}.call(this), function() {
    var a;
    a = function() {
        function a(a, b) {
            this.nav = {}, this.items = [], null != a && (null != a.nav ? this.loadNav(a.nav) : null == a.data && this.loadNav(a), 
            null != a.info && (null != a.info.fetchCount && (this.fetchCount = parseInt(a.info.fetchCount)), 
            null != a.info.foundSetCount && (this.foundSetCount = parseInt(a.info.foundSetCount)), 
            null != a.info.tableRecordCount && (this.tableRecordCount = parseInt(a.info.tableRecordCount)), 
            null != a.info.skip && (this.skip = parseInt(a.info.skip))), null != a.data && null != a.meta && null != b && this.loadItems(a.data, a.meta, b));
        }
        return a.prototype.loadNav = function(a) {
            var b, c, d, e;
            for (e = [], c = 0, d = a.length; d > c; c++) b = a[c], e.push(this.nav[b.name] = b.href);
            return e;
        }, a.prototype.loadItems = function(a, b, c) {
            var d, e, f, g, h, i;
            for (i = [], d = g = 0, h = a.length; h > g; d = ++g) e = a[d], f = new c(e, b[d].href, b[d].recordID), 
            i.push(this.items.push(f));
            return i;
        }, a.prototype.getNav = function(a) {
            return null != this.nav ? this.nav[a] : void 0;
        }, a.prototype.totalByKey = function(a) {
            var b, c, d, e, f, g;
            for (c = 0, g = this.items, e = 0, f = g.length; f > e; e++) b = g[e], null != b.data[a] && (d = parseFloat(b.data[a]), 
            !isNaN(d) && isFinite(b.data[a]) && (c += d));
            return c;
        }, a.prototype.next = function() {
            return this.getNav("next");
        }, a.prototype.previous = function() {
            return this.getNav("prev");
        }, a.prototype.start = function() {
            return this.getNav("start");
        }, a.prototype.end = function() {
            return this.getNav("end");
        }, a.prototype.hasPaging = function() {
            return null != this.next() || null != this.previous();
        }, a.prototype.hasNext = function() {
            return null != this.next();
        }, a.prototype.hasPrevious = function() {
            return null != this.previous();
        }, a;
    }(), angular.module("app").factory("fmRestList", function() {
        return a;
    });
}.call(this), function() {
    angular.module("app").factory("fmRestModel", [ "guid", function(a) {
        var b;
        return b = function() {
            function b(a, b, c) {
                var d;
                if (this.data = a, this.href = b, this.recordID = c, this.resetOriginal(), this.non_modifiable_properties = [], 
                d = Error("Invalid data for record"), void 0 === this.data || void 0 === this.href || void 0 === this.recordID) throw d;
                Date.now || (Date.now = function() {
                    return new Date().getTime();
                });
            }
            return b.prototype.id = function() {
                return this.data.__guid;
            }, b.prototype.resetOriginal = function() {
                var a, b, c, d;
                this.original = {}, c = this.data, d = [];
                for (a in c) b = c[a], d.push(this.original[a] = b);
                return d;
            }, b.prototype.resetCreatedTS = function(a) {
                return this.data.__created_ts = this.formatTSForFM(new Date().getTime()), null == a || a ? void 0 : this.resetOriginal();
            }, b.prototype.resetGuid = function(b) {
                return this.data.__guid = a.create(), null == b || b ? void 0 : this.resetOriginal();
            }, b.prototype.markRemoved = function(a) {
                return this.removed = null == a ? !0 : a;
            }, b.prototype.isRemoved = function() {
                return null != this.removed ? this.removed : !1;
            }, b.prototype.hasChanged = function() {
                var a, b, c, d;
                if ("" !== this.href) {
                    a = !1, d = this.data;
                    for (b in d) if (c = d[b], this.original[b] !== this.data[b]) {
                        a = !0;
                        break;
                    }
                } else a = !0;
                return a;
            }, b.prototype.formatFMDateForJS = function(a) {
                return null != a && "" !== a && void 0 !== a ? new Date(a) : null;
            }, b.prototype.formatDateForFM = function(a) {
                var b, c;
                return null != a && "" !== a && void 0 !== a ? (a = new Date(a), c = "/", b = function(a) {
                    return ("0" + a.toString()).slice(-2);
                }, b(a.getMonth() + 1) + c + b(a.getDate()) + c + a.getFullYear()) : null;
            }, b.prototype.formatTSForFM = function(a) {
                var b, c;
                return null != a && "" !== a && void 0 !== a ? (a = new Date(a), c = "/", b = function(a) {
                    return ("0" + a.toString()).slice(-2);
                }, b(a.getMonth() + 1) + c + b(a.getDate()) + c + a.getFullYear() + " " + b(a.getHours()) + ":" + b(a.getMinutes()) + ":" + b(a.getSeconds())) : null;
            }, b.prototype.getUpdateData = function() {
                var a, b, c, d, e, f, g;
                b = {};
                for (a in this.data) if (this.data.hasOwnProperty(a)) {
                    for (c = !0, g = this.non_modifiable_properties, e = 0, f = g.length; f > e; e++) if (d = g[e], 
                    a === d) {
                        c = !1;
                        break;
                    }
                    c && (b[a] = this.data[a]);
                }
                return b;
            }, b;
        }();
    } ]);
}.call(this), function() {
    var a;
    a = function() {
        function a(a, b, c, d, e, f) {
            this.$q = a, this.api = b, this.model = c, this.modelList = d, this.path = e, this.modelName = f;
        }
        return a.fieldNameKey = "RFMsF", a.fieldValueKey = "RFMsV", a.scriptKey = "RFMscript", 
        a.scriptParamKey = "RFMscriptParam", a.pageKey = "RFMmax", a.prototype.getByRecordId = function(a) {
            var b, c = this;
            return b = this.path + "/" + a + ".json", this.getAll(b).then(function(a) {
                var b;
                return b = c.validate(a.items[0].data), b ? a.items[0] : null;
            });
        }, a.prototype.validate = function(a) {
            return null == a.__guid || "" === a.__guid ? !1 : !0;
        }, a.prototype.getAll = function(a) {
            var b, c, d = this;
            return null == a && (a = this.path), b = this.$q.defer(), c = function(a) {
                var c;
                return c = new d.modelList(a.data, d.model), b.resolve(c);
            }, this.api.get(a).then(c, function(a) {
                var c, d;
                return null != a.data ? (c = parseInt(a.data.info["X-RESTfm-FM-Status"]), d = a.data.info["X-RESTfm-FM-Reason"], 
                401 === c ? b.resolve(null) : b.reject({
                    code: c,
                    reason: d,
                    status: a.status
                })) : b.reject(a);
            }), b.promise;
        }, a.prototype.getAllWithScript = function(b, c, d) {
            return (null == b || "" === b) && (b = this.path + ".json?"), null != c && "" !== c && ("?" !== b.slice(-1) && (b += "&"), 
            b = "object" == typeof c ? b + a.scriptKey + "=" + c.name + "&" + a.scriptParamKey + "=" + c.param : b + a.scriptKey + "=" + c), 
            null != d && "" !== d && ("?" !== b.slice(-1) && (b += "&"), b = b + a.pageKey + "=" + d), 
            this.getAll(b);
        }, a.prototype.getAllByKey = function(b, c, d, e) {
            var f;
            return f = this.path + ".json?" + a.fieldNameKey + "1=" + b + "&" + a.fieldValueKey + "1=" + c, 
            this.getAllWithScript(f, d, e);
        }, a.prototype.getAllForStaff = function(a, b, c) {
            return this.getAllByKey("staff_id", a, b, c);
        }, a.prototype.getFailureReason = function(a) {
            var b, c, d, e;
            return c = a["X-RESTfm-FM-Status"], b = a["X-RESTfm-FM-Reason"], e = a["X-RESTfm-Reason"], 
            null != c && null != b ? d = c + ": " + b : null != b ? d = b : null != e && (d = e), 
            d;
        }, a.prototype.fromJson = function(a) {
            return new this.model(a.data, a.href, a.recordID);
        }, a.prototype.makeNew = function(a, b) {
            var c;
            return c = new b(a, "", ""), c.resetGuid(!1), c.resetCreatedTS(!1), c.resetOriginal(), 
            c;
        }, a.prototype.save = function(a, b) {
            var c, d, e;
            return a.isRemoved() ? "" !== a.href ? this["delete"](a.href) : (c = this.$q.defer(), 
            c.resolve("Your " + this.modelName + " was successfully removed!"), c.promise) : a.hasChanged() ? (d = a.getUpdateData(), 
            e = a.href, null != b && "" !== b && (e = e + "?RFMscript=" + b), this.update(d, e).then(function(b) {
                return a.resetOriginal(), b;
            })) : (c = this.$q.defer(), c.resolve("Your " + this.modelName + " was successfully updated!"), 
            c.promise);
        }, a.prototype.add = function(a, b) {
            var c, d, e, f, g = this;
            return c = this.$q.defer(), f = function(b) {
                var d;
                return d = "Your " + g.modelName + " was successfully added!", a = new g.model(b.data.data[0], b.data.meta[0].href, b.data.meta[0].recordID), 
                c.resolve({
                    msg: d,
                    data: a
                });
            }, d = function(a) {
                var b;
                return b = "There was a problem adding your " + g.modelName + ". ", b += g.getFailureReason(a.data.info), 
                c.reject(b);
            }, e = this.path + ".json", null != b && (e = e + "?RFMpreScript=" + b), this.api.post(e, {
                data: [ a ]
            }).then(f, d), c.promise;
        }, a.prototype.update = function(a, b) {
            var c, d, e, f, g = this;
            return d = {
                data: [ a ]
            }, c = this.$q.defer(), f = function() {
                return c.resolve("Your " + g.modelName + " was successfully updated!");
            }, e = function(a) {
                var d;
                return d = "There was a problem updating your " + g.modelName + ". ", 404 === a.status ? d = "There was a problem updating your " + g.modelName + ". Unable to find the record at " + b : d += g.getFailureReason(a.data.info), 
                c.reject(d);
            }, this.api.put(b, d).then(f, e), c.promise;
        }, a.prototype["delete"] = function(a) {
            var b, c, d, e = this;
            return d = function() {
                return b.resolve("Your " + e.modelName + " was successfully deleted!");
            }, c = function(a) {
                var c;
                return c = "There was a problem deleting your " + e.modelName + ". ", c += e.getFailureReason(a.data.info), 
                b.reject(c);
            }, b = this.$q.defer(), this.api["delete"](a).then(d, c), b.promise;
        }, a;
    }(), angular.module("app").factory("fmRestRepository", function() {
        return a;
    });
}.call(this), function() {
    var a;
    a = function() {
        function a(a, b, c) {
            this.storage = a, this.name = b, this.expiry = c;
        }
        return a.prototype.intCompare = function(a, b) {
            var c;
            return c = !1, parseInt(a) === parseInt(b) && (c = !0), c;
        }, a.prototype.textCompare = function(a, b) {
            var c;
            return c = !1, a === b && (c = !0), c;
        }, a.prototype.getItemBy = function(a, b, c) {
            var d, e, f, g, h, i;
            if (e = null, g = this.get(), null != g && "" !== g) for (h = 0, i = g.length; i > h; h++) if (f = g[h], 
            d = c(f[a], b)) {
                e = f;
                break;
            }
            return e;
        }, a.prototype.stripObjects = function(a) {
            var b, c, d, e;
            if (null !== a) {
                for (c = [], d = 0, e = a.length; e > d; d++) b = a[d], c.push({
                    data: b.data,
                    href: b.href,
                    recordID: b.recordID
                });
                return c;
            }
            return a;
        }, a.prototype.clearAllRegEx = function(a) {
            return this.storage.clearAll(a);
        }, a.prototype.saveByKey = function(a, b) {
            return this.storage.store(a, b);
        }, a.prototype.getByKey = function(a) {
            return this.storage.get(a);
        }, a.prototype.clearByKey = function(a) {
            return this.storage.store(a);
        }, a.prototype.get = function() {
            return this.getByKey(this.name);
        }, a.prototype.save = function(a) {
            return this.saveByKey(this.name, a);
        }, a.prototype.clear = function() {
            return this.clearByKey(this.name);
        }, a.prototype.add = function(a) {
            var b;
            return b = this.get(), "" === b || null == b ? b = [ a ] : b.push(a), this.save(b);
        }, a.prototype.getName = function(a) {
            return null != a ? this.name + "." + a : this.name;
        }, a.prototype.saveById = function(a, b) {
            return this.saveByKey(this.getName(a), b);
        }, a.prototype.getById = function(a) {
            return this.getByKey(this.getName(a));
        }, a.prototype.clearById = function(a) {
            return this.clearByKey(this.getName(a));
        }, a.prototype.current = function() {
            return this.getName("current");
        }, a.prototype.getCurrent = function() {
            return this.getByKey(this.current());
        }, a.prototype.saveCurrent = function(a) {
            return this.saveByKey(this.current(), a);
        }, a.prototype.clearCurrent = function() {
            return this.saveCurrent();
        }, a;
    }(), angular.module("app").factory("ModelStorageService", function() {
        return a;
    });
}.call(this), function() {
    var a;
    a = function() {
        function a(a) {
            this.items = a, this.currentPage = 0, this.pageSize = 20, null == this.items && (this.items = []);
        }
        return a.prototype.incrementPage = function() {
            return this.setCurrentPage(this.currentPage + 1);
        }, a.prototype.decrementPage = function() {
            return this.setCurrentPage(this.currentPage - 1);
        }, a.prototype.setCurrentPage = function(a) {
            return this.currentPage = a;
        }, a.prototype.numberOfPages = function() {
            return Math.ceil(this.items.length / this.pageSize);
        }, a.prototype.getNumberAsArray = function(a) {
            return new Array(a);
        }, a.prototype.pageArray = function() {
            return this.getNumberAsArray(this.numberOfPages());
        }, a.prototype.getItem = function(a) {
            return this.items[a];
        }, a.prototype.existsCount = function() {
            var a, b, c, d, e;
            if (a = 0, this.items.length > 0) for (e = this.items, c = 0, d = e.length; d > c; c++) b = e[c], 
            b.isRemoved() || (a += 1);
            return a;
        }, a.prototype.exists = function(a) {
            var b;
            return b = this.findIndex(a), b > -1 ? !this.items[b].isRemoved() : !1;
        }, a.prototype.add = function(a) {
            return null == this.items && (this.items = []), this.items.push(a);
        }, a.prototype.remove = function(a, b) {
            return null == b && (b = this.findIndex(a)), b > -1 ? this.items.splice(b, 1) : void 0;
        }, a.prototype.findIndex = function(a) {
            return this.items ? this.items.indexOf(a) : -1;
        }, a.prototype.findPage = function(a) {
            var b;
            return b = this.findIndex(a), b > -1 ? Math.floor(b / this.pageSize) : -1;
        }, a.prototype.count = function() {
            var a, b, c, d, e;
            if (a = 0, null != this.items && (a = this.items.length, a > 0)) for (e = this.items, 
            c = 0, d = e.length; d > c; c++) b = e[c], b.removed && (a -= 1);
            return a;
        }, a.prototype.numericSort = function(a, b) {
            var c = this;
            return "undefined" == typeof items || null === items ? this.items.sort(function(d, e) {
                var f, g, h;
                return f = d[a], g = e[a], null != f && null != f.sortKey && (f = f[f.sortKey()]), 
                null != g && null != g.sortKey && (g = g[g.sortKey()]), h = c.keySort(f, g, b), 
                0 !== h ? h : c.createdSort(d, e, b);
            }) : void 0;
        }, a.prototype.alphaSort = function(a, b) {
            var c = this;
            return null != this.items ? this.items.sort(function(d, e) {
                var f, g, h;
                return f = d[a], g = e[a], null != f && (null != f.sortKey && (f = f[f.sortKey()]), 
                f = f.toUpperCase()), null != g && (null != g.sortKey && (g = g[g.sortKey()]), g = g.toUpperCase()), 
                h = c.keySort(f, g, b), 0 !== h ? h : c.createdSort(d, e, b);
            }) : void 0;
        }, a.prototype.dateSort = function(a, b) {
            var c = this;
            return null != this.items ? this.items.sort(function(d, e) {
                var f, g, h;
                return f = new Date(d[a]), g = new Date(e[a]), h = c.keySort(f, g, b), 0 !== h ? h : c.createdSort(d, e, b);
            }) : void 0;
        }, a.prototype.createdSort = function(a, b, c) {
            var d, e;
            return d = new Date(a.data.__created_ts), e = new Date(b.data.__created_ts), this.keySort(d, e, c);
        }, a.prototype.keySort = function(a, b, c) {
            return b > a ? c ? 1 : -1 : a > b ? c ? -1 : 1 : 0;
        }, a;
    }(), angular.module("app").factory("objectList", function() {
        return a;
    });
}.call(this), function() {
    var a = {}.hasOwnProperty, b = function(b, c) {
        function d() {
            this.constructor = b;
        }
        for (var e in c) a.call(c, e) && (b[e] = c[e]);
        return d.prototype = c.prototype, b.prototype = new d(), b.__super__ = c.prototype, 
        b;
    };
    angular.module("app").factory("plan", [ "fmRestModel", function(a) {
        var c;
        return c = function(a) {
            function c(a, b, d) {
                c.__super__.constructor.call(this, a, b, d), this.lastAccessed = Date.now(), this.non_modifiable_properties = [ "__guid", "__created_ts", "__created_an", "__modified_ts", "__modified_an", "_common_one_c", "staff_full_name_c", "staff_account_name_c", "product", "portfolio", "discipline" ], 
                this.date_approved = this.formatFMDateForJS(this.data.date_approved), this.date_submitted = this.formatFMDateForJS(this.data.date_submitted);
            }
            return b(c, a), c.submission_requirements = {
                budget: !0,
                campaign_title: !0,
                focus: !0,
                goals: !0,
                target: !0,
                message: !0,
                key_indicators: !0,
                begin: !0,
                end: !0,
                year: !0
            }, c.locked_after_submission = {
                focus: !0,
                goals: !0,
                target: !0,
                message: !0,
                key_indicators: !0
            }, c.prototype.handleDates = function() {
                return null != this.date_approved && (this.data.date_approved = this.formatDateForFM(this.date_approved)), 
                null != this.date_submitted ? this.data.date_submitted = this.formatDateForFM(this.date_submitted) : void 0;
            }, c.prototype.prepForSave = function() {
                return this.handleDates();
            }, c.prototype.prepForSubmit = function() {
                return this.data.status = "Submitted", this.date_submitted = new Date().getTime();
            }, c.prototype.unSubmit = function() {
                return this.data.status = "Draft", this.date_submitted = "", this.data.date_submitted = "";
            }, c.prototype.isDisabled = function(a) {
                var b;
                return "Draft" === this.status() ? !1 : (b = c.locked_after_submission[a], null != b && b);
            }, c.prototype.readyForSubmission = function() {
                var a, b, d, e;
                b = !0, e = c.submission_requirements;
                for (a in e) if (d = e[a], d && (null == this.data[a] || "" === this.data[a])) {
                    b = !1;
                    break;
                }
                return b;
            }, c.prototype.status = function() {
                return null === this.data.status || "" === this.data.status ? "Draft" : this.data.status;
            }, c;
        }(a);
    } ]);
}.call(this), function() {
    var a = {}.hasOwnProperty, b = function(b, c) {
        function d() {
            this.constructor = b;
        }
        for (var e in c) a.call(c, e) && (b[e] = c[e]);
        return d.prototype = c.prototype, b.prototype = new d(), b.__super__ = c.prototype, 
        b;
    };
    angular.module("app").factory("planProduct", [ "fmRestModel", function(a) {
        var c;
        return c = function(a) {
            function c(a, b, d) {
                c.__super__.constructor.call(this, a, b, d), this.lastAccessed = Date.now(), this.non_modifiable_properties = [ "__guid", "__created_ts", "__created_an", "__modified_ts", "__modified_an", "_common_one_c" ], 
                this.product = {
                    name: this.data.product,
                    value: this.data.product,
                    portfolio: this.data.portfolio,
                    discipline: this.data.discipline
                }, this.removed = !1;
            }
            return b(c, a), c.prototype.productMatch = function(a) {
                return null != this.product && null != a && this.product.value === a.value && this.product.discipline === a.discipline && this.product.portfolio === a.portfolio ? !0 : !1;
            }, c.prototype.handleProduct = function() {
                return null != this.product ? (this.data.portfolio = this.product.portfolio, this.data.discipline = this.product.discipline, 
                this.data.product = this.product.value) : (this.data.portfolio = "", this.data.discipline = "", 
                this.data.product = "");
            }, c;
        }(a);
    } ]);
}.call(this), function() {
    var a = {}.hasOwnProperty, b = function(b, c) {
        function d() {
            this.constructor = b;
        }
        for (var e in c) a.call(c, e) && (b[e] = c[e]);
        return d.prototype = c.prototype, b.prototype = new d(), b.__super__ = c.prototype, 
        b;
    };
    angular.module("app").factory("planProductList", [ "objectList", function(a) {
        var c, d;
        return c = function(a) {
            function c() {
                return d = c.__super__.constructor.apply(this, arguments);
            }
            return b(c, a), c.prototype.sort = function() {
                return this.dateSort("product");
            }, c.prototype.getAllByName = function() {
                var a, b, c, d, e;
                for (b = [], e = this.items, c = 0, d = e.length; d > c; c++) a = e[c], a.isRemoved() || b.push(a.product.name);
                return b;
            }, c.prototype.findIndex = function(a) {
                var b, c, d, e, f;
                for (f = this.items, b = d = 0, e = f.length; e > d; b = ++d) if (c = f[b], c.productMatch(a)) return b;
                return -1;
            }, c;
        }(a);
    } ]);
}.call(this), function() {
    var a = {}.hasOwnProperty, b = function(b, c) {
        function d() {
            this.constructor = b;
        }
        for (var e in c) a.call(c, e) && (b[e] = c[e]);
        return d.prototype = c.prototype, b.prototype = new d(), b.__super__ = c.prototype, 
        b;
    };
    angular.module("app").factory("strategy", [ "fmRestModel", function(a) {
        var c;
        return c = function(a) {
            function c(a, b, d) {
                c.__super__.constructor.call(this, a, b, d), this.lastAccessed = Date.now(), this.non_modifiable_properties = [ "__guid", "__created_ts", "__created_an", "__modified_ts", "__modified_an", "_common_one_c", "tactic_count_c" ], 
                this.setTacticsLoaded(!1), this.date = this.formatFMDateForJS(this.data.__created_ts), 
                null == this.date && (this.date = new Date(Date.now())), this.removed = !1;
            }
            return b(c, a), c.prototype.title = function(a) {
                return null != this.data.description ? this.data.description.shorten(a) : "";
            }, c.prototype.setTacticsLoaded = function(a) {
                return this.tactics_loaded = a;
            }, c.prototype.getTacticsLoaded = function() {
                return this.tactics_loaded;
            }, c.prototype.dbCount = function() {
                var a;
                return a = this.data.tactic_count_c, "" === a && (a = 0), a;
            }, c;
        }(a);
    } ]);
}.call(this), function() {
    var a = {}.hasOwnProperty, b = function(b, c) {
        function d() {
            this.constructor = b;
        }
        for (var e in c) a.call(c, e) && (b[e] = c[e]);
        return d.prototype = c.prototype, b.prototype = new d(), b.__super__ = c.prototype, 
        b;
    };
    angular.module("app").factory("strategyList", [ "objectList", function(a) {
        var c, d;
        return c = function(a) {
            function c() {
                return d = c.__super__.constructor.apply(this, arguments);
            }
            return b(c, a), c.prototype.sort = function() {
                return this.dateSort("date");
            }, c;
        }(a);
    } ]);
}.call(this), function() {
    var a = {}.hasOwnProperty, b = function(b, c) {
        function d() {
            this.constructor = b;
        }
        for (var e in c) a.call(c, e) && (b[e] = c[e]);
        return d.prototype = c.prototype, b.prototype = new d(), b.__super__ = c.prototype, 
        b;
    };
    angular.module("app").factory("tactic", [ "fmRestModel", "listManager", function(a, c) {
        var d;
        return d = function(a) {
            function d(a, b, e) {
                var f = this;
                d.__super__.constructor.call(this, a, b, e), this.lastAccessed = Date.now(), this.non_modifiable_properties = [ "__guid", "__created_ts", "__created_an", "__modified_ts", "__modified_an", "_common_one_c" ], 
                this.removed = !1, this.mediumList = c.mediumList, this.medium = this.findMedium(this.mediumList.items, {
                    name: this.data.medium,
                    value: this.data.medium_type
                }), this.medium.sortKey = function() {
                    return "name";
                }, this.begin_date = this.formatFMDateForJS(this.data.begin_date), this.end_date = this.formatFMDateForJS(this.data.end_date), 
                this.__defineGetter__("budget", function() {
                    return f._budget !== f.data.budget && (console.log("parsing float"), f._budget = f.data.budget, 
                    f._parsedBudget = "" === f.data.budget || null == f.data.budget ? 0 : parseFloat(f.data.budget)), 
                    f._parsedBudget;
                });
            }
            return b(d, a), d.prototype.findMedium = function(a, b) {
                var c, d, e, f;
                for (c = b, e = 0, f = a.length; f > e; e++) if (d = a[e], b.name === d.name && b.value === d.value) {
                    c = d;
                    break;
                }
                return c;
            }, d.prototype.handleMedium = function() {
                return this.data.medium = this.medium.name, this.data.medium_type = this.medium.value;
            }, d.prototype.handleDates = function() {
                return null != this.begin_date && (this.data.begin_date = this.formatDateForFM(this.begin_date)), 
                null != this.end_date ? this.data.end_date = this.formatDateForFM(this.end_date) : void 0;
            }, d.prototype.prepForSave = function() {
                return this.handleMedium(), this.handleDates();
            }, d.prototype.title = function(a) {
                return null != this.data.medium ? this.data.medium.length > a ? this.data.medium.substring(0, a - 3) + "..." : this.data.medium : "";
            }, d;
        }(a);
    } ]);
}.call(this), function() {
    var a = {}.hasOwnProperty, b = function(b, c) {
        function d() {
            this.constructor = b;
        }
        for (var e in c) a.call(c, e) && (b[e] = c[e]);
        return d.prototype = c.prototype, b.prototype = new d(), b.__super__ = c.prototype, 
        b;
    };
    angular.module("app").factory("tacticList", [ "objectList", function(a) {
        var c;
        return c = function(a) {
            function c(a, b) {
                this.strategy = a, c.__super__.constructor.call(this, b), this.pageSize = 12, null == this.sortKey && (this.sortKey = "begin_date"), 
                null == this.sortReverse && (this.sortReverse = !1);
            }
            return b(c, a), c.prototype.sort = function() {
                return "begin_date" === this.sortKey || "end_date" === this.sortKey ? this.dateSort(this.sortKey, this.sortReverse) : "budget" === this.sortKey ? this.numericSort(this.sortKey, this.sortReverse) : this.alphaSort(this.sortKey, this.sortReverse);
            }, c;
        }(a);
    } ]);
}.call(this), function() {
    var a = {}.hasOwnProperty, b = function(b, c) {
        function d() {
            this.constructor = b;
        }
        for (var e in c) a.call(c, e) && (b[e] = c[e]);
        return d.prototype = c.prototype, b.prototype = new d(), b.__super__ = c.prototype, 
        b;
    };
    angular.module("app").factory("user", [ "fmRestModel", function(a) {
        var c;
        return c = function(a) {
            function c(a, b, d) {
                if (c.__super__.constructor.call(this, a, b, d), this.lastAccessed = Date.now(), 
                !this.data.filemaker_accountname) throw Error("Invalid data for user");
                this.username = this.data.filemaker_accountname, this.canSeeOthers = "[Full Access]" === this.data.filemaker_accountprivilege ? !0 : !1;
            }
            return b(c, a), c;
        }(a);
    } ]);
}.call(this), function() {
    angular.module("app").service("ApiService", [ "$http", "api", function(a, b) {
        var c;
        return c = new b(a), c.setPath("23.21.222.201", "/RESTfm/MHMarketingPlan/", !1), 
        c;
    } ]);
}.call(this), function() {
    var a;
    a = function() {
        function a(a, b, c, d) {
            this.$q = a, this.credentialStorageService = b, this.apiService = c, this.storageService = d, 
            this.init();
        }
        return a.prototype.init = function() {
            var a;
            return this.lastError = 0, a = this.credentialStorageService.get(), "" !== a ? this.apiService.setCredentials(a) : void 0;
        }, a.prototype.checkIfLoggedIn = function() {
            var a;
            return a = this.getStoredCredentials(), "" !== a ? !0 : !1;
        }, a.prototype.getStoredCredentials = function() {
            return this.credentialStorageService.get();
        }, a.prototype.doLogin = function(a, b) {
            var c, d, e, f = this;
            return this.lastError = 0, this.deferred = this.$q.defer(), c = this.credentialStorageService.form(a, b), 
            e = function() {
                return f.apiService.setCredentials(c), f.credentialStorageService.save(c), f.deferred.resolve(!0);
            }, d = function(a) {
                return 401 !== a.status && (f.lastError = a.status), 500 !== a.status && (f.apiService.setCredentials(""), 
                f.credentialStorageService.clear()), f.deferred.reject(!1);
            }, this.apiService.checkCredentials(c).then(e, d), this.deferred.promise;
        }, a.prototype.doLogout = function() {
            return this.checkIfLoggedIn() && this.storageService.clearAll(), this.apiService.clearCredentials();
        }, a;
    }(), angular.module("app").factory("AuthorizationService", [ "$q", "CredentialStorageService", "ApiService", "StorageService", function(b, c, d, e) {
        return new a(b, c, d, e);
    } ]);
}.call(this), function() {
    var a;
    angular.module("app").service("ConjugationService", a = function() {
        function a() {
            this.verbs = {
                submit: {
                    past: "submitted",
                    present: "submit",
                    present_continuous: "submitting"
                },
                update: {
                    past: "updated",
                    present: "update",
                    present_continuous: "updating"
                },
                remove: {
                    past: "removed",
                    present: "remove",
                    present_continuous: "removing"
                },
                add: {
                    past: "added",
                    present: "add",
                    present_continuous: "adding"
                },
                refresh: {
                    past: "refreshed",
                    present: "refresh",
                    present_continuous: "refreshing"
                }
            };
        }
        return a.prototype.get = function(a, b) {
            return null != this.verbs[a] ? this.verbs[a][b] : null;
        }, a.prototype.past = function(a) {
            return this.get(a, "past");
        }, a.prototype.present_continuous = function(a) {
            return this.get(a, "present_continuous");
        }, a.prototype.present = function(a) {
            return this.get(a, "present");
        }, a;
    }());
}.call(this), function() {
    var a;
    angular.module("app").service("CredentialStorageService", [ "StorageService", "$base64", a = function() {
        function a(a, b) {
            this.storageService = a, this.base64 = b;
        }
        return a.prototype.form = function(a, b) {
            var c;
            return "" !== a ? (c = this.base64.encode(a + ":" + b), {
                auth: c,
                username: a
            }) : "";
        }, a.prototype.get = function() {
            var a;
            return a = this.storageService.get("credentials"), null != a ? a : "";
        }, a.prototype.clear = function() {
            return this.save();
        }, a.prototype.save = function(a) {
            var b;
            return b = this.storageService.store("credentials", a);
        }, a;
    }() ]);
}.call(this), function() {
    var a;
    angular.module("app").service("NotificationService", [ "$timeout", "ToastrService", "ConjugationService", a = function() {
        function a(a, b, c) {
            this.timeout = a, this.toastrService = b, this.conjugationService = c;
        }
        return a.prototype.delayed = function(a, b, c, d, e, f) {
            var g, h = this;
            return g = this.timeout(function() {
                var c, d, e;
                return e = h.conjugationService.present_continuous(a).toProperCase(), c = e + " " + b + "...", 
                d = e + "...", h.info(c, d);
            }, null != f ? f : 500), c.apply().then(function(c) {
                var e, f, i;
                return h.timeout.cancel(g), null != d && d.apply(null, [ c ]), h.clear(), i = h.conjugationService.past(a).toProperCase(), 
                e = i + " " + b + "!", f = i + "!", h.success(e, f);
            })["catch"](function(c) {
                var d, f, i;
                return h.timeout.cancel(g), null != e && (console.log(c), e.apply(null, [ c ])), 
                h.clear(), i = h.conjugationService.past(a), d = b.toProperCase() + " was not " + i + ". " + c, 
                f = "Not " + i.toProperCase() + "!", h.error(d, f);
            });
        }, a.prototype.error = function(a, b) {
            return this.toastrService.error(a, b);
        }, a.prototype.success = function(a, b) {
            return this.toastrService.success(a, b);
        }, a.prototype.info = function(a, b) {
            return this.toastrService.info(a, b);
        }, a.prototype.clear = function(a) {
            return this.toastrService.clear(a);
        }, a;
    }() ]);
}.call(this), function() {
    var a, b = function(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    };
    angular.module("app").service("RouteValidation", [ "$rootScope", "$location", "AuthorizationService", a = function() {
        function a(a, c, d) {
            this.rootScope = a, this.location = c, this.authorization = d, this.validateRoute = b(this.validateRoute, this), 
            this.routesRequireNoValidation = [];
        }
        return a.prototype.addNonValidationRoute = function(a) {
            return this.routesRequireNoValidation.push(a);
        }, a.prototype.routeRequiresValidation = function(a) {
            var b;
            return b = _.find(this.routesRequireNoValidation, function(b) {
                return a.substr(0, b.length) === b;
            }), null != b ? !1 : !0;
        }, a.prototype.validateRoute = function() {
            var a;
            return a = this.routeRequiresValidation(this.location.url()) && !this.authorization.checkIfLoggedIn(), 
            a ? this.location.path("/login") : void 0;
        }, a;
    }() ]);
}.call(this), function() {
    angular.module("app").service("SchoolYear", function() {
        var a;
        return new (a = function() {
            function a() {
                var a, b, c, d;
                for (a = new Date().getFullYear(), this.years = [], b = c = 2015, d = a + 1; d >= 2015 ? d >= c : c >= d; b = d >= 2015 ? ++c : --c) this.years.push(this.buildYearString(b));
                this.year = this.buildYearString(a), this.currentYear = this.buildYearString(a);
            }
            return a.prototype.buildYearString = function(a) {
                return a.toString() + "-" + (a + 1).toString();
            }, a;
        }())();
    });
}.call(this), function() {
    angular.module("app").service("ToastrService", function() {
        return toastr;
    });
}.call(this), function() {
    angular.module("app").service("guid", function() {
        var a;
        return new (a = function() {
            function a() {}
            return a.prototype.s4 = function() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
            }, a.prototype.create = function() {
                return this.s4() + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + this.s4() + this.s4();
            }, a;
        }())();
    });
}.call(this), function() {
    angular.module("app").service("listManager", [ "dropdown", "dropdownFromJson", "ModelStorageService", "StorageService", "$q", function(a, b, c, d, e) {
        var f, g, h, i, j, k, l, m, n, o, p, q;
        if (k = new c(d, "lists", 144e3), l = k.get(), null == l) {
            for (l = {}, l.mediumList = new a(), l.mediumList.add("Advertisement", "advertisement"), 
            l.mediumList.add("Blog", "blog"), l.mediumList.add("Brochure/Flyer", "brochure-flyer"), 
            l.mediumList.add("Case Study/Whitepaper", "case study-whitepaper"), l.mediumList.add("Email", "email"), 
            l.mediumList.add("Guided Tour (Digital)", "guided-tour"), l.mediumList.add("Landing Page", "landing-page"), 
            l.mediumList.add("List Import", "list-import"), l.mediumList.add("Microsite/Splash", "microsite-splash"), 
            l.mediumList.add("Package", "package"), l.mediumList.add("Paid Search", "paid-search"), 
            l.mediumList.add("Premium", "premium"), l.mediumList.add("Presentation", "presentation"), 
            l.mediumList.add("Print/Digital", "print-digital"), l.mediumList.add("Sampler", "sampler"), 
            l.mediumList.add("Social Media", "socialmedia"), l.mediumList.add("Social Tweet", "social-tweet"), 
            l.mediumList.add("Video", "video"), l.mediumList.add("Web Form", "web-form"), l.mediumList.add("Webinar", "webinar"), 
            f = [ {
                name: "relationshipManagerList",
                url: "listdata/managersRelationship.json"
            }, {
                name: "productManagerList",
                url: "listdata/managersProduct.json"
            }, {
                name: "districtManagerList",
                url: "listdata/managersDistrict.json"
            }, {
                name: "productList",
                url: "listdata/products.json"
            }, {
                name: "multipleCollateralTypeList",
                url: "listdata/multipleCollateralTypes.json"
            }, {
                name: "stateList",
                url: "listdata/states.json"
            }, {
                name: "schoolBuildingList",
                url: "listdata/schoolBuildings.json"
            }, {
                name: "emailObjectiveList",
                url: "listdata/emailObjectives.json"
            }, {
                name: "emailListSourceList",
                url: "listdata/emailSources.json"
            }, {
                name: "purposeList",
                url: "listdata/purposes.json"
            }, {
                name: "productCategoryList",
                url: "listdata/productCategories.json"
            }, {
                name: "customerRequestList",
                url: "listdata/customerRequests.json"
            }, {
                name: "distributionChannelList",
                url: "listdata/distributionChannels.json"
            } ], g = 0, h = e.defer(), m = function(a, c) {
                var d;
                return d = new b(a.url), c[a.name] = d, d.loaded;
            }, p = 0, q = f.length; q > p; p++) j = f[p], m(j, l).then(function() {
                return g += 1, g === f.length ? h.resolve(l) : void 0;
            });
            h.promise.then(function() {
                return k.save(l);
            });
        } else for (i in l) o = l[i], n = new b(), n.generate(o.items), l[i] = n;
        return l.make = function() {
            return new a();
        }, l;
    } ]);
}.call(this), function() {
    angular.module("app").service("logger", function() {
        var a;
        return new (a = function() {
            function a() {
                this.on();
            }
            return a.prototype.on = function() {
                return this.logging = !0;
            }, a.prototype.off = function() {
                return this.logging = !1;
            }, a.prototype.clog = function() {
                var a, b, c, d, e, f, g, h;
                if (this.logging) {
                    for (e = arguments.callee.caller.prototype, c = arguments.callee.caller.name, d = "" !== c && null != c ? c : e, 
                    b = Array.prototype.splice.call(arguments, 0), console.log(d), h = [], f = 0, g = b.length; g > f; f++) a = b[f], 
                    h.push(console.log(a));
                    return h;
                }
            }, a;
        }())();
    });
}.call(this), function() {
    angular.module("app").service("utilities", function() {
        var a;
        return new (a = function() {
            function a() {}
            return a.prototype.toggle = function(a, b, c) {
                var d, e, f, g, h, i;
                if (e = a[c], null != e) {
                    if (null != e.value && (e = e.value), null != e.name && (e = e.name), d = !1, null != b && null != b.length) {
                        for (g = h = 0, i = b.length; i > h; g = ++h) if (f = b[g], e === f) {
                            d = !0, b.splice(g, 1);
                            break;
                        }
                    } else b = [];
                    d || b.push(e);
                }
                return b;
            }, a;
        }())();
    });
}.call(this), function() {
    var a;
    angular.module("app").controller("AddNewPlanController", [ "$location", "PlanListService", "NotificationService", a = function() {
        function a(a, b, c) {
            var d, e, f = this;
            this.$location = a, this.planListService = b, this.notifications = c, d = function() {
                return f.planListService.add();
            }, e = function(a) {
                return f.$location.path("plan/" + a.data.recordID);
            }, this.notifications.delayed("add", "plan", d, e, null, 200);
        }
        return a;
    }() ]);
}.call(this), function() {
    var a;
    angular.module("app").controller("HomeController", [ "$scope", "$location", "UsersService", a = function() {
        function a(a, b, c) {
            this.scope = a, this.$location = b, this.userService = c, this.scope.navbarCollapsed = !0, 
            void 0 === this.username && this.getUsername();
        }
        return a.prototype.getUsername = function() {
            var a = this;
            return this.loadingUsername ? void 0 : (this.promise = this.userService.getCurrentUser(), 
            this.loadingUsername = !0, this.promise.then(function(b) {
                return a.loadingUsername = !1, a.username = b.username;
            }), this.promise);
        }, a;
    }() ]);
}.call(this), function() {
    var a;
    angular.module("app").controller("LoginController", [ "AuthorizationService", "NotificationService", "$location", "UsersService", "$timeout", a = function() {
        function a(a, b, c, d, e) {
            this.auth = a, this.notifications = b, this.location = c, this.userService = d, 
            this.timeout = e, this.username = "", this.password = "";
        }
        return a.prototype.login = function() {
            var a, b, c, d, e = this;
            return b = function() {
                return e.notifications.info("Logging In...");
            }, c = this.timeout(b, 300), d = function() {
                var a, b;
                return b = function(a) {
                    return e.userService.saveCurrentUserId(a.recordID), e.location.path("/project"), 
                    e.timeout.cancel(c), e.notifications.clear(), e.notifications.success("Welcome " + e.username + "!");
                }, a = function(a) {
                    return e.timeout.cancel(c), e.notifications.clear(), e.notifications.error("Problem getting your username..." + a);
                }, e.userService.getUserByUsername(e.username).then(b, a);
            }, a = function() {
                return e.timeout.cancel(c), e.notifications.clear(), 500 === e.auth.lastError ? e.notifications.error("Oops, something went wrong! It's our fault not yours. Shoot us an email if this keeps happening!") : (e.userService.clearCurrentUserId(), 
                e.notifications.error("That's not a valid username and password."));
            }, this.auth.doLogin(this.username, this.password).then(d, a);
        }, a;
    }() ]);
}.call(this), function() {
    var a;
    angular.module("app").controller("LogoutController", [ "AuthorizationService", "$location", "UsersService", a = function() {
        function a(a, b, c) {
            this.auth = a, this.location = b, this.userService = c, this.auth.doLogout(), this.userService.clearCurrentUserId(), 
            this.location.path("/login");
        }
        return a;
    }() ]);
}.call(this), function() {
    var a;
    angular.module("app").controller("ModalInstanceController", [ "$scope", "$modalInstance", "item", "undo", a = function() {
        function a(a, b, c, d) {
            a.item = c, a.undo = d, a.ok = function() {
                return b.close(a.item);
            }, a.cancel = function() {
                return b.dismiss("cancel");
            };
        }
        return a;
    }() ]);
}.call(this), function() {
    var a, b = function(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    };
    angular.module("app").controller("MyPlansController", [ "$scope", "$location", "PlanListService", "NotificationService", "SchoolYear", a = function() {
        function a(a, c, d, e, f) {
            var g = this;
            this.scope = a, this.location = c, this.planListService = d, this.notifications = e, 
            this.schoolYear = f, this.load_error = b(this.load_error, this), this.load_success = b(this.load_success, this), 
            this.cols = 3, this.rows = 3, this.foundationColsSm = 12, this.foundationColsLg = 12 / this.cols, 
            this.foundationColsMd = 12 / this.cols, this.pagesize = this.cols * this.rows, this.scope.year = this.schoolYear.year, 
            this.years = this.schoolYear.years, this.scope.$watch("year", function(a) {
                return g.schoolYear.year = a, g.loadPlans(g.planListService.filter);
            });
        }
        return a.prototype.load_success = function(a) {
            return this.load_complete = !0, null != a ? (this.plans = a, this.recordDisplay = "Plans " + (this.plans.skip + 1).toString() + " through " + (this.plans.skip + this.plans.fetchCount).toString() + " of " + this.plans.foundSetCount.toString(), 
            this.group_plans(this.plans)) : void 0;
        }, a.prototype.group_plans = function(a, b) {
            var c, d, e, f, g, h, i, j, k, l;
            if (d = 0, this.plan_groups = [], null != b) for (f = [], k = a.items, g = 0, i = k.length; i > g; g++) e = k[g], 
            e.status() === b && f.push(e); else f = a.items;
            for (l = [], c = h = 0, j = f.length; j > h; c = ++h) e = f[c], c % this.cols === 0 && 0 !== c && (d += 1), 
            null == this.plan_groups[d] && (this.plan_groups[d] = []), l.push(this.plan_groups[d].push(e));
            return l;
        }, a.prototype.load_error = function(a) {
            return this.load_complete = !0, this.notifications.error(a);
        }, a.prototype.setFilter = function(a) {
            return this.planListService.filter = a, this.loadPlans(a);
        }, a.prototype.filterText = function() {
            return null != this.planListService.filter && "" !== this.planListService.filter ? this.planListService.filter : "All";
        }, a.prototype.loadPlans = function(a) {
            return this.load_complete = !1, this.plans = null, null == a || "" === a || "All" === a ? this.planListService.getByYear(this.scope.year, "", this.pagesize).then(this.load_success, this.load_error) : this.planListService.getByYear(this.scope.year, a, this.pagesize).then(this.load_success, this.load_error);
        }, a.prototype.getPlans = function(a) {
            return this.planListService.getByHref(a, this.pagesize).then(this.load_success, this.load_error);
        }, a.prototype.clickPlan = function(a) {
            return this.location.path("plan/" + a.recordID);
        }, a;
    }() ]);
}.call(this), function() {
    var a;
    angular.module("app").controller("NavController", [ "$scope", "$location", "$timeout", "AuthorizationService", "UsersService", a = function() {
        function a(a, b, c, d, e) {
            this.scope = a, this.$location = b, this.timeout = c, this.authorizationService = d, 
            this.userService = e, this.scope.navbarCollapsed = !0;
        }
        return a.prototype.isLoggedIn = function() {
            var a;
            return a = this.authorizationService.checkIfLoggedIn(), a && void 0 === this.username && this.getUsername(), 
            a;
        }, a.prototype.getUsername = function() {
            var a = this;
            return this.loadingUsername ? void 0 : (this.promise = this.userService.getCurrentUser(), 
            this.loadingUsername = !0, this.promise.then(function(b) {
                return a.loadingUsername = !1, a.username = b.username;
            })["catch"](function(b) {
                return a.timeout(function() {
                    return a.loadingUsername = !1;
                }, 500), b;
            }), this.promise);
        }, a.prototype.logout = function() {
            return this.$location.path("logout");
        }, a.prototype.addNewPlan = function() {
            return this.$location.path("addnewplan");
        }, a;
    }() ]);
}.call(this), function() {
    var a;
    angular.module("app").controller("PlanController", [ "$scope", "$routeParams", "$location", "$modal", "$timeout", "$q", "$window", "ScrollTo", "PlanService", "NotificationService", "listManager", "logger", "SchoolYear", a = function() {
        function a(a, b, c, d, e, f, g, h, i, j, k, l, m) {
            var n, o = this;
            this.scope = a, this.routeParams = b, this.location = c, this.modal = d, this.timeout = e, 
            this.q = f, this.window = g, this.scrollTo = h, this.planService = i, this.notifications = j, 
            this.listManager = k, this.logger = l, this.schoolYear = m, this.logger.on(), this.submitted = !1, 
            this.years = this.schoolYear.years, this.dateoptions = {
                format: "yyyy-mm-dd"
            }, n = "You have unsaved changes. These changes will be lost, are you sure you want to do this?", 
            this.window.onbeforeunload = function(a) {
                return o.scope.planForm.$dirty ? ("undefined" == typeof a && (a = o.window.event), 
                a && (a.returnValue = n), n) : void 0;
            }, this.scope.$on("$locationChangeStart", function(a) {
                var b;
                return o.scope.planForm.$dirty && (b = confirm(n), !b) ? a.preventDefault() : void 0;
            }), this.tabs = [ {
                active: !0
            }, {
                active: !1
            } ], this.productediting = !1, this.details = [ {
                name: "Focus",
                message: "Narrow big picture problems into more manageable parts. Name the problem, identify issues and justify your plan to tackle this campaign.",
                property: "focus"
            }, {
                name: "Goals",
                message: "Goals should align to the campaign focus.",
                property: "goals"
            }, {
                name: "Target",
                message: "Who benefits from this campaign?",
                property: "target"
            }, {
                name: "Message",
                message: "Define the central idea or theme underlying all the marketing activities. Short compelling, declarative sentence that state just one benefit and addresses the target's problem/issue. should be unique, believable, and important, Use short, non-jargon language; adaptable to various media, conceptual statement but not necessarily copy.",
                property: "message"
            }, {
                name: "Key Indicators",
                message: "Quantifiable measures used to gage performance to meet campaign goals. What sequence of outcomes or changes will take your from the current environment to the vision of your campaign goal being realized? How will the outcomes of your campaign be measured? How long will it take for measureable results to be realized?",
                property: "key_indicators"
            }, {
                name: "Notes",
                message: "",
                property: "notes"
            } ], this.findProduct = function(a, b) {
                var c, d, e, f;
                for (c = b, e = 0, f = a.length; f > e; e++) if (d = a[e], b.name === d.name && b.portfolio === d.portfolio) {
                    c = d;
                    break;
                }
                return c;
            }, this.updateControllerPlan = function(a) {
                return this.plan = a, null != a && void 0 !== a ? this.buildMonthDropDown(a.data.year) : void 0;
            }, this.monthList = this.listManager.months, this.productList = this.listManager.productList, 
            this.mediumList = this.listManager.mediumList, this.q.all([ this.productList.loaded, this.mediumList.loaded ]).then(function() {
                return o.planService.loadPlan(o.routeParams.id).then(function(a) {
                    return o.updateControllerPlan(a);
                })["catch"](function(a) {
                    return o.notifications.error(a.reason, "Could Not Retrieve Plan");
                });
            });
        }
        return a.prototype.editProduct = function(a) {
            return this.productediting = null == a || a ? "Draft" === this.plan.status() ? !0 : !1 : a;
        }, a.prototype.toggleProduct = function(a) {
            var b, c;
            return null != a ? (b = this.planService.pps.findIndex(a), b > -1 ? (c = this.planService.pps.getItem(b), 
            c.isRemoved() ? c.markRemoved(!1) : "" !== c.href ? c.markRemoved() : this.planService.pps.remove(a, b)) : this.planService.addPlanProduct(this.plan, a), 
            this.scope.planForm.$setDirty()) : void 0;
        }, a.prototype.isLoading = function() {
            return this.planService.loading;
        }, a.prototype.strategyNum = function(a, b) {
            return b + a.currentPage * a.pageSize + 1;
        }, a.prototype.yearUpdated = function() {}, a.prototype.buildMonthDropDown = function(a) {
            var b, c;
            return c = parseInt(a), b = c + 1, null == this.monthsDD || void 0 === this.monthsDD ? this.monthsDD = this.listManager.make() : this.monthsDD.removeAll(), 
            this.monthsDD.add("July " + c.toString()), this.monthsDD.add("August " + c.toString()), 
            this.monthsDD.add("September " + c.toString()), this.monthsDD.add("October " + c.toString()), 
            this.monthsDD.add("November " + c.toString()), this.monthsDD.add("December " + c.toString()), 
            this.monthsDD.add("January " + b.toString()), this.monthsDD.add("February " + b.toString()), 
            this.monthsDD.add("March " + b.toString()), this.monthsDD.add("April " + b.toString()), 
            this.monthsDD.add("May " + b.toString()), this.monthsDD.add("June " + b.toString());
        }, a.prototype.disabled = function(a) {
            return null != this.plan ? this.plan.isDisabled(a) : !0;
        }, a.prototype.invalidClass = function(a) {
            return !this.scope.planForm[a].$invalid || this.scope.planForm[a].$pristine && !this.submitted ? "" : "error";
        }, a.prototype.required = function(a) {
            var b;
            return b = this.planService.requirements(a);
        }, a.prototype.findStrategy = function(a) {
            return this.planService.goToStrategyPage(a) ? this.goToStrategyId(a.id(), -180) : void 0;
        }, a.prototype.findTactic = function(a, b) {
            return this.planService.goToTacticPage(a, b) ? this.goToTacticId(b.id()) : void 0;
        }, a.prototype.goToTacticId = function(a, b) {
            var c = this;
            return null == b && (b = -180), this.timeout(function() {
                return c.goToId(a, b);
            }, 100);
        }, a.prototype.goToStrategyId = function(a, b) {
            var c = this;
            return null == b && (b = 50), this.timeout(function() {
                return c.goToId(a, b);
            }, 100);
        }, a.prototype.goToId = function(a, b) {
            return this.scrollTo.idOrName(a, b);
        }, a.prototype.hasTactics = function(a) {
            return null != this.planService.tactics[a.id()] && this.planService.tactics[a.id()].items.length > 0 ? !0 : !1;
        }, a.prototype.overStrategy = function(a) {
            return a.over = !0, a.getTacticsLoaded() ? void 0 : this.planService.loadTactics(a, this.plan.recordID);
        }, a.prototype.out = function(a) {
            return a.over = !1;
        }, a.prototype.opened = function(a) {
            return a.isOpen ? void 0 : (a.wasOpened = !0, a.getTacticsLoaded() || this.planService.loadTactics(a, this.plan.recordID), 
            this.goToStrategyId(a.id()));
        }, a.prototype.save = function(a) {
            var b, c, d, e = this;
            return this.scope.planForm.$dirty ? (c = function() {
                return e.planService.save(a);
            }, d = function() {
                return e.planService.allow_requirements(!0), e.scope.planForm.$setPristine();
            }, b = function() {
                return e.planService.allow_requirements(!0);
            }, this.notifications.delayed("update", "plan", c, d, b)) : void 0;
        }, a.prototype.remove = function(a) {
            var b, c = this;
            return this.planService.allow_requirements(!1), b = this.modal.open({
                templateUrl: "modals/modalRemove.html",
                controller: "ModalInstanceController",
                resolve: {
                    undo: function() {
                        return !1;
                    },
                    item: function() {
                        return {
                            name: "plan",
                            object: a
                        };
                    }
                }
            }), b.result.then(function(a) {
                var b, d;
                return c.planService.allow_requirements(!0), b = function() {
                    return c.planService["delete"](a.object);
                }, d = function() {
                    return c.location.path("plan");
                }, c.notifications.delayed("remove", "plan", b, d);
            })["catch"](function() {
                return c.planService.allow_requirements(!0);
            });
        }, a.prototype.submit = function(a) {
            var b, c = this;
            return this.submitted = !0, this.scope.planForm.$valid ? (b = this.modal.open({
                templateUrl: "modals/modalSubmit.html",
                controller: "ModalInstanceController",
                resolve: {
                    undo: function() {
                        return null;
                    },
                    item: function() {
                        return {
                            name: "plan",
                            object: c.plan
                        };
                    }
                }
            }), b.result.then(function() {
                var b, d;
                return b = function() {
                    return c.planService.submit(a);
                }, d = function() {
                    return c.scope.planForm.$setPristine();
                }, c.notifications.delayed("submit", "plan", b, d);
            })) : console.log("can't submit");
        }, a.prototype.refresh = function(a) {
            var b, c, d, e = this;
            return b = function() {
                return e.planService.loadPlan(a.recordID, !0);
            }, d = function(a) {
                return e.updateControllerPlan(a), e.scope.planForm.$setPristine();
            }, this.scope.planForm.$dirty ? (c = this.modal.open({
                templateUrl: "modals/modalRefresh.html",
                controller: "ModalInstanceController",
                resolve: {
                    undo: function() {
                        return null;
                    },
                    item: function() {
                        return {
                            name: "plan",
                            object: e.plan
                        };
                    }
                }
            }), c.result.then(function() {
                return e.notifications.delayed("refresh", "plan", b, d);
            })) : this.notifications.delayed("refresh", "plan", b, d);
        }, a.prototype.clickAddStrategy = function() {
            var a, b = this;
            return this.planService.allow_requirements(!1), a = this.planService.addStrategy(this.plan), 
            this.findStrategy(a), this.timeout(function() {
                return b.scope.planForm.$setDirty(), b.planService.allow_requirements(!0);
            }, 400);
        }, a.prototype.clickAddTactic = function(a) {
            var b, c = this;
            return this.planService.allow_requirements(!1), b = this.planService.addTactic(a), 
            this.findTactic(a.id(), b), this.timeout(function() {
                return c.scope.planForm.$setDirty(), c.planService.allow_requirements(!0);
            }, 400);
        }, a.prototype.removeObject = function(a) {
            var b, c = this;
            return this.planService.allow_requirements(!1), b = this.modal.open({
                templateUrl: "modals/modalRemove.html",
                controller: "ModalInstanceController",
                resolve: {
                    undo: function() {
                        return !0;
                    },
                    item: function() {
                        return {
                            name: a.constructor.name,
                            object: a
                        };
                    }
                }
            }), b.result.then(function(a) {
                return a.object.markRemoved(), c.scope.planForm.$setDirty();
            });
        }, a.prototype.pretty = function(a) {
            return JSON.stringify(a, void 0, 2);
        }, a;
    }() ]);
}.call(this), function() {
    var a = {}.hasOwnProperty, b = function(b, c) {
        function d() {
            this.constructor = b;
        }
        for (var e in c) a.call(c, e) && (b[e] = c[e]);
        return d.prototype = c.prototype, b.prototype = new d(), b.__super__ = c.prototype, 
        b;
    };
    angular.module("app").service("PlanProductRepository", [ "$q", "planProduct", "fmRestModel", "fmRestList", "fmRestRepository", "ApiService", function(a, c, d, e, f, g) {
        var h;
        return new (h = function(d) {
            function f() {
                f.__super__.constructor.call(this, a, g, c, e, "layout/Api-PlanProduct", "planProduct");
            }
            return b(f, d), f.prototype.getAllForPlan = function(a, b) {
                return this.getAllByKey("plan_id", a, this.sortScript, b);
            }, f.prototype.save = function(a) {
                var b;
                return null != a && void 0 !== a ? "" !== a.href ? f.__super__.save.call(this, a).then(function(b) {
                    return {
                        msg: b,
                        obj: a
                    };
                }) : this.add(a.data, "RestFM.Login").then(function(b) {
                    return a.href = b.data.href, a.recordID = b.data.recordID, {
                        msg: b,
                        obj: a
                    };
                }) : (b = this.$q.defer(), b.resolve({
                    msg: "Nothing to save",
                    obj: null
                }), b.promise);
            }, f.prototype.makeNew = function(a, b) {
                var d;
                return d = f.__super__.makeNew.call(this, {
                    plan_id: a
                }, c), d.product = b, d.handleProduct(), d;
            }, f;
        }(f))();
    } ]);
}.call(this), function() {
    var a = {}.hasOwnProperty, b = function(b, c) {
        function d() {
            this.constructor = b;
        }
        for (var e in c) a.call(c, e) && (b[e] = c[e]);
        return d.prototype = c.prototype, b.prototype = new d(), b.__super__ = c.prototype, 
        b;
    };
    angular.module("app").service("PlanRepository", [ "$q", "plan", "fmRestList", "fmRestRepository", "ApiService", function(a, c, d, e, f) {
        var g;
        return new (g = function(e) {
            function g() {
                g.__super__.constructor.call(this, a, f, c, d, "layout/Api-Plan", "plan");
            }
            return b(g, e), g.prototype.getByYear = function(a, b, c) {
                return null != b && "" !== b ? this.getByStatus(b, c, a) : this.getPlans(c, a);
            }, g.prototype.getByStatus = function(a, b, c) {
                var d;
                return d = this.getFilterScript(c), this.getAllByKey("status", a, d, b);
            }, g.prototype.getPlans = function(a, b) {
                var c;
                return c = this.getFilterScript(b), this.getAllWithScript("", c, a);
            }, g.prototype.getPage = function(a, b) {
                return this.getAllWithScript(a, "", b);
            }, g.prototype.getFilterScript = function(a) {
                return null != a ? {
                    name: "Plan.Api.Filter",
                    param: a
                } : "Plan.Api.Filter";
            }, g.prototype.submit = function(b) {
                var c;
                return c = a.defer(), b.prepForSubmit(), this.save(b, "Plan.Api.Submit").then(function(a) {
                    return c.resolve(a);
                })["catch"](function(a) {
                    return b.unSubmit(), c.reject(a);
                }), c.promise;
            }, g.prototype.save = function(a, b) {
                return a.prepForSave(), g.__super__.save.call(this, a, b);
            }, g.prototype.add = function(a) {
                return g.__super__.add.call(this, a, "RestFM.Login");
            }, g.prototype.makeNew = function(a, b) {
                return g.__super__.makeNew.call(this, {
                    campaign_title: a,
                    year: b
                }, c);
            }, g;
        }(e))();
    } ]);
}.call(this), function() {
    var a = {}.hasOwnProperty, b = function(b, c) {
        function d() {
            this.constructor = b;
        }
        for (var e in c) a.call(c, e) && (b[e] = c[e]);
        return d.prototype = c.prototype, b.prototype = new d(), b.__super__ = c.prototype, 
        b;
    };
    angular.module("app").service("StrategyRepository", [ "$q", "strategy", "fmRestModel", "fmRestList", "fmRestRepository", "ApiService", function(a, c, d, e, f, g) {
        var h;
        return new (h = function(d) {
            function f() {
                f.__super__.constructor.call(this, a, g, c, e, "layout/Api-Strategy", "strategy");
            }
            return b(f, d), f.prototype.getAllForPlan = function(a, b) {
                return this.getAllByKey("plan_id", a, this.sortScript, b);
            }, f.prototype.save = function(a) {
                var b;
                return "" !== a.href ? f.__super__.save.call(this, a).then(function(b) {
                    return {
                        msg: b,
                        obj: a
                    };
                }) : a.isRemoved() ? (b = this.$q.defer(), b.resolve({
                    msg: "Successfully removed",
                    obj: null
                }), b.promise) : this.add(a.data, "RestFM.Login").then(function(b) {
                    return a.href = b.data.href, a.recordID = b.data.recordID, {
                        msg: b,
                        obj: a
                    };
                });
            }, f.prototype.makeNew = function(a) {
                var b;
                return b = f.__super__.makeNew.call(this, {
                    plan_id: a
                }, c), b.setTacticsLoaded(!0), console.log("added strategy", b), b;
            }, f;
        }(f))();
    } ]);
}.call(this), function() {
    var a = {}.hasOwnProperty, b = function(b, c) {
        function d() {
            this.constructor = b;
        }
        for (var e in c) a.call(c, e) && (b[e] = c[e]);
        return d.prototype = c.prototype, b.prototype = new d(), b.__super__ = c.prototype, 
        b;
    };
    angular.module("app").service("TacticRepository", [ "$q", "tactic", "fmRestModel", "fmRestList", "fmRestRepository", "ApiService", function(a, c, d, e, f, g) {
        var h;
        return new (h = function(d) {
            function f() {
                f.__super__.constructor.call(this, a, g, c, e, "layout/Api-Tactic", "tactic");
            }
            return b(f, d), f.prototype.getAllForStrategy = function(a, b) {
                return this.getAllByKey("strategy_id", a, this.sortScript, b);
            }, f.prototype.save = function(a) {
                var b;
                return a.prepForSave(), "" !== a.href ? f.__super__.save.call(this, a).then(function(b) {
                    return {
                        msg: b,
                        obj: a
                    };
                }) : a.isRemoved() ? (b = this.$q.defer(), b.resolve({
                    msg: "Successfully removed",
                    obj: null
                }), b.promise) : this.add(a.data, "RestFM.Login").then(function(b) {
                    return a.href = b.data.href, a.recordID = b.data.recordID, {
                        msg: b,
                        obj: a
                    };
                });
            }, f.prototype.makeNew = function(a) {
                return f.__super__.makeNew.call(this, {
                    strategy_id: a
                }, c);
            }, f;
        }(f))();
    } ]);
}.call(this), function() {
    var a;
    angular.module("app").service("UserRepository", [ "$q", "ApiService", "user", "UserStorageService", a = function() {
        function a(a, b, c, d) {
            this.$q = a, this.api = b, this.user = c, this.userStorage = d, this.path = "layout/Api-Staff";
        }
        return a.prototype.createUser = function(a) {
            var b, c, d, e;
            try {
                return b = a.data.data[0], d = a.data.meta[0].href, e = a.data.meta[0].recordID, 
                new this.user(b, d, e);
            } catch (f) {
                throw c = f, Error("Invalid API Response");
            } finally {}
        }, a.prototype.getOne = function(a) {
            var b = this;
            return this.api.get(a).then(function(a) {
                return b.createUser(a);
            });
        }, a.prototype.getUserByHref = function(a) {
            return this.getOne(a);
        }, a.prototype.getUserById = function(a) {
            return this.getOne(this.path + "/" + a + ".json");
        }, a.prototype.getUserByUsername = function(a) {
            return this.getOne(this.path + ".json?RFMsF1=filemaker_accountname&RFMsV1=" + a);
        }, a;
    }() ]);
}.call(this), function() {
    angular.module("app").config([ "localStorageServiceProvider", "$logProvider", "ngScrollToOptionsProvider", function(a, b, c) {
        return a.setPrefix("mhv2"), b.debugEnabled(!0), c.extend({
            handler: function(a, b) {
                return $(a).scrollintoview({
                    yOffset: b
                });
            }
        });
    } ]), angular.module("app").filter("startFrom", function() {
        return function(a, b) {
            return a.slice(b);
        };
    });
}.call(this), function() {
    angular.module("app").directive("equalHeight", [ "$timeout", function(a) {
        var b;
        return b = function(b, c) {
            return a(function() {
                var a, b, d, e, f;
                return a = c.children(), d = 0, f = 0, b = c.find("img"), e = b.length, e > 0 && angular.forEach(b, function(a) {
                    return a.complete ? f++ : void 0;
                }), f === e ? (angular.forEach(a, function(a) {
                    var b;
                    return b = $(a).outerHeight(), b > d ? d = b : void 0;
                }), a.css({
                    height: d
                })) : void 0;
            });
        }, {
            restrict: "A",
            scope: {},
            link: b
        };
    } ]);
}.call(this), function() {
    angular.module("app").directive("planCard", function() {
        return {
            restrict: "E",
            scope: {
                plan: "="
            },
            templateUrl: "directive-templates/plan-card.html"
        };
    });
}.call(this), function() {
    angular.module("app").directive("selectList", [ "utilities", function() {
        return {
            restrict: "E",
            require: "ngModel",
            scope: {
                ngModel: "=",
                items: "=",
                groupBy: "@",
                toggle: "&"
            },
            replace: "true",
            templateUrl: "directive-templates/selectlist.html",
            controller: [ "$scope", "utilities", function(a) {
                return a.doIt = function(b) {
                    return a.toggle({
                        product: b
                    });
                };
            } ]
        };
    } ]);
}.call(this), function() {
    angular.module("app").directive("tacticHeader", [ "$compile", function() {
        return {
            restrict: "A",
            scope: {
                oList: "=",
                key: "@",
                title: "@"
            },
            replace: !0,
            templateUrl: "directive-templates/tactic-header.html",
            controller: [ "$scope", function(a) {
                return a.sort = function(a, b) {
                    return null != a ? (a.sortKey === b ? a.sortReverse = !a.sortReverse : (a.sortKey = b, 
                    a.sortReverse = a.sortReverse), a.sort()) : void 0;
                };
            } ]
        };
    } ]);
}.call(this), function() {
    angular.module("app").directive("yesNo", function() {
        return {
            restrict: "E",
            require: "ngModel",
            scope: {
                ngModel: "=",
                name: "@",
                label: "@",
                labelClass: "@",
                inputClass: "@"
            },
            replace: "true",
            templateUrl: "directive-templates/yesno.html"
        };
    });
}.call(this), function() {
    var a;
    angular.module("app").service("PlanListService", [ "$q", "PlanRepository", "SchoolYear", a = function() {
        function a(a, b, c) {
            this.q = a, this.PlanRepository = b, this.SchoolYear = c, this.filter = "";
        }
        return a.prototype.getByStatus = function(a, b) {
            return this.PlanRepository.getByStatus(a, b);
        }, a.prototype.getByYear = function(a, b, c) {
            return this.PlanRepository.getByYear(a, b, c);
        }, a.prototype.getAll = function(a) {
            return this.PlanRepository.getPlans(a);
        }, a.prototype.getByHref = function(a, b) {
            return this.PlanRepository.getPage(a, b);
        }, a.prototype.add = function() {
            var a;
            return a = this.PlanRepository.makeNew("Untitled", this.SchoolYear.currentYear), 
            this.PlanRepository.add(a.data);
        }, a;
    }() ]);
}.call(this), function() {
    angular.module("app").service("PlanService", [ "$q", "PlanRepository", "StrategyRepository", "TacticRepository", "PlanProductRepository", "PlanStorageService", "tacticList", "strategyList", "planProductList", function(a, b, c, d, e, f, g, h, i) {
        var j;
        return new (j = function() {
            function j() {
                var g = this;
                this.blocked = {}, this.requirements_on = !0, this.loading = !1, this.loadingTactics = !1, 
                this.handleError = function(a) {
                    var b;
                    return b = null != a.code ? 101 === a.code ? "Record does not exist" : "Error " + a.code + ": " + a.reason : a;
                }, this.getPlanFromServer = function(a) {
                    return b.getByRecordId(a);
                }, this.getPlanProductsFromServer = function(a) {
                    return e.getAllForPlan(a.data.__guid, 1e3)["catch"](function(a) {
                        return g.handleError(a);
                    });
                }, this.getStrategiesFromServer = function(a) {
                    return c.getAllForPlan(a.data.__guid, 1e3)["catch"](function(a) {
                        return g.handleError(a);
                    });
                }, this.getTacticsFromServer = function(a) {
                    return d.getAllForStrategy(a.data.__guid, 1e3)["catch"](function(a) {
                        return g.handleError(a);
                    });
                }, this.fetchPlan = function(b, c) {
                    var d, e;
                    return d = a.defer(), e = null != c && c ? null : f.getById(b), null === e ? this.getPlanFromServer(b).then(function(a) {
                        return null === a ? deferred_resolve(a) : (f.saveById(b, a), d.resolve(a));
                    })["catch"](function(a) {
                        return d.reject(a);
                    }) : d.resolve(e), d.promise;
                }, this.fetchPlanProducts = function(b, c) {
                    var d, e;
                    return d = a.defer(), e = null != c && c ? null : f.getPPsById(b.recordID), null === e ? this.getPlanProductsFromServer(b).then(function(a) {
                        var c;
                        return null === a ? (f.savePPsById(b.recordID, []), d.resolve(a)) : (c = a.items, 
                        f.savePPsById(b.recordID, c), d.resolve(c));
                    })["catch"](function(a) {
                        return d.reject(a);
                    }) : d.resolve(e), d.promise;
                }, this.fetchStrategies = function(b, c) {
                    var d, e;
                    return d = a.defer(), e = null != c && c ? null : f.getStrategiesById(b.recordID), 
                    null === e ? this.getStrategiesFromServer(b).then(function(a) {
                        var c;
                        return null === a ? (f.saveStrategiesById(b.recordID, []), d.resolve(a)) : (c = a.items, 
                        f.saveStrategiesById(b.recordID, c), d.resolve(c));
                    })["catch"](function(a) {
                        return d.reject(a);
                    }) : d.resolve(e), d.promise;
                }, this.fetchTactics = function(b, c, d) {
                    var e, g;
                    return e = a.defer(), g = null != d && d ? null : f.getTacticsById(c, b.recordID), 
                    null === g ? this.getTacticsFromServer(b).then(function(a) {
                        var d;
                        return null === a ? (f.saveTacticsById(c, b.recordID, []), e.resolve({
                            tactics: a,
                            strategy: b
                        })) : (d = a.items, f.saveTacticsById(c, b.recordID, d), e.resolve({
                            tactics: d,
                            strategy: b
                        }));
                    })["catch"](function(a) {
                        return e.reject(a);
                    }) : e.resolve({
                        tactics: g,
                        strategy: b
                    }), e.promise;
                };
            }
            return j.prototype.allow_requirements = function(a) {
                return this.requirements_on = a;
            }, j.prototype.block_requirement = function(a) {
                return this.blocked[a] = !0;
            }, j.prototype.unblock_requirement = function(a) {
                return this.blocked[a] = !1;
            }, j.prototype.requirements = function(a) {
                return this.blocked[a] || !this.requirements_on ? !1 : b.model.submission_requirements[a];
            }, j.prototype.loadPlan = function(b, c) {
                var d, e = this;
                return d = a.defer(), this.loading = !0, this.tactics = {}, this.fetchPlan(b, c).then(function(a) {
                    return null !== a ? (e.loadingStrategies = !0, e.loadingPlanProducts = !0, e.fetchPlanProducts(a, c).then(function(b) {
                        return e.pps = new i(b), e.pps.sort(), e.loadingPlanProducts = !1, e.loadingStrategies ? void 0 : (e.loading = !1, 
                        d.resolve(a));
                    })["catch"](function(a) {
                        return e.loading = !1, d.reject(a);
                    }), e.fetchStrategies(a, c).then(function(b) {
                        var g, i, j;
                        if (e.strategies = new h(b), e.strategies.sort(), e.loadingStrategies = !1, c && null != b && void 0 !== b) for (i = 0, 
                        j = b.length; j > i; i++) g = b[i], f.clearTacticsById(a.recordID, g.recordID), 
                        delete e.tactics[g.id()];
                        return e.loadingPlanProducts ? void 0 : (e.loading = !1, d.resolve(a));
                    })["catch"](function(a) {
                        return e.loading = !1, d.reject(a);
                    })) : (e.loading = !1, d.reject("Plan does not exist"));
                })["catch"](function(a) {
                    return e.loading = !1, d.reject(a);
                }), d.promise;
            }, j.prototype.loadTactics = function(a, b, c) {
                var d = this;
                return this.loadingTactics[a] ? void 0 : (this.loadingTactics[a] = !0, this.fetchTactics(a, b, c).then(function(b) {
                    return null != b.tactics && (d.tactics[b.strategy.id()] = new g(b.strategy, b.tactics), 
                    d.tactics[b.strategy.id()].sort()), b.strategy.setTacticsLoaded(!0), d.loadingTactics[b.strategy] = !1, 
                    a;
                })["catch"](function(b) {
                    return a.setTacticsLoaded(!0), d.loadingTactics[a] = !1, b;
                }));
            }, j.prototype.addStrategy = function(a) {
                var b;
                return b = c.makeNew(a.data.__guid), b.isOpen = !0, null == this.strategies && (this.strategies = new h()), 
                this.strategies.add(b), b;
            }, j.prototype.addPlanProduct = function(a, b) {
                var c;
                return c = e.makeNew(a.data.__guid, b), null == this.pps && (this.pps = new i()), 
                this.pps.add(c), c;
            }, j.prototype.addTactic = function(a) {
                var b;
                return b = d.makeNew(a.data.__guid), b.editing = !0, null == this.tactics[a.id()] && (this.tactics[a.id()] = new g(a)), 
                this.tactics[a.id()].add(b), b;
            }, j.prototype.canSubmit = function(a) {
                return null != a && void 0 !== a && a.readyForSubmission() && this.pps.existsCount() > 0 ? !0 : !1;
            }, j.prototype.getStrategies = function() {
                return null != this.strategies ? this.strategies.items : null;
            }, j.prototype.getPlanProducts = function() {
                return null != this.pps ? this.pps.items : null;
            }, j.prototype.getTactics = function(a) {
                return null != this.tactics[a.id()] ? this.tactics[a.id()].items : null;
            }, j.prototype.getTacticsCount = function(a) {
                return a.getTacticsLoaded() ? null != this.tactics[a.id()] ? this.tactics[a.id()].count() : 0 : a.dbCount();
            }, j.prototype.saveStrategies = function(b) {
                var d, e, g, h, i, j, k, l, m, n = this;
                if (e = a.defer(), d = function(a) {
                    return n.savingStrategies = !1, null != a ? e.reject(a) : e.resolve(!0);
                }, null != this.strategies) {
                    for (this.savingStrategies = !0, i = [], g = [], m = this.strategies.items, k = 0, 
                    l = m.length; l > k; k++) j = m[k], (void 0 !== j || null == j) && (h = c.save(j).then(function(a) {
                        return j = a.obj;
                    }), null == j || void 0 === j || j.isRemoved() || g.push(j), i.push(h));
                    a.all(i).then(function() {
                        return n.strategies.items = g, f.saveStrategiesById(b.recordID, n.strategies.items), 
                        d();
                    })["catch"](function(a) {
                        return d(a);
                    });
                } else e.resolve(!0);
                return e.promise;
            }, j.prototype.savePlanProducts = function(b) {
                var c, d, g, h, i, j, k, l, m, n = this;
                if (d = a.defer(), c = function(a) {
                    return n.savingPPs = !1, null != a ? d.reject(a) : d.resolve(!0);
                }, null != this.pps) {
                    for (this.savingPPs = !0, j = [], g = [], m = this.pps.items, k = 0, l = m.length; l > k; k++) i = m[k], 
                    (void 0 !== i || null == i) && (h = e.save(i).then(function(a) {
                        return i = a.obj;
                    }), null == i || void 0 === i || i.isRemoved() || g.push(i), j.push(h));
                    a.all(j).then(function() {
                        return n.pps.items = g, f.savePPsById(b.recordID, n.pps.items), c();
                    })["catch"](function(a) {
                        return c(a);
                    });
                } else d.resolve(!0);
                return d.promise;
            }, j.prototype.saveTactics = function(b) {
                var c, e, g, h, i, j, k, l, m, n, o, p, q, r = this;
                if (e = a.defer(), c = function(a) {
                    return r.savingTactics = !1, null != a ? e.reject(a) : e.resolve(!0);
                }, null != this.tactics) {
                    this.savingTactics = !0, j = [], h = [], p = this.tactics;
                    for (k in p) for (l = p[k], h[k] = [], q = l.items, g = n = 0, o = q.length; o > n; g = ++n) m = q[g], 
                    null != m && (i = d.save(m).then(function(a) {
                        return m = a.obj;
                    }), null == m || void 0 === m || m.isRemoved() || h[m.data.strategy_id].push(m), 
                    j.push(i));
                    a.all(j).then(function() {
                        var a;
                        a = r.tactics;
                        for (k in a) l = a[k], l.items = h[k], f.saveTacticsById(b.recordID, l.strategy.recordID, l.items);
                        return c();
                    })["catch"](function(a) {
                        return c(a);
                    });
                } else e.resolve(!0);
                return e.promise;
            }, j.prototype.save = function(c, d) {
                var e, g, h = this;
                return this.saving = !0, e = a.defer(), g = d ? b.submit(c) : b.save(c), g.then(function() {
                    return h.savePlanProducts(c).then(function() {
                        return h.saveStrategies(c).then(function() {
                            return h.saveTactics(c).then(function() {
                                return h.saving = !1, e.resolve({
                                    msg: "Your plan was saved."
                                });
                            })["catch"](function(a) {
                                return h.saving = !1, e.reject(a);
                            });
                        });
                    })["catch"](function(a) {
                        return h.saving = !1, e.reject(a);
                    });
                })["catch"](function(a) {
                    return h.saving = !1, e.reject(a);
                }), e.promise.then(function(a) {
                    return f.saveById(c.recordID, c), a;
                }), e.promise;
            }, j.prototype.submit = function(a) {
                return this.save(a, !0);
            }, j.prototype.testClear = function(a) {
                return f.clearAllTacticsForPlan(a.recordID);
            }, j.prototype["delete"] = function(a) {
                return b["delete"](a.href).then(function(b) {
                    return f.clearById(a.recordID), f.clearPPsById(a.recordID), f.clearStrategiesById(a.recordID), 
                    f.clearAllTacticsForPlan(a.recordID), b;
                });
            }, j.prototype.goToTacticPage = function(a, b) {
                var c;
                return this.tactics[a] ? (c = this.tactics[a].findPage(b), this.tactics[a].setCurrentPage(c), 
                !0) : !1;
            }, j.prototype.goToStrategyPage = function(a) {
                var b;
                return this.strategies ? (b = this.strategies.findPage(a), this.strategies.setCurrentPage(b), 
                !0) : !1;
            }, j;
        }())();
    } ]);
}.call(this), function() {
    var a;
    angular.module("app").service("UsersService", [ "UserRepository", "UserStorageService", "$q", a = function() {
        function a(a, b, c) {
            this.UserRepository = a, this.UserStorage = b, this.q = c;
        }
        return a.prototype.storeUser = function(a) {
            var b;
            return b = this.UserStorage.add(a), {
                stored: b,
                user: a
            };
        }, a.prototype.getUser = function(a) {
            var b, c, d, e = this;
            return b = this.q.defer(), d = function(a) {
                var c, d;
                try {
                    return d = e.UserStorage.add(a), b.resolve(a);
                } catch (f) {
                    return c = f, b.reject("failed to store: " + c.message);
                } finally {}
            }, c = function(a) {
                return b.reject(a);
            }, this.UserRepository.getOne(a).then(this.storeUser, c), b.promise;
        }, a.prototype.getUserById = function(a) {
            var b, c, d = this;
            return b = this.q.defer(), c = this.UserStorage.getByRecordId(a), null === c ? this.UserRepository.getUserById(a).then(function(a) {
                var c;
                return c = d.storeUser(a), c ? b.resolve(a) : b.reject("failed to store: " + e.message);
            }) : b.resolve(c), b.promise;
        }, a.prototype.getUserByUsername = function(a) {
            var b, c, d = this;
            return b = this.q.defer(), c = this.UserStorage.getByUsername(a), null === c ? this.UserRepository.getUserByUsername(a).then(function(a) {
                var c;
                return c = d.storeUser(a), c ? b.resolve(a) : b.reject("failed to store: " + e.message);
            }) : b.resolve(c), b.promise;
        }, a.prototype.getCurrentUser = function() {
            var a;
            return a = this.getCurrentUserId(), "" !== a && null != a ? this.getUserById(a) : (this.d = this.q.defer(), 
            this.d.reject("No User Found"), this.d.promise);
        }, a.prototype.getUserByHref = function(a) {
            return this.getUser(a);
        }, a.prototype.saveCurrentUserId = function(a) {
            return this.UserStorage.saveCurrent(a);
        }, a.prototype.getCurrentUserId = function() {
            return this.UserStorage.getCurrent();
        }, a.prototype.clearCurrentUserId = function() {
            return this.UserStorage.clearCurrent();
        }, a;
    }() ]);
}.call(this), function() {
    angular.module("app").config([ "$routeProvider", "$locationProvider", function(a) {
        return a.when("/", {
            controller: "HomeController",
            controllerAs: "home",
            templateUrl: "home.html"
        }).when("/login", {
            controller: "LoginController",
            controllerAs: "login",
            templateUrl: "login.html"
        }).when("/logout", {
            controller: "LogoutController",
            template: "<div>Logging Out...</div>"
        }).when("/addnewplan", {
            controller: "AddNewPlanController",
            templateUrl: "addnewplan.html"
        }).when("/myplans", {
            controller: "MyPlansController",
            controllerAs: "plans",
            templateUrl: "plans.html"
        }).when("/plan/:id", {
            controller: "PlanController",
            controllerAs: "plan",
            templateUrl: "plan.html"
        }).otherwise({
            redirectTo: "/myplans"
        });
    } ]), angular.module("app").run([ "$rootScope", "$location", "RouteValidation", "$route", function(a, b, c) {
        return c.addNonValidationRoute("/login"), a.$on("$locationChangeStart", c.validateRoute);
    } ]);
}.call(this), function() {
    var a = {}.hasOwnProperty, b = function(b, c) {
        function d() {
            this.constructor = b;
        }
        for (var e in c) a.call(c, e) && (b[e] = c[e]);
        return d.prototype = c.prototype, b.prototype = new d(), b.__super__ = c.prototype, 
        b;
    };
    angular.module("app").service("PlanStorageService", [ "StorageService", "ModelStorageService", "plan", "strategy", "tactic", "planProduct", function(a, c, d, e, f, g) {
        var h;
        return new (h = function(c) {
            function h() {
                h.__super__.constructor.call(this, a, "plans", 144e3);
            }
            return b(h, c), h.prototype.strategiesKey = function(a) {
                return this.getName(a) + ".strategies";
            }, h.prototype.tacticsKey = function(a, b) {
                return this.strategiesKey(a) + "." + b + ".tactics";
            }, h.prototype.ppsKey = function(a) {
                return this.getName(a) + ".pps";
            }, h.prototype.savePPsById = function(a, b) {
                return this.saveByKey(this.ppsKey(a), this.stripObjects(b));
            }, h.prototype.getPPsById = function(a) {
                var b, c, d, e, f, h;
                if (c = this.getByKey(this.ppsKey(a)), null != c) {
                    if (e = [], null != c) for (f = 0, h = c.length; h > f; f++) d = c[f], b = new g(d.data, d.href, d.recordID), 
                    e.push(b);
                    return e;
                }
                return c;
            }, h.prototype.clearPPsById = function(a) {
                return this.clearByKey(this.ppsKey(a));
            }, h.prototype.saveStrategiesById = function(a, b) {
                return this.saveByKey(this.strategiesKey(a), this.stripObjects(b));
            }, h.prototype.getStrategiesById = function(a) {
                var b, c, d, f, g, h;
                if (f = this.getByKey(this.strategiesKey(a)), null != f) {
                    if (d = [], null != f) for (g = 0, h = f.length; h > g; g++) c = f[g], b = new e(c.data, c.href, c.recordID), 
                    d.push(b);
                    return d;
                }
                return f;
            }, h.prototype.clearStrategiesById = function(a) {
                return this.clearByKey(this.strategiesKey(a));
            }, h.prototype.saveTacticsById = function(a, b, c) {
                return this.saveByKey(this.tacticsKey(a, b), this.stripObjects(c));
            }, h.prototype.getTacticsById = function(a, b) {
                var c, d, e, g, h, i;
                if (g = this.getByKey(this.tacticsKey(a, b)), null != g) {
                    if (e = [], null != g) for (h = 0, i = g.length; i > h; h++) d = g[h], c = new f(d.data, d.href, d.recordID), 
                    e.push(c);
                    return e;
                }
                return g;
            }, h.prototype.clearTacticsById = function(a, b) {
                return this.clearByKey(this.tacticsKey(a, b));
            }, h.prototype.clearAllTacticsForPlan = function(a) {
                var b, c;
                return b = this.strategiesKey(a), c = RegExp(b + ".*"), this.clearAllRegEx(c);
            }, h.prototype.saveById = function(a, b) {
                return h.__super__.saveById.call(this, a, {
                    data: b.data,
                    href: b.href,
                    recordID: b.recordID
                });
            }, h.prototype.getById = function(a) {
                var b, c;
                return c = h.__super__.getById.call(this, a), null != c ? b = new d(c.data, c.href, c.recordID) : c;
            }, h;
        }(c))();
    } ]);
}.call(this), function() {
    var a;
    a = function() {
        function a(a) {
            this.localStorage = a;
        }
        return a.prototype.store = function(a, b) {
            return null == b || "" === b ? this.localStorage.remove(a) : this.localStorage.set(a, b);
        }, a.prototype.get = function(a) {
            return this.localStorage.get(a);
        }, a.prototype.clearAll = function(a) {
            return this.localStorage.clearAll(a);
        }, a;
    }(), angular.module("app").service("StorageService", [ "localStorageService", function(b) {
        return new a(b);
    } ]);
}.call(this), function() {
    var a = {}.hasOwnProperty, b = function(b, c) {
        function d() {
            this.constructor = b;
        }
        for (var e in c) a.call(c, e) && (b[e] = c[e]);
        return d.prototype = c.prototype, b.prototype = new d(), b.__super__ = c.prototype, 
        b;
    };
    angular.module("app").service("UserStorageService", [ "StorageService", "ModelStorageService", function(a, c) {
        var d;
        return new (d = function(c) {
            function d() {
                d.__super__.constructor.call(this, a, "users", 2592e6);
            }
            return b(d, c), d.prototype.getByRecordId = function(a) {
                return this.getItemBy("recordID", a, this.intCompare);
            }, d.prototype.getByUsername = function(a) {
                return this.getItemBy("username", a, this.textCompare);
            }, d;
        }(c))();
    } ]);
}.call(this), angular.module("app").run([ "$templateCache", function(a) {
    a.put("addnewplan.html", "<div class='row'>\n <div class='small-centered small-3 columns'>\n  <div class='panel loading'>\n	  <p>Adding New Plan...</p>\n	  <div id='ajaxloader'></div>\n  </div>\n </div>\n</div>\n"), 
    a.put("directive-templates/plan-card.html", "<div class='plan-card' ng-class='\"plan-\" + plan.status().toLowerCase()'>\n  <div class='plan-card-header'>\n	  <h5 class='text-center'>{{::plan.data.campaign_title}}</h5>\n  </div>\n  <div class='plan-card-details'>\n	  <div><span>{{::plan.data.staff_full_name_c}}</span></div>\n	  <div><span>{{::plan.data.product.shorten(40)}}</span></div>\n	  <div><span>{{::plan.data.portfolio.shorten(40)}}</span></div>\n	  <div>{{::plan.data.begin}}<span ng-show='plan.data.begin !== \"\" && plan.data.end !== \"\"'> - </span>{{::plan.data.end}}</div>\n  </div>\n \n  <div class='text-center plan-card-status' ng-class='\"plan-\" + plan.status().toLowerCase()'>{{::plan.status()}}</div>\n</div>"), 
    a.put("directive-templates/selectlist.html", "<ul class='scrollable'>\n	\n	<ul ng-if='groupBy !== undefined && groupBy !== null' x-ng-repeat='(key,value) in items | groupBy: groupBy' >\n		<li class='grouped'>{{key}}</li>\n	 <li x-ng-repeat='item in value' x-ng-class='{true:\"selected\",false:\"\"}[ngModel.exists(item)]' x-ng-click='doIt(item)'>\n	  <a href=''>{{item.value}}</a>\n	 </li>\n	</ul>\n	\n	<li ng-if='groupBy === undefined || groupBy === null' x-ng-repeat='item in items' x-ng-class='{true:\"selected\",false:\"\"}[ngModel.exists(item)]' x-ng-click='doIt(item)'>\n	  <a>{{item.value}}</a>\n	 </li>\n	\n</ul>\n\n"), 
    a.put("directive-templates/tactic-header.html", "<th ng-class='oList.sortKey===key?\"sorted\":\"\"' ng-mouseover='oList.hover=key'>\n <a href='' ng-click='sort(oList,key)' >\n  {{ ::title }} \n  <i ng-show='oList.sortKey===key' class='fa fa-sort-amount-{{oList.sortReverse?\"de\":\"a\"}}sc'></i>\n  <i ng-show='oList.sortKey!==key && oList.hover===key' class='fa fa-sort'></i>\n </a>\n</th>"), 
    a.put("directive-templates/yesno.html", '<div class="row">\n <div class="columns {{labelClass}}">\n  <label>{{label}}</label>\n </div>\n <div class="columns {{inputClass}}">\n  <input type="radio" x-ng-model="ngModel" name="{{name}}Yes" id="{{name}}Yes" value="yes" />\n  <label for="{{name}}Yes">Yes</label>\n  <input type="radio" x-ng-model="ngModel" name="{{name}}No" id="{{name}}No" value="no" />\n  <label for="{{name}}No">No</label>\n </div>\n</div>'), 
    a.put("home.html", " <div class='home-top'>\n	 <div class='row'>\n			 <div class='columns small-12'>\n	    <h2 class='welcome'>Strategic Marketing Campaign Form</h2>\n	   </div>\n	 </div>\n </div>\n <div class='home-bottom'>\n \n	 <div class='row'>\n			 <div class='columns small-12'>\n	    <h3 class='welcome'>Welcome {{home.username}}!</h3>\n	    <p>This is the McGraw Hill Education Strategic Marketing Campaign Form site.  Please choose one of the following options to get started!</p>\n	    <ul class='button-group'>\n 	    <li><a class='button secondary radius' href='#/myplans'>Edit My Plans</a></li>\n 	    <li><a class='button primary radius' href='#/addnewplan'>Start A New Plan</a></li>\n	    </ul>\n	   </div>\n	</div>\n </div>"), 
    a.put("login.html", ' \n\n\n<div class=\'row login-form\'>\n	 <div ng-show=\'processing\'>Logging In...</div>\n	 <div class=\'small-6 large-4 large-centered small-centered columns\' ng-hide=\'processing\'>\n		 <h1>Login</h1>\n		 <form role="form" ng-submit=\'login.login()\'>\n			  <div class="form-group">\n			    <label for="username">Username\n			    <input type="text" class="form-control" id=\'username\' ng-model=\'login.username\' placeholder="Enter email">\n			    </label>\n			  </div>\n			  <div class="form-group">\n			    <label for="pass">Password</label>\n			    <input type="password" class="form-control" id=\'pass\' ng-model=\'login.password\' placeholder="Password">\n			  </div>\n			  <button type="submit" class="btn btn-primary btn-lg">Log In!</button>\n			</form>\n	 </div>\n</div>'), 
    a.put("modals/modalRefresh.html", '<h3>Refresh {{ item.name.toProperCase() }}?</h3>\n<p>You have <strong>unsaved changes</strong>. This will refresh the {{ item.name }} and <strong>remove</strong> any changes you have made.  Do you want to continue?</p>\n<button class="button" ng-click="cancel()">Cancel</button>\n<button class="button alert" ng-click="ok()">Refresh</button>\n<a class="close-reveal-modal" ng-click="cancel()">&#215;</a>'), 
    a.put("modals/modalRemove.html", '<h3>Remove {{ item.name.toProperCase() }}?</h3>\n<p>This will remove the {{ item.name }}<span ng-show=\'!undo\'> and <strong>can not</strong> be undone</span>.  Do you want to continue?</p>\n<button class="button" ng-click="cancel()">Cancel</button>\n<button class="button alert" ng-click="ok()">Remove</button>\n<a class="close-reveal-modal" ng-click="cancel()">&#215;</a>'), 
    a.put("modals/modalSubmit.html", '<h3>Submit Plan?</h3>\n<p>This will submit the plan for approval.  Once submitted, you <strong>can not</strong> remove the plan yourself and <strong>can not</strong> change the plan details (only the strategies and tactics can be changed).  Do you want to continue?</p>\n<button class="button" ng-click="cancel()">Cancel</button>\n<button class="button success" ng-click="ok()">Submit</button>\n<a class="close-reveal-modal" ng-click="cancel()">&#215;</a>'), 
    a.put("nav.html", "\n    <div class='sticky header' ng-controller='NavController as nav'>\n     <top-bar role='navigation'>\n		    <ul class=\"title-area\">\n		      <li class=\"name\">\n		        <h1><a href=\"#/\"><img src='img/mhe-logo.png' alt='McGraw Hill Education' height='39' width='39'/>&nbsp;Strategic Marketing Campaign Form</a></h1>\n		      </li>\n		      <li toggle-top-bar class=\"menu-icon\"><a href=\"\">Menu<span></span></a></li>\n		    </ul>\n		\n		    <top-bar-section>\n		      \n		      <ul class=\"left\" ng-show='nav.isLoggedIn()'>\n		        <li class='{{nav.$location.path().substring(1,8)===\"myplans\"?\"active\":\"\"}}'>\n			        <a ng-click='nav.$location.path(\"myplans\").search(\"s\",null)'>\n				        <span class='fi-page-multiple'></span>&nbsp;My Plans\n				       </a>\n				      </li>\n				      <li><a ng-click='nav.addNewPlan()'><span class='fi-plus'>&nbsp;Add New Plan</span></a></li>\n		      </ul>\n		      \n		      <ul class=\"right\" ng-show='nav.isLoggedIn()'>\n		        <li><a href='' class='disabled'><span class='fi-torso'></span>&nbsp;{{nav.username}}</a></li>\n										<li><a href='' ng-click='nav.logout()'><span class='fi-power'></span>&nbsp;Logout</a></li>\n		      </ul>\n		    </top-bar-section>\n		   </top-bar>\n    </div>\n"), 
    a.put("partials/plan/actions.html", "<!--\n<div class='row'>\n	<div class='columns small-3 medium-2'>\n		<a href=\"#/plan\" class='button radius small expand info' ><span class='fi-arrow-left'></span>&nbsp;Plans</a>\n	</div>\n	<div class='columns small-8 medium-8 small-offset-1 medium-offset-2'>\n	 \n		 <ul class='button-group even-{{plan.plan.status()===\"Draft\"?\"4\":\"2\"}}'>\n		  <li>\n		   <a href='' role='button' class='button radius small info' ng-disabled='!planForm.$dirty' ng-click='plan.refresh(plan.plan)'>\n			   <span class='fi-refresh'></span>&nbsp;Refresh\n			  </a>\n			 </li>\n		  <li>\n		   <a href=\"\" role='button' class=\"button radius small\" ng-disabled='planForm.$pristine' ng-click='plan.save(plan.plan)'>\n			   <span class='fi-archive'></span>&nbsp;Save\n			  </a>\n		  </li>\n		  <li>\n		   <a ng-show='plan.plan.status()===\"Draft\"' href=\"\" role='button' class=\"button small alert\" ng-click='plan.remove(plan.plan)'>\n			   <span class='fi-x'></span>&nbsp;Remove\n		   </a>\n		  </li>\n		  <li>\n		   <a ng-show='plan.plan.status()===\"Draft\"' href=\"\" role='button' class=\"button radius small success\" ng-disabled='!plan.plan.readyForSubmission()' ng-click='plan.submit(plan.plan)'>\n			   <span class='fi-upload'></span>&nbsp;Submit\n		   </a>\n		  </li>\n			</ul>\n		 \n	</div>\n</div>\n-->\n\n<div class='icon-bar four-up'>\n  <!--\n<a class=\"item\" href=\"#/plan\">\n    <i class='fi-arrow-left'></i>\n    <label>Plans</label>\n  </a>\n-->\n  <a class=\"item\" ng-class='!planForm.$dirty?\"disabled\":\"\"' ng-click='plan.refresh(plan.plan)' tooltip='Click to reload plan from server.' tooltip-popup-delay='200' tooltip-animation=\"false\" >\n    <i class='fi-refresh'></i>\n    <label>Refresh</label>\n  </a>\n  <a class=\"item save\" ng-class='planForm.$pristine?\"disabled\":\"\"' ng-click='plan.save(plan.plan)' tooltip='Click to save the plan to the server.' tooltip-popup-delay='200' tooltip-animation=\"false\" >\n    <i class='fi-archive'></i>\n    <label>Save</label>\n  </a>\n  <a class=\"item submit\" ng-class='!plan.planService.canSubmit(plan.plan)||plan.plan.status()!==\"Draft\"?\"disabled\":\"\"' ng-click='plan.submit(plan.plan)' tooltip='Click to submit the plan.' tooltip-popup-delay='200' tooltip-animation=\"false\" >\n    <i class='fi-upload'></i>\n    <label>Submit</label>\n  </a>\n  <a class=\"item remove\" ng-class='plan.plan.status()!==\"Draft\"?\"disabled\":\"\"' ng-click='plan.remove(plan.plan)' tooltip='Click to completely remove the plan.' tooltip-popup-delay='200' tooltip-animation=\"false\" >\n    <i class='fi-x'></i>\n    <label>Remove</label>\n  </a>\n</div>"), 
    a.put("plan.html", "<form name='planForm' id='planFormID' ng-show='plan.plan !== undefined && plan.plan !== null'>\n	<div class='plan-content' id='planContent'>\n		<div class='row'>\n		 <div class='small-12 columns'>\n			 <div id='plan-header' class='plan-section'>\n				 \n				 \n					<div class='row'>\n						<div class='columns'><h2>{{plan.plan.data.campaign_title}}</h2></div>\n					</div>\n					\n					\n					<div class='row'>		\n						<div class='columns small-6 large-8'>\n							\n							<div class='row'>	\n								<div class='columns small-12 large-6'>\n									<label>Marketing Manager: <div class='panel panel-textarea'>{{::plan.plan.data.staff_full_name_c}}</div></label>\n								</div>\n								<div class='columns small-12 large-6'>\n									<label>Campaign Title: <input name='campaign_title' type='text' ng-model='plan.plan.data.campaign_title' ng-class='plan.invalidClass(\"campaign_title\")'  ng-required='plan.required(\"campaign_title\")'></label>\n								</div>\n							</div>\n							\n							<div class='row'>\n								<div class='columns small-12 large-12'>\n									<label>Product: \n									 <div class='tip' ng-show='plan.productediting' ng-click='plan.editProduct(false)'>\n									  Select the products to include: \n									  <a>\n												<span class='fi-check'></span>\n							    </a>\n							   </div>\n								  <select-list ng-show='plan.productediting' ng-model='plan.planService.pps' items='plan.productList.items' group-by='discipline' toggle='plan.toggleProduct(product)'></select-list>\n									 <div \n										 \n											class='panel panel-textarea' \n											ng-mouseover='productover=true' \n											ng-mouseleave='productover=false' \n											ng-click='plan.editProduct()'>\n												<div class='clearfix'>\n													<div class='product-list left'>\n														\n														<div class='product-list-item' ng-repeat='(i, p) in plan.planService.pps.getAllByName()'>\n															<i ng-if='i>0' class='fa fa-leaf'></i>{{p}}\n														</div>\n														<div ng-if='plan.planService.pps.getAllByName().length === 0'>&nbsp;</div>\n\n													</div>\n													<!--\n	<ul>\n														<li ng-repeat='(i, p) in plan.planService.pps.getAllByName()'><i ng-if='i>0' class='fa fa-leaf'></i>{{p}}</li>\n													</ul>\n	-->\n											 \n											 <div class='edit-link right' ng-show='!plan.productediting && productover && plan.plan.status() === \"Draft\"'>\n								     <a>\n									     <span class='fi-pencil'></span>\n									    </a>\n									   </div>\n											</div>\n								  </div>\n\n									  \n									  <!-- <select type='text' name='product' ng-class='plan.invalidClass(\"product\")' required x-ng-model='plan.plan.product' x-ng-options='product as product.name group by product.discipline for product in plan.productList.items | orderBy:[\"discipline\",\"name\"]' ><option value=''>Select Product</option></select> -->\n									</label>\n								</div>\n							</div>\n							\n							<div class='row'>\n								<div class='columns small-6 large-3'>\n									<label>Campaign Start: <select type='text' name='begin' ng-required='plan.required(\"begin\")' x-ng-model='plan.plan.data.begin' x-ng-options='month.value as month.name for month in plan.monthsDD.items' ><option value=''>Start Month</option></select></label>\n								</div>\n								<div class='columns small-6 large-3'>\n									<label>Campaign Finish: <select type='text' name='begin' ng-required='plan.required(\"end\")' x-ng-model='plan.plan.data.end' x-ng-options='month.value as month.name for month in plan.monthsDD.items' ><option value=''>Finish Month</option></select></label>\n								</div>\n								<div class='columns small-6 large-3'>\n									<label>Budget: <input type='text' name='budget' ng-model='plan.plan.data.budget' ng-required='plan.required(\"budget\")' ng-currency ng-class='plan.invalidClass(\"budget\")' ></label>\n								</div>\n								<div class='columns small-6 large-3'>\n									<label>Priority: <input type='text' name='priority' ng-model='plan.plan.data.priority' ng-required='plan.required(\"priority\")' ng-class='plan.invalidClass(\"priority\")' ></label>\n								</div>\n							</div>\n							\n						</div>\n						\n						<div class='columns small-6 large-4'>\n							<div class='panel'>\n								<div class='row' equal-height>\n									<div class='columns small-6'><label>Status:</label></div>\n									<div class='columns small-6'>{{ plan.plan.status() }}</div>\n								</div>\n								<div class='row' equal-height>\n									<div class='columns small-6'><label>Campaign #:</label></div>\n									<div class='columns small-6'>{{ ::plan.plan.data.campaign_number }}</div>\n								</div>\n								<div class='row' equal-height>\n									<div class='columns small-6'><label>Date Submitted:</label></div>\n									<div class='columns small-6'>{{ plan.plan.date_submitted | date:'MMM d, yyyy'}}</div>\n								</div>\n								<div class='row' equal-height>\n									<div class='columns small-6'><label>Date Approved:</label></div>\n									<div class='columns small-6'>{{ ::plan.plan.date_approved | date:'MMM d, yyyy'}}</div>\n								</div><!-- end row -->\n								<div class='row' equal-height>\n									<div class='columns small-6'><label>Campaign Year:</label></div>\n									<div class='columns small-6'>\n										<select class='years' type='text' name='year' x-ng-model='plan.plan.data.year' x-ng-options='year for year in plan.years' ng-required='plan.required(\"year\")' ng-class='plan.invalidClass(\"year\")' ng-change='plan.yearUpdated(plan.plan.data.year)'></select>\n										<!-- <input name='year' type='text' ng-model='plan.plan.data.year' ng-required='plan.required(\"year\")' ng-class='plan.invalidClass(\"year\")'> -->\n									</div>\n								</div>\n							</div><!-- end panel -->\n							\n						</div><!-- end columns -->\n						\n					</div>\n		\n			 </div>\n		 </div>\n		</div>\n	\n		<div class='row' ng-hide='plan.isLoading()'>\n			<div class='small-12 columns'>\n				<tabset id='plan'>\n				\n				 <!-- Start Plan Details Tab -->\n			  <tab heading=\"Plan Details\" active=\"plan.tabs[0].active\">\n			   <!-- Start Tab selection options -->\n			   <div class='row'>\n				   <div class='columns small-12'>\n					   <dl class=\"sub-nav\">\n							  <dd class=\"active\"><a href=''>Plan Details</a></dd>\n							  <dd><a href='' ng-click='plan.tabs[1].active=true'>Plan Strategem</a></dd>\n							 </dl>\n				   </div>\n			   </div>\n			   <!-- End Tab selection options -->\n			   \n				   <accordion id='details-accordion' close-others='true'>\n				    <accordion-group \n          	ng-repeat='(i, detail) in plan.details' \n          	data-is-open='detail.isOpen'>\n          <accordion-heading>\n           <div class='row'>\n	           <div class='small-12 columns'>\n								      {{::detail.name}}: {{plan.plan.data[detail.property].shorten(70)}}\n	           </div>\n           </div>\n						    </accordion-heading>\n						    <div class='detail-heading detail-heading-empty'>\n							     \n							     <div class='row'>\n								     <div class='small-12 columns'>\n		  				      <div class='panel callout radius' ng-show='detail.message !== \"\"'>{{::detail.message}}</div>\n								     </div>\n							     </div>\n							     <div class='row'>\n								     <div class='small-12 columns'>\n		  				      <textarea \n												 name='{{::detail.property}}' \n												 ng-class='plan.invalidClass(detail.property)' \n												 ng-required='plan.required(detail.property)' \n												 ng-model='plan.plan.data[detail.property]' \n												 ng-disabled='plan.disabled(detail.property)'></textarea>\n								     </div>\n							     </div>\n							     \n						     </div>\n						    \n						    \n						    \n											\n				    </accordion-group>\n				   </accordion>\n				   <!--\n					   <div id='plan-details' class='plan-section'>\n<div class='row' ng-repeat='detail in plan.details'>\n								<div class='columns small-12'>\n									<div class='plan-details'>\n										<h5>{{::detail.name}}</h5>\n										<div class='panel callout radius' ng-show='detail.message !== \"\"'>{{::detail.message}}</div>\n										<textarea \n										 name='{{detail.property}}' \n										 ng-class='plan.invalidClass(detail.property)' \n										 ng-required='plan.required(detail.property)' \n										 ng-model='plan.plan.data[detail.property]' \n										 ng-disabled='plan.disabled(detail.property)'></textarea>\n									</div>\n								</div>\n							</div>\n							</div>\n-->\n							\n			   \n			   \n			  </tab>\n			  <!-- End Plan Details Tab -->\n			  \n			  <!-- Start Plan Strategies & Tactics Tab -->\n			  <tab heading='Tactics' active=\"plan.tabs[1].active\">\n			   \n			   <!-- Start Tab selection options -->\n			   <div class='row'>\n				   <div class='columns small-12'>\n					   <dl class=\"sub-nav\">\n							  <dd><a href='' ng-click='plan.tabs[0].active=true'>Plan Details</a></dd>\n							  <dd class=\"active\"><a href=''>Plan Stratagem</a></dd>\n							  <dd class=\"right\" ng-hide='plan.planService.strategies.items.length === 0'><a href='' ng-click='plan.clickAddStrategy()'><span class='fi-plus'></span>&nbsp;Add Strategy</a></dd>\n							 </dl>\n				   </div>\n			   </div>\n			   <!-- End Tab selection options -->\n			   \n			   <div id='tactics'>\n				   \n				   \n				   <!-- Start No Strategies For Plan Section -->\n				   <div class='row' ng-if='plan.planService.strategies.existsCount() === 0'> \n						  <div class='small-12 columns'>\n							  <div class='plan-section'>\n							   <p>This plan doesn't have any strategies yet. Click the button below to start your first strategy!</p>\n						    <button class='button radius expand' ng-click='plan.clickAddStrategy()'><span class='fi-plus'></span>&nbsp;Add First Strategy</button>\n						   </div>\n					   </div>\n				   </div>\n				   <!-- End No Strategies For Plan Section -->\n				   \n				   \n				   <div class='row' ng-if='plan.planService.strategies.existsCount() > 0'>\n					   <div class='columns small-12'>\n\n						   <accordion id='strategy-accordion'>\n          <accordion-group \n          	ng-repeat='(i, strategy) in plan.planService.strategies.items | startFrom: plan.planService.strategies.currentPage * plan.planService.strategies.pageSize  | limitTo:plan.planService.strategies.pageSize track by strategy.id()' \n          	data-is-open='strategy.isOpen' \n          	ng-show='!strategy.removed' \n          	id='{{::strategy.data.__guid}}'>\n          \n           <accordion-heading>\n							     <div class='row' ng-click='plan.opened(strategy, $event)' ng-mouseenter='plan.overStrategy(strategy)' ng-mouseleave='plan.out(strategy)'>\n								     <!-- Start Strategy Title -->\n								     <div class='small-9 large-10 columns' >\n								      Strategy {{plan.strategyNum(plan.planService.strategies,i)}}: {{strategy.title(40)}}\n								     </div>\n								     <!-- End Strategy Title -->\n								     <!-- Start Strategy Actions -->\n								     <div class='small-3 large-2 columns'>\n									     <span ng-show='strategy.isOpen || strategy.over' class='right actions'>\n									      <a class='button tiny alert' href='' ng-click='plan.removeObject(strategy)'>\n										      <span class='fi-x'></span>\n										     </a>\n									     </span>\n								     </div>\n								     <!-- End Strategy Actions -->\n							     </div>\n						     </accordion-heading>\n						     \n						     <div class='strategy-heading' ng-class='!plan.hasTactics(strategy) || !strategy.tactics_loaded?\"strategy-heading-empty\":\"\"'>\n							     \n							     <div class='row'>\n								     <div class='small-12 columns'>\n		  				      <textarea ng-model='strategy.data.description'></textarea>\n								     </div>\n							     </div>\n							     \n							     <!-- Start Section to Display when no tactics for this strategy -->\n						      <div class='row' ng-hide='plan.planService.tactics[strategy.data.__guid].existsCount() > 0 || !strategy.tactics_loaded'>\n								     <div class='small-12 columns'>\n											   <p>This strategy doesn't have any tactics yet. Click the button below to start your first tactic for this strategy!</p>\n										    <button class='button radius expand no-margin' ng-click='plan.clickAddTactic(strategy)'>\n										     <span class='fi-plus'></span>&nbsp;Add First Tactic\n										    </button>\n										   </div>\n							     </div>\n							     <!-- End Section to Display when no tactics for this strategy -->\n							     \n							     <!-- Start Section to Display when loading the tactics for this strategy -->\n							     <div class='row' ng-hide='strategy.tactics_loaded'>\n								     <div class='small-12 columns text-center'>\n								      <p>Loading Tactics...</p>\n														<p class='text-center'><h1><i class='fa fa-spinner fa-spin'></i></h1></p>\n								     </div>\n							     </div>\n							     <!-- End Section to Display when loading the tactics for this strategy -->\n						     </div>\n\n											<!-- Start displaying tactics for this strategy -->\n						     <table role='grid' ng-if='plan.planService.tactics[strategy.data.__guid].existsCount() > 0 && ( strategy.isOpen || strategy.wasOpened )' >\n							     \n							     <thead>\n								     <tr ng-mouseout='plan.hover=\"\"'>\n									     <th tactic-header o-list='plan.planService.tactics[strategy.data.__guid]' key='medium' title='Tactic Medium'></th>\n									     <th tactic-header o-list='plan.planService.tactics[strategy.data.__guid]' key='budget' title='Budget'></th>\n									     <th tactic-header o-list='plan.planService.tactics[strategy.data.__guid]' key='begin_date' title='Starts'></th>\n									     <th tactic-header o-list='plan.planService.tactics[strategy.data.__guid]' key='end_date' title='Ends'></th>\n									     <th style='width: 110px !important;'>\n										     <a href='' ng-click='plan.clickAddTactic(strategy)'>\n											     <span class='fi-plus'></span>&nbsp;Add Tactic\n											    </a>\n										    </th>\n										   </tr>\n							     </thead>\n							     <tbody ng-if='plan.planService.tactics[strategy.data.__guid] !== null && plan.planService.tactics[strategy.data.__guid] !== undefined'>\n								     \n             <tr \n	             ng-repeat='(j, tactic) in plan.planService.tactics[strategy.data.__guid].items | startFrom: plan.planService.tactics[strategy.data.__guid].currentPage * plan.planService.tactics[strategy.data.__guid].pageSize  | limitTo:plan.planService.strategies.pageSize track by tactic.id() ' \n		            ng-mouseover='tactic.over=true' \n			           ng-mouseout='tactic.over=false' \n				          ng-show='!tactic.removed' \n					         id='{{tactic.data.__guid}}'>\n						         \n						        \n									     \n              <td style='width: 25%' ng-class='plan.planService.tactics[strategy.data.__guid].sortKey===\"medium\"?\"sorted\":\"\"'>\n										     <span ng-if='tactic.editing'>\n										      <select type='text' name='medium' x-ng-model='tactic.medium' x-ng-options='m.name for m in plan.mediumList.items' >\n											      <option value=''>Select Type</option>\n											     </select>\n										     </span>\n										     <span ng-hide='tactic.editing'>\n										      {{tactic.medium.name}}\n										     </span>\n										    </td>\n									     <td style='width: 15%' ng-class='plan.planService.tactics[strategy.data.__guid].sortKey===\"budget\"?\"sorted\":\"\"'>\n										     <span ng-if='tactic.editing'>\n										      <input type='text' ng-model='tactic.data.budget' ng-currency>\n										     </span>\n										     <span ng-hide='tactic.editing'>\n										      {{tactic.data.budget | currency}}\n										     </span>\n										    </td>\n									     <td ng-class='plan.planService.tactics[strategy.data.__guid].sortKey===\"begin_date\"?\"sorted\":\"\"'>\n										     <span ng-if='tactic.editing'>\n										      <input type='date' ng-model='tactic.begin_date' placeholder=\"YYYY-MM-DD\">\n										      <!-- <input type=\"text\" ng-model='tactic.begin_date' pick-a-date=\"date\" pick-a-date-options=\"plan.dateoptions\" /> -->\n										     </span>\n										     <span ng-show='!tactic.editing && tactic.begin_date !== null && tactic.begin_date !== undefined'>\n										      {{tactic.begin_date | date:\"MMM d, yyyy\"}}\n										     </span>\n										    </td>\n									     <td ng-class='plan.planService.tactics[strategy.data.__guid].sortKey===\"end_date\"?\"sorted\":\"\"'>\n										     <span ng-if='tactic.editing'>\n										      <input type='date' ng-model='tactic.end_date' placeholder=\"YYYY-MM-DD\">\n										      <!-- <input type=\"text\" ng-model='tactic.end_date' pick-a-date=\"date\" pick-a-date-options=\"plan.dateoptions\" /> -->\n										     </span>\n										     <span ng-show='!tactic.editing && tactic.end_date !== null && tactic.end_date !== undefined'>\n										      {{tactic.end_date | date:\"MMM d, yyyy\"}}\n										     </span>\n										    </td>\n										    <td class='actions text-center' style='width: 110px;'>\n											    <span ng-show='tactic.over && !tactic.editing'>\n											     <a href='' ng-click='tactic.editing=true' >\n												     <span class='fi-pencil' tooltip='Click to edit' tooltip-popup-delay='100' tooltip-animation=\"false\"></span>\n												    </a>\n												   </span>\n											    <span ng-show='tactic.over && !tactic.editing'>\n											     <a href='' ng-click='plan.removeObject(tactic)'>\n												     <span class='fi-x alert'></span>\n												    </a>\n												   </span>\n											    <span ng-show='tactic.editing'>\n											     <a href='' ng-click='tactic.editing=false'>\n												     <span class='fi-check' tooltip='Click to finish editing' tooltip-popup-delay='100' tooltip-animation=\"false\"></span>\n												    </a>\n												   </span>\n										    </td>\n\n								     </tr>\n\n							     </tbody>\n						     </table>\n						     <!-- End displaying tactics for this strategy -->\n						     \n						     <!-- Start Pager For Tactics (if required) -->\n						     <div class='row' ng-if='plan.planService.tactics[strategy.data.__guid].numberOfPages()>1'>\n							     <div class='small-12 columns'>\n							      <div class='pager'>\n								      \n									     <ul class=\"pagination\">\n													  <li class=\"arrow\"><a href=\"\" ng-click='plan.planService.tactics[strategy.data.__guid].decrementPage()'>&laquo;</a></li>\n													  <li \n													   ng-repeat='(i,obj) in plan.planService.tactics[strategy.data.__guid].pageArray() track by $index' \n													   ng-class='plan.planService.tactics[strategy.data.__guid].currentPage === i?\"current\":\"\"' >\n													   <a href='' ng-click='plan.planService.tactics[strategy.data.__guid].setCurrentPage(i)'>{{i+1}}</a>\n													  </li>\n													  <li class=\"arrow\"><a href=\"\" ng-click='plan.planService.tactics[strategy.data.__guid].incrementPage()'>&raquo;</a></li>\n													 </ul>\n							      \n							      </div>\n						      </div>\n						     </div>\n						     <!-- End Pager For Tactics (if required) -->\n						     \n						    </accordion-group>\n\n						  </accordion>\n						  \n        <!-- Start Pager For Strategies (if required) -->\n						  <ul class=\"pagination\" ng-if='plan.planService.strategies.numberOfPages()>1'>\n								  <li class=\"arrow\"><a href=\"\" ng-click='plan.planService.strategies.decrementPage()'>&laquo;</a></li>\n								  <li \n								   ng-repeat='(i,obj) in plan.planService.strategies.pageArray() track by $index' \n								   ng-class='plan.planService.strategies.currentPage === i?\"current\":\"\"'>\n								   <a ng- href='' ng-click='plan.planService.strategies.setCurrentPage(i)'>{{i+1}}</a>\n								  </li>\n								  <li class=\"arrow\"><a href=\"\" ng-click='plan.planService.strategies.incrementPage()'>&raquo;</a></li>\n								</ul>\n								<!-- End Pager For Strategies -->\n						  \n					   </div><!-- End Columns -->\n				   </div><!-- End Row -->\n				  </div><!-- End #tactics -->\n			   \n			   \n			  </tab>\n			  <!-- End Plan Strategies & Tactics Tab -->\n			 </tabset>\n			</div>\n		</div>\n	</div>\n	\n	<div class='major-actions major-actions-top' ng-include='\"partials/plan/actions.html\"'></div>\n	\n</form>\n\n"), 
    a.put("plans.html", " <div class='row'>\n	 <div class='small-12 columns'>\n		 \n		 <div class='row'>\n			 \n			 <div class='small-8 medium-10 columns'>\n				 <dl class=\"sub-nav\">\n					  <dt>Filter:</dt>\n					  <dd ng-class='plans.filterText()===\"All\"?\"active\":\"\"'><a href=''ng-click='plans.setFilter()'>All</a></dd>\n					  <dd ng-class='plans.filterText()===\"Draft\"?\"active\":\"\"'><a href=''ng-click='plans.setFilter(\"Draft\")'>Draft</a></dd>\n					  <dd ng-class='plans.filterText()===\"Submitted\"?\"active\":\"\"'><a href=''ng-click='plans.setFilter(\"Submitted\")'>Submitted</a></dd>\n					  <dd ng-class='plans.filterText()===\"Approved\"?\"active\":\"\"'><a href=''ng-click='plans.setFilter(\"Approved\")'>Approved</a></dd>\n					</dl>\n			 </div>\n			 <div class='small-4 medium-2 columns'>\n				 <select class='years' type='text' name='year' x-ng-model='year' x-ng-options='year for year in plans.years' ></select>\n			 </div>\n			 \n		 </div>\n		 \n	  <div ng-if='( plans.plans !== null && plans.plans.items.length === 0 && plans.load_complete === true ) || ( plans.plans === null && plans.load_complete === true )'>\n		  <div class='row'>\n			  <div class='columns small-12'>\n				  <div class=\"panel callout radius\"><h5>No Plans Found</h5><p>No {{ plans.filterText() !== \"All\" ? plans.filterText().toLowerCase() : \"\" }} plans were found for {{ year }}. </div>\n				 </div>\n				</div>\n	  </div>\n	  <div ng-show='plans.plans!==null && plans.plans !== undefined && plans.load_complete === true'>\n	  \n		  <div class='row' ng-repeat='_plans in plans.plan_groups'>\n			  <div ng-repeat='(i, item) in _plans track by item.data.__guid'>\n				  <div ng-class='_plans.length < plan.cols && i==_plans.length ?\"end\":\"\"'class='small-{{plans.foundationColsSm}} large-{{plans.foundationColsLg}} medium-{{plans.foundationColsMd}} columns' >\n						 <plan-card plan='item' ng-click='plans.clickPlan(item)'></plan-card>\n						</div>\n			  </div>\n			 </div>\n		  \n		  <div class='row' ng-show='plans.plans.hasPaging()'>\n	    <div class='columns small-4'>\n		    <span ng-show='plans.plans.hasPrevious()' class='left start'><a ng-click='plans.getPlans(plans.plans.start())'>First</a></span>\n	      <span ng-show='plans.plans.hasPrevious()' class='left previous'>&nbsp;|&nbsp;<a ng-click='plans.getPlans(plans.plans.previous())'>Previous</a></span>\n	      <span ng-show='!plans.plans.hasPrevious()'>&nbsp;</span>\n	    </div>\n	    <div class='columns small-4 text-center'>\n		    <small>{{ plans.recordDisplay }}</small>\n	    </div>\n	    <div class='columns small-4'>\n		    <span ng-show='plans.plans.hasNext()' class='right start'><a ng-click='plans.getPlans(plans.plans.end())'>Last</a></span>\n	      <span ng-show='plans.plans.hasNext()' class='right next'><a ng-click='plans.getPlans(plans.plans.next())'>Next</a>&nbsp;|&nbsp;</span>\n	    </div>\n		  </div>\n	  \n	  </div>\n\n	  <div ng-hide='plans.load_complete === true' class='row'>\n		  <div class='small-centered small-3 columns'>\n			  <div class='panel loading text-center'>\n				  <p>Loading Plans...</p>\n				  <p class='text-center'><h1><i class='fa fa-spinner fa-spin'></i></h1></p>\n			  </div>\n		  </div>\n	  </div>\n	 </div>\n </div>");
} ]);