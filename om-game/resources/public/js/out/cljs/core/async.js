// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10673 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10673 = (function (f,fn_handler,meta10674){
this.f = f;
this.fn_handler = fn_handler;
this.meta10674 = meta10674;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10673.cljs$lang$type = true;
cljs.core.async.t10673.cljs$lang$ctorStr = "cljs.core.async/t10673";
cljs.core.async.t10673.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10673");
});
cljs.core.async.t10673.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10673.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10673.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10675){var self__ = this;
var _10675__$1 = this;return self__.meta10674;
});
cljs.core.async.t10673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10675,meta10674__$1){var self__ = this;
var _10675__$1 = this;return (new cljs.core.async.t10673(self__.f,self__.fn_handler,meta10674__$1));
});
cljs.core.async.__GT_t10673 = (function __GT_t10673(f__$1,fn_handler__$1,meta10674){return (new cljs.core.async.t10673(f__$1,fn_handler__$1,meta10674));
});
}
return (new cljs.core.async.t10673(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10677 = buff;if(G__10677)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__10677.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10677.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10677);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10677);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10678 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10678);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_10678);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3431__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___10679 = n;var x_10680 = 0;while(true){
if((x_10680 < n__4291__auto___10679))
{(a[x_10680] = 0);
{
var G__10681 = (x_10680 + 1);
x_10680 = G__10681;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10682 = (i + 1);
i = G__10682;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10686 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10686 = (function (flag,alt_flag,meta10687){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10687 = meta10687;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10686.cljs$lang$type = true;
cljs.core.async.t10686.cljs$lang$ctorStr = "cljs.core.async/t10686";
cljs.core.async.t10686.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10686");
});
cljs.core.async.t10686.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10686.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t10686.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t10686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10688){var self__ = this;
var _10688__$1 = this;return self__.meta10687;
});
cljs.core.async.t10686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10688,meta10687__$1){var self__ = this;
var _10688__$1 = this;return (new cljs.core.async.t10686(self__.flag,self__.alt_flag,meta10687__$1));
});
cljs.core.async.__GT_t10686 = (function __GT_t10686(flag__$1,alt_flag__$1,meta10687){return (new cljs.core.async.t10686(flag__$1,alt_flag__$1,meta10687));
});
}
return (new cljs.core.async.t10686(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10692 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10692 = (function (cb,flag,alt_handler,meta10693){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10693 = meta10693;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10692.cljs$lang$type = true;
cljs.core.async.t10692.cljs$lang$ctorStr = "cljs.core.async/t10692";
cljs.core.async.t10692.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10692");
});
cljs.core.async.t10692.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10692.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10692.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10694){var self__ = this;
var _10694__$1 = this;return self__.meta10693;
});
cljs.core.async.t10692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10694,meta10693__$1){var self__ = this;
var _10694__$1 = this;return (new cljs.core.async.t10692(self__.cb,self__.flag,self__.alt_handler,meta10693__$1));
});
cljs.core.async.__GT_t10692 = (function __GT_t10692(cb__$1,flag__$1,alt_handler__$1,meta10693){return (new cljs.core.async.t10692(cb__$1,flag__$1,alt_handler__$1,meta10693));
});
}
return (new cljs.core.async.t10692(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10695_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10695_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3443__auto__ = wport;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10696 = (i + 1);
i = G__10696;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3443__auto__ = ret;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3431__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3431__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10697){var map__10699 = p__10697;var map__10699__$1 = ((cljs.core.seq_QMARK_.call(null,map__10699))?cljs.core.apply.call(null,cljs.core.hash_map,map__10699):map__10699);var opts = map__10699__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10697 = null;if (arguments.length > 1) {
  p__10697 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10697);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10700){
var ports = cljs.core.first(arglist__10700);
var p__10697 = cljs.core.rest(arglist__10700);
return alts_BANG___delegate(ports,p__10697);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10708 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10708 = (function (ch,f,map_LT_,meta10709){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10709 = meta10709;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10708.cljs$lang$type = true;
cljs.core.async.t10708.cljs$lang$ctorStr = "cljs.core.async/t10708";
cljs.core.async.t10708.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10708");
});
cljs.core.async.t10708.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10708.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10708.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10708.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10711 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10711 = (function (fn1,_,meta10709,ch,f,map_LT_,meta10712){
this.fn1 = fn1;
this._ = _;
this.meta10709 = meta10709;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10712 = meta10712;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10711.cljs$lang$type = true;
cljs.core.async.t10711.cljs$lang$ctorStr = "cljs.core.async/t10711";
cljs.core.async.t10711.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10711");
});
cljs.core.async.t10711.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10711.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t10711.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t10711.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__10701_SHARP_){return f1.call(null,(((p1__10701_SHARP_ == null))?null:self__.f.call(null,p1__10701_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t10711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10713){var self__ = this;
var _10713__$1 = this;return self__.meta10712;
});
cljs.core.async.t10711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10713,meta10712__$1){var self__ = this;
var _10713__$1 = this;return (new cljs.core.async.t10711(self__.fn1,self__._,self__.meta10709,self__.ch,self__.f,self__.map_LT_,meta10712__$1));
});
cljs.core.async.__GT_t10711 = (function __GT_t10711(fn1__$1,___$2,meta10709__$1,ch__$2,f__$2,map_LT___$2,meta10712){return (new cljs.core.async.t10711(fn1__$1,___$2,meta10709__$1,ch__$2,f__$2,map_LT___$2,meta10712));
});
}
return (new cljs.core.async.t10711(fn1,___$1,self__.meta10709,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10708.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10708.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10710){var self__ = this;
var _10710__$1 = this;return self__.meta10709;
});
cljs.core.async.t10708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10710,meta10709__$1){var self__ = this;
var _10710__$1 = this;return (new cljs.core.async.t10708(self__.ch,self__.f,self__.map_LT_,meta10709__$1));
});
cljs.core.async.__GT_t10708 = (function __GT_t10708(ch__$1,f__$1,map_LT___$1,meta10709){return (new cljs.core.async.t10708(ch__$1,f__$1,map_LT___$1,meta10709));
});
}
return (new cljs.core.async.t10708(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10717 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10717 = (function (ch,f,map_GT_,meta10718){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10718 = meta10718;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10717.cljs$lang$type = true;
cljs.core.async.t10717.cljs$lang$ctorStr = "cljs.core.async/t10717";
cljs.core.async.t10717.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10717");
});
cljs.core.async.t10717.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10717.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10717.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10717.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10717.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10717.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10719){var self__ = this;
var _10719__$1 = this;return self__.meta10718;
});
cljs.core.async.t10717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10719,meta10718__$1){var self__ = this;
var _10719__$1 = this;return (new cljs.core.async.t10717(self__.ch,self__.f,self__.map_GT_,meta10718__$1));
});
cljs.core.async.__GT_t10717 = (function __GT_t10717(ch__$1,f__$1,map_GT___$1,meta10718){return (new cljs.core.async.t10717(ch__$1,f__$1,map_GT___$1,meta10718));
});
}
return (new cljs.core.async.t10717(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10723 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10723 = (function (ch,p,filter_GT_,meta10724){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10724 = meta10724;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10723.cljs$lang$type = true;
cljs.core.async.t10723.cljs$lang$ctorStr = "cljs.core.async/t10723";
cljs.core.async.t10723.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10723");
});
cljs.core.async.t10723.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10723.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10723.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10723.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10723.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10723.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10725){var self__ = this;
var _10725__$1 = this;return self__.meta10724;
});
cljs.core.async.t10723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10725,meta10724__$1){var self__ = this;
var _10725__$1 = this;return (new cljs.core.async.t10723(self__.ch,self__.p,self__.filter_GT_,meta10724__$1));
});
cljs.core.async.__GT_t10723 = (function __GT_t10723(ch__$1,p__$1,filter_GT___$1,meta10724){return (new cljs.core.async.t10723(ch__$1,p__$1,filter_GT___$1,meta10724));
});
}
return (new cljs.core.async.t10723(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___10808 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_10787){var state_val_10788 = (state_10787[1]);if((state_val_10788 === 1))
{var state_10787__$1 = state_10787;var statearr_10789_10809 = state_10787__$1;(statearr_10789_10809[2] = null);
(statearr_10789_10809[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10788 === 2))
{var state_10787__$1 = state_10787;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10787__$1,4,ch);
} else
{if((state_val_10788 === 3))
{var inst_10785 = (state_10787[2]);var state_10787__$1 = state_10787;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10787__$1,inst_10785);
} else
{if((state_val_10788 === 4))
{var inst_10769 = (state_10787[7]);var inst_10769__$1 = (state_10787[2]);var inst_10770 = (inst_10769__$1 == null);var state_10787__$1 = (function (){var statearr_10790 = state_10787;(statearr_10790[7] = inst_10769__$1);
return statearr_10790;
})();if(cljs.core.truth_(inst_10770))
{var statearr_10791_10810 = state_10787__$1;(statearr_10791_10810[1] = 5);
} else
{var statearr_10792_10811 = state_10787__$1;(statearr_10792_10811[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10788 === 5))
{var inst_10772 = cljs.core.async.close_BANG_.call(null,out);var state_10787__$1 = state_10787;var statearr_10793_10812 = state_10787__$1;(statearr_10793_10812[2] = inst_10772);
(statearr_10793_10812[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10788 === 6))
{var inst_10769 = (state_10787[7]);var inst_10774 = p.call(null,inst_10769);var state_10787__$1 = state_10787;if(cljs.core.truth_(inst_10774))
{var statearr_10794_10813 = state_10787__$1;(statearr_10794_10813[1] = 8);
} else
{var statearr_10795_10814 = state_10787__$1;(statearr_10795_10814[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10788 === 7))
{var inst_10783 = (state_10787[2]);var state_10787__$1 = state_10787;var statearr_10796_10815 = state_10787__$1;(statearr_10796_10815[2] = inst_10783);
(statearr_10796_10815[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10788 === 8))
{var inst_10769 = (state_10787[7]);var state_10787__$1 = state_10787;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10787__$1,11,out,inst_10769);
} else
{if((state_val_10788 === 9))
{var state_10787__$1 = state_10787;var statearr_10797_10816 = state_10787__$1;(statearr_10797_10816[2] = null);
(statearr_10797_10816[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10788 === 10))
{var inst_10780 = (state_10787[2]);var state_10787__$1 = (function (){var statearr_10798 = state_10787;(statearr_10798[8] = inst_10780);
return statearr_10798;
})();var statearr_10799_10817 = state_10787__$1;(statearr_10799_10817[2] = null);
(statearr_10799_10817[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10788 === 11))
{var inst_10777 = (state_10787[2]);var state_10787__$1 = state_10787;var statearr_10800_10818 = state_10787__$1;(statearr_10800_10818[2] = inst_10777);
(statearr_10800_10818[1] = 10);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_10804 = [null,null,null,null,null,null,null,null,null];(statearr_10804[0] = state_machine__6178__auto__);
(statearr_10804[1] = 1);
return statearr_10804;
});
var state_machine__6178__auto____1 = (function (state_10787){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10787);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10805){if((e10805 instanceof Object))
{var ex__6181__auto__ = e10805;var statearr_10806_10819 = state_10787;(statearr_10806_10819[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10787);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10805;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10820 = state_10787;
state_10787 = G__10820;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10787){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_10807 = f__6193__auto__.call(null);(statearr_10807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___10808);
return statearr_10807;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_10972){var state_val_10973 = (state_10972[1]);if((state_val_10973 === 1))
{var state_10972__$1 = state_10972;var statearr_10974_11011 = state_10972__$1;(statearr_10974_11011[2] = null);
(statearr_10974_11011[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 2))
{var state_10972__$1 = state_10972;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10972__$1,4,in$);
} else
{if((state_val_10973 === 3))
{var inst_10970 = (state_10972[2]);var state_10972__$1 = state_10972;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10972__$1,inst_10970);
} else
{if((state_val_10973 === 4))
{var inst_10918 = (state_10972[7]);var inst_10918__$1 = (state_10972[2]);var inst_10919 = (inst_10918__$1 == null);var state_10972__$1 = (function (){var statearr_10975 = state_10972;(statearr_10975[7] = inst_10918__$1);
return statearr_10975;
})();if(cljs.core.truth_(inst_10919))
{var statearr_10976_11012 = state_10972__$1;(statearr_10976_11012[1] = 5);
} else
{var statearr_10977_11013 = state_10972__$1;(statearr_10977_11013[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 5))
{var inst_10921 = cljs.core.async.close_BANG_.call(null,out);var state_10972__$1 = state_10972;var statearr_10978_11014 = state_10972__$1;(statearr_10978_11014[2] = inst_10921);
(statearr_10978_11014[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 6))
{var inst_10918 = (state_10972[7]);var inst_10923 = f.call(null,inst_10918);var inst_10928 = cljs.core.seq.call(null,inst_10923);var inst_10929 = inst_10928;var inst_10930 = null;var inst_10931 = 0;var inst_10932 = 0;var state_10972__$1 = (function (){var statearr_10979 = state_10972;(statearr_10979[8] = inst_10932);
(statearr_10979[9] = inst_10929);
(statearr_10979[10] = inst_10930);
(statearr_10979[11] = inst_10931);
return statearr_10979;
})();var statearr_10980_11015 = state_10972__$1;(statearr_10980_11015[2] = null);
(statearr_10980_11015[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 7))
{var inst_10968 = (state_10972[2]);var state_10972__$1 = state_10972;var statearr_10981_11016 = state_10972__$1;(statearr_10981_11016[2] = inst_10968);
(statearr_10981_11016[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 8))
{var inst_10932 = (state_10972[8]);var inst_10931 = (state_10972[11]);var inst_10934 = (inst_10932 < inst_10931);var inst_10935 = inst_10934;var state_10972__$1 = state_10972;if(cljs.core.truth_(inst_10935))
{var statearr_10982_11017 = state_10972__$1;(statearr_10982_11017[1] = 10);
} else
{var statearr_10983_11018 = state_10972__$1;(statearr_10983_11018[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 9))
{var inst_10965 = (state_10972[2]);var state_10972__$1 = (function (){var statearr_10984 = state_10972;(statearr_10984[12] = inst_10965);
return statearr_10984;
})();var statearr_10985_11019 = state_10972__$1;(statearr_10985_11019[2] = null);
(statearr_10985_11019[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 10))
{var inst_10932 = (state_10972[8]);var inst_10930 = (state_10972[10]);var inst_10937 = cljs.core._nth.call(null,inst_10930,inst_10932);var state_10972__$1 = state_10972;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10972__$1,13,out,inst_10937);
} else
{if((state_val_10973 === 11))
{var inst_10943 = (state_10972[13]);var inst_10929 = (state_10972[9]);var inst_10943__$1 = cljs.core.seq.call(null,inst_10929);var state_10972__$1 = (function (){var statearr_10989 = state_10972;(statearr_10989[13] = inst_10943__$1);
return statearr_10989;
})();if(inst_10943__$1)
{var statearr_10990_11020 = state_10972__$1;(statearr_10990_11020[1] = 14);
} else
{var statearr_10991_11021 = state_10972__$1;(statearr_10991_11021[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 12))
{var inst_10963 = (state_10972[2]);var state_10972__$1 = state_10972;var statearr_10992_11022 = state_10972__$1;(statearr_10992_11022[2] = inst_10963);
(statearr_10992_11022[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 13))
{var inst_10932 = (state_10972[8]);var inst_10929 = (state_10972[9]);var inst_10930 = (state_10972[10]);var inst_10931 = (state_10972[11]);var inst_10939 = (state_10972[2]);var inst_10940 = (inst_10932 + 1);var tmp10986 = inst_10929;var tmp10987 = inst_10930;var tmp10988 = inst_10931;var inst_10929__$1 = tmp10986;var inst_10930__$1 = tmp10987;var inst_10931__$1 = tmp10988;var inst_10932__$1 = inst_10940;var state_10972__$1 = (function (){var statearr_10993 = state_10972;(statearr_10993[8] = inst_10932__$1);
(statearr_10993[14] = inst_10939);
(statearr_10993[9] = inst_10929__$1);
(statearr_10993[10] = inst_10930__$1);
(statearr_10993[11] = inst_10931__$1);
return statearr_10993;
})();var statearr_10994_11023 = state_10972__$1;(statearr_10994_11023[2] = null);
(statearr_10994_11023[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 14))
{var inst_10943 = (state_10972[13]);var inst_10945 = cljs.core.chunked_seq_QMARK_.call(null,inst_10943);var state_10972__$1 = state_10972;if(inst_10945)
{var statearr_10995_11024 = state_10972__$1;(statearr_10995_11024[1] = 17);
} else
{var statearr_10996_11025 = state_10972__$1;(statearr_10996_11025[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 15))
{var state_10972__$1 = state_10972;var statearr_10997_11026 = state_10972__$1;(statearr_10997_11026[2] = null);
(statearr_10997_11026[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 16))
{var inst_10961 = (state_10972[2]);var state_10972__$1 = state_10972;var statearr_10998_11027 = state_10972__$1;(statearr_10998_11027[2] = inst_10961);
(statearr_10998_11027[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 17))
{var inst_10943 = (state_10972[13]);var inst_10947 = cljs.core.chunk_first.call(null,inst_10943);var inst_10948 = cljs.core.chunk_rest.call(null,inst_10943);var inst_10949 = cljs.core.count.call(null,inst_10947);var inst_10929 = inst_10948;var inst_10930 = inst_10947;var inst_10931 = inst_10949;var inst_10932 = 0;var state_10972__$1 = (function (){var statearr_10999 = state_10972;(statearr_10999[8] = inst_10932);
(statearr_10999[9] = inst_10929);
(statearr_10999[10] = inst_10930);
(statearr_10999[11] = inst_10931);
return statearr_10999;
})();var statearr_11000_11028 = state_10972__$1;(statearr_11000_11028[2] = null);
(statearr_11000_11028[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 18))
{var inst_10943 = (state_10972[13]);var inst_10952 = cljs.core.first.call(null,inst_10943);var state_10972__$1 = state_10972;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10972__$1,20,out,inst_10952);
} else
{if((state_val_10973 === 19))
{var inst_10958 = (state_10972[2]);var state_10972__$1 = state_10972;var statearr_11001_11029 = state_10972__$1;(statearr_11001_11029[2] = inst_10958);
(statearr_11001_11029[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10973 === 20))
{var inst_10943 = (state_10972[13]);var inst_10954 = (state_10972[2]);var inst_10955 = cljs.core.next.call(null,inst_10943);var inst_10929 = inst_10955;var inst_10930 = null;var inst_10931 = 0;var inst_10932 = 0;var state_10972__$1 = (function (){var statearr_11002 = state_10972;(statearr_11002[8] = inst_10932);
(statearr_11002[15] = inst_10954);
(statearr_11002[9] = inst_10929);
(statearr_11002[10] = inst_10930);
(statearr_11002[11] = inst_10931);
return statearr_11002;
})();var statearr_11003_11030 = state_10972__$1;(statearr_11003_11030[2] = null);
(statearr_11003_11030[1] = 8);
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
}
}
}
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11007[0] = state_machine__6178__auto__);
(statearr_11007[1] = 1);
return statearr_11007;
});
var state_machine__6178__auto____1 = (function (state_10972){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10972);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11008){if((e11008 instanceof Object))
{var ex__6181__auto__ = e11008;var statearr_11009_11031 = state_10972;(statearr_11009_11031[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10972);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11008;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11032 = state_10972;
state_10972 = G__11032;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10972){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11010 = f__6193__auto__.call(null);(statearr_11010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11010;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6192__auto___11113 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11092){var state_val_11093 = (state_11092[1]);if((state_val_11093 === 1))
{var state_11092__$1 = state_11092;var statearr_11094_11114 = state_11092__$1;(statearr_11094_11114[2] = null);
(statearr_11094_11114[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11093 === 2))
{var state_11092__$1 = state_11092;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11092__$1,4,from);
} else
{if((state_val_11093 === 3))
{var inst_11090 = (state_11092[2]);var state_11092__$1 = state_11092;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11092__$1,inst_11090);
} else
{if((state_val_11093 === 4))
{var inst_11075 = (state_11092[7]);var inst_11075__$1 = (state_11092[2]);var inst_11076 = (inst_11075__$1 == null);var state_11092__$1 = (function (){var statearr_11095 = state_11092;(statearr_11095[7] = inst_11075__$1);
return statearr_11095;
})();if(cljs.core.truth_(inst_11076))
{var statearr_11096_11115 = state_11092__$1;(statearr_11096_11115[1] = 5);
} else
{var statearr_11097_11116 = state_11092__$1;(statearr_11097_11116[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11093 === 5))
{var state_11092__$1 = state_11092;if(cljs.core.truth_(close_QMARK_))
{var statearr_11098_11117 = state_11092__$1;(statearr_11098_11117[1] = 8);
} else
{var statearr_11099_11118 = state_11092__$1;(statearr_11099_11118[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11093 === 6))
{var inst_11075 = (state_11092[7]);var state_11092__$1 = state_11092;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11092__$1,11,to,inst_11075);
} else
{if((state_val_11093 === 7))
{var inst_11088 = (state_11092[2]);var state_11092__$1 = state_11092;var statearr_11100_11119 = state_11092__$1;(statearr_11100_11119[2] = inst_11088);
(statearr_11100_11119[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11093 === 8))
{var inst_11079 = cljs.core.async.close_BANG_.call(null,to);var state_11092__$1 = state_11092;var statearr_11101_11120 = state_11092__$1;(statearr_11101_11120[2] = inst_11079);
(statearr_11101_11120[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11093 === 9))
{var state_11092__$1 = state_11092;var statearr_11102_11121 = state_11092__$1;(statearr_11102_11121[2] = null);
(statearr_11102_11121[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11093 === 10))
{var inst_11082 = (state_11092[2]);var state_11092__$1 = state_11092;var statearr_11103_11122 = state_11092__$1;(statearr_11103_11122[2] = inst_11082);
(statearr_11103_11122[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11093 === 11))
{var inst_11085 = (state_11092[2]);var state_11092__$1 = (function (){var statearr_11104 = state_11092;(statearr_11104[8] = inst_11085);
return statearr_11104;
})();var statearr_11105_11123 = state_11092__$1;(statearr_11105_11123[2] = null);
(statearr_11105_11123[1] = 2);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11109 = [null,null,null,null,null,null,null,null,null];(statearr_11109[0] = state_machine__6178__auto__);
(statearr_11109[1] = 1);
return statearr_11109;
});
var state_machine__6178__auto____1 = (function (state_11092){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11092);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11110){if((e11110 instanceof Object))
{var ex__6181__auto__ = e11110;var statearr_11111_11124 = state_11092;(statearr_11111_11124[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11092);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11110;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11125 = state_11092;
state_11092 = G__11125;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11092){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11112 = f__6193__auto__.call(null);(statearr_11112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11113);
return statearr_11112;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6192__auto___11212 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11190){var state_val_11191 = (state_11190[1]);if((state_val_11191 === 1))
{var state_11190__$1 = state_11190;var statearr_11192_11213 = state_11190__$1;(statearr_11192_11213[2] = null);
(statearr_11192_11213[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11191 === 2))
{var state_11190__$1 = state_11190;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11190__$1,4,ch);
} else
{if((state_val_11191 === 3))
{var inst_11188 = (state_11190[2]);var state_11190__$1 = state_11190;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11190__$1,inst_11188);
} else
{if((state_val_11191 === 4))
{var inst_11171 = (state_11190[7]);var inst_11171__$1 = (state_11190[2]);var inst_11172 = (inst_11171__$1 == null);var state_11190__$1 = (function (){var statearr_11193 = state_11190;(statearr_11193[7] = inst_11171__$1);
return statearr_11193;
})();if(cljs.core.truth_(inst_11172))
{var statearr_11194_11214 = state_11190__$1;(statearr_11194_11214[1] = 5);
} else
{var statearr_11195_11215 = state_11190__$1;(statearr_11195_11215[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11191 === 5))
{var inst_11174 = cljs.core.async.close_BANG_.call(null,tc);var inst_11175 = cljs.core.async.close_BANG_.call(null,fc);var state_11190__$1 = (function (){var statearr_11196 = state_11190;(statearr_11196[8] = inst_11174);
return statearr_11196;
})();var statearr_11197_11216 = state_11190__$1;(statearr_11197_11216[2] = inst_11175);
(statearr_11197_11216[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11191 === 6))
{var inst_11171 = (state_11190[7]);var inst_11177 = p.call(null,inst_11171);var state_11190__$1 = state_11190;if(cljs.core.truth_(inst_11177))
{var statearr_11198_11217 = state_11190__$1;(statearr_11198_11217[1] = 9);
} else
{var statearr_11199_11218 = state_11190__$1;(statearr_11199_11218[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11191 === 7))
{var inst_11186 = (state_11190[2]);var state_11190__$1 = state_11190;var statearr_11200_11219 = state_11190__$1;(statearr_11200_11219[2] = inst_11186);
(statearr_11200_11219[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11191 === 8))
{var inst_11183 = (state_11190[2]);var state_11190__$1 = (function (){var statearr_11201 = state_11190;(statearr_11201[9] = inst_11183);
return statearr_11201;
})();var statearr_11202_11220 = state_11190__$1;(statearr_11202_11220[2] = null);
(statearr_11202_11220[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11191 === 9))
{var state_11190__$1 = state_11190;var statearr_11203_11221 = state_11190__$1;(statearr_11203_11221[2] = tc);
(statearr_11203_11221[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11191 === 10))
{var state_11190__$1 = state_11190;var statearr_11204_11222 = state_11190__$1;(statearr_11204_11222[2] = fc);
(statearr_11204_11222[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11191 === 11))
{var inst_11171 = (state_11190[7]);var inst_11181 = (state_11190[2]);var state_11190__$1 = state_11190;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11190__$1,8,inst_11181,inst_11171);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11208 = [null,null,null,null,null,null,null,null,null,null];(statearr_11208[0] = state_machine__6178__auto__);
(statearr_11208[1] = 1);
return statearr_11208;
});
var state_machine__6178__auto____1 = (function (state_11190){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11190);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11209){if((e11209 instanceof Object))
{var ex__6181__auto__ = e11209;var statearr_11210_11223 = state_11190;(statearr_11210_11223[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11190);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11209;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11224 = state_11190;
state_11190 = G__11224;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11190){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11211 = f__6193__auto__.call(null);(statearr_11211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11212);
return statearr_11211;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11271){var state_val_11272 = (state_11271[1]);if((state_val_11272 === 7))
{var inst_11267 = (state_11271[2]);var state_11271__$1 = state_11271;var statearr_11273_11289 = state_11271__$1;(statearr_11273_11289[2] = inst_11267);
(statearr_11273_11289[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11272 === 6))
{var inst_11257 = (state_11271[7]);var inst_11260 = (state_11271[8]);var inst_11264 = f.call(null,inst_11257,inst_11260);var inst_11257__$1 = inst_11264;var state_11271__$1 = (function (){var statearr_11274 = state_11271;(statearr_11274[7] = inst_11257__$1);
return statearr_11274;
})();var statearr_11275_11290 = state_11271__$1;(statearr_11275_11290[2] = null);
(statearr_11275_11290[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11272 === 5))
{var inst_11257 = (state_11271[7]);var state_11271__$1 = state_11271;var statearr_11276_11291 = state_11271__$1;(statearr_11276_11291[2] = inst_11257);
(statearr_11276_11291[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11272 === 4))
{var inst_11260 = (state_11271[8]);var inst_11260__$1 = (state_11271[2]);var inst_11261 = (inst_11260__$1 == null);var state_11271__$1 = (function (){var statearr_11277 = state_11271;(statearr_11277[8] = inst_11260__$1);
return statearr_11277;
})();if(cljs.core.truth_(inst_11261))
{var statearr_11278_11292 = state_11271__$1;(statearr_11278_11292[1] = 5);
} else
{var statearr_11279_11293 = state_11271__$1;(statearr_11279_11293[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11272 === 3))
{var inst_11269 = (state_11271[2]);var state_11271__$1 = state_11271;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11271__$1,inst_11269);
} else
{if((state_val_11272 === 2))
{var state_11271__$1 = state_11271;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11271__$1,4,ch);
} else
{if((state_val_11272 === 1))
{var inst_11257 = init;var state_11271__$1 = (function (){var statearr_11280 = state_11271;(statearr_11280[7] = inst_11257);
return statearr_11280;
})();var statearr_11281_11294 = state_11271__$1;(statearr_11281_11294[2] = null);
(statearr_11281_11294[1] = 2);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11285 = [null,null,null,null,null,null,null,null,null];(statearr_11285[0] = state_machine__6178__auto__);
(statearr_11285[1] = 1);
return statearr_11285;
});
var state_machine__6178__auto____1 = (function (state_11271){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11271);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11286){if((e11286 instanceof Object))
{var ex__6181__auto__ = e11286;var statearr_11287_11295 = state_11271;(statearr_11287_11295[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11271);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11286;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11296 = state_11271;
state_11271 = G__11296;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11271){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11288 = f__6193__auto__.call(null);(statearr_11288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11288;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11358){var state_val_11359 = (state_11358[1]);if((state_val_11359 === 1))
{var inst_11338 = cljs.core.seq.call(null,coll);var inst_11339 = inst_11338;var state_11358__$1 = (function (){var statearr_11360 = state_11358;(statearr_11360[7] = inst_11339);
return statearr_11360;
})();var statearr_11361_11379 = state_11358__$1;(statearr_11361_11379[2] = null);
(statearr_11361_11379[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11359 === 2))
{var inst_11339 = (state_11358[7]);var state_11358__$1 = state_11358;if(cljs.core.truth_(inst_11339))
{var statearr_11362_11380 = state_11358__$1;(statearr_11362_11380[1] = 4);
} else
{var statearr_11363_11381 = state_11358__$1;(statearr_11363_11381[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11359 === 3))
{var inst_11356 = (state_11358[2]);var state_11358__$1 = state_11358;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11358__$1,inst_11356);
} else
{if((state_val_11359 === 4))
{var inst_11339 = (state_11358[7]);var inst_11342 = cljs.core.first.call(null,inst_11339);var state_11358__$1 = state_11358;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11358__$1,7,ch,inst_11342);
} else
{if((state_val_11359 === 5))
{var state_11358__$1 = state_11358;if(cljs.core.truth_(close_QMARK_))
{var statearr_11364_11382 = state_11358__$1;(statearr_11364_11382[1] = 8);
} else
{var statearr_11365_11383 = state_11358__$1;(statearr_11365_11383[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11359 === 6))
{var inst_11354 = (state_11358[2]);var state_11358__$1 = state_11358;var statearr_11366_11384 = state_11358__$1;(statearr_11366_11384[2] = inst_11354);
(statearr_11366_11384[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11359 === 7))
{var inst_11339 = (state_11358[7]);var inst_11344 = (state_11358[2]);var inst_11345 = cljs.core.next.call(null,inst_11339);var inst_11339__$1 = inst_11345;var state_11358__$1 = (function (){var statearr_11367 = state_11358;(statearr_11367[8] = inst_11344);
(statearr_11367[7] = inst_11339__$1);
return statearr_11367;
})();var statearr_11368_11385 = state_11358__$1;(statearr_11368_11385[2] = null);
(statearr_11368_11385[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11359 === 8))
{var inst_11349 = cljs.core.async.close_BANG_.call(null,ch);var state_11358__$1 = state_11358;var statearr_11369_11386 = state_11358__$1;(statearr_11369_11386[2] = inst_11349);
(statearr_11369_11386[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11359 === 9))
{var state_11358__$1 = state_11358;var statearr_11370_11387 = state_11358__$1;(statearr_11370_11387[2] = null);
(statearr_11370_11387[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11359 === 10))
{var inst_11352 = (state_11358[2]);var state_11358__$1 = state_11358;var statearr_11371_11388 = state_11358__$1;(statearr_11371_11388[2] = inst_11352);
(statearr_11371_11388[1] = 6);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11375 = [null,null,null,null,null,null,null,null,null];(statearr_11375[0] = state_machine__6178__auto__);
(statearr_11375[1] = 1);
return statearr_11375;
});
var state_machine__6178__auto____1 = (function (state_11358){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11358);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11376){if((e11376 instanceof Object))
{var ex__6181__auto__ = e11376;var statearr_11377_11389 = state_11358;(statearr_11377_11389[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11358);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11376;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11390 = state_11358;
state_11358 = G__11390;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11358){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11378 = f__6193__auto__.call(null);(statearr_11378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11378;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11392 = {};return obj11392;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3431__auto__ = _;if(and__3431__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4070__auto__ = (((_ == null))?null:_);return (function (){var or__3443__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11394 = {};return obj11394;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11618 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11618 = (function (cs,ch,mult,meta11619){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11619 = meta11619;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11618.cljs$lang$type = true;
cljs.core.async.t11618.cljs$lang$ctorStr = "cljs.core.async/t11618";
cljs.core.async.t11618.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11618");
});})(cs))
;
cljs.core.async.t11618.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11618.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11618.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11618.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11618.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11618.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11618.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11620){var self__ = this;
var _11620__$1 = this;return self__.meta11619;
});})(cs))
;
cljs.core.async.t11618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11620,meta11619__$1){var self__ = this;
var _11620__$1 = this;return (new cljs.core.async.t11618(self__.cs,self__.ch,self__.mult,meta11619__$1));
});})(cs))
;
cljs.core.async.__GT_t11618 = ((function (cs){
return (function __GT_t11618(cs__$1,ch__$1,mult__$1,meta11619){return (new cljs.core.async.t11618(cs__$1,ch__$1,mult__$1,meta11619));
});})(cs))
;
}
return (new cljs.core.async.t11618(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6192__auto___11841 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11755){var state_val_11756 = (state_11755[1]);if((state_val_11756 === 32))
{var inst_11699 = (state_11755[7]);var inst_11623 = (state_11755[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11755,31,Object,null,30);var inst_11706 = cljs.core.async.put_BANG_.call(null,inst_11699,inst_11623,done);var state_11755__$1 = state_11755;var statearr_11757_11842 = state_11755__$1;(statearr_11757_11842[2] = inst_11706);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11755__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 1))
{var state_11755__$1 = state_11755;var statearr_11758_11843 = state_11755__$1;(statearr_11758_11843[2] = null);
(statearr_11758_11843[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 33))
{var inst_11712 = (state_11755[9]);var inst_11714 = cljs.core.chunked_seq_QMARK_.call(null,inst_11712);var state_11755__$1 = state_11755;if(inst_11714)
{var statearr_11759_11844 = state_11755__$1;(statearr_11759_11844[1] = 36);
} else
{var statearr_11760_11845 = state_11755__$1;(statearr_11760_11845[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 2))
{var state_11755__$1 = state_11755;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11755__$1,4,ch);
} else
{if((state_val_11756 === 34))
{var state_11755__$1 = state_11755;var statearr_11761_11846 = state_11755__$1;(statearr_11761_11846[2] = null);
(statearr_11761_11846[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 3))
{var inst_11753 = (state_11755[2]);var state_11755__$1 = state_11755;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11755__$1,inst_11753);
} else
{if((state_val_11756 === 35))
{var inst_11737 = (state_11755[2]);var state_11755__$1 = state_11755;var statearr_11762_11847 = state_11755__$1;(statearr_11762_11847[2] = inst_11737);
(statearr_11762_11847[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 4))
{var inst_11623 = (state_11755[8]);var inst_11623__$1 = (state_11755[2]);var inst_11624 = (inst_11623__$1 == null);var state_11755__$1 = (function (){var statearr_11763 = state_11755;(statearr_11763[8] = inst_11623__$1);
return statearr_11763;
})();if(cljs.core.truth_(inst_11624))
{var statearr_11764_11848 = state_11755__$1;(statearr_11764_11848[1] = 5);
} else
{var statearr_11765_11849 = state_11755__$1;(statearr_11765_11849[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 36))
{var inst_11712 = (state_11755[9]);var inst_11716 = cljs.core.chunk_first.call(null,inst_11712);var inst_11717 = cljs.core.chunk_rest.call(null,inst_11712);var inst_11718 = cljs.core.count.call(null,inst_11716);var inst_11691 = inst_11717;var inst_11692 = inst_11716;var inst_11693 = inst_11718;var inst_11694 = 0;var state_11755__$1 = (function (){var statearr_11766 = state_11755;(statearr_11766[10] = inst_11692);
(statearr_11766[11] = inst_11693);
(statearr_11766[12] = inst_11691);
(statearr_11766[13] = inst_11694);
return statearr_11766;
})();var statearr_11767_11850 = state_11755__$1;(statearr_11767_11850[2] = null);
(statearr_11767_11850[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 5))
{var inst_11630 = cljs.core.deref.call(null,cs);var inst_11631 = cljs.core.seq.call(null,inst_11630);var inst_11632 = inst_11631;var inst_11633 = null;var inst_11634 = 0;var inst_11635 = 0;var state_11755__$1 = (function (){var statearr_11768 = state_11755;(statearr_11768[14] = inst_11632);
(statearr_11768[15] = inst_11633);
(statearr_11768[16] = inst_11634);
(statearr_11768[17] = inst_11635);
return statearr_11768;
})();var statearr_11769_11851 = state_11755__$1;(statearr_11769_11851[2] = null);
(statearr_11769_11851[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 37))
{var inst_11712 = (state_11755[9]);var inst_11721 = cljs.core.first.call(null,inst_11712);var state_11755__$1 = (function (){var statearr_11770 = state_11755;(statearr_11770[18] = inst_11721);
return statearr_11770;
})();var statearr_11771_11852 = state_11755__$1;(statearr_11771_11852[2] = null);
(statearr_11771_11852[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 6))
{var inst_11683 = (state_11755[19]);var inst_11682 = cljs.core.deref.call(null,cs);var inst_11683__$1 = cljs.core.keys.call(null,inst_11682);var inst_11684 = cljs.core.count.call(null,inst_11683__$1);var inst_11685 = cljs.core.reset_BANG_.call(null,dctr,inst_11684);var inst_11690 = cljs.core.seq.call(null,inst_11683__$1);var inst_11691 = inst_11690;var inst_11692 = null;var inst_11693 = 0;var inst_11694 = 0;var state_11755__$1 = (function (){var statearr_11772 = state_11755;(statearr_11772[10] = inst_11692);
(statearr_11772[11] = inst_11693);
(statearr_11772[12] = inst_11691);
(statearr_11772[13] = inst_11694);
(statearr_11772[20] = inst_11685);
(statearr_11772[19] = inst_11683__$1);
return statearr_11772;
})();var statearr_11773_11853 = state_11755__$1;(statearr_11773_11853[2] = null);
(statearr_11773_11853[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 38))
{var inst_11734 = (state_11755[2]);var state_11755__$1 = state_11755;var statearr_11774_11854 = state_11755__$1;(statearr_11774_11854[2] = inst_11734);
(statearr_11774_11854[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 7))
{var inst_11751 = (state_11755[2]);var state_11755__$1 = state_11755;var statearr_11775_11855 = state_11755__$1;(statearr_11775_11855[2] = inst_11751);
(statearr_11775_11855[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 39))
{var inst_11712 = (state_11755[9]);var inst_11730 = (state_11755[2]);var inst_11731 = cljs.core.next.call(null,inst_11712);var inst_11691 = inst_11731;var inst_11692 = null;var inst_11693 = 0;var inst_11694 = 0;var state_11755__$1 = (function (){var statearr_11776 = state_11755;(statearr_11776[10] = inst_11692);
(statearr_11776[11] = inst_11693);
(statearr_11776[12] = inst_11691);
(statearr_11776[21] = inst_11730);
(statearr_11776[13] = inst_11694);
return statearr_11776;
})();var statearr_11777_11856 = state_11755__$1;(statearr_11777_11856[2] = null);
(statearr_11777_11856[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 8))
{var inst_11634 = (state_11755[16]);var inst_11635 = (state_11755[17]);var inst_11637 = (inst_11635 < inst_11634);var inst_11638 = inst_11637;var state_11755__$1 = state_11755;if(cljs.core.truth_(inst_11638))
{var statearr_11778_11857 = state_11755__$1;(statearr_11778_11857[1] = 10);
} else
{var statearr_11779_11858 = state_11755__$1;(statearr_11779_11858[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 40))
{var inst_11721 = (state_11755[18]);var inst_11722 = (state_11755[2]);var inst_11723 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11724 = cljs.core.async.untap_STAR_.call(null,m,inst_11721);var state_11755__$1 = (function (){var statearr_11780 = state_11755;(statearr_11780[22] = inst_11722);
(statearr_11780[23] = inst_11723);
return statearr_11780;
})();var statearr_11781_11859 = state_11755__$1;(statearr_11781_11859[2] = inst_11724);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11755__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 9))
{var inst_11680 = (state_11755[2]);var state_11755__$1 = state_11755;var statearr_11782_11860 = state_11755__$1;(statearr_11782_11860[2] = inst_11680);
(statearr_11782_11860[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 41))
{var inst_11721 = (state_11755[18]);var inst_11623 = (state_11755[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11755,40,Object,null,39);var inst_11728 = cljs.core.async.put_BANG_.call(null,inst_11721,inst_11623,done);var state_11755__$1 = state_11755;var statearr_11783_11861 = state_11755__$1;(statearr_11783_11861[2] = inst_11728);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11755__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 10))
{var inst_11633 = (state_11755[15]);var inst_11635 = (state_11755[17]);var inst_11641 = cljs.core._nth.call(null,inst_11633,inst_11635);var inst_11642 = cljs.core.nth.call(null,inst_11641,0,null);var inst_11643 = cljs.core.nth.call(null,inst_11641,1,null);var state_11755__$1 = (function (){var statearr_11784 = state_11755;(statearr_11784[24] = inst_11642);
return statearr_11784;
})();if(cljs.core.truth_(inst_11643))
{var statearr_11785_11862 = state_11755__$1;(statearr_11785_11862[1] = 13);
} else
{var statearr_11786_11863 = state_11755__$1;(statearr_11786_11863[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 42))
{var state_11755__$1 = state_11755;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11755__$1,45,dchan);
} else
{if((state_val_11756 === 11))
{var inst_11652 = (state_11755[25]);var inst_11632 = (state_11755[14]);var inst_11652__$1 = cljs.core.seq.call(null,inst_11632);var state_11755__$1 = (function (){var statearr_11787 = state_11755;(statearr_11787[25] = inst_11652__$1);
return statearr_11787;
})();if(inst_11652__$1)
{var statearr_11788_11864 = state_11755__$1;(statearr_11788_11864[1] = 16);
} else
{var statearr_11789_11865 = state_11755__$1;(statearr_11789_11865[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 43))
{var state_11755__$1 = state_11755;var statearr_11790_11866 = state_11755__$1;(statearr_11790_11866[2] = null);
(statearr_11790_11866[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 12))
{var inst_11678 = (state_11755[2]);var state_11755__$1 = state_11755;var statearr_11791_11867 = state_11755__$1;(statearr_11791_11867[2] = inst_11678);
(statearr_11791_11867[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 44))
{var inst_11748 = (state_11755[2]);var state_11755__$1 = (function (){var statearr_11792 = state_11755;(statearr_11792[26] = inst_11748);
return statearr_11792;
})();var statearr_11793_11868 = state_11755__$1;(statearr_11793_11868[2] = null);
(statearr_11793_11868[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 13))
{var inst_11642 = (state_11755[24]);var inst_11645 = cljs.core.async.close_BANG_.call(null,inst_11642);var state_11755__$1 = state_11755;var statearr_11794_11869 = state_11755__$1;(statearr_11794_11869[2] = inst_11645);
(statearr_11794_11869[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 45))
{var inst_11745 = (state_11755[2]);var state_11755__$1 = state_11755;var statearr_11798_11870 = state_11755__$1;(statearr_11798_11870[2] = inst_11745);
(statearr_11798_11870[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 14))
{var state_11755__$1 = state_11755;var statearr_11799_11871 = state_11755__$1;(statearr_11799_11871[2] = null);
(statearr_11799_11871[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 15))
{var inst_11632 = (state_11755[14]);var inst_11633 = (state_11755[15]);var inst_11634 = (state_11755[16]);var inst_11635 = (state_11755[17]);var inst_11648 = (state_11755[2]);var inst_11649 = (inst_11635 + 1);var tmp11795 = inst_11632;var tmp11796 = inst_11633;var tmp11797 = inst_11634;var inst_11632__$1 = tmp11795;var inst_11633__$1 = tmp11796;var inst_11634__$1 = tmp11797;var inst_11635__$1 = inst_11649;var state_11755__$1 = (function (){var statearr_11800 = state_11755;(statearr_11800[27] = inst_11648);
(statearr_11800[14] = inst_11632__$1);
(statearr_11800[15] = inst_11633__$1);
(statearr_11800[16] = inst_11634__$1);
(statearr_11800[17] = inst_11635__$1);
return statearr_11800;
})();var statearr_11801_11872 = state_11755__$1;(statearr_11801_11872[2] = null);
(statearr_11801_11872[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 16))
{var inst_11652 = (state_11755[25]);var inst_11654 = cljs.core.chunked_seq_QMARK_.call(null,inst_11652);var state_11755__$1 = state_11755;if(inst_11654)
{var statearr_11802_11873 = state_11755__$1;(statearr_11802_11873[1] = 19);
} else
{var statearr_11803_11874 = state_11755__$1;(statearr_11803_11874[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 17))
{var state_11755__$1 = state_11755;var statearr_11804_11875 = state_11755__$1;(statearr_11804_11875[2] = null);
(statearr_11804_11875[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 18))
{var inst_11676 = (state_11755[2]);var state_11755__$1 = state_11755;var statearr_11805_11876 = state_11755__$1;(statearr_11805_11876[2] = inst_11676);
(statearr_11805_11876[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 19))
{var inst_11652 = (state_11755[25]);var inst_11656 = cljs.core.chunk_first.call(null,inst_11652);var inst_11657 = cljs.core.chunk_rest.call(null,inst_11652);var inst_11658 = cljs.core.count.call(null,inst_11656);var inst_11632 = inst_11657;var inst_11633 = inst_11656;var inst_11634 = inst_11658;var inst_11635 = 0;var state_11755__$1 = (function (){var statearr_11806 = state_11755;(statearr_11806[14] = inst_11632);
(statearr_11806[15] = inst_11633);
(statearr_11806[16] = inst_11634);
(statearr_11806[17] = inst_11635);
return statearr_11806;
})();var statearr_11807_11877 = state_11755__$1;(statearr_11807_11877[2] = null);
(statearr_11807_11877[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 20))
{var inst_11652 = (state_11755[25]);var inst_11662 = cljs.core.first.call(null,inst_11652);var inst_11663 = cljs.core.nth.call(null,inst_11662,0,null);var inst_11664 = cljs.core.nth.call(null,inst_11662,1,null);var state_11755__$1 = (function (){var statearr_11808 = state_11755;(statearr_11808[28] = inst_11663);
return statearr_11808;
})();if(cljs.core.truth_(inst_11664))
{var statearr_11809_11878 = state_11755__$1;(statearr_11809_11878[1] = 22);
} else
{var statearr_11810_11879 = state_11755__$1;(statearr_11810_11879[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 21))
{var inst_11673 = (state_11755[2]);var state_11755__$1 = state_11755;var statearr_11811_11880 = state_11755__$1;(statearr_11811_11880[2] = inst_11673);
(statearr_11811_11880[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 22))
{var inst_11663 = (state_11755[28]);var inst_11666 = cljs.core.async.close_BANG_.call(null,inst_11663);var state_11755__$1 = state_11755;var statearr_11812_11881 = state_11755__$1;(statearr_11812_11881[2] = inst_11666);
(statearr_11812_11881[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 23))
{var state_11755__$1 = state_11755;var statearr_11813_11882 = state_11755__$1;(statearr_11813_11882[2] = null);
(statearr_11813_11882[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 24))
{var inst_11652 = (state_11755[25]);var inst_11669 = (state_11755[2]);var inst_11670 = cljs.core.next.call(null,inst_11652);var inst_11632 = inst_11670;var inst_11633 = null;var inst_11634 = 0;var inst_11635 = 0;var state_11755__$1 = (function (){var statearr_11814 = state_11755;(statearr_11814[29] = inst_11669);
(statearr_11814[14] = inst_11632);
(statearr_11814[15] = inst_11633);
(statearr_11814[16] = inst_11634);
(statearr_11814[17] = inst_11635);
return statearr_11814;
})();var statearr_11815_11883 = state_11755__$1;(statearr_11815_11883[2] = null);
(statearr_11815_11883[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 25))
{var inst_11693 = (state_11755[11]);var inst_11694 = (state_11755[13]);var inst_11696 = (inst_11694 < inst_11693);var inst_11697 = inst_11696;var state_11755__$1 = state_11755;if(cljs.core.truth_(inst_11697))
{var statearr_11816_11884 = state_11755__$1;(statearr_11816_11884[1] = 27);
} else
{var statearr_11817_11885 = state_11755__$1;(statearr_11817_11885[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 26))
{var inst_11683 = (state_11755[19]);var inst_11741 = (state_11755[2]);var inst_11742 = cljs.core.seq.call(null,inst_11683);var state_11755__$1 = (function (){var statearr_11818 = state_11755;(statearr_11818[30] = inst_11741);
return statearr_11818;
})();if(inst_11742)
{var statearr_11819_11886 = state_11755__$1;(statearr_11819_11886[1] = 42);
} else
{var statearr_11820_11887 = state_11755__$1;(statearr_11820_11887[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 27))
{var inst_11692 = (state_11755[10]);var inst_11694 = (state_11755[13]);var inst_11699 = cljs.core._nth.call(null,inst_11692,inst_11694);var state_11755__$1 = (function (){var statearr_11821 = state_11755;(statearr_11821[7] = inst_11699);
return statearr_11821;
})();var statearr_11822_11888 = state_11755__$1;(statearr_11822_11888[2] = null);
(statearr_11822_11888[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 28))
{var inst_11691 = (state_11755[12]);var inst_11712 = (state_11755[9]);var inst_11712__$1 = cljs.core.seq.call(null,inst_11691);var state_11755__$1 = (function (){var statearr_11826 = state_11755;(statearr_11826[9] = inst_11712__$1);
return statearr_11826;
})();if(inst_11712__$1)
{var statearr_11827_11889 = state_11755__$1;(statearr_11827_11889[1] = 33);
} else
{var statearr_11828_11890 = state_11755__$1;(statearr_11828_11890[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 29))
{var inst_11739 = (state_11755[2]);var state_11755__$1 = state_11755;var statearr_11829_11891 = state_11755__$1;(statearr_11829_11891[2] = inst_11739);
(statearr_11829_11891[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 30))
{var inst_11692 = (state_11755[10]);var inst_11693 = (state_11755[11]);var inst_11691 = (state_11755[12]);var inst_11694 = (state_11755[13]);var inst_11708 = (state_11755[2]);var inst_11709 = (inst_11694 + 1);var tmp11823 = inst_11692;var tmp11824 = inst_11693;var tmp11825 = inst_11691;var inst_11691__$1 = tmp11825;var inst_11692__$1 = tmp11823;var inst_11693__$1 = tmp11824;var inst_11694__$1 = inst_11709;var state_11755__$1 = (function (){var statearr_11830 = state_11755;(statearr_11830[10] = inst_11692__$1);
(statearr_11830[11] = inst_11693__$1);
(statearr_11830[12] = inst_11691__$1);
(statearr_11830[31] = inst_11708);
(statearr_11830[13] = inst_11694__$1);
return statearr_11830;
})();var statearr_11831_11892 = state_11755__$1;(statearr_11831_11892[2] = null);
(statearr_11831_11892[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 31))
{var inst_11699 = (state_11755[7]);var inst_11700 = (state_11755[2]);var inst_11701 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11702 = cljs.core.async.untap_STAR_.call(null,m,inst_11699);var state_11755__$1 = (function (){var statearr_11832 = state_11755;(statearr_11832[32] = inst_11700);
(statearr_11832[33] = inst_11701);
return statearr_11832;
})();var statearr_11833_11893 = state_11755__$1;(statearr_11833_11893[2] = inst_11702);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11755__$1);
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
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11837[0] = state_machine__6178__auto__);
(statearr_11837[1] = 1);
return statearr_11837;
});
var state_machine__6178__auto____1 = (function (state_11755){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11755);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11838){if((e11838 instanceof Object))
{var ex__6181__auto__ = e11838;var statearr_11839_11894 = state_11755;(statearr_11839_11894[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11755);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11838;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11895 = state_11755;
state_11755 = G__11895;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11755){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11840 = f__6193__auto__.call(null);(statearr_11840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11841);
return statearr_11840;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj11897 = {};return obj11897;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12007 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12007 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12008){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta12008 = meta12008;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12007.cljs$lang$type = true;
cljs.core.async.t12007.cljs$lang$ctorStr = "cljs.core.async/t12007";
cljs.core.async.t12007.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12007");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12007.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12007.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12007.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12007.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12007.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12007.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12007.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12007.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12007.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12009){var self__ = this;
var _12009__$1 = this;return self__.meta12008;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12009,meta12008__$1){var self__ = this;
var _12009__$1 = this;return (new cljs.core.async.t12007(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12008__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12007 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12007(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12008){return (new cljs.core.async.t12007(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12008));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12007(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6192__auto___12116 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12074){var state_val_12075 = (state_12074[1]);if((state_val_12075 === 1))
{var inst_12013 = (state_12074[7]);var inst_12013__$1 = calc_state.call(null);var inst_12014 = cljs.core.seq_QMARK_.call(null,inst_12013__$1);var state_12074__$1 = (function (){var statearr_12076 = state_12074;(statearr_12076[7] = inst_12013__$1);
return statearr_12076;
})();if(inst_12014)
{var statearr_12077_12117 = state_12074__$1;(statearr_12077_12117[1] = 2);
} else
{var statearr_12078_12118 = state_12074__$1;(statearr_12078_12118[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 2))
{var inst_12013 = (state_12074[7]);var inst_12016 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12013);var state_12074__$1 = state_12074;var statearr_12079_12119 = state_12074__$1;(statearr_12079_12119[2] = inst_12016);
(statearr_12079_12119[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 3))
{var inst_12013 = (state_12074[7]);var state_12074__$1 = state_12074;var statearr_12080_12120 = state_12074__$1;(statearr_12080_12120[2] = inst_12013);
(statearr_12080_12120[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 4))
{var inst_12013 = (state_12074[7]);var inst_12019 = (state_12074[2]);var inst_12020 = cljs.core.get.call(null,inst_12019,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12021 = cljs.core.get.call(null,inst_12019,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12022 = cljs.core.get.call(null,inst_12019,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12023 = inst_12013;var state_12074__$1 = (function (){var statearr_12081 = state_12074;(statearr_12081[8] = inst_12022);
(statearr_12081[9] = inst_12023);
(statearr_12081[10] = inst_12020);
(statearr_12081[11] = inst_12021);
return statearr_12081;
})();var statearr_12082_12121 = state_12074__$1;(statearr_12082_12121[2] = null);
(statearr_12082_12121[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 5))
{var inst_12023 = (state_12074[9]);var inst_12026 = cljs.core.seq_QMARK_.call(null,inst_12023);var state_12074__$1 = state_12074;if(inst_12026)
{var statearr_12083_12122 = state_12074__$1;(statearr_12083_12122[1] = 7);
} else
{var statearr_12084_12123 = state_12074__$1;(statearr_12084_12123[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 6))
{var inst_12072 = (state_12074[2]);var state_12074__$1 = state_12074;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12074__$1,inst_12072);
} else
{if((state_val_12075 === 7))
{var inst_12023 = (state_12074[9]);var inst_12028 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12023);var state_12074__$1 = state_12074;var statearr_12085_12124 = state_12074__$1;(statearr_12085_12124[2] = inst_12028);
(statearr_12085_12124[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 8))
{var inst_12023 = (state_12074[9]);var state_12074__$1 = state_12074;var statearr_12086_12125 = state_12074__$1;(statearr_12086_12125[2] = inst_12023);
(statearr_12086_12125[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 9))
{var inst_12031 = (state_12074[12]);var inst_12031__$1 = (state_12074[2]);var inst_12032 = cljs.core.get.call(null,inst_12031__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12033 = cljs.core.get.call(null,inst_12031__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12034 = cljs.core.get.call(null,inst_12031__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12074__$1 = (function (){var statearr_12087 = state_12074;(statearr_12087[13] = inst_12033);
(statearr_12087[14] = inst_12034);
(statearr_12087[12] = inst_12031__$1);
return statearr_12087;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12074__$1,10,inst_12032);
} else
{if((state_val_12075 === 10))
{var inst_12038 = (state_12074[15]);var inst_12039 = (state_12074[16]);var inst_12037 = (state_12074[2]);var inst_12038__$1 = cljs.core.nth.call(null,inst_12037,0,null);var inst_12039__$1 = cljs.core.nth.call(null,inst_12037,1,null);var inst_12040 = (inst_12038__$1 == null);var inst_12041 = cljs.core._EQ_.call(null,inst_12039__$1,change);var inst_12042 = (inst_12040) || (inst_12041);var state_12074__$1 = (function (){var statearr_12088 = state_12074;(statearr_12088[15] = inst_12038__$1);
(statearr_12088[16] = inst_12039__$1);
return statearr_12088;
})();if(cljs.core.truth_(inst_12042))
{var statearr_12089_12126 = state_12074__$1;(statearr_12089_12126[1] = 11);
} else
{var statearr_12090_12127 = state_12074__$1;(statearr_12090_12127[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 11))
{var inst_12038 = (state_12074[15]);var inst_12044 = (inst_12038 == null);var state_12074__$1 = state_12074;if(cljs.core.truth_(inst_12044))
{var statearr_12091_12128 = state_12074__$1;(statearr_12091_12128[1] = 14);
} else
{var statearr_12092_12129 = state_12074__$1;(statearr_12092_12129[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 12))
{var inst_12034 = (state_12074[14]);var inst_12053 = (state_12074[17]);var inst_12039 = (state_12074[16]);var inst_12053__$1 = inst_12034.call(null,inst_12039);var state_12074__$1 = (function (){var statearr_12093 = state_12074;(statearr_12093[17] = inst_12053__$1);
return statearr_12093;
})();if(cljs.core.truth_(inst_12053__$1))
{var statearr_12094_12130 = state_12074__$1;(statearr_12094_12130[1] = 17);
} else
{var statearr_12095_12131 = state_12074__$1;(statearr_12095_12131[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 13))
{var inst_12070 = (state_12074[2]);var state_12074__$1 = state_12074;var statearr_12096_12132 = state_12074__$1;(statearr_12096_12132[2] = inst_12070);
(statearr_12096_12132[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 14))
{var inst_12039 = (state_12074[16]);var inst_12046 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12039);var state_12074__$1 = state_12074;var statearr_12097_12133 = state_12074__$1;(statearr_12097_12133[2] = inst_12046);
(statearr_12097_12133[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 15))
{var state_12074__$1 = state_12074;var statearr_12098_12134 = state_12074__$1;(statearr_12098_12134[2] = null);
(statearr_12098_12134[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 16))
{var inst_12049 = (state_12074[2]);var inst_12050 = calc_state.call(null);var inst_12023 = inst_12050;var state_12074__$1 = (function (){var statearr_12099 = state_12074;(statearr_12099[9] = inst_12023);
(statearr_12099[18] = inst_12049);
return statearr_12099;
})();var statearr_12100_12135 = state_12074__$1;(statearr_12100_12135[2] = null);
(statearr_12100_12135[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 17))
{var inst_12053 = (state_12074[17]);var state_12074__$1 = state_12074;var statearr_12101_12136 = state_12074__$1;(statearr_12101_12136[2] = inst_12053);
(statearr_12101_12136[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 18))
{var inst_12033 = (state_12074[13]);var inst_12034 = (state_12074[14]);var inst_12039 = (state_12074[16]);var inst_12056 = cljs.core.empty_QMARK_.call(null,inst_12034);var inst_12057 = inst_12033.call(null,inst_12039);var inst_12058 = cljs.core.not.call(null,inst_12057);var inst_12059 = (inst_12056) && (inst_12058);var state_12074__$1 = state_12074;var statearr_12102_12137 = state_12074__$1;(statearr_12102_12137[2] = inst_12059);
(statearr_12102_12137[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 19))
{var inst_12061 = (state_12074[2]);var state_12074__$1 = state_12074;if(cljs.core.truth_(inst_12061))
{var statearr_12103_12138 = state_12074__$1;(statearr_12103_12138[1] = 20);
} else
{var statearr_12104_12139 = state_12074__$1;(statearr_12104_12139[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 20))
{var inst_12038 = (state_12074[15]);var state_12074__$1 = state_12074;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12074__$1,23,out,inst_12038);
} else
{if((state_val_12075 === 21))
{var state_12074__$1 = state_12074;var statearr_12105_12140 = state_12074__$1;(statearr_12105_12140[2] = null);
(statearr_12105_12140[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 22))
{var inst_12031 = (state_12074[12]);var inst_12067 = (state_12074[2]);var inst_12023 = inst_12031;var state_12074__$1 = (function (){var statearr_12106 = state_12074;(statearr_12106[19] = inst_12067);
(statearr_12106[9] = inst_12023);
return statearr_12106;
})();var statearr_12107_12141 = state_12074__$1;(statearr_12107_12141[2] = null);
(statearr_12107_12141[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 23))
{var inst_12064 = (state_12074[2]);var state_12074__$1 = state_12074;var statearr_12108_12142 = state_12074__$1;(statearr_12108_12142[2] = inst_12064);
(statearr_12108_12142[1] = 22);
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
var state_machine__6178__auto____0 = (function (){var statearr_12112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12112[0] = state_machine__6178__auto__);
(statearr_12112[1] = 1);
return statearr_12112;
});
var state_machine__6178__auto____1 = (function (state_12074){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12074);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12113){if((e12113 instanceof Object))
{var ex__6181__auto__ = e12113;var statearr_12114_12143 = state_12074;(statearr_12114_12143[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12074);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12113;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12144 = state_12074;
state_12074 = G__12144;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12074){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12115 = f__6193__auto__.call(null);(statearr_12115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12116);
return statearr_12115;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12146 = {};return obj12146;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3443__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3443__auto__,mults){
return (function (p1__12147_SHARP_){if(cljs.core.truth_(p1__12147_SHARP_.call(null,topic)))
{return p1__12147_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12147_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12272 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12272 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12273){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12273 = meta12273;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12272.cljs$lang$type = true;
cljs.core.async.t12272.cljs$lang$ctorStr = "cljs.core.async/t12272";
cljs.core.async.t12272.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12272");
});})(mults,ensure_mult))
;
cljs.core.async.t12272.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12272.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12272.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12272.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12272.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12272.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12272.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12272.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12274){var self__ = this;
var _12274__$1 = this;return self__.meta12273;
});})(mults,ensure_mult))
;
cljs.core.async.t12272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12274,meta12273__$1){var self__ = this;
var _12274__$1 = this;return (new cljs.core.async.t12272(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12273__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12272 = ((function (mults,ensure_mult){
return (function __GT_t12272(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12273){return (new cljs.core.async.t12272(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12273));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12272(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6192__auto___12396 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12348){var state_val_12349 = (state_12348[1]);if((state_val_12349 === 1))
{var state_12348__$1 = state_12348;var statearr_12350_12397 = state_12348__$1;(statearr_12350_12397[2] = null);
(statearr_12350_12397[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12349 === 2))
{var state_12348__$1 = state_12348;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12348__$1,4,ch);
} else
{if((state_val_12349 === 3))
{var inst_12346 = (state_12348[2]);var state_12348__$1 = state_12348;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12348__$1,inst_12346);
} else
{if((state_val_12349 === 4))
{var inst_12277 = (state_12348[7]);var inst_12277__$1 = (state_12348[2]);var inst_12278 = (inst_12277__$1 == null);var state_12348__$1 = (function (){var statearr_12351 = state_12348;(statearr_12351[7] = inst_12277__$1);
return statearr_12351;
})();if(cljs.core.truth_(inst_12278))
{var statearr_12352_12398 = state_12348__$1;(statearr_12352_12398[1] = 5);
} else
{var statearr_12353_12399 = state_12348__$1;(statearr_12353_12399[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12349 === 5))
{var inst_12284 = cljs.core.deref.call(null,mults);var inst_12285 = cljs.core.vals.call(null,inst_12284);var inst_12286 = cljs.core.seq.call(null,inst_12285);var inst_12287 = inst_12286;var inst_12288 = null;var inst_12289 = 0;var inst_12290 = 0;var state_12348__$1 = (function (){var statearr_12354 = state_12348;(statearr_12354[8] = inst_12290);
(statearr_12354[9] = inst_12287);
(statearr_12354[10] = inst_12289);
(statearr_12354[11] = inst_12288);
return statearr_12354;
})();var statearr_12355_12400 = state_12348__$1;(statearr_12355_12400[2] = null);
(statearr_12355_12400[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12349 === 6))
{var inst_12277 = (state_12348[7]);var inst_12325 = (state_12348[12]);var inst_12327 = (state_12348[13]);var inst_12325__$1 = topic_fn.call(null,inst_12277);var inst_12326 = cljs.core.deref.call(null,mults);var inst_12327__$1 = cljs.core.get.call(null,inst_12326,inst_12325__$1);var state_12348__$1 = (function (){var statearr_12356 = state_12348;(statearr_12356[12] = inst_12325__$1);
(statearr_12356[13] = inst_12327__$1);
return statearr_12356;
})();if(cljs.core.truth_(inst_12327__$1))
{var statearr_12357_12401 = state_12348__$1;(statearr_12357_12401[1] = 19);
} else
{var statearr_12358_12402 = state_12348__$1;(statearr_12358_12402[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12349 === 7))
{var inst_12344 = (state_12348[2]);var state_12348__$1 = state_12348;var statearr_12359_12403 = state_12348__$1;(statearr_12359_12403[2] = inst_12344);
(statearr_12359_12403[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12349 === 8))
{var inst_12290 = (state_12348[8]);var inst_12289 = (state_12348[10]);var inst_12292 = (inst_12290 < inst_12289);var inst_12293 = inst_12292;var state_12348__$1 = state_12348;if(cljs.core.truth_(inst_12293))
{var statearr_12363_12404 = state_12348__$1;(statearr_12363_12404[1] = 10);
} else
{var statearr_12364_12405 = state_12348__$1;(statearr_12364_12405[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12349 === 9))
{var inst_12323 = (state_12348[2]);var state_12348__$1 = state_12348;var statearr_12365_12406 = state_12348__$1;(statearr_12365_12406[2] = inst_12323);
(statearr_12365_12406[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12349 === 10))
{var inst_12290 = (state_12348[8]);var inst_12287 = (state_12348[9]);var inst_12289 = (state_12348[10]);var inst_12288 = (state_12348[11]);var inst_12295 = cljs.core._nth.call(null,inst_12288,inst_12290);var inst_12296 = cljs.core.async.muxch_STAR_.call(null,inst_12295);var inst_12297 = cljs.core.async.close_BANG_.call(null,inst_12296);var inst_12298 = (inst_12290 + 1);var tmp12360 = inst_12287;var tmp12361 = inst_12289;var tmp12362 = inst_12288;var inst_12287__$1 = tmp12360;var inst_12288__$1 = tmp12362;var inst_12289__$1 = tmp12361;var inst_12290__$1 = inst_12298;var state_12348__$1 = (function (){var statearr_12366 = state_12348;(statearr_12366[8] = inst_12290__$1);
(statearr_12366[9] = inst_12287__$1);
(statearr_12366[14] = inst_12297);
(statearr_12366[10] = inst_12289__$1);
(statearr_12366[11] = inst_12288__$1);
return statearr_12366;
})();var statearr_12367_12407 = state_12348__$1;(statearr_12367_12407[2] = null);
(statearr_12367_12407[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12349 === 11))
{var inst_12301 = (state_12348[15]);var inst_12287 = (state_12348[9]);var inst_12301__$1 = cljs.core.seq.call(null,inst_12287);var state_12348__$1 = (function (){var statearr_12368 = state_12348;(statearr_12368[15] = inst_12301__$1);
return statearr_12368;
})();if(inst_12301__$1)
{var statearr_12369_12408 = state_12348__$1;(statearr_12369_12408[1] = 13);
} else
{var statearr_12370_12409 = state_12348__$1;(statearr_12370_12409[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12349 === 12))
{var inst_12321 = (state_12348[2]);var state_12348__$1 = state_12348;var statearr_12371_12410 = state_12348__$1;(statearr_12371_12410[2] = inst_12321);
(statearr_12371_12410[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12349 === 13))
{var inst_12301 = (state_12348[15]);var inst_12303 = cljs.core.chunked_seq_QMARK_.call(null,inst_12301);var state_12348__$1 = state_12348;if(inst_12303)
{var statearr_12372_12411 = state_12348__$1;(statearr_12372_12411[1] = 16);
} else
{var statearr_12373_12412 = state_12348__$1;(statearr_12373_12412[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12349 === 14))
{var state_12348__$1 = state_12348;var statearr_12374_12413 = state_12348__$1;(statearr_12374_12413[2] = null);
(statearr_12374_12413[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12349 === 15))
{var inst_12319 = (state_12348[2]);var state_12348__$1 = state_12348;var statearr_12375_12414 = state_12348__$1;(statearr_12375_12414[2] = inst_12319);
(statearr_12375_12414[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12349 === 16))
{var inst_12301 = (state_12348[15]);var inst_12305 = cljs.core.chunk_first.call(null,inst_12301);var inst_12306 = cljs.core.chunk_rest.call(null,inst_12301);var inst_12307 = cljs.core.count.call(null,inst_12305);var inst_12287 = inst_12306;var inst_12288 = inst_12305;var inst_12289 = inst_12307;var inst_12290 = 0;var state_12348__$1 = (function (){var statearr_12376 = state_12348;(statearr_12376[8] = inst_12290);
(statearr_12376[9] = inst_12287);
(statearr_12376[10] = inst_12289);
(statearr_12376[11] = inst_12288);
return statearr_12376;
})();var statearr_12377_12415 = state_12348__$1;(statearr_12377_12415[2] = null);
(statearr_12377_12415[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12349 === 17))
{var inst_12301 = (state_12348[15]);var inst_12310 = cljs.core.first.call(null,inst_12301);var inst_12311 = cljs.core.async.muxch_STAR_.call(null,inst_12310);var inst_12312 = cljs.core.async.close_BANG_.call(null,inst_12311);var inst_12313 = cljs.core.next.call(null,inst_12301);var inst_12287 = inst_12313;var inst_12288 = null;var inst_12289 = 0;var inst_12290 = 0;var state_12348__$1 = (function (){var statearr_12378 = state_12348;(statearr_12378[8] = inst_12290);
(statearr_12378[16] = inst_12312);
(statearr_12378[9] = inst_12287);
(statearr_12378[10] = inst_12289);
(statearr_12378[11] = inst_12288);
return statearr_12378;
})();var statearr_12379_12416 = state_12348__$1;(statearr_12379_12416[2] = null);
(statearr_12379_12416[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12349 === 18))
{var inst_12316 = (state_12348[2]);var state_12348__$1 = state_12348;var statearr_12380_12417 = state_12348__$1;(statearr_12380_12417[2] = inst_12316);
(statearr_12380_12417[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12349 === 19))
{var state_12348__$1 = state_12348;var statearr_12381_12418 = state_12348__$1;(statearr_12381_12418[2] = null);
(statearr_12381_12418[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12349 === 20))
{var state_12348__$1 = state_12348;var statearr_12382_12419 = state_12348__$1;(statearr_12382_12419[2] = null);
(statearr_12382_12419[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12349 === 21))
{var inst_12341 = (state_12348[2]);var state_12348__$1 = (function (){var statearr_12383 = state_12348;(statearr_12383[17] = inst_12341);
return statearr_12383;
})();var statearr_12384_12420 = state_12348__$1;(statearr_12384_12420[2] = null);
(statearr_12384_12420[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12349 === 22))
{var inst_12338 = (state_12348[2]);var state_12348__$1 = state_12348;var statearr_12385_12421 = state_12348__$1;(statearr_12385_12421[2] = inst_12338);
(statearr_12385_12421[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12349 === 23))
{var inst_12325 = (state_12348[12]);var inst_12329 = (state_12348[2]);var inst_12330 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12325);var state_12348__$1 = (function (){var statearr_12386 = state_12348;(statearr_12386[18] = inst_12329);
return statearr_12386;
})();var statearr_12387_12422 = state_12348__$1;(statearr_12387_12422[2] = inst_12330);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12348__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12349 === 24))
{var inst_12277 = (state_12348[7]);var inst_12327 = (state_12348[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12348,23,Object,null,22);var inst_12334 = cljs.core.async.muxch_STAR_.call(null,inst_12327);var state_12348__$1 = state_12348;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12348__$1,25,inst_12334,inst_12277);
} else
{if((state_val_12349 === 25))
{var inst_12336 = (state_12348[2]);var state_12348__$1 = state_12348;var statearr_12388_12423 = state_12348__$1;(statearr_12388_12423[2] = inst_12336);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12348__$1);
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
var state_machine__6178__auto____0 = (function (){var statearr_12392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12392[0] = state_machine__6178__auto__);
(statearr_12392[1] = 1);
return statearr_12392;
});
var state_machine__6178__auto____1 = (function (state_12348){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12348);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12393){if((e12393 instanceof Object))
{var ex__6181__auto__ = e12393;var statearr_12394_12424 = state_12348;(statearr_12394_12424[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12348);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12393;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12425 = state_12348;
state_12348 = G__12425;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12348){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12395 = f__6193__auto__.call(null);(statearr_12395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12396);
return statearr_12395;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6192__auto___12562 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12532){var state_val_12533 = (state_12532[1]);if((state_val_12533 === 1))
{var state_12532__$1 = state_12532;var statearr_12534_12563 = state_12532__$1;(statearr_12534_12563[2] = null);
(statearr_12534_12563[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12533 === 2))
{var inst_12495 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12496 = 0;var state_12532__$1 = (function (){var statearr_12535 = state_12532;(statearr_12535[7] = inst_12495);
(statearr_12535[8] = inst_12496);
return statearr_12535;
})();var statearr_12536_12564 = state_12532__$1;(statearr_12536_12564[2] = null);
(statearr_12536_12564[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12533 === 3))
{var inst_12530 = (state_12532[2]);var state_12532__$1 = state_12532;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12532__$1,inst_12530);
} else
{if((state_val_12533 === 4))
{var inst_12496 = (state_12532[8]);var inst_12498 = (inst_12496 < cnt);var state_12532__$1 = state_12532;if(cljs.core.truth_(inst_12498))
{var statearr_12537_12565 = state_12532__$1;(statearr_12537_12565[1] = 6);
} else
{var statearr_12538_12566 = state_12532__$1;(statearr_12538_12566[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12533 === 5))
{var inst_12516 = (state_12532[2]);var state_12532__$1 = (function (){var statearr_12539 = state_12532;(statearr_12539[9] = inst_12516);
return statearr_12539;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12532__$1,12,dchan);
} else
{if((state_val_12533 === 6))
{var state_12532__$1 = state_12532;var statearr_12540_12567 = state_12532__$1;(statearr_12540_12567[2] = null);
(statearr_12540_12567[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12533 === 7))
{var state_12532__$1 = state_12532;var statearr_12541_12568 = state_12532__$1;(statearr_12541_12568[2] = null);
(statearr_12541_12568[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12533 === 8))
{var inst_12514 = (state_12532[2]);var state_12532__$1 = state_12532;var statearr_12542_12569 = state_12532__$1;(statearr_12542_12569[2] = inst_12514);
(statearr_12542_12569[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12533 === 9))
{var inst_12496 = (state_12532[8]);var inst_12509 = (state_12532[2]);var inst_12510 = (inst_12496 + 1);var inst_12496__$1 = inst_12510;var state_12532__$1 = (function (){var statearr_12543 = state_12532;(statearr_12543[8] = inst_12496__$1);
(statearr_12543[10] = inst_12509);
return statearr_12543;
})();var statearr_12544_12570 = state_12532__$1;(statearr_12544_12570[2] = null);
(statearr_12544_12570[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12533 === 10))
{var inst_12500 = (state_12532[2]);var inst_12501 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12532__$1 = (function (){var statearr_12545 = state_12532;(statearr_12545[11] = inst_12500);
return statearr_12545;
})();var statearr_12546_12571 = state_12532__$1;(statearr_12546_12571[2] = inst_12501);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12532__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12533 === 11))
{var inst_12496 = (state_12532[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12532,10,Object,null,9);var inst_12505 = chs__$1.call(null,inst_12496);var inst_12506 = done.call(null,inst_12496);var inst_12507 = cljs.core.async.take_BANG_.call(null,inst_12505,inst_12506);var state_12532__$1 = state_12532;var statearr_12547_12572 = state_12532__$1;(statearr_12547_12572[2] = inst_12507);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12532__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12533 === 12))
{var inst_12518 = (state_12532[12]);var inst_12518__$1 = (state_12532[2]);var inst_12519 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12518__$1);var state_12532__$1 = (function (){var statearr_12548 = state_12532;(statearr_12548[12] = inst_12518__$1);
return statearr_12548;
})();if(cljs.core.truth_(inst_12519))
{var statearr_12549_12573 = state_12532__$1;(statearr_12549_12573[1] = 13);
} else
{var statearr_12550_12574 = state_12532__$1;(statearr_12550_12574[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12533 === 13))
{var inst_12521 = cljs.core.async.close_BANG_.call(null,out);var state_12532__$1 = state_12532;var statearr_12551_12575 = state_12532__$1;(statearr_12551_12575[2] = inst_12521);
(statearr_12551_12575[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12533 === 14))
{var inst_12518 = (state_12532[12]);var inst_12523 = cljs.core.apply.call(null,f,inst_12518);var state_12532__$1 = state_12532;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12532__$1,16,out,inst_12523);
} else
{if((state_val_12533 === 15))
{var inst_12528 = (state_12532[2]);var state_12532__$1 = state_12532;var statearr_12552_12576 = state_12532__$1;(statearr_12552_12576[2] = inst_12528);
(statearr_12552_12576[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12533 === 16))
{var inst_12525 = (state_12532[2]);var state_12532__$1 = (function (){var statearr_12553 = state_12532;(statearr_12553[13] = inst_12525);
return statearr_12553;
})();var statearr_12554_12577 = state_12532__$1;(statearr_12554_12577[2] = null);
(statearr_12554_12577[1] = 2);
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
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12558[0] = state_machine__6178__auto__);
(statearr_12558[1] = 1);
return statearr_12558;
});
var state_machine__6178__auto____1 = (function (state_12532){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12532);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12559){if((e12559 instanceof Object))
{var ex__6181__auto__ = e12559;var statearr_12560_12578 = state_12532;(statearr_12560_12578[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12532);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12559;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12579 = state_12532;
state_12532 = G__12579;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12532){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12561 = f__6193__auto__.call(null);(statearr_12561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12562);
return statearr_12561;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___12687 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12663){var state_val_12664 = (state_12663[1]);if((state_val_12664 === 1))
{var inst_12634 = cljs.core.vec.call(null,chs);var inst_12635 = inst_12634;var state_12663__$1 = (function (){var statearr_12665 = state_12663;(statearr_12665[7] = inst_12635);
return statearr_12665;
})();var statearr_12666_12688 = state_12663__$1;(statearr_12666_12688[2] = null);
(statearr_12666_12688[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12664 === 2))
{var inst_12635 = (state_12663[7]);var inst_12637 = cljs.core.count.call(null,inst_12635);var inst_12638 = (inst_12637 > 0);var state_12663__$1 = state_12663;if(cljs.core.truth_(inst_12638))
{var statearr_12667_12689 = state_12663__$1;(statearr_12667_12689[1] = 4);
} else
{var statearr_12668_12690 = state_12663__$1;(statearr_12668_12690[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12664 === 3))
{var inst_12661 = (state_12663[2]);var state_12663__$1 = state_12663;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12663__$1,inst_12661);
} else
{if((state_val_12664 === 4))
{var inst_12635 = (state_12663[7]);var state_12663__$1 = state_12663;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12663__$1,7,inst_12635);
} else
{if((state_val_12664 === 5))
{var inst_12657 = cljs.core.async.close_BANG_.call(null,out);var state_12663__$1 = state_12663;var statearr_12669_12691 = state_12663__$1;(statearr_12669_12691[2] = inst_12657);
(statearr_12669_12691[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12664 === 6))
{var inst_12659 = (state_12663[2]);var state_12663__$1 = state_12663;var statearr_12670_12692 = state_12663__$1;(statearr_12670_12692[2] = inst_12659);
(statearr_12670_12692[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12664 === 7))
{var inst_12643 = (state_12663[8]);var inst_12642 = (state_12663[9]);var inst_12642__$1 = (state_12663[2]);var inst_12643__$1 = cljs.core.nth.call(null,inst_12642__$1,0,null);var inst_12644 = cljs.core.nth.call(null,inst_12642__$1,1,null);var inst_12645 = (inst_12643__$1 == null);var state_12663__$1 = (function (){var statearr_12671 = state_12663;(statearr_12671[10] = inst_12644);
(statearr_12671[8] = inst_12643__$1);
(statearr_12671[9] = inst_12642__$1);
return statearr_12671;
})();if(cljs.core.truth_(inst_12645))
{var statearr_12672_12693 = state_12663__$1;(statearr_12672_12693[1] = 8);
} else
{var statearr_12673_12694 = state_12663__$1;(statearr_12673_12694[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12664 === 8))
{var inst_12644 = (state_12663[10]);var inst_12643 = (state_12663[8]);var inst_12642 = (state_12663[9]);var inst_12635 = (state_12663[7]);var inst_12647 = (function (){var c = inst_12644;var v = inst_12643;var vec__12640 = inst_12642;var cs = inst_12635;return ((function (c,v,vec__12640,cs,inst_12644,inst_12643,inst_12642,inst_12635,state_val_12664){
return (function (p1__12580_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12580_SHARP_);
});
;})(c,v,vec__12640,cs,inst_12644,inst_12643,inst_12642,inst_12635,state_val_12664))
})();var inst_12648 = cljs.core.filterv.call(null,inst_12647,inst_12635);var inst_12635__$1 = inst_12648;var state_12663__$1 = (function (){var statearr_12674 = state_12663;(statearr_12674[7] = inst_12635__$1);
return statearr_12674;
})();var statearr_12675_12695 = state_12663__$1;(statearr_12675_12695[2] = null);
(statearr_12675_12695[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12664 === 9))
{var inst_12643 = (state_12663[8]);var state_12663__$1 = state_12663;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12663__$1,11,out,inst_12643);
} else
{if((state_val_12664 === 10))
{var inst_12655 = (state_12663[2]);var state_12663__$1 = state_12663;var statearr_12677_12696 = state_12663__$1;(statearr_12677_12696[2] = inst_12655);
(statearr_12677_12696[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12664 === 11))
{var inst_12635 = (state_12663[7]);var inst_12652 = (state_12663[2]);var tmp12676 = inst_12635;var inst_12635__$1 = tmp12676;var state_12663__$1 = (function (){var statearr_12678 = state_12663;(statearr_12678[11] = inst_12652);
(statearr_12678[7] = inst_12635__$1);
return statearr_12678;
})();var statearr_12679_12697 = state_12663__$1;(statearr_12679_12697[2] = null);
(statearr_12679_12697[1] = 2);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12683 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12683[0] = state_machine__6178__auto__);
(statearr_12683[1] = 1);
return statearr_12683;
});
var state_machine__6178__auto____1 = (function (state_12663){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12663);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12684){if((e12684 instanceof Object))
{var ex__6181__auto__ = e12684;var statearr_12685_12698 = state_12663;(statearr_12685_12698[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12663);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12684;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12699 = state_12663;
state_12663 = G__12699;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12663){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12686 = f__6193__auto__.call(null);(statearr_12686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12687);
return statearr_12686;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___12792 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12769){var state_val_12770 = (state_12769[1]);if((state_val_12770 === 1))
{var inst_12746 = 0;var state_12769__$1 = (function (){var statearr_12771 = state_12769;(statearr_12771[7] = inst_12746);
return statearr_12771;
})();var statearr_12772_12793 = state_12769__$1;(statearr_12772_12793[2] = null);
(statearr_12772_12793[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12770 === 2))
{var inst_12746 = (state_12769[7]);var inst_12748 = (inst_12746 < n);var state_12769__$1 = state_12769;if(cljs.core.truth_(inst_12748))
{var statearr_12773_12794 = state_12769__$1;(statearr_12773_12794[1] = 4);
} else
{var statearr_12774_12795 = state_12769__$1;(statearr_12774_12795[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12770 === 3))
{var inst_12766 = (state_12769[2]);var inst_12767 = cljs.core.async.close_BANG_.call(null,out);var state_12769__$1 = (function (){var statearr_12775 = state_12769;(statearr_12775[8] = inst_12766);
return statearr_12775;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12769__$1,inst_12767);
} else
{if((state_val_12770 === 4))
{var state_12769__$1 = state_12769;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12769__$1,7,ch);
} else
{if((state_val_12770 === 5))
{var state_12769__$1 = state_12769;var statearr_12776_12796 = state_12769__$1;(statearr_12776_12796[2] = null);
(statearr_12776_12796[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12770 === 6))
{var inst_12764 = (state_12769[2]);var state_12769__$1 = state_12769;var statearr_12777_12797 = state_12769__$1;(statearr_12777_12797[2] = inst_12764);
(statearr_12777_12797[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12770 === 7))
{var inst_12751 = (state_12769[9]);var inst_12751__$1 = (state_12769[2]);var inst_12752 = (inst_12751__$1 == null);var inst_12753 = cljs.core.not.call(null,inst_12752);var state_12769__$1 = (function (){var statearr_12778 = state_12769;(statearr_12778[9] = inst_12751__$1);
return statearr_12778;
})();if(inst_12753)
{var statearr_12779_12798 = state_12769__$1;(statearr_12779_12798[1] = 8);
} else
{var statearr_12780_12799 = state_12769__$1;(statearr_12780_12799[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12770 === 8))
{var inst_12751 = (state_12769[9]);var state_12769__$1 = state_12769;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12769__$1,11,out,inst_12751);
} else
{if((state_val_12770 === 9))
{var state_12769__$1 = state_12769;var statearr_12781_12800 = state_12769__$1;(statearr_12781_12800[2] = null);
(statearr_12781_12800[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12770 === 10))
{var inst_12761 = (state_12769[2]);var state_12769__$1 = state_12769;var statearr_12782_12801 = state_12769__$1;(statearr_12782_12801[2] = inst_12761);
(statearr_12782_12801[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12770 === 11))
{var inst_12746 = (state_12769[7]);var inst_12756 = (state_12769[2]);var inst_12757 = (inst_12746 + 1);var inst_12746__$1 = inst_12757;var state_12769__$1 = (function (){var statearr_12783 = state_12769;(statearr_12783[7] = inst_12746__$1);
(statearr_12783[10] = inst_12756);
return statearr_12783;
})();var statearr_12784_12802 = state_12769__$1;(statearr_12784_12802[2] = null);
(statearr_12784_12802[1] = 2);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12788 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12788[0] = state_machine__6178__auto__);
(statearr_12788[1] = 1);
return statearr_12788;
});
var state_machine__6178__auto____1 = (function (state_12769){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12769);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12789){if((e12789 instanceof Object))
{var ex__6181__auto__ = e12789;var statearr_12790_12803 = state_12769;(statearr_12790_12803[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12769);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12789;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12804 = state_12769;
state_12769 = G__12804;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12769){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12791 = f__6193__auto__.call(null);(statearr_12791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12792);
return statearr_12791;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___12901 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12876){var state_val_12877 = (state_12876[1]);if((state_val_12877 === 1))
{var inst_12853 = null;var state_12876__$1 = (function (){var statearr_12878 = state_12876;(statearr_12878[7] = inst_12853);
return statearr_12878;
})();var statearr_12879_12902 = state_12876__$1;(statearr_12879_12902[2] = null);
(statearr_12879_12902[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12877 === 2))
{var state_12876__$1 = state_12876;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12876__$1,4,ch);
} else
{if((state_val_12877 === 3))
{var inst_12873 = (state_12876[2]);var inst_12874 = cljs.core.async.close_BANG_.call(null,out);var state_12876__$1 = (function (){var statearr_12880 = state_12876;(statearr_12880[8] = inst_12873);
return statearr_12880;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12876__$1,inst_12874);
} else
{if((state_val_12877 === 4))
{var inst_12856 = (state_12876[9]);var inst_12856__$1 = (state_12876[2]);var inst_12857 = (inst_12856__$1 == null);var inst_12858 = cljs.core.not.call(null,inst_12857);var state_12876__$1 = (function (){var statearr_12881 = state_12876;(statearr_12881[9] = inst_12856__$1);
return statearr_12881;
})();if(inst_12858)
{var statearr_12882_12903 = state_12876__$1;(statearr_12882_12903[1] = 5);
} else
{var statearr_12883_12904 = state_12876__$1;(statearr_12883_12904[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12877 === 5))
{var inst_12853 = (state_12876[7]);var inst_12856 = (state_12876[9]);var inst_12860 = cljs.core._EQ_.call(null,inst_12856,inst_12853);var state_12876__$1 = state_12876;if(inst_12860)
{var statearr_12884_12905 = state_12876__$1;(statearr_12884_12905[1] = 8);
} else
{var statearr_12885_12906 = state_12876__$1;(statearr_12885_12906[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12877 === 6))
{var state_12876__$1 = state_12876;var statearr_12887_12907 = state_12876__$1;(statearr_12887_12907[2] = null);
(statearr_12887_12907[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12877 === 7))
{var inst_12871 = (state_12876[2]);var state_12876__$1 = state_12876;var statearr_12888_12908 = state_12876__$1;(statearr_12888_12908[2] = inst_12871);
(statearr_12888_12908[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12877 === 8))
{var inst_12853 = (state_12876[7]);var tmp12886 = inst_12853;var inst_12853__$1 = tmp12886;var state_12876__$1 = (function (){var statearr_12889 = state_12876;(statearr_12889[7] = inst_12853__$1);
return statearr_12889;
})();var statearr_12890_12909 = state_12876__$1;(statearr_12890_12909[2] = null);
(statearr_12890_12909[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12877 === 9))
{var inst_12856 = (state_12876[9]);var state_12876__$1 = state_12876;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12876__$1,11,out,inst_12856);
} else
{if((state_val_12877 === 10))
{var inst_12868 = (state_12876[2]);var state_12876__$1 = state_12876;var statearr_12891_12910 = state_12876__$1;(statearr_12891_12910[2] = inst_12868);
(statearr_12891_12910[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12877 === 11))
{var inst_12856 = (state_12876[9]);var inst_12865 = (state_12876[2]);var inst_12853 = inst_12856;var state_12876__$1 = (function (){var statearr_12892 = state_12876;(statearr_12892[10] = inst_12865);
(statearr_12892[7] = inst_12853);
return statearr_12892;
})();var statearr_12893_12911 = state_12876__$1;(statearr_12893_12911[2] = null);
(statearr_12893_12911[1] = 2);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12897 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12897[0] = state_machine__6178__auto__);
(statearr_12897[1] = 1);
return statearr_12897;
});
var state_machine__6178__auto____1 = (function (state_12876){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12876);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12898){if((e12898 instanceof Object))
{var ex__6181__auto__ = e12898;var statearr_12899_12912 = state_12876;(statearr_12899_12912[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12876);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12898;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12913 = state_12876;
state_12876 = G__12913;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12876){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12900 = f__6193__auto__.call(null);(statearr_12900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12901);
return statearr_12900;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___13048 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_13018){var state_val_13019 = (state_13018[1]);if((state_val_13019 === 1))
{var inst_12981 = (new Array(n));var inst_12982 = inst_12981;var inst_12983 = 0;var state_13018__$1 = (function (){var statearr_13020 = state_13018;(statearr_13020[7] = inst_12983);
(statearr_13020[8] = inst_12982);
return statearr_13020;
})();var statearr_13021_13049 = state_13018__$1;(statearr_13021_13049[2] = null);
(statearr_13021_13049[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 2))
{var state_13018__$1 = state_13018;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13018__$1,4,ch);
} else
{if((state_val_13019 === 3))
{var inst_13016 = (state_13018[2]);var state_13018__$1 = state_13018;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13018__$1,inst_13016);
} else
{if((state_val_13019 === 4))
{var inst_12986 = (state_13018[9]);var inst_12986__$1 = (state_13018[2]);var inst_12987 = (inst_12986__$1 == null);var inst_12988 = cljs.core.not.call(null,inst_12987);var state_13018__$1 = (function (){var statearr_13022 = state_13018;(statearr_13022[9] = inst_12986__$1);
return statearr_13022;
})();if(inst_12988)
{var statearr_13023_13050 = state_13018__$1;(statearr_13023_13050[1] = 5);
} else
{var statearr_13024_13051 = state_13018__$1;(statearr_13024_13051[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 5))
{var inst_12986 = (state_13018[9]);var inst_12991 = (state_13018[10]);var inst_12983 = (state_13018[7]);var inst_12982 = (state_13018[8]);var inst_12990 = (inst_12982[inst_12983] = inst_12986);var inst_12991__$1 = (inst_12983 + 1);var inst_12992 = (inst_12991__$1 < n);var state_13018__$1 = (function (){var statearr_13025 = state_13018;(statearr_13025[11] = inst_12990);
(statearr_13025[10] = inst_12991__$1);
return statearr_13025;
})();if(cljs.core.truth_(inst_12992))
{var statearr_13026_13052 = state_13018__$1;(statearr_13026_13052[1] = 8);
} else
{var statearr_13027_13053 = state_13018__$1;(statearr_13027_13053[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 6))
{var inst_12983 = (state_13018[7]);var inst_13004 = (inst_12983 > 0);var state_13018__$1 = state_13018;if(cljs.core.truth_(inst_13004))
{var statearr_13029_13054 = state_13018__$1;(statearr_13029_13054[1] = 12);
} else
{var statearr_13030_13055 = state_13018__$1;(statearr_13030_13055[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 7))
{var inst_13014 = (state_13018[2]);var state_13018__$1 = state_13018;var statearr_13031_13056 = state_13018__$1;(statearr_13031_13056[2] = inst_13014);
(statearr_13031_13056[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 8))
{var inst_12991 = (state_13018[10]);var inst_12982 = (state_13018[8]);var tmp13028 = inst_12982;var inst_12982__$1 = tmp13028;var inst_12983 = inst_12991;var state_13018__$1 = (function (){var statearr_13032 = state_13018;(statearr_13032[7] = inst_12983);
(statearr_13032[8] = inst_12982__$1);
return statearr_13032;
})();var statearr_13033_13057 = state_13018__$1;(statearr_13033_13057[2] = null);
(statearr_13033_13057[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 9))
{var inst_12982 = (state_13018[8]);var inst_12996 = cljs.core.vec.call(null,inst_12982);var state_13018__$1 = state_13018;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13018__$1,11,out,inst_12996);
} else
{if((state_val_13019 === 10))
{var inst_13002 = (state_13018[2]);var state_13018__$1 = state_13018;var statearr_13034_13058 = state_13018__$1;(statearr_13034_13058[2] = inst_13002);
(statearr_13034_13058[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 11))
{var inst_12998 = (state_13018[2]);var inst_12999 = (new Array(n));var inst_12982 = inst_12999;var inst_12983 = 0;var state_13018__$1 = (function (){var statearr_13035 = state_13018;(statearr_13035[7] = inst_12983);
(statearr_13035[8] = inst_12982);
(statearr_13035[12] = inst_12998);
return statearr_13035;
})();var statearr_13036_13059 = state_13018__$1;(statearr_13036_13059[2] = null);
(statearr_13036_13059[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 12))
{var inst_12982 = (state_13018[8]);var inst_13006 = cljs.core.vec.call(null,inst_12982);var state_13018__$1 = state_13018;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13018__$1,15,out,inst_13006);
} else
{if((state_val_13019 === 13))
{var state_13018__$1 = state_13018;var statearr_13037_13060 = state_13018__$1;(statearr_13037_13060[2] = null);
(statearr_13037_13060[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 14))
{var inst_13011 = (state_13018[2]);var inst_13012 = cljs.core.async.close_BANG_.call(null,out);var state_13018__$1 = (function (){var statearr_13038 = state_13018;(statearr_13038[13] = inst_13011);
return statearr_13038;
})();var statearr_13039_13061 = state_13018__$1;(statearr_13039_13061[2] = inst_13012);
(statearr_13039_13061[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13019 === 15))
{var inst_13008 = (state_13018[2]);var state_13018__$1 = state_13018;var statearr_13040_13062 = state_13018__$1;(statearr_13040_13062[2] = inst_13008);
(statearr_13040_13062[1] = 14);
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
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13044[0] = state_machine__6178__auto__);
(statearr_13044[1] = 1);
return statearr_13044;
});
var state_machine__6178__auto____1 = (function (state_13018){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13018);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13045){if((e13045 instanceof Object))
{var ex__6181__auto__ = e13045;var statearr_13046_13063 = state_13018;(statearr_13046_13063[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13018);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13045;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13064 = state_13018;
state_13018 = G__13064;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13018){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_13047 = f__6193__auto__.call(null);(statearr_13047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___13048);
return statearr_13047;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___13207 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_13177){var state_val_13178 = (state_13177[1]);if((state_val_13178 === 1))
{var inst_13136 = [];var inst_13137 = inst_13136;var inst_13138 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13177__$1 = (function (){var statearr_13179 = state_13177;(statearr_13179[7] = inst_13138);
(statearr_13179[8] = inst_13137);
return statearr_13179;
})();var statearr_13180_13208 = state_13177__$1;(statearr_13180_13208[2] = null);
(statearr_13180_13208[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13178 === 2))
{var state_13177__$1 = state_13177;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13177__$1,4,ch);
} else
{if((state_val_13178 === 3))
{var inst_13175 = (state_13177[2]);var state_13177__$1 = state_13177;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13177__$1,inst_13175);
} else
{if((state_val_13178 === 4))
{var inst_13141 = (state_13177[9]);var inst_13141__$1 = (state_13177[2]);var inst_13142 = (inst_13141__$1 == null);var inst_13143 = cljs.core.not.call(null,inst_13142);var state_13177__$1 = (function (){var statearr_13181 = state_13177;(statearr_13181[9] = inst_13141__$1);
return statearr_13181;
})();if(inst_13143)
{var statearr_13182_13209 = state_13177__$1;(statearr_13182_13209[1] = 5);
} else
{var statearr_13183_13210 = state_13177__$1;(statearr_13183_13210[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13178 === 5))
{var inst_13145 = (state_13177[10]);var inst_13138 = (state_13177[7]);var inst_13141 = (state_13177[9]);var inst_13145__$1 = f.call(null,inst_13141);var inst_13146 = cljs.core._EQ_.call(null,inst_13145__$1,inst_13138);var inst_13147 = cljs.core.keyword_identical_QMARK_.call(null,inst_13138,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13148 = (inst_13146) || (inst_13147);var state_13177__$1 = (function (){var statearr_13184 = state_13177;(statearr_13184[10] = inst_13145__$1);
return statearr_13184;
})();if(cljs.core.truth_(inst_13148))
{var statearr_13185_13211 = state_13177__$1;(statearr_13185_13211[1] = 8);
} else
{var statearr_13186_13212 = state_13177__$1;(statearr_13186_13212[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13178 === 6))
{var inst_13137 = (state_13177[8]);var inst_13162 = inst_13137.length;var inst_13163 = (inst_13162 > 0);var state_13177__$1 = state_13177;if(cljs.core.truth_(inst_13163))
{var statearr_13188_13213 = state_13177__$1;(statearr_13188_13213[1] = 12);
} else
{var statearr_13189_13214 = state_13177__$1;(statearr_13189_13214[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13178 === 7))
{var inst_13173 = (state_13177[2]);var state_13177__$1 = state_13177;var statearr_13190_13215 = state_13177__$1;(statearr_13190_13215[2] = inst_13173);
(statearr_13190_13215[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13178 === 8))
{var inst_13145 = (state_13177[10]);var inst_13137 = (state_13177[8]);var inst_13141 = (state_13177[9]);var inst_13150 = inst_13137.push(inst_13141);var tmp13187 = inst_13137;var inst_13137__$1 = tmp13187;var inst_13138 = inst_13145;var state_13177__$1 = (function (){var statearr_13191 = state_13177;(statearr_13191[11] = inst_13150);
(statearr_13191[7] = inst_13138);
(statearr_13191[8] = inst_13137__$1);
return statearr_13191;
})();var statearr_13192_13216 = state_13177__$1;(statearr_13192_13216[2] = null);
(statearr_13192_13216[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13178 === 9))
{var inst_13137 = (state_13177[8]);var inst_13153 = cljs.core.vec.call(null,inst_13137);var state_13177__$1 = state_13177;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13177__$1,11,out,inst_13153);
} else
{if((state_val_13178 === 10))
{var inst_13160 = (state_13177[2]);var state_13177__$1 = state_13177;var statearr_13193_13217 = state_13177__$1;(statearr_13193_13217[2] = inst_13160);
(statearr_13193_13217[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13178 === 11))
{var inst_13145 = (state_13177[10]);var inst_13141 = (state_13177[9]);var inst_13155 = (state_13177[2]);var inst_13156 = [];var inst_13157 = inst_13156.push(inst_13141);var inst_13137 = inst_13156;var inst_13138 = inst_13145;var state_13177__$1 = (function (){var statearr_13194 = state_13177;(statearr_13194[12] = inst_13155);
(statearr_13194[13] = inst_13157);
(statearr_13194[7] = inst_13138);
(statearr_13194[8] = inst_13137);
return statearr_13194;
})();var statearr_13195_13218 = state_13177__$1;(statearr_13195_13218[2] = null);
(statearr_13195_13218[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13178 === 12))
{var inst_13137 = (state_13177[8]);var inst_13165 = cljs.core.vec.call(null,inst_13137);var state_13177__$1 = state_13177;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13177__$1,15,out,inst_13165);
} else
{if((state_val_13178 === 13))
{var state_13177__$1 = state_13177;var statearr_13196_13219 = state_13177__$1;(statearr_13196_13219[2] = null);
(statearr_13196_13219[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13178 === 14))
{var inst_13170 = (state_13177[2]);var inst_13171 = cljs.core.async.close_BANG_.call(null,out);var state_13177__$1 = (function (){var statearr_13197 = state_13177;(statearr_13197[14] = inst_13170);
return statearr_13197;
})();var statearr_13198_13220 = state_13177__$1;(statearr_13198_13220[2] = inst_13171);
(statearr_13198_13220[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13178 === 15))
{var inst_13167 = (state_13177[2]);var state_13177__$1 = state_13177;var statearr_13199_13221 = state_13177__$1;(statearr_13199_13221[2] = inst_13167);
(statearr_13199_13221[1] = 14);
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
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13203[0] = state_machine__6178__auto__);
(statearr_13203[1] = 1);
return statearr_13203;
});
var state_machine__6178__auto____1 = (function (state_13177){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13177);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13204){if((e13204 instanceof Object))
{var ex__6181__auto__ = e13204;var statearr_13205_13222 = state_13177;(statearr_13205_13222[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13177);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13204;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13223 = state_13177;
state_13177 = G__13223;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13177){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_13206 = f__6193__auto__.call(null);(statearr_13206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___13207);
return statearr_13206;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map