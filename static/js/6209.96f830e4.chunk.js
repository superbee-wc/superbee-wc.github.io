"use strict";(self.webpackChunksuperbee_front=self.webpackChunksuperbee_front||[]).push([[6209],{56209:(t,e,i)=>{i.d(e,{RainbowConnector:()=>d});var n=i(49390),s=i(80581),o=i(84418),c=i(86458),a=i(66063),h=i(80708),r=i(37693),u=(i(92724),new WeakMap);class d extends a.s{constructor(t){const e={...{name:"Rainbow Wallet",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:r.g},...t.options};super({chains:t.chains,options:e,connectorStorage:t.connectorStorage}),(0,s._)(this,"id",c.w.rainbow),(0,n._)(this,u,{writable:!0,value:void 0}),(0,n.a)(this,u,e.UNSTABLE_shimOnConnectSelectAccount)}async connect(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var e,i;const a=await this.getProvider();if(!a)throw new o.a;this.setupListeners(),this.emit("message",{type:"connecting"});let r=null;if((0,n.b)(this,u)&&null!==(e=this.options)&&void 0!==e&&e.shimDisconnect&&!Boolean(this.connectorStorage.getItem(this.shimDisconnectKey))){r=await this.getAccount().catch((()=>null));if(!!r)try{await a.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(s){if(this.isUserRejectedRequestError(s))throw new o.U(s)}}if(!r){const t=await a.request({method:"eth_requestAccounts"});r=h.getAddress(t[0])}let d=await this.getChainId(),w=this.isChainUnsupported(d);if(t.chainId&&d!==t.chainId)try{await this.switchChain(t.chainId),d=t.chainId,w=this.isChainUnsupported(t.chainId)}catch(c){console.error("Could not switch to chain id : ".concat(t.chainId),c)}null!==(i=this.options)&&void 0!==i&&i.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const l={chain:{id:d,unsupported:w},provider:a,account:r};return this.emit("connect",l),l}catch(s){if(this.isUserRejectedRequestError(s))throw new o.U(s);if(-32002===s.code)throw new o.R(s);throw s}}}}}]);