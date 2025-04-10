(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) r(c);
  new MutationObserver((c) => {
    for (const f of c)
      if (f.type === "childList")
        for (const h of f.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && r(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(c) {
    const f = {};
    return (
      c.integrity && (f.integrity = c.integrity),
      c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : c.crossOrigin === "anonymous"
          ? (f.credentials = "omit")
          : (f.credentials = "same-origin"),
      f
    );
  }
  function r(c) {
    if (c.ep) return;
    c.ep = !0;
    const f = s(c);
    fetch(c.href, f);
  }
})();
var jo = { exports: {} },
  ol = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ip;
function J1() {
  if (ip) return ol;
  ip = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function s(r, c, f) {
    var h = null;
    if (
      (f !== void 0 && (h = "" + f),
      c.key !== void 0 && (h = "" + c.key),
      "key" in c)
    ) {
      f = {};
      for (var m in c) m !== "key" && (f[m] = c[m]);
    } else f = c;
    return (
      (c = f.ref),
      { $$typeof: a, type: r, key: h, ref: c !== void 0 ? c : null, props: f }
    );
  }
  return (ol.Fragment = i), (ol.jsx = s), (ol.jsxs = s), ol;
}
var lp;
function F1() {
  return lp || ((lp = 1), (jo.exports = J1())), jo.exports;
}
var Et = F1(),
  qo = { exports: {} },
  it = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sp;
function $1() {
  if (sp) return it;
  sp = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    f = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    d = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    S = Symbol.iterator;
  function b(x) {
    return x === null || typeof x != "object"
      ? null
      : ((x = (S && x[S]) || x["@@iterator"]),
        typeof x == "function" ? x : null);
  }
  var E = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    M = Object.assign,
    _ = {};
  function U(x, q, K) {
    (this.props = x),
      (this.context = q),
      (this.refs = _),
      (this.updater = K || E);
  }
  (U.prototype.isReactComponent = {}),
    (U.prototype.setState = function (x, q) {
      if (typeof x != "object" && typeof x != "function" && x != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, x, q, "setState");
    }),
    (U.prototype.forceUpdate = function (x) {
      this.updater.enqueueForceUpdate(this, x, "forceUpdate");
    });
  function O() {}
  O.prototype = U.prototype;
  function Y(x, q, K) {
    (this.props = x),
      (this.context = q),
      (this.refs = _),
      (this.updater = K || E);
  }
  var L = (Y.prototype = new O());
  (L.constructor = Y), M(L, U.prototype), (L.isPureReactComponent = !0);
  var J = Array.isArray,
    G = { H: null, A: null, T: null, S: null, V: null },
    nt = Object.prototype.hasOwnProperty;
  function lt(x, q, K, Z, $, ht) {
    return (
      (K = ht.ref),
      { $$typeof: a, type: x, key: q, ref: K !== void 0 ? K : null, props: ht }
    );
  }
  function P(x, q) {
    return lt(x.type, q, void 0, void 0, void 0, x.props);
  }
  function st(x) {
    return typeof x == "object" && x !== null && x.$$typeof === a;
  }
  function vt(x) {
    var q = { "=": "=0", ":": "=2" };
    return (
      "$" +
      x.replace(/[=:]/g, function (K) {
        return q[K];
      })
    );
  }
  var jt = /\/+/g;
  function qt(x, q) {
    return typeof x == "object" && x !== null && x.key != null
      ? vt("" + x.key)
      : q.toString(36);
  }
  function Je() {}
  function Ne(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (
          (typeof x.status == "string"
            ? x.then(Je, Je)
            : ((x.status = "pending"),
              x.then(
                function (q) {
                  x.status === "pending" &&
                    ((x.status = "fulfilled"), (x.value = q));
                },
                function (q) {
                  x.status === "pending" &&
                    ((x.status = "rejected"), (x.reason = q));
                }
              )),
          x.status)
        ) {
          case "fulfilled":
            return x.value;
          case "rejected":
            throw x.reason;
        }
    }
    throw x;
  }
  function Pt(x, q, K, Z, $) {
    var ht = typeof x;
    (ht === "undefined" || ht === "boolean") && (x = null);
    var at = !1;
    if (x === null) at = !0;
    else
      switch (ht) {
        case "bigint":
        case "string":
        case "number":
          at = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case a:
            case i:
              at = !0;
              break;
            case g:
              return (at = x._init), Pt(at(x._payload), q, K, Z, $);
          }
      }
    if (at)
      return (
        ($ = $(x)),
        (at = Z === "" ? "." + qt(x, 0) : Z),
        J($)
          ? ((K = ""),
            at != null && (K = at.replace(jt, "$&/") + "/"),
            Pt($, q, K, "", function (yn) {
              return yn;
            }))
          : $ != null &&
            (st($) &&
              ($ = P(
                $,
                K +
                  ($.key == null || (x && x.key === $.key)
                    ? ""
                    : ("" + $.key).replace(jt, "$&/") + "/") +
                  at
              )),
            q.push($)),
        1
      );
    at = 0;
    var ce = Z === "" ? "." : Z + ":";
    if (J(x))
      for (var Mt = 0; Mt < x.length; Mt++)
        (Z = x[Mt]), (ht = ce + qt(Z, Mt)), (at += Pt(Z, q, K, ht, $));
    else if (((Mt = b(x)), typeof Mt == "function"))
      for (x = Mt.call(x), Mt = 0; !(Z = x.next()).done; )
        (Z = Z.value), (ht = ce + qt(Z, Mt++)), (at += Pt(Z, q, K, ht, $));
    else if (ht === "object") {
      if (typeof x.then == "function") return Pt(Ne(x), q, K, Z, $);
      throw (
        ((q = String(x)),
        Error(
          "Objects are not valid as a React child (found: " +
            (q === "[object Object]"
              ? "object with keys {" + Object.keys(x).join(", ") + "}"
              : q) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return at;
  }
  function N(x, q, K) {
    if (x == null) return x;
    var Z = [],
      $ = 0;
    return (
      Pt(x, Z, "", "", function (ht) {
        return q.call(K, ht, $++);
      }),
      Z
    );
  }
  function X(x) {
    if (x._status === -1) {
      var q = x._result;
      (q = q()),
        q.then(
          function (K) {
            (x._status === 0 || x._status === -1) &&
              ((x._status = 1), (x._result = K));
          },
          function (K) {
            (x._status === 0 || x._status === -1) &&
              ((x._status = 2), (x._result = K));
          }
        ),
        x._status === -1 && ((x._status = 0), (x._result = q));
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var k =
    typeof reportError == "function"
      ? reportError
      : function (x) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var q = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof x == "object" &&
                x !== null &&
                typeof x.message == "string"
                  ? String(x.message)
                  : String(x),
              error: x,
            });
            if (!window.dispatchEvent(q)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", x);
            return;
          }
          console.error(x);
        };
  function mt() {}
  return (
    (it.Children = {
      map: N,
      forEach: function (x, q, K) {
        N(
          x,
          function () {
            q.apply(this, arguments);
          },
          K
        );
      },
      count: function (x) {
        var q = 0;
        return (
          N(x, function () {
            q++;
          }),
          q
        );
      },
      toArray: function (x) {
        return (
          N(x, function (q) {
            return q;
          }) || []
        );
      },
      only: function (x) {
        if (!st(x))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return x;
      },
    }),
    (it.Component = U),
    (it.Fragment = s),
    (it.Profiler = c),
    (it.PureComponent = Y),
    (it.StrictMode = r),
    (it.Suspense = d),
    (it.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G),
    (it.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (x) {
        return G.H.useMemoCache(x);
      },
    }),
    (it.cache = function (x) {
      return function () {
        return x.apply(null, arguments);
      };
    }),
    (it.cloneElement = function (x, q, K) {
      if (x == null)
        throw Error(
          "The argument must be a React element, but you passed " + x + "."
        );
      var Z = M({}, x.props),
        $ = x.key,
        ht = void 0;
      if (q != null)
        for (at in (q.ref !== void 0 && (ht = void 0),
        q.key !== void 0 && ($ = "" + q.key),
        q))
          !nt.call(q, at) ||
            at === "key" ||
            at === "__self" ||
            at === "__source" ||
            (at === "ref" && q.ref === void 0) ||
            (Z[at] = q[at]);
      var at = arguments.length - 2;
      if (at === 1) Z.children = K;
      else if (1 < at) {
        for (var ce = Array(at), Mt = 0; Mt < at; Mt++)
          ce[Mt] = arguments[Mt + 2];
        Z.children = ce;
      }
      return lt(x.type, $, void 0, void 0, ht, Z);
    }),
    (it.createContext = function (x) {
      return (
        (x = {
          $$typeof: h,
          _currentValue: x,
          _currentValue2: x,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (x.Provider = x),
        (x.Consumer = { $$typeof: f, _context: x }),
        x
      );
    }),
    (it.createElement = function (x, q, K) {
      var Z,
        $ = {},
        ht = null;
      if (q != null)
        for (Z in (q.key !== void 0 && (ht = "" + q.key), q))
          nt.call(q, Z) &&
            Z !== "key" &&
            Z !== "__self" &&
            Z !== "__source" &&
            ($[Z] = q[Z]);
      var at = arguments.length - 2;
      if (at === 1) $.children = K;
      else if (1 < at) {
        for (var ce = Array(at), Mt = 0; Mt < at; Mt++)
          ce[Mt] = arguments[Mt + 2];
        $.children = ce;
      }
      if (x && x.defaultProps)
        for (Z in ((at = x.defaultProps), at))
          $[Z] === void 0 && ($[Z] = at[Z]);
      return lt(x, ht, void 0, void 0, null, $);
    }),
    (it.createRef = function () {
      return { current: null };
    }),
    (it.forwardRef = function (x) {
      return { $$typeof: m, render: x };
    }),
    (it.isValidElement = st),
    (it.lazy = function (x) {
      return { $$typeof: g, _payload: { _status: -1, _result: x }, _init: X };
    }),
    (it.memo = function (x, q) {
      return { $$typeof: y, type: x, compare: q === void 0 ? null : q };
    }),
    (it.startTransition = function (x) {
      var q = G.T,
        K = {};
      G.T = K;
      try {
        var Z = x(),
          $ = G.S;
        $ !== null && $(K, Z),
          typeof Z == "object" &&
            Z !== null &&
            typeof Z.then == "function" &&
            Z.then(mt, k);
      } catch (ht) {
        k(ht);
      } finally {
        G.T = q;
      }
    }),
    (it.unstable_useCacheRefresh = function () {
      return G.H.useCacheRefresh();
    }),
    (it.use = function (x) {
      return G.H.use(x);
    }),
    (it.useActionState = function (x, q, K) {
      return G.H.useActionState(x, q, K);
    }),
    (it.useCallback = function (x, q) {
      return G.H.useCallback(x, q);
    }),
    (it.useContext = function (x) {
      return G.H.useContext(x);
    }),
    (it.useDebugValue = function () {}),
    (it.useDeferredValue = function (x, q) {
      return G.H.useDeferredValue(x, q);
    }),
    (it.useEffect = function (x, q, K) {
      var Z = G.H;
      if (typeof K == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return Z.useEffect(x, q);
    }),
    (it.useId = function () {
      return G.H.useId();
    }),
    (it.useImperativeHandle = function (x, q, K) {
      return G.H.useImperativeHandle(x, q, K);
    }),
    (it.useInsertionEffect = function (x, q) {
      return G.H.useInsertionEffect(x, q);
    }),
    (it.useLayoutEffect = function (x, q) {
      return G.H.useLayoutEffect(x, q);
    }),
    (it.useMemo = function (x, q) {
      return G.H.useMemo(x, q);
    }),
    (it.useOptimistic = function (x, q) {
      return G.H.useOptimistic(x, q);
    }),
    (it.useReducer = function (x, q, K) {
      return G.H.useReducer(x, q, K);
    }),
    (it.useRef = function (x) {
      return G.H.useRef(x);
    }),
    (it.useState = function (x) {
      return G.H.useState(x);
    }),
    (it.useSyncExternalStore = function (x, q, K) {
      return G.H.useSyncExternalStore(x, q, K);
    }),
    (it.useTransition = function () {
      return G.H.useTransition();
    }),
    (it.version = "19.1.0"),
    it
  );
}
var up;
function Mc() {
  return up || ((up = 1), (qo.exports = $1())), qo.exports;
}
var V = Mc(),
  Yo = { exports: {} },
  cl = {},
  Go = { exports: {} },
  Xo = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rp;
function W1() {
  return (
    rp ||
      ((rp = 1),
      (function (a) {
        function i(N, X) {
          var k = N.length;
          N.push(X);
          t: for (; 0 < k; ) {
            var mt = (k - 1) >>> 1,
              x = N[mt];
            if (0 < c(x, X)) (N[mt] = X), (N[k] = x), (k = mt);
            else break t;
          }
        }
        function s(N) {
          return N.length === 0 ? null : N[0];
        }
        function r(N) {
          if (N.length === 0) return null;
          var X = N[0],
            k = N.pop();
          if (k !== X) {
            N[0] = k;
            t: for (var mt = 0, x = N.length, q = x >>> 1; mt < q; ) {
              var K = 2 * (mt + 1) - 1,
                Z = N[K],
                $ = K + 1,
                ht = N[$];
              if (0 > c(Z, k))
                $ < x && 0 > c(ht, Z)
                  ? ((N[mt] = ht), (N[$] = k), (mt = $))
                  : ((N[mt] = Z), (N[K] = k), (mt = K));
              else if ($ < x && 0 > c(ht, k))
                (N[mt] = ht), (N[$] = k), (mt = $);
              else break t;
            }
          }
          return X;
        }
        function c(N, X) {
          var k = N.sortIndex - X.sortIndex;
          return k !== 0 ? k : N.id - X.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var f = performance;
          a.unstable_now = function () {
            return f.now();
          };
        } else {
          var h = Date,
            m = h.now();
          a.unstable_now = function () {
            return h.now() - m;
          };
        }
        var d = [],
          y = [],
          g = 1,
          S = null,
          b = 3,
          E = !1,
          M = !1,
          _ = !1,
          U = !1,
          O = typeof setTimeout == "function" ? setTimeout : null,
          Y = typeof clearTimeout == "function" ? clearTimeout : null,
          L = typeof setImmediate < "u" ? setImmediate : null;
        function J(N) {
          for (var X = s(y); X !== null; ) {
            if (X.callback === null) r(y);
            else if (X.startTime <= N)
              r(y), (X.sortIndex = X.expirationTime), i(d, X);
            else break;
            X = s(y);
          }
        }
        function G(N) {
          if (((_ = !1), J(N), !M))
            if (s(d) !== null) (M = !0), nt || ((nt = !0), qt());
            else {
              var X = s(y);
              X !== null && Pt(G, X.startTime - N);
            }
        }
        var nt = !1,
          lt = -1,
          P = 5,
          st = -1;
        function vt() {
          return U ? !0 : !(a.unstable_now() - st < P);
        }
        function jt() {
          if (((U = !1), nt)) {
            var N = a.unstable_now();
            st = N;
            var X = !0;
            try {
              t: {
                (M = !1), _ && ((_ = !1), Y(lt), (lt = -1)), (E = !0);
                var k = b;
                try {
                  e: {
                    for (
                      J(N), S = s(d);
                      S !== null && !(S.expirationTime > N && vt());

                    ) {
                      var mt = S.callback;
                      if (typeof mt == "function") {
                        (S.callback = null), (b = S.priorityLevel);
                        var x = mt(S.expirationTime <= N);
                        if (((N = a.unstable_now()), typeof x == "function")) {
                          (S.callback = x), J(N), (X = !0);
                          break e;
                        }
                        S === s(d) && r(d), J(N);
                      } else r(d);
                      S = s(d);
                    }
                    if (S !== null) X = !0;
                    else {
                      var q = s(y);
                      q !== null && Pt(G, q.startTime - N), (X = !1);
                    }
                  }
                  break t;
                } finally {
                  (S = null), (b = k), (E = !1);
                }
                X = void 0;
              }
            } finally {
              X ? qt() : (nt = !1);
            }
          }
        }
        var qt;
        if (typeof L == "function")
          qt = function () {
            L(jt);
          };
        else if (typeof MessageChannel < "u") {
          var Je = new MessageChannel(),
            Ne = Je.port2;
          (Je.port1.onmessage = jt),
            (qt = function () {
              Ne.postMessage(null);
            });
        } else
          qt = function () {
            O(jt, 0);
          };
        function Pt(N, X) {
          lt = O(function () {
            N(a.unstable_now());
          }, X);
        }
        (a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (N) {
            N.callback = null;
          }),
          (a.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (P = 0 < N ? Math.floor(1e3 / N) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return b;
          }),
          (a.unstable_next = function (N) {
            switch (b) {
              case 1:
              case 2:
              case 3:
                var X = 3;
                break;
              default:
                X = b;
            }
            var k = b;
            b = X;
            try {
              return N();
            } finally {
              b = k;
            }
          }),
          (a.unstable_requestPaint = function () {
            U = !0;
          }),
          (a.unstable_runWithPriority = function (N, X) {
            switch (N) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                N = 3;
            }
            var k = b;
            b = N;
            try {
              return X();
            } finally {
              b = k;
            }
          }),
          (a.unstable_scheduleCallback = function (N, X, k) {
            var mt = a.unstable_now();
            switch (
              (typeof k == "object" && k !== null
                ? ((k = k.delay),
                  (k = typeof k == "number" && 0 < k ? mt + k : mt))
                : (k = mt),
              N)
            ) {
              case 1:
                var x = -1;
                break;
              case 2:
                x = 250;
                break;
              case 5:
                x = 1073741823;
                break;
              case 4:
                x = 1e4;
                break;
              default:
                x = 5e3;
            }
            return (
              (x = k + x),
              (N = {
                id: g++,
                callback: X,
                priorityLevel: N,
                startTime: k,
                expirationTime: x,
                sortIndex: -1,
              }),
              k > mt
                ? ((N.sortIndex = k),
                  i(y, N),
                  s(d) === null &&
                    N === s(y) &&
                    (_ ? (Y(lt), (lt = -1)) : (_ = !0), Pt(G, k - mt)))
                : ((N.sortIndex = x),
                  i(d, N),
                  M || E || ((M = !0), nt || ((nt = !0), qt()))),
              N
            );
          }),
          (a.unstable_shouldYield = vt),
          (a.unstable_wrapCallback = function (N) {
            var X = b;
            return function () {
              var k = b;
              b = X;
              try {
                return N.apply(this, arguments);
              } finally {
                b = k;
              }
            };
          });
      })(Xo)),
    Xo
  );
}
var op;
function I1() {
  return op || ((op = 1), (Go.exports = W1())), Go.exports;
}
var Zo = { exports: {} },
  te = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cp;
function tS() {
  if (cp) return te;
  cp = 1;
  var a = Mc();
  function i(d) {
    var y = "https://react.dev/errors/" + d;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        y += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return (
      "Minified React error #" +
      d +
      "; visit " +
      y +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s() {}
  var r = {
      d: {
        f: s,
        r: function () {
          throw Error(i(522));
        },
        D: s,
        C: s,
        L: s,
        m: s,
        X: s,
        S: s,
        M: s,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function f(d, y, g) {
    var S =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: S == null ? null : "" + S,
      children: d,
      containerInfo: y,
      implementation: g,
    };
  }
  var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(d, y) {
    if (d === "font") return "";
    if (typeof y == "string") return y === "use-credentials" ? y : "";
  }
  return (
    (te.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (te.createPortal = function (d, y) {
      var g =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y || (y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11))
        throw Error(i(299));
      return f(d, y, null, g);
    }),
    (te.flushSync = function (d) {
      var y = h.T,
        g = r.p;
      try {
        if (((h.T = null), (r.p = 2), d)) return d();
      } finally {
        (h.T = y), (r.p = g), r.d.f();
      }
    }),
    (te.preconnect = function (d, y) {
      typeof d == "string" &&
        (y
          ? ((y = y.crossOrigin),
            (y =
              typeof y == "string"
                ? y === "use-credentials"
                  ? y
                  : ""
                : void 0))
          : (y = null),
        r.d.C(d, y));
    }),
    (te.prefetchDNS = function (d) {
      typeof d == "string" && r.d.D(d);
    }),
    (te.preinit = function (d, y) {
      if (typeof d == "string" && y && typeof y.as == "string") {
        var g = y.as,
          S = m(g, y.crossOrigin),
          b = typeof y.integrity == "string" ? y.integrity : void 0,
          E = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
        g === "style"
          ? r.d.S(d, typeof y.precedence == "string" ? y.precedence : void 0, {
              crossOrigin: S,
              integrity: b,
              fetchPriority: E,
            })
          : g === "script" &&
            r.d.X(d, {
              crossOrigin: S,
              integrity: b,
              fetchPriority: E,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
      }
    }),
    (te.preinitModule = function (d, y) {
      if (typeof d == "string")
        if (typeof y == "object" && y !== null) {
          if (y.as == null || y.as === "script") {
            var g = m(y.as, y.crossOrigin);
            r.d.M(d, {
              crossOrigin: g,
              integrity: typeof y.integrity == "string" ? y.integrity : void 0,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
          }
        } else y == null && r.d.M(d);
    }),
    (te.preload = function (d, y) {
      if (
        typeof d == "string" &&
        typeof y == "object" &&
        y !== null &&
        typeof y.as == "string"
      ) {
        var g = y.as,
          S = m(g, y.crossOrigin);
        r.d.L(d, g, {
          crossOrigin: S,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          type: typeof y.type == "string" ? y.type : void 0,
          fetchPriority:
            typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
          referrerPolicy:
            typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
          imageSrcSet:
            typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
          imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
          media: typeof y.media == "string" ? y.media : void 0,
        });
      }
    }),
    (te.preloadModule = function (d, y) {
      if (typeof d == "string")
        if (y) {
          var g = m(y.as, y.crossOrigin);
          r.d.m(d, {
            as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
            crossOrigin: g,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          });
        } else r.d.m(d);
    }),
    (te.requestFormReset = function (d) {
      r.d.r(d);
    }),
    (te.unstable_batchedUpdates = function (d, y) {
      return d(y);
    }),
    (te.useFormState = function (d, y, g) {
      return h.H.useFormState(d, y, g);
    }),
    (te.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (te.version = "19.1.0"),
    te
  );
}
var fp;
function eS() {
  if (fp) return Zo.exports;
  fp = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return a(), (Zo.exports = tS()), Zo.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hp;
function nS() {
  if (hp) return cl;
  hp = 1;
  var a = I1(),
    i = Mc(),
    s = eS();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function f(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function h(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (f(t) !== t) throw Error(r(188));
  }
  function d(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = f(t)), e === null)) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var n = t, l = e; ; ) {
      var u = n.return;
      if (u === null) break;
      var o = u.alternate;
      if (o === null) {
        if (((l = u.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (u.child === o.child) {
        for (o = u.child; o; ) {
          if (o === n) return m(u), t;
          if (o === l) return m(u), e;
          o = o.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== l.return) (n = u), (l = o);
      else {
        for (var p = !1, v = u.child; v; ) {
          if (v === n) {
            (p = !0), (n = u), (l = o);
            break;
          }
          if (v === l) {
            (p = !0), (l = u), (n = o);
            break;
          }
          v = v.sibling;
        }
        if (!p) {
          for (v = o.child; v; ) {
            if (v === n) {
              (p = !0), (n = o), (l = u);
              break;
            }
            if (v === l) {
              (p = !0), (l = o), (n = u);
              break;
            }
            v = v.sibling;
          }
          if (!p) throw Error(r(189));
        }
      }
      if (n.alternate !== l) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? t : e;
  }
  function y(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = y(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var g = Object.assign,
    S = Symbol.for("react.element"),
    b = Symbol.for("react.transitional.element"),
    E = Symbol.for("react.portal"),
    M = Symbol.for("react.fragment"),
    _ = Symbol.for("react.strict_mode"),
    U = Symbol.for("react.profiler"),
    O = Symbol.for("react.provider"),
    Y = Symbol.for("react.consumer"),
    L = Symbol.for("react.context"),
    J = Symbol.for("react.forward_ref"),
    G = Symbol.for("react.suspense"),
    nt = Symbol.for("react.suspense_list"),
    lt = Symbol.for("react.memo"),
    P = Symbol.for("react.lazy"),
    st = Symbol.for("react.activity"),
    vt = Symbol.for("react.memo_cache_sentinel"),
    jt = Symbol.iterator;
  function qt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (jt && t[jt]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Je = Symbol.for("react.client.reference");
  function Ne(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Je ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case M:
        return "Fragment";
      case U:
        return "Profiler";
      case _:
        return "StrictMode";
      case G:
        return "Suspense";
      case nt:
        return "SuspenseList";
      case st:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case E:
          return "Portal";
        case L:
          return (t.displayName || "Context") + ".Provider";
        case Y:
          return (t._context.displayName || "Context") + ".Consumer";
        case J:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case lt:
          return (
            (e = t.displayName || null), e !== null ? e : Ne(t.type) || "Memo"
          );
        case P:
          (e = t._payload), (t = t._init);
          try {
            return Ne(t(e));
          } catch {}
      }
    return null;
  }
  var Pt = Array.isArray,
    N = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    X = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    k = { pending: !1, data: null, method: null, action: null },
    mt = [],
    x = -1;
  function q(t) {
    return { current: t };
  }
  function K(t) {
    0 > x || ((t.current = mt[x]), (mt[x] = null), x--);
  }
  function Z(t, e) {
    x++, (mt[x] = t.current), (t.current = e);
  }
  var $ = q(null),
    ht = q(null),
    at = q(null),
    ce = q(null);
  function Mt(t, e) {
    switch ((Z(at, e), Z(ht, t), Z($, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? wm(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = wm(e)), (t = Um(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    K($), Z($, t);
  }
  function yn() {
    K($), K(ht), K(at);
  }
  function Au(t) {
    t.memoizedState !== null && Z(ce, t);
    var e = $.current,
      n = Um(e, t.type);
    e !== n && (Z(ht, t), Z($, n));
  }
  function Ll(t) {
    ht.current === t && (K($), K(ht)),
      ce.current === t && (K(ce), (il._currentValue = k));
  }
  var Eu = Object.prototype.hasOwnProperty,
    Ru = a.unstable_scheduleCallback,
    Mu = a.unstable_cancelCallback,
    Dv = a.unstable_shouldYield,
    Cv = a.unstable_requestPaint,
    Le = a.unstable_now,
    Ov = a.unstable_getCurrentPriorityLevel,
    hf = a.unstable_ImmediatePriority,
    df = a.unstable_UserBlockingPriority,
    Hl = a.unstable_NormalPriority,
    Vv = a.unstable_LowPriority,
    mf = a.unstable_IdlePriority,
    zv = a.log,
    wv = a.unstable_setDisableYieldValue,
    hi = null,
    fe = null;
  function gn(t) {
    if (
      (typeof zv == "function" && wv(t),
      fe && typeof fe.setStrictMode == "function")
    )
      try {
        fe.setStrictMode(hi, t);
      } catch {}
  }
  var he = Math.clz32 ? Math.clz32 : Bv,
    Uv = Math.log,
    _v = Math.LN2;
  function Bv(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((Uv(t) / _v) | 0)) | 0;
  }
  var jl = 256,
    ql = 4194304;
  function Kn(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Yl(t, e, n) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var u = 0,
      o = t.suspendedLanes,
      p = t.pingedLanes;
    t = t.warmLanes;
    var v = l & 134217727;
    return (
      v !== 0
        ? ((l = v & ~o),
          l !== 0
            ? (u = Kn(l))
            : ((p &= v),
              p !== 0
                ? (u = Kn(p))
                : n || ((n = v & ~t), n !== 0 && (u = Kn(n)))))
        : ((v = l & ~o),
          v !== 0
            ? (u = Kn(v))
            : p !== 0
              ? (u = Kn(p))
              : n || ((n = l & ~t), n !== 0 && (u = Kn(n)))),
      u === 0
        ? 0
        : e !== 0 &&
            e !== u &&
            (e & o) === 0 &&
            ((o = u & -u),
            (n = e & -e),
            o >= n || (o === 32 && (n & 4194048) !== 0))
          ? e
          : u
    );
  }
  function di(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Nv(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function pf() {
    var t = jl;
    return (jl <<= 1), (jl & 4194048) === 0 && (jl = 256), t;
  }
  function yf() {
    var t = ql;
    return (ql <<= 1), (ql & 62914560) === 0 && (ql = 4194304), t;
  }
  function Du(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function mi(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function Lv(t, e, n, l, u, o) {
    var p = t.pendingLanes;
    (t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0);
    var v = t.entanglements,
      T = t.expirationTimes,
      C = t.hiddenUpdates;
    for (n = p & ~n; 0 < n; ) {
      var B = 31 - he(n),
        j = 1 << B;
      (v[B] = 0), (T[B] = -1);
      var z = C[B];
      if (z !== null)
        for (C[B] = null, B = 0; B < z.length; B++) {
          var w = z[B];
          w !== null && (w.lane &= -536870913);
        }
      n &= ~j;
    }
    l !== 0 && gf(t, l, 0),
      o !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= o & ~(p & ~e));
  }
  function gf(t, e, n) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var l = 31 - he(e);
    (t.entangledLanes |= e),
      (t.entanglements[l] = t.entanglements[l] | 1073741824 | (n & 4194090));
  }
  function vf(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var l = 31 - he(n),
        u = 1 << l;
      (u & e) | (t[l] & e) && (t[l] |= e), (n &= ~u);
    }
  }
  function Cu(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Ou(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Sf() {
    var t = X.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Wm(t.type));
  }
  function Hv(t, e) {
    var n = X.p;
    try {
      return (X.p = t), e();
    } finally {
      X.p = n;
    }
  }
  var vn = Math.random().toString(36).slice(2),
    Wt = "__reactFiber$" + vn,
    le = "__reactProps$" + vn,
    ya = "__reactContainer$" + vn,
    Vu = "__reactEvents$" + vn,
    jv = "__reactListeners$" + vn,
    qv = "__reactHandles$" + vn,
    bf = "__reactResources$" + vn,
    pi = "__reactMarker$" + vn;
  function zu(t) {
    delete t[Wt], delete t[le], delete t[Vu], delete t[jv], delete t[qv];
  }
  function ga(t) {
    var e = t[Wt];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[ya] || n[Wt])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = Lm(t); t !== null; ) {
            if ((n = t[Wt])) return n;
            t = Lm(t);
          }
        return e;
      }
      (t = n), (n = t.parentNode);
    }
    return null;
  }
  function va(t) {
    if ((t = t[Wt] || t[ya])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function yi(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function Sa(t) {
    var e = t[bf];
    return (
      e ||
        (e = t[bf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Xt(t) {
    t[pi] = !0;
  }
  var Tf = new Set(),
    xf = {};
  function Qn(t, e) {
    ba(t, e), ba(t + "Capture", e);
  }
  function ba(t, e) {
    for (xf[t] = e, t = 0; t < e.length; t++) Tf.add(e[t]);
  }
  var Yv = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Af = {},
    Ef = {};
  function Gv(t) {
    return Eu.call(Ef, t)
      ? !0
      : Eu.call(Af, t)
        ? !1
        : Yv.test(t)
          ? (Ef[t] = !0)
          : ((Af[t] = !0), !1);
  }
  function Gl(t, e, n) {
    if (Gv(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var l = e.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Xl(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function Fe(t, e, n, l) {
    if (l === null) t.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + l);
    }
  }
  var wu, Rf;
  function Ta(t) {
    if (wu === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        (wu = (e && e[1]) || ""),
          (Rf =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : "");
      }
    return (
      `
` +
      wu +
      t +
      Rf
    );
  }
  var Uu = !1;
  function _u(t, e) {
    if (!t || Uu) return "";
    Uu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var j = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(j.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(j, []);
                } catch (w) {
                  var z = w;
                }
                Reflect.construct(t, [], j);
              } else {
                try {
                  j.call();
                } catch (w) {
                  z = w;
                }
                t.call(j.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (w) {
                z = w;
              }
              (j = t()) &&
                typeof j.catch == "function" &&
                j.catch(function () {});
            }
          } catch (w) {
            if (w && z && typeof w.stack == "string") return [w.stack, z.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      u &&
        u.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var o = l.DetermineComponentFrameRoot(),
        p = o[0],
        v = o[1];
      if (p && v) {
        var T = p.split(`
`),
          C = v.split(`
`);
        for (
          u = l = 0;
          l < T.length && !T[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; u < C.length && !C[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (l === T.length || u === C.length)
          for (
            l = T.length - 1, u = C.length - 1;
            1 <= l && 0 <= u && T[l] !== C[u];

          )
            u--;
        for (; 1 <= l && 0 <= u; l--, u--)
          if (T[l] !== C[u]) {
            if (l !== 1 || u !== 1)
              do
                if ((l--, u--, 0 > u || T[l] !== C[u])) {
                  var B =
                    `
` + T[l].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      B.includes("<anonymous>") &&
                      (B = B.replace("<anonymous>", t.displayName)),
                    B
                  );
                }
              while (1 <= l && 0 <= u);
            break;
          }
      }
    } finally {
      (Uu = !1), (Error.prepareStackTrace = n);
    }
    return (n = t ? t.displayName || t.name : "") ? Ta(n) : "";
  }
  function Xv(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ta(t.type);
      case 16:
        return Ta("Lazy");
      case 13:
        return Ta("Suspense");
      case 19:
        return Ta("SuspenseList");
      case 0:
      case 15:
        return _u(t.type, !1);
      case 11:
        return _u(t.type.render, !1);
      case 1:
        return _u(t.type, !0);
      case 31:
        return Ta("Activity");
      default:
        return "";
    }
  }
  function Mf(t) {
    try {
      var e = "";
      do (e += Xv(t)), (t = t.return);
      while (t);
      return e;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  function be(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Df(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function Zv(t) {
    var e = Df(t) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      l = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var u = n.get,
        o = n.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (p) {
            (l = "" + p), o.call(this, p);
          },
        }),
        Object.defineProperty(t, e, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (p) {
            l = "" + p;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function Zl(t) {
    t._valueTracker || (t._valueTracker = Zv(t));
  }
  function Cf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      l = "";
    return (
      t && (l = Df(t) ? (t.checked ? "true" : "false") : t.value),
      (t = l),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function Kl(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Kv = /[\n"\\]/g;
  function Te(t) {
    return t.replace(Kv, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Bu(t, e, n, l, u, o, p, v) {
    (t.name = ""),
      p != null &&
      typeof p != "function" &&
      typeof p != "symbol" &&
      typeof p != "boolean"
        ? (t.type = p)
        : t.removeAttribute("type"),
      e != null
        ? p === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + be(e))
          : t.value !== "" + be(e) && (t.value = "" + be(e))
        : (p !== "submit" && p !== "reset") || t.removeAttribute("value"),
      e != null
        ? Nu(t, p, be(e))
        : n != null
          ? Nu(t, p, be(n))
          : l != null && t.removeAttribute("value"),
      u == null && o != null && (t.defaultChecked = !!o),
      u != null &&
        (t.checked = u && typeof u != "function" && typeof u != "symbol"),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (t.name = "" + be(v))
        : t.removeAttribute("name");
  }
  function Of(t, e, n, l, u, o, p, v) {
    if (
      (o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (t.type = o),
      e != null || n != null)
    ) {
      if (!((o !== "submit" && o !== "reset") || e != null)) return;
      (n = n != null ? "" + be(n) : ""),
        (e = e != null ? "" + be(e) : n),
        v || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (l = l ?? u),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (t.checked = v ? t.checked : !!l),
      (t.defaultChecked = !!l),
      p != null &&
        typeof p != "function" &&
        typeof p != "symbol" &&
        typeof p != "boolean" &&
        (t.name = p);
  }
  function Nu(t, e, n) {
    (e === "number" && Kl(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function xa(t, e, n, l) {
    if (((t = t.options), e)) {
      e = {};
      for (var u = 0; u < n.length; u++) e["$" + n[u]] = !0;
      for (n = 0; n < t.length; n++)
        (u = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== u && (t[n].selected = u),
          u && l && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + be(n), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === n) {
          (t[u].selected = !0), l && (t[u].defaultSelected = !0);
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Vf(t, e, n) {
    if (
      e != null &&
      ((e = "" + be(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + be(n) : "";
  }
  function zf(t, e, n, l) {
    if (e == null) {
      if (l != null) {
        if (n != null) throw Error(r(92));
        if (Pt(l)) {
          if (1 < l.length) throw Error(r(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), (e = n);
    }
    (n = be(e)),
      (t.defaultValue = n),
      (l = t.textContent),
      l === n && l !== "" && l !== null && (t.value = l);
  }
  function Aa(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Qv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function wf(t, e, n) {
    var l = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? l
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : l
        ? t.setProperty(e, n)
        : typeof n != "number" || n === 0 || Qv.has(e)
          ? e === "float"
            ? (t.cssFloat = n)
            : (t[e] = ("" + n).trim())
          : (t[e] = n + "px");
  }
  function Uf(t, e, n) {
    if (e != null && typeof e != "object") throw Error(r(62));
    if (((t = t.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (e != null && e.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? t.setProperty(l, "")
            : l === "float"
              ? (t.cssFloat = "")
              : (t[l] = ""));
      for (var u in e)
        (l = e[u]), e.hasOwnProperty(u) && n[u] !== l && wf(t, u, l);
    } else for (var o in e) e.hasOwnProperty(o) && wf(t, o, e[o]);
  }
  function Lu(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Pv = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    kv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ql(t) {
    return kv.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var Hu = null;
  function ju(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Ea = null,
    Ra = null;
  function _f(t) {
    var e = va(t);
    if (e && (t = e.stateNode)) {
      var n = t[le] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Bu(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Te("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var l = n[e];
              if (l !== t && l.form === t.form) {
                var u = l[le] || null;
                if (!u) throw Error(r(90));
                Bu(
                  l,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              (l = n[e]), l.form === t.form && Cf(l);
          }
          break t;
        case "textarea":
          Vf(t, n.value, n.defaultValue);
          break t;
        case "select":
          (e = n.value), e != null && xa(t, !!n.multiple, e, !1);
      }
    }
  }
  var qu = !1;
  function Bf(t, e, n) {
    if (qu) return t(e, n);
    qu = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (
        ((qu = !1),
        (Ea !== null || Ra !== null) &&
          (zs(), Ea && ((e = Ea), (t = Ra), (Ra = Ea = null), _f(e), t)))
      )
        for (e = 0; e < t.length; e++) _f(t[e]);
    }
  }
  function gi(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var l = n[le] || null;
    if (l === null) return null;
    n = l[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) ||
          ((t = t.type),
          (l = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !l);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(r(231, e, typeof n));
    return n;
  }
  var $e = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Yu = !1;
  if ($e)
    try {
      var vi = {};
      Object.defineProperty(vi, "passive", {
        get: function () {
          Yu = !0;
        },
      }),
        window.addEventListener("test", vi, vi),
        window.removeEventListener("test", vi, vi);
    } catch {
      Yu = !1;
    }
  var Sn = null,
    Gu = null,
    Pl = null;
  function Nf() {
    if (Pl) return Pl;
    var t,
      e = Gu,
      n = e.length,
      l,
      u = "value" in Sn ? Sn.value : Sn.textContent,
      o = u.length;
    for (t = 0; t < n && e[t] === u[t]; t++);
    var p = n - t;
    for (l = 1; l <= p && e[n - l] === u[o - l]; l++);
    return (Pl = u.slice(t, 1 < l ? 1 - l : void 0));
  }
  function kl(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Jl() {
    return !0;
  }
  function Lf() {
    return !1;
  }
  function se(t) {
    function e(n, l, u, o, p) {
      (this._reactName = n),
        (this._targetInst = u),
        (this.type = l),
        (this.nativeEvent = o),
        (this.target = p),
        (this.currentTarget = null);
      for (var v in t)
        t.hasOwnProperty(v) && ((n = t[v]), (this[v] = n ? n(o) : o[v]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Jl
          : Lf),
        (this.isPropagationStopped = Lf),
        this
      );
    }
    return (
      g(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Jl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Jl));
        },
        persist: function () {},
        isPersistent: Jl,
      }),
      e
    );
  }
  var Pn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Fl = se(Pn),
    Si = g({}, Pn, { view: 0, detail: 0 }),
    Jv = se(Si),
    Xu,
    Zu,
    bi,
    $l = g({}, Si, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Qu,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== bi &&
              (bi && t.type === "mousemove"
                ? ((Xu = t.screenX - bi.screenX), (Zu = t.screenY - bi.screenY))
                : (Zu = Xu = 0),
              (bi = t)),
            Xu);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Zu;
      },
    }),
    Hf = se($l),
    Fv = g({}, $l, { dataTransfer: 0 }),
    $v = se(Fv),
    Wv = g({}, Si, { relatedTarget: 0 }),
    Ku = se(Wv),
    Iv = g({}, Pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    t0 = se(Iv),
    e0 = g({}, Pn, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    n0 = se(e0),
    a0 = g({}, Pn, { data: 0 }),
    jf = se(a0),
    i0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    l0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    s0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function u0(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = s0[t])
        ? !!e[t]
        : !1;
  }
  function Qu() {
    return u0;
  }
  var r0 = g({}, Si, {
      key: function (t) {
        if (t.key) {
          var e = i0[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = kl(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? l0[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Qu,
      charCode: function (t) {
        return t.type === "keypress" ? kl(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? kl(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    o0 = se(r0),
    c0 = g({}, $l, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    qf = se(c0),
    f0 = g({}, Si, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Qu,
    }),
    h0 = se(f0),
    d0 = g({}, Pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    m0 = se(d0),
    p0 = g({}, $l, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    y0 = se(p0),
    g0 = g({}, Pn, { newState: 0, oldState: 0 }),
    v0 = se(g0),
    S0 = [9, 13, 27, 32],
    Pu = $e && "CompositionEvent" in window,
    Ti = null;
  $e && "documentMode" in document && (Ti = document.documentMode);
  var b0 = $e && "TextEvent" in window && !Ti,
    Yf = $e && (!Pu || (Ti && 8 < Ti && 11 >= Ti)),
    Gf = " ",
    Xf = !1;
  function Zf(t, e) {
    switch (t) {
      case "keyup":
        return S0.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Kf(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ma = !1;
  function T0(t, e) {
    switch (t) {
      case "compositionend":
        return Kf(e);
      case "keypress":
        return e.which !== 32 ? null : ((Xf = !0), Gf);
      case "textInput":
        return (t = e.data), t === Gf && Xf ? null : t;
      default:
        return null;
    }
  }
  function x0(t, e) {
    if (Ma)
      return t === "compositionend" || (!Pu && Zf(t, e))
        ? ((t = Nf()), (Pl = Gu = Sn = null), (Ma = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Yf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var A0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Qf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!A0[t.type] : e === "textarea";
  }
  function Pf(t, e, n, l) {
    Ea ? (Ra ? Ra.push(l) : (Ra = [l])) : (Ea = l),
      (e = Ls(e, "onChange")),
      0 < e.length &&
        ((n = new Fl("onChange", "change", null, n, l)),
        t.push({ event: n, listeners: e }));
  }
  var xi = null,
    Ai = null;
  function E0(t) {
    Dm(t, 0);
  }
  function Wl(t) {
    var e = yi(t);
    if (Cf(e)) return t;
  }
  function kf(t, e) {
    if (t === "change") return e;
  }
  var Jf = !1;
  if ($e) {
    var ku;
    if ($e) {
      var Ju = "oninput" in document;
      if (!Ju) {
        var Ff = document.createElement("div");
        Ff.setAttribute("oninput", "return;"),
          (Ju = typeof Ff.oninput == "function");
      }
      ku = Ju;
    } else ku = !1;
    Jf = ku && (!document.documentMode || 9 < document.documentMode);
  }
  function $f() {
    xi && (xi.detachEvent("onpropertychange", Wf), (Ai = xi = null));
  }
  function Wf(t) {
    if (t.propertyName === "value" && Wl(Ai)) {
      var e = [];
      Pf(e, Ai, t, ju(t)), Bf(E0, e);
    }
  }
  function R0(t, e, n) {
    t === "focusin"
      ? ($f(), (xi = e), (Ai = n), xi.attachEvent("onpropertychange", Wf))
      : t === "focusout" && $f();
  }
  function M0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Wl(Ai);
  }
  function D0(t, e) {
    if (t === "click") return Wl(e);
  }
  function C0(t, e) {
    if (t === "input" || t === "change") return Wl(e);
  }
  function O0(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var de = typeof Object.is == "function" ? Object.is : O0;
  function Ei(t, e) {
    if (de(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      l = Object.keys(e);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var u = n[l];
      if (!Eu.call(e, u) || !de(t[u], e[u])) return !1;
    }
    return !0;
  }
  function If(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function th(t, e) {
    var n = If(t);
    t = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = t + n.textContent.length), t <= e && l >= e))
          return { node: n, offset: e - t };
        t = l;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = If(n);
    }
  }
  function eh(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? eh(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function nh(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Kl(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Kl(t.document);
    }
    return e;
  }
  function Fu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var V0 = $e && "documentMode" in document && 11 >= document.documentMode,
    Da = null,
    $u = null,
    Ri = null,
    Wu = !1;
  function ah(t, e, n) {
    var l =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Wu ||
      Da == null ||
      Da !== Kl(l) ||
      ((l = Da),
      "selectionStart" in l && Fu(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Ri && Ei(Ri, l)) ||
        ((Ri = l),
        (l = Ls($u, "onSelect")),
        0 < l.length &&
          ((e = new Fl("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: l }),
          (e.target = Da))));
  }
  function kn(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var Ca = {
      animationend: kn("Animation", "AnimationEnd"),
      animationiteration: kn("Animation", "AnimationIteration"),
      animationstart: kn("Animation", "AnimationStart"),
      transitionrun: kn("Transition", "TransitionRun"),
      transitionstart: kn("Transition", "TransitionStart"),
      transitioncancel: kn("Transition", "TransitionCancel"),
      transitionend: kn("Transition", "TransitionEnd"),
    },
    Iu = {},
    ih = {};
  $e &&
    ((ih = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ca.animationend.animation,
      delete Ca.animationiteration.animation,
      delete Ca.animationstart.animation),
    "TransitionEvent" in window || delete Ca.transitionend.transition);
  function Jn(t) {
    if (Iu[t]) return Iu[t];
    if (!Ca[t]) return t;
    var e = Ca[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in ih) return (Iu[t] = e[n]);
    return t;
  }
  var lh = Jn("animationend"),
    sh = Jn("animationiteration"),
    uh = Jn("animationstart"),
    z0 = Jn("transitionrun"),
    w0 = Jn("transitionstart"),
    U0 = Jn("transitioncancel"),
    rh = Jn("transitionend"),
    oh = new Map(),
    tr =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  tr.push("scrollEnd");
  function we(t, e) {
    oh.set(t, e), Qn(e, [t]);
  }
  var ch = new WeakMap();
  function xe(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = ch.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: Mf(e) }), ch.set(t, e), e);
    }
    return { value: t, source: e, stack: Mf(e) };
  }
  var Ae = [],
    Oa = 0,
    er = 0;
  function Il() {
    for (var t = Oa, e = (er = Oa = 0); e < t; ) {
      var n = Ae[e];
      Ae[e++] = null;
      var l = Ae[e];
      Ae[e++] = null;
      var u = Ae[e];
      Ae[e++] = null;
      var o = Ae[e];
      if (((Ae[e++] = null), l !== null && u !== null)) {
        var p = l.pending;
        p === null ? (u.next = u) : ((u.next = p.next), (p.next = u)),
          (l.pending = u);
      }
      o !== 0 && fh(n, u, o);
    }
  }
  function ts(t, e, n, l) {
    (Ae[Oa++] = t),
      (Ae[Oa++] = e),
      (Ae[Oa++] = n),
      (Ae[Oa++] = l),
      (er |= l),
      (t.lanes |= l),
      (t = t.alternate),
      t !== null && (t.lanes |= l);
  }
  function nr(t, e, n, l) {
    return ts(t, e, n, l), es(t);
  }
  function Va(t, e) {
    return ts(t, null, null, e), es(t);
  }
  function fh(t, e, n) {
    t.lanes |= n;
    var l = t.alternate;
    l !== null && (l.lanes |= n);
    for (var u = !1, o = t.return; o !== null; )
      (o.childLanes |= n),
        (l = o.alternate),
        l !== null && (l.childLanes |= n),
        o.tag === 22 &&
          ((t = o.stateNode), t === null || t._visibility & 1 || (u = !0)),
        (t = o),
        (o = o.return);
    return t.tag === 3
      ? ((o = t.stateNode),
        u &&
          e !== null &&
          ((u = 31 - he(n)),
          (t = o.hiddenUpdates),
          (l = t[u]),
          l === null ? (t[u] = [e]) : l.push(e),
          (e.lane = n | 536870912)),
        o)
      : null;
  }
  function es(t) {
    if (50 < Fi) throw ((Fi = 0), (ro = null), Error(r(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var za = {};
  function _0(t, e, n, l) {
    (this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function me(t, e, n, l) {
    return new _0(t, e, n, l);
  }
  function ar(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function We(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = me(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function hh(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function ns(t, e, n, l, u, o) {
    var p = 0;
    if (((l = t), typeof t == "function")) ar(t) && (p = 1);
    else if (typeof t == "string")
      p = N1(t, n, $.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case st:
          return (t = me(31, n, e, u)), (t.elementType = st), (t.lanes = o), t;
        case M:
          return Fn(n.children, u, o, e);
        case _:
          (p = 8), (u |= 24);
          break;
        case U:
          return (
            (t = me(12, n, e, u | 2)), (t.elementType = U), (t.lanes = o), t
          );
        case G:
          return (t = me(13, n, e, u)), (t.elementType = G), (t.lanes = o), t;
        case nt:
          return (t = me(19, n, e, u)), (t.elementType = nt), (t.lanes = o), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case O:
              case L:
                p = 10;
                break t;
              case Y:
                p = 9;
                break t;
              case J:
                p = 11;
                break t;
              case lt:
                p = 14;
                break t;
              case P:
                (p = 16), (l = null);
                break t;
            }
          (p = 29),
            (n = Error(r(130, t === null ? "null" : typeof t, ""))),
            (l = null);
      }
    return (
      (e = me(p, n, e, u)), (e.elementType = t), (e.type = l), (e.lanes = o), e
    );
  }
  function Fn(t, e, n, l) {
    return (t = me(7, t, l, e)), (t.lanes = n), t;
  }
  function ir(t, e, n) {
    return (t = me(6, t, null, e)), (t.lanes = n), t;
  }
  function lr(t, e, n) {
    return (
      (e = me(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var wa = [],
    Ua = 0,
    as = null,
    is = 0,
    Ee = [],
    Re = 0,
    $n = null,
    Ie = 1,
    tn = "";
  function Wn(t, e) {
    (wa[Ua++] = is), (wa[Ua++] = as), (as = t), (is = e);
  }
  function dh(t, e, n) {
    (Ee[Re++] = Ie), (Ee[Re++] = tn), (Ee[Re++] = $n), ($n = t);
    var l = Ie;
    t = tn;
    var u = 32 - he(l) - 1;
    (l &= ~(1 << u)), (n += 1);
    var o = 32 - he(e) + u;
    if (30 < o) {
      var p = u - (u % 5);
      (o = (l & ((1 << p) - 1)).toString(32)),
        (l >>= p),
        (u -= p),
        (Ie = (1 << (32 - he(e) + u)) | (n << u) | l),
        (tn = o + t);
    } else (Ie = (1 << o) | (n << u) | l), (tn = t);
  }
  function sr(t) {
    t.return !== null && (Wn(t, 1), dh(t, 1, 0));
  }
  function ur(t) {
    for (; t === as; )
      (as = wa[--Ua]), (wa[Ua] = null), (is = wa[--Ua]), (wa[Ua] = null);
    for (; t === $n; )
      ($n = Ee[--Re]),
        (Ee[Re] = null),
        (tn = Ee[--Re]),
        (Ee[Re] = null),
        (Ie = Ee[--Re]),
        (Ee[Re] = null);
  }
  var ae = null,
    zt = null,
    pt = !1,
    In = null,
    He = !1,
    rr = Error(r(519));
  function ta(t) {
    var e = Error(r(418, ""));
    throw (Ci(xe(e, t)), rr);
  }
  function mh(t) {
    var e = t.stateNode,
      n = t.type,
      l = t.memoizedProps;
    switch (((e[Wt] = t), (e[le] = l), n)) {
      case "dialog":
        ct("cancel", e), ct("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ct("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Wi.length; n++) ct(Wi[n], e);
        break;
      case "source":
        ct("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ct("error", e), ct("load", e);
        break;
      case "details":
        ct("toggle", e);
        break;
      case "input":
        ct("invalid", e),
          Of(
            e,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0
          ),
          Zl(e);
        break;
      case "select":
        ct("invalid", e);
        break;
      case "textarea":
        ct("invalid", e), zf(e, l.value, l.defaultValue, l.children), Zl(e);
    }
    (n = l.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      l.suppressHydrationWarning === !0 ||
      zm(e.textContent, n)
        ? (l.popover != null && (ct("beforetoggle", e), ct("toggle", e)),
          l.onScroll != null && ct("scroll", e),
          l.onScrollEnd != null && ct("scrollend", e),
          l.onClick != null && (e.onclick = Hs),
          (e = !0))
        : (e = !1),
      e || ta(t);
  }
  function ph(t) {
    for (ae = t.return; ae; )
      switch (ae.tag) {
        case 5:
        case 13:
          He = !1;
          return;
        case 27:
        case 3:
          He = !0;
          return;
        default:
          ae = ae.return;
      }
  }
  function Mi(t) {
    if (t !== ae) return !1;
    if (!pt) return ph(t), (pt = !0), !1;
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || Ro(t.type, t.memoizedProps))),
        (n = !n)),
      n && zt && ta(t),
      ph(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((n = t.data), n === "/$")) {
              if (e === 0) {
                zt = _e(t.nextSibling);
                break t;
              }
              e--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
          t = t.nextSibling;
        }
        zt = null;
      }
    } else
      e === 27
        ? ((e = zt), Bn(t.type) ? ((t = Oo), (Oo = null), (zt = t)) : (zt = e))
        : (zt = ae ? _e(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Di() {
    (zt = ae = null), (pt = !1);
  }
  function yh() {
    var t = In;
    return (
      t !== null &&
        (oe === null ? (oe = t) : oe.push.apply(oe, t), (In = null)),
      t
    );
  }
  function Ci(t) {
    In === null ? (In = [t]) : In.push(t);
  }
  var or = q(null),
    ea = null,
    en = null;
  function bn(t, e, n) {
    Z(or, e._currentValue), (e._currentValue = n);
  }
  function nn(t) {
    (t._currentValue = or.current), K(or);
  }
  function cr(t, e, n) {
    for (; t !== null; ) {
      var l = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), l !== null && (l.childLanes |= e))
          : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function fr(t, e, n, l) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var o = u.dependencies;
      if (o !== null) {
        var p = u.child;
        o = o.firstContext;
        t: for (; o !== null; ) {
          var v = o;
          o = u;
          for (var T = 0; T < e.length; T++)
            if (v.context === e[T]) {
              (o.lanes |= n),
                (v = o.alternate),
                v !== null && (v.lanes |= n),
                cr(o.return, n, t),
                l || (p = null);
              break t;
            }
          o = v.next;
        }
      } else if (u.tag === 18) {
        if (((p = u.return), p === null)) throw Error(r(341));
        (p.lanes |= n),
          (o = p.alternate),
          o !== null && (o.lanes |= n),
          cr(p, n, t),
          (p = null);
      } else p = u.child;
      if (p !== null) p.return = u;
      else
        for (p = u; p !== null; ) {
          if (p === t) {
            p = null;
            break;
          }
          if (((u = p.sibling), u !== null)) {
            (u.return = p.return), (p = u);
            break;
          }
          p = p.return;
        }
      u = p;
    }
  }
  function Oi(t, e, n, l) {
    t = null;
    for (var u = e, o = !1; u !== null; ) {
      if (!o) {
        if ((u.flags & 524288) !== 0) o = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var p = u.alternate;
        if (p === null) throw Error(r(387));
        if (((p = p.memoizedProps), p !== null)) {
          var v = u.type;
          de(u.pendingProps.value, p.value) ||
            (t !== null ? t.push(v) : (t = [v]));
        }
      } else if (u === ce.current) {
        if (((p = u.alternate), p === null)) throw Error(r(387));
        p.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (t !== null ? t.push(il) : (t = [il]));
      }
      u = u.return;
    }
    t !== null && fr(e, t, n, l), (e.flags |= 262144);
  }
  function ls(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!de(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function na(t) {
    (ea = t),
      (en = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function It(t) {
    return gh(ea, t);
  }
  function ss(t, e) {
    return ea === null && na(t), gh(t, e);
  }
  function gh(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), en === null)) {
      if (t === null) throw Error(r(308));
      (en = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else en = en.next = e;
    return n;
  }
  var B0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, l) {
                  t.push(l);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                });
            };
          },
    N0 = a.unstable_scheduleCallback,
    L0 = a.unstable_NormalPriority,
    Yt = {
      $$typeof: L,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function hr() {
    return { controller: new B0(), data: new Map(), refCount: 0 };
  }
  function Vi(t) {
    t.refCount--,
      t.refCount === 0 &&
        N0(L0, function () {
          t.controller.abort();
        });
  }
  var zi = null,
    dr = 0,
    _a = 0,
    Ba = null;
  function H0(t, e) {
    if (zi === null) {
      var n = (zi = []);
      (dr = 0),
        (_a = yo()),
        (Ba = {
          status: "pending",
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        });
    }
    return dr++, e.then(vh, vh), e;
  }
  function vh() {
    if (--dr === 0 && zi !== null) {
      Ba !== null && (Ba.status = "fulfilled");
      var t = zi;
      (zi = null), (_a = 0), (Ba = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function j0(t, e) {
    var n = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          n.push(u);
        },
      };
    return (
      t.then(
        function () {
          (l.status = "fulfilled"), (l.value = e);
          for (var u = 0; u < n.length; u++) (0, n[u])(e);
        },
        function (u) {
          for (l.status = "rejected", l.reason = u, u = 0; u < n.length; u++)
            (0, n[u])(void 0);
        }
      ),
      l
    );
  }
  var Sh = N.S;
  N.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      H0(t, e),
      Sh !== null && Sh(t, e);
  };
  var aa = q(null);
  function mr() {
    var t = aa.current;
    return t !== null ? t : At.pooledCache;
  }
  function us(t, e) {
    e === null ? Z(aa, aa.current) : Z(aa, e.pool);
  }
  function bh() {
    var t = mr();
    return t === null ? null : { parent: Yt._currentValue, pool: t };
  }
  var wi = Error(r(460)),
    Th = Error(r(474)),
    rs = Error(r(542)),
    pr = { then: function () {} };
  function xh(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function os() {}
  function Ah(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(os, os), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), Rh(t), t);
      default:
        if (typeof e.status == "string") e.then(os, os);
        else {
          if (((t = At), t !== null && 100 < t.shellSuspendCounter))
            throw Error(r(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (l) {
                if (e.status === "pending") {
                  var u = e;
                  (u.status = "fulfilled"), (u.value = l);
                }
              },
              function (l) {
                if (e.status === "pending") {
                  var u = e;
                  (u.status = "rejected"), (u.reason = l);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Rh(t), t);
        }
        throw ((Ui = e), wi);
    }
  }
  var Ui = null;
  function Eh() {
    if (Ui === null) throw Error(r(459));
    var t = Ui;
    return (Ui = null), t;
  }
  function Rh(t) {
    if (t === wi || t === rs) throw Error(r(483));
  }
  var Tn = !1;
  function yr(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function gr(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function xn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function An(t, e, n) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (yt & 2) !== 0)) {
      var u = l.pending;
      return (
        u === null ? (e.next = e) : ((e.next = u.next), (u.next = e)),
        (l.pending = e),
        (e = es(t)),
        fh(t, null, n),
        e
      );
    }
    return ts(t, l, e, n), es(t);
  }
  function _i(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var l = e.lanes;
      (l &= t.pendingLanes), (n |= l), (e.lanes = n), vf(t, n);
    }
  }
  function vr(t, e) {
    var n = t.updateQueue,
      l = t.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var u = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var p = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          o === null ? (u = o = p) : (o = o.next = p), (n = n.next);
        } while (n !== null);
        o === null ? (u = o = e) : (o = o.next = e);
      } else u = o = e;
      (n = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: o,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (t.updateQueue = n);
      return;
    }
    (t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e);
  }
  var Sr = !1;
  function Bi() {
    if (Sr) {
      var t = Ba;
      if (t !== null) throw t;
    }
  }
  function Ni(t, e, n, l) {
    Sr = !1;
    var u = t.updateQueue;
    Tn = !1;
    var o = u.firstBaseUpdate,
      p = u.lastBaseUpdate,
      v = u.shared.pending;
    if (v !== null) {
      u.shared.pending = null;
      var T = v,
        C = T.next;
      (T.next = null), p === null ? (o = C) : (p.next = C), (p = T);
      var B = t.alternate;
      B !== null &&
        ((B = B.updateQueue),
        (v = B.lastBaseUpdate),
        v !== p &&
          (v === null ? (B.firstBaseUpdate = C) : (v.next = C),
          (B.lastBaseUpdate = T)));
    }
    if (o !== null) {
      var j = u.baseState;
      (p = 0), (B = C = T = null), (v = o);
      do {
        var z = v.lane & -536870913,
          w = z !== v.lane;
        if (w ? (ft & z) === z : (l & z) === z) {
          z !== 0 && z === _a && (Sr = !0),
            B !== null &&
              (B = B.next =
                {
                  lane: 0,
                  tag: v.tag,
                  payload: v.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var et = t,
              W = v;
            z = e;
            var Tt = n;
            switch (W.tag) {
              case 1:
                if (((et = W.payload), typeof et == "function")) {
                  j = et.call(Tt, j, z);
                  break t;
                }
                j = et;
                break t;
              case 3:
                et.flags = (et.flags & -65537) | 128;
              case 0:
                if (
                  ((et = W.payload),
                  (z = typeof et == "function" ? et.call(Tt, j, z) : et),
                  z == null)
                )
                  break t;
                j = g({}, j, z);
                break t;
              case 2:
                Tn = !0;
            }
          }
          (z = v.callback),
            z !== null &&
              ((t.flags |= 64),
              w && (t.flags |= 8192),
              (w = u.callbacks),
              w === null ? (u.callbacks = [z]) : w.push(z));
        } else
          (w = {
            lane: z,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            B === null ? ((C = B = w), (T = j)) : (B = B.next = w),
            (p |= z);
        if (((v = v.next), v === null)) {
          if (((v = u.shared.pending), v === null)) break;
          (w = v),
            (v = w.next),
            (w.next = null),
            (u.lastBaseUpdate = w),
            (u.shared.pending = null);
        }
      } while (!0);
      B === null && (T = j),
        (u.baseState = T),
        (u.firstBaseUpdate = C),
        (u.lastBaseUpdate = B),
        o === null && (u.shared.lanes = 0),
        (zn |= p),
        (t.lanes = p),
        (t.memoizedState = j);
    }
  }
  function Mh(t, e) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(e);
  }
  function Dh(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) Mh(n[t], e);
  }
  var Na = q(null),
    cs = q(0);
  function Ch(t, e) {
    (t = cn), Z(cs, t), Z(Na, e), (cn = t | e.baseLanes);
  }
  function br() {
    Z(cs, cn), Z(Na, Na.current);
  }
  function Tr() {
    (cn = cs.current), K(Na), K(cs);
  }
  var En = 0,
    ut = null,
    St = null,
    Lt = null,
    fs = !1,
    La = !1,
    ia = !1,
    hs = 0,
    Li = 0,
    Ha = null,
    q0 = 0;
  function _t() {
    throw Error(r(321));
  }
  function xr(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!de(t[n], e[n])) return !1;
    return !0;
  }
  function Ar(t, e, n, l, u, o) {
    return (
      (En = o),
      (ut = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (N.H = t === null || t.memoizedState === null ? fd : hd),
      (ia = !1),
      (o = n(l, u)),
      (ia = !1),
      La && (o = Vh(e, n, l, u)),
      Oh(t),
      o
    );
  }
  function Oh(t) {
    N.H = vs;
    var e = St !== null && St.next !== null;
    if (((En = 0), (Lt = St = ut = null), (fs = !1), (Li = 0), (Ha = null), e))
      throw Error(r(300));
    t === null ||
      Zt ||
      ((t = t.dependencies), t !== null && ls(t) && (Zt = !0));
  }
  function Vh(t, e, n, l) {
    ut = t;
    var u = 0;
    do {
      if ((La && (Ha = null), (Li = 0), (La = !1), 25 <= u))
        throw Error(r(301));
      if (((u += 1), (Lt = St = null), t.updateQueue != null)) {
        var o = t.updateQueue;
        (o.lastEffect = null),
          (o.events = null),
          (o.stores = null),
          o.memoCache != null && (o.memoCache.index = 0);
      }
      (N.H = P0), (o = e(n, l));
    } while (La);
    return o;
  }
  function Y0() {
    var t = N.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Hi(e) : e),
      (t = t.useState()[0]),
      (St !== null ? St.memoizedState : null) !== t && (ut.flags |= 1024),
      e
    );
  }
  function Er() {
    var t = hs !== 0;
    return (hs = 0), t;
  }
  function Rr(t, e, n) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n);
  }
  function Mr(t) {
    if (fs) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      fs = !1;
    }
    (En = 0), (Lt = St = ut = null), (La = !1), (Li = hs = 0), (Ha = null);
  }
  function ue() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Lt === null ? (ut.memoizedState = Lt = t) : (Lt = Lt.next = t), Lt;
  }
  function Ht() {
    if (St === null) {
      var t = ut.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = St.next;
    var e = Lt === null ? ut.memoizedState : Lt.next;
    if (e !== null) (Lt = e), (St = t);
    else {
      if (t === null)
        throw ut.alternate === null ? Error(r(467)) : Error(r(310));
      (St = t),
        (t = {
          memoizedState: St.memoizedState,
          baseState: St.baseState,
          baseQueue: St.baseQueue,
          queue: St.queue,
          next: null,
        }),
        Lt === null ? (ut.memoizedState = Lt = t) : (Lt = Lt.next = t);
    }
    return Lt;
  }
  function Dr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Hi(t) {
    var e = Li;
    return (
      (Li += 1),
      Ha === null && (Ha = []),
      (t = Ah(Ha, t, e)),
      (e = ut),
      (Lt === null ? e.memoizedState : Lt.next) === null &&
        ((e = e.alternate),
        (N.H = e === null || e.memoizedState === null ? fd : hd)),
      t
    );
  }
  function ds(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Hi(t);
      if (t.$$typeof === L) return It(t);
    }
    throw Error(r(438, String(t)));
  }
  function Cr(t) {
    var e = null,
      n = ut.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var l = ut.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (e = {
              data: l.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = Dr()), (ut.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), l = 0; l < t; l++) n[l] = vt;
    return e.index++, n;
  }
  function an(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function ms(t) {
    var e = Ht();
    return Or(e, St, t);
  }
  function Or(t, e, n) {
    var l = t.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = n;
    var u = t.baseQueue,
      o = l.pending;
    if (o !== null) {
      if (u !== null) {
        var p = u.next;
        (u.next = o.next), (o.next = p);
      }
      (e.baseQueue = u = o), (l.pending = null);
    }
    if (((o = t.baseState), u === null)) t.memoizedState = o;
    else {
      e = u.next;
      var v = (p = null),
        T = null,
        C = e,
        B = !1;
      do {
        var j = C.lane & -536870913;
        if (j !== C.lane ? (ft & j) === j : (En & j) === j) {
          var z = C.revertLane;
          if (z === 0)
            T !== null &&
              (T = T.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: C.action,
                  hasEagerState: C.hasEagerState,
                  eagerState: C.eagerState,
                  next: null,
                }),
              j === _a && (B = !0);
          else if ((En & z) === z) {
            (C = C.next), z === _a && (B = !0);
            continue;
          } else
            (j = {
              lane: 0,
              revertLane: C.revertLane,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null,
            }),
              T === null ? ((v = T = j), (p = o)) : (T = T.next = j),
              (ut.lanes |= z),
              (zn |= z);
          (j = C.action),
            ia && n(o, j),
            (o = C.hasEagerState ? C.eagerState : n(o, j));
        } else
          (z = {
            lane: j,
            revertLane: C.revertLane,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null,
          }),
            T === null ? ((v = T = z), (p = o)) : (T = T.next = z),
            (ut.lanes |= j),
            (zn |= j);
        C = C.next;
      } while (C !== null && C !== e);
      if (
        (T === null ? (p = o) : (T.next = v),
        !de(o, t.memoizedState) && ((Zt = !0), B && ((n = Ba), n !== null)))
      )
        throw n;
      (t.memoizedState = o),
        (t.baseState = p),
        (t.baseQueue = T),
        (l.lastRenderedState = o);
    }
    return u === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function Vr(t) {
    var e = Ht(),
      n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = t;
    var l = n.dispatch,
      u = n.pending,
      o = e.memoizedState;
    if (u !== null) {
      n.pending = null;
      var p = (u = u.next);
      do (o = t(o, p.action)), (p = p.next);
      while (p !== u);
      de(o, e.memoizedState) || (Zt = !0),
        (e.memoizedState = o),
        e.baseQueue === null && (e.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, l];
  }
  function zh(t, e, n) {
    var l = ut,
      u = Ht(),
      o = pt;
    if (o) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = e();
    var p = !de((St || u).memoizedState, n);
    p && ((u.memoizedState = n), (Zt = !0)), (u = u.queue);
    var v = _h.bind(null, l, u, t);
    if (
      (ji(2048, 8, v, [t]),
      u.getSnapshot !== e || p || (Lt !== null && Lt.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        ja(9, ps(), Uh.bind(null, l, u, n, e), null),
        At === null)
      )
        throw Error(r(349));
      o || (En & 124) !== 0 || wh(l, e, n);
    }
    return n;
  }
  function wh(t, e, n) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = ut.updateQueue),
      e === null
        ? ((e = Dr()), (ut.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
  }
  function Uh(t, e, n, l) {
    (e.value = n), (e.getSnapshot = l), Bh(e) && Nh(t);
  }
  function _h(t, e, n) {
    return n(function () {
      Bh(e) && Nh(t);
    });
  }
  function Bh(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !de(t, n);
    } catch {
      return !0;
    }
  }
  function Nh(t) {
    var e = Va(t, 2);
    e !== null && Se(e, t, 2);
  }
  function zr(t) {
    var e = ue();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), ia)) {
        gn(!0);
        try {
          n();
        } finally {
          gn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: an,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Lh(t, e, n, l) {
    return (t.baseState = n), Or(t, St, typeof l == "function" ? l : an);
  }
  function G0(t, e, n, l, u) {
    if (gs(t)) throw Error(r(485));
    if (((t = e.action), t !== null)) {
      var o = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (p) {
          o.listeners.push(p);
        },
      };
      N.T !== null ? n(!0) : (o.isTransition = !1),
        l(o),
        (n = e.pending),
        n === null
          ? ((o.next = e.pending = o), Hh(e, o))
          : ((o.next = n.next), (e.pending = n.next = o));
    }
  }
  function Hh(t, e) {
    var n = e.action,
      l = e.payload,
      u = t.state;
    if (e.isTransition) {
      var o = N.T,
        p = {};
      N.T = p;
      try {
        var v = n(u, l),
          T = N.S;
        T !== null && T(p, v), jh(t, e, v);
      } catch (C) {
        wr(t, e, C);
      } finally {
        N.T = o;
      }
    } else
      try {
        (o = n(u, l)), jh(t, e, o);
      } catch (C) {
        wr(t, e, C);
      }
  }
  function jh(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (l) {
            qh(t, e, l);
          },
          function (l) {
            return wr(t, e, l);
          }
        )
      : qh(t, e, n);
  }
  function qh(t, e, n) {
    (e.status = "fulfilled"),
      (e.value = n),
      Yh(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), Hh(t, n)));
  }
  function wr(t, e, n) {
    var l = t.pending;
    if (((t.pending = null), l !== null)) {
      l = l.next;
      do (e.status = "rejected"), (e.reason = n), Yh(e), (e = e.next);
      while (e !== l);
    }
    t.action = null;
  }
  function Yh(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Gh(t, e) {
    return e;
  }
  function Xh(t, e) {
    if (pt) {
      var n = At.formState;
      if (n !== null) {
        t: {
          var l = ut;
          if (pt) {
            if (zt) {
              e: {
                for (var u = zt, o = He; u.nodeType !== 8; ) {
                  if (!o) {
                    u = null;
                    break e;
                  }
                  if (((u = _e(u.nextSibling)), u === null)) {
                    u = null;
                    break e;
                  }
                }
                (o = u.data), (u = o === "F!" || o === "F" ? u : null);
              }
              if (u) {
                (zt = _e(u.nextSibling)), (l = u.data === "F!");
                break t;
              }
            }
            ta(l);
          }
          l = !1;
        }
        l && (e = n[0]);
      }
    }
    return (
      (n = ue()),
      (n.memoizedState = n.baseState = e),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gh,
        lastRenderedState: e,
      }),
      (n.queue = l),
      (n = rd.bind(null, ut, l)),
      (l.dispatch = n),
      (l = zr(!1)),
      (o = Lr.bind(null, ut, !1, l.queue)),
      (l = ue()),
      (u = { state: e, dispatch: null, action: t, pending: null }),
      (l.queue = u),
      (n = G0.bind(null, ut, u, o, n)),
      (u.dispatch = n),
      (l.memoizedState = t),
      [e, n, !1]
    );
  }
  function Zh(t) {
    var e = Ht();
    return Kh(e, St, t);
  }
  function Kh(t, e, n) {
    if (
      ((e = Or(t, e, Gh)[0]),
      (t = ms(an)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var l = Hi(e);
      } catch (p) {
        throw p === wi ? rs : p;
      }
    else l = e;
    e = Ht();
    var u = e.queue,
      o = u.dispatch;
    return (
      n !== e.memoizedState &&
        ((ut.flags |= 2048), ja(9, ps(), X0.bind(null, u, n), null)),
      [l, o, t]
    );
  }
  function X0(t, e) {
    t.action = e;
  }
  function Qh(t) {
    var e = Ht(),
      n = St;
    if (n !== null) return Kh(e, n, t);
    Ht(), (e = e.memoizedState), (n = Ht());
    var l = n.queue.dispatch;
    return (n.memoizedState = t), [e, l, !1];
  }
  function ja(t, e, n, l) {
    return (
      (t = { tag: t, create: n, deps: l, inst: e, next: null }),
      (e = ut.updateQueue),
      e === null && ((e = Dr()), (ut.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((l = n.next), (n.next = t), (t.next = l), (e.lastEffect = t)),
      t
    );
  }
  function ps() {
    return { destroy: void 0, resource: void 0 };
  }
  function Ph() {
    return Ht().memoizedState;
  }
  function ys(t, e, n, l) {
    var u = ue();
    (l = l === void 0 ? null : l),
      (ut.flags |= t),
      (u.memoizedState = ja(1 | e, ps(), n, l));
  }
  function ji(t, e, n, l) {
    var u = Ht();
    l = l === void 0 ? null : l;
    var o = u.memoizedState.inst;
    St !== null && l !== null && xr(l, St.memoizedState.deps)
      ? (u.memoizedState = ja(e, o, n, l))
      : ((ut.flags |= t), (u.memoizedState = ja(1 | e, o, n, l)));
  }
  function kh(t, e) {
    ys(8390656, 8, t, e);
  }
  function Jh(t, e) {
    ji(2048, 8, t, e);
  }
  function Fh(t, e) {
    return ji(4, 2, t, e);
  }
  function $h(t, e) {
    return ji(4, 4, t, e);
  }
  function Wh(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Ih(t, e, n) {
    (n = n != null ? n.concat([t]) : null), ji(4, 4, Wh.bind(null, e, t), n);
  }
  function Ur() {}
  function td(t, e) {
    var n = Ht();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    return e !== null && xr(e, l[1]) ? l[0] : ((n.memoizedState = [t, e]), t);
  }
  function ed(t, e) {
    var n = Ht();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    if (e !== null && xr(e, l[1])) return l[0];
    if (((l = t()), ia)) {
      gn(!0);
      try {
        t();
      } finally {
        gn(!1);
      }
    }
    return (n.memoizedState = [l, e]), l;
  }
  function _r(t, e, n) {
    return n === void 0 || (En & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = im()), (ut.lanes |= t), (zn |= t), n);
  }
  function nd(t, e, n, l) {
    return de(n, e)
      ? n
      : Na.current !== null
        ? ((t = _r(t, n, l)), de(t, e) || (Zt = !0), t)
        : (En & 42) === 0
          ? ((Zt = !0), (t.memoizedState = n))
          : ((t = im()), (ut.lanes |= t), (zn |= t), e);
  }
  function ad(t, e, n, l, u) {
    var o = X.p;
    X.p = o !== 0 && 8 > o ? o : 8;
    var p = N.T,
      v = {};
    (N.T = v), Lr(t, !1, e, n);
    try {
      var T = u(),
        C = N.S;
      if (
        (C !== null && C(v, T),
        T !== null && typeof T == "object" && typeof T.then == "function")
      ) {
        var B = j0(T, l);
        qi(t, e, B, ve(t));
      } else qi(t, e, l, ve(t));
    } catch (j) {
      qi(t, e, { then: function () {}, status: "rejected", reason: j }, ve());
    } finally {
      (X.p = o), (N.T = p);
    }
  }
  function Z0() {}
  function Br(t, e, n, l) {
    if (t.tag !== 5) throw Error(r(476));
    var u = id(t).queue;
    ad(
      t,
      u,
      e,
      k,
      n === null
        ? Z0
        : function () {
            return ld(t), n(l);
          }
    );
  }
  function id(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: k,
      baseState: k,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: an,
        lastRenderedState: k,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: an,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function ld(t) {
    var e = id(t).next.queue;
    qi(t, e, {}, ve());
  }
  function Nr() {
    return It(il);
  }
  function sd() {
    return Ht().memoizedState;
  }
  function ud() {
    return Ht().memoizedState;
  }
  function K0(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = ve();
          t = xn(n);
          var l = An(e, t, n);
          l !== null && (Se(l, e, n), _i(l, e, n)),
            (e = { cache: hr() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function Q0(t, e, n) {
    var l = ve();
    (n = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      gs(t)
        ? od(e, n)
        : ((n = nr(t, e, n, l)), n !== null && (Se(n, t, l), cd(n, e, l)));
  }
  function rd(t, e, n) {
    var l = ve();
    qi(t, e, n, l);
  }
  function qi(t, e, n, l) {
    var u = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (gs(t)) od(e, u);
    else {
      var o = t.alternate;
      if (
        t.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = e.lastRenderedReducer), o !== null)
      )
        try {
          var p = e.lastRenderedState,
            v = o(p, n);
          if (((u.hasEagerState = !0), (u.eagerState = v), de(v, p)))
            return ts(t, e, u, 0), At === null && Il(), !1;
        } catch {
        } finally {
        }
      if (((n = nr(t, e, u, l)), n !== null))
        return Se(n, t, l), cd(n, e, l), !0;
    }
    return !1;
  }
  function Lr(t, e, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: yo(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      gs(t))
    ) {
      if (e) throw Error(r(479));
    } else (e = nr(t, n, l, 2)), e !== null && Se(e, t, 2);
  }
  function gs(t) {
    var e = t.alternate;
    return t === ut || (e !== null && e === ut);
  }
  function od(t, e) {
    La = fs = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e);
  }
  function cd(t, e, n) {
    if ((n & 4194048) !== 0) {
      var l = e.lanes;
      (l &= t.pendingLanes), (n |= l), (e.lanes = n), vf(t, n);
    }
  }
  var vs = {
      readContext: It,
      use: ds,
      useCallback: _t,
      useContext: _t,
      useEffect: _t,
      useImperativeHandle: _t,
      useLayoutEffect: _t,
      useInsertionEffect: _t,
      useMemo: _t,
      useReducer: _t,
      useRef: _t,
      useState: _t,
      useDebugValue: _t,
      useDeferredValue: _t,
      useTransition: _t,
      useSyncExternalStore: _t,
      useId: _t,
      useHostTransitionStatus: _t,
      useFormState: _t,
      useActionState: _t,
      useOptimistic: _t,
      useMemoCache: _t,
      useCacheRefresh: _t,
    },
    fd = {
      readContext: It,
      use: ds,
      useCallback: function (t, e) {
        return (ue().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: It,
      useEffect: kh,
      useImperativeHandle: function (t, e, n) {
        (n = n != null ? n.concat([t]) : null),
          ys(4194308, 4, Wh.bind(null, e, t), n);
      },
      useLayoutEffect: function (t, e) {
        return ys(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        ys(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = ue();
        e = e === void 0 ? null : e;
        var l = t();
        if (ia) {
          gn(!0);
          try {
            t();
          } finally {
            gn(!1);
          }
        }
        return (n.memoizedState = [l, e]), l;
      },
      useReducer: function (t, e, n) {
        var l = ue();
        if (n !== void 0) {
          var u = n(e);
          if (ia) {
            gn(!0);
            try {
              n(e);
            } finally {
              gn(!1);
            }
          }
        } else u = e;
        return (
          (l.memoizedState = l.baseState = u),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: u,
          }),
          (l.queue = t),
          (t = t.dispatch = Q0.bind(null, ut, t)),
          [l.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = ue();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = zr(t);
        var e = t.queue,
          n = rd.bind(null, ut, e);
        return (e.dispatch = n), [t.memoizedState, n];
      },
      useDebugValue: Ur,
      useDeferredValue: function (t, e) {
        var n = ue();
        return _r(n, t, e);
      },
      useTransition: function () {
        var t = zr(!1);
        return (
          (t = ad.bind(null, ut, t.queue, !0, !1)),
          (ue().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var l = ut,
          u = ue();
        if (pt) {
          if (n === void 0) throw Error(r(407));
          n = n();
        } else {
          if (((n = e()), At === null)) throw Error(r(349));
          (ft & 124) !== 0 || wh(l, e, n);
        }
        u.memoizedState = n;
        var o = { value: n, getSnapshot: e };
        return (
          (u.queue = o),
          kh(_h.bind(null, l, o, t), [t]),
          (l.flags |= 2048),
          ja(9, ps(), Uh.bind(null, l, o, n, e), null),
          n
        );
      },
      useId: function () {
        var t = ue(),
          e = At.identifierPrefix;
        if (pt) {
          var n = tn,
            l = Ie;
          (n = (l & ~(1 << (32 - he(l) - 1))).toString(32) + n),
            (e = "«" + e + "R" + n),
            (n = hs++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "»");
        } else (n = q0++), (e = "«" + e + "r" + n.toString(32) + "»");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Nr,
      useFormState: Xh,
      useActionState: Xh,
      useOptimistic: function (t) {
        var e = ue();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = Lr.bind(null, ut, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: Cr,
      useCacheRefresh: function () {
        return (ue().memoizedState = K0.bind(null, ut));
      },
    },
    hd = {
      readContext: It,
      use: ds,
      useCallback: td,
      useContext: It,
      useEffect: Jh,
      useImperativeHandle: Ih,
      useInsertionEffect: Fh,
      useLayoutEffect: $h,
      useMemo: ed,
      useReducer: ms,
      useRef: Ph,
      useState: function () {
        return ms(an);
      },
      useDebugValue: Ur,
      useDeferredValue: function (t, e) {
        var n = Ht();
        return nd(n, St.memoizedState, t, e);
      },
      useTransition: function () {
        var t = ms(an)[0],
          e = Ht().memoizedState;
        return [typeof t == "boolean" ? t : Hi(t), e];
      },
      useSyncExternalStore: zh,
      useId: sd,
      useHostTransitionStatus: Nr,
      useFormState: Zh,
      useActionState: Zh,
      useOptimistic: function (t, e) {
        var n = Ht();
        return Lh(n, St, t, e);
      },
      useMemoCache: Cr,
      useCacheRefresh: ud,
    },
    P0 = {
      readContext: It,
      use: ds,
      useCallback: td,
      useContext: It,
      useEffect: Jh,
      useImperativeHandle: Ih,
      useInsertionEffect: Fh,
      useLayoutEffect: $h,
      useMemo: ed,
      useReducer: Vr,
      useRef: Ph,
      useState: function () {
        return Vr(an);
      },
      useDebugValue: Ur,
      useDeferredValue: function (t, e) {
        var n = Ht();
        return St === null ? _r(n, t, e) : nd(n, St.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Vr(an)[0],
          e = Ht().memoizedState;
        return [typeof t == "boolean" ? t : Hi(t), e];
      },
      useSyncExternalStore: zh,
      useId: sd,
      useHostTransitionStatus: Nr,
      useFormState: Qh,
      useActionState: Qh,
      useOptimistic: function (t, e) {
        var n = Ht();
        return St !== null
          ? Lh(n, St, t, e)
          : ((n.baseState = t), [t, n.queue.dispatch]);
      },
      useMemoCache: Cr,
      useCacheRefresh: ud,
    },
    qa = null,
    Yi = 0;
  function Ss(t) {
    var e = Yi;
    return (Yi += 1), qa === null && (qa = []), Ah(qa, t, e);
  }
  function Gi(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function bs(t, e) {
    throw e.$$typeof === S
      ? Error(r(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          r(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function dd(t) {
    var e = t._init;
    return e(t._payload);
  }
  function md(t) {
    function e(R, A) {
      if (t) {
        var D = R.deletions;
        D === null ? ((R.deletions = [A]), (R.flags |= 16)) : D.push(A);
      }
    }
    function n(R, A) {
      if (!t) return null;
      for (; A !== null; ) e(R, A), (A = A.sibling);
      return null;
    }
    function l(R) {
      for (var A = new Map(); R !== null; )
        R.key !== null ? A.set(R.key, R) : A.set(R.index, R), (R = R.sibling);
      return A;
    }
    function u(R, A) {
      return (R = We(R, A)), (R.index = 0), (R.sibling = null), R;
    }
    function o(R, A, D) {
      return (
        (R.index = D),
        t
          ? ((D = R.alternate),
            D !== null
              ? ((D = D.index), D < A ? ((R.flags |= 67108866), A) : D)
              : ((R.flags |= 67108866), A))
          : ((R.flags |= 1048576), A)
      );
    }
    function p(R) {
      return t && R.alternate === null && (R.flags |= 67108866), R;
    }
    function v(R, A, D, H) {
      return A === null || A.tag !== 6
        ? ((A = ir(D, R.mode, H)), (A.return = R), A)
        : ((A = u(A, D)), (A.return = R), A);
    }
    function T(R, A, D, H) {
      var Q = D.type;
      return Q === M
        ? B(R, A, D.props.children, H, D.key)
        : A !== null &&
            (A.elementType === Q ||
              (typeof Q == "object" &&
                Q !== null &&
                Q.$$typeof === P &&
                dd(Q) === A.type))
          ? ((A = u(A, D.props)), Gi(A, D), (A.return = R), A)
          : ((A = ns(D.type, D.key, D.props, null, R.mode, H)),
            Gi(A, D),
            (A.return = R),
            A);
    }
    function C(R, A, D, H) {
      return A === null ||
        A.tag !== 4 ||
        A.stateNode.containerInfo !== D.containerInfo ||
        A.stateNode.implementation !== D.implementation
        ? ((A = lr(D, R.mode, H)), (A.return = R), A)
        : ((A = u(A, D.children || [])), (A.return = R), A);
    }
    function B(R, A, D, H, Q) {
      return A === null || A.tag !== 7
        ? ((A = Fn(D, R.mode, H, Q)), (A.return = R), A)
        : ((A = u(A, D)), (A.return = R), A);
    }
    function j(R, A, D) {
      if (
        (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
      )
        return (A = ir("" + A, R.mode, D)), (A.return = R), A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case b:
            return (
              (D = ns(A.type, A.key, A.props, null, R.mode, D)),
              Gi(D, A),
              (D.return = R),
              D
            );
          case E:
            return (A = lr(A, R.mode, D)), (A.return = R), A;
          case P:
            var H = A._init;
            return (A = H(A._payload)), j(R, A, D);
        }
        if (Pt(A) || qt(A))
          return (A = Fn(A, R.mode, D, null)), (A.return = R), A;
        if (typeof A.then == "function") return j(R, Ss(A), D);
        if (A.$$typeof === L) return j(R, ss(R, A), D);
        bs(R, A);
      }
      return null;
    }
    function z(R, A, D, H) {
      var Q = A !== null ? A.key : null;
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return Q !== null ? null : v(R, A, "" + D, H);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case b:
            return D.key === Q ? T(R, A, D, H) : null;
          case E:
            return D.key === Q ? C(R, A, D, H) : null;
          case P:
            return (Q = D._init), (D = Q(D._payload)), z(R, A, D, H);
        }
        if (Pt(D) || qt(D)) return Q !== null ? null : B(R, A, D, H, null);
        if (typeof D.then == "function") return z(R, A, Ss(D), H);
        if (D.$$typeof === L) return z(R, A, ss(R, D), H);
        bs(R, D);
      }
      return null;
    }
    function w(R, A, D, H, Q) {
      if (
        (typeof H == "string" && H !== "") ||
        typeof H == "number" ||
        typeof H == "bigint"
      )
        return (R = R.get(D) || null), v(A, R, "" + H, Q);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case b:
            return (
              (R = R.get(H.key === null ? D : H.key) || null), T(A, R, H, Q)
            );
          case E:
            return (
              (R = R.get(H.key === null ? D : H.key) || null), C(A, R, H, Q)
            );
          case P:
            var rt = H._init;
            return (H = rt(H._payload)), w(R, A, D, H, Q);
        }
        if (Pt(H) || qt(H)) return (R = R.get(D) || null), B(A, R, H, Q, null);
        if (typeof H.then == "function") return w(R, A, D, Ss(H), Q);
        if (H.$$typeof === L) return w(R, A, D, ss(A, H), Q);
        bs(A, H);
      }
      return null;
    }
    function et(R, A, D, H) {
      for (
        var Q = null, rt = null, F = A, I = (A = 0), Qt = null;
        F !== null && I < D.length;
        I++
      ) {
        F.index > I ? ((Qt = F), (F = null)) : (Qt = F.sibling);
        var dt = z(R, F, D[I], H);
        if (dt === null) {
          F === null && (F = Qt);
          break;
        }
        t && F && dt.alternate === null && e(R, F),
          (A = o(dt, A, I)),
          rt === null ? (Q = dt) : (rt.sibling = dt),
          (rt = dt),
          (F = Qt);
      }
      if (I === D.length) return n(R, F), pt && Wn(R, I), Q;
      if (F === null) {
        for (; I < D.length; I++)
          (F = j(R, D[I], H)),
            F !== null &&
              ((A = o(F, A, I)),
              rt === null ? (Q = F) : (rt.sibling = F),
              (rt = F));
        return pt && Wn(R, I), Q;
      }
      for (F = l(F); I < D.length; I++)
        (Qt = w(F, R, I, D[I], H)),
          Qt !== null &&
            (t &&
              Qt.alternate !== null &&
              F.delete(Qt.key === null ? I : Qt.key),
            (A = o(Qt, A, I)),
            rt === null ? (Q = Qt) : (rt.sibling = Qt),
            (rt = Qt));
      return (
        t &&
          F.forEach(function (qn) {
            return e(R, qn);
          }),
        pt && Wn(R, I),
        Q
      );
    }
    function W(R, A, D, H) {
      if (D == null) throw Error(r(151));
      for (
        var Q = null, rt = null, F = A, I = (A = 0), Qt = null, dt = D.next();
        F !== null && !dt.done;
        I++, dt = D.next()
      ) {
        F.index > I ? ((Qt = F), (F = null)) : (Qt = F.sibling);
        var qn = z(R, F, dt.value, H);
        if (qn === null) {
          F === null && (F = Qt);
          break;
        }
        t && F && qn.alternate === null && e(R, F),
          (A = o(qn, A, I)),
          rt === null ? (Q = qn) : (rt.sibling = qn),
          (rt = qn),
          (F = Qt);
      }
      if (dt.done) return n(R, F), pt && Wn(R, I), Q;
      if (F === null) {
        for (; !dt.done; I++, dt = D.next())
          (dt = j(R, dt.value, H)),
            dt !== null &&
              ((A = o(dt, A, I)),
              rt === null ? (Q = dt) : (rt.sibling = dt),
              (rt = dt));
        return pt && Wn(R, I), Q;
      }
      for (F = l(F); !dt.done; I++, dt = D.next())
        (dt = w(F, R, I, dt.value, H)),
          dt !== null &&
            (t &&
              dt.alternate !== null &&
              F.delete(dt.key === null ? I : dt.key),
            (A = o(dt, A, I)),
            rt === null ? (Q = dt) : (rt.sibling = dt),
            (rt = dt));
      return (
        t &&
          F.forEach(function (k1) {
            return e(R, k1);
          }),
        pt && Wn(R, I),
        Q
      );
    }
    function Tt(R, A, D, H) {
      if (
        (typeof D == "object" &&
          D !== null &&
          D.type === M &&
          D.key === null &&
          (D = D.props.children),
        typeof D == "object" && D !== null)
      ) {
        switch (D.$$typeof) {
          case b:
            t: {
              for (var Q = D.key; A !== null; ) {
                if (A.key === Q) {
                  if (((Q = D.type), Q === M)) {
                    if (A.tag === 7) {
                      n(R, A.sibling),
                        (H = u(A, D.props.children)),
                        (H.return = R),
                        (R = H);
                      break t;
                    }
                  } else if (
                    A.elementType === Q ||
                    (typeof Q == "object" &&
                      Q !== null &&
                      Q.$$typeof === P &&
                      dd(Q) === A.type)
                  ) {
                    n(R, A.sibling),
                      (H = u(A, D.props)),
                      Gi(H, D),
                      (H.return = R),
                      (R = H);
                    break t;
                  }
                  n(R, A);
                  break;
                } else e(R, A);
                A = A.sibling;
              }
              D.type === M
                ? ((H = Fn(D.props.children, R.mode, H, D.key)),
                  (H.return = R),
                  (R = H))
                : ((H = ns(D.type, D.key, D.props, null, R.mode, H)),
                  Gi(H, D),
                  (H.return = R),
                  (R = H));
            }
            return p(R);
          case E:
            t: {
              for (Q = D.key; A !== null; ) {
                if (A.key === Q)
                  if (
                    A.tag === 4 &&
                    A.stateNode.containerInfo === D.containerInfo &&
                    A.stateNode.implementation === D.implementation
                  ) {
                    n(R, A.sibling),
                      (H = u(A, D.children || [])),
                      (H.return = R),
                      (R = H);
                    break t;
                  } else {
                    n(R, A);
                    break;
                  }
                else e(R, A);
                A = A.sibling;
              }
              (H = lr(D, R.mode, H)), (H.return = R), (R = H);
            }
            return p(R);
          case P:
            return (Q = D._init), (D = Q(D._payload)), Tt(R, A, D, H);
        }
        if (Pt(D)) return et(R, A, D, H);
        if (qt(D)) {
          if (((Q = qt(D)), typeof Q != "function")) throw Error(r(150));
          return (D = Q.call(D)), W(R, A, D, H);
        }
        if (typeof D.then == "function") return Tt(R, A, Ss(D), H);
        if (D.$$typeof === L) return Tt(R, A, ss(R, D), H);
        bs(R, D);
      }
      return (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
        ? ((D = "" + D),
          A !== null && A.tag === 6
            ? (n(R, A.sibling), (H = u(A, D)), (H.return = R), (R = H))
            : (n(R, A), (H = ir(D, R.mode, H)), (H.return = R), (R = H)),
          p(R))
        : n(R, A);
    }
    return function (R, A, D, H) {
      try {
        Yi = 0;
        var Q = Tt(R, A, D, H);
        return (qa = null), Q;
      } catch (F) {
        if (F === wi || F === rs) throw F;
        var rt = me(29, F, null, R.mode);
        return (rt.lanes = H), (rt.return = R), rt;
      } finally {
      }
    };
  }
  var Ya = md(!0),
    pd = md(!1),
    Me = q(null),
    je = null;
  function Rn(t) {
    var e = t.alternate;
    Z(Gt, Gt.current & 1),
      Z(Me, t),
      je === null &&
        (e === null || Na.current !== null || e.memoizedState !== null) &&
        (je = t);
  }
  function yd(t) {
    if (t.tag === 22) {
      if ((Z(Gt, Gt.current), Z(Me, t), je === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (je = t);
      }
    } else Mn();
  }
  function Mn() {
    Z(Gt, Gt.current), Z(Me, Me.current);
  }
  function ln(t) {
    K(Me), je === t && (je = null), K(Gt);
  }
  var Gt = q(0);
  function Ts(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || Co(n))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  function Hr(t, e, n, l) {
    (e = t.memoizedState),
      (n = n(l, e)),
      (n = n == null ? e : g({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var jr = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var l = ve(),
        u = xn(l);
      (u.payload = e),
        n != null && (u.callback = n),
        (e = An(t, u, l)),
        e !== null && (Se(e, t, l), _i(e, t, l));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var l = ve(),
        u = xn(l);
      (u.tag = 1),
        (u.payload = e),
        n != null && (u.callback = n),
        (e = An(t, u, l)),
        e !== null && (Se(e, t, l), _i(e, t, l));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = ve(),
        l = xn(n);
      (l.tag = 2),
        e != null && (l.callback = e),
        (e = An(t, l, n)),
        e !== null && (Se(e, t, n), _i(e, t, n));
    },
  };
  function gd(t, e, n, l, u, o, p) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(l, o, p)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Ei(n, l) || !Ei(u, o)
          : !0
    );
  }
  function vd(t, e, n, l) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, l),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, l),
      e.state !== t && jr.enqueueReplaceState(e, e.state, null);
  }
  function la(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var l in e) l !== "ref" && (n[l] = e[l]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = g({}, n));
      for (var u in t) n[u] === void 0 && (n[u] = t[u]);
    }
    return n;
  }
  var xs =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function Sd(t) {
    xs(t);
  }
  function bd(t) {
    console.error(t);
  }
  function Td(t) {
    xs(t);
  }
  function As(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function xd(t, e, n) {
    try {
      var l = t.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function qr(t, e, n) {
    return (
      (n = xn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        As(t, e);
      }),
      n
    );
  }
  function Ad(t) {
    return (t = xn(t)), (t.tag = 3), t;
  }
  function Ed(t, e, n, l) {
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var o = l.value;
      (t.payload = function () {
        return u(o);
      }),
        (t.callback = function () {
          xd(e, n, l);
        });
    }
    var p = n.stateNode;
    p !== null &&
      typeof p.componentDidCatch == "function" &&
      (t.callback = function () {
        xd(e, n, l),
          typeof u != "function" &&
            (wn === null ? (wn = new Set([this])) : wn.add(this));
        var v = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: v !== null ? v : "",
        });
      });
  }
  function k0(t, e, n, l, u) {
    if (
      ((n.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && Oi(e, n, u, !0),
        (n = Me.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              je === null ? co() : n.alternate === null && wt === 0 && (wt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = u),
              l === pr
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([l])) : e.add(l),
                  ho(t, l, u)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === pr
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([l])) : n.add(l)),
                  ho(t, l, u)),
              !1
            );
        }
        throw Error(r(435, n.tag));
      }
      return ho(t, l, u), co(), !1;
    }
    if (pt)
      return (
        (e = Me.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = u),
            l !== rr && ((t = Error(r(422), { cause: l })), Ci(xe(t, n))))
          : (l !== rr && ((e = Error(r(423), { cause: l })), Ci(xe(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (u &= -u),
            (t.lanes |= u),
            (l = xe(l, n)),
            (u = qr(t.stateNode, l, u)),
            vr(t, u),
            wt !== 4 && (wt = 2)),
        !1
      );
    var o = Error(r(520), { cause: l });
    if (
      ((o = xe(o, n)),
      Ji === null ? (Ji = [o]) : Ji.push(o),
      wt !== 4 && (wt = 2),
      e === null)
    )
      return !0;
    (l = xe(l, n)), (n = e);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = u & -u),
            (n.lanes |= t),
            (t = qr(n.stateNode, l, t)),
            vr(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (o = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (o !== null &&
                  typeof o.componentDidCatch == "function" &&
                  (wn === null || !wn.has(o)))))
          )
            return (
              (n.flags |= 65536),
              (u &= -u),
              (n.lanes |= u),
              (u = Ad(u)),
              Ed(u, t, n, l),
              vr(n, u),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Rd = Error(r(461)),
    Zt = !1;
  function kt(t, e, n, l) {
    e.child = t === null ? pd(e, null, n, l) : Ya(e, t.child, n, l);
  }
  function Md(t, e, n, l, u) {
    n = n.render;
    var o = e.ref;
    if ("ref" in l) {
      var p = {};
      for (var v in l) v !== "ref" && (p[v] = l[v]);
    } else p = l;
    return (
      na(e),
      (l = Ar(t, e, n, p, o, u)),
      (v = Er()),
      t !== null && !Zt
        ? (Rr(t, e, u), sn(t, e, u))
        : (pt && v && sr(e), (e.flags |= 1), kt(t, e, l, u), e.child)
    );
  }
  function Dd(t, e, n, l, u) {
    if (t === null) {
      var o = n.type;
      return typeof o == "function" &&
        !ar(o) &&
        o.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = o), Cd(t, e, o, l, u))
        : ((t = ns(n.type, null, l, e, e.mode, u)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((o = t.child), !kr(t, u))) {
      var p = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Ei), n(p, l) && t.ref === e.ref)
      )
        return sn(t, e, u);
    }
    return (
      (e.flags |= 1),
      (t = We(o, l)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Cd(t, e, n, l, u) {
    if (t !== null) {
      var o = t.memoizedProps;
      if (Ei(o, l) && t.ref === e.ref)
        if (((Zt = !1), (e.pendingProps = l = o), kr(t, u)))
          (t.flags & 131072) !== 0 && (Zt = !0);
        else return (e.lanes = t.lanes), sn(t, e, u);
    }
    return Yr(t, e, n, l, u);
  }
  function Od(t, e, n) {
    var l = e.pendingProps,
      u = l.children,
      o = t !== null ? t.memoizedState : null;
    if (l.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((l = o !== null ? o.baseLanes | n : n), t !== null)) {
          for (u = e.child = t.child, o = 0; u !== null; )
            (o = o | u.lanes | u.childLanes), (u = u.sibling);
          e.childLanes = o & ~l;
        } else (e.childLanes = 0), (e.child = null);
        return Vd(t, e, l, n);
      }
      if ((n & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && us(e, o !== null ? o.cachePool : null),
          o !== null ? Ch(e, o) : br(),
          yd(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          Vd(t, e, o !== null ? o.baseLanes | n : n, n)
        );
    } else
      o !== null
        ? (us(e, o.cachePool), Ch(e, o), Mn(), (e.memoizedState = null))
        : (t !== null && us(e, null), br(), Mn());
    return kt(t, e, u, n), e.child;
  }
  function Vd(t, e, n, l) {
    var u = mr();
    return (
      (u = u === null ? null : { parent: Yt._currentValue, pool: u }),
      (e.memoizedState = { baseLanes: n, cachePool: u }),
      t !== null && us(e, null),
      br(),
      yd(e),
      t !== null && Oi(t, e, l, !0),
      null
    );
  }
  function Es(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(r(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Yr(t, e, n, l, u) {
    return (
      na(e),
      (n = Ar(t, e, n, l, void 0, u)),
      (l = Er()),
      t !== null && !Zt
        ? (Rr(t, e, u), sn(t, e, u))
        : (pt && l && sr(e), (e.flags |= 1), kt(t, e, n, u), e.child)
    );
  }
  function zd(t, e, n, l, u, o) {
    return (
      na(e),
      (e.updateQueue = null),
      (n = Vh(e, l, n, u)),
      Oh(t),
      (l = Er()),
      t !== null && !Zt
        ? (Rr(t, e, o), sn(t, e, o))
        : (pt && l && sr(e), (e.flags |= 1), kt(t, e, n, o), e.child)
    );
  }
  function wd(t, e, n, l, u) {
    if ((na(e), e.stateNode === null)) {
      var o = za,
        p = n.contextType;
      typeof p == "object" && p !== null && (o = It(p)),
        (o = new n(l, o)),
        (e.memoizedState =
          o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = jr),
        (e.stateNode = o),
        (o._reactInternals = e),
        (o = e.stateNode),
        (o.props = l),
        (o.state = e.memoizedState),
        (o.refs = {}),
        yr(e),
        (p = n.contextType),
        (o.context = typeof p == "object" && p !== null ? It(p) : za),
        (o.state = e.memoizedState),
        (p = n.getDerivedStateFromProps),
        typeof p == "function" && (Hr(e, n, p, l), (o.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function" ||
          (typeof o.UNSAFE_componentWillMount != "function" &&
            typeof o.componentWillMount != "function") ||
          ((p = o.state),
          typeof o.componentWillMount == "function" && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == "function" &&
            o.UNSAFE_componentWillMount(),
          p !== o.state && jr.enqueueReplaceState(o, o.state, null),
          Ni(e, l, o, u),
          Bi(),
          (o.state = e.memoizedState)),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        (l = !0);
    } else if (t === null) {
      o = e.stateNode;
      var v = e.memoizedProps,
        T = la(n, v);
      o.props = T;
      var C = o.context,
        B = n.contextType;
      (p = za), typeof B == "object" && B !== null && (p = It(B));
      var j = n.getDerivedStateFromProps;
      (B =
        typeof j == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function"),
        (v = e.pendingProps !== v),
        B ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((v || C !== p) && vd(e, o, l, p)),
        (Tn = !1);
      var z = e.memoizedState;
      (o.state = z),
        Ni(e, l, o, u),
        Bi(),
        (C = e.memoizedState),
        v || z !== C || Tn
          ? (typeof j == "function" && (Hr(e, n, j, l), (C = e.memoizedState)),
            (T = Tn || gd(e, n, T, l, z, C, p))
              ? (B ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = l),
                (e.memoizedState = C)),
            (o.props = l),
            (o.state = C),
            (o.context = p),
            (l = T))
          : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
            (l = !1));
    } else {
      (o = e.stateNode),
        gr(t, e),
        (p = e.memoizedProps),
        (B = la(n, p)),
        (o.props = B),
        (j = e.pendingProps),
        (z = o.context),
        (C = n.contextType),
        (T = za),
        typeof C == "object" && C !== null && (T = It(C)),
        (v = n.getDerivedStateFromProps),
        (C =
          typeof v == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function") ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((p !== j || z !== T) && vd(e, o, l, T)),
        (Tn = !1),
        (z = e.memoizedState),
        (o.state = z),
        Ni(e, l, o, u),
        Bi();
      var w = e.memoizedState;
      p !== j ||
      z !== w ||
      Tn ||
      (t !== null && t.dependencies !== null && ls(t.dependencies))
        ? (typeof v == "function" && (Hr(e, n, v, l), (w = e.memoizedState)),
          (B =
            Tn ||
            gd(e, n, B, l, z, w, T) ||
            (t !== null && t.dependencies !== null && ls(t.dependencies)))
            ? (C ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(l, w, T),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(l, w, T)),
              typeof o.componentDidUpdate == "function" && (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (p === t.memoizedProps && z === t.memoizedState) ||
                (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (p === t.memoizedProps && z === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = l),
              (e.memoizedState = w)),
          (o.props = l),
          (o.state = w),
          (o.context = T),
          (l = B))
        : (typeof o.componentDidUpdate != "function" ||
            (p === t.memoizedProps && z === t.memoizedState) ||
            (e.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (p === t.memoizedProps && z === t.memoizedState) ||
            (e.flags |= 1024),
          (l = !1));
    }
    return (
      (o = l),
      Es(t, e),
      (l = (e.flags & 128) !== 0),
      o || l
        ? ((o = e.stateNode),
          (n =
            l && typeof n.getDerivedStateFromError != "function"
              ? null
              : o.render()),
          (e.flags |= 1),
          t !== null && l
            ? ((e.child = Ya(e, t.child, null, u)),
              (e.child = Ya(e, null, n, u)))
            : kt(t, e, n, u),
          (e.memoizedState = o.state),
          (t = e.child))
        : (t = sn(t, e, u)),
      t
    );
  }
  function Ud(t, e, n, l) {
    return Di(), (e.flags |= 256), kt(t, e, n, l), e.child;
  }
  var Gr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Xr(t) {
    return { baseLanes: t, cachePool: bh() };
  }
  function Zr(t, e, n) {
    return (t = t !== null ? t.childLanes & ~n : 0), e && (t |= De), t;
  }
  function _d(t, e, n) {
    var l = e.pendingProps,
      u = !1,
      o = (e.flags & 128) !== 0,
      p;
    if (
      ((p = o) ||
        (p =
          t !== null && t.memoizedState === null ? !1 : (Gt.current & 2) !== 0),
      p && ((u = !0), (e.flags &= -129)),
      (p = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (pt) {
        if ((u ? Rn(e) : Mn(), pt)) {
          var v = zt,
            T;
          if ((T = v)) {
            t: {
              for (T = v, v = He; T.nodeType !== 8; ) {
                if (!v) {
                  v = null;
                  break t;
                }
                if (((T = _e(T.nextSibling)), T === null)) {
                  v = null;
                  break t;
                }
              }
              v = T;
            }
            v !== null
              ? ((e.memoizedState = {
                  dehydrated: v,
                  treeContext: $n !== null ? { id: Ie, overflow: tn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (T = me(18, null, null, 0)),
                (T.stateNode = v),
                (T.return = e),
                (e.child = T),
                (ae = e),
                (zt = null),
                (T = !0))
              : (T = !1);
          }
          T || ta(e);
        }
        if (
          ((v = e.memoizedState),
          v !== null && ((v = v.dehydrated), v !== null))
        )
          return Co(v) ? (e.lanes = 32) : (e.lanes = 536870912), null;
        ln(e);
      }
      return (
        (v = l.children),
        (l = l.fallback),
        u
          ? (Mn(),
            (u = e.mode),
            (v = Rs({ mode: "hidden", children: v }, u)),
            (l = Fn(l, u, n, null)),
            (v.return = e),
            (l.return = e),
            (v.sibling = l),
            (e.child = v),
            (u = e.child),
            (u.memoizedState = Xr(n)),
            (u.childLanes = Zr(t, p, n)),
            (e.memoizedState = Gr),
            l)
          : (Rn(e), Kr(e, v))
      );
    }
    if (
      ((T = t.memoizedState), T !== null && ((v = T.dehydrated), v !== null))
    ) {
      if (o)
        e.flags & 256
          ? (Rn(e), (e.flags &= -257), (e = Qr(t, e, n)))
          : e.memoizedState !== null
            ? (Mn(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (Mn(),
              (u = l.fallback),
              (v = e.mode),
              (l = Rs({ mode: "visible", children: l.children }, v)),
              (u = Fn(u, v, n, null)),
              (u.flags |= 2),
              (l.return = e),
              (u.return = e),
              (l.sibling = u),
              (e.child = l),
              Ya(e, t.child, null, n),
              (l = e.child),
              (l.memoizedState = Xr(n)),
              (l.childLanes = Zr(t, p, n)),
              (e.memoizedState = Gr),
              (e = u));
      else if ((Rn(e), Co(v))) {
        if (((p = v.nextSibling && v.nextSibling.dataset), p)) var C = p.dgst;
        (p = C),
          (l = Error(r(419))),
          (l.stack = ""),
          (l.digest = p),
          Ci({ value: l, source: null, stack: null }),
          (e = Qr(t, e, n));
      } else if (
        (Zt || Oi(t, e, n, !1), (p = (n & t.childLanes) !== 0), Zt || p)
      ) {
        if (
          ((p = At),
          p !== null &&
            ((l = n & -n),
            (l = (l & 42) !== 0 ? 1 : Cu(l)),
            (l = (l & (p.suspendedLanes | n)) !== 0 ? 0 : l),
            l !== 0 && l !== T.retryLane))
        )
          throw ((T.retryLane = l), Va(t, l), Se(p, t, l), Rd);
        v.data === "$?" || co(), (e = Qr(t, e, n));
      } else
        v.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = T.treeContext),
            (zt = _e(v.nextSibling)),
            (ae = e),
            (pt = !0),
            (In = null),
            (He = !1),
            t !== null &&
              ((Ee[Re++] = Ie),
              (Ee[Re++] = tn),
              (Ee[Re++] = $n),
              (Ie = t.id),
              (tn = t.overflow),
              ($n = e)),
            (e = Kr(e, l.children)),
            (e.flags |= 4096));
      return e;
    }
    return u
      ? (Mn(),
        (u = l.fallback),
        (v = e.mode),
        (T = t.child),
        (C = T.sibling),
        (l = We(T, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = T.subtreeFlags & 65011712),
        C !== null ? (u = We(C, u)) : ((u = Fn(u, v, n, null)), (u.flags |= 2)),
        (u.return = e),
        (l.return = e),
        (l.sibling = u),
        (e.child = l),
        (l = u),
        (u = e.child),
        (v = t.child.memoizedState),
        v === null
          ? (v = Xr(n))
          : ((T = v.cachePool),
            T !== null
              ? ((C = Yt._currentValue),
                (T = T.parent !== C ? { parent: C, pool: C } : T))
              : (T = bh()),
            (v = { baseLanes: v.baseLanes | n, cachePool: T })),
        (u.memoizedState = v),
        (u.childLanes = Zr(t, p, n)),
        (e.memoizedState = Gr),
        l)
      : (Rn(e),
        (n = t.child),
        (t = n.sibling),
        (n = We(n, { mode: "visible", children: l.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((p = e.deletions),
          p === null ? ((e.deletions = [t]), (e.flags |= 16)) : p.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function Kr(t, e) {
    return (
      (e = Rs({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Rs(t, e) {
    return (
      (t = me(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function Qr(t, e, n) {
    return (
      Ya(e, t.child, null, n),
      (t = Kr(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Bd(t, e, n) {
    t.lanes |= e;
    var l = t.alternate;
    l !== null && (l.lanes |= e), cr(t.return, e, n);
  }
  function Pr(t, e, n, l, u) {
    var o = t.memoizedState;
    o === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: u,
        })
      : ((o.isBackwards = e),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = l),
        (o.tail = n),
        (o.tailMode = u));
  }
  function Nd(t, e, n) {
    var l = e.pendingProps,
      u = l.revealOrder,
      o = l.tail;
    if ((kt(t, e, l.children, n), (l = Gt.current), (l & 2) !== 0))
      (l = (l & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Bd(t, n, e);
          else if (t.tag === 19) Bd(t, n, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      l &= 1;
    }
    switch ((Z(Gt, l), u)) {
      case "forwards":
        for (n = e.child, u = null; n !== null; )
          (t = n.alternate),
            t !== null && Ts(t) === null && (u = n),
            (n = n.sibling);
        (n = u),
          n === null
            ? ((u = e.child), (e.child = null))
            : ((u = n.sibling), (n.sibling = null)),
          Pr(e, !1, u, n, o);
        break;
      case "backwards":
        for (n = null, u = e.child, e.child = null; u !== null; ) {
          if (((t = u.alternate), t !== null && Ts(t) === null)) {
            e.child = u;
            break;
          }
          (t = u.sibling), (u.sibling = n), (n = u), (u = t);
        }
        Pr(e, !0, n, null, o);
        break;
      case "together":
        Pr(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function sn(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (zn |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Oi(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(r(153));
    if (e.child !== null) {
      for (
        t = e.child, n = We(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (n = n.sibling = We(t, t.pendingProps)),
          (n.return = e);
      n.sibling = null;
    }
    return e.child;
  }
  function kr(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && ls(t)));
  }
  function J0(t, e, n) {
    switch (e.tag) {
      case 3:
        Mt(e, e.stateNode.containerInfo),
          bn(e, Yt, t.memoizedState.cache),
          Di();
        break;
      case 27:
      case 5:
        Au(e);
        break;
      case 4:
        Mt(e, e.stateNode.containerInfo);
        break;
      case 10:
        bn(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Rn(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
              ? _d(t, e, n)
              : (Rn(e), (t = sn(t, e, n)), t !== null ? t.sibling : null);
        Rn(e);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (
          ((l = (n & e.childLanes) !== 0),
          l || (Oi(t, e, n, !1), (l = (n & e.childLanes) !== 0)),
          u)
        ) {
          if (l) return Nd(t, e, n);
          e.flags |= 128;
        }
        if (
          ((u = e.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Z(Gt, Gt.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), Od(t, e, n);
      case 24:
        bn(e, Yt, t.memoizedState.cache);
    }
    return sn(t, e, n);
  }
  function Ld(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Zt = !0;
      else {
        if (!kr(t, n) && (e.flags & 128) === 0) return (Zt = !1), J0(t, e, n);
        Zt = (t.flags & 131072) !== 0;
      }
    else (Zt = !1), pt && (e.flags & 1048576) !== 0 && dh(e, is, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var l = e.elementType,
            u = l._init;
          if (((l = u(l._payload)), (e.type = l), typeof l == "function"))
            ar(l)
              ? ((t = la(l, t)), (e.tag = 1), (e = wd(null, e, l, t, n)))
              : ((e.tag = 0), (e = Yr(null, e, l, t, n)));
          else {
            if (l != null) {
              if (((u = l.$$typeof), u === J)) {
                (e.tag = 11), (e = Md(null, e, l, t, n));
                break t;
              } else if (u === lt) {
                (e.tag = 14), (e = Dd(null, e, l, t, n));
                break t;
              }
            }
            throw ((e = Ne(l) || l), Error(r(306, e, "")));
          }
        }
        return e;
      case 0:
        return Yr(t, e, e.type, e.pendingProps, n);
      case 1:
        return (l = e.type), (u = la(l, e.pendingProps)), wd(t, e, l, u, n);
      case 3:
        t: {
          if ((Mt(e, e.stateNode.containerInfo), t === null))
            throw Error(r(387));
          l = e.pendingProps;
          var o = e.memoizedState;
          (u = o.element), gr(t, e), Ni(e, l, null, n);
          var p = e.memoizedState;
          if (
            ((l = p.cache),
            bn(e, Yt, l),
            l !== o.cache && fr(e, [Yt], n, !0),
            Bi(),
            (l = p.element),
            o.isDehydrated)
          )
            if (
              ((o = { element: l, isDehydrated: !1, cache: p.cache }),
              (e.updateQueue.baseState = o),
              (e.memoizedState = o),
              e.flags & 256)
            ) {
              e = Ud(t, e, l, n);
              break t;
            } else if (l !== u) {
              (u = xe(Error(r(424)), e)), Ci(u), (e = Ud(t, e, l, n));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                zt = _e(t.firstChild),
                  ae = e,
                  pt = !0,
                  In = null,
                  He = !0,
                  n = pd(e, null, l, n),
                  e.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
            }
          else {
            if ((Di(), l === u)) {
              e = sn(t, e, n);
              break t;
            }
            kt(t, e, l, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Es(t, e),
          t === null
            ? (n = Ym(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : pt ||
                ((n = e.type),
                (t = e.pendingProps),
                (l = js(at.current).createElement(n)),
                (l[Wt] = e),
                (l[le] = t),
                Ft(l, n, t),
                Xt(l),
                (e.stateNode = l))
            : (e.memoizedState = Ym(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          Au(e),
          t === null &&
            pt &&
            ((l = e.stateNode = Hm(e.type, e.pendingProps, at.current)),
            (ae = e),
            (He = !0),
            (u = zt),
            Bn(e.type) ? ((Oo = u), (zt = _e(l.firstChild))) : (zt = u)),
          kt(t, e, e.pendingProps.children, n),
          Es(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            pt &&
            ((u = l = zt) &&
              ((l = A1(l, e.type, e.pendingProps, He)),
              l !== null
                ? ((e.stateNode = l),
                  (ae = e),
                  (zt = _e(l.firstChild)),
                  (He = !1),
                  (u = !0))
                : (u = !1)),
            u || ta(e)),
          Au(e),
          (u = e.type),
          (o = e.pendingProps),
          (p = t !== null ? t.memoizedProps : null),
          (l = o.children),
          Ro(u, o) ? (l = null) : p !== null && Ro(u, p) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((u = Ar(t, e, Y0, null, null, n)), (il._currentValue = u)),
          Es(t, e),
          kt(t, e, l, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            pt &&
            ((t = n = zt) &&
              ((n = E1(n, e.pendingProps, He)),
              n !== null
                ? ((e.stateNode = n), (ae = e), (zt = null), (t = !0))
                : (t = !1)),
            t || ta(e)),
          null
        );
      case 13:
        return _d(t, e, n);
      case 4:
        return (
          Mt(e, e.stateNode.containerInfo),
          (l = e.pendingProps),
          t === null ? (e.child = Ya(e, null, l, n)) : kt(t, e, l, n),
          e.child
        );
      case 11:
        return Md(t, e, e.type, e.pendingProps, n);
      case 7:
        return kt(t, e, e.pendingProps, n), e.child;
      case 8:
        return kt(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return kt(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return (
          (l = e.pendingProps),
          bn(e, e.type, l.value),
          kt(t, e, l.children, n),
          e.child
        );
      case 9:
        return (
          (u = e.type._context),
          (l = e.pendingProps.children),
          na(e),
          (u = It(u)),
          (l = l(u)),
          (e.flags |= 1),
          kt(t, e, l, n),
          e.child
        );
      case 14:
        return Dd(t, e, e.type, e.pendingProps, n);
      case 15:
        return Cd(t, e, e.type, e.pendingProps, n);
      case 19:
        return Nd(t, e, n);
      case 31:
        return (
          (l = e.pendingProps),
          (n = e.mode),
          (l = { mode: l.mode, children: l.children }),
          t === null
            ? ((n = Rs(l, n)),
              (n.ref = e.ref),
              (e.child = n),
              (n.return = e),
              (e = n))
            : ((n = We(t.child, l)),
              (n.ref = e.ref),
              (e.child = n),
              (n.return = e),
              (e = n)),
          e
        );
      case 22:
        return Od(t, e, n);
      case 24:
        return (
          na(e),
          (l = It(Yt)),
          t === null
            ? ((u = mr()),
              u === null &&
                ((u = At),
                (o = hr()),
                (u.pooledCache = o),
                o.refCount++,
                o !== null && (u.pooledCacheLanes |= n),
                (u = o)),
              (e.memoizedState = { parent: l, cache: u }),
              yr(e),
              bn(e, Yt, u))
            : ((t.lanes & n) !== 0 && (gr(t, e), Ni(e, null, null, n), Bi()),
              (u = t.memoizedState),
              (o = e.memoizedState),
              u.parent !== l
                ? ((u = { parent: l, cache: l }),
                  (e.memoizedState = u),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = u),
                  bn(e, Yt, l))
                : ((l = o.cache),
                  bn(e, Yt, l),
                  l !== u.cache && fr(e, [Yt], n, !0))),
          kt(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function un(t) {
    t.flags |= 4;
  }
  function Hd(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Qm(e))) {
      if (
        ((e = Me.current),
        e !== null &&
          ((ft & 4194048) === ft
            ? je !== null
            : ((ft & 62914560) !== ft && (ft & 536870912) === 0) || e !== je))
      )
        throw ((Ui = pr), Th);
      t.flags |= 8192;
    }
  }
  function Ms(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? yf() : 536870912), (t.lanes |= e), (Ka |= e));
  }
  function Xi(t, e) {
    if (!pt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), (e = e.sibling);
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), (n = n.sibling);
          l === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Ct(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      l = 0;
    if (e)
      for (var u = t.child; u !== null; )
        (n |= u.lanes | u.childLanes),
          (l |= u.subtreeFlags & 65011712),
          (l |= u.flags & 65011712),
          (u.return = t),
          (u = u.sibling);
    else
      for (u = t.child; u !== null; )
        (n |= u.lanes | u.childLanes),
          (l |= u.subtreeFlags),
          (l |= u.flags),
          (u.return = t),
          (u = u.sibling);
    return (t.subtreeFlags |= l), (t.childLanes = n), e;
  }
  function F0(t, e, n) {
    var l = e.pendingProps;
    switch ((ur(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ct(e), null;
      case 1:
        return Ct(e), null;
      case 3:
        return (
          (n = e.stateNode),
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          nn(Yt),
          yn(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (Mi(e)
              ? un(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), yh())),
          Ct(e),
          null
        );
      case 26:
        return (
          (n = e.memoizedState),
          t === null
            ? (un(e),
              n !== null ? (Ct(e), Hd(e, n)) : (Ct(e), (e.flags &= -16777217)))
            : n
              ? n !== t.memoizedState
                ? (un(e), Ct(e), Hd(e, n))
                : (Ct(e), (e.flags &= -16777217))
              : (t.memoizedProps !== l && un(e), Ct(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        Ll(e), (n = at.current);
        var u = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== l && un(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(r(166));
            return Ct(e), null;
          }
          (t = $.current),
            Mi(e) ? mh(e) : ((t = Hm(u, l, n)), (e.stateNode = t), un(e));
        }
        return Ct(e), null;
      case 5:
        if ((Ll(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== l && un(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(r(166));
            return Ct(e), null;
          }
          if (((t = $.current), Mi(e))) mh(e);
          else {
            switch (((u = js(at.current)), t)) {
              case 1:
                t = u.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                t = u.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    t = u.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    t = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    (t = u.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof l.is == "string"
                        ? u.createElement("select", { is: l.is })
                        : u.createElement("select")),
                      l.multiple
                        ? (t.multiple = !0)
                        : l.size && (t.size = l.size);
                    break;
                  default:
                    t =
                      typeof l.is == "string"
                        ? u.createElement(n, { is: l.is })
                        : u.createElement(n);
                }
            }
            (t[Wt] = e), (t[le] = l);
            t: for (u = e.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) t.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === e) break t;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === e) break t;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            e.stateNode = t;
            t: switch ((Ft(t, n, l), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!l.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && un(e);
          }
        }
        return Ct(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== l && un(e);
        else {
          if (typeof l != "string" && e.stateNode === null) throw Error(r(166));
          if (((t = at.current), Mi(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (l = null),
              (u = ae),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  l = u.memoizedProps;
              }
            (t[Wt] = e),
              (t = !!(
                t.nodeValue === n ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                zm(t.nodeValue, n)
              )),
              t || ta(e);
          } else (t = js(t).createTextNode(l)), (t[Wt] = e), (e.stateNode = t);
        }
        return Ct(e), null;
      case 13:
        if (
          ((l = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((u = Mi(e)), l !== null && l.dehydrated !== null)) {
            if (t === null) {
              if (!u) throw Error(r(318));
              if (
                ((u = e.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(r(317));
              u[Wt] = e;
            } else
              Di(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Ct(e), (u = !1);
          } else
            (u = yh()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = u),
              (u = !0);
          if (!u) return e.flags & 256 ? (ln(e), e) : (ln(e), null);
        }
        if ((ln(e), (e.flags & 128) !== 0)) return (e.lanes = n), e;
        if (
          ((n = l !== null), (t = t !== null && t.memoizedState !== null), n)
        ) {
          (l = e.child),
            (u = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (u = l.alternate.memoizedState.cachePool.pool);
          var o = null;
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (o = l.memoizedState.cachePool.pool),
            o !== u && (l.flags |= 2048);
        }
        return (
          n !== t && n && (e.child.flags |= 8192),
          Ms(e, e.updateQueue),
          Ct(e),
          null
        );
      case 4:
        return yn(), t === null && bo(e.stateNode.containerInfo), Ct(e), null;
      case 10:
        return nn(e.type), Ct(e), null;
      case 19:
        if ((K(Gt), (u = e.memoizedState), u === null)) return Ct(e), null;
        if (((l = (e.flags & 128) !== 0), (o = u.rendering), o === null))
          if (l) Xi(u, !1);
          else {
            if (wt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((o = Ts(t)), o !== null)) {
                  for (
                    e.flags |= 128,
                      Xi(u, !1),
                      t = o.updateQueue,
                      e.updateQueue = t,
                      Ms(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;

                  )
                    hh(n, t), (n = n.sibling);
                  return Z(Gt, (Gt.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            u.tail !== null &&
              Le() > Os &&
              ((e.flags |= 128), (l = !0), Xi(u, !1), (e.lanes = 4194304));
          }
        else {
          if (!l)
            if (((t = Ts(o)), t !== null)) {
              if (
                ((e.flags |= 128),
                (l = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Ms(e, t),
                Xi(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !o.alternate &&
                  !pt)
              )
                return Ct(e), null;
            } else
              2 * Le() - u.renderingStartTime > Os &&
                n !== 536870912 &&
                ((e.flags |= 128), (l = !0), Xi(u, !1), (e.lanes = 4194304));
          u.isBackwards
            ? ((o.sibling = e.child), (e.child = o))
            : ((t = u.last),
              t !== null ? (t.sibling = o) : (e.child = o),
              (u.last = o));
        }
        return u.tail !== null
          ? ((e = u.tail),
            (u.rendering = e),
            (u.tail = e.sibling),
            (u.renderingStartTime = Le()),
            (e.sibling = null),
            (t = Gt.current),
            Z(Gt, l ? (t & 1) | 2 : t & 1),
            e)
          : (Ct(e), null);
      case 22:
      case 23:
        return (
          ln(e),
          Tr(),
          (l = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== l && (e.flags |= 8192)
            : l && (e.flags |= 8192),
          l
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Ct(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Ct(e),
          (n = e.updateQueue),
          n !== null && Ms(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (l = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          l !== n && (e.flags |= 2048),
          t !== null && K(aa),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          nn(Yt),
          Ct(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function $0(t, e) {
    switch ((ur(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          nn(Yt),
          yn(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Ll(e), null;
      case 13:
        if (
          (ln(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(r(340));
          Di();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return K(Gt), null;
      case 4:
        return yn(), null;
      case 10:
        return nn(e.type), null;
      case 22:
      case 23:
        return (
          ln(e),
          Tr(),
          t !== null && K(aa),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return nn(Yt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function jd(t, e) {
    switch ((ur(e), e.tag)) {
      case 3:
        nn(Yt), yn();
        break;
      case 26:
      case 27:
      case 5:
        Ll(e);
        break;
      case 4:
        yn();
        break;
      case 13:
        ln(e);
        break;
      case 19:
        K(Gt);
        break;
      case 10:
        nn(e.type);
        break;
      case 22:
      case 23:
        ln(e), Tr(), t !== null && K(aa);
        break;
      case 24:
        nn(Yt);
    }
  }
  function Zi(t, e) {
    try {
      var n = e.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        n = u;
        do {
          if ((n.tag & t) === t) {
            l = void 0;
            var o = n.create,
              p = n.inst;
            (l = o()), (p.destroy = l);
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (v) {
      xt(e, e.return, v);
    }
  }
  function Dn(t, e, n) {
    try {
      var l = e.updateQueue,
        u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var o = u.next;
        l = o;
        do {
          if ((l.tag & t) === t) {
            var p = l.inst,
              v = p.destroy;
            if (v !== void 0) {
              (p.destroy = void 0), (u = e);
              var T = n,
                C = v;
              try {
                C();
              } catch (B) {
                xt(u, T, B);
              }
            }
          }
          l = l.next;
        } while (l !== o);
      }
    } catch (B) {
      xt(e, e.return, B);
    }
  }
  function qd(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Dh(e, n);
      } catch (l) {
        xt(t, t.return, l);
      }
    }
  }
  function Yd(t, e, n) {
    (n.props = la(t.type, t.memoizedProps)), (n.state = t.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (l) {
      xt(t, e, l);
    }
  }
  function Ki(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(l)) : (n.current = l);
      }
    } catch (u) {
      xt(t, e, u);
    }
  }
  function qe(t, e) {
    var n = t.ref,
      l = t.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (u) {
          xt(t, e, u);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (u) {
          xt(t, e, u);
        }
      else n.current = null;
  }
  function Gd(t) {
    var e = t.type,
      n = t.memoizedProps,
      l = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break t;
        case "img":
          n.src ? (l.src = n.src) : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (u) {
      xt(t, t.return, u);
    }
  }
  function Jr(t, e, n) {
    try {
      var l = t.stateNode;
      v1(l, t.type, n, e), (l[le] = e);
    } catch (u) {
      xt(t, t.return, u);
    }
  }
  function Xd(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Bn(t.type)) ||
      t.tag === 4
    );
  }
  function Fr(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Xd(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && Bn(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function $r(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      (t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(t, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = Hs));
    else if (
      l !== 4 &&
      (l === 27 && Bn(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for ($r(t, e, n), t = t.sibling; t !== null; )
        $r(t, e, n), (t = t.sibling);
  }
  function Ds(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (
      l !== 4 &&
      (l === 27 && Bn(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (Ds(t, e, n), t = t.sibling; t !== null; )
        Ds(t, e, n), (t = t.sibling);
  }
  function Zd(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var l = t.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      Ft(e, l, n), (e[Wt] = t), (e[le] = n);
    } catch (o) {
      xt(t, t.return, o);
    }
  }
  var rn = !1,
    Bt = !1,
    Wr = !1,
    Kd = typeof WeakSet == "function" ? WeakSet : Set,
    Kt = null;
  function W0(t, e) {
    if (((t = t.containerInfo), (Ao = Ks), (t = nh(t)), Fu(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var u = l.anchorOffset,
              o = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break t;
            }
            var p = 0,
              v = -1,
              T = -1,
              C = 0,
              B = 0,
              j = t,
              z = null;
            e: for (;;) {
              for (
                var w;
                j !== n || (u !== 0 && j.nodeType !== 3) || (v = p + u),
                  j !== o || (l !== 0 && j.nodeType !== 3) || (T = p + l),
                  j.nodeType === 3 && (p += j.nodeValue.length),
                  (w = j.firstChild) !== null;

              )
                (z = j), (j = w);
              for (;;) {
                if (j === t) break e;
                if (
                  (z === n && ++C === u && (v = p),
                  z === o && ++B === l && (T = p),
                  (w = j.nextSibling) !== null)
                )
                  break;
                (j = z), (z = j.parentNode);
              }
              j = w;
            }
            n = v === -1 || T === -1 ? null : { start: v, end: T };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Eo = { focusedElem: t, selectionRange: n }, Ks = !1, Kt = e;
      Kt !== null;

    )
      if (
        ((e = Kt), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = e), (Kt = t);
      else
        for (; Kt !== null; ) {
          switch (((e = Kt), (o = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && o !== null) {
                (t = void 0),
                  (n = e),
                  (u = o.memoizedProps),
                  (o = o.memoizedState),
                  (l = n.stateNode);
                try {
                  var et = la(n.type, u, n.elementType === n.type);
                  (t = l.getSnapshotBeforeUpdate(et, o)),
                    (l.__reactInternalSnapshotBeforeUpdate = t);
                } catch (W) {
                  xt(n, n.return, W);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  Do(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Do(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (Kt = t);
            break;
          }
          Kt = e.return;
        }
  }
  function Qd(t, e, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Cn(t, n), l & 4 && Zi(5, n);
        break;
      case 1:
        if ((Cn(t, n), l & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (p) {
              xt(n, n.return, p);
            }
          else {
            var u = la(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(u, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (p) {
              xt(n, n.return, p);
            }
          }
        l & 64 && qd(n), l & 512 && Ki(n, n.return);
        break;
      case 3:
        if ((Cn(t, n), l & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            Dh(t, e);
          } catch (p) {
            xt(n, n.return, p);
          }
        }
        break;
      case 27:
        e === null && l & 4 && Zd(n);
      case 26:
      case 5:
        Cn(t, n), e === null && l & 4 && Gd(n), l & 512 && Ki(n, n.return);
        break;
      case 12:
        Cn(t, n);
        break;
      case 13:
        Cn(t, n),
          l & 4 && Jd(t, n),
          l & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = u1.bind(null, n)), R1(t, n))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || rn), !l)) {
          (e = (e !== null && e.memoizedState !== null) || Bt), (u = rn);
          var o = Bt;
          (rn = l),
            (Bt = e) && !o ? On(t, n, (n.subtreeFlags & 8772) !== 0) : Cn(t, n),
            (rn = u),
            (Bt = o);
        }
        break;
      case 30:
        break;
      default:
        Cn(t, n);
    }
  }
  function Pd(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), Pd(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && zu(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var Dt = null,
    re = !1;
  function on(t, e, n) {
    for (n = n.child; n !== null; ) kd(t, e, n), (n = n.sibling);
  }
  function kd(t, e, n) {
    if (fe && typeof fe.onCommitFiberUnmount == "function")
      try {
        fe.onCommitFiberUnmount(hi, n);
      } catch {}
    switch (n.tag) {
      case 26:
        Bt || qe(n, e),
          on(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        Bt || qe(n, e);
        var l = Dt,
          u = re;
        Bn(n.type) && ((Dt = n.stateNode), (re = !1)),
          on(t, e, n),
          tl(n.stateNode),
          (Dt = l),
          (re = u);
        break;
      case 5:
        Bt || qe(n, e);
      case 6:
        if (
          ((l = Dt),
          (u = re),
          (Dt = null),
          on(t, e, n),
          (Dt = l),
          (re = u),
          Dt !== null)
        )
          if (re)
            try {
              (Dt.nodeType === 9
                ? Dt.body
                : Dt.nodeName === "HTML"
                  ? Dt.ownerDocument.body
                  : Dt
              ).removeChild(n.stateNode);
            } catch (o) {
              xt(n, e, o);
            }
          else
            try {
              Dt.removeChild(n.stateNode);
            } catch (o) {
              xt(n, e, o);
            }
        break;
      case 18:
        Dt !== null &&
          (re
            ? ((t = Dt),
              Nm(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                n.stateNode
              ),
              rl(t))
            : Nm(Dt, n.stateNode));
        break;
      case 4:
        (l = Dt),
          (u = re),
          (Dt = n.stateNode.containerInfo),
          (re = !0),
          on(t, e, n),
          (Dt = l),
          (re = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Bt || Dn(2, n, e), Bt || Dn(4, n, e), on(t, e, n);
        break;
      case 1:
        Bt ||
          (qe(n, e),
          (l = n.stateNode),
          typeof l.componentWillUnmount == "function" && Yd(n, e, l)),
          on(t, e, n);
        break;
      case 21:
        on(t, e, n);
        break;
      case 22:
        (Bt = (l = Bt) || n.memoizedState !== null), on(t, e, n), (Bt = l);
        break;
      default:
        on(t, e, n);
    }
  }
  function Jd(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        rl(t);
      } catch (n) {
        xt(e, e.return, n);
      }
  }
  function I0(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Kd()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Kd()),
          e
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Ir(t, e) {
    var n = I0(t);
    e.forEach(function (l) {
      var u = r1.bind(null, t, l);
      n.has(l) || (n.add(l), l.then(u, u));
    });
  }
  function pe(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var u = n[l],
          o = t,
          p = e,
          v = p;
        t: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (Bn(v.type)) {
                (Dt = v.stateNode), (re = !1);
                break t;
              }
              break;
            case 5:
              (Dt = v.stateNode), (re = !1);
              break t;
            case 3:
            case 4:
              (Dt = v.stateNode.containerInfo), (re = !0);
              break t;
          }
          v = v.return;
        }
        if (Dt === null) throw Error(r(160));
        kd(o, p, u),
          (Dt = null),
          (re = !1),
          (o = u.alternate),
          o !== null && (o.return = null),
          (u.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) Fd(e, t), (e = e.sibling);
  }
  var Ue = null;
  function Fd(t, e) {
    var n = t.alternate,
      l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        pe(e, t),
          ye(t),
          l & 4 && (Dn(3, t, t.return), Zi(3, t), Dn(5, t, t.return));
        break;
      case 1:
        pe(e, t),
          ye(t),
          l & 512 && (Bt || n === null || qe(n, n.return)),
          l & 64 &&
            rn &&
            ((t = t.updateQueue),
            t !== null &&
              ((l = t.callbacks),
              l !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? l : n.concat(l)))));
        break;
      case 26:
        var u = Ue;
        if (
          (pe(e, t),
          ye(t),
          l & 512 && (Bt || n === null || qe(n, n.return)),
          l & 4)
        ) {
          var o = n !== null ? n.memoizedState : null;
          if (((l = t.memoizedState), n === null))
            if (l === null)
              if (t.stateNode === null) {
                t: {
                  (l = t.type),
                    (n = t.memoizedProps),
                    (u = u.ownerDocument || u);
                  e: switch (l) {
                    case "title":
                      (o = u.getElementsByTagName("title")[0]),
                        (!o ||
                          o[pi] ||
                          o[Wt] ||
                          o.namespaceURI === "http://www.w3.org/2000/svg" ||
                          o.hasAttribute("itemprop")) &&
                          ((o = u.createElement(l)),
                          u.head.insertBefore(
                            o,
                            u.querySelector("head > title")
                          )),
                        Ft(o, l, n),
                        (o[Wt] = t),
                        Xt(o),
                        (l = o);
                      break t;
                    case "link":
                      var p = Zm("link", "href", u).get(l + (n.href || ""));
                      if (p) {
                        for (var v = 0; v < p.length; v++)
                          if (
                            ((o = p[v]),
                            o.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              o.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              o.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              o.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            p.splice(v, 1);
                            break e;
                          }
                      }
                      (o = u.createElement(l)),
                        Ft(o, l, n),
                        u.head.appendChild(o);
                      break;
                    case "meta":
                      if (
                        (p = Zm("meta", "content", u).get(
                          l + (n.content || "")
                        ))
                      ) {
                        for (v = 0; v < p.length; v++)
                          if (
                            ((o = p[v]),
                            o.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              o.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              o.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              o.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              o.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            p.splice(v, 1);
                            break e;
                          }
                      }
                      (o = u.createElement(l)),
                        Ft(o, l, n),
                        u.head.appendChild(o);
                      break;
                    default:
                      throw Error(r(468, l));
                  }
                  (o[Wt] = t), Xt(o), (l = o);
                }
                t.stateNode = l;
              } else Km(u, t.type, t.stateNode);
            else t.stateNode = Xm(u, l, t.memoizedProps);
          else
            o !== l
              ? (o === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : o.count--,
                l === null
                  ? Km(u, t.type, t.stateNode)
                  : Xm(u, l, t.memoizedProps))
              : l === null &&
                t.stateNode !== null &&
                Jr(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        pe(e, t),
          ye(t),
          l & 512 && (Bt || n === null || qe(n, n.return)),
          n !== null && l & 4 && Jr(t, t.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (
          (pe(e, t),
          ye(t),
          l & 512 && (Bt || n === null || qe(n, n.return)),
          t.flags & 32)
        ) {
          u = t.stateNode;
          try {
            Aa(u, "");
          } catch (w) {
            xt(t, t.return, w);
          }
        }
        l & 4 &&
          t.stateNode != null &&
          ((u = t.memoizedProps), Jr(t, u, n !== null ? n.memoizedProps : u)),
          l & 1024 && (Wr = !0);
        break;
      case 6:
        if ((pe(e, t), ye(t), l & 4)) {
          if (t.stateNode === null) throw Error(r(162));
          (l = t.memoizedProps), (n = t.stateNode);
          try {
            n.nodeValue = l;
          } catch (w) {
            xt(t, t.return, w);
          }
        }
        break;
      case 3:
        if (
          ((Gs = null),
          (u = Ue),
          (Ue = qs(e.containerInfo)),
          pe(e, t),
          (Ue = u),
          ye(t),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            rl(e.containerInfo);
          } catch (w) {
            xt(t, t.return, w);
          }
        Wr && ((Wr = !1), $d(t));
        break;
      case 4:
        (l = Ue),
          (Ue = qs(t.stateNode.containerInfo)),
          pe(e, t),
          ye(t),
          (Ue = l);
        break;
      case 12:
        pe(e, t), ye(t);
        break;
      case 13:
        pe(e, t),
          ye(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (lo = Le()),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), Ir(t, l)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var T = n !== null && n.memoizedState !== null,
          C = rn,
          B = Bt;
        if (
          ((rn = C || u),
          (Bt = B || T),
          pe(e, t),
          (Bt = B),
          (rn = C),
          ye(t),
          l & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = u ? e._visibility & -2 : e._visibility | 1,
              u && (n === null || T || rn || Bt || sa(t)),
              n = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                T = n = e;
                try {
                  if (((o = T.stateNode), u))
                    (p = o.style),
                      typeof p.setProperty == "function"
                        ? p.setProperty("display", "none", "important")
                        : (p.display = "none");
                  else {
                    v = T.stateNode;
                    var j = T.memoizedProps.style,
                      z =
                        j != null && j.hasOwnProperty("display")
                          ? j.display
                          : null;
                    v.style.display =
                      z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (w) {
                  xt(T, T.return, w);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                T = e;
                try {
                  T.stateNode.nodeValue = u ? "" : T.memoizedProps;
                } catch (w) {
                  xt(T, T.return, w);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), (e = e.return);
            }
            n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        l & 4 &&
          ((l = t.updateQueue),
          l !== null &&
            ((n = l.retryQueue),
            n !== null && ((l.retryQueue = null), Ir(t, n))));
        break;
      case 19:
        pe(e, t),
          ye(t),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), Ir(t, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        pe(e, t), ye(t);
    }
  }
  function ye(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, l = t.return; l !== null; ) {
          if (Xd(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var u = n.stateNode,
              o = Fr(t);
            Ds(t, o, u);
            break;
          case 5:
            var p = n.stateNode;
            n.flags & 32 && (Aa(p, ""), (n.flags &= -33));
            var v = Fr(t);
            Ds(t, v, p);
            break;
          case 3:
          case 4:
            var T = n.stateNode.containerInfo,
              C = Fr(t);
            $r(t, C, T);
            break;
          default:
            throw Error(r(161));
        }
      } catch (B) {
        xt(t, t.return, B);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function $d(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        $d(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function Cn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) Qd(t, e.alternate, e), (e = e.sibling);
  }
  function sa(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Dn(4, e, e.return), sa(e);
          break;
        case 1:
          qe(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && Yd(e, e.return, n),
            sa(e);
          break;
        case 27:
          tl(e.stateNode);
        case 26:
        case 5:
          qe(e, e.return), sa(e);
          break;
        case 22:
          e.memoizedState === null && sa(e);
          break;
        case 30:
          sa(e);
          break;
        default:
          sa(e);
      }
      t = t.sibling;
    }
  }
  function On(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate,
        u = t,
        o = e,
        p = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          On(u, o, n), Zi(4, o);
          break;
        case 1:
          if (
            (On(u, o, n),
            (l = o),
            (u = l.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (C) {
              xt(l, l.return, C);
            }
          if (((l = o), (u = l.updateQueue), u !== null)) {
            var v = l.stateNode;
            try {
              var T = u.shared.hiddenCallbacks;
              if (T !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < T.length; u++)
                  Mh(T[u], v);
            } catch (C) {
              xt(l, l.return, C);
            }
          }
          n && p & 64 && qd(o), Ki(o, o.return);
          break;
        case 27:
          Zd(o);
        case 26:
        case 5:
          On(u, o, n), n && l === null && p & 4 && Gd(o), Ki(o, o.return);
          break;
        case 12:
          On(u, o, n);
          break;
        case 13:
          On(u, o, n), n && p & 4 && Jd(u, o);
          break;
        case 22:
          o.memoizedState === null && On(u, o, n), Ki(o, o.return);
          break;
        case 30:
          break;
        default:
          On(u, o, n);
      }
      e = e.sibling;
    }
  }
  function to(t, e) {
    var n = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && Vi(n));
  }
  function eo(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Vi(t));
  }
  function Ye(t, e, n, l) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Wd(t, e, n, l), (e = e.sibling);
  }
  function Wd(t, e, n, l) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ye(t, e, n, l), u & 2048 && Zi(9, e);
        break;
      case 1:
        Ye(t, e, n, l);
        break;
      case 3:
        Ye(t, e, n, l),
          u & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Vi(t)));
        break;
      case 12:
        if (u & 2048) {
          Ye(t, e, n, l), (t = e.stateNode);
          try {
            var o = e.memoizedProps,
              p = o.id,
              v = o.onPostCommit;
            typeof v == "function" &&
              v(
                p,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (T) {
            xt(e, e.return, T);
          }
        } else Ye(t, e, n, l);
        break;
      case 13:
        Ye(t, e, n, l);
        break;
      case 23:
        break;
      case 22:
        (o = e.stateNode),
          (p = e.alternate),
          e.memoizedState !== null
            ? o._visibility & 2
              ? Ye(t, e, n, l)
              : Qi(t, e)
            : o._visibility & 2
              ? Ye(t, e, n, l)
              : ((o._visibility |= 2),
                Ga(t, e, n, l, (e.subtreeFlags & 10256) !== 0)),
          u & 2048 && to(p, e);
        break;
      case 24:
        Ye(t, e, n, l), u & 2048 && eo(e.alternate, e);
        break;
      default:
        Ye(t, e, n, l);
    }
  }
  function Ga(t, e, n, l, u) {
    for (u = u && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var o = t,
        p = e,
        v = n,
        T = l,
        C = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          Ga(o, p, v, T, u), Zi(8, p);
          break;
        case 23:
          break;
        case 22:
          var B = p.stateNode;
          p.memoizedState !== null
            ? B._visibility & 2
              ? Ga(o, p, v, T, u)
              : Qi(o, p)
            : ((B._visibility |= 2), Ga(o, p, v, T, u)),
            u && C & 2048 && to(p.alternate, p);
          break;
        case 24:
          Ga(o, p, v, T, u), u && C & 2048 && eo(p.alternate, p);
          break;
        default:
          Ga(o, p, v, T, u);
      }
      e = e.sibling;
    }
  }
  function Qi(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          l = e,
          u = l.flags;
        switch (l.tag) {
          case 22:
            Qi(n, l), u & 2048 && to(l.alternate, l);
            break;
          case 24:
            Qi(n, l), u & 2048 && eo(l.alternate, l);
            break;
          default:
            Qi(n, l);
        }
        e = e.sibling;
      }
  }
  var Pi = 8192;
  function Xa(t) {
    if (t.subtreeFlags & Pi)
      for (t = t.child; t !== null; ) Id(t), (t = t.sibling);
  }
  function Id(t) {
    switch (t.tag) {
      case 26:
        Xa(t),
          t.flags & Pi &&
            t.memoizedState !== null &&
            H1(Ue, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Xa(t);
        break;
      case 3:
      case 4:
        var e = Ue;
        (Ue = qs(t.stateNode.containerInfo)), Xa(t), (Ue = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = Pi), (Pi = 16777216), Xa(t), (Pi = e))
            : Xa(t));
        break;
      default:
        Xa(t);
    }
  }
  function tm(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function ki(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          (Kt = l), nm(l, t);
        }
      tm(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) em(t), (t = t.sibling);
  }
  function em(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ki(t), t.flags & 2048 && Dn(9, t, t.return);
        break;
      case 3:
        ki(t);
        break;
      case 12:
        ki(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Cs(t))
          : ki(t);
        break;
      default:
        ki(t);
    }
  }
  function Cs(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          (Kt = l), nm(l, t);
        }
      tm(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          Dn(8, e, e.return), Cs(e);
          break;
        case 22:
          (n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Cs(e));
          break;
        default:
          Cs(e);
      }
      t = t.sibling;
    }
  }
  function nm(t, e) {
    for (; Kt !== null; ) {
      var n = Kt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Dn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Vi(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) (l.return = n), (Kt = l);
      else
        t: for (n = t; Kt !== null; ) {
          l = Kt;
          var u = l.sibling,
            o = l.return;
          if ((Pd(l), l === n)) {
            Kt = null;
            break t;
          }
          if (u !== null) {
            (u.return = o), (Kt = u);
            break t;
          }
          Kt = o;
        }
    }
  }
  var t1 = {
      getCacheForType: function (t) {
        var e = It(Yt),
          n = e.data.get(t);
        return n === void 0 && ((n = t()), e.data.set(t, n)), n;
      },
    },
    e1 = typeof WeakMap == "function" ? WeakMap : Map,
    yt = 0,
    At = null,
    ot = null,
    ft = 0,
    gt = 0,
    ge = null,
    Vn = !1,
    Za = !1,
    no = !1,
    cn = 0,
    wt = 0,
    zn = 0,
    ua = 0,
    ao = 0,
    De = 0,
    Ka = 0,
    Ji = null,
    oe = null,
    io = !1,
    lo = 0,
    Os = 1 / 0,
    Vs = null,
    wn = null,
    Jt = 0,
    Un = null,
    Qa = null,
    Pa = 0,
    so = 0,
    uo = null,
    am = null,
    Fi = 0,
    ro = null;
  function ve() {
    if ((yt & 2) !== 0 && ft !== 0) return ft & -ft;
    if (N.T !== null) {
      var t = _a;
      return t !== 0 ? t : yo();
    }
    return Sf();
  }
  function im() {
    De === 0 && (De = (ft & 536870912) === 0 || pt ? pf() : 536870912);
    var t = Me.current;
    return t !== null && (t.flags |= 32), De;
  }
  function Se(t, e, n) {
    ((t === At && (gt === 2 || gt === 9)) || t.cancelPendingCommit !== null) &&
      (ka(t, 0), _n(t, ft, De, !1)),
      mi(t, n),
      ((yt & 2) === 0 || t !== At) &&
        (t === At &&
          ((yt & 2) === 0 && (ua |= n), wt === 4 && _n(t, ft, De, !1)),
        Ge(t));
  }
  function lm(t, e, n) {
    if ((yt & 6) !== 0) throw Error(r(327));
    var l = (!n && (e & 124) === 0 && (e & t.expiredLanes) === 0) || di(t, e),
      u = l ? i1(t, e) : fo(t, e, !0),
      o = l;
    do {
      if (u === 0) {
        Za && !l && _n(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), o && !n1(n))) {
          (u = fo(t, e, !1)), (o = !1);
          continue;
        }
        if (u === 2) {
          if (((o = e), t.errorRecoveryDisabledLanes & o)) var p = 0;
          else
            (p = t.pendingLanes & -536870913),
              (p = p !== 0 ? p : p & 536870912 ? 536870912 : 0);
          if (p !== 0) {
            e = p;
            t: {
              var v = t;
              u = Ji;
              var T = v.current.memoizedState.isDehydrated;
              if ((T && (ka(v, p).flags |= 256), (p = fo(v, p, !1)), p !== 2)) {
                if (no && !T) {
                  (v.errorRecoveryDisabledLanes |= o), (ua |= o), (u = 4);
                  break t;
                }
                (o = oe),
                  (oe = u),
                  o !== null && (oe === null ? (oe = o) : oe.push.apply(oe, o));
              }
              u = p;
            }
            if (((o = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          ka(t, 0), _n(t, e, 0, !0);
          break;
        }
        t: {
          switch (((l = t), (o = u), o)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              _n(l, e, De, !Vn);
              break t;
            case 2:
              oe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && ((u = lo + 300 - Le()), 10 < u)) {
            if ((_n(l, e, De, !Vn), Yl(l, 0, !0) !== 0)) break t;
            l.timeoutHandle = _m(
              sm.bind(null, l, n, oe, Vs, io, e, De, ua, Ka, Vn, o, 2, -0, 0),
              u
            );
            break t;
          }
          sm(l, n, oe, Vs, io, e, De, ua, Ka, Vn, o, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Ge(t);
  }
  function sm(t, e, n, l, u, o, p, v, T, C, B, j, z, w) {
    if (
      ((t.timeoutHandle = -1),
      (j = e.subtreeFlags),
      (j & 8192 || (j & 16785408) === 16785408) &&
        ((al = { stylesheets: null, count: 0, unsuspend: L1 }),
        Id(e),
        (j = j1()),
        j !== null))
    ) {
      (t.cancelPendingCommit = j(
        dm.bind(null, t, e, o, n, l, u, p, v, T, B, 1, z, w)
      )),
        _n(t, o, p, !C);
      return;
    }
    dm(t, e, o, n, l, u, p, v, T);
  }
  function n1(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var u = n[l],
            o = u.getSnapshot;
          u = u.value;
          try {
            if (!de(o(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        (n.return = e), (e = n);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function _n(t, e, n, l) {
    (e &= ~ao),
      (e &= ~ua),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      l && (t.warmLanes |= e),
      (l = t.expirationTimes);
    for (var u = e; 0 < u; ) {
      var o = 31 - he(u),
        p = 1 << o;
      (l[o] = -1), (u &= ~p);
    }
    n !== 0 && gf(t, n, e);
  }
  function zs() {
    return (yt & 6) === 0 ? ($i(0), !1) : !0;
  }
  function oo() {
    if (ot !== null) {
      if (gt === 0) var t = ot.return;
      else (t = ot), (en = ea = null), Mr(t), (qa = null), (Yi = 0), (t = ot);
      for (; t !== null; ) jd(t.alternate, t), (t = t.return);
      ot = null;
    }
  }
  function ka(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && ((t.timeoutHandle = -1), b1(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      oo(),
      (At = t),
      (ot = n = We(t.current, null)),
      (ft = e),
      (gt = 0),
      (ge = null),
      (Vn = !1),
      (Za = di(t, e)),
      (no = !1),
      (Ka = De = ao = ua = zn = wt = 0),
      (oe = Ji = null),
      (io = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var u = 31 - he(l),
          o = 1 << u;
        (e |= t[u]), (l &= ~o);
      }
    return (cn = e), Il(), n;
  }
  function um(t, e) {
    (ut = null),
      (N.H = vs),
      e === wi || e === rs
        ? ((e = Eh()), (gt = 3))
        : e === Th
          ? ((e = Eh()), (gt = 4))
          : (gt =
              e === Rd
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (ge = e),
      ot === null && ((wt = 1), As(t, xe(e, t.current)));
  }
  function rm() {
    var t = N.H;
    return (N.H = vs), t === null ? vs : t;
  }
  function om() {
    var t = N.A;
    return (N.A = t1), t;
  }
  function co() {
    (wt = 4),
      Vn || ((ft & 4194048) !== ft && Me.current !== null) || (Za = !0),
      ((zn & 134217727) === 0 && (ua & 134217727) === 0) ||
        At === null ||
        _n(At, ft, De, !1);
  }
  function fo(t, e, n) {
    var l = yt;
    yt |= 2;
    var u = rm(),
      o = om();
    (At !== t || ft !== e) && ((Vs = null), ka(t, e)), (e = !1);
    var p = wt;
    t: do
      try {
        if (gt !== 0 && ot !== null) {
          var v = ot,
            T = ge;
          switch (gt) {
            case 8:
              oo(), (p = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Me.current === null && (e = !0);
              var C = gt;
              if (((gt = 0), (ge = null), Ja(t, v, T, C), n && Za)) {
                p = 0;
                break t;
              }
              break;
            default:
              (C = gt), (gt = 0), (ge = null), Ja(t, v, T, C);
          }
        }
        a1(), (p = wt);
        break;
      } catch (B) {
        um(t, B);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (en = ea = null),
      (yt = l),
      (N.H = u),
      (N.A = o),
      ot === null && ((At = null), (ft = 0), Il()),
      p
    );
  }
  function a1() {
    for (; ot !== null; ) cm(ot);
  }
  function i1(t, e) {
    var n = yt;
    yt |= 2;
    var l = rm(),
      u = om();
    At !== t || ft !== e
      ? ((Vs = null), (Os = Le() + 500), ka(t, e))
      : (Za = di(t, e));
    t: do
      try {
        if (gt !== 0 && ot !== null) {
          e = ot;
          var o = ge;
          e: switch (gt) {
            case 1:
              (gt = 0), (ge = null), Ja(t, e, o, 1);
              break;
            case 2:
            case 9:
              if (xh(o)) {
                (gt = 0), (ge = null), fm(e);
                break;
              }
              (e = function () {
                (gt !== 2 && gt !== 9) || At !== t || (gt = 7), Ge(t);
              }),
                o.then(e, e);
              break t;
            case 3:
              gt = 7;
              break t;
            case 4:
              gt = 5;
              break t;
            case 7:
              xh(o)
                ? ((gt = 0), (ge = null), fm(e))
                : ((gt = 0), (ge = null), Ja(t, e, o, 7));
              break;
            case 5:
              var p = null;
              switch (ot.tag) {
                case 26:
                  p = ot.memoizedState;
                case 5:
                case 27:
                  var v = ot;
                  if (!p || Qm(p)) {
                    (gt = 0), (ge = null);
                    var T = v.sibling;
                    if (T !== null) ot = T;
                    else {
                      var C = v.return;
                      C !== null ? ((ot = C), ws(C)) : (ot = null);
                    }
                    break e;
                  }
              }
              (gt = 0), (ge = null), Ja(t, e, o, 5);
              break;
            case 6:
              (gt = 0), (ge = null), Ja(t, e, o, 6);
              break;
            case 8:
              oo(), (wt = 6);
              break t;
            default:
              throw Error(r(462));
          }
        }
        l1();
        break;
      } catch (B) {
        um(t, B);
      }
    while (!0);
    return (
      (en = ea = null),
      (N.H = l),
      (N.A = u),
      (yt = n),
      ot !== null ? 0 : ((At = null), (ft = 0), Il(), wt)
    );
  }
  function l1() {
    for (; ot !== null && !Dv(); ) cm(ot);
  }
  function cm(t) {
    var e = Ld(t.alternate, t, cn);
    (t.memoizedProps = t.pendingProps), e === null ? ws(t) : (ot = e);
  }
  function fm(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = zd(n, e, e.pendingProps, e.type, void 0, ft);
        break;
      case 11:
        e = zd(n, e, e.pendingProps, e.type.render, e.ref, ft);
        break;
      case 5:
        Mr(e);
      default:
        jd(n, e), (e = ot = hh(e, cn)), (e = Ld(n, e, cn));
    }
    (t.memoizedProps = t.pendingProps), e === null ? ws(t) : (ot = e);
  }
  function Ja(t, e, n, l) {
    (en = ea = null), Mr(e), (qa = null), (Yi = 0);
    var u = e.return;
    try {
      if (k0(t, u, e, n, ft)) {
        (wt = 1), As(t, xe(n, t.current)), (ot = null);
        return;
      }
    } catch (o) {
      if (u !== null) throw ((ot = u), o);
      (wt = 1), As(t, xe(n, t.current)), (ot = null);
      return;
    }
    e.flags & 32768
      ? (pt || l === 1
          ? (t = !0)
          : Za || (ft & 536870912) !== 0
            ? (t = !1)
            : ((Vn = t = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = Me.current),
                l !== null && l.tag === 13 && (l.flags |= 16384))),
        hm(e, t))
      : ws(e);
  }
  function ws(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        hm(e, Vn);
        return;
      }
      t = e.return;
      var n = F0(e.alternate, e, cn);
      if (n !== null) {
        ot = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        ot = e;
        return;
      }
      ot = e = t;
    } while (e !== null);
    wt === 0 && (wt = 5);
  }
  function hm(t, e) {
    do {
      var n = $0(t.alternate, t);
      if (n !== null) {
        (n.flags &= 32767), (ot = n);
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        ot = t;
        return;
      }
      ot = t = n;
    } while (t !== null);
    (wt = 6), (ot = null);
  }
  function dm(t, e, n, l, u, o, p, v, T) {
    t.cancelPendingCommit = null;
    do Us();
    while (Jt !== 0);
    if ((yt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (
        ((o = e.lanes | e.childLanes),
        (o |= er),
        Lv(t, n, o, p, v, T),
        t === At && ((ot = At = null), (ft = 0)),
        (Qa = e),
        (Un = t),
        (Pa = n),
        (so = o),
        (uo = u),
        (am = l),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            o1(Hl, function () {
              return vm(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (l = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || l)
      ) {
        (l = N.T), (N.T = null), (u = X.p), (X.p = 2), (p = yt), (yt |= 4);
        try {
          W0(t, e, n);
        } finally {
          (yt = p), (X.p = u), (N.T = l);
        }
      }
      (Jt = 1), mm(), pm(), ym();
    }
  }
  function mm() {
    if (Jt === 1) {
      Jt = 0;
      var t = Un,
        e = Qa,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        (n = N.T), (N.T = null);
        var l = X.p;
        X.p = 2;
        var u = yt;
        yt |= 4;
        try {
          Fd(e, t);
          var o = Eo,
            p = nh(t.containerInfo),
            v = o.focusedElem,
            T = o.selectionRange;
          if (
            p !== v &&
            v &&
            v.ownerDocument &&
            eh(v.ownerDocument.documentElement, v)
          ) {
            if (T !== null && Fu(v)) {
              var C = T.start,
                B = T.end;
              if ((B === void 0 && (B = C), "selectionStart" in v))
                (v.selectionStart = C),
                  (v.selectionEnd = Math.min(B, v.value.length));
              else {
                var j = v.ownerDocument || document,
                  z = (j && j.defaultView) || window;
                if (z.getSelection) {
                  var w = z.getSelection(),
                    et = v.textContent.length,
                    W = Math.min(T.start, et),
                    Tt = T.end === void 0 ? W : Math.min(T.end, et);
                  !w.extend && W > Tt && ((p = Tt), (Tt = W), (W = p));
                  var R = th(v, W),
                    A = th(v, Tt);
                  if (
                    R &&
                    A &&
                    (w.rangeCount !== 1 ||
                      w.anchorNode !== R.node ||
                      w.anchorOffset !== R.offset ||
                      w.focusNode !== A.node ||
                      w.focusOffset !== A.offset)
                  ) {
                    var D = j.createRange();
                    D.setStart(R.node, R.offset),
                      w.removeAllRanges(),
                      W > Tt
                        ? (w.addRange(D), w.extend(A.node, A.offset))
                        : (D.setEnd(A.node, A.offset), w.addRange(D));
                  }
                }
              }
            }
            for (j = [], w = v; (w = w.parentNode); )
              w.nodeType === 1 &&
                j.push({ element: w, left: w.scrollLeft, top: w.scrollTop });
            for (
              typeof v.focus == "function" && v.focus(), v = 0;
              v < j.length;
              v++
            ) {
              var H = j[v];
              (H.element.scrollLeft = H.left), (H.element.scrollTop = H.top);
            }
          }
          (Ks = !!Ao), (Eo = Ao = null);
        } finally {
          (yt = u), (X.p = l), (N.T = n);
        }
      }
      (t.current = e), (Jt = 2);
    }
  }
  function pm() {
    if (Jt === 2) {
      Jt = 0;
      var t = Un,
        e = Qa,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        (n = N.T), (N.T = null);
        var l = X.p;
        X.p = 2;
        var u = yt;
        yt |= 4;
        try {
          Qd(t, e.alternate, e);
        } finally {
          (yt = u), (X.p = l), (N.T = n);
        }
      }
      Jt = 3;
    }
  }
  function ym() {
    if (Jt === 4 || Jt === 3) {
      (Jt = 0), Cv();
      var t = Un,
        e = Qa,
        n = Pa,
        l = am;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Jt = 5)
        : ((Jt = 0), (Qa = Un = null), gm(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (
        (u === 0 && (wn = null),
        Ou(n),
        (e = e.stateNode),
        fe && typeof fe.onCommitFiberRoot == "function")
      )
        try {
          fe.onCommitFiberRoot(hi, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        (e = N.T), (u = X.p), (X.p = 2), (N.T = null);
        try {
          for (var o = t.onRecoverableError, p = 0; p < l.length; p++) {
            var v = l[p];
            o(v.value, { componentStack: v.stack });
          }
        } finally {
          (N.T = e), (X.p = u);
        }
      }
      (Pa & 3) !== 0 && Us(),
        Ge(t),
        (u = t.pendingLanes),
        (n & 4194090) !== 0 && (u & 42) !== 0
          ? t === ro
            ? Fi++
            : ((Fi = 0), (ro = t))
          : (Fi = 0),
        $i(0);
    }
  }
  function gm(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Vi(e)));
  }
  function Us(t) {
    return mm(), pm(), ym(), vm();
  }
  function vm() {
    if (Jt !== 5) return !1;
    var t = Un,
      e = so;
    so = 0;
    var n = Ou(Pa),
      l = N.T,
      u = X.p;
    try {
      (X.p = 32 > n ? 32 : n), (N.T = null), (n = uo), (uo = null);
      var o = Un,
        p = Pa;
      if (((Jt = 0), (Qa = Un = null), (Pa = 0), (yt & 6) !== 0))
        throw Error(r(331));
      var v = yt;
      if (
        ((yt |= 4),
        em(o.current),
        Wd(o, o.current, p, n),
        (yt = v),
        $i(0, !1),
        fe && typeof fe.onPostCommitFiberRoot == "function")
      )
        try {
          fe.onPostCommitFiberRoot(hi, o);
        } catch {}
      return !0;
    } finally {
      (X.p = u), (N.T = l), gm(t, e);
    }
  }
  function Sm(t, e, n) {
    (e = xe(n, e)),
      (e = qr(t.stateNode, e, 2)),
      (t = An(t, e, 2)),
      t !== null && (mi(t, 2), Ge(t));
  }
  function xt(t, e, n) {
    if (t.tag === 3) Sm(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Sm(e, t, n);
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (wn === null || !wn.has(l)))
          ) {
            (t = xe(n, t)),
              (n = Ad(2)),
              (l = An(e, n, 2)),
              l !== null && (Ed(n, l, e, t), mi(l, 2), Ge(l));
            break;
          }
        }
        e = e.return;
      }
  }
  function ho(t, e, n) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new e1();
      var u = new Set();
      l.set(e, u);
    } else (u = l.get(e)), u === void 0 && ((u = new Set()), l.set(e, u));
    u.has(n) ||
      ((no = !0), u.add(n), (t = s1.bind(null, t, e, n)), e.then(t, t));
  }
  function s1(t, e, n) {
    var l = t.pingCache;
    l !== null && l.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      At === t &&
        (ft & n) === n &&
        (wt === 4 || (wt === 3 && (ft & 62914560) === ft && 300 > Le() - lo)
          ? (yt & 2) === 0 && ka(t, 0)
          : (ao |= n),
        Ka === ft && (Ka = 0)),
      Ge(t);
  }
  function bm(t, e) {
    e === 0 && (e = yf()), (t = Va(t, e)), t !== null && (mi(t, e), Ge(t));
  }
  function u1(t) {
    var e = t.memoizedState,
      n = 0;
    e !== null && (n = e.retryLane), bm(t, n);
  }
  function r1(t, e) {
    var n = 0;
    switch (t.tag) {
      case 13:
        var l = t.stateNode,
          u = t.memoizedState;
        u !== null && (n = u.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    l !== null && l.delete(e), bm(t, n);
  }
  function o1(t, e) {
    return Ru(t, e);
  }
  var _s = null,
    Fa = null,
    mo = !1,
    Bs = !1,
    po = !1,
    ra = 0;
  function Ge(t) {
    t !== Fa &&
      t.next === null &&
      (Fa === null ? (_s = Fa = t) : (Fa = Fa.next = t)),
      (Bs = !0),
      mo || ((mo = !0), f1());
  }
  function $i(t, e) {
    if (!po && Bs) {
      po = !0;
      do
        for (var n = !1, l = _s; l !== null; ) {
          if (t !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var o = 0;
            else {
              var p = l.suspendedLanes,
                v = l.pingedLanes;
              (o = (1 << (31 - he(42 | t) + 1)) - 1),
                (o &= u & ~(p & ~v)),
                (o = o & 201326741 ? (o & 201326741) | 1 : o ? o | 2 : 0);
            }
            o !== 0 && ((n = !0), Em(l, o));
          } else
            (o = ft),
              (o = Yl(
                l,
                l === At ? o : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (o & 3) === 0 || di(l, o) || ((n = !0), Em(l, o));
          l = l.next;
        }
      while (n);
      po = !1;
    }
  }
  function c1() {
    Tm();
  }
  function Tm() {
    Bs = mo = !1;
    var t = 0;
    ra !== 0 && (S1() && (t = ra), (ra = 0));
    for (var e = Le(), n = null, l = _s; l !== null; ) {
      var u = l.next,
        o = xm(l, e);
      o === 0
        ? ((l.next = null),
          n === null ? (_s = u) : (n.next = u),
          u === null && (Fa = n))
        : ((n = l), (t !== 0 || (o & 3) !== 0) && (Bs = !0)),
        (l = u);
    }
    $i(t);
  }
  function xm(t, e) {
    for (
      var n = t.suspendedLanes,
        l = t.pingedLanes,
        u = t.expirationTimes,
        o = t.pendingLanes & -62914561;
      0 < o;

    ) {
      var p = 31 - he(o),
        v = 1 << p,
        T = u[p];
      T === -1
        ? ((v & n) === 0 || (v & l) !== 0) && (u[p] = Nv(v, e))
        : T <= e && (t.expiredLanes |= v),
        (o &= ~v);
    }
    if (
      ((e = At),
      (n = ft),
      (n = Yl(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (l = t.callbackNode),
      n === 0 ||
        (t === e && (gt === 2 || gt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && Mu(l),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || di(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((l !== null && Mu(l), Ou(n))) {
        case 2:
        case 8:
          n = df;
          break;
        case 32:
          n = Hl;
          break;
        case 268435456:
          n = mf;
          break;
        default:
          n = Hl;
      }
      return (
        (l = Am.bind(null, t)),
        (n = Ru(n, l)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      l !== null && l !== null && Mu(l),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Am(t, e) {
    if (Jt !== 0 && Jt !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var n = t.callbackNode;
    if (Us() && t.callbackNode !== n) return null;
    var l = ft;
    return (
      (l = Yl(
        t,
        t === At ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      l === 0
        ? null
        : (lm(t, l, e),
          xm(t, Le()),
          t.callbackNode != null && t.callbackNode === n
            ? Am.bind(null, t)
            : null)
    );
  }
  function Em(t, e) {
    if (Us()) return null;
    lm(t, e, !0);
  }
  function f1() {
    T1(function () {
      (yt & 6) !== 0 ? Ru(hf, c1) : Tm();
    });
  }
  function yo() {
    return ra === 0 && (ra = pf()), ra;
  }
  function Rm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : Ql("" + t);
  }
  function Mm(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function h1(t, e, n, l, u) {
    if (e === "submit" && n && n.stateNode === u) {
      var o = Rm((u[le] || null).action),
        p = l.submitter;
      p &&
        ((e = (e = p[le] || null)
          ? Rm(e.formAction)
          : p.getAttribute("formAction")),
        e !== null && ((o = e), (p = null)));
      var v = new Fl("action", "action", null, l, u);
      t.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (ra !== 0) {
                  var T = p ? Mm(u, p) : new FormData(u);
                  Br(
                    n,
                    { pending: !0, data: T, method: u.method, action: o },
                    null,
                    T
                  );
                }
              } else
                typeof o == "function" &&
                  (v.preventDefault(),
                  (T = p ? Mm(u, p) : new FormData(u)),
                  Br(
                    n,
                    { pending: !0, data: T, method: u.method, action: o },
                    o,
                    T
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var go = 0; go < tr.length; go++) {
    var vo = tr[go],
      d1 = vo.toLowerCase(),
      m1 = vo[0].toUpperCase() + vo.slice(1);
    we(d1, "on" + m1);
  }
  we(lh, "onAnimationEnd"),
    we(sh, "onAnimationIteration"),
    we(uh, "onAnimationStart"),
    we("dblclick", "onDoubleClick"),
    we("focusin", "onFocus"),
    we("focusout", "onBlur"),
    we(z0, "onTransitionRun"),
    we(w0, "onTransitionStart"),
    we(U0, "onTransitionCancel"),
    we(rh, "onTransitionEnd"),
    ba("onMouseEnter", ["mouseout", "mouseover"]),
    ba("onMouseLeave", ["mouseout", "mouseover"]),
    ba("onPointerEnter", ["pointerout", "pointerover"]),
    ba("onPointerLeave", ["pointerout", "pointerover"]),
    Qn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Qn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Qn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Qn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Qn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Qn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Wi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    p1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Wi)
    );
  function Dm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var l = t[n],
        u = l.event;
      l = l.listeners;
      t: {
        var o = void 0;
        if (e)
          for (var p = l.length - 1; 0 <= p; p--) {
            var v = l[p],
              T = v.instance,
              C = v.currentTarget;
            if (((v = v.listener), T !== o && u.isPropagationStopped()))
              break t;
            (o = v), (u.currentTarget = C);
            try {
              o(u);
            } catch (B) {
              xs(B);
            }
            (u.currentTarget = null), (o = T);
          }
        else
          for (p = 0; p < l.length; p++) {
            if (
              ((v = l[p]),
              (T = v.instance),
              (C = v.currentTarget),
              (v = v.listener),
              T !== o && u.isPropagationStopped())
            )
              break t;
            (o = v), (u.currentTarget = C);
            try {
              o(u);
            } catch (B) {
              xs(B);
            }
            (u.currentTarget = null), (o = T);
          }
      }
    }
  }
  function ct(t, e) {
    var n = e[Vu];
    n === void 0 && (n = e[Vu] = new Set());
    var l = t + "__bubble";
    n.has(l) || (Cm(e, t, 2, !1), n.add(l));
  }
  function So(t, e, n) {
    var l = 0;
    e && (l |= 4), Cm(n, t, l, e);
  }
  var Ns = "_reactListening" + Math.random().toString(36).slice(2);
  function bo(t) {
    if (!t[Ns]) {
      (t[Ns] = !0),
        Tf.forEach(function (n) {
          n !== "selectionchange" && (p1.has(n) || So(n, !1, t), So(n, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Ns] || ((e[Ns] = !0), So("selectionchange", !1, e));
    }
  }
  function Cm(t, e, n, l) {
    switch (Wm(e)) {
      case 2:
        var u = G1;
        break;
      case 8:
        u = X1;
        break;
      default:
        u = _o;
    }
    (n = u.bind(null, e, n, t)),
      (u = void 0),
      !Yu ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (u = !0),
      l
        ? u !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: u })
          : t.addEventListener(e, n, !0)
        : u !== void 0
          ? t.addEventListener(e, n, { passive: u })
          : t.addEventListener(e, n, !1);
  }
  function To(t, e, n, l, u) {
    var o = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (;;) {
        if (l === null) return;
        var p = l.tag;
        if (p === 3 || p === 4) {
          var v = l.stateNode.containerInfo;
          if (v === u) break;
          if (p === 4)
            for (p = l.return; p !== null; ) {
              var T = p.tag;
              if ((T === 3 || T === 4) && p.stateNode.containerInfo === u)
                return;
              p = p.return;
            }
          for (; v !== null; ) {
            if (((p = ga(v)), p === null)) return;
            if (((T = p.tag), T === 5 || T === 6 || T === 26 || T === 27)) {
              l = o = p;
              continue t;
            }
            v = v.parentNode;
          }
        }
        l = l.return;
      }
    Bf(function () {
      var C = o,
        B = ju(n),
        j = [];
      t: {
        var z = oh.get(t);
        if (z !== void 0) {
          var w = Fl,
            et = t;
          switch (t) {
            case "keypress":
              if (kl(n) === 0) break t;
            case "keydown":
            case "keyup":
              w = o0;
              break;
            case "focusin":
              (et = "focus"), (w = Ku);
              break;
            case "focusout":
              (et = "blur"), (w = Ku);
              break;
            case "beforeblur":
            case "afterblur":
              w = Ku;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              w = Hf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              w = $v;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              w = h0;
              break;
            case lh:
            case sh:
            case uh:
              w = t0;
              break;
            case rh:
              w = m0;
              break;
            case "scroll":
            case "scrollend":
              w = Jv;
              break;
            case "wheel":
              w = y0;
              break;
            case "copy":
            case "cut":
            case "paste":
              w = n0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              w = qf;
              break;
            case "toggle":
            case "beforetoggle":
              w = v0;
          }
          var W = (e & 4) !== 0,
            Tt = !W && (t === "scroll" || t === "scrollend"),
            R = W ? (z !== null ? z + "Capture" : null) : z;
          W = [];
          for (var A = C, D; A !== null; ) {
            var H = A;
            if (
              ((D = H.stateNode),
              (H = H.tag),
              (H !== 5 && H !== 26 && H !== 27) ||
                D === null ||
                R === null ||
                ((H = gi(A, R)), H != null && W.push(Ii(A, H, D))),
              Tt)
            )
              break;
            A = A.return;
          }
          0 < W.length &&
            ((z = new w(z, et, null, n, B)),
            j.push({ event: z, listeners: W }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((z = t === "mouseover" || t === "pointerover"),
            (w = t === "mouseout" || t === "pointerout"),
            z &&
              n !== Hu &&
              (et = n.relatedTarget || n.fromElement) &&
              (ga(et) || et[ya]))
          )
            break t;
          if (
            (w || z) &&
            ((z =
              B.window === B
                ? B
                : (z = B.ownerDocument)
                  ? z.defaultView || z.parentWindow
                  : window),
            w
              ? ((et = n.relatedTarget || n.toElement),
                (w = C),
                (et = et ? ga(et) : null),
                et !== null &&
                  ((Tt = f(et)),
                  (W = et.tag),
                  et !== Tt || (W !== 5 && W !== 27 && W !== 6)) &&
                  (et = null))
              : ((w = null), (et = C)),
            w !== et)
          ) {
            if (
              ((W = Hf),
              (H = "onMouseLeave"),
              (R = "onMouseEnter"),
              (A = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((W = qf),
                (H = "onPointerLeave"),
                (R = "onPointerEnter"),
                (A = "pointer")),
              (Tt = w == null ? z : yi(w)),
              (D = et == null ? z : yi(et)),
              (z = new W(H, A + "leave", w, n, B)),
              (z.target = Tt),
              (z.relatedTarget = D),
              (H = null),
              ga(B) === C &&
                ((W = new W(R, A + "enter", et, n, B)),
                (W.target = D),
                (W.relatedTarget = Tt),
                (H = W)),
              (Tt = H),
              w && et)
            )
              e: {
                for (W = w, R = et, A = 0, D = W; D; D = $a(D)) A++;
                for (D = 0, H = R; H; H = $a(H)) D++;
                for (; 0 < A - D; ) (W = $a(W)), A--;
                for (; 0 < D - A; ) (R = $a(R)), D--;
                for (; A--; ) {
                  if (W === R || (R !== null && W === R.alternate)) break e;
                  (W = $a(W)), (R = $a(R));
                }
                W = null;
              }
            else W = null;
            w !== null && Om(j, z, w, W, !1),
              et !== null && Tt !== null && Om(j, Tt, et, W, !0);
          }
        }
        t: {
          if (
            ((z = C ? yi(C) : window),
            (w = z.nodeName && z.nodeName.toLowerCase()),
            w === "select" || (w === "input" && z.type === "file"))
          )
            var Q = kf;
          else if (Qf(z))
            if (Jf) Q = C0;
            else {
              Q = M0;
              var rt = R0;
            }
          else
            (w = z.nodeName),
              !w ||
              w.toLowerCase() !== "input" ||
              (z.type !== "checkbox" && z.type !== "radio")
                ? C && Lu(C.elementType) && (Q = kf)
                : (Q = D0);
          if (Q && (Q = Q(t, C))) {
            Pf(j, Q, n, B);
            break t;
          }
          rt && rt(t, z, C),
            t === "focusout" &&
              C &&
              z.type === "number" &&
              C.memoizedProps.value != null &&
              Nu(z, "number", z.value);
        }
        switch (((rt = C ? yi(C) : window), t)) {
          case "focusin":
            (Qf(rt) || rt.contentEditable === "true") &&
              ((Da = rt), ($u = C), (Ri = null));
            break;
          case "focusout":
            Ri = $u = Da = null;
            break;
          case "mousedown":
            Wu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Wu = !1), ah(j, n, B);
            break;
          case "selectionchange":
            if (V0) break;
          case "keydown":
          case "keyup":
            ah(j, n, B);
        }
        var F;
        if (Pu)
          t: {
            switch (t) {
              case "compositionstart":
                var I = "onCompositionStart";
                break t;
              case "compositionend":
                I = "onCompositionEnd";
                break t;
              case "compositionupdate":
                I = "onCompositionUpdate";
                break t;
            }
            I = void 0;
          }
        else
          Ma
            ? Zf(t, n) && (I = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (I = "onCompositionStart");
        I &&
          (Yf &&
            n.locale !== "ko" &&
            (Ma || I !== "onCompositionStart"
              ? I === "onCompositionEnd" && Ma && (F = Nf())
              : ((Sn = B),
                (Gu = "value" in Sn ? Sn.value : Sn.textContent),
                (Ma = !0))),
          (rt = Ls(C, I)),
          0 < rt.length &&
            ((I = new jf(I, t, null, n, B)),
            j.push({ event: I, listeners: rt }),
            F ? (I.data = F) : ((F = Kf(n)), F !== null && (I.data = F)))),
          (F = b0 ? T0(t, n) : x0(t, n)) &&
            ((I = Ls(C, "onBeforeInput")),
            0 < I.length &&
              ((rt = new jf("onBeforeInput", "beforeinput", null, n, B)),
              j.push({ event: rt, listeners: I }),
              (rt.data = F))),
          h1(j, t, C, n, B);
      }
      Dm(j, e);
    });
  }
  function Ii(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Ls(t, e) {
    for (var n = e + "Capture", l = []; t !== null; ) {
      var u = t,
        o = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          o === null ||
          ((u = gi(t, n)),
          u != null && l.unshift(Ii(t, u, o)),
          (u = gi(t, e)),
          u != null && l.push(Ii(t, u, o))),
        t.tag === 3)
      )
        return l;
      t = t.return;
    }
    return [];
  }
  function $a(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Om(t, e, n, l, u) {
    for (var o = e._reactName, p = []; n !== null && n !== l; ) {
      var v = n,
        T = v.alternate,
        C = v.stateNode;
      if (((v = v.tag), T !== null && T === l)) break;
      (v !== 5 && v !== 26 && v !== 27) ||
        C === null ||
        ((T = C),
        u
          ? ((C = gi(n, o)), C != null && p.unshift(Ii(n, C, T)))
          : u || ((C = gi(n, o)), C != null && p.push(Ii(n, C, T)))),
        (n = n.return);
    }
    p.length !== 0 && t.push({ event: e, listeners: p });
  }
  var y1 = /\r\n?/g,
    g1 = /\u0000|\uFFFD/g;
  function Vm(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        y1,
        `
`
      )
      .replace(g1, "");
  }
  function zm(t, e) {
    return (e = Vm(e)), Vm(t) === e;
  }
  function Hs() {}
  function bt(t, e, n, l, u, o) {
    switch (n) {
      case "children":
        typeof l == "string"
          ? e === "body" || (e === "textarea" && l === "") || Aa(t, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            e !== "body" &&
            Aa(t, "" + l);
        break;
      case "className":
        Xl(t, "class", l);
        break;
      case "tabIndex":
        Xl(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Xl(t, n, l);
        break;
      case "style":
        Uf(t, l, o);
        break;
      case "data":
        if (e !== "object") {
          Xl(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        (l = Ql("" + l)), t.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof o == "function" &&
            (n === "formAction"
              ? (e !== "input" && bt(t, e, "name", u.name, u, null),
                bt(t, e, "formEncType", u.formEncType, u, null),
                bt(t, e, "formMethod", u.formMethod, u, null),
                bt(t, e, "formTarget", u.formTarget, u, null))
              : (bt(t, e, "encType", u.encType, u, null),
                bt(t, e, "method", u.method, u, null),
                bt(t, e, "target", u.target, u, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(n);
          break;
        }
        (l = Ql("" + l)), t.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (t.onclick = Hs);
        break;
      case "onScroll":
        l != null && ct("scroll", t);
        break;
      case "onScrollEnd":
        l != null && ct("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(r(61));
          if (((n = l.__html), n != null)) {
            if (u.children != null) throw Error(r(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (n = Ql("" + l)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(n, "" + l)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0
          ? t.setAttribute(n, "")
          : l !== !1 &&
              l != null &&
              typeof l != "function" &&
              typeof l != "symbol"
            ? t.setAttribute(n, l)
            : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? t.setAttribute(n, l)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? t.removeAttribute(n)
          : t.setAttribute(n, l);
        break;
      case "popover":
        ct("beforetoggle", t), ct("toggle", t), Gl(t, "popover", l);
        break;
      case "xlinkActuate":
        Fe(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        Fe(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        Fe(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        Fe(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        Fe(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        Fe(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        Fe(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        Fe(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        Fe(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Gl(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Pv.get(n) || n), Gl(t, n, l));
    }
  }
  function xo(t, e, n, l, u, o) {
    switch (n) {
      case "style":
        Uf(t, l, o);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(r(61));
          if (((n = l.__html), n != null)) {
            if (u.children != null) throw Error(r(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? Aa(t, l)
          : (typeof l == "number" || typeof l == "bigint") && Aa(t, "" + l);
        break;
      case "onScroll":
        l != null && ct("scroll", t);
        break;
      case "onScrollEnd":
        l != null && ct("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = Hs);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!xf.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((u = n.endsWith("Capture")),
              (e = n.slice(2, u ? n.length - 7 : void 0)),
              (o = t[le] || null),
              (o = o != null ? o[n] : null),
              typeof o == "function" && t.removeEventListener(e, o, u),
              typeof l == "function")
            ) {
              typeof o != "function" &&
                o !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, l, u);
              break t;
            }
            n in t
              ? (t[n] = l)
              : l === !0
                ? t.setAttribute(n, "")
                : Gl(t, n, l);
          }
    }
  }
  function Ft(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ct("error", t), ct("load", t);
        var l = !1,
          u = !1,
          o;
        for (o in n)
          if (n.hasOwnProperty(o)) {
            var p = n[o];
            if (p != null)
              switch (o) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  bt(t, e, o, p, n, null);
              }
          }
        u && bt(t, e, "srcSet", n.srcSet, n, null),
          l && bt(t, e, "src", n.src, n, null);
        return;
      case "input":
        ct("invalid", t);
        var v = (o = p = u = null),
          T = null,
          C = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var B = n[l];
            if (B != null)
              switch (l) {
                case "name":
                  u = B;
                  break;
                case "type":
                  p = B;
                  break;
                case "checked":
                  T = B;
                  break;
                case "defaultChecked":
                  C = B;
                  break;
                case "value":
                  o = B;
                  break;
                case "defaultValue":
                  v = B;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (B != null) throw Error(r(137, e));
                  break;
                default:
                  bt(t, e, l, B, n, null);
              }
          }
        Of(t, o, v, T, C, p, u, !1), Zl(t);
        return;
      case "select":
        ct("invalid", t), (l = p = o = null);
        for (u in n)
          if (n.hasOwnProperty(u) && ((v = n[u]), v != null))
            switch (u) {
              case "value":
                o = v;
                break;
              case "defaultValue":
                p = v;
                break;
              case "multiple":
                l = v;
              default:
                bt(t, e, u, v, n, null);
            }
        (e = o),
          (n = p),
          (t.multiple = !!l),
          e != null ? xa(t, !!l, e, !1) : n != null && xa(t, !!l, n, !0);
        return;
      case "textarea":
        ct("invalid", t), (o = u = l = null);
        for (p in n)
          if (n.hasOwnProperty(p) && ((v = n[p]), v != null))
            switch (p) {
              case "value":
                l = v;
                break;
              case "defaultValue":
                u = v;
                break;
              case "children":
                o = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(r(91));
                break;
              default:
                bt(t, e, p, v, n, null);
            }
        zf(t, l, u, o), Zl(t);
        return;
      case "option":
        for (T in n)
          if (n.hasOwnProperty(T) && ((l = n[T]), l != null))
            switch (T) {
              case "selected":
                t.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                bt(t, e, T, l, n, null);
            }
        return;
      case "dialog":
        ct("beforetoggle", t), ct("toggle", t), ct("cancel", t), ct("close", t);
        break;
      case "iframe":
      case "object":
        ct("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Wi.length; l++) ct(Wi[l], t);
        break;
      case "image":
        ct("error", t), ct("load", t);
        break;
      case "details":
        ct("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ct("error", t), ct("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (C in n)
          if (n.hasOwnProperty(C) && ((l = n[C]), l != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                bt(t, e, C, l, n, null);
            }
        return;
      default:
        if (Lu(e)) {
          for (B in n)
            n.hasOwnProperty(B) &&
              ((l = n[B]), l !== void 0 && xo(t, e, B, l, n, void 0));
          return;
        }
    }
    for (v in n)
      n.hasOwnProperty(v) && ((l = n[v]), l != null && bt(t, e, v, l, n, null));
  }
  function v1(t, e, n, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          o = null,
          p = null,
          v = null,
          T = null,
          C = null,
          B = null;
        for (w in n) {
          var j = n[w];
          if (n.hasOwnProperty(w) && j != null)
            switch (w) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = j;
              default:
                l.hasOwnProperty(w) || bt(t, e, w, null, l, j);
            }
        }
        for (var z in l) {
          var w = l[z];
          if (((j = n[z]), l.hasOwnProperty(z) && (w != null || j != null)))
            switch (z) {
              case "type":
                o = w;
                break;
              case "name":
                u = w;
                break;
              case "checked":
                C = w;
                break;
              case "defaultChecked":
                B = w;
                break;
              case "value":
                p = w;
                break;
              case "defaultValue":
                v = w;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(r(137, e));
                break;
              default:
                w !== j && bt(t, e, z, w, l, j);
            }
        }
        Bu(t, p, v, T, C, B, o, u);
        return;
      case "select":
        w = p = v = z = null;
        for (o in n)
          if (((T = n[o]), n.hasOwnProperty(o) && T != null))
            switch (o) {
              case "value":
                break;
              case "multiple":
                w = T;
              default:
                l.hasOwnProperty(o) || bt(t, e, o, null, l, T);
            }
        for (u in l)
          if (
            ((o = l[u]),
            (T = n[u]),
            l.hasOwnProperty(u) && (o != null || T != null))
          )
            switch (u) {
              case "value":
                z = o;
                break;
              case "defaultValue":
                v = o;
                break;
              case "multiple":
                p = o;
              default:
                o !== T && bt(t, e, u, o, l, T);
            }
        (e = v),
          (n = p),
          (l = w),
          z != null
            ? xa(t, !!n, z, !1)
            : !!l != !!n &&
              (e != null ? xa(t, !!n, e, !0) : xa(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        w = z = null;
        for (v in n)
          if (
            ((u = n[v]),
            n.hasOwnProperty(v) && u != null && !l.hasOwnProperty(v))
          )
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                bt(t, e, v, null, l, u);
            }
        for (p in l)
          if (
            ((u = l[p]),
            (o = n[p]),
            l.hasOwnProperty(p) && (u != null || o != null))
          )
            switch (p) {
              case "value":
                z = u;
                break;
              case "defaultValue":
                w = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== o && bt(t, e, p, u, l, o);
            }
        Vf(t, z, w);
        return;
      case "option":
        for (var et in n)
          if (
            ((z = n[et]),
            n.hasOwnProperty(et) && z != null && !l.hasOwnProperty(et))
          )
            switch (et) {
              case "selected":
                t.selected = !1;
                break;
              default:
                bt(t, e, et, null, l, z);
            }
        for (T in l)
          if (
            ((z = l[T]),
            (w = n[T]),
            l.hasOwnProperty(T) && z !== w && (z != null || w != null))
          )
            switch (T) {
              case "selected":
                t.selected =
                  z && typeof z != "function" && typeof z != "symbol";
                break;
              default:
                bt(t, e, T, z, l, w);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var W in n)
          (z = n[W]),
            n.hasOwnProperty(W) &&
              z != null &&
              !l.hasOwnProperty(W) &&
              bt(t, e, W, null, l, z);
        for (C in l)
          if (
            ((z = l[C]),
            (w = n[C]),
            l.hasOwnProperty(C) && z !== w && (z != null || w != null))
          )
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(r(137, e));
                break;
              default:
                bt(t, e, C, z, l, w);
            }
        return;
      default:
        if (Lu(e)) {
          for (var Tt in n)
            (z = n[Tt]),
              n.hasOwnProperty(Tt) &&
                z !== void 0 &&
                !l.hasOwnProperty(Tt) &&
                xo(t, e, Tt, void 0, l, z);
          for (B in l)
            (z = l[B]),
              (w = n[B]),
              !l.hasOwnProperty(B) ||
                z === w ||
                (z === void 0 && w === void 0) ||
                xo(t, e, B, z, l, w);
          return;
        }
    }
    for (var R in n)
      (z = n[R]),
        n.hasOwnProperty(R) &&
          z != null &&
          !l.hasOwnProperty(R) &&
          bt(t, e, R, null, l, z);
    for (j in l)
      (z = l[j]),
        (w = n[j]),
        !l.hasOwnProperty(j) ||
          z === w ||
          (z == null && w == null) ||
          bt(t, e, j, z, l, w);
  }
  var Ao = null,
    Eo = null;
  function js(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function wm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Um(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Ro(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Mo = null;
  function S1() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Mo
        ? !1
        : ((Mo = t), !0)
      : ((Mo = null), !1);
  }
  var _m = typeof setTimeout == "function" ? setTimeout : void 0,
    b1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Bm = typeof Promise == "function" ? Promise : void 0,
    T1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Bm < "u"
          ? function (t) {
              return Bm.resolve(null).then(t).catch(x1);
            }
          : _m;
  function x1(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Bn(t) {
    return t === "head";
  }
  function Nm(t, e) {
    var n = e,
      l = 0,
      u = 0;
    do {
      var o = n.nextSibling;
      if ((t.removeChild(n), o && o.nodeType === 8))
        if (((n = o.data), n === "/$")) {
          if (0 < l && 8 > l) {
            n = l;
            var p = t.ownerDocument;
            if ((n & 1 && tl(p.documentElement), n & 2 && tl(p.body), n & 4))
              for (n = p.head, tl(n), p = n.firstChild; p; ) {
                var v = p.nextSibling,
                  T = p.nodeName;
                p[pi] ||
                  T === "SCRIPT" ||
                  T === "STYLE" ||
                  (T === "LINK" && p.rel.toLowerCase() === "stylesheet") ||
                  n.removeChild(p),
                  (p = v);
              }
          }
          if (u === 0) {
            t.removeChild(o), rl(e);
            return;
          }
          u--;
        } else
          n === "$" || n === "$?" || n === "$!"
            ? u++
            : (l = n.charCodeAt(0) - 48);
      else l = 0;
      n = o;
    } while (n);
    rl(e);
  }
  function Do(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Do(n), zu(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function A1(t, e, n, l) {
    for (; t.nodeType === 1; ) {
      var u = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (l) {
        if (!t[pi])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((o = t.getAttribute("rel")),
                o === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                o !== u.rel ||
                t.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                t.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                t.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((o = t.getAttribute("src")),
                (o !== (u.src == null ? null : u.src) ||
                  t.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  t.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  o &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var o = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === o) return t;
      } else return t;
      if (((t = _e(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function E1(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = _e(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Co(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function R1(t, e) {
    var n = t.ownerDocument;
    if (t.data !== "$?" || n.readyState === "complete") e();
    else {
      var l = function () {
        e(), n.removeEventListener("DOMContentLoaded", l);
      };
      n.addEventListener("DOMContentLoaded", l), (t._reactRetry = l);
    }
  }
  function _e(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var Oo = null;
  function Lm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (e === 0) return t;
          e--;
        } else n === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Hm(t, e, n) {
    switch (((e = js(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(r(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(r(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function tl(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    zu(t);
  }
  var Ce = new Map(),
    jm = new Set();
  function qs(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var fn = X.d;
  X.d = { f: M1, r: D1, D: C1, C: O1, L: V1, m: z1, X: U1, S: w1, M: _1 };
  function M1() {
    var t = fn.f(),
      e = zs();
    return t || e;
  }
  function D1(t) {
    var e = va(t);
    e !== null && e.tag === 5 && e.type === "form" ? ld(e) : fn.r(t);
  }
  var Wa = typeof document > "u" ? null : document;
  function qm(t, e, n) {
    var l = Wa;
    if (l && typeof e == "string" && e) {
      var u = Te(e);
      (u = 'link[rel="' + t + '"][href="' + u + '"]'),
        typeof n == "string" && (u += '[crossorigin="' + n + '"]'),
        jm.has(u) ||
          (jm.add(u),
          (t = { rel: t, crossOrigin: n, href: e }),
          l.querySelector(u) === null &&
            ((e = l.createElement("link")),
            Ft(e, "link", t),
            Xt(e),
            l.head.appendChild(e)));
    }
  }
  function C1(t) {
    fn.D(t), qm("dns-prefetch", t, null);
  }
  function O1(t, e) {
    fn.C(t, e), qm("preconnect", t, e);
  }
  function V1(t, e, n) {
    fn.L(t, e, n);
    var l = Wa;
    if (l && t && e) {
      var u = 'link[rel="preload"][as="' + Te(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((u += '[imagesrcset="' + Te(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (u += '[imagesizes="' + Te(n.imageSizes) + '"]'))
        : (u += '[href="' + Te(t) + '"]');
      var o = u;
      switch (e) {
        case "style":
          o = Ia(t);
          break;
        case "script":
          o = ti(t);
      }
      Ce.has(o) ||
        ((t = g(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n
        )),
        Ce.set(o, t),
        l.querySelector(u) !== null ||
          (e === "style" && l.querySelector(el(o))) ||
          (e === "script" && l.querySelector(nl(o))) ||
          ((e = l.createElement("link")),
          Ft(e, "link", t),
          Xt(e),
          l.head.appendChild(e)));
    }
  }
  function z1(t, e) {
    fn.m(t, e);
    var n = Wa;
    if (n && t) {
      var l = e && typeof e.as == "string" ? e.as : "script",
        u =
          'link[rel="modulepreload"][as="' + Te(l) + '"][href="' + Te(t) + '"]',
        o = u;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = ti(t);
      }
      if (
        !Ce.has(o) &&
        ((t = g({ rel: "modulepreload", href: t }, e)),
        Ce.set(o, t),
        n.querySelector(u) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(nl(o))) return;
        }
        (l = n.createElement("link")),
          Ft(l, "link", t),
          Xt(l),
          n.head.appendChild(l);
      }
    }
  }
  function w1(t, e, n) {
    fn.S(t, e, n);
    var l = Wa;
    if (l && t) {
      var u = Sa(l).hoistableStyles,
        o = Ia(t);
      e = e || "default";
      var p = u.get(o);
      if (!p) {
        var v = { loading: 0, preload: null };
        if ((p = l.querySelector(el(o)))) v.loading = 5;
        else {
          (t = g({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = Ce.get(o)) && Vo(t, n);
          var T = (p = l.createElement("link"));
          Xt(T),
            Ft(T, "link", t),
            (T._p = new Promise(function (C, B) {
              (T.onload = C), (T.onerror = B);
            })),
            T.addEventListener("load", function () {
              v.loading |= 1;
            }),
            T.addEventListener("error", function () {
              v.loading |= 2;
            }),
            (v.loading |= 4),
            Ys(p, e, l);
        }
        (p = { type: "stylesheet", instance: p, count: 1, state: v }),
          u.set(o, p);
      }
    }
  }
  function U1(t, e) {
    fn.X(t, e);
    var n = Wa;
    if (n && t) {
      var l = Sa(n).hoistableScripts,
        u = ti(t),
        o = l.get(u);
      o ||
        ((o = n.querySelector(nl(u))),
        o ||
          ((t = g({ src: t, async: !0 }, e)),
          (e = Ce.get(u)) && zo(t, e),
          (o = n.createElement("script")),
          Xt(o),
          Ft(o, "link", t),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        l.set(u, o));
    }
  }
  function _1(t, e) {
    fn.M(t, e);
    var n = Wa;
    if (n && t) {
      var l = Sa(n).hoistableScripts,
        u = ti(t),
        o = l.get(u);
      o ||
        ((o = n.querySelector(nl(u))),
        o ||
          ((t = g({ src: t, async: !0, type: "module" }, e)),
          (e = Ce.get(u)) && zo(t, e),
          (o = n.createElement("script")),
          Xt(o),
          Ft(o, "link", t),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        l.set(u, o));
    }
  }
  function Ym(t, e, n, l) {
    var u = (u = at.current) ? qs(u) : null;
    if (!u) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = Ia(n.href)),
            (n = Sa(u).hoistableStyles),
            (l = n.get(e)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = Ia(n.href);
          var o = Sa(u).hoistableStyles,
            p = o.get(t);
          if (
            (p ||
              ((u = u.ownerDocument || u),
              (p = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              o.set(t, p),
              (o = u.querySelector(el(t))) &&
                !o._p &&
                ((p.instance = o), (p.state.loading = 5)),
              Ce.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Ce.set(t, n),
                o || B1(u, t, n, p.state))),
            e && l === null)
          )
            throw Error(r(528, ""));
          return p;
        }
        if (e && l !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = ti(n)),
              (n = Sa(u).hoistableScripts),
              (l = n.get(e)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, t));
    }
  }
  function Ia(t) {
    return 'href="' + Te(t) + '"';
  }
  function el(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Gm(t) {
    return g({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function B1(t, e, n, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (l.loading = 1)
      : ((e = t.createElement("link")),
        (l.preload = e),
        e.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        Ft(e, "link", n),
        Xt(e),
        t.head.appendChild(e));
  }
  function ti(t) {
    return '[src="' + Te(t) + '"]';
  }
  function nl(t) {
    return "script[async]" + t;
  }
  function Xm(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var l = t.querySelector('style[data-href~="' + Te(n.href) + '"]');
          if (l) return (e.instance = l), Xt(l), l;
          var u = g({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (t.ownerDocument || t).createElement("style")),
            Xt(l),
            Ft(l, "style", u),
            Ys(l, n.precedence, t),
            (e.instance = l)
          );
        case "stylesheet":
          u = Ia(n.href);
          var o = t.querySelector(el(u));
          if (o) return (e.state.loading |= 4), (e.instance = o), Xt(o), o;
          (l = Gm(n)),
            (u = Ce.get(u)) && Vo(l, u),
            (o = (t.ownerDocument || t).createElement("link")),
            Xt(o);
          var p = o;
          return (
            (p._p = new Promise(function (v, T) {
              (p.onload = v), (p.onerror = T);
            })),
            Ft(o, "link", l),
            (e.state.loading |= 4),
            Ys(o, n.precedence, t),
            (e.instance = o)
          );
        case "script":
          return (
            (o = ti(n.src)),
            (u = t.querySelector(nl(o)))
              ? ((e.instance = u), Xt(u), u)
              : ((l = n),
                (u = Ce.get(o)) && ((l = g({}, n)), zo(l, u)),
                (t = t.ownerDocument || t),
                (u = t.createElement("script")),
                Xt(u),
                Ft(u, "link", l),
                t.head.appendChild(u),
                (e.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((l = e.instance), (e.state.loading |= 4), Ys(l, n.precedence, t));
    return e.instance;
  }
  function Ys(t, e, n) {
    for (
      var l = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = l.length ? l[l.length - 1] : null,
        o = u,
        p = 0;
      p < l.length;
      p++
    ) {
      var v = l[p];
      if (v.dataset.precedence === e) o = v;
      else if (o !== u) break;
    }
    o
      ? o.parentNode.insertBefore(t, o.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function Vo(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function zo(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Gs = null;
  function Zm(t, e, n) {
    if (Gs === null) {
      var l = new Map(),
        u = (Gs = new Map());
      u.set(n, l);
    } else (u = Gs), (l = u.get(n)), l || ((l = new Map()), u.set(n, l));
    if (l.has(t)) return l;
    for (
      l.set(t, null), n = n.getElementsByTagName(t), u = 0;
      u < n.length;
      u++
    ) {
      var o = n[u];
      if (
        !(
          o[pi] ||
          o[Wt] ||
          (t === "link" && o.getAttribute("rel") === "stylesheet")
        ) &&
        o.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var p = o.getAttribute(e) || "";
        p = t + p;
        var v = l.get(p);
        v ? v.push(o) : l.set(p, [o]);
      }
    }
    return l;
  }
  function Km(t, e, n) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function N1(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Qm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var al = null;
  function L1() {}
  function H1(t, e, n) {
    if (al === null) throw Error(r(475));
    var l = al;
    if (
      e.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var u = Ia(n.href),
          o = t.querySelector(el(u));
        if (o) {
          (t = o._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = Xs.bind(l)), t.then(l, l)),
            (e.state.loading |= 4),
            (e.instance = o),
            Xt(o);
          return;
        }
        (o = t.ownerDocument || t),
          (n = Gm(n)),
          (u = Ce.get(u)) && Vo(n, u),
          (o = o.createElement("link")),
          Xt(o);
        var p = o;
        (p._p = new Promise(function (v, T) {
          (p.onload = v), (p.onerror = T);
        })),
          Ft(o, "link", n),
          (e.instance = o);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (l.count++,
          (e = Xs.bind(l)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function j1() {
    if (al === null) throw Error(r(475));
    var t = al;
    return (
      t.stylesheets && t.count === 0 && wo(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var n = setTimeout(function () {
              if ((t.stylesheets && wo(t, t.stylesheets), t.unsuspend)) {
                var l = t.unsuspend;
                (t.unsuspend = null), l();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function Xs() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) wo(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Zs = null;
  function wo(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Zs = new Map()),
        e.forEach(q1, t),
        (Zs = null),
        Xs.call(t));
  }
  function q1(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Zs.get(t);
      if (n) var l = n.get(null);
      else {
        (n = new Map()), Zs.set(t, n);
        for (
          var u = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            o = 0;
          o < u.length;
          o++
        ) {
          var p = u[o];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") &&
            (n.set(p.dataset.precedence, p), (l = p));
        }
        l && n.set(null, l);
      }
      (u = e.instance),
        (p = u.getAttribute("data-precedence")),
        (o = n.get(p) || l),
        o === l && n.set(null, u),
        n.set(p, u),
        this.count++,
        (l = Xs.bind(this)),
        u.addEventListener("load", l),
        u.addEventListener("error", l),
        o
          ? o.parentNode.insertBefore(u, o.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(u, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var il = {
    $$typeof: L,
    Provider: null,
    Consumer: null,
    _currentValue: k,
    _currentValue2: k,
    _threadCount: 0,
  };
  function Y1(t, e, n, l, u, o, p, v) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Du(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Du(0)),
      (this.hiddenUpdates = Du(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = u),
      (this.onCaughtError = o),
      (this.onRecoverableError = p),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = v),
      (this.incompleteTransitions = new Map());
  }
  function Pm(t, e, n, l, u, o, p, v, T, C, B, j) {
    return (
      (t = new Y1(t, e, n, p, v, T, C, j)),
      (e = 1),
      o === !0 && (e |= 24),
      (o = me(3, null, null, e)),
      (t.current = o),
      (o.stateNode = t),
      (e = hr()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (o.memoizedState = { element: l, isDehydrated: n, cache: e }),
      yr(o),
      t
    );
  }
  function km(t) {
    return t ? ((t = za), t) : za;
  }
  function Jm(t, e, n, l, u, o) {
    (u = km(u)),
      l.context === null ? (l.context = u) : (l.pendingContext = u),
      (l = xn(e)),
      (l.payload = { element: n }),
      (o = o === void 0 ? null : o),
      o !== null && (l.callback = o),
      (n = An(t, l, e)),
      n !== null && (Se(n, t, e), _i(n, t, e));
  }
  function Fm(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Uo(t, e) {
    Fm(t, e), (t = t.alternate) && Fm(t, e);
  }
  function $m(t) {
    if (t.tag === 13) {
      var e = Va(t, 67108864);
      e !== null && Se(e, t, 67108864), Uo(t, 67108864);
    }
  }
  var Ks = !0;
  function G1(t, e, n, l) {
    var u = N.T;
    N.T = null;
    var o = X.p;
    try {
      (X.p = 2), _o(t, e, n, l);
    } finally {
      (X.p = o), (N.T = u);
    }
  }
  function X1(t, e, n, l) {
    var u = N.T;
    N.T = null;
    var o = X.p;
    try {
      (X.p = 8), _o(t, e, n, l);
    } finally {
      (X.p = o), (N.T = u);
    }
  }
  function _o(t, e, n, l) {
    if (Ks) {
      var u = Bo(l);
      if (u === null) To(t, e, l, Qs, n), Im(t, l);
      else if (K1(u, t, e, n, l)) l.stopPropagation();
      else if ((Im(t, l), e & 4 && -1 < Z1.indexOf(t))) {
        for (; u !== null; ) {
          var o = va(u);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                  var p = Kn(o.pendingLanes);
                  if (p !== 0) {
                    var v = o;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; p; ) {
                      var T = 1 << (31 - he(p));
                      (v.entanglements[1] |= T), (p &= ~T);
                    }
                    Ge(o), (yt & 6) === 0 && ((Os = Le() + 500), $i(0));
                  }
                }
                break;
              case 13:
                (v = Va(o, 2)), v !== null && Se(v, o, 2), zs(), Uo(o, 2);
            }
          if (((o = Bo(l)), o === null && To(t, e, l, Qs, n), o === u)) break;
          u = o;
        }
        u !== null && l.stopPropagation();
      } else To(t, e, l, null, n);
    }
  }
  function Bo(t) {
    return (t = ju(t)), No(t);
  }
  var Qs = null;
  function No(t) {
    if (((Qs = null), (t = ga(t)), t !== null)) {
      var e = f(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = h(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Qs = t), null;
  }
  function Wm(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ov()) {
          case hf:
            return 2;
          case df:
            return 8;
          case Hl:
          case Vv:
            return 32;
          case mf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Lo = !1,
    Nn = null,
    Ln = null,
    Hn = null,
    ll = new Map(),
    sl = new Map(),
    jn = [],
    Z1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Im(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Nn = null;
        break;
      case "dragenter":
      case "dragleave":
        Ln = null;
        break;
      case "mouseover":
      case "mouseout":
        Hn = null;
        break;
      case "pointerover":
      case "pointerout":
        ll.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        sl.delete(e.pointerId);
    }
  }
  function ul(t, e, n, l, u, o) {
    return t === null || t.nativeEvent !== o
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: o,
          targetContainers: [u],
        }),
        e !== null && ((e = va(e)), e !== null && $m(e)),
        t)
      : ((t.eventSystemFlags |= l),
        (e = t.targetContainers),
        u !== null && e.indexOf(u) === -1 && e.push(u),
        t);
  }
  function K1(t, e, n, l, u) {
    switch (e) {
      case "focusin":
        return (Nn = ul(Nn, t, e, n, l, u)), !0;
      case "dragenter":
        return (Ln = ul(Ln, t, e, n, l, u)), !0;
      case "mouseover":
        return (Hn = ul(Hn, t, e, n, l, u)), !0;
      case "pointerover":
        var o = u.pointerId;
        return ll.set(o, ul(ll.get(o) || null, t, e, n, l, u)), !0;
      case "gotpointercapture":
        return (
          (o = u.pointerId), sl.set(o, ul(sl.get(o) || null, t, e, n, l, u)), !0
        );
    }
    return !1;
  }
  function tp(t) {
    var e = ga(t.target);
    if (e !== null) {
      var n = f(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = h(n)), e !== null)) {
            (t.blockedOn = e),
              Hv(t.priority, function () {
                if (n.tag === 13) {
                  var l = ve();
                  l = Cu(l);
                  var u = Va(n, l);
                  u !== null && Se(u, n, l), Uo(n, l);
                }
              });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Ps(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Bo(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var l = new n.constructor(n.type, n);
        (Hu = l), n.target.dispatchEvent(l), (Hu = null);
      } else return (e = va(n)), e !== null && $m(e), (t.blockedOn = n), !1;
      e.shift();
    }
    return !0;
  }
  function ep(t, e, n) {
    Ps(t) && n.delete(e);
  }
  function Q1() {
    (Lo = !1),
      Nn !== null && Ps(Nn) && (Nn = null),
      Ln !== null && Ps(Ln) && (Ln = null),
      Hn !== null && Ps(Hn) && (Hn = null),
      ll.forEach(ep),
      sl.forEach(ep);
  }
  function ks(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Lo ||
        ((Lo = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, Q1)));
  }
  var Js = null;
  function np(t) {
    Js !== t &&
      ((Js = t),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Js === t && (Js = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            l = t[e + 1],
            u = t[e + 2];
          if (typeof l != "function") {
            if (No(l || n) === null) continue;
            break;
          }
          var o = va(n);
          o !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Br(o, { pending: !0, data: u, method: n.method, action: l }, l, u));
        }
      }));
  }
  function rl(t) {
    function e(T) {
      return ks(T, t);
    }
    Nn !== null && ks(Nn, t),
      Ln !== null && ks(Ln, t),
      Hn !== null && ks(Hn, t),
      ll.forEach(e),
      sl.forEach(e);
    for (var n = 0; n < jn.length; n++) {
      var l = jn[n];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < jn.length && ((n = jn[0]), n.blockedOn === null); )
      tp(n), n.blockedOn === null && jn.shift();
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var u = n[l],
          o = n[l + 1],
          p = u[le] || null;
        if (typeof o == "function") p || np(n);
        else if (p) {
          var v = null;
          if (o && o.hasAttribute("formAction")) {
            if (((u = o), (p = o[le] || null))) v = p.formAction;
            else if (No(u) !== null) continue;
          } else v = p.action;
          typeof v == "function" ? (n[l + 1] = v) : (n.splice(l, 3), (l -= 3)),
            np(n);
        }
      }
  }
  function Ho(t) {
    this._internalRoot = t;
  }
  (Fs.prototype.render = Ho.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var n = e.current,
        l = ve();
      Jm(n, l, t, e, null, null);
    }),
    (Fs.prototype.unmount = Ho.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          Jm(t.current, 2, null, t, null, null), zs(), (e[ya] = null);
        }
      });
  function Fs(t) {
    this._internalRoot = t;
  }
  Fs.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Sf();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < jn.length && e !== 0 && e < jn[n].priority; n++);
      jn.splice(n, 0, t), n === 0 && tp(t);
    }
  };
  var ap = i.version;
  if (ap !== "19.1.0") throw Error(r(527, ap, "19.1.0"));
  X.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(r(188))
        : ((t = Object.keys(t).join(",")), Error(r(268, t)));
    return (
      (t = d(e)),
      (t = t !== null ? y(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var P1 = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: N,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var $s = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$s.isDisabled && $s.supportsFiber)
      try {
        (hi = $s.inject(P1)), (fe = $s);
      } catch {}
  }
  return (
    (cl.createRoot = function (t, e) {
      if (!c(t)) throw Error(r(299));
      var n = !1,
        l = "",
        u = Sd,
        o = bd,
        p = Td,
        v = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
          e.onCaughtError !== void 0 && (o = e.onCaughtError),
          e.onRecoverableError !== void 0 && (p = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (v = e.unstable_transitionCallbacks)),
        (e = Pm(t, 1, !1, null, null, n, l, u, o, p, v, null)),
        (t[ya] = e.current),
        bo(t),
        new Ho(e)
      );
    }),
    (cl.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(r(299));
      var l = !1,
        u = "",
        o = Sd,
        p = bd,
        v = Td,
        T = null,
        C = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (o = n.onUncaughtError),
          n.onCaughtError !== void 0 && (p = n.onCaughtError),
          n.onRecoverableError !== void 0 && (v = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (T = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (C = n.formState)),
        (e = Pm(t, 1, !0, e, n ?? null, l, u, o, p, v, T, C)),
        (e.context = km(null)),
        (n = e.current),
        (l = ve()),
        (l = Cu(l)),
        (u = xn(l)),
        (u.callback = null),
        An(n, u, l),
        (n = l),
        (e.current.lanes = n),
        mi(e, n),
        Ge(e),
        (t[ya] = e.current),
        bo(t),
        new Fs(e)
      );
    }),
    (cl.version = "19.1.0"),
    cl
  );
}
var dp;
function aS() {
  if (dp) return Yo.exports;
  dp = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return a(), (Yo.exports = nS()), Yo.exports;
}
var iS = aS();
const Ly = V.createContext({});
function lS(a) {
  const i = V.useRef(null);
  return i.current === null && (i.current = a()), i.current;
}
const Dc = typeof window < "u",
  sS = Dc ? V.useLayoutEffect : V.useEffect,
  Cc = V.createContext(null),
  Hy = V.createContext({
    transformPagePoint: (a) => a,
    isStatic: !1,
    reducedMotion: "never",
  });
function uS(a = !0) {
  const i = V.useContext(Cc);
  if (i === null) return [!0, null];
  const { isPresent: s, onExitComplete: r, register: c } = i,
    f = V.useId();
  V.useEffect(() => {
    if (a) return c(f);
  }, [a]);
  const h = V.useCallback(() => a && r && r(f), [f, r, a]);
  return !s && r ? [!1, h] : [!0];
}
function Oc(a, i) {
  a.indexOf(i) === -1 && a.push(i);
}
function Vc(a, i) {
  const s = a.indexOf(i);
  s > -1 && a.splice(s, 1);
}
let jy = () => {};
const rS = { useManualTiming: !1 };
function zc(a) {
  let i;
  return () => (i === void 0 && (i = a()), i);
}
const ze = (a) => a,
  bl = (a, i, s) => {
    const r = i - a;
    return r === 0 ? 1 : (s - a) / r;
  };
class wc {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return Oc(this.subscriptions, i), () => Vc(this.subscriptions, i);
  }
  notify(i, s, r) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](i, s, r);
      else
        for (let f = 0; f < c; f++) {
          const h = this.subscriptions[f];
          h && h(i, s, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Xe = (a) => a * 1e3,
  Ze = (a) => a / 1e3;
function qy(a, i) {
  return i ? a * (1e3 / i) : 0;
}
const oS = zc(() => window.ScrollTimeline !== void 0);
class cS {
  constructor(i) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = i.filter(Boolean));
  }
  get finished() {
    return Promise.all(this.animations.map((i) => i.finished));
  }
  getAll(i) {
    return this.animations[0][i];
  }
  setAll(i, s) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][i] = s;
  }
  attachTimeline(i, s) {
    const r = this.animations.map((c) => {
      if (oS() && c.attachTimeline) return c.attachTimeline(i);
      if (typeof s == "function") return s(c);
    });
    return () => {
      r.forEach((c, f) => {
        c && c(), this.animations[f].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(i) {
    this.setAll("time", i);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(i) {
    this.setAll("speed", i);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let i = 0;
    for (let s = 0; s < this.animations.length; s++)
      i = Math.max(i, this.animations[s].duration);
    return i;
  }
  runAll(i) {
    this.animations.forEach((s) => s[i]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class fS extends cS {
  then(i, s) {
    return this.finished.finally(i).then(() => {});
  }
}
const mp = { value: null },
  Uc = (a) => Array.isArray(a) && typeof a[0] == "number",
  hS = {};
function dS(a, i) {
  const s = zc(a);
  return () => hS[i] ?? s();
}
const Tl = dS(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Yy = (a, i, s = 10) => {
    let r = "";
    const c = Math.max(Math.round(i / s), 2);
    for (let f = 0; f < c; f++) r += a(f / (c - 1)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  ml = ([a, i, s, r]) => `cubic-bezier(${a}, ${i}, ${s}, ${r})`,
  lc = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ml([0, 0.65, 0.55, 1]),
    circOut: ml([0.55, 0, 1, 0.45]),
    backIn: ml([0.31, 0.01, 0.66, -0.59]),
    backOut: ml([0.33, 1.53, 0.69, 0.99]),
  };
function Gy(a, i) {
  if (a)
    return typeof a == "function" && Tl()
      ? Yy(a, i)
      : Uc(a)
        ? ml(a)
        : Array.isArray(a)
          ? a.map((s) => Gy(s, i) || lc.easeOut)
          : lc[a];
}
function mS(
  a,
  i,
  s,
  {
    delay: r = 0,
    duration: c = 300,
    repeat: f = 0,
    repeatType: h = "loop",
    ease: m = "easeInOut",
    times: d,
  } = {},
  y = void 0
) {
  const g = { [i]: s };
  d && (g.offset = d);
  const S = Gy(m, c);
  return (
    Array.isArray(S) && (g.easing = S),
    a.animate(g, {
      delay: r,
      duration: c,
      easing: Array.isArray(S) ? "linear" : S,
      fill: "both",
      iterations: f + 1,
      direction: h === "reverse" ? "alternate" : "normal",
      pseudoElement: y,
    })
  );
}
function _c(a) {
  return typeof a == "function" && "applyToOptions" in a;
}
function Bc(a, i) {
  return (a == null ? void 0 : a[i]) ?? (a == null ? void 0 : a.default) ?? a;
}
const uu = 2e4;
function Nc(a) {
  let i = 0;
  const s = 50;
  let r = a.next(i);
  for (; !r.done && i < uu; ) (i += s), (r = a.next(i));
  return i >= uu ? 1 / 0 : i;
}
function pS(a, i = 100, s) {
  const r = s({ ...a, keyframes: [0, i] }),
    c = Math.min(Nc(r), uu);
  return {
    type: "keyframes",
    ease: (f) => r.next(c * f).value / i,
    duration: Ze(c),
  };
}
function Xy(a) {
  return !!(
    (typeof a == "function" && Tl()) ||
    !a ||
    (typeof a == "string" && (a in lc || Tl())) ||
    Uc(a) ||
    (Array.isArray(a) && a.every(Xy))
  );
}
function pp(a, i) {
  (a.timeline = i), (a.onfinish = null);
}
const Ws = [
  "read",
  "resolveKeyframes",
  "update",
  "preRender",
  "render",
  "postRender",
];
function yS(a, i) {
  let s = new Set(),
    r = new Set(),
    c = !1,
    f = !1;
  const h = new WeakSet();
  let m = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = 0;
  function y(S) {
    h.has(S) && (g.schedule(S), a()), d++, S(m);
  }
  const g = {
    schedule: (S, b = !1, E = !1) => {
      const _ = E && c ? s : r;
      return b && h.add(S), _.has(S) || _.add(S), S;
    },
    cancel: (S) => {
      r.delete(S), h.delete(S);
    },
    process: (S) => {
      if (((m = S), c)) {
        f = !0;
        return;
      }
      (c = !0),
        ([s, r] = [r, s]),
        s.forEach(y),
        i && mp.value && mp.value.frameloop[i].push(d),
        (d = 0),
        s.clear(),
        (c = !1),
        f && ((f = !1), g.process(S));
    },
  };
  return g;
}
const gS = 40;
function Zy(a, i) {
  let s = !1,
    r = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    f = () => (s = !0),
    h = Ws.reduce((O, Y) => ((O[Y] = yS(f, i ? Y : void 0)), O), {}),
    {
      read: m,
      resolveKeyframes: d,
      update: y,
      preRender: g,
      render: S,
      postRender: b,
    } = h,
    E = () => {
      const O = performance.now();
      (s = !1),
        (c.delta = r ? 1e3 / 60 : Math.max(Math.min(O - c.timestamp, gS), 1)),
        (c.timestamp = O),
        (c.isProcessing = !0),
        m.process(c),
        d.process(c),
        y.process(c),
        g.process(c),
        S.process(c),
        b.process(c),
        (c.isProcessing = !1),
        s && i && ((r = !1), a(E));
    },
    M = () => {
      (s = !0), (r = !0), c.isProcessing || a(E);
    };
  return {
    schedule: Ws.reduce((O, Y) => {
      const L = h[Y];
      return (
        (O[Y] = (J, G = !1, nt = !1) => (s || M(), L.schedule(J, G, nt))), O
      );
    }, {}),
    cancel: (O) => {
      for (let Y = 0; Y < Ws.length; Y++) h[Ws[Y]].cancel(O);
    },
    state: c,
    steps: h,
  };
}
const {
    schedule: Rt,
    cancel: Gn,
    state: $t,
    steps: Ko,
  } = Zy(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ze, !0),
  { schedule: Lc } = Zy(queueMicrotask, !1);
let nu;
function vS() {
  nu = void 0;
}
const Ke = {
    now: () => (
      nu === void 0 &&
        Ke.set(
          $t.isProcessing || rS.useManualTiming
            ? $t.timestamp
            : performance.now()
        ),
      nu
    ),
    set: (a) => {
      (nu = a), queueMicrotask(vS);
    },
  },
  Be = { x: !1, y: !1 };
function Ky() {
  return Be.x || Be.y;
}
function SS(a) {
  return a === "x" || a === "y"
    ? Be[a]
      ? null
      : ((Be[a] = !0),
        () => {
          Be[a] = !1;
        })
    : Be.x || Be.y
      ? null
      : ((Be.x = Be.y = !0),
        () => {
          Be.x = Be.y = !1;
        });
}
function bS(a, i, s) {
  if (a instanceof EventTarget) return [a];
  if (typeof a == "string") {
    const c = document.querySelectorAll(a);
    return c ? Array.from(c) : [];
  }
  return Array.from(a);
}
function Qy(a, i) {
  const s = bS(a),
    r = new AbortController(),
    c = { passive: !0, ...i, signal: r.signal };
  return [s, c, () => r.abort()];
}
function yp(a) {
  return !(a.pointerType === "touch" || Ky());
}
function TS(a, i, s = {}) {
  const [r, c, f] = Qy(a, s),
    h = (m) => {
      if (!yp(m)) return;
      const { target: d } = m,
        y = i(d, m);
      if (typeof y != "function" || !d) return;
      const g = (S) => {
        yp(S) && (y(S), d.removeEventListener("pointerleave", g));
      };
      d.addEventListener("pointerleave", g, c);
    };
  return (
    r.forEach((m) => {
      m.addEventListener("pointerenter", h, c);
    }),
    f
  );
}
const Py = (a, i) => (i ? (a === i ? !0 : Py(a, i.parentElement)) : !1),
  Hc = (a) =>
    a.pointerType === "mouse"
      ? typeof a.button != "number" || a.button <= 0
      : a.isPrimary !== !1,
  xS = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function AS(a) {
  return xS.has(a.tagName) || a.tabIndex !== -1;
}
const pl = new WeakSet();
function gp(a) {
  return (i) => {
    i.key === "Enter" && a(i);
  };
}
function Qo(a, i) {
  a.dispatchEvent(
    new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 })
  );
}
const ES = (a, i) => {
  const s = a.currentTarget;
  if (!s) return;
  const r = gp(() => {
    if (pl.has(s)) return;
    Qo(s, "down");
    const c = gp(() => {
        Qo(s, "up");
      }),
      f = () => Qo(s, "cancel");
    s.addEventListener("keyup", c, i), s.addEventListener("blur", f, i);
  });
  s.addEventListener("keydown", r, i),
    s.addEventListener("blur", () => s.removeEventListener("keydown", r), i);
};
function vp(a) {
  return Hc(a) && !Ky();
}
function RS(a, i, s = {}) {
  const [r, c, f] = Qy(a, s),
    h = (m) => {
      const d = m.currentTarget;
      if (!vp(m) || pl.has(d)) return;
      pl.add(d);
      const y = i(d, m),
        g = (E, M) => {
          window.removeEventListener("pointerup", S),
            window.removeEventListener("pointercancel", b),
            !(!vp(E) || !pl.has(d)) &&
              (pl.delete(d), typeof y == "function" && y(E, { success: M }));
        },
        S = (E) => {
          g(
            E,
            d === window ||
              d === document ||
              s.useGlobalTarget ||
              Py(d, E.target)
          );
        },
        b = (E) => {
          g(E, !1);
        };
      window.addEventListener("pointerup", S, c),
        window.addEventListener("pointercancel", b, c);
    };
  return (
    r.forEach((m) => {
      (s.useGlobalTarget ? window : m).addEventListener("pointerdown", h, c),
        m instanceof HTMLElement &&
          (m.addEventListener("focus", (y) => ES(y, c)),
          !AS(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0));
    }),
    f
  );
}
const Sp = 30,
  MS = (a) => !isNaN(parseFloat(a));
class DS {
  constructor(i, s = {}) {
    (this.version = "12.6.3"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, c = !0) => {
        const f = Ke.now();
        this.updatedAt !== f && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          c &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(i),
      (this.owner = s.owner);
  }
  setCurrent(i) {
    (this.current = i),
      (this.updatedAt = Ke.now()),
      this.canTrackVelocity === null &&
        i !== void 0 &&
        (this.canTrackVelocity = MS(this.current));
  }
  setPrevFrameValue(i = this.current) {
    (this.prevFrameValue = i), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(i) {
    return this.on("change", i);
  }
  on(i, s) {
    this.events[i] || (this.events[i] = new wc());
    const r = this.events[i].add(s);
    return i === "change"
      ? () => {
          r(),
            Rt.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const i in this.events) this.events[i].clear();
  }
  attach(i, s) {
    (this.passiveEffect = i), (this.stopPassiveEffect = s);
  }
  set(i, s = !0) {
    !s || !this.passiveEffect
      ? this.updateAndNotify(i, s)
      : this.passiveEffect(i, this.updateAndNotify);
  }
  setWithVelocity(i, s, r) {
    this.set(s),
      (this.prev = void 0),
      (this.prevFrameValue = i),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(i, s = !0) {
    this.updateAndNotify(i),
      (this.prev = i),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      s && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const i = Ke.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      i - this.updatedAt > Sp
    )
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, Sp);
    return qy(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
  }
  start(i) {
    return (
      this.stop(),
      new Promise((s) => {
        (this.hasAnimated = !0),
          (this.animation = i(s)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function xl(a, i) {
  return new DS(a, i);
}
const ky = V.createContext({ strict: !1 }),
  bp = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  si = {};
for (const a in bp) si[a] = { isEnabled: (i) => bp[a].some((s) => !!i[s]) };
function CS(a) {
  for (const i in a) si[i] = { ...si[i], ...a[i] };
}
const OS = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function ru(a) {
  return (
    a.startsWith("while") ||
    (a.startsWith("drag") && a !== "draggable") ||
    a.startsWith("layout") ||
    a.startsWith("onTap") ||
    a.startsWith("onPan") ||
    a.startsWith("onLayout") ||
    OS.has(a)
  );
}
let Jy = (a) => !ru(a);
function VS(a) {
  a && (Jy = (i) => (i.startsWith("on") ? !ru(i) : a(i)));
}
try {
  VS(require("@emotion/is-prop-valid").default);
} catch {}
function zS(a, i, s) {
  const r = {};
  for (const c in a)
    (c === "values" && typeof a.values == "object") ||
      ((Jy(c) ||
        (s === !0 && ru(c)) ||
        (!i && !ru(c)) ||
        (a.draggable && c.startsWith("onDrag"))) &&
        (r[c] = a[c]));
  return r;
}
function wS(a) {
  if (typeof Proxy > "u") return a;
  const i = new Map(),
    s = (...r) => a(...r);
  return new Proxy(s, {
    get: (r, c) =>
      c === "create" ? a : (i.has(c) || i.set(c, a(c)), i.get(c)),
  });
}
const gu = V.createContext({});
function vu(a) {
  return a !== null && typeof a == "object" && typeof a.start == "function";
}
function Al(a) {
  return typeof a == "string" || Array.isArray(a);
}
const jc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  qc = ["initial", ...jc];
function Su(a) {
  return vu(a.animate) || qc.some((i) => Al(a[i]));
}
function Fy(a) {
  return !!(Su(a) || a.variants);
}
function US(a, i) {
  if (Su(a)) {
    const { initial: s, animate: r } = a;
    return {
      initial: s === !1 || Al(s) ? s : void 0,
      animate: Al(r) ? r : void 0,
    };
  }
  return a.inherit !== !1 ? i : {};
}
function _S(a) {
  const { initial: i, animate: s } = US(a, V.useContext(gu));
  return V.useMemo(() => ({ initial: i, animate: s }), [Tp(i), Tp(s)]);
}
function Tp(a) {
  return Array.isArray(a) ? a.join(" ") : a;
}
const BS = Symbol.for("motionComponentSymbol");
function ei(a) {
  return (
    a &&
    typeof a == "object" &&
    Object.prototype.hasOwnProperty.call(a, "current")
  );
}
function NS(a, i, s) {
  return V.useCallback(
    (r) => {
      r && a.onMount && a.onMount(r),
        i && (r ? i.mount(r) : i.unmount()),
        s && (typeof s == "function" ? s(r) : ei(s) && (s.current = r));
    },
    [i]
  );
}
const Yc = (a) => a.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  LS = "framerAppearId",
  $y = "data-" + Yc(LS),
  Wy = V.createContext({});
function HS(a, i, s, r, c) {
  var _, U;
  const { visualElement: f } = V.useContext(gu),
    h = V.useContext(ky),
    m = V.useContext(Cc),
    d = V.useContext(Hy).reducedMotion,
    y = V.useRef(null);
  (r = r || h.renderer),
    !y.current &&
      r &&
      (y.current = r(a, {
        visualState: i,
        parent: f,
        props: s,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: d,
      }));
  const g = y.current,
    S = V.useContext(Wy);
  g &&
    !g.projection &&
    c &&
    (g.type === "html" || g.type === "svg") &&
    jS(y.current, s, c, S);
  const b = V.useRef(!1);
  V.useInsertionEffect(() => {
    g && b.current && g.update(s, m);
  });
  const E = s[$y],
    M = V.useRef(
      !!E &&
        !((_ = window.MotionHandoffIsComplete) != null && _.call(window, E)) &&
        ((U = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : U.call(window, E))
    );
  return (
    sS(() => {
      g &&
        ((b.current = !0),
        (window.MotionIsMounted = !0),
        g.updateFeatures(),
        Lc.render(g.render),
        M.current && g.animationState && g.animationState.animateChanges());
    }),
    V.useEffect(() => {
      g &&
        (!M.current && g.animationState && g.animationState.animateChanges(),
        M.current &&
          (queueMicrotask(() => {
            var O;
            (O = window.MotionHandoffMarkAsComplete) == null ||
              O.call(window, E);
          }),
          (M.current = !1)));
    }),
    g
  );
}
function jS(a, i, s, r) {
  const {
    layoutId: c,
    layout: f,
    drag: h,
    dragConstraints: m,
    layoutScroll: d,
    layoutRoot: y,
  } = i;
  (a.projection = new s(
    a.latestValues,
    i["data-framer-portal-id"] ? void 0 : Iy(a.parent)
  )),
    a.projection.setOptions({
      layoutId: c,
      layout: f,
      alwaysMeasureLayout: !!h || (m && ei(m)),
      visualElement: a,
      animationType: typeof f == "string" ? f : "both",
      initialPromotionConfig: r,
      layoutScroll: d,
      layoutRoot: y,
    });
}
function Iy(a) {
  if (a) return a.options.allowProjection !== !1 ? a.projection : Iy(a.parent);
}
function qS({
  preloadedFeatures: a,
  createVisualElement: i,
  useRender: s,
  useVisualState: r,
  Component: c,
}) {
  a && CS(a);
  function f(m, d) {
    let y;
    const g = { ...V.useContext(Hy), ...m, layoutId: YS(m) },
      { isStatic: S } = g,
      b = _S(m),
      E = r(m, S);
    if (!S && Dc) {
      GS();
      const M = XS(g);
      (y = M.MeasureLayout),
        (b.visualElement = HS(c, E, g, i, M.ProjectionNode));
    }
    return Et.jsxs(gu.Provider, {
      value: b,
      children: [
        y && b.visualElement
          ? Et.jsx(y, { visualElement: b.visualElement, ...g })
          : null,
        s(c, m, NS(E, b.visualElement, d), E, S, b.visualElement),
      ],
    });
  }
  f.displayName = `motion.${typeof c == "string" ? c : `create(${c.displayName ?? c.name ?? ""})`}`;
  const h = V.forwardRef(f);
  return (h[BS] = c), h;
}
function YS({ layoutId: a }) {
  const i = V.useContext(Ly).id;
  return i && a !== void 0 ? i + "-" + a : a;
}
function GS(a, i) {
  V.useContext(ky).strict;
}
function XS(a) {
  const { drag: i, layout: s } = si;
  if (!i && !s) return {};
  const r = { ...i, ...s };
  return {
    MeasureLayout:
      (i != null && i.isEnabled(a)) || (s != null && s.isEnabled(a))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const tg = (a) => (i) => typeof i == "string" && i.startsWith(a),
  Gc = tg("--"),
  ZS = tg("var(--"),
  Xc = (a) => (ZS(a) ? KS.test(a.split("/*")[0].trim()) : !1),
  KS =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  El = {};
function QS(a) {
  for (const i in a) (El[i] = a[i]), Gc(i) && (El[i].isCSSVariable = !0);
}
const ri = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  ma = new Set(ri);
function eg(a, { layout: i, layoutId: s }) {
  return (
    ma.has(a) ||
    a.startsWith("origin") ||
    ((i || s !== void 0) && (!!El[a] || a === "opacity"))
  );
}
const ne = (a) => !!(a && a.getVelocity),
  ng = (a, i) => (i && typeof a == "number" ? i.transform(a) : a),
  dn = (a, i, s) => (s > i ? i : s < a ? a : s),
  oi = {
    test: (a) => typeof a == "number",
    parse: parseFloat,
    transform: (a) => a,
  },
  Rl = { ...oi, transform: (a) => dn(0, 1, a) },
  Is = { ...oi, default: 1 },
  Vl = (a) => ({
    test: (i) =>
      typeof i == "string" && i.endsWith(a) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: (i) => `${i}${a}`,
  }),
  Yn = Vl("deg"),
  Qe = Vl("%"),
  tt = Vl("px"),
  PS = Vl("vh"),
  kS = Vl("vw"),
  xp = {
    ...Qe,
    parse: (a) => Qe.parse(a) / 100,
    transform: (a) => Qe.transform(a * 100),
  },
  JS = {
    borderWidth: tt,
    borderTopWidth: tt,
    borderRightWidth: tt,
    borderBottomWidth: tt,
    borderLeftWidth: tt,
    borderRadius: tt,
    radius: tt,
    borderTopLeftRadius: tt,
    borderTopRightRadius: tt,
    borderBottomRightRadius: tt,
    borderBottomLeftRadius: tt,
    width: tt,
    maxWidth: tt,
    height: tt,
    maxHeight: tt,
    top: tt,
    right: tt,
    bottom: tt,
    left: tt,
    padding: tt,
    paddingTop: tt,
    paddingRight: tt,
    paddingBottom: tt,
    paddingLeft: tt,
    margin: tt,
    marginTop: tt,
    marginRight: tt,
    marginBottom: tt,
    marginLeft: tt,
    backgroundPositionX: tt,
    backgroundPositionY: tt,
  },
  FS = {
    rotate: Yn,
    rotateX: Yn,
    rotateY: Yn,
    rotateZ: Yn,
    scale: Is,
    scaleX: Is,
    scaleY: Is,
    scaleZ: Is,
    skew: Yn,
    skewX: Yn,
    skewY: Yn,
    distance: tt,
    translateX: tt,
    translateY: tt,
    translateZ: tt,
    x: tt,
    y: tt,
    z: tt,
    perspective: tt,
    transformPerspective: tt,
    opacity: Rl,
    originX: xp,
    originY: xp,
    originZ: tt,
  },
  Ap = { ...oi, transform: Math.round },
  Zc = {
    ...JS,
    ...FS,
    zIndex: Ap,
    size: tt,
    fillOpacity: Rl,
    strokeOpacity: Rl,
    numOctaves: Ap,
  },
  $S = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  WS = ri.length;
function IS(a, i, s) {
  let r = "",
    c = !0;
  for (let f = 0; f < WS; f++) {
    const h = ri[f],
      m = a[h];
    if (m === void 0) continue;
    let d = !0;
    if (
      (typeof m == "number"
        ? (d = m === (h.startsWith("scale") ? 1 : 0))
        : (d = parseFloat(m) === 0),
      !d || s)
    ) {
      const y = ng(m, Zc[h]);
      if (!d) {
        c = !1;
        const g = $S[h] || h;
        r += `${g}(${y}) `;
      }
      s && (i[h] = y);
    }
  }
  return (r = r.trim()), s ? (r = s(i, c ? "" : r)) : c && (r = "none"), r;
}
function Kc(a, i, s) {
  const { style: r, vars: c, transformOrigin: f } = a;
  let h = !1,
    m = !1;
  for (const d in i) {
    const y = i[d];
    if (ma.has(d)) {
      h = !0;
      continue;
    } else if (Gc(d)) {
      c[d] = y;
      continue;
    } else {
      const g = ng(y, Zc[d]);
      d.startsWith("origin") ? ((m = !0), (f[d] = g)) : (r[d] = g);
    }
  }
  if (
    (i.transform ||
      (h || s
        ? (r.transform = IS(i, a.transform, s))
        : r.transform && (r.transform = "none")),
    m)
  ) {
    const { originX: d = "50%", originY: y = "50%", originZ: g = 0 } = f;
    r.transformOrigin = `${d} ${y} ${g}`;
  }
}
const Qc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function ag(a, i, s) {
  for (const r in i) !ne(i[r]) && !eg(r, s) && (a[r] = i[r]);
}
function tb({ transformTemplate: a }, i) {
  return V.useMemo(() => {
    const s = Qc();
    return Kc(s, i, a), Object.assign({}, s.vars, s.style);
  }, [i]);
}
function eb(a, i) {
  const s = a.style || {},
    r = {};
  return ag(r, s, a), Object.assign(r, tb(a, i)), r;
}
function nb(a, i) {
  const s = {},
    r = eb(a, i);
  return (
    a.drag &&
      a.dragListener !== !1 &&
      ((s.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        a.drag === !0 ? "none" : `pan-${a.drag === "x" ? "y" : "x"}`)),
    a.tabIndex === void 0 &&
      (a.onTap || a.onTapStart || a.whileTap) &&
      (s.tabIndex = 0),
    (s.style = r),
    s
  );
}
const ab = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Pc(a) {
  return typeof a != "string" || a.includes("-")
    ? !1
    : !!(ab.indexOf(a) > -1 || /[A-Z]/u.test(a));
}
const ib = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  lb = { offset: "strokeDashoffset", array: "strokeDasharray" };
function sb(a, i, s = 1, r = 0, c = !0) {
  a.pathLength = 1;
  const f = c ? ib : lb;
  a[f.offset] = tt.transform(-r);
  const h = tt.transform(i),
    m = tt.transform(s);
  a[f.array] = `${h} ${m}`;
}
function Ep(a, i, s) {
  return typeof a == "string" ? a : tt.transform(i + s * a);
}
function ub(a, i, s) {
  const r = Ep(i, a.x, a.width),
    c = Ep(s, a.y, a.height);
  return `${r} ${c}`;
}
function kc(
  a,
  {
    attrX: i,
    attrY: s,
    attrScale: r,
    originX: c,
    originY: f,
    pathLength: h,
    pathSpacing: m = 1,
    pathOffset: d = 0,
    ...y
  },
  g,
  S
) {
  if ((Kc(a, y, S), g)) {
    a.style.viewBox && (a.attrs.viewBox = a.style.viewBox);
    return;
  }
  (a.attrs = a.style), (a.style = {});
  const { attrs: b, style: E, dimensions: M } = a;
  b.transform && (M && (E.transform = b.transform), delete b.transform),
    M &&
      (c !== void 0 || f !== void 0 || E.transform) &&
      (E.transformOrigin = ub(
        M,
        c !== void 0 ? c : 0.5,
        f !== void 0 ? f : 0.5
      )),
    i !== void 0 && (b.x = i),
    s !== void 0 && (b.y = s),
    r !== void 0 && (b.scale = r),
    h !== void 0 && sb(b, h, m, d, !1);
}
const ig = () => ({ ...Qc(), attrs: {} }),
  Jc = (a) => typeof a == "string" && a.toLowerCase() === "svg";
function rb(a, i, s, r) {
  const c = V.useMemo(() => {
    const f = ig();
    return (
      kc(f, i, Jc(r), a.transformTemplate),
      { ...f.attrs, style: { ...f.style } }
    );
  }, [i]);
  if (a.style) {
    const f = {};
    ag(f, a.style, a), (c.style = { ...f, ...c.style });
  }
  return c;
}
function ob(a = !1) {
  return (s, r, c, { latestValues: f }, h) => {
    const d = (Pc(s) ? rb : nb)(r, f, h, s),
      y = zS(r, typeof s == "string", a),
      g = s !== V.Fragment ? { ...y, ...d, ref: c } : {},
      { children: S } = r,
      b = V.useMemo(() => (ne(S) ? S.get() : S), [S]);
    return V.createElement(s, { ...g, children: b });
  };
}
function Rp(a) {
  const i = [{}, {}];
  return (
    a == null ||
      a.values.forEach((s, r) => {
        (i[0][r] = s.get()), (i[1][r] = s.getVelocity());
      }),
    i
  );
}
function Fc(a, i, s, r) {
  if (typeof i == "function") {
    const [c, f] = Rp(r);
    i = i(s !== void 0 ? s : a.custom, c, f);
  }
  if (
    (typeof i == "string" && (i = a.variants && a.variants[i]),
    typeof i == "function")
  ) {
    const [c, f] = Rp(r);
    i = i(s !== void 0 ? s : a.custom, c, f);
  }
  return i;
}
const sc = (a) => Array.isArray(a),
  cb = (a) => !!(a && typeof a == "object" && a.mix && a.toValue),
  fb = (a) => (sc(a) ? a[a.length - 1] || 0 : a);
function au(a) {
  const i = ne(a) ? a.get() : a;
  return cb(i) ? i.toValue() : i;
}
function hb(
  { scrapeMotionValuesFromProps: a, createRenderState: i, onUpdate: s },
  r,
  c,
  f
) {
  const h = { latestValues: db(r, c, f, a), renderState: i() };
  return (
    s &&
      ((h.onMount = (m) => s({ props: r, current: m, ...h })),
      (h.onUpdate = (m) => s(m))),
    h
  );
}
const lg = (a) => (i, s) => {
  const r = V.useContext(gu),
    c = V.useContext(Cc),
    f = () => hb(a, i, r, c);
  return s ? f() : lS(f);
};
function db(a, i, s, r) {
  const c = {},
    f = r(a, {});
  for (const b in f) c[b] = au(f[b]);
  let { initial: h, animate: m } = a;
  const d = Su(a),
    y = Fy(a);
  i &&
    y &&
    !d &&
    a.inherit !== !1 &&
    (h === void 0 && (h = i.initial), m === void 0 && (m = i.animate));
  let g = s ? s.initial === !1 : !1;
  g = g || h === !1;
  const S = g ? m : h;
  if (S && typeof S != "boolean" && !vu(S)) {
    const b = Array.isArray(S) ? S : [S];
    for (let E = 0; E < b.length; E++) {
      const M = Fc(a, b[E]);
      if (M) {
        const { transitionEnd: _, transition: U, ...O } = M;
        for (const Y in O) {
          let L = O[Y];
          if (Array.isArray(L)) {
            const J = g ? L.length - 1 : 0;
            L = L[J];
          }
          L !== null && (c[Y] = L);
        }
        for (const Y in _) c[Y] = _[Y];
      }
    }
  }
  return c;
}
function $c(a, i, s) {
  var f;
  const { style: r } = a,
    c = {};
  for (const h in r)
    (ne(r[h]) ||
      (i.style && ne(i.style[h])) ||
      eg(h, a) ||
      ((f = s == null ? void 0 : s.getValue(h)) == null
        ? void 0
        : f.liveStyle) !== void 0) &&
      (c[h] = r[h]);
  return c;
}
const mb = {
  useVisualState: lg({
    scrapeMotionValuesFromProps: $c,
    createRenderState: Qc,
  }),
};
function sg(a, i) {
  try {
    i.dimensions =
      typeof a.getBBox == "function" ? a.getBBox() : a.getBoundingClientRect();
  } catch {
    i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
function ug(a, { style: i, vars: s }, r, c) {
  Object.assign(a.style, i, c && c.getProjectionStyles(r));
  for (const f in s) a.style.setProperty(f, s[f]);
}
const rg = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function og(a, i, s, r) {
  ug(a, i, void 0, r);
  for (const c in i.attrs) a.setAttribute(rg.has(c) ? c : Yc(c), i.attrs[c]);
}
function cg(a, i, s) {
  const r = $c(a, i, s);
  for (const c in a)
    if (ne(a[c]) || ne(i[c])) {
      const f =
        ri.indexOf(c) !== -1
          ? "attr" + c.charAt(0).toUpperCase() + c.substring(1)
          : c;
      r[f] = a[c];
    }
  return r;
}
const Mp = ["x", "y", "width", "height", "cx", "cy", "r"],
  pb = {
    useVisualState: lg({
      scrapeMotionValuesFromProps: cg,
      createRenderState: ig,
      onUpdate: ({
        props: a,
        prevProps: i,
        current: s,
        renderState: r,
        latestValues: c,
      }) => {
        if (!s) return;
        let f = !!a.drag;
        if (!f) {
          for (const m in c)
            if (ma.has(m)) {
              f = !0;
              break;
            }
        }
        if (!f) return;
        let h = !i;
        if (i)
          for (let m = 0; m < Mp.length; m++) {
            const d = Mp[m];
            a[d] !== i[d] && (h = !0);
          }
        h &&
          Rt.read(() => {
            sg(s, r),
              Rt.render(() => {
                kc(r, c, Jc(s.tagName), a.transformTemplate), og(s, r);
              });
          });
      },
    }),
  };
function yb(a, i) {
  return function (r, { forwardMotionProps: c } = { forwardMotionProps: !1 }) {
    const h = {
      ...(Pc(r) ? pb : mb),
      preloadedFeatures: a,
      useRender: ob(c),
      createVisualElement: i,
      Component: r,
    };
    return qS(h);
  };
}
function Ml(a, i, s) {
  const r = a.getProps();
  return Fc(r, i, s !== void 0 ? s : r.custom, a);
}
const fg = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...ri,
]);
function gb(a, i, s) {
  a.hasValue(i) ? a.getValue(i).set(s) : a.addValue(i, xl(s));
}
function vb(a, i) {
  const s = Ml(a, i);
  let { transitionEnd: r = {}, transition: c = {}, ...f } = s || {};
  f = { ...f, ...r };
  for (const h in f) {
    const m = fb(f[h]);
    gb(a, h, m);
  }
}
function Sb(a) {
  return !!(ne(a) && a.add);
}
function uc(a, i) {
  const s = a.getValue("willChange");
  if (Sb(s)) return s.add(i);
}
function hg(a) {
  return a.props[$y];
}
const dg = (a, i, s) =>
    (((1 - 3 * s + 3 * i) * a + (3 * s - 6 * i)) * a + 3 * i) * a,
  bb = 1e-7,
  Tb = 12;
function xb(a, i, s, r, c) {
  let f,
    h,
    m = 0;
  do (h = i + (s - i) / 2), (f = dg(h, r, c) - a), f > 0 ? (s = h) : (i = h);
  while (Math.abs(f) > bb && ++m < Tb);
  return h;
}
function zl(a, i, s, r) {
  if (a === i && s === r) return ze;
  const c = (f) => xb(f, 0, 1, a, s);
  return (f) => (f === 0 || f === 1 ? f : dg(c(f), i, r));
}
const mg = (a) => (i) => (i <= 0.5 ? a(2 * i) / 2 : (2 - a(2 * (1 - i))) / 2),
  pg = (a) => (i) => 1 - a(1 - i),
  yg = zl(0.33, 1.53, 0.69, 0.99),
  Wc = pg(yg),
  gg = mg(Wc),
  vg = (a) =>
    (a *= 2) < 1 ? 0.5 * Wc(a) : 0.5 * (2 - Math.pow(2, -10 * (a - 1))),
  Ic = (a) => 1 - Math.sin(Math.acos(a)),
  Sg = pg(Ic),
  bg = mg(Ic),
  Tg = (a) => /^0[^.\s]+$/u.test(a);
function Ab(a) {
  return typeof a == "number"
    ? a === 0
    : a !== null
      ? a === "none" || a === "0" || Tg(a)
      : !0;
}
const yl = (a) => Math.round(a * 1e5) / 1e5,
  tf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Eb(a) {
  return a == null;
}
const Rb =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  ef = (a, i) => (s) =>
    !!(
      (typeof s == "string" && Rb.test(s) && s.startsWith(a)) ||
      (i && !Eb(s) && Object.prototype.hasOwnProperty.call(s, i))
    ),
  xg = (a, i, s) => (r) => {
    if (typeof r != "string") return r;
    const [c, f, h, m] = r.match(tf);
    return {
      [a]: parseFloat(c),
      [i]: parseFloat(f),
      [s]: parseFloat(h),
      alpha: m !== void 0 ? parseFloat(m) : 1,
    };
  },
  Mb = (a) => dn(0, 255, a),
  Po = { ...oi, transform: (a) => Math.round(Mb(a)) },
  fa = {
    test: ef("rgb", "red"),
    parse: xg("red", "green", "blue"),
    transform: ({ red: a, green: i, blue: s, alpha: r = 1 }) =>
      "rgba(" +
      Po.transform(a) +
      ", " +
      Po.transform(i) +
      ", " +
      Po.transform(s) +
      ", " +
      yl(Rl.transform(r)) +
      ")",
  };
function Db(a) {
  let i = "",
    s = "",
    r = "",
    c = "";
  return (
    a.length > 5
      ? ((i = a.substring(1, 3)),
        (s = a.substring(3, 5)),
        (r = a.substring(5, 7)),
        (c = a.substring(7, 9)))
      : ((i = a.substring(1, 2)),
        (s = a.substring(2, 3)),
        (r = a.substring(3, 4)),
        (c = a.substring(4, 5)),
        (i += i),
        (s += s),
        (r += r),
        (c += c)),
    {
      red: parseInt(i, 16),
      green: parseInt(s, 16),
      blue: parseInt(r, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const rc = { test: ef("#"), parse: Db, transform: fa.transform },
  ni = {
    test: ef("hsl", "hue"),
    parse: xg("hue", "saturation", "lightness"),
    transform: ({ hue: a, saturation: i, lightness: s, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(a) +
      ", " +
      Qe.transform(yl(i)) +
      ", " +
      Qe.transform(yl(s)) +
      ", " +
      yl(Rl.transform(r)) +
      ")",
  },
  ee = {
    test: (a) => fa.test(a) || rc.test(a) || ni.test(a),
    parse: (a) =>
      fa.test(a) ? fa.parse(a) : ni.test(a) ? ni.parse(a) : rc.parse(a),
    transform: (a) =>
      typeof a == "string"
        ? a
        : a.hasOwnProperty("red")
          ? fa.transform(a)
          : ni.transform(a),
  },
  Cb =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Ob(a) {
  var i, s;
  return (
    isNaN(a) &&
    typeof a == "string" &&
    (((i = a.match(tf)) == null ? void 0 : i.length) || 0) +
      (((s = a.match(Cb)) == null ? void 0 : s.length) || 0) >
      0
  );
}
const Ag = "number",
  Eg = "color",
  Vb = "var",
  zb = "var(",
  Dp = "${}",
  wb =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Dl(a) {
  const i = a.toString(),
    s = [],
    r = { color: [], number: [], var: [] },
    c = [];
  let f = 0;
  const m = i
    .replace(
      wb,
      (d) => (
        ee.test(d)
          ? (r.color.push(f), c.push(Eg), s.push(ee.parse(d)))
          : d.startsWith(zb)
            ? (r.var.push(f), c.push(Vb), s.push(d))
            : (r.number.push(f), c.push(Ag), s.push(parseFloat(d))),
        ++f,
        Dp
      )
    )
    .split(Dp);
  return { values: s, split: m, indexes: r, types: c };
}
function Rg(a) {
  return Dl(a).values;
}
function Mg(a) {
  const { split: i, types: s } = Dl(a),
    r = i.length;
  return (c) => {
    let f = "";
    for (let h = 0; h < r; h++)
      if (((f += i[h]), c[h] !== void 0)) {
        const m = s[h];
        m === Ag
          ? (f += yl(c[h]))
          : m === Eg
            ? (f += ee.transform(c[h]))
            : (f += c[h]);
      }
    return f;
  };
}
const Ub = (a) => (typeof a == "number" ? 0 : a);
function _b(a) {
  const i = Rg(a);
  return Mg(a)(i.map(Ub));
}
const Xn = {
    test: Ob,
    parse: Rg,
    createTransformer: Mg,
    getAnimatableNone: _b,
  },
  Bb = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Nb(a) {
  const [i, s] = a.slice(0, -1).split("(");
  if (i === "drop-shadow") return a;
  const [r] = s.match(tf) || [];
  if (!r) return a;
  const c = s.replace(r, "");
  let f = Bb.has(i) ? 1 : 0;
  return r !== s && (f *= 100), i + "(" + f + c + ")";
}
const Lb = /\b([a-z-]*)\(.*?\)/gu,
  oc = {
    ...Xn,
    getAnimatableNone: (a) => {
      const i = a.match(Lb);
      return i ? i.map(Nb).join(" ") : a;
    },
  },
  Hb = {
    ...Zc,
    color: ee,
    backgroundColor: ee,
    outlineColor: ee,
    fill: ee,
    stroke: ee,
    borderColor: ee,
    borderTopColor: ee,
    borderRightColor: ee,
    borderBottomColor: ee,
    borderLeftColor: ee,
    filter: oc,
    WebkitFilter: oc,
  },
  Dg = (a) => Hb[a];
function Cg(a, i) {
  let s = Dg(a);
  return (
    s !== oc && (s = Xn), s.getAnimatableNone ? s.getAnimatableNone(i) : void 0
  );
}
const jb = new Set(["auto", "none", "0"]);
function qb(a, i, s) {
  let r = 0,
    c;
  for (; r < a.length && !c; ) {
    const f = a[r];
    typeof f == "string" && !jb.has(f) && Dl(f).values.length && (c = a[r]),
      r++;
  }
  if (c && s) for (const f of i) a[f] = Cg(s, c);
}
const ha = (a) => (a * 180) / Math.PI,
  cc = (a) => {
    const i = ha(Math.atan2(a[1], a[0]));
    return fc(i);
  },
  Yb = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (a) => (Math.abs(a[0]) + Math.abs(a[3])) / 2,
    rotate: cc,
    rotateZ: cc,
    skewX: (a) => ha(Math.atan(a[1])),
    skewY: (a) => ha(Math.atan(a[2])),
    skew: (a) => (Math.abs(a[1]) + Math.abs(a[2])) / 2,
  },
  fc = (a) => ((a = a % 360), a < 0 && (a += 360), a),
  Cp = cc,
  Op = (a) => Math.sqrt(a[0] * a[0] + a[1] * a[1]),
  Vp = (a) => Math.sqrt(a[4] * a[4] + a[5] * a[5]),
  Gb = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Op,
    scaleY: Vp,
    scale: (a) => (Op(a) + Vp(a)) / 2,
    rotateX: (a) => fc(ha(Math.atan2(a[6], a[5]))),
    rotateY: (a) => fc(ha(Math.atan2(-a[2], a[0]))),
    rotateZ: Cp,
    rotate: Cp,
    skewX: (a) => ha(Math.atan(a[4])),
    skewY: (a) => ha(Math.atan(a[1])),
    skew: (a) => (Math.abs(a[1]) + Math.abs(a[4])) / 2,
  };
function zp(a) {
  return a.includes("scale") ? 1 : 0;
}
function hc(a, i) {
  if (!a || a === "none") return zp(i);
  const s = a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, c;
  if (s) (r = Gb), (c = s);
  else {
    const m = a.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (r = Yb), (c = m);
  }
  if (!c) return zp(i);
  const f = r[i],
    h = c[1].split(",").map(Zb);
  return typeof f == "function" ? f(h) : h[f];
}
const Xb = (a, i) => {
  const { transform: s = "none" } = getComputedStyle(a);
  return hc(s, i);
};
function Zb(a) {
  return parseFloat(a.trim());
}
const wp = (a) => a === oi || a === tt,
  Kb = new Set(["x", "y", "z"]),
  Qb = ri.filter((a) => !Kb.has(a));
function Pb(a) {
  const i = [];
  return (
    Qb.forEach((s) => {
      const r = a.getValue(s);
      r !== void 0 &&
        (i.push([s, r.get()]), r.set(s.startsWith("scale") ? 1 : 0));
    }),
    i
  );
}
const ui = {
  width: ({ x: a }, { paddingLeft: i = "0", paddingRight: s = "0" }) =>
    a.max - a.min - parseFloat(i) - parseFloat(s),
  height: ({ y: a }, { paddingTop: i = "0", paddingBottom: s = "0" }) =>
    a.max - a.min - parseFloat(i) - parseFloat(s),
  top: (a, { top: i }) => parseFloat(i),
  left: (a, { left: i }) => parseFloat(i),
  bottom: ({ y: a }, { top: i }) => parseFloat(i) + (a.max - a.min),
  right: ({ x: a }, { left: i }) => parseFloat(i) + (a.max - a.min),
  x: (a, { transform: i }) => hc(i, "x"),
  y: (a, { transform: i }) => hc(i, "y"),
};
ui.translateX = ui.x;
ui.translateY = ui.y;
const da = new Set();
let dc = !1,
  mc = !1;
function Og() {
  if (mc) {
    const a = Array.from(da).filter((r) => r.needsMeasurement),
      i = new Set(a.map((r) => r.element)),
      s = new Map();
    i.forEach((r) => {
      const c = Pb(r);
      c.length && (s.set(r, c), r.render());
    }),
      a.forEach((r) => r.measureInitialState()),
      i.forEach((r) => {
        r.render();
        const c = s.get(r);
        c &&
          c.forEach(([f, h]) => {
            var m;
            (m = r.getValue(f)) == null || m.set(h);
          });
      }),
      a.forEach((r) => r.measureEndState()),
      a.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (mc = !1), (dc = !1), da.forEach((a) => a.complete()), da.clear();
}
function Vg() {
  da.forEach((a) => {
    a.readKeyframes(), a.needsMeasurement && (mc = !0);
  });
}
function kb() {
  Vg(), Og();
}
class nf {
  constructor(i, s, r, c, f, h = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...i]),
      (this.onComplete = s),
      (this.name = r),
      (this.motionValue = c),
      (this.element = f),
      (this.isAsync = h);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (da.add(this),
          dc || ((dc = !0), Rt.read(Vg), Rt.resolveKeyframes(Og)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: i,
      name: s,
      element: r,
      motionValue: c,
    } = this;
    for (let f = 0; f < i.length; f++)
      if (i[f] === null)
        if (f === 0) {
          const h = c == null ? void 0 : c.get(),
            m = i[i.length - 1];
          if (h !== void 0) i[0] = h;
          else if (r && s) {
            const d = r.readValue(s, m);
            d != null && (i[0] = d);
          }
          i[0] === void 0 && (i[0] = m), c && h === void 0 && c.set(i[0]);
        } else i[f] = i[f - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      da.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), da.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const zg = (a) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a),
  Jb = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Fb(a) {
  const i = Jb.exec(a);
  if (!i) return [,];
  const [, s, r, c] = i;
  return [`--${s ?? r}`, c];
}
function wg(a, i, s = 1) {
  const [r, c] = Fb(a);
  if (!r) return;
  const f = window.getComputedStyle(i).getPropertyValue(r);
  if (f) {
    const h = f.trim();
    return zg(h) ? parseFloat(h) : h;
  }
  return Xc(c) ? wg(c, i, s + 1) : c;
}
const Ug = (a) => (i) => i.test(a),
  $b = { test: (a) => a === "auto", parse: (a) => a },
  _g = [oi, tt, Qe, Yn, kS, PS, $b],
  Up = (a) => _g.find(Ug(a));
class Bg extends nf {
  constructor(i, s, r, c, f) {
    super(i, s, r, c, f, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: s, name: r } = this;
    if (!s || !s.current) return;
    super.readKeyframes();
    for (let d = 0; d < i.length; d++) {
      let y = i[d];
      if (typeof y == "string" && ((y = y.trim()), Xc(y))) {
        const g = wg(y, s.current);
        g !== void 0 && (i[d] = g),
          d === i.length - 1 && (this.finalKeyframe = y);
      }
    }
    if ((this.resolveNoneKeyframes(), !fg.has(r) || i.length !== 2)) return;
    const [c, f] = i,
      h = Up(c),
      m = Up(f);
    if (h !== m)
      if (wp(h) && wp(m))
        for (let d = 0; d < i.length; d++) {
          const y = i[d];
          typeof y == "string" && (i[d] = parseFloat(y));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: s } = this,
      r = [];
    for (let c = 0; c < i.length; c++) Ab(i[c]) && r.push(c);
    r.length && qb(i, r, s);
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: s, name: r } = this;
    if (!i || !i.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = ui[r](
        i.measureViewportBox(),
        window.getComputedStyle(i.current)
      )),
      (s[0] = this.measuredOrigin);
    const c = s[s.length - 1];
    c !== void 0 && i.getValue(r, c).jump(c, !1);
  }
  measureEndState() {
    var m;
    const { element: i, name: s, unresolvedKeyframes: r } = this;
    if (!i || !i.current) return;
    const c = i.getValue(s);
    c && c.jump(this.measuredOrigin, !1);
    const f = r.length - 1,
      h = r[f];
    (r[f] = ui[s](i.measureViewportBox(), window.getComputedStyle(i.current))),
      h !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = h),
      (m = this.removedTransforms) != null &&
        m.length &&
        this.removedTransforms.forEach(([d, y]) => {
          i.getValue(d).set(y);
        }),
      this.resolveNoneKeyframes();
  }
}
const _p = (a, i) =>
  i === "zIndex"
    ? !1
    : !!(
        typeof a == "number" ||
        Array.isArray(a) ||
        (typeof a == "string" &&
          (Xn.test(a) || a === "0") &&
          !a.startsWith("url("))
      );
function Wb(a) {
  const i = a[0];
  if (a.length === 1) return !0;
  for (let s = 0; s < a.length; s++) if (a[s] !== i) return !0;
}
function Ib(a, i, s, r) {
  const c = a[0];
  if (c === null) return !1;
  if (i === "display" || i === "visibility") return !0;
  const f = a[a.length - 1],
    h = _p(c, i),
    m = _p(f, i);
  return !h || !m ? !1 : Wb(a) || ((s === "spring" || _c(s)) && r);
}
const tT = (a) => a !== null;
function bu(a, { repeat: i, repeatType: s = "loop" }, r) {
  const c = a.filter(tT),
    f = i && s !== "loop" && i % 2 === 1 ? 0 : c.length - 1;
  return !f || r === void 0 ? c[f] : r;
}
const eT = 40;
class Ng {
  constructor({
    autoplay: i = !0,
    delay: s = 0,
    type: r = "keyframes",
    repeat: c = 0,
    repeatDelay: f = 0,
    repeatType: h = "loop",
    ...m
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Ke.now()),
      (this.options = {
        autoplay: i,
        delay: s,
        type: r,
        repeat: c,
        repeatDelay: f,
        repeatType: h,
        ...m,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > eT
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && kb(), this._resolved;
  }
  onKeyframesResolved(i, s) {
    (this.resolvedAt = Ke.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: c,
      velocity: f,
      delay: h,
      onComplete: m,
      onUpdate: d,
      isGenerator: y,
    } = this.options;
    if (!y && !Ib(i, r, c, f))
      if (h) this.options.duration = 0;
      else {
        d && d(bu(i, this.options, s)), m && m(), this.resolveFinishedPromise();
        return;
      }
    const g = this.initPlayback(i, s);
    g !== !1 &&
      ((this._resolved = { keyframes: i, finalKeyframe: s, ...g }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(i, s) {
    return this.currentFinishedPromise.then(i, s);
  }
  flatten() {
    this.options.allowFlatten &&
      ((this.options.type = "keyframes"), (this.options.ease = "linear"));
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((i) => {
      this.resolveFinishedPromise = i;
    });
  }
}
const Ot = (a, i, s) => a + (i - a) * s;
function ko(a, i, s) {
  return (
    s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6
      ? a + (i - a) * 6 * s
      : s < 1 / 2
        ? i
        : s < 2 / 3
          ? a + (i - a) * (2 / 3 - s) * 6
          : a
  );
}
function nT({ hue: a, saturation: i, lightness: s, alpha: r }) {
  (a /= 360), (i /= 100), (s /= 100);
  let c = 0,
    f = 0,
    h = 0;
  if (!i) c = f = h = s;
  else {
    const m = s < 0.5 ? s * (1 + i) : s + i - s * i,
      d = 2 * s - m;
    (c = ko(d, m, a + 1 / 3)), (f = ko(d, m, a)), (h = ko(d, m, a - 1 / 3));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(f * 255),
    blue: Math.round(h * 255),
    alpha: r,
  };
}
function ou(a, i) {
  return (s) => (s > 0 ? i : a);
}
const Jo = (a, i, s) => {
    const r = a * a,
      c = s * (i * i - r) + r;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  aT = [rc, fa, ni],
  iT = (a) => aT.find((i) => i.test(a));
function Bp(a) {
  const i = iT(a);
  if (!i) return !1;
  let s = i.parse(a);
  return i === ni && (s = nT(s)), s;
}
const Np = (a, i) => {
    const s = Bp(a),
      r = Bp(i);
    if (!s || !r) return ou(a, i);
    const c = { ...s };
    return (f) => (
      (c.red = Jo(s.red, r.red, f)),
      (c.green = Jo(s.green, r.green, f)),
      (c.blue = Jo(s.blue, r.blue, f)),
      (c.alpha = Ot(s.alpha, r.alpha, f)),
      fa.transform(c)
    );
  },
  lT = (a, i) => (s) => i(a(s)),
  wl = (...a) => a.reduce(lT),
  pc = new Set(["none", "hidden"]);
function sT(a, i) {
  return pc.has(a) ? (s) => (s <= 0 ? a : i) : (s) => (s >= 1 ? i : a);
}
function uT(a, i) {
  return (s) => Ot(a, i, s);
}
function af(a) {
  return typeof a == "number"
    ? uT
    : typeof a == "string"
      ? Xc(a)
        ? ou
        : ee.test(a)
          ? Np
          : cT
      : Array.isArray(a)
        ? Lg
        : typeof a == "object"
          ? ee.test(a)
            ? Np
            : rT
          : ou;
}
function Lg(a, i) {
  const s = [...a],
    r = s.length,
    c = a.map((f, h) => af(f)(f, i[h]));
  return (f) => {
    for (let h = 0; h < r; h++) s[h] = c[h](f);
    return s;
  };
}
function rT(a, i) {
  const s = { ...a, ...i },
    r = {};
  for (const c in s)
    a[c] !== void 0 && i[c] !== void 0 && (r[c] = af(a[c])(a[c], i[c]));
  return (c) => {
    for (const f in r) s[f] = r[f](c);
    return s;
  };
}
function oT(a, i) {
  const s = [],
    r = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < i.values.length; c++) {
    const f = i.types[c],
      h = a.indexes[f][r[f]],
      m = a.values[h] ?? 0;
    (s[c] = m), r[f]++;
  }
  return s;
}
const cT = (a, i) => {
  const s = Xn.createTransformer(i),
    r = Dl(a),
    c = Dl(i);
  return r.indexes.var.length === c.indexes.var.length &&
    r.indexes.color.length === c.indexes.color.length &&
    r.indexes.number.length >= c.indexes.number.length
    ? (pc.has(a) && !c.values.length) || (pc.has(i) && !r.values.length)
      ? sT(a, i)
      : wl(Lg(oT(r, c), c.values), s)
    : ou(a, i);
};
function Hg(a, i, s) {
  return typeof a == "number" && typeof i == "number" && typeof s == "number"
    ? Ot(a, i, s)
    : af(a)(a, i);
}
const fT = 5;
function jg(a, i, s) {
  const r = Math.max(i - fT, 0);
  return qy(s - a(r), i - r);
}
const Ut = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Lp = 0.001;
function hT({
  duration: a = Ut.duration,
  bounce: i = Ut.bounce,
  velocity: s = Ut.velocity,
  mass: r = Ut.mass,
}) {
  let c,
    f,
    h = 1 - i;
  (h = dn(Ut.minDamping, Ut.maxDamping, h)),
    (a = dn(Ut.minDuration, Ut.maxDuration, Ze(a))),
    h < 1
      ? ((c = (y) => {
          const g = y * h,
            S = g * a,
            b = g - s,
            E = yc(y, h),
            M = Math.exp(-S);
          return Lp - (b / E) * M;
        }),
        (f = (y) => {
          const S = y * h * a,
            b = S * s + s,
            E = Math.pow(h, 2) * Math.pow(y, 2) * a,
            M = Math.exp(-S),
            _ = yc(Math.pow(y, 2), h);
          return ((-c(y) + Lp > 0 ? -1 : 1) * ((b - E) * M)) / _;
        }))
      : ((c = (y) => {
          const g = Math.exp(-y * a),
            S = (y - s) * a + 1;
          return -0.001 + g * S;
        }),
        (f = (y) => {
          const g = Math.exp(-y * a),
            S = (s - y) * (a * a);
          return g * S;
        }));
  const m = 5 / a,
    d = mT(c, f, m);
  if (((a = Xe(a)), isNaN(d)))
    return { stiffness: Ut.stiffness, damping: Ut.damping, duration: a };
  {
    const y = Math.pow(d, 2) * r;
    return { stiffness: y, damping: h * 2 * Math.sqrt(r * y), duration: a };
  }
}
const dT = 12;
function mT(a, i, s) {
  let r = s;
  for (let c = 1; c < dT; c++) r = r - a(r) / i(r);
  return r;
}
function yc(a, i) {
  return a * Math.sqrt(1 - i * i);
}
const pT = ["duration", "bounce"],
  yT = ["stiffness", "damping", "mass"];
function Hp(a, i) {
  return i.some((s) => a[s] !== void 0);
}
function gT(a) {
  let i = {
    velocity: Ut.velocity,
    stiffness: Ut.stiffness,
    damping: Ut.damping,
    mass: Ut.mass,
    isResolvedFromDuration: !1,
    ...a,
  };
  if (!Hp(a, yT) && Hp(a, pT))
    if (a.visualDuration) {
      const s = a.visualDuration,
        r = (2 * Math.PI) / (s * 1.2),
        c = r * r,
        f = 2 * dn(0.05, 1, 1 - (a.bounce || 0)) * Math.sqrt(c);
      i = { ...i, mass: Ut.mass, stiffness: c, damping: f };
    } else {
      const s = hT(a);
      (i = { ...i, ...s, mass: Ut.mass }), (i.isResolvedFromDuration = !0);
    }
  return i;
}
function cu(a = Ut.visualDuration, i = Ut.bounce) {
  const s =
    typeof a != "object"
      ? { visualDuration: a, keyframes: [0, 1], bounce: i }
      : a;
  let { restSpeed: r, restDelta: c } = s;
  const f = s.keyframes[0],
    h = s.keyframes[s.keyframes.length - 1],
    m = { done: !1, value: f },
    {
      stiffness: d,
      damping: y,
      mass: g,
      duration: S,
      velocity: b,
      isResolvedFromDuration: E,
    } = gT({ ...s, velocity: -Ze(s.velocity || 0) }),
    M = b || 0,
    _ = y / (2 * Math.sqrt(d * g)),
    U = h - f,
    O = Ze(Math.sqrt(d / g)),
    Y = Math.abs(U) < 5;
  r || (r = Y ? Ut.restSpeed.granular : Ut.restSpeed.default),
    c || (c = Y ? Ut.restDelta.granular : Ut.restDelta.default);
  let L;
  if (_ < 1) {
    const G = yc(O, _);
    L = (nt) => {
      const lt = Math.exp(-_ * O * nt);
      return (
        h -
        lt * (((M + _ * O * U) / G) * Math.sin(G * nt) + U * Math.cos(G * nt))
      );
    };
  } else if (_ === 1) L = (G) => h - Math.exp(-O * G) * (U + (M + O * U) * G);
  else {
    const G = O * Math.sqrt(_ * _ - 1);
    L = (nt) => {
      const lt = Math.exp(-_ * O * nt),
        P = Math.min(G * nt, 300);
      return (
        h - (lt * ((M + _ * O * U) * Math.sinh(P) + G * U * Math.cosh(P))) / G
      );
    };
  }
  const J = {
    calculatedDuration: (E && S) || null,
    next: (G) => {
      const nt = L(G);
      if (E) m.done = G >= S;
      else {
        let lt = 0;
        _ < 1 && (lt = G === 0 ? Xe(M) : jg(L, G, nt));
        const P = Math.abs(lt) <= r,
          st = Math.abs(h - nt) <= c;
        m.done = P && st;
      }
      return (m.value = m.done ? h : nt), m;
    },
    toString: () => {
      const G = Math.min(Nc(J), uu),
        nt = Yy((lt) => J.next(G * lt).value, G, 30);
      return G + "ms " + nt;
    },
    toTransition: () => {},
  };
  return J;
}
cu.applyToOptions = (a) => {
  const i = pS(a, 100, cu);
  return (
    (a.ease = Tl() ? i.ease : "easeOut"),
    (a.duration = Xe(i.duration)),
    (a.type = "keyframes"),
    a
  );
};
function jp({
  keyframes: a,
  velocity: i = 0,
  power: s = 0.8,
  timeConstant: r = 325,
  bounceDamping: c = 10,
  bounceStiffness: f = 500,
  modifyTarget: h,
  min: m,
  max: d,
  restDelta: y = 0.5,
  restSpeed: g,
}) {
  const S = a[0],
    b = { done: !1, value: S },
    E = (P) => (m !== void 0 && P < m) || (d !== void 0 && P > d),
    M = (P) =>
      m === void 0
        ? d
        : d === void 0 || Math.abs(m - P) < Math.abs(d - P)
          ? m
          : d;
  let _ = s * i;
  const U = S + _,
    O = h === void 0 ? U : h(U);
  O !== U && (_ = O - S);
  const Y = (P) => -_ * Math.exp(-P / r),
    L = (P) => O + Y(P),
    J = (P) => {
      const st = Y(P),
        vt = L(P);
      (b.done = Math.abs(st) <= y), (b.value = b.done ? O : vt);
    };
  let G, nt;
  const lt = (P) => {
    E(b.value) &&
      ((G = P),
      (nt = cu({
        keyframes: [b.value, M(b.value)],
        velocity: jg(L, P, b.value),
        damping: c,
        stiffness: f,
        restDelta: y,
        restSpeed: g,
      })));
  };
  return (
    lt(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let st = !1;
        return (
          !nt && G === void 0 && ((st = !0), J(P), lt(P)),
          G !== void 0 && P >= G ? nt.next(P - G) : (!st && J(P), b)
        );
      },
    }
  );
}
const vT = zl(0.42, 0, 1, 1),
  ST = zl(0, 0, 0.58, 1),
  qg = zl(0.42, 0, 0.58, 1),
  bT = (a) => Array.isArray(a) && typeof a[0] != "number",
  TT = {
    linear: ze,
    easeIn: vT,
    easeInOut: qg,
    easeOut: ST,
    circIn: Ic,
    circInOut: bg,
    circOut: Sg,
    backIn: Wc,
    backInOut: gg,
    backOut: yg,
    anticipate: vg,
  },
  qp = (a) => {
    if (Uc(a)) {
      jy(a.length === 4);
      const [i, s, r, c] = a;
      return zl(i, s, r, c);
    } else if (typeof a == "string") return TT[a];
    return a;
  };
function xT(a, i, s) {
  const r = [],
    c = s || Hg,
    f = a.length - 1;
  for (let h = 0; h < f; h++) {
    let m = c(a[h], a[h + 1]);
    if (i) {
      const d = Array.isArray(i) ? i[h] || ze : i;
      m = wl(d, m);
    }
    r.push(m);
  }
  return r;
}
function AT(a, i, { clamp: s = !0, ease: r, mixer: c } = {}) {
  const f = a.length;
  if ((jy(f === i.length), f === 1)) return () => i[0];
  if (f === 2 && i[0] === i[1]) return () => i[1];
  const h = a[0] === a[1];
  a[0] > a[f - 1] && ((a = [...a].reverse()), (i = [...i].reverse()));
  const m = xT(i, r, c),
    d = m.length,
    y = (g) => {
      if (h && g < a[0]) return i[0];
      let S = 0;
      if (d > 1) for (; S < a.length - 2 && !(g < a[S + 1]); S++);
      const b = bl(a[S], a[S + 1], g);
      return m[S](b);
    };
  return s ? (g) => y(dn(a[0], a[f - 1], g)) : y;
}
function ET(a, i) {
  const s = a[a.length - 1];
  for (let r = 1; r <= i; r++) {
    const c = bl(0, i, r);
    a.push(Ot(s, 1, c));
  }
}
function RT(a) {
  const i = [0];
  return ET(i, a.length - 1), i;
}
function MT(a, i) {
  return a.map((s) => s * i);
}
function DT(a, i) {
  return a.map(() => i || qg).splice(0, a.length - 1);
}
function fu({
  duration: a = 300,
  keyframes: i,
  times: s,
  ease: r = "easeInOut",
}) {
  const c = bT(r) ? r.map(qp) : qp(r),
    f = { done: !1, value: i[0] },
    h = MT(s && s.length === i.length ? s : RT(i), a),
    m = AT(h, i, { ease: Array.isArray(c) ? c : DT(i, c) });
  return {
    calculatedDuration: a,
    next: (d) => ((f.value = m(d)), (f.done = d >= a), f),
  };
}
const CT = (a) => {
    const i = ({ timestamp: s }) => a(s);
    return {
      start: () => Rt.update(i, !0),
      stop: () => Gn(i),
      now: () => ($t.isProcessing ? $t.timestamp : Ke.now()),
    };
  },
  OT = { decay: jp, inertia: jp, tween: fu, keyframes: fu, spring: cu },
  VT = (a) => a / 100;
class lf extends Ng {
  constructor(i) {
    super(i),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: d } = this.options;
        d && d();
      });
    const { name: s, motionValue: r, element: c, keyframes: f } = this.options,
      h = (c == null ? void 0 : c.KeyframeResolver) || nf,
      m = (d, y) => this.onKeyframesResolved(d, y);
    (this.resolver = new h(f, m, s, r, c)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(i) {
    const {
        type: s = "keyframes",
        repeat: r = 0,
        repeatDelay: c = 0,
        repeatType: f,
        velocity: h = 0,
      } = this.options,
      m = _c(s) ? s : OT[s] || fu;
    let d, y;
    m !== fu &&
      typeof i[0] != "number" &&
      ((d = wl(VT, Hg(i[0], i[1]))), (i = [0, 100]));
    const g = m({ ...this.options, keyframes: i });
    f === "mirror" &&
      (y = m({ ...this.options, keyframes: [...i].reverse(), velocity: -h })),
      g.calculatedDuration === null && (g.calculatedDuration = Nc(g));
    const { calculatedDuration: S } = g,
      b = S + c,
      E = b * (r + 1) - c;
    return {
      generator: g,
      mirroredGenerator: y,
      mapPercentToKeyframes: d,
      calculatedDuration: S,
      resolvedDuration: b,
      totalDuration: E,
    };
  }
  onPostResolved() {
    const { autoplay: i = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !i
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(i, s = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: P } = this.options;
      return { done: !0, value: P[P.length - 1] };
    }
    const {
      finalKeyframe: c,
      generator: f,
      mirroredGenerator: h,
      mapPercentToKeyframes: m,
      keyframes: d,
      calculatedDuration: y,
      totalDuration: g,
      resolvedDuration: S,
    } = r;
    if (this.startTime === null) return f.next(0);
    const {
      delay: b,
      repeat: E,
      repeatType: M,
      repeatDelay: _,
      onUpdate: U,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, i))
      : this.speed < 0 &&
        (this.startTime = Math.min(i - g / this.speed, this.startTime)),
      s
        ? (this.currentTime = i)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(i - this.startTime) * this.speed);
    const O = this.currentTime - b * (this.speed >= 0 ? 1 : -1),
      Y = this.speed >= 0 ? O < 0 : O > g;
    (this.currentTime = Math.max(O, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = g);
    let L = this.currentTime,
      J = f;
    if (E) {
      const P = Math.min(this.currentTime, g) / S;
      let st = Math.floor(P),
        vt = P % 1;
      !vt && P >= 1 && (vt = 1),
        vt === 1 && st--,
        (st = Math.min(st, E + 1)),
        !!(st % 2) &&
          (M === "reverse"
            ? ((vt = 1 - vt), _ && (vt -= _ / S))
            : M === "mirror" && (J = h)),
        (L = dn(0, 1, vt) * S);
    }
    const G = Y ? { done: !1, value: d[0] } : J.next(L);
    m && (G.value = m(G.value));
    let { done: nt } = G;
    !Y &&
      y !== null &&
      (nt = this.speed >= 0 ? this.currentTime >= g : this.currentTime <= 0);
    const lt =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && nt));
    return (
      lt && c !== void 0 && (G.value = bu(d, this.options, c)),
      U && U(G.value),
      lt && this.finish(),
      G
    );
  }
  get duration() {
    const { resolved: i } = this;
    return i ? Ze(i.calculatedDuration) : 0;
  }
  get time() {
    return Ze(this.currentTime);
  }
  set time(i) {
    (i = Xe(i)),
      (this.currentTime = i),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = i)
        : this.driver && (this.startTime = this.driver.now() - i / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(i) {
    const s = this.playbackSpeed !== i;
    (this.playbackSpeed = i), s && (this.time = Ze(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: i = CT, onPlay: s, startTime: r } = this.options;
    this.driver || (this.driver = i((f) => this.tick(f))), s && s();
    const c = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = c - this.holdTime)
      : this.startTime
        ? this.state === "finished" && (this.startTime = c)
        : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"), (this.holdTime = this.currentTime ?? 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: i } = this.options;
    i && i();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(i) {
    return (this.startTime = 0), this.tick(i, !0);
  }
  get finished() {
    return this.currentFinishedPromise;
  }
}
const zT = new Set(["opacity", "clipPath", "filter", "transform"]),
  wT = zc(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  hu = 10,
  UT = 2e4;
function _T(a) {
  return _c(a.type) || a.type === "spring" || !Xy(a.ease);
}
function BT(a, i) {
  const s = new lf({
    ...i,
    keyframes: a,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: a[0] };
  const c = [];
  let f = 0;
  for (; !r.done && f < UT; ) (r = s.sample(f)), c.push(r.value), (f += hu);
  return { times: void 0, keyframes: c, duration: f - hu, ease: "linear" };
}
const Yg = { anticipate: vg, backInOut: gg, circInOut: bg };
function NT(a) {
  return a in Yg;
}
class Yp extends Ng {
  constructor(i) {
    super(i);
    const { name: s, motionValue: r, element: c, keyframes: f } = this.options;
    (this.resolver = new Bg(
      f,
      (h, m) => this.onKeyframesResolved(h, m),
      s,
      r,
      c
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(i, s) {
    let {
      duration: r = 300,
      times: c,
      ease: f,
      type: h,
      motionValue: m,
      name: d,
      startTime: y,
    } = this.options;
    if (!m.owner || !m.owner.current) return !1;
    if (
      (typeof f == "string" && Tl() && NT(f) && (f = Yg[f]), _T(this.options))
    ) {
      const {
          onComplete: S,
          onUpdate: b,
          motionValue: E,
          element: M,
          ..._
        } = this.options,
        U = BT(i, _);
      (i = U.keyframes),
        i.length === 1 && (i[1] = i[0]),
        (r = U.duration),
        (c = U.times),
        (f = U.ease),
        (h = "keyframes");
    }
    const g = mS(m.owner.current, d, i, {
      ...this.options,
      duration: r,
      times: c,
      ease: f,
    });
    return (
      (g.startTime = y ?? this.calcStartTime()),
      this.pendingTimeline
        ? (pp(g, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (g.onfinish = () => {
            const { onComplete: S } = this.options;
            m.set(bu(i, this.options, s)),
              S && S(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: g, duration: r, times: c, type: h, ease: f, keyframes: i }
    );
  }
  get duration() {
    const { resolved: i } = this;
    if (!i) return 0;
    const { duration: s } = i;
    return Ze(s);
  }
  get time() {
    const { resolved: i } = this;
    if (!i) return 0;
    const { animation: s } = i;
    return Ze(s.currentTime || 0);
  }
  set time(i) {
    const { resolved: s } = this;
    if (!s) return;
    const { animation: r } = s;
    r.currentTime = Xe(i);
  }
  get speed() {
    const { resolved: i } = this;
    if (!i) return 1;
    const { animation: s } = i;
    return s.playbackRate;
  }
  get finished() {
    return this.resolved.animation.finished;
  }
  set speed(i) {
    const { resolved: s } = this;
    if (!s) return;
    const { animation: r } = s;
    r.playbackRate = i;
  }
  get state() {
    const { resolved: i } = this;
    if (!i) return "idle";
    const { animation: s } = i;
    return s.playState;
  }
  get startTime() {
    const { resolved: i } = this;
    if (!i) return null;
    const { animation: s } = i;
    return s.startTime;
  }
  attachTimeline(i) {
    if (!this._resolved) this.pendingTimeline = i;
    else {
      const { resolved: s } = this;
      if (!s) return ze;
      const { animation: r } = s;
      pp(r, i);
    }
    return ze;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: i } = this;
    if (!i) return;
    const { animation: s } = i;
    s.playState === "finished" && this.updateFinishedPromise(), s.play();
  }
  pause() {
    const { resolved: i } = this;
    if (!i) return;
    const { animation: s } = i;
    s.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: i } = this;
    if (!i) return;
    const {
      animation: s,
      keyframes: r,
      duration: c,
      type: f,
      ease: h,
      times: m,
    } = i;
    if (s.playState === "idle" || s.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: y,
          onUpdate: g,
          onComplete: S,
          element: b,
          ...E
        } = this.options,
        M = new lf({
          ...E,
          keyframes: r,
          duration: c,
          type: f,
          ease: h,
          times: m,
          isGenerator: !0,
        }),
        _ = Xe(this.time);
      y.setWithVelocity(M.sample(_ - hu).value, M.sample(_).value, hu);
    }
    const { onStop: d } = this.options;
    d && d(), this.cancel();
  }
  complete() {
    const { resolved: i } = this;
    i && i.animation.finish();
  }
  cancel() {
    const { resolved: i } = this;
    i && i.animation.cancel();
  }
  static supports(i) {
    const {
      motionValue: s,
      name: r,
      repeatDelay: c,
      repeatType: f,
      damping: h,
      type: m,
    } = i;
    if (!s || !s.owner || !(s.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: d, transformTemplate: y } = s.owner.getProps();
    return (
      wT() &&
      r &&
      zT.has(r) &&
      (r !== "transform" || !y) &&
      !d &&
      !c &&
      f !== "mirror" &&
      h !== 0 &&
      m !== "inertia"
    );
  }
}
const LT = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  HT = (a) => ({
    type: "spring",
    stiffness: 550,
    damping: a === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  jT = { type: "keyframes", duration: 0.8 },
  qT = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  YT = (a, { keyframes: i }) =>
    i.length > 2
      ? jT
      : ma.has(a)
        ? a.startsWith("scale")
          ? HT(i[1])
          : LT
        : qT;
function GT({
  when: a,
  delay: i,
  delayChildren: s,
  staggerChildren: r,
  staggerDirection: c,
  repeat: f,
  repeatType: h,
  repeatDelay: m,
  from: d,
  elapsed: y,
  ...g
}) {
  return !!Object.keys(g).length;
}
const sf =
  (a, i, s, r = {}, c, f) =>
  (h) => {
    const m = Bc(r, a) || {},
      d = m.delay || r.delay || 0;
    let { elapsed: y = 0 } = r;
    y = y - Xe(d);
    let g = {
      keyframes: Array.isArray(s) ? s : [null, s],
      ease: "easeOut",
      velocity: i.getVelocity(),
      ...m,
      delay: -y,
      onUpdate: (b) => {
        i.set(b), m.onUpdate && m.onUpdate(b);
      },
      onComplete: () => {
        h(), m.onComplete && m.onComplete();
      },
      name: a,
      motionValue: i,
      element: f ? void 0 : c,
    };
    GT(m) || (g = { ...g, ...YT(a, g) }),
      g.duration && (g.duration = Xe(g.duration)),
      g.repeatDelay && (g.repeatDelay = Xe(g.repeatDelay)),
      g.from !== void 0 && (g.keyframes[0] = g.from);
    let S = !1;
    if (
      ((g.type === !1 || (g.duration === 0 && !g.repeatDelay)) &&
        ((g.duration = 0), g.delay === 0 && (S = !0)),
      (g.allowFlatten = !m.type && !m.ease),
      S && !f && i.get() !== void 0)
    ) {
      const b = bu(g.keyframes, m);
      if (b !== void 0)
        return (
          Rt.update(() => {
            g.onUpdate(b), g.onComplete();
          }),
          new fS([])
        );
    }
    return !f && Yp.supports(g) ? new Yp(g) : new lf(g);
  };
function XT({ protectedKeys: a, needsAnimating: i }, s) {
  const r = a.hasOwnProperty(s) && i[s] !== !0;
  return (i[s] = !1), r;
}
function Gg(a, i, { delay: s = 0, transitionOverride: r, type: c } = {}) {
  let { transition: f = a.getDefaultTransition(), transitionEnd: h, ...m } = i;
  r && (f = r);
  const d = [],
    y = c && a.animationState && a.animationState.getState()[c];
  for (const g in m) {
    const S = a.getValue(g, a.latestValues[g] ?? null),
      b = m[g];
    if (b === void 0 || (y && XT(y, g))) continue;
    const E = { delay: s, ...Bc(f || {}, g) };
    let M = !1;
    if (window.MotionHandoffAnimation) {
      const U = hg(a);
      if (U) {
        const O = window.MotionHandoffAnimation(U, g, Rt);
        O !== null && ((E.startTime = O), (M = !0));
      }
    }
    uc(a, g),
      S.start(
        sf(g, S, b, a.shouldReduceMotion && fg.has(g) ? { type: !1 } : E, a, M)
      );
    const _ = S.animation;
    _ && d.push(_);
  }
  return (
    h &&
      Promise.all(d).then(() => {
        Rt.update(() => {
          h && vb(a, h);
        });
      }),
    d
  );
}
function gc(a, i, s = {}) {
  var d;
  const r = Ml(
    a,
    i,
    s.type === "exit"
      ? (d = a.presenceContext) == null
        ? void 0
        : d.custom
      : void 0
  );
  let { transition: c = a.getDefaultTransition() || {} } = r || {};
  s.transitionOverride && (c = s.transitionOverride);
  const f = r ? () => Promise.all(Gg(a, r, s)) : () => Promise.resolve(),
    h =
      a.variantChildren && a.variantChildren.size
        ? (y = 0) => {
            const {
              delayChildren: g = 0,
              staggerChildren: S,
              staggerDirection: b,
            } = c;
            return ZT(a, i, g + y, S, b, s);
          }
        : () => Promise.resolve(),
    { when: m } = c;
  if (m) {
    const [y, g] = m === "beforeChildren" ? [f, h] : [h, f];
    return y().then(() => g());
  } else return Promise.all([f(), h(s.delay)]);
}
function ZT(a, i, s = 0, r = 0, c = 1, f) {
  const h = [],
    m = (a.variantChildren.size - 1) * r,
    d = c === 1 ? (y = 0) => y * r : (y = 0) => m - y * r;
  return (
    Array.from(a.variantChildren)
      .sort(KT)
      .forEach((y, g) => {
        y.notify("AnimationStart", i),
          h.push(
            gc(y, i, { ...f, delay: s + d(g) }).then(() =>
              y.notify("AnimationComplete", i)
            )
          );
      }),
    Promise.all(h)
  );
}
function KT(a, i) {
  return a.sortNodePosition(i);
}
function QT(a, i, s = {}) {
  a.notify("AnimationStart", i);
  let r;
  if (Array.isArray(i)) {
    const c = i.map((f) => gc(a, f, s));
    r = Promise.all(c);
  } else if (typeof i == "string") r = gc(a, i, s);
  else {
    const c = typeof i == "function" ? Ml(a, i, s.custom) : i;
    r = Promise.all(Gg(a, c, s));
  }
  return r.then(() => {
    a.notify("AnimationComplete", i);
  });
}
function Xg(a, i) {
  if (!Array.isArray(i)) return !1;
  const s = i.length;
  if (s !== a.length) return !1;
  for (let r = 0; r < s; r++) if (i[r] !== a[r]) return !1;
  return !0;
}
const PT = qc.length;
function Zg(a) {
  if (!a) return;
  if (!a.isControllingVariants) {
    const s = a.parent ? Zg(a.parent) || {} : {};
    return a.props.initial !== void 0 && (s.initial = a.props.initial), s;
  }
  const i = {};
  for (let s = 0; s < PT; s++) {
    const r = qc[s],
      c = a.props[r];
    (Al(c) || c === !1) && (i[r] = c);
  }
  return i;
}
const kT = [...jc].reverse(),
  JT = jc.length;
function FT(a) {
  return (i) =>
    Promise.all(i.map(({ animation: s, options: r }) => QT(a, s, r)));
}
function $T(a) {
  let i = FT(a),
    s = Gp(),
    r = !0;
  const c = (d) => (y, g) => {
    var b;
    const S = Ml(
      a,
      g,
      d === "exit"
        ? (b = a.presenceContext) == null
          ? void 0
          : b.custom
        : void 0
    );
    if (S) {
      const { transition: E, transitionEnd: M, ..._ } = S;
      y = { ...y, ..._, ...M };
    }
    return y;
  };
  function f(d) {
    i = d(a);
  }
  function h(d) {
    const { props: y } = a,
      g = Zg(a.parent) || {},
      S = [],
      b = new Set();
    let E = {},
      M = 1 / 0;
    for (let U = 0; U < JT; U++) {
      const O = kT[U],
        Y = s[O],
        L = y[O] !== void 0 ? y[O] : g[O],
        J = Al(L),
        G = O === d ? Y.isActive : null;
      G === !1 && (M = U);
      let nt = L === g[O] && L !== y[O] && J;
      if (
        (nt && r && a.manuallyAnimateOnMount && (nt = !1),
        (Y.protectedKeys = { ...E }),
        (!Y.isActive && G === null) ||
          (!L && !Y.prevProp) ||
          vu(L) ||
          typeof L == "boolean")
      )
        continue;
      const lt = WT(Y.prevProp, L);
      let P = lt || (O === d && Y.isActive && !nt && J) || (U > M && J),
        st = !1;
      const vt = Array.isArray(L) ? L : [L];
      let jt = vt.reduce(c(O), {});
      G === !1 && (jt = {});
      const { prevResolvedValues: qt = {} } = Y,
        Je = { ...qt, ...jt },
        Ne = (X) => {
          (P = !0),
            b.has(X) && ((st = !0), b.delete(X)),
            (Y.needsAnimating[X] = !0);
          const k = a.getValue(X);
          k && (k.liveStyle = !1);
        };
      for (const X in Je) {
        const k = jt[X],
          mt = qt[X];
        if (E.hasOwnProperty(X)) continue;
        let x = !1;
        sc(k) && sc(mt) ? (x = !Xg(k, mt)) : (x = k !== mt),
          x
            ? k != null
              ? Ne(X)
              : b.add(X)
            : k !== void 0 && b.has(X)
              ? Ne(X)
              : (Y.protectedKeys[X] = !0);
      }
      (Y.prevProp = L),
        (Y.prevResolvedValues = jt),
        Y.isActive && (E = { ...E, ...jt }),
        r && a.blockInitialAnimation && (P = !1),
        P &&
          (!(nt && lt) || st) &&
          S.push(...vt.map((X) => ({ animation: X, options: { type: O } })));
    }
    if (b.size) {
      const U = {};
      if (typeof y.initial != "boolean") {
        const O = Ml(a, Array.isArray(y.initial) ? y.initial[0] : y.initial);
        O && O.transition && (U.transition = O.transition);
      }
      b.forEach((O) => {
        const Y = a.getBaseTarget(O),
          L = a.getValue(O);
        L && (L.liveStyle = !0), (U[O] = Y ?? null);
      }),
        S.push({ animation: U });
    }
    let _ = !!S.length;
    return (
      r &&
        (y.initial === !1 || y.initial === y.animate) &&
        !a.manuallyAnimateOnMount &&
        (_ = !1),
      (r = !1),
      _ ? i(S) : Promise.resolve()
    );
  }
  function m(d, y) {
    var S;
    if (s[d].isActive === y) return Promise.resolve();
    (S = a.variantChildren) == null ||
      S.forEach((b) => {
        var E;
        return (E = b.animationState) == null ? void 0 : E.setActive(d, y);
      }),
      (s[d].isActive = y);
    const g = h(d);
    for (const b in s) s[b].protectedKeys = {};
    return g;
  }
  return {
    animateChanges: h,
    setActive: m,
    setAnimateFunction: f,
    getState: () => s,
    reset: () => {
      (s = Gp()), (r = !0);
    },
  };
}
function WT(a, i) {
  return typeof i == "string" ? i !== a : Array.isArray(i) ? !Xg(i, a) : !1;
}
function oa(a = !1) {
  return {
    isActive: a,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Gp() {
  return {
    animate: oa(!0),
    whileInView: oa(),
    whileHover: oa(),
    whileTap: oa(),
    whileDrag: oa(),
    whileFocus: oa(),
    exit: oa(),
  };
}
class Zn {
  constructor(i) {
    (this.isMounted = !1), (this.node = i);
  }
  update() {}
}
class IT extends Zn {
  constructor(i) {
    super(i), i.animationState || (i.animationState = $T(i));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    vu(i) && (this.unmountControls = i.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: i } = this.node.getProps(),
      { animate: s } = this.node.prevProps || {};
    i !== s && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var i;
    this.node.animationState.reset(),
      (i = this.unmountControls) == null || i.call(this);
  }
}
let tx = 0;
class ex extends Zn {
  constructor() {
    super(...arguments), (this.id = tx++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: i, onExitComplete: s } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || i === r) return;
    const c = this.node.animationState.setActive("exit", !i);
    s &&
      !i &&
      c.then(() => {
        s(this.id);
      });
  }
  mount() {
    const { register: i, onExitComplete: s } = this.node.presenceContext || {};
    s && s(this.id), i && (this.unmount = i(this.id));
  }
  unmount() {}
}
const nx = { animation: { Feature: IT }, exit: { Feature: ex } };
function Cl(a, i, s, r = { passive: !0 }) {
  return a.addEventListener(i, s, r), () => a.removeEventListener(i, s);
}
function Ul(a) {
  return { point: { x: a.pageX, y: a.pageY } };
}
const ax = (a) => (i) => Hc(i) && a(i, Ul(i));
function gl(a, i, s, r) {
  return Cl(a, i, ax(s), r);
}
function Kg({ top: a, left: i, right: s, bottom: r }) {
  return { x: { min: i, max: s }, y: { min: a, max: r } };
}
function ix({ x: a, y: i }) {
  return { top: i.min, right: a.max, bottom: i.max, left: a.min };
}
function lx(a, i) {
  if (!i) return a;
  const s = i({ x: a.left, y: a.top }),
    r = i({ x: a.right, y: a.bottom });
  return { top: s.y, left: s.x, bottom: r.y, right: r.x };
}
const Qg = 1e-4,
  sx = 1 - Qg,
  ux = 1 + Qg,
  Pg = 0.01,
  rx = 0 - Pg,
  ox = 0 + Pg;
function ie(a) {
  return a.max - a.min;
}
function cx(a, i, s) {
  return Math.abs(a - i) <= s;
}
function Xp(a, i, s, r = 0.5) {
  (a.origin = r),
    (a.originPoint = Ot(i.min, i.max, a.origin)),
    (a.scale = ie(s) / ie(i)),
    (a.translate = Ot(s.min, s.max, a.origin) - a.originPoint),
    ((a.scale >= sx && a.scale <= ux) || isNaN(a.scale)) && (a.scale = 1),
    ((a.translate >= rx && a.translate <= ox) || isNaN(a.translate)) &&
      (a.translate = 0);
}
function vl(a, i, s, r) {
  Xp(a.x, i.x, s.x, r ? r.originX : void 0),
    Xp(a.y, i.y, s.y, r ? r.originY : void 0);
}
function Zp(a, i, s) {
  (a.min = s.min + i.min), (a.max = a.min + ie(i));
}
function fx(a, i, s) {
  Zp(a.x, i.x, s.x), Zp(a.y, i.y, s.y);
}
function Kp(a, i, s) {
  (a.min = i.min - s.min), (a.max = a.min + ie(i));
}
function Sl(a, i, s) {
  Kp(a.x, i.x, s.x), Kp(a.y, i.y, s.y);
}
const Qp = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ai = () => ({ x: Qp(), y: Qp() }),
  Pp = () => ({ min: 0, max: 0 }),
  Nt = () => ({ x: Pp(), y: Pp() });
function Ve(a) {
  return [a("x"), a("y")];
}
function Fo(a) {
  return a === void 0 || a === 1;
}
function vc({ scale: a, scaleX: i, scaleY: s }) {
  return !Fo(a) || !Fo(i) || !Fo(s);
}
function ca(a) {
  return (
    vc(a) ||
    kg(a) ||
    a.z ||
    a.rotate ||
    a.rotateX ||
    a.rotateY ||
    a.skewX ||
    a.skewY
  );
}
function kg(a) {
  return kp(a.x) || kp(a.y);
}
function kp(a) {
  return a && a !== "0%";
}
function du(a, i, s) {
  const r = a - s,
    c = i * r;
  return s + c;
}
function Jp(a, i, s, r, c) {
  return c !== void 0 && (a = du(a, c, r)), du(a, s, r) + i;
}
function Sc(a, i = 0, s = 1, r, c) {
  (a.min = Jp(a.min, i, s, r, c)), (a.max = Jp(a.max, i, s, r, c));
}
function Jg(a, { x: i, y: s }) {
  Sc(a.x, i.translate, i.scale, i.originPoint),
    Sc(a.y, s.translate, s.scale, s.originPoint);
}
const Fp = 0.999999999999,
  $p = 1.0000000000001;
function hx(a, i, s, r = !1) {
  const c = s.length;
  if (!c) return;
  i.x = i.y = 1;
  let f, h;
  for (let m = 0; m < c; m++) {
    (f = s[m]), (h = f.projectionDelta);
    const { visualElement: d } = f.options;
    (d && d.props.style && d.props.style.display === "contents") ||
      (r &&
        f.options.layoutScroll &&
        f.scroll &&
        f !== f.root &&
        li(a, { x: -f.scroll.offset.x, y: -f.scroll.offset.y }),
      h && ((i.x *= h.x.scale), (i.y *= h.y.scale), Jg(a, h)),
      r && ca(f.latestValues) && li(a, f.latestValues));
  }
  i.x < $p && i.x > Fp && (i.x = 1), i.y < $p && i.y > Fp && (i.y = 1);
}
function ii(a, i) {
  (a.min = a.min + i), (a.max = a.max + i);
}
function Wp(a, i, s, r, c = 0.5) {
  const f = Ot(a.min, a.max, c);
  Sc(a, i, s, f, r);
}
function li(a, i) {
  Wp(a.x, i.x, i.scaleX, i.scale, i.originX),
    Wp(a.y, i.y, i.scaleY, i.scale, i.originY);
}
function Fg(a, i) {
  return Kg(lx(a.getBoundingClientRect(), i));
}
function dx(a, i, s) {
  const r = Fg(a, s),
    { scroll: c } = i;
  return c && (ii(r.x, c.offset.x), ii(r.y, c.offset.y)), r;
}
const $g = ({ current: a }) => (a ? a.ownerDocument.defaultView : null),
  Ip = (a, i) => Math.abs(a - i);
function mx(a, i) {
  const s = Ip(a.x, i.x),
    r = Ip(a.y, i.y);
  return Math.sqrt(s ** 2 + r ** 2);
}
class Wg {
  constructor(
    i,
    s,
    { transformPagePoint: r, contextWindow: c, dragSnapToOrigin: f = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const S = Wo(this.lastMoveEventInfo, this.history),
          b = this.startEvent !== null,
          E = mx(S.offset, { x: 0, y: 0 }) >= 3;
        if (!b && !E) return;
        const { point: M } = S,
          { timestamp: _ } = $t;
        this.history.push({ ...M, timestamp: _ });
        const { onStart: U, onMove: O } = this.handlers;
        b ||
          (U && U(this.lastMoveEvent, S),
          (this.startEvent = this.lastMoveEvent)),
          O && O(this.lastMoveEvent, S);
      }),
      (this.handlePointerMove = (S, b) => {
        (this.lastMoveEvent = S),
          (this.lastMoveEventInfo = $o(b, this.transformPagePoint)),
          Rt.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (S, b) => {
        this.end();
        const { onEnd: E, onSessionEnd: M, resumeAnimation: _ } = this.handlers;
        if (
          (this.dragSnapToOrigin && _ && _(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const U = Wo(
          S.type === "pointercancel"
            ? this.lastMoveEventInfo
            : $o(b, this.transformPagePoint),
          this.history
        );
        this.startEvent && E && E(S, U), M && M(S, U);
      }),
      !Hc(i))
    )
      return;
    (this.dragSnapToOrigin = f),
      (this.handlers = s),
      (this.transformPagePoint = r),
      (this.contextWindow = c || window);
    const h = Ul(i),
      m = $o(h, this.transformPagePoint),
      { point: d } = m,
      { timestamp: y } = $t;
    this.history = [{ ...d, timestamp: y }];
    const { onSessionStart: g } = s;
    g && g(i, Wo(m, this.history)),
      (this.removeListeners = wl(
        gl(this.contextWindow, "pointermove", this.handlePointerMove),
        gl(this.contextWindow, "pointerup", this.handlePointerUp),
        gl(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(i) {
    this.handlers = i;
  }
  end() {
    this.removeListeners && this.removeListeners(), Gn(this.updatePoint);
  }
}
function $o(a, i) {
  return i ? { point: i(a.point) } : a;
}
function ty(a, i) {
  return { x: a.x - i.x, y: a.y - i.y };
}
function Wo({ point: a }, i) {
  return {
    point: a,
    delta: ty(a, Ig(i)),
    offset: ty(a, px(i)),
    velocity: yx(i, 0.1),
  };
}
function px(a) {
  return a[0];
}
function Ig(a) {
  return a[a.length - 1];
}
function yx(a, i) {
  if (a.length < 2) return { x: 0, y: 0 };
  let s = a.length - 1,
    r = null;
  const c = Ig(a);
  for (; s >= 0 && ((r = a[s]), !(c.timestamp - r.timestamp > Xe(i))); ) s--;
  if (!r) return { x: 0, y: 0 };
  const f = Ze(c.timestamp - r.timestamp);
  if (f === 0) return { x: 0, y: 0 };
  const h = { x: (c.x - r.x) / f, y: (c.y - r.y) / f };
  return h.x === 1 / 0 && (h.x = 0), h.y === 1 / 0 && (h.y = 0), h;
}
function gx(a, { min: i, max: s }, r) {
  return (
    i !== void 0 && a < i
      ? (a = r ? Ot(i, a, r.min) : Math.max(a, i))
      : s !== void 0 && a > s && (a = r ? Ot(s, a, r.max) : Math.min(a, s)),
    a
  );
}
function ey(a, i, s) {
  return {
    min: i !== void 0 ? a.min + i : void 0,
    max: s !== void 0 ? a.max + s - (a.max - a.min) : void 0,
  };
}
function vx(a, { top: i, left: s, bottom: r, right: c }) {
  return { x: ey(a.x, s, c), y: ey(a.y, i, r) };
}
function ny(a, i) {
  let s = i.min - a.min,
    r = i.max - a.max;
  return i.max - i.min < a.max - a.min && ([s, r] = [r, s]), { min: s, max: r };
}
function Sx(a, i) {
  return { x: ny(a.x, i.x), y: ny(a.y, i.y) };
}
function bx(a, i) {
  let s = 0.5;
  const r = ie(a),
    c = ie(i);
  return (
    c > r
      ? (s = bl(i.min, i.max - r, a.min))
      : r > c && (s = bl(a.min, a.max - c, i.min)),
    dn(0, 1, s)
  );
}
function Tx(a, i) {
  const s = {};
  return (
    i.min !== void 0 && (s.min = i.min - a.min),
    i.max !== void 0 && (s.max = i.max - a.min),
    s
  );
}
const bc = 0.35;
function xx(a = bc) {
  return (
    a === !1 ? (a = 0) : a === !0 && (a = bc),
    { x: ay(a, "left", "right"), y: ay(a, "top", "bottom") }
  );
}
function ay(a, i, s) {
  return { min: iy(a, i), max: iy(a, s) };
}
function iy(a, i) {
  return typeof a == "number" ? a : a[i] || 0;
}
const Ax = new WeakMap();
class Ex {
  constructor(i) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Nt()),
      (this.visualElement = i);
  }
  start(i, { snapToCursor: s = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const c = (g) => {
        const { dragSnapToOrigin: S } = this.getProps();
        S ? this.pauseAnimation() : this.stopAnimation(),
          s && this.snapToCursor(Ul(g).point);
      },
      f = (g, S) => {
        const { drag: b, dragPropagation: E, onDragStart: M } = this.getProps();
        if (
          b &&
          !E &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = SS(b)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ve((U) => {
            let O = this.getAxisMotionValue(U).get() || 0;
            if (Qe.test(O)) {
              const { projection: Y } = this.visualElement;
              if (Y && Y.layout) {
                const L = Y.layout.layoutBox[U];
                L && (O = ie(L) * (parseFloat(O) / 100));
              }
            }
            this.originPoint[U] = O;
          }),
          M && Rt.postRender(() => M(g, S)),
          uc(this.visualElement, "transform");
        const { animationState: _ } = this.visualElement;
        _ && _.setActive("whileDrag", !0);
      },
      h = (g, S) => {
        const {
          dragPropagation: b,
          dragDirectionLock: E,
          onDirectionLock: M,
          onDrag: _,
        } = this.getProps();
        if (!b && !this.openDragLock) return;
        const { offset: U } = S;
        if (E && this.currentDirection === null) {
          (this.currentDirection = Rx(U)),
            this.currentDirection !== null && M && M(this.currentDirection);
          return;
        }
        this.updateAxis("x", S.point, U),
          this.updateAxis("y", S.point, U),
          this.visualElement.render(),
          _ && _(g, S);
      },
      m = (g, S) => this.stop(g, S),
      d = () =>
        Ve((g) => {
          var S;
          return (
            this.getAnimationState(g) === "paused" &&
            ((S = this.getAxisMotionValue(g).animation) == null
              ? void 0
              : S.play())
          );
        }),
      { dragSnapToOrigin: y } = this.getProps();
    this.panSession = new Wg(
      i,
      {
        onSessionStart: c,
        onStart: f,
        onMove: h,
        onSessionEnd: m,
        resumeAnimation: d,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: y,
        contextWindow: $g(this.visualElement),
      }
    );
  }
  stop(i, s) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: c } = s;
    this.startAnimation(c);
    const { onDragEnd: f } = this.getProps();
    f && Rt.postRender(() => f(i, s));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: i, animationState: s } = this.visualElement;
    i && (i.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      s && s.setActive("whileDrag", !1);
  }
  updateAxis(i, s, r) {
    const { drag: c } = this.getProps();
    if (!r || !tu(i, c, this.currentDirection)) return;
    const f = this.getAxisMotionValue(i);
    let h = this.originPoint[i] + r[i];
    this.constraints &&
      this.constraints[i] &&
      (h = gx(h, this.constraints[i], this.elastic[i])),
      f.set(h);
  }
  resolveConstraints() {
    var f;
    const { dragConstraints: i, dragElastic: s } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (f = this.visualElement.projection) == null
            ? void 0
            : f.layout,
      c = this.constraints;
    i && ei(i)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : i && r
        ? (this.constraints = vx(r.layoutBox, i))
        : (this.constraints = !1),
      (this.elastic = xx(s)),
      c !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ve((h) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(h) &&
            (this.constraints[h] = Tx(r.layoutBox[h], this.constraints[h]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: s } = this.getProps();
    if (!i || !ei(i)) return !1;
    const r = i.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const f = dx(r, c.root, this.visualElement.getTransformPagePoint());
    let h = Sx(c.layout.layoutBox, f);
    if (s) {
      const m = s(ix(h));
      (this.hasMutatedConstraints = !!m), m && (h = Kg(m));
    }
    return h;
  }
  startAnimation(i) {
    const {
        drag: s,
        dragMomentum: r,
        dragElastic: c,
        dragTransition: f,
        dragSnapToOrigin: h,
        onDragTransitionEnd: m,
      } = this.getProps(),
      d = this.constraints || {},
      y = Ve((g) => {
        if (!tu(g, s, this.currentDirection)) return;
        let S = (d && d[g]) || {};
        h && (S = { min: 0, max: 0 });
        const b = c ? 200 : 1e6,
          E = c ? 40 : 1e7,
          M = {
            type: "inertia",
            velocity: r ? i[g] : 0,
            bounceStiffness: b,
            bounceDamping: E,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...f,
            ...S,
          };
        return this.startAxisValueAnimation(g, M);
      });
    return Promise.all(y).then(m);
  }
  startAxisValueAnimation(i, s) {
    const r = this.getAxisMotionValue(i);
    return (
      uc(this.visualElement, i), r.start(sf(i, r, 0, s, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Ve((i) => this.getAxisMotionValue(i).stop());
  }
  pauseAnimation() {
    Ve((i) => {
      var s;
      return (s = this.getAxisMotionValue(i).animation) == null
        ? void 0
        : s.pause();
    });
  }
  getAnimationState(i) {
    var s;
    return (s = this.getAxisMotionValue(i).animation) == null
      ? void 0
      : s.state;
  }
  getAxisMotionValue(i) {
    const s = `_drag${i.toUpperCase()}`,
      r = this.visualElement.getProps(),
      c = r[s];
    return (
      c ||
      this.visualElement.getValue(i, (r.initial ? r.initial[i] : void 0) || 0)
    );
  }
  snapToCursor(i) {
    Ve((s) => {
      const { drag: r } = this.getProps();
      if (!tu(s, r, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        f = this.getAxisMotionValue(s);
      if (c && c.layout) {
        const { min: h, max: m } = c.layout.layoutBox[s];
        f.set(i[s] - Ot(h, m, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: i, dragConstraints: s } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!ei(s) || !r || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    Ve((h) => {
      const m = this.getAxisMotionValue(h);
      if (m && this.constraints !== !1) {
        const d = m.get();
        c[h] = bx({ min: d, max: d }, this.constraints[h]);
      }
    });
    const { transformTemplate: f } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = f ? f({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Ve((h) => {
        if (!tu(h, i, null)) return;
        const m = this.getAxisMotionValue(h),
          { min: d, max: y } = this.constraints[h];
        m.set(Ot(d, y, c[h]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Ax.set(this.visualElement, this);
    const i = this.visualElement.current,
      s = gl(i, "pointerdown", (d) => {
        const { drag: y, dragListener: g = !0 } = this.getProps();
        y && g && this.start(d);
      }),
      r = () => {
        const { dragConstraints: d } = this.getProps();
        ei(d) && d.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: c } = this.visualElement,
      f = c.addEventListener("measure", r);
    c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()),
      Rt.read(r);
    const h = Cl(window, "resize", () => this.scalePositionWithinConstraints()),
      m = c.addEventListener(
        "didUpdate",
        ({ delta: d, hasLayoutChanged: y }) => {
          this.isDragging &&
            y &&
            (Ve((g) => {
              const S = this.getAxisMotionValue(g);
              S &&
                ((this.originPoint[g] += d[g].translate),
                S.set(S.get() + d[g].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      h(), s(), f(), m && m();
    };
  }
  getProps() {
    const i = this.visualElement.getProps(),
      {
        drag: s = !1,
        dragDirectionLock: r = !1,
        dragPropagation: c = !1,
        dragConstraints: f = !1,
        dragElastic: h = bc,
        dragMomentum: m = !0,
      } = i;
    return {
      ...i,
      drag: s,
      dragDirectionLock: r,
      dragPropagation: c,
      dragConstraints: f,
      dragElastic: h,
      dragMomentum: m,
    };
  }
}
function tu(a, i, s) {
  return (i === !0 || i === a) && (s === null || s === a);
}
function Rx(a, i = 10) {
  let s = null;
  return Math.abs(a.y) > i ? (s = "y") : Math.abs(a.x) > i && (s = "x"), s;
}
class Mx extends Zn {
  constructor(i) {
    super(i),
      (this.removeGroupControls = ze),
      (this.removeListeners = ze),
      (this.controls = new Ex(i));
  }
  mount() {
    const { dragControls: i } = this.node.getProps();
    i && (this.removeGroupControls = i.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || ze);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const ly = (a) => (i, s) => {
  a && Rt.postRender(() => a(i, s));
};
class Dx extends Zn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = ze);
  }
  onPointerDown(i) {
    this.session = new Wg(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: $g(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: i,
      onPanStart: s,
      onPan: r,
      onPanEnd: c,
    } = this.node.getProps();
    return {
      onSessionStart: ly(i),
      onStart: ly(s),
      onMove: r,
      onEnd: (f, h) => {
        delete this.session, c && Rt.postRender(() => c(f, h));
      },
    };
  }
  mount() {
    this.removePointerDownListener = gl(this.node.current, "pointerdown", (i) =>
      this.onPointerDown(i)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const iu = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function sy(a, i) {
  return i.max === i.min ? 0 : (a / (i.max - i.min)) * 100;
}
const fl = {
    correct: (a, i) => {
      if (!i.target) return a;
      if (typeof a == "string")
        if (tt.test(a)) a = parseFloat(a);
        else return a;
      const s = sy(a, i.target.x),
        r = sy(a, i.target.y);
      return `${s}% ${r}%`;
    },
  },
  Cx = {
    correct: (a, { treeScale: i, projectionDelta: s }) => {
      const r = a,
        c = Xn.parse(a);
      if (c.length > 5) return r;
      const f = Xn.createTransformer(a),
        h = typeof c[0] != "number" ? 1 : 0,
        m = s.x.scale * i.x,
        d = s.y.scale * i.y;
      (c[0 + h] /= m), (c[1 + h] /= d);
      const y = Ot(m, d, 0.5);
      return (
        typeof c[2 + h] == "number" && (c[2 + h] /= y),
        typeof c[3 + h] == "number" && (c[3 + h] /= y),
        f(c)
      );
    },
  };
class Ox extends V.Component {
  componentDidMount() {
    const {
        visualElement: i,
        layoutGroup: s,
        switchLayoutGroup: r,
        layoutId: c,
      } = this.props,
      { projection: f } = i;
    QS(Vx),
      f &&
        (s.group && s.group.add(f),
        r && r.register && c && r.register(f),
        f.root.didUpdate(),
        f.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        f.setOptions({
          ...f.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (iu.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(i) {
    const {
        layoutDependency: s,
        visualElement: r,
        drag: c,
        isPresent: f,
      } = this.props,
      h = r.projection;
    return (
      h &&
        ((h.isPresent = f),
        c || i.layoutDependency !== s || s === void 0 || i.isPresent !== f
          ? h.willUpdate()
          : this.safeToRemove(),
        i.isPresent !== f &&
          (f
            ? h.promote()
            : h.relegate() ||
              Rt.postRender(() => {
                const m = h.getStack();
                (!m || !m.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: i } = this.props.visualElement;
    i &&
      (i.root.didUpdate(),
      Lc.postRender(() => {
        !i.currentAnimation && i.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: i,
        layoutGroup: s,
        switchLayoutGroup: r,
      } = this.props,
      { projection: c } = i;
    c &&
      (c.scheduleCheckAfterUnmount(),
      s && s.group && s.group.remove(c),
      r && r.deregister && r.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: i } = this.props;
    i && i();
  }
  render() {
    return null;
  }
}
function tv(a) {
  const [i, s] = uS(),
    r = V.useContext(Ly);
  return Et.jsx(Ox, {
    ...a,
    layoutGroup: r,
    switchLayoutGroup: V.useContext(Wy),
    isPresent: i,
    safeToRemove: s,
  });
}
const Vx = {
  borderRadius: {
    ...fl,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: fl,
  borderTopRightRadius: fl,
  borderBottomLeftRadius: fl,
  borderBottomRightRadius: fl,
  boxShadow: Cx,
};
function zx(a, i, s) {
  const r = ne(a) ? a : xl(a);
  return r.start(sf("", r, i, s)), r.animation;
}
function wx(a) {
  return a instanceof SVGElement && a.tagName !== "svg";
}
const Ux = (a, i) => a.depth - i.depth;
class _x {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(i) {
    Oc(this.children, i), (this.isDirty = !0);
  }
  remove(i) {
    Vc(this.children, i), (this.isDirty = !0);
  }
  forEach(i) {
    this.isDirty && this.children.sort(Ux),
      (this.isDirty = !1),
      this.children.forEach(i);
  }
}
function Bx(a, i) {
  const s = Ke.now(),
    r = ({ timestamp: c }) => {
      const f = c - s;
      f >= i && (Gn(r), a(f - i));
    };
  return Rt.read(r, !0), () => Gn(r);
}
const ev = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Nx = ev.length,
  uy = (a) => (typeof a == "string" ? parseFloat(a) : a),
  ry = (a) => typeof a == "number" || tt.test(a);
function Lx(a, i, s, r, c, f) {
  c
    ? ((a.opacity = Ot(0, s.opacity !== void 0 ? s.opacity : 1, Hx(r))),
      (a.opacityExit = Ot(i.opacity !== void 0 ? i.opacity : 1, 0, jx(r))))
    : f &&
      (a.opacity = Ot(
        i.opacity !== void 0 ? i.opacity : 1,
        s.opacity !== void 0 ? s.opacity : 1,
        r
      ));
  for (let h = 0; h < Nx; h++) {
    const m = `border${ev[h]}Radius`;
    let d = oy(i, m),
      y = oy(s, m);
    if (d === void 0 && y === void 0) continue;
    d || (d = 0),
      y || (y = 0),
      d === 0 || y === 0 || ry(d) === ry(y)
        ? ((a[m] = Math.max(Ot(uy(d), uy(y), r), 0)),
          (Qe.test(y) || Qe.test(d)) && (a[m] += "%"))
        : (a[m] = y);
  }
  (i.rotate || s.rotate) && (a.rotate = Ot(i.rotate || 0, s.rotate || 0, r));
}
function oy(a, i) {
  return a[i] !== void 0 ? a[i] : a.borderRadius;
}
const Hx = nv(0, 0.5, Sg),
  jx = nv(0.5, 0.95, ze);
function nv(a, i, s) {
  return (r) => (r < a ? 0 : r > i ? 1 : s(bl(a, i, r)));
}
function cy(a, i) {
  (a.min = i.min), (a.max = i.max);
}
function Oe(a, i) {
  cy(a.x, i.x), cy(a.y, i.y);
}
function fy(a, i) {
  (a.translate = i.translate),
    (a.scale = i.scale),
    (a.originPoint = i.originPoint),
    (a.origin = i.origin);
}
function hy(a, i, s, r, c) {
  return (
    (a -= i), (a = du(a, 1 / s, r)), c !== void 0 && (a = du(a, 1 / c, r)), a
  );
}
function qx(a, i = 0, s = 1, r = 0.5, c, f = a, h = a) {
  if (
    (Qe.test(i) &&
      ((i = parseFloat(i)), (i = Ot(h.min, h.max, i / 100) - h.min)),
    typeof i != "number")
  )
    return;
  let m = Ot(f.min, f.max, r);
  a === f && (m -= i),
    (a.min = hy(a.min, i, s, m, c)),
    (a.max = hy(a.max, i, s, m, c));
}
function dy(a, i, [s, r, c], f, h) {
  qx(a, i[s], i[r], i[c], i.scale, f, h);
}
const Yx = ["x", "scaleX", "originX"],
  Gx = ["y", "scaleY", "originY"];
function my(a, i, s, r) {
  dy(a.x, i, Yx, s ? s.x : void 0, r ? r.x : void 0),
    dy(a.y, i, Gx, s ? s.y : void 0, r ? r.y : void 0);
}
function py(a) {
  return a.translate === 0 && a.scale === 1;
}
function av(a) {
  return py(a.x) && py(a.y);
}
function yy(a, i) {
  return a.min === i.min && a.max === i.max;
}
function Xx(a, i) {
  return yy(a.x, i.x) && yy(a.y, i.y);
}
function gy(a, i) {
  return (
    Math.round(a.min) === Math.round(i.min) &&
    Math.round(a.max) === Math.round(i.max)
  );
}
function iv(a, i) {
  return gy(a.x, i.x) && gy(a.y, i.y);
}
function vy(a) {
  return ie(a.x) / ie(a.y);
}
function Sy(a, i) {
  return (
    a.translate === i.translate &&
    a.scale === i.scale &&
    a.originPoint === i.originPoint
  );
}
class Zx {
  constructor() {
    this.members = [];
  }
  add(i) {
    Oc(this.members, i), i.scheduleRender();
  }
  remove(i) {
    if (
      (Vc(this.members, i),
      i === this.prevLead && (this.prevLead = void 0),
      i === this.lead)
    ) {
      const s = this.members[this.members.length - 1];
      s && this.promote(s);
    }
  }
  relegate(i) {
    const s = this.members.findIndex((c) => i === c);
    if (s === 0) return !1;
    let r;
    for (let c = s; c >= 0; c--) {
      const f = this.members[c];
      if (f.isPresent !== !1) {
        r = f;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(i, s) {
    const r = this.lead;
    if (i !== r && ((this.prevLead = r), (this.lead = i), i.show(), r)) {
      r.instance && r.scheduleRender(),
        i.scheduleRender(),
        (i.resumeFrom = r),
        s && (i.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((i.snapshot = r.snapshot),
          (i.snapshot.latestValues = r.animationValues || r.latestValues)),
        i.root && i.root.isUpdating && (i.isLayoutDirty = !0);
      const { crossfade: c } = i.options;
      c === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((i) => {
      const { options: s, resumingFrom: r } = i;
      s.onExitComplete && s.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((i) => {
      i.instance && i.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Kx(a, i, s) {
  let r = "";
  const c = a.x.translate / i.x,
    f = a.y.translate / i.y,
    h = (s == null ? void 0 : s.z) || 0;
  if (
    ((c || f || h) && (r = `translate3d(${c}px, ${f}px, ${h}px) `),
    (i.x !== 1 || i.y !== 1) && (r += `scale(${1 / i.x}, ${1 / i.y}) `),
    s)
  ) {
    const {
      transformPerspective: y,
      rotate: g,
      rotateX: S,
      rotateY: b,
      skewX: E,
      skewY: M,
    } = s;
    y && (r = `perspective(${y}px) ${r}`),
      g && (r += `rotate(${g}deg) `),
      S && (r += `rotateX(${S}deg) `),
      b && (r += `rotateY(${b}deg) `),
      E && (r += `skewX(${E}deg) `),
      M && (r += `skewY(${M}deg) `);
  }
  const m = a.x.scale * i.x,
    d = a.y.scale * i.y;
  return (m !== 1 || d !== 1) && (r += `scale(${m}, ${d})`), r || "none";
}
const Io = ["", "X", "Y", "Z"],
  Qx = { visibility: "hidden" },
  by = 1e3;
let Px = 0;
function tc(a, i, s, r) {
  const { latestValues: c } = i;
  c[a] && ((s[a] = c[a]), i.setStaticValue(a, 0), r && (r[a] = 0));
}
function lv(a) {
  if (((a.hasCheckedOptimisedAppear = !0), a.root === a)) return;
  const { visualElement: i } = a.options;
  if (!i) return;
  const s = hg(i);
  if (window.MotionHasOptimisedAnimation(s, "transform")) {
    const { layout: c, layoutId: f } = a.options;
    window.MotionCancelOptimisedAnimation(s, "transform", Rt, !(c || f));
  }
  const { parent: r } = a;
  r && !r.hasCheckedOptimisedAppear && lv(r);
}
function sv({
  attachResizeListener: a,
  defaultParent: i,
  measureScroll: s,
  checkIsScrollRoot: r,
  resetTransform: c,
}) {
  return class {
    constructor(h = {}, m = i == null ? void 0 : i()) {
      (this.id = Px++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(Fx),
            this.nodes.forEach(eA),
            this.nodes.forEach(nA),
            this.nodes.forEach($x);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = h),
        (this.root = m ? m.root || m : this),
        (this.path = m ? [...m.path, m] : []),
        (this.parent = m),
        (this.depth = m ? m.depth + 1 : 0);
      for (let d = 0; d < this.path.length; d++)
        this.path[d].shouldResetTransform = !0;
      this.root === this && (this.nodes = new _x());
    }
    addEventListener(h, m) {
      return (
        this.eventHandlers.has(h) || this.eventHandlers.set(h, new wc()),
        this.eventHandlers.get(h).add(m)
      );
    }
    notifyListeners(h, ...m) {
      const d = this.eventHandlers.get(h);
      d && d.notify(...m);
    }
    hasListeners(h) {
      return this.eventHandlers.has(h);
    }
    mount(h, m = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = wx(h)), (this.instance = h);
      const { layoutId: d, layout: y, visualElement: g } = this.options;
      if (
        (g && !g.current && g.mount(h),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        m && (y || d) && (this.isLayoutDirty = !0),
        a)
      ) {
        let S;
        const b = () => (this.root.updateBlockedByResize = !1);
        a(h, () => {
          (this.root.updateBlockedByResize = !0),
            S && S(),
            (S = Bx(b, 250)),
            iu.hasAnimatedSinceResize &&
              ((iu.hasAnimatedSinceResize = !1), this.nodes.forEach(xy));
        });
      }
      d && this.root.registerSharedNode(d, this),
        this.options.animate !== !1 &&
          g &&
          (d || y) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: S,
              hasLayoutChanged: b,
              hasRelativeLayoutChanged: E,
              layout: M,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const _ =
                  this.options.transition || g.getDefaultTransition() || uA,
                { onLayoutAnimationStart: U, onLayoutAnimationComplete: O } =
                  g.getProps(),
                Y = !this.targetLayout || !iv(this.targetLayout, M),
                L = !b && E;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                L ||
                (b && (Y || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(S, L);
                const J = { ...Bc(_, "layout"), onPlay: U, onComplete: O };
                (g.shouldReduceMotion || this.options.layoutRoot) &&
                  ((J.delay = 0), (J.type = !1)),
                  this.startAnimation(J);
              } else
                b || xy(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = M;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const h = this.getStack();
      h && h.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Gn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(aA),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: h } = this.options;
      return h && h.getProps().transformTemplate;
    }
    willUpdate(h = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          lv(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const S = this.path[g];
        (S.shouldResetTransform = !0),
          S.updateScroll("snapshot"),
          S.options.layoutRoot && S.willUpdate(!1);
      }
      const { layoutId: m, layout: d } = this.options;
      if (m === void 0 && !d) return;
      const y = this.getTransformTemplate();
      (this.prevTransformTemplateValue = y ? y(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        h && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ty);
        return;
      }
      this.isUpdating || this.nodes.forEach(Ix),
        (this.isUpdating = !1),
        this.nodes.forEach(tA),
        this.nodes.forEach(kx),
        this.nodes.forEach(Jx),
        this.clearAllSnapshots();
      const m = Ke.now();
      ($t.delta = dn(0, 1e3 / 60, m - $t.timestamp)),
        ($t.timestamp = m),
        ($t.isProcessing = !0),
        Ko.update.process($t),
        Ko.preRender.process($t),
        Ko.render.process($t),
        ($t.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Lc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Wx), this.sharedNodes.forEach(iA);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Rt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Rt.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !ie(this.snapshot.measuredBox.x) &&
          !ie(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let d = 0; d < this.path.length; d++) this.path[d].updateScroll();
      const h = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Nt()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: m } = this.options;
      m &&
        m.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          h ? h.layoutBox : void 0
        );
    }
    updateScroll(h = "measure") {
      let m = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === h &&
          (m = !1),
        m)
      ) {
        const d = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: h,
          isRoot: d,
          offset: s(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : d,
        };
      }
    }
    resetTransform() {
      if (!c) return;
      const h =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        m = this.projectionDelta && !av(this.projectionDelta),
        d = this.getTransformTemplate(),
        y = d ? d(this.latestValues, "") : void 0,
        g = y !== this.prevTransformTemplateValue;
      h &&
        (m || ca(this.latestValues) || g) &&
        (c(this.instance, y),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(h = !0) {
      const m = this.measurePageBox();
      let d = this.removeElementScroll(m);
      return (
        h && (d = this.removeTransform(d)),
        rA(d),
        {
          animationId: this.root.animationId,
          measuredBox: m,
          layoutBox: d,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var y;
      const { visualElement: h } = this.options;
      if (!h) return Nt();
      const m = h.measureViewportBox();
      if (
        !(
          ((y = this.scroll) == null ? void 0 : y.wasRoot) || this.path.some(oA)
        )
      ) {
        const { scroll: g } = this.root;
        g && (ii(m.x, g.offset.x), ii(m.y, g.offset.y));
      }
      return m;
    }
    removeElementScroll(h) {
      var d;
      const m = Nt();
      if ((Oe(m, h), (d = this.scroll) != null && d.wasRoot)) return m;
      for (let y = 0; y < this.path.length; y++) {
        const g = this.path[y],
          { scroll: S, options: b } = g;
        g !== this.root &&
          S &&
          b.layoutScroll &&
          (S.wasRoot && Oe(m, h), ii(m.x, S.offset.x), ii(m.y, S.offset.y));
      }
      return m;
    }
    applyTransform(h, m = !1) {
      const d = Nt();
      Oe(d, h);
      for (let y = 0; y < this.path.length; y++) {
        const g = this.path[y];
        !m &&
          g.options.layoutScroll &&
          g.scroll &&
          g !== g.root &&
          li(d, { x: -g.scroll.offset.x, y: -g.scroll.offset.y }),
          ca(g.latestValues) && li(d, g.latestValues);
      }
      return ca(this.latestValues) && li(d, this.latestValues), d;
    }
    removeTransform(h) {
      const m = Nt();
      Oe(m, h);
      for (let d = 0; d < this.path.length; d++) {
        const y = this.path[d];
        if (!y.instance || !ca(y.latestValues)) continue;
        vc(y.latestValues) && y.updateSnapshot();
        const g = Nt(),
          S = y.measurePageBox();
        Oe(g, S),
          my(m, y.latestValues, y.snapshot ? y.snapshot.layoutBox : void 0, g);
      }
      return ca(this.latestValues) && my(m, this.latestValues), m;
    }
    setTargetDelta(h) {
      (this.targetDelta = h),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(h) {
      this.options = {
        ...this.options,
        ...h,
        crossfade: h.crossfade !== void 0 ? h.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== $t.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(h = !1) {
      var b;
      const m = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = m.isSharedProjectionDirty);
      const d = !!this.resumingFrom || this !== m;
      if (
        !(
          h ||
          (d && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((b = this.parent) != null && b.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: g, layoutId: S } = this.options;
      if (!(!this.layout || !(g || S))) {
        if (
          ((this.resolvedRelativeTargetAt = $t.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const E = this.getClosestProjectingParent();
          E && E.layout && this.animationProgress !== 1
            ? ((this.relativeParent = E),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Nt()),
              (this.relativeTargetOrigin = Nt()),
              Sl(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                E.layout.layoutBox
              ),
              Oe(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Nt()), (this.targetWithTransforms = Nt())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              fx(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Oe(this.target, this.layout.layoutBox),
                Jg(this.target, this.targetDelta))
              : Oe(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const E = this.getClosestProjectingParent();
          E &&
          !!E.resumingFrom == !!this.resumingFrom &&
          !E.options.layoutScroll &&
          E.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = E),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Nt()),
              (this.relativeTargetOrigin = Nt()),
              Sl(this.relativeTargetOrigin, this.target, E.target),
              Oe(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          vc(this.parent.latestValues) ||
          kg(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var M;
      const h = this.getLead(),
        m = !!this.resumingFrom || this !== h;
      let d = !0;
      if (
        ((this.isProjectionDirty ||
          ((M = this.parent) != null && M.isProjectionDirty)) &&
          (d = !1),
        m &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (d = !1),
        this.resolvedRelativeTargetAt === $t.timestamp && (d = !1),
        d)
      )
        return;
      const { layout: y, layoutId: g } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(y || g))
      )
        return;
      Oe(this.layoutCorrected, this.layout.layoutBox);
      const S = this.treeScale.x,
        b = this.treeScale.y;
      hx(this.layoutCorrected, this.treeScale, this.path, m),
        h.layout &&
          !h.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((h.target = h.layout.layoutBox), (h.targetWithTransforms = Nt()));
      const { target: E } = h;
      if (!E) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (fy(this.prevProjectionDelta.x, this.projectionDelta.x),
          fy(this.prevProjectionDelta.y, this.projectionDelta.y)),
        vl(this.projectionDelta, this.layoutCorrected, E, this.latestValues),
        (this.treeScale.x !== S ||
          this.treeScale.y !== b ||
          !Sy(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Sy(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", E));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(h = !0) {
      var m;
      if (((m = this.options.visualElement) == null || m.scheduleRender(), h)) {
        const d = this.getStack();
        d && d.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = ai()),
        (this.projectionDelta = ai()),
        (this.projectionDeltaWithTransform = ai());
    }
    setAnimationOrigin(h, m = !1) {
      const d = this.snapshot,
        y = d ? d.latestValues : {},
        g = { ...this.latestValues },
        S = ai();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !m);
      const b = Nt(),
        E = d ? d.source : void 0,
        M = this.layout ? this.layout.source : void 0,
        _ = E !== M,
        U = this.getStack(),
        O = !U || U.members.length <= 1,
        Y = !!(_ && !O && this.options.crossfade === !0 && !this.path.some(sA));
      this.animationProgress = 0;
      let L;
      (this.mixTargetDelta = (J) => {
        const G = J / 1e3;
        Ay(S.x, h.x, G),
          Ay(S.y, h.y, G),
          this.setTargetDelta(S),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Sl(b, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            lA(this.relativeTarget, this.relativeTargetOrigin, b, G),
            L && Xx(this.relativeTarget, L) && (this.isProjectionDirty = !1),
            L || (L = Nt()),
            Oe(L, this.relativeTarget)),
          _ &&
            ((this.animationValues = g), Lx(g, y, this.latestValues, G, Y, O)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = G);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(h) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Gn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Rt.update(() => {
          (iu.hasAnimatedSinceResize = !0),
            (this.currentAnimation = zx(0, by, {
              ...h,
              onUpdate: (m) => {
                this.mixTargetDelta(m), h.onUpdate && h.onUpdate(m);
              },
              onStop: () => {},
              onComplete: () => {
                h.onComplete && h.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const h = this.getStack();
      h && h.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(by),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const h = this.getLead();
      let {
        targetWithTransforms: m,
        target: d,
        layout: y,
        latestValues: g,
      } = h;
      if (!(!m || !d || !y)) {
        if (
          this !== h &&
          this.layout &&
          y &&
          uv(this.options.animationType, this.layout.layoutBox, y.layoutBox)
        ) {
          d = this.target || Nt();
          const S = ie(this.layout.layoutBox.x);
          (d.x.min = h.target.x.min), (d.x.max = d.x.min + S);
          const b = ie(this.layout.layoutBox.y);
          (d.y.min = h.target.y.min), (d.y.max = d.y.min + b);
        }
        Oe(m, d),
          li(m, g),
          vl(this.projectionDeltaWithTransform, this.layoutCorrected, m, g);
      }
    }
    registerSharedNode(h, m) {
      this.sharedNodes.has(h) || this.sharedNodes.set(h, new Zx()),
        this.sharedNodes.get(h).add(m);
      const y = m.options.initialPromotionConfig;
      m.promote({
        transition: y ? y.transition : void 0,
        preserveFollowOpacity:
          y && y.shouldPreserveFollowOpacity
            ? y.shouldPreserveFollowOpacity(m)
            : void 0,
      });
    }
    isLead() {
      const h = this.getStack();
      return h ? h.lead === this : !0;
    }
    getLead() {
      var m;
      const { layoutId: h } = this.options;
      return h
        ? ((m = this.getStack()) == null ? void 0 : m.lead) || this
        : this;
    }
    getPrevLead() {
      var m;
      const { layoutId: h } = this.options;
      return h ? ((m = this.getStack()) == null ? void 0 : m.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: h } = this.options;
      if (h) return this.root.sharedNodes.get(h);
    }
    promote({ needsReset: h, transition: m, preserveFollowOpacity: d } = {}) {
      const y = this.getStack();
      y && y.promote(this, d),
        h && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        m && this.setOptions({ transition: m });
    }
    relegate() {
      const h = this.getStack();
      return h ? h.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: h } = this.options;
      if (!h) return;
      let m = !1;
      const { latestValues: d } = h;
      if (
        ((d.z ||
          d.rotate ||
          d.rotateX ||
          d.rotateY ||
          d.rotateZ ||
          d.skewX ||
          d.skewY) &&
          (m = !0),
        !m)
      )
        return;
      const y = {};
      d.z && tc("z", h, y, this.animationValues);
      for (let g = 0; g < Io.length; g++)
        tc(`rotate${Io[g]}`, h, y, this.animationValues),
          tc(`skew${Io[g]}`, h, y, this.animationValues);
      h.render();
      for (const g in y)
        h.setStaticValue(g, y[g]),
          this.animationValues && (this.animationValues[g] = y[g]);
      h.scheduleRender();
    }
    getProjectionStyles(h) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return Qx;
      const m = { visibility: "" },
        d = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (m.opacity = ""),
          (m.pointerEvents = au(h == null ? void 0 : h.pointerEvents) || ""),
          (m.transform = d ? d(this.latestValues, "") : "none"),
          m
        );
      const y = this.getLead();
      if (!this.projectionDelta || !this.layout || !y.target) {
        const E = {};
        return (
          this.options.layoutId &&
            ((E.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (E.pointerEvents = au(h == null ? void 0 : h.pointerEvents) || "")),
          this.hasProjected &&
            !ca(this.latestValues) &&
            ((E.transform = d ? d({}, "") : "none"), (this.hasProjected = !1)),
          E
        );
      }
      const g = y.animationValues || y.latestValues;
      this.applyTransformsToTarget(),
        (m.transform = Kx(
          this.projectionDeltaWithTransform,
          this.treeScale,
          g
        )),
        d && (m.transform = d(g, m.transform));
      const { x: S, y: b } = this.projectionDelta;
      (m.transformOrigin = `${S.origin * 100}% ${b.origin * 100}% 0`),
        y.animationValues
          ? (m.opacity =
              y === this
                ? g.opacity ?? this.latestValues.opacity ?? 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : g.opacityExit)
          : (m.opacity =
              y === this
                ? g.opacity !== void 0
                  ? g.opacity
                  : ""
                : g.opacityExit !== void 0
                  ? g.opacityExit
                  : 0);
      for (const E in El) {
        if (g[E] === void 0) continue;
        const { correct: M, applyTo: _, isCSSVariable: U } = El[E],
          O = m.transform === "none" ? g[E] : M(g[E], y);
        if (_) {
          const Y = _.length;
          for (let L = 0; L < Y; L++) m[_[L]] = O;
        } else
          U ? (this.options.visualElement.renderState.vars[E] = O) : (m[E] = O);
      }
      return (
        this.options.layoutId &&
          (m.pointerEvents =
            y === this
              ? au(h == null ? void 0 : h.pointerEvents) || ""
              : "none"),
        m
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((h) => {
        var m;
        return (m = h.currentAnimation) == null ? void 0 : m.stop();
      }),
        this.root.nodes.forEach(Ty),
        this.root.sharedNodes.clear();
    }
  };
}
function kx(a) {
  a.updateLayout();
}
function Jx(a) {
  var s;
  const i = ((s = a.resumeFrom) == null ? void 0 : s.snapshot) || a.snapshot;
  if (a.isLead() && a.layout && i && a.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: c } = a.layout,
      { animationType: f } = a.options,
      h = i.source !== a.layout.source;
    f === "size"
      ? Ve((S) => {
          const b = h ? i.measuredBox[S] : i.layoutBox[S],
            E = ie(b);
          (b.min = r[S].min), (b.max = b.min + E);
        })
      : uv(f, i.layoutBox, r) &&
        Ve((S) => {
          const b = h ? i.measuredBox[S] : i.layoutBox[S],
            E = ie(r[S]);
          (b.max = b.min + E),
            a.relativeTarget &&
              !a.currentAnimation &&
              ((a.isProjectionDirty = !0),
              (a.relativeTarget[S].max = a.relativeTarget[S].min + E));
        });
    const m = ai();
    vl(m, r, i.layoutBox);
    const d = ai();
    h ? vl(d, a.applyTransform(c, !0), i.measuredBox) : vl(d, r, i.layoutBox);
    const y = !av(m);
    let g = !1;
    if (!a.resumeFrom) {
      const S = a.getClosestProjectingParent();
      if (S && !S.resumeFrom) {
        const { snapshot: b, layout: E } = S;
        if (b && E) {
          const M = Nt();
          Sl(M, i.layoutBox, b.layoutBox);
          const _ = Nt();
          Sl(_, r, E.layoutBox),
            iv(M, _) || (g = !0),
            S.options.layoutRoot &&
              ((a.relativeTarget = _),
              (a.relativeTargetOrigin = M),
              (a.relativeParent = S));
        }
      }
    }
    a.notifyListeners("didUpdate", {
      layout: r,
      snapshot: i,
      delta: d,
      layoutDelta: m,
      hasLayoutChanged: y,
      hasRelativeLayoutChanged: g,
    });
  } else if (a.isLead()) {
    const { onExitComplete: r } = a.options;
    r && r();
  }
  a.options.transition = void 0;
}
function Fx(a) {
  a.parent &&
    (a.isProjecting() || (a.isProjectionDirty = a.parent.isProjectionDirty),
    a.isSharedProjectionDirty ||
      (a.isSharedProjectionDirty = !!(
        a.isProjectionDirty ||
        a.parent.isProjectionDirty ||
        a.parent.isSharedProjectionDirty
      )),
    a.isTransformDirty || (a.isTransformDirty = a.parent.isTransformDirty));
}
function $x(a) {
  a.isProjectionDirty = a.isSharedProjectionDirty = a.isTransformDirty = !1;
}
function Wx(a) {
  a.clearSnapshot();
}
function Ty(a) {
  a.clearMeasurements();
}
function Ix(a) {
  a.isLayoutDirty = !1;
}
function tA(a) {
  const { visualElement: i } = a.options;
  i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"),
    a.resetTransform();
}
function xy(a) {
  a.finishAnimation(),
    (a.targetDelta = a.relativeTarget = a.target = void 0),
    (a.isProjectionDirty = !0);
}
function eA(a) {
  a.resolveTargetDelta();
}
function nA(a) {
  a.calcProjection();
}
function aA(a) {
  a.resetSkewAndRotation();
}
function iA(a) {
  a.removeLeadSnapshot();
}
function Ay(a, i, s) {
  (a.translate = Ot(i.translate, 0, s)),
    (a.scale = Ot(i.scale, 1, s)),
    (a.origin = i.origin),
    (a.originPoint = i.originPoint);
}
function Ey(a, i, s, r) {
  (a.min = Ot(i.min, s.min, r)), (a.max = Ot(i.max, s.max, r));
}
function lA(a, i, s, r) {
  Ey(a.x, i.x, s.x, r), Ey(a.y, i.y, s.y, r);
}
function sA(a) {
  return a.animationValues && a.animationValues.opacityExit !== void 0;
}
const uA = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Ry = (a) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(a),
  My = Ry("applewebkit/") && !Ry("chrome/") ? Math.round : ze;
function Dy(a) {
  (a.min = My(a.min)), (a.max = My(a.max));
}
function rA(a) {
  Dy(a.x), Dy(a.y);
}
function uv(a, i, s) {
  return (
    a === "position" || (a === "preserve-aspect" && !cx(vy(i), vy(s), 0.2))
  );
}
function oA(a) {
  var i;
  return a !== a.root && ((i = a.scroll) == null ? void 0 : i.wasRoot);
}
const cA = sv({
    attachResizeListener: (a, i) => Cl(a, "resize", i),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  ec = { current: void 0 },
  rv = sv({
    measureScroll: (a) => ({ x: a.scrollLeft, y: a.scrollTop }),
    defaultParent: () => {
      if (!ec.current) {
        const a = new cA({});
        a.mount(window), a.setOptions({ layoutScroll: !0 }), (ec.current = a);
      }
      return ec.current;
    },
    resetTransform: (a, i) => {
      a.style.transform = i !== void 0 ? i : "none";
    },
    checkIsScrollRoot: (a) => window.getComputedStyle(a).position === "fixed",
  }),
  fA = {
    pan: { Feature: Dx },
    drag: { Feature: Mx, ProjectionNode: rv, MeasureLayout: tv },
  };
function Cy(a, i, s) {
  const { props: r } = a;
  a.animationState &&
    r.whileHover &&
    a.animationState.setActive("whileHover", s === "Start");
  const c = "onHover" + s,
    f = r[c];
  f && Rt.postRender(() => f(i, Ul(i)));
}
class hA extends Zn {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = TS(
        i,
        (s, r) => (Cy(this.node, r, "Start"), (c) => Cy(this.node, c, "End"))
      ));
  }
  unmount() {}
}
class dA extends Zn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let i = !1;
    try {
      i = this.node.current.matches(":focus-visible");
    } catch {
      i = !0;
    }
    !i ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = wl(
      Cl(this.node.current, "focus", () => this.onFocus()),
      Cl(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function Oy(a, i, s) {
  const { props: r } = a;
  if (a.current instanceof HTMLButtonElement && a.current.disabled) return;
  a.animationState &&
    r.whileTap &&
    a.animationState.setActive("whileTap", s === "Start");
  const c = "onTap" + (s === "End" ? "" : s),
    f = r[c];
  f && Rt.postRender(() => f(i, Ul(i)));
}
class mA extends Zn {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = RS(
        i,
        (s, r) => (
          Oy(this.node, r, "Start"),
          (c, { success: f }) => Oy(this.node, c, f ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const Tc = new WeakMap(),
  nc = new WeakMap(),
  pA = (a) => {
    const i = Tc.get(a.target);
    i && i(a);
  },
  yA = (a) => {
    a.forEach(pA);
  };
function gA({ root: a, ...i }) {
  const s = a || document;
  nc.has(s) || nc.set(s, {});
  const r = nc.get(s),
    c = JSON.stringify(i);
  return r[c] || (r[c] = new IntersectionObserver(yA, { root: a, ...i })), r[c];
}
function vA(a, i, s) {
  const r = gA(i);
  return (
    Tc.set(a, s),
    r.observe(a),
    () => {
      Tc.delete(a), r.unobserve(a);
    }
  );
}
const SA = { some: 0, all: 1 };
class bA extends Zn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: i = {} } = this.node.getProps(),
      { root: s, margin: r, amount: c = "some", once: f } = i,
      h = {
        root: s ? s.current : void 0,
        rootMargin: r,
        threshold: typeof c == "number" ? c : SA[c],
      },
      m = (d) => {
        const { isIntersecting: y } = d;
        if (
          this.isInView === y ||
          ((this.isInView = y), f && !y && this.hasEnteredView)
        )
          return;
        y && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", y);
        const { onViewportEnter: g, onViewportLeave: S } = this.node.getProps(),
          b = y ? g : S;
        b && b(d);
      };
    return vA(this.node.current, h, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: i, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(TA(i, s)) && this.startObserver();
  }
  unmount() {}
}
function TA({ viewport: a = {} }, { viewport: i = {} } = {}) {
  return (s) => a[s] !== i[s];
}
const xA = {
    inView: { Feature: bA },
    tap: { Feature: mA },
    focus: { Feature: dA },
    hover: { Feature: hA },
  },
  AA = { layout: { ProjectionNode: rv, MeasureLayout: tv } },
  xc = { current: null },
  ov = { current: !1 };
function EA() {
  if (((ov.current = !0), !!Dc))
    if (window.matchMedia) {
      const a = window.matchMedia("(prefers-reduced-motion)"),
        i = () => (xc.current = a.matches);
      a.addListener(i), i();
    } else xc.current = !1;
}
const RA = [..._g, ee, Xn],
  MA = (a) => RA.find(Ug(a)),
  DA = new WeakMap();
function CA(a, i, s) {
  for (const r in i) {
    const c = i[r],
      f = s[r];
    if (ne(c)) a.addValue(r, c);
    else if (ne(f)) a.addValue(r, xl(c, { owner: a }));
    else if (f !== c)
      if (a.hasValue(r)) {
        const h = a.getValue(r);
        h.liveStyle === !0 ? h.jump(c) : h.hasAnimated || h.set(c);
      } else {
        const h = a.getStaticValue(r);
        a.addValue(r, xl(h !== void 0 ? h : c, { owner: a }));
      }
  }
  for (const r in s) i[r] === void 0 && a.removeValue(r);
  return i;
}
const Vy = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class OA {
  scrapeMotionValuesFromProps(i, s, r) {
    return {};
  }
  constructor(
    {
      parent: i,
      props: s,
      presenceContext: r,
      reducedMotionConfig: c,
      blockInitialAnimation: f,
      visualState: h,
    },
    m = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = nf),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const E = Ke.now();
        this.renderScheduledAt < E &&
          ((this.renderScheduledAt = E), Rt.render(this.render, !1, !0));
      });
    const { latestValues: d, renderState: y, onUpdate: g } = h;
    (this.onUpdate = g),
      (this.latestValues = d),
      (this.baseTarget = { ...d }),
      (this.initialValues = s.initial ? { ...d } : {}),
      (this.renderState = y),
      (this.parent = i),
      (this.props = s),
      (this.presenceContext = r),
      (this.depth = i ? i.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.options = m),
      (this.blockInitialAnimation = !!f),
      (this.isControllingVariants = Su(s)),
      (this.isVariantNode = Fy(s)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(i && i.current));
    const { willChange: S, ...b } = this.scrapeMotionValuesFromProps(
      s,
      {},
      this
    );
    for (const E in b) {
      const M = b[E];
      d[E] !== void 0 && ne(M) && M.set(d[E], !1);
    }
  }
  mount(i) {
    (this.current = i),
      DA.set(i, this),
      this.projection && !this.projection.instance && this.projection.mount(i),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((s, r) => this.bindToMotionValue(r, s)),
      ov.current || EA(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : xc.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(),
      Gn(this.notifyUpdate),
      Gn(this.render),
      this.valueSubscriptions.forEach((i) => i()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const i in this.events) this.events[i].clear();
    for (const i in this.features) {
      const s = this.features[i];
      s && (s.unmount(), (s.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(i, s) {
    this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)();
    const r = ma.has(i);
    r && this.onBindTransform && this.onBindTransform();
    const c = s.on("change", (m) => {
        (this.latestValues[i] = m),
          this.props.onUpdate && Rt.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      f = s.on("renderRequest", this.scheduleRender);
    let h;
    window.MotionCheckAppearSync &&
      (h = window.MotionCheckAppearSync(this, i, s)),
      this.valueSubscriptions.set(i, () => {
        c(), f(), h && h(), s.owner && s.stop();
      });
  }
  sortNodePosition(i) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== i.type
      ? 0
      : this.sortInstanceNodePosition(this.current, i.current);
  }
  updateFeatures() {
    let i = "animation";
    for (i in si) {
      const s = si[i];
      if (!s) continue;
      const { isEnabled: r, Feature: c } = s;
      if (
        (!this.features[i] &&
          c &&
          r(this.props) &&
          (this.features[i] = new c(this)),
        this.features[i])
      ) {
        const f = this.features[i];
        f.isMounted ? f.update() : (f.mount(), (f.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Nt();
  }
  getStaticValue(i) {
    return this.latestValues[i];
  }
  setStaticValue(i, s) {
    this.latestValues[i] = s;
  }
  update(i, s) {
    (i.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = i),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = s);
    for (let r = 0; r < Vy.length; r++) {
      const c = Vy[r];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](),
        delete this.propEventSubscriptions[c]);
      const f = "on" + c,
        h = i[f];
      h && (this.propEventSubscriptions[c] = this.on(c, h));
    }
    (this.prevMotionValues = CA(
      this,
      this.scrapeMotionValuesFromProps(i, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  getVariant(i) {
    return this.props.variants ? this.props.variants[i] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(i) {
    const s = this.getClosestVariantNode();
    if (s)
      return (
        s.variantChildren && s.variantChildren.add(i),
        () => s.variantChildren.delete(i)
      );
  }
  addValue(i, s) {
    const r = this.values.get(i);
    s !== r &&
      (r && this.removeValue(i),
      this.bindToMotionValue(i, s),
      this.values.set(i, s),
      (this.latestValues[i] = s.get()));
  }
  removeValue(i) {
    this.values.delete(i);
    const s = this.valueSubscriptions.get(i);
    s && (s(), this.valueSubscriptions.delete(i)),
      delete this.latestValues[i],
      this.removeValueFromRenderState(i, this.renderState);
  }
  hasValue(i) {
    return this.values.has(i);
  }
  getValue(i, s) {
    if (this.props.values && this.props.values[i]) return this.props.values[i];
    let r = this.values.get(i);
    return (
      r === void 0 &&
        s !== void 0 &&
        ((r = xl(s === null ? void 0 : s, { owner: this })),
        this.addValue(i, r)),
      r
    );
  }
  readValue(i, s) {
    let r =
      this.latestValues[i] !== void 0 || !this.current
        ? this.latestValues[i]
        : this.getBaseTargetFromProps(this.props, i) ??
          this.readValueFromInstance(this.current, i, this.options);
    return (
      r != null &&
        (typeof r == "string" && (zg(r) || Tg(r))
          ? (r = parseFloat(r))
          : !MA(r) && Xn.test(s) && (r = Cg(i, s)),
        this.setBaseTarget(i, ne(r) ? r.get() : r)),
      ne(r) ? r.get() : r
    );
  }
  setBaseTarget(i, s) {
    this.baseTarget[i] = s;
  }
  getBaseTarget(i) {
    var f;
    const { initial: s } = this.props;
    let r;
    if (typeof s == "string" || typeof s == "object") {
      const h = Fc(
        this.props,
        s,
        (f = this.presenceContext) == null ? void 0 : f.custom
      );
      h && (r = h[i]);
    }
    if (s && r !== void 0) return r;
    const c = this.getBaseTargetFromProps(this.props, i);
    return c !== void 0 && !ne(c)
      ? c
      : this.initialValues[i] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[i];
  }
  on(i, s) {
    return this.events[i] || (this.events[i] = new wc()), this.events[i].add(s);
  }
  notify(i, ...s) {
    this.events[i] && this.events[i].notify(...s);
  }
}
class cv extends OA {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Bg);
  }
  sortInstanceNodePosition(i, s) {
    return i.compareDocumentPosition(s) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(i, s) {
    return i.style ? i.style[s] : void 0;
  }
  removeValueFromRenderState(i, { vars: s, style: r }) {
    delete s[i], delete r[i];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: i } = this.props;
    ne(i) &&
      (this.childSubscription = i.on("change", (s) => {
        this.current && (this.current.textContent = `${s}`);
      }));
  }
}
function VA(a) {
  return window.getComputedStyle(a);
}
class zA extends cv {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = ug);
  }
  readValueFromInstance(i, s) {
    if (ma.has(s)) return Xb(i, s);
    {
      const r = VA(i),
        c = (Gc(s) ? r.getPropertyValue(s) : r[s]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: s }) {
    return Fg(i, s);
  }
  build(i, s, r) {
    Kc(i, s, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, s, r) {
    return $c(i, s, r);
  }
}
class wA extends cv {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Nt),
      (this.updateDimensions = () => {
        this.current &&
          !this.renderState.dimensions &&
          sg(this.current, this.renderState);
      });
  }
  getBaseTargetFromProps(i, s) {
    return i[s];
  }
  readValueFromInstance(i, s) {
    if (ma.has(s)) {
      const r = Dg(s);
      return (r && r.default) || 0;
    }
    return (s = rg.has(s) ? s : Yc(s)), i.getAttribute(s);
  }
  scrapeMotionValuesFromProps(i, s, r) {
    return cg(i, s, r);
  }
  onBindTransform() {
    this.current &&
      !this.renderState.dimensions &&
      Rt.postRender(this.updateDimensions);
  }
  build(i, s, r) {
    kc(i, s, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(i, s, r, c) {
    og(i, s, r, c);
  }
  mount(i) {
    (this.isSVGTag = Jc(i.tagName)), super.mount(i);
  }
}
const UA = (a, i) =>
    Pc(a) ? new wA(i) : new zA(i, { allowProjection: a !== V.Fragment }),
  _A = yb({ ...nx, ...xA, ...fA, ...AA }, UA),
  mu = wS(_A),
  BA = "./assets/1-VLo-jrvR.png",
  NA = "./assets/2-Da62pe6x.png",
  LA = "./assets/3-Bn5osJ9n.png",
  HA = "./assets/4-C5vyduhT.png",
  jA = "./assets/5-D0D0LIXp.png",
  qA = "./assets/6-D8Znk9JH.png",
  YA = "./assets/7-4A9KkHtN.png";
function GA() {
  const [a, i] = V.useState(0),
    s = [
      {
        text: "Где-то в волшебной вселенной, Лиза работала как настоящий герой…",
        image: BA,
      },
      {
        text: "Но даже герои нуждаются в передышке — особенно, если они любят гулять по зимнему воздуху",
        image: NA,
      },
      {
        text: "Наутро она проснулась с больным горлом и хриплым голосом...",
        image: LA,
      },
      { text: "Барса, ее верная собака не отходила ни на шаг", image: HA },
      {
        text: "К радости близких людей, горячий чай, плед и много любви начали творить чудеса",
        image: jA,
      },
      { text: "Скоро Лиза снова заулыбалась", image: qA },
      {
        text: "И вот она снова здорова, сияет, и мы гуляем всей нашей маленькой стаей.",
        image: YA,
      },
    ];
  V.useEffect(() => {
    const c = setInterval(() => {
      i((f) => (f < s.length - 1 ? f + 1 : f));
    }, 6e3);
    return () => clearInterval(c);
  }, []);
  const r = () => {
    i(0);
  };
  return Et.jsxs("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    children: [
      Et.jsx("div", {
        style: { height: 400, borderRadius: 15 },
        children: Et.jsx(
          mu.img,
          {
            style: { maxHeight: "100%" },
            src: s[a].image,
            alt: "scene",
            className: "w-64 h-64 object-contain mb-6",
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
          },
          s[a].image
        ),
      }),
      Et.jsx(
        mu.p,
        {
          style: {
            fontSize: 26,
            maxWidth: 400,
            textAlign: "center",
            color: "black",
          },
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1 },
          children: s[a].text,
        },
        s[a].text
      ),
      a === s.length - 1 &&
        Et.jsx("button", {
          onClick: r,
          style: {
            marginTop: 20,
            padding: "10px 20px",
            fontSize: 18,
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
          },
          children: "Начать заново",
        }),
    ],
  });
}
var hl = {},
  zy;
function XA() {
  if (zy) return hl;
  (zy = 1),
    Object.defineProperty(hl, "__esModule", { value: !0 }),
    (hl.parse = h),
    (hl.serialize = y);
  const a = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    i = /^[\u0021-\u003A\u003C-\u007E]*$/,
    s =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    r = /^[\u0020-\u003A\u003D-\u007E]*$/,
    c = Object.prototype.toString,
    f = (() => {
      const b = function () {};
      return (b.prototype = Object.create(null)), b;
    })();
  function h(b, E) {
    const M = new f(),
      _ = b.length;
    if (_ < 2) return M;
    const U = (E == null ? void 0 : E.decode) || g;
    let O = 0;
    do {
      const Y = b.indexOf("=", O);
      if (Y === -1) break;
      const L = b.indexOf(";", O),
        J = L === -1 ? _ : L;
      if (Y > J) {
        O = b.lastIndexOf(";", Y - 1) + 1;
        continue;
      }
      const G = m(b, O, Y),
        nt = d(b, Y, G),
        lt = b.slice(G, nt);
      if (M[lt] === void 0) {
        let P = m(b, Y + 1, J),
          st = d(b, J, P);
        const vt = U(b.slice(P, st));
        M[lt] = vt;
      }
      O = J + 1;
    } while (O < _);
    return M;
  }
  function m(b, E, M) {
    do {
      const _ = b.charCodeAt(E);
      if (_ !== 32 && _ !== 9) return E;
    } while (++E < M);
    return M;
  }
  function d(b, E, M) {
    for (; E > M; ) {
      const _ = b.charCodeAt(--E);
      if (_ !== 32 && _ !== 9) return E + 1;
    }
    return M;
  }
  function y(b, E, M) {
    const _ = (M == null ? void 0 : M.encode) || encodeURIComponent;
    if (!a.test(b)) throw new TypeError(`argument name is invalid: ${b}`);
    const U = _(E);
    if (!i.test(U)) throw new TypeError(`argument val is invalid: ${E}`);
    let O = b + "=" + U;
    if (!M) return O;
    if (M.maxAge !== void 0) {
      if (!Number.isInteger(M.maxAge))
        throw new TypeError(`option maxAge is invalid: ${M.maxAge}`);
      O += "; Max-Age=" + M.maxAge;
    }
    if (M.domain) {
      if (!s.test(M.domain))
        throw new TypeError(`option domain is invalid: ${M.domain}`);
      O += "; Domain=" + M.domain;
    }
    if (M.path) {
      if (!r.test(M.path))
        throw new TypeError(`option path is invalid: ${M.path}`);
      O += "; Path=" + M.path;
    }
    if (M.expires) {
      if (!S(M.expires) || !Number.isFinite(M.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${M.expires}`);
      O += "; Expires=" + M.expires.toUTCString();
    }
    if (
      (M.httpOnly && (O += "; HttpOnly"),
      M.secure && (O += "; Secure"),
      M.partitioned && (O += "; Partitioned"),
      M.priority)
    )
      switch (
        typeof M.priority == "string" ? M.priority.toLowerCase() : void 0
      ) {
        case "low":
          O += "; Priority=Low";
          break;
        case "medium":
          O += "; Priority=Medium";
          break;
        case "high":
          O += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${M.priority}`);
      }
    if (M.sameSite)
      switch (
        typeof M.sameSite == "string" ? M.sameSite.toLowerCase() : M.sameSite
      ) {
        case !0:
        case "strict":
          O += "; SameSite=Strict";
          break;
        case "lax":
          O += "; SameSite=Lax";
          break;
        case "none":
          O += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${M.sameSite}`);
      }
    return O;
  }
  function g(b) {
    if (b.indexOf("%") === -1) return b;
    try {
      return decodeURIComponent(b);
    } catch {
      return b;
    }
  }
  function S(b) {
    return c.call(b) === "[object Date]";
  }
  return hl;
}
XA();
/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var wy = "popstate";
function ZA(a = {}) {
  function i(r, c) {
    let { pathname: f, search: h, hash: m } = r.location;
    return Ac(
      "",
      { pathname: f, search: h, hash: m },
      (c.state && c.state.usr) || null,
      (c.state && c.state.key) || "default"
    );
  }
  function s(r, c) {
    return typeof c == "string" ? c : Ol(c);
  }
  return QA(i, s, null, a);
}
function Vt(a, i) {
  if (a === !1 || a === null || typeof a > "u") throw new Error(i);
}
function Pe(a, i) {
  if (!a) {
    typeof console < "u" && console.warn(i);
    try {
      throw new Error(i);
    } catch {}
  }
}
function KA() {
  return Math.random().toString(36).substring(2, 10);
}
function Uy(a, i) {
  return { usr: a.state, key: a.key, idx: i };
}
function Ac(a, i, s = null, r) {
  return {
    pathname: typeof a == "string" ? a : a.pathname,
    search: "",
    hash: "",
    ...(typeof i == "string" ? ci(i) : i),
    state: s,
    key: (i && i.key) || r || KA(),
  };
}
function Ol({ pathname: a = "/", search: i = "", hash: s = "" }) {
  return (
    i && i !== "?" && (a += i.charAt(0) === "?" ? i : "?" + i),
    s && s !== "#" && (a += s.charAt(0) === "#" ? s : "#" + s),
    a
  );
}
function ci(a) {
  let i = {};
  if (a) {
    let s = a.indexOf("#");
    s >= 0 && ((i.hash = a.substring(s)), (a = a.substring(0, s)));
    let r = a.indexOf("?");
    r >= 0 && ((i.search = a.substring(r)), (a = a.substring(0, r))),
      a && (i.pathname = a);
  }
  return i;
}
function QA(a, i, s, r = {}) {
  let { window: c = document.defaultView, v5Compat: f = !1 } = r,
    h = c.history,
    m = "POP",
    d = null,
    y = g();
  y == null && ((y = 0), h.replaceState({ ...h.state, idx: y }, ""));
  function g() {
    return (h.state || { idx: null }).idx;
  }
  function S() {
    m = "POP";
    let U = g(),
      O = U == null ? null : U - y;
    (y = U), d && d({ action: m, location: _.location, delta: O });
  }
  function b(U, O) {
    m = "PUSH";
    let Y = Ac(_.location, U, O);
    y = g() + 1;
    let L = Uy(Y, y),
      J = _.createHref(Y);
    try {
      h.pushState(L, "", J);
    } catch (G) {
      if (G instanceof DOMException && G.name === "DataCloneError") throw G;
      c.location.assign(J);
    }
    f && d && d({ action: m, location: _.location, delta: 1 });
  }
  function E(U, O) {
    m = "REPLACE";
    let Y = Ac(_.location, U, O);
    y = g();
    let L = Uy(Y, y),
      J = _.createHref(Y);
    h.replaceState(L, "", J),
      f && d && d({ action: m, location: _.location, delta: 0 });
  }
  function M(U) {
    let O = c.location.origin !== "null" ? c.location.origin : c.location.href,
      Y = typeof U == "string" ? U : Ol(U);
    return (
      (Y = Y.replace(/ $/, "%20")),
      Vt(
        O,
        `No window.location.(origin|href) available to create URL for href: ${Y}`
      ),
      new URL(Y, O)
    );
  }
  let _ = {
    get action() {
      return m;
    },
    get location() {
      return a(c, h);
    },
    listen(U) {
      if (d) throw new Error("A history only accepts one active listener");
      return (
        c.addEventListener(wy, S),
        (d = U),
        () => {
          c.removeEventListener(wy, S), (d = null);
        }
      );
    },
    createHref(U) {
      return i(c, U);
    },
    createURL: M,
    encodeLocation(U) {
      let O = M(U);
      return { pathname: O.pathname, search: O.search, hash: O.hash };
    },
    push: b,
    replace: E,
    go(U) {
      return h.go(U);
    },
  };
  return _;
}
function fv(a, i, s = "/") {
  return PA(a, i, s, !1);
}
function PA(a, i, s, r) {
  let c = typeof i == "string" ? ci(i) : i,
    f = mn(c.pathname || "/", s);
  if (f == null) return null;
  let h = hv(a);
  kA(h);
  let m = null;
  for (let d = 0; m == null && d < h.length; ++d) {
    let y = lE(f);
    m = aE(h[d], y, r);
  }
  return m;
}
function hv(a, i = [], s = [], r = "") {
  let c = (f, h, m) => {
    let d = {
      relativePath: m === void 0 ? f.path || "" : m,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: h,
      route: f,
    };
    d.relativePath.startsWith("/") &&
      (Vt(
        d.relativePath.startsWith(r),
        `Absolute route path "${d.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (d.relativePath = d.relativePath.slice(r.length)));
    let y = hn([r, d.relativePath]),
      g = s.concat(d);
    f.children &&
      f.children.length > 0 &&
      (Vt(
        f.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${y}".`
      ),
      hv(f.children, i, g, y)),
      !(f.path == null && !f.index) &&
        i.push({ path: y, score: eE(y, f.index), routesMeta: g });
  };
  return (
    a.forEach((f, h) => {
      var m;
      if (f.path === "" || !((m = f.path) != null && m.includes("?"))) c(f, h);
      else for (let d of dv(f.path)) c(f, h, d);
    }),
    i
  );
}
function dv(a) {
  let i = a.split("/");
  if (i.length === 0) return [];
  let [s, ...r] = i,
    c = s.endsWith("?"),
    f = s.replace(/\?$/, "");
  if (r.length === 0) return c ? [f, ""] : [f];
  let h = dv(r.join("/")),
    m = [];
  return (
    m.push(...h.map((d) => (d === "" ? f : [f, d].join("/")))),
    c && m.push(...h),
    m.map((d) => (a.startsWith("/") && d === "" ? "/" : d))
  );
}
function kA(a) {
  a.sort((i, s) =>
    i.score !== s.score
      ? s.score - i.score
      : nE(
          i.routesMeta.map((r) => r.childrenIndex),
          s.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
var JA = /^:[\w-]+$/,
  FA = 3,
  $A = 2,
  WA = 1,
  IA = 10,
  tE = -2,
  _y = (a) => a === "*";
function eE(a, i) {
  let s = a.split("/"),
    r = s.length;
  return (
    s.some(_y) && (r += tE),
    i && (r += $A),
    s
      .filter((c) => !_y(c))
      .reduce((c, f) => c + (JA.test(f) ? FA : f === "" ? WA : IA), r)
  );
}
function nE(a, i) {
  return a.length === i.length && a.slice(0, -1).every((r, c) => r === i[c])
    ? a[a.length - 1] - i[i.length - 1]
    : 0;
}
function aE(a, i, s = !1) {
  let { routesMeta: r } = a,
    c = {},
    f = "/",
    h = [];
  for (let m = 0; m < r.length; ++m) {
    let d = r[m],
      y = m === r.length - 1,
      g = f === "/" ? i : i.slice(f.length) || "/",
      S = pu(
        { path: d.relativePath, caseSensitive: d.caseSensitive, end: y },
        g
      ),
      b = d.route;
    if (
      (!S &&
        y &&
        s &&
        !r[r.length - 1].route.index &&
        (S = pu(
          { path: d.relativePath, caseSensitive: d.caseSensitive, end: !1 },
          g
        )),
      !S)
    )
      return null;
    Object.assign(c, S.params),
      h.push({
        params: c,
        pathname: hn([f, S.pathname]),
        pathnameBase: oE(hn([f, S.pathnameBase])),
        route: b,
      }),
      S.pathnameBase !== "/" && (f = hn([f, S.pathnameBase]));
  }
  return h;
}
function pu(a, i) {
  typeof a == "string" && (a = { path: a, caseSensitive: !1, end: !0 });
  let [s, r] = iE(a.path, a.caseSensitive, a.end),
    c = i.match(s);
  if (!c) return null;
  let f = c[0],
    h = f.replace(/(.)\/+$/, "$1"),
    m = c.slice(1);
  return {
    params: r.reduce((y, { paramName: g, isOptional: S }, b) => {
      if (g === "*") {
        let M = m[b] || "";
        h = f.slice(0, f.length - M.length).replace(/(.)\/+$/, "$1");
      }
      const E = m[b];
      return (
        S && !E ? (y[g] = void 0) : (y[g] = (E || "").replace(/%2F/g, "/")), y
      );
    }, {}),
    pathname: f,
    pathnameBase: h,
    pattern: a,
  };
}
function iE(a, i = !1, s = !0) {
  Pe(
    a === "*" || !a.endsWith("*") || a.endsWith("/*"),
    `Route path "${a}" will be treated as if it were "${a.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/, "/*")}".`
  );
  let r = [],
    c =
      "^" +
      a
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (h, m, d) => (
            r.push({ paramName: m, isOptional: d != null }),
            d ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    a.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (c += a === "*" || a === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : s
        ? (c += "\\/*$")
        : a !== "" && a !== "/" && (c += "(?:(?=\\/|$))"),
    [new RegExp(c, i ? void 0 : "i"), r]
  );
}
function lE(a) {
  try {
    return a
      .split("/")
      .map((i) => decodeURIComponent(i).replace(/\//g, "%2F"))
      .join("/");
  } catch (i) {
    return (
      Pe(
        !1,
        `The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`
      ),
      a
    );
  }
}
function mn(a, i) {
  if (i === "/") return a;
  if (!a.toLowerCase().startsWith(i.toLowerCase())) return null;
  let s = i.endsWith("/") ? i.length - 1 : i.length,
    r = a.charAt(s);
  return r && r !== "/" ? null : a.slice(s) || "/";
}
function sE(a, i = "/") {
  let {
    pathname: s,
    search: r = "",
    hash: c = "",
  } = typeof a == "string" ? ci(a) : a;
  return {
    pathname: s ? (s.startsWith("/") ? s : uE(s, i)) : i,
    search: cE(r),
    hash: fE(c),
  };
}
function uE(a, i) {
  let s = i.replace(/\/+$/, "").split("/");
  return (
    a.split("/").forEach((c) => {
      c === ".." ? s.length > 1 && s.pop() : c !== "." && s.push(c);
    }),
    s.length > 1 ? s.join("/") : "/"
  );
}
function ac(a, i, s, r) {
  return `Cannot include a '${a}' character in a manually specified \`to.${i}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function rE(a) {
  return a.filter(
    (i, s) => s === 0 || (i.route.path && i.route.path.length > 0)
  );
}
function mv(a) {
  let i = rE(a);
  return i.map((s, r) => (r === i.length - 1 ? s.pathname : s.pathnameBase));
}
function pv(a, i, s, r = !1) {
  let c;
  typeof a == "string"
    ? (c = ci(a))
    : ((c = { ...a }),
      Vt(
        !c.pathname || !c.pathname.includes("?"),
        ac("?", "pathname", "search", c)
      ),
      Vt(
        !c.pathname || !c.pathname.includes("#"),
        ac("#", "pathname", "hash", c)
      ),
      Vt(!c.search || !c.search.includes("#"), ac("#", "search", "hash", c)));
  let f = a === "" || c.pathname === "",
    h = f ? "/" : c.pathname,
    m;
  if (h == null) m = s;
  else {
    let S = i.length - 1;
    if (!r && h.startsWith("..")) {
      let b = h.split("/");
      for (; b[0] === ".."; ) b.shift(), (S -= 1);
      c.pathname = b.join("/");
    }
    m = S >= 0 ? i[S] : "/";
  }
  let d = sE(c, m),
    y = h && h !== "/" && h.endsWith("/"),
    g = (f || h === ".") && s.endsWith("/");
  return !d.pathname.endsWith("/") && (y || g) && (d.pathname += "/"), d;
}
var hn = (a) => a.join("/").replace(/\/\/+/g, "/"),
  oE = (a) => a.replace(/\/+$/, "").replace(/^\/*/, "/"),
  cE = (a) => (!a || a === "?" ? "" : a.startsWith("?") ? a : "?" + a),
  fE = (a) => (!a || a === "#" ? "" : a.startsWith("#") ? a : "#" + a);
function hE(a) {
  return (
    a != null &&
    typeof a.status == "number" &&
    typeof a.statusText == "string" &&
    typeof a.internal == "boolean" &&
    "data" in a
  );
}
var yv = ["POST", "PUT", "PATCH", "DELETE"];
new Set(yv);
var dE = ["GET", ...yv];
new Set(dE);
var fi = V.createContext(null);
fi.displayName = "DataRouter";
var Tu = V.createContext(null);
Tu.displayName = "DataRouterState";
var gv = V.createContext({ isTransitioning: !1 });
gv.displayName = "ViewTransition";
var mE = V.createContext(new Map());
mE.displayName = "Fetchers";
var pE = V.createContext(null);
pE.displayName = "Await";
var ke = V.createContext(null);
ke.displayName = "Navigation";
var _l = V.createContext(null);
_l.displayName = "Location";
var pn = V.createContext({ outlet: null, matches: [], isDataRoute: !1 });
pn.displayName = "Route";
var uf = V.createContext(null);
uf.displayName = "RouteError";
function yE(a, { relative: i } = {}) {
  Vt(
    Bl(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: r } = V.useContext(ke),
    { hash: c, pathname: f, search: h } = Nl(a, { relative: i }),
    m = f;
  return (
    s !== "/" && (m = f === "/" ? s : hn([s, f])),
    r.createHref({ pathname: m, search: h, hash: c })
  );
}
function Bl() {
  return V.useContext(_l) != null;
}
function pa() {
  return (
    Vt(
      Bl(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    V.useContext(_l).location
  );
}
var vv =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Sv(a) {
  V.useContext(ke).static || V.useLayoutEffect(a);
}
function gE() {
  let { isDataRoute: a } = V.useContext(pn);
  return a ? VE() : vE();
}
function vE() {
  Vt(
    Bl(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let a = V.useContext(fi),
    { basename: i, navigator: s } = V.useContext(ke),
    { matches: r } = V.useContext(pn),
    { pathname: c } = pa(),
    f = JSON.stringify(mv(r)),
    h = V.useRef(!1);
  return (
    Sv(() => {
      h.current = !0;
    }),
    V.useCallback(
      (d, y = {}) => {
        if ((Pe(h.current, vv), !h.current)) return;
        if (typeof d == "number") {
          s.go(d);
          return;
        }
        let g = pv(d, JSON.parse(f), c, y.relative === "path");
        a == null &&
          i !== "/" &&
          (g.pathname = g.pathname === "/" ? i : hn([i, g.pathname])),
          (y.replace ? s.replace : s.push)(g, y.state, y);
      },
      [i, s, f, c, a]
    )
  );
}
V.createContext(null);
function Nl(a, { relative: i } = {}) {
  let { matches: s } = V.useContext(pn),
    { pathname: r } = pa(),
    c = JSON.stringify(mv(s));
  return V.useMemo(() => pv(a, JSON.parse(c), r, i === "path"), [a, c, r, i]);
}
function SE(a, i) {
  return bv(a, i);
}
function bv(a, i, s, r) {
  var Y;
  Vt(
    Bl(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c, static: f } = V.useContext(ke),
    { matches: h } = V.useContext(pn),
    m = h[h.length - 1],
    d = m ? m.params : {},
    y = m ? m.pathname : "/",
    g = m ? m.pathnameBase : "/",
    S = m && m.route;
  {
    let L = (S && S.path) || "";
    Tv(
      y,
      !S || L.endsWith("*") || L.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L === "/" ? "*" : `${L}/*`}">.`
    );
  }
  let b = pa(),
    E;
  if (i) {
    let L = typeof i == "string" ? ci(i) : i;
    Vt(
      g === "/" || ((Y = L.pathname) == null ? void 0 : Y.startsWith(g)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${L.pathname}" was given in the \`location\` prop.`
    ),
      (E = L);
  } else E = b;
  let M = E.pathname || "/",
    _ = M;
  if (g !== "/") {
    let L = g.replace(/^\//, "").split("/");
    _ = "/" + M.replace(/^\//, "").split("/").slice(L.length).join("/");
  }
  let U =
    !f && s && s.matches && s.matches.length > 0
      ? s.matches
      : fv(a, { pathname: _ });
  Pe(
    S || U != null,
    `No routes matched location "${E.pathname}${E.search}${E.hash}" `
  ),
    Pe(
      U == null ||
        U[U.length - 1].route.element !== void 0 ||
        U[U.length - 1].route.Component !== void 0 ||
        U[U.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let O = EE(
    U &&
      U.map((L) =>
        Object.assign({}, L, {
          params: Object.assign({}, d, L.params),
          pathname: hn([
            g,
            c.encodeLocation
              ? c.encodeLocation(L.pathname).pathname
              : L.pathname,
          ]),
          pathnameBase:
            L.pathnameBase === "/"
              ? g
              : hn([
                  g,
                  c.encodeLocation
                    ? c.encodeLocation(L.pathnameBase).pathname
                    : L.pathnameBase,
                ]),
        })
      ),
    h,
    s,
    r
  );
  return i && O
    ? V.createElement(
        _l.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...E,
            },
            navigationType: "POP",
          },
        },
        O
      )
    : O;
}
function bE() {
  let a = OE(),
    i = hE(a)
      ? `${a.status} ${a.statusText}`
      : a instanceof Error
        ? a.message
        : JSON.stringify(a),
    s = a instanceof Error ? a.stack : null,
    r = "rgba(200,200,200, 0.5)",
    c = { padding: "0.5rem", backgroundColor: r },
    f = { padding: "2px 4px", backgroundColor: r },
    h = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", a),
    (h = V.createElement(
      V.Fragment,
      null,
      V.createElement("p", null, "💿 Hey developer 👋"),
      V.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        V.createElement("code", { style: f }, "ErrorBoundary"),
        " or",
        " ",
        V.createElement("code", { style: f }, "errorElement"),
        " prop on your route."
      )
    )),
    V.createElement(
      V.Fragment,
      null,
      V.createElement("h2", null, "Unexpected Application Error!"),
      V.createElement("h3", { style: { fontStyle: "italic" } }, i),
      s ? V.createElement("pre", { style: c }, s) : null,
      h
    )
  );
}
var TE = V.createElement(bE, null),
  xE = class extends V.Component {
    constructor(a) {
      super(a),
        (this.state = {
          location: a.location,
          revalidation: a.revalidation,
          error: a.error,
        });
    }
    static getDerivedStateFromError(a) {
      return { error: a };
    }
    static getDerivedStateFromProps(a, i) {
      return i.location !== a.location ||
        (i.revalidation !== "idle" && a.revalidation === "idle")
        ? { error: a.error, location: a.location, revalidation: a.revalidation }
        : {
            error: a.error !== void 0 ? a.error : i.error,
            location: i.location,
            revalidation: a.revalidation || i.revalidation,
          };
    }
    componentDidCatch(a, i) {
      console.error(
        "React Router caught the following error during render",
        a,
        i
      );
    }
    render() {
      return this.state.error !== void 0
        ? V.createElement(
            pn.Provider,
            { value: this.props.routeContext },
            V.createElement(uf.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function AE({ routeContext: a, match: i, children: s }) {
  let r = V.useContext(fi);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (i.route.errorElement || i.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = i.route.id),
    V.createElement(pn.Provider, { value: a }, s)
  );
}
function EE(a, i = [], s = null, r = null) {
  if (a == null) {
    if (!s) return null;
    if (s.errors) a = s.matches;
    else if (i.length === 0 && !s.initialized && s.matches.length > 0)
      a = s.matches;
    else return null;
  }
  let c = a,
    f = s == null ? void 0 : s.errors;
  if (f != null) {
    let d = c.findIndex(
      (y) => y.route.id && (f == null ? void 0 : f[y.route.id]) !== void 0
    );
    Vt(
      d >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`
    ),
      (c = c.slice(0, Math.min(c.length, d + 1)));
  }
  let h = !1,
    m = -1;
  if (s)
    for (let d = 0; d < c.length; d++) {
      let y = c[d];
      if (
        ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (m = d),
        y.route.id)
      ) {
        let { loaderData: g, errors: S } = s,
          b =
            y.route.loader &&
            !g.hasOwnProperty(y.route.id) &&
            (!S || S[y.route.id] === void 0);
        if (y.route.lazy || b) {
          (h = !0), m >= 0 ? (c = c.slice(0, m + 1)) : (c = [c[0]]);
          break;
        }
      }
    }
  return c.reduceRight((d, y, g) => {
    let S,
      b = !1,
      E = null,
      M = null;
    s &&
      ((S = f && y.route.id ? f[y.route.id] : void 0),
      (E = y.route.errorElement || TE),
      h &&
        (m < 0 && g === 0
          ? (Tv(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (b = !0),
            (M = null))
          : m === g &&
            ((b = !0), (M = y.route.hydrateFallbackElement || null))));
    let _ = i.concat(c.slice(0, g + 1)),
      U = () => {
        let O;
        return (
          S
            ? (O = E)
            : b
              ? (O = M)
              : y.route.Component
                ? (O = V.createElement(y.route.Component, null))
                : y.route.element
                  ? (O = y.route.element)
                  : (O = d),
          V.createElement(AE, {
            match: y,
            routeContext: { outlet: d, matches: _, isDataRoute: s != null },
            children: O,
          })
        );
      };
    return s && (y.route.ErrorBoundary || y.route.errorElement || g === 0)
      ? V.createElement(xE, {
          location: s.location,
          revalidation: s.revalidation,
          component: E,
          error: S,
          children: U(),
          routeContext: { outlet: null, matches: _, isDataRoute: !0 },
        })
      : U();
  }, null);
}
function rf(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function RE(a) {
  let i = V.useContext(fi);
  return Vt(i, rf(a)), i;
}
function ME(a) {
  let i = V.useContext(Tu);
  return Vt(i, rf(a)), i;
}
function DE(a) {
  let i = V.useContext(pn);
  return Vt(i, rf(a)), i;
}
function of(a) {
  let i = DE(a),
    s = i.matches[i.matches.length - 1];
  return (
    Vt(
      s.route.id,
      `${a} can only be used on routes that contain a unique "id"`
    ),
    s.route.id
  );
}
function CE() {
  return of("useRouteId");
}
function OE() {
  var r;
  let a = V.useContext(uf),
    i = ME("useRouteError"),
    s = of("useRouteError");
  return a !== void 0 ? a : (r = i.errors) == null ? void 0 : r[s];
}
function VE() {
  let { router: a } = RE("useNavigate"),
    i = of("useNavigate"),
    s = V.useRef(!1);
  return (
    Sv(() => {
      s.current = !0;
    }),
    V.useCallback(
      async (c, f = {}) => {
        Pe(s.current, vv),
          s.current &&
            (typeof c == "number"
              ? a.navigate(c)
              : await a.navigate(c, { fromRouteId: i, ...f }));
      },
      [a, i]
    )
  );
}
var By = {};
function Tv(a, i, s) {
  !i && !By[a] && ((By[a] = !0), Pe(!1, s));
}
V.memo(zE);
function zE({ routes: a, future: i, state: s }) {
  return bv(a, void 0, s, i);
}
function Ec(a) {
  Vt(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function wE({
  basename: a = "/",
  children: i = null,
  location: s,
  navigationType: r = "POP",
  navigator: c,
  static: f = !1,
}) {
  Vt(
    !Bl(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let h = a.replace(/^\/*/, "/"),
    m = V.useMemo(
      () => ({ basename: h, navigator: c, static: f, future: {} }),
      [h, c, f]
    );
  typeof s == "string" && (s = ci(s));
  let {
      pathname: d = "/",
      search: y = "",
      hash: g = "",
      state: S = null,
      key: b = "default",
    } = s,
    E = V.useMemo(() => {
      let M = mn(d, h);
      return M == null
        ? null
        : {
            location: { pathname: M, search: y, hash: g, state: S, key: b },
            navigationType: r,
          };
    }, [h, d, y, g, S, b, r]);
  return (
    Pe(
      E != null,
      `<Router basename="${h}"> is not able to match the URL "${d}${y}${g}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    E == null
      ? null
      : V.createElement(
          ke.Provider,
          { value: m },
          V.createElement(_l.Provider, { children: i, value: E })
        )
  );
}
function UE({ children: a, location: i }) {
  return SE(Rc(a), i);
}
function Rc(a, i = []) {
  let s = [];
  return (
    V.Children.forEach(a, (r, c) => {
      if (!V.isValidElement(r)) return;
      let f = [...i, c];
      if (r.type === V.Fragment) {
        s.push.apply(s, Rc(r.props.children, f));
        return;
      }
      Vt(
        r.type === Ec,
        `[${typeof r.type == "string" ? r.type : r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Vt(
          !r.props.index || !r.props.children,
          "An index route cannot have child routes."
        );
      let h = {
        id: r.props.id || f.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        hydrateFallbackElement: r.props.hydrateFallbackElement,
        HydrateFallback: r.props.HydrateFallback,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.hasErrorBoundary === !0 ||
          r.props.ErrorBoundary != null ||
          r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (h.children = Rc(r.props.children, f)), s.push(h);
    }),
    s
  );
}
var lu = "get",
  su = "application/x-www-form-urlencoded";
function xu(a) {
  return a != null && typeof a.tagName == "string";
}
function _E(a) {
  return xu(a) && a.tagName.toLowerCase() === "button";
}
function BE(a) {
  return xu(a) && a.tagName.toLowerCase() === "form";
}
function NE(a) {
  return xu(a) && a.tagName.toLowerCase() === "input";
}
function LE(a) {
  return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
}
function HE(a, i) {
  return a.button === 0 && (!i || i === "_self") && !LE(a);
}
var eu = null;
function jE() {
  if (eu === null)
    try {
      new FormData(document.createElement("form"), 0), (eu = !1);
    } catch {
      eu = !0;
    }
  return eu;
}
var qE = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function ic(a) {
  return a != null && !qE.has(a)
    ? (Pe(
        !1,
        `"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${su}"`
      ),
      null)
    : a;
}
function YE(a, i) {
  let s, r, c, f, h;
  if (BE(a)) {
    let m = a.getAttribute("action");
    (r = m ? mn(m, i) : null),
      (s = a.getAttribute("method") || lu),
      (c = ic(a.getAttribute("enctype")) || su),
      (f = new FormData(a));
  } else if (_E(a) || (NE(a) && (a.type === "submit" || a.type === "image"))) {
    let m = a.form;
    if (m == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let d = a.getAttribute("formaction") || m.getAttribute("action");
    if (
      ((r = d ? mn(d, i) : null),
      (s = a.getAttribute("formmethod") || m.getAttribute("method") || lu),
      (c =
        ic(a.getAttribute("formenctype")) ||
        ic(m.getAttribute("enctype")) ||
        su),
      (f = new FormData(m, a)),
      !jE())
    ) {
      let { name: y, type: g, value: S } = a;
      if (g === "image") {
        let b = y ? `${y}.` : "";
        f.append(`${b}x`, "0"), f.append(`${b}y`, "0");
      } else y && f.append(y, S);
    }
  } else {
    if (xu(a))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (s = lu), (r = null), (c = su), (h = a);
  }
  return (
    f && c === "text/plain" && ((h = f), (f = void 0)),
    { action: r, method: s.toLowerCase(), encType: c, formData: f, body: h }
  );
}
function cf(a, i) {
  if (a === !1 || a === null || typeof a > "u") throw new Error(i);
}
async function GE(a, i) {
  if (a.id in i) return i[a.id];
  try {
    let s = await import(a.module);
    return (i[a.id] = s), s;
  } catch (s) {
    return (
      console.error(
        `Error loading route module \`${a.module}\`, reloading page...`
      ),
      console.error(s),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function XE(a) {
  return a == null
    ? !1
    : a.href == null
      ? a.rel === "preload" &&
        typeof a.imageSrcSet == "string" &&
        typeof a.imageSizes == "string"
      : typeof a.rel == "string" && typeof a.href == "string";
}
async function ZE(a, i, s) {
  let r = await Promise.all(
    a.map(async (c) => {
      let f = i.routes[c.route.id];
      if (f) {
        let h = await GE(f, s);
        return h.links ? h.links() : [];
      }
      return [];
    })
  );
  return kE(
    r
      .flat(1)
      .filter(XE)
      .filter((c) => c.rel === "stylesheet" || c.rel === "preload")
      .map((c) =>
        c.rel === "stylesheet"
          ? { ...c, rel: "prefetch", as: "style" }
          : { ...c, rel: "prefetch" }
      )
  );
}
function Ny(a, i, s, r, c, f) {
  let h = (d, y) => (s[y] ? d.route.id !== s[y].route.id : !0),
    m = (d, y) => {
      var g;
      return (
        s[y].pathname !== d.pathname ||
        (((g = s[y].route.path) == null ? void 0 : g.endsWith("*")) &&
          s[y].params["*"] !== d.params["*"])
      );
    };
  return f === "assets"
    ? i.filter((d, y) => h(d, y) || m(d, y))
    : f === "data"
      ? i.filter((d, y) => {
          var S;
          let g = r.routes[d.route.id];
          if (!g || !g.hasLoader) return !1;
          if (h(d, y) || m(d, y)) return !0;
          if (d.route.shouldRevalidate) {
            let b = d.route.shouldRevalidate({
              currentUrl: new URL(
                c.pathname + c.search + c.hash,
                window.origin
              ),
              currentParams: ((S = s[0]) == null ? void 0 : S.params) || {},
              nextUrl: new URL(a, window.origin),
              nextParams: d.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof b == "boolean") return b;
          }
          return !0;
        })
      : [];
}
function KE(a, i, { includeHydrateFallback: s } = {}) {
  return QE(
    a
      .map((r) => {
        let c = i.routes[r.route.id];
        if (!c) return [];
        let f = [c.module];
        return (
          c.clientActionModule && (f = f.concat(c.clientActionModule)),
          c.clientLoaderModule && (f = f.concat(c.clientLoaderModule)),
          s &&
            c.hydrateFallbackModule &&
            (f = f.concat(c.hydrateFallbackModule)),
          c.imports && (f = f.concat(c.imports)),
          f
        );
      })
      .flat(1)
  );
}
function QE(a) {
  return [...new Set(a)];
}
function PE(a) {
  let i = {},
    s = Object.keys(a).sort();
  for (let r of s) i[r] = a[r];
  return i;
}
function kE(a, i) {
  let s = new Set();
  return (
    new Set(i),
    a.reduce((r, c) => {
      let f = JSON.stringify(PE(c));
      return s.has(f) || (s.add(f), r.push({ key: f, link: c })), r;
    }, [])
  );
}
function JE(a, i) {
  let s =
    typeof a == "string"
      ? new URL(
          a,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : a;
  return (
    s.pathname === "/"
      ? (s.pathname = "_root.data")
      : i && mn(s.pathname, i) === "/"
        ? (s.pathname = `${i.replace(/\/$/, "")}/_root.data`)
        : (s.pathname = `${s.pathname.replace(/\/$/, "")}.data`),
    s
  );
}
function xv() {
  let a = V.useContext(fi);
  return (
    cf(
      a,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    a
  );
}
function FE() {
  let a = V.useContext(Tu);
  return (
    cf(
      a,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    a
  );
}
var ff = V.createContext(void 0);
ff.displayName = "FrameworkContext";
function Av() {
  let a = V.useContext(ff);
  return (
    cf(a, "You must render this element inside a <HydratedRouter> element"), a
  );
}
function $E(a, i) {
  let s = V.useContext(ff),
    [r, c] = V.useState(!1),
    [f, h] = V.useState(!1),
    {
      onFocus: m,
      onBlur: d,
      onMouseEnter: y,
      onMouseLeave: g,
      onTouchStart: S,
    } = i,
    b = V.useRef(null);
  V.useEffect(() => {
    if ((a === "render" && h(!0), a === "viewport")) {
      let _ = (O) => {
          O.forEach((Y) => {
            h(Y.isIntersecting);
          });
        },
        U = new IntersectionObserver(_, { threshold: 0.5 });
      return (
        b.current && U.observe(b.current),
        () => {
          U.disconnect();
        }
      );
    }
  }, [a]),
    V.useEffect(() => {
      if (r) {
        let _ = setTimeout(() => {
          h(!0);
        }, 100);
        return () => {
          clearTimeout(_);
        };
      }
    }, [r]);
  let E = () => {
      c(!0);
    },
    M = () => {
      c(!1), h(!1);
    };
  return s
    ? a !== "intent"
      ? [f, b, {}]
      : [
          f,
          b,
          {
            onFocus: dl(m, E),
            onBlur: dl(d, M),
            onMouseEnter: dl(y, E),
            onMouseLeave: dl(g, M),
            onTouchStart: dl(S, E),
          },
        ]
    : [!1, b, {}];
}
function dl(a, i) {
  return (s) => {
    a && a(s), s.defaultPrevented || i(s);
  };
}
function WE({ page: a, ...i }) {
  let { router: s } = xv(),
    r = V.useMemo(() => fv(s.routes, a, s.basename), [s.routes, a, s.basename]);
  return r ? V.createElement(t2, { page: a, matches: r, ...i }) : null;
}
function IE(a) {
  let { manifest: i, routeModules: s } = Av(),
    [r, c] = V.useState([]);
  return (
    V.useEffect(() => {
      let f = !1;
      return (
        ZE(a, i, s).then((h) => {
          f || c(h);
        }),
        () => {
          f = !0;
        }
      );
    }, [a, i, s]),
    r
  );
}
function t2({ page: a, matches: i, ...s }) {
  let r = pa(),
    { manifest: c, routeModules: f } = Av(),
    { basename: h } = xv(),
    { loaderData: m, matches: d } = FE(),
    y = V.useMemo(() => Ny(a, i, d, c, r, "data"), [a, i, d, c, r]),
    g = V.useMemo(() => Ny(a, i, d, c, r, "assets"), [a, i, d, c, r]),
    S = V.useMemo(() => {
      if (a === r.pathname + r.search + r.hash) return [];
      let M = new Set(),
        _ = !1;
      if (
        (i.forEach((O) => {
          var L;
          let Y = c.routes[O.route.id];
          !Y ||
            !Y.hasLoader ||
            ((!y.some((J) => J.route.id === O.route.id) &&
              O.route.id in m &&
              (L = f[O.route.id]) != null &&
              L.shouldRevalidate) ||
            Y.hasClientLoader
              ? (_ = !0)
              : M.add(O.route.id));
        }),
        M.size === 0)
      )
        return [];
      let U = JE(a, h);
      return (
        _ &&
          M.size > 0 &&
          U.searchParams.set(
            "_routes",
            i
              .filter((O) => M.has(O.route.id))
              .map((O) => O.route.id)
              .join(",")
          ),
        [U.pathname + U.search]
      );
    }, [h, m, r, c, y, i, a, f]),
    b = V.useMemo(() => KE(g, c), [g, c]),
    E = IE(g);
  return V.createElement(
    V.Fragment,
    null,
    S.map((M) =>
      V.createElement("link", {
        key: M,
        rel: "prefetch",
        as: "fetch",
        href: M,
        ...s,
      })
    ),
    b.map((M) =>
      V.createElement("link", { key: M, rel: "modulepreload", href: M, ...s })
    ),
    E.map(({ key: M, link: _ }) => V.createElement("link", { key: M, ..._ }))
  );
}
function e2(...a) {
  return (i) => {
    a.forEach((s) => {
      typeof s == "function" ? s(i) : s != null && (s.current = i);
    });
  };
}
var Ev =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Ev && (window.__reactRouterVersion = "7.5.0");
} catch {}
function n2({ basename: a, children: i, window: s }) {
  let r = V.useRef();
  r.current == null && (r.current = ZA({ window: s, v5Compat: !0 }));
  let c = r.current,
    [f, h] = V.useState({ action: c.action, location: c.location }),
    m = V.useCallback(
      (d) => {
        V.startTransition(() => h(d));
      },
      [h]
    );
  return (
    V.useLayoutEffect(() => c.listen(m), [c, m]),
    V.createElement(wE, {
      basename: a,
      children: i,
      location: f.location,
      navigationType: f.action,
      navigator: c,
    })
  );
}
var Rv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  yu = V.forwardRef(function (
    {
      onClick: i,
      discover: s = "render",
      prefetch: r = "none",
      relative: c,
      reloadDocument: f,
      replace: h,
      state: m,
      target: d,
      to: y,
      preventScrollReset: g,
      viewTransition: S,
      ...b
    },
    E
  ) {
    let { basename: M } = V.useContext(ke),
      _ = typeof y == "string" && Rv.test(y),
      U,
      O = !1;
    if (typeof y == "string" && _ && ((U = y), Ev))
      try {
        let st = new URL(window.location.href),
          vt = y.startsWith("//") ? new URL(st.protocol + y) : new URL(y),
          jt = mn(vt.pathname, M);
        vt.origin === st.origin && jt != null
          ? (y = jt + vt.search + vt.hash)
          : (O = !0);
      } catch {
        Pe(
          !1,
          `<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let Y = yE(y, { relative: c }),
      [L, J, G] = $E(r, b),
      nt = s2(y, {
        replace: h,
        state: m,
        target: d,
        preventScrollReset: g,
        relative: c,
        viewTransition: S,
      });
    function lt(st) {
      i && i(st), st.defaultPrevented || nt(st);
    }
    let P = V.createElement("a", {
      ...b,
      ...G,
      href: U || Y,
      onClick: O || f ? i : lt,
      ref: e2(E, J),
      target: d,
      "data-discover": !_ && s === "render" ? "true" : void 0,
    });
    return L && !_
      ? V.createElement(V.Fragment, null, P, V.createElement(WE, { page: Y }))
      : P;
  });
yu.displayName = "Link";
var a2 = V.forwardRef(function (
  {
    "aria-current": i = "page",
    caseSensitive: s = !1,
    className: r = "",
    end: c = !1,
    style: f,
    to: h,
    viewTransition: m,
    children: d,
    ...y
  },
  g
) {
  let S = Nl(h, { relative: y.relative }),
    b = pa(),
    E = V.useContext(Tu),
    { navigator: M, basename: _ } = V.useContext(ke),
    U = E != null && f2(S) && m === !0,
    O = M.encodeLocation ? M.encodeLocation(S).pathname : S.pathname,
    Y = b.pathname,
    L =
      E && E.navigation && E.navigation.location
        ? E.navigation.location.pathname
        : null;
  s ||
    ((Y = Y.toLowerCase()),
    (L = L ? L.toLowerCase() : null),
    (O = O.toLowerCase())),
    L && _ && (L = mn(L, _) || L);
  const J = O !== "/" && O.endsWith("/") ? O.length - 1 : O.length;
  let G = Y === O || (!c && Y.startsWith(O) && Y.charAt(J) === "/"),
    nt =
      L != null &&
      (L === O || (!c && L.startsWith(O) && L.charAt(O.length) === "/")),
    lt = { isActive: G, isPending: nt, isTransitioning: U },
    P = G ? i : void 0,
    st;
  typeof r == "function"
    ? (st = r(lt))
    : (st = [
        r,
        G ? "active" : null,
        nt ? "pending" : null,
        U ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let vt = typeof f == "function" ? f(lt) : f;
  return V.createElement(
    yu,
    {
      ...y,
      "aria-current": P,
      className: st,
      ref: g,
      style: vt,
      to: h,
      viewTransition: m,
    },
    typeof d == "function" ? d(lt) : d
  );
});
a2.displayName = "NavLink";
var i2 = V.forwardRef(
  (
    {
      discover: a = "render",
      fetcherKey: i,
      navigate: s,
      reloadDocument: r,
      replace: c,
      state: f,
      method: h = lu,
      action: m,
      onSubmit: d,
      relative: y,
      preventScrollReset: g,
      viewTransition: S,
      ...b
    },
    E
  ) => {
    let M = o2(),
      _ = c2(m, { relative: y }),
      U = h.toLowerCase() === "get" ? "get" : "post",
      O = typeof m == "string" && Rv.test(m),
      Y = (L) => {
        if ((d && d(L), L.defaultPrevented)) return;
        L.preventDefault();
        let J = L.nativeEvent.submitter,
          G = (J == null ? void 0 : J.getAttribute("formmethod")) || h;
        M(J || L.currentTarget, {
          fetcherKey: i,
          method: G,
          navigate: s,
          replace: c,
          state: f,
          relative: y,
          preventScrollReset: g,
          viewTransition: S,
        });
      };
    return V.createElement("form", {
      ref: E,
      method: U,
      action: _,
      onSubmit: r ? d : Y,
      ...b,
      "data-discover": !O && a === "render" ? "true" : void 0,
    });
  }
);
i2.displayName = "Form";
function l2(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Mv(a) {
  let i = V.useContext(fi);
  return Vt(i, l2(a)), i;
}
function s2(
  a,
  {
    target: i,
    replace: s,
    state: r,
    preventScrollReset: c,
    relative: f,
    viewTransition: h,
  } = {}
) {
  let m = gE(),
    d = pa(),
    y = Nl(a, { relative: f });
  return V.useCallback(
    (g) => {
      if (HE(g, i)) {
        g.preventDefault();
        let S = s !== void 0 ? s : Ol(d) === Ol(y);
        m(a, {
          replace: S,
          state: r,
          preventScrollReset: c,
          relative: f,
          viewTransition: h,
        });
      }
    },
    [d, m, y, s, r, i, a, c, f, h]
  );
}
var u2 = 0,
  r2 = () => `__${String(++u2)}__`;
function o2() {
  let { router: a } = Mv("useSubmit"),
    { basename: i } = V.useContext(ke),
    s = CE();
  return V.useCallback(
    async (r, c = {}) => {
      let { action: f, method: h, encType: m, formData: d, body: y } = YE(r, i);
      if (c.navigate === !1) {
        let g = c.fetcherKey || r2();
        await a.fetch(g, s, c.action || f, {
          preventScrollReset: c.preventScrollReset,
          formData: d,
          body: y,
          formMethod: c.method || h,
          formEncType: c.encType || m,
          flushSync: c.flushSync,
        });
      } else
        await a.navigate(c.action || f, {
          preventScrollReset: c.preventScrollReset,
          formData: d,
          body: y,
          formMethod: c.method || h,
          formEncType: c.encType || m,
          replace: c.replace,
          state: c.state,
          fromRouteId: s,
          flushSync: c.flushSync,
          viewTransition: c.viewTransition,
        });
    },
    [a, i, s]
  );
}
function c2(a, { relative: i } = {}) {
  let { basename: s } = V.useContext(ke),
    r = V.useContext(pn);
  Vt(r, "useFormAction must be used inside a RouteContext");
  let [c] = r.matches.slice(-1),
    f = { ...Nl(a || ".", { relative: i }) },
    h = pa();
  if (a == null) {
    f.search = h.search;
    let m = new URLSearchParams(f.search),
      d = m.getAll("index");
    if (d.some((g) => g === "")) {
      m.delete("index"),
        d.filter((S) => S).forEach((S) => m.append("index", S));
      let g = m.toString();
      f.search = g ? `?${g}` : "";
    }
  }
  return (
    (!a || a === ".") &&
      c.route.index &&
      (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"),
    s !== "/" && (f.pathname = f.pathname === "/" ? s : hn([s, f.pathname])),
    Ol(f)
  );
}
function f2(a, i = {}) {
  let s = V.useContext(gv);
  Vt(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: r } = Mv("useViewTransitionState"),
    c = Nl(a, { relative: i.relative });
  if (!s.isTransitioning) return !1;
  let f = mn(s.currentLocation.pathname, r) || s.currentLocation.pathname,
    h = mn(s.nextLocation.pathname, r) || s.nextLocation.pathname;
  return pu(c.pathname, h) != null || pu(c.pathname, f) != null;
}
new TextEncoder();
const h2 = "./assets/11-ChnTSHhJ.png",
  d2 = "./assets/12-Mq7i9cxF.png",
  m2 = "./assets/13-08EGnRpG.png",
  p2 = "./assets/14-HNrYcbSb.png",
  y2 = "./assets/15-zNDMNxKn.png",
  g2 = "./assets/16-BdgERzTa.png",
  v2 = "./assets/17-CHX4_sCe.png",
  S2 = "./assets/18-CVrOvzHi.png",
  b2 = "./assets/19-Bk6ZQt9Q.png";
function T2() {
  const [a, i] = V.useState(0),
    s = [
      {
        text: "Утро. У Лизы снова температура. Но Zoom-звонок в 11:00 никто не отменял — деловая, слегка простуженная, зато грозная как никогда.",
        image: h2,
      },
      {
        text: "Наушники на голове, мышка в одной руке, термометр в другой, Барса на коленях. Если бы был рейтинг супергероев, у неё был бы отдельный сезон.",
        image: d2,
      },
      {
        text: "На вечер были планы: концерт, музыка, романтика… Но температура решила быть третьим колесом и сказала: «Сегодня тусим дома!»",
        image: m2,
      },
      {
        text: "Немного погрустили… Потом решили: раз не мы на концерте — пусть будут друзья. Билеты ушли в Telegram быстрее, чем скидки на Озоне.",
        image: p2,
      },
      {
        text: "Плед — в бой. Чай — в кружку. Барса — в обнимку. Градусник снова делает камбэк с цифрой 37.3. Ну хоть не финал Лиги температуры.",
        image: y2,
      },
      {
        text: "Запустили генератор картинок: Лиза — снежная королева, я — будто подрался с лесом и проиграл бороде. Смеёмся — лечение почти завершено.",
        image: g2,
      },
      {
        text: "Иногда прошу фото, чтобы увидеть её. А она: «Ну я не в форме». Хотя в любой форме она чемпионка моего сердца.",
        image: v2,
      },
      {
        text: "Вечер. Лимон к лимону, Барса к Барсе, Лиза к пледу. Улыбается, зевает — тяжёлый день был, но как же уютно всё стало.",
        image: S2,
      },
      {
        text: "Финал — как в кино. Суббота. Мы на арене, рядом её родители. Официально красивые, неофициально счастливые. И концерт теперь точно наш.",
        image: b2,
      },
    ];
  V.useEffect(() => {
    const c = setInterval(() => {
      i((f) => (f < s.length - 1 ? f + 1 : f));
    }, 1e4);
    return () => clearInterval(c);
  }, []);
  const r = () => {
    i(0);
  };
  return Et.jsxs("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    children: [
      Et.jsx("div", {
        style: { height: 400, borderRadius: 15 },
        children: Et.jsx(
          mu.img,
          {
            style: { maxHeight: "100%" },
            src: s[a].image,
            alt: "scene",
            className: "w-64 h-64 object-contain mb-6",
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
          },
          s[a].image
        ),
      }),
      Et.jsx(
        mu.p,
        {
          style: {
            fontSize: 24,
            maxWidth: 400,
            textAlign: "center",
            color: "black",
          },
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1 },
          children: s[a].text,
        },
        s[a].text
      ),
      a === s.length - 1 &&
        Et.jsx("button", {
          onClick: r,
          style: {
            marginTop: 20,
            padding: "10px 20px",
            fontSize: 18,
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
          },
          children: "Начать заново",
        }),
    ],
  });
}
function x2() {
  const [a, i] = V.useState(0);
  return Et.jsxs(n2, {
    children: [
      Et.jsxs("div", {
        style: {
          padding: "20px",
          textAlign: "center",
          alignSelf: "flex-start",
        },
        children: [
          Et.jsx(yu, {
            to: "/liza-healing",
            children: Et.jsx("button", {
              style: { margin: "0 10px", padding: "10px 20px" },
              children: "Liza Healing",
            }),
          }),
          Et.jsx(yu, {
            to: "/liza-happy",
            children: Et.jsx("button", {
              style: { margin: "0 10px", padding: "10px 20px" },
              children: "Liza Happy",
            }),
          }),
        ],
      }),
      Et.jsxs(UE, {
        children: [
          Et.jsx(Ec, { path: "/liza-healing", element: Et.jsx(GA, {}) }),
          Et.jsx(Ec, { path: "/liza-happy", element: Et.jsx(T2, {}) }),
        ],
      }),
    ],
  });
}
iS.createRoot(document.getElementById("root")).render(
  Et.jsx(V.StrictMode, { children: Et.jsx(x2, {}) })
);
