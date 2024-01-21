(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [6125],
 {
  8306: (e, t, s) => {
   var r,
    o = Object.create,
    i = Object.defineProperty,
    l = Object.getOwnPropertyDescriptor,
    n = Object.getOwnPropertyNames,
    a = Object.getPrototypeOf,
    u = Object.prototype.hasOwnProperty,
    p = (e, t, s, r) => {
     if ((t && "object" == typeof t) || "function" == typeof t) for (let o of n(t)) u.call(e, o) || o === s || i(e, o, { get: () => t[o], enumerable: !(r = l(t, o)) || r.enumerable });
     return e;
    },
    h = (e, t, s) => (
     ((e, t, s) => {
      t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[t] = s);
     })(e, "symbol" != typeof t ? t + "" : t, s),
     s
    ),
    d = {};
   ((e, t) => {
    for (var s in t) i(e, s, { get: t[s], enumerable: !0 });
   })(d, { default: () => f }),
    (e.exports = ((r = d), p(i({}, "__esModule", { value: !0 }), r)));
   var c = ((e, t, s) => ((s = null != e ? o(a(e)) : {}), p(!t && e && e.__esModule ? s : i(s, "default", { value: e, enumerable: !0 }), e)))(s(959)),
    y = s(9121),
    m = s(3899);
   class f extends c.Component {
    constructor() {
     super(...arguments),
      h(this, "callPlayer", y.callPlayer),
      h(this, "duration", null),
      h(this, "currentTime", null),
      h(this, "fractionLoaded", null),
      h(this, "mute", () => {
       this.setVolume(0);
      }),
      h(this, "unmute", () => {
       null !== this.props.volume && this.setVolume(this.props.volume);
      }),
      h(this, "ref", (e) => {
       this.iframe = e;
      });
    }
    componentDidMount() {
     this.props.onMount && this.props.onMount(this);
    }
    load(e, t) {
     (0, y.getSDK)("https://w.soundcloud.com/player/api.js", "SC").then((s) => {
      if (!this.iframe) return;
      const { PLAY: r, PLAY_PROGRESS: o, PAUSE: i, FINISH: l, ERROR: n } = s.Widget.Events;
      t ||
       ((this.player = s.Widget(this.iframe)),
       this.player.bind(r, this.props.onPlay),
       this.player.bind(i, () => {
        this.duration - this.currentTime < 0.05 || this.props.onPause();
       }),
       this.player.bind(o, (e) => {
        (this.currentTime = e.currentPosition / 1e3), (this.fractionLoaded = e.loadedProgress);
       }),
       this.player.bind(l, () => this.props.onEnded()),
       this.player.bind(n, (e) => this.props.onError(e))),
       this.player.load(e, {
        ...this.props.config.options,
        callback: () => {
         this.player.getDuration((e) => {
          (this.duration = e / 1e3), this.props.onReady();
         });
        },
       });
     });
    }
    play() {
     this.callPlayer("play");
    }
    pause() {
     this.callPlayer("pause");
    }
    stop() {}
    seekTo(e, t = !0) {
     this.callPlayer("seekTo", 1e3 * e), t || this.pause();
    }
    setVolume(e) {
     this.callPlayer("setVolume", 100 * e);
    }
    getDuration() {
     return this.duration;
    }
    getCurrentTime() {
     return this.currentTime;
    }
    getSecondsLoaded() {
     return this.fractionLoaded * this.duration;
    }
    render() {
     const { display: e } = this.props,
      t = { width: "100%", height: "100%", display: e };
     return c.default.createElement("iframe", { ref: this.ref, src: `https://w.soundcloud.com/player/?url=${encodeURIComponent(this.props.url)}`, style: t, frameBorder: 0, allow: "autoplay" });
    }
   }
   h(f, "displayName", "SoundCloud"), h(f, "canPlay", m.canPlay.soundcloud), h(f, "loopOnEnded", !0);
  },
 },
]);
