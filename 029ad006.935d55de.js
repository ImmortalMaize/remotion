(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||r;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(0),a=n.n(o),r=(n(55),function(){var e=Object(o.useRef)(null),t=Object(o.useCallback)((function(){var t;null===(t=e.current)||void 0===t||t.classList.toggle("transparent")}),[]);return a.a.createElement("div",null,a.a.createElement("video",{ref:e,src:"/img/transparent-video.webm",controls:!0,autoPlay:!0,loop:!0}),a.a.createElement("p",{className:"tr-centered",onClick:t},a.a.createElement("button",null,"Toggle transparency")))})},141:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/keyboard-support-3a3be889caac7cae64489ba2a4303d41.gif"},142:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/stitching-progress-1d02620869b969ffd36e67186210b340.png"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(129)),i=n(138),s={slug:"1-4",title:"Remotion 1.4",author:"Jonny Burger",author_title:"Indie Hacker",author_url:"https://github.com/JonnyBurger",author_image_url:"https://avatars2.githubusercontent.com/u/1629785?s=460&u=12eb94da6070d00fc924761ce06e3a428d01b7e9&v=4"},c={permalink:"/blog/1-4",editUrl:"https://github.com/Jonnyburger/remotion/edit/main/packages/docs/blog/blog/2021-02-26-remotion-1-4.md",source:"@site/blog/2021-02-26-remotion-1-4.md",description:"Welcome to the release notes of Remotion 1.4! This is a big release adding support for more use cases and makes Remotion more stable, intuitive and robust.",date:"2021-02-26T00:00:00.000Z",tags:[],title:"Remotion 1.4",readingTime:5.915,truncated:!1,nextItem:{title:"Remotion 1.3",permalink:"/blog/1-3"}},l=[{value:"Support for HEVC and WebM codecs",id:"support-for-hevc-and-webm-codecs",children:[]},{value:"Transparent videos",id:"transparent-videos",children:[]},{value:"New <code>random()</code> API",id:"new-random-api",children:[]},{value:"More configuration options",id:"more-configuration-options",children:[]},{value:"Keyboard controls in the editor",id:"keyboard-controls-in-the-editor",children:[]},{value:"Progress bar for stitching frames together",id:"progress-bar-for-stitching-frames-together",children:[]},{value:"New <code>layout</code> prop for <code>&lt;Sequence&gt;</code>",id:"new-layout-prop-for-sequence",children:[]},{value:"Asynchronously determining composition metadata",id:"asynchronously-determining-composition-metadata",children:[]},{value:"End to End tests for Windows, macOS and Ubuntu",id:"end-to-end-tests-for-windows-macos-and-ubuntu",children:[]},{value:"ESLint rule for wrong asset import",id:"eslint-rule-for-wrong-asset-import",children:[]},{value:"Paying top contributors",id:"paying-top-contributors",children:[]},{value:"Various improvements",id:"various-improvements",children:[]},{value:"Up next...",id:"up-next",children:[]}],u={toc:l};function p(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,s,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Welcome to the release notes of Remotion 1.4! This is a big release adding support for more use cases and makes Remotion more stable, intuitive and robust."),Object(r.b)("h2",{id:"support-for-hevc-and-webm-codecs"},"Support for HEVC and WebM codecs"),Object(r.b)("p",null,"Instead of just supporting H.264, you can now also encode a video in H.265 (HEVC), or as a WebM (in either VP8 or VP9 codec). These codecs will result in smaller file sizes, but have some trade-offs. To help you decide which codec to use, there is now an ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/encoding"}),"encoding guide")," in the docs. See also the\ndocumentation for changing the codec in ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/config#setcodec"}),"the config file"),"\nas well as ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/cli#flags"}),"in the CLI"),"."),Object(r.b)("h2",{id:"transparent-videos"},"Transparent videos"),Object(r.b)("p",null,"Did you know that Chrome and Firefox support video with alpha channels? Play the video and click the button below to dynamically change the background."),Object(r.b)(i.a,{mdxType:"TransparentVideoDemo"}),Object(r.b)("p",null,"Remotion now has enough configurability to enable you to render transparent videos. There is ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/transparent-videos"}),"a new documentation page")," for it, which also gives you guidance on how to render a fallback video for unsupported browsers."),Object(r.b)("h2",{id:"new-random-api"},"New ",Object(r.b)("inlineCode",{parentName:"h2"},"random()")," API"),Object(r.b)("p",null,"Let's say you want to render 100 random particles in a video. A common mistake is to generate random values and store them in a state. The following is an anti-pattern in Remotion:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:"{5-6}","{5-6}":!0}),"export const MyComp = () => {\n  // \u26a0\ufe0f Bug! Random values will change during render\n  const [particles] = useState(() => {\n    return new Array(100).fill(true).map(() => ({\n      x: Math.random(),\n      y: Math.random()\n    }));\n  })\n}\n")),Object(r.b)("p",null,"While this will work while previewing the video, during rendering, the random numbers will change during frames. This is because Remotion spins up multiple instances of Chrome and the random numbers will be different in each instance."),Object(r.b)("p",null,"To help you avoid this mistake, there is now a new ESLint rule that will warn when you use ",Object(r.b)("inlineCode",{parentName:"p"},"Math.random()"),". Instead using it, you can use the new ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/random"}),Object(r.b)("inlineCode",{parentName:"a"},"random()"))," API. It will take a ",Object(r.b)("inlineCode",{parentName:"p"},"seed")," parameter and output a number between 0 and 1. The point of it is: As long as you pass the same seed, you get the same output! That way you don't get unintended effects while multithreaded rendering is performed."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:"{7-8}","{7-8}":!0}),"import {random} from 'remotion';\n\nexport const MyComp = () => {\n  // \u2705 Pseudo-random values that will be same across threads\n  const [particles] = useState(() => {\n    return new Array(100).fill(true).map((_, idx) => ({\n      x: random(`x-${idx}`),\n      y: random(`y-${idx}`),\n    }));\n  })\n}\n")),Object(r.b)("p",null,"Want to learn more? Read the new documentation page about ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-randomness"}),"using randomness"),"."),Object(r.b)("h2",{id:"more-configuration-options"},"More configuration options"),Object(r.b)("p",null,"Several new configuration options have been added as CLI flags, config file entries and to the SSR API:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/encoding#controlling-quality-using-the-crf-setting"}),"setCrf()")," controls the tradeoff between quality and file size of the output file."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/config#setquality"}),"setQuality()")," allows you to control the JPEG quality of the frames rendered."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/config#setcodec"}),"setCodec()")," allows you to select between 4 different codecs (as mentioned above)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/config#setimagesequence"}),"setImageSequence()")," allows you to skip the stitching process and output only an image sequence"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/config#setimageformat"}),"setImageFormat()")," allows you to explicitly select either PNG or JPEG as the format for the rendered frames."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/config#setpixelformat"}),"setPixelFormat()")," has a new accepted value, ",Object(r.b)("inlineCode",{parentName:"li"},"yuva420p"),", which is necessary for transparent videos.")),Object(r.b)("p",null,"The addition of ",Object(r.b)("inlineCode",{parentName:"p"},"setImageSequence()")," and ",Object(r.b)("inlineCode",{parentName:"p"},"setImageFormat()")," as well as ",Object(r.b)("inlineCode",{parentName:"p"},"setCodec()")," makes the previous configuration options ",Object(r.b)("inlineCode",{parentName:"p"},"setOutputFormat()")," and ",Object(r.b)("inlineCode",{parentName:"p"},"--png")," obsolete. and they are therefore now deprecated. While they still work, we encourage you to use the new configuration options which are much more granular - for example now you can render a JPEG sequence if you wish to."),Object(r.b)("h2",{id:"keyboard-controls-in-the-editor"},"Keyboard controls in the editor"),Object(r.b)("p",null,"Thanks to an ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/arthurdenner"}),"awesome pull request by Arthur Denner"),", keyboard navigation in the editor is much improved! ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/JonnyBurger/remotion/pull/125"}),"Reading the PR")," is highly recommended because it's insightful and makes you realize that it's not hard to make a website keyboard-navigateable."),Object(r.b)("p",null,Object(r.b)("img",{alt:"keyboard-support.gif",src:n(141).default})),Object(r.b)("h2",{id:"progress-bar-for-stitching-frames-together"},"Progress bar for stitching frames together"),Object(r.b)("p",null,"Don't be surprised if the newly added codecs are much slower than the default H.264. It's normal. But at least now you can always check the progress of the rendering!"),Object(r.b)("p",null,Object(r.b)("img",{alt:"stitching-progress.png",src:n(142).default})),Object(r.b)("h2",{id:"new-layout-prop-for-sequence"},"New ",Object(r.b)("inlineCode",{parentName:"h2"},"layout")," prop for ",Object(r.b)("inlineCode",{parentName:"h2"},"<Sequence>")),Object(r.b)("p",null,"Few people have rightly pointed out that the ",Object(r.b)("inlineCode",{parentName:"p"},"<Sequence>")," component will absolutely position it's children and there is no way to opt out of it. While we cannot change this now because of backwards-compatibility, you can now pass ",Object(r.b)("inlineCode",{parentName:"p"},'layout="none"')," as a prop to opt out of any layout influence that ",Object(r.b)("inlineCode",{parentName:"p"},"<Sequence>")," has."),Object(r.b)("h2",{id:"asynchronously-determining-composition-metadata"},"Asynchronously determining composition metadata"),Object(r.b)("p",null,"There's a small breaking change in this release - ",Object(r.b)("inlineCode",{parentName:"p"},"delayRender")," works during the 'evaluation' phase. This is the phase where Remotion analyses your project and determines all compositions and does some validation. Watch out for ",Object(r.b)("inlineCode",{parentName:"p"},"delayRender()")," calls outside components, as they might block the evaluation phase now since no components are being rendered during that phase."),Object(r.b)("p",null,"The benefit is that now your compositions can take in data that has been asynchronously fetched. For example the following is now possible:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),'export const RemotionVideo: React.FC = () => {\n  const [videoLength, setVideoLength] = useState(null)\n\n  useEffect(() => {\n    const handle = delayRender();\n\n    determineVideoLength()\n    .then((duration) => {\n      setVideoLength(duration)\n      continueRender(handle)\n    })\n    .catch(err => /**/)\n  }, [])\n\n  if (videoLength === null) {\n    return null;\n  }\n\n  return (\n    <>\n      <Composition\n        id="HelloWorld"\n        component={HelloWorld}\n        durationInFrames={videoLength}\n        fps={30}\n        width={1920}\n        height={1080}\n      />\n    </>\n  )\n}\n')),Object(r.b)("p",null,"Stay tuned for a new API that will allow you to measure video and audio duration!"),Object(r.b)("h2",{id:"end-to-end-tests-for-windows-macos-and-ubuntu"},"End to End tests for Windows, macOS and Ubuntu"),Object(r.b)("p",null,"While Remotion is primarily developed on macOS, other operating systems shouldn't have a sub-par experience or get bugs. While it does not replace manual testing, it helps that ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/JonnyBurger/remotion/blob/main/tests/rendering.test.ts"}),"there are now some end-to-end tests for rendering videos")," and the test suite now runs on all 3 operating systems. Going forward, I will add more tests and contributors are also encouraged to do so."),Object(r.b)("h2",{id:"eslint-rule-for-wrong-asset-import"},"ESLint rule for wrong asset import"),Object(r.b)("p",null,"In Remotion, you shouldn't specify the ",Object(r.b)("inlineCode",{parentName:"p"},"src")," as filepath string, but import the asset instead. To help you not make this mistake, there's a new ESLint rule:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"import {Img} from 'remotion';\nimport hi from './hi.png';\n\n// \u2705 Correct: Using an import statement\n<Img src={hi} />\n\n// \u26a0\ufe0f Warning since 1.4: Import the asset instead\n<Img src=\"./hi.png\"/>\n")),Object(r.b)("h2",{id:"paying-top-contributors"},"Paying top contributors"),Object(r.b)("p",null,"Since Remotion ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/JonnyBurger/remotion/blob/main/LICENSE.md"}),"will make money by selling licenses to bigger companies"),", it's only fair to give contributors their share as well! I have made offers to two top contributors so far to compensate them for their time spent so far and for potential future work. Gladly, they both accepted!"),Object(r.b)("h2",{id:"various-improvements"},"Various improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/JonnyBurger/remotion/pull/122"}),"Fixed showing floats when fps is not a Integer (e.g 59.97fps)"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/JonnyBurger/remotion/pull/117"}),"Ensure minimum node version"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/JonnyBurger/remotion/pull/118"}),"Fix flickering ",Object(r.b)("inlineCode",{parentName:"a"},"<Video>")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/JonnyBurger/remotion/pull/127"}),"Clean up frames after rendering"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/JonnyBurger/remotion/pull/130"}),"Throw error if useVideoConfig is not used in Composition"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/JonnyBurger/remotion/pull/144"}),"Don't timeout if image fails to load"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/JonnyBurger/remotion/pull/146"}),"Runtime error if you miss a prop in ",Object(r.b)("inlineCode",{parentName:"a"},"<Composition>")," or ",Object(r.b)("inlineCode",{parentName:"a"},"<Sequence>"))))),Object(r.b)("h2",{id:"up-next"},"Up next..."),Object(r.b)("p",null,"Some awesome pull requests came in, ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/JonnyBurger/remotion/pull/128"}),"the most notable one adds audio support!")," We are also working on allowing you to customize Puppeteer parameters and making the installation process much faster by not downloading a copy of Chromium. Keep your eyes open for more major improvements coming soon."))}p.isMDXComponent=!0}}]);