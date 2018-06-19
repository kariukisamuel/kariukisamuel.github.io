! function() {
    function a() {
        function d() {
            c.removeEventListener("click", d), a.classList.remove("menu--open"), b.reveal({
                bgcolor: "#f9da33",
                duration: 400,
                direction: "rl",
                easing: "easeInOutCubic",
                onCover: function(b, c) {
                    a.classList.remove("menu--open"), b.style.opacity = 0, document.querySelector(".btn--menu").classList.remove("hamb-off"), document.querySelector("body, html").classList.remove("body-block")
                }
            })
        }
        document.body.classList.remove("loading");
        var a = document.querySelector("nav.menu"),
            b = new RevealFx(a),
            c = a.querySelector(".btn--close");
        document.querySelector(".btn--menu").addEventListener("click", function() {
            b.reveal({
                bgcolor: "#f9da33",
                duration: 400,
                easing: "easeInOutCubic",
                onCover: function(b, c) {
                    a.classList.add("menu--open"), b.style.opacity = 1, document.querySelector(".btn--menu").classList.add("hamb-off"), document.querySelector("body, html").classList.add("body-block")
                },
                onComplete: function() {
                    c.addEventListener("click", d)
                }
            })
        }), new RevealFx(document.querySelector("#rev-1"), {
            revealSettings: {
                bgcolor: "#f9da33",
                onCover: function(a, b) {
                    a.style.opacity = 1
                }
            }
        }).reveal(), new RevealFx(document.querySelector("#rev-2"), {
            revealSettings: {
                bgcolor: "#f9da33",
                delay: 250,
                onCover: function(a, b) {
                    a.style.opacity = 1
                }
            }
        }).reveal();
        var g = document.getElementById("rev-3"),
            h = scrollMonitor.create(g, -300),
            i = new RevealFx(g, {
                revealSettings: {
                    bgcolor: "#f9da33",
                    onCover: function(a, b) {
                        a.style.opacity = 1
                    }
                }
            }),
            j = new RevealFx(document.querySelector("#rev-4"), {
                revealSettings: {
                    bgcolor: "#f9da33",
                    delay: 250,
                    onCover: function(a, b) {
                        a.style.opacity = 1
                    }
                }
            });
        h.enterViewport(function() {
            i.reveal(), j.reveal(), h.destroy()
        });
        var g = document.getElementById("info-contact1"),
            k = scrollMonitor.create(g, -200),
            l = new RevealFx(g, {
                revealSettings: {
                    bgcolor: "#f9da33",
                    onCover: function(a, b) {
                        a.style.opacity = 1
                    }
                }
            }),
            m = new RevealFx(document.querySelector("#info-contact2"), {
                revealSettings: {
                    bgcolor: "#f9da33",
                    delay: 250,
                    onCover: function(a, b) {
                        a.style.opacity = 1
                    }
                }
            });
        k.enterViewport(function() {
            l.reveal(), m.reveal(), k.destroy()
        });
        var g = document.getElementById("social-life1"),
            n = scrollMonitor.create(g, -200),
            o = new RevealFx(g, {
                revealSettings: {
                    bgcolor: "#f9da33",
                    delay: 200,
                    onCover: function(a, b) {
                        a.style.opacity = 1
                    }
                }
            }),
            p = new RevealFx(document.querySelector("#social-life2"), {
                revealSettings: {
                    bgcolor: "#f9da33",
                    delay: 450,
                    onCover: function(a, b) {
                        a.style.opacity = 1
                    }
                }
            });
        n.enterViewport(function() {
            o.reveal(), p.reveal(), n.destroy()
        });
        var g = document.getElementById("rev-5"),
            q = scrollMonitor.create(g, -300),
            r = new RevealFx(g, {
                revealSettings: {
                    bgcolor: "#f9da33",
                    onCover: function(a, b) {
                        a.style.opacity = 1
                    }
                }
            }),
            s = new RevealFx(document.querySelector("#rev-6"), {
                revealSettings: {
                    bgcolor: "#f9da33",
                    delay: 250,
                    direction: "rl",
                    onCover: function(a, b) {
                        a.style.opacity = 1
                    }
                }
            });
        q.enterViewport(function() {
            r.reveal(), s.reveal(), q.destroy()
        })
    }
    setTimeout(a, 2e3)
}(), $(document).ready(function(a) {
    $("a.scrollto[href*=#]").click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var a = $(this.hash);
            if (a = a.length && a || $("[name=" + this.hash.slice(1) + "]"), a.length) {
                var b = a.offset().top;
                return $("html,body").stop().animate({
                    scrollTop: b
                }, 1e3), !1
            }
        }
    });
    $(".wrapper-work").map(function(a, b) {
        var c = scrollMonitor.create(b);
        return c.lock(), c.stateChange(function() {
            $(b).addClass("workIn", this.isAboveViewport)
        }), c
    }), $(".brand-dx").map(function(a, b) {
        var c = scrollMonitor.create(b);
        return c.lock(), c.stateChange(function() {
            $(b).addClass("brandInRight", this.isAboveViewport)
        }), c
    }), $(".brand-sx").map(function(a, b) {
        var c = scrollMonitor.create(b);
        return c.lock(), c.stateChange(function() {
            $(b).addClass("brandInLeft", this.isAboveViewport)
        }), c
    })
});