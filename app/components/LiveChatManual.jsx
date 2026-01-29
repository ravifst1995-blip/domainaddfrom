"use client";
import { useEffect } from "react";

export default function LiveChatManual() {
  useEffect(() => {
    // Only run in the browser
    if (typeof window === "undefined") return;

    // Prevent loading twice
    if (window.LiveChatWidget) return;

    window.__lc = window.__lc || {};
    window.__lc.license = 19476814;
    window.__lc.integration_name = "manual_channels";
    window.__lc.product_name = "livechat";

    (function (n, t, c) {
      function i(n) {
        return e._h ? e._h.apply(null, n) : e._q.push(n);
      }
      var e = { _q: [], _h: null, _v: "2.0" };
      e.on = function () {
        i(["on", Array.prototype.slice.call(arguments)]);
      };
      e.once = function () {
        i(["once", Array.prototype.slice.call(arguments)]);
      };
      e.off = function () {
        i(["off", Array.prototype.slice.call(arguments)]);
      };
      e.get = function () {
        if (!e._h)
          throw new Error(
            "[LiveChatWidget] You can't use getters before load."
          );
        return i(["get", Array.prototype.slice.call(arguments)]);
      };
      e.call = function () {
        i(["call", Array.prototype.slice.call(arguments)]);
      };
      e.init = function () {
        var n = t.createElement("script");
        n.async = true;
        n.type = "text/javascript";
        n.src = "https://cdn.livechatinc.com/tracking.js";
        t.head.appendChild(n);
      };
      if (!n.__lc.asyncInit) e.init();
      n.LiveChatWidget = n.LiveChatWidget || e;
    })(window, document, []);
  }, []);

  return null; // No visible JSX needed
}
