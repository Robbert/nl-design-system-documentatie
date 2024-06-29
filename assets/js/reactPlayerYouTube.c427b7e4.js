(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [64439],
 {
  68559: (e, t, a) => {
   var s,
    l = Object.create,
    o = Object.defineProperty,
    n = Object.getOwnPropertyDescriptor,
    r = Object.getOwnPropertyNames,
    i = Object.getPrototypeOf,
    y = Object.prototype.hasOwnProperty,
    p = (e, t, a, s) => {
     if ((t && 'object' == typeof t) || 'function' == typeof t) for (let l of r(t)) y.call(e, l) || l === a || o(e, l, { get: () => t[l], enumerable: !(s = n(t, l)) || s.enumerable });
     return e;
    },
    c = (e, t, a) => (
     ((e, t, a) => {
      t in e ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (e[t] = a);
     })(e, 'symbol' != typeof t ? t + '' : t, a),
     a
    ),
    u = {};
   ((e, t) => {
    for (var a in t) o(e, a, { get: t[a], enumerable: !0 });
   })(u, { default: () => b }),
    (e.exports = ((s = u), p(o({}, '__esModule', { value: !0 }), s)));
   var h = ((e, t, a) => ((a = null != e ? l(i(e)) : {}), p(!t && e && e.__esModule ? a : o(a, 'default', { value: e, enumerable: !0 }), e)))(a(75271)),
    d = a(21981),
    P = a(39090);
   const m = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,
    g = /user\/([a-zA-Z0-9_-]+)\/?/,
    f = /youtube-nocookie\.com/;
   class b extends h.Component {
    constructor() {
     super(...arguments),
      c(this, 'callPlayer', d.callPlayer),
      c(this, 'parsePlaylist', (e) => {
       if (e instanceof Array) return { listType: 'playlist', playlist: e.map(this.getID).join(',') };
       if (m.test(e)) {
        const [, t] = e.match(m);
        return { listType: 'playlist', list: t.replace(/^UC/, 'UU') };
       }
       if (g.test(e)) {
        const [, t] = e.match(g);
        return { listType: 'user_uploads', list: t };
       }
       return {};
      }),
      c(this, 'onStateChange', (e) => {
       const { data: t } = e,
        {
         onPlay: a,
         onPause: s,
         onBuffer: l,
         onBufferEnd: o,
         onEnded: n,
         onReady: r,
         loop: i,
         config: { playerVars: y, onUnstarted: p },
        } = this.props,
        { UNSTARTED: c, PLAYING: u, PAUSED: h, BUFFERING: d, ENDED: P, CUED: m } = window.YT.PlayerState;
       if ((t === c && p(), t === u && (a(), o()), t === h && s(), t === d && l(), t === P)) {
        const e = !!this.callPlayer('getPlaylist');
        i && !e && (y.start ? this.seekTo(y.start) : this.play()), n();
       }
       t === m && r();
      }),
      c(this, 'mute', () => {
       this.callPlayer('mute');
      }),
      c(this, 'unmute', () => {
       this.callPlayer('unMute');
      }),
      c(this, 'ref', (e) => {
       this.container = e;
      });
    }
    componentDidMount() {
     this.props.onMount && this.props.onMount(this);
    }
    getID(e) {
     return !e || e instanceof Array || m.test(e) ? null : e.match(P.MATCH_URL_YOUTUBE)[1];
    }
    load(e, t) {
     const { playing: a, muted: s, playsinline: l, controls: o, loop: n, config: r, onError: i } = this.props,
      { playerVars: y, embedOptions: p } = r,
      c = this.getID(e);
     if (t) return m.test(e) || g.test(e) || e instanceof Array ? void this.player.loadPlaylist(this.parsePlaylist(e)) : void this.player.cueVideoById({ videoId: c, startSeconds: (0, d.parseStartTime)(e) || y.start, endSeconds: (0, d.parseEndTime)(e) || y.end });
     (0, d.getSDK)('https://www.youtube.com/iframe_api', 'YT', 'onYouTubeIframeAPIReady', (e) => e.loaded).then((t) => {
      this.container &&
       (this.player = new t.Player(this.container, {
        width: '100%',
        height: '100%',
        videoId: c,
        playerVars: { autoplay: a ? 1 : 0, mute: s ? 1 : 0, controls: o ? 1 : 0, start: (0, d.parseStartTime)(e), end: (0, d.parseEndTime)(e), origin: window.location.origin, playsinline: l ? 1 : 0, ...this.parsePlaylist(e), ...y },
        events: {
         onReady: () => {
          n && this.player.setLoop(!0), this.props.onReady();
         },
         onPlaybackRateChange: (e) => this.props.onPlaybackRateChange(e.data),
         onPlaybackQualityChange: (e) => this.props.onPlaybackQualityChange(e),
         onStateChange: this.onStateChange,
         onError: (e) => i(e.data),
        },
        host: f.test(e) ? 'https://www.youtube-nocookie.com' : void 0,
        ...p,
       }));
     }, i),
      p.events && console.warn('Using `embedOptions.events` will likely break things. Use ReactPlayer\u2019s callback props instead, eg onReady, onPlay, onPause');
    }
    play() {
     this.callPlayer('playVideo');
    }
    pause() {
     this.callPlayer('pauseVideo');
    }
    stop() {
     document.body.contains(this.callPlayer('getIframe')) && this.callPlayer('stopVideo');
    }
    seekTo(e, t = !1) {
     this.callPlayer('seekTo', e), t || this.props.playing || this.pause();
    }
    setVolume(e) {
     this.callPlayer('setVolume', 100 * e);
    }
    setPlaybackRate(e) {
     this.callPlayer('setPlaybackRate', e);
    }
    setLoop(e) {
     this.callPlayer('setLoop', e);
    }
    getDuration() {
     return this.callPlayer('getDuration');
    }
    getCurrentTime() {
     return this.callPlayer('getCurrentTime');
    }
    getSecondsLoaded() {
     return this.callPlayer('getVideoLoadedFraction') * this.getDuration();
    }
    render() {
     const { display: e } = this.props,
      t = { width: '100%', height: '100%', display: e };
     return h.default.createElement('div', { style: t }, h.default.createElement('div', { ref: this.ref }));
    }
   }
   c(b, 'displayName', 'YouTube'), c(b, 'canPlay', P.canPlay.youtube);
  },
 },
]);
