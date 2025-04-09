(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) o(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const h of d.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && o(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(c) {
    const d = {};
    return (
      c.integrity && (d.integrity = c.integrity),
      c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : c.crossOrigin === "anonymous"
          ? (d.credentials = "omit")
          : (d.credentials = "same-origin"),
      d
    );
  }
  function o(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = u(c);
    fetch(c.href, d);
  }
})();
var pr = { exports: {} },
  tl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xm;
function kv() {
  if (xm) return tl;
  xm = 1;
  var i = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.fragment");
  function u(o, c, d) {
    var h = null;
    if (
      (d !== void 0 && (h = "" + d),
      c.key !== void 0 && (h = "" + c.key),
      "key" in c)
    ) {
      d = {};
      for (var m in c) m !== "key" && (d[m] = c[m]);
    } else d = c;
    return (
      (c = d.ref),
      { $$typeof: i, type: o, key: h, ref: c !== void 0 ? c : null, props: d }
    );
  }
  return (tl.Fragment = l), (tl.jsx = u), (tl.jsxs = u), tl;
}
var Dm;
function Fv() {
  return Dm || ((Dm = 1), (pr.exports = kv())), pr.exports;
}
var Ye = Fv(),
  gr = { exports: {} },
  nt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rm;
function Wv() {
  if (Rm) return nt;
  Rm = 1;
  var i = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    T = Symbol.iterator;
  function x(b) {
    return b === null || typeof b != "object"
      ? null
      : ((b = (T && b[T]) || b["@@iterator"]),
        typeof b == "function" ? b : null);
  }
  var V = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    N = Object.assign,
    j = {};
  function q(b, B, X) {
    (this.props = b),
      (this.context = B),
      (this.refs = j),
      (this.updater = X || V);
  }
  (q.prototype.isReactComponent = {}),
    (q.prototype.setState = function (b, B) {
      if (typeof b != "object" && typeof b != "function" && b != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, b, B, "setState");
    }),
    (q.prototype.forceUpdate = function (b) {
      this.updater.enqueueForceUpdate(this, b, "forceUpdate");
    });
  function H() {}
  H.prototype = q.prototype;
  function Q(b, B, X) {
    (this.props = b),
      (this.context = B),
      (this.refs = j),
      (this.updater = X || V);
  }
  var G = (Q.prototype = new H());
  (G.constructor = Q), N(G, q.prototype), (G.isPureReactComponent = !0);
  var ot = Array.isArray,
    w = { H: null, A: null, T: null, S: null, V: null },
    at = Object.prototype.hasOwnProperty;
  function ht(b, B, X, Y, k, ct) {
    return (
      (X = ct.ref),
      { $$typeof: i, type: b, key: B, ref: X !== void 0 ? X : null, props: ct }
    );
  }
  function P(b, B) {
    return ht(b.type, B, void 0, void 0, void 0, b.props);
  }
  function Et(b) {
    return typeof b == "object" && b !== null && b.$$typeof === i;
  }
  function Lt(b) {
    var B = { "=": "=0", ":": "=2" };
    return (
      "$" +
      b.replace(/[=:]/g, function (X) {
        return B[X];
      })
    );
  }
  var kt = /\/+/g;
  function Ht(b, B) {
    return typeof b == "object" && b !== null && b.key != null
      ? Lt("" + b.key)
      : B.toString(36);
  }
  function Ke() {}
  function Be(b) {
    switch (b.status) {
      case "fulfilled":
        return b.value;
      case "rejected":
        throw b.reason;
      default:
        switch (
          (typeof b.status == "string"
            ? b.then(Ke, Ke)
            : ((b.status = "pending"),
              b.then(
                function (B) {
                  b.status === "pending" &&
                    ((b.status = "fulfilled"), (b.value = B));
                },
                function (B) {
                  b.status === "pending" &&
                    ((b.status = "rejected"), (b.reason = B));
                }
              )),
          b.status)
        ) {
          case "fulfilled":
            return b.value;
          case "rejected":
            throw b.reason;
        }
    }
    throw b;
  }
  function Zt(b, B, X, Y, k) {
    var ct = typeof b;
    (ct === "undefined" || ct === "boolean") && (b = null);
    var tt = !1;
    if (b === null) tt = !0;
    else
      switch (ct) {
        case "bigint":
        case "string":
        case "number":
          tt = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case i:
            case l:
              tt = !0;
              break;
            case v:
              return (tt = b._init), Zt(tt(b._payload), B, X, Y, k);
          }
      }
    if (tt)
      return (
        (k = k(b)),
        (tt = Y === "" ? "." + Ht(b, 0) : Y),
        ot(k)
          ? ((X = ""),
            tt != null && (X = tt.replace(kt, "$&/") + "/"),
            Zt(k, B, X, "", function (cn) {
              return cn;
            }))
          : k != null &&
            (Et(k) &&
              (k = P(
                k,
                X +
                  (k.key == null || (b && b.key === k.key)
                    ? ""
                    : ("" + k.key).replace(kt, "$&/") + "/") +
                  tt
              )),
            B.push(k)),
        1
      );
    tt = 0;
    var oe = Y === "" ? "." : Y + ":";
    if (ot(b))
      for (var Mt = 0; Mt < b.length; Mt++)
        (Y = b[Mt]), (ct = oe + Ht(Y, Mt)), (tt += Zt(Y, B, X, ct, k));
    else if (((Mt = x(b)), typeof Mt == "function"))
      for (b = Mt.call(b), Mt = 0; !(Y = b.next()).done; )
        (Y = Y.value), (ct = oe + Ht(Y, Mt++)), (tt += Zt(Y, B, X, ct, k));
    else if (ct === "object") {
      if (typeof b.then == "function") return Zt(Be(b), B, X, Y, k);
      throw (
        ((B = String(b)),
        Error(
          "Objects are not valid as a React child (found: " +
            (B === "[object Object]"
              ? "object with keys {" + Object.keys(b).join(", ") + "}"
              : B) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return tt;
  }
  function z(b, B, X) {
    if (b == null) return b;
    var Y = [],
      k = 0;
    return (
      Zt(b, Y, "", "", function (ct) {
        return B.call(X, ct, k++);
      }),
      Y
    );
  }
  function L(b) {
    if (b._status === -1) {
      var B = b._result;
      (B = B()),
        B.then(
          function (X) {
            (b._status === 0 || b._status === -1) &&
              ((b._status = 1), (b._result = X));
          },
          function (X) {
            (b._status === 0 || b._status === -1) &&
              ((b._status = 2), (b._result = X));
          }
        ),
        b._status === -1 && ((b._status = 0), (b._result = B));
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var K =
    typeof reportError == "function"
      ? reportError
      : function (b) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var B = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof b == "object" &&
                b !== null &&
                typeof b.message == "string"
                  ? String(b.message)
                  : String(b),
              error: b,
            });
            if (!window.dispatchEvent(B)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", b);
            return;
          }
          console.error(b);
        };
  function dt() {}
  return (
    (nt.Children = {
      map: z,
      forEach: function (b, B, X) {
        z(
          b,
          function () {
            B.apply(this, arguments);
          },
          X
        );
      },
      count: function (b) {
        var B = 0;
        return (
          z(b, function () {
            B++;
          }),
          B
        );
      },
      toArray: function (b) {
        return (
          z(b, function (B) {
            return B;
          }) || []
        );
      },
      only: function (b) {
        if (!Et(b))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return b;
      },
    }),
    (nt.Component = q),
    (nt.Fragment = u),
    (nt.Profiler = c),
    (nt.PureComponent = Q),
    (nt.StrictMode = o),
    (nt.Suspense = p),
    (nt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
    (nt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (b) {
        return w.H.useMemoCache(b);
      },
    }),
    (nt.cache = function (b) {
      return function () {
        return b.apply(null, arguments);
      };
    }),
    (nt.cloneElement = function (b, B, X) {
      if (b == null)
        throw Error(
          "The argument must be a React element, but you passed " + b + "."
        );
      var Y = N({}, b.props),
        k = b.key,
        ct = void 0;
      if (B != null)
        for (tt in (B.ref !== void 0 && (ct = void 0),
        B.key !== void 0 && (k = "" + B.key),
        B))
          !at.call(B, tt) ||
            tt === "key" ||
            tt === "__self" ||
            tt === "__source" ||
            (tt === "ref" && B.ref === void 0) ||
            (Y[tt] = B[tt]);
      var tt = arguments.length - 2;
      if (tt === 1) Y.children = X;
      else if (1 < tt) {
        for (var oe = Array(tt), Mt = 0; Mt < tt; Mt++)
          oe[Mt] = arguments[Mt + 2];
        Y.children = oe;
      }
      return ht(b.type, k, void 0, void 0, ct, Y);
    }),
    (nt.createContext = function (b) {
      return (
        (b = {
          $$typeof: h,
          _currentValue: b,
          _currentValue2: b,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (b.Provider = b),
        (b.Consumer = { $$typeof: d, _context: b }),
        b
      );
    }),
    (nt.createElement = function (b, B, X) {
      var Y,
        k = {},
        ct = null;
      if (B != null)
        for (Y in (B.key !== void 0 && (ct = "" + B.key), B))
          at.call(B, Y) &&
            Y !== "key" &&
            Y !== "__self" &&
            Y !== "__source" &&
            (k[Y] = B[Y]);
      var tt = arguments.length - 2;
      if (tt === 1) k.children = X;
      else if (1 < tt) {
        for (var oe = Array(tt), Mt = 0; Mt < tt; Mt++)
          oe[Mt] = arguments[Mt + 2];
        k.children = oe;
      }
      if (b && b.defaultProps)
        for (Y in ((tt = b.defaultProps), tt))
          k[Y] === void 0 && (k[Y] = tt[Y]);
      return ht(b, ct, void 0, void 0, null, k);
    }),
    (nt.createRef = function () {
      return { current: null };
    }),
    (nt.forwardRef = function (b) {
      return { $$typeof: m, render: b };
    }),
    (nt.isValidElement = Et),
    (nt.lazy = function (b) {
      return { $$typeof: v, _payload: { _status: -1, _result: b }, _init: L };
    }),
    (nt.memo = function (b, B) {
      return { $$typeof: g, type: b, compare: B === void 0 ? null : B };
    }),
    (nt.startTransition = function (b) {
      var B = w.T,
        X = {};
      w.T = X;
      try {
        var Y = b(),
          k = w.S;
        k !== null && k(X, Y),
          typeof Y == "object" &&
            Y !== null &&
            typeof Y.then == "function" &&
            Y.then(dt, K);
      } catch (ct) {
        K(ct);
      } finally {
        w.T = B;
      }
    }),
    (nt.unstable_useCacheRefresh = function () {
      return w.H.useCacheRefresh();
    }),
    (nt.use = function (b) {
      return w.H.use(b);
    }),
    (nt.useActionState = function (b, B, X) {
      return w.H.useActionState(b, B, X);
    }),
    (nt.useCallback = function (b, B) {
      return w.H.useCallback(b, B);
    }),
    (nt.useContext = function (b) {
      return w.H.useContext(b);
    }),
    (nt.useDebugValue = function () {}),
    (nt.useDeferredValue = function (b, B) {
      return w.H.useDeferredValue(b, B);
    }),
    (nt.useEffect = function (b, B, X) {
      var Y = w.H;
      if (typeof X == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return Y.useEffect(b, B);
    }),
    (nt.useId = function () {
      return w.H.useId();
    }),
    (nt.useImperativeHandle = function (b, B, X) {
      return w.H.useImperativeHandle(b, B, X);
    }),
    (nt.useInsertionEffect = function (b, B) {
      return w.H.useInsertionEffect(b, B);
    }),
    (nt.useLayoutEffect = function (b, B) {
      return w.H.useLayoutEffect(b, B);
    }),
    (nt.useMemo = function (b, B) {
      return w.H.useMemo(b, B);
    }),
    (nt.useOptimistic = function (b, B) {
      return w.H.useOptimistic(b, B);
    }),
    (nt.useReducer = function (b, B, X) {
      return w.H.useReducer(b, B, X);
    }),
    (nt.useRef = function (b) {
      return w.H.useRef(b);
    }),
    (nt.useState = function (b) {
      return w.H.useState(b);
    }),
    (nt.useSyncExternalStore = function (b, B, X) {
      return w.H.useSyncExternalStore(b, B, X);
    }),
    (nt.useTransition = function () {
      return w.H.useTransition();
    }),
    (nt.version = "19.1.0"),
    nt
  );
}
var Om;
function $r() {
  return Om || ((Om = 1), (gr.exports = Wv())), gr.exports;
}
var et = $r(),
  vr = { exports: {} },
  el = {},
  Sr = { exports: {} },
  Tr = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vm;
function $v() {
  return (
    Vm ||
      ((Vm = 1),
      (function (i) {
        function l(z, L) {
          var K = z.length;
          z.push(L);
          t: for (; 0 < K; ) {
            var dt = (K - 1) >>> 1,
              b = z[dt];
            if (0 < c(b, L)) (z[dt] = L), (z[K] = b), (K = dt);
            else break t;
          }
        }
        function u(z) {
          return z.length === 0 ? null : z[0];
        }
        function o(z) {
          if (z.length === 0) return null;
          var L = z[0],
            K = z.pop();
          if (K !== L) {
            z[0] = K;
            t: for (var dt = 0, b = z.length, B = b >>> 1; dt < B; ) {
              var X = 2 * (dt + 1) - 1,
                Y = z[X],
                k = X + 1,
                ct = z[k];
              if (0 > c(Y, K))
                k < b && 0 > c(ct, Y)
                  ? ((z[dt] = ct), (z[k] = K), (dt = k))
                  : ((z[dt] = Y), (z[X] = K), (dt = X));
              else if (k < b && 0 > c(ct, K))
                (z[dt] = ct), (z[k] = K), (dt = k);
              else break t;
            }
          }
          return L;
        }
        function c(z, L) {
          var K = z.sortIndex - L.sortIndex;
          return K !== 0 ? K : z.id - L.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          i.unstable_now = function () {
            return d.now();
          };
        } else {
          var h = Date,
            m = h.now();
          i.unstable_now = function () {
            return h.now() - m;
          };
        }
        var p = [],
          g = [],
          v = 1,
          T = null,
          x = 3,
          V = !1,
          N = !1,
          j = !1,
          q = !1,
          H = typeof setTimeout == "function" ? setTimeout : null,
          Q = typeof clearTimeout == "function" ? clearTimeout : null,
          G = typeof setImmediate < "u" ? setImmediate : null;
        function ot(z) {
          for (var L = u(g); L !== null; ) {
            if (L.callback === null) o(g);
            else if (L.startTime <= z)
              o(g), (L.sortIndex = L.expirationTime), l(p, L);
            else break;
            L = u(g);
          }
        }
        function w(z) {
          if (((j = !1), ot(z), !N))
            if (u(p) !== null) (N = !0), at || ((at = !0), Ht());
            else {
              var L = u(g);
              L !== null && Zt(w, L.startTime - z);
            }
        }
        var at = !1,
          ht = -1,
          P = 5,
          Et = -1;
        function Lt() {
          return q ? !0 : !(i.unstable_now() - Et < P);
        }
        function kt() {
          if (((q = !1), at)) {
            var z = i.unstable_now();
            Et = z;
            var L = !0;
            try {
              t: {
                (N = !1), j && ((j = !1), Q(ht), (ht = -1)), (V = !0);
                var K = x;
                try {
                  e: {
                    for (
                      ot(z), T = u(p);
                      T !== null && !(T.expirationTime > z && Lt());

                    ) {
                      var dt = T.callback;
                      if (typeof dt == "function") {
                        (T.callback = null), (x = T.priorityLevel);
                        var b = dt(T.expirationTime <= z);
                        if (((z = i.unstable_now()), typeof b == "function")) {
                          (T.callback = b), ot(z), (L = !0);
                          break e;
                        }
                        T === u(p) && o(p), ot(z);
                      } else o(p);
                      T = u(p);
                    }
                    if (T !== null) L = !0;
                    else {
                      var B = u(g);
                      B !== null && Zt(w, B.startTime - z), (L = !1);
                    }
                  }
                  break t;
                } finally {
                  (T = null), (x = K), (V = !1);
                }
                L = void 0;
              }
            } finally {
              L ? Ht() : (at = !1);
            }
          }
        }
        var Ht;
        if (typeof G == "function")
          Ht = function () {
            G(kt);
          };
        else if (typeof MessageChannel < "u") {
          var Ke = new MessageChannel(),
            Be = Ke.port2;
          (Ke.port1.onmessage = kt),
            (Ht = function () {
              Be.postMessage(null);
            });
        } else
          Ht = function () {
            H(kt, 0);
          };
        function Zt(z, L) {
          ht = H(function () {
            z(i.unstable_now());
          }, L);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (z) {
            z.callback = null;
          }),
          (i.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (P = 0 < z ? Math.floor(1e3 / z) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (i.unstable_next = function (z) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var L = 3;
                break;
              default:
                L = x;
            }
            var K = x;
            x = L;
            try {
              return z();
            } finally {
              x = K;
            }
          }),
          (i.unstable_requestPaint = function () {
            q = !0;
          }),
          (i.unstable_runWithPriority = function (z, L) {
            switch (z) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                z = 3;
            }
            var K = x;
            x = z;
            try {
              return L();
            } finally {
              x = K;
            }
          }),
          (i.unstable_scheduleCallback = function (z, L, K) {
            var dt = i.unstable_now();
            switch (
              (typeof K == "object" && K !== null
                ? ((K = K.delay),
                  (K = typeof K == "number" && 0 < K ? dt + K : dt))
                : (K = dt),
              z)
            ) {
              case 1:
                var b = -1;
                break;
              case 2:
                b = 250;
                break;
              case 5:
                b = 1073741823;
                break;
              case 4:
                b = 1e4;
                break;
              default:
                b = 5e3;
            }
            return (
              (b = K + b),
              (z = {
                id: v++,
                callback: L,
                priorityLevel: z,
                startTime: K,
                expirationTime: b,
                sortIndex: -1,
              }),
              K > dt
                ? ((z.sortIndex = K),
                  l(g, z),
                  u(p) === null &&
                    z === u(g) &&
                    (j ? (Q(ht), (ht = -1)) : (j = !0), Zt(w, K - dt)))
                : ((z.sortIndex = b),
                  l(p, z),
                  N || V || ((N = !0), at || ((at = !0), Ht()))),
              z
            );
          }),
          (i.unstable_shouldYield = Lt),
          (i.unstable_wrapCallback = function (z) {
            var L = x;
            return function () {
              var K = x;
              x = L;
              try {
                return z.apply(this, arguments);
              } finally {
                x = K;
              }
            };
          });
      })(Tr)),
    Tr
  );
}
var Cm;
function Iv() {
  return Cm || ((Cm = 1), (Sr.exports = $v())), Sr.exports;
}
var br = { exports: {} },
  $t = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zm;
function t1() {
  if (zm) return $t;
  zm = 1;
  var i = $r();
  function l(p) {
    var g = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        g += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u() {}
  var o = {
      d: {
        f: u,
        r: function () {
          throw Error(l(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function d(p, g, v) {
    var T =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: T == null ? null : "" + T,
      children: p,
      containerInfo: g,
      implementation: v,
    };
  }
  var h = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(p, g) {
    if (p === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    ($t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    ($t.createPortal = function (p, g) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(l(299));
      return d(p, g, null, v);
    }),
    ($t.flushSync = function (p) {
      var g = h.T,
        v = o.p;
      try {
        if (((h.T = null), (o.p = 2), p)) return p();
      } finally {
        (h.T = g), (o.p = v), o.d.f();
      }
    }),
    ($t.preconnect = function (p, g) {
      typeof p == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        o.d.C(p, g));
    }),
    ($t.prefetchDNS = function (p) {
      typeof p == "string" && o.d.D(p);
    }),
    ($t.preinit = function (p, g) {
      if (typeof p == "string" && g && typeof g.as == "string") {
        var v = g.as,
          T = m(v, g.crossOrigin),
          x = typeof g.integrity == "string" ? g.integrity : void 0,
          V = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        v === "style"
          ? o.d.S(p, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: T,
              integrity: x,
              fetchPriority: V,
            })
          : v === "script" &&
            o.d.X(p, {
              crossOrigin: T,
              integrity: x,
              fetchPriority: V,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    ($t.preinitModule = function (p, g) {
      if (typeof p == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var v = m(g.as, g.crossOrigin);
            o.d.M(p, {
              crossOrigin: v,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && o.d.M(p);
    }),
    ($t.preload = function (p, g) {
      if (
        typeof p == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var v = g.as,
          T = m(v, g.crossOrigin);
        o.d.L(p, v, {
          crossOrigin: T,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    ($t.preloadModule = function (p, g) {
      if (typeof p == "string")
        if (g) {
          var v = m(g.as, g.crossOrigin);
          o.d.m(p, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: v,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else o.d.m(p);
    }),
    ($t.requestFormReset = function (p) {
      o.d.r(p);
    }),
    ($t.unstable_batchedUpdates = function (p, g) {
      return p(g);
    }),
    ($t.useFormState = function (p, g, v) {
      return h.H.useFormState(p, g, v);
    }),
    ($t.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    ($t.version = "19.1.0"),
    $t
  );
}
var Um;
function e1() {
  if (Um) return br.exports;
  Um = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), (br.exports = t1()), br.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _m;
function n1() {
  if (_m) return el;
  _m = 1;
  var i = Iv(),
    l = $r(),
    u = e1();
  function o(t) {
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
  function d(t) {
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
    if (d(t) !== t) throw Error(o(188));
  }
  function p(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = d(t)), e === null)) throw Error(o(188));
      return e !== t ? null : t;
    }
    for (var n = t, a = e; ; ) {
      var s = n.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (((a = s.return), a !== null)) {
          n = a;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === n) return m(s), t;
          if (r === a) return m(s), e;
          r = r.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== a.return) (n = s), (a = r);
      else {
        for (var f = !1, y = s.child; y; ) {
          if (y === n) {
            (f = !0), (n = s), (a = r);
            break;
          }
          if (y === a) {
            (f = !0), (a = s), (n = r);
            break;
          }
          y = y.sibling;
        }
        if (!f) {
          for (y = r.child; y; ) {
            if (y === n) {
              (f = !0), (n = r), (a = s);
              break;
            }
            if (y === a) {
              (f = !0), (a = r), (n = s);
              break;
            }
            y = y.sibling;
          }
          if (!f) throw Error(o(189));
        }
      }
      if (n.alternate !== a) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? t : e;
  }
  function g(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = g(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var v = Object.assign,
    T = Symbol.for("react.element"),
    x = Symbol.for("react.transitional.element"),
    V = Symbol.for("react.portal"),
    N = Symbol.for("react.fragment"),
    j = Symbol.for("react.strict_mode"),
    q = Symbol.for("react.profiler"),
    H = Symbol.for("react.provider"),
    Q = Symbol.for("react.consumer"),
    G = Symbol.for("react.context"),
    ot = Symbol.for("react.forward_ref"),
    w = Symbol.for("react.suspense"),
    at = Symbol.for("react.suspense_list"),
    ht = Symbol.for("react.memo"),
    P = Symbol.for("react.lazy"),
    Et = Symbol.for("react.activity"),
    Lt = Symbol.for("react.memo_cache_sentinel"),
    kt = Symbol.iterator;
  function Ht(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (kt && t[kt]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Ke = Symbol.for("react.client.reference");
  function Be(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Ke ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case N:
        return "Fragment";
      case q:
        return "Profiler";
      case j:
        return "StrictMode";
      case w:
        return "Suspense";
      case at:
        return "SuspenseList";
      case Et:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case V:
          return "Portal";
        case G:
          return (t.displayName || "Context") + ".Provider";
        case Q:
          return (t._context.displayName || "Context") + ".Consumer";
        case ot:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case ht:
          return (
            (e = t.displayName || null), e !== null ? e : Be(t.type) || "Memo"
          );
        case P:
          (e = t._payload), (t = t._init);
          try {
            return Be(t(e));
          } catch {}
      }
    return null;
  }
  var Zt = Array.isArray,
    z = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    L = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = { pending: !1, data: null, method: null, action: null },
    dt = [],
    b = -1;
  function B(t) {
    return { current: t };
  }
  function X(t) {
    0 > b || ((t.current = dt[b]), (dt[b] = null), b--);
  }
  function Y(t, e) {
    b++, (dt[b] = t.current), (t.current = e);
  }
  var k = B(null),
    ct = B(null),
    tt = B(null),
    oe = B(null);
  function Mt(t, e) {
    switch ((Y(tt, e), Y(ct, t), Y(k, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Id(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = Id(e)), (t = tm(e, t));
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
    X(k), Y(k, t);
  }
  function cn() {
    X(k), X(ct), X(tt);
  }
  function tu(t) {
    t.memoizedState !== null && Y(oe, t);
    var e = k.current,
      n = tm(e, t.type);
    e !== n && (Y(ct, t), Y(k, n));
  }
  function Al(t) {
    ct.current === t && (X(k), X(ct)),
      oe.current === t && (X(oe), (ki._currentValue = K));
  }
  var eu = Object.prototype.hasOwnProperty,
    nu = i.unstable_scheduleCallback,
    au = i.unstable_cancelCallback,
    Rg = i.unstable_shouldYield,
    Og = i.unstable_requestPaint,
    Ne = i.unstable_now,
    Vg = i.unstable_getCurrentPriorityLevel,
    Uc = i.unstable_ImmediatePriority,
    _c = i.unstable_UserBlockingPriority,
    El = i.unstable_NormalPriority,
    Cg = i.unstable_LowPriority,
    Bc = i.unstable_IdlePriority,
    zg = i.log,
    Ug = i.unstable_setDisableYieldValue,
    ai = null,
    re = null;
  function fn(t) {
    if (
      (typeof zg == "function" && Ug(t),
      re && typeof re.setStrictMode == "function")
    )
      try {
        re.setStrictMode(ai, t);
      } catch {}
  }
  var ce = Math.clz32 ? Math.clz32 : Ng,
    _g = Math.log,
    Bg = Math.LN2;
  function Ng(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((_g(t) / Bg) | 0)) | 0;
  }
  var Ml = 256,
    xl = 4194304;
  function wn(t) {
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
  function Dl(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var s = 0,
      r = t.suspendedLanes,
      f = t.pingedLanes;
    t = t.warmLanes;
    var y = a & 134217727;
    return (
      y !== 0
        ? ((a = y & ~r),
          a !== 0
            ? (s = wn(a))
            : ((f &= y),
              f !== 0
                ? (s = wn(f))
                : n || ((n = y & ~t), n !== 0 && (s = wn(n)))))
        : ((y = a & ~r),
          y !== 0
            ? (s = wn(y))
            : f !== 0
              ? (s = wn(f))
              : n || ((n = a & ~t), n !== 0 && (s = wn(n)))),
      s === 0
        ? 0
        : e !== 0 &&
            e !== s &&
            (e & r) === 0 &&
            ((r = s & -s),
            (n = e & -e),
            r >= n || (r === 32 && (n & 4194048) !== 0))
          ? e
          : s
    );
  }
  function ii(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Lg(t, e) {
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
  function Nc() {
    var t = Ml;
    return (Ml <<= 1), (Ml & 4194048) === 0 && (Ml = 256), t;
  }
  function Lc() {
    var t = xl;
    return (xl <<= 1), (xl & 62914560) === 0 && (xl = 4194304), t;
  }
  function iu(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function li(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function Hg(t, e, n, a, s, r) {
    var f = t.pendingLanes;
    (t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0);
    var y = t.entanglements,
      S = t.expirationTimes,
      D = t.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var C = 31 - ce(n),
        _ = 1 << C;
      (y[C] = 0), (S[C] = -1);
      var R = D[C];
      if (R !== null)
        for (D[C] = null, C = 0; C < R.length; C++) {
          var O = R[C];
          O !== null && (O.lane &= -536870913);
        }
      n &= ~_;
    }
    a !== 0 && Hc(t, a, 0),
      r !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= r & ~(f & ~e));
  }
  function Hc(t, e, n) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var a = 31 - ce(e);
    (t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (n & 4194090));
  }
  function jc(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var a = 31 - ce(n),
        s = 1 << a;
      (s & e) | (t[a] & e) && (t[a] |= e), (n &= ~s);
    }
  }
  function lu(t) {
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
  function su(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function wc() {
    var t = L.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Sm(t.type));
  }
  function jg(t, e) {
    var n = L.p;
    try {
      return (L.p = t), e();
    } finally {
      L.p = n;
    }
  }
  var hn = Math.random().toString(36).slice(2),
    Ft = "__reactFiber$" + hn,
    ae = "__reactProps$" + hn,
    ra = "__reactContainer$" + hn,
    uu = "__reactEvents$" + hn,
    wg = "__reactListeners$" + hn,
    qg = "__reactHandles$" + hn,
    qc = "__reactResources$" + hn,
    si = "__reactMarker$" + hn;
  function ou(t) {
    delete t[Ft], delete t[ae], delete t[uu], delete t[wg], delete t[qg];
  }
  function ca(t) {
    var e = t[Ft];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[ra] || n[Ft])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = im(t); t !== null; ) {
            if ((n = t[Ft])) return n;
            t = im(t);
          }
        return e;
      }
      (t = n), (n = t.parentNode);
    }
    return null;
  }
  function fa(t) {
    if ((t = t[Ft] || t[ra])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function ui(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(o(33));
  }
  function ha(t) {
    var e = t[qc];
    return (
      e ||
        (e = t[qc] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function qt(t) {
    t[si] = !0;
  }
  var Yc = new Set(),
    Gc = {};
  function qn(t, e) {
    da(t, e), da(t + "Capture", e);
  }
  function da(t, e) {
    for (Gc[t] = e, t = 0; t < e.length; t++) Yc.add(e[t]);
  }
  var Yg = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Xc = {},
    Zc = {};
  function Gg(t) {
    return eu.call(Zc, t)
      ? !0
      : eu.call(Xc, t)
        ? !1
        : Yg.test(t)
          ? (Zc[t] = !0)
          : ((Xc[t] = !0), !1);
  }
  function Rl(t, e, n) {
    if (Gg(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Ol(t, e, n) {
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
  function Je(t, e, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + a);
    }
  }
  var ru, Qc;
  function ma(t) {
    if (ru === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        (ru = (e && e[1]) || ""),
          (Qc =
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
      ru +
      t +
      Qc
    );
  }
  var cu = !1;
  function fu(t, e) {
    if (!t || cu) return "";
    cu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var _ = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(_.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(_, []);
                } catch (O) {
                  var R = O;
                }
                Reflect.construct(t, [], _);
              } else {
                try {
                  _.call();
                } catch (O) {
                  R = O;
                }
                t.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (O) {
                R = O;
              }
              (_ = t()) &&
                typeof _.catch == "function" &&
                _.catch(function () {});
            }
          } catch (O) {
            if (O && R && typeof O.stack == "string") return [O.stack, R.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      s &&
        s.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var r = a.DetermineComponentFrameRoot(),
        f = r[0],
        y = r[1];
      if (f && y) {
        var S = f.split(`
`),
          D = y.split(`
`);
        for (
          s = a = 0;
          a < S.length && !S[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; s < D.length && !D[s].includes("DetermineComponentFrameRoot"); )
          s++;
        if (a === S.length || s === D.length)
          for (
            a = S.length - 1, s = D.length - 1;
            1 <= a && 0 <= s && S[a] !== D[s];

          )
            s--;
        for (; 1 <= a && 0 <= s; a--, s--)
          if (S[a] !== D[s]) {
            if (a !== 1 || s !== 1)
              do
                if ((a--, s--, 0 > s || S[a] !== D[s])) {
                  var C =
                    `
` + S[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      C.includes("<anonymous>") &&
                      (C = C.replace("<anonymous>", t.displayName)),
                    C
                  );
                }
              while (1 <= a && 0 <= s);
            break;
          }
      }
    } finally {
      (cu = !1), (Error.prepareStackTrace = n);
    }
    return (n = t ? t.displayName || t.name : "") ? ma(n) : "";
  }
  function Xg(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ma(t.type);
      case 16:
        return ma("Lazy");
      case 13:
        return ma("Suspense");
      case 19:
        return ma("SuspenseList");
      case 0:
      case 15:
        return fu(t.type, !1);
      case 11:
        return fu(t.type.render, !1);
      case 1:
        return fu(t.type, !0);
      case 31:
        return ma("Activity");
      default:
        return "";
    }
  }
  function Kc(t) {
    try {
      var e = "";
      do (e += Xg(t)), (t = t.return);
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
  function ve(t) {
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
  function Jc(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function Zg(t) {
    var e = Jc(t) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      a = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var s = n.get,
        r = n.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (f) {
            (a = "" + f), r.call(this, f);
          },
        }),
        Object.defineProperty(t, e, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (f) {
            a = "" + f;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function Vl(t) {
    t._valueTracker || (t._valueTracker = Zg(t));
  }
  function Pc(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      a = "";
    return (
      t && (a = Jc(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function Cl(t) {
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
  var Qg = /[\n"\\]/g;
  function Se(t) {
    return t.replace(Qg, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function hu(t, e, n, a, s, r, f, y) {
    (t.name = ""),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (t.type = f)
        : t.removeAttribute("type"),
      e != null
        ? f === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + ve(e))
          : t.value !== "" + ve(e) && (t.value = "" + ve(e))
        : (f !== "submit" && f !== "reset") || t.removeAttribute("value"),
      e != null
        ? du(t, f, ve(e))
        : n != null
          ? du(t, f, ve(n))
          : a != null && t.removeAttribute("value"),
      s == null && r != null && (t.defaultChecked = !!r),
      s != null &&
        (t.checked = s && typeof s != "function" && typeof s != "symbol"),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (t.name = "" + ve(y))
        : t.removeAttribute("name");
  }
  function kc(t, e, n, a, s, r, f, y) {
    if (
      (r != null &&
        typeof r != "function" &&
        typeof r != "symbol" &&
        typeof r != "boolean" &&
        (t.type = r),
      e != null || n != null)
    ) {
      if (!((r !== "submit" && r !== "reset") || e != null)) return;
      (n = n != null ? "" + ve(n) : ""),
        (e = e != null ? "" + ve(e) : n),
        y || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (a = a ?? s),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = y ? t.checked : !!a),
      (t.defaultChecked = !!a),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (t.name = f);
  }
  function du(t, e, n) {
    (e === "number" && Cl(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function ya(t, e, n, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        (s = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== s && (t[n].selected = s),
          s && a && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + ve(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          (t[s].selected = !0), a && (t[s].defaultSelected = !0);
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Fc(t, e, n) {
    if (
      e != null &&
      ((e = "" + ve(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + ve(n) : "";
  }
  function Wc(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(o(92));
        if (Zt(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), (e = n);
    }
    (n = ve(e)),
      (t.defaultValue = n),
      (a = t.textContent),
      a === n && a !== "" && a !== null && (t.value = a);
  }
  function pa(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Kg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function $c(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : a
        ? t.setProperty(e, n)
        : typeof n != "number" || n === 0 || Kg.has(e)
          ? e === "float"
            ? (t.cssFloat = n)
            : (t[e] = ("" + n).trim())
          : (t[e] = n + "px");
  }
  function Ic(t, e, n) {
    if (e != null && typeof e != "object") throw Error(o(62));
    if (((t = t.style), n != null)) {
      for (var a in n)
        !n.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
              ? (t.cssFloat = "")
              : (t[a] = ""));
      for (var s in e)
        (a = e[s]), e.hasOwnProperty(s) && n[s] !== a && $c(t, s, a);
    } else for (var r in e) e.hasOwnProperty(r) && $c(t, r, e[r]);
  }
  function mu(t) {
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
  var Jg = new Map([
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
    Pg =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function zl(t) {
    return Pg.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var yu = null;
  function pu(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var ga = null,
    va = null;
  function tf(t) {
    var e = fa(t);
    if (e && (t = e.stateNode)) {
      var n = t[ae] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (hu(
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
                'input[name="' + Se("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var s = a[ae] || null;
                if (!s) throw Error(o(90));
                hu(
                  a,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              (a = n[e]), a.form === t.form && Pc(a);
          }
          break t;
        case "textarea":
          Fc(t, n.value, n.defaultValue);
          break t;
        case "select":
          (e = n.value), e != null && ya(t, !!n.multiple, e, !1);
      }
    }
  }
  var gu = !1;
  function ef(t, e, n) {
    if (gu) return t(e, n);
    gu = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((gu = !1),
        (ga !== null || va !== null) &&
          (ps(), ga && ((e = ga), (t = va), (va = ga = null), tf(e), t)))
      )
        for (e = 0; e < t.length; e++) tf(t[e]);
    }
  }
  function oi(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var a = n[ae] || null;
    if (a === null) return null;
    n = a[e];
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
        (a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(o(231, e, typeof n));
    return n;
  }
  var Pe = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    vu = !1;
  if (Pe)
    try {
      var ri = {};
      Object.defineProperty(ri, "passive", {
        get: function () {
          vu = !0;
        },
      }),
        window.addEventListener("test", ri, ri),
        window.removeEventListener("test", ri, ri);
    } catch {
      vu = !1;
    }
  var dn = null,
    Su = null,
    Ul = null;
  function nf() {
    if (Ul) return Ul;
    var t,
      e = Su,
      n = e.length,
      a,
      s = "value" in dn ? dn.value : dn.textContent,
      r = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++);
    var f = n - t;
    for (a = 1; a <= f && e[n - a] === s[r - a]; a++);
    return (Ul = s.slice(t, 1 < a ? 1 - a : void 0));
  }
  function _l(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Bl() {
    return !0;
  }
  function af() {
    return !1;
  }
  function ie(t) {
    function e(n, a, s, r, f) {
      (this._reactName = n),
        (this._targetInst = s),
        (this.type = a),
        (this.nativeEvent = r),
        (this.target = f),
        (this.currentTarget = null);
      for (var y in t)
        t.hasOwnProperty(y) && ((n = t[y]), (this[y] = n ? n(r) : r[y]));
      return (
        (this.isDefaultPrevented = (
          r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1
        )
          ? Bl
          : af),
        (this.isPropagationStopped = af),
        this
      );
    }
    return (
      v(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Bl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Bl));
        },
        persist: function () {},
        isPersistent: Bl,
      }),
      e
    );
  }
  var Yn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Nl = ie(Yn),
    ci = v({}, Yn, { view: 0, detail: 0 }),
    kg = ie(ci),
    Tu,
    bu,
    fi,
    Ll = v({}, ci, {
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
      getModifierState: Eu,
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
          : (t !== fi &&
              (fi && t.type === "mousemove"
                ? ((Tu = t.screenX - fi.screenX), (bu = t.screenY - fi.screenY))
                : (bu = Tu = 0),
              (fi = t)),
            Tu);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : bu;
      },
    }),
    lf = ie(Ll),
    Fg = v({}, Ll, { dataTransfer: 0 }),
    Wg = ie(Fg),
    $g = v({}, ci, { relatedTarget: 0 }),
    Au = ie($g),
    Ig = v({}, Yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    t0 = ie(Ig),
    e0 = v({}, Yn, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    n0 = ie(e0),
    a0 = v({}, Yn, { data: 0 }),
    sf = ie(a0),
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
  function Eu() {
    return u0;
  }
  var o0 = v({}, ci, {
      key: function (t) {
        if (t.key) {
          var e = i0[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = _l(t)), t === 13 ? "Enter" : String.fromCharCode(t))
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
      getModifierState: Eu,
      charCode: function (t) {
        return t.type === "keypress" ? _l(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? _l(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    r0 = ie(o0),
    c0 = v({}, Ll, {
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
    uf = ie(c0),
    f0 = v({}, ci, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Eu,
    }),
    h0 = ie(f0),
    d0 = v({}, Yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    m0 = ie(d0),
    y0 = v({}, Ll, {
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
    p0 = ie(y0),
    g0 = v({}, Yn, { newState: 0, oldState: 0 }),
    v0 = ie(g0),
    S0 = [9, 13, 27, 32],
    Mu = Pe && "CompositionEvent" in window,
    hi = null;
  Pe && "documentMode" in document && (hi = document.documentMode);
  var T0 = Pe && "TextEvent" in window && !hi,
    of = Pe && (!Mu || (hi && 8 < hi && 11 >= hi)),
    rf = " ",
    cf = !1;
  function ff(t, e) {
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
  function hf(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var Sa = !1;
  function b0(t, e) {
    switch (t) {
      case "compositionend":
        return hf(e);
      case "keypress":
        return e.which !== 32 ? null : ((cf = !0), rf);
      case "textInput":
        return (t = e.data), t === rf && cf ? null : t;
      default:
        return null;
    }
  }
  function A0(t, e) {
    if (Sa)
      return t === "compositionend" || (!Mu && ff(t, e))
        ? ((t = nf()), (Ul = Su = dn = null), (Sa = !1), t)
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
        return of && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var E0 = {
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
  function df(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!E0[t.type] : e === "textarea";
  }
  function mf(t, e, n, a) {
    ga ? (va ? va.push(a) : (va = [a])) : (ga = a),
      (e = As(e, "onChange")),
      0 < e.length &&
        ((n = new Nl("onChange", "change", null, n, a)),
        t.push({ event: n, listeners: e }));
  }
  var di = null,
    mi = null;
  function M0(t) {
    Pd(t, 0);
  }
  function Hl(t) {
    var e = ui(t);
    if (Pc(e)) return t;
  }
  function yf(t, e) {
    if (t === "change") return e;
  }
  var pf = !1;
  if (Pe) {
    var xu;
    if (Pe) {
      var Du = "oninput" in document;
      if (!Du) {
        var gf = document.createElement("div");
        gf.setAttribute("oninput", "return;"),
          (Du = typeof gf.oninput == "function");
      }
      xu = Du;
    } else xu = !1;
    pf = xu && (!document.documentMode || 9 < document.documentMode);
  }
  function vf() {
    di && (di.detachEvent("onpropertychange", Sf), (mi = di = null));
  }
  function Sf(t) {
    if (t.propertyName === "value" && Hl(mi)) {
      var e = [];
      mf(e, mi, t, pu(t)), ef(M0, e);
    }
  }
  function x0(t, e, n) {
    t === "focusin"
      ? (vf(), (di = e), (mi = n), di.attachEvent("onpropertychange", Sf))
      : t === "focusout" && vf();
  }
  function D0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Hl(mi);
  }
  function R0(t, e) {
    if (t === "click") return Hl(e);
  }
  function O0(t, e) {
    if (t === "input" || t === "change") return Hl(e);
  }
  function V0(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var fe = typeof Object.is == "function" ? Object.is : V0;
  function yi(t, e) {
    if (fe(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var s = n[a];
      if (!eu.call(e, s) || !fe(t[s], e[s])) return !1;
    }
    return !0;
  }
  function Tf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function bf(t, e) {
    var n = Tf(t);
    t = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (((a = t + n.textContent.length), t <= e && a >= e))
          return { node: n, offset: e - t };
        t = a;
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
      n = Tf(n);
    }
  }
  function Af(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? Af(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function Ef(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Cl(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Cl(t.document);
    }
    return e;
  }
  function Ru(t) {
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
  var C0 = Pe && "documentMode" in document && 11 >= document.documentMode,
    Ta = null,
    Ou = null,
    pi = null,
    Vu = !1;
  function Mf(t, e, n) {
    var a =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Vu ||
      Ta == null ||
      Ta !== Cl(a) ||
      ((a = Ta),
      "selectionStart" in a && Ru(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (pi && yi(pi, a)) ||
        ((pi = a),
        (a = As(Ou, "onSelect")),
        0 < a.length &&
          ((e = new Nl("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: a }),
          (e.target = Ta))));
  }
  function Gn(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var ba = {
      animationend: Gn("Animation", "AnimationEnd"),
      animationiteration: Gn("Animation", "AnimationIteration"),
      animationstart: Gn("Animation", "AnimationStart"),
      transitionrun: Gn("Transition", "TransitionRun"),
      transitionstart: Gn("Transition", "TransitionStart"),
      transitioncancel: Gn("Transition", "TransitionCancel"),
      transitionend: Gn("Transition", "TransitionEnd"),
    },
    Cu = {},
    xf = {};
  Pe &&
    ((xf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ba.animationend.animation,
      delete ba.animationiteration.animation,
      delete ba.animationstart.animation),
    "TransitionEvent" in window || delete ba.transitionend.transition);
  function Xn(t) {
    if (Cu[t]) return Cu[t];
    if (!ba[t]) return t;
    var e = ba[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in xf) return (Cu[t] = e[n]);
    return t;
  }
  var Df = Xn("animationend"),
    Rf = Xn("animationiteration"),
    Of = Xn("animationstart"),
    z0 = Xn("transitionrun"),
    U0 = Xn("transitionstart"),
    _0 = Xn("transitioncancel"),
    Vf = Xn("transitionend"),
    Cf = new Map(),
    zu =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  zu.push("scrollEnd");
  function Ce(t, e) {
    Cf.set(t, e), qn(e, [t]);
  }
  var zf = new WeakMap();
  function Te(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = zf.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: Kc(e) }), zf.set(t, e), e);
    }
    return { value: t, source: e, stack: Kc(e) };
  }
  var be = [],
    Aa = 0,
    Uu = 0;
  function jl() {
    for (var t = Aa, e = (Uu = Aa = 0); e < t; ) {
      var n = be[e];
      be[e++] = null;
      var a = be[e];
      be[e++] = null;
      var s = be[e];
      be[e++] = null;
      var r = be[e];
      if (((be[e++] = null), a !== null && s !== null)) {
        var f = a.pending;
        f === null ? (s.next = s) : ((s.next = f.next), (f.next = s)),
          (a.pending = s);
      }
      r !== 0 && Uf(n, s, r);
    }
  }
  function wl(t, e, n, a) {
    (be[Aa++] = t),
      (be[Aa++] = e),
      (be[Aa++] = n),
      (be[Aa++] = a),
      (Uu |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a);
  }
  function _u(t, e, n, a) {
    return wl(t, e, n, a), ql(t);
  }
  function Ea(t, e) {
    return wl(t, null, null, e), ql(t);
  }
  function Uf(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var s = !1, r = t.return; r !== null; )
      (r.childLanes |= n),
        (a = r.alternate),
        a !== null && (a.childLanes |= n),
        r.tag === 22 &&
          ((t = r.stateNode), t === null || t._visibility & 1 || (s = !0)),
        (t = r),
        (r = r.return);
    return t.tag === 3
      ? ((r = t.stateNode),
        s &&
          e !== null &&
          ((s = 31 - ce(n)),
          (t = r.hiddenUpdates),
          (a = t[s]),
          a === null ? (t[s] = [e]) : a.push(e),
          (e.lane = n | 536870912)),
        r)
      : null;
  }
  function ql(t) {
    if (50 < Yi) throw ((Yi = 0), (qo = null), Error(o(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ma = {};
  function B0(t, e, n, a) {
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
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function he(t, e, n, a) {
    return new B0(t, e, n, a);
  }
  function Bu(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function ke(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = he(t.tag, e, t.key, t.mode)),
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
  function _f(t, e) {
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
  function Yl(t, e, n, a, s, r) {
    var f = 0;
    if (((a = t), typeof t == "function")) Bu(t) && (f = 1);
    else if (typeof t == "string")
      f = Lv(t, n, k.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case Et:
          return (t = he(31, n, e, s)), (t.elementType = Et), (t.lanes = r), t;
        case N:
          return Zn(n.children, s, r, e);
        case j:
          (f = 8), (s |= 24);
          break;
        case q:
          return (
            (t = he(12, n, e, s | 2)), (t.elementType = q), (t.lanes = r), t
          );
        case w:
          return (t = he(13, n, e, s)), (t.elementType = w), (t.lanes = r), t;
        case at:
          return (t = he(19, n, e, s)), (t.elementType = at), (t.lanes = r), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case H:
              case G:
                f = 10;
                break t;
              case Q:
                f = 9;
                break t;
              case ot:
                f = 11;
                break t;
              case ht:
                f = 14;
                break t;
              case P:
                (f = 16), (a = null);
                break t;
            }
          (f = 29),
            (n = Error(o(130, t === null ? "null" : typeof t, ""))),
            (a = null);
      }
    return (
      (e = he(f, n, e, s)), (e.elementType = t), (e.type = a), (e.lanes = r), e
    );
  }
  function Zn(t, e, n, a) {
    return (t = he(7, t, a, e)), (t.lanes = n), t;
  }
  function Nu(t, e, n) {
    return (t = he(6, t, null, e)), (t.lanes = n), t;
  }
  function Lu(t, e, n) {
    return (
      (e = he(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var xa = [],
    Da = 0,
    Gl = null,
    Xl = 0,
    Ae = [],
    Ee = 0,
    Qn = null,
    Fe = 1,
    We = "";
  function Kn(t, e) {
    (xa[Da++] = Xl), (xa[Da++] = Gl), (Gl = t), (Xl = e);
  }
  function Bf(t, e, n) {
    (Ae[Ee++] = Fe), (Ae[Ee++] = We), (Ae[Ee++] = Qn), (Qn = t);
    var a = Fe;
    t = We;
    var s = 32 - ce(a) - 1;
    (a &= ~(1 << s)), (n += 1);
    var r = 32 - ce(e) + s;
    if (30 < r) {
      var f = s - (s % 5);
      (r = (a & ((1 << f) - 1)).toString(32)),
        (a >>= f),
        (s -= f),
        (Fe = (1 << (32 - ce(e) + s)) | (n << s) | a),
        (We = r + t);
    } else (Fe = (1 << r) | (n << s) | a), (We = t);
  }
  function Hu(t) {
    t.return !== null && (Kn(t, 1), Bf(t, 1, 0));
  }
  function ju(t) {
    for (; t === Gl; )
      (Gl = xa[--Da]), (xa[Da] = null), (Xl = xa[--Da]), (xa[Da] = null);
    for (; t === Qn; )
      (Qn = Ae[--Ee]),
        (Ae[Ee] = null),
        (We = Ae[--Ee]),
        (Ae[Ee] = null),
        (Fe = Ae[--Ee]),
        (Ae[Ee] = null);
  }
  var ee = null,
    Ot = null,
    mt = !1,
    Jn = null,
    Le = !1,
    wu = Error(o(519));
  function Pn(t) {
    var e = Error(o(418, ""));
    throw (Si(Te(e, t)), wu);
  }
  function Nf(t) {
    var e = t.stateNode,
      n = t.type,
      a = t.memoizedProps;
    switch (((e[Ft] = t), (e[ae] = a), n)) {
      case "dialog":
        ut("cancel", e), ut("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ut("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Xi.length; n++) ut(Xi[n], e);
        break;
      case "source":
        ut("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ut("error", e), ut("load", e);
        break;
      case "details":
        ut("toggle", e);
        break;
      case "input":
        ut("invalid", e),
          kc(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ),
          Vl(e);
        break;
      case "select":
        ut("invalid", e);
        break;
      case "textarea":
        ut("invalid", e), Wc(e, a.value, a.defaultValue, a.children), Vl(e);
    }
    (n = a.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      a.suppressHydrationWarning === !0 ||
      $d(e.textContent, n)
        ? (a.popover != null && (ut("beforetoggle", e), ut("toggle", e)),
          a.onScroll != null && ut("scroll", e),
          a.onScrollEnd != null && ut("scrollend", e),
          a.onClick != null && (e.onclick = Es),
          (e = !0))
        : (e = !1),
      e || Pn(t);
  }
  function Lf(t) {
    for (ee = t.return; ee; )
      switch (ee.tag) {
        case 5:
        case 13:
          Le = !1;
          return;
        case 27:
        case 3:
          Le = !0;
          return;
        default:
          ee = ee.return;
      }
  }
  function gi(t) {
    if (t !== ee) return !1;
    if (!mt) return Lf(t), (mt = !0), !1;
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || nr(t.type, t.memoizedProps))),
        (n = !n)),
      n && Ot && Pn(t),
      Lf(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(o(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((n = t.data), n === "/$")) {
              if (e === 0) {
                Ot = Ue(t.nextSibling);
                break t;
              }
              e--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
          t = t.nextSibling;
        }
        Ot = null;
      }
    } else
      e === 27
        ? ((e = Ot), Vn(t.type) ? ((t = sr), (sr = null), (Ot = t)) : (Ot = e))
        : (Ot = ee ? Ue(t.stateNode.nextSibling) : null);
    return !0;
  }
  function vi() {
    (Ot = ee = null), (mt = !1);
  }
  function Hf() {
    var t = Jn;
    return (
      t !== null &&
        (ue === null ? (ue = t) : ue.push.apply(ue, t), (Jn = null)),
      t
    );
  }
  function Si(t) {
    Jn === null ? (Jn = [t]) : Jn.push(t);
  }
  var qu = B(null),
    kn = null,
    $e = null;
  function mn(t, e, n) {
    Y(qu, e._currentValue), (e._currentValue = n);
  }
  function Ie(t) {
    (t._currentValue = qu.current), X(qu);
  }
  function Yu(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function Gu(t, e, n, a) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var f = s.child;
        r = r.firstContext;
        t: for (; r !== null; ) {
          var y = r;
          r = s;
          for (var S = 0; S < e.length; S++)
            if (y.context === e[S]) {
              (r.lanes |= n),
                (y = r.alternate),
                y !== null && (y.lanes |= n),
                Yu(r.return, n, t),
                a || (f = null);
              break t;
            }
          r = y.next;
        }
      } else if (s.tag === 18) {
        if (((f = s.return), f === null)) throw Error(o(341));
        (f.lanes |= n),
          (r = f.alternate),
          r !== null && (r.lanes |= n),
          Yu(f, n, t),
          (f = null);
      } else f = s.child;
      if (f !== null) f.return = s;
      else
        for (f = s; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (((s = f.sibling), s !== null)) {
            (s.return = f.return), (f = s);
            break;
          }
          f = f.return;
        }
      s = f;
    }
  }
  function Ti(t, e, n, a) {
    t = null;
    for (var s = e, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var f = s.alternate;
        if (f === null) throw Error(o(387));
        if (((f = f.memoizedProps), f !== null)) {
          var y = s.type;
          fe(s.pendingProps.value, f.value) ||
            (t !== null ? t.push(y) : (t = [y]));
        }
      } else if (s === oe.current) {
        if (((f = s.alternate), f === null)) throw Error(o(387));
        f.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (t !== null ? t.push(ki) : (t = [ki]));
      }
      s = s.return;
    }
    t !== null && Gu(e, t, n, a), (e.flags |= 262144);
  }
  function Zl(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!fe(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Fn(t) {
    (kn = t),
      ($e = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function Wt(t) {
    return jf(kn, t);
  }
  function Ql(t, e) {
    return kn === null && Fn(t), jf(t, e);
  }
  function jf(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), $e === null)) {
      if (t === null) throw Error(o(308));
      ($e = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else $e = $e.next = e;
    return n;
  }
  var N0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                });
            };
          },
    L0 = i.unstable_scheduleCallback,
    H0 = i.unstable_NormalPriority,
    jt = {
      $$typeof: G,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Xu() {
    return { controller: new N0(), data: new Map(), refCount: 0 };
  }
  function bi(t) {
    t.refCount--,
      t.refCount === 0 &&
        L0(H0, function () {
          t.controller.abort();
        });
  }
  var Ai = null,
    Zu = 0,
    Ra = 0,
    Oa = null;
  function j0(t, e) {
    if (Ai === null) {
      var n = (Ai = []);
      (Zu = 0),
        (Ra = Jo()),
        (Oa = {
          status: "pending",
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        });
    }
    return Zu++, e.then(wf, wf), e;
  }
  function wf() {
    if (--Zu === 0 && Ai !== null) {
      Oa !== null && (Oa.status = "fulfilled");
      var t = Ai;
      (Ai = null), (Ra = 0), (Oa = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function w0(t, e) {
    var n = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          n.push(s);
        },
      };
    return (
      t.then(
        function () {
          (a.status = "fulfilled"), (a.value = e);
          for (var s = 0; s < n.length; s++) (0, n[s])(e);
        },
        function (s) {
          for (a.status = "rejected", a.reason = s, s = 0; s < n.length; s++)
            (0, n[s])(void 0);
        }
      ),
      a
    );
  }
  var qf = z.S;
  z.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      j0(t, e),
      qf !== null && qf(t, e);
  };
  var Wn = B(null);
  function Qu() {
    var t = Wn.current;
    return t !== null ? t : bt.pooledCache;
  }
  function Kl(t, e) {
    e === null ? Y(Wn, Wn.current) : Y(Wn, e.pool);
  }
  function Yf() {
    var t = Qu();
    return t === null ? null : { parent: jt._currentValue, pool: t };
  }
  var Ei = Error(o(460)),
    Gf = Error(o(474)),
    Jl = Error(o(542)),
    Ku = { then: function () {} };
  function Xf(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function Pl() {}
  function Zf(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(Pl, Pl), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), Kf(t), t);
      default:
        if (typeof e.status == "string") e.then(Pl, Pl);
        else {
          if (((t = bt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(o(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var s = e;
                  (s.status = "fulfilled"), (s.value = a);
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var s = e;
                  (s.status = "rejected"), (s.reason = a);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Kf(t), t);
        }
        throw ((Mi = e), Ei);
    }
  }
  var Mi = null;
  function Qf() {
    if (Mi === null) throw Error(o(459));
    var t = Mi;
    return (Mi = null), t;
  }
  function Kf(t) {
    if (t === Ei || t === Jl) throw Error(o(483));
  }
  var yn = !1;
  function Ju(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Pu(t, e) {
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
  function pn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function gn(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (yt & 2) !== 0)) {
      var s = a.pending;
      return (
        s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
        (a.pending = e),
        (e = ql(t)),
        Uf(t, null, n),
        e
      );
    }
    return wl(t, a, e, n), ql(t);
  }
  function xi(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var a = e.lanes;
      (a &= t.pendingLanes), (n |= a), (e.lanes = n), jc(t, n);
    }
  }
  function ku(t, e) {
    var n = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), n === a)) {
      var s = null,
        r = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          r === null ? (s = r = f) : (r = r.next = f), (n = n.next);
        } while (n !== null);
        r === null ? (s = r = e) : (r = r.next = e);
      } else s = r = e;
      (n = {
        baseState: a.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = n);
      return;
    }
    (t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e);
  }
  var Fu = !1;
  function Di() {
    if (Fu) {
      var t = Oa;
      if (t !== null) throw t;
    }
  }
  function Ri(t, e, n, a) {
    Fu = !1;
    var s = t.updateQueue;
    yn = !1;
    var r = s.firstBaseUpdate,
      f = s.lastBaseUpdate,
      y = s.shared.pending;
    if (y !== null) {
      s.shared.pending = null;
      var S = y,
        D = S.next;
      (S.next = null), f === null ? (r = D) : (f.next = D), (f = S);
      var C = t.alternate;
      C !== null &&
        ((C = C.updateQueue),
        (y = C.lastBaseUpdate),
        y !== f &&
          (y === null ? (C.firstBaseUpdate = D) : (y.next = D),
          (C.lastBaseUpdate = S)));
    }
    if (r !== null) {
      var _ = s.baseState;
      (f = 0), (C = D = S = null), (y = r);
      do {
        var R = y.lane & -536870913,
          O = R !== y.lane;
        if (O ? (rt & R) === R : (a & R) === R) {
          R !== 0 && R === Ra && (Fu = !0),
            C !== null &&
              (C = C.next =
                {
                  lane: 0,
                  tag: y.tag,
                  payload: y.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var I = t,
              F = y;
            R = e;
            var St = n;
            switch (F.tag) {
              case 1:
                if (((I = F.payload), typeof I == "function")) {
                  _ = I.call(St, _, R);
                  break t;
                }
                _ = I;
                break t;
              case 3:
                I.flags = (I.flags & -65537) | 128;
              case 0:
                if (
                  ((I = F.payload),
                  (R = typeof I == "function" ? I.call(St, _, R) : I),
                  R == null)
                )
                  break t;
                _ = v({}, _, R);
                break t;
              case 2:
                yn = !0;
            }
          }
          (R = y.callback),
            R !== null &&
              ((t.flags |= 64),
              O && (t.flags |= 8192),
              (O = s.callbacks),
              O === null ? (s.callbacks = [R]) : O.push(R));
        } else
          (O = {
            lane: R,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null,
          }),
            C === null ? ((D = C = O), (S = _)) : (C = C.next = O),
            (f |= R);
        if (((y = y.next), y === null)) {
          if (((y = s.shared.pending), y === null)) break;
          (O = y),
            (y = O.next),
            (O.next = null),
            (s.lastBaseUpdate = O),
            (s.shared.pending = null);
        }
      } while (!0);
      C === null && (S = _),
        (s.baseState = S),
        (s.firstBaseUpdate = D),
        (s.lastBaseUpdate = C),
        r === null && (s.shared.lanes = 0),
        (xn |= f),
        (t.lanes = f),
        (t.memoizedState = _);
    }
  }
  function Jf(t, e) {
    if (typeof t != "function") throw Error(o(191, t));
    t.call(e);
  }
  function Pf(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) Jf(n[t], e);
  }
  var Va = B(null),
    kl = B(0);
  function kf(t, e) {
    (t = un), Y(kl, t), Y(Va, e), (un = t | e.baseLanes);
  }
  function Wu() {
    Y(kl, un), Y(Va, Va.current);
  }
  function $u() {
    (un = kl.current), X(Va), X(kl);
  }
  var vn = 0,
    it = null,
    gt = null,
    Bt = null,
    Fl = !1,
    Ca = !1,
    $n = !1,
    Wl = 0,
    Oi = 0,
    za = null,
    q0 = 0;
  function zt() {
    throw Error(o(321));
  }
  function Iu(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!fe(t[n], e[n])) return !1;
    return !0;
  }
  function to(t, e, n, a, s, r) {
    return (
      (vn = r),
      (it = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (z.H = t === null || t.memoizedState === null ? Uh : _h),
      ($n = !1),
      (r = n(a, s)),
      ($n = !1),
      Ca && (r = Wf(e, n, a, s)),
      Ff(t),
      r
    );
  }
  function Ff(t) {
    z.H = as;
    var e = gt !== null && gt.next !== null;
    if (((vn = 0), (Bt = gt = it = null), (Fl = !1), (Oi = 0), (za = null), e))
      throw Error(o(300));
    t === null ||
      Yt ||
      ((t = t.dependencies), t !== null && Zl(t) && (Yt = !0));
  }
  function Wf(t, e, n, a) {
    it = t;
    var s = 0;
    do {
      if ((Ca && (za = null), (Oi = 0), (Ca = !1), 25 <= s))
        throw Error(o(301));
      if (((s += 1), (Bt = gt = null), t.updateQueue != null)) {
        var r = t.updateQueue;
        (r.lastEffect = null),
          (r.events = null),
          (r.stores = null),
          r.memoCache != null && (r.memoCache.index = 0);
      }
      (z.H = J0), (r = e(n, a));
    } while (Ca);
    return r;
  }
  function Y0() {
    var t = z.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Vi(e) : e),
      (t = t.useState()[0]),
      (gt !== null ? gt.memoizedState : null) !== t && (it.flags |= 1024),
      e
    );
  }
  function eo() {
    var t = Wl !== 0;
    return (Wl = 0), t;
  }
  function no(t, e, n) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n);
  }
  function ao(t) {
    if (Fl) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      Fl = !1;
    }
    (vn = 0), (Bt = gt = it = null), (Ca = !1), (Oi = Wl = 0), (za = null);
  }
  function le() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Bt === null ? (it.memoizedState = Bt = t) : (Bt = Bt.next = t), Bt;
  }
  function Nt() {
    if (gt === null) {
      var t = it.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = gt.next;
    var e = Bt === null ? it.memoizedState : Bt.next;
    if (e !== null) (Bt = e), (gt = t);
    else {
      if (t === null)
        throw it.alternate === null ? Error(o(467)) : Error(o(310));
      (gt = t),
        (t = {
          memoizedState: gt.memoizedState,
          baseState: gt.baseState,
          baseQueue: gt.baseQueue,
          queue: gt.queue,
          next: null,
        }),
        Bt === null ? (it.memoizedState = Bt = t) : (Bt = Bt.next = t);
    }
    return Bt;
  }
  function io() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Vi(t) {
    var e = Oi;
    return (
      (Oi += 1),
      za === null && (za = []),
      (t = Zf(za, t, e)),
      (e = it),
      (Bt === null ? e.memoizedState : Bt.next) === null &&
        ((e = e.alternate),
        (z.H = e === null || e.memoizedState === null ? Uh : _h)),
      t
    );
  }
  function $l(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Vi(t);
      if (t.$$typeof === G) return Wt(t);
    }
    throw Error(o(438, String(t)));
  }
  function lo(t) {
    var e = null,
      n = it.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var a = it.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = io()), (it.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++) n[a] = Lt;
    return e.index++, n;
  }
  function tn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Il(t) {
    var e = Nt();
    return so(e, gt, t);
  }
  function so(t, e, n) {
    var a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = n;
    var s = t.baseQueue,
      r = a.pending;
    if (r !== null) {
      if (s !== null) {
        var f = s.next;
        (s.next = r.next), (r.next = f);
      }
      (e.baseQueue = s = r), (a.pending = null);
    }
    if (((r = t.baseState), s === null)) t.memoizedState = r;
    else {
      e = s.next;
      var y = (f = null),
        S = null,
        D = e,
        C = !1;
      do {
        var _ = D.lane & -536870913;
        if (_ !== D.lane ? (rt & _) === _ : (vn & _) === _) {
          var R = D.revertLane;
          if (R === 0)
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: D.action,
                  hasEagerState: D.hasEagerState,
                  eagerState: D.eagerState,
                  next: null,
                }),
              _ === Ra && (C = !0);
          else if ((vn & R) === R) {
            (D = D.next), R === Ra && (C = !0);
            continue;
          } else
            (_ = {
              lane: 0,
              revertLane: D.revertLane,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null,
            }),
              S === null ? ((y = S = _), (f = r)) : (S = S.next = _),
              (it.lanes |= R),
              (xn |= R);
          (_ = D.action),
            $n && n(r, _),
            (r = D.hasEagerState ? D.eagerState : n(r, _));
        } else
          (R = {
            lane: _,
            revertLane: D.revertLane,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null,
          }),
            S === null ? ((y = S = R), (f = r)) : (S = S.next = R),
            (it.lanes |= _),
            (xn |= _);
        D = D.next;
      } while (D !== null && D !== e);
      if (
        (S === null ? (f = r) : (S.next = y),
        !fe(r, t.memoizedState) && ((Yt = !0), C && ((n = Oa), n !== null)))
      )
        throw n;
      (t.memoizedState = r),
        (t.baseState = f),
        (t.baseQueue = S),
        (a.lastRenderedState = r);
    }
    return s === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function uo(t) {
    var e = Nt(),
      n = e.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch,
      s = n.pending,
      r = e.memoizedState;
    if (s !== null) {
      n.pending = null;
      var f = (s = s.next);
      do (r = t(r, f.action)), (f = f.next);
      while (f !== s);
      fe(r, e.memoizedState) || (Yt = !0),
        (e.memoizedState = r),
        e.baseQueue === null && (e.baseState = r),
        (n.lastRenderedState = r);
    }
    return [r, a];
  }
  function $f(t, e, n) {
    var a = it,
      s = Nt(),
      r = mt;
    if (r) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = e();
    var f = !fe((gt || s).memoizedState, n);
    f && ((s.memoizedState = n), (Yt = !0)), (s = s.queue);
    var y = eh.bind(null, a, s, t);
    if (
      (Ci(2048, 8, y, [t]),
      s.getSnapshot !== e || f || (Bt !== null && Bt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Ua(9, ts(), th.bind(null, a, s, n, e), null),
        bt === null)
      )
        throw Error(o(349));
      r || (vn & 124) !== 0 || If(a, e, n);
    }
    return n;
  }
  function If(t, e, n) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = it.updateQueue),
      e === null
        ? ((e = io()), (it.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
  }
  function th(t, e, n, a) {
    (e.value = n), (e.getSnapshot = a), nh(e) && ah(t);
  }
  function eh(t, e, n) {
    return n(function () {
      nh(e) && ah(t);
    });
  }
  function nh(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !fe(t, n);
    } catch {
      return !0;
    }
  }
  function ah(t) {
    var e = Ea(t, 2);
    e !== null && ge(e, t, 2);
  }
  function oo(t) {
    var e = le();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), $n)) {
        fn(!0);
        try {
          n();
        } finally {
          fn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: tn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function ih(t, e, n, a) {
    return (t.baseState = n), so(t, gt, typeof a == "function" ? a : tn);
  }
  function G0(t, e, n, a, s) {
    if (ns(t)) throw Error(o(485));
    if (((t = e.action), t !== null)) {
      var r = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          r.listeners.push(f);
        },
      };
      z.T !== null ? n(!0) : (r.isTransition = !1),
        a(r),
        (n = e.pending),
        n === null
          ? ((r.next = e.pending = r), lh(e, r))
          : ((r.next = n.next), (e.pending = n.next = r));
    }
  }
  function lh(t, e) {
    var n = e.action,
      a = e.payload,
      s = t.state;
    if (e.isTransition) {
      var r = z.T,
        f = {};
      z.T = f;
      try {
        var y = n(s, a),
          S = z.S;
        S !== null && S(f, y), sh(t, e, y);
      } catch (D) {
        ro(t, e, D);
      } finally {
        z.T = r;
      }
    } else
      try {
        (r = n(s, a)), sh(t, e, r);
      } catch (D) {
        ro(t, e, D);
      }
  }
  function sh(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (a) {
            uh(t, e, a);
          },
          function (a) {
            return ro(t, e, a);
          }
        )
      : uh(t, e, n);
  }
  function uh(t, e, n) {
    (e.status = "fulfilled"),
      (e.value = n),
      oh(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), lh(t, n)));
  }
  function ro(t, e, n) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do (e.status = "rejected"), (e.reason = n), oh(e), (e = e.next);
      while (e !== a);
    }
    t.action = null;
  }
  function oh(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function rh(t, e) {
    return e;
  }
  function ch(t, e) {
    if (mt) {
      var n = bt.formState;
      if (n !== null) {
        t: {
          var a = it;
          if (mt) {
            if (Ot) {
              e: {
                for (var s = Ot, r = Le; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break e;
                  }
                  if (((s = Ue(s.nextSibling)), s === null)) {
                    s = null;
                    break e;
                  }
                }
                (r = s.data), (s = r === "F!" || r === "F" ? s : null);
              }
              if (s) {
                (Ot = Ue(s.nextSibling)), (a = s.data === "F!");
                break t;
              }
            }
            Pn(a);
          }
          a = !1;
        }
        a && (e = n[0]);
      }
    }
    return (
      (n = le()),
      (n.memoizedState = n.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: rh,
        lastRenderedState: e,
      }),
      (n.queue = a),
      (n = Vh.bind(null, it, a)),
      (a.dispatch = n),
      (a = oo(!1)),
      (r = yo.bind(null, it, !1, a.queue)),
      (a = le()),
      (s = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = s),
      (n = G0.bind(null, it, s, r, n)),
      (s.dispatch = n),
      (a.memoizedState = t),
      [e, n, !1]
    );
  }
  function fh(t) {
    var e = Nt();
    return hh(e, gt, t);
  }
  function hh(t, e, n) {
    if (
      ((e = so(t, e, rh)[0]),
      (t = Il(tn)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = Vi(e);
      } catch (f) {
        throw f === Ei ? Jl : f;
      }
    else a = e;
    e = Nt();
    var s = e.queue,
      r = s.dispatch;
    return (
      n !== e.memoizedState &&
        ((it.flags |= 2048), Ua(9, ts(), X0.bind(null, s, n), null)),
      [a, r, t]
    );
  }
  function X0(t, e) {
    t.action = e;
  }
  function dh(t) {
    var e = Nt(),
      n = gt;
    if (n !== null) return hh(e, n, t);
    Nt(), (e = e.memoizedState), (n = Nt());
    var a = n.queue.dispatch;
    return (n.memoizedState = t), [e, a, !1];
  }
  function Ua(t, e, n, a) {
    return (
      (t = { tag: t, create: n, deps: a, inst: e, next: null }),
      (e = it.updateQueue),
      e === null && ((e = io()), (it.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((a = n.next), (n.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function ts() {
    return { destroy: void 0, resource: void 0 };
  }
  function mh() {
    return Nt().memoizedState;
  }
  function es(t, e, n, a) {
    var s = le();
    (a = a === void 0 ? null : a),
      (it.flags |= t),
      (s.memoizedState = Ua(1 | e, ts(), n, a));
  }
  function Ci(t, e, n, a) {
    var s = Nt();
    a = a === void 0 ? null : a;
    var r = s.memoizedState.inst;
    gt !== null && a !== null && Iu(a, gt.memoizedState.deps)
      ? (s.memoizedState = Ua(e, r, n, a))
      : ((it.flags |= t), (s.memoizedState = Ua(1 | e, r, n, a)));
  }
  function yh(t, e) {
    es(8390656, 8, t, e);
  }
  function ph(t, e) {
    Ci(2048, 8, t, e);
  }
  function gh(t, e) {
    return Ci(4, 2, t, e);
  }
  function vh(t, e) {
    return Ci(4, 4, t, e);
  }
  function Sh(t, e) {
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
  function Th(t, e, n) {
    (n = n != null ? n.concat([t]) : null), Ci(4, 4, Sh.bind(null, e, t), n);
  }
  function co() {}
  function bh(t, e) {
    var n = Nt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && Iu(e, a[1]) ? a[0] : ((n.memoizedState = [t, e]), t);
  }
  function Ah(t, e) {
    var n = Nt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && Iu(e, a[1])) return a[0];
    if (((a = t()), $n)) {
      fn(!0);
      try {
        t();
      } finally {
        fn(!1);
      }
    }
    return (n.memoizedState = [a, e]), a;
  }
  function fo(t, e, n) {
    return n === void 0 || (vn & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = xd()), (it.lanes |= t), (xn |= t), n);
  }
  function Eh(t, e, n, a) {
    return fe(n, e)
      ? n
      : Va.current !== null
        ? ((t = fo(t, n, a)), fe(t, e) || (Yt = !0), t)
        : (vn & 42) === 0
          ? ((Yt = !0), (t.memoizedState = n))
          : ((t = xd()), (it.lanes |= t), (xn |= t), e);
  }
  function Mh(t, e, n, a, s) {
    var r = L.p;
    L.p = r !== 0 && 8 > r ? r : 8;
    var f = z.T,
      y = {};
    (z.T = y), yo(t, !1, e, n);
    try {
      var S = s(),
        D = z.S;
      if (
        (D !== null && D(y, S),
        S !== null && typeof S == "object" && typeof S.then == "function")
      ) {
        var C = w0(S, a);
        zi(t, e, C, pe(t));
      } else zi(t, e, a, pe(t));
    } catch (_) {
      zi(t, e, { then: function () {}, status: "rejected", reason: _ }, pe());
    } finally {
      (L.p = r), (z.T = f);
    }
  }
  function Z0() {}
  function ho(t, e, n, a) {
    if (t.tag !== 5) throw Error(o(476));
    var s = xh(t).queue;
    Mh(
      t,
      s,
      e,
      K,
      n === null
        ? Z0
        : function () {
            return Dh(t), n(a);
          }
    );
  }
  function xh(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: K,
      baseState: K,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: tn,
        lastRenderedState: K,
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
          lastRenderedReducer: tn,
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
  function Dh(t) {
    var e = xh(t).next.queue;
    zi(t, e, {}, pe());
  }
  function mo() {
    return Wt(ki);
  }
  function Rh() {
    return Nt().memoizedState;
  }
  function Oh() {
    return Nt().memoizedState;
  }
  function Q0(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = pe();
          t = pn(n);
          var a = gn(e, t, n);
          a !== null && (ge(a, e, n), xi(a, e, n)),
            (e = { cache: Xu() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function K0(t, e, n) {
    var a = pe();
    (n = {
      lane: a,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      ns(t)
        ? Ch(e, n)
        : ((n = _u(t, e, n, a)), n !== null && (ge(n, t, a), zh(n, e, a)));
  }
  function Vh(t, e, n) {
    var a = pe();
    zi(t, e, n, a);
  }
  function zi(t, e, n, a) {
    var s = {
      lane: a,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (ns(t)) Ch(e, s);
    else {
      var r = t.alternate;
      if (
        t.lanes === 0 &&
        (r === null || r.lanes === 0) &&
        ((r = e.lastRenderedReducer), r !== null)
      )
        try {
          var f = e.lastRenderedState,
            y = r(f, n);
          if (((s.hasEagerState = !0), (s.eagerState = y), fe(y, f)))
            return wl(t, e, s, 0), bt === null && jl(), !1;
        } catch {
        } finally {
        }
      if (((n = _u(t, e, s, a)), n !== null))
        return ge(n, t, a), zh(n, e, a), !0;
    }
    return !1;
  }
  function yo(t, e, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Jo(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ns(t))
    ) {
      if (e) throw Error(o(479));
    } else (e = _u(t, n, a, 2)), e !== null && ge(e, t, 2);
  }
  function ns(t) {
    var e = t.alternate;
    return t === it || (e !== null && e === it);
  }
  function Ch(t, e) {
    Ca = Fl = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e);
  }
  function zh(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      (a &= t.pendingLanes), (n |= a), (e.lanes = n), jc(t, n);
    }
  }
  var as = {
      readContext: Wt,
      use: $l,
      useCallback: zt,
      useContext: zt,
      useEffect: zt,
      useImperativeHandle: zt,
      useLayoutEffect: zt,
      useInsertionEffect: zt,
      useMemo: zt,
      useReducer: zt,
      useRef: zt,
      useState: zt,
      useDebugValue: zt,
      useDeferredValue: zt,
      useTransition: zt,
      useSyncExternalStore: zt,
      useId: zt,
      useHostTransitionStatus: zt,
      useFormState: zt,
      useActionState: zt,
      useOptimistic: zt,
      useMemoCache: zt,
      useCacheRefresh: zt,
    },
    Uh = {
      readContext: Wt,
      use: $l,
      useCallback: function (t, e) {
        return (le().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: Wt,
      useEffect: yh,
      useImperativeHandle: function (t, e, n) {
        (n = n != null ? n.concat([t]) : null),
          es(4194308, 4, Sh.bind(null, e, t), n);
      },
      useLayoutEffect: function (t, e) {
        return es(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        es(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = le();
        e = e === void 0 ? null : e;
        var a = t();
        if ($n) {
          fn(!0);
          try {
            t();
          } finally {
            fn(!1);
          }
        }
        return (n.memoizedState = [a, e]), a;
      },
      useReducer: function (t, e, n) {
        var a = le();
        if (n !== void 0) {
          var s = n(e);
          if ($n) {
            fn(!0);
            try {
              n(e);
            } finally {
              fn(!1);
            }
          }
        } else s = e;
        return (
          (a.memoizedState = a.baseState = s),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: s,
          }),
          (a.queue = t),
          (t = t.dispatch = K0.bind(null, it, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = le();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = oo(t);
        var e = t.queue,
          n = Vh.bind(null, it, e);
        return (e.dispatch = n), [t.memoizedState, n];
      },
      useDebugValue: co,
      useDeferredValue: function (t, e) {
        var n = le();
        return fo(n, t, e);
      },
      useTransition: function () {
        var t = oo(!1);
        return (
          (t = Mh.bind(null, it, t.queue, !0, !1)),
          (le().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var a = it,
          s = le();
        if (mt) {
          if (n === void 0) throw Error(o(407));
          n = n();
        } else {
          if (((n = e()), bt === null)) throw Error(o(349));
          (rt & 124) !== 0 || If(a, e, n);
        }
        s.memoizedState = n;
        var r = { value: n, getSnapshot: e };
        return (
          (s.queue = r),
          yh(eh.bind(null, a, r, t), [t]),
          (a.flags |= 2048),
          Ua(9, ts(), th.bind(null, a, r, n, e), null),
          n
        );
      },
      useId: function () {
        var t = le(),
          e = bt.identifierPrefix;
        if (mt) {
          var n = We,
            a = Fe;
          (n = (a & ~(1 << (32 - ce(a) - 1))).toString(32) + n),
            (e = "«" + e + "R" + n),
            (n = Wl++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "»");
        } else (n = q0++), (e = "«" + e + "r" + n.toString(32) + "»");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: mo,
      useFormState: ch,
      useActionState: ch,
      useOptimistic: function (t) {
        var e = le();
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
          (e = yo.bind(null, it, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: lo,
      useCacheRefresh: function () {
        return (le().memoizedState = Q0.bind(null, it));
      },
    },
    _h = {
      readContext: Wt,
      use: $l,
      useCallback: bh,
      useContext: Wt,
      useEffect: ph,
      useImperativeHandle: Th,
      useInsertionEffect: gh,
      useLayoutEffect: vh,
      useMemo: Ah,
      useReducer: Il,
      useRef: mh,
      useState: function () {
        return Il(tn);
      },
      useDebugValue: co,
      useDeferredValue: function (t, e) {
        var n = Nt();
        return Eh(n, gt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Il(tn)[0],
          e = Nt().memoizedState;
        return [typeof t == "boolean" ? t : Vi(t), e];
      },
      useSyncExternalStore: $f,
      useId: Rh,
      useHostTransitionStatus: mo,
      useFormState: fh,
      useActionState: fh,
      useOptimistic: function (t, e) {
        var n = Nt();
        return ih(n, gt, t, e);
      },
      useMemoCache: lo,
      useCacheRefresh: Oh,
    },
    J0 = {
      readContext: Wt,
      use: $l,
      useCallback: bh,
      useContext: Wt,
      useEffect: ph,
      useImperativeHandle: Th,
      useInsertionEffect: gh,
      useLayoutEffect: vh,
      useMemo: Ah,
      useReducer: uo,
      useRef: mh,
      useState: function () {
        return uo(tn);
      },
      useDebugValue: co,
      useDeferredValue: function (t, e) {
        var n = Nt();
        return gt === null ? fo(n, t, e) : Eh(n, gt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = uo(tn)[0],
          e = Nt().memoizedState;
        return [typeof t == "boolean" ? t : Vi(t), e];
      },
      useSyncExternalStore: $f,
      useId: Rh,
      useHostTransitionStatus: mo,
      useFormState: dh,
      useActionState: dh,
      useOptimistic: function (t, e) {
        var n = Nt();
        return gt !== null
          ? ih(n, gt, t, e)
          : ((n.baseState = t), [t, n.queue.dispatch]);
      },
      useMemoCache: lo,
      useCacheRefresh: Oh,
    },
    _a = null,
    Ui = 0;
  function is(t) {
    var e = Ui;
    return (Ui += 1), _a === null && (_a = []), Zf(_a, t, e);
  }
  function _i(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function ls(t, e) {
    throw e.$$typeof === T
      ? Error(o(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          o(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function Bh(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Nh(t) {
    function e(E, A) {
      if (t) {
        var M = E.deletions;
        M === null ? ((E.deletions = [A]), (E.flags |= 16)) : M.push(A);
      }
    }
    function n(E, A) {
      if (!t) return null;
      for (; A !== null; ) e(E, A), (A = A.sibling);
      return null;
    }
    function a(E) {
      for (var A = new Map(); E !== null; )
        E.key !== null ? A.set(E.key, E) : A.set(E.index, E), (E = E.sibling);
      return A;
    }
    function s(E, A) {
      return (E = ke(E, A)), (E.index = 0), (E.sibling = null), E;
    }
    function r(E, A, M) {
      return (
        (E.index = M),
        t
          ? ((M = E.alternate),
            M !== null
              ? ((M = M.index), M < A ? ((E.flags |= 67108866), A) : M)
              : ((E.flags |= 67108866), A))
          : ((E.flags |= 1048576), A)
      );
    }
    function f(E) {
      return t && E.alternate === null && (E.flags |= 67108866), E;
    }
    function y(E, A, M, U) {
      return A === null || A.tag !== 6
        ? ((A = Nu(M, E.mode, U)), (A.return = E), A)
        : ((A = s(A, M)), (A.return = E), A);
    }
    function S(E, A, M, U) {
      var Z = M.type;
      return Z === N
        ? C(E, A, M.props.children, U, M.key)
        : A !== null &&
            (A.elementType === Z ||
              (typeof Z == "object" &&
                Z !== null &&
                Z.$$typeof === P &&
                Bh(Z) === A.type))
          ? ((A = s(A, M.props)), _i(A, M), (A.return = E), A)
          : ((A = Yl(M.type, M.key, M.props, null, E.mode, U)),
            _i(A, M),
            (A.return = E),
            A);
    }
    function D(E, A, M, U) {
      return A === null ||
        A.tag !== 4 ||
        A.stateNode.containerInfo !== M.containerInfo ||
        A.stateNode.implementation !== M.implementation
        ? ((A = Lu(M, E.mode, U)), (A.return = E), A)
        : ((A = s(A, M.children || [])), (A.return = E), A);
    }
    function C(E, A, M, U, Z) {
      return A === null || A.tag !== 7
        ? ((A = Zn(M, E.mode, U, Z)), (A.return = E), A)
        : ((A = s(A, M)), (A.return = E), A);
    }
    function _(E, A, M) {
      if (
        (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
      )
        return (A = Nu("" + A, E.mode, M)), (A.return = E), A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case x:
            return (
              (M = Yl(A.type, A.key, A.props, null, E.mode, M)),
              _i(M, A),
              (M.return = E),
              M
            );
          case V:
            return (A = Lu(A, E.mode, M)), (A.return = E), A;
          case P:
            var U = A._init;
            return (A = U(A._payload)), _(E, A, M);
        }
        if (Zt(A) || Ht(A))
          return (A = Zn(A, E.mode, M, null)), (A.return = E), A;
        if (typeof A.then == "function") return _(E, is(A), M);
        if (A.$$typeof === G) return _(E, Ql(E, A), M);
        ls(E, A);
      }
      return null;
    }
    function R(E, A, M, U) {
      var Z = A !== null ? A.key : null;
      if (
        (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
      )
        return Z !== null ? null : y(E, A, "" + M, U);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case x:
            return M.key === Z ? S(E, A, M, U) : null;
          case V:
            return M.key === Z ? D(E, A, M, U) : null;
          case P:
            return (Z = M._init), (M = Z(M._payload)), R(E, A, M, U);
        }
        if (Zt(M) || Ht(M)) return Z !== null ? null : C(E, A, M, U, null);
        if (typeof M.then == "function") return R(E, A, is(M), U);
        if (M.$$typeof === G) return R(E, A, Ql(E, M), U);
        ls(E, M);
      }
      return null;
    }
    function O(E, A, M, U, Z) {
      if (
        (typeof U == "string" && U !== "") ||
        typeof U == "number" ||
        typeof U == "bigint"
      )
        return (E = E.get(M) || null), y(A, E, "" + U, Z);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case x:
            return (
              (E = E.get(U.key === null ? M : U.key) || null), S(A, E, U, Z)
            );
          case V:
            return (
              (E = E.get(U.key === null ? M : U.key) || null), D(A, E, U, Z)
            );
          case P:
            var lt = U._init;
            return (U = lt(U._payload)), O(E, A, M, U, Z);
        }
        if (Zt(U) || Ht(U)) return (E = E.get(M) || null), C(A, E, U, Z, null);
        if (typeof U.then == "function") return O(E, A, M, is(U), Z);
        if (U.$$typeof === G) return O(E, A, M, Ql(A, U), Z);
        ls(A, U);
      }
      return null;
    }
    function I(E, A, M, U) {
      for (
        var Z = null, lt = null, J = A, W = (A = 0), Xt = null;
        J !== null && W < M.length;
        W++
      ) {
        J.index > W ? ((Xt = J), (J = null)) : (Xt = J.sibling);
        var ft = R(E, J, M[W], U);
        if (ft === null) {
          J === null && (J = Xt);
          break;
        }
        t && J && ft.alternate === null && e(E, J),
          (A = r(ft, A, W)),
          lt === null ? (Z = ft) : (lt.sibling = ft),
          (lt = ft),
          (J = Xt);
      }
      if (W === M.length) return n(E, J), mt && Kn(E, W), Z;
      if (J === null) {
        for (; W < M.length; W++)
          (J = _(E, M[W], U)),
            J !== null &&
              ((A = r(J, A, W)),
              lt === null ? (Z = J) : (lt.sibling = J),
              (lt = J));
        return mt && Kn(E, W), Z;
      }
      for (J = a(J); W < M.length; W++)
        (Xt = O(J, E, W, M[W], U)),
          Xt !== null &&
            (t &&
              Xt.alternate !== null &&
              J.delete(Xt.key === null ? W : Xt.key),
            (A = r(Xt, A, W)),
            lt === null ? (Z = Xt) : (lt.sibling = Xt),
            (lt = Xt));
      return (
        t &&
          J.forEach(function (Bn) {
            return e(E, Bn);
          }),
        mt && Kn(E, W),
        Z
      );
    }
    function F(E, A, M, U) {
      if (M == null) throw Error(o(151));
      for (
        var Z = null, lt = null, J = A, W = (A = 0), Xt = null, ft = M.next();
        J !== null && !ft.done;
        W++, ft = M.next()
      ) {
        J.index > W ? ((Xt = J), (J = null)) : (Xt = J.sibling);
        var Bn = R(E, J, ft.value, U);
        if (Bn === null) {
          J === null && (J = Xt);
          break;
        }
        t && J && Bn.alternate === null && e(E, J),
          (A = r(Bn, A, W)),
          lt === null ? (Z = Bn) : (lt.sibling = Bn),
          (lt = Bn),
          (J = Xt);
      }
      if (ft.done) return n(E, J), mt && Kn(E, W), Z;
      if (J === null) {
        for (; !ft.done; W++, ft = M.next())
          (ft = _(E, ft.value, U)),
            ft !== null &&
              ((A = r(ft, A, W)),
              lt === null ? (Z = ft) : (lt.sibling = ft),
              (lt = ft));
        return mt && Kn(E, W), Z;
      }
      for (J = a(J); !ft.done; W++, ft = M.next())
        (ft = O(J, E, W, ft.value, U)),
          ft !== null &&
            (t &&
              ft.alternate !== null &&
              J.delete(ft.key === null ? W : ft.key),
            (A = r(ft, A, W)),
            lt === null ? (Z = ft) : (lt.sibling = ft),
            (lt = ft));
      return (
        t &&
          J.forEach(function (Pv) {
            return e(E, Pv);
          }),
        mt && Kn(E, W),
        Z
      );
    }
    function St(E, A, M, U) {
      if (
        (typeof M == "object" &&
          M !== null &&
          M.type === N &&
          M.key === null &&
          (M = M.props.children),
        typeof M == "object" && M !== null)
      ) {
        switch (M.$$typeof) {
          case x:
            t: {
              for (var Z = M.key; A !== null; ) {
                if (A.key === Z) {
                  if (((Z = M.type), Z === N)) {
                    if (A.tag === 7) {
                      n(E, A.sibling),
                        (U = s(A, M.props.children)),
                        (U.return = E),
                        (E = U);
                      break t;
                    }
                  } else if (
                    A.elementType === Z ||
                    (typeof Z == "object" &&
                      Z !== null &&
                      Z.$$typeof === P &&
                      Bh(Z) === A.type)
                  ) {
                    n(E, A.sibling),
                      (U = s(A, M.props)),
                      _i(U, M),
                      (U.return = E),
                      (E = U);
                    break t;
                  }
                  n(E, A);
                  break;
                } else e(E, A);
                A = A.sibling;
              }
              M.type === N
                ? ((U = Zn(M.props.children, E.mode, U, M.key)),
                  (U.return = E),
                  (E = U))
                : ((U = Yl(M.type, M.key, M.props, null, E.mode, U)),
                  _i(U, M),
                  (U.return = E),
                  (E = U));
            }
            return f(E);
          case V:
            t: {
              for (Z = M.key; A !== null; ) {
                if (A.key === Z)
                  if (
                    A.tag === 4 &&
                    A.stateNode.containerInfo === M.containerInfo &&
                    A.stateNode.implementation === M.implementation
                  ) {
                    n(E, A.sibling),
                      (U = s(A, M.children || [])),
                      (U.return = E),
                      (E = U);
                    break t;
                  } else {
                    n(E, A);
                    break;
                  }
                else e(E, A);
                A = A.sibling;
              }
              (U = Lu(M, E.mode, U)), (U.return = E), (E = U);
            }
            return f(E);
          case P:
            return (Z = M._init), (M = Z(M._payload)), St(E, A, M, U);
        }
        if (Zt(M)) return I(E, A, M, U);
        if (Ht(M)) {
          if (((Z = Ht(M)), typeof Z != "function")) throw Error(o(150));
          return (M = Z.call(M)), F(E, A, M, U);
        }
        if (typeof M.then == "function") return St(E, A, is(M), U);
        if (M.$$typeof === G) return St(E, A, Ql(E, M), U);
        ls(E, M);
      }
      return (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
        ? ((M = "" + M),
          A !== null && A.tag === 6
            ? (n(E, A.sibling), (U = s(A, M)), (U.return = E), (E = U))
            : (n(E, A), (U = Nu(M, E.mode, U)), (U.return = E), (E = U)),
          f(E))
        : n(E, A);
    }
    return function (E, A, M, U) {
      try {
        Ui = 0;
        var Z = St(E, A, M, U);
        return (_a = null), Z;
      } catch (J) {
        if (J === Ei || J === Jl) throw J;
        var lt = he(29, J, null, E.mode);
        return (lt.lanes = U), (lt.return = E), lt;
      } finally {
      }
    };
  }
  var Ba = Nh(!0),
    Lh = Nh(!1),
    Me = B(null),
    He = null;
  function Sn(t) {
    var e = t.alternate;
    Y(wt, wt.current & 1),
      Y(Me, t),
      He === null &&
        (e === null || Va.current !== null || e.memoizedState !== null) &&
        (He = t);
  }
  function Hh(t) {
    if (t.tag === 22) {
      if ((Y(wt, wt.current), Y(Me, t), He === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (He = t);
      }
    } else Tn();
  }
  function Tn() {
    Y(wt, wt.current), Y(Me, Me.current);
  }
  function en(t) {
    X(Me), He === t && (He = null), X(wt);
  }
  var wt = B(0);
  function ss(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || lr(n))
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
  function po(t, e, n, a) {
    (e = t.memoizedState),
      (n = n(a, e)),
      (n = n == null ? e : v({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var go = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var a = pe(),
        s = pn(a);
      (s.payload = e),
        n != null && (s.callback = n),
        (e = gn(t, s, a)),
        e !== null && (ge(e, t, a), xi(e, t, a));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var a = pe(),
        s = pn(a);
      (s.tag = 1),
        (s.payload = e),
        n != null && (s.callback = n),
        (e = gn(t, s, a)),
        e !== null && (ge(e, t, a), xi(e, t, a));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = pe(),
        a = pn(n);
      (a.tag = 2),
        e != null && (a.callback = e),
        (e = gn(t, a, n)),
        e !== null && (ge(e, t, n), xi(e, t, n));
    },
  };
  function jh(t, e, n, a, s, r, f) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, r, f)
        : e.prototype && e.prototype.isPureReactComponent
          ? !yi(n, a) || !yi(s, r)
          : !0
    );
  }
  function wh(t, e, n, a) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, a),
      e.state !== t && go.enqueueReplaceState(e, e.state, null);
  }
  function In(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e) a !== "ref" && (n[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = v({}, n));
      for (var s in t) n[s] === void 0 && (n[s] = t[s]);
    }
    return n;
  }
  var us =
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
  function qh(t) {
    us(t);
  }
  function Yh(t) {
    console.error(t);
  }
  function Gh(t) {
    us(t);
  }
  function os(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Xh(t, e, n) {
    try {
      var a = t.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function vo(t, e, n) {
    return (
      (n = pn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        os(t, e);
      }),
      n
    );
  }
  function Zh(t) {
    return (t = pn(t)), (t.tag = 3), t;
  }
  function Qh(t, e, n, a) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = a.value;
      (t.payload = function () {
        return s(r);
      }),
        (t.callback = function () {
          Xh(e, n, a);
        });
    }
    var f = n.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (t.callback = function () {
        Xh(e, n, a),
          typeof s != "function" &&
            (Dn === null ? (Dn = new Set([this])) : Dn.add(this));
        var y = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: y !== null ? y : "",
        });
      });
  }
  function P0(t, e, n, a, s) {
    if (
      ((n.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && Ti(e, n, s, !0),
        (n = Me.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              He === null ? Go() : n.alternate === null && Vt === 0 && (Vt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = s),
              a === Ku
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([a])) : e.add(a),
                  Zo(t, a, s)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === Ku
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([a])) : n.add(a)),
                  Zo(t, a, s)),
              !1
            );
        }
        throw Error(o(435, n.tag));
      }
      return Zo(t, a, s), Go(), !1;
    }
    if (mt)
      return (
        (e = Me.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = s),
            a !== wu && ((t = Error(o(422), { cause: a })), Si(Te(t, n))))
          : (a !== wu && ((e = Error(o(423), { cause: a })), Si(Te(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (s &= -s),
            (t.lanes |= s),
            (a = Te(a, n)),
            (s = vo(t.stateNode, a, s)),
            ku(t, s),
            Vt !== 4 && (Vt = 2)),
        !1
      );
    var r = Error(o(520), { cause: a });
    if (
      ((r = Te(r, n)),
      qi === null ? (qi = [r]) : qi.push(r),
      Vt !== 4 && (Vt = 2),
      e === null)
    )
      return !0;
    (a = Te(a, n)), (n = e);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = s & -s),
            (n.lanes |= t),
            (t = vo(n.stateNode, a, t)),
            ku(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (r = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (r !== null &&
                  typeof r.componentDidCatch == "function" &&
                  (Dn === null || !Dn.has(r)))))
          )
            return (
              (n.flags |= 65536),
              (s &= -s),
              (n.lanes |= s),
              (s = Zh(s)),
              Qh(s, t, n, a),
              ku(n, s),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Kh = Error(o(461)),
    Yt = !1;
  function Qt(t, e, n, a) {
    e.child = t === null ? Lh(e, null, n, a) : Ba(e, t.child, n, a);
  }
  function Jh(t, e, n, a, s) {
    n = n.render;
    var r = e.ref;
    if ("ref" in a) {
      var f = {};
      for (var y in a) y !== "ref" && (f[y] = a[y]);
    } else f = a;
    return (
      Fn(e),
      (a = to(t, e, n, f, r, s)),
      (y = eo()),
      t !== null && !Yt
        ? (no(t, e, s), nn(t, e, s))
        : (mt && y && Hu(e), (e.flags |= 1), Qt(t, e, a, s), e.child)
    );
  }
  function Ph(t, e, n, a, s) {
    if (t === null) {
      var r = n.type;
      return typeof r == "function" &&
        !Bu(r) &&
        r.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = r), kh(t, e, r, a, s))
        : ((t = Yl(n.type, null, a, e, e.mode, s)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((r = t.child), !Do(t, s))) {
      var f = r.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : yi), n(f, a) && t.ref === e.ref)
      )
        return nn(t, e, s);
    }
    return (
      (e.flags |= 1),
      (t = ke(r, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function kh(t, e, n, a, s) {
    if (t !== null) {
      var r = t.memoizedProps;
      if (yi(r, a) && t.ref === e.ref)
        if (((Yt = !1), (e.pendingProps = a = r), Do(t, s)))
          (t.flags & 131072) !== 0 && (Yt = !0);
        else return (e.lanes = t.lanes), nn(t, e, s);
    }
    return So(t, e, n, a, s);
  }
  function Fh(t, e, n) {
    var a = e.pendingProps,
      s = a.children,
      r = t !== null ? t.memoizedState : null;
    if (a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((a = r !== null ? r.baseLanes | n : n), t !== null)) {
          for (s = e.child = t.child, r = 0; s !== null; )
            (r = r | s.lanes | s.childLanes), (s = s.sibling);
          e.childLanes = r & ~a;
        } else (e.childLanes = 0), (e.child = null);
        return Wh(t, e, a, n);
      }
      if ((n & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Kl(e, r !== null ? r.cachePool : null),
          r !== null ? kf(e, r) : Wu(),
          Hh(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          Wh(t, e, r !== null ? r.baseLanes | n : n, n)
        );
    } else
      r !== null
        ? (Kl(e, r.cachePool), kf(e, r), Tn(), (e.memoizedState = null))
        : (t !== null && Kl(e, null), Wu(), Tn());
    return Qt(t, e, s, n), e.child;
  }
  function Wh(t, e, n, a) {
    var s = Qu();
    return (
      (s = s === null ? null : { parent: jt._currentValue, pool: s }),
      (e.memoizedState = { baseLanes: n, cachePool: s }),
      t !== null && Kl(e, null),
      Wu(),
      Hh(e),
      t !== null && Ti(t, e, a, !0),
      null
    );
  }
  function rs(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(o(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function So(t, e, n, a, s) {
    return (
      Fn(e),
      (n = to(t, e, n, a, void 0, s)),
      (a = eo()),
      t !== null && !Yt
        ? (no(t, e, s), nn(t, e, s))
        : (mt && a && Hu(e), (e.flags |= 1), Qt(t, e, n, s), e.child)
    );
  }
  function $h(t, e, n, a, s, r) {
    return (
      Fn(e),
      (e.updateQueue = null),
      (n = Wf(e, a, n, s)),
      Ff(t),
      (a = eo()),
      t !== null && !Yt
        ? (no(t, e, r), nn(t, e, r))
        : (mt && a && Hu(e), (e.flags |= 1), Qt(t, e, n, r), e.child)
    );
  }
  function Ih(t, e, n, a, s) {
    if ((Fn(e), e.stateNode === null)) {
      var r = Ma,
        f = n.contextType;
      typeof f == "object" && f !== null && (r = Wt(f)),
        (r = new n(a, r)),
        (e.memoizedState =
          r.state !== null && r.state !== void 0 ? r.state : null),
        (r.updater = go),
        (e.stateNode = r),
        (r._reactInternals = e),
        (r = e.stateNode),
        (r.props = a),
        (r.state = e.memoizedState),
        (r.refs = {}),
        Ju(e),
        (f = n.contextType),
        (r.context = typeof f == "object" && f !== null ? Wt(f) : Ma),
        (r.state = e.memoizedState),
        (f = n.getDerivedStateFromProps),
        typeof f == "function" && (po(e, n, f, a), (r.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function" ||
          (typeof r.UNSAFE_componentWillMount != "function" &&
            typeof r.componentWillMount != "function") ||
          ((f = r.state),
          typeof r.componentWillMount == "function" && r.componentWillMount(),
          typeof r.UNSAFE_componentWillMount == "function" &&
            r.UNSAFE_componentWillMount(),
          f !== r.state && go.enqueueReplaceState(r, r.state, null),
          Ri(e, a, r, s),
          Di(),
          (r.state = e.memoizedState)),
        typeof r.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0);
    } else if (t === null) {
      r = e.stateNode;
      var y = e.memoizedProps,
        S = In(n, y);
      r.props = S;
      var D = r.context,
        C = n.contextType;
      (f = Ma), typeof C == "object" && C !== null && (f = Wt(C));
      var _ = n.getDerivedStateFromProps;
      (C =
        typeof _ == "function" ||
        typeof r.getSnapshotBeforeUpdate == "function"),
        (y = e.pendingProps !== y),
        C ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((y || D !== f) && wh(e, r, a, f)),
        (yn = !1);
      var R = e.memoizedState;
      (r.state = R),
        Ri(e, a, r, s),
        Di(),
        (D = e.memoizedState),
        y || R !== D || yn
          ? (typeof _ == "function" && (po(e, n, _, a), (D = e.memoizedState)),
            (S = yn || jh(e, n, S, a, R, D, f))
              ? (C ||
                  (typeof r.UNSAFE_componentWillMount != "function" &&
                    typeof r.componentWillMount != "function") ||
                  (typeof r.componentWillMount == "function" &&
                    r.componentWillMount(),
                  typeof r.UNSAFE_componentWillMount == "function" &&
                    r.UNSAFE_componentWillMount()),
                typeof r.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof r.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = D)),
            (r.props = a),
            (r.state = D),
            (r.context = f),
            (a = S))
          : (typeof r.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1));
    } else {
      (r = e.stateNode),
        Pu(t, e),
        (f = e.memoizedProps),
        (C = In(n, f)),
        (r.props = C),
        (_ = e.pendingProps),
        (R = r.context),
        (D = n.contextType),
        (S = Ma),
        typeof D == "object" && D !== null && (S = Wt(D)),
        (y = n.getDerivedStateFromProps),
        (D =
          typeof y == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function") ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((f !== _ || R !== S) && wh(e, r, a, S)),
        (yn = !1),
        (R = e.memoizedState),
        (r.state = R),
        Ri(e, a, r, s),
        Di();
      var O = e.memoizedState;
      f !== _ ||
      R !== O ||
      yn ||
      (t !== null && t.dependencies !== null && Zl(t.dependencies))
        ? (typeof y == "function" && (po(e, n, y, a), (O = e.memoizedState)),
          (C =
            yn ||
            jh(e, n, C, a, R, O, S) ||
            (t !== null && t.dependencies !== null && Zl(t.dependencies)))
            ? (D ||
                (typeof r.UNSAFE_componentWillUpdate != "function" &&
                  typeof r.componentWillUpdate != "function") ||
                (typeof r.componentWillUpdate == "function" &&
                  r.componentWillUpdate(a, O, S),
                typeof r.UNSAFE_componentWillUpdate == "function" &&
                  r.UNSAFE_componentWillUpdate(a, O, S)),
              typeof r.componentDidUpdate == "function" && (e.flags |= 4),
              typeof r.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof r.componentDidUpdate != "function" ||
                (f === t.memoizedProps && R === t.memoizedState) ||
                (e.flags |= 4),
              typeof r.getSnapshotBeforeUpdate != "function" ||
                (f === t.memoizedProps && R === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = O)),
          (r.props = a),
          (r.state = O),
          (r.context = S),
          (a = C))
        : (typeof r.componentDidUpdate != "function" ||
            (f === t.memoizedProps && R === t.memoizedState) ||
            (e.flags |= 4),
          typeof r.getSnapshotBeforeUpdate != "function" ||
            (f === t.memoizedProps && R === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (r = a),
      rs(t, e),
      (a = (e.flags & 128) !== 0),
      r || a
        ? ((r = e.stateNode),
          (n =
            a && typeof n.getDerivedStateFromError != "function"
              ? null
              : r.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = Ba(e, t.child, null, s)),
              (e.child = Ba(e, null, n, s)))
            : Qt(t, e, n, s),
          (e.memoizedState = r.state),
          (t = e.child))
        : (t = nn(t, e, s)),
      t
    );
  }
  function td(t, e, n, a) {
    return vi(), (e.flags |= 256), Qt(t, e, n, a), e.child;
  }
  var To = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function bo(t) {
    return { baseLanes: t, cachePool: Yf() };
  }
  function Ao(t, e, n) {
    return (t = t !== null ? t.childLanes & ~n : 0), e && (t |= xe), t;
  }
  function ed(t, e, n) {
    var a = e.pendingProps,
      s = !1,
      r = (e.flags & 128) !== 0,
      f;
    if (
      ((f = r) ||
        (f =
          t !== null && t.memoizedState === null ? !1 : (wt.current & 2) !== 0),
      f && ((s = !0), (e.flags &= -129)),
      (f = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (mt) {
        if ((s ? Sn(e) : Tn(), mt)) {
          var y = Ot,
            S;
          if ((S = y)) {
            t: {
              for (S = y, y = Le; S.nodeType !== 8; ) {
                if (!y) {
                  y = null;
                  break t;
                }
                if (((S = Ue(S.nextSibling)), S === null)) {
                  y = null;
                  break t;
                }
              }
              y = S;
            }
            y !== null
              ? ((e.memoizedState = {
                  dehydrated: y,
                  treeContext: Qn !== null ? { id: Fe, overflow: We } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (S = he(18, null, null, 0)),
                (S.stateNode = y),
                (S.return = e),
                (e.child = S),
                (ee = e),
                (Ot = null),
                (S = !0))
              : (S = !1);
          }
          S || Pn(e);
        }
        if (
          ((y = e.memoizedState),
          y !== null && ((y = y.dehydrated), y !== null))
        )
          return lr(y) ? (e.lanes = 32) : (e.lanes = 536870912), null;
        en(e);
      }
      return (
        (y = a.children),
        (a = a.fallback),
        s
          ? (Tn(),
            (s = e.mode),
            (y = cs({ mode: "hidden", children: y }, s)),
            (a = Zn(a, s, n, null)),
            (y.return = e),
            (a.return = e),
            (y.sibling = a),
            (e.child = y),
            (s = e.child),
            (s.memoizedState = bo(n)),
            (s.childLanes = Ao(t, f, n)),
            (e.memoizedState = To),
            a)
          : (Sn(e), Eo(e, y))
      );
    }
    if (
      ((S = t.memoizedState), S !== null && ((y = S.dehydrated), y !== null))
    ) {
      if (r)
        e.flags & 256
          ? (Sn(e), (e.flags &= -257), (e = Mo(t, e, n)))
          : e.memoizedState !== null
            ? (Tn(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (Tn(),
              (s = a.fallback),
              (y = e.mode),
              (a = cs({ mode: "visible", children: a.children }, y)),
              (s = Zn(s, y, n, null)),
              (s.flags |= 2),
              (a.return = e),
              (s.return = e),
              (a.sibling = s),
              (e.child = a),
              Ba(e, t.child, null, n),
              (a = e.child),
              (a.memoizedState = bo(n)),
              (a.childLanes = Ao(t, f, n)),
              (e.memoizedState = To),
              (e = s));
      else if ((Sn(e), lr(y))) {
        if (((f = y.nextSibling && y.nextSibling.dataset), f)) var D = f.dgst;
        (f = D),
          (a = Error(o(419))),
          (a.stack = ""),
          (a.digest = f),
          Si({ value: a, source: null, stack: null }),
          (e = Mo(t, e, n));
      } else if (
        (Yt || Ti(t, e, n, !1), (f = (n & t.childLanes) !== 0), Yt || f)
      ) {
        if (
          ((f = bt),
          f !== null &&
            ((a = n & -n),
            (a = (a & 42) !== 0 ? 1 : lu(a)),
            (a = (a & (f.suspendedLanes | n)) !== 0 ? 0 : a),
            a !== 0 && a !== S.retryLane))
        )
          throw ((S.retryLane = a), Ea(t, a), ge(f, t, a), Kh);
        y.data === "$?" || Go(), (e = Mo(t, e, n));
      } else
        y.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = S.treeContext),
            (Ot = Ue(y.nextSibling)),
            (ee = e),
            (mt = !0),
            (Jn = null),
            (Le = !1),
            t !== null &&
              ((Ae[Ee++] = Fe),
              (Ae[Ee++] = We),
              (Ae[Ee++] = Qn),
              (Fe = t.id),
              (We = t.overflow),
              (Qn = e)),
            (e = Eo(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return s
      ? (Tn(),
        (s = a.fallback),
        (y = e.mode),
        (S = t.child),
        (D = S.sibling),
        (a = ke(S, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = S.subtreeFlags & 65011712),
        D !== null ? (s = ke(D, s)) : ((s = Zn(s, y, n, null)), (s.flags |= 2)),
        (s.return = e),
        (a.return = e),
        (a.sibling = s),
        (e.child = a),
        (a = s),
        (s = e.child),
        (y = t.child.memoizedState),
        y === null
          ? (y = bo(n))
          : ((S = y.cachePool),
            S !== null
              ? ((D = jt._currentValue),
                (S = S.parent !== D ? { parent: D, pool: D } : S))
              : (S = Yf()),
            (y = { baseLanes: y.baseLanes | n, cachePool: S })),
        (s.memoizedState = y),
        (s.childLanes = Ao(t, f, n)),
        (e.memoizedState = To),
        a)
      : (Sn(e),
        (n = t.child),
        (t = n.sibling),
        (n = ke(n, { mode: "visible", children: a.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((f = e.deletions),
          f === null ? ((e.deletions = [t]), (e.flags |= 16)) : f.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function Eo(t, e) {
    return (
      (e = cs({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function cs(t, e) {
    return (
      (t = he(22, t, null, e)),
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
  function Mo(t, e, n) {
    return (
      Ba(e, t.child, null, n),
      (t = Eo(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function nd(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Yu(t.return, e, n);
  }
  function xo(t, e, n, a, s) {
    var r = t.memoizedState;
    r === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: n,
          tailMode: s,
        })
      : ((r.isBackwards = e),
        (r.rendering = null),
        (r.renderingStartTime = 0),
        (r.last = a),
        (r.tail = n),
        (r.tailMode = s));
  }
  function ad(t, e, n) {
    var a = e.pendingProps,
      s = a.revealOrder,
      r = a.tail;
    if ((Qt(t, e, a.children, n), (a = wt.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && nd(t, n, e);
          else if (t.tag === 19) nd(t, n, e);
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
      a &= 1;
    }
    switch ((Y(wt, a), s)) {
      case "forwards":
        for (n = e.child, s = null; n !== null; )
          (t = n.alternate),
            t !== null && ss(t) === null && (s = n),
            (n = n.sibling);
        (n = s),
          n === null
            ? ((s = e.child), (e.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          xo(e, !1, s, n, r);
        break;
      case "backwards":
        for (n = null, s = e.child, e.child = null; s !== null; ) {
          if (((t = s.alternate), t !== null && ss(t) === null)) {
            e.child = s;
            break;
          }
          (t = s.sibling), (s.sibling = n), (n = s), (s = t);
        }
        xo(e, !0, n, null, r);
        break;
      case "together":
        xo(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function nn(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (xn |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Ti(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(o(153));
    if (e.child !== null) {
      for (
        t = e.child, n = ke(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (n = n.sibling = ke(t, t.pendingProps)),
          (n.return = e);
      n.sibling = null;
    }
    return e.child;
  }
  function Do(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Zl(t)));
  }
  function k0(t, e, n) {
    switch (e.tag) {
      case 3:
        Mt(e, e.stateNode.containerInfo),
          mn(e, jt, t.memoizedState.cache),
          vi();
        break;
      case 27:
      case 5:
        tu(e);
        break;
      case 4:
        Mt(e, e.stateNode.containerInfo);
        break;
      case 10:
        mn(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (Sn(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
              ? ed(t, e, n)
              : (Sn(e), (t = nn(t, e, n)), t !== null ? t.sibling : null);
        Sn(e);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (
          ((a = (n & e.childLanes) !== 0),
          a || (Ti(t, e, n, !1), (a = (n & e.childLanes) !== 0)),
          s)
        ) {
          if (a) return ad(t, e, n);
          e.flags |= 128;
        }
        if (
          ((s = e.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          Y(wt, wt.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), Fh(t, e, n);
      case 24:
        mn(e, jt, t.memoizedState.cache);
    }
    return nn(t, e, n);
  }
  function id(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Yt = !0;
      else {
        if (!Do(t, n) && (e.flags & 128) === 0) return (Yt = !1), k0(t, e, n);
        Yt = (t.flags & 131072) !== 0;
      }
    else (Yt = !1), mt && (e.flags & 1048576) !== 0 && Bf(e, Xl, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var a = e.elementType,
            s = a._init;
          if (((a = s(a._payload)), (e.type = a), typeof a == "function"))
            Bu(a)
              ? ((t = In(a, t)), (e.tag = 1), (e = Ih(null, e, a, t, n)))
              : ((e.tag = 0), (e = So(null, e, a, t, n)));
          else {
            if (a != null) {
              if (((s = a.$$typeof), s === ot)) {
                (e.tag = 11), (e = Jh(null, e, a, t, n));
                break t;
              } else if (s === ht) {
                (e.tag = 14), (e = Ph(null, e, a, t, n));
                break t;
              }
            }
            throw ((e = Be(a) || a), Error(o(306, e, "")));
          }
        }
        return e;
      case 0:
        return So(t, e, e.type, e.pendingProps, n);
      case 1:
        return (a = e.type), (s = In(a, e.pendingProps)), Ih(t, e, a, s, n);
      case 3:
        t: {
          if ((Mt(e, e.stateNode.containerInfo), t === null))
            throw Error(o(387));
          a = e.pendingProps;
          var r = e.memoizedState;
          (s = r.element), Pu(t, e), Ri(e, a, null, n);
          var f = e.memoizedState;
          if (
            ((a = f.cache),
            mn(e, jt, a),
            a !== r.cache && Gu(e, [jt], n, !0),
            Di(),
            (a = f.element),
            r.isDehydrated)
          )
            if (
              ((r = { element: a, isDehydrated: !1, cache: f.cache }),
              (e.updateQueue.baseState = r),
              (e.memoizedState = r),
              e.flags & 256)
            ) {
              e = td(t, e, a, n);
              break t;
            } else if (a !== s) {
              (s = Te(Error(o(424)), e)), Si(s), (e = td(t, e, a, n));
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
                Ot = Ue(t.firstChild),
                  ee = e,
                  mt = !0,
                  Jn = null,
                  Le = !0,
                  n = Lh(e, null, a, n),
                  e.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
            }
          else {
            if ((vi(), a === s)) {
              e = nn(t, e, n);
              break t;
            }
            Qt(t, e, a, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          rs(t, e),
          t === null
            ? (n = om(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : mt ||
                ((n = e.type),
                (t = e.pendingProps),
                (a = Ms(tt.current).createElement(n)),
                (a[Ft] = e),
                (a[ae] = t),
                Jt(a, n, t),
                qt(a),
                (e.stateNode = a))
            : (e.memoizedState = om(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          tu(e),
          t === null &&
            mt &&
            ((a = e.stateNode = lm(e.type, e.pendingProps, tt.current)),
            (ee = e),
            (Le = !0),
            (s = Ot),
            Vn(e.type) ? ((sr = s), (Ot = Ue(a.firstChild))) : (Ot = s)),
          Qt(t, e, e.pendingProps.children, n),
          rs(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            mt &&
            ((s = a = Ot) &&
              ((a = Ev(a, e.type, e.pendingProps, Le)),
              a !== null
                ? ((e.stateNode = a),
                  (ee = e),
                  (Ot = Ue(a.firstChild)),
                  (Le = !1),
                  (s = !0))
                : (s = !1)),
            s || Pn(e)),
          tu(e),
          (s = e.type),
          (r = e.pendingProps),
          (f = t !== null ? t.memoizedProps : null),
          (a = r.children),
          nr(s, r) ? (a = null) : f !== null && nr(s, f) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((s = to(t, e, Y0, null, null, n)), (ki._currentValue = s)),
          rs(t, e),
          Qt(t, e, a, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            mt &&
            ((t = n = Ot) &&
              ((n = Mv(n, e.pendingProps, Le)),
              n !== null
                ? ((e.stateNode = n), (ee = e), (Ot = null), (t = !0))
                : (t = !1)),
            t || Pn(e)),
          null
        );
      case 13:
        return ed(t, e, n);
      case 4:
        return (
          Mt(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = Ba(e, null, a, n)) : Qt(t, e, a, n),
          e.child
        );
      case 11:
        return Jh(t, e, e.type, e.pendingProps, n);
      case 7:
        return Qt(t, e, e.pendingProps, n), e.child;
      case 8:
        return Qt(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return Qt(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return (
          (a = e.pendingProps),
          mn(e, e.type, a.value),
          Qt(t, e, a.children, n),
          e.child
        );
      case 9:
        return (
          (s = e.type._context),
          (a = e.pendingProps.children),
          Fn(e),
          (s = Wt(s)),
          (a = a(s)),
          (e.flags |= 1),
          Qt(t, e, a, n),
          e.child
        );
      case 14:
        return Ph(t, e, e.type, e.pendingProps, n);
      case 15:
        return kh(t, e, e.type, e.pendingProps, n);
      case 19:
        return ad(t, e, n);
      case 31:
        return (
          (a = e.pendingProps),
          (n = e.mode),
          (a = { mode: a.mode, children: a.children }),
          t === null
            ? ((n = cs(a, n)),
              (n.ref = e.ref),
              (e.child = n),
              (n.return = e),
              (e = n))
            : ((n = ke(t.child, a)),
              (n.ref = e.ref),
              (e.child = n),
              (n.return = e),
              (e = n)),
          e
        );
      case 22:
        return Fh(t, e, n);
      case 24:
        return (
          Fn(e),
          (a = Wt(jt)),
          t === null
            ? ((s = Qu()),
              s === null &&
                ((s = bt),
                (r = Xu()),
                (s.pooledCache = r),
                r.refCount++,
                r !== null && (s.pooledCacheLanes |= n),
                (s = r)),
              (e.memoizedState = { parent: a, cache: s }),
              Ju(e),
              mn(e, jt, s))
            : ((t.lanes & n) !== 0 && (Pu(t, e), Ri(e, null, null, n), Di()),
              (s = t.memoizedState),
              (r = e.memoizedState),
              s.parent !== a
                ? ((s = { parent: a, cache: a }),
                  (e.memoizedState = s),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = s),
                  mn(e, jt, a))
                : ((a = r.cache),
                  mn(e, jt, a),
                  a !== s.cache && Gu(e, [jt], n, !0))),
          Qt(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(o(156, e.tag));
  }
  function an(t) {
    t.flags |= 4;
  }
  function ld(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !dm(e))) {
      if (
        ((e = Me.current),
        e !== null &&
          ((rt & 4194048) === rt
            ? He !== null
            : ((rt & 62914560) !== rt && (rt & 536870912) === 0) || e !== He))
      )
        throw ((Mi = Ku), Gf);
      t.flags |= 8192;
    }
  }
  function fs(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Lc() : 536870912), (t.lanes |= e), (ja |= e));
  }
  function Bi(t, e) {
    if (!mt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), (e = e.sibling);
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), (n = n.sibling);
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Dt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      a = 0;
    if (e)
      for (var s = t.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (a |= s.subtreeFlags & 65011712),
          (a |= s.flags & 65011712),
          (s.return = t),
          (s = s.sibling);
    else
      for (s = t.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (a |= s.subtreeFlags),
          (a |= s.flags),
          (s.return = t),
          (s = s.sibling);
    return (t.subtreeFlags |= a), (t.childLanes = n), e;
  }
  function F0(t, e, n) {
    var a = e.pendingProps;
    switch ((ju(e), e.tag)) {
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
        return Dt(e), null;
      case 1:
        return Dt(e), null;
      case 3:
        return (
          (n = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          Ie(jt),
          cn(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (gi(e)
              ? an(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Hf())),
          Dt(e),
          null
        );
      case 26:
        return (
          (n = e.memoizedState),
          t === null
            ? (an(e),
              n !== null ? (Dt(e), ld(e, n)) : (Dt(e), (e.flags &= -16777217)))
            : n
              ? n !== t.memoizedState
                ? (an(e), Dt(e), ld(e, n))
                : (Dt(e), (e.flags &= -16777217))
              : (t.memoizedProps !== a && an(e), Dt(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        Al(e), (n = tt.current);
        var s = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== a && an(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(o(166));
            return Dt(e), null;
          }
          (t = k.current),
            gi(e) ? Nf(e) : ((t = lm(s, a, n)), (e.stateNode = t), an(e));
        }
        return Dt(e), null;
      case 5:
        if ((Al(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && an(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(o(166));
            return Dt(e), null;
          }
          if (((t = k.current), gi(e))) Nf(e);
          else {
            switch (((s = Ms(tt.current)), t)) {
              case 1:
                t = s.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                t = s.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    t = s.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    t = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    (t = s.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof a.is == "string"
                        ? s.createElement("select", { is: a.is })
                        : s.createElement("select")),
                      a.multiple
                        ? (t.multiple = !0)
                        : a.size && (t.size = a.size);
                    break;
                  default:
                    t =
                      typeof a.is == "string"
                        ? s.createElement(n, { is: a.is })
                        : s.createElement(n);
                }
            }
            (t[Ft] = e), (t[ae] = a);
            t: for (s = e.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6) t.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                (s.child.return = s), (s = s.child);
                continue;
              }
              if (s === e) break t;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === e) break t;
                s = s.return;
              }
              (s.sibling.return = s.return), (s = s.sibling);
            }
            e.stateNode = t;
            t: switch ((Jt(t, n, a), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!a.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && an(e);
          }
        }
        return Dt(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && an(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(o(166));
          if (((t = tt.current), gi(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (a = null),
              (s = ee),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  a = s.memoizedProps;
              }
            (t[Ft] = e),
              (t = !!(
                t.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                $d(t.nodeValue, n)
              )),
              t || Pn(e);
          } else (t = Ms(t).createTextNode(a)), (t[Ft] = e), (e.stateNode = t);
        }
        return Dt(e), null;
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((s = gi(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!s) throw Error(o(318));
              if (
                ((s = e.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(o(317));
              s[Ft] = e;
            } else
              vi(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Dt(e), (s = !1);
          } else
            (s = Hf()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = s),
              (s = !0);
          if (!s) return e.flags & 256 ? (en(e), e) : (en(e), null);
        }
        if ((en(e), (e.flags & 128) !== 0)) return (e.lanes = n), e;
        if (
          ((n = a !== null), (t = t !== null && t.memoizedState !== null), n)
        ) {
          (a = e.child),
            (s = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (s = a.alternate.memoizedState.cachePool.pool);
          var r = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (r = a.memoizedState.cachePool.pool),
            r !== s && (a.flags |= 2048);
        }
        return (
          n !== t && n && (e.child.flags |= 8192),
          fs(e, e.updateQueue),
          Dt(e),
          null
        );
      case 4:
        return cn(), t === null && Wo(e.stateNode.containerInfo), Dt(e), null;
      case 10:
        return Ie(e.type), Dt(e), null;
      case 19:
        if ((X(wt), (s = e.memoizedState), s === null)) return Dt(e), null;
        if (((a = (e.flags & 128) !== 0), (r = s.rendering), r === null))
          if (a) Bi(s, !1);
          else {
            if (Vt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((r = ss(t)), r !== null)) {
                  for (
                    e.flags |= 128,
                      Bi(s, !1),
                      t = r.updateQueue,
                      e.updateQueue = t,
                      fs(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;

                  )
                    _f(n, t), (n = n.sibling);
                  return Y(wt, (wt.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            s.tail !== null &&
              Ne() > ms &&
              ((e.flags |= 128), (a = !0), Bi(s, !1), (e.lanes = 4194304));
          }
        else {
          if (!a)
            if (((t = ss(r)), t !== null)) {
              if (
                ((e.flags |= 128),
                (a = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                fs(e, t),
                Bi(s, !0),
                s.tail === null &&
                  s.tailMode === "hidden" &&
                  !r.alternate &&
                  !mt)
              )
                return Dt(e), null;
            } else
              2 * Ne() - s.renderingStartTime > ms &&
                n !== 536870912 &&
                ((e.flags |= 128), (a = !0), Bi(s, !1), (e.lanes = 4194304));
          s.isBackwards
            ? ((r.sibling = e.child), (e.child = r))
            : ((t = s.last),
              t !== null ? (t.sibling = r) : (e.child = r),
              (s.last = r));
        }
        return s.tail !== null
          ? ((e = s.tail),
            (s.rendering = e),
            (s.tail = e.sibling),
            (s.renderingStartTime = Ne()),
            (e.sibling = null),
            (t = wt.current),
            Y(wt, a ? (t & 1) | 2 : t & 1),
            e)
          : (Dt(e), null);
      case 22:
      case 23:
        return (
          en(e),
          $u(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Dt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Dt(e),
          (n = e.updateQueue),
          n !== null && fs(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== n && (e.flags |= 2048),
          t !== null && X(Wn),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          Ie(jt),
          Dt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, e.tag));
  }
  function W0(t, e) {
    switch ((ju(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          Ie(jt),
          cn(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Al(e), null;
      case 13:
        if (
          (en(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(o(340));
          vi();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return X(wt), null;
      case 4:
        return cn(), null;
      case 10:
        return Ie(e.type), null;
      case 22:
      case 23:
        return (
          en(e),
          $u(),
          t !== null && X(Wn),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return Ie(jt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function sd(t, e) {
    switch ((ju(e), e.tag)) {
      case 3:
        Ie(jt), cn();
        break;
      case 26:
      case 27:
      case 5:
        Al(e);
        break;
      case 4:
        cn();
        break;
      case 13:
        en(e);
        break;
      case 19:
        X(wt);
        break;
      case 10:
        Ie(e.type);
        break;
      case 22:
      case 23:
        en(e), $u(), t !== null && X(Wn);
        break;
      case 24:
        Ie(jt);
    }
  }
  function Ni(t, e) {
    try {
      var n = e.updateQueue,
        a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var s = a.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            a = void 0;
            var r = n.create,
              f = n.inst;
            (a = r()), (f.destroy = a);
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (y) {
      Tt(e, e.return, y);
    }
  }
  function bn(t, e, n) {
    try {
      var a = e.updateQueue,
        s = a !== null ? a.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        a = r;
        do {
          if ((a.tag & t) === t) {
            var f = a.inst,
              y = f.destroy;
            if (y !== void 0) {
              (f.destroy = void 0), (s = e);
              var S = n,
                D = y;
              try {
                D();
              } catch (C) {
                Tt(s, S, C);
              }
            }
          }
          a = a.next;
        } while (a !== r);
      }
    } catch (C) {
      Tt(e, e.return, C);
    }
  }
  function ud(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Pf(e, n);
      } catch (a) {
        Tt(t, t.return, a);
      }
    }
  }
  function od(t, e, n) {
    (n.props = In(t.type, t.memoizedProps)), (n.state = t.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (a) {
      Tt(t, e, a);
    }
  }
  function Li(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(a)) : (n.current = a);
      }
    } catch (s) {
      Tt(t, e, s);
    }
  }
  function je(t, e) {
    var n = t.ref,
      a = t.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (s) {
          Tt(t, e, s);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          Tt(t, e, s);
        }
      else n.current = null;
  }
  function rd(t) {
    var e = t.type,
      n = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break t;
        case "img":
          n.src ? (a.src = n.src) : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (s) {
      Tt(t, t.return, s);
    }
  }
  function Ro(t, e, n) {
    try {
      var a = t.stateNode;
      vv(a, t.type, n, e), (a[ae] = e);
    } catch (s) {
      Tt(t, t.return, s);
    }
  }
  function cd(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Vn(t.type)) ||
      t.tag === 4
    );
  }
  function Oo(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || cd(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && Vn(t.type)) ||
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
  function Vo(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
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
            n != null || e.onclick !== null || (e.onclick = Es));
    else if (
      a !== 4 &&
      (a === 27 && Vn(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Vo(t, e, n), t = t.sibling; t !== null; )
        Vo(t, e, n), (t = t.sibling);
  }
  function hs(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (
      a !== 4 &&
      (a === 27 && Vn(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (hs(t, e, n), t = t.sibling; t !== null; )
        hs(t, e, n), (t = t.sibling);
  }
  function fd(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var a = t.type, s = e.attributes; s.length; )
        e.removeAttributeNode(s[0]);
      Jt(e, a, n), (e[Ft] = t), (e[ae] = n);
    } catch (r) {
      Tt(t, t.return, r);
    }
  }
  var ln = !1,
    Ut = !1,
    Co = !1,
    hd = typeof WeakSet == "function" ? WeakSet : Set,
    Gt = null;
  function $0(t, e) {
    if (((t = t.containerInfo), (tr = Cs), (t = Ef(t)), Ru(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var s = a.anchorOffset,
              r = a.focusNode;
            a = a.focusOffset;
            try {
              n.nodeType, r.nodeType;
            } catch {
              n = null;
              break t;
            }
            var f = 0,
              y = -1,
              S = -1,
              D = 0,
              C = 0,
              _ = t,
              R = null;
            e: for (;;) {
              for (
                var O;
                _ !== n || (s !== 0 && _.nodeType !== 3) || (y = f + s),
                  _ !== r || (a !== 0 && _.nodeType !== 3) || (S = f + a),
                  _.nodeType === 3 && (f += _.nodeValue.length),
                  (O = _.firstChild) !== null;

              )
                (R = _), (_ = O);
              for (;;) {
                if (_ === t) break e;
                if (
                  (R === n && ++D === s && (y = f),
                  R === r && ++C === a && (S = f),
                  (O = _.nextSibling) !== null)
                )
                  break;
                (_ = R), (R = _.parentNode);
              }
              _ = O;
            }
            n = y === -1 || S === -1 ? null : { start: y, end: S };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      er = { focusedElem: t, selectionRange: n }, Cs = !1, Gt = e;
      Gt !== null;

    )
      if (
        ((e = Gt), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = e), (Gt = t);
      else
        for (; Gt !== null; ) {
          switch (((e = Gt), (r = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && r !== null) {
                (t = void 0),
                  (n = e),
                  (s = r.memoizedProps),
                  (r = r.memoizedState),
                  (a = n.stateNode);
                try {
                  var I = In(n.type, s, n.elementType === n.type);
                  (t = a.getSnapshotBeforeUpdate(I, r)),
                    (a.__reactInternalSnapshotBeforeUpdate = t);
                } catch (F) {
                  Tt(n, n.return, F);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  ir(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ir(t);
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
              if ((t & 1024) !== 0) throw Error(o(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (Gt = t);
            break;
          }
          Gt = e.return;
        }
  }
  function dd(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        An(t, n), a & 4 && Ni(5, n);
        break;
      case 1:
        if ((An(t, n), a & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (f) {
              Tt(n, n.return, f);
            }
          else {
            var s = In(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              Tt(n, n.return, f);
            }
          }
        a & 64 && ud(n), a & 512 && Li(n, n.return);
        break;
      case 3:
        if ((An(t, n), a & 64 && ((t = n.updateQueue), t !== null))) {
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
            Pf(t, e);
          } catch (f) {
            Tt(n, n.return, f);
          }
        }
        break;
      case 27:
        e === null && a & 4 && fd(n);
      case 26:
      case 5:
        An(t, n), e === null && a & 4 && rd(n), a & 512 && Li(n, n.return);
        break;
      case 12:
        An(t, n);
        break;
      case 13:
        An(t, n),
          a & 4 && pd(t, n),
          a & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = uv.bind(null, n)), xv(t, n))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || ln), !a)) {
          (e = (e !== null && e.memoizedState !== null) || Ut), (s = ln);
          var r = Ut;
          (ln = a),
            (Ut = e) && !r ? En(t, n, (n.subtreeFlags & 8772) !== 0) : An(t, n),
            (ln = s),
            (Ut = r);
        }
        break;
      case 30:
        break;
      default:
        An(t, n);
    }
  }
  function md(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), md(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && ou(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var xt = null,
    se = !1;
  function sn(t, e, n) {
    for (n = n.child; n !== null; ) yd(t, e, n), (n = n.sibling);
  }
  function yd(t, e, n) {
    if (re && typeof re.onCommitFiberUnmount == "function")
      try {
        re.onCommitFiberUnmount(ai, n);
      } catch {}
    switch (n.tag) {
      case 26:
        Ut || je(n, e),
          sn(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        Ut || je(n, e);
        var a = xt,
          s = se;
        Vn(n.type) && ((xt = n.stateNode), (se = !1)),
          sn(t, e, n),
          Qi(n.stateNode),
          (xt = a),
          (se = s);
        break;
      case 5:
        Ut || je(n, e);
      case 6:
        if (
          ((a = xt),
          (s = se),
          (xt = null),
          sn(t, e, n),
          (xt = a),
          (se = s),
          xt !== null)
        )
          if (se)
            try {
              (xt.nodeType === 9
                ? xt.body
                : xt.nodeName === "HTML"
                  ? xt.ownerDocument.body
                  : xt
              ).removeChild(n.stateNode);
            } catch (r) {
              Tt(n, e, r);
            }
          else
            try {
              xt.removeChild(n.stateNode);
            } catch (r) {
              Tt(n, e, r);
            }
        break;
      case 18:
        xt !== null &&
          (se
            ? ((t = xt),
              am(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                n.stateNode
              ),
              Ii(t))
            : am(xt, n.stateNode));
        break;
      case 4:
        (a = xt),
          (s = se),
          (xt = n.stateNode.containerInfo),
          (se = !0),
          sn(t, e, n),
          (xt = a),
          (se = s);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ut || bn(2, n, e), Ut || bn(4, n, e), sn(t, e, n);
        break;
      case 1:
        Ut ||
          (je(n, e),
          (a = n.stateNode),
          typeof a.componentWillUnmount == "function" && od(n, e, a)),
          sn(t, e, n);
        break;
      case 21:
        sn(t, e, n);
        break;
      case 22:
        (Ut = (a = Ut) || n.memoizedState !== null), sn(t, e, n), (Ut = a);
        break;
      default:
        sn(t, e, n);
    }
  }
  function pd(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Ii(t);
      } catch (n) {
        Tt(e, e.return, n);
      }
  }
  function I0(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new hd()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new hd()),
          e
        );
      default:
        throw Error(o(435, t.tag));
    }
  }
  function zo(t, e) {
    var n = I0(t);
    e.forEach(function (a) {
      var s = ov.bind(null, t, a);
      n.has(a) || (n.add(a), a.then(s, s));
    });
  }
  function de(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var s = n[a],
          r = t,
          f = e,
          y = f;
        t: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (Vn(y.type)) {
                (xt = y.stateNode), (se = !1);
                break t;
              }
              break;
            case 5:
              (xt = y.stateNode), (se = !1);
              break t;
            case 3:
            case 4:
              (xt = y.stateNode.containerInfo), (se = !0);
              break t;
          }
          y = y.return;
        }
        if (xt === null) throw Error(o(160));
        yd(r, f, s),
          (xt = null),
          (se = !1),
          (r = s.alternate),
          r !== null && (r.return = null),
          (s.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) gd(e, t), (e = e.sibling);
  }
  var ze = null;
  function gd(t, e) {
    var n = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        de(e, t),
          me(t),
          a & 4 && (bn(3, t, t.return), Ni(3, t), bn(5, t, t.return));
        break;
      case 1:
        de(e, t),
          me(t),
          a & 512 && (Ut || n === null || je(n, n.return)),
          a & 64 &&
            ln &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? a : n.concat(a)))));
        break;
      case 26:
        var s = ze;
        if (
          (de(e, t),
          me(t),
          a & 512 && (Ut || n === null || je(n, n.return)),
          a & 4)
        ) {
          var r = n !== null ? n.memoizedState : null;
          if (((a = t.memoizedState), n === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  (a = t.type),
                    (n = t.memoizedProps),
                    (s = s.ownerDocument || s);
                  e: switch (a) {
                    case "title":
                      (r = s.getElementsByTagName("title")[0]),
                        (!r ||
                          r[si] ||
                          r[Ft] ||
                          r.namespaceURI === "http://www.w3.org/2000/svg" ||
                          r.hasAttribute("itemprop")) &&
                          ((r = s.createElement(a)),
                          s.head.insertBefore(
                            r,
                            s.querySelector("head > title")
                          )),
                        Jt(r, a, n),
                        (r[Ft] = t),
                        qt(r),
                        (a = r);
                      break t;
                    case "link":
                      var f = fm("link", "href", s).get(a + (n.href || ""));
                      if (f) {
                        for (var y = 0; y < f.length; y++)
                          if (
                            ((r = f[y]),
                            r.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              r.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              r.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              r.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            f.splice(y, 1);
                            break e;
                          }
                      }
                      (r = s.createElement(a)),
                        Jt(r, a, n),
                        s.head.appendChild(r);
                      break;
                    case "meta":
                      if (
                        (f = fm("meta", "content", s).get(
                          a + (n.content || "")
                        ))
                      ) {
                        for (y = 0; y < f.length; y++)
                          if (
                            ((r = f[y]),
                            r.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              r.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              r.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              r.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              r.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            f.splice(y, 1);
                            break e;
                          }
                      }
                      (r = s.createElement(a)),
                        Jt(r, a, n),
                        s.head.appendChild(r);
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  (r[Ft] = t), qt(r), (a = r);
                }
                t.stateNode = a;
              } else hm(s, t.type, t.stateNode);
            else t.stateNode = cm(s, a, t.memoizedProps);
          else
            r !== a
              ? (r === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : r.count--,
                a === null
                  ? hm(s, t.type, t.stateNode)
                  : cm(s, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                Ro(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        de(e, t),
          me(t),
          a & 512 && (Ut || n === null || je(n, n.return)),
          n !== null && a & 4 && Ro(t, t.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (
          (de(e, t),
          me(t),
          a & 512 && (Ut || n === null || je(n, n.return)),
          t.flags & 32)
        ) {
          s = t.stateNode;
          try {
            pa(s, "");
          } catch (O) {
            Tt(t, t.return, O);
          }
        }
        a & 4 &&
          t.stateNode != null &&
          ((s = t.memoizedProps), Ro(t, s, n !== null ? n.memoizedProps : s)),
          a & 1024 && (Co = !0);
        break;
      case 6:
        if ((de(e, t), me(t), a & 4)) {
          if (t.stateNode === null) throw Error(o(162));
          (a = t.memoizedProps), (n = t.stateNode);
          try {
            n.nodeValue = a;
          } catch (O) {
            Tt(t, t.return, O);
          }
        }
        break;
      case 3:
        if (
          ((Rs = null),
          (s = ze),
          (ze = xs(e.containerInfo)),
          de(e, t),
          (ze = s),
          me(t),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Ii(e.containerInfo);
          } catch (O) {
            Tt(t, t.return, O);
          }
        Co && ((Co = !1), vd(t));
        break;
      case 4:
        (a = ze),
          (ze = xs(t.stateNode.containerInfo)),
          de(e, t),
          me(t),
          (ze = a);
        break;
      case 12:
        de(e, t), me(t);
        break;
      case 13:
        de(e, t),
          me(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (Ho = Ne()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), zo(t, a)));
        break;
      case 22:
        s = t.memoizedState !== null;
        var S = n !== null && n.memoizedState !== null,
          D = ln,
          C = Ut;
        if (
          ((ln = D || s),
          (Ut = C || S),
          de(e, t),
          (Ut = C),
          (ln = D),
          me(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = s ? e._visibility & -2 : e._visibility | 1,
              s && (n === null || S || ln || Ut || ta(t)),
              n = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                S = n = e;
                try {
                  if (((r = S.stateNode), s))
                    (f = r.style),
                      typeof f.setProperty == "function"
                        ? f.setProperty("display", "none", "important")
                        : (f.display = "none");
                  else {
                    y = S.stateNode;
                    var _ = S.memoizedProps.style,
                      R =
                        _ != null && _.hasOwnProperty("display")
                          ? _.display
                          : null;
                    y.style.display =
                      R == null || typeof R == "boolean" ? "" : ("" + R).trim();
                  }
                } catch (O) {
                  Tt(S, S.return, O);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                S = e;
                try {
                  S.stateNode.nodeValue = s ? "" : S.memoizedProps;
                } catch (O) {
                  Tt(S, S.return, O);
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
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((n = a.retryQueue),
            n !== null && ((a.retryQueue = null), zo(t, n))));
        break;
      case 19:
        de(e, t),
          me(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), zo(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        de(e, t), me(t);
    }
  }
  function me(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, a = t.return; a !== null; ) {
          if (cd(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode,
              r = Oo(t);
            hs(t, r, s);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (pa(f, ""), (n.flags &= -33));
            var y = Oo(t);
            hs(t, y, f);
            break;
          case 3:
          case 4:
            var S = n.stateNode.containerInfo,
              D = Oo(t);
            Vo(t, D, S);
            break;
          default:
            throw Error(o(161));
        }
      } catch (C) {
        Tt(t, t.return, C);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function vd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        vd(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function An(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) dd(t, e.alternate, e), (e = e.sibling);
  }
  function ta(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          bn(4, e, e.return), ta(e);
          break;
        case 1:
          je(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && od(e, e.return, n),
            ta(e);
          break;
        case 27:
          Qi(e.stateNode);
        case 26:
        case 5:
          je(e, e.return), ta(e);
          break;
        case 22:
          e.memoizedState === null && ta(e);
          break;
        case 30:
          ta(e);
          break;
        default:
          ta(e);
      }
      t = t.sibling;
    }
  }
  function En(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        s = t,
        r = e,
        f = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          En(s, r, n), Ni(4, r);
          break;
        case 1:
          if (
            (En(s, r, n),
            (a = r),
            (s = a.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (D) {
              Tt(a, a.return, D);
            }
          if (((a = r), (s = a.updateQueue), s !== null)) {
            var y = a.stateNode;
            try {
              var S = s.shared.hiddenCallbacks;
              if (S !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < S.length; s++)
                  Jf(S[s], y);
            } catch (D) {
              Tt(a, a.return, D);
            }
          }
          n && f & 64 && ud(r), Li(r, r.return);
          break;
        case 27:
          fd(r);
        case 26:
        case 5:
          En(s, r, n), n && a === null && f & 4 && rd(r), Li(r, r.return);
          break;
        case 12:
          En(s, r, n);
          break;
        case 13:
          En(s, r, n), n && f & 4 && pd(s, r);
          break;
        case 22:
          r.memoizedState === null && En(s, r, n), Li(r, r.return);
          break;
        case 30:
          break;
        default:
          En(s, r, n);
      }
      e = e.sibling;
    }
  }
  function Uo(t, e) {
    var n = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && bi(n));
  }
  function _o(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && bi(t));
  }
  function we(t, e, n, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Sd(t, e, n, a), (e = e.sibling);
  }
  function Sd(t, e, n, a) {
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        we(t, e, n, a), s & 2048 && Ni(9, e);
        break;
      case 1:
        we(t, e, n, a);
        break;
      case 3:
        we(t, e, n, a),
          s & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && bi(t)));
        break;
      case 12:
        if (s & 2048) {
          we(t, e, n, a), (t = e.stateNode);
          try {
            var r = e.memoizedProps,
              f = r.id,
              y = r.onPostCommit;
            typeof y == "function" &&
              y(
                f,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (S) {
            Tt(e, e.return, S);
          }
        } else we(t, e, n, a);
        break;
      case 13:
        we(t, e, n, a);
        break;
      case 23:
        break;
      case 22:
        (r = e.stateNode),
          (f = e.alternate),
          e.memoizedState !== null
            ? r._visibility & 2
              ? we(t, e, n, a)
              : Hi(t, e)
            : r._visibility & 2
              ? we(t, e, n, a)
              : ((r._visibility |= 2),
                Na(t, e, n, a, (e.subtreeFlags & 10256) !== 0)),
          s & 2048 && Uo(f, e);
        break;
      case 24:
        we(t, e, n, a), s & 2048 && _o(e.alternate, e);
        break;
      default:
        we(t, e, n, a);
    }
  }
  function Na(t, e, n, a, s) {
    for (s = s && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var r = t,
        f = e,
        y = n,
        S = a,
        D = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Na(r, f, y, S, s), Ni(8, f);
          break;
        case 23:
          break;
        case 22:
          var C = f.stateNode;
          f.memoizedState !== null
            ? C._visibility & 2
              ? Na(r, f, y, S, s)
              : Hi(r, f)
            : ((C._visibility |= 2), Na(r, f, y, S, s)),
            s && D & 2048 && Uo(f.alternate, f);
          break;
        case 24:
          Na(r, f, y, S, s), s && D & 2048 && _o(f.alternate, f);
          break;
        default:
          Na(r, f, y, S, s);
      }
      e = e.sibling;
    }
  }
  function Hi(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          a = e,
          s = a.flags;
        switch (a.tag) {
          case 22:
            Hi(n, a), s & 2048 && Uo(a.alternate, a);
            break;
          case 24:
            Hi(n, a), s & 2048 && _o(a.alternate, a);
            break;
          default:
            Hi(n, a);
        }
        e = e.sibling;
      }
  }
  var ji = 8192;
  function La(t) {
    if (t.subtreeFlags & ji)
      for (t = t.child; t !== null; ) Td(t), (t = t.sibling);
  }
  function Td(t) {
    switch (t.tag) {
      case 26:
        La(t),
          t.flags & ji &&
            t.memoizedState !== null &&
            jv(ze, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        La(t);
        break;
      case 3:
      case 4:
        var e = ze;
        (ze = xs(t.stateNode.containerInfo)), La(t), (ze = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = ji), (ji = 16777216), La(t), (ji = e))
            : La(t));
        break;
      default:
        La(t);
    }
  }
  function bd(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function wi(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          (Gt = a), Ed(a, t);
        }
      bd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Ad(t), (t = t.sibling);
  }
  function Ad(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        wi(t), t.flags & 2048 && bn(9, t, t.return);
        break;
      case 3:
        wi(t);
        break;
      case 12:
        wi(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), ds(t))
          : wi(t);
        break;
      default:
        wi(t);
    }
  }
  function ds(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          (Gt = a), Ed(a, t);
        }
      bd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          bn(8, e, e.return), ds(e);
          break;
        case 22:
          (n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), ds(e));
          break;
        default:
          ds(e);
      }
      t = t.sibling;
    }
  }
  function Ed(t, e) {
    for (; Gt !== null; ) {
      var n = Gt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          bn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          bi(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) (a.return = n), (Gt = a);
      else
        t: for (n = t; Gt !== null; ) {
          a = Gt;
          var s = a.sibling,
            r = a.return;
          if ((md(a), a === n)) {
            Gt = null;
            break t;
          }
          if (s !== null) {
            (s.return = r), (Gt = s);
            break t;
          }
          Gt = r;
        }
    }
  }
  var tv = {
      getCacheForType: function (t) {
        var e = Wt(jt),
          n = e.data.get(t);
        return n === void 0 && ((n = t()), e.data.set(t, n)), n;
      },
    },
    ev = typeof WeakMap == "function" ? WeakMap : Map,
    yt = 0,
    bt = null,
    st = null,
    rt = 0,
    pt = 0,
    ye = null,
    Mn = !1,
    Ha = !1,
    Bo = !1,
    un = 0,
    Vt = 0,
    xn = 0,
    ea = 0,
    No = 0,
    xe = 0,
    ja = 0,
    qi = null,
    ue = null,
    Lo = !1,
    Ho = 0,
    ms = 1 / 0,
    ys = null,
    Dn = null,
    Kt = 0,
    Rn = null,
    wa = null,
    qa = 0,
    jo = 0,
    wo = null,
    Md = null,
    Yi = 0,
    qo = null;
  function pe() {
    if ((yt & 2) !== 0 && rt !== 0) return rt & -rt;
    if (z.T !== null) {
      var t = Ra;
      return t !== 0 ? t : Jo();
    }
    return wc();
  }
  function xd() {
    xe === 0 && (xe = (rt & 536870912) === 0 || mt ? Nc() : 536870912);
    var t = Me.current;
    return t !== null && (t.flags |= 32), xe;
  }
  function ge(t, e, n) {
    ((t === bt && (pt === 2 || pt === 9)) || t.cancelPendingCommit !== null) &&
      (Ya(t, 0), On(t, rt, xe, !1)),
      li(t, n),
      ((yt & 2) === 0 || t !== bt) &&
        (t === bt &&
          ((yt & 2) === 0 && (ea |= n), Vt === 4 && On(t, rt, xe, !1)),
        qe(t));
  }
  function Dd(t, e, n) {
    if ((yt & 6) !== 0) throw Error(o(327));
    var a = (!n && (e & 124) === 0 && (e & t.expiredLanes) === 0) || ii(t, e),
      s = a ? iv(t, e) : Xo(t, e, !0),
      r = a;
    do {
      if (s === 0) {
        Ha && !a && On(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), r && !nv(n))) {
          (s = Xo(t, e, !1)), (r = !1);
          continue;
        }
        if (s === 2) {
          if (((r = e), t.errorRecoveryDisabledLanes & r)) var f = 0;
          else
            (f = t.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0);
          if (f !== 0) {
            e = f;
            t: {
              var y = t;
              s = qi;
              var S = y.current.memoizedState.isDehydrated;
              if ((S && (Ya(y, f).flags |= 256), (f = Xo(y, f, !1)), f !== 2)) {
                if (Bo && !S) {
                  (y.errorRecoveryDisabledLanes |= r), (ea |= r), (s = 4);
                  break t;
                }
                (r = ue),
                  (ue = s),
                  r !== null && (ue === null ? (ue = r) : ue.push.apply(ue, r));
              }
              s = f;
            }
            if (((r = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          Ya(t, 0), On(t, e, 0, !0);
          break;
        }
        t: {
          switch (((a = t), (r = s), r)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              On(a, e, xe, !Mn);
              break t;
            case 2:
              ue = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((e & 62914560) === e && ((s = Ho + 300 - Ne()), 10 < s)) {
            if ((On(a, e, xe, !Mn), Dl(a, 0, !0) !== 0)) break t;
            a.timeoutHandle = em(
              Rd.bind(null, a, n, ue, ys, Lo, e, xe, ea, ja, Mn, r, 2, -0, 0),
              s
            );
            break t;
          }
          Rd(a, n, ue, ys, Lo, e, xe, ea, ja, Mn, r, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    qe(t);
  }
  function Rd(t, e, n, a, s, r, f, y, S, D, C, _, R, O) {
    if (
      ((t.timeoutHandle = -1),
      (_ = e.subtreeFlags),
      (_ & 8192 || (_ & 16785408) === 16785408) &&
        ((Pi = { stylesheets: null, count: 0, unsuspend: Hv }),
        Td(e),
        (_ = wv()),
        _ !== null))
    ) {
      (t.cancelPendingCommit = _(
        Bd.bind(null, t, e, r, n, a, s, f, y, S, C, 1, R, O)
      )),
        On(t, r, f, !D);
      return;
    }
    Bd(t, e, r, n, a, s, f, y, S);
  }
  function nv(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var a = 0; a < n.length; a++) {
          var s = n[a],
            r = s.getSnapshot;
          s = s.value;
          try {
            if (!fe(r(), s)) return !1;
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
  function On(t, e, n, a) {
    (e &= ~No),
      (e &= ~ea),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes);
    for (var s = e; 0 < s; ) {
      var r = 31 - ce(s),
        f = 1 << r;
      (a[r] = -1), (s &= ~f);
    }
    n !== 0 && Hc(t, n, e);
  }
  function ps() {
    return (yt & 6) === 0 ? (Gi(0), !1) : !0;
  }
  function Yo() {
    if (st !== null) {
      if (pt === 0) var t = st.return;
      else (t = st), ($e = kn = null), ao(t), (_a = null), (Ui = 0), (t = st);
      for (; t !== null; ) sd(t.alternate, t), (t = t.return);
      st = null;
    }
  }
  function Ya(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && ((t.timeoutHandle = -1), Tv(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      Yo(),
      (bt = t),
      (st = n = ke(t.current, null)),
      (rt = e),
      (pt = 0),
      (ye = null),
      (Mn = !1),
      (Ha = ii(t, e)),
      (Bo = !1),
      (ja = xe = No = ea = xn = Vt = 0),
      (ue = qi = null),
      (Lo = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var s = 31 - ce(a),
          r = 1 << s;
        (e |= t[s]), (a &= ~r);
      }
    return (un = e), jl(), n;
  }
  function Od(t, e) {
    (it = null),
      (z.H = as),
      e === Ei || e === Jl
        ? ((e = Qf()), (pt = 3))
        : e === Gf
          ? ((e = Qf()), (pt = 4))
          : (pt =
              e === Kh
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (ye = e),
      st === null && ((Vt = 1), os(t, Te(e, t.current)));
  }
  function Vd() {
    var t = z.H;
    return (z.H = as), t === null ? as : t;
  }
  function Cd() {
    var t = z.A;
    return (z.A = tv), t;
  }
  function Go() {
    (Vt = 4),
      Mn || ((rt & 4194048) !== rt && Me.current !== null) || (Ha = !0),
      ((xn & 134217727) === 0 && (ea & 134217727) === 0) ||
        bt === null ||
        On(bt, rt, xe, !1);
  }
  function Xo(t, e, n) {
    var a = yt;
    yt |= 2;
    var s = Vd(),
      r = Cd();
    (bt !== t || rt !== e) && ((ys = null), Ya(t, e)), (e = !1);
    var f = Vt;
    t: do
      try {
        if (pt !== 0 && st !== null) {
          var y = st,
            S = ye;
          switch (pt) {
            case 8:
              Yo(), (f = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Me.current === null && (e = !0);
              var D = pt;
              if (((pt = 0), (ye = null), Ga(t, y, S, D), n && Ha)) {
                f = 0;
                break t;
              }
              break;
            default:
              (D = pt), (pt = 0), (ye = null), Ga(t, y, S, D);
          }
        }
        av(), (f = Vt);
        break;
      } catch (C) {
        Od(t, C);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      ($e = kn = null),
      (yt = a),
      (z.H = s),
      (z.A = r),
      st === null && ((bt = null), (rt = 0), jl()),
      f
    );
  }
  function av() {
    for (; st !== null; ) zd(st);
  }
  function iv(t, e) {
    var n = yt;
    yt |= 2;
    var a = Vd(),
      s = Cd();
    bt !== t || rt !== e
      ? ((ys = null), (ms = Ne() + 500), Ya(t, e))
      : (Ha = ii(t, e));
    t: do
      try {
        if (pt !== 0 && st !== null) {
          e = st;
          var r = ye;
          e: switch (pt) {
            case 1:
              (pt = 0), (ye = null), Ga(t, e, r, 1);
              break;
            case 2:
            case 9:
              if (Xf(r)) {
                (pt = 0), (ye = null), Ud(e);
                break;
              }
              (e = function () {
                (pt !== 2 && pt !== 9) || bt !== t || (pt = 7), qe(t);
              }),
                r.then(e, e);
              break t;
            case 3:
              pt = 7;
              break t;
            case 4:
              pt = 5;
              break t;
            case 7:
              Xf(r)
                ? ((pt = 0), (ye = null), Ud(e))
                : ((pt = 0), (ye = null), Ga(t, e, r, 7));
              break;
            case 5:
              var f = null;
              switch (st.tag) {
                case 26:
                  f = st.memoizedState;
                case 5:
                case 27:
                  var y = st;
                  if (!f || dm(f)) {
                    (pt = 0), (ye = null);
                    var S = y.sibling;
                    if (S !== null) st = S;
                    else {
                      var D = y.return;
                      D !== null ? ((st = D), gs(D)) : (st = null);
                    }
                    break e;
                  }
              }
              (pt = 0), (ye = null), Ga(t, e, r, 5);
              break;
            case 6:
              (pt = 0), (ye = null), Ga(t, e, r, 6);
              break;
            case 8:
              Yo(), (Vt = 6);
              break t;
            default:
              throw Error(o(462));
          }
        }
        lv();
        break;
      } catch (C) {
        Od(t, C);
      }
    while (!0);
    return (
      ($e = kn = null),
      (z.H = a),
      (z.A = s),
      (yt = n),
      st !== null ? 0 : ((bt = null), (rt = 0), jl(), Vt)
    );
  }
  function lv() {
    for (; st !== null && !Rg(); ) zd(st);
  }
  function zd(t) {
    var e = id(t.alternate, t, un);
    (t.memoizedProps = t.pendingProps), e === null ? gs(t) : (st = e);
  }
  function Ud(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = $h(n, e, e.pendingProps, e.type, void 0, rt);
        break;
      case 11:
        e = $h(n, e, e.pendingProps, e.type.render, e.ref, rt);
        break;
      case 5:
        ao(e);
      default:
        sd(n, e), (e = st = _f(e, un)), (e = id(n, e, un));
    }
    (t.memoizedProps = t.pendingProps), e === null ? gs(t) : (st = e);
  }
  function Ga(t, e, n, a) {
    ($e = kn = null), ao(e), (_a = null), (Ui = 0);
    var s = e.return;
    try {
      if (P0(t, s, e, n, rt)) {
        (Vt = 1), os(t, Te(n, t.current)), (st = null);
        return;
      }
    } catch (r) {
      if (s !== null) throw ((st = s), r);
      (Vt = 1), os(t, Te(n, t.current)), (st = null);
      return;
    }
    e.flags & 32768
      ? (mt || a === 1
          ? (t = !0)
          : Ha || (rt & 536870912) !== 0
            ? (t = !1)
            : ((Mn = t = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = Me.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        _d(e, t))
      : gs(e);
  }
  function gs(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        _d(e, Mn);
        return;
      }
      t = e.return;
      var n = F0(e.alternate, e, un);
      if (n !== null) {
        st = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        st = e;
        return;
      }
      st = e = t;
    } while (e !== null);
    Vt === 0 && (Vt = 5);
  }
  function _d(t, e) {
    do {
      var n = W0(t.alternate, t);
      if (n !== null) {
        (n.flags &= 32767), (st = n);
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        st = t;
        return;
      }
      st = t = n;
    } while (t !== null);
    (Vt = 6), (st = null);
  }
  function Bd(t, e, n, a, s, r, f, y, S) {
    t.cancelPendingCommit = null;
    do vs();
    while (Kt !== 0);
    if ((yt & 6) !== 0) throw Error(o(327));
    if (e !== null) {
      if (e === t.current) throw Error(o(177));
      if (
        ((r = e.lanes | e.childLanes),
        (r |= Uu),
        Hg(t, n, r, f, y, S),
        t === bt && ((st = bt = null), (rt = 0)),
        (wa = e),
        (Rn = t),
        (qa = n),
        (jo = r),
        (wo = s),
        (Md = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            rv(El, function () {
              return wd(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = z.T), (z.T = null), (s = L.p), (L.p = 2), (f = yt), (yt |= 4);
        try {
          $0(t, e, n);
        } finally {
          (yt = f), (L.p = s), (z.T = a);
        }
      }
      (Kt = 1), Nd(), Ld(), Hd();
    }
  }
  function Nd() {
    if (Kt === 1) {
      Kt = 0;
      var t = Rn,
        e = wa,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        (n = z.T), (z.T = null);
        var a = L.p;
        L.p = 2;
        var s = yt;
        yt |= 4;
        try {
          gd(e, t);
          var r = er,
            f = Ef(t.containerInfo),
            y = r.focusedElem,
            S = r.selectionRange;
          if (
            f !== y &&
            y &&
            y.ownerDocument &&
            Af(y.ownerDocument.documentElement, y)
          ) {
            if (S !== null && Ru(y)) {
              var D = S.start,
                C = S.end;
              if ((C === void 0 && (C = D), "selectionStart" in y))
                (y.selectionStart = D),
                  (y.selectionEnd = Math.min(C, y.value.length));
              else {
                var _ = y.ownerDocument || document,
                  R = (_ && _.defaultView) || window;
                if (R.getSelection) {
                  var O = R.getSelection(),
                    I = y.textContent.length,
                    F = Math.min(S.start, I),
                    St = S.end === void 0 ? F : Math.min(S.end, I);
                  !O.extend && F > St && ((f = St), (St = F), (F = f));
                  var E = bf(y, F),
                    A = bf(y, St);
                  if (
                    E &&
                    A &&
                    (O.rangeCount !== 1 ||
                      O.anchorNode !== E.node ||
                      O.anchorOffset !== E.offset ||
                      O.focusNode !== A.node ||
                      O.focusOffset !== A.offset)
                  ) {
                    var M = _.createRange();
                    M.setStart(E.node, E.offset),
                      O.removeAllRanges(),
                      F > St
                        ? (O.addRange(M), O.extend(A.node, A.offset))
                        : (M.setEnd(A.node, A.offset), O.addRange(M));
                  }
                }
              }
            }
            for (_ = [], O = y; (O = O.parentNode); )
              O.nodeType === 1 &&
                _.push({ element: O, left: O.scrollLeft, top: O.scrollTop });
            for (
              typeof y.focus == "function" && y.focus(), y = 0;
              y < _.length;
              y++
            ) {
              var U = _[y];
              (U.element.scrollLeft = U.left), (U.element.scrollTop = U.top);
            }
          }
          (Cs = !!tr), (er = tr = null);
        } finally {
          (yt = s), (L.p = a), (z.T = n);
        }
      }
      (t.current = e), (Kt = 2);
    }
  }
  function Ld() {
    if (Kt === 2) {
      Kt = 0;
      var t = Rn,
        e = wa,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        (n = z.T), (z.T = null);
        var a = L.p;
        L.p = 2;
        var s = yt;
        yt |= 4;
        try {
          dd(t, e.alternate, e);
        } finally {
          (yt = s), (L.p = a), (z.T = n);
        }
      }
      Kt = 3;
    }
  }
  function Hd() {
    if (Kt === 4 || Kt === 3) {
      (Kt = 0), Og();
      var t = Rn,
        e = wa,
        n = qa,
        a = Md;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Kt = 5)
        : ((Kt = 0), (wa = Rn = null), jd(t, t.pendingLanes));
      var s = t.pendingLanes;
      if (
        (s === 0 && (Dn = null),
        su(n),
        (e = e.stateNode),
        re && typeof re.onCommitFiberRoot == "function")
      )
        try {
          re.onCommitFiberRoot(ai, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (e = z.T), (s = L.p), (L.p = 2), (z.T = null);
        try {
          for (var r = t.onRecoverableError, f = 0; f < a.length; f++) {
            var y = a[f];
            r(y.value, { componentStack: y.stack });
          }
        } finally {
          (z.T = e), (L.p = s);
        }
      }
      (qa & 3) !== 0 && vs(),
        qe(t),
        (s = t.pendingLanes),
        (n & 4194090) !== 0 && (s & 42) !== 0
          ? t === qo
            ? Yi++
            : ((Yi = 0), (qo = t))
          : (Yi = 0),
        Gi(0);
    }
  }
  function jd(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), bi(e)));
  }
  function vs(t) {
    return Nd(), Ld(), Hd(), wd();
  }
  function wd() {
    if (Kt !== 5) return !1;
    var t = Rn,
      e = jo;
    jo = 0;
    var n = su(qa),
      a = z.T,
      s = L.p;
    try {
      (L.p = 32 > n ? 32 : n), (z.T = null), (n = wo), (wo = null);
      var r = Rn,
        f = qa;
      if (((Kt = 0), (wa = Rn = null), (qa = 0), (yt & 6) !== 0))
        throw Error(o(331));
      var y = yt;
      if (
        ((yt |= 4),
        Ad(r.current),
        Sd(r, r.current, f, n),
        (yt = y),
        Gi(0, !1),
        re && typeof re.onPostCommitFiberRoot == "function")
      )
        try {
          re.onPostCommitFiberRoot(ai, r);
        } catch {}
      return !0;
    } finally {
      (L.p = s), (z.T = a), jd(t, e);
    }
  }
  function qd(t, e, n) {
    (e = Te(n, e)),
      (e = vo(t.stateNode, e, 2)),
      (t = gn(t, e, 2)),
      t !== null && (li(t, 2), qe(t));
  }
  function Tt(t, e, n) {
    if (t.tag === 3) qd(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          qd(e, t, n);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Dn === null || !Dn.has(a)))
          ) {
            (t = Te(n, t)),
              (n = Zh(2)),
              (a = gn(e, n, 2)),
              a !== null && (Qh(n, a, e, t), li(a, 2), qe(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function Zo(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new ev();
      var s = new Set();
      a.set(e, s);
    } else (s = a.get(e)), s === void 0 && ((s = new Set()), a.set(e, s));
    s.has(n) ||
      ((Bo = !0), s.add(n), (t = sv.bind(null, t, e, n)), e.then(t, t));
  }
  function sv(t, e, n) {
    var a = t.pingCache;
    a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      bt === t &&
        (rt & n) === n &&
        (Vt === 4 || (Vt === 3 && (rt & 62914560) === rt && 300 > Ne() - Ho)
          ? (yt & 2) === 0 && Ya(t, 0)
          : (No |= n),
        ja === rt && (ja = 0)),
      qe(t);
  }
  function Yd(t, e) {
    e === 0 && (e = Lc()), (t = Ea(t, e)), t !== null && (li(t, e), qe(t));
  }
  function uv(t) {
    var e = t.memoizedState,
      n = 0;
    e !== null && (n = e.retryLane), Yd(t, n);
  }
  function ov(t, e) {
    var n = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode,
          s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    a !== null && a.delete(e), Yd(t, n);
  }
  function rv(t, e) {
    return nu(t, e);
  }
  var Ss = null,
    Xa = null,
    Qo = !1,
    Ts = !1,
    Ko = !1,
    na = 0;
  function qe(t) {
    t !== Xa &&
      t.next === null &&
      (Xa === null ? (Ss = Xa = t) : (Xa = Xa.next = t)),
      (Ts = !0),
      Qo || ((Qo = !0), fv());
  }
  function Gi(t, e) {
    if (!Ko && Ts) {
      Ko = !0;
      do
        for (var n = !1, a = Ss; a !== null; ) {
          if (t !== 0) {
            var s = a.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var f = a.suspendedLanes,
                y = a.pingedLanes;
              (r = (1 << (31 - ce(42 | t) + 1)) - 1),
                (r &= s & ~(f & ~y)),
                (r = r & 201326741 ? (r & 201326741) | 1 : r ? r | 2 : 0);
            }
            r !== 0 && ((n = !0), Qd(a, r));
          } else
            (r = rt),
              (r = Dl(
                a,
                a === bt ? r : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (r & 3) === 0 || ii(a, r) || ((n = !0), Qd(a, r));
          a = a.next;
        }
      while (n);
      Ko = !1;
    }
  }
  function cv() {
    Gd();
  }
  function Gd() {
    Ts = Qo = !1;
    var t = 0;
    na !== 0 && (Sv() && (t = na), (na = 0));
    for (var e = Ne(), n = null, a = Ss; a !== null; ) {
      var s = a.next,
        r = Xd(a, e);
      r === 0
        ? ((a.next = null),
          n === null ? (Ss = s) : (n.next = s),
          s === null && (Xa = n))
        : ((n = a), (t !== 0 || (r & 3) !== 0) && (Ts = !0)),
        (a = s);
    }
    Gi(t);
  }
  function Xd(t, e) {
    for (
      var n = t.suspendedLanes,
        a = t.pingedLanes,
        s = t.expirationTimes,
        r = t.pendingLanes & -62914561;
      0 < r;

    ) {
      var f = 31 - ce(r),
        y = 1 << f,
        S = s[f];
      S === -1
        ? ((y & n) === 0 || (y & a) !== 0) && (s[f] = Lg(y, e))
        : S <= e && (t.expiredLanes |= y),
        (r &= ~y);
    }
    if (
      ((e = bt),
      (n = rt),
      (n = Dl(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (a = t.callbackNode),
      n === 0 ||
        (t === e && (pt === 2 || pt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && au(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || ii(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((a !== null && au(a), su(n))) {
        case 2:
        case 8:
          n = _c;
          break;
        case 32:
          n = El;
          break;
        case 268435456:
          n = Bc;
          break;
        default:
          n = El;
      }
      return (
        (a = Zd.bind(null, t)),
        (n = nu(n, a)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      a !== null && a !== null && au(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Zd(t, e) {
    if (Kt !== 0 && Kt !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var n = t.callbackNode;
    if (vs() && t.callbackNode !== n) return null;
    var a = rt;
    return (
      (a = Dl(
        t,
        t === bt ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (Dd(t, a, e),
          Xd(t, Ne()),
          t.callbackNode != null && t.callbackNode === n
            ? Zd.bind(null, t)
            : null)
    );
  }
  function Qd(t, e) {
    if (vs()) return null;
    Dd(t, e, !0);
  }
  function fv() {
    bv(function () {
      (yt & 6) !== 0 ? nu(Uc, cv) : Gd();
    });
  }
  function Jo() {
    return na === 0 && (na = Nc()), na;
  }
  function Kd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : zl("" + t);
  }
  function Jd(t, e) {
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
  function hv(t, e, n, a, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var r = Kd((s[ae] || null).action),
        f = a.submitter;
      f &&
        ((e = (e = f[ae] || null)
          ? Kd(e.formAction)
          : f.getAttribute("formAction")),
        e !== null && ((r = e), (f = null)));
      var y = new Nl("action", "action", null, a, s);
      t.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (na !== 0) {
                  var S = f ? Jd(s, f) : new FormData(s);
                  ho(
                    n,
                    { pending: !0, data: S, method: s.method, action: r },
                    null,
                    S
                  );
                }
              } else
                typeof r == "function" &&
                  (y.preventDefault(),
                  (S = f ? Jd(s, f) : new FormData(s)),
                  ho(
                    n,
                    { pending: !0, data: S, method: s.method, action: r },
                    r,
                    S
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var Po = 0; Po < zu.length; Po++) {
    var ko = zu[Po],
      dv = ko.toLowerCase(),
      mv = ko[0].toUpperCase() + ko.slice(1);
    Ce(dv, "on" + mv);
  }
  Ce(Df, "onAnimationEnd"),
    Ce(Rf, "onAnimationIteration"),
    Ce(Of, "onAnimationStart"),
    Ce("dblclick", "onDoubleClick"),
    Ce("focusin", "onFocus"),
    Ce("focusout", "onBlur"),
    Ce(z0, "onTransitionRun"),
    Ce(U0, "onTransitionStart"),
    Ce(_0, "onTransitionCancel"),
    Ce(Vf, "onTransitionEnd"),
    da("onMouseEnter", ["mouseout", "mouseover"]),
    da("onMouseLeave", ["mouseout", "mouseover"]),
    da("onPointerEnter", ["pointerout", "pointerover"]),
    da("onPointerLeave", ["pointerout", "pointerover"]),
    qn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    qn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    qn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    qn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    qn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    qn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Xi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    yv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Xi)
    );
  function Pd(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n],
        s = a.event;
      a = a.listeners;
      t: {
        var r = void 0;
        if (e)
          for (var f = a.length - 1; 0 <= f; f--) {
            var y = a[f],
              S = y.instance,
              D = y.currentTarget;
            if (((y = y.listener), S !== r && s.isPropagationStopped()))
              break t;
            (r = y), (s.currentTarget = D);
            try {
              r(s);
            } catch (C) {
              us(C);
            }
            (s.currentTarget = null), (r = S);
          }
        else
          for (f = 0; f < a.length; f++) {
            if (
              ((y = a[f]),
              (S = y.instance),
              (D = y.currentTarget),
              (y = y.listener),
              S !== r && s.isPropagationStopped())
            )
              break t;
            (r = y), (s.currentTarget = D);
            try {
              r(s);
            } catch (C) {
              us(C);
            }
            (s.currentTarget = null), (r = S);
          }
      }
    }
  }
  function ut(t, e) {
    var n = e[uu];
    n === void 0 && (n = e[uu] = new Set());
    var a = t + "__bubble";
    n.has(a) || (kd(e, t, 2, !1), n.add(a));
  }
  function Fo(t, e, n) {
    var a = 0;
    e && (a |= 4), kd(n, t, a, e);
  }
  var bs = "_reactListening" + Math.random().toString(36).slice(2);
  function Wo(t) {
    if (!t[bs]) {
      (t[bs] = !0),
        Yc.forEach(function (n) {
          n !== "selectionchange" && (yv.has(n) || Fo(n, !1, t), Fo(n, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[bs] || ((e[bs] = !0), Fo("selectionchange", !1, e));
    }
  }
  function kd(t, e, n, a) {
    switch (Sm(e)) {
      case 2:
        var s = Gv;
        break;
      case 8:
        s = Xv;
        break;
      default:
        s = fr;
    }
    (n = s.bind(null, e, n, t)),
      (s = void 0),
      !vu ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (s = !0),
      a
        ? s !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: s })
          : t.addEventListener(e, n, !0)
        : s !== void 0
          ? t.addEventListener(e, n, { passive: s })
          : t.addEventListener(e, n, !1);
  }
  function $o(t, e, n, a, s) {
    var r = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var y = a.stateNode.containerInfo;
          if (y === s) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var S = f.tag;
              if ((S === 3 || S === 4) && f.stateNode.containerInfo === s)
                return;
              f = f.return;
            }
          for (; y !== null; ) {
            if (((f = ca(y)), f === null)) return;
            if (((S = f.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
              a = r = f;
              continue t;
            }
            y = y.parentNode;
          }
        }
        a = a.return;
      }
    ef(function () {
      var D = r,
        C = pu(n),
        _ = [];
      t: {
        var R = Cf.get(t);
        if (R !== void 0) {
          var O = Nl,
            I = t;
          switch (t) {
            case "keypress":
              if (_l(n) === 0) break t;
            case "keydown":
            case "keyup":
              O = r0;
              break;
            case "focusin":
              (I = "focus"), (O = Au);
              break;
            case "focusout":
              (I = "blur"), (O = Au);
              break;
            case "beforeblur":
            case "afterblur":
              O = Au;
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
              O = lf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              O = Wg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              O = h0;
              break;
            case Df:
            case Rf:
            case Of:
              O = t0;
              break;
            case Vf:
              O = m0;
              break;
            case "scroll":
            case "scrollend":
              O = kg;
              break;
            case "wheel":
              O = p0;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = n0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              O = uf;
              break;
            case "toggle":
            case "beforetoggle":
              O = v0;
          }
          var F = (e & 4) !== 0,
            St = !F && (t === "scroll" || t === "scrollend"),
            E = F ? (R !== null ? R + "Capture" : null) : R;
          F = [];
          for (var A = D, M; A !== null; ) {
            var U = A;
            if (
              ((M = U.stateNode),
              (U = U.tag),
              (U !== 5 && U !== 26 && U !== 27) ||
                M === null ||
                E === null ||
                ((U = oi(A, E)), U != null && F.push(Zi(A, U, M))),
              St)
            )
              break;
            A = A.return;
          }
          0 < F.length &&
            ((R = new O(R, I, null, n, C)), _.push({ event: R, listeners: F }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((R = t === "mouseover" || t === "pointerover"),
            (O = t === "mouseout" || t === "pointerout"),
            R &&
              n !== yu &&
              (I = n.relatedTarget || n.fromElement) &&
              (ca(I) || I[ra]))
          )
            break t;
          if (
            (O || R) &&
            ((R =
              C.window === C
                ? C
                : (R = C.ownerDocument)
                  ? R.defaultView || R.parentWindow
                  : window),
            O
              ? ((I = n.relatedTarget || n.toElement),
                (O = D),
                (I = I ? ca(I) : null),
                I !== null &&
                  ((St = d(I)),
                  (F = I.tag),
                  I !== St || (F !== 5 && F !== 27 && F !== 6)) &&
                  (I = null))
              : ((O = null), (I = D)),
            O !== I)
          ) {
            if (
              ((F = lf),
              (U = "onMouseLeave"),
              (E = "onMouseEnter"),
              (A = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((F = uf),
                (U = "onPointerLeave"),
                (E = "onPointerEnter"),
                (A = "pointer")),
              (St = O == null ? R : ui(O)),
              (M = I == null ? R : ui(I)),
              (R = new F(U, A + "leave", O, n, C)),
              (R.target = St),
              (R.relatedTarget = M),
              (U = null),
              ca(C) === D &&
                ((F = new F(E, A + "enter", I, n, C)),
                (F.target = M),
                (F.relatedTarget = St),
                (U = F)),
              (St = U),
              O && I)
            )
              e: {
                for (F = O, E = I, A = 0, M = F; M; M = Za(M)) A++;
                for (M = 0, U = E; U; U = Za(U)) M++;
                for (; 0 < A - M; ) (F = Za(F)), A--;
                for (; 0 < M - A; ) (E = Za(E)), M--;
                for (; A--; ) {
                  if (F === E || (E !== null && F === E.alternate)) break e;
                  (F = Za(F)), (E = Za(E));
                }
                F = null;
              }
            else F = null;
            O !== null && Fd(_, R, O, F, !1),
              I !== null && St !== null && Fd(_, St, I, F, !0);
          }
        }
        t: {
          if (
            ((R = D ? ui(D) : window),
            (O = R.nodeName && R.nodeName.toLowerCase()),
            O === "select" || (O === "input" && R.type === "file"))
          )
            var Z = yf;
          else if (df(R))
            if (pf) Z = O0;
            else {
              Z = D0;
              var lt = x0;
            }
          else
            (O = R.nodeName),
              !O ||
              O.toLowerCase() !== "input" ||
              (R.type !== "checkbox" && R.type !== "radio")
                ? D && mu(D.elementType) && (Z = yf)
                : (Z = R0);
          if (Z && (Z = Z(t, D))) {
            mf(_, Z, n, C);
            break t;
          }
          lt && lt(t, R, D),
            t === "focusout" &&
              D &&
              R.type === "number" &&
              D.memoizedProps.value != null &&
              du(R, "number", R.value);
        }
        switch (((lt = D ? ui(D) : window), t)) {
          case "focusin":
            (df(lt) || lt.contentEditable === "true") &&
              ((Ta = lt), (Ou = D), (pi = null));
            break;
          case "focusout":
            pi = Ou = Ta = null;
            break;
          case "mousedown":
            Vu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Vu = !1), Mf(_, n, C);
            break;
          case "selectionchange":
            if (C0) break;
          case "keydown":
          case "keyup":
            Mf(_, n, C);
        }
        var J;
        if (Mu)
          t: {
            switch (t) {
              case "compositionstart":
                var W = "onCompositionStart";
                break t;
              case "compositionend":
                W = "onCompositionEnd";
                break t;
              case "compositionupdate":
                W = "onCompositionUpdate";
                break t;
            }
            W = void 0;
          }
        else
          Sa
            ? ff(t, n) && (W = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (W = "onCompositionStart");
        W &&
          (of &&
            n.locale !== "ko" &&
            (Sa || W !== "onCompositionStart"
              ? W === "onCompositionEnd" && Sa && (J = nf())
              : ((dn = C),
                (Su = "value" in dn ? dn.value : dn.textContent),
                (Sa = !0))),
          (lt = As(D, W)),
          0 < lt.length &&
            ((W = new sf(W, t, null, n, C)),
            _.push({ event: W, listeners: lt }),
            J ? (W.data = J) : ((J = hf(n)), J !== null && (W.data = J)))),
          (J = T0 ? b0(t, n) : A0(t, n)) &&
            ((W = As(D, "onBeforeInput")),
            0 < W.length &&
              ((lt = new sf("onBeforeInput", "beforeinput", null, n, C)),
              _.push({ event: lt, listeners: W }),
              (lt.data = J))),
          hv(_, t, D, n, C);
      }
      Pd(_, e);
    });
  }
  function Zi(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function As(t, e) {
    for (var n = e + "Capture", a = []; t !== null; ) {
      var s = t,
        r = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          r === null ||
          ((s = oi(t, n)),
          s != null && a.unshift(Zi(t, s, r)),
          (s = oi(t, e)),
          s != null && a.push(Zi(t, s, r))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function Za(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Fd(t, e, n, a, s) {
    for (var r = e._reactName, f = []; n !== null && n !== a; ) {
      var y = n,
        S = y.alternate,
        D = y.stateNode;
      if (((y = y.tag), S !== null && S === a)) break;
      (y !== 5 && y !== 26 && y !== 27) ||
        D === null ||
        ((S = D),
        s
          ? ((D = oi(n, r)), D != null && f.unshift(Zi(n, D, S)))
          : s || ((D = oi(n, r)), D != null && f.push(Zi(n, D, S)))),
        (n = n.return);
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var pv = /\r\n?/g,
    gv = /\u0000|\uFFFD/g;
  function Wd(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        pv,
        `
`
      )
      .replace(gv, "");
  }
  function $d(t, e) {
    return (e = Wd(e)), Wd(t) === e;
  }
  function Es() {}
  function vt(t, e, n, a, s, r) {
    switch (n) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || pa(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            pa(t, "" + a);
        break;
      case "className":
        Ol(t, "class", a);
        break;
      case "tabIndex":
        Ol(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ol(t, n, a);
        break;
      case "style":
        Ic(t, a, r);
        break;
      case "data":
        if (e !== "object") {
          Ol(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        (a = zl("" + a)), t.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" &&
            (n === "formAction"
              ? (e !== "input" && vt(t, e, "name", s.name, s, null),
                vt(t, e, "formEncType", s.formEncType, s, null),
                vt(t, e, "formMethod", s.formMethod, s, null),
                vt(t, e, "formTarget", s.formTarget, s, null))
              : (vt(t, e, "encType", s.encType, s, null),
                vt(t, e, "method", s.method, s, null),
                vt(t, e, "target", s.target, s, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        (a = zl("" + a)), t.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (t.onclick = Es);
        break;
      case "onScroll":
        a != null && ut("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ut("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
          if (((n = a.__html), n != null)) {
            if (s.children != null) throw Error(o(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
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
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (n = zl("" + a)),
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
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(n, "" + a)
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
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(n, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? t.setAttribute(n, a)
            : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(n, a)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(n)
          : t.setAttribute(n, a);
        break;
      case "popover":
        ut("beforetoggle", t), ut("toggle", t), Rl(t, "popover", a);
        break;
      case "xlinkActuate":
        Je(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Je(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Je(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Je(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Je(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Je(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Je(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Je(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Je(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Rl(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Jg.get(n) || n), Rl(t, n, a));
    }
  }
  function Io(t, e, n, a, s, r) {
    switch (n) {
      case "style":
        Ic(t, a, r);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
          if (((n = a.__html), n != null)) {
            if (s.children != null) throw Error(o(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? pa(t, a)
          : (typeof a == "number" || typeof a == "bigint") && pa(t, "" + a);
        break;
      case "onScroll":
        a != null && ut("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ut("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Es);
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
        if (!Gc.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((s = n.endsWith("Capture")),
              (e = n.slice(2, s ? n.length - 7 : void 0)),
              (r = t[ae] || null),
              (r = r != null ? r[n] : null),
              typeof r == "function" && t.removeEventListener(e, r, s),
              typeof a == "function")
            ) {
              typeof r != "function" &&
                r !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, a, s);
              break t;
            }
            n in t
              ? (t[n] = a)
              : a === !0
                ? t.setAttribute(n, "")
                : Rl(t, n, a);
          }
    }
  }
  function Jt(t, e, n) {
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
        ut("error", t), ut("load", t);
        var a = !1,
          s = !1,
          r;
        for (r in n)
          if (n.hasOwnProperty(r)) {
            var f = n[r];
            if (f != null)
              switch (r) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, e));
                default:
                  vt(t, e, r, f, n, null);
              }
          }
        s && vt(t, e, "srcSet", n.srcSet, n, null),
          a && vt(t, e, "src", n.src, n, null);
        return;
      case "input":
        ut("invalid", t);
        var y = (r = f = s = null),
          S = null,
          D = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var C = n[a];
            if (C != null)
              switch (a) {
                case "name":
                  s = C;
                  break;
                case "type":
                  f = C;
                  break;
                case "checked":
                  S = C;
                  break;
                case "defaultChecked":
                  D = C;
                  break;
                case "value":
                  r = C;
                  break;
                case "defaultValue":
                  y = C;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (C != null) throw Error(o(137, e));
                  break;
                default:
                  vt(t, e, a, C, n, null);
              }
          }
        kc(t, r, y, S, D, f, s, !1), Vl(t);
        return;
      case "select":
        ut("invalid", t), (a = f = r = null);
        for (s in n)
          if (n.hasOwnProperty(s) && ((y = n[s]), y != null))
            switch (s) {
              case "value":
                r = y;
                break;
              case "defaultValue":
                f = y;
                break;
              case "multiple":
                a = y;
              default:
                vt(t, e, s, y, n, null);
            }
        (e = r),
          (n = f),
          (t.multiple = !!a),
          e != null ? ya(t, !!a, e, !1) : n != null && ya(t, !!a, n, !0);
        return;
      case "textarea":
        ut("invalid", t), (r = s = a = null);
        for (f in n)
          if (n.hasOwnProperty(f) && ((y = n[f]), y != null))
            switch (f) {
              case "value":
                a = y;
                break;
              case "defaultValue":
                s = y;
                break;
              case "children":
                r = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(o(91));
                break;
              default:
                vt(t, e, f, y, n, null);
            }
        Wc(t, a, s, r), Vl(t);
        return;
      case "option":
        for (S in n)
          if (n.hasOwnProperty(S) && ((a = n[S]), a != null))
            switch (S) {
              case "selected":
                t.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                vt(t, e, S, a, n, null);
            }
        return;
      case "dialog":
        ut("beforetoggle", t), ut("toggle", t), ut("cancel", t), ut("close", t);
        break;
      case "iframe":
      case "object":
        ut("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Xi.length; a++) ut(Xi[a], t);
        break;
      case "image":
        ut("error", t), ut("load", t);
        break;
      case "details":
        ut("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ut("error", t), ut("load", t);
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
        for (D in n)
          if (n.hasOwnProperty(D) && ((a = n[D]), a != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, e));
              default:
                vt(t, e, D, a, n, null);
            }
        return;
      default:
        if (mu(e)) {
          for (C in n)
            n.hasOwnProperty(C) &&
              ((a = n[C]), a !== void 0 && Io(t, e, C, a, n, void 0));
          return;
        }
    }
    for (y in n)
      n.hasOwnProperty(y) && ((a = n[y]), a != null && vt(t, e, y, a, n, null));
  }
  function vv(t, e, n, a) {
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
        var s = null,
          r = null,
          f = null,
          y = null,
          S = null,
          D = null,
          C = null;
        for (O in n) {
          var _ = n[O];
          if (n.hasOwnProperty(O) && _ != null)
            switch (O) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = _;
              default:
                a.hasOwnProperty(O) || vt(t, e, O, null, a, _);
            }
        }
        for (var R in a) {
          var O = a[R];
          if (((_ = n[R]), a.hasOwnProperty(R) && (O != null || _ != null)))
            switch (R) {
              case "type":
                r = O;
                break;
              case "name":
                s = O;
                break;
              case "checked":
                D = O;
                break;
              case "defaultChecked":
                C = O;
                break;
              case "value":
                f = O;
                break;
              case "defaultValue":
                y = O;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null) throw Error(o(137, e));
                break;
              default:
                O !== _ && vt(t, e, R, O, a, _);
            }
        }
        hu(t, f, y, S, D, C, r, s);
        return;
      case "select":
        O = f = y = R = null;
        for (r in n)
          if (((S = n[r]), n.hasOwnProperty(r) && S != null))
            switch (r) {
              case "value":
                break;
              case "multiple":
                O = S;
              default:
                a.hasOwnProperty(r) || vt(t, e, r, null, a, S);
            }
        for (s in a)
          if (
            ((r = a[s]),
            (S = n[s]),
            a.hasOwnProperty(s) && (r != null || S != null))
          )
            switch (s) {
              case "value":
                R = r;
                break;
              case "defaultValue":
                y = r;
                break;
              case "multiple":
                f = r;
              default:
                r !== S && vt(t, e, s, r, a, S);
            }
        (e = y),
          (n = f),
          (a = O),
          R != null
            ? ya(t, !!n, R, !1)
            : !!a != !!n &&
              (e != null ? ya(t, !!n, e, !0) : ya(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        O = R = null;
        for (y in n)
          if (
            ((s = n[y]),
            n.hasOwnProperty(y) && s != null && !a.hasOwnProperty(y))
          )
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                vt(t, e, y, null, a, s);
            }
        for (f in a)
          if (
            ((s = a[f]),
            (r = n[f]),
            a.hasOwnProperty(f) && (s != null || r != null))
          )
            switch (f) {
              case "value":
                R = s;
                break;
              case "defaultValue":
                O = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(o(91));
                break;
              default:
                s !== r && vt(t, e, f, s, a, r);
            }
        Fc(t, R, O);
        return;
      case "option":
        for (var I in n)
          if (
            ((R = n[I]),
            n.hasOwnProperty(I) && R != null && !a.hasOwnProperty(I))
          )
            switch (I) {
              case "selected":
                t.selected = !1;
                break;
              default:
                vt(t, e, I, null, a, R);
            }
        for (S in a)
          if (
            ((R = a[S]),
            (O = n[S]),
            a.hasOwnProperty(S) && R !== O && (R != null || O != null))
          )
            switch (S) {
              case "selected":
                t.selected =
                  R && typeof R != "function" && typeof R != "symbol";
                break;
              default:
                vt(t, e, S, R, a, O);
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
        for (var F in n)
          (R = n[F]),
            n.hasOwnProperty(F) &&
              R != null &&
              !a.hasOwnProperty(F) &&
              vt(t, e, F, null, a, R);
        for (D in a)
          if (
            ((R = a[D]),
            (O = n[D]),
            a.hasOwnProperty(D) && R !== O && (R != null || O != null))
          )
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null) throw Error(o(137, e));
                break;
              default:
                vt(t, e, D, R, a, O);
            }
        return;
      default:
        if (mu(e)) {
          for (var St in n)
            (R = n[St]),
              n.hasOwnProperty(St) &&
                R !== void 0 &&
                !a.hasOwnProperty(St) &&
                Io(t, e, St, void 0, a, R);
          for (C in a)
            (R = a[C]),
              (O = n[C]),
              !a.hasOwnProperty(C) ||
                R === O ||
                (R === void 0 && O === void 0) ||
                Io(t, e, C, R, a, O);
          return;
        }
    }
    for (var E in n)
      (R = n[E]),
        n.hasOwnProperty(E) &&
          R != null &&
          !a.hasOwnProperty(E) &&
          vt(t, e, E, null, a, R);
    for (_ in a)
      (R = a[_]),
        (O = n[_]),
        !a.hasOwnProperty(_) ||
          R === O ||
          (R == null && O == null) ||
          vt(t, e, _, R, a, O);
  }
  var tr = null,
    er = null;
  function Ms(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Id(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function tm(t, e) {
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
  function nr(t, e) {
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
  var ar = null;
  function Sv() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === ar
        ? !1
        : ((ar = t), !0)
      : ((ar = null), !1);
  }
  var em = typeof setTimeout == "function" ? setTimeout : void 0,
    Tv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    nm = typeof Promise == "function" ? Promise : void 0,
    bv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof nm < "u"
          ? function (t) {
              return nm.resolve(null).then(t).catch(Av);
            }
          : em;
  function Av(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Vn(t) {
    return t === "head";
  }
  function am(t, e) {
    var n = e,
      a = 0,
      s = 0;
    do {
      var r = n.nextSibling;
      if ((t.removeChild(n), r && r.nodeType === 8))
        if (((n = r.data), n === "/$")) {
          if (0 < a && 8 > a) {
            n = a;
            var f = t.ownerDocument;
            if ((n & 1 && Qi(f.documentElement), n & 2 && Qi(f.body), n & 4))
              for (n = f.head, Qi(n), f = n.firstChild; f; ) {
                var y = f.nextSibling,
                  S = f.nodeName;
                f[si] ||
                  S === "SCRIPT" ||
                  S === "STYLE" ||
                  (S === "LINK" && f.rel.toLowerCase() === "stylesheet") ||
                  n.removeChild(f),
                  (f = y);
              }
          }
          if (s === 0) {
            t.removeChild(r), Ii(e);
            return;
          }
          s--;
        } else
          n === "$" || n === "$?" || n === "$!"
            ? s++
            : (a = n.charCodeAt(0) - 48);
      else a = 0;
      n = r;
    } while (n);
    Ii(e);
  }
  function ir(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ir(n), ou(n);
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
  function Ev(t, e, n, a) {
    for (; t.nodeType === 1; ) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[si])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((r = t.getAttribute("rel")),
                r === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                r !== s.rel ||
                t.getAttribute("href") !==
                  (s.href == null || s.href === "" ? null : s.href) ||
                t.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                t.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((r = t.getAttribute("src")),
                (r !== (s.src == null ? null : s.src) ||
                  t.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  t.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  r &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === r) return t;
      } else return t;
      if (((t = Ue(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Mv(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = Ue(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function lr(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function xv(t, e) {
    var n = t.ownerDocument;
    if (t.data !== "$?" || n.readyState === "complete") e();
    else {
      var a = function () {
        e(), n.removeEventListener("DOMContentLoaded", a);
      };
      n.addEventListener("DOMContentLoaded", a), (t._reactRetry = a);
    }
  }
  function Ue(t) {
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
  var sr = null;
  function im(t) {
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
  function lm(t, e, n) {
    switch (((e = Ms(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(o(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(o(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(o(454));
        return t;
      default:
        throw Error(o(451));
    }
  }
  function Qi(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    ou(t);
  }
  var De = new Map(),
    sm = new Set();
  function xs(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var on = L.d;
  L.d = { f: Dv, r: Rv, D: Ov, C: Vv, L: Cv, m: zv, X: _v, S: Uv, M: Bv };
  function Dv() {
    var t = on.f(),
      e = ps();
    return t || e;
  }
  function Rv(t) {
    var e = fa(t);
    e !== null && e.tag === 5 && e.type === "form" ? Dh(e) : on.r(t);
  }
  var Qa = typeof document > "u" ? null : document;
  function um(t, e, n) {
    var a = Qa;
    if (a && typeof e == "string" && e) {
      var s = Se(e);
      (s = 'link[rel="' + t + '"][href="' + s + '"]'),
        typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
        sm.has(s) ||
          (sm.add(s),
          (t = { rel: t, crossOrigin: n, href: e }),
          a.querySelector(s) === null &&
            ((e = a.createElement("link")),
            Jt(e, "link", t),
            qt(e),
            a.head.appendChild(e)));
    }
  }
  function Ov(t) {
    on.D(t), um("dns-prefetch", t, null);
  }
  function Vv(t, e) {
    on.C(t, e), um("preconnect", t, e);
  }
  function Cv(t, e, n) {
    on.L(t, e, n);
    var a = Qa;
    if (a && t && e) {
      var s = 'link[rel="preload"][as="' + Se(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((s += '[imagesrcset="' + Se(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (s += '[imagesizes="' + Se(n.imageSizes) + '"]'))
        : (s += '[href="' + Se(t) + '"]');
      var r = s;
      switch (e) {
        case "style":
          r = Ka(t);
          break;
        case "script":
          r = Ja(t);
      }
      De.has(r) ||
        ((t = v(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n
        )),
        De.set(r, t),
        a.querySelector(s) !== null ||
          (e === "style" && a.querySelector(Ki(r))) ||
          (e === "script" && a.querySelector(Ji(r))) ||
          ((e = a.createElement("link")),
          Jt(e, "link", t),
          qt(e),
          a.head.appendChild(e)));
    }
  }
  function zv(t, e) {
    on.m(t, e);
    var n = Qa;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        s =
          'link[rel="modulepreload"][as="' + Se(a) + '"][href="' + Se(t) + '"]',
        r = s;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = Ja(t);
      }
      if (
        !De.has(r) &&
        ((t = v({ rel: "modulepreload", href: t }, e)),
        De.set(r, t),
        n.querySelector(s) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Ji(r))) return;
        }
        (a = n.createElement("link")),
          Jt(a, "link", t),
          qt(a),
          n.head.appendChild(a);
      }
    }
  }
  function Uv(t, e, n) {
    on.S(t, e, n);
    var a = Qa;
    if (a && t) {
      var s = ha(a).hoistableStyles,
        r = Ka(t);
      e = e || "default";
      var f = s.get(r);
      if (!f) {
        var y = { loading: 0, preload: null };
        if ((f = a.querySelector(Ki(r)))) y.loading = 5;
        else {
          (t = v({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = De.get(r)) && ur(t, n);
          var S = (f = a.createElement("link"));
          qt(S),
            Jt(S, "link", t),
            (S._p = new Promise(function (D, C) {
              (S.onload = D), (S.onerror = C);
            })),
            S.addEventListener("load", function () {
              y.loading |= 1;
            }),
            S.addEventListener("error", function () {
              y.loading |= 2;
            }),
            (y.loading |= 4),
            Ds(f, e, a);
        }
        (f = { type: "stylesheet", instance: f, count: 1, state: y }),
          s.set(r, f);
      }
    }
  }
  function _v(t, e) {
    on.X(t, e);
    var n = Qa;
    if (n && t) {
      var a = ha(n).hoistableScripts,
        s = Ja(t),
        r = a.get(s);
      r ||
        ((r = n.querySelector(Ji(s))),
        r ||
          ((t = v({ src: t, async: !0 }, e)),
          (e = De.get(s)) && or(t, e),
          (r = n.createElement("script")),
          qt(r),
          Jt(r, "link", t),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        a.set(s, r));
    }
  }
  function Bv(t, e) {
    on.M(t, e);
    var n = Qa;
    if (n && t) {
      var a = ha(n).hoistableScripts,
        s = Ja(t),
        r = a.get(s);
      r ||
        ((r = n.querySelector(Ji(s))),
        r ||
          ((t = v({ src: t, async: !0, type: "module" }, e)),
          (e = De.get(s)) && or(t, e),
          (r = n.createElement("script")),
          qt(r),
          Jt(r, "link", t),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        a.set(s, r));
    }
  }
  function om(t, e, n, a) {
    var s = (s = tt.current) ? xs(s) : null;
    if (!s) throw Error(o(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = Ka(n.href)),
            (n = ha(s).hoistableStyles),
            (a = n.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = Ka(n.href);
          var r = ha(s).hoistableStyles,
            f = r.get(t);
          if (
            (f ||
              ((s = s.ownerDocument || s),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              r.set(t, f),
              (r = s.querySelector(Ki(t))) &&
                !r._p &&
                ((f.instance = r), (f.state.loading = 5)),
              De.has(t) ||
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
                De.set(t, n),
                r || Nv(s, t, n, f.state))),
            e && a === null)
          )
            throw Error(o(528, ""));
          return f;
        }
        if (e && a !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Ja(n)),
              (n = ha(s).hoistableScripts),
              (a = n.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, t));
    }
  }
  function Ka(t) {
    return 'href="' + Se(t) + '"';
  }
  function Ki(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function rm(t) {
    return v({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Nv(t, e, n, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Jt(e, "link", n),
        qt(e),
        t.head.appendChild(e));
  }
  function Ja(t) {
    return '[src="' + Se(t) + '"]';
  }
  function Ji(t) {
    return "script[async]" + t;
  }
  function cm(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + Se(n.href) + '"]');
          if (a) return (e.instance = a), qt(a), a;
          var s = v({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            qt(a),
            Jt(a, "style", s),
            Ds(a, n.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          s = Ka(n.href);
          var r = t.querySelector(Ki(s));
          if (r) return (e.state.loading |= 4), (e.instance = r), qt(r), r;
          (a = rm(n)),
            (s = De.get(s)) && ur(a, s),
            (r = (t.ownerDocument || t).createElement("link")),
            qt(r);
          var f = r;
          return (
            (f._p = new Promise(function (y, S) {
              (f.onload = y), (f.onerror = S);
            })),
            Jt(r, "link", a),
            (e.state.loading |= 4),
            Ds(r, n.precedence, t),
            (e.instance = r)
          );
        case "script":
          return (
            (r = Ja(n.src)),
            (s = t.querySelector(Ji(r)))
              ? ((e.instance = s), qt(s), s)
              : ((a = n),
                (s = De.get(r)) && ((a = v({}, n)), or(a, s)),
                (t = t.ownerDocument || t),
                (s = t.createElement("script")),
                qt(s),
                Jt(s, "link", a),
                t.head.appendChild(s),
                (e.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), Ds(a, n.precedence, t));
    return e.instance;
  }
  function Ds(t, e, n) {
    for (
      var a = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        s = a.length ? a[a.length - 1] : null,
        r = s,
        f = 0;
      f < a.length;
      f++
    ) {
      var y = a[f];
      if (y.dataset.precedence === e) r = y;
      else if (r !== s) break;
    }
    r
      ? r.parentNode.insertBefore(t, r.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function ur(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function or(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Rs = null;
  function fm(t, e, n) {
    if (Rs === null) {
      var a = new Map(),
        s = (Rs = new Map());
      s.set(n, a);
    } else (s = Rs), (a = s.get(n)), a || ((a = new Map()), s.set(n, a));
    if (a.has(t)) return a;
    for (
      a.set(t, null), n = n.getElementsByTagName(t), s = 0;
      s < n.length;
      s++
    ) {
      var r = n[s];
      if (
        !(
          r[si] ||
          r[Ft] ||
          (t === "link" && r.getAttribute("rel") === "stylesheet")
        ) &&
        r.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = r.getAttribute(e) || "";
        f = t + f;
        var y = a.get(f);
        y ? y.push(r) : a.set(f, [r]);
      }
    }
    return a;
  }
  function hm(t, e, n) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function Lv(t, e, n) {
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
  function dm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Pi = null;
  function Hv() {}
  function jv(t, e, n) {
    if (Pi === null) throw Error(o(475));
    var a = Pi;
    if (
      e.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var s = Ka(n.href),
          r = t.querySelector(Ki(s));
        if (r) {
          (t = r._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (a.count++, (a = Os.bind(a)), t.then(a, a)),
            (e.state.loading |= 4),
            (e.instance = r),
            qt(r);
          return;
        }
        (r = t.ownerDocument || t),
          (n = rm(n)),
          (s = De.get(s)) && ur(n, s),
          (r = r.createElement("link")),
          qt(r);
        var f = r;
        (f._p = new Promise(function (y, S) {
          (f.onload = y), (f.onerror = S);
        })),
          Jt(r, "link", n),
          (e.instance = r);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (a.count++,
          (e = Os.bind(a)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function wv() {
    if (Pi === null) throw Error(o(475));
    var t = Pi;
    return (
      t.stylesheets && t.count === 0 && rr(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var n = setTimeout(function () {
              if ((t.stylesheets && rr(t, t.stylesheets), t.unsuspend)) {
                var a = t.unsuspend;
                (t.unsuspend = null), a();
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
  function Os() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) rr(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Vs = null;
  function rr(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Vs = new Map()),
        e.forEach(qv, t),
        (Vs = null),
        Os.call(t));
  }
  function qv(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Vs.get(t);
      if (n) var a = n.get(null);
      else {
        (n = new Map()), Vs.set(t, n);
        for (
          var s = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            r = 0;
          r < s.length;
          r++
        ) {
          var f = s[r];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (n.set(f.dataset.precedence, f), (a = f));
        }
        a && n.set(null, a);
      }
      (s = e.instance),
        (f = s.getAttribute("data-precedence")),
        (r = n.get(f) || a),
        r === a && n.set(null, s),
        n.set(f, s),
        this.count++,
        (a = Os.bind(this)),
        s.addEventListener("load", a),
        s.addEventListener("error", a),
        r
          ? r.parentNode.insertBefore(s, r.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(s, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var ki = {
    $$typeof: G,
    Provider: null,
    Consumer: null,
    _currentValue: K,
    _currentValue2: K,
    _threadCount: 0,
  };
  function Yv(t, e, n, a, s, r, f, y) {
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
      (this.expirationTimes = iu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = iu(0)),
      (this.hiddenUpdates = iu(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = s),
      (this.onCaughtError = r),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = y),
      (this.incompleteTransitions = new Map());
  }
  function mm(t, e, n, a, s, r, f, y, S, D, C, _) {
    return (
      (t = new Yv(t, e, n, f, y, S, D, _)),
      (e = 1),
      r === !0 && (e |= 24),
      (r = he(3, null, null, e)),
      (t.current = r),
      (r.stateNode = t),
      (e = Xu()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (r.memoizedState = { element: a, isDehydrated: n, cache: e }),
      Ju(r),
      t
    );
  }
  function ym(t) {
    return t ? ((t = Ma), t) : Ma;
  }
  function pm(t, e, n, a, s, r) {
    (s = ym(s)),
      a.context === null ? (a.context = s) : (a.pendingContext = s),
      (a = pn(e)),
      (a.payload = { element: n }),
      (r = r === void 0 ? null : r),
      r !== null && (a.callback = r),
      (n = gn(t, a, e)),
      n !== null && (ge(n, t, e), xi(n, t, e));
  }
  function gm(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function cr(t, e) {
    gm(t, e), (t = t.alternate) && gm(t, e);
  }
  function vm(t) {
    if (t.tag === 13) {
      var e = Ea(t, 67108864);
      e !== null && ge(e, t, 67108864), cr(t, 67108864);
    }
  }
  var Cs = !0;
  function Gv(t, e, n, a) {
    var s = z.T;
    z.T = null;
    var r = L.p;
    try {
      (L.p = 2), fr(t, e, n, a);
    } finally {
      (L.p = r), (z.T = s);
    }
  }
  function Xv(t, e, n, a) {
    var s = z.T;
    z.T = null;
    var r = L.p;
    try {
      (L.p = 8), fr(t, e, n, a);
    } finally {
      (L.p = r), (z.T = s);
    }
  }
  function fr(t, e, n, a) {
    if (Cs) {
      var s = hr(a);
      if (s === null) $o(t, e, a, zs, n), Tm(t, a);
      else if (Qv(s, t, e, n, a)) a.stopPropagation();
      else if ((Tm(t, a), e & 4 && -1 < Zv.indexOf(t))) {
        for (; s !== null; ) {
          var r = fa(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (((r = r.stateNode), r.current.memoizedState.isDehydrated)) {
                  var f = wn(r.pendingLanes);
                  if (f !== 0) {
                    var y = r;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; f; ) {
                      var S = 1 << (31 - ce(f));
                      (y.entanglements[1] |= S), (f &= ~S);
                    }
                    qe(r), (yt & 6) === 0 && ((ms = Ne() + 500), Gi(0));
                  }
                }
                break;
              case 13:
                (y = Ea(r, 2)), y !== null && ge(y, r, 2), ps(), cr(r, 2);
            }
          if (((r = hr(a)), r === null && $o(t, e, a, zs, n), r === s)) break;
          s = r;
        }
        s !== null && a.stopPropagation();
      } else $o(t, e, a, null, n);
    }
  }
  function hr(t) {
    return (t = pu(t)), dr(t);
  }
  var zs = null;
  function dr(t) {
    if (((zs = null), (t = ca(t)), t !== null)) {
      var e = d(t);
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
    return (zs = t), null;
  }
  function Sm(t) {
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
        switch (Vg()) {
          case Uc:
            return 2;
          case _c:
            return 8;
          case El:
          case Cg:
            return 32;
          case Bc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var mr = !1,
    Cn = null,
    zn = null,
    Un = null,
    Fi = new Map(),
    Wi = new Map(),
    _n = [],
    Zv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Tm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Cn = null;
        break;
      case "dragenter":
      case "dragleave":
        zn = null;
        break;
      case "mouseover":
      case "mouseout":
        Un = null;
        break;
      case "pointerover":
      case "pointerout":
        Fi.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Wi.delete(e.pointerId);
    }
  }
  function $i(t, e, n, a, s, r) {
    return t === null || t.nativeEvent !== r
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: r,
          targetContainers: [s],
        }),
        e !== null && ((e = fa(e)), e !== null && vm(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t);
  }
  function Qv(t, e, n, a, s) {
    switch (e) {
      case "focusin":
        return (Cn = $i(Cn, t, e, n, a, s)), !0;
      case "dragenter":
        return (zn = $i(zn, t, e, n, a, s)), !0;
      case "mouseover":
        return (Un = $i(Un, t, e, n, a, s)), !0;
      case "pointerover":
        var r = s.pointerId;
        return Fi.set(r, $i(Fi.get(r) || null, t, e, n, a, s)), !0;
      case "gotpointercapture":
        return (
          (r = s.pointerId), Wi.set(r, $i(Wi.get(r) || null, t, e, n, a, s)), !0
        );
    }
    return !1;
  }
  function bm(t) {
    var e = ca(t.target);
    if (e !== null) {
      var n = d(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = h(n)), e !== null)) {
            (t.blockedOn = e),
              jg(t.priority, function () {
                if (n.tag === 13) {
                  var a = pe();
                  a = lu(a);
                  var s = Ea(n, a);
                  s !== null && ge(s, n, a), cr(n, a);
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
  function Us(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = hr(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(n.type, n);
        (yu = a), n.target.dispatchEvent(a), (yu = null);
      } else return (e = fa(n)), e !== null && vm(e), (t.blockedOn = n), !1;
      e.shift();
    }
    return !0;
  }
  function Am(t, e, n) {
    Us(t) && n.delete(e);
  }
  function Kv() {
    (mr = !1),
      Cn !== null && Us(Cn) && (Cn = null),
      zn !== null && Us(zn) && (zn = null),
      Un !== null && Us(Un) && (Un = null),
      Fi.forEach(Am),
      Wi.forEach(Am);
  }
  function _s(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      mr ||
        ((mr = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, Kv)));
  }
  var Bs = null;
  function Em(t) {
    Bs !== t &&
      ((Bs = t),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        Bs === t && (Bs = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            a = t[e + 1],
            s = t[e + 2];
          if (typeof a != "function") {
            if (dr(a || n) === null) continue;
            break;
          }
          var r = fa(n);
          r !== null &&
            (t.splice(e, 3),
            (e -= 3),
            ho(r, { pending: !0, data: s, method: n.method, action: a }, a, s));
        }
      }));
  }
  function Ii(t) {
    function e(S) {
      return _s(S, t);
    }
    Cn !== null && _s(Cn, t),
      zn !== null && _s(zn, t),
      Un !== null && _s(Un, t),
      Fi.forEach(e),
      Wi.forEach(e);
    for (var n = 0; n < _n.length; n++) {
      var a = _n[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < _n.length && ((n = _n[0]), n.blockedOn === null); )
      bm(n), n.blockedOn === null && _n.shift();
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var s = n[a],
          r = n[a + 1],
          f = s[ae] || null;
        if (typeof r == "function") f || Em(n);
        else if (f) {
          var y = null;
          if (r && r.hasAttribute("formAction")) {
            if (((s = r), (f = r[ae] || null))) y = f.formAction;
            else if (dr(s) !== null) continue;
          } else y = f.action;
          typeof y == "function" ? (n[a + 1] = y) : (n.splice(a, 3), (a -= 3)),
            Em(n);
        }
      }
  }
  function yr(t) {
    this._internalRoot = t;
  }
  (Ns.prototype.render = yr.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(o(409));
      var n = e.current,
        a = pe();
      pm(n, a, t, e, null, null);
    }),
    (Ns.prototype.unmount = yr.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          pm(t.current, 2, null, t, null, null), ps(), (e[ra] = null);
        }
      });
  function Ns(t) {
    this._internalRoot = t;
  }
  Ns.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = wc();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < _n.length && e !== 0 && e < _n[n].priority; n++);
      _n.splice(n, 0, t), n === 0 && bm(t);
    }
  };
  var Mm = l.version;
  if (Mm !== "19.1.0") throw Error(o(527, Mm, "19.1.0"));
  L.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(o(188))
        : ((t = Object.keys(t).join(",")), Error(o(268, t)));
    return (
      (t = p(e)),
      (t = t !== null ? g(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Jv = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ls = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ls.isDisabled && Ls.supportsFiber)
      try {
        (ai = Ls.inject(Jv)), (re = Ls);
      } catch {}
  }
  return (
    (el.createRoot = function (t, e) {
      if (!c(t)) throw Error(o(299));
      var n = !1,
        a = "",
        s = qh,
        r = Yh,
        f = Gh,
        y = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
          e.onCaughtError !== void 0 && (r = e.onCaughtError),
          e.onRecoverableError !== void 0 && (f = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (y = e.unstable_transitionCallbacks)),
        (e = mm(t, 1, !1, null, null, n, a, s, r, f, y, null)),
        (t[ra] = e.current),
        Wo(t),
        new yr(e)
      );
    }),
    (el.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(o(299));
      var a = !1,
        s = "",
        r = qh,
        f = Yh,
        y = Gh,
        S = null,
        D = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (r = n.onUncaughtError),
          n.onCaughtError !== void 0 && (f = n.onCaughtError),
          n.onRecoverableError !== void 0 && (y = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (S = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (D = n.formState)),
        (e = mm(t, 1, !0, e, n ?? null, a, s, r, f, y, S, D)),
        (e.context = ym(null)),
        (n = e.current),
        (a = pe()),
        (a = lu(a)),
        (s = pn(a)),
        (s.callback = null),
        gn(n, s, a),
        (n = a),
        (e.current.lanes = n),
        li(e, n),
        qe(e),
        (t[ra] = e.current),
        Wo(t),
        new Ns(e)
      );
    }),
    (el.version = "19.1.0"),
    el
  );
}
var Bm;
function a1() {
  if (Bm) return vr.exports;
  Bm = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), (vr.exports = n1()), vr.exports;
}
var i1 = a1();
const Iy = et.createContext({});
function l1(i) {
  const l = et.useRef(null);
  return l.current === null && (l.current = i()), l.current;
}
const Ir = typeof window < "u",
  s1 = Ir ? et.useLayoutEffect : et.useEffect,
  tc = et.createContext(null),
  tp = et.createContext({
    transformPagePoint: (i) => i,
    isStatic: !1,
    reducedMotion: "never",
  });
function u1(i = !0) {
  const l = et.useContext(tc);
  if (l === null) return [!0, null];
  const { isPresent: u, onExitComplete: o, register: c } = l,
    d = et.useId();
  et.useEffect(() => {
    if (i) return c(d);
  }, [i]);
  const h = et.useCallback(() => i && o && o(d), [d, o, i]);
  return !u && o ? [!1, h] : [!0];
}
function ec(i, l) {
  i.indexOf(l) === -1 && i.push(l);
}
function nc(i, l) {
  const u = i.indexOf(l);
  u > -1 && i.splice(u, 1);
}
let ep = () => {};
const o1 = { useManualTiming: !1 };
function ac(i) {
  let l;
  return () => (l === void 0 && (l = i()), l);
}
const Ve = (i) => i,
  rl = (i, l, u) => {
    const o = l - i;
    return o === 0 ? 1 : (u - i) / o;
  };
class ic {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return ec(this.subscriptions, l), () => nc(this.subscriptions, l);
  }
  notify(l, u, o) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](l, u, o);
      else
        for (let d = 0; d < c; d++) {
          const h = this.subscriptions[d];
          h && h(l, u, o);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Ge = (i) => i * 1e3,
  Xe = (i) => i / 1e3;
function np(i, l) {
  return l ? i * (1e3 / l) : 0;
}
const r1 = ac(() => window.ScrollTimeline !== void 0);
class c1 {
  constructor(l) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = l.filter(Boolean));
  }
  get finished() {
    return Promise.all(this.animations.map((l) => l.finished));
  }
  getAll(l) {
    return this.animations[0][l];
  }
  setAll(l, u) {
    for (let o = 0; o < this.animations.length; o++) this.animations[o][l] = u;
  }
  attachTimeline(l, u) {
    const o = this.animations.map((c) => {
      if (r1() && c.attachTimeline) return c.attachTimeline(l);
      if (typeof u == "function") return u(c);
    });
    return () => {
      o.forEach((c, d) => {
        c && c(), this.animations[d].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(l) {
    this.setAll("time", l);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(l) {
    this.setAll("speed", l);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let l = 0;
    for (let u = 0; u < this.animations.length; u++)
      l = Math.max(l, this.animations[u].duration);
    return l;
  }
  runAll(l) {
    this.animations.forEach((u) => u[l]());
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
class f1 extends c1 {
  then(l, u) {
    return this.finished.finally(l).then(() => {});
  }
}
const Nm = { value: null },
  lc = (i) => Array.isArray(i) && typeof i[0] == "number",
  h1 = {};
function d1(i, l) {
  const u = ac(i);
  return () => h1[l] ?? u();
}
const cl = d1(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  ap = (i, l, u = 10) => {
    let o = "";
    const c = Math.max(Math.round(l / u), 2);
    for (let d = 0; d < c; d++) o += i(d / (c - 1)) + ", ";
    return `linear(${o.substring(0, o.length - 2)})`;
  },
  al = ([i, l, u, o]) => `cubic-bezier(${i}, ${l}, ${u}, ${o})`,
  Br = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: al([0, 0.65, 0.55, 1]),
    circOut: al([0.55, 0, 1, 0.45]),
    backIn: al([0.31, 0.01, 0.66, -0.59]),
    backOut: al([0.33, 1.53, 0.69, 0.99]),
  };
function ip(i, l) {
  if (i)
    return typeof i == "function" && cl()
      ? ap(i, l)
      : lc(i)
        ? al(i)
        : Array.isArray(i)
          ? i.map((u) => ip(u, l) || Br.easeOut)
          : Br[i];
}
function m1(
  i,
  l,
  u,
  {
    delay: o = 0,
    duration: c = 300,
    repeat: d = 0,
    repeatType: h = "loop",
    ease: m = "easeInOut",
    times: p,
  } = {},
  g = void 0
) {
  const v = { [l]: u };
  p && (v.offset = p);
  const T = ip(m, c);
  return (
    Array.isArray(T) && (v.easing = T),
    i.animate(v, {
      delay: o,
      duration: c,
      easing: Array.isArray(T) ? "linear" : T,
      fill: "both",
      iterations: d + 1,
      direction: h === "reverse" ? "alternate" : "normal",
      pseudoElement: g,
    })
  );
}
function sc(i) {
  return typeof i == "function" && "applyToOptions" in i;
}
function uc(i, l) {
  return (i == null ? void 0 : i[l]) ?? (i == null ? void 0 : i.default) ?? i;
}
const Xs = 2e4;
function oc(i) {
  let l = 0;
  const u = 50;
  let o = i.next(l);
  for (; !o.done && l < Xs; ) (l += u), (o = i.next(l));
  return l >= Xs ? 1 / 0 : l;
}
function y1(i, l = 100, u) {
  const o = u({ ...i, keyframes: [0, l] }),
    c = Math.min(oc(o), Xs);
  return {
    type: "keyframes",
    ease: (d) => o.next(c * d).value / l,
    duration: Xe(c),
  };
}
function lp(i) {
  return !!(
    (typeof i == "function" && cl()) ||
    !i ||
    (typeof i == "string" && (i in Br || cl())) ||
    lc(i) ||
    (Array.isArray(i) && i.every(lp))
  );
}
function Lm(i, l) {
  (i.timeline = l), (i.onfinish = null);
}
const Hs = [
  "read",
  "resolveKeyframes",
  "update",
  "preRender",
  "render",
  "postRender",
];
function p1(i, l) {
  let u = new Set(),
    o = new Set(),
    c = !1,
    d = !1;
  const h = new WeakSet();
  let m = { delta: 0, timestamp: 0, isProcessing: !1 },
    p = 0;
  function g(T) {
    h.has(T) && (v.schedule(T), i()), p++, T(m);
  }
  const v = {
    schedule: (T, x = !1, V = !1) => {
      const j = V && c ? u : o;
      return x && h.add(T), j.has(T) || j.add(T), T;
    },
    cancel: (T) => {
      o.delete(T), h.delete(T);
    },
    process: (T) => {
      if (((m = T), c)) {
        d = !0;
        return;
      }
      (c = !0),
        ([u, o] = [o, u]),
        u.forEach(g),
        l && Nm.value && Nm.value.frameloop[l].push(p),
        (p = 0),
        u.clear(),
        (c = !1),
        d && ((d = !1), v.process(T));
    },
  };
  return v;
}
const g1 = 40;
function sp(i, l) {
  let u = !1,
    o = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (u = !0),
    h = Hs.reduce((H, Q) => ((H[Q] = p1(d, l ? Q : void 0)), H), {}),
    {
      read: m,
      resolveKeyframes: p,
      update: g,
      preRender: v,
      render: T,
      postRender: x,
    } = h,
    V = () => {
      const H = performance.now();
      (u = !1),
        (c.delta = o ? 1e3 / 60 : Math.max(Math.min(H - c.timestamp, g1), 1)),
        (c.timestamp = H),
        (c.isProcessing = !0),
        m.process(c),
        p.process(c),
        g.process(c),
        v.process(c),
        T.process(c),
        x.process(c),
        (c.isProcessing = !1),
        u && l && ((o = !1), i(V));
    },
    N = () => {
      (u = !0), (o = !0), c.isProcessing || i(V);
    };
  return {
    schedule: Hs.reduce((H, Q) => {
      const G = h[Q];
      return (
        (H[Q] = (ot, w = !1, at = !1) => (u || N(), G.schedule(ot, w, at))), H
      );
    }, {}),
    cancel: (H) => {
      for (let Q = 0; Q < Hs.length; Q++) h[Hs[Q]].cancel(H);
    },
    state: c,
    steps: h,
  };
}
const {
    schedule: At,
    cancel: Ln,
    state: Pt,
    steps: Ar,
  } = sp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ve, !0),
  { schedule: rc } = sp(queueMicrotask, !1);
let qs;
function v1() {
  qs = void 0;
}
const Ze = {
    now: () => (
      qs === void 0 &&
        Ze.set(
          Pt.isProcessing || o1.useManualTiming
            ? Pt.timestamp
            : performance.now()
        ),
      qs
    ),
    set: (i) => {
      (qs = i), queueMicrotask(v1);
    },
  },
  _e = { x: !1, y: !1 };
function up() {
  return _e.x || _e.y;
}
function S1(i) {
  return i === "x" || i === "y"
    ? _e[i]
      ? null
      : ((_e[i] = !0),
        () => {
          _e[i] = !1;
        })
    : _e.x || _e.y
      ? null
      : ((_e.x = _e.y = !0),
        () => {
          _e.x = _e.y = !1;
        });
}
function T1(i, l, u) {
  if (i instanceof EventTarget) return [i];
  if (typeof i == "string") {
    const c = document.querySelectorAll(i);
    return c ? Array.from(c) : [];
  }
  return Array.from(i);
}
function op(i, l) {
  const u = T1(i),
    o = new AbortController(),
    c = { passive: !0, ...l, signal: o.signal };
  return [u, c, () => o.abort()];
}
function Hm(i) {
  return !(i.pointerType === "touch" || up());
}
function b1(i, l, u = {}) {
  const [o, c, d] = op(i, u),
    h = (m) => {
      if (!Hm(m)) return;
      const { target: p } = m,
        g = l(p, m);
      if (typeof g != "function" || !p) return;
      const v = (T) => {
        Hm(T) && (g(T), p.removeEventListener("pointerleave", v));
      };
      p.addEventListener("pointerleave", v, c);
    };
  return (
    o.forEach((m) => {
      m.addEventListener("pointerenter", h, c);
    }),
    d
  );
}
const rp = (i, l) => (l ? (i === l ? !0 : rp(i, l.parentElement)) : !1),
  cc = (i) =>
    i.pointerType === "mouse"
      ? typeof i.button != "number" || i.button <= 0
      : i.isPrimary !== !1,
  A1 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function E1(i) {
  return A1.has(i.tagName) || i.tabIndex !== -1;
}
const il = new WeakSet();
function jm(i) {
  return (l) => {
    l.key === "Enter" && i(l);
  };
}
function Er(i, l) {
  i.dispatchEvent(
    new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 })
  );
}
const M1 = (i, l) => {
  const u = i.currentTarget;
  if (!u) return;
  const o = jm(() => {
    if (il.has(u)) return;
    Er(u, "down");
    const c = jm(() => {
        Er(u, "up");
      }),
      d = () => Er(u, "cancel");
    u.addEventListener("keyup", c, l), u.addEventListener("blur", d, l);
  });
  u.addEventListener("keydown", o, l),
    u.addEventListener("blur", () => u.removeEventListener("keydown", o), l);
};
function wm(i) {
  return cc(i) && !up();
}
function x1(i, l, u = {}) {
  const [o, c, d] = op(i, u),
    h = (m) => {
      const p = m.currentTarget;
      if (!wm(m) || il.has(p)) return;
      il.add(p);
      const g = l(p, m),
        v = (V, N) => {
          window.removeEventListener("pointerup", T),
            window.removeEventListener("pointercancel", x),
            !(!wm(V) || !il.has(p)) &&
              (il.delete(p), typeof g == "function" && g(V, { success: N }));
        },
        T = (V) => {
          v(
            V,
            p === window ||
              p === document ||
              u.useGlobalTarget ||
              rp(p, V.target)
          );
        },
        x = (V) => {
          v(V, !1);
        };
      window.addEventListener("pointerup", T, c),
        window.addEventListener("pointercancel", x, c);
    };
  return (
    o.forEach((m) => {
      (u.useGlobalTarget ? window : m).addEventListener("pointerdown", h, c),
        m instanceof HTMLElement &&
          (m.addEventListener("focus", (g) => M1(g, c)),
          !E1(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0));
    }),
    d
  );
}
const qm = 30,
  D1 = (i) => !isNaN(parseFloat(i));
class R1 {
  constructor(l, u = {}) {
    (this.version = "12.6.3"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (o, c = !0) => {
        const d = Ze.now();
        this.updatedAt !== d && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(o),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          c &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(l),
      (this.owner = u.owner);
  }
  setCurrent(l) {
    (this.current = l),
      (this.updatedAt = Ze.now()),
      this.canTrackVelocity === null &&
        l !== void 0 &&
        (this.canTrackVelocity = D1(this.current));
  }
  setPrevFrameValue(l = this.current) {
    (this.prevFrameValue = l), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(l) {
    return this.on("change", l);
  }
  on(l, u) {
    this.events[l] || (this.events[l] = new ic());
    const o = this.events[l].add(u);
    return l === "change"
      ? () => {
          o(),
            At.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : o;
  }
  clearListeners() {
    for (const l in this.events) this.events[l].clear();
  }
  attach(l, u) {
    (this.passiveEffect = l), (this.stopPassiveEffect = u);
  }
  set(l, u = !0) {
    !u || !this.passiveEffect
      ? this.updateAndNotify(l, u)
      : this.passiveEffect(l, this.updateAndNotify);
  }
  setWithVelocity(l, u, o) {
    this.set(u),
      (this.prev = void 0),
      (this.prevFrameValue = l),
      (this.prevUpdatedAt = this.updatedAt - o);
  }
  jump(l, u = !0) {
    this.updateAndNotify(l),
      (this.prev = l),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      u && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const l = Ze.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      l - this.updatedAt > qm
    )
      return 0;
    const u = Math.min(this.updatedAt - this.prevUpdatedAt, qm);
    return np(parseFloat(this.current) - parseFloat(this.prevFrameValue), u);
  }
  start(l) {
    return (
      this.stop(),
      new Promise((u) => {
        (this.hasAnimated = !0),
          (this.animation = l(u)),
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
function fl(i, l) {
  return new R1(i, l);
}
const cp = et.createContext({ strict: !1 }),
  Ym = {
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
  Ia = {};
for (const i in Ym) Ia[i] = { isEnabled: (l) => Ym[i].some((u) => !!l[u]) };
function O1(i) {
  for (const l in i) Ia[l] = { ...Ia[l], ...i[l] };
}
const V1 = new Set([
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
function Zs(i) {
  return (
    i.startsWith("while") ||
    (i.startsWith("drag") && i !== "draggable") ||
    i.startsWith("layout") ||
    i.startsWith("onTap") ||
    i.startsWith("onPan") ||
    i.startsWith("onLayout") ||
    V1.has(i)
  );
}
let fp = (i) => !Zs(i);
function C1(i) {
  i && (fp = (l) => (l.startsWith("on") ? !Zs(l) : i(l)));
}
try {
  C1(require("@emotion/is-prop-valid").default);
} catch {}
function z1(i, l, u) {
  const o = {};
  for (const c in i)
    (c === "values" && typeof i.values == "object") ||
      ((fp(c) ||
        (u === !0 && Zs(c)) ||
        (!l && !Zs(c)) ||
        (i.draggable && c.startsWith("onDrag"))) &&
        (o[c] = i[c]));
  return o;
}
function U1(i) {
  if (typeof Proxy > "u") return i;
  const l = new Map(),
    u = (...o) => i(...o);
  return new Proxy(u, {
    get: (o, c) =>
      c === "create" ? i : (l.has(c) || l.set(c, i(c)), l.get(c)),
  });
}
const Fs = et.createContext({});
function Ws(i) {
  return i !== null && typeof i == "object" && typeof i.start == "function";
}
function hl(i) {
  return typeof i == "string" || Array.isArray(i);
}
const fc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  hc = ["initial", ...fc];
function $s(i) {
  return Ws(i.animate) || hc.some((l) => hl(i[l]));
}
function hp(i) {
  return !!($s(i) || i.variants);
}
function _1(i, l) {
  if ($s(i)) {
    const { initial: u, animate: o } = i;
    return {
      initial: u === !1 || hl(u) ? u : void 0,
      animate: hl(o) ? o : void 0,
    };
  }
  return i.inherit !== !1 ? l : {};
}
function B1(i) {
  const { initial: l, animate: u } = _1(i, et.useContext(Fs));
  return et.useMemo(() => ({ initial: l, animate: u }), [Gm(l), Gm(u)]);
}
function Gm(i) {
  return Array.isArray(i) ? i.join(" ") : i;
}
const N1 = Symbol.for("motionComponentSymbol");
function Pa(i) {
  return (
    i &&
    typeof i == "object" &&
    Object.prototype.hasOwnProperty.call(i, "current")
  );
}
function L1(i, l, u) {
  return et.useCallback(
    (o) => {
      o && i.onMount && i.onMount(o),
        l && (o ? l.mount(o) : l.unmount()),
        u && (typeof u == "function" ? u(o) : Pa(u) && (u.current = o));
    },
    [l]
  );
}
const dc = (i) => i.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  H1 = "framerAppearId",
  dp = "data-" + dc(H1),
  mp = et.createContext({});
function j1(i, l, u, o, c) {
  var j, q;
  const { visualElement: d } = et.useContext(Fs),
    h = et.useContext(cp),
    m = et.useContext(tc),
    p = et.useContext(tp).reducedMotion,
    g = et.useRef(null);
  (o = o || h.renderer),
    !g.current &&
      o &&
      (g.current = o(i, {
        visualState: l,
        parent: d,
        props: u,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: p,
      }));
  const v = g.current,
    T = et.useContext(mp);
  v &&
    !v.projection &&
    c &&
    (v.type === "html" || v.type === "svg") &&
    w1(g.current, u, c, T);
  const x = et.useRef(!1);
  et.useInsertionEffect(() => {
    v && x.current && v.update(u, m);
  });
  const V = u[dp],
    N = et.useRef(
      !!V &&
        !((j = window.MotionHandoffIsComplete) != null && j.call(window, V)) &&
        ((q = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : q.call(window, V))
    );
  return (
    s1(() => {
      v &&
        ((x.current = !0),
        (window.MotionIsMounted = !0),
        v.updateFeatures(),
        rc.render(v.render),
        N.current && v.animationState && v.animationState.animateChanges());
    }),
    et.useEffect(() => {
      v &&
        (!N.current && v.animationState && v.animationState.animateChanges(),
        N.current &&
          (queueMicrotask(() => {
            var H;
            (H = window.MotionHandoffMarkAsComplete) == null ||
              H.call(window, V);
          }),
          (N.current = !1)));
    }),
    v
  );
}
function w1(i, l, u, o) {
  const {
    layoutId: c,
    layout: d,
    drag: h,
    dragConstraints: m,
    layoutScroll: p,
    layoutRoot: g,
  } = l;
  (i.projection = new u(
    i.latestValues,
    l["data-framer-portal-id"] ? void 0 : yp(i.parent)
  )),
    i.projection.setOptions({
      layoutId: c,
      layout: d,
      alwaysMeasureLayout: !!h || (m && Pa(m)),
      visualElement: i,
      animationType: typeof d == "string" ? d : "both",
      initialPromotionConfig: o,
      layoutScroll: p,
      layoutRoot: g,
    });
}
function yp(i) {
  if (i) return i.options.allowProjection !== !1 ? i.projection : yp(i.parent);
}
function q1({
  preloadedFeatures: i,
  createVisualElement: l,
  useRender: u,
  useVisualState: o,
  Component: c,
}) {
  i && O1(i);
  function d(m, p) {
    let g;
    const v = { ...et.useContext(tp), ...m, layoutId: Y1(m) },
      { isStatic: T } = v,
      x = B1(m),
      V = o(m, T);
    if (!T && Ir) {
      G1();
      const N = X1(v);
      (g = N.MeasureLayout),
        (x.visualElement = j1(c, V, v, l, N.ProjectionNode));
    }
    return Ye.jsxs(Fs.Provider, {
      value: x,
      children: [
        g && x.visualElement
          ? Ye.jsx(g, { visualElement: x.visualElement, ...v })
          : null,
        u(c, m, L1(V, x.visualElement, p), V, T, x.visualElement),
      ],
    });
  }
  d.displayName = `motion.${typeof c == "string" ? c : `create(${c.displayName ?? c.name ?? ""})`}`;
  const h = et.forwardRef(d);
  return (h[N1] = c), h;
}
function Y1({ layoutId: i }) {
  const l = et.useContext(Iy).id;
  return l && i !== void 0 ? l + "-" + i : i;
}
function G1(i, l) {
  et.useContext(cp).strict;
}
function X1(i) {
  const { drag: l, layout: u } = Ia;
  if (!l && !u) return {};
  const o = { ...l, ...u };
  return {
    MeasureLayout:
      (l != null && l.isEnabled(i)) || (u != null && u.isEnabled(i))
        ? o.MeasureLayout
        : void 0,
    ProjectionNode: o.ProjectionNode,
  };
}
const pp = (i) => (l) => typeof l == "string" && l.startsWith(i),
  mc = pp("--"),
  Z1 = pp("var(--"),
  yc = (i) => (Z1(i) ? Q1.test(i.split("/*")[0].trim()) : !1),
  Q1 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  dl = {};
function K1(i) {
  for (const l in i) (dl[l] = i[l]), mc(l) && (dl[l].isCSSVariable = !0);
}
const ei = [
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
  oa = new Set(ei);
function gp(i, { layout: l, layoutId: u }) {
  return (
    oa.has(i) ||
    i.startsWith("origin") ||
    ((l || u !== void 0) && (!!dl[i] || i === "opacity"))
  );
}
const te = (i) => !!(i && i.getVelocity),
  vp = (i, l) => (l && typeof i == "number" ? l.transform(i) : i),
  rn = (i, l, u) => (u > l ? l : u < i ? i : u),
  ni = {
    test: (i) => typeof i == "number",
    parse: parseFloat,
    transform: (i) => i,
  },
  ml = { ...ni, transform: (i) => rn(0, 1, i) },
  js = { ...ni, default: 1 },
  vl = (i) => ({
    test: (l) =>
      typeof l == "string" && l.endsWith(i) && l.split(" ").length === 1,
    parse: parseFloat,
    transform: (l) => `${l}${i}`,
  }),
  Nn = vl("deg"),
  Qe = vl("%"),
  $ = vl("px"),
  J1 = vl("vh"),
  P1 = vl("vw"),
  Xm = {
    ...Qe,
    parse: (i) => Qe.parse(i) / 100,
    transform: (i) => Qe.transform(i * 100),
  },
  k1 = {
    borderWidth: $,
    borderTopWidth: $,
    borderRightWidth: $,
    borderBottomWidth: $,
    borderLeftWidth: $,
    borderRadius: $,
    radius: $,
    borderTopLeftRadius: $,
    borderTopRightRadius: $,
    borderBottomRightRadius: $,
    borderBottomLeftRadius: $,
    width: $,
    maxWidth: $,
    height: $,
    maxHeight: $,
    top: $,
    right: $,
    bottom: $,
    left: $,
    padding: $,
    paddingTop: $,
    paddingRight: $,
    paddingBottom: $,
    paddingLeft: $,
    margin: $,
    marginTop: $,
    marginRight: $,
    marginBottom: $,
    marginLeft: $,
    backgroundPositionX: $,
    backgroundPositionY: $,
  },
  F1 = {
    rotate: Nn,
    rotateX: Nn,
    rotateY: Nn,
    rotateZ: Nn,
    scale: js,
    scaleX: js,
    scaleY: js,
    scaleZ: js,
    skew: Nn,
    skewX: Nn,
    skewY: Nn,
    distance: $,
    translateX: $,
    translateY: $,
    translateZ: $,
    x: $,
    y: $,
    z: $,
    perspective: $,
    transformPerspective: $,
    opacity: ml,
    originX: Xm,
    originY: Xm,
    originZ: $,
  },
  Zm = { ...ni, transform: Math.round },
  pc = {
    ...k1,
    ...F1,
    zIndex: Zm,
    size: $,
    fillOpacity: ml,
    strokeOpacity: ml,
    numOctaves: Zm,
  },
  W1 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  $1 = ei.length;
function I1(i, l, u) {
  let o = "",
    c = !0;
  for (let d = 0; d < $1; d++) {
    const h = ei[d],
      m = i[h];
    if (m === void 0) continue;
    let p = !0;
    if (
      (typeof m == "number"
        ? (p = m === (h.startsWith("scale") ? 1 : 0))
        : (p = parseFloat(m) === 0),
      !p || u)
    ) {
      const g = vp(m, pc[h]);
      if (!p) {
        c = !1;
        const v = W1[h] || h;
        o += `${v}(${g}) `;
      }
      u && (l[h] = g);
    }
  }
  return (o = o.trim()), u ? (o = u(l, c ? "" : o)) : c && (o = "none"), o;
}
function gc(i, l, u) {
  const { style: o, vars: c, transformOrigin: d } = i;
  let h = !1,
    m = !1;
  for (const p in l) {
    const g = l[p];
    if (oa.has(p)) {
      h = !0;
      continue;
    } else if (mc(p)) {
      c[p] = g;
      continue;
    } else {
      const v = vp(g, pc[p]);
      p.startsWith("origin") ? ((m = !0), (d[p] = v)) : (o[p] = v);
    }
  }
  if (
    (l.transform ||
      (h || u
        ? (o.transform = I1(l, i.transform, u))
        : o.transform && (o.transform = "none")),
    m)
  ) {
    const { originX: p = "50%", originY: g = "50%", originZ: v = 0 } = d;
    o.transformOrigin = `${p} ${g} ${v}`;
  }
}
const vc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Sp(i, l, u) {
  for (const o in l) !te(l[o]) && !gp(o, u) && (i[o] = l[o]);
}
function tS({ transformTemplate: i }, l) {
  return et.useMemo(() => {
    const u = vc();
    return gc(u, l, i), Object.assign({}, u.vars, u.style);
  }, [l]);
}
function eS(i, l) {
  const u = i.style || {},
    o = {};
  return Sp(o, u, i), Object.assign(o, tS(i, l)), o;
}
function nS(i, l) {
  const u = {},
    o = eS(i, l);
  return (
    i.drag &&
      i.dragListener !== !1 &&
      ((u.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
      (o.touchAction =
        i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`)),
    i.tabIndex === void 0 &&
      (i.onTap || i.onTapStart || i.whileTap) &&
      (u.tabIndex = 0),
    (u.style = o),
    u
  );
}
const aS = [
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
function Sc(i) {
  return typeof i != "string" || i.includes("-")
    ? !1
    : !!(aS.indexOf(i) > -1 || /[A-Z]/u.test(i));
}
const iS = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  lS = { offset: "strokeDashoffset", array: "strokeDasharray" };
function sS(i, l, u = 1, o = 0, c = !0) {
  i.pathLength = 1;
  const d = c ? iS : lS;
  i[d.offset] = $.transform(-o);
  const h = $.transform(l),
    m = $.transform(u);
  i[d.array] = `${h} ${m}`;
}
function Qm(i, l, u) {
  return typeof i == "string" ? i : $.transform(l + u * i);
}
function uS(i, l, u) {
  const o = Qm(l, i.x, i.width),
    c = Qm(u, i.y, i.height);
  return `${o} ${c}`;
}
function Tc(
  i,
  {
    attrX: l,
    attrY: u,
    attrScale: o,
    originX: c,
    originY: d,
    pathLength: h,
    pathSpacing: m = 1,
    pathOffset: p = 0,
    ...g
  },
  v,
  T
) {
  if ((gc(i, g, T), v)) {
    i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
    return;
  }
  (i.attrs = i.style), (i.style = {});
  const { attrs: x, style: V, dimensions: N } = i;
  x.transform && (N && (V.transform = x.transform), delete x.transform),
    N &&
      (c !== void 0 || d !== void 0 || V.transform) &&
      (V.transformOrigin = uS(
        N,
        c !== void 0 ? c : 0.5,
        d !== void 0 ? d : 0.5
      )),
    l !== void 0 && (x.x = l),
    u !== void 0 && (x.y = u),
    o !== void 0 && (x.scale = o),
    h !== void 0 && sS(x, h, m, p, !1);
}
const Tp = () => ({ ...vc(), attrs: {} }),
  bc = (i) => typeof i == "string" && i.toLowerCase() === "svg";
function oS(i, l, u, o) {
  const c = et.useMemo(() => {
    const d = Tp();
    return (
      Tc(d, l, bc(o), i.transformTemplate),
      { ...d.attrs, style: { ...d.style } }
    );
  }, [l]);
  if (i.style) {
    const d = {};
    Sp(d, i.style, i), (c.style = { ...d, ...c.style });
  }
  return c;
}
function rS(i = !1) {
  return (u, o, c, { latestValues: d }, h) => {
    const p = (Sc(u) ? oS : nS)(o, d, h, u),
      g = z1(o, typeof u == "string", i),
      v = u !== et.Fragment ? { ...g, ...p, ref: c } : {},
      { children: T } = o,
      x = et.useMemo(() => (te(T) ? T.get() : T), [T]);
    return et.createElement(u, { ...v, children: x });
  };
}
function Km(i) {
  const l = [{}, {}];
  return (
    i == null ||
      i.values.forEach((u, o) => {
        (l[0][o] = u.get()), (l[1][o] = u.getVelocity());
      }),
    l
  );
}
function Ac(i, l, u, o) {
  if (typeof l == "function") {
    const [c, d] = Km(o);
    l = l(u !== void 0 ? u : i.custom, c, d);
  }
  if (
    (typeof l == "string" && (l = i.variants && i.variants[l]),
    typeof l == "function")
  ) {
    const [c, d] = Km(o);
    l = l(u !== void 0 ? u : i.custom, c, d);
  }
  return l;
}
const Nr = (i) => Array.isArray(i),
  cS = (i) => !!(i && typeof i == "object" && i.mix && i.toValue),
  fS = (i) => (Nr(i) ? i[i.length - 1] || 0 : i);
function Ys(i) {
  const l = te(i) ? i.get() : i;
  return cS(l) ? l.toValue() : l;
}
function hS(
  { scrapeMotionValuesFromProps: i, createRenderState: l, onUpdate: u },
  o,
  c,
  d
) {
  const h = { latestValues: dS(o, c, d, i), renderState: l() };
  return (
    u &&
      ((h.onMount = (m) => u({ props: o, current: m, ...h })),
      (h.onUpdate = (m) => u(m))),
    h
  );
}
const bp = (i) => (l, u) => {
  const o = et.useContext(Fs),
    c = et.useContext(tc),
    d = () => hS(i, l, o, c);
  return u ? d() : l1(d);
};
function dS(i, l, u, o) {
  const c = {},
    d = o(i, {});
  for (const x in d) c[x] = Ys(d[x]);
  let { initial: h, animate: m } = i;
  const p = $s(i),
    g = hp(i);
  l &&
    g &&
    !p &&
    i.inherit !== !1 &&
    (h === void 0 && (h = l.initial), m === void 0 && (m = l.animate));
  let v = u ? u.initial === !1 : !1;
  v = v || h === !1;
  const T = v ? m : h;
  if (T && typeof T != "boolean" && !Ws(T)) {
    const x = Array.isArray(T) ? T : [T];
    for (let V = 0; V < x.length; V++) {
      const N = Ac(i, x[V]);
      if (N) {
        const { transitionEnd: j, transition: q, ...H } = N;
        for (const Q in H) {
          let G = H[Q];
          if (Array.isArray(G)) {
            const ot = v ? G.length - 1 : 0;
            G = G[ot];
          }
          G !== null && (c[Q] = G);
        }
        for (const Q in j) c[Q] = j[Q];
      }
    }
  }
  return c;
}
function Ec(i, l, u) {
  var d;
  const { style: o } = i,
    c = {};
  for (const h in o)
    (te(o[h]) ||
      (l.style && te(l.style[h])) ||
      gp(h, i) ||
      ((d = u == null ? void 0 : u.getValue(h)) == null
        ? void 0
        : d.liveStyle) !== void 0) &&
      (c[h] = o[h]);
  return c;
}
const mS = {
  useVisualState: bp({
    scrapeMotionValuesFromProps: Ec,
    createRenderState: vc,
  }),
};
function Ap(i, l) {
  try {
    l.dimensions =
      typeof i.getBBox == "function" ? i.getBBox() : i.getBoundingClientRect();
  } catch {
    l.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
function Ep(i, { style: l, vars: u }, o, c) {
  Object.assign(i.style, l, c && c.getProjectionStyles(o));
  for (const d in u) i.style.setProperty(d, u[d]);
}
const Mp = new Set([
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
function xp(i, l, u, o) {
  Ep(i, l, void 0, o);
  for (const c in l.attrs) i.setAttribute(Mp.has(c) ? c : dc(c), l.attrs[c]);
}
function Dp(i, l, u) {
  const o = Ec(i, l, u);
  for (const c in i)
    if (te(i[c]) || te(l[c])) {
      const d =
        ei.indexOf(c) !== -1
          ? "attr" + c.charAt(0).toUpperCase() + c.substring(1)
          : c;
      o[d] = i[c];
    }
  return o;
}
const Jm = ["x", "y", "width", "height", "cx", "cy", "r"],
  yS = {
    useVisualState: bp({
      scrapeMotionValuesFromProps: Dp,
      createRenderState: Tp,
      onUpdate: ({
        props: i,
        prevProps: l,
        current: u,
        renderState: o,
        latestValues: c,
      }) => {
        if (!u) return;
        let d = !!i.drag;
        if (!d) {
          for (const m in c)
            if (oa.has(m)) {
              d = !0;
              break;
            }
        }
        if (!d) return;
        let h = !l;
        if (l)
          for (let m = 0; m < Jm.length; m++) {
            const p = Jm[m];
            i[p] !== l[p] && (h = !0);
          }
        h &&
          At.read(() => {
            Ap(u, o),
              At.render(() => {
                Tc(o, c, bc(u.tagName), i.transformTemplate), xp(u, o);
              });
          });
      },
    }),
  };
function pS(i, l) {
  return function (o, { forwardMotionProps: c } = { forwardMotionProps: !1 }) {
    const h = {
      ...(Sc(o) ? yS : mS),
      preloadedFeatures: i,
      useRender: rS(c),
      createVisualElement: l,
      Component: o,
    };
    return q1(h);
  };
}
function yl(i, l, u) {
  const o = i.getProps();
  return Ac(o, l, u !== void 0 ? u : o.custom, i);
}
const Rp = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...ei,
]);
function gS(i, l, u) {
  i.hasValue(l) ? i.getValue(l).set(u) : i.addValue(l, fl(u));
}
function vS(i, l) {
  const u = yl(i, l);
  let { transitionEnd: o = {}, transition: c = {}, ...d } = u || {};
  d = { ...d, ...o };
  for (const h in d) {
    const m = fS(d[h]);
    gS(i, h, m);
  }
}
function SS(i) {
  return !!(te(i) && i.add);
}
function Lr(i, l) {
  const u = i.getValue("willChange");
  if (SS(u)) return u.add(l);
}
function Op(i) {
  return i.props[dp];
}
const Vp = (i, l, u) =>
    (((1 - 3 * u + 3 * l) * i + (3 * u - 6 * l)) * i + 3 * l) * i,
  TS = 1e-7,
  bS = 12;
function AS(i, l, u, o, c) {
  let d,
    h,
    m = 0;
  do (h = l + (u - l) / 2), (d = Vp(h, o, c) - i), d > 0 ? (u = h) : (l = h);
  while (Math.abs(d) > TS && ++m < bS);
  return h;
}
function Sl(i, l, u, o) {
  if (i === l && u === o) return Ve;
  const c = (d) => AS(d, 0, 1, i, u);
  return (d) => (d === 0 || d === 1 ? d : Vp(c(d), l, o));
}
const Cp = (i) => (l) => (l <= 0.5 ? i(2 * l) / 2 : (2 - i(2 * (1 - l))) / 2),
  zp = (i) => (l) => 1 - i(1 - l),
  Up = Sl(0.33, 1.53, 0.69, 0.99),
  Mc = zp(Up),
  _p = Cp(Mc),
  Bp = (i) =>
    (i *= 2) < 1 ? 0.5 * Mc(i) : 0.5 * (2 - Math.pow(2, -10 * (i - 1))),
  xc = (i) => 1 - Math.sin(Math.acos(i)),
  Np = zp(xc),
  Lp = Cp(xc),
  Hp = (i) => /^0[^.\s]+$/u.test(i);
function ES(i) {
  return typeof i == "number"
    ? i === 0
    : i !== null
      ? i === "none" || i === "0" || Hp(i)
      : !0;
}
const ll = (i) => Math.round(i * 1e5) / 1e5,
  Dc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function MS(i) {
  return i == null;
}
const xS =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Rc = (i, l) => (u) =>
    !!(
      (typeof u == "string" && xS.test(u) && u.startsWith(i)) ||
      (l && !MS(u) && Object.prototype.hasOwnProperty.call(u, l))
    ),
  jp = (i, l, u) => (o) => {
    if (typeof o != "string") return o;
    const [c, d, h, m] = o.match(Dc);
    return {
      [i]: parseFloat(c),
      [l]: parseFloat(d),
      [u]: parseFloat(h),
      alpha: m !== void 0 ? parseFloat(m) : 1,
    };
  },
  DS = (i) => rn(0, 255, i),
  Mr = { ...ni, transform: (i) => Math.round(DS(i)) },
  la = {
    test: Rc("rgb", "red"),
    parse: jp("red", "green", "blue"),
    transform: ({ red: i, green: l, blue: u, alpha: o = 1 }) =>
      "rgba(" +
      Mr.transform(i) +
      ", " +
      Mr.transform(l) +
      ", " +
      Mr.transform(u) +
      ", " +
      ll(ml.transform(o)) +
      ")",
  };
function RS(i) {
  let l = "",
    u = "",
    o = "",
    c = "";
  return (
    i.length > 5
      ? ((l = i.substring(1, 3)),
        (u = i.substring(3, 5)),
        (o = i.substring(5, 7)),
        (c = i.substring(7, 9)))
      : ((l = i.substring(1, 2)),
        (u = i.substring(2, 3)),
        (o = i.substring(3, 4)),
        (c = i.substring(4, 5)),
        (l += l),
        (u += u),
        (o += o),
        (c += c)),
    {
      red: parseInt(l, 16),
      green: parseInt(u, 16),
      blue: parseInt(o, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const Hr = { test: Rc("#"), parse: RS, transform: la.transform },
  ka = {
    test: Rc("hsl", "hue"),
    parse: jp("hue", "saturation", "lightness"),
    transform: ({ hue: i, saturation: l, lightness: u, alpha: o = 1 }) =>
      "hsla(" +
      Math.round(i) +
      ", " +
      Qe.transform(ll(l)) +
      ", " +
      Qe.transform(ll(u)) +
      ", " +
      ll(ml.transform(o)) +
      ")",
  },
  It = {
    test: (i) => la.test(i) || Hr.test(i) || ka.test(i),
    parse: (i) =>
      la.test(i) ? la.parse(i) : ka.test(i) ? ka.parse(i) : Hr.parse(i),
    transform: (i) =>
      typeof i == "string"
        ? i
        : i.hasOwnProperty("red")
          ? la.transform(i)
          : ka.transform(i),
  },
  OS =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function VS(i) {
  var l, u;
  return (
    isNaN(i) &&
    typeof i == "string" &&
    (((l = i.match(Dc)) == null ? void 0 : l.length) || 0) +
      (((u = i.match(OS)) == null ? void 0 : u.length) || 0) >
      0
  );
}
const wp = "number",
  qp = "color",
  CS = "var",
  zS = "var(",
  Pm = "${}",
  US =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function pl(i) {
  const l = i.toString(),
    u = [],
    o = { color: [], number: [], var: [] },
    c = [];
  let d = 0;
  const m = l
    .replace(
      US,
      (p) => (
        It.test(p)
          ? (o.color.push(d), c.push(qp), u.push(It.parse(p)))
          : p.startsWith(zS)
            ? (o.var.push(d), c.push(CS), u.push(p))
            : (o.number.push(d), c.push(wp), u.push(parseFloat(p))),
        ++d,
        Pm
      )
    )
    .split(Pm);
  return { values: u, split: m, indexes: o, types: c };
}
function Yp(i) {
  return pl(i).values;
}
function Gp(i) {
  const { split: l, types: u } = pl(i),
    o = l.length;
  return (c) => {
    let d = "";
    for (let h = 0; h < o; h++)
      if (((d += l[h]), c[h] !== void 0)) {
        const m = u[h];
        m === wp
          ? (d += ll(c[h]))
          : m === qp
            ? (d += It.transform(c[h]))
            : (d += c[h]);
      }
    return d;
  };
}
const _S = (i) => (typeof i == "number" ? 0 : i);
function BS(i) {
  const l = Yp(i);
  return Gp(i)(l.map(_S));
}
const Hn = {
    test: VS,
    parse: Yp,
    createTransformer: Gp,
    getAnimatableNone: BS,
  },
  NS = new Set(["brightness", "contrast", "saturate", "opacity"]);
function LS(i) {
  const [l, u] = i.slice(0, -1).split("(");
  if (l === "drop-shadow") return i;
  const [o] = u.match(Dc) || [];
  if (!o) return i;
  const c = u.replace(o, "");
  let d = NS.has(l) ? 1 : 0;
  return o !== u && (d *= 100), l + "(" + d + c + ")";
}
const HS = /\b([a-z-]*)\(.*?\)/gu,
  jr = {
    ...Hn,
    getAnimatableNone: (i) => {
      const l = i.match(HS);
      return l ? l.map(LS).join(" ") : i;
    },
  },
  jS = {
    ...pc,
    color: It,
    backgroundColor: It,
    outlineColor: It,
    fill: It,
    stroke: It,
    borderColor: It,
    borderTopColor: It,
    borderRightColor: It,
    borderBottomColor: It,
    borderLeftColor: It,
    filter: jr,
    WebkitFilter: jr,
  },
  Xp = (i) => jS[i];
function Zp(i, l) {
  let u = Xp(i);
  return (
    u !== jr && (u = Hn), u.getAnimatableNone ? u.getAnimatableNone(l) : void 0
  );
}
const wS = new Set(["auto", "none", "0"]);
function qS(i, l, u) {
  let o = 0,
    c;
  for (; o < i.length && !c; ) {
    const d = i[o];
    typeof d == "string" && !wS.has(d) && pl(d).values.length && (c = i[o]),
      o++;
  }
  if (c && u) for (const d of l) i[d] = Zp(u, c);
}
const sa = (i) => (i * 180) / Math.PI,
  wr = (i) => {
    const l = sa(Math.atan2(i[1], i[0]));
    return qr(l);
  },
  YS = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (i) => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
    rotate: wr,
    rotateZ: wr,
    skewX: (i) => sa(Math.atan(i[1])),
    skewY: (i) => sa(Math.atan(i[2])),
    skew: (i) => (Math.abs(i[1]) + Math.abs(i[2])) / 2,
  },
  qr = (i) => ((i = i % 360), i < 0 && (i += 360), i),
  km = wr,
  Fm = (i) => Math.sqrt(i[0] * i[0] + i[1] * i[1]),
  Wm = (i) => Math.sqrt(i[4] * i[4] + i[5] * i[5]),
  GS = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Fm,
    scaleY: Wm,
    scale: (i) => (Fm(i) + Wm(i)) / 2,
    rotateX: (i) => qr(sa(Math.atan2(i[6], i[5]))),
    rotateY: (i) => qr(sa(Math.atan2(-i[2], i[0]))),
    rotateZ: km,
    rotate: km,
    skewX: (i) => sa(Math.atan(i[4])),
    skewY: (i) => sa(Math.atan(i[1])),
    skew: (i) => (Math.abs(i[1]) + Math.abs(i[4])) / 2,
  };
function $m(i) {
  return i.includes("scale") ? 1 : 0;
}
function Yr(i, l) {
  if (!i || i === "none") return $m(l);
  const u = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let o, c;
  if (u) (o = GS), (c = u);
  else {
    const m = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (o = YS), (c = m);
  }
  if (!c) return $m(l);
  const d = o[l],
    h = c[1].split(",").map(ZS);
  return typeof d == "function" ? d(h) : h[d];
}
const XS = (i, l) => {
  const { transform: u = "none" } = getComputedStyle(i);
  return Yr(u, l);
};
function ZS(i) {
  return parseFloat(i.trim());
}
const Im = (i) => i === ni || i === $,
  QS = new Set(["x", "y", "z"]),
  KS = ei.filter((i) => !QS.has(i));
function JS(i) {
  const l = [];
  return (
    KS.forEach((u) => {
      const o = i.getValue(u);
      o !== void 0 &&
        (l.push([u, o.get()]), o.set(u.startsWith("scale") ? 1 : 0));
    }),
    l
  );
}
const ti = {
  width: ({ x: i }, { paddingLeft: l = "0", paddingRight: u = "0" }) =>
    i.max - i.min - parseFloat(l) - parseFloat(u),
  height: ({ y: i }, { paddingTop: l = "0", paddingBottom: u = "0" }) =>
    i.max - i.min - parseFloat(l) - parseFloat(u),
  top: (i, { top: l }) => parseFloat(l),
  left: (i, { left: l }) => parseFloat(l),
  bottom: ({ y: i }, { top: l }) => parseFloat(l) + (i.max - i.min),
  right: ({ x: i }, { left: l }) => parseFloat(l) + (i.max - i.min),
  x: (i, { transform: l }) => Yr(l, "x"),
  y: (i, { transform: l }) => Yr(l, "y"),
};
ti.translateX = ti.x;
ti.translateY = ti.y;
const ua = new Set();
let Gr = !1,
  Xr = !1;
function Qp() {
  if (Xr) {
    const i = Array.from(ua).filter((o) => o.needsMeasurement),
      l = new Set(i.map((o) => o.element)),
      u = new Map();
    l.forEach((o) => {
      const c = JS(o);
      c.length && (u.set(o, c), o.render());
    }),
      i.forEach((o) => o.measureInitialState()),
      l.forEach((o) => {
        o.render();
        const c = u.get(o);
        c &&
          c.forEach(([d, h]) => {
            var m;
            (m = o.getValue(d)) == null || m.set(h);
          });
      }),
      i.forEach((o) => o.measureEndState()),
      i.forEach((o) => {
        o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY);
      });
  }
  (Xr = !1), (Gr = !1), ua.forEach((i) => i.complete()), ua.clear();
}
function Kp() {
  ua.forEach((i) => {
    i.readKeyframes(), i.needsMeasurement && (Xr = !0);
  });
}
function PS() {
  Kp(), Qp();
}
class Oc {
  constructor(l, u, o, c, d, h = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...l]),
      (this.onComplete = u),
      (this.name = o),
      (this.motionValue = c),
      (this.element = d),
      (this.isAsync = h);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (ua.add(this),
          Gr || ((Gr = !0), At.read(Kp), At.resolveKeyframes(Qp)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: l,
      name: u,
      element: o,
      motionValue: c,
    } = this;
    for (let d = 0; d < l.length; d++)
      if (l[d] === null)
        if (d === 0) {
          const h = c == null ? void 0 : c.get(),
            m = l[l.length - 1];
          if (h !== void 0) l[0] = h;
          else if (o && u) {
            const p = o.readValue(u, m);
            p != null && (l[0] = p);
          }
          l[0] === void 0 && (l[0] = m), c && h === void 0 && c.set(l[0]);
        } else l[d] = l[d - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      ua.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), ua.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Jp = (i) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i),
  kS = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function FS(i) {
  const l = kS.exec(i);
  if (!l) return [,];
  const [, u, o, c] = l;
  return [`--${u ?? o}`, c];
}
function Pp(i, l, u = 1) {
  const [o, c] = FS(i);
  if (!o) return;
  const d = window.getComputedStyle(l).getPropertyValue(o);
  if (d) {
    const h = d.trim();
    return Jp(h) ? parseFloat(h) : h;
  }
  return yc(c) ? Pp(c, l, u + 1) : c;
}
const kp = (i) => (l) => l.test(i),
  WS = { test: (i) => i === "auto", parse: (i) => i },
  Fp = [ni, $, Qe, Nn, P1, J1, WS],
  ty = (i) => Fp.find(kp(i));
class Wp extends Oc {
  constructor(l, u, o, c, d) {
    super(l, u, o, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: u, name: o } = this;
    if (!u || !u.current) return;
    super.readKeyframes();
    for (let p = 0; p < l.length; p++) {
      let g = l[p];
      if (typeof g == "string" && ((g = g.trim()), yc(g))) {
        const v = Pp(g, u.current);
        v !== void 0 && (l[p] = v),
          p === l.length - 1 && (this.finalKeyframe = g);
      }
    }
    if ((this.resolveNoneKeyframes(), !Rp.has(o) || l.length !== 2)) return;
    const [c, d] = l,
      h = ty(c),
      m = ty(d);
    if (h !== m)
      if (Im(h) && Im(m))
        for (let p = 0; p < l.length; p++) {
          const g = l[p];
          typeof g == "string" && (l[p] = parseFloat(g));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: u } = this,
      o = [];
    for (let c = 0; c < l.length; c++) ES(l[c]) && o.push(c);
    o.length && qS(l, o, u);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: u, name: o } = this;
    if (!l || !l.current) return;
    o === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = ti[o](
        l.measureViewportBox(),
        window.getComputedStyle(l.current)
      )),
      (u[0] = this.measuredOrigin);
    const c = u[u.length - 1];
    c !== void 0 && l.getValue(o, c).jump(c, !1);
  }
  measureEndState() {
    var m;
    const { element: l, name: u, unresolvedKeyframes: o } = this;
    if (!l || !l.current) return;
    const c = l.getValue(u);
    c && c.jump(this.measuredOrigin, !1);
    const d = o.length - 1,
      h = o[d];
    (o[d] = ti[u](l.measureViewportBox(), window.getComputedStyle(l.current))),
      h !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = h),
      (m = this.removedTransforms) != null &&
        m.length &&
        this.removedTransforms.forEach(([p, g]) => {
          l.getValue(p).set(g);
        }),
      this.resolveNoneKeyframes();
  }
}
const ey = (i, l) =>
  l === "zIndex"
    ? !1
    : !!(
        typeof i == "number" ||
        Array.isArray(i) ||
        (typeof i == "string" &&
          (Hn.test(i) || i === "0") &&
          !i.startsWith("url("))
      );
function $S(i) {
  const l = i[0];
  if (i.length === 1) return !0;
  for (let u = 0; u < i.length; u++) if (i[u] !== l) return !0;
}
function IS(i, l, u, o) {
  const c = i[0];
  if (c === null) return !1;
  if (l === "display" || l === "visibility") return !0;
  const d = i[i.length - 1],
    h = ey(c, l),
    m = ey(d, l);
  return !h || !m ? !1 : $S(i) || ((u === "spring" || sc(u)) && o);
}
const tT = (i) => i !== null;
function Is(i, { repeat: l, repeatType: u = "loop" }, o) {
  const c = i.filter(tT),
    d = l && u !== "loop" && l % 2 === 1 ? 0 : c.length - 1;
  return !d || o === void 0 ? c[d] : o;
}
const eT = 40;
class $p {
  constructor({
    autoplay: l = !0,
    delay: u = 0,
    type: o = "keyframes",
    repeat: c = 0,
    repeatDelay: d = 0,
    repeatType: h = "loop",
    ...m
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Ze.now()),
      (this.options = {
        autoplay: l,
        delay: u,
        type: o,
        repeat: c,
        repeatDelay: d,
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
    return !this._resolved && !this.hasAttemptedResolve && PS(), this._resolved;
  }
  onKeyframesResolved(l, u) {
    (this.resolvedAt = Ze.now()), (this.hasAttemptedResolve = !0);
    const {
      name: o,
      type: c,
      velocity: d,
      delay: h,
      onComplete: m,
      onUpdate: p,
      isGenerator: g,
    } = this.options;
    if (!g && !IS(l, o, c, d))
      if (h) this.options.duration = 0;
      else {
        p && p(Is(l, this.options, u)), m && m(), this.resolveFinishedPromise();
        return;
      }
    const v = this.initPlayback(l, u);
    v !== !1 &&
      ((this._resolved = { keyframes: l, finalKeyframe: u, ...v }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(l, u) {
    return this.currentFinishedPromise.then(l, u);
  }
  flatten() {
    this.options.allowFlatten &&
      ((this.options.type = "keyframes"), (this.options.ease = "linear"));
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((l) => {
      this.resolveFinishedPromise = l;
    });
  }
}
const Rt = (i, l, u) => i + (l - i) * u;
function xr(i, l, u) {
  return (
    u < 0 && (u += 1),
    u > 1 && (u -= 1),
    u < 1 / 6
      ? i + (l - i) * 6 * u
      : u < 1 / 2
        ? l
        : u < 2 / 3
          ? i + (l - i) * (2 / 3 - u) * 6
          : i
  );
}
function nT({ hue: i, saturation: l, lightness: u, alpha: o }) {
  (i /= 360), (l /= 100), (u /= 100);
  let c = 0,
    d = 0,
    h = 0;
  if (!l) c = d = h = u;
  else {
    const m = u < 0.5 ? u * (1 + l) : u + l - u * l,
      p = 2 * u - m;
    (c = xr(p, m, i + 1 / 3)), (d = xr(p, m, i)), (h = xr(p, m, i - 1 / 3));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(h * 255),
    alpha: o,
  };
}
function Qs(i, l) {
  return (u) => (u > 0 ? l : i);
}
const Dr = (i, l, u) => {
    const o = i * i,
      c = u * (l * l - o) + o;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  aT = [Hr, la, ka],
  iT = (i) => aT.find((l) => l.test(i));
function ny(i) {
  const l = iT(i);
  if (!l) return !1;
  let u = l.parse(i);
  return l === ka && (u = nT(u)), u;
}
const ay = (i, l) => {
    const u = ny(i),
      o = ny(l);
    if (!u || !o) return Qs(i, l);
    const c = { ...u };
    return (d) => (
      (c.red = Dr(u.red, o.red, d)),
      (c.green = Dr(u.green, o.green, d)),
      (c.blue = Dr(u.blue, o.blue, d)),
      (c.alpha = Rt(u.alpha, o.alpha, d)),
      la.transform(c)
    );
  },
  lT = (i, l) => (u) => l(i(u)),
  Tl = (...i) => i.reduce(lT),
  Zr = new Set(["none", "hidden"]);
function sT(i, l) {
  return Zr.has(i) ? (u) => (u <= 0 ? i : l) : (u) => (u >= 1 ? l : i);
}
function uT(i, l) {
  return (u) => Rt(i, l, u);
}
function Vc(i) {
  return typeof i == "number"
    ? uT
    : typeof i == "string"
      ? yc(i)
        ? Qs
        : It.test(i)
          ? ay
          : cT
      : Array.isArray(i)
        ? Ip
        : typeof i == "object"
          ? It.test(i)
            ? ay
            : oT
          : Qs;
}
function Ip(i, l) {
  const u = [...i],
    o = u.length,
    c = i.map((d, h) => Vc(d)(d, l[h]));
  return (d) => {
    for (let h = 0; h < o; h++) u[h] = c[h](d);
    return u;
  };
}
function oT(i, l) {
  const u = { ...i, ...l },
    o = {};
  for (const c in u)
    i[c] !== void 0 && l[c] !== void 0 && (o[c] = Vc(i[c])(i[c], l[c]));
  return (c) => {
    for (const d in o) u[d] = o[d](c);
    return u;
  };
}
function rT(i, l) {
  const u = [],
    o = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const d = l.types[c],
      h = i.indexes[d][o[d]],
      m = i.values[h] ?? 0;
    (u[c] = m), o[d]++;
  }
  return u;
}
const cT = (i, l) => {
  const u = Hn.createTransformer(l),
    o = pl(i),
    c = pl(l);
  return o.indexes.var.length === c.indexes.var.length &&
    o.indexes.color.length === c.indexes.color.length &&
    o.indexes.number.length >= c.indexes.number.length
    ? (Zr.has(i) && !c.values.length) || (Zr.has(l) && !o.values.length)
      ? sT(i, l)
      : Tl(Ip(rT(o, c), c.values), u)
    : Qs(i, l);
};
function tg(i, l, u) {
  return typeof i == "number" && typeof l == "number" && typeof u == "number"
    ? Rt(i, l, u)
    : Vc(i)(i, l);
}
const fT = 5;
function eg(i, l, u) {
  const o = Math.max(l - fT, 0);
  return np(u - i(o), l - o);
}
const Ct = {
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
  iy = 0.001;
function hT({
  duration: i = Ct.duration,
  bounce: l = Ct.bounce,
  velocity: u = Ct.velocity,
  mass: o = Ct.mass,
}) {
  let c,
    d,
    h = 1 - l;
  (h = rn(Ct.minDamping, Ct.maxDamping, h)),
    (i = rn(Ct.minDuration, Ct.maxDuration, Xe(i))),
    h < 1
      ? ((c = (g) => {
          const v = g * h,
            T = v * i,
            x = v - u,
            V = Qr(g, h),
            N = Math.exp(-T);
          return iy - (x / V) * N;
        }),
        (d = (g) => {
          const T = g * h * i,
            x = T * u + u,
            V = Math.pow(h, 2) * Math.pow(g, 2) * i,
            N = Math.exp(-T),
            j = Qr(Math.pow(g, 2), h);
          return ((-c(g) + iy > 0 ? -1 : 1) * ((x - V) * N)) / j;
        }))
      : ((c = (g) => {
          const v = Math.exp(-g * i),
            T = (g - u) * i + 1;
          return -0.001 + v * T;
        }),
        (d = (g) => {
          const v = Math.exp(-g * i),
            T = (u - g) * (i * i);
          return v * T;
        }));
  const m = 5 / i,
    p = mT(c, d, m);
  if (((i = Ge(i)), isNaN(p)))
    return { stiffness: Ct.stiffness, damping: Ct.damping, duration: i };
  {
    const g = Math.pow(p, 2) * o;
    return { stiffness: g, damping: h * 2 * Math.sqrt(o * g), duration: i };
  }
}
const dT = 12;
function mT(i, l, u) {
  let o = u;
  for (let c = 1; c < dT; c++) o = o - i(o) / l(o);
  return o;
}
function Qr(i, l) {
  return i * Math.sqrt(1 - l * l);
}
const yT = ["duration", "bounce"],
  pT = ["stiffness", "damping", "mass"];
function ly(i, l) {
  return l.some((u) => i[u] !== void 0);
}
function gT(i) {
  let l = {
    velocity: Ct.velocity,
    stiffness: Ct.stiffness,
    damping: Ct.damping,
    mass: Ct.mass,
    isResolvedFromDuration: !1,
    ...i,
  };
  if (!ly(i, pT) && ly(i, yT))
    if (i.visualDuration) {
      const u = i.visualDuration,
        o = (2 * Math.PI) / (u * 1.2),
        c = o * o,
        d = 2 * rn(0.05, 1, 1 - (i.bounce || 0)) * Math.sqrt(c);
      l = { ...l, mass: Ct.mass, stiffness: c, damping: d };
    } else {
      const u = hT(i);
      (l = { ...l, ...u, mass: Ct.mass }), (l.isResolvedFromDuration = !0);
    }
  return l;
}
function Ks(i = Ct.visualDuration, l = Ct.bounce) {
  const u =
    typeof i != "object"
      ? { visualDuration: i, keyframes: [0, 1], bounce: l }
      : i;
  let { restSpeed: o, restDelta: c } = u;
  const d = u.keyframes[0],
    h = u.keyframes[u.keyframes.length - 1],
    m = { done: !1, value: d },
    {
      stiffness: p,
      damping: g,
      mass: v,
      duration: T,
      velocity: x,
      isResolvedFromDuration: V,
    } = gT({ ...u, velocity: -Xe(u.velocity || 0) }),
    N = x || 0,
    j = g / (2 * Math.sqrt(p * v)),
    q = h - d,
    H = Xe(Math.sqrt(p / v)),
    Q = Math.abs(q) < 5;
  o || (o = Q ? Ct.restSpeed.granular : Ct.restSpeed.default),
    c || (c = Q ? Ct.restDelta.granular : Ct.restDelta.default);
  let G;
  if (j < 1) {
    const w = Qr(H, j);
    G = (at) => {
      const ht = Math.exp(-j * H * at);
      return (
        h -
        ht * (((N + j * H * q) / w) * Math.sin(w * at) + q * Math.cos(w * at))
      );
    };
  } else if (j === 1) G = (w) => h - Math.exp(-H * w) * (q + (N + H * q) * w);
  else {
    const w = H * Math.sqrt(j * j - 1);
    G = (at) => {
      const ht = Math.exp(-j * H * at),
        P = Math.min(w * at, 300);
      return (
        h - (ht * ((N + j * H * q) * Math.sinh(P) + w * q * Math.cosh(P))) / w
      );
    };
  }
  const ot = {
    calculatedDuration: (V && T) || null,
    next: (w) => {
      const at = G(w);
      if (V) m.done = w >= T;
      else {
        let ht = 0;
        j < 1 && (ht = w === 0 ? Ge(N) : eg(G, w, at));
        const P = Math.abs(ht) <= o,
          Et = Math.abs(h - at) <= c;
        m.done = P && Et;
      }
      return (m.value = m.done ? h : at), m;
    },
    toString: () => {
      const w = Math.min(oc(ot), Xs),
        at = ap((ht) => ot.next(w * ht).value, w, 30);
      return w + "ms " + at;
    },
    toTransition: () => {},
  };
  return ot;
}
Ks.applyToOptions = (i) => {
  const l = y1(i, 100, Ks);
  return (
    (i.ease = cl() ? l.ease : "easeOut"),
    (i.duration = Ge(l.duration)),
    (i.type = "keyframes"),
    i
  );
};
function sy({
  keyframes: i,
  velocity: l = 0,
  power: u = 0.8,
  timeConstant: o = 325,
  bounceDamping: c = 10,
  bounceStiffness: d = 500,
  modifyTarget: h,
  min: m,
  max: p,
  restDelta: g = 0.5,
  restSpeed: v,
}) {
  const T = i[0],
    x = { done: !1, value: T },
    V = (P) => (m !== void 0 && P < m) || (p !== void 0 && P > p),
    N = (P) =>
      m === void 0
        ? p
        : p === void 0 || Math.abs(m - P) < Math.abs(p - P)
          ? m
          : p;
  let j = u * l;
  const q = T + j,
    H = h === void 0 ? q : h(q);
  H !== q && (j = H - T);
  const Q = (P) => -j * Math.exp(-P / o),
    G = (P) => H + Q(P),
    ot = (P) => {
      const Et = Q(P),
        Lt = G(P);
      (x.done = Math.abs(Et) <= g), (x.value = x.done ? H : Lt);
    };
  let w, at;
  const ht = (P) => {
    V(x.value) &&
      ((w = P),
      (at = Ks({
        keyframes: [x.value, N(x.value)],
        velocity: eg(G, P, x.value),
        damping: c,
        stiffness: d,
        restDelta: g,
        restSpeed: v,
      })));
  };
  return (
    ht(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let Et = !1;
        return (
          !at && w === void 0 && ((Et = !0), ot(P), ht(P)),
          w !== void 0 && P >= w ? at.next(P - w) : (!Et && ot(P), x)
        );
      },
    }
  );
}
const vT = Sl(0.42, 0, 1, 1),
  ST = Sl(0, 0, 0.58, 1),
  ng = Sl(0.42, 0, 0.58, 1),
  TT = (i) => Array.isArray(i) && typeof i[0] != "number",
  bT = {
    linear: Ve,
    easeIn: vT,
    easeInOut: ng,
    easeOut: ST,
    circIn: xc,
    circInOut: Lp,
    circOut: Np,
    backIn: Mc,
    backInOut: _p,
    backOut: Up,
    anticipate: Bp,
  },
  uy = (i) => {
    if (lc(i)) {
      ep(i.length === 4);
      const [l, u, o, c] = i;
      return Sl(l, u, o, c);
    } else if (typeof i == "string") return bT[i];
    return i;
  };
function AT(i, l, u) {
  const o = [],
    c = u || tg,
    d = i.length - 1;
  for (let h = 0; h < d; h++) {
    let m = c(i[h], i[h + 1]);
    if (l) {
      const p = Array.isArray(l) ? l[h] || Ve : l;
      m = Tl(p, m);
    }
    o.push(m);
  }
  return o;
}
function ET(i, l, { clamp: u = !0, ease: o, mixer: c } = {}) {
  const d = i.length;
  if ((ep(d === l.length), d === 1)) return () => l[0];
  if (d === 2 && l[0] === l[1]) return () => l[1];
  const h = i[0] === i[1];
  i[0] > i[d - 1] && ((i = [...i].reverse()), (l = [...l].reverse()));
  const m = AT(l, o, c),
    p = m.length,
    g = (v) => {
      if (h && v < i[0]) return l[0];
      let T = 0;
      if (p > 1) for (; T < i.length - 2 && !(v < i[T + 1]); T++);
      const x = rl(i[T], i[T + 1], v);
      return m[T](x);
    };
  return u ? (v) => g(rn(i[0], i[d - 1], v)) : g;
}
function MT(i, l) {
  const u = i[i.length - 1];
  for (let o = 1; o <= l; o++) {
    const c = rl(0, l, o);
    i.push(Rt(u, 1, c));
  }
}
function xT(i) {
  const l = [0];
  return MT(l, i.length - 1), l;
}
function DT(i, l) {
  return i.map((u) => u * l);
}
function RT(i, l) {
  return i.map(() => l || ng).splice(0, i.length - 1);
}
function Js({
  duration: i = 300,
  keyframes: l,
  times: u,
  ease: o = "easeInOut",
}) {
  const c = TT(o) ? o.map(uy) : uy(o),
    d = { done: !1, value: l[0] },
    h = DT(u && u.length === l.length ? u : xT(l), i),
    m = ET(h, l, { ease: Array.isArray(c) ? c : RT(l, c) });
  return {
    calculatedDuration: i,
    next: (p) => ((d.value = m(p)), (d.done = p >= i), d),
  };
}
const OT = (i) => {
    const l = ({ timestamp: u }) => i(u);
    return {
      start: () => At.update(l, !0),
      stop: () => Ln(l),
      now: () => (Pt.isProcessing ? Pt.timestamp : Ze.now()),
    };
  },
  VT = { decay: sy, inertia: sy, tween: Js, keyframes: Js, spring: Ks },
  CT = (i) => i / 100;
class Cc extends $p {
  constructor(l) {
    super(l),
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
        const { onStop: p } = this.options;
        p && p();
      });
    const { name: u, motionValue: o, element: c, keyframes: d } = this.options,
      h = (c == null ? void 0 : c.KeyframeResolver) || Oc,
      m = (p, g) => this.onKeyframesResolved(p, g);
    (this.resolver = new h(d, m, u, o, c)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(l) {
    const {
        type: u = "keyframes",
        repeat: o = 0,
        repeatDelay: c = 0,
        repeatType: d,
        velocity: h = 0,
      } = this.options,
      m = sc(u) ? u : VT[u] || Js;
    let p, g;
    m !== Js &&
      typeof l[0] != "number" &&
      ((p = Tl(CT, tg(l[0], l[1]))), (l = [0, 100]));
    const v = m({ ...this.options, keyframes: l });
    d === "mirror" &&
      (g = m({ ...this.options, keyframes: [...l].reverse(), velocity: -h })),
      v.calculatedDuration === null && (v.calculatedDuration = oc(v));
    const { calculatedDuration: T } = v,
      x = T + c,
      V = x * (o + 1) - c;
    return {
      generator: v,
      mirroredGenerator: g,
      mapPercentToKeyframes: p,
      calculatedDuration: T,
      resolvedDuration: x,
      totalDuration: V,
    };
  }
  onPostResolved() {
    const { autoplay: l = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !l
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(l, u = !1) {
    const { resolved: o } = this;
    if (!o) {
      const { keyframes: P } = this.options;
      return { done: !0, value: P[P.length - 1] };
    }
    const {
      finalKeyframe: c,
      generator: d,
      mirroredGenerator: h,
      mapPercentToKeyframes: m,
      keyframes: p,
      calculatedDuration: g,
      totalDuration: v,
      resolvedDuration: T,
    } = o;
    if (this.startTime === null) return d.next(0);
    const {
      delay: x,
      repeat: V,
      repeatType: N,
      repeatDelay: j,
      onUpdate: q,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, l))
      : this.speed < 0 &&
        (this.startTime = Math.min(l - v / this.speed, this.startTime)),
      u
        ? (this.currentTime = l)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(l - this.startTime) * this.speed);
    const H = this.currentTime - x * (this.speed >= 0 ? 1 : -1),
      Q = this.speed >= 0 ? H < 0 : H > v;
    (this.currentTime = Math.max(H, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = v);
    let G = this.currentTime,
      ot = d;
    if (V) {
      const P = Math.min(this.currentTime, v) / T;
      let Et = Math.floor(P),
        Lt = P % 1;
      !Lt && P >= 1 && (Lt = 1),
        Lt === 1 && Et--,
        (Et = Math.min(Et, V + 1)),
        !!(Et % 2) &&
          (N === "reverse"
            ? ((Lt = 1 - Lt), j && (Lt -= j / T))
            : N === "mirror" && (ot = h)),
        (G = rn(0, 1, Lt) * T);
    }
    const w = Q ? { done: !1, value: p[0] } : ot.next(G);
    m && (w.value = m(w.value));
    let { done: at } = w;
    !Q &&
      g !== null &&
      (at = this.speed >= 0 ? this.currentTime >= v : this.currentTime <= 0);
    const ht =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && at));
    return (
      ht && c !== void 0 && (w.value = Is(p, this.options, c)),
      q && q(w.value),
      ht && this.finish(),
      w
    );
  }
  get duration() {
    const { resolved: l } = this;
    return l ? Xe(l.calculatedDuration) : 0;
  }
  get time() {
    return Xe(this.currentTime);
  }
  set time(l) {
    (l = Ge(l)),
      (this.currentTime = l),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = l)
        : this.driver && (this.startTime = this.driver.now() - l / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    const u = this.playbackSpeed !== l;
    (this.playbackSpeed = l), u && (this.time = Xe(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: l = OT, onPlay: u, startTime: o } = this.options;
    this.driver || (this.driver = l((d) => this.tick(d))), u && u();
    const c = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = c - this.holdTime)
      : this.startTime
        ? this.state === "finished" && (this.startTime = c)
        : (this.startTime = o ?? this.calcStartTime()),
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
    const { onComplete: l } = this.options;
    l && l();
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
  sample(l) {
    return (this.startTime = 0), this.tick(l, !0);
  }
  get finished() {
    return this.currentFinishedPromise;
  }
}
const zT = new Set(["opacity", "clipPath", "filter", "transform"]),
  UT = ac(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Ps = 10,
  _T = 2e4;
function BT(i) {
  return sc(i.type) || i.type === "spring" || !lp(i.ease);
}
function NT(i, l) {
  const u = new Cc({
    ...l,
    keyframes: i,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let o = { done: !1, value: i[0] };
  const c = [];
  let d = 0;
  for (; !o.done && d < _T; ) (o = u.sample(d)), c.push(o.value), (d += Ps);
  return { times: void 0, keyframes: c, duration: d - Ps, ease: "linear" };
}
const ag = { anticipate: Bp, backInOut: _p, circInOut: Lp };
function LT(i) {
  return i in ag;
}
class oy extends $p {
  constructor(l) {
    super(l);
    const { name: u, motionValue: o, element: c, keyframes: d } = this.options;
    (this.resolver = new Wp(
      d,
      (h, m) => this.onKeyframesResolved(h, m),
      u,
      o,
      c
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(l, u) {
    let {
      duration: o = 300,
      times: c,
      ease: d,
      type: h,
      motionValue: m,
      name: p,
      startTime: g,
    } = this.options;
    if (!m.owner || !m.owner.current) return !1;
    if (
      (typeof d == "string" && cl() && LT(d) && (d = ag[d]), BT(this.options))
    ) {
      const {
          onComplete: T,
          onUpdate: x,
          motionValue: V,
          element: N,
          ...j
        } = this.options,
        q = NT(l, j);
      (l = q.keyframes),
        l.length === 1 && (l[1] = l[0]),
        (o = q.duration),
        (c = q.times),
        (d = q.ease),
        (h = "keyframes");
    }
    const v = m1(m.owner.current, p, l, {
      ...this.options,
      duration: o,
      times: c,
      ease: d,
    });
    return (
      (v.startTime = g ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Lm(v, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (v.onfinish = () => {
            const { onComplete: T } = this.options;
            m.set(Is(l, this.options, u)),
              T && T(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: v, duration: o, times: c, type: h, ease: d, keyframes: l }
    );
  }
  get duration() {
    const { resolved: l } = this;
    if (!l) return 0;
    const { duration: u } = l;
    return Xe(u);
  }
  get time() {
    const { resolved: l } = this;
    if (!l) return 0;
    const { animation: u } = l;
    return Xe(u.currentTime || 0);
  }
  set time(l) {
    const { resolved: u } = this;
    if (!u) return;
    const { animation: o } = u;
    o.currentTime = Ge(l);
  }
  get speed() {
    const { resolved: l } = this;
    if (!l) return 1;
    const { animation: u } = l;
    return u.playbackRate;
  }
  get finished() {
    return this.resolved.animation.finished;
  }
  set speed(l) {
    const { resolved: u } = this;
    if (!u) return;
    const { animation: o } = u;
    o.playbackRate = l;
  }
  get state() {
    const { resolved: l } = this;
    if (!l) return "idle";
    const { animation: u } = l;
    return u.playState;
  }
  get startTime() {
    const { resolved: l } = this;
    if (!l) return null;
    const { animation: u } = l;
    return u.startTime;
  }
  attachTimeline(l) {
    if (!this._resolved) this.pendingTimeline = l;
    else {
      const { resolved: u } = this;
      if (!u) return Ve;
      const { animation: o } = u;
      Lm(o, l);
    }
    return Ve;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: l } = this;
    if (!l) return;
    const { animation: u } = l;
    u.playState === "finished" && this.updateFinishedPromise(), u.play();
  }
  pause() {
    const { resolved: l } = this;
    if (!l) return;
    const { animation: u } = l;
    u.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: l } = this;
    if (!l) return;
    const {
      animation: u,
      keyframes: o,
      duration: c,
      type: d,
      ease: h,
      times: m,
    } = l;
    if (u.playState === "idle" || u.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: g,
          onUpdate: v,
          onComplete: T,
          element: x,
          ...V
        } = this.options,
        N = new Cc({
          ...V,
          keyframes: o,
          duration: c,
          type: d,
          ease: h,
          times: m,
          isGenerator: !0,
        }),
        j = Ge(this.time);
      g.setWithVelocity(N.sample(j - Ps).value, N.sample(j).value, Ps);
    }
    const { onStop: p } = this.options;
    p && p(), this.cancel();
  }
  complete() {
    const { resolved: l } = this;
    l && l.animation.finish();
  }
  cancel() {
    const { resolved: l } = this;
    l && l.animation.cancel();
  }
  static supports(l) {
    const {
      motionValue: u,
      name: o,
      repeatDelay: c,
      repeatType: d,
      damping: h,
      type: m,
    } = l;
    if (!u || !u.owner || !(u.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: p, transformTemplate: g } = u.owner.getProps();
    return (
      UT() &&
      o &&
      zT.has(o) &&
      (o !== "transform" || !g) &&
      !p &&
      !c &&
      d !== "mirror" &&
      h !== 0 &&
      m !== "inertia"
    );
  }
}
const HT = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  jT = (i) => ({
    type: "spring",
    stiffness: 550,
    damping: i === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  wT = { type: "keyframes", duration: 0.8 },
  qT = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  YT = (i, { keyframes: l }) =>
    l.length > 2
      ? wT
      : oa.has(i)
        ? i.startsWith("scale")
          ? jT(l[1])
          : HT
        : qT;
function GT({
  when: i,
  delay: l,
  delayChildren: u,
  staggerChildren: o,
  staggerDirection: c,
  repeat: d,
  repeatType: h,
  repeatDelay: m,
  from: p,
  elapsed: g,
  ...v
}) {
  return !!Object.keys(v).length;
}
const zc =
  (i, l, u, o = {}, c, d) =>
  (h) => {
    const m = uc(o, i) || {},
      p = m.delay || o.delay || 0;
    let { elapsed: g = 0 } = o;
    g = g - Ge(p);
    let v = {
      keyframes: Array.isArray(u) ? u : [null, u],
      ease: "easeOut",
      velocity: l.getVelocity(),
      ...m,
      delay: -g,
      onUpdate: (x) => {
        l.set(x), m.onUpdate && m.onUpdate(x);
      },
      onComplete: () => {
        h(), m.onComplete && m.onComplete();
      },
      name: i,
      motionValue: l,
      element: d ? void 0 : c,
    };
    GT(m) || (v = { ...v, ...YT(i, v) }),
      v.duration && (v.duration = Ge(v.duration)),
      v.repeatDelay && (v.repeatDelay = Ge(v.repeatDelay)),
      v.from !== void 0 && (v.keyframes[0] = v.from);
    let T = !1;
    if (
      ((v.type === !1 || (v.duration === 0 && !v.repeatDelay)) &&
        ((v.duration = 0), v.delay === 0 && (T = !0)),
      (v.allowFlatten = !m.type && !m.ease),
      T && !d && l.get() !== void 0)
    ) {
      const x = Is(v.keyframes, m);
      if (x !== void 0)
        return (
          At.update(() => {
            v.onUpdate(x), v.onComplete();
          }),
          new f1([])
        );
    }
    return !d && oy.supports(v) ? new oy(v) : new Cc(v);
  };
function XT({ protectedKeys: i, needsAnimating: l }, u) {
  const o = i.hasOwnProperty(u) && l[u] !== !0;
  return (l[u] = !1), o;
}
function ig(i, l, { delay: u = 0, transitionOverride: o, type: c } = {}) {
  let { transition: d = i.getDefaultTransition(), transitionEnd: h, ...m } = l;
  o && (d = o);
  const p = [],
    g = c && i.animationState && i.animationState.getState()[c];
  for (const v in m) {
    const T = i.getValue(v, i.latestValues[v] ?? null),
      x = m[v];
    if (x === void 0 || (g && XT(g, v))) continue;
    const V = { delay: u, ...uc(d || {}, v) };
    let N = !1;
    if (window.MotionHandoffAnimation) {
      const q = Op(i);
      if (q) {
        const H = window.MotionHandoffAnimation(q, v, At);
        H !== null && ((V.startTime = H), (N = !0));
      }
    }
    Lr(i, v),
      T.start(
        zc(v, T, x, i.shouldReduceMotion && Rp.has(v) ? { type: !1 } : V, i, N)
      );
    const j = T.animation;
    j && p.push(j);
  }
  return (
    h &&
      Promise.all(p).then(() => {
        At.update(() => {
          h && vS(i, h);
        });
      }),
    p
  );
}
function Kr(i, l, u = {}) {
  var p;
  const o = yl(
    i,
    l,
    u.type === "exit"
      ? (p = i.presenceContext) == null
        ? void 0
        : p.custom
      : void 0
  );
  let { transition: c = i.getDefaultTransition() || {} } = o || {};
  u.transitionOverride && (c = u.transitionOverride);
  const d = o ? () => Promise.all(ig(i, o, u)) : () => Promise.resolve(),
    h =
      i.variantChildren && i.variantChildren.size
        ? (g = 0) => {
            const {
              delayChildren: v = 0,
              staggerChildren: T,
              staggerDirection: x,
            } = c;
            return ZT(i, l, v + g, T, x, u);
          }
        : () => Promise.resolve(),
    { when: m } = c;
  if (m) {
    const [g, v] = m === "beforeChildren" ? [d, h] : [h, d];
    return g().then(() => v());
  } else return Promise.all([d(), h(u.delay)]);
}
function ZT(i, l, u = 0, o = 0, c = 1, d) {
  const h = [],
    m = (i.variantChildren.size - 1) * o,
    p = c === 1 ? (g = 0) => g * o : (g = 0) => m - g * o;
  return (
    Array.from(i.variantChildren)
      .sort(QT)
      .forEach((g, v) => {
        g.notify("AnimationStart", l),
          h.push(
            Kr(g, l, { ...d, delay: u + p(v) }).then(() =>
              g.notify("AnimationComplete", l)
            )
          );
      }),
    Promise.all(h)
  );
}
function QT(i, l) {
  return i.sortNodePosition(l);
}
function KT(i, l, u = {}) {
  i.notify("AnimationStart", l);
  let o;
  if (Array.isArray(l)) {
    const c = l.map((d) => Kr(i, d, u));
    o = Promise.all(c);
  } else if (typeof l == "string") o = Kr(i, l, u);
  else {
    const c = typeof l == "function" ? yl(i, l, u.custom) : l;
    o = Promise.all(ig(i, c, u));
  }
  return o.then(() => {
    i.notify("AnimationComplete", l);
  });
}
function lg(i, l) {
  if (!Array.isArray(l)) return !1;
  const u = l.length;
  if (u !== i.length) return !1;
  for (let o = 0; o < u; o++) if (l[o] !== i[o]) return !1;
  return !0;
}
const JT = hc.length;
function sg(i) {
  if (!i) return;
  if (!i.isControllingVariants) {
    const u = i.parent ? sg(i.parent) || {} : {};
    return i.props.initial !== void 0 && (u.initial = i.props.initial), u;
  }
  const l = {};
  for (let u = 0; u < JT; u++) {
    const o = hc[u],
      c = i.props[o];
    (hl(c) || c === !1) && (l[o] = c);
  }
  return l;
}
const PT = [...fc].reverse(),
  kT = fc.length;
function FT(i) {
  return (l) =>
    Promise.all(l.map(({ animation: u, options: o }) => KT(i, u, o)));
}
function WT(i) {
  let l = FT(i),
    u = ry(),
    o = !0;
  const c = (p) => (g, v) => {
    var x;
    const T = yl(
      i,
      v,
      p === "exit"
        ? (x = i.presenceContext) == null
          ? void 0
          : x.custom
        : void 0
    );
    if (T) {
      const { transition: V, transitionEnd: N, ...j } = T;
      g = { ...g, ...j, ...N };
    }
    return g;
  };
  function d(p) {
    l = p(i);
  }
  function h(p) {
    const { props: g } = i,
      v = sg(i.parent) || {},
      T = [],
      x = new Set();
    let V = {},
      N = 1 / 0;
    for (let q = 0; q < kT; q++) {
      const H = PT[q],
        Q = u[H],
        G = g[H] !== void 0 ? g[H] : v[H],
        ot = hl(G),
        w = H === p ? Q.isActive : null;
      w === !1 && (N = q);
      let at = G === v[H] && G !== g[H] && ot;
      if (
        (at && o && i.manuallyAnimateOnMount && (at = !1),
        (Q.protectedKeys = { ...V }),
        (!Q.isActive && w === null) ||
          (!G && !Q.prevProp) ||
          Ws(G) ||
          typeof G == "boolean")
      )
        continue;
      const ht = $T(Q.prevProp, G);
      let P = ht || (H === p && Q.isActive && !at && ot) || (q > N && ot),
        Et = !1;
      const Lt = Array.isArray(G) ? G : [G];
      let kt = Lt.reduce(c(H), {});
      w === !1 && (kt = {});
      const { prevResolvedValues: Ht = {} } = Q,
        Ke = { ...Ht, ...kt },
        Be = (L) => {
          (P = !0),
            x.has(L) && ((Et = !0), x.delete(L)),
            (Q.needsAnimating[L] = !0);
          const K = i.getValue(L);
          K && (K.liveStyle = !1);
        };
      for (const L in Ke) {
        const K = kt[L],
          dt = Ht[L];
        if (V.hasOwnProperty(L)) continue;
        let b = !1;
        Nr(K) && Nr(dt) ? (b = !lg(K, dt)) : (b = K !== dt),
          b
            ? K != null
              ? Be(L)
              : x.add(L)
            : K !== void 0 && x.has(L)
              ? Be(L)
              : (Q.protectedKeys[L] = !0);
      }
      (Q.prevProp = G),
        (Q.prevResolvedValues = kt),
        Q.isActive && (V = { ...V, ...kt }),
        o && i.blockInitialAnimation && (P = !1),
        P &&
          (!(at && ht) || Et) &&
          T.push(...Lt.map((L) => ({ animation: L, options: { type: H } })));
    }
    if (x.size) {
      const q = {};
      if (typeof g.initial != "boolean") {
        const H = yl(i, Array.isArray(g.initial) ? g.initial[0] : g.initial);
        H && H.transition && (q.transition = H.transition);
      }
      x.forEach((H) => {
        const Q = i.getBaseTarget(H),
          G = i.getValue(H);
        G && (G.liveStyle = !0), (q[H] = Q ?? null);
      }),
        T.push({ animation: q });
    }
    let j = !!T.length;
    return (
      o &&
        (g.initial === !1 || g.initial === g.animate) &&
        !i.manuallyAnimateOnMount &&
        (j = !1),
      (o = !1),
      j ? l(T) : Promise.resolve()
    );
  }
  function m(p, g) {
    var T;
    if (u[p].isActive === g) return Promise.resolve();
    (T = i.variantChildren) == null ||
      T.forEach((x) => {
        var V;
        return (V = x.animationState) == null ? void 0 : V.setActive(p, g);
      }),
      (u[p].isActive = g);
    const v = h(p);
    for (const x in u) u[x].protectedKeys = {};
    return v;
  }
  return {
    animateChanges: h,
    setActive: m,
    setAnimateFunction: d,
    getState: () => u,
    reset: () => {
      (u = ry()), (o = !0);
    },
  };
}
function $T(i, l) {
  return typeof l == "string" ? l !== i : Array.isArray(l) ? !lg(l, i) : !1;
}
function aa(i = !1) {
  return {
    isActive: i,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function ry() {
  return {
    animate: aa(!0),
    whileInView: aa(),
    whileHover: aa(),
    whileTap: aa(),
    whileDrag: aa(),
    whileFocus: aa(),
    exit: aa(),
  };
}
class jn {
  constructor(l) {
    (this.isMounted = !1), (this.node = l);
  }
  update() {}
}
class IT extends jn {
  constructor(l) {
    super(l), l.animationState || (l.animationState = WT(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    Ws(l) && (this.unmountControls = l.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(),
      { animate: u } = this.node.prevProps || {};
    l !== u && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var l;
    this.node.animationState.reset(),
      (l = this.unmountControls) == null || l.call(this);
  }
}
let tb = 0;
class eb extends jn {
  constructor() {
    super(...arguments), (this.id = tb++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: l, onExitComplete: u } = this.node.presenceContext,
      { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === o) return;
    const c = this.node.animationState.setActive("exit", !l);
    u &&
      !l &&
      c.then(() => {
        u(this.id);
      });
  }
  mount() {
    const { register: l, onExitComplete: u } = this.node.presenceContext || {};
    u && u(this.id), l && (this.unmount = l(this.id));
  }
  unmount() {}
}
const nb = { animation: { Feature: IT }, exit: { Feature: eb } };
function gl(i, l, u, o = { passive: !0 }) {
  return i.addEventListener(l, u, o), () => i.removeEventListener(l, u);
}
function bl(i) {
  return { point: { x: i.pageX, y: i.pageY } };
}
const ab = (i) => (l) => cc(l) && i(l, bl(l));
function sl(i, l, u, o) {
  return gl(i, l, ab(u), o);
}
function ug({ top: i, left: l, right: u, bottom: o }) {
  return { x: { min: l, max: u }, y: { min: i, max: o } };
}
function ib({ x: i, y: l }) {
  return { top: l.min, right: i.max, bottom: l.max, left: i.min };
}
function lb(i, l) {
  if (!l) return i;
  const u = l({ x: i.left, y: i.top }),
    o = l({ x: i.right, y: i.bottom });
  return { top: u.y, left: u.x, bottom: o.y, right: o.x };
}
const og = 1e-4,
  sb = 1 - og,
  ub = 1 + og,
  rg = 0.01,
  ob = 0 - rg,
  rb = 0 + rg;
function ne(i) {
  return i.max - i.min;
}
function cb(i, l, u) {
  return Math.abs(i - l) <= u;
}
function cy(i, l, u, o = 0.5) {
  (i.origin = o),
    (i.originPoint = Rt(l.min, l.max, i.origin)),
    (i.scale = ne(u) / ne(l)),
    (i.translate = Rt(u.min, u.max, i.origin) - i.originPoint),
    ((i.scale >= sb && i.scale <= ub) || isNaN(i.scale)) && (i.scale = 1),
    ((i.translate >= ob && i.translate <= rb) || isNaN(i.translate)) &&
      (i.translate = 0);
}
function ul(i, l, u, o) {
  cy(i.x, l.x, u.x, o ? o.originX : void 0),
    cy(i.y, l.y, u.y, o ? o.originY : void 0);
}
function fy(i, l, u) {
  (i.min = u.min + l.min), (i.max = i.min + ne(l));
}
function fb(i, l, u) {
  fy(i.x, l.x, u.x), fy(i.y, l.y, u.y);
}
function hy(i, l, u) {
  (i.min = l.min - u.min), (i.max = i.min + ne(l));
}
function ol(i, l, u) {
  hy(i.x, l.x, u.x), hy(i.y, l.y, u.y);
}
const dy = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Fa = () => ({ x: dy(), y: dy() }),
  my = () => ({ min: 0, max: 0 }),
  _t = () => ({ x: my(), y: my() });
function Oe(i) {
  return [i("x"), i("y")];
}
function Rr(i) {
  return i === void 0 || i === 1;
}
function Jr({ scale: i, scaleX: l, scaleY: u }) {
  return !Rr(i) || !Rr(l) || !Rr(u);
}
function ia(i) {
  return (
    Jr(i) ||
    cg(i) ||
    i.z ||
    i.rotate ||
    i.rotateX ||
    i.rotateY ||
    i.skewX ||
    i.skewY
  );
}
function cg(i) {
  return yy(i.x) || yy(i.y);
}
function yy(i) {
  return i && i !== "0%";
}
function ks(i, l, u) {
  const o = i - u,
    c = l * o;
  return u + c;
}
function py(i, l, u, o, c) {
  return c !== void 0 && (i = ks(i, c, o)), ks(i, u, o) + l;
}
function Pr(i, l = 0, u = 1, o, c) {
  (i.min = py(i.min, l, u, o, c)), (i.max = py(i.max, l, u, o, c));
}
function fg(i, { x: l, y: u }) {
  Pr(i.x, l.translate, l.scale, l.originPoint),
    Pr(i.y, u.translate, u.scale, u.originPoint);
}
const gy = 0.999999999999,
  vy = 1.0000000000001;
function hb(i, l, u, o = !1) {
  const c = u.length;
  if (!c) return;
  l.x = l.y = 1;
  let d, h;
  for (let m = 0; m < c; m++) {
    (d = u[m]), (h = d.projectionDelta);
    const { visualElement: p } = d.options;
    (p && p.props.style && p.props.style.display === "contents") ||
      (o &&
        d.options.layoutScroll &&
        d.scroll &&
        d !== d.root &&
        $a(i, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
      h && ((l.x *= h.x.scale), (l.y *= h.y.scale), fg(i, h)),
      o && ia(d.latestValues) && $a(i, d.latestValues));
  }
  l.x < vy && l.x > gy && (l.x = 1), l.y < vy && l.y > gy && (l.y = 1);
}
function Wa(i, l) {
  (i.min = i.min + l), (i.max = i.max + l);
}
function Sy(i, l, u, o, c = 0.5) {
  const d = Rt(i.min, i.max, c);
  Pr(i, l, u, d, o);
}
function $a(i, l) {
  Sy(i.x, l.x, l.scaleX, l.scale, l.originX),
    Sy(i.y, l.y, l.scaleY, l.scale, l.originY);
}
function hg(i, l) {
  return ug(lb(i.getBoundingClientRect(), l));
}
function db(i, l, u) {
  const o = hg(i, u),
    { scroll: c } = l;
  return c && (Wa(o.x, c.offset.x), Wa(o.y, c.offset.y)), o;
}
const dg = ({ current: i }) => (i ? i.ownerDocument.defaultView : null),
  Ty = (i, l) => Math.abs(i - l);
function mb(i, l) {
  const u = Ty(i.x, l.x),
    o = Ty(i.y, l.y);
  return Math.sqrt(u ** 2 + o ** 2);
}
class mg {
  constructor(
    l,
    u,
    { transformPagePoint: o, contextWindow: c, dragSnapToOrigin: d = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const T = Vr(this.lastMoveEventInfo, this.history),
          x = this.startEvent !== null,
          V = mb(T.offset, { x: 0, y: 0 }) >= 3;
        if (!x && !V) return;
        const { point: N } = T,
          { timestamp: j } = Pt;
        this.history.push({ ...N, timestamp: j });
        const { onStart: q, onMove: H } = this.handlers;
        x ||
          (q && q(this.lastMoveEvent, T),
          (this.startEvent = this.lastMoveEvent)),
          H && H(this.lastMoveEvent, T);
      }),
      (this.handlePointerMove = (T, x) => {
        (this.lastMoveEvent = T),
          (this.lastMoveEventInfo = Or(x, this.transformPagePoint)),
          At.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (T, x) => {
        this.end();
        const { onEnd: V, onSessionEnd: N, resumeAnimation: j } = this.handlers;
        if (
          (this.dragSnapToOrigin && j && j(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const q = Vr(
          T.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Or(x, this.transformPagePoint),
          this.history
        );
        this.startEvent && V && V(T, q), N && N(T, q);
      }),
      !cc(l))
    )
      return;
    (this.dragSnapToOrigin = d),
      (this.handlers = u),
      (this.transformPagePoint = o),
      (this.contextWindow = c || window);
    const h = bl(l),
      m = Or(h, this.transformPagePoint),
      { point: p } = m,
      { timestamp: g } = Pt;
    this.history = [{ ...p, timestamp: g }];
    const { onSessionStart: v } = u;
    v && v(l, Vr(m, this.history)),
      (this.removeListeners = Tl(
        sl(this.contextWindow, "pointermove", this.handlePointerMove),
        sl(this.contextWindow, "pointerup", this.handlePointerUp),
        sl(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(), Ln(this.updatePoint);
  }
}
function Or(i, l) {
  return l ? { point: l(i.point) } : i;
}
function by(i, l) {
  return { x: i.x - l.x, y: i.y - l.y };
}
function Vr({ point: i }, l) {
  return {
    point: i,
    delta: by(i, yg(l)),
    offset: by(i, yb(l)),
    velocity: pb(l, 0.1),
  };
}
function yb(i) {
  return i[0];
}
function yg(i) {
  return i[i.length - 1];
}
function pb(i, l) {
  if (i.length < 2) return { x: 0, y: 0 };
  let u = i.length - 1,
    o = null;
  const c = yg(i);
  for (; u >= 0 && ((o = i[u]), !(c.timestamp - o.timestamp > Ge(l))); ) u--;
  if (!o) return { x: 0, y: 0 };
  const d = Xe(c.timestamp - o.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const h = { x: (c.x - o.x) / d, y: (c.y - o.y) / d };
  return h.x === 1 / 0 && (h.x = 0), h.y === 1 / 0 && (h.y = 0), h;
}
function gb(i, { min: l, max: u }, o) {
  return (
    l !== void 0 && i < l
      ? (i = o ? Rt(l, i, o.min) : Math.max(i, l))
      : u !== void 0 && i > u && (i = o ? Rt(u, i, o.max) : Math.min(i, u)),
    i
  );
}
function Ay(i, l, u) {
  return {
    min: l !== void 0 ? i.min + l : void 0,
    max: u !== void 0 ? i.max + u - (i.max - i.min) : void 0,
  };
}
function vb(i, { top: l, left: u, bottom: o, right: c }) {
  return { x: Ay(i.x, u, c), y: Ay(i.y, l, o) };
}
function Ey(i, l) {
  let u = l.min - i.min,
    o = l.max - i.max;
  return l.max - l.min < i.max - i.min && ([u, o] = [o, u]), { min: u, max: o };
}
function Sb(i, l) {
  return { x: Ey(i.x, l.x), y: Ey(i.y, l.y) };
}
function Tb(i, l) {
  let u = 0.5;
  const o = ne(i),
    c = ne(l);
  return (
    c > o
      ? (u = rl(l.min, l.max - o, i.min))
      : o > c && (u = rl(i.min, i.max - c, l.min)),
    rn(0, 1, u)
  );
}
function bb(i, l) {
  const u = {};
  return (
    l.min !== void 0 && (u.min = l.min - i.min),
    l.max !== void 0 && (u.max = l.max - i.min),
    u
  );
}
const kr = 0.35;
function Ab(i = kr) {
  return (
    i === !1 ? (i = 0) : i === !0 && (i = kr),
    { x: My(i, "left", "right"), y: My(i, "top", "bottom") }
  );
}
function My(i, l, u) {
  return { min: xy(i, l), max: xy(i, u) };
}
function xy(i, l) {
  return typeof i == "number" ? i : i[l] || 0;
}
const Eb = new WeakMap();
class Mb {
  constructor(l) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = _t()),
      (this.visualElement = l);
  }
  start(l, { snapToCursor: u = !1 } = {}) {
    const { presenceContext: o } = this.visualElement;
    if (o && o.isPresent === !1) return;
    const c = (v) => {
        const { dragSnapToOrigin: T } = this.getProps();
        T ? this.pauseAnimation() : this.stopAnimation(),
          u && this.snapToCursor(bl(v).point);
      },
      d = (v, T) => {
        const { drag: x, dragPropagation: V, onDragStart: N } = this.getProps();
        if (
          x &&
          !V &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = S1(x)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Oe((q) => {
            let H = this.getAxisMotionValue(q).get() || 0;
            if (Qe.test(H)) {
              const { projection: Q } = this.visualElement;
              if (Q && Q.layout) {
                const G = Q.layout.layoutBox[q];
                G && (H = ne(G) * (parseFloat(H) / 100));
              }
            }
            this.originPoint[q] = H;
          }),
          N && At.postRender(() => N(v, T)),
          Lr(this.visualElement, "transform");
        const { animationState: j } = this.visualElement;
        j && j.setActive("whileDrag", !0);
      },
      h = (v, T) => {
        const {
          dragPropagation: x,
          dragDirectionLock: V,
          onDirectionLock: N,
          onDrag: j,
        } = this.getProps();
        if (!x && !this.openDragLock) return;
        const { offset: q } = T;
        if (V && this.currentDirection === null) {
          (this.currentDirection = xb(q)),
            this.currentDirection !== null && N && N(this.currentDirection);
          return;
        }
        this.updateAxis("x", T.point, q),
          this.updateAxis("y", T.point, q),
          this.visualElement.render(),
          j && j(v, T);
      },
      m = (v, T) => this.stop(v, T),
      p = () =>
        Oe((v) => {
          var T;
          return (
            this.getAnimationState(v) === "paused" &&
            ((T = this.getAxisMotionValue(v).animation) == null
              ? void 0
              : T.play())
          );
        }),
      { dragSnapToOrigin: g } = this.getProps();
    this.panSession = new mg(
      l,
      {
        onSessionStart: c,
        onStart: d,
        onMove: h,
        onSessionEnd: m,
        resumeAnimation: p,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: g,
        contextWindow: dg(this.visualElement),
      }
    );
  }
  stop(l, u) {
    const o = this.isDragging;
    if ((this.cancel(), !o)) return;
    const { velocity: c } = u;
    this.startAnimation(c);
    const { onDragEnd: d } = this.getProps();
    d && At.postRender(() => d(l, u));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: u } = this.visualElement;
    l && (l.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: o } = this.getProps();
    !o &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      u && u.setActive("whileDrag", !1);
  }
  updateAxis(l, u, o) {
    const { drag: c } = this.getProps();
    if (!o || !ws(l, c, this.currentDirection)) return;
    const d = this.getAxisMotionValue(l);
    let h = this.originPoint[l] + o[l];
    this.constraints &&
      this.constraints[l] &&
      (h = gb(h, this.constraints[l], this.elastic[l])),
      d.set(h);
  }
  resolveConstraints() {
    var d;
    const { dragConstraints: l, dragElastic: u } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (d = this.visualElement.projection) == null
            ? void 0
            : d.layout,
      c = this.constraints;
    l && Pa(l)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : l && o
        ? (this.constraints = vb(o.layoutBox, l))
        : (this.constraints = !1),
      (this.elastic = Ab(u)),
      c !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Oe((h) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(h) &&
            (this.constraints[h] = bb(o.layoutBox[h], this.constraints[h]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: u } = this.getProps();
    if (!l || !Pa(l)) return !1;
    const o = l.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const d = db(o, c.root, this.visualElement.getTransformPagePoint());
    let h = Sb(c.layout.layoutBox, d);
    if (u) {
      const m = u(ib(h));
      (this.hasMutatedConstraints = !!m), m && (h = ug(m));
    }
    return h;
  }
  startAnimation(l) {
    const {
        drag: u,
        dragMomentum: o,
        dragElastic: c,
        dragTransition: d,
        dragSnapToOrigin: h,
        onDragTransitionEnd: m,
      } = this.getProps(),
      p = this.constraints || {},
      g = Oe((v) => {
        if (!ws(v, u, this.currentDirection)) return;
        let T = (p && p[v]) || {};
        h && (T = { min: 0, max: 0 });
        const x = c ? 200 : 1e6,
          V = c ? 40 : 1e7,
          N = {
            type: "inertia",
            velocity: o ? l[v] : 0,
            bounceStiffness: x,
            bounceDamping: V,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...d,
            ...T,
          };
        return this.startAxisValueAnimation(v, N);
      });
    return Promise.all(g).then(m);
  }
  startAxisValueAnimation(l, u) {
    const o = this.getAxisMotionValue(l);
    return (
      Lr(this.visualElement, l), o.start(zc(l, o, 0, u, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Oe((l) => this.getAxisMotionValue(l).stop());
  }
  pauseAnimation() {
    Oe((l) => {
      var u;
      return (u = this.getAxisMotionValue(l).animation) == null
        ? void 0
        : u.pause();
    });
  }
  getAnimationState(l) {
    var u;
    return (u = this.getAxisMotionValue(l).animation) == null
      ? void 0
      : u.state;
  }
  getAxisMotionValue(l) {
    const u = `_drag${l.toUpperCase()}`,
      o = this.visualElement.getProps(),
      c = o[u];
    return (
      c ||
      this.visualElement.getValue(l, (o.initial ? o.initial[l] : void 0) || 0)
    );
  }
  snapToCursor(l) {
    Oe((u) => {
      const { drag: o } = this.getProps();
      if (!ws(u, o, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        d = this.getAxisMotionValue(u);
      if (c && c.layout) {
        const { min: h, max: m } = c.layout.layoutBox[u];
        d.set(l[u] - Rt(h, m, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: l, dragConstraints: u } = this.getProps(),
      { projection: o } = this.visualElement;
    if (!Pa(u) || !o || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    Oe((h) => {
      const m = this.getAxisMotionValue(h);
      if (m && this.constraints !== !1) {
        const p = m.get();
        c[h] = Tb({ min: p, max: p }, this.constraints[h]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      o.root && o.root.updateScroll(),
      o.updateLayout(),
      this.resolveConstraints(),
      Oe((h) => {
        if (!ws(h, l, null)) return;
        const m = this.getAxisMotionValue(h),
          { min: p, max: g } = this.constraints[h];
        m.set(Rt(p, g, c[h]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Eb.set(this.visualElement, this);
    const l = this.visualElement.current,
      u = sl(l, "pointerdown", (p) => {
        const { drag: g, dragListener: v = !0 } = this.getProps();
        g && v && this.start(p);
      }),
      o = () => {
        const { dragConstraints: p } = this.getProps();
        Pa(p) && p.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: c } = this.visualElement,
      d = c.addEventListener("measure", o);
    c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()),
      At.read(o);
    const h = gl(window, "resize", () => this.scalePositionWithinConstraints()),
      m = c.addEventListener(
        "didUpdate",
        ({ delta: p, hasLayoutChanged: g }) => {
          this.isDragging &&
            g &&
            (Oe((v) => {
              const T = this.getAxisMotionValue(v);
              T &&
                ((this.originPoint[v] += p[v].translate),
                T.set(T.get() + p[v].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      h(), u(), d(), m && m();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(),
      {
        drag: u = !1,
        dragDirectionLock: o = !1,
        dragPropagation: c = !1,
        dragConstraints: d = !1,
        dragElastic: h = kr,
        dragMomentum: m = !0,
      } = l;
    return {
      ...l,
      drag: u,
      dragDirectionLock: o,
      dragPropagation: c,
      dragConstraints: d,
      dragElastic: h,
      dragMomentum: m,
    };
  }
}
function ws(i, l, u) {
  return (l === !0 || l === i) && (u === null || u === i);
}
function xb(i, l = 10) {
  let u = null;
  return Math.abs(i.y) > l ? (u = "y") : Math.abs(i.x) > l && (u = "x"), u;
}
class Db extends jn {
  constructor(l) {
    super(l),
      (this.removeGroupControls = Ve),
      (this.removeListeners = Ve),
      (this.controls = new Mb(l));
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ve);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Dy = (i) => (l, u) => {
  i && At.postRender(() => i(l, u));
};
class Rb extends jn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ve);
  }
  onPointerDown(l) {
    this.session = new mg(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: dg(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: l,
      onPanStart: u,
      onPan: o,
      onPanEnd: c,
    } = this.node.getProps();
    return {
      onSessionStart: Dy(l),
      onStart: Dy(u),
      onMove: o,
      onEnd: (d, h) => {
        delete this.session, c && At.postRender(() => c(d, h));
      },
    };
  }
  mount() {
    this.removePointerDownListener = sl(this.node.current, "pointerdown", (l) =>
      this.onPointerDown(l)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Gs = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Ry(i, l) {
  return l.max === l.min ? 0 : (i / (l.max - l.min)) * 100;
}
const nl = {
    correct: (i, l) => {
      if (!l.target) return i;
      if (typeof i == "string")
        if ($.test(i)) i = parseFloat(i);
        else return i;
      const u = Ry(i, l.target.x),
        o = Ry(i, l.target.y);
      return `${u}% ${o}%`;
    },
  },
  Ob = {
    correct: (i, { treeScale: l, projectionDelta: u }) => {
      const o = i,
        c = Hn.parse(i);
      if (c.length > 5) return o;
      const d = Hn.createTransformer(i),
        h = typeof c[0] != "number" ? 1 : 0,
        m = u.x.scale * l.x,
        p = u.y.scale * l.y;
      (c[0 + h] /= m), (c[1 + h] /= p);
      const g = Rt(m, p, 0.5);
      return (
        typeof c[2 + h] == "number" && (c[2 + h] /= g),
        typeof c[3 + h] == "number" && (c[3 + h] /= g),
        d(c)
      );
    },
  };
class Vb extends et.Component {
  componentDidMount() {
    const {
        visualElement: l,
        layoutGroup: u,
        switchLayoutGroup: o,
        layoutId: c,
      } = this.props,
      { projection: d } = l;
    K1(Cb),
      d &&
        (u.group && u.group.add(d),
        o && o.register && c && o.register(d),
        d.root.didUpdate(),
        d.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        d.setOptions({
          ...d.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Gs.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(l) {
    const {
        layoutDependency: u,
        visualElement: o,
        drag: c,
        isPresent: d,
      } = this.props,
      h = o.projection;
    return (
      h &&
        ((h.isPresent = d),
        c || l.layoutDependency !== u || u === void 0 || l.isPresent !== d
          ? h.willUpdate()
          : this.safeToRemove(),
        l.isPresent !== d &&
          (d
            ? h.promote()
            : h.relegate() ||
              At.postRender(() => {
                const m = h.getStack();
                (!m || !m.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: l } = this.props.visualElement;
    l &&
      (l.root.didUpdate(),
      rc.postRender(() => {
        !l.currentAnimation && l.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: l,
        layoutGroup: u,
        switchLayoutGroup: o,
      } = this.props,
      { projection: c } = l;
    c &&
      (c.scheduleCheckAfterUnmount(),
      u && u.group && u.group.remove(c),
      o && o.deregister && o.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function pg(i) {
  const [l, u] = u1(),
    o = et.useContext(Iy);
  return Ye.jsx(Vb, {
    ...i,
    layoutGroup: o,
    switchLayoutGroup: et.useContext(mp),
    isPresent: l,
    safeToRemove: u,
  });
}
const Cb = {
  borderRadius: {
    ...nl,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: nl,
  borderTopRightRadius: nl,
  borderBottomLeftRadius: nl,
  borderBottomRightRadius: nl,
  boxShadow: Ob,
};
function zb(i, l, u) {
  const o = te(i) ? i : fl(i);
  return o.start(zc("", o, l, u)), o.animation;
}
function Ub(i) {
  return i instanceof SVGElement && i.tagName !== "svg";
}
const _b = (i, l) => i.depth - l.depth;
class Bb {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(l) {
    ec(this.children, l), (this.isDirty = !0);
  }
  remove(l) {
    nc(this.children, l), (this.isDirty = !0);
  }
  forEach(l) {
    this.isDirty && this.children.sort(_b),
      (this.isDirty = !1),
      this.children.forEach(l);
  }
}
function Nb(i, l) {
  const u = Ze.now(),
    o = ({ timestamp: c }) => {
      const d = c - u;
      d >= l && (Ln(o), i(d - l));
    };
  return At.read(o, !0), () => Ln(o);
}
const gg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Lb = gg.length,
  Oy = (i) => (typeof i == "string" ? parseFloat(i) : i),
  Vy = (i) => typeof i == "number" || $.test(i);
function Hb(i, l, u, o, c, d) {
  c
    ? ((i.opacity = Rt(0, u.opacity !== void 0 ? u.opacity : 1, jb(o))),
      (i.opacityExit = Rt(l.opacity !== void 0 ? l.opacity : 1, 0, wb(o))))
    : d &&
      (i.opacity = Rt(
        l.opacity !== void 0 ? l.opacity : 1,
        u.opacity !== void 0 ? u.opacity : 1,
        o
      ));
  for (let h = 0; h < Lb; h++) {
    const m = `border${gg[h]}Radius`;
    let p = Cy(l, m),
      g = Cy(u, m);
    if (p === void 0 && g === void 0) continue;
    p || (p = 0),
      g || (g = 0),
      p === 0 || g === 0 || Vy(p) === Vy(g)
        ? ((i[m] = Math.max(Rt(Oy(p), Oy(g), o), 0)),
          (Qe.test(g) || Qe.test(p)) && (i[m] += "%"))
        : (i[m] = g);
  }
  (l.rotate || u.rotate) && (i.rotate = Rt(l.rotate || 0, u.rotate || 0, o));
}
function Cy(i, l) {
  return i[l] !== void 0 ? i[l] : i.borderRadius;
}
const jb = vg(0, 0.5, Np),
  wb = vg(0.5, 0.95, Ve);
function vg(i, l, u) {
  return (o) => (o < i ? 0 : o > l ? 1 : u(rl(i, l, o)));
}
function zy(i, l) {
  (i.min = l.min), (i.max = l.max);
}
function Re(i, l) {
  zy(i.x, l.x), zy(i.y, l.y);
}
function Uy(i, l) {
  (i.translate = l.translate),
    (i.scale = l.scale),
    (i.originPoint = l.originPoint),
    (i.origin = l.origin);
}
function _y(i, l, u, o, c) {
  return (
    (i -= l), (i = ks(i, 1 / u, o)), c !== void 0 && (i = ks(i, 1 / c, o)), i
  );
}
function qb(i, l = 0, u = 1, o = 0.5, c, d = i, h = i) {
  if (
    (Qe.test(l) &&
      ((l = parseFloat(l)), (l = Rt(h.min, h.max, l / 100) - h.min)),
    typeof l != "number")
  )
    return;
  let m = Rt(d.min, d.max, o);
  i === d && (m -= l),
    (i.min = _y(i.min, l, u, m, c)),
    (i.max = _y(i.max, l, u, m, c));
}
function By(i, l, [u, o, c], d, h) {
  qb(i, l[u], l[o], l[c], l.scale, d, h);
}
const Yb = ["x", "scaleX", "originX"],
  Gb = ["y", "scaleY", "originY"];
function Ny(i, l, u, o) {
  By(i.x, l, Yb, u ? u.x : void 0, o ? o.x : void 0),
    By(i.y, l, Gb, u ? u.y : void 0, o ? o.y : void 0);
}
function Ly(i) {
  return i.translate === 0 && i.scale === 1;
}
function Sg(i) {
  return Ly(i.x) && Ly(i.y);
}
function Hy(i, l) {
  return i.min === l.min && i.max === l.max;
}
function Xb(i, l) {
  return Hy(i.x, l.x) && Hy(i.y, l.y);
}
function jy(i, l) {
  return (
    Math.round(i.min) === Math.round(l.min) &&
    Math.round(i.max) === Math.round(l.max)
  );
}
function Tg(i, l) {
  return jy(i.x, l.x) && jy(i.y, l.y);
}
function wy(i) {
  return ne(i.x) / ne(i.y);
}
function qy(i, l) {
  return (
    i.translate === l.translate &&
    i.scale === l.scale &&
    i.originPoint === l.originPoint
  );
}
class Zb {
  constructor() {
    this.members = [];
  }
  add(l) {
    ec(this.members, l), l.scheduleRender();
  }
  remove(l) {
    if (
      (nc(this.members, l),
      l === this.prevLead && (this.prevLead = void 0),
      l === this.lead)
    ) {
      const u = this.members[this.members.length - 1];
      u && this.promote(u);
    }
  }
  relegate(l) {
    const u = this.members.findIndex((c) => l === c);
    if (u === 0) return !1;
    let o;
    for (let c = u; c >= 0; c--) {
      const d = this.members[c];
      if (d.isPresent !== !1) {
        o = d;
        break;
      }
    }
    return o ? (this.promote(o), !0) : !1;
  }
  promote(l, u) {
    const o = this.lead;
    if (l !== o && ((this.prevLead = o), (this.lead = l), l.show(), o)) {
      o.instance && o.scheduleRender(),
        l.scheduleRender(),
        (l.resumeFrom = o),
        u && (l.resumeFrom.preserveOpacity = !0),
        o.snapshot &&
          ((l.snapshot = o.snapshot),
          (l.snapshot.latestValues = o.animationValues || o.latestValues)),
        l.root && l.root.isUpdating && (l.isLayoutDirty = !0);
      const { crossfade: c } = l.options;
      c === !1 && o.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      const { options: u, resumingFrom: o } = l;
      u.onExitComplete && u.onExitComplete(),
        o && o.options.onExitComplete && o.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((l) => {
      l.instance && l.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Qb(i, l, u) {
  let o = "";
  const c = i.x.translate / l.x,
    d = i.y.translate / l.y,
    h = (u == null ? void 0 : u.z) || 0;
  if (
    ((c || d || h) && (o = `translate3d(${c}px, ${d}px, ${h}px) `),
    (l.x !== 1 || l.y !== 1) && (o += `scale(${1 / l.x}, ${1 / l.y}) `),
    u)
  ) {
    const {
      transformPerspective: g,
      rotate: v,
      rotateX: T,
      rotateY: x,
      skewX: V,
      skewY: N,
    } = u;
    g && (o = `perspective(${g}px) ${o}`),
      v && (o += `rotate(${v}deg) `),
      T && (o += `rotateX(${T}deg) `),
      x && (o += `rotateY(${x}deg) `),
      V && (o += `skewX(${V}deg) `),
      N && (o += `skewY(${N}deg) `);
  }
  const m = i.x.scale * l.x,
    p = i.y.scale * l.y;
  return (m !== 1 || p !== 1) && (o += `scale(${m}, ${p})`), o || "none";
}
const Cr = ["", "X", "Y", "Z"],
  Kb = { visibility: "hidden" },
  Yy = 1e3;
let Jb = 0;
function zr(i, l, u, o) {
  const { latestValues: c } = l;
  c[i] && ((u[i] = c[i]), l.setStaticValue(i, 0), o && (o[i] = 0));
}
function bg(i) {
  if (((i.hasCheckedOptimisedAppear = !0), i.root === i)) return;
  const { visualElement: l } = i.options;
  if (!l) return;
  const u = Op(l);
  if (window.MotionHasOptimisedAnimation(u, "transform")) {
    const { layout: c, layoutId: d } = i.options;
    window.MotionCancelOptimisedAnimation(u, "transform", At, !(c || d));
  }
  const { parent: o } = i;
  o && !o.hasCheckedOptimisedAppear && bg(o);
}
function Ag({
  attachResizeListener: i,
  defaultParent: l,
  measureScroll: u,
  checkIsScrollRoot: o,
  resetTransform: c,
}) {
  return class {
    constructor(h = {}, m = l == null ? void 0 : l()) {
      (this.id = Jb++),
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
            this.nodes.forEach(Fb),
            this.nodes.forEach(eA),
            this.nodes.forEach(nA),
            this.nodes.forEach(Wb);
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
      for (let p = 0; p < this.path.length; p++)
        this.path[p].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Bb());
    }
    addEventListener(h, m) {
      return (
        this.eventHandlers.has(h) || this.eventHandlers.set(h, new ic()),
        this.eventHandlers.get(h).add(m)
      );
    }
    notifyListeners(h, ...m) {
      const p = this.eventHandlers.get(h);
      p && p.notify(...m);
    }
    hasListeners(h) {
      return this.eventHandlers.has(h);
    }
    mount(h, m = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = Ub(h)), (this.instance = h);
      const { layoutId: p, layout: g, visualElement: v } = this.options;
      if (
        (v && !v.current && v.mount(h),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        m && (g || p) && (this.isLayoutDirty = !0),
        i)
      ) {
        let T;
        const x = () => (this.root.updateBlockedByResize = !1);
        i(h, () => {
          (this.root.updateBlockedByResize = !0),
            T && T(),
            (T = Nb(x, 250)),
            Gs.hasAnimatedSinceResize &&
              ((Gs.hasAnimatedSinceResize = !1), this.nodes.forEach(Xy));
        });
      }
      p && this.root.registerSharedNode(p, this),
        this.options.animate !== !1 &&
          v &&
          (p || g) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: T,
              hasLayoutChanged: x,
              hasRelativeLayoutChanged: V,
              layout: N,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const j =
                  this.options.transition || v.getDefaultTransition() || uA,
                { onLayoutAnimationStart: q, onLayoutAnimationComplete: H } =
                  v.getProps(),
                Q = !this.targetLayout || !Tg(this.targetLayout, N),
                G = !x && V;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                G ||
                (x && (Q || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(T, G);
                const ot = { ...uc(j, "layout"), onPlay: q, onComplete: H };
                (v.shouldReduceMotion || this.options.layoutRoot) &&
                  ((ot.delay = 0), (ot.type = !1)),
                  this.startAnimation(ot);
              } else
                x || Xy(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = N;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const h = this.getStack();
      h && h.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Ln(this.updateProjection);
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
          bg(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const T = this.path[v];
        (T.shouldResetTransform = !0),
          T.updateScroll("snapshot"),
          T.options.layoutRoot && T.willUpdate(!1);
      }
      const { layoutId: m, layout: p } = this.options;
      if (m === void 0 && !p) return;
      const g = this.getTransformTemplate();
      (this.prevTransformTemplateValue = g ? g(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        h && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Gy);
        return;
      }
      this.isUpdating || this.nodes.forEach(Ib),
        (this.isUpdating = !1),
        this.nodes.forEach(tA),
        this.nodes.forEach(Pb),
        this.nodes.forEach(kb),
        this.clearAllSnapshots();
      const m = Ze.now();
      (Pt.delta = rn(0, 1e3 / 60, m - Pt.timestamp)),
        (Pt.timestamp = m),
        (Pt.isProcessing = !0),
        Ar.update.process(Pt),
        Ar.preRender.process(Pt),
        Ar.render.process(Pt),
        (Pt.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), rc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach($b), this.sharedNodes.forEach(iA);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        At.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      At.postRender(() => {
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
          !ne(this.snapshot.measuredBox.x) &&
          !ne(this.snapshot.measuredBox.y) &&
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
        for (let p = 0; p < this.path.length; p++) this.path[p].updateScroll();
      const h = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = _t()),
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
        const p = o(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: h,
          isRoot: p,
          offset: u(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : p,
        };
      }
    }
    resetTransform() {
      if (!c) return;
      const h =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        m = this.projectionDelta && !Sg(this.projectionDelta),
        p = this.getTransformTemplate(),
        g = p ? p(this.latestValues, "") : void 0,
        v = g !== this.prevTransformTemplateValue;
      h &&
        (m || ia(this.latestValues) || v) &&
        (c(this.instance, g),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(h = !0) {
      const m = this.measurePageBox();
      let p = this.removeElementScroll(m);
      return (
        h && (p = this.removeTransform(p)),
        oA(p),
        {
          animationId: this.root.animationId,
          measuredBox: m,
          layoutBox: p,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var g;
      const { visualElement: h } = this.options;
      if (!h) return _t();
      const m = h.measureViewportBox();
      if (
        !(
          ((g = this.scroll) == null ? void 0 : g.wasRoot) || this.path.some(rA)
        )
      ) {
        const { scroll: v } = this.root;
        v && (Wa(m.x, v.offset.x), Wa(m.y, v.offset.y));
      }
      return m;
    }
    removeElementScroll(h) {
      var p;
      const m = _t();
      if ((Re(m, h), (p = this.scroll) != null && p.wasRoot)) return m;
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g],
          { scroll: T, options: x } = v;
        v !== this.root &&
          T &&
          x.layoutScroll &&
          (T.wasRoot && Re(m, h), Wa(m.x, T.offset.x), Wa(m.y, T.offset.y));
      }
      return m;
    }
    applyTransform(h, m = !1) {
      const p = _t();
      Re(p, h);
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g];
        !m &&
          v.options.layoutScroll &&
          v.scroll &&
          v !== v.root &&
          $a(p, { x: -v.scroll.offset.x, y: -v.scroll.offset.y }),
          ia(v.latestValues) && $a(p, v.latestValues);
      }
      return ia(this.latestValues) && $a(p, this.latestValues), p;
    }
    removeTransform(h) {
      const m = _t();
      Re(m, h);
      for (let p = 0; p < this.path.length; p++) {
        const g = this.path[p];
        if (!g.instance || !ia(g.latestValues)) continue;
        Jr(g.latestValues) && g.updateSnapshot();
        const v = _t(),
          T = g.measurePageBox();
        Re(v, T),
          Ny(m, g.latestValues, g.snapshot ? g.snapshot.layoutBox : void 0, v);
      }
      return ia(this.latestValues) && Ny(m, this.latestValues), m;
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
        this.relativeParent.resolvedRelativeTargetAt !== Pt.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(h = !1) {
      var x;
      const m = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = m.isSharedProjectionDirty);
      const p = !!this.resumingFrom || this !== m;
      if (
        !(
          h ||
          (p && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((x = this.parent) != null && x.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: v, layoutId: T } = this.options;
      if (!(!this.layout || !(v || T))) {
        if (
          ((this.resolvedRelativeTargetAt = Pt.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const V = this.getClosestProjectingParent();
          V && V.layout && this.animationProgress !== 1
            ? ((this.relativeParent = V),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = _t()),
              (this.relativeTargetOrigin = _t()),
              ol(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                V.layout.layoutBox
              ),
              Re(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = _t()), (this.targetWithTransforms = _t())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              fb(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Re(this.target, this.layout.layoutBox),
                fg(this.target, this.targetDelta))
              : Re(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const V = this.getClosestProjectingParent();
          V &&
          !!V.resumingFrom == !!this.resumingFrom &&
          !V.options.layoutScroll &&
          V.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = V),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = _t()),
              (this.relativeTargetOrigin = _t()),
              ol(this.relativeTargetOrigin, this.target, V.target),
              Re(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Jr(this.parent.latestValues) ||
          cg(this.parent.latestValues)
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
      var N;
      const h = this.getLead(),
        m = !!this.resumingFrom || this !== h;
      let p = !0;
      if (
        ((this.isProjectionDirty ||
          ((N = this.parent) != null && N.isProjectionDirty)) &&
          (p = !1),
        m &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (p = !1),
        this.resolvedRelativeTargetAt === Pt.timestamp && (p = !1),
        p)
      )
        return;
      const { layout: g, layoutId: v } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(g || v))
      )
        return;
      Re(this.layoutCorrected, this.layout.layoutBox);
      const T = this.treeScale.x,
        x = this.treeScale.y;
      hb(this.layoutCorrected, this.treeScale, this.path, m),
        h.layout &&
          !h.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((h.target = h.layout.layoutBox), (h.targetWithTransforms = _t()));
      const { target: V } = h;
      if (!V) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Uy(this.prevProjectionDelta.x, this.projectionDelta.x),
          Uy(this.prevProjectionDelta.y, this.projectionDelta.y)),
        ul(this.projectionDelta, this.layoutCorrected, V, this.latestValues),
        (this.treeScale.x !== T ||
          this.treeScale.y !== x ||
          !qy(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !qy(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", V));
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
        const p = this.getStack();
        p && p.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Fa()),
        (this.projectionDelta = Fa()),
        (this.projectionDeltaWithTransform = Fa());
    }
    setAnimationOrigin(h, m = !1) {
      const p = this.snapshot,
        g = p ? p.latestValues : {},
        v = { ...this.latestValues },
        T = Fa();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !m);
      const x = _t(),
        V = p ? p.source : void 0,
        N = this.layout ? this.layout.source : void 0,
        j = V !== N,
        q = this.getStack(),
        H = !q || q.members.length <= 1,
        Q = !!(j && !H && this.options.crossfade === !0 && !this.path.some(sA));
      this.animationProgress = 0;
      let G;
      (this.mixTargetDelta = (ot) => {
        const w = ot / 1e3;
        Zy(T.x, h.x, w),
          Zy(T.y, h.y, w),
          this.setTargetDelta(T),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (ol(x, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            lA(this.relativeTarget, this.relativeTargetOrigin, x, w),
            G && Xb(this.relativeTarget, G) && (this.isProjectionDirty = !1),
            G || (G = _t()),
            Re(G, this.relativeTarget)),
          j &&
            ((this.animationValues = v), Hb(v, g, this.latestValues, w, Q, H)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = w);
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
          (Ln(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = At.update(() => {
          (Gs.hasAnimatedSinceResize = !0),
            (this.currentAnimation = zb(0, Yy, {
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
        (this.mixTargetDelta && this.mixTargetDelta(Yy),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const h = this.getLead();
      let {
        targetWithTransforms: m,
        target: p,
        layout: g,
        latestValues: v,
      } = h;
      if (!(!m || !p || !g)) {
        if (
          this !== h &&
          this.layout &&
          g &&
          Eg(this.options.animationType, this.layout.layoutBox, g.layoutBox)
        ) {
          p = this.target || _t();
          const T = ne(this.layout.layoutBox.x);
          (p.x.min = h.target.x.min), (p.x.max = p.x.min + T);
          const x = ne(this.layout.layoutBox.y);
          (p.y.min = h.target.y.min), (p.y.max = p.y.min + x);
        }
        Re(m, p),
          $a(m, v),
          ul(this.projectionDeltaWithTransform, this.layoutCorrected, m, v);
      }
    }
    registerSharedNode(h, m) {
      this.sharedNodes.has(h) || this.sharedNodes.set(h, new Zb()),
        this.sharedNodes.get(h).add(m);
      const g = m.options.initialPromotionConfig;
      m.promote({
        transition: g ? g.transition : void 0,
        preserveFollowOpacity:
          g && g.shouldPreserveFollowOpacity
            ? g.shouldPreserveFollowOpacity(m)
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
    promote({ needsReset: h, transition: m, preserveFollowOpacity: p } = {}) {
      const g = this.getStack();
      g && g.promote(this, p),
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
      const { latestValues: p } = h;
      if (
        ((p.z ||
          p.rotate ||
          p.rotateX ||
          p.rotateY ||
          p.rotateZ ||
          p.skewX ||
          p.skewY) &&
          (m = !0),
        !m)
      )
        return;
      const g = {};
      p.z && zr("z", h, g, this.animationValues);
      for (let v = 0; v < Cr.length; v++)
        zr(`rotate${Cr[v]}`, h, g, this.animationValues),
          zr(`skew${Cr[v]}`, h, g, this.animationValues);
      h.render();
      for (const v in g)
        h.setStaticValue(v, g[v]),
          this.animationValues && (this.animationValues[v] = g[v]);
      h.scheduleRender();
    }
    getProjectionStyles(h) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return Kb;
      const m = { visibility: "" },
        p = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (m.opacity = ""),
          (m.pointerEvents = Ys(h == null ? void 0 : h.pointerEvents) || ""),
          (m.transform = p ? p(this.latestValues, "") : "none"),
          m
        );
      const g = this.getLead();
      if (!this.projectionDelta || !this.layout || !g.target) {
        const V = {};
        return (
          this.options.layoutId &&
            ((V.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (V.pointerEvents = Ys(h == null ? void 0 : h.pointerEvents) || "")),
          this.hasProjected &&
            !ia(this.latestValues) &&
            ((V.transform = p ? p({}, "") : "none"), (this.hasProjected = !1)),
          V
        );
      }
      const v = g.animationValues || g.latestValues;
      this.applyTransformsToTarget(),
        (m.transform = Qb(
          this.projectionDeltaWithTransform,
          this.treeScale,
          v
        )),
        p && (m.transform = p(v, m.transform));
      const { x: T, y: x } = this.projectionDelta;
      (m.transformOrigin = `${T.origin * 100}% ${x.origin * 100}% 0`),
        g.animationValues
          ? (m.opacity =
              g === this
                ? v.opacity ?? this.latestValues.opacity ?? 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : v.opacityExit)
          : (m.opacity =
              g === this
                ? v.opacity !== void 0
                  ? v.opacity
                  : ""
                : v.opacityExit !== void 0
                  ? v.opacityExit
                  : 0);
      for (const V in dl) {
        if (v[V] === void 0) continue;
        const { correct: N, applyTo: j, isCSSVariable: q } = dl[V],
          H = m.transform === "none" ? v[V] : N(v[V], g);
        if (j) {
          const Q = j.length;
          for (let G = 0; G < Q; G++) m[j[G]] = H;
        } else
          q ? (this.options.visualElement.renderState.vars[V] = H) : (m[V] = H);
      }
      return (
        this.options.layoutId &&
          (m.pointerEvents =
            g === this
              ? Ys(h == null ? void 0 : h.pointerEvents) || ""
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
        this.root.nodes.forEach(Gy),
        this.root.sharedNodes.clear();
    }
  };
}
function Pb(i) {
  i.updateLayout();
}
function kb(i) {
  var u;
  const l = ((u = i.resumeFrom) == null ? void 0 : u.snapshot) || i.snapshot;
  if (i.isLead() && i.layout && l && i.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: c } = i.layout,
      { animationType: d } = i.options,
      h = l.source !== i.layout.source;
    d === "size"
      ? Oe((T) => {
          const x = h ? l.measuredBox[T] : l.layoutBox[T],
            V = ne(x);
          (x.min = o[T].min), (x.max = x.min + V);
        })
      : Eg(d, l.layoutBox, o) &&
        Oe((T) => {
          const x = h ? l.measuredBox[T] : l.layoutBox[T],
            V = ne(o[T]);
          (x.max = x.min + V),
            i.relativeTarget &&
              !i.currentAnimation &&
              ((i.isProjectionDirty = !0),
              (i.relativeTarget[T].max = i.relativeTarget[T].min + V));
        });
    const m = Fa();
    ul(m, o, l.layoutBox);
    const p = Fa();
    h ? ul(p, i.applyTransform(c, !0), l.measuredBox) : ul(p, o, l.layoutBox);
    const g = !Sg(m);
    let v = !1;
    if (!i.resumeFrom) {
      const T = i.getClosestProjectingParent();
      if (T && !T.resumeFrom) {
        const { snapshot: x, layout: V } = T;
        if (x && V) {
          const N = _t();
          ol(N, l.layoutBox, x.layoutBox);
          const j = _t();
          ol(j, o, V.layoutBox),
            Tg(N, j) || (v = !0),
            T.options.layoutRoot &&
              ((i.relativeTarget = j),
              (i.relativeTargetOrigin = N),
              (i.relativeParent = T));
        }
      }
    }
    i.notifyListeners("didUpdate", {
      layout: o,
      snapshot: l,
      delta: p,
      layoutDelta: m,
      hasLayoutChanged: g,
      hasRelativeLayoutChanged: v,
    });
  } else if (i.isLead()) {
    const { onExitComplete: o } = i.options;
    o && o();
  }
  i.options.transition = void 0;
}
function Fb(i) {
  i.parent &&
    (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty),
    i.isSharedProjectionDirty ||
      (i.isSharedProjectionDirty = !!(
        i.isProjectionDirty ||
        i.parent.isProjectionDirty ||
        i.parent.isSharedProjectionDirty
      )),
    i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty));
}
function Wb(i) {
  i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1;
}
function $b(i) {
  i.clearSnapshot();
}
function Gy(i) {
  i.clearMeasurements();
}
function Ib(i) {
  i.isLayoutDirty = !1;
}
function tA(i) {
  const { visualElement: l } = i.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"),
    i.resetTransform();
}
function Xy(i) {
  i.finishAnimation(),
    (i.targetDelta = i.relativeTarget = i.target = void 0),
    (i.isProjectionDirty = !0);
}
function eA(i) {
  i.resolveTargetDelta();
}
function nA(i) {
  i.calcProjection();
}
function aA(i) {
  i.resetSkewAndRotation();
}
function iA(i) {
  i.removeLeadSnapshot();
}
function Zy(i, l, u) {
  (i.translate = Rt(l.translate, 0, u)),
    (i.scale = Rt(l.scale, 1, u)),
    (i.origin = l.origin),
    (i.originPoint = l.originPoint);
}
function Qy(i, l, u, o) {
  (i.min = Rt(l.min, u.min, o)), (i.max = Rt(l.max, u.max, o));
}
function lA(i, l, u, o) {
  Qy(i.x, l.x, u.x, o), Qy(i.y, l.y, u.y, o);
}
function sA(i) {
  return i.animationValues && i.animationValues.opacityExit !== void 0;
}
const uA = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Ky = (i) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(i),
  Jy = Ky("applewebkit/") && !Ky("chrome/") ? Math.round : Ve;
function Py(i) {
  (i.min = Jy(i.min)), (i.max = Jy(i.max));
}
function oA(i) {
  Py(i.x), Py(i.y);
}
function Eg(i, l, u) {
  return (
    i === "position" || (i === "preserve-aspect" && !cb(wy(l), wy(u), 0.2))
  );
}
function rA(i) {
  var l;
  return i !== i.root && ((l = i.scroll) == null ? void 0 : l.wasRoot);
}
const cA = Ag({
    attachResizeListener: (i, l) => gl(i, "resize", l),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Ur = { current: void 0 },
  Mg = Ag({
    measureScroll: (i) => ({ x: i.scrollLeft, y: i.scrollTop }),
    defaultParent: () => {
      if (!Ur.current) {
        const i = new cA({});
        i.mount(window), i.setOptions({ layoutScroll: !0 }), (Ur.current = i);
      }
      return Ur.current;
    },
    resetTransform: (i, l) => {
      i.style.transform = l !== void 0 ? l : "none";
    },
    checkIsScrollRoot: (i) => window.getComputedStyle(i).position === "fixed",
  }),
  fA = {
    pan: { Feature: Rb },
    drag: { Feature: Db, ProjectionNode: Mg, MeasureLayout: pg },
  };
function ky(i, l, u) {
  const { props: o } = i;
  i.animationState &&
    o.whileHover &&
    i.animationState.setActive("whileHover", u === "Start");
  const c = "onHover" + u,
    d = o[c];
  d && At.postRender(() => d(l, bl(l)));
}
class hA extends jn {
  mount() {
    const { current: l } = this.node;
    l &&
      (this.unmount = b1(
        l,
        (u, o) => (ky(this.node, o, "Start"), (c) => ky(this.node, c, "End"))
      ));
  }
  unmount() {}
}
class dA extends jn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l ||
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
    this.unmount = Tl(
      gl(this.node.current, "focus", () => this.onFocus()),
      gl(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function Fy(i, l, u) {
  const { props: o } = i;
  if (i.current instanceof HTMLButtonElement && i.current.disabled) return;
  i.animationState &&
    o.whileTap &&
    i.animationState.setActive("whileTap", u === "Start");
  const c = "onTap" + (u === "End" ? "" : u),
    d = o[c];
  d && At.postRender(() => d(l, bl(l)));
}
class mA extends jn {
  mount() {
    const { current: l } = this.node;
    l &&
      (this.unmount = x1(
        l,
        (u, o) => (
          Fy(this.node, o, "Start"),
          (c, { success: d }) => Fy(this.node, c, d ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const Fr = new WeakMap(),
  _r = new WeakMap(),
  yA = (i) => {
    const l = Fr.get(i.target);
    l && l(i);
  },
  pA = (i) => {
    i.forEach(yA);
  };
function gA({ root: i, ...l }) {
  const u = i || document;
  _r.has(u) || _r.set(u, {});
  const o = _r.get(u),
    c = JSON.stringify(l);
  return o[c] || (o[c] = new IntersectionObserver(pA, { root: i, ...l })), o[c];
}
function vA(i, l, u) {
  const o = gA(l);
  return (
    Fr.set(i, u),
    o.observe(i),
    () => {
      Fr.delete(i), o.unobserve(i);
    }
  );
}
const SA = { some: 0, all: 1 };
class TA extends jn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: l = {} } = this.node.getProps(),
      { root: u, margin: o, amount: c = "some", once: d } = l,
      h = {
        root: u ? u.current : void 0,
        rootMargin: o,
        threshold: typeof c == "number" ? c : SA[c],
      },
      m = (p) => {
        const { isIntersecting: g } = p;
        if (
          this.isInView === g ||
          ((this.isInView = g), d && !g && this.hasEnteredView)
        )
          return;
        g && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", g);
        const { onViewportEnter: v, onViewportLeave: T } = this.node.getProps(),
          x = g ? v : T;
        x && x(p);
      };
    return vA(this.node.current, h, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: l, prevProps: u } = this.node;
    ["amount", "margin", "root"].some(bA(l, u)) && this.startObserver();
  }
  unmount() {}
}
function bA({ viewport: i = {} }, { viewport: l = {} } = {}) {
  return (u) => i[u] !== l[u];
}
const AA = {
    inView: { Feature: TA },
    tap: { Feature: mA },
    focus: { Feature: dA },
    hover: { Feature: hA },
  },
  EA = { layout: { ProjectionNode: Mg, MeasureLayout: pg } },
  Wr = { current: null },
  xg = { current: !1 };
function MA() {
  if (((xg.current = !0), !!Ir))
    if (window.matchMedia) {
      const i = window.matchMedia("(prefers-reduced-motion)"),
        l = () => (Wr.current = i.matches);
      i.addListener(l), l();
    } else Wr.current = !1;
}
const xA = [...Fp, It, Hn],
  DA = (i) => xA.find(kp(i)),
  RA = new WeakMap();
function OA(i, l, u) {
  for (const o in l) {
    const c = l[o],
      d = u[o];
    if (te(c)) i.addValue(o, c);
    else if (te(d)) i.addValue(o, fl(c, { owner: i }));
    else if (d !== c)
      if (i.hasValue(o)) {
        const h = i.getValue(o);
        h.liveStyle === !0 ? h.jump(c) : h.hasAnimated || h.set(c);
      } else {
        const h = i.getStaticValue(o);
        i.addValue(o, fl(h !== void 0 ? h : c, { owner: i }));
      }
  }
  for (const o in u) l[o] === void 0 && i.removeValue(o);
  return l;
}
const Wy = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class VA {
  scrapeMotionValuesFromProps(l, u, o) {
    return {};
  }
  constructor(
    {
      parent: l,
      props: u,
      presenceContext: o,
      reducedMotionConfig: c,
      blockInitialAnimation: d,
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
      (this.KeyframeResolver = Oc),
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
        const V = Ze.now();
        this.renderScheduledAt < V &&
          ((this.renderScheduledAt = V), At.render(this.render, !1, !0));
      });
    const { latestValues: p, renderState: g, onUpdate: v } = h;
    (this.onUpdate = v),
      (this.latestValues = p),
      (this.baseTarget = { ...p }),
      (this.initialValues = u.initial ? { ...p } : {}),
      (this.renderState = g),
      (this.parent = l),
      (this.props = u),
      (this.presenceContext = o),
      (this.depth = l ? l.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.options = m),
      (this.blockInitialAnimation = !!d),
      (this.isControllingVariants = $s(u)),
      (this.isVariantNode = hp(u)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(l && l.current));
    const { willChange: T, ...x } = this.scrapeMotionValuesFromProps(
      u,
      {},
      this
    );
    for (const V in x) {
      const N = x[V];
      p[V] !== void 0 && te(N) && N.set(p[V], !1);
    }
  }
  mount(l) {
    (this.current = l),
      RA.set(l, this),
      this.projection && !this.projection.instance && this.projection.mount(l),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((u, o) => this.bindToMotionValue(o, u)),
      xg.current || MA(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : Wr.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(),
      Ln(this.notifyUpdate),
      Ln(this.render),
      this.valueSubscriptions.forEach((l) => l()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const l in this.events) this.events[l].clear();
    for (const l in this.features) {
      const u = this.features[l];
      u && (u.unmount(), (u.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(l, u) {
    this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)();
    const o = oa.has(l);
    o && this.onBindTransform && this.onBindTransform();
    const c = u.on("change", (m) => {
        (this.latestValues[l] = m),
          this.props.onUpdate && At.preRender(this.notifyUpdate),
          o && this.projection && (this.projection.isTransformDirty = !0);
      }),
      d = u.on("renderRequest", this.scheduleRender);
    let h;
    window.MotionCheckAppearSync &&
      (h = window.MotionCheckAppearSync(this, l, u)),
      this.valueSubscriptions.set(l, () => {
        c(), d(), h && h(), u.owner && u.stop();
      });
  }
  sortNodePosition(l) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== l.type
      ? 0
      : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in Ia) {
      const u = Ia[l];
      if (!u) continue;
      const { isEnabled: o, Feature: c } = u;
      if (
        (!this.features[l] &&
          c &&
          o(this.props) &&
          (this.features[l] = new c(this)),
        this.features[l])
      ) {
        const d = this.features[l];
        d.isMounted ? d.update() : (d.mount(), (d.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : _t();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, u) {
    this.latestValues[l] = u;
  }
  update(l, u) {
    (l.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = l),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = u);
    for (let o = 0; o < Wy.length; o++) {
      const c = Wy[o];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](),
        delete this.propEventSubscriptions[c]);
      const d = "on" + c,
        h = l[d];
      h && (this.propEventSubscriptions[c] = this.on(c, h));
    }
    (this.prevMotionValues = OA(
      this,
      this.scrapeMotionValuesFromProps(l, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
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
  addVariantChild(l) {
    const u = this.getClosestVariantNode();
    if (u)
      return (
        u.variantChildren && u.variantChildren.add(l),
        () => u.variantChildren.delete(l)
      );
  }
  addValue(l, u) {
    const o = this.values.get(l);
    u !== o &&
      (o && this.removeValue(l),
      this.bindToMotionValue(l, u),
      this.values.set(l, u),
      (this.latestValues[l] = u.get()));
  }
  removeValue(l) {
    this.values.delete(l);
    const u = this.valueSubscriptions.get(l);
    u && (u(), this.valueSubscriptions.delete(l)),
      delete this.latestValues[l],
      this.removeValueFromRenderState(l, this.renderState);
  }
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, u) {
    if (this.props.values && this.props.values[l]) return this.props.values[l];
    let o = this.values.get(l);
    return (
      o === void 0 &&
        u !== void 0 &&
        ((o = fl(u === null ? void 0 : u, { owner: this })),
        this.addValue(l, o)),
      o
    );
  }
  readValue(l, u) {
    let o =
      this.latestValues[l] !== void 0 || !this.current
        ? this.latestValues[l]
        : this.getBaseTargetFromProps(this.props, l) ??
          this.readValueFromInstance(this.current, l, this.options);
    return (
      o != null &&
        (typeof o == "string" && (Jp(o) || Hp(o))
          ? (o = parseFloat(o))
          : !DA(o) && Hn.test(u) && (o = Zp(l, u)),
        this.setBaseTarget(l, te(o) ? o.get() : o)),
      te(o) ? o.get() : o
    );
  }
  setBaseTarget(l, u) {
    this.baseTarget[l] = u;
  }
  getBaseTarget(l) {
    var d;
    const { initial: u } = this.props;
    let o;
    if (typeof u == "string" || typeof u == "object") {
      const h = Ac(
        this.props,
        u,
        (d = this.presenceContext) == null ? void 0 : d.custom
      );
      h && (o = h[l]);
    }
    if (u && o !== void 0) return o;
    const c = this.getBaseTargetFromProps(this.props, l);
    return c !== void 0 && !te(c)
      ? c
      : this.initialValues[l] !== void 0 && o === void 0
        ? void 0
        : this.baseTarget[l];
  }
  on(l, u) {
    return this.events[l] || (this.events[l] = new ic()), this.events[l].add(u);
  }
  notify(l, ...u) {
    this.events[l] && this.events[l].notify(...u);
  }
}
class Dg extends VA {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Wp);
  }
  sortInstanceNodePosition(l, u) {
    return l.compareDocumentPosition(u) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, u) {
    return l.style ? l.style[u] : void 0;
  }
  removeValueFromRenderState(l, { vars: u, style: o }) {
    delete u[l], delete o[l];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    te(l) &&
      (this.childSubscription = l.on("change", (u) => {
        this.current && (this.current.textContent = `${u}`);
      }));
  }
}
function CA(i) {
  return window.getComputedStyle(i);
}
class zA extends Dg {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = Ep);
  }
  readValueFromInstance(l, u) {
    if (oa.has(u)) return XS(l, u);
    {
      const o = CA(l),
        c = (mc(u) ? o.getPropertyValue(u) : o[u]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: u }) {
    return hg(l, u);
  }
  build(l, u, o) {
    gc(l, u, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, u, o) {
    return Ec(l, u, o);
  }
}
class UA extends Dg {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = _t),
      (this.updateDimensions = () => {
        this.current &&
          !this.renderState.dimensions &&
          Ap(this.current, this.renderState);
      });
  }
  getBaseTargetFromProps(l, u) {
    return l[u];
  }
  readValueFromInstance(l, u) {
    if (oa.has(u)) {
      const o = Xp(u);
      return (o && o.default) || 0;
    }
    return (u = Mp.has(u) ? u : dc(u)), l.getAttribute(u);
  }
  scrapeMotionValuesFromProps(l, u, o) {
    return Dp(l, u, o);
  }
  onBindTransform() {
    this.current &&
      !this.renderState.dimensions &&
      At.postRender(this.updateDimensions);
  }
  build(l, u, o) {
    Tc(l, u, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(l, u, o, c) {
    xp(l, u, o, c);
  }
  mount(l) {
    (this.isSVGTag = bc(l.tagName)), super.mount(l);
  }
}
const _A = (i, l) =>
    Sc(i) ? new UA(l) : new zA(l, { allowProjection: i !== et.Fragment }),
  BA = pS({ ...nb, ...AA, ...fA, ...EA }, _A),
  $y = U1(BA),
  NA = "./assets/1-VLo-jrvR.png",
  LA = "./assets/2-Da62pe6x.png",
  HA = "./assets/3-Bn5osJ9n.png",
  jA = "./assets/4-C5vyduhT.png",
  wA = "./assets/5-D0D0LIXp.png",
  qA = "./assets/6-D8Znk9JH.png",
  YA = "./assets/7-4A9KkHtN.png";
function GA() {
  const [i, l] = et.useState(0),
    u = [
      {
        text: "Где-то в волшебной вселенной, Лиза работала как настоящий герой…",
        image: `.${NA}`,
      },
      {
        text: "Но даже герои нуждаются в передышке — особенно, если они любят гулять по зимнему воздуху",
        image: `.${LA}`,
      },
      {
        text: "Наутро она проснулась с больным горлом и хриплым голосом...",
        image: `.${HA}`,
      },
      { text: "Барса, ее верная собака не отходила ни на шаг", image: `.${jA}` },
      {
        text: "К радости близких людей, горячий чай, плед и много любви начали творить чудеса",
        image: `.${wA}`,
      },
      { text: "Скоро Лиза снова заулыбалась", image: `.${qA}` },
      {
        text: "И вот она снова здорова, сияет, и мы гуляем всей нашей маленькой стаей.",
        image: `.${YA}`,
      },
    ];
  et.useEffect(() => {
    const c = setInterval(() => {
      l((d) => (d < u.length - 1 ? d + 1 : d));
    }, 6e3);
    return () => clearInterval(c);
  }, []);
  const o = () => {
    l(0);
  };
  return Ye.jsxs("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    children: [
      Ye.jsx("div", {
        style: { height: 400, borderRadius: 15 },
        children: Ye.jsx(
          $y.img,
          {
            style: { maxHeight: "100%" },
            src: u[i].image,
            alt: "scene",
            className: "w-64 h-64 object-contain mb-6",
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
          },
          u[i].image
        ),
      }),
      Ye.jsx(
        $y.p,
        {
          style: { fontSize: 32, maxWidth: 600, textAlign: "center" },
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1 },
          children: u[i].text,
        },
        u[i].text
      ),
      i === u.length - 1 &&
        Ye.jsx("button", {
          onClick: o,
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
i1.createRoot(document.getElementById("root")).render(
  Ye.jsx(et.StrictMode, { children: Ye.jsx(GA, {}) })
);
