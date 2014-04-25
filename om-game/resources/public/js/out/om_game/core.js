// Compiled by ClojureScript 0.0-2173
goog.provide('om_game.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('cljs.reader');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('goog.net.XhrIo');
goog.require('goog.dom');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.reader');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hello world!");
om_game.core.init_hero = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1013907431),50,new cljs.core.Keyword(null,"cy","cy",1013907432),(55 + cljs.core.rand_int.call(null,475)),new cljs.core.Keyword(null,"r","r",1013904356),15,new cljs.core.Keyword(null,"style","style",1123684643),{"fill": "grey", "stroke-width": "0", "stroke": "black"}], null);
om_game.core.init_rect_up = (function init_rect_up(){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clicked?","clicked?",1920362602),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),new cljs.core.Keyword(null,"x","x",1013904362),(100 + cljs.core.rand_int.call(null,750)),new cljs.core.Keyword(null,"y","y",1013904363),10,new cljs.core.Keyword(null,"power","power",1120762999),0], null);
});
om_game.core.init_rect_down = (function init_rect_down(){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clicked?","clicked?",1920362602),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),new cljs.core.Keyword(null,"x","x",1013904362),(100 + cljs.core.rand_int.call(null,750)),new cljs.core.Keyword(null,"y","y",1013904363),545,new cljs.core.Keyword(null,"power","power",1120762999),0], null);
});
om_game.core.make_rects = (function make_rects(fn){return cljs.core.vec.call(null,cljs.core.take.call(null,(1 + cljs.core.rand_int.call(null,4)),cljs.core.repeatedly.call(null,fn)));
});
om_game.core.exit_line = (function (){var y1 = cljs.core.rand_int.call(null,450);var y2 = (y1 + (function (){var x__3750__auto__ = 50;var y__3751__auto__ = cljs.core.rand_int.call(null,225);return ((x__3750__auto__ > y__3751__auto__) ? x__3750__auto__ : y__3751__auto__);
})());return {"style": {"stroke-width": 2, "stroke": "black"}, "y2": y2, "x2": 999, "y1": y1, "x1": 999};
})();
om_game.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"hero","hero",1017103212),om_game.core.init_hero,new cljs.core.Keyword(null,"exit","exit",1017031824),om_game.core.exit_line,new cljs.core.Keyword(null,"rects-up","rects-up",4514232715),om_game.core.make_rects.call(null,om_game.core.init_rect_up),new cljs.core.Keyword(null,"rects-down","rects-down",1869670418),om_game.core.make_rects.call(null,om_game.core.init_rect_down)], null));
om_game.core.circle_view = (function circle_view(p__27661){var map__27666 = p__27661;var map__27666__$1 = ((cljs.core.seq_QMARK_.call(null,map__27666))?cljs.core.apply.call(null,cljs.core.hash_map,map__27666):map__27666);var style = cljs.core.get.call(null,map__27666__$1,new cljs.core.Keyword(null,"style","style",1123684643));var r = cljs.core.get.call(null,map__27666__$1,new cljs.core.Keyword(null,"r","r",1013904356));var cy = cljs.core.get.call(null,map__27666__$1,new cljs.core.Keyword(null,"cy","cy",1013907432));var cx = cljs.core.get.call(null,map__27666__$1,new cljs.core.Keyword(null,"cx","cx",1013907431));if(typeof om_game.core.t27667 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_game.core.t27667 = (function (cx,cy,r,style,map__27666,p__27661,circle_view,meta27668){
this.cx = cx;
this.cy = cy;
this.r = r;
this.style = style;
this.map__27666 = map__27666;
this.p__27661 = p__27661;
this.circle_view = circle_view;
this.meta27668 = meta27668;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_game.core.t27667.cljs$lang$type = true;
om_game.core.t27667.cljs$lang$ctorStr = "om-game.core/t27667";
om_game.core.t27667.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-game.core/t27667");
});
om_game.core.t27667.prototype.om$core$IRender$ = true;
om_game.core.t27667.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.circle({"style": self__.style, "r": self__.r, "cy": self__.cy, "cx": self__.cx});
});
om_game.core.t27667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27669){var self__ = this;
var _27669__$1 = this;return self__.meta27668;
});
om_game.core.t27667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27669,meta27668__$1){var self__ = this;
var _27669__$1 = this;return (new om_game.core.t27667(self__.cx,self__.cy,self__.r,self__.style,self__.map__27666,self__.p__27661,self__.circle_view,meta27668__$1));
});
om_game.core.__GT_t27667 = (function __GT_t27667(cx__$1,cy__$1,r__$1,style__$1,map__27666__$2,p__27661__$1,circle_view__$1,meta27668){return (new om_game.core.t27667(cx__$1,cy__$1,r__$1,style__$1,map__27666__$2,p__27661__$1,circle_view__$1,meta27668));
});
}
return (new om_game.core.t27667(cx,cy,r,style,map__27666__$1,p__27661,circle_view,null));
});
om_game.core.rect_view = (function rect_view(p__27671){var map__27676 = p__27671;var map__27676__$1 = ((cljs.core.seq_QMARK_.call(null,map__27676))?cljs.core.apply.call(null,cljs.core.hash_map,map__27676):map__27676);var cursor = map__27676__$1;var power = cljs.core.get.call(null,map__27676__$1,new cljs.core.Keyword(null,"power","power",1120762999));var clicked_QMARK_ = cljs.core.get.call(null,map__27676__$1,new cljs.core.Keyword(null,"clicked?","clicked?",1920362602));var y = cljs.core.get.call(null,map__27676__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__27676__$1,new cljs.core.Keyword(null,"x","x",1013904362));if(typeof om_game.core.t27677 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_game.core.t27677 = (function (x,y,clicked_QMARK_,power,cursor,map__27676,p__27671,rect_view,meta27678){
this.x = x;
this.y = y;
this.clicked_QMARK_ = clicked_QMARK_;
this.power = power;
this.cursor = cursor;
this.map__27676 = map__27676;
this.p__27671 = p__27671;
this.rect_view = rect_view;
this.meta27678 = meta27678;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_game.core.t27677.cljs$lang$type = true;
om_game.core.t27677.cljs$lang$ctorStr = "om-game.core/t27677";
om_game.core.t27677.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-game.core/t27677");
});
om_game.core.t27677.prototype.om$core$IRender$ = true;
om_game.core.t27677.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var drag = (function drag(state){return (function (e){e.stopPropagation;
e.preventDefault;
return om.core.transact_BANG_.call(null,self__.clicked_QMARK_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0], null),cljs.core.constantly.call(null,state));
});
});
return React.DOM.g(null,React.DOM.rect({"onMouseUp": drag.call(null,false), "width": 50, "onMouseOver": drag.call(null,false), "y": self__.y, "x": self__.x, "fill": "white", "stroke": "black", "onMouseMove": (function (e){e.stopPropagation;
e.preventDefault;
return om.core.transact_BANG_.call(null,self__.cursor,cljs.core.PersistentVector.EMPTY,(function (p1__27670_SHARP_){var clicked_QMARK__SINGLEQUOTE_ = cljs.core.first.call(null,new cljs.core.Keyword(null,"clicked?","clicked?",1920362602).cljs$core$IFn$_invoke$arity$1(p1__27670_SHARP_));var new_x = (cljs.core.truth_(clicked_QMARK__SINGLEQUOTE_)?(e.nativeEvent.x - 30):new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__27670_SHARP_));return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",1013904362),new_x,new cljs.core.Keyword(null,"y","y",1013904363),self__.y,new cljs.core.Keyword(null,"clicked?","clicked?",1920362602),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clicked_QMARK__SINGLEQUOTE_], null),new cljs.core.Keyword(null,"power","power",1120762999),self__.power], null);
}));
}), "onMouseDown": drag.call(null,true), "stroke-width": "3", "height": 70}),React.DOM.text({"y": (self__.y + 15), "x": (self__.x + 5)},self__.power));
});
om_game.core.t27677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27679){var self__ = this;
var _27679__$1 = this;return self__.meta27678;
});
om_game.core.t27677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27679,meta27678__$1){var self__ = this;
var _27679__$1 = this;return (new om_game.core.t27677(self__.x,self__.y,self__.clicked_QMARK_,self__.power,self__.cursor,self__.map__27676,self__.p__27671,self__.rect_view,meta27678__$1));
});
om_game.core.__GT_t27677 = (function __GT_t27677(x__$1,y__$1,clicked_QMARK___$1,power__$1,cursor__$1,map__27676__$2,p__27671__$1,rect_view__$1,meta27678){return (new om_game.core.t27677(x__$1,y__$1,clicked_QMARK___$1,power__$1,cursor__$1,map__27676__$2,p__27671__$1,rect_view__$1,meta27678));
});
}
return (new om_game.core.t27677(x,y,clicked_QMARK_,power,cursor,map__27676__$1,p__27671,rect_view,null));
});
om_game.core.exit_view = (function exit_view(line,_){if(typeof om_game.core.t27683 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_game.core.t27683 = (function (_,line,exit_view,meta27684){
this._ = _;
this.line = line;
this.exit_view = exit_view;
this.meta27684 = meta27684;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_game.core.t27683.cljs$lang$type = true;
om_game.core.t27683.cljs$lang$ctorStr = "om-game.core/t27683";
om_game.core.t27683.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-game.core/t27683");
});
om_game.core.t27683.prototype.om$core$IRender$ = true;
om_game.core.t27683.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;return React.DOM.line(self__.line);
});
om_game.core.t27683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27685){var self__ = this;
var _27685__$1 = this;return self__.meta27684;
});
om_game.core.t27683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27685,meta27684__$1){var self__ = this;
var _27685__$1 = this;return (new om_game.core.t27683(self__._,self__.line,self__.exit_view,meta27684__$1));
});
om_game.core.__GT_t27683 = (function __GT_t27683(___$1,line__$1,exit_view__$1,meta27684){return (new om_game.core.t27683(___$1,line__$1,exit_view__$1,meta27684));
});
}
return (new om_game.core.t27683(_,line,exit_view,null));
});
om_game.core.app_view = (function app_view(app,owner){if(typeof om_game.core.t27689 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_game.core.t27689 = (function (owner,app,app_view,meta27690){
this.owner = owner;
this.app = app;
this.app_view = app_view;
this.meta27690 = meta27690;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_game.core.t27689.cljs$lang$type = true;
om_game.core.t27689.cljs$lang$ctorStr = "om-game.core/t27689";
om_game.core.t27689.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-game.core/t27689");
});
om_game.core.t27689.prototype.om$core$IRender$ = true;
om_game.core.t27689.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;React.DOM.h2(null,"Top secret");
om.dom.input.call(null,null,"Top secret");
return cljs.core.apply.call(null,om.dom.svg,{"style": {"border": 0}, "border": 0, "height": 625, "width": 1000},om.core.build.call(null,om_game.core.circle_view,new cljs.core.Keyword(null,"hero","hero",1017103212).cljs$core$IFn$_invoke$arity$1(self__.app)),om.core.build.call(null,om_game.core.exit_view,new cljs.core.Keyword(null,"exit","exit",1017031824).cljs$core$IFn$_invoke$arity$1(self__.app)),cljs.core.concat.call(null,om.core.build_all.call(null,om_game.core.rect_view,new cljs.core.Keyword(null,"rects-down","rects-down",1869670418).cljs$core$IFn$_invoke$arity$1(self__.app)),om.core.build_all.call(null,om_game.core.rect_view,new cljs.core.Keyword(null,"rects-up","rects-up",4514232715).cljs$core$IFn$_invoke$arity$1(self__.app))));
});
om_game.core.t27689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27691){var self__ = this;
var _27691__$1 = this;return self__.meta27690;
});
om_game.core.t27689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27691,meta27690__$1){var self__ = this;
var _27691__$1 = this;return (new om_game.core.t27689(self__.owner,self__.app,self__.app_view,meta27690__$1));
});
om_game.core.__GT_t27689 = (function __GT_t27689(owner__$1,app__$1,app_view__$1,meta27690){return (new om_game.core.t27689(owner__$1,app__$1,app_view__$1,meta27690));
});
}
return (new om_game.core.t27689(owner,app,app_view,null));
});
om_game.core.motion = (function motion(hero,p__27692){var vec__27694 = p__27692;var x = cljs.core.nth.call(null,vec__27694,0,null);var y = cljs.core.nth.call(null,vec__27694,1,null);var h1 = cljs.core.update_in.call(null,hero,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cx","cx",1013907431)], null),cljs.core._PLUS_,x);return cljs.core.update_in.call(null,h1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cy","cy",1013907432)], null),cljs.core._PLUS_,y);
});
om_game.core.points = (function points(ranges){var points_from_range = (function points_from_range(p__27704){var vec__27706 = p__27704;var prev = cljs.core.nth.call(null,vec__27706,0,null);var cur = cljs.core.nth.call(null,vec__27706,1,null);var distance = (new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cur) - new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(prev));var y = (cljs.core.truth_(new cljs.core.Keyword(null,"up","up",1013907981).cljs$core$IFn$_invoke$arity$1(prev))?(- new cljs.core.Keyword(null,"power","power",1120762999).cljs$core$IFn$_invoke$arity$1(prev)):new cljs.core.Keyword(null,"power","power",1120762999).cljs$core$IFn$_invoke$arity$1(prev));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem.call(null,distance,10),y], null),cljs.core.repeat.call(null,cljs.core.quot.call(null,distance,10),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [10,y], null)));
});
return cljs.core.mapcat.call(null,points_from_range,ranges);
});
om_game.core.run = (function run(hero,rects_up,rects_down){var ups = cljs.core.map.call(null,(function (p1__27707_SHARP_){return cljs.core.assoc.call(null,p1__27707_SHARP_,new cljs.core.Keyword(null,"up","up",1013907981),true);
}),om.core.value.call(null,rects_up));var sorted_ranges = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.concat.call(null,ups,om.core.value.call(null,rects_down)));var bounded_ranges = cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),50,new cljs.core.Keyword(null,"power","power",1120762999),0], null),cljs.core.concat.call(null,sorted_ranges,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),999,new cljs.core.Keyword(null,"power","power",1120762999),0], null)], null)));var adjacent_ranges = cljs.core.map.call(null,cljs.core.vector,bounded_ranges,cljs.core.rest.call(null,bounded_ranges));var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_27842){var state_val_27843 = (state_27842[1]);if((state_val_27843 === 1))
{var inst_27796 = om_game.core.points.call(null,adjacent_ranges);var inst_27797 = cljs.core.seq.call(null,inst_27796);var inst_27798 = inst_27797;var inst_27799 = null;var inst_27800 = 0;var inst_27801 = 0;var state_27842__$1 = (function (){var statearr_27844 = state_27842;(statearr_27844[7] = inst_27801);
(statearr_27844[8] = inst_27800);
(statearr_27844[9] = inst_27799);
(statearr_27844[10] = inst_27798);
return statearr_27844;
})();var statearr_27845_27875 = state_27842__$1;(statearr_27845_27875[2] = null);
(statearr_27845_27875[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27843 === 2))
{var inst_27801 = (state_27842[7]);var inst_27800 = (state_27842[8]);var inst_27803 = (inst_27801 < inst_27800);var inst_27804 = inst_27803;var state_27842__$1 = state_27842;if(cljs.core.truth_(inst_27804))
{var statearr_27846_27876 = state_27842__$1;(statearr_27846_27876[1] = 4);
} else
{var statearr_27847_27877 = state_27842__$1;(statearr_27847_27877[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27843 === 3))
{var inst_27840 = (state_27842[2]);var state_27842__$1 = state_27842;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27842__$1,inst_27840);
} else
{if((state_val_27843 === 4))
{var inst_27801 = (state_27842[7]);var inst_27800 = (state_27842[8]);var inst_27799 = (state_27842[9]);var inst_27798 = (state_27842[10]);var inst_27806 = cljs.core._nth.call(null,inst_27799,inst_27801);var inst_27807 = (function (){var p = inst_27806;var seq__27792 = inst_27798;var chunk__27793 = inst_27799;var count__27794 = inst_27800;var i__27795 = inst_27801;return ((function (p,seq__27792,chunk__27793,count__27794,i__27795,inst_27801,inst_27800,inst_27799,inst_27798,inst_27806,state_val_27843){
return (function (p1__27708_SHARP_){return om_game.core.motion.call(null,p1__27708_SHARP_,p);
});
;})(p,seq__27792,chunk__27793,count__27794,i__27795,inst_27801,inst_27800,inst_27799,inst_27798,inst_27806,state_val_27843))
})();var inst_27808 = om.core.transact_BANG_.call(null,hero,cljs.core.PersistentVector.EMPTY,inst_27807);var inst_27809 = cljs.core.async.timeout.call(null,20);var state_27842__$1 = (function (){var statearr_27848 = state_27842;(statearr_27848[11] = inst_27808);
return statearr_27848;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27842__$1,7,inst_27809);
} else
{if((state_val_27843 === 5))
{var inst_27798 = (state_27842[10]);var inst_27815 = (state_27842[12]);var inst_27815__$1 = cljs.core.seq.call(null,inst_27798);var state_27842__$1 = (function (){var statearr_27852 = state_27842;(statearr_27852[12] = inst_27815__$1);
return statearr_27852;
})();if(inst_27815__$1)
{var statearr_27853_27878 = state_27842__$1;(statearr_27853_27878[1] = 8);
} else
{var statearr_27854_27879 = state_27842__$1;(statearr_27854_27879[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27843 === 6))
{var inst_27838 = (state_27842[2]);var state_27842__$1 = state_27842;var statearr_27855_27880 = state_27842__$1;(statearr_27855_27880[2] = inst_27838);
(statearr_27855_27880[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27843 === 7))
{var inst_27801 = (state_27842[7]);var inst_27800 = (state_27842[8]);var inst_27799 = (state_27842[9]);var inst_27798 = (state_27842[10]);var inst_27811 = (state_27842[2]);var inst_27812 = (inst_27801 + 1);var tmp27849 = inst_27800;var tmp27850 = inst_27799;var tmp27851 = inst_27798;var inst_27798__$1 = tmp27851;var inst_27799__$1 = tmp27850;var inst_27800__$1 = tmp27849;var inst_27801__$1 = inst_27812;var state_27842__$1 = (function (){var statearr_27856 = state_27842;(statearr_27856[7] = inst_27801__$1);
(statearr_27856[8] = inst_27800__$1);
(statearr_27856[9] = inst_27799__$1);
(statearr_27856[10] = inst_27798__$1);
(statearr_27856[13] = inst_27811);
return statearr_27856;
})();var statearr_27857_27881 = state_27842__$1;(statearr_27857_27881[2] = null);
(statearr_27857_27881[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27843 === 8))
{var inst_27815 = (state_27842[12]);var inst_27817 = cljs.core.chunked_seq_QMARK_.call(null,inst_27815);var state_27842__$1 = state_27842;if(inst_27817)
{var statearr_27858_27882 = state_27842__$1;(statearr_27858_27882[1] = 11);
} else
{var statearr_27859_27883 = state_27842__$1;(statearr_27859_27883[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27843 === 9))
{var state_27842__$1 = state_27842;var statearr_27860_27884 = state_27842__$1;(statearr_27860_27884[2] = null);
(statearr_27860_27884[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27843 === 10))
{var inst_27836 = (state_27842[2]);var state_27842__$1 = state_27842;var statearr_27861_27885 = state_27842__$1;(statearr_27861_27885[2] = inst_27836);
(statearr_27861_27885[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27843 === 11))
{var inst_27815 = (state_27842[12]);var inst_27819 = cljs.core.chunk_first.call(null,inst_27815);var inst_27820 = cljs.core.chunk_rest.call(null,inst_27815);var inst_27821 = cljs.core.count.call(null,inst_27819);var inst_27798 = inst_27820;var inst_27799 = inst_27819;var inst_27800 = inst_27821;var inst_27801 = 0;var state_27842__$1 = (function (){var statearr_27862 = state_27842;(statearr_27862[7] = inst_27801);
(statearr_27862[8] = inst_27800);
(statearr_27862[9] = inst_27799);
(statearr_27862[10] = inst_27798);
return statearr_27862;
})();var statearr_27863_27886 = state_27842__$1;(statearr_27863_27886[2] = null);
(statearr_27863_27886[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27843 === 12))
{var inst_27801 = (state_27842[7]);var inst_27800 = (state_27842[8]);var inst_27799 = (state_27842[9]);var inst_27815 = (state_27842[12]);var inst_27824 = cljs.core.first.call(null,inst_27815);var inst_27825 = (function (){var p = inst_27824;var temp__4092__auto__ = inst_27815;var seq__27792 = inst_27815;var chunk__27793 = inst_27799;var count__27794 = inst_27800;var i__27795 = inst_27801;return ((function (p,temp__4092__auto__,seq__27792,chunk__27793,count__27794,i__27795,inst_27801,inst_27800,inst_27799,inst_27815,inst_27824,state_val_27843){
return (function (p1__27708_SHARP_){return om_game.core.motion.call(null,p1__27708_SHARP_,p);
});
;})(p,temp__4092__auto__,seq__27792,chunk__27793,count__27794,i__27795,inst_27801,inst_27800,inst_27799,inst_27815,inst_27824,state_val_27843))
})();var inst_27826 = om.core.transact_BANG_.call(null,hero,cljs.core.PersistentVector.EMPTY,inst_27825);var inst_27827 = cljs.core.async.timeout.call(null,20);var state_27842__$1 = (function (){var statearr_27864 = state_27842;(statearr_27864[14] = inst_27826);
return statearr_27864;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27842__$1,14,inst_27827);
} else
{if((state_val_27843 === 13))
{var inst_27833 = (state_27842[2]);var state_27842__$1 = state_27842;var statearr_27865_27887 = state_27842__$1;(statearr_27865_27887[2] = inst_27833);
(statearr_27865_27887[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27843 === 14))
{var inst_27815 = (state_27842[12]);var inst_27829 = (state_27842[2]);var inst_27830 = cljs.core.next.call(null,inst_27815);var inst_27798 = inst_27830;var inst_27799 = null;var inst_27800 = 0;var inst_27801 = 0;var state_27842__$1 = (function (){var statearr_27866 = state_27842;(statearr_27866[7] = inst_27801);
(statearr_27866[8] = inst_27800);
(statearr_27866[9] = inst_27799);
(statearr_27866[10] = inst_27798);
(statearr_27866[15] = inst_27829);
return statearr_27866;
})();var statearr_27867_27888 = state_27842__$1;(statearr_27867_27888[2] = null);
(statearr_27867_27888[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_27871 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27871[0] = state_machine__6178__auto__);
(statearr_27871[1] = 1);
return statearr_27871;
});
var state_machine__6178__auto____1 = (function (state_27842){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_27842);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e27872){if((e27872 instanceof Object))
{var ex__6181__auto__ = e27872;var statearr_27873_27889 = state_27842;(statearr_27873_27889[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27842);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27872;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27890 = state_27842;
state_27842 = G__27890;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_27842){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_27842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_27874 = f__6193__auto__.call(null);(statearr_27874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_27874;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
om_game.core.play_btn = (function play_btn(p__27891,_){var map__27896 = p__27891;var map__27896__$1 = ((cljs.core.seq_QMARK_.call(null,map__27896))?cljs.core.apply.call(null,cljs.core.hash_map,map__27896):map__27896);var app = map__27896__$1;var rects_up = cljs.core.get.call(null,map__27896__$1,new cljs.core.Keyword(null,"rects-up","rects-up",4514232715));var rects_down = cljs.core.get.call(null,map__27896__$1,new cljs.core.Keyword(null,"rects-down","rects-down",1869670418));var hero = cljs.core.get.call(null,map__27896__$1,new cljs.core.Keyword(null,"hero","hero",1017103212));if(typeof om_game.core.t27897 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_game.core.t27897 = (function (hero,rects_down,rects_up,app,map__27896,_,p__27891,play_btn,meta27898){
this.hero = hero;
this.rects_down = rects_down;
this.rects_up = rects_up;
this.app = app;
this.map__27896 = map__27896;
this._ = _;
this.p__27891 = p__27891;
this.play_btn = play_btn;
this.meta27898 = meta27898;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_game.core.t27897.cljs$lang$type = true;
om_game.core.t27897.cljs$lang$ctorStr = "om-game.core/t27897";
om_game.core.t27897.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-game.core/t27897");
});
om_game.core.t27897.prototype.om$core$IRender$ = true;
om_game.core.t27897.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;return React.DOM.button({"onClick": (function (){return om_game.core.run.call(null,self__.hero,self__.rects_down,self__.rects_up);
})},"Play");
});
om_game.core.t27897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27899){var self__ = this;
var _27899__$1 = this;return self__.meta27898;
});
om_game.core.t27897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27899,meta27898__$1){var self__ = this;
var _27899__$1 = this;return (new om_game.core.t27897(self__.hero,self__.rects_down,self__.rects_up,self__.app,self__.map__27896,self__._,self__.p__27891,self__.play_btn,meta27898__$1));
});
om_game.core.__GT_t27897 = (function __GT_t27897(hero__$1,rects_down__$1,rects_up__$1,app__$1,map__27896__$2,___$1,p__27891__$1,play_btn__$1,meta27898){return (new om_game.core.t27897(hero__$1,rects_down__$1,rects_up__$1,app__$1,map__27896__$2,___$1,p__27891__$1,play_btn__$1,meta27898));
});
}
return (new om_game.core.t27897(hero,rects_down,rects_up,app,map__27896__$1,_,p__27891,play_btn,null));
});
om_game.core.reset_btn = (function reset_btn(app,_){if(typeof om_game.core.t27904 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_game.core.t27904 = (function (_,app,reset_btn,meta27905){
this._ = _;
this.app = app;
this.reset_btn = reset_btn;
this.meta27905 = meta27905;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_game.core.t27904.cljs$lang$type = true;
om_game.core.t27904.cljs$lang$ctorStr = "om-game.core/t27904";
om_game.core.t27904.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-game.core/t27904");
});
om_game.core.t27904.prototype.om$core$IRender$ = true;
om_game.core.t27904.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;return React.DOM.button({"onClick": (function (___$4){return om.core.transact_BANG_.call(null,self__.app,cljs.core.PersistentVector.EMPTY,(function (p1__27900_SHARP_){return cljs.core.assoc.call(null,p1__27900_SHARP_,new cljs.core.Keyword(null,"hero","hero",1017103212),om_game.core.init_hero);
}));
})},"Return ball");
});
om_game.core.t27904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27906){var self__ = this;
var _27906__$1 = this;return self__.meta27905;
});
om_game.core.t27904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27906,meta27905__$1){var self__ = this;
var _27906__$1 = this;return (new om_game.core.t27904(self__._,self__.app,self__.reset_btn,meta27905__$1));
});
om_game.core.__GT_t27904 = (function __GT_t27904(___$1,app__$1,reset_btn__$1,meta27905){return (new om_game.core.t27904(___$1,app__$1,reset_btn__$1,meta27905));
});
}
return (new om_game.core.t27904(_,app,reset_btn,null));
});
om_game.core.make_power_btn = (function make_power_btn(op,name){return (function (p__27913){var map__27914 = p__27913;var map__27914__$1 = ((cljs.core.seq_QMARK_.call(null,map__27914))?cljs.core.apply.call(null,cljs.core.hash_map,map__27914):map__27914);var rects_down = cljs.core.get.call(null,map__27914__$1,new cljs.core.Keyword(null,"rects-down","rects-down",1869670418));var rects_up = cljs.core.get.call(null,map__27914__$1,new cljs.core.Keyword(null,"rects-up","rects-up",4514232715));if(typeof om_game.core.t27915 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_game.core.t27915 = (function (rects_up,rects_down,map__27914,p__27913,name,op,make_power_btn,meta27916){
this.rects_up = rects_up;
this.rects_down = rects_down;
this.map__27914 = map__27914;
this.p__27913 = p__27913;
this.name = name;
this.op = op;
this.make_power_btn = make_power_btn;
this.meta27916 = meta27916;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_game.core.t27915.cljs$lang$type = true;
om_game.core.t27915.cljs$lang$ctorStr = "om-game.core/t27915";
om_game.core.t27915.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-game.core/t27915");
});
om_game.core.t27915.prototype.om$core$IRender$ = true;
om_game.core.t27915.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.button({"onClick": (function (___$2){var power_inc = (function power_inc(data){return om.core.transact_BANG_.call(null,data,cljs.core.PersistentVector.EMPTY,(function (rects){return cljs.core.mapv.call(null,(function (p1__27907_SHARP_){return cljs.core.update_in.call(null,p1__27907_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"power","power",1120762999)], null),self__.op);
}),rects);
}));
});
power_inc.call(null,self__.rects_up);
return power_inc.call(null,self__.rects_down);
})},self__.name);
});
om_game.core.t27915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27917){var self__ = this;
var _27917__$1 = this;return self__.meta27916;
});
om_game.core.t27915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27917,meta27916__$1){var self__ = this;
var _27917__$1 = this;return (new om_game.core.t27915(self__.rects_up,self__.rects_down,self__.map__27914,self__.p__27913,self__.name,self__.op,self__.make_power_btn,meta27916__$1));
});
om_game.core.__GT_t27915 = (function __GT_t27915(rects_up__$1,rects_down__$1,map__27914__$2,p__27913__$1,name__$1,op__$1,make_power_btn__$1,meta27916){return (new om_game.core.t27915(rects_up__$1,rects_down__$1,map__27914__$2,p__27913__$1,name__$1,op__$1,make_power_btn__$1,meta27916));
});
}
return (new om_game.core.t27915(rects_up,rects_down,map__27914__$1,p__27913,name,op,make_power_btn,null));
});
});
om_game.core.plus_btn = (function plus_btn(p__27919){var map__27924 = p__27919;var map__27924__$1 = ((cljs.core.seq_QMARK_.call(null,map__27924))?cljs.core.apply.call(null,cljs.core.hash_map,map__27924):map__27924);var rects_down = cljs.core.get.call(null,map__27924__$1,new cljs.core.Keyword(null,"rects-down","rects-down",1869670418));var rects_up = cljs.core.get.call(null,map__27924__$1,new cljs.core.Keyword(null,"rects-up","rects-up",4514232715));if(typeof om_game.core.t27925 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_game.core.t27925 = (function (rects_up,rects_down,map__27924,p__27919,plus_btn,meta27926){
this.rects_up = rects_up;
this.rects_down = rects_down;
this.map__27924 = map__27924;
this.p__27919 = p__27919;
this.plus_btn = plus_btn;
this.meta27926 = meta27926;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_game.core.t27925.cljs$lang$type = true;
om_game.core.t27925.cljs$lang$ctorStr = "om-game.core/t27925";
om_game.core.t27925.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-game.core/t27925");
});
om_game.core.t27925.prototype.om$core$IRender$ = true;
om_game.core.t27925.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.button({"onClick": (function (___$2){var power_inc = (function power_inc(data){return om.core.transact_BANG_.call(null,data,cljs.core.PersistentVector.EMPTY,(function (rects){return cljs.core.mapv.call(null,(function (p1__27918_SHARP_){return cljs.core.update_in.call(null,p1__27918_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"power","power",1120762999)], null),cljs.core.inc);
}),rects);
}));
});
power_inc.call(null,self__.rects_up);
return power_inc.call(null,self__.rects_down);
})},"Inc power");
});
om_game.core.t27925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27927){var self__ = this;
var _27927__$1 = this;return self__.meta27926;
});
om_game.core.t27925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27927,meta27926__$1){var self__ = this;
var _27927__$1 = this;return (new om_game.core.t27925(self__.rects_up,self__.rects_down,self__.map__27924,self__.p__27919,self__.plus_btn,meta27926__$1));
});
om_game.core.__GT_t27925 = (function __GT_t27925(rects_up__$1,rects_down__$1,map__27924__$2,p__27919__$1,plus_btn__$1,meta27926){return (new om_game.core.t27925(rects_up__$1,rects_down__$1,map__27924__$2,p__27919__$1,plus_btn__$1,meta27926));
});
}
return (new om_game.core.t27925(rects_up,rects_down,map__27924__$1,p__27919,plus_btn,null));
});
om_game.core.play_view = (function play_view(app,_){if(typeof om_game.core.t27931 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_game.core.t27931 = (function (_,app,play_view,meta27932){
this._ = _;
this.app = app;
this.play_view = play_view;
this.meta27932 = meta27932;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_game.core.t27931.cljs$lang$type = true;
om_game.core.t27931.cljs$lang$ctorStr = "om-game.core/t27931";
om_game.core.t27931.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-game.core/t27931");
});
om_game.core.t27931.prototype.om$core$IRender$ = true;
om_game.core.t27931.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;return React.DOM.span(null,om.core.build.call(null,om_game.core.play_btn,self__.app),om.core.build.call(null,om_game.core.make_power_btn.call(null,cljs.core.inc,"Inc power"),self__.app),om.core.build.call(null,om_game.core.make_power_btn.call(null,cljs.core.dec,"Dec power"),self__.app),React.DOM.span({"style": {"padding-left": 15}}," "),om.core.build.call(null,om_game.core.reset_btn,self__.app));
});
om_game.core.t27931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27933){var self__ = this;
var _27933__$1 = this;return self__.meta27932;
});
om_game.core.t27931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27933,meta27932__$1){var self__ = this;
var _27933__$1 = this;return (new om_game.core.t27931(self__._,self__.app,self__.play_view,meta27932__$1));
});
om_game.core.__GT_t27931 = (function __GT_t27931(___$1,app__$1,play_view__$1,meta27932){return (new om_game.core.t27931(___$1,app__$1,play_view__$1,meta27932));
});
}
return (new om_game.core.t27931(_,app,play_view,null));
});
om.core.root.call(null,om_game.core.play_view,om_game.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),goog.dom.getElement("buttons")], null));
om.core.root.call(null,om_game.core.app_view,om_game.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),goog.dom.getElement("game")], null));

//# sourceMappingURL=core.js.map