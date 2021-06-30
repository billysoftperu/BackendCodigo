(this.webpackJsonpcra=this.webpackJsonpcra||[]).push([[104],{398:function(t,n,e){"use strict";e.d(n,"a",(function(){return b})),e.d(n,"b",(function(){return Redirect})),e.d(n,"c",(function(){return E})),e.d(n,"d",(function(){return y})),e.d(n,"e",(function(){return L})),e.d(n,"f",(function(){return v})),e.d(n,"g",(function(){return matchPath})),e.d(n,"h",(function(){return useLocation})),e.d(n,"i",(function(){return withRouter}));var r=e(685),o=e(5),a=e.n(o),i=(e(429),e(854)),c=e(1031),u=e(687),p=e(686),s=e(1032),l=e.n(s),h=(e(852),e(853)),f=e(1035),m=e.n(f),d=function(t){var n=Object(c.a)();return n.displayName=t,n}("Router-History"),v=function(t){var n=Object(c.a)();return n.displayName=t,n}("Router"),y=function(t){function Router(n){var e;return(e=t.call(this,n)||this).state={location:n.history.location},e._isMounted=!1,e._pendingLocation=null,n.staticContext||(e.unlisten=n.history.listen((function(t){e._isMounted?e.setState({location:t}):e._pendingLocation=t}))),e}Object(r.a)(Router,t),Router.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var n=Router.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&this.unlisten()},n.render=function(){return a.a.createElement(v.Provider,{value:{history:this.props.history,location:this.state.location,match:Router.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},a.a.createElement(d.Provider,{children:this.props.children||null,value:this.props.history}))},Router}(a.a.Component);var b=function(t){function MemoryRouter(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).history=Object(i.d)(n.props),n}return Object(r.a)(MemoryRouter,t),MemoryRouter.prototype.render=function(){return a.a.createElement(y,{history:this.history,children:this.props.children})},MemoryRouter}(a.a.Component);var R=function(t){function Lifecycle(){return t.apply(this,arguments)||this}Object(r.a)(Lifecycle,t);var n=Lifecycle.prototype;return n.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},n.componentDidUpdate=function(t){this.props.onUpdate&&this.props.onUpdate.call(this,this,t)},n.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},n.render=function(){return null},Lifecycle}(a.a.Component);var O={},j=0;function generatePath(t,n){return void 0===t&&(t="/"),void 0===n&&(n={}),"/"===t?t:function(t){if(O[t])return O[t];var n=l.a.compile(t);return j<1e4&&(O[t]=n,j++),n}(t)(n,{pretty:!0})}function Redirect(t){var n=t.computedMatch,e=t.to,r=t.push,o=void 0!==r&&r;return a.a.createElement(v.Consumer,null,(function(t){t||Object(u.a)(!1);var r=t.history,c=t.staticContext,s=o?r.push:r.replace,l=Object(i.c)(n?"string"===typeof e?generatePath(e,n.params):Object(p.a)({},e,{pathname:generatePath(e.pathname,n.params)}):e);return c?(s(l),null):a.a.createElement(R,{onMount:function(){s(l)},onUpdate:function(t,n){var e=Object(i.c)(n.to);Object(i.f)(e,Object(p.a)({},l,{key:e.key}))||s(l)},to:e})}))}var g={},M=0;function matchPath(t,n){void 0===n&&(n={}),("string"===typeof n||Array.isArray(n))&&(n={path:n});var e=n,r=e.path,o=e.exact,a=void 0!==o&&o,i=e.strict,c=void 0!==i&&i,u=e.sensitive,p=void 0!==u&&u;return[].concat(r).reduce((function(n,e){if(!e&&""!==e)return null;if(n)return n;var r=function(t,n){var e=""+n.end+n.strict+n.sensitive,r=g[e]||(g[e]={});if(r[t])return r[t];var o=[],a={regexp:l()(t,o,n),keys:o};return M<1e4&&(r[t]=a,M++),a}(e,{end:a,strict:c,sensitive:p}),o=r.regexp,i=r.keys,u=o.exec(t);if(!u)return null;var s=u[0],h=u.slice(1),f=t===s;return a&&!f?null:{path:e,url:"/"===e&&""===s?"/":s,isExact:f,params:i.reduce((function(t,n,e){return t[n.name]=h[e],t}),{})}}),null)}var E=function(t){function Route(){return t.apply(this,arguments)||this}return Object(r.a)(Route,t),Route.prototype.render=function(){var t=this;return a.a.createElement(v.Consumer,null,(function(n){n||Object(u.a)(!1);var e=t.props.location||n.location,r=t.props.computedMatch?t.props.computedMatch:t.props.path?matchPath(e.pathname,t.props):n.match,o=Object(p.a)({},n,{location:e,match:r}),i=t.props,c=i.children,s=i.component,l=i.render;return Array.isArray(c)&&0===c.length&&(c=null),a.a.createElement(v.Provider,{value:o},o.match?c?"function"===typeof c?c(o):c:s?a.a.createElement(s,o):l?l(o):null:"function"===typeof c?c(o):null)}))},Route}(a.a.Component);function addLeadingSlash(t){return"/"===t.charAt(0)?t:"/"+t}function stripBasename(t,n){if(!t)return n;var e=addLeadingSlash(t);return 0!==n.pathname.indexOf(e)?n:Object(p.a)({},n,{pathname:n.pathname.substr(e.length)})}function createURL(t){return"string"===typeof t?t:Object(i.e)(t)}function staticHandler(t){return function(){Object(u.a)(!1)}}function noop(){}a.a.Component;var L=function(t){function Switch(){return t.apply(this,arguments)||this}return Object(r.a)(Switch,t),Switch.prototype.render=function(){var t=this;return a.a.createElement(v.Consumer,null,(function(n){n||Object(u.a)(!1);var e,r,o=t.props.location||n.location;return a.a.Children.forEach(t.props.children,(function(t){if(null==r&&a.a.isValidElement(t)){e=t;var i=t.props.path||t.props.from;r=i?matchPath(o.pathname,Object(p.a)({},t.props,{path:i})):n.match}})),r?a.a.cloneElement(e,{location:o,computedMatch:r}):null}))},Switch}(a.a.Component);function withRouter(t){var n="withRouter("+(t.displayName||t.name)+")",C=function(n){var e=n.wrappedComponentRef,r=Object(h.a)(n,["wrappedComponentRef"]);return a.a.createElement(v.Consumer,null,(function(n){return n||Object(u.a)(!1),a.a.createElement(t,Object(p.a)({},r,n,{ref:e}))}))};return C.displayName=n,C.WrappedComponent=t,m()(C,t)}var w=a.a.useContext;function useLocation(){return w(v).location}}}]);
//# sourceMappingURL=npm.react-router.36d7a3d2.chunk.js.map