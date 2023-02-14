/*
 * eiam-console - Employee Identity and Access Management Program
 * Copyright © 2020-2023 TopIAM (support@topiam.cn)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
"use strict";(self.webpackChunktopiam_console=self.webpackChunktopiam_console||[]).push([[8724],{51019:function(ze,ae,r){r.r(ae),r.d(ae,{default:function(){return Pr}});var le=r(76091),I=r.n(le),oe=r(84019),u=r.n(oe),ne=r(32061),b=r.n(ne),J=r(7863),j=r.n(J),h=r(9715),k=r(75109),Le=r(75465),de=r(81198),Me=r(55222),be=r(61327),te=r(50620),He=r(40746),Ne=r(78035),ce=r(15457),Q=r(46673),Ee=r(869),Ie=r(82769),Ue=r(97207),d=r(79685),D=r(70695),We=r(95926),V;(function(s){s.config="config",s.sync_history="sync-history",s.event_record="event-record"})(V||(V={}));var L;(function(s){s.dingtalk="dingtalk",s.wework="wechat_work",s.feishu="feishu"})(L||(L={}));var M;(function(s){s.period="period",s.timed="timed"})(M||(M={}));var Ge={labelCol:{span:5},wrapperCol:{span:15}},c={appId:["basicConfig","appId"],appKey:["basicConfig","appKey"],corpId:["basicConfig","corpId"],appSecret:["basicConfig","appSecret"],secret:["basicConfig","secret"],callbackUrl:["basicConfig","callbackUrl"]},se=r(9101),e=r(63342),Je=function(i){var p=i.configured,t=i.onConfigValidator,l=i.formRef,v=i.basicConfigRef;(0,d.useEffect)(function(){},[p]);var C=(0,d.useCallback)(b()(u()().mark(function S(){var a,f;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a=l==null?void 0:l.current,n.prev=1,n.next=4,a==null?void 0:a.validateFields([c.corpId,c.appKey,c.appSecret]);case 4:return n.next=6,t({provider:L.dingtalk,corpId:a==null?void 0:a.getFieldValue(c.corpId),appKey:a==null?void 0:a.getFieldValue(c.appKey),appSecret:a==null?void 0:a.getFieldValue(c.appSecret)});case 6:if(f=n.sent,f){n.next=12;break}return a==null||a.setFields([{name:c.corpId,errors:["\u6D4B\u8BD5\u8FDE\u63A5\u5931\u8D25\uFF0C\u8BF7\u6838\u5B9E\u53C2\u6570\u4FE1\u606F"]}]),a==null||a.setFields([{name:c.appKey,errors:["\u6D4B\u8BD5\u8FDE\u63A5\u5931\u8D25\uFF0C\u8BF7\u6838\u5B9E\u53C2\u6570\u4FE1\u606F"]}]),a==null||a.setFields([{name:c.appSecret,errors:["\u6D4B\u8BD5\u8FDE\u63A5\u5931\u8D25\uFF0C\u8BF7\u6838\u5B9E\u53C2\u6570\u4FE1\u606F"]}]),n.abrupt("return",!1);case 12:return Q.ZP.success("\u6D4B\u8BD5\u6210\u529F"),n.abrupt("return",!0);case 16:return n.prev=16,n.t0=n.catch(1),n.abrupt("return",!1);case 19:case"end":return n.stop()}},S,null,[[1,16]])})),[l,t]);return(0,d.useImperativeHandle)(v,function(){return{configValidator:C}},[C]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(D.Z,{name:c.corpId,label:"\u4F01\u4E1AID",placeholder:"\u8BF7\u8F93\u5165\u4F01\u4E1AID",extra:"\u4F60\u53EF\u4EE5\u5728\u9489\u9489\u5F00\u653E\u5E73\u53F0(https://open-dev.dingtalk.com/)\u9996\u9875\u53F3\u4E0A\u89D2\u83B7\u53D6\u4F01\u4E1A ID\uFF08CorpId\uFF09\u3002"}),(0,e.jsx)(D.Z,{name:c.appKey,label:"\u5E94\u7528\u5F00\u53D1Key",placeholder:"\u8BF7\u8F93\u5165\u5E94\u7528\u5F00\u53D1Key",extra:"\u4F60\u53EF\u4EE5\u5728\u9489\u9489\u5F00\u653E\u5E73\u53F0(https://open-dev.dingtalk.com/)\u5E94\u7528\u8BE6\u60C5\u7684\u300C\u57FA\u7840\u4FE1\u606F\u300D\u9875\u9762\u83B7\u53D6 AppKey\u3002",rules:[{required:!0,message:"\u5E94\u7528\u5F00\u53D1Key\u4E3A\u5FC5\u586B\u9879"}]}),(0,e.jsx)(D.Z.Password,{name:c.appSecret,label:"\u5E94\u7528\u51ED\u8BC1\u5BC6\u94A5",placeholder:"\u8BF7\u8F93\u5165\u5E94\u7528\u51ED\u8BC1\u5BC6\u94A5",extra:"\u4F60\u53EF\u4EE5\u5728\u9489\u9489\u5F00\u653E\u5E73\u53F0(https://open-dev.dingtalk.com/)\u5E94\u7528\u8BE6\u60C5\u7684\u300C\u57FA\u7840\u4FE1\u606F\u300D\u9875\u9762\u83B7\u53D6 AppSecret\u3002",fieldProps:{autoComplete:"new-password"},rules:[{required:!0,message:"\u5E94\u7528\u51ED\u8BC1\u5BC6\u94A5\u4E3A\u5FC5\u586B\u9879"}],addonAfter:(0,e.jsx)(se.ZP,{type:"default",onClick:C,children:"\u6D4B\u8BD5\u8FDE\u63A5"})}),(0,e.jsx)(D.Z.Password,{name:["basicConfig","aesKey"],label:"\u52A0\u5BC6AesKey",extra:"\u4F60\u53EF\u4EE5\u5728\u9489\u9489\u5F00\u653E\u5E73\u53F0(https://open-dev.dingtalk.com/)\u5E94\u7528\u8BE6\u60C5\u7684\u300C\u4E8B\u4EF6\u8BA2\u9605\u300D\u9875\u9762\u83B7\u53D6\u52A0\u5BC6 aes_key\u3002\u5982\u679C\u4F60\u9700\u8981\u5F00\u542F\u5B9E\u65F6\u540C\u6B65\uFF0C\u6B64\u53C2\u6570\u5FC5\u586B\u3002",fieldProps:{autoComplete:"new-password"}}),(0,e.jsx)(D.Z.Password,{name:["basicConfig","token"],label:"\u7B7E\u540DToken",extra:"\u4F60\u53EF\u4EE5\u5728\u9489\u9489\u5F00\u653E\u5E73\u53F0(https://open-dev.dingtalk.com/)\u5E94\u7528\u8BE6\u60C5\u7684\u300C\u4E8B\u4EF6\u8BA2\u9605\u300D\u9875\u9762\u83B7\u53D6\u7B7E\u540D token\u3002\u5982\u679C\u4F60\u9700\u8981\u5F00\u542F\u5B9E\u65F6\u540C\u6B65\uFF0C\u6B64\u53C2\u6570\u5FC5\u586B\u3002",fieldProps:{autoComplete:"new-password"}})]})},Qe=Je,Ye=function(i){var p=i.configured,t=i.formRef,l=i.basicConfigRef,v=i.onConfigValidator;(0,d.useEffect)(function(){},[p]);var C=(0,d.useCallback)(b()(u()().mark(function S(){var a,f;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a=t==null?void 0:t.current,n.prev=1,n.next=4,a==null?void 0:a.validateFields([c.appId,c.appSecret]);case 4:return n.next=6,v({provider:L.feishu,appId:a==null?void 0:a.getFieldValue(c.appId),appSecret:a==null?void 0:a.getFieldValue(c.appSecret)});case 6:if(f=n.sent,f){n.next=11;break}return a==null||a.setFields([{name:c.appId,errors:["\u6D4B\u8BD5\u8FDE\u63A5\u5931\u8D25\uFF0C\u8BF7\u6838\u5B9E\u53C2\u6570\u4FE1\u606F"]}]),a==null||a.setFields([{name:c.appSecret,errors:["\u6D4B\u8BD5\u8FDE\u63A5\u5931\u8D25\uFF0C\u8BF7\u6838\u5B9E\u53C2\u6570\u4FE1\u606F"]}]),n.abrupt("return",!1);case 11:return n.abrupt("return",!0);case 14:return n.prev=14,n.t0=n.catch(1),n.abrupt("return",!1);case 17:case"end":return n.stop()}},S,null,[[1,14]])})),[t,v]);return(0,d.useImperativeHandle)(l,function(){return{configValidator:C}},[C]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(D.Z,{name:c.appId,label:"\u5E94\u7528 ID",placeholder:"\u8BF7\u8F93\u5165\u5E94\u7528ID",extra:"\u767B\u5F55\u5F00\u653E\u4E2D\u5FC3\uFF0C\u70B9\u51FB\u5E94\u7528 \uFF0C\u5728\u51ED\u8BC1\u4E0E\u57FA\u7840\u4FE1\u606F\u9875\u9762\u67E5\u770BAPP ID\u3002",rules:[{required:!0,message:"\u5E94\u7528ID\u4E3A\u5FC5\u586B\u9879"}]}),(0,e.jsx)(D.Z.Password,{name:c.appSecret,label:"\u5E94\u7528\u51ED\u8BC1\u5BC6\u94A5",placeholder:"\u8BF7\u8F93\u5165\u5E94\u7528\u51ED\u8BC1\u5BC6\u94A5",extra:"\u767B\u5F55\u5F00\u653E\u4E2D\u5FC3\uFF0C\u70B9\u51FB\u5E94\u7528 \uFF0C\u5728\u51ED\u8BC1\u4E0E\u57FA\u7840\u4FE1\u606F\u9875\u9762\u67E5\u770B APP Secret\u3002",fieldProps:{autoComplete:"new-password"},rules:[{required:!0,message:"\u5E94\u7528\u51ED\u8BC1\u5BC6\u94A5\u4E3A\u5FC5\u586B\u9879"}],addonAfter:(0,e.jsx)(se.ZP,{type:"default",onClick:C,children:"\u6D4B\u8BD5\u8FDE\u63A5"})}),(0,e.jsx)(D.Z.Password,{name:["basicConfig","encryptKey"],label:"EncryptKey",extra:"\u98DE\u4E66\u4E8B\u4EF6\u8BA2\u9605\u7684 EncryptKey\uFF0C\u53EF\u4EE5\u5728\u98DE\u4E66\u5F00\u653E\u5E73\u53F0\u5E94\u7528\u8BE6\u60C5\u7684\u300C\u4E8B\u4EF6\u8BA2\u9605\u300D\u9875\u9762\u83B7\u53D6\u3002\u5982\u679C\u4F60\u9700\u8981\u5F00\u542F\u5B9E\u65F6\u540C\u6B65\uFF0C\u6B64\u53C2\u6570\u5FC5\u586B\u3002",fieldProps:{autoComplete:"new-password"}}),(0,e.jsx)(D.Z.Password,{name:["basicConfig","verificationToken"],label:"VerificationToken",extra:"\u98DE\u4E66\u4E8B\u4EF6\u8BA2\u9605\u7684 VerificationToken\uFF0C\u53EF\u4EE5\u5728\u98DE\u4E66\u5F00\u653E\u5E73\u53F0\u5E94\u7528\u8BE6\u60C5\u7684\u300C\u4E8B\u4EF6\u8BA2\u9605\u300D\u9875\u9762\u83B7\u53D6\u3002\u5982\u679C\u4F60\u9700\u8981\u5F00\u542F\u5B9E\u65F6\u540C\u6B65\uFF0C\u6B64\u53C2\u6570\u5FC5\u586B\u3002",fieldProps:{autoComplete:"new-password"}})]})},Xe=Ye,qe=function(i){var p=i.configured,t=i.formRef,l=i.onConfigValidator,v=i.basicConfigRef;(0,d.useEffect)(function(){},[p]);var C=(0,d.useCallback)(b()(u()().mark(function S(){var a,f;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a=t==null?void 0:t.current,n.prev=1,a==null||a.validateFields([c.corpId,c.corpId]),n.next=5,l({corpId:a==null?void 0:a.getFieldValue(c.corpId),secret:a==null?void 0:a.getFieldValue(c.secret),provider:L.wework});case 5:if(f=n.sent,f){n.next=10;break}return a==null||a.setFields([{name:c.corpId,errors:["\u6D4B\u8BD5\u8FDE\u63A5\u5931\u8D25\uFF0C\u8BF7\u6838\u5B9E\u53C2\u6570\u4FE1\u606F"]}]),a==null||a.setFields([{name:c.secret,errors:["\u6D4B\u8BD5\u8FDE\u63A5\u5931\u8D25\uFF0C\u8BF7\u6838\u5B9E\u53C2\u6570\u4FE1\u606F"]}]),n.abrupt("return",!1);case 10:return n.abrupt("return",!0);case 13:return n.prev=13,n.t0=n.catch(1),n.abrupt("return",!1);case 16:case"end":return n.stop()}},S,null,[[1,13]])})),[t,l]);return(0,d.useImperativeHandle)(v,function(){return{configValidator:C}},[C]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(D.Z,{name:c.corpId,label:"\u4F01\u4E1A ID",placeholder:"\u8BF7\u8F93\u5165\u4F01\u4E1A ID\uFF08CorpId\uFF09",extra:"\u4F60\u53EF\u4EE5\u5728\u4F01\u4E1A\u5FAE\u4FE1\u540E\u53F0\uFF08https://work.weixin.qq.com/\uFF09\u300C\u6211\u7684\u4F01\u4E1A\u300D-\u300C\u4F01\u4E1A\u4FE1\u606F\u300D\u9875\u9762\u83B7\u53D6\u4F01\u4E1A ID\uFF08CorpId\uFF09\u3002",rules:[{required:!0,message:"\u4F01\u4E1A ID\uFF08CorpId\uFF09\u4E3A\u5FC5\u586B\u9879"}]}),(0,e.jsx)(D.Z.Password,{name:c.secret,label:"\u5BC6\u94A5 Secret",placeholder:"\u8BF7\u8F93\u5165\u4F01\u4E1A\u5FAE\u4FE1\u901A\u8BAF\u5F55\u5BC6\u94A5 Secret",fieldProps:{autoComplete:"new-password"},rules:[{required:!0,message:"\u4F01\u4E1A\u5FAE\u4FE1\u901A\u8BAF\u5F55\u5BC6\u94A5 Secret\u4E3A\u5FC5\u586B\u9879"}],addonAfter:(0,e.jsx)(se.ZP,{type:"default",onClick:C,children:"\u6D4B\u8BD5\u8FDE\u63A5"})}),(0,e.jsx)(D.Z.Password,{name:["basicConfig","token"],label:"\u4E8B\u4EF6\u56DE\u8C03 Token",placeholder:"\u8BF7\u8F93\u5165\u4F01\u4E1A\u5FAE\u4FE1\u56DE\u8C03 Token",fieldProps:{autoComplete:"new-password"},extra:"\u4F60\u53EF\u4EE5\u5728\u4F01\u4E1A\u5FAE\u4FE1\u540E\u53F0\uFF08https://work.weixin.qq.com/\uFF09\u300C\u7BA1\u7406\u5DE5\u5177\u300D-\u300C\u901A\u8BAF\u5F55\u540C\u6B65\u300D\u9875\u9762\u70B9\u51FB\u300C\u8BBE\u7F6E\u63A5\u6536\u4E8B\u4EF6\u670D\u52A1\u5668\u300D\u6309\u94AE\uFF0C\u4E4B\u540E\u53EF\u4EE5\u83B7\u53D6\u5230\u6B64 Token\u3002\u5982\u679C\u4F60\u9700\u8981\u5F00\u542F\u5B9E\u65F6\u540C\u6B65\uFF0C\u6B64\u53C2\u6570\u5FC5\u586B\u3002"}),(0,e.jsx)(D.Z.Password,{name:["basicConfig","encodingAESKey"],label:"EncodingAESKey",placeholder:"\u8BF7\u8F93\u5165\u901A\u8BAF\u5F55\u4E8B\u4EF6\u540C\u6B65 EncodingAESKey",fieldProps:{autoComplete:"new-password"},extra:"\u4F60\u53EF\u4EE5\u5728\u4F01\u4E1A\u5FAE\u4FE1\u540E\u53F0\uFF08https://work.weixin.qq.com/\uFF09\u300C\u7BA1\u7406\u5DE5\u5177\u300D-\u300C\u901A\u8BAF\u5F55\u540C\u6B65\u300D\u9875\u9762\u70B9\u51FB\u300C\u8BBE\u7F6E\u63A5\u6536\u4E8B\u4EF6\u670D\u52A1\u5668\u300D\u6309\u94AE\uFF0C\u4E4B\u540E\u53EF\u4EE5\u83B7\u53D6\u5230\u6B64 EncodingAESKey\u3002\u5982\u679C\u4F60\u9700\u8981\u5F00\u542F\u5B9E\u65F6\u540C\u6B65\uFF0C\u6B64\u53C2\u6570\u5FC5\u586B\u3002"})]})},_e=qe,er=We.Z.Paragraph,rr=function(s){var i=s.provider,p=s.configured,t=s.basicConfigRef,l=s.onConfigValidator,v=s.formRef;return(0,e.jsxs)(e.Fragment,{children:[i===L.dingtalk&&(0,e.jsx)(Qe,{configured:p,basicConfigRef:t,onConfigValidator:l,formRef:v}),i===L.wework&&(0,e.jsx)(_e,{configured:p,basicConfigRef:t,onConfigValidator:l,formRef:v}),i===L.feishu&&(0,e.jsx)(Xe,{configured:p,basicConfigRef:t,onConfigValidator:l,formRef:v}),(0,e.jsx)(D.Z,{label:"\u56DE\u8C03\u5730\u5740",name:c.callbackUrl,proFieldProps:{render:function(S){return S&&(0,e.jsx)(er,{copyable:{text:S},style:{marginBottom:"0"},children:(0,e.jsx)("span",{dangerouslySetInnerHTML:{__html:"<span>".concat(S,"</span>")}})})}},readonly:!0,fieldProps:{autoComplete:"off"}})]})},Se=r(34718),ar=r(3306),nr=r(32401),tr=r(21231),sr=r(17132),Ze=r(21654),ue=r(62159),ur=function(s){var i=s.configured;return(0,d.useEffect)(function(){},[i]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Ze.Z,{type:"info",banner:!0,showIcon:!0,description:"\u5B9A\u65F6\u914D\u7F6E\u5FC5\u987B\u540C\u65F6\u914D\u7F6E\u661F\u671F\u6570\u53CA\u6267\u884C\u65B9\u5F0F\u3002\u4F8B\uFF1A\u52FE\u9009\u5468\u4E8C\u5E76\u9009\u62E9\u6BCF\u96942\u5C0F\u65F6\u6267\u884C\u4E00\u6B21\u65F6\uFF0C\u8868\u793A\u5728\u6BCF\u4E2A\u5468\u4E8C\uFF0C\u6BCF\u96942\u5C0F\u65F6\u6267\u884C\u4E00\u6B21\u540C\u6B65\u3002"}),(0,e.jsx)("br",{}),(0,e.jsxs)(be.Z,{bordered:!0,headerBordered:!0,children:[(0,e.jsx)(Se.Z.Group,{name:["jobConfig","dayOfWeek"],options:[{label:"\u6BCF\u5929",value:"always"}],rules:[{required:!0,message:"\u8BE5\u9879\u4E3A\u5FC5\u9009\u9879"}]}),(0,e.jsx)(ue.Z,{}),(0,e.jsx)(Se.Z.Group,{name:["jobConfig","dayOfWeek"],rules:[{required:!0,message:"\u8BE5\u9879\u4E3A\u5FC5\u9009\u9879"}],options:[{label:"\u5468\u4E00",value:"monday"},{label:"\u5468\u4E8C",value:"tuesday"},{label:"\u5468\u4E09",value:"wednesday"},{label:"\u5468\u56DB",value:"thursday"},{label:"\u5468\u4E94",value:"friday"},{label:"\u5468\u516D",value:"saturday"},{label:"\u5468\u5929",value:"sunday"}]}),(0,e.jsx)(ue.Z,{}),(0,e.jsx)(ar.Z.Group,{name:["jobConfig","mode"],options:[{label:"\u5468\u671F\u6267\u884C",value:M.period},{label:"\u5B9A\u65F6\u6267\u884C",value:M.timed}],rules:[{required:!0,message:"\u8BF7\u914D\u7F6E\u6267\u884C\u65B9\u5F0F"}]}),(0,e.jsx)(nr.Z,{name:["jobConfig","mode"],children:function(t){var l=t.jobConfig;return(l==null?void 0:l.mode)===M.period?(0,e.jsx)(tr.Z,{min:1,max:24,name:["jobConfig","interval"],width:"xs",addonBefore:"\u6BCF\u9694",addonAfter:"\u5C0F\u65F6\u6267\u884C\u4E00\u6B21",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u95F4\u9694\u5C0F\u65F6"}]}):(l==null?void 0:l.mode)===M.timed?(0,e.jsx)(sr.Z,{addonBefore:"\u6267\u884C\u65F6\u95F4",width:"xs",name:["jobConfig","time"],rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6267\u884C\u65F6\u95F4"}]}):(0,e.jsx)(e.Fragment,{})}})]})]})},ir=r(95094),lr=r(66736),Te=r(32176),or=r(23376),dr=function(s){var i=s.configured;(0,d.useEffect)(function(){},[i]);var p=(0,d.useState)([]),t=j()(p,2),l=t[0],v=t[1],C=function(){var f=b()(u()().mark(function y(){var n,$,K;return u()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,(0,h.mB)();case 2:if(g.t0=g.sent,g.t0){g.next=5;break}g.t0={};case 5:n=g.t0,$=n.success,K=n.result,$&&K&&v([K]);case 9:case"end":return g.stop()}},y)}));return function(){return f.apply(this,arguments)}}(),S=function(){var f=b()(u()().mark(function y(n){var $;return u()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,(0,h.z3)(n);case 2:return $=w.sent,$.success&&v(function(g){return(0,ir.J)(g,n,$.result)}),w.abrupt("return",Promise.resolve());case 5:case"end":return w.stop()}},y)}));return function(n){return f.apply(this,arguments)}}();(0,ce.Z)(b()(u()().mark(function f(){return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C();case 2:case"end":return n.stop()}},f)})),[]);var a=(0,e.jsxs)("span",{children:[(0,e.jsx)(e.Fragment,{children:"\u8EAB\u4EFD\u6E90\u7EC4\u7EC7\u540C\u6B65\u81F3 TopIAM \u540E\u7684\u7236\u7EA7\u7EC4\u7EC7\u3002"}),(0,e.jsx)("br",{}),(0,e.jsx)(e.Fragment,{children:"\u5982\u679C\u4E0D\u586B\uFF0C\u5C06\u81EA\u52A8\u521B\u5EFA\u9876\u5C42\u7EC4\u7EC7\u3002\u914D\u7F6E\u540E\u4E0D\u53EF\u66F4\u6539\u3002"})," "]});return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(ue.Z,{orientation:"left",plain:!0,children:"\u7EC4\u7EC7\u76F8\u5173\u7B56\u7565"}),(0,e.jsx)(lr.Z,{name:["strategyConfig","organization","targetId"],label:"\u76EE\u6807\u6839\u7EC4\u7EC7",extra:a,children:(0,e.jsx)(or.Z,{placeholder:"\u8BF7\u9009\u62E9\u76EE\u6807\u6839\u7EC4\u7EC7",allowClear:!0,labelInValue:!0,loadData:function(y){return S(y.id)},treeData:l,treeNodeFilterProp:"name",fieldNames:{label:"name",value:"id"}})}),(0,e.jsx)(ue.Z,{orientation:"left",plain:!0,children:"\u7528\u6237\u76F8\u5173\u7B56\u7565"}),(0,e.jsx)(D.Z.Password,{name:["strategyConfig","user","defaultPassword"],label:"\u9ED8\u8BA4\u5BC6\u7801",extra:"\u540C\u6B65\u8D26\u6237\u65F6\u7ED9\u8D26\u6237\u8BBE\u7F6E\u7684\u9ED8\u8BA4\u5BC6\u7801\uFF0C\u82E5\u4E0D\u8BBE\u7F6E\uFF0C\u5C06\u4F7F\u7528\u8BBE\u7F6E\u4E2D\u5BC6\u7801\u7B56\u7565\u968F\u673A\u751F\u6210\u3002",placeholder:"\u8BF7\u8F93\u5165\u9ED8\u8BA4\u5BC6\u7801",fieldProps:{autoComplete:"new-password"}}),(0,e.jsx)(Te.Z,{name:["strategyConfig","user","enabled"],label:"\u662F\u5426\u542F\u7528",initialValue:!0,extra:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{children:"\u9ED8\u8BA4\u542F\u7528\uFF0C\u9996\u6B21\u540C\u6B65\u7528\u6237\u65F6\uFF0C\u7528\u6237\u662F\u5426\u5728 TopIAM \u4E2D\u542F\u7528\u3002"}),(0,e.jsx)("br",{}),(0,e.jsx)("span",{style:{color:"red"},children:"\u6CE8\u610F\uFF1A\u8EAB\u4EFD\u6E90\u7528\u6237\u672A\u542F\u7528\u65F6\uFF0C\u5C06\u5DF2\u8EAB\u4EFD\u6E90\u4E3A\u51C6\u3002"})]})}),(0,e.jsx)(Te.Z,{name:["strategyConfig","user","emailNotify"],label:"\u90AE\u4EF6\u901A\u77E5",initialValue:!0,extra:"\u9ED8\u8BA4\u542F\u7528\uFF0C\u9996\u6B21\u540C\u6B65\u7528\u6237\u6210\u529F\u540E\uFF0C\u5C06\u53D1\u9001\u7535\u5B50\u90AE\u4EF6\uFF0C\u82E5\u6CA1\u6709\u83B7\u53D6\u5230\u90AE\u4EF6\u5730\u5740\uFF0C\u5C06\u65E0\u6CD5\u8FDB\u884C\u53D1\u9001\u3002"})]})},cr=r(71181),fr=r(29113),fe=r(27793),De=r(55807),O=r(22715),vr=r(51391),pr=r(39620),ve=r.n(pr),mr=r(10255),gr=r.n(mr),Re=r(93313),Pe=r(23359),Ae=r(25846),we=r(69567),Cr=r(74602),Be=r(53010),hr=we.ZP.ConfigContext,yr=function(s){var i=s.syncHistoryId,p=s.open,t=s.onClose,l=s.objectType,v=(0,d.useRef)(),C=[{title:"\u52A8\u4F5C\u7C7B\u578B",dataIndex:"actionType",align:"center",width:80,ellipsis:!0,valueType:"select",valueEnum:{insert:{text:"\u65B0\u589E"},update:{text:"\u4FEE\u6539"},delete:{text:"\u5220\u9664"}}},{title:"\u5BF9\u8C61 ID",dataIndex:"objectId",ellipsis:!0,search:!1},{title:"\u5BF9\u8C61\u540D\u79F0",dataIndex:"objectName",ellipsis:!0,search:!1},{title:"\u63CF\u8FF0",dataIndex:"desc",ellipsis:!0,search:!1},{title:"\u72B6\u6001",dataIndex:"status",align:"center",valueType:"select",width:80,valueEnum:{success:{text:"\u6210\u529F"},fail:{text:"\u5931\u8D25"},skip:{text:"\u8DF3\u8FC7"}},renderText:function(f){return(0,e.jsxs)(e.Fragment,{children:[f==="success"&&(0,e.jsx)(O.Z,{icon:(0,e.jsx)(Re.Z,{}),color:"#87d068",children:"\u6210\u529F"}),f==="fail"&&(0,e.jsx)(O.Z,{icon:(0,e.jsx)(Pe.Z,{}),color:"#e54545",children:"\u5931\u8D25"}),f==="skip"&&(0,e.jsx)(O.Z,{icon:(0,e.jsx)(Ae.Z,{}),color:"#faad14",children:"\u8DF3\u8FC7"})]})}}],S=(0,Be.l)(function(a){gr()(a);var f=(0,d.useContext)(hr),y=f.getPrefixCls,n=".".concat(y());return ve()({},"".concat(n,"-pro-card ").concat(n,"-pro-card-body"),{padding:"24px 0px 0px"})});return(0,e.jsx)(Cr.Z,{open:p,title:"\u8BE6\u60C5\u8BB0\u5F55",onClose:t,width:630,destroyOnClose:!0,bodyStyle:{paddingTop:0},children:(0,e.jsx)(fe.Z,{actionRef:v,className:S,columns:C,search:{filterType:"light"},params:{syncHistoryId:i,objectType:l},request:h.eU,rowKey:"id",pagination:{defaultPageSize:10,showQuickJumper:!1}})})},jr=yr,xr=function(s){var i=s.identitySourceId,p=(0,d.useRef)(),t=(0,d.useState)(!1),l=j()(t,2),v=l[0],C=l[1],S=(0,d.useState)(),a=j()(S,2),f=a[0],y=a[1],n=(0,d.useState)(),$=j()(n,2),K=$[0],w=$[1],g=[{title:"\u6279\u53F7",fixed:"left",width:100,dataIndex:"batch",align:"center",search:!1},{title:"\u89E6\u53D1\u7C7B\u578B",dataIndex:"triggerType",ellipsis:!0,filterSearch:!0,align:"center",valueType:"select",valueEnum:{manual:{text:"\u624B\u52A8\u89E6\u53D1"},job:{text:"\u4EFB\u52A1\u89E6\u53D1"}}},{title:"\u5BF9\u8C61\u7C7B\u578B",dataIndex:"objectType",align:"center",valueType:"select",ellipsis:!0,filterSearch:!0,valueEnum:{user:{text:"\u7528\u6237"},organization:{text:"\u7EC4\u7EC7"}}},{title:"\u521B\u5EFA\u6570\u91CF",dataIndex:"createdCount",search:!1},{title:"\u66F4\u65B0\u6570\u91CF",dataIndex:"updatedCount",search:!1},{title:"\u5220\u9664\u6570\u91CF",dataIndex:"deletedCount",search:!1},{title:"\u8DF3\u8FC7\u6570\u91CF",dataIndex:"skippedCount",search:!1},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"startTime",ellipsis:!0,search:!1,align:"center",valueType:"dateTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",ellipsis:!0,search:!1,align:"center",valueType:"dateTime"},{title:"\u8017\u65F6",dataIndex:"spendTime",valueType:"second",search:!1},{title:"\u72B6\u6001",dataIndex:"status",filterSearch:!0,valueType:"select",width:100,valueEnum:{success:{text:"\u6210\u529F"},fail:{text:"\u5931\u8D25"},pending:{text:"\u540C\u6B65\u4E2D"}},renderText:function(H){return(0,e.jsxs)(De.Z,{children:[H==="success"&&(0,e.jsx)(O.Z,{color:"#87d068",children:"\u6210\u529F"}),H==="fail"&&(0,e.jsx)(O.Z,{color:"#e54545",children:"\u5931\u8D25"}),H==="pending"&&(0,e.jsx)(O.Z,{icon:(0,e.jsx)(cr.Z,{spin:!0}),color:"#1677ff",children:"\u540C\u6B65\u4E2D"})]})}},{title:"\u64CD\u4F5C",align:"center",valueType:"option",width:100,fixed:"right",render:function(H,N){return[(0,e.jsx)("a",{target:"_blank",onClick:function(){y(N.id),C(!0),w(N.objectType)},children:"\u8BE6\u60C5"},"details")]}}];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(fe.Z,{actionRef:p,columns:g,params:{identitySourceId:i},request:h.QA,rowKey:"id",pagination:{defaultPageSize:10,showQuickJumper:!0},scroll:{x:1300},search:{filterType:"light"},toolBarRender:function(){return[(0,e.jsx)(se.ZP,{icon:(0,e.jsx)(fr.Z,{}),type:"primary",onClick:function(){vr.Z.info({title:"\u4E00\u952E\u62C9\u53D6",width:500,onOk:function(){var N=b()(u()().mark(function me(){var q,B;return u()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,(0,h.nv)(i);case 2:q=z.sent,B=q.success,B&&(Q.ZP.success("\u4EFB\u52A1\u89E6\u53D1\u6210\u529F"),window.setInterval(function(){var U;(U=p.current)===null||U===void 0||U.reload()},5e3));case 5:case"end":return z.stop()}},me)}));function X(){return N.apply(this,arguments)}return X}(),content:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(De.Z,{direction:"vertical",children:[(0,e.jsx)("span",{children:"TopIAM \u5C06\u5168\u91CF\u62C9\u53D6\u8EAB\u4EFD\u6E90\u6388\u6743\u8303\u56F4\u5185\u90E8\u95E8\u548C\u8D26\u6237\uFF0C\u7F6E\u4E8E\u540C\u6B65\u76EE\u6807\u7EC4\u7EC7\u4E0B\u3002"}),(0,e.jsx)(Ze.Z,{type:"info",banner:!0,showIcon:!1,description:"\u5DF2\u62C9\u53D6\u8FC7\u7684\u7EC4\u7EC7\u3001\u8D26\u6237\u4E0D\u4F1A\u91CD\u590D\u521B\u5EFA\uFF0C\u800C\u4F1A\u8986\u76D6\u66F4\u65B0\u3002\u53EF\u4EE5\u53CD\u590D\u89E6\u53D1\u62C9\u53D6\uFF0C\u5C06\u4E24\u4FA7\u6570\u636E\u62C9\u9F50\u3002"})]})}),okText:"\u786E\u8BA4",okType:"primary",centered:!1,maskClosable:!1,okCancel:!0})},children:"\u4E00\u952E\u62C9\u53D6"},"pull")]}}),f&&K&&(0,e.jsx)(jr,{open:v,syncHistoryId:f,objectType:K,onClose:function(){C(!1)}})]})},Fr=xr,br=we.ZP.ConfigContext;function Er(){var s=(0,d.useContext)(br),i=s.getPrefixCls,p=".".concat(i()),t=(0,Be.l)(function(){return ve()({},"".concat(p,"-form-item"),ve()({},"".concat(p,"-form-item-control-input"),{width:"100%"}))});return{className:t}}var pe=r(30708),Ir=r(22590),Sr=function(s){var i=(0,d.useRef)(),p=s.identitySourceId,t=[{title:"\u52A8\u4F5C\u7C7B\u578B",dataIndex:"actionType",align:"center",ellipsis:!0,width:100,valueType:"select",valueEnum:{insert:{text:"\u65B0\u589E"},update:{text:"\u4FEE\u6539"},delete:{text:"\u5220\u9664"}}},{title:"\u5BF9\u8C61\u7C7B\u578B",dataIndex:"objectType",align:"center",valueType:"select",width:100,ellipsis:!0,filterSearch:!0,valueEnum:{user:{text:"\u7528\u6237"},organization:{text:"\u7EC4\u7EC7"}}},{title:"\u5BF9\u8C61 ID",dataIndex:"objectId",ellipsis:!0,search:!1},{title:"\u5BF9\u8C61\u540D\u79F0",dataIndex:"objectName",search:!1},{title:"\u4E8B\u4EF6\u65F6\u95F4",dataIndex:"eventTime",align:"center",search:!1,ellipsis:!0,valueType:"dateTime"},{title:"\u63CF\u8FF0",dataIndex:"desc",ellipsis:!0,search:!1},{title:"\u4E8B\u4EF6\u72B6\u6001",dataIndex:"status",align:"center",valueType:"select",width:80,valueEnum:{success:{text:"\u6210\u529F"},fail:{text:"\u5931\u8D25"},skip:{text:"\u8DF3\u8FC7"}},renderText:function(v){return(0,e.jsxs)(e.Fragment,{children:[v==="success"&&(0,e.jsx)(O.Z,{icon:(0,e.jsx)(Re.Z,{}),color:"#87d068",children:"\u6210\u529F"}),v==="fail"&&(0,e.jsx)(O.Z,{icon:(0,e.jsx)(Pe.Z,{}),color:"#e54545",children:"\u5931\u8D25"}),v==="skip"&&(0,e.jsx)(O.Z,{icon:(0,e.jsx)(Ae.Z,{}),color:"#faad14",children:"\u8DF3\u8FC7"})]})}}];return(0,e.jsx)(fe.Z,{actionRef:i,params:{identitySourceId:p},columns:t,rowKey:"id",search:{filterType:"light"},scroll:{x:900},pagination:{defaultPageSize:10,showQuickJumper:!1},request:h.mo,toolBarRender:function(){return[]}})},Zr=Sr,Tr=r(66939),Dr=r.n(Tr),Rr=function(){var s=(0,Ir.useLocation)(),i=pe.Z.parse(s.search),p=i,t=p.id,l=i,v=l.tab,C=i,S=C.provider,a=(0,d.useState)(),f=j()(a,2),y=f[0],n=f[1],$=(0,d.useState)(!1),K=j()($,2),w=K[0],g=K[1],Y=(0,d.useState)(!1),H=j()(Y,2),N=H[0],X=H[1],me=(0,d.useState)(),q=j()(me,2),B=q[0],ge=q[1],z=(0,d.useRef)(),U=(0,d.useRef)(),ke=(0,d.useRef)(),Ve=(0,d.useRef)(),Ar=(0,d.useState)(0),$e=j()(Ar,2),wr=$e[0],Ke=$e[1],Br=(0,d.useState)(!1),Oe=j()(Br,2),_=Oe[0],kr=Oe[1],Vr=Er(),$r=Vr.className;(0,Ne.Z)(b()(u()().mark(function Z(){return u()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(t){o.next=4;break}return Q.ZP.warning("\u8EAB\u4EFD\u6E90\u4E0D\u5B58\u5728"),k.m.push("/account/identity-source"),o.abrupt("return");case 4:if(v){o.next=8;break}return n(V.config),k.m.push({pathname:s.pathname,search:pe.Z.stringify({tab:V.config,id:t})}),o.abrupt("return");case 8:n(v);case 9:case"end":return o.stop()}},Z)}))),(0,ce.Z)(b()(u()().mark(function Z(){var m,o,x;return u()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:if(!t){T.next=8;break}return g(!0),T.next=4,(0,h.bh)(t);case 4:m=T.sent,o=m.success,x=m.result,o&&x&&(ge(x),g(!1));case 8:case"end":return T.stop()}},Z)})),[t]),(0,ce.Z)(b()(u()().mark(function Z(){return u()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:v===V.config&&(X(!0),(0,h.$C)(t).then(function(){var x=b()(u()().mark(function E(T){var R,P,W,ie,F,Ce,he,A,ee,ye,re,je,xe,Fe;return u()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:if(A=T.result,kr(A==null?void 0:A.configured),ee=(R=A.strategyConfig)===null||R===void 0||(P=R.organization)===null||P===void 0?void 0:P.targetId,ye=A.strategyConfig,!(ee&&A!==null&&A!==void 0&&A.configured)){G.next=11;break}return G.next=7,(0,h.Xu)(ee);case 7:re=G.sent,je={value:ee,label:void 0},re&&re.success&&re.result&&(je={value:ee,label:re.result.name}),ye=I()(I()({},A.strategyConfig),{},{organization:I()(I()({},A.strategyConfig.organization),{},{targetId:je})});case 11:(W=z.current)===null||W===void 0||W.setFieldsValue({basicConfig:I()({},A.basicConfig)}),(ie=Ve.current)===null||ie===void 0||ie.setFieldsValue({strategyConfig:I()({},ye)}),xe=(F=A.jobConfig)===null||F===void 0?void 0:F.mode,Fe=(Ce=A.jobConfig)===null||Ce===void 0?void 0:Ce.value,(he=ke.current)===null||he===void 0||he.setFieldsValue({jobConfig:I()(I()({},A.jobConfig),{},{interval:xe===M.period?Fe:void 0,time:xe===M.timed?Dr()(Fe,"HH:mm:ss"):void 0})}),X(!1);case 17:case"end":return G.stop()}},E)}));return function(E){return x.apply(this,arguments)}}()));case 1:case"end":return o.stop()}},Z)})),[v]);var Kr=function(){var Z=b()(u()().mark(function m(o,x){var E,T;return u()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,(0,h.Iw)({id:x.id,name:x.name,remark:x.remark});case 2:if(E=P.sent,T=E.success,!T){P.next=8;break}return Q.ZP.success("\u64CD\u4F5C\u6210\u529F"),ge(I()({},x)),P.abrupt("return",Promise.resolve(!0));case 8:return P.abrupt("return",Promise.resolve(!1));case 9:case"end":return P.stop()}},m)}));return function(o,x){return Z.apply(this,arguments)}}(),Or=(0,e.jsx)(Le.X.Consumer,{children:function(m){var o=m.isMobile;return w?(0,e.jsx)(Ee.Z,{active:!0,paragraph:{rows:1}}):(0,e.jsxs)(de.vY,{size:"small",column:o?1:2,dataSource:I()({},B),editable:{onSave:Kr},children:[(0,e.jsx)(de.vY.Item,{dataIndex:"name",label:"\u540D\u79F0"}),(0,e.jsx)(de.vY.Item,{dataIndex:"remark",label:"\u5907\u6CE8",valueType:"textarea",fieldProps:{rows:2,maxLength:20}})]})}});return(0,e.jsxs)(Me._z,{onBack:function(){k.m.push("/account/identity-source")},title:w?(0,e.jsx)(Ee.Z.Input,{style:{width:50},active:!0,size:"small"}):B==null?void 0:B.name,content:Or,tabList:[{key:V.config,tab:"\u540C\u6B65\u914D\u7F6E"},{key:V.sync_history,tab:"\u540C\u6B65\u5386\u53F2"},{key:V.event_record,tab:"\u4E8B\u4EF6\u8BB0\u5F55"}],tabActiveKey:y,onTabChange:function(m){n(m),k.m.replace({pathname:s.pathname,search:pe.Z.stringify({tab:m,id:t})})},children:[V.config===y&&(0,e.jsx)(be.Z,{children:(0,e.jsx)(Ie.Z,{spinning:w,children:(0,e.jsxs)(te.L,{current:wr,onCurrentChange:Ke,formProps:I()({layout:"horizontal"},Ge),onFinish:function(){var Z=b()(u()().mark(function m(o){var x,E,T,R,P,W;return u()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.prev=0,g(!0),F.next=4,(0,h.NK)(I()(I()({id:t},(0,Ue.omit)(o,"strategyConfig")),{},{strategyConfig:I()(I()({},o.strategyConfig),{},{organization:{targetId:o==null||(x=o.strategyConfig)===null||x===void 0||(E=x.organization)===null||E===void 0||(T=E.targetId)===null||T===void 0?void 0:T.value}})}));case 4:if(R=F.sent,P=R.result,W=R.success,!(W&&P)){F.next=13;break}return Ke(0),Q.ZP.success("\u64CD\u4F5C\u6210\u529F"),F.next=12,(0,h.bh)(t);case 12:return F.abrupt("return");case 13:g(!1),F.next=18;break;case 16:F.prev=16,F.t0=F.catch(0);case 18:return F.prev=18,g(!1),F.finish(18);case 21:case"end":return F.stop()}},m,null,[[0,16,18,21]])}));return function(m){return Z.apply(this,arguments)}}(),submitter:{render:function(m,o){return(0,e.jsx)(He.S,{children:o})}},children:[(0,e.jsx)(te.L.StepForm,{scrollToFirstError:!0,name:"base-config",title:"\u57FA\u672C\u914D\u7F6E",formRef:z,className:$r,onFinish:b()(u()().mark(function Z(){var m,o;return u()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return o=(m=U.current)===null||m===void 0?void 0:m.configValidator(),E.abrupt("return",Promise.resolve(o));case 2:case"end":return E.stop()}},Z)})),children:(0,e.jsx)(Ie.Z,{spinning:N,children:(0,e.jsx)(rr,{provider:(B==null?void 0:B.provider)||S,configured:_,formRef:z,basicConfigRef:U,onConfigValidator:function(){var Z=b()(u()().mark(function m(o){var x,E;return u()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return g(!0),R.next=3,(0,h.jA)({provider:B==null?void 0:B.provider,config:o});case 3:return x=R.sent,E=x.result,g(!1),R.abrupt("return",E);case 7:case"end":return R.stop()}},m)}));return function(m){return Z.apply(this,arguments)}}()})})}),(0,e.jsx)(te.L.StepForm,{scrollToFirstError:!0,name:"strategy-config",title:"\u9AD8\u7EA7\u914D\u7F6E",formRef:Ve,children:_!==void 0&&(0,e.jsx)(dr,{configured:_})}),(0,e.jsx)(te.L.StepForm,{scrollToFirstError:!0,name:"job-config",title:"\u4EFB\u52A1\u914D\u7F6E",formRef:ke,children:_!==void 0&&(0,e.jsx)(ur,{configured:_})})]})})}),V.sync_history===y&&(0,e.jsx)(Fr,{identitySourceId:t}),V.event_record===y&&(0,e.jsx)(Zr,{identitySourceId:t})]})},Pr=Rr},95094:function(ze,ae,r){r.d(ae,{J:function(){return ne},h:function(){return b}});var le=r(77566),I=r.n(le),oe=r(76091),u=r.n(oe);function ne(J,j,h){return J.map(function(k){return k.id===j?u()(u()({},k),{},{isLeaf:!1,children:h}):k.children?u()(u()({},k),{},{children:ne(k.children,j,h)}):k})}function b(J){var j=[];return J.forEach(function(h){return j.push(h.id),h.children&&j.push.apply(j,I()(b(h.children))),j}),j}}}]);