(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports={Drawer:"Drawer_Drawer__CwS-z",close:"Drawer_close__33gHi",active:"Drawer_active__2hzoT"}},22:function(e,t,n){e.exports={MenuToggle:"MenuToggle_MenuToggle__3DsPu",open:"MenuToggle_open__2tjFb"}},23:function(e,t,n){e.exports={Quiz:"Quiz_Quiz__BgHWW",QuizWrapper:"Quiz_QuizWrapper__21tI_"}},24:function(e,t,n){e.exports={ActiveQuiz:"ActiveQuiz_ActiveQuiz__17ggA",Question:"ActiveQuiz_Question__2Niy9"}},25:function(e,t,n){e.exports={AnswerItem:"AnswerItem_AnswerItem__1QnNw",success:"AnswerItem_success__2oDSZ",error:"AnswerItem_error__1CmLv"}},26:function(e,t,n){e.exports={FinishedQuiz:"FinishedQuiz_FinishedQuiz__VBSQc",success:"FinishedQuiz_success__2Rpzm",error:"FinishedQuiz_error__1DgrN"}},27:function(e,t,n){e.exports={Button:"Button_Button__1Rb42",error:"Button_error__1QLZ_",success:"Button_success__gAUmF",primary:"Button_primary__2ME3m"}},28:function(e,t,n){e.exports={Loader:"Loader_Loader__3zu2j",center:"Loader_center__1rG3-"}},29:function(e,t,n){e.exports={QuizList:"QuizList_QuizList__Aj3Ke",empty:"QuizList_empty__1-k3U"}},30:function(e,t,n){e.exports={Auth:"Auth_Auth__1xih6",AuthForm:"Auth_AuthForm__3S1WU"}},31:function(e,t,n){e.exports={Input:"Input_Input__1Ag2M",invalid:"Input_invalid__16zHx"}},40:function(e,t,n){e.exports={Layout:"Layout_Layout__7ZcVy"}},41:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__2S_Md"}},44:function(e,t,n){e.exports={AnswersList:"AnswersList_AnswersList__26l2v"}},46:function(e,t,n){e.exports={QuizCreator:"QuizCreator_QuizCreator__2TY1t"}},47:function(e,t,n){e.exports={Select:"Select_Select__O1orq"}},49:function(e,t,n){e.exports=n(96)},54:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(39),l=n.n(i),s=n(99),o=(n(54),n(4)),u=n(5),c=n(8),d=n(6),m=n(7),v=n(100),h=n(97),p=n(2),f=n(40),b=n.n(f),g=n(22),k=n.n(g),_=function(e){var t=e.onToggle,n=e.isOpen,a=[k.a.MenuToggle,"fa"];return n?(a.push("fa-times"),a.push(k.a.open)):a.push("fa-bars"),r.a.createElement("i",{className:a.join(" "),onClick:t})},w=n(98),y=n(20),E=n.n(y),j=n(41),C=n.n(j),O=function(e){var t=e.onClick;return r.a.createElement("div",{className:C.a.Backdrop,onClick:t})},z=[{to:"/",label:"\u0421\u043f\u0438\u0441\u043e\u043a",exact:!0},{to:"/auth",label:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",exact:!1},{to:"/quiz-creator",label:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442",exact:!1}],Q=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).clickHandler=n.clickHandler.bind(Object(p.a)(Object(p.a)(n))),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"clickHandler",value:function(){this.props.onClose()}},{key:"renderLinks",value:function(){var e=this;return z.map(function(t,n){var a=t.label+n;return r.a.createElement("li",{key:a},r.a.createElement(w.a,{to:t.to,exact:t.exact,activeClassName:E.a.active,onClick:e.clickHandler},t.label))})}},{key:"render",value:function(){var e=this.props,t=[E.a.Drawer];return e.isOpen||t.push(E.a.close),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:t.join(" ")},r.a.createElement("ul",null,this.renderLinks())),e.isOpen?r.a.createElement(O,{onClick:e.onClose}):null)}}]),t}(a.Component),x=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={menu:!1},n.menuToggleHandler=n.menuToggleHandler.bind(Object(p.a)(Object(p.a)(n))),n.menuCloseHandler=n.menuCloseHandler.bind(Object(p.a)(Object(p.a)(n))),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"menuToggleHandler",value:function(){this.setState(function(e){return{menu:!e.menu}})}},{key:"menuCloseHandler",value:function(){this.setState({menu:!1})}},{key:"render",value:function(){var e=this.state,t=this.props;return r.a.createElement("div",{className:b.a.Layout},r.a.createElement(Q,{isOpen:e.menu,onClose:this.menuCloseHandler}),r.a.createElement(_,{onToggle:this.menuToggleHandler,isOpen:e.menu}),r.a.createElement("main",null,t.children))}}]),t}(a.Component),H=n(15),A=n(9),q=n.n(A),S=n(13),N=n(23),F=n.n(N),L=n(16),I=n.n(L),D=I.a.create({baseURL:"https://react-quiz-79641.firebaseio.com/"}),M=n(24),V=n.n(M),B=n(44),T=n.n(B),R=n(25),P=n.n(R),W=function(e){var t=e.answer,n=e.onAnswerClick,a=e.state,i=[P.a.AnswerItem];return a&&i.push(P.a[a]),r.a.createElement("li",{className:i.join(" "),onClick:function(){return n(t.id)}},t.text)};W.defaultProps={state:null};var U=W,G=function(e){var t=e.answers,n=e.onAnswerClick,a=e.state;return r.a.createElement("ul",{className:T.a.AnswersList},t.map(function(e,t){var i=e+t;return r.a.createElement(U,{key:i,answer:e,onAnswerClick:n,state:a?a[e.id]:null})}))};G.defaultProps={state:null};var K=G,Z=function(e){var t=e.answers,n=e.question,a=e.onAnswerClick,i=e.answerNumber,l=e.quizLength,s=e.state;return r.a.createElement("div",{className:V.a.ActiveQuiz},r.a.createElement("p",{className:V.a.Question},r.a.createElement("span",null,r.a.createElement("strong",null,i,"."),"\xa0",n),r.a.createElement("small",null,i,"\xa0\u0438\u0437\xa0",l)),r.a.createElement(K,{state:s,answers:t,onAnswerClick:a}))};Z.defaultProps={state:null};var J=Z,X=n(43),Y=n(26),$=n.n(Y),ee=n(27),te=n.n(ee),ne=function(e){var t=e.children,n=e.onClick,a=e.disabled,i=e.type,l=[te.a.Button,te.a[i]];return r.a.createElement("button",{className:l.join(" "),onClick:n,disabled:a,type:"button"},t)};ne.defaultProps={onClick:function(){},disabled:!1};var ae=ne,re=function(e){var t=e.results,n=e.quiz,a=e.onRetry,i=Object.keys(t).reduce(function(e,n){var a=e;return"success"===t[n]&&(a+=1),a},0);return r.a.createElement("div",{className:$.a.FinishedQuiz},r.a.createElement("ul",null,n.map(function(e,n){var a=e+n,i=["fa","error"===t[e.id]?"fa-times":"fa-check",$.a[t[e.id]]];return r.a.createElement("li",{key:a},r.a.createElement("strong",null,n+1),". \xa0",e.question,r.a.createElement("i",{className:i.join(" ")}))})),r.a.createElement("p",null,"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\xa0",i,"\xa0\u0438\u0437\xa0",n.length),r.a.createElement("div",null,r.a.createElement(ae,{onClick:a,type:"primary"},"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"),r.a.createElement(X.a,{to:"/"},r.a.createElement(ae,{type:"success"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432"))))},ie=n(28),le=n.n(ie),se=function(){return r.a.createElement("div",{className:le.a.center},r.a.createElement("div",{className:le.a.Loader},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},oe=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={results:{},isFinished:!1,activeQuestion:0,answerState:null,quiz:[],loading:!0},n.onAnswerClickHandler=n.onAnswerClickHandler.bind(Object(p.a)(Object(p.a)(n))),n.onRetryHandler=n.onRetryHandler.bind(Object(p.a)(Object(p.a)(n))),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(S.a)(q.a.mark(function e(){var t,n,a,r;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,n=t.match.params.id,e.next=4,D.get("/quizes/".concat(n,".json"));case 4:a=e.sent,r=a.data,this.setState({quiz:r,loading:!1});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onAnswerClickHandler",value:function(e){var t=this,n=this.state,a=n.results,r=n.quiz[n.activeQuestion];if(n.answerState){var i=Object.keys(n.answerState)[0];if("success"===n.answerState[i])return}if(r.rightAnswerId===e){a[r.id]||(a[r.id]="success"),this.setState({answerState:Object(H.a)({},e,"success"),results:a});var l=window.setTimeout(function(){t.isQuizFinished()?t.setState({isFinished:!0}):t.setState(function(e){return{activeQuestion:e.activeQuestion+1,answerState:null}}),window.clearTimeout(l)},1e3)}else a[r.id]="error",this.setState({answerState:Object(H.a)({},e,"error"),results:a})}},{key:"onRetryHandler",value:function(){this.setState({results:{},isFinished:!1,activeQuestion:0,answerState:null})}},{key:"isQuizFinished",value:function(){var e=this.state;return e.activeQuestion+1===e.quiz.length}},{key:"render",value:function(){var e=this,t=this.state;return r.a.createElement("div",{className:F.a.Quiz},r.a.createElement("div",{className:F.a.QuizWrapper},r.a.createElement("h1",null,"\u041e\u0442\u0432\u0435\u0442\u044c\u0442\u0435 \u043d\u0430 \u0432\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"),t.loading?r.a.createElement(se,null):t.isFinished?r.a.createElement(re,{results:t.results,quiz:t.quiz,onRetry:e.onRetryHandler}):r.a.createElement(J,{question:t.quiz[t.activeQuestion].question,answers:t.quiz[t.activeQuestion].answers,onAnswerClick:e.onAnswerClickHandler,answerNumber:t.activeQuestion+1,quizLength:t.quiz.length,state:t.answerState})))}}]),t}(a.Component),ue=n(29),ce=n.n(ue),de=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={quizes:[],loading:!0},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(S.a)(q.a.mark(function e(){var t,n,a;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.get("/quizes.json");case 3:t=e.sent,(n=t.data)||(n=[]),a=Object.keys(n).map(function(e,t){return{id:e,name:"\u0422\u0435\u0441\u0442 \u2116 ".concat(t+1)}}),this.setState({quizes:a,loading:!1}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"renderQuizes",value:function(){var e=this.state;return e.quizes.length?e.quizes.map(function(e){var t=e.id,n=e.name;return r.a.createElement("li",{key:t},r.a.createElement(w.a,{to:"/quiz/".concat(t)},n))}):r.a.createElement("li",{className:ce.a.empty},"\u0422\u0435\u0441\u0442\u044b \u043d\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u044b")}},{key:"render",value:function(){var e=this.state;return r.a.createElement("div",{className:ce.a.QuizList},r.a.createElement("div",null,r.a.createElement("h1",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432"),e.loading?r.a.createElement(se,null):r.a.createElement("ul",null,this.renderQuizes())))}}]),t}(a.Component),me=n(14),ve=n(30),he=n.n(ve),pe=n(31),fe=n.n(pe),be=function(e){var t=e.valid,n=e.touched,a=e.shouldValidate;return!t&&a&&n},ge=function(e){var t=e.type,n=e.label,a=e.spellCheck,i=e.value,l=e.onChange,s=e.errorMessage,o=e.valid,u=e.touched,c=e.shouldValidate,d=[fe.a.Input],m="".concat(t,"-").concat(Math.random());return be({valid:o,touched:u,shouldValidate:c})&&d.push(fe.a.invalid),r.a.createElement("div",{className:d.join(" ")},r.a.createElement("label",{htmlFor:m},n),r.a.createElement("input",{type:t,id:m,spellCheck:a,value:i,onChange:l}),be({valid:o,touched:u,shouldValidate:c})?r.a.createElement("span",null,s):null)};ge.defaultProps={type:"text",label:"",spellCheck:!1,value:"",onChange:function(){},errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0435\u0440\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435",valid:!0,touched:!1,shouldValidate:!1};var ke=ge,_e=n(45),we=n.n(_e),ye=function(e,t){return Object(me.a)({},e,{validation:t,valid:!t,touched:!1,shouldValidate:!!t,value:""})},Ee=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=!0;return t?(t.required&&(n=""!==e.trim()&&n),t.email&&(n=we.a.email(e)&&n),t.minLength&&(n=e.length>=t.minLength&&n),n):n},je=function(e){return Object.keys(e).reduce(function(t,n){return e[n].valid&&t},!0)},Ce=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={isFormValid:!1,formControls:{email:{value:"",type:"email",label:"Email",spellCheck:!1,errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email",valid:!1,touched:!1,validation:{required:!0,email:!0}},password:{value:"",type:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",spellCheck:!1,errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",valid:!1,touched:!1,validation:{required:!0,minLength:6}}}},n.loginHandler=n.loginHandler.bind(Object(p.a)(Object(p.a)(n))),n.registerHandler=n.registerHandler.bind(Object(p.a)(Object(p.a)(n))),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onChangeHandler",value:function(e,t){var n=this.state,a=Object(me.a)({},n.formControls),r=Object(me.a)({},a[t]);r.value=e,r.touched=!0,r.valid=Ee(r.value,r.validation),a[t]=r,this.setState({isFormValid:je(a),formControls:a})}},{key:"loginHandler",value:function(){var e=Object(S.a)(q.a.mark(function e(){var t,n,a;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,n={email:t.formControls.email.value,password:t.formControls.password.value,returnSecureToken:!0},e.prev=2,e.next=5,I.a.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDRNnBkkGKcuqdQ7rPj-fNaHakX1pvDxgk",n);case 5:a=e.sent,console.log(a.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}},e,this,[[2,9]])}));return function(){return e.apply(this,arguments)}}()},{key:"registerHandler",value:function(){var e=Object(S.a)(q.a.mark(function e(){var t,n,a;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,n={email:t.formControls.email.value,password:t.formControls.password.value,returnSecureToken:!0},e.prev=2,e.next=5,I.a.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDRNnBkkGKcuqdQ7rPj-fNaHakX1pvDxgk",n);case 5:a=e.sent,console.log(a.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}},e,this,[[2,9]])}));return function(){return e.apply(this,arguments)}}()},{key:"submitHandler",value:function(e){console.log(this),e.preventDefault()}},{key:"renderInputs",value:function(){var e=this,t=this.state;return Object.keys(t.formControls).map(function(n,a){var i=t.formControls[n],l=n+a;return r.a.createElement(ke,Object.assign({key:l},i,{shouldValidate:!!i.validation,onChange:function(t){var a=t.target;return e.onChangeHandler(a.value,n)}}))})}},{key:"render",value:function(){var e=this.state;return r.a.createElement("div",{className:he.a.Auth},r.a.createElement("div",null,r.a.createElement("h1",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),r.a.createElement("form",{className:he.a.AuthForm,onSubmit:this.submitHandler},this.renderInputs(),r.a.createElement(ae,{type:"success",onClick:this.loginHandler,disabled:!e.isFormValid},"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement(ae,{type:"primary",onClick:this.registerHandler,disabled:!e.isFormValid},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))))}}]),t}(a.Component),Oe=n(48),ze=n(46),Qe=n.n(ze),xe=n(47),He=n.n(xe),Ae=function(e){var t=e.label,n=e.value,a=e.onChange,i=e.options,l="".concat(t,"-").concat(Math.random());return r.a.createElement("div",{className:He.a.Select},r.a.createElement("label",{htmlFor:l},t),r.a.createElement("select",{id:l,value:n,onChange:a},i.map(function(e,t){var n=e.value+t;return r.a.createElement("option",{key:n,value:e.value},e.text)})))};Ae.defaultProps={label:"",value:1,onChange:function(){},options:[]};var qe=Ae,Se=function(e){return ye({label:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 ".concat(e),errorMessage:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c",id:e},{required:!0})},Ne=function(){return{question:ye({label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441",errorMessage:"\u0412\u043e\u043f\u0440\u043e\u0441 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"},{required:!0}),option1:Se(1),option2:Se(2),option3:Se(3),option4:Se(4)}},Fe=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={quiz:[],isFormValid:!1,rightAnswerId:1,formControls:Ne()},n.selectChangeHandler=n.selectChangeHandler.bind(Object(p.a)(Object(p.a)(n))),n.addQuestionHandler=n.addQuestionHandler.bind(Object(p.a)(Object(p.a)(n))),n.createQuizHandler=n.createQuizHandler.bind(Object(p.a)(Object(p.a)(n))),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"addQuestionHandler",value:function(e){e.preventDefault();var t=this.state,n=Object(Oe.a)(t.quiz),a=n.length+1,r=t.formControls,i=r.question,l=r.option1,s=r.option2,o=r.option3,u=r.option4,c={question:i.value,id:a,rightAnswerId:t.rightAnswerId,answers:[{text:l.value,id:l.id},{text:s.value,id:s.id},{text:o.value,id:o.id},{text:u.value,id:u.id}]};n.push(c),this.setState({quiz:n,isFormValid:!1,rightAnswerId:1,formControls:Ne()})}},{key:"createQuizHandler",value:function(){var e=Object(S.a)(q.a.mark(function e(t){var n;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=this.state,e.prev=2,e.next=5,D.post("/quizes.json",n.quiz);case 5:this.setState({quiz:[],isFormValid:!1,rightAnswerId:1,formControls:Ne()}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}},e,this,[[2,8]])}));return function(t){return e.apply(this,arguments)}}()},{key:"changeHandler",value:function(e,t){var n=this.state,a=Object(me.a)({},n.formControls),r=Object(me.a)({},a[t]);r.value=e,r.touched=!0,r.valid=Ee(r.value,r.validation),a[t]=r,this.setState({isFormValid:je(a),formControls:a})}},{key:"selectChangeHandler",value:function(e){this.setState({rightAnswerId:+e.target.value})}},{key:"renderControls",value:function(){var e=this,t=this.state;return Object.keys(t.formControls).map(function(n,a){var i=t.formControls[n],l=n+a;return r.a.createElement(r.a.Fragment,{key:l},r.a.createElement(ke,Object.assign({},i,{onChange:function(t){var a=t.target;return e.changeHandler(a.value,n)}})),0===a?r.a.createElement("hr",null):null)})}},{key:"render",value:function(){var e=this.state,t=r.a.createElement(qe,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442",value:e.rightAnswerId,onChange:this.selectChangeHandler,options:[{text:1,value:1},{text:2,value:2},{text:3,value:3},{text:4,value:4}]});return r.a.createElement("div",{className:Qe.a.QuizCreator},r.a.createElement("div",null,r.a.createElement("h1",null,"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u0430"),r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},this.renderControls(),t,r.a.createElement(ae,{type:"primary",onClick:this.addQuestionHandler,disabled:!e.isFormValid},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441"),r.a.createElement(ae,{type:"success",onClick:this.createQuizHandler,disabled:0===e.quiz.length},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442"))))}}]),t}(a.Component),Le=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(x,null,r.a.createElement(v.a,null,r.a.createElement(h.a,{path:"/auth",component:Ce}),r.a.createElement(h.a,{path:"/quiz-creator",component:Fe}),r.a.createElement(h.a,{path:"/quiz/:id",component:oe}),r.a.createElement(h.a,{path:"/",component:de})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ie=r.a.createElement(s.a,null,r.a.createElement(Le,null));l.a.render(Ie,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[49,2,1]]]);
//# sourceMappingURL=main.7856c632.chunk.js.map