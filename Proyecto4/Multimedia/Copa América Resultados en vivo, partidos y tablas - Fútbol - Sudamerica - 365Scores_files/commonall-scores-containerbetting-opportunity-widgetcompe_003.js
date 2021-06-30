(this.webpackJsonpcra=this.webpackJsonpcra||[]).push([[7],{366:function(t,e,o){"use strict";o.d(e,"a",(function(){return c}));var a=o(1),n=o(7),i=o(40),r=o(14),s=o(3),m=o(4),c=function(t){Object(s.a)(AutoAnimation,t);var e=Object(m.a)(AutoAnimation);function AutoAnimation(){return Object(a.a)(this,AutoAnimation),e.apply(this,arguments)}return Object(n.a)(AutoAnimation,[{key:"start",value:function(){var t=this;setTimeout((function(){return t.enter()}),this.delayMS)}},{key:"enter",value:function(){var t=this;Object(i.a)(Object(r.a)(AutoAnimation.prototype),"enter",this).call(this),setTimeout((function(){return t.main()}),this.enterDurationMS)}},{key:"main",value:function(){var t=this;Object(i.a)(Object(r.a)(AutoAnimation.prototype),"main",this).call(this),setTimeout((function(){return t.leave()}),this.mainDurationMS)}},{key:"leave",value:function(){var t=this;Object(i.a)(Object(r.a)(AutoAnimation.prototype),"leave",this).call(this),setTimeout((function(){return t.stop()}),this.leaveDurationMS)}}]),AutoAnimation}(o(744).b)},503:function(t,e,o){"use strict";o.d(e,"a",(function(){return c}));var a=o(13),n=o(1),i=o(7),r=o(3),s=o(4),m=o(20),c=(o(572),o(577),o(24),function(t){Object(r.a)(AnimationService,t);var e=Object(s.a)(AnimationService);function AnimationService(){return Object(n.a)(this,AnimationService),e.apply(this,arguments)}return Object(i.a)(AnimationService,[{key:"create",value:function(t){var e=null,o=this.animations[t.id];return o&&(e=new o(t)),e}},{key:"start",value:function(t){if(t){var e=this.create(t);return e&&setTimeout((function(){return e.start()}),0),e}}},{key:"animations",get:function(){throw new Error("must implement animations mapper: "+this.constructor.name)}}]),AnimationService}(m.a));c.injectables=Object(a.a)(m.a.injectables)},522:function(t,e,o){"use strict";o.d(e,"a",(function(){return l}));var a=o(1),n=o(3),i=o(4),r=o(5),s=o.n(r),m=o(417),c=o.n(m),u=o(297),l=(o(52).a,function(t){return s.a.createElement(u.a,{src:c.a,width:t.width,height:t.height,className:t.className})})},566:function(t,e,o){"use strict";o.d(e,"a",(function(){return y}));var a,n=o(13),i=o(1),r=o(7),s=o(9),m=o(3),c=o(4),u=o(17),l=function(t){Object(m.a)(BaseTemplateAnimationSetModel,t);var e=Object(c.a)(BaseTemplateAnimationSetModel);function BaseTemplateAnimationSetModel(){return Object(i.a)(this,BaseTemplateAnimationSetModel),e.apply(this,arguments)}return BaseTemplateAnimationSetModel}(o(577).a),p=o(6),d=(o(744),o(745)),y=(a=function(t){Object(m.a)(BaseGameTemplateAnimationSetModel,t);var e=Object(c.a)(BaseGameTemplateAnimationSetModel);function BaseGameTemplateAnimationSetModel(t){var o;return Object(i.a)(this,BaseGameTemplateAnimationSetModel),o=e.call(this,t),Object(p.p)(Object(s.a)(o)),o.duration=1e4,o}return Object(r.a)(BaseGameTemplateAnimationSetModel,[{key:"durationByRatio",value:function(t){return t*this.duration}},{key:"eventLogo",get:function(){return new d.a(this.id,this.isHomeCompetitor)}},{key:"homeCompetitorAnimations",get:function(){var t=[this.homeCompetitorLogo,this.homeCompetitorEventLogo,this.homeCompetitorEventCardLogo,this.homeCompetitorName,this.homeCompetitorPlayerName,this.homeCompetitorScore];return this.isHomeCompetitor?t:[]}},{key:"awayCompetitorAnimations",get:function(){var t=[this.awayCompetitorLogo,this.awayCompetitorEventLogo,this.awayCompetitorEventCardLogo,this.awayCompetitorName,this.awayCompetitorPlayerName,this.awayCompetitorScore];return this.isAwayCompetitor?t:[]}},{key:"generalAnimations",get:function(){return[this.container,this.statusText,this.statusEventLogo,this.gameTime,this.statusContainer]}},{key:"animations",get:function(){return[].concat(Object(n.a)(this.generalAnimations),Object(n.a)(this.homeCompetitorAnimations),Object(n.a)(this.awayCompetitorAnimations)).filter((function(t){return!!t}))}},{key:"container",get:function(){return null}},{key:"statusText",get:function(){return null}},{key:"statusEventLogo",get:function(){return null}},{key:"homeCompetitorLogo",get:function(){return null}},{key:"homeCompetitorEventLogo",get:function(){return null}},{key:"homeCompetitorEventCardLogo",get:function(){return null}},{key:"homeCompetitorName",get:function(){return null}},{key:"homeCompetitorPlayerName",get:function(){return null}},{key:"homeCompetitorScore",get:function(){return null}},{key:"awayCompetitorLogo",get:function(){return null}},{key:"awayCompetitorEventLogo",get:function(){return null}},{key:"awayCompetitorEventCardLogo",get:function(){return null}},{key:"awayCompetitorName",get:function(){return null}},{key:"awayCompetitorPlayerName",get:function(){return null}},{key:"awayCompetitorScore",get:function(){return null}},{key:"gameTime",get:function(){return null}},{key:"statusContainer",get:function(){return null}},{key:"animationText",get:function(){return this.animation.animationText}},{key:"playerName",get:function(){return this.animation.playerName}},{key:"isHomeCompetitor",get:function(){return this.animation.isHomeCompetitor}},{key:"isAwayCompetitor",get:function(){return this.animation.isAwayCompetitor}}]),BaseGameTemplateAnimationSetModel}(l),Object(u.a)(a.prototype,"homeCompetitorAnimations",[p.h],Object.getOwnPropertyDescriptor(a.prototype,"homeCompetitorAnimations"),a.prototype),Object(u.a)(a.prototype,"awayCompetitorAnimations",[p.h],Object.getOwnPropertyDescriptor(a.prototype,"awayCompetitorAnimations"),a.prototype),Object(u.a)(a.prototype,"generalAnimations",[p.h],Object.getOwnPropertyDescriptor(a.prototype,"generalAnimations"),a.prototype),Object(u.a)(a.prototype,"animations",[p.r],Object.getOwnPropertyDescriptor(a.prototype,"animations"),a.prototype),Object(u.a)(a.prototype,"container",[p.h],Object.getOwnPropertyDescriptor(a.prototype,"container"),a.prototype),Object(u.a)(a.prototype,"statusText",[p.h],Object.getOwnPropertyDescriptor(a.prototype,"statusText"),a.prototype),Object(u.a)(a.prototype,"statusEventLogo",[p.h],Object.getOwnPropertyDescriptor(a.prototype,"statusEventLogo"),a.prototype),Object(u.a)(a.prototype,"homeCompetitorLogo",[p.h],Object.getOwnPropertyDescriptor(a.prototype,"homeCompetitorLogo"),a.prototype),Object(u.a)(a.prototype,"homeCompetitorEventLogo",[p.h],Object.getOwnPropertyDescriptor(a.prototype,"homeCompetitorEventLogo"),a.prototype),Object(u.a)(a.prototype,"homeCompetitorEventCardLogo",[p.h],Object.getOwnPropertyDescriptor(a.prototype,"homeCompetitorEventCardLogo"),a.prototype),Object(u.a)(a.prototype,"homeCompetitorName",[p.h],Object.getOwnPropertyDescriptor(a.prototype,"homeCompetitorName"),a.prototype),Object(u.a)(a.prototype,"homeCompetitorPlayerName",[p.h],Object.getOwnPropertyDescriptor(a.prototype,"homeCompetitorPlayerName"),a.prototype),Object(u.a)(a.prototype,"homeCompetitorScore",[p.h],Object.getOwnPropertyDescriptor(a.prototype,"homeCompetitorScore"),a.prototype),Object(u.a)(a.prototype,"awayCompetitorLogo",[p.h],Object.getOwnPropertyDescriptor(a.prototype,"awayCompetitorLogo"),a.prototype),Object(u.a)(a.prototype,"awayCompetitorEventLogo",[p.h],Object.getOwnPropertyDescriptor(a.prototype,"awayCompetitorEventLogo"),a.prototype),Object(u.a)(a.prototype,"awayCompetitorEventCardLogo",[p.h],Object.getOwnPropertyDescriptor(a.prototype,"awayCompetitorEventCardLogo"),a.prototype),Object(u.a)(a.prototype,"awayCompetitorName",[p.h],Object.getOwnPropertyDescriptor(a.prototype,"awayCompetitorName"),a.prototype),Object(u.a)(a.prototype,"awayCompetitorPlayerName",[p.h],Object.getOwnPropertyDescriptor(a.prototype,"awayCompetitorPlayerName"),a.prototype),Object(u.a)(a.prototype,"awayCompetitorScore",[p.h],Object.getOwnPropertyDescriptor(a.prototype,"awayCompetitorScore"),a.prototype),Object(u.a)(a.prototype,"gameTime",[p.h],Object.getOwnPropertyDescriptor(a.prototype,"gameTime"),a.prototype),Object(u.a)(a.prototype,"statusContainer",[p.h],Object.getOwnPropertyDescriptor(a.prototype,"statusContainer"),a.prototype),a)},577:function(t,e,o){"use strict";o.d(e,"a",(function(){return d}));var a,n=o(1),i=o(7),r=o(9),s=o(3),m=o(4),c=o(17),u=o(6),l=o(8),p=o(744),d=(o(572),a=function(t){Object(s.a)(BaseAnimationSetModel,t);var e=Object(m.a)(BaseAnimationSetModel);function BaseAnimationSetModel(t){var o;return Object(n.a)(this,BaseAnimationSetModel),o=e.call(this,t),Object(u.p)(Object(r.a)(o)),o.animation=t,o}return Object(i.a)(BaseAnimationSetModel,[{key:"start",value:function(){this.animations.forEach((function(t){return t&&t.start()}))}},{key:"leave",value:function(){this.animations.forEach((function(t){return t&&t.leave()}))}},{key:"stop",value:function(){this.animations.forEach((function(t){return t&&t.stop()}))}},{key:"id",get:function(){return this.animation.id}},{key:"uniqueId",get:function(){return this.animation.uniqueId}},{key:"animations",get:function(){return[]}},{key:"isEnded",get:function(){var t=!0;return this.animations.forEach((function(e){return t&=!e||e.state===p.a.LIFE_CYCLE.ended})),!!t}}]),BaseAnimationSetModel}(l.a),Object(c.a)(a.prototype,"animations",[u.h],Object.getOwnPropertyDescriptor(a.prototype,"animations"),a.prototype),Object(c.a)(a.prototype,"isEnded",[u.h],Object.getOwnPropertyDescriptor(a.prototype,"isEnded"),a.prototype),a)},636:function(t,e,o){"use strict";o.d(e,"a",(function(){return a}));var a={goal:10,yellowCard:11,redCard:12,penaltyMiss:53,matchStart:32,matchEnd:33,breakTimeStarted:9999,breakTimeEnded:9}},637:function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));var a=o(1),n=o(7),i=o(3),r=o(4),s=function(t){Object(i.a)(gameStatusChangedTemplateAnimationSetModel,t);var e=Object(r.a)(gameStatusChangedTemplateAnimationSetModel);function gameStatusChangedTemplateAnimationSetModel(){return Object(a.a)(this,gameStatusChangedTemplateAnimationSetModel),e.apply(this,arguments)}return Object(n.a)(gameStatusChangedTemplateAnimationSetModel,[{key:"eventLogo",get:function(){return null}}]),gameStatusChangedTemplateAnimationSetModel}(o(566).a)},744:function(t,e,o){"use strict";o.d(e,"a",(function(){return h})),o.d(e,"b",(function(){return v}));var a,n,i,r=o(23),s=o(1),m=o(7),c=o(9),u=o(3),l=o(4),p=o(17),d=(o(70),o(8)),y=o(6),h={LIFE_CYCLE:{waiting:"waiting",animating:"animating",ended:"ended"}},v=(a=function(t){Object(u.a)(BaseAnimation,t);var e=Object(l.a)(BaseAnimation);function BaseAnimation(){var t,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",m=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,p=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,d=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,v=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0;return Object(s.a)(this,BaseAnimation),t=e.call(this),Object(r.a)(t,"_currentClassName",n,Object(c.a)(t)),Object(r.a)(t,"state",i,Object(c.a)(t)),Object(y.p)(Object(c.a)(t)),t.enterAnimationClassName=o,t.mainAnimationClassName=a,t.leaveAnimationClassName=m,t.noAnimationClassName=u,t.mainDurationMS=l,t.enterDurationMS=p,t.leaveDurationMS=d,t.delayMS=v,t._currentClassName=t.noAnimationClassName,t.state=h.LIFE_CYCLE.waiting,t}return Object(m.a)(BaseAnimation,[{key:"start",value:function(){this.state=h.LIFE_CYCLE.animating,this.enter()}},{key:"enter",value:function(){this.currentAnimationClassName=this.enterAnimationClassName}},{key:"main",value:function(){this.currentAnimationClassName=this.mainAnimationClassName}},{key:"leave",value:function(){this.currentAnimationClassName=this.leaveAnimationClassName}},{key:"stop",value:function(){this.currentAnimationClassName=this.noAnimationClassName,this.state=h.LIFE_CYCLE.ended}},{key:"currentAnimationClassName",set:function(t){this._currentClassName=t},get:function(){return this._currentClassName}}]),BaseAnimation}(d.a),n=Object(p.a)(a.prototype,"_currentClassName",[y.q],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i=Object(p.a)(a.prototype,"state",[y.q],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Object(p.a)(a.prototype,"currentAnimationClassName",[y.h],Object.getOwnPropertyDescriptor(a.prototype,"currentAnimationClassName"),a.prototype),a)},745:function(t,e,o){"use strict";o.d(e,"a",(function(){return l}));var a=o(1),n=o(7),i=o(40),r=o(14),s=o(3),m=o(4),c=o(326),u=o(27),l=function(t){Object(s.a)(AnimationLogoEventRequestParams,t);var e=Object(m.a)(AnimationLogoEventRequestParams);function AnimationLogoEventRequestParams(t){var o;return Object(a.a)(this,AnimationLogoEventRequestParams),(o=e.call(this,{resourceName:"website/animations"})).id=t,o._width=32,o.ratio=3,o}return Object(n.a)(AnimationLogoEventRequestParams,[{key:"toString",value:function(){return Object(i.a)(Object(r.a)(AnimationLogoEventRequestParams.prototype),"toString",this).call(this)+"/"+this.id}},{key:"defaultFormat",get:function(){return u.m.AUTO}},{key:"angle",get:function(){return this.rotate}}]),AnimationLogoEventRequestParams}(c.a)},746:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var a=o(1),n=o(3),i=o(4),r=function(t){Object(n.a)(BasePenaltyMissedAnimationSetModel,t);var e=Object(i.a)(BasePenaltyMissedAnimationSetModel);function BasePenaltyMissedAnimationSetModel(){return Object(a.a)(this,BasePenaltyMissedAnimationSetModel),e.apply(this,arguments)}return BasePenaltyMissedAnimationSetModel}(o(917).a)},747:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var a=o(1),n=o(3),i=o(4),r=function(t){Object(n.a)(RedCardAnimationSetModel,t);var e=Object(i.a)(RedCardAnimationSetModel);function RedCardAnimationSetModel(){return Object(a.a)(this,RedCardAnimationSetModel),e.apply(this,arguments)}return RedCardAnimationSetModel}(o(836).a)},748:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var a=o(1),n=o(3),i=o(4),r=function(t){Object(n.a)(YellowCardAnimationSetModel,t);var e=Object(i.a)(YellowCardAnimationSetModel);function YellowCardAnimationSetModel(){return Object(a.a)(this,YellowCardAnimationSetModel),e.apply(this,arguments)}return YellowCardAnimationSetModel}(o(836).a)},749:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var a=o(1),n=o(3),i=o(4),r=function(t){Object(n.a)(MatchStartedAnimationSetModel,t);var e=Object(i.a)(MatchStartedAnimationSetModel);function MatchStartedAnimationSetModel(){return Object(a.a)(this,MatchStartedAnimationSetModel),e.apply(this,arguments)}return MatchStartedAnimationSetModel}(o(637).a)},750:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var a=o(1),n=o(3),i=o(4),r=function(t){Object(n.a)(MatchEndedAnimationSetModel,t);var e=Object(i.a)(MatchEndedAnimationSetModel);function MatchEndedAnimationSetModel(){return Object(a.a)(this,MatchEndedAnimationSetModel),e.apply(this,arguments)}return MatchEndedAnimationSetModel}(o(637).a)},751:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var a=o(1),n=o(3),i=o(4),r=function(t){Object(n.a)(MatchBreakTimeStartedAnimationSetModel,t);var e=Object(i.a)(MatchBreakTimeStartedAnimationSetModel);function MatchBreakTimeStartedAnimationSetModel(){return Object(a.a)(this,MatchBreakTimeStartedAnimationSetModel),e.apply(this,arguments)}return MatchBreakTimeStartedAnimationSetModel}(o(637).a)},752:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var a=o(1),n=o(3),i=o(4),r=function(t){Object(n.a)(MatchBreakTimeEndedAnimationSetModel,t);var e=Object(i.a)(MatchBreakTimeEndedAnimationSetModel);function MatchBreakTimeEndedAnimationSetModel(){return Object(a.a)(this,MatchBreakTimeEndedAnimationSetModel),e.apply(this,arguments)}return MatchBreakTimeEndedAnimationSetModel}(o(637).a)},823:function(t,e,o){"use strict";o.d(e,"a",(function(){return p}));var a=o(294),n=o(1),i=o(3),r=o(4),s=o(5),m=o.n(s),c=o(52),u=(c.a,function(t){for(var e=[],o=0;o<t.total;o++){var a={key:o,className:["dot",t.current>o?"dot-active":"",t.isSmallView?"dot-small-view":""].join(" ")};e.push(a)}return m.a.createElement("div",{className:"dots-container"},e.map((function(t){return m.a.createElement("div",t)})))}),l=(c.a,function(t){var e={total:t.total,current:t.current,isSmallView:t.isSmallView},o={className:["game-center-header-bonus-indication-container",t.shouldDisplayBonus?"game-center-header-display-bonus":""].join(" ")};return m.a.createElement("div",o,m.a.createElement(u,e),t.shouldDisplayBonus&&m.a.createElement("div",{className:"game-center-header-bonus"},t.foulsBonusText))}),p=(o(484),c.a,function(t){var e,o,n,i,r,c,u,p,d,y,h=Object(s.useState)(t.homeCompetitor.score),v=Object(a.a)(h,2),f=v[0],O=v[1],b=Object(s.useState)(t.awayCompetitor.score),g=Object(a.a)(b,2),j=g[0],A=g[1];Object(s.useEffect)((function(){var e=setTimeout((function(){return O(t.homeCompetitor.score)}),t.delay||0),o=setTimeout((function(){return A(t.awayCompetitor.score)}),t.delay||0);return function(){clearTimeout(e),clearTimeout(o)}}),[t.homeCompetitor.score,t.awayCompetitor.score,t.homeCompetitorScoreClassName,t.awayCompetitorScoreClassName,t.delay]);var C={className:t.className},S={className:t.homeCompetitorScoreClassName},M={className:t.awayCompetitorScoreClassName},w={total:null===(e=t.homeCompetitor.fouls)||void 0===e?void 0:e.total,current:null===(o=t.homeCompetitor.fouls)||void 0===o?void 0:o.current,foulsBonusText:t.foulsBonusText,shouldDisplayBonus:null===(n=t.homeCompetitor)||void 0===n||null===(i=n.fouls)||void 0===i?void 0:i.hasBonus,isSmallView:t.isSmallView},E={total:null===(r=t.awayCompetitor)||void 0===r||null===(c=r.fouls)||void 0===c?void 0:c.total,current:null===(u=t.awayCompetitor)||void 0===u||null===(p=u.fouls)||void 0===p?void 0:p.current,foulsBonusText:t.foulsBonusText,shouldDisplayBonus:null===(d=t.awayCompetitor)||void 0===d||null===(y=d.fouls)||void 0===y?void 0:y.hasBonus,isSmallView:t.isSmallView},k={className:t.competitorScoreContainerClassName};return m.a.createElement("div",C,m.a.createElement("div",k,m.a.createElement("div",S,"".concat(f)),m.a.createElement(l,w)),m.a.createElement("div",{className:t.dividerClassName},"-"),m.a.createElement("div",k,m.a.createElement("div",M,"".concat(j)),m.a.createElement(l,E)))})},831:function(t,e,o){"use strict";o.d(e,"a",(function(){return l}));var a=o(1),n=o(7),i=o(3),r=o(4),s=o(917),m=o(745),c=o(27),u=function(t){Object(i.a)(AnimationLogoGoalEventRequestParams,t);var e=Object(r.a)(AnimationLogoGoalEventRequestParams);function AnimationLogoGoalEventRequestParams(t,o){var n;return Object(a.a)(this,AnimationLogoGoalEventRequestParams),(n=e.call(this,{resourceName:"website/animations"})).id=t,n._width=80,n.rotate=o?180:0,n.ratio=1,n}return Object(n.a)(AnimationLogoGoalEventRequestParams,[{key:"defaultFormat",get:function(){return c.m.GIF}}]),AnimationLogoGoalEventRequestParams}(m.a),l=function(t){Object(i.a)(BaseGoalAnimationSetModel,t);var e=Object(r.a)(BaseGoalAnimationSetModel);function BaseGoalAnimationSetModel(){return Object(a.a)(this,BaseGoalAnimationSetModel),e.apply(this,arguments)}return Object(n.a)(BaseGoalAnimationSetModel,[{key:"eventLogo",get:function(){return new u(this.id,this.isHomeCompetitor)}}]),BaseGoalAnimationSetModel}(s.a)},836:function(t,e,o){"use strict";o.d(e,"a",(function(){return d}));var a=o(1),n=o(7),i=o(3),r=o(4),s=o(566),m=o(40),c=o(14),u=o(745),l=o(27),p=function(t){Object(i.a)(AnimationLogoCardEventRequestParams,t);var e=Object(r.a)(AnimationLogoCardEventRequestParams);function AnimationLogoCardEventRequestParams(t,o){var n;return Object(a.a)(this,AnimationLogoCardEventRequestParams),(n=e.call(this,{resourceName:"website/animations"})).id=t,n._width=32,n.ratio=3,n.rotate=o?-38:0,n}return Object(n.a)(AnimationLogoCardEventRequestParams,[{key:"toString",value:function(){return Object(m.a)(Object(c.a)(AnimationLogoCardEventRequestParams.prototype),"toString",this).call(this)}},{key:"defaultFormat",get:function(){return l.m.AUTO}},{key:"angle",get:function(){return this.rotate}}]),AnimationLogoCardEventRequestParams}(u.a),d=function(t){Object(i.a)(RegularGameEventTemplateAnimationSetModel,t);var e=Object(r.a)(RegularGameEventTemplateAnimationSetModel);function RegularGameEventTemplateAnimationSetModel(){return Object(a.a)(this,RegularGameEventTemplateAnimationSetModel),e.apply(this,arguments)}return Object(n.a)(RegularGameEventTemplateAnimationSetModel,[{key:"eventLogo",get:function(){return new p(this.id,this.isHomeCompetitor)}}]),RegularGameEventTemplateAnimationSetModel}(s.a)},917:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var a=o(1),n=o(3),i=o(4),r=function(t){Object(n.a)(MajorGameEventTemplateAnimationSetModel,t);var e=Object(i.a)(MajorGameEventTemplateAnimationSetModel);function MajorGameEventTemplateAnimationSetModel(){return Object(a.a)(this,MajorGameEventTemplateAnimationSetModel),e.apply(this,arguments)}return MajorGameEventTemplateAnimationSetModel}(o(566).a)}}]);
//# sourceMappingURL=common~all-scores-container~betting-opportunity-widget~competition-container~competitor-container~da~d4dd1986.f61a9f0b.chunk.js.map