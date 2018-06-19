! function(a) {
    "use strict";

    function b(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    }

    function c(a, b, c) {
        var d = document.createElement(a);
        return d.className = b || "", d.innerHTML = c || "", d
    }

    function d(a, c) {
        this.el = a, this.options = b({}, this.options), b(this.options, c), this._init()
    }
    d.prototype.options = {
        isContentHidden: !0,
        revealSettings: {
            direction: "lr",
            bgcolor: "#F9DA33",
            duration: 500,
            easing: "easeInOutQuint",
            coverArea: 0,
            onCover: function(a, b) {
                return !1
            },
            onStart: function(a, b) {
                return !1
            },
            onComplete: function(a, b) {
                return !1
            }
        }
    }, d.prototype._init = function() {
        this._layout()
    }, d.prototype._layout = function() {
        var a = getComputedStyle(this.el).position;
        "fixed" !== a && "absolute" !== a && "relative" !== a && (this.el.style.position = "relative"), this.content = c("div", "block-revealer__content", this.el.innerHTML), this.options.isContentHidden && (this.content.style.opacity = 0), this.revealer = c("div", "block-revealer__element"), this.el.classList.add("block-revealer"), this.el.innerHTML = "", this.el.appendChild(this.content), this.el.appendChild(this.revealer)
    }, d.prototype._getTransformSettings = function(a) {
        var b, c, d;
        switch (a) {
            case "lr":
                b = "scale3d(0,1,1)", c = "0 50%", d = "100% 50%";
                break;
            case "rl":
                b = "scale3d(0,1,1)", c = "100% 50%", d = "0 50%";
                break;
            case "tb":
                b = "scale3d(1,0,1)", c = "50% 0", d = "50% 100%";
                break;
            case "bt":
                b = "scale3d(1,0,1)", c = "50% 100%", d = "50% 0";
                break;
            default:
                b = "scale3d(0,1,1)", c = "0 50%", d = "100% 50%"
        }
        return {
            val: b,
            origin: {
                initial: c,
                halfway: d
            }
        }
    }, d.prototype.reveal = function(a) {
        if (this.isAnimating) return !1;
        this.isAnimating = !0;
        var b = {
                duration: 500,
                easing: "easeInOutQuint",
                delay: 0,
                bgcolor: "#f0f0f0",
                direction: "lr",
                coverArea: 0
            },
            a = a || this.options.revealSettings,
            c = a.direction || b.direction,
            d = this._getTransformSettings(c);
        this.revealer.style.WebkitTransform = this.revealer.style.transform = d.val, this.revealer.style.WebkitTransformOrigin = this.revealer.style.transformOrigin = d.origin.initial, this.revealer.style.backgroundColor = a.bgcolor || b.bgcolor, this.revealer.style.opacity = 1;
        var e = this,
            f = {
                complete: function() {
                    e.isAnimating = !1, "function" == typeof a.onComplete && a.onComplete(e.content, e.revealer)
                }
            },
            g = {
                delay: a.delay || b.delay,
                complete: function() {
                    e.revealer.style.WebkitTransformOrigin = e.revealer.style.transformOrigin = d.origin.halfway, "function" == typeof a.onCover && a.onCover(e.content, e.revealer), anime(f)
                }
            };
        g.targets = f.targets = this.revealer, g.duration = f.duration = a.duration || b.duration, g.easing = f.easing = a.easing || b.easing;
        var h = a.coverArea || b.coverArea;
        "lr" === c || "rl" === c ? (g.scaleX = [0, 1], f.scaleX = [1, h / 100]) : (g.scaleY = [0, 1], f.scaleY = [1, h / 100]), "function" == typeof a.onStart && a.onStart(e.content, e.revealer), anime(g)
    }, a.RevealFx = d
}(window);