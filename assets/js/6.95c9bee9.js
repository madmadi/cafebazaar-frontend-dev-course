(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{209:function(t,e,r){t.exports=r.p+"assets/img/basic-react-and-layout-1.9a02b0b2.png"},219:function(t,e,r){"use strict";r.r(e);var a=r(0),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"نمایش-لیست-پست‌ها-و-layout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#نمایش-لیست-پست‌ها-و-layout"}},[t._v("#")]),t._v(" نمایش لیست پست‌ها و layout")]),t._v(" "),a("h2",{attrs:{id:"react"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react"}},[t._v("#")]),t._v(" React")]),t._v(" "),a("p",[t._v("برای پروژه می‌خوایم از لایبرری React استفاده کنیم که یک کتابخونه است برای ساخت روایط کاربری (User Interfaces)")]),t._v(" "),a("p",[t._v("برای آشنایی با React این "),a("a",{attrs:{href:"https://reactjs.org/tutorial/tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("لینک"),a("OutboundLink")],1),t._v(" رو مطالعه کن. نمی‌خواد که مراحل tutorial رو رو سیستم خودت بری جلو، اما انتظار میره که بعد خوندن اون صفحه، با مفاهیم React آشنا باشی. به طور خاص، موارد زیر:")]),t._v(" "),a("ul",[a("li",[t._v("آشنایی کلی با React components")]),t._v(" "),a("li",[t._v("props رو چجوری به component میدن و component چجوری ازشون استفاده می‌کنه؟")]),t._v(" "),a("li",[t._v("تابع render کامپوننت‌های react کی صدا زده میشن.")]),t._v(" "),a("li",[t._v("JSX چیه؟")]),t._v(" "),a("li",[t._v("کد JSX نهایتا چجوری تو runtime اجرا میشه؟")]),t._v(" "),a("li",[t._v("نحوه استفاده از تابع onClick")]),t._v(" "),a("li",[t._v("state در کمپوننت‌ها")]),t._v(" "),a("li",[t._v("چرا نباید this.state رو مستقیم عوض کرد؟")]),t._v(" "),a("li",[t._v("چرا عوض کردن مقادیر به طور مستقیم یا اصطلاحا mutate کردن خوب نیست؟")]),t._v(" "),a("li",[t._v("functional کمپوننت‌ها کی به کار میان و مزیتشون چیه؟")])]),t._v(" "),a("p",[t._v("در فصل قبل دستور create-react-app ساختار اولیه پروژه رو تولید کردی. همون دایرکتوری blog رو با ادیتور باز کن و لیست فایل‌هایی که ساخته شدند رو ببین. توضیح در مورد structure پروژه رو "),a("a",{attrs:{href:"https://github.com/facebook/create-react-app#creating-an-app",target:"_blank",rel:"noopener noreferrer"}},[t._v("اینجا"),a("OutboundLink")],1),t._v(" بخون. تو همون صفحه بخش "),a("a",{attrs:{href:"https://github.com/facebook/create-react-app#philosophy",target:"_blank",rel:"noopener noreferrer"}},[t._v("philosophy"),a("OutboundLink")],1),t._v(" و "),a("a",{attrs:{href:"https://github.com/facebook/create-react-app#whats-included",target:"_blank",rel:"noopener noreferrer"}},[t._v("What's included"),a("OutboundLink")],1),t._v(" می‌تونن کمکت کنند.")]),t._v(" "),a("h2",{attrs:{id:"تعریف-پروژه"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#تعریف-پروژه"}},[t._v("#")]),t._v(" تعریف پروژه")]),t._v(" "),a("p",[t._v("پروژه‌ای که قراره بنویسی یه وبلاگ خیلی ساده هست که نتیجه نهاییش کاربر باید بتونه بعد از لاگین کردن پست جدید ایجاد کنه، داخل پست‌ها جستجو انجام بده، روی پست‌ها کامنت بزاره یا به کامنت بقیه جواب بده. اینجا به ترتیب ساختن قسمت‌های مختلف این وبلاگ ازت خواسته شده و هر جا لازم بوده توضیحات یا لینک آموزشی بهت دادیم که بخونی.")]),t._v(" "),a("h2",{attrs:{id:"نمایش-لیست-پست‌ها"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#نمایش-لیست-پست‌ها"}},[t._v("#")]),t._v(" نمایش لیست پست‌ها")]),t._v(" "),a("p",[t._v("تو این قسمت می‌خوایم لیست پست‌های موجود در سرور رو بگیریم و نشون بدیم. برای این کار اول باید در مورد کارکرد React و JSX بیشتر یاد بگیریم. موارد زیر رو مطالعه کن:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://reactjs.org/docs/introducing-jsx.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("آشنایی با JSX"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://reactjs.org/docs/rendering-elements.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("نمایش Element‌ها"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://reactjs.org/docs/components-and-props.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("components and props"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"نمایش-یک-پست"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#نمایش-یک-پست"}},[t._v("#")]),t._v(" نمایش یک پست")]),t._v(" "),a("p",[t._v("فایل src/App.js رو باز کن. اول می‌خوایم یه پست داخل پاراگرافی که کلاس "),a("code",[t._v("App-intro")]),t._v(" داره نشون بدیم. پس متن فعلی داخل این تگ رو پاک کن.")]),t._v(" "),a("p",[t._v("بالای فایل، قبل از شروع کلاس App، متغیر post رو این‌طوری تعریف کن:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POST")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"نهمین جشنواره رسانه‌های دیجیتال"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"author"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ساسان"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"date"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"۲۸ دی ۹۵"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"visits"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("253")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"body"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"نهمین جشنواره رسانه‌های دیجیتال در پنج بخش اصلی برگزار می‌شود. شما توسعه‌دهندگان گرامی می‌توانید تا پایان دی‌ماه برنامه‌های خود را در بخش «نرم افزارهای تلفن همراه و رسانه های هوشمند» این جشنواره ثبت کنید. برای کسب اطلاعات بیشتر می‌توانید به این <a href='http://fair.saramad.ir/fa/home' target='_blank'>لینک </a> مراجعه کنید.\"")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("داخل تگ p، قسمت POST.body رو رندر کن.")]),t._v(" "),a("h3",{attrs:{id:"تمرین"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#تمرین"}},[t._v("#")]),t._v(" تمرین")]),t._v(" "),a("p",[t._v("تحقیق کن که چرا React، نمی‌ذاره تگ a که داخل POST.body بود رندر بشه و در قدم بعد تحقیق کن که چه‌جوری این مشکل حل میشه.")]),t._v(" "),a("p",[t._v("این قسمت که فقط body داخلش هست رو عوض کن و همه فیلد‌های داخل POST به جز id رو در جاهای مناسب داخل صفحه نشون بده (با styling مناسب)")]),t._v(" "),a("h2",{attrs:{id:"نمایش-تمام-پست‌ها"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#نمایش-تمام-پست‌ها"}},[t._v("#")]),t._v(" نمایش تمام پست‌ها")]),t._v(" "),a("p",[t._v("حالا به جای یه دونه پست، می‌خوایم لیستی از پست‌ها رو داخل صفحه نشون بدیم. اول "),a("a",{attrs:{href:"https://reactjs.org/docs/lists-and-keys.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("اینجا"),a("OutboundLink")],1),t._v(" رو که در مورد رندر کردن لیست‌ها هست، بخون. تعریف متغیر posts رو از "),a("a",{attrs:{href:"https://gist.github.com/masious/22c1e2dc4a09cadd5ebd8dbdb5a8fcbf",target:"_blank",rel:"noopener noreferrer"}},[t._v("اینجا"),a("OutboundLink")],1),t._v(" بگیر، داخل فایل posts.js بذازشون و داخل صفحه رندرشون کن.")]),t._v(" "),a("p",[t._v("قدم بعدی اینه که این لیست رو از یه promise بگیری. اول در مورد "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"}},[t._v("promiseها"),a("OutboundLink")],1),t._v(" که تو ES6 به خود JavaScript اضافه شدند،  بخون. سپس در مورد "),a("a",{attrs:{href:"https://reactjs.org/docs/state-and-lifecycle.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("state"),a("OutboundLink")],1),t._v(" کامپوننت‌ها تو React بخون. برای درک بیشتر lifecycle methodها توی ری‌اکت این "),a("a",{attrs:{href:"https://reactjs.org/docs/react-component.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("لینک"),a("OutboundLink")],1),t._v(" رو هم بخون تا ترتیب و زمان دقیق فراخوانی متدهای کامپوننت‌ها رو بدونی و اینکه هدف هر کدوم چیه و کجا میشه ازشون استفاده کرد. همچنین برای مقداردهی اولیه به state و متدهایی که باید bind بشن تا بتونن با state کار کنن این "),a("a",{attrs:{href:"https://itnext.io/property-initializers-what-why-and-how-to-use-it-5615210474a3",target:"_blank",rel:"noopener noreferrer"}},[t._v("لینک"),a("OutboundLink")],1),t._v(" رو بخون.")]),t._v(" "),a("p",[t._v("بعد، فایل post-service.js رو از "),a("a",{attrs:{href:"https://gist.github.com/masious/408b322c3e3ce5d8162ebe3507cc2afa",target:"_blank",rel:"noopener noreferrer"}},[t._v("اینجا"),a("OutboundLink")],1),t._v(" بگیر. توی تابع lifecycle مناسب، پست‌ها رو از این سرویس بگیر و جای مناسب بریز تا داخل تابع render بتونی نشونشون بدی.")]),t._v(" "),a("p",[t._v("قبل‌تر خوندیم که برای request زدن به سرور از xhr میشه استفاده کرد. برای این‌کار بهتره با "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("fetch"),a("OutboundLink")],1),t._v(" آشنا بشی و از این به بعد از اون استفاده کنی. این "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",target:"_blank",rel:"noopener noreferrer"}},[t._v("لینک"),a("OutboundLink")],1),t._v(" هم شیوه‌ی استفاده از fetch رو توضیح داده.")]),t._v(" "),a("p",[t._v("حالا تابع PostService رو جوری تغییر بده که پست‌ها رو از سرور از آدرس زیر بگیره و تو صفحه نشونشون بده:")]),t._v(" "),a("p",[a("code",[t._v("localhost:8080/posts")])]),t._v(" "),a("p",[t._v("وقتی کاربر صفحه رو لود کرده، اما هنوز لیست پست‌ها لود نشده، باید loading مناسب به کاربر نشون بدیم. اول "),a("a",{attrs:{href:"https://reactjs.org/docs/conditional-rendering.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("اینجا"),a("OutboundLink")],1),t._v(" رو که در مورد رندرینگ شرطی هست بخون. حالا کاری کن که تا وقتی لیست پست‌ها لود نشدند، کاربر به جای صفحه خالی، متن «در حال بارگزاری...» رو ببینه.")]),t._v(" "),a("p",[t._v("وقتی مستقیما ریکوئست به سرور میزنی با پیغام خطای CORS مواجه خواهی شد. درباره CORS این "),a("a",{attrs:{href:"https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome",target:"_blank",rel:"noopener noreferrer"}},[t._v("لینک"),a("OutboundLink")],1),t._v(" رو بخون تا علت وجود چنین مکانیزمی رو در مرورگرها بدونی. برای اینکه پروژه رو بخوای ادامه بدی و ریکوئست بزنی ۳ راه داری")]),t._v(" "),a("ol",[a("li",[a("p",[a("a",{attrs:{href:"https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc",target:"_blank",rel:"noopener noreferrer"}},[t._v("اجرای کروم با فلگ disable-web-security"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc",target:"_blank",rel:"noopener noreferrer"}},[t._v("نصب پلاگین کروم"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://create-react-app.dev/docs/proxying-api-requests-in-development",target:"_blank",rel:"noopener noreferrer"}},[t._v("استفاده از امکان پراکسی در webpack dev server"),a("OutboundLink")],1)])])]),t._v(" "),a("p",[t._v("درباره هر سه روش مطالعه کن و با هر کدوم راحت‌تر بودی (روش سوم رو بهت پیشنهاد میکنم) کار رو ادامه بده.")]),t._v(" "),a("h2",{attrs:{id:"ساخت-layout-برای-blog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ساخت-layout-برای-blog"}},[t._v("#")]),t._v(" ساخت layout برای blog")]),t._v(" "),a("p",[t._v("رسیدیم به بخشی که باید ظاهر بلاگمون رو کمی مرتب‌تر کنیم.")]),t._v(" "),a("p",[t._v("بدین منظور، اول باید در مورد تگ‌های معنایی وب "),a("a",{attrs:{href:"https://www.w3schools.com/html/html5_semantic_elements.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("semantic elements"),a("OutboundLink")],1),t._v(" اطلاعات بیشتری کسب کنی. می‌خوایم برای ایجاد صفحه پست‌ها از المنت‌ها استفاده کنیم. اطلاعات بیشتر استفاده از این تگ‌های جدید برای ساختن وبسایت رو می‌تونید در "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),a("OutboundLink")],1),t._v(" جستجو کنید.")]),t._v(" "),a("p",[t._v("در ادامه این "),a("a",{attrs:{href:"http://html5doctor.com/designing-a-blog-with-html5/",target:"_blank",rel:"noopener noreferrer"}},[t._v("مقاله"),a("OutboundLink")],1),t._v(" در مورد ساختار یک وبلاگ با این عناصر رو بخون.")]),t._v(" "),a("p",[t._v("ما می‌خوایم برای پیاده‌سازی layout از استایل‌های "),a("a",{attrs:{href:"http://getbootstrap.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Twitter Bootstrap"),a("OutboundLink")],1),t._v(" استفاده کنیم و نسخه Sass بوتسترپ رو در پروژه به کار ببریم.")]),t._v(" "),a("h3",{attrs:{id:"sass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sass"}},[t._v("#")]),t._v(" SASS")]),t._v(" "),a("p",[t._v("Sass یه پیش‌پردازنده برای CSS هست که توسعه‌ی استایل‌ صفحات وب رو به خصوص در اپلیکیشن‌های بزرگ، ساده‌تر می‌کنه. سینتکس Sass شبیه به CSS هست و تمام کدهای CSS برای Sass معتبر هستن. اما کد‌های Sass الزاما مطابق CSS نیستن و باید توسط یه کامپایلر به CSS تبدیل بشن. برای آشنایی با Sass "),a("a",{attrs:{href:"https://sass-lang.com/guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("اینجا"),a("OutboundLink")],1),t._v(" و "),a("a",{attrs:{href:"https://scotch.io/tutorials/getting-started-with-sass",target:"_blank",rel:"noopener noreferrer"}},[t._v("اینجا"),a("OutboundLink")],1),t._v(" رو ببین و داکیومنت‌ Sass رو هم بخون.")]),t._v(" "),a("h3",{attrs:{id:"twitter-bootstrap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#twitter-bootstrap"}},[t._v("#")]),t._v(" Twitter Bootstrap")]),t._v(" "),a("p",[t._v("Twitter Bootstrap یه فریم‌ورک برای ایجاد صفحات وب هست که شامل استایل‌ها و المنت‌های UI و… میشه. در این پروژه ما می‌خوایم بوتسترپ رو با npm نصب کنیم و محتویات داخل این "),a("a",{attrs:{href:"https://github.com/twbs/bootstrap/blob/v4.3.1/scss/bootstrap.scss",target:"_blank",rel:"noopener noreferrer"}},[t._v("فایل"),a("OutboundLink")],1),t._v(" رو جایی داخل پروژه کپی کنیم و قسمت‌هایی که نمی‌خوایم رو کامنت کنیم تا در کد نهایی وجود نداشته‌باشن.")]),t._v(" "),a("ul",[a("li",[t._v("این کار کمک می‌کنه که حجم فایل نهایی که توسط کاربر گرفته میشه، کم‌تر باشه.")]),t._v(" "),a("li",[t._v("برای این که بتونی ماژول‌های داخل فایل bootstrap.scss رو داخل پروژه import کنی، باید آدرسی که فایل‌ها ازش import میشن رو عوض کنی.")])]),t._v(" "),a("p",[t._v("برای آشنایی بیشتر با Twitter Bootstrap می‌تونی "),a("a",{attrs:{href:"https://getbootstrap.com/docs/4.1/getting-started/introduction/",target:"_blank",rel:"noopener noreferrer"}},[t._v("مستنداتش"),a("OutboundLink")],1),t._v(" رو بخونی.")]),t._v(" "),a("p",[t._v("پروژه create-react-app که باهاش پروژه رو راه‌اندازی کردیم، به طور پیش‌فرض از پیش‌پردازنده‌های CSS استفاده نمی‌کنه و ما باید این قابلیت رو خودمون به پروژه اضافه کنیم. "),a("a",{attrs:{href:"https://facebook.github.io/create-react-app/docs/adding-a-sass-stylesheet",target:"_blank",rel:"noopener noreferrer"}},[t._v("اینجا"),a("OutboundLink")],1),t._v(" نوشته که چیکار باید کرد.")]),t._v(" "),a("p",[t._v("چیزی که ما از وبلاگ در این مرحله خواهیم دید، همچین چیزی خواهد بود:")]),t._v(" "),a("p",[a("img",{attrs:{src:r(209),alt:"Result"}})]),t._v(" "),a("p",[t._v("هدر: قسمت بالا، شامل عنوان و توضیح کوتاهی در مورد بلاگ هست، که متن‌هاش سمت کلاینت هارد-کد شدند.")]),t._v(" "),a("p",[t._v("سایدبار: سمت چپ، یه ستون هست که فعلن فقط لینک‌های وبلاگ داخلش هستند. اما بعدا قراره چیز‌های بیشتری این تو بیاریم.")]),t._v(" "),a("p",[t._v("فوتر: در عکس بالا نمایش داده نشده اما یه فوتر انتهای بلاگ درنظر بگیر که فعلا نوشته مربوط به کپی‌رایت داخلش باشه. نکته مهم درباره فوتر اینه که همیشه باید در انتهای صفحه (نه پنجره مرورگر) نمایش داده بشه. (مثلن اگه هنوز متن ستون‌ها و ارتفاعشون کم هست، فوتر وسطِ صفحه نیاد و همیشه پایین صفحه نمایش داده بشه. اما اگه متن ستون‌ها زیاد شد و صفحه اسکرول عمودی داشت، فوتر هم به تناسب میره پایین و زیر دو ستون در انتهای صفحه قرار می‌گیره). این کار رو باید بدون استفاده از جاوااسکریپت انجام بده.")]),t._v(" "),a("p",[t._v("مطالب: سمت راست، قسمت مطالب هست که شامل عنوان، نویسنده، تاریخ ارسال و متن هست.")]),t._v(" "),a("p",[t._v("سازگار با موبایل: درباره‌ی "),a("a",{attrs:{href:"https://alistapart.com/article/responsive-web-design/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Responsive Web Design"),a("OutboundLink")],1),t._v(" مطالعه کن و بعد layout بالا رو طوری تغییر بده که در حالت موبایل (مثلا عرض نمایشگر کمتر-مساوی ۷۶۷ پیکسل) ستون سمت چپ زیر ستون سمت راست نمایش داده بشه.")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developers.google.com/web/fundamentals/design-and-ux/responsive",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developers.google.com/web/fundamentals/design-and-ux/responsive"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("نکاتی که انتظار میره بهشون بها داده شده باشه، اینا هستن:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("از تگ‌های معنایی استفاده شده باشه. (مثل:"),a("code",[t._v("‌<article>")]),t._v(" و "),a("code",[t._v("<header>")]),t._v(" و "),a("code",[t._v("<section>")]),t._v(" و "),a("code",[t._v("<main>")]),t._v(" و …)")])]),t._v(" "),a("li",[a("p",[t._v("از این تگ‌ها به درستی استفاده شده باشه.")])]),t._v(" "),a("li",[a("p",[t._v("مطالب از نظر بصری خوانا باشند. (مثل line-height و فونت و…)")])]),t._v(" "),a("li",[a("p",[t._v("مرز بین سه قسمتِ هدر، ساید‌بار و مطالب، به لحاظ بصری مشخص باشه.")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);