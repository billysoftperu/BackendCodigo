(this.webpackJsonpcra=this.webpackJsonpcra||[]).push([[19],{314:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i={PAGES_TYPES:{default:0,competitors:0,competitions:1},DEFAULT_PAGE:0,PAGES_DIRECTIONS:{next:1,previous:-1},ACTION_TYPES:{populateDataHandler:"populateDataHandler",entitySelectHandler:"entitySelectHandler",sportSelectHandler:"sportSelectHandler",closeClickHandler:"closeClickHandler",changePageHandler:"changePageHandler",changeQueryHandler:"changeQueryHandler",selectionHandler:"selectionHandler",showToastHandler:"showToastHandler",doneHandler:"doneHandler",fetchSportTypes:"fetchSportTypes",fetchCompetitions:"fetchCompetitions",fetchCompetitors:"fetchCompetitors",fetchSearch:"fetchSearch",entitiesFetchHandler:"entitiesFetchHandler",populateEntitiesData:"populateEntitiesData",wizardWidgetAutoDisplayHandler:"wizardWidgetAutoDisplayHandler",wizardWidgetDisplayHandler:"wizardWidgetDisplayEvent",searchClickHandler:"searchClickHandler",sportTypeClickHandler:"sportTypeClickHandler",moreSportsClickHandler:"moreSportsClickHandler",changePageAnalyticsHandler:"changePageClickHandler",doneClickHandler:"doneClickHandler"},EVENT_TYPES:{wizardSearch:"wizard-search",wizardSportType:"wizard-sport-type",wizardDone:"wizard-done",wizardMoreSports:"wizard-more-sports",wizardNext:"wizard-next",wizardPrevious:"wizard-previous",wizardExit:"wizard-exit"},WIZARD_TYPES:{steps:"steps",tabs:"tabs"},SPORT_TYPES:{CLICK_TYPES:{display:" display",more:"more"}},USER_DISPLAY:{notUserDriven:0,userDriven:1},TOP_TAB_ID:-1,SOURCE:{USER_DRIVEN:{mySelectionEmptyIcon:"side-empty",myScoresPageButton:"page-empty",mySelectionAddMoreButton:"add-more",following:"following",followingStrip:"following-strip"},NOT_USER_DRIVEN:{myScores:"my-scores",dashboard:"all-scores",competitionScoresScreen:"competition",competitorScores:"competitor"}},ANALYTICS:{ENTITY_TYPE:{teams:"teams",leagues:"leagues"},SCREEN:{suggested:"suggested",search:"search",mySelections:"my-selections"}}}},351:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var i,a=n(28),r=n(1),s=n(3),c=n(4),o=n(5),l=n.n(o),u=n(68),d=n(52),p=(n(108),d.a,i=function(e){var t=e.text||!!e.children&&e.children.toString(),n=Object(a.a)({},e.style||{});e.direction&&(n.direction=e.direction);var i={className:(e.className?e.className:"")+" text-component",style:n};return l.a.createElement("div",i,t)},Object(u.b)("direction")((function(e){var t=Object(a.a)({},e);if(delete t.direction,"rtl"===e.direction){var n=function(e){var t="A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02b8\u0300-\u0590\u0800-\u1fff".concat("\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff");return new RegExp("^[^"+t+"]*[\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc]").test(e)}(e.text||!!e.children&&e.children.toString())?"rtl":"ltr";e.direction!==n&&(t.direction=n)}return l.a.createElement(i,t)})))},396:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n(1),a=n(3),r=n(4),s=n(5),c=n.n(s),o=n(52),l=n(351),u=(o.a,function(e){var t,n=!e.text||(null===(t=e.text)||void 0===t?void 0:t.includes(" ")),i={text:e.text,className:["ellipsis",e.className,n?"ellipsis-line-clamp":""].join(" "),style:n?{WebkitLineClamp:"".concat(e.numOfMaxLines||2)}:{}};return c.a.createElement(l.a,i,e.children)})},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n(1),a=n(7),r=n(3),s=n(4),c=function(e){Object(r.a)(WizardAssetsRequestParams,e);var t=Object(s.a)(WizardAssetsRequestParams);function WizardAssetsRequestParams(e,n){var a;return Object(i.a)(this,WizardAssetsRequestParams),(a=t.call(this,e,n)).resourceName=a.resourceName+"/wizard",a}return Object(a.a)(WizardAssetsRequestParams,[{key:"angle",get:function(){return this.rotate}}]),WizardAssetsRequestParams}(n(369).a)},475:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var i=n(1),a=n(7),r=n(40),s=n(14),c=n(3),o=n(4),l=n(308),u=n(279),d=n(393),p=(n(315),n(538),function(e){Object(c.a)(DisplayEventHandler,e);var t=Object(o.a)(DisplayEventHandler);function DisplayEventHandler(e){var n;return Object(i.a)(this,DisplayEventHandler),(n=t.call(this)).dispatched=!1,n.analyticsService=e,n}return Object(a.a)(DisplayEventHandler,[{key:"createDisplayEvent",value:function(){return new d.a("mock")}},{key:"shouldCreateEvent",value:function(e){return!this.dispatched&&this.displayEvent&&this.displayEvent.isPopulated}},{key:"createEvent",value:function(){this.dispatched=!0,this.analyticsService.createEvent(this.displayEvent),delete this.displayEvent}},{key:"onInitialized",value:function(e){Object(r.a)(Object(s.a)(DisplayEventHandler.prototype),"onInitialized",this).call(this,e),this.displayEvent=this.createDisplayEvent(e)}},{key:"onUpdated",value:function(e,t){Object(r.a)(Object(s.a)(DisplayEventHandler.prototype),"onUpdated",this).call(this,e,t),this.displayEvent=this.createDisplayEvent(e)}},{key:"onCaptureComplete",value:function(e,t){this.displayEvent&&this.displayEvent.populate(t.displayEvent),this.shouldCreateEvent(e)&&this.createEvent()}},{key:"onUnloaded",value:function(e){Object(r.a)(Object(s.a)(DisplayEventHandler.prototype),"onUnloaded",this).call(this,e),this.dispatched=!1}}]),DisplayEventHandler}(l.a));p.injectables=[u.a]},664:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var i=n(53),a=n.n(i),r=n(67),s=n(1),c=n(7),o=n(3),l=n(4),u=n(290),d=n(0),p=n(279),y=n(40),h=n(14),S=n(298),v=(n(27),n(314),function(e){Object(o.a)(wizardClickEvent,e);var t=Object(l.a)(wizardClickEvent);function wizardClickEvent(e){var n;return Object(s.a)(this,wizardClickEvent),(n=t.call(this,"","click","wizard")).screen=e.screen,n.source=e.source,n}return Object(c.a)(wizardClickEvent,[{key:"properties",get:function(){var e=Object(y.a)(Object(h.a)(wizardClickEvent.prototype),"properties",this);return e.screen=this.screen,e.source=this.source,e}}]),wizardClickEvent}(S.a)),m=n(76),E=function(e){Object(o.a)(WizardClickEventHandler,e);var t=Object(l.a)(WizardClickEventHandler);function WizardClickEventHandler(e,n){var i;return Object(s.a)(this,WizardClickEventHandler),(i=t.call(this,e)).type=d.a.wizardClick,i.eventType=v,i.localStorageUtils=n,i}return Object(c.a)(WizardClickEventHandler,[{key:"action",value:function(){var e=Object(r.a)(a.a.mark((function _callee(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.appStore.state.wizardDisplayModel.source=e.source,e.isVisible&&this._sendEvent(e),this._displayWizard(e);case 3:case"end":return t.stop()}}),_callee,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_sendEvent",value:function(e){var t=this.state.currentLinkModel&&this.state.currentLinkModel.name,n=new v({screen:this.getScreen(t),source:e.source});this.analyticsService.createEvent(n)}},{key:"_displayWizard",value:function(e){this.appStore.state.wizardDisplayModel.page=e.page,this.appStore.state.wizardDisplayModel.isVisible=e.isVisible}}]),WizardClickEventHandler}(u.a);E.injectables=[p.a,m.a]},756:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var i,a,r,s=n(23),c=n(1),o=n(7),l=n(9),u=n(3),d=n(4),p=n(17),y=(n(70),n(6)),h=n(499),S=(n(287),n(314)),v=n(302),m=(i=function(e){Object(u.a)(MySelectionsWidgetEntityGroupViewModel,e);var t=Object(d.a)(MySelectionsWidgetEntityGroupViewModel);function MySelectionsWidgetEntityGroupViewModel(e,n,i,o,u){var d;return Object(c.a)(this,MySelectionsWidgetEntityGroupViewModel),d=t.call(this,e,n,i,o),Object(s.a)(d,"open",a,Object(l.a)(d)),Object(s.a)(d,"entityType",r,Object(l.a)(d)),Object(y.p)(Object(l.a)(d)),d.open=!0,d.entityType=u,d}return Object(o.a)(MySelectionsWidgetEntityGroupViewModel,[{key:"wizardPageNumber",get:function(){return this.entityType===v.a.name?S.a.PAGES_TYPES.competitions:S.a.PAGES_TYPES.competitors}}]),MySelectionsWidgetEntityGroupViewModel}(h.a),a=Object(p.a)(i.prototype,"open",[y.q],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),r=Object(p.a)(i.prototype,"entityType",[y.q],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Object(p.a)(i.prototype,"wizardPageNumber",[y.h],Object.getOwnPropertyDescriptor(i.prototype,"wizardPageNumber"),i.prototype),i)},757:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(1),a=n(3),r=n(4),s=n(72),c=n(919),o=function(e){Object(a.a)(MySelectionsWidgetConfig,e);var t=Object(r.a)(MySelectionsWidgetConfig);function MySelectionsWidgetConfig(e){return Object(i.a)(this,MySelectionsWidgetConfig),t.call(this,"mySelectionsWidget",null,e)}return MySelectionsWidgetConfig}(s.a);o.injectables=[c.a]},758:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(1),a=n(3),r=n(4),s=function(e){Object(a.a)(AddMoreImageRequestParams,e);var t=Object(r.a)(AddMoreImageRequestParams);function AddMoreImageRequestParams(e,n){var a;return Object(i.a)(this,AddMoreImageRequestParams),(a=t.call(this,e,n)).resourceName=a.resourceName+"/Add_More_Button",a.c=null,a}return AddMoreImageRequestParams}(n(419).a)},759:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var i=n(53),a=n.n(i),r=n(67),s=n(1),c=n(7),o=n(40),l=n(14),u=n(3),d=n(4),p=(n(315),n(531)),y=n(629),h=(n(383),n(0)),S=n(336),v=(n(306),function(e){Object(u.a)(UserSelectionsEntitiesFetchHandler,e);var t=Object(d.a)(UserSelectionsEntitiesFetchHandler);function UserSelectionsEntitiesFetchHandler(e,n){var i;return Object(s.a)(this,UserSelectionsEntitiesFetchHandler),(i=t.call(this,e)).userSelectionsManager=n,i}return Object(c.a)(UserSelectionsEntitiesFetchHandler,[{key:"onLoaded",value:function(e){var t=this;Object(o.a)(Object(l.a)(UserSelectionsEntitiesFetchHandler.prototype),"onLoaded",this).call(this,e),this.userSelectionsManager.registerToChange((function(){return t.action()})),this.action()}},{key:"action",value:function(){var e=Object(r.a)(a.a.mark((function _callee(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)(Object(l.a)(UserSelectionsEntitiesFetchHandler.prototype),"fetch",this).call(this);case 2:return e=t.sent,this.controller.action(h.a.populateData,{dataSource:e}),t.abrupt("return",e);case 5:case"end":return t.stop()}}),_callee,this)})));return function(){return e.apply(this,arguments)}}()},{key:"requestParams",get:function(){var e=this.userSelectionsManager.competitionsIds,t=this.userSelectionsManager.competitorsIds;return new y.a(e,t)}}]),UserSelectionsEntitiesFetchHandler}(n(328).a));v.injectables=[p.a,S.b]},760:function(e,t,n){e.exports=n.p+"static/media/star-no-selection.3523937c.svg"},829:function(e,t,n){"use strict";n.d(t,"a",(function(){return z}));var i,a,r,s=n(13),c=n(2),o=n(1),l=n(7),u=n(9),d=n(3),p=n(4),y=n(6),h=(n(287),n(299)),S=(n(301),n(304)),v=n(472),m=n(756),E=n(302),g=n(322),f=n(296),b=n(286),O=n(69),j=n(280),M=n(278),T=n(71),C=n(757),w=n(283),k=n(0),_=function(e){Object(d.a)(MySelectionsWidgetCompetitorViewModel,e);var t=Object(p.a)(MySelectionsWidgetCompetitorViewModel);function MySelectionsWidgetCompetitorViewModel(){return Object(o.a)(this,MySelectionsWidgetCompetitorViewModel),t.apply(this,arguments)}return Object(l.a)(MySelectionsWidgetCompetitorViewModel,[{key:"hideCountryName",get:function(){return this.isNational}},{key:"objectType",get:function(){return g.a.name}}]),MySelectionsWidgetCompetitorViewModel}(g.a),H=n(336),I=n(428),z=Object(I.a)((r=a=function(e){Object(d.a)(MySelectionsWidgetState,e);var t=Object(p.a)(MySelectionsWidgetState);function MySelectionsWidgetState(e,n,i,a,r,s,c,l){var d;return Object(o.a)(this,MySelectionsWidgetState),d=t.call(this,e,n,i,a,r,s,c),Object(y.p)(Object(u.a)(d)),d.userSelectionsManager=l,d}return Object(l.a)(MySelectionsWidgetState,[{key:"groupSortIndexByType",value:function(e){var t;return(t={},Object(c.a)(t,g.a.name,1),Object(c.a)(t,E.a.name,2),t)[e.objectType]}},{key:"getTitleByType",value:function(e){var t;return(t={},Object(c.a)(t,E.a.name,this.terms.MY_SELECTIONS_COMPETITIONS),Object(c.a)(t,g.a.name,this.terms.MY_SELECTIONS_COMPETITORS),t)[e.objectType]}},{key:"createViewModelByType",value:function(e){var t=new Map;return t.set(S.a.name,E.a),t.set(v.a.name,_),new(t.get(e.objectType))(e)}},{key:"isPopulated",get:function(){return!0}},{key:"hasEntities",get:function(){var e,t;return(null===(e=this.dataSource)||void 0===e||null===(t=e.entities)||void 0===t?void 0:t.length)>0}},{key:"entities",get:function(){var e=this;return this.hasEntities&&this.dataSource.entities.map((function(t){return e.createViewModelByType(t)}))||[]}},{key:"groupedEntities",get:function(){var e=this,t={},n=0;return this.entities.forEach((function(i){var a=t[i.objectType];a||(a=new m.a(n++,e.getTitleByType(i),[],e.groupSortIndexByType(i),i.objectType),t[i.objectType]=a),a.entities.push(i)})),Object.values(t).sort((function(e,t){return e.sortIndex-t.sortIndex}))}},{key:"competitionsIds",get:function(){return this.userSelectionsManager.competitionsIds}},{key:"competitorsIds",get:function(){return this.userSelectionsManager.competitorsIds}},{key:"gamesIds",get:function(){return this.userSelectionsManager.gamesIds}},{key:"hasNoSelections",get:function(){var e=this.competitionsIds.length>0,t=this.competitorsIds.length>0;return!(this.gamesIds.length>0)&&!t&&!e}},{key:"hasNoGamesAndCompetitorsSelections",get:function(){var e=this.competitionsIds.length>0,t=this.competitorsIds.length>0,n=this.gamesIds.length>0;return e&&!n&&!t}},{key:"hasNoCompetitorAndCompetitionSelections",get:function(){var e=this.competitionsIds.length>0,t=this.competitorsIds.length>0,n=this.gamesIds.length>0;return!e&&!t&&n}},{key:"emptyStateText",get:function(){var e=null;return this.hasNoSelections?e=this.terms.WEB_MY_SELECTIONS_EMPTY_STATE_ALL:this.hasNoGamesAndCompetitorsSelections?e=this.terms.WEB_MY_SELECTIONS_EMPTY_STATE_TEAMS_AND_GAMES:this.hasNoCompetitorAndCompetitionSelections&&this.isMyScoresCurrentRoute&&(e=this.terms.WEB_MY_SELECTIONS_EMPTY_STATE_COMPETITIONS_AND_TEAMS),e}},{key:"isMyScoresCurrentRoute",get:function(){return this.currentLinkModel.name===k.D.myScoresPage}}]),MySelectionsWidgetState}(h.a),a.injectables=[].concat(Object(s.a)(f.a.injectables),[w.a,b.a,O.a,j.a,M.a,T.a,C.a,H.b]),i=r))||i},919:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(1),a=n(3),r=n(4),s=function(e){Object(a.a)(MySelectionsWidgetTerms,e);var t=Object(r.a)(MySelectionsWidgetTerms);function MySelectionsWidgetTerms(){var e;Object(i.a)(this,MySelectionsWidgetTerms);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).SELECTIONS_COMPETITIONS_EMPTY_STATE="You haven't added any competition yet",e.WEB_MY_SELECTIONS_EMPTY_STATE_TEAMS_AND_GAMES="Select Games and Teams to follow them on My Scores",e}return MySelectionsWidgetTerms}(n(281).a)}}]);
//# sourceMappingURL=common~drawer-module~my-scores-container~my-selections-widget.34d2c36f.chunk.js.map