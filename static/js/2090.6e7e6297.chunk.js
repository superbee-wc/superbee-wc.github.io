"use strict";(self.webpackChunksuperbee_front=self.webpackChunksuperbee_front||[]).push([[2090],{32090:function(t,r,e){e.r(r),e.d(r,{Marketplace:function(){return W}});var n=e(93433),a=e(74165),s=e(15861),c=e(15671),i=e(43144),o=e(92609),u=e(44540),p=e(29439),d=e(25025),f=e(70332),l=e(8455),h=e(19560),v=e(6321),g=e(81895),m=e(28552),w=e(39707),x=e(18383),k=e(17389),y=function(t){return t[t.Direct=0]="Direct",t[t.Auction=1]="Auction",t}({}),b=function(){function t(r,e){var n=this;(0,c.Z)(this,t),(0,o._)(this,"contractWrapper",void 0),(0,o._)(this,"storage",void 0),(0,o._)(this,"createListing",(0,u.d4)(function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r){var e,s,c,i,o,p;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(0,u.d8)(r),t.next=3,(0,u.cq)(r.assetContractAddress);case 3:return e=t.sent,t.next=6,(0,u.cq)(r.currencyContractAddress);case 6:return s=t.sent,t.t0=u.d9,t.t1=n.contractWrapper,t.t2=n.getAddress(),t.t3=e,t.t4=r.tokenId,t.next=14,n.contractWrapper.getSignerAddress();case 14:return t.t5=t.sent,t.next=17,(0,t.t0)(t.t1,t.t2,t.t3,t.t4,t.t5);case 17:return t.next=19,(0,u.b9)(n.contractWrapper.getProvider(),r.buyoutPricePerToken,s);case 19:return c=t.sent,i=Math.floor(r.startTimestamp.getTime()/1e3),t.next=23,n.contractWrapper.getProvider().getBlock("latest");case 23:return o=t.sent,p=o.timestamp,i<p&&(i=p),t.abrupt("return",u.aV.fromContractWrapper({contractWrapper:n.contractWrapper,method:"createListing",args:[{assetContract:e,tokenId:r.tokenId,buyoutPricePerToken:c,currencyToAccept:(0,u.b8)(s),listingType:y.Direct,quantityToList:r.quantity,reservePricePerToken:c,secondsUntilEndTime:r.listingDurationInSeconds,startTime:h.O$.from(i)}],parse:function(t){return{id:n.contractWrapper.parseLogs("ListingAdded",null===t||void 0===t?void 0:t.logs)[0].args.listingId,receipt:t}}}));case 27:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}())),(0,o._)(this,"createListingsBatch",(0,u.d4)(function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r){var e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(r.map(function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r){var e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createListing.prepare(r);case 2:return e=t.sent,t.abrupt("return",e.encode());case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()));case 2:return e=t.sent,t.abrupt("return",u.aV.fromContractWrapper({contractWrapper:n.contractWrapper,method:"multicall",args:[e],parse:function(t){return n.contractWrapper.parseLogs("ListingAdded",null===t||void 0===t?void 0:t.logs).map((function(r){return{id:r.args.listingId,receipt:t}}))}}));case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}())),(0,o._)(this,"makeOffer",(0,u.d4)(function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r,e,s,c,i){var o,p,d,f,l;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,u.b7)(s)){t.next=2;break}throw new Error("You must use the wrapped native token address when making an offer with a native token");case 2:return t.next=4,(0,u.b9)(n.contractWrapper.getProvider(),c,s);case 4:return o=t.sent,t.prev=5,t.next=8,n.getListing(r);case 8:t.next=14;break;case 10:throw t.prev=10,t.t0=t.catch(5),console.error("Failed to get listing, err =",t.t0),new Error("Error getting the listing with id ".concat(r));case 14:return p=h.O$.from(e),d=h.O$.from(o).mul(p),t.next=18,n.contractWrapper.getCallOverrides();case 18:if(t.t1=t.sent,t.t1){t.next=21;break}t.t1={};case 21:return f=t.t1,t.next=24,(0,u.bc)(n.contractWrapper,d,s,f);case 24:return l=v.Bz,i&&(l=h.O$.from(Math.floor(i.getTime()/1e3))),t.abrupt("return",u.aV.fromContractWrapper({contractWrapper:n.contractWrapper,method:"offer",args:[r,e,s,o,l],overrides:f}));case 27:case"end":return t.stop()}}),t,null,[[5,10]])})));return function(r,e,n,a,s){return t.apply(this,arguments)}}())),(0,o._)(this,"acceptOffer",(0,u.d4)(function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r,e){var s,c;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.validateListing(h.O$.from(r));case 2:return t.next=4,(0,u.cq)(e);case 4:return s=t.sent,t.next=7,n.contractWrapper.readContract.offers(r,s);case 7:return c=t.sent,t.abrupt("return",u.aV.fromContractWrapper({contractWrapper:n.contractWrapper,method:"acceptOffer",args:[r,s,c.currency,c.pricePerToken]}));case 9:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}())),(0,o._)(this,"buyoutListing",(0,u.d4)(function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r,e,s){var c,i,o,p,d,f,l,v;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.validateListing(h.O$.from(r));case 2:return c=t.sent,t.next=5,n.isStillValidListing(c,e);case 5:if(i=t.sent,o=i.valid,p=i.error,o){t.next=10;break}throw new Error("Listing ".concat(r," is no longer valid. ").concat(p));case 10:if(!s){t.next=14;break}t.t0=s,t.next=17;break;case 14:return t.next=16,n.contractWrapper.getSignerAddress();case 16:t.t0=t.sent;case 17:return d=t.t0,f=h.O$.from(e),l=h.O$.from(c.buyoutPrice).mul(f),t.next=22,n.contractWrapper.getCallOverrides();case 22:if(t.t1=t.sent,t.t1){t.next=25;break}t.t1={};case 25:return v=t.t1,t.next=28,(0,u.bc)(n.contractWrapper,l,c.currencyContractAddress,v);case 28:return t.abrupt("return",u.aV.fromContractWrapper({contractWrapper:n.contractWrapper,method:"buy",args:[r,d,f,c.currencyContractAddress,l],overrides:v}));case 29:case"end":return t.stop()}}),t)})));return function(r,e,n){return t.apply(this,arguments)}}())),(0,o._)(this,"updateListing",(0,u.d4)(function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=u.aV,t.t1=n.contractWrapper,t.t2=r.id,t.t3=r.quantity,t.t4=r.buyoutPrice,t.t5=r.buyoutPrice,t.next=8,(0,u.cq)(r.currencyContractAddress);case 8:return t.t6=t.sent,t.t7=r.startTimeInSeconds,t.t8=r.secondsUntilEnd,t.t9=[t.t2,t.t3,t.t4,t.t5,t.t6,t.t7,t.t8],t.t10={contractWrapper:t.t1,method:"updateListing",args:t.t9},t.abrupt("return",t.t0.fromContractWrapper.call(t.t0,t.t10));case 14:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}())),(0,o._)(this,"cancelListing",(0,u.d4)(function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u.aV.fromContractWrapper({contractWrapper:n.contractWrapper,method:"cancelDirectListing",args:[r]}));case 1:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}())),this.contractWrapper=r,this.storage=e}return(0,i.Z)(t,[{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"getListing",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r){var e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.readContract.listings(r);case 2:if((e=t.sent).assetContract!==g.d){t.next=5;break}throw new u.bw(this.getAddress(),r.toString());case 5:if(e.listingType===y.Direct){t.next=7;break}throw new u.bx(this.getAddress(),r.toString(),"Auction","Direct");case 7:return t.next=9,this.mapListing(e);case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"getActiveOffer",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r,e){var n;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.validateListing(h.O$.from(r));case 2:return(0,k.Z)(m.isAddress(e),"Address must be a valid address"),t.t0=this.contractWrapper.readContract,t.t1=r,t.next=7,(0,u.cq)(e);case 7:return t.t2=t.sent,t.next=10,t.t0.offers.call(t.t0,t.t1,t.t2);case 10:if((n=t.sent).offeror!==g.d){t.next=13;break}return t.abrupt("return",void 0);case 13:return t.next=15,(0,u.d5)(this.contractWrapper.getProvider(),h.O$.from(r),n);case 15:return t.abrupt("return",t.sent);case 16:case"end":return t.stop()}}),t,this)})));return function(r,e){return t.apply(this,arguments)}}()},{key:"validateListing",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.getListing(r);case 3:return t.abrupt("return",t.sent);case 6:throw t.prev=6,t.t0=t.catch(0),console.error("Error getting the listing with id ".concat(r)),t.t0;case 10:case"end":return t.stop()}}),t,this,[[0,6]])})));return function(r){return t.apply(this,arguments)}}()},{key:"mapListing",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=r.assetContract,t.t1=h.O$.from(r.buyoutPricePerToken),t.t2=r.currency,t.next=5,(0,u.bb)(this.contractWrapper.getProvider(),r.currency,r.buyoutPricePerToken);case 5:return t.t3=t.sent,t.t4=r.listingId.toString(),t.t5=r.tokenId,t.t6=r.quantity,t.t7=r.startTime,t.next=12,(0,u.d6)(r.assetContract,this.contractWrapper.getProvider(),r.tokenId,this.storage);case 12:return t.t8=t.sent,t.t9=r.endTime,t.t10=r.tokenOwner,t.t11=y.Direct,t.abrupt("return",{assetContractAddress:t.t0,buyoutPrice:t.t1,currencyContractAddress:t.t2,buyoutCurrencyValuePerToken:t.t3,id:t.t4,tokenId:t.t5,quantity:t.t6,startTimeInSeconds:t.t7,asset:t.t8,secondsUntilEnd:t.t9,sellerAddress:t.t10,type:t.t11});case 17:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"isStillValidListing",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r,e){var n,s,c,i,o,p,h,v,g,m,x;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.d7)(this.contractWrapper.getProvider(),this.getAddress(),r.assetContractAddress,r.tokenId,r.sellerAddress);case 2:if(t.sent){t.next=5;break}return t.abrupt("return",{valid:!1,error:"Token '".concat(r.tokenId,"' from contract '").concat(r.assetContractAddress,"' is not approved for transfer")});case 5:return n=this.contractWrapper.getProvider(),s=new w.CH(r.assetContractAddress,d,n),t.next=9,s.supportsInterface(u.cz);case 9:return c=t.sent,t.next=12,s.supportsInterface(u.cA);case 12:if(i=t.sent,!c){t.next=27;break}return p=new w.CH(r.assetContractAddress,f,n),t.prev=15,t.next=18,p.ownerOf(r.tokenId);case 18:h=t.sent,t.next=23;break;case 21:t.prev=21,t.t0=t.catch(15);case 23:return v=(null===(o=h)||void 0===o?void 0:o.toLowerCase())===r.sellerAddress.toLowerCase(),t.abrupt("return",{valid:v,error:v?void 0:"Seller is not the owner of Token '".concat(r.tokenId,"' from contract '").concat(r.assetContractAddress," anymore'")});case 27:if(!i){t.next=36;break}return g=new w.CH(r.assetContractAddress,l,n),t.next=31,g.balanceOf(r.sellerAddress,r.tokenId);case 31:return m=t.sent,x=m.gte(e||r.quantity),t.abrupt("return",{valid:x,error:x?void 0:"Seller does not have enough balance of Token '".concat(r.tokenId,"' from contract '").concat(r.assetContractAddress," to fulfill the listing")});case 36:return t.abrupt("return",{valid:!1,error:"Contract does not implement ERC 1155 or ERC 721."});case 37:case"end":return t.stop()}}),t,this,[[15,21]])})));return function(r,e){return t.apply(this,arguments)}}()}]),t}(),Z=function(){function t(r,e){var n=this;(0,c.Z)(this,t),(0,o._)(this,"contractWrapper",void 0),(0,o._)(this,"storage",void 0),(0,o._)(this,"encoder",void 0),(0,o._)(this,"createListing",(0,u.d4)(function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r){var e,s,c,i,o,p,d;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(0,u.d8)(r),t.next=3,(0,u.cq)(r.assetContractAddress);case 3:return e=t.sent,t.next=6,(0,u.cq)(r.currencyContractAddress);case 6:return s=t.sent,t.t0=u.d9,t.t1=n.contractWrapper,t.t2=n.getAddress(),t.t3=e,t.t4=r.tokenId,t.next=14,n.contractWrapper.getSignerAddress();case 14:return t.t5=t.sent,t.next=17,(0,t.t0)(t.t1,t.t2,t.t3,t.t4,t.t5);case 17:return t.next=19,(0,u.b9)(n.contractWrapper.getProvider(),r.buyoutPricePerToken,s);case 19:return c=t.sent,t.next=22,(0,u.b9)(n.contractWrapper.getProvider(),r.reservePricePerToken,s);case 22:return i=t.sent,o=Math.floor(r.startTimestamp.getTime()/1e3),t.next=26,n.contractWrapper.getProvider().getBlock("latest");case 26:return p=t.sent,d=p.timestamp,o<d&&(o=d),t.abrupt("return",u.aV.fromContractWrapper({contractWrapper:n.contractWrapper,method:"createListing",args:[{assetContract:e,tokenId:r.tokenId,buyoutPricePerToken:c,currencyToAccept:(0,u.b8)(s),listingType:y.Auction,quantityToList:r.quantity,reservePricePerToken:i,secondsUntilEndTime:r.listingDurationInSeconds,startTime:h.O$.from(o)}],parse:function(t){return{id:n.contractWrapper.parseLogs("ListingAdded",null===t||void 0===t?void 0:t.logs)[0].args.listingId,receipt:t}}}));case 30:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}())),(0,o._)(this,"createListingsBatch",(0,u.d4)(function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r){var e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(r.map(function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r){var e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createListing.prepare(r);case 2:return e=t.sent,t.abrupt("return",e.encode());case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()));case 2:return e=t.sent,t.abrupt("return",u.aV.fromContractWrapper({contractWrapper:n.contractWrapper,method:"multicall",args:[e],parse:function(t){return n.contractWrapper.parseLogs("ListingAdded",null===t||void 0===t?void 0:t.logs).map((function(r){return{id:r.args.listingId,receipt:t}}))}}));case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}())),(0,o._)(this,"buyoutListing",(0,u.d4)(function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r){var e,s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.validateListing(h.O$.from(r));case 2:return e=t.sent,t.next=5,(0,u.ba)(n.contractWrapper.getProvider(),e.currencyContractAddress);case 5:return s=t.sent,t.abrupt("return",n.makeBid.prepare(r,x.formatUnits(e.buyoutPrice,s.decimals)));case 7:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}())),(0,o._)(this,"makeBid",(0,u.d4)(function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r,e){var s,c,i,o,p,d,f,l,g,m;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.validateListing(h.O$.from(r));case 2:return s=t.sent,t.next=5,(0,u.b9)(n.contractWrapper.getProvider(),e,s.currencyContractAddress);case 5:if(!(c=t.sent).eq(h.O$.from(0))){t.next=8;break}throw new Error("Cannot make a bid with 0 value");case 8:return t.next=10,n.contractWrapper.readContract.bidBufferBps();case 10:return i=t.sent,t.next=13,n.getWinningBid(r);case 13:return(o=t.sent)?(p=(0,u.da)(o.pricePerToken,c,i),(0,k.Z)(p,"Bid price is too low based on the current winning bid and the bid buffer")):(d=c,f=h.O$.from(s.reservePrice),(0,k.Z)(d.gte(f),"Bid price is too low based on reserve price")),l=h.O$.from(s.quantity),g=c.mul(l),t.next=19,n.contractWrapper.getCallOverrides();case 19:if(t.t0=t.sent,t.t0){t.next=22;break}t.t0={};case 22:return m=t.t0,t.next=25,(0,u.bc)(n.contractWrapper,g,s.currencyContractAddress,m);case 25:return t.abrupt("return",u.aV.fromContractWrapper({contractWrapper:n.contractWrapper,method:"offer",args:[r,s.quantity,s.currencyContractAddress,c,v.Bz],overrides:m}));case 26:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}())),(0,o._)(this,"cancelListing",(0,u.d4)(function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r){var e,s,c,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.validateListing(h.O$.from(r));case 2:return e=t.sent,s=h.O$.from(Math.floor(Date.now()/1e3)),c=h.O$.from(e.startTimeInEpochSeconds),t.next=7,n.contractWrapper.readContract.winningBid(r);case 7:if(i=t.sent,!s.gt(c)||i.offeror===g.d){t.next=10;break}throw new u.bu(r.toString());case 10:return t.t0=u.aV,t.t1=n.contractWrapper,t.t2=h.O$.from(r),t.next=15,n.contractWrapper.getSignerAddress();case 15:return t.t3=t.sent,t.t4=[t.t2,t.t3],t.t5={contractWrapper:t.t1,method:"closeAuction",args:t.t4},t.abrupt("return",t.t0.fromContractWrapper.call(t.t0,t.t5));case 19:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}())),(0,o._)(this,"closeListing",(0,u.d4)(function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r,e){var s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=4;break}return t.next=3,n.contractWrapper.getSignerAddress();case 3:e=t.sent;case 4:return t.next=6,n.validateListing(h.O$.from(r));case 6:return s=t.sent,t.prev=7,t.abrupt("return",u.aV.fromContractWrapper({contractWrapper:n.contractWrapper,method:"closeAuction",args:[h.O$.from(r),e]}));case 11:if(t.prev=11,t.t0=t.catch(7),!t.t0.message.includes("cannot close auction before it has ended")){t.next=17;break}throw new u.bA(r.toString(),s.endTimeInEpochSeconds.toString());case 17:throw t.t0;case 18:case"end":return t.stop()}}),t,null,[[7,11]])})));return function(r,e){return t.apply(this,arguments)}}())),(0,o._)(this,"executeSale",(0,u.d4)(function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r){var e,s,c,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.validateListing(h.O$.from(r));case 2:return e=t.sent,t.prev=3,t.next=6,n.getWinningBid(r);case 6:return s=t.sent,(0,k.Z)(s,"No winning bid found"),c=n.encoder.encode("closeAuction",[r,e.sellerAddress]),i=n.encoder.encode("closeAuction",[r,s.buyerAddress]),t.abrupt("return",u.aV.fromContractWrapper({contractWrapper:n.contractWrapper,method:"multicall",args:[c,i]}));case 13:if(t.prev=13,t.t0=t.catch(3),!t.t0.message.includes("cannot close auction before it has ended")){t.next=19;break}throw new u.bA(r.toString(),e.endTimeInEpochSeconds.toString());case 19:throw t.t0;case 20:case"end":return t.stop()}}),t,null,[[3,13]])})));return function(r){return t.apply(this,arguments)}}())),(0,o._)(this,"updateListing",(0,u.d4)(function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u.aV.fromContractWrapper({contractWrapper:n.contractWrapper,method:"updateListing",args:[r.id,r.quantity,r.reservePrice,r.buyoutPrice,r.currencyContractAddress,r.startTimeInEpochSeconds,r.endTimeInEpochSeconds]}));case 1:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}())),this.contractWrapper=r,this.storage=e,this.encoder=new u.af(r)}return(0,i.Z)(t,[{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"getListing",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r){var e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.readContract.listings(r);case 2:if((e=t.sent).listingId.toString()===r.toString()){t.next=5;break}throw new u.bw(this.getAddress(),r.toString());case 5:if(e.listingType===y.Auction){t.next=7;break}throw new u.bx(this.getAddress(),r.toString(),"Direct","Auction");case 7:return t.next=9,this.mapListing(e);case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"getWinningBid",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r){var e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.validateListing(h.O$.from(r));case 2:return t.next=4,this.contractWrapper.readContract.winningBid(r);case 4:if((e=t.sent).offeror!==g.d){t.next=7;break}return t.abrupt("return",void 0);case 7:return t.next=9,(0,u.d5)(this.contractWrapper.getProvider(),h.O$.from(r),e);case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"getWinner",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r){var e,n,s,c,i,o;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.validateListing(h.O$.from(r));case 2:return e=t.sent,t.next=5,this.contractWrapper.readContract.winningBid(r);case 5:if(n=t.sent,s=h.O$.from(Math.floor(Date.now()/1e3)),c=h.O$.from(e.endTimeInEpochSeconds),!s.gt(c)||n.offeror===g.d){t.next=10;break}return t.abrupt("return",n.offeror);case 10:return t.next=12,this.contractWrapper.readContract.queryFilter(this.contractWrapper.readContract.filters.AuctionClosed());case 12:if(i=t.sent,o=i.find((function(t){return t.args.listingId.eq(h.O$.from(r))}))){t.next=16;break}throw new Error("Could not find auction with listingId ".concat(r," in closed auctions"));case 16:return t.abrupt("return",o.args.winningBidder);case 17:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"getBidBufferBps",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.contractWrapper.readContract.bidBufferBps());case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getMinimumNextBid",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r){var e,n,s,c,i,o,d;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Promise,t.t1=this.getBidBufferBps(),t.t2=this.getWinningBid(r),t.next=5,this.validateListing(h.O$.from(r));case 5:return t.t3=t.sent,t.t4=[t.t1,t.t2,t.t3],t.next=9,t.t0.all.call(t.t0,t.t4);case 9:return e=t.sent,n=(0,p.Z)(e,3),s=n[0],c=n[1],i=n[2],o=c?c.currencyValue.value:i.reservePrice,d=o.add(o.mul(s).div(1e4)),t.abrupt("return",(0,u.bb)(this.contractWrapper.getProvider(),i.currencyContractAddress,d));case 17:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"validateListing",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.getListing(r);case 3:return t.abrupt("return",t.sent);case 6:throw t.prev=6,t.t0=t.catch(0),console.error("Error getting the listing with id ".concat(r)),t.t0;case 10:case"end":return t.stop()}}),t,this,[[0,6]])})));return function(r){return t.apply(this,arguments)}}()},{key:"mapListing",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=r.assetContract,t.t1=h.O$.from(r.buyoutPricePerToken),t.t2=r.currency,t.next=5,(0,u.bb)(this.contractWrapper.getProvider(),r.currency,r.buyoutPricePerToken);case 5:return t.t3=t.sent,t.t4=r.listingId.toString(),t.t5=r.tokenId,t.t6=r.quantity,t.t7=r.startTime,t.next=12,(0,u.d6)(r.assetContract,this.contractWrapper.getProvider(),r.tokenId,this.storage);case 12:return t.t8=t.sent,t.next=15,(0,u.bb)(this.contractWrapper.getProvider(),r.currency,r.reservePricePerToken);case 15:return t.t9=t.sent,t.t10=h.O$.from(r.reservePricePerToken),t.t11=r.endTime,t.t12=r.tokenOwner,t.t13=y.Auction,t.abrupt("return",{assetContractAddress:t.t0,buyoutPrice:t.t1,currencyContractAddress:t.t2,buyoutCurrencyValuePerToken:t.t3,id:t.t4,tokenId:t.t5,quantity:t.t6,startTimeInEpochSeconds:t.t7,asset:t.t8,reservePriceCurrencyValuePerToken:t.t9,reservePrice:t.t10,endTimeInEpochSeconds:t.t11,sellerAddress:t.t12,type:t.t13});case 21:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()}]),t}(),W=(e(64166),e(60862),e(89806),e(79955),e(87962),e(7605),function(){function t(r,e,n){var i=this;(0,c.Z)(this,t);var p=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},d=arguments.length>4?arguments[4]:void 0,f=arguments.length>5?arguments[5]:void 0,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new u.db(r,e,d,p);(0,o._)(this,"abi",void 0),(0,o._)(this,"contractWrapper",void 0),(0,o._)(this,"storage",void 0),(0,o._)(this,"encoder",void 0),(0,o._)(this,"events",void 0),(0,o._)(this,"estimator",void 0),(0,o._)(this,"platformFees",void 0),(0,o._)(this,"metadata",void 0),(0,o._)(this,"app",void 0),(0,o._)(this,"roles",void 0),(0,o._)(this,"interceptor",void 0),(0,o._)(this,"direct",void 0),(0,o._)(this,"auction",void 0),(0,o._)(this,"_chainId",void 0),(0,o._)(this,"getAll",this.getAllListings),(0,o._)(this,"buyoutListing",(0,u.d4)(function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r,e,n){var s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.contractWrapper.readContract.listings(r);case 2:if((s=t.sent).listingId.toString()===r.toString()){t.next=5;break}throw new u.bw(i.getAddress(),r.toString());case 5:t.t0=s.listingType,t.next=t.t0===y.Direct?8:t.t0===y.Auction?12:15;break;case 8:return(0,k.Z)(void 0!==e,"quantityDesired is required when buying out a direct listing"),t.next=11,i.direct.buyoutListing.prepare(r,e,n);case 11:case 14:return t.abrupt("return",t.sent);case 12:return t.next=14,i.auction.buyoutListing.prepare(r);case 15:throw Error("Unknown listing type: ".concat(s.listingType));case 16:case"end":return t.stop()}}),t)})));return function(r,e,n){return t.apply(this,arguments)}}())),(0,o._)(this,"makeOffer",(0,u.d4)(function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r,e,n){var s,c;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.contractWrapper.readContract.listings(r);case 2:if((s=t.sent).listingId.toString()===r.toString()){t.next=5;break}throw new u.bw(i.getAddress(),r.toString());case 5:return t.next=7,i.contractWrapper.getChainID();case 7:c=t.sent,t.t0=s.listingType,t.next=t.t0===y.Direct?11:t.t0===y.Auction?15:18;break;case 11:return(0,k.Z)(n,"quantity is required when making an offer on a direct listing"),t.next=14,i.direct.makeOffer.prepare(r,n,(0,u.b7)(s.currency)?u.cC[c].wrapped.address:s.currency,e);case 14:case 17:return t.abrupt("return",t.sent);case 15:return t.next=17,i.auction.makeBid.prepare(r,e);case 18:throw Error("Unknown listing type: ".concat(s.listingType));case 19:case"end":return t.stop()}}),t)})));return function(r,e,n){return t.apply(this,arguments)}}())),(0,o._)(this,"setBidBufferBps",(0,u.d4)(function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r){var e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=i.roles,t.t1=["admin"],t.next=4,i.contractWrapper.getSignerAddress();case 4:return t.t2=t.sent,t.next=7,t.t0.verify.call(t.t0,t.t1,t.t2);case 7:return t.next=9,i.getTimeBufferInSeconds();case 9:return e=t.sent,t.abrupt("return",u.aV.fromContractWrapper({contractWrapper:i.contractWrapper,method:"setAuctionBuffers",args:[e,h.O$.from(r)]}));case 11:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}())),(0,o._)(this,"setTimeBufferInSeconds",(0,u.d4)(function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r){var e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=i.roles,t.t1=["admin"],t.next=4,i.contractWrapper.getSignerAddress();case 4:return t.t2=t.sent,t.next=7,t.t0.verify.call(t.t0,t.t1,t.t2);case 7:return t.next=9,i.getBidBufferBps();case 9:return e=t.sent,t.abrupt("return",u.aV.fromContractWrapper({contractWrapper:i.contractWrapper,method:"setAuctionBuffers",args:[h.O$.from(r),e]}));case 11:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}())),(0,o._)(this,"allowListingFromSpecificAssetOnly",(0,u.d4)(function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r){var e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],t.next=3,i.roles.get("asset");case 3:return t.sent.includes(g.d)&&e.push(i.encoder.encode("revokeRole",[(0,u.bH)("asset"),g.d])),e.push(i.encoder.encode("grantRole",[(0,u.bH)("asset"),r])),t.abrupt("return",u.aV.fromContractWrapper({contractWrapper:i.contractWrapper,method:"multicall",args:[e]}));case 7:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}())),(0,o._)(this,"allowListingFromAnyAsset",(0,u.d4)((0,s.Z)((0,a.Z)().mark((function t(){var r,e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],t.next=3,i.roles.get("asset");case 3:for(e in t.sent)r.push(i.encoder.encode("revokeRole",[(0,u.bH)("asset"),e]));return r.push(i.encoder.encode("grantRole",[(0,u.bH)("asset"),g.d])),t.abrupt("return",u.aV.fromContractWrapper({contractWrapper:i.contractWrapper,method:"multicall",args:[r]}));case 7:case"end":return t.stop()}}),t)}))))),this._chainId=f,this.abi=u.e.parse(d||[]),this.contractWrapper=l,this.storage=n,this.metadata=new u.ag(this.contractWrapper,u.dq,this.storage),this.app=new u.a$(this.contractWrapper,this.metadata,this.storage),this.roles=new u.ah(this.contractWrapper,t.contractRoles),this.encoder=new u.af(this.contractWrapper),this.estimator=new u.aP(this.contractWrapper),this.direct=new b(this.contractWrapper,this.storage),this.auction=new Z(this.contractWrapper,this.storage),this.events=new u.aQ(this.contractWrapper),this.platformFees=new u.aS(this.contractWrapper),this.interceptor=new u.aR(this.contractWrapper)}return(0,i.Z)(t,[{key:"chainId",get:function(){return this._chainId}},{key:"onNetworkUpdated",value:function(t){this.contractWrapper.updateSignerOrProvider(t)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"getListing",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r){var e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.readContract.listings(r);case 2:if((e=t.sent).assetContract!==g.d){t.next=5;break}throw new u.bw(this.getAddress(),r.toString());case 5:t.t0=e.listingType,t.next=t.t0===y.Auction?8:t.t0===y.Direct?11:14;break;case 8:return t.next=10,this.auction.mapListing(e);case 10:case 13:return t.abrupt("return",t.sent);case 11:return t.next=13,this.direct.mapListing(e);case 14:throw new Error("Unknown listing type: ".concat(e.listingType));case 15:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"getActiveListings",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r){var e,n,s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getAllListingsNoFilter(!0);case 2:return e=t.sent,n=this.applyFilter(e,r),s=h.O$.from(Math.floor(Date.now()/1e3)),t.abrupt("return",n.filter((function(t){return t.type===y.Auction&&h.O$.from(t.endTimeInEpochSeconds).gt(s)&&h.O$.from(t.startTimeInEpochSeconds).lte(s)||t.type===y.Direct&&t.quantity>0})));case 6:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"getAllListings",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r){var e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getAllListingsNoFilter(!1);case 2:return e=t.sent,t.abrupt("return",this.applyFilter(e,r));case 4:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"getTotalCount",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.readContract.totalListings();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"isRestrictedToListerRoleOnly",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(){var r;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.readContract.hasRole((0,u.bH)("lister"),g.d);case 2:return r=t.sent,t.abrupt("return",!r);case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getBidBufferBps",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.contractWrapper.readContract.bidBufferBps());case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getTimeBufferInSeconds",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.contractWrapper.readContract.timeBuffer());case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getOffers",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r){var e,n=this;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.events.getEvents("NewOffer",{order:"desc",filters:{listingId:r}});case 2:return e=t.sent,t.next=5,Promise.all(e.map(function(){var t=(0,s.Z)((0,a.Z)().mark((function t(e){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.d5)(n.contractWrapper.getProvider(),h.O$.from(r),{quantityWanted:e.data.quantityWanted,pricePerToken:e.data.quantityWanted.gt(0)?e.data.totalOfferAmount.div(e.data.quantityWanted):e.data.totalOfferAmount,currency:e.data.currency,offeror:e.data.offeror});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()));case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"getAllListingsNoFilter",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r){var e,n=this;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Promise,t.t1=Array,t.t2=Array,t.next=5,this.contractWrapper.readContract.totalListings();case 5:return t.t3=t.sent.toNumber(),t.t4=(0,t.t2)(t.t3).keys(),t.t5=t.t1.from.call(t.t1,t.t4).map(function(){var t=(0,s.Z)((0,a.Z)().mark((function t(e){var s,c;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.getListing(e);case 3:s=t.sent,t.next=14;break;case 6:if(t.prev=6,t.t0=t.catch(0),!(t.t0 instanceof u.bw)){t.next=12;break}return t.abrupt("return",void 0);case 12:return console.warn("Failed to get listing ".concat(e,"' - skipping. Try 'marketplace.getListing(").concat(e,")' to get the underlying error.")),t.abrupt("return",void 0);case 14:if(s.type!==y.Auction){t.next=16;break}return t.abrupt("return",s);case 16:if(!r){t.next=23;break}return t.next=19,n.direct.isStillValidListing(s);case 19:if(c=t.sent,c.valid){t.next=23;break}return t.abrupt("return",void 0);case 23:return t.abrupt("return",s);case 24:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(r){return t.apply(this,arguments)}}()),t.next=10,t.t0.all.call(t.t0,t.t5);case 10:return e=t.sent,t.abrupt("return",e.filter((function(t){return void 0!==t})));case 12:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"applyFilter",value:function(t,r){var e=(0,n.Z)(t),a=h.O$.from((null===r||void 0===r?void 0:r.start)||0).toNumber(),s=h.O$.from((null===r||void 0===r?void 0:r.count)||o.c).toNumber();return r&&(r.seller&&(e=e.filter((function(t){var e;return t.sellerAddress.toString().toLowerCase()===(null===r||void 0===r||null===(e=r.seller)||void 0===e?void 0:e.toString().toLowerCase())}))),r.tokenContract&&(e=e.filter((function(t){var e;return t.assetContractAddress.toString().toLowerCase()===(null===r||void 0===r||null===(e=r.tokenContract)||void 0===e?void 0:e.toString().toLowerCase())}))),void 0!==r.tokenId&&(e=e.filter((function(t){var e;return t.tokenId.toString()===(null===r||void 0===r||null===(e=r.tokenId)||void 0===e?void 0:e.toString())}))),e=(e=e.filter((function(t,r){return r>=a}))).slice(0,s)),e}},{key:"prepare",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r,e,n){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u.aV.fromContractWrapper({contractWrapper:this.contractWrapper,method:r,args:e,overrides:n}));case 1:case"end":return t.stop()}}),t,this)})));return function(r,e,n){return t.apply(this,arguments)}}()},{key:"call",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(r,e,n){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.contractWrapper.call(r,e,n));case 1:case"end":return t.stop()}}),t,this)})));return function(r,e,n){return t.apply(this,arguments)}}()}]),t}());(0,o._)(W,"contractRoles",u.dr)}}]);