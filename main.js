// todo ======== LESSON 01 ======== //
// ? introduction to GSAP
/*
document.addEventListener("DOMContentLoaded", () => {
  gsap.from("h1", {
    duration: 5, // Animation duration in seconds
    opacity: 0,
    y: -50,
  })
})
*/

// todo ======== LESSON 02 ======== //
// ? Tween
/** from & to
document.addEventListener("DOMContentLoaded", () => {

  gsap.from("img", { // هبتدا من
  duration: 2, // Animation duration in seconds
    opacity: 0,
    y: 100,
    rotate: 60,
    scale: 0.5,
    repeat: 2, // تكرار الحركة مرتين
    repeatDelay: 1, // تأخير بين كل تكرار
    stagger: 1, // ده لما اكون مترجت اكتر من عنصر ف بيعمل تاخير بينهم في الانيميشن
    ease: "bounce.out", // نوع الحركة
    onComplete: () => {
      // Callback function when the animation is complete
      console.log("Animation completed!")
    }
  })

  // gsap.from("path", { // هبتدا من
  // 	duration: 1,
  // 	opacity: 0,
  // 	y: 100,
  // 	rotate: 60,
  // 	scale: 0.5,
  // 	ease: "back", // نوع الحركة
  // 	stagger: .4, // ده لما اكون مترجت اكتر من عنصر ف بيعمل تاخير بينهم في الانيميشن
  // 	onComplete: () => {
  // 		// Callback function when the animation is complete
  // 		console.log("Animation completed!")
  // 	}
  // })


  gsap.to("path", { // الي
  duration: 1,
  attr : {
      fill: "white",
    }
  })

})
*/

/** fromTo

window.addEventListener("click", () => {
  gsap.fromTo("path", {
    opacity: 0,
    y: -50,
    attr: {
      fill: "black",
    }
  }, {
    duration: 2,
    opacity: 1,
    y: 0,
    ease: "back",
    attr: {
      fill: "white",
    }
  })
})
*/

// todo ======== LESSON 03 ======== //
// ? Staggers
/**
document.addEventListener("DOMContentLoaded", () => {
  gsap.from("img", {
    opacity: 0,
    y: 50,
    duration: 1,
    // repeat: -1, // تكرار الحركة لانهائي بس هيستنى باقي العناصر تخلص الحركه بتاعتها عشان يتكرر
    stagger: {
      repeat: -1, // تكرار الحركة لانهائي وكمان مش هيستنى باقي العناصر تخلص الحركه بتاعتها عشان يتكرر
      // each: .1, // = staggerv: .1
      amount: 1, // وهنا هو بيقسم عدد الثواني علي كل العناصر
      // from: "center", //  هيبدأ الحركة من النص
      from: 2, // هيبدأ الحركة من الاندكس رقم 2
      yoyo: true, // هيعمل الحركة في الاتجاهين
    }
  })
})
*/

// todo ======== LESSON 04 ======== //
// ? Ease
/**
document.addEventListener("DOMContentLoaded", () => {
  // * EASE basic
  // gsap.from("img", {
  // 	opacity: 0,
  // 	y: 100,
  // 	duration: 1,
  // 	stagger: 0.1, //
  // 	// ease:"power1.Out", // default ease
  // 	ease: "steps(4)",
  // 	// ease: "elastic.out(9,.4)", // احساس الاستك
  // 	// ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.741,-0.047 0.9,0.1 1.091,0.28 0.818,1.001 1,1 "), // custom ease
  // 	// ease: CustomEase.create("custom", "M0,0 C0.083,0.294 0.531,0.026 0.797,0.216 0.928,0.309 0.752,1 1,1 "), // custom ease
  // })

  // * EASE CustomBounce
  // // إنشاء Bounce مخصص
  // CustomBounce.create("myBounce", {
  // 	strength: 0.6,
  // 	squash: 2.5,
  // 	squashID: "myBounce-squash"
  // });

  // // حركة bounce للأعلى
  // gsap.from("img", {
  // 	y: -200,
  // 	duration: 2,
  // 	ease: "myBounce",
  // 	stagger: 0.2
  // });

  // // تأثير squash/stretch في نفس الوقت
  // gsap.to("img", {
  // 	scaleX: 1.3,
  // 	scaleY: 0.6,
  // 	duration: 2,
  // 	ease: "myBounce-squash",
  // 	transformOrigin: "center bottom",
  // 	stagger: 0.2
  // });

})
*/

// todo ======== LESSON 05 ======== //
// ? Timeline (Part 1)
/**
const tl = gsap.timeline()

tl.from("h1", {
  duration: 2,
  opacity: 0,
  delay: 1, // تأخير قبل بدء الحركة
  rotate: 60,
  y: -50,
},) // +=1 يعني بعد 1 ثانية من نهاية الحركة السابقة
tl.from("p", {
  scale: 0.5,
  duration: 1,
  opacity: 0,
  y: -50,
}, "+=1")
tl.from("button", {
  duration: 1,
  opacity: 0,
}, "-=25%") // +=2 يعني بعد 2 ثانية من نهاية الحركة السابقة

"+=1"         // 1 ثانية بعد نهاية التايملاين → بتعمل فجوة بين الأنيميشينات
"-=1"         // 1 ثانية قبل نهاية التايملاين → بيخلي الأنيميشين يركب على اللي قبله
"myLabel+=2"  // 2 ثانية بعد العلامة اللي اسمها myLabel

"<+=3"        // 3 ثواني بعد بداية الأنيميشين اللي قبله
"<3"          // نفس <+=3 بالضبط → + مفهومة ضمنيًا بعد <
">-0.5"       // نص ثانية قبل نهاية الأنيميشين اللي قبله

"-=25%"       // ابدأ قبل نهاية التايملاين بـ 25٪ من مدة الأنيميشين ده
"+=50%"       // ابدأ بعد نهاية التايملاين بـ 50٪ من مدة الأنيميشين → فجوة
"<25%"        // 25٪ من بداية الأنيميشين اللي قبله
"<+=25%"      // 25٪ من مدة الأنيميشين الحالي بعد بداية الأنيميشين اللي قبله
"myLabel+=30%" // 30٪ من مدة الأنيميشين الحالي بعد العلامة myLabel
*/

// todo ======== LESSON 06 ======== //
// ? Timeline (Part 2)
/**
document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline();

  tl.from("h1", {
    autoAlpha: 0, // opacity: 0 + visibility: hidden To opacity: 1 + visibility: visible
    y: 100,
    duration: 2,
    onUpdate: () => { // Callback function on every update of the animation
      console.log("Animation is updating!");
    },
  })
  tl.from("p", {
    autoAlpha: 0,
    y: -100,
    duration: 2,
    onComplate: () => { // Callback function when the animation is completed
      console.log("Paragraph animation completed!")
    }
  }, "<")
  tl.from("a", {
    scale: 0,
    repeat: 2, // تكرار الحركة مرة واحدة
    ease: "elastic",
    duration: 2,
    onStart: () => { // Callback function when the animation starts
      console.log("Animation started!")
    },
    // yoyo: true, // الحركة في الاتجاهين
    onRepeat: () => { // Callback function when the animation repeats
      console.log("repeat animation!")
    }
  }, "1")// يعني بعد ثانيه من بدايه التايملاين

})
*/

// todo ======== LESSON 07 ======== //
// ? FOUC (Flash of Unstyled Content) & IRR (Inertial Rethink)
/**
document.addEventListener("DOMContentLoaded", () => {
  // يجهز DOM بيشغل الكود بعد ما الـ  DOMContentLoaded
  // بس مش الحل الوحيد FOUC ممكن يساعد في مشكلة
  // autoAlpha: 0; بعد كدا بستخدم حاجه اسمها  html علي العنصر في visible الحل الافضل بستخدام ال
  // ودي هتمنع مشكله الفلاش نهائي
  gsap.registerPlugin(GSDevTools)
  // Rejester  GSDevTools plugin

  gsap.from("img", {
    duration: .5,
    autoAlpha: 0, // opacity: 0 + visibility: hidden
  })

  const tl = gsap.timeline()

  tl.from(".red", {
    opacity: 0,
  })
  tl.from(".green", {
    opacity: 0,
  })
  tl.from(".blue", {
    opacity: 0,
  })
  // الفكره بقا ان لما اجي اعمل انيمشن  تاني لعنصر موجود اصلا في التايملاين
  // opacity 0 الي opacity 0 فا ازاي هحوله من opacity 0 هيا هنا شايفه انه اصلا العنصر
  // tl.from(".red", {
  // 	opacity: 0,
  // فعشان احل المشكه دي بستعمل
  // immediateRender: false, // هيشغل الانيميشن كانه اول مره في التايملاين عادي
  // })

  // fromTO حل تاني بال
  // tl.fromTo(".red", {
  // 	opacity: 0,
  // }, {
  // 	opacity: 1,
  // })

  // دي بتظهر شريط تحكم للانيميشان
  GSDevTools.create()
})
*/

// todo ======== LESSON 08 ======== //
// ? MatchMedia = Responsive Animations
/**
document.addEventListener("DOMContentLoaded", () => {
  const mm = gsap.matchMedia()
  // 1
  // mm.add('(min-width: 700px)', () => {
  // 	gsap.from("img", {
  // 		autoAlpha: 0,
  // 		rotate: 360,
  // 		duration: 2,
  // 		ease: "back"
  // 	})
  // })

  // 2 Condtions
  // mm.add({
  // 	isMobile: "(min-width: 701px)",
  // 	isDesktop: "(max-width: 700px)",
  // }, (context) => {
  // 	const { isMobile, isDesktop } = context.conditions;
  // 	gsap.from("img", {
  // 		autoAlpha: 0,
  // 		rotate:isMobile ? 360 : -360,
  // 		duration: 2,
  // 		ease: "back"
  // 	})
  // })

  // event listener
  // mm.add('(min-width: 700px)', (context) => {

  // 	context.add("spin", () => {
  // 		gsap.fromTo(".con img", {
  // 			rotate: 0,
  // 		}, {
  // 			rotate: 360,
  // 			duration: 2,
  // 			ease: "back"
  // 		})
  // 	})

  // 	// المشكله بقا اني حته لو مش في الشاشه المحدده ودوست كليك هيشتغل برضو الانيميشن
  // 	// context.add فالحل هو اني استخدم ال
  // 	window.addEventListener("click", context.spin)
  // 	return () => {
  // 		window.removeEventListener("click",context.spin)
  // 	}
  // })
})
*/

// todo ======== LESSON 09 ======== //
// ? introduction to Plugins

// todo ======== LESSON 10 ======== //
// ? ScrollTrigger (Part 1)
/**
- اقدر استخدمه في اي وقت و في اي مكان

document.addEventListener("DOMContentLoaded", _ => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.to("#img", {
    rotate: 360,
    scale: 1.2,
    duration: 5,
    scrollTrigger: {
      trigger: "#box-img", // للعنصر parent نقطه البدايه ويفضل تكون ال
      start: "top top", // هبدا من فين من نقطه البدايه دي
      // end: "+=500px", // ودي تخلي الانيمشن يشتغل لحد ما اليوزر يوصل لحته معينه فالصفخه
      end: "center top", // box هيخلص في بدايه نص ال
      // الي هو بيربط الانيميشن بالاسكرول scrub وكمان مش بتشتغل من غير ال
      //duration وكمان مش بتحتاج ل
      scrub: true, //  بيربط الانيميشن بالاسكرول
      markers: true,
      pin: true, // الصوره هتفضل ثابته علي الشاشه لحد ما الانيميشن يخلص
    }
  })
})
*/

// todo ======== LESSON 11 ======== //
// ? ScrollTrigger (Part 2)
/**
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // طرق الاستخدام
  // tween داخل ال
  const tween = gsap.to("#box1", {
    rotate: 360,
  });

  ScrollTrigger.create({
    animation: tween,
    trigger: "#box1",
    start: "top center",
    end: "+=300",
    markers: true,
    scrub: 1, // معناها هيكون مرتبط بالانيميشن برضو بس الفكره هيكون فيه ديلاي 1ث بين الاسكرول والانميشن
    // once:true, // الانيميشن هيحصل مره واحده بس بعد كده هيتمسح
    onEnter: () => { // لما ادخل منطقه الانميشن
      console.log("onEnter")
      gsap.to("#box1", { opacity: 1 })
    },
    onLeave: () => { // لما اخرج من منطقه الانيميشن
      console.log("onLeave")
      gsap.to("#box1", { opacity: 0 })
    },
    onEnterBack: () => { // لما ارجع لمنطقه الانيميشن الي خرجت منها
      console.log("onEnterBack")
      gsap.to("#box1", { opacity: 1 })
    },
    onLeaveBack: () => { // لما اخرج من من منطقه الانيميشن الي رجعت بيها
      console.log("onLeaveBack")
      gsap.to("#box1", { opacity: 1 })
    },
    // toggleAction: "onEnter onLeave onEnterBack onLeaveBack"
    toggleActions: "play pause restart complate",
    toggleClass: { // لما اكون في منطقه الانيميشن هيضيفها علي العنصر ولما اخرج منه هيشيله
      targets: "#box1",
      className: "scrollTraggir-active"
    },
  })

  // timeline 1 داخل الـ
  // const tl = gsap.timeline({
  //   // الكود الي بكتبه هنا بيطبف علي جميع العناصر الي بتستخدم التايم لاين ده
  //   scrollTrigger: {
  //     trigger: "#box1",
  //     start: "top center",
  //     markers: true,
  //   }
  // })
  // tl.to("#box1", {
  //   rotate: 360,
  // })
  // // يخلص الانيميشن بتاعه box1 هيحصله الانيميشن لما الـ
  // tl.to("#box2", {
  //   rotate: 360,
  // })

  // timeline 2 داخل الـ
  // const tl = gsap.timeline()
  // tl.to("#box1", {
  //   rotate: 360,
  // })
  // tl.to("#box2", {
  //   rotate: 360,
  // })
  // // هيا هيا نفس الفكره الي فاتت بس بطريقه مختلفه
  // ScrollTrigger.create({
  //   animation: tl, // timeline هيطبق علي ال
  //   trigger: "#box1",
  //   start: "top center",
  //   markers: true,
  //   scrub: true,
  // })
});
*/

// todo ======== LESSON 12 ======== //
// ? ScrollTrigger (Part 3) ==
/** Scroll Horizontal
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: "#box1",
    start: "top top",
    end: "+=500",
    markers: true,
    horizontal: true, // markers ده هيقلب ال

    onEnter: () => console.log("onEnter"),
    onLeave: () => console.log("onLeave"),
    onEnterBack: () => console.log("onEnterBack"),
    onLeaveBack: () => console.log("onLeaveBack"),

  });
});
*/

/** Fake Horizontal Scroll
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const slides = gsap.utils.toArray('.slide');

  const horizontalScrollTween = gsap.to(slides, {
    xPercent: -100 * (slides.length - 1),
    ease: "none",// تشتغل صح containerAnimation لازم عشان
    scrollTrigger: {
      trigger: "#container",
      start: "top top",
      scrub: 1,
      pin: true,
    }
  });

  gsap.to("#smallBox", {
    rotate: 360,
    scrollTrigger: {
      trigger: "#smallBox",
      start: "top center",
      end: "+=500",
      scrub: 1,
      markers: true,
      containerAnimation: horizontalScrollTween,
    }
  });
});
*/

// todo ======== LESSON 13 ======== //
// ? Community In Gsap

// todo ======== LESSON 14 ======== //
// ? Gsap In React

// todo ======== LESSON 15 ======== //
// ? ScrollSmoother (Part 1)
/**
document.addEventListener("DOMContentLoaded", event => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
  // Section One
  // const btn = document.querySelector(".btn-scroll")
  // gsap.to(".btn-scroll", {
  //   scale: 1.2,
  //   y: 100,
  //   scrollTrigger: {
  //     trigger: "#smooth-content",
  //     markers: true,
  //     start: "top top",
  //     end: "12% 10%",
  //     scrub: true
  //   }
  // })
  // const smoother = ScrollSmoother.create({
  //   smooth: 2,
  // })
  // btn.addEventListener("click", () => {
  //   smoother.scrollTo(".box-c", true, "top center") // true = معناها ان هيبقا فيه سلاسه اثناء الاسكرول
  // })

  // Section Two
  // const smoother = ScrollSmoother.create({
  //   smooth: 2,
  //   effects: true
  // })
  // smoother.effects(".box", {
  //   lag: i => (i + 1) * 1, // بس بترجع تاني لمكانها اول ما اوقف سكرول y بتخلي العناصر تتحرك في اتجاه
  // // speed: i => (i + 1) * .2 // مش بترجع تاني لمكانها
  // })

  // Section Three
  // const smoother = ScrollSmoother.create({
  //   wrapper: "#smooth-wrapper",
  //   content: "#smooth-content",
  //   smooth: 2,
  //   effects: true
  // })
})
*/

// todo ======== LESSON 16 ======== //
// ? ScrollSmoother (Part 2)
/**
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

  const smoother = ScrollSmoother.create({
    smooth: 3, // بس decktop هنا ده بشتعل على
    // smoothTouch: 3, // كده بيشتغل هلي الموبايل كمان
    ignoreMobileResize: true, // ودي معناها ان لو حصل تغير في حجم الشاشه تجهاله طب ليه؟ عشان ببساطه حاجه زي الشريط العلوي بتاع المتصحفه ممكن وهو بيظهر وبيختفي يعمل لغبطه ولاج في شكل الانيمشن
    normalizeScroll: true, // وده معناه اني بثبت الشريط العلوي بتاع المتصفح ولكن هذا الميزه لا تدعم جميع الاجهزه
  })

  const tl = gsap.timeline({
    defaults: {
      ease: "none"
    },
    scrollTrigger: {
      trigger: "#container",
      start: "top top",
      scrub: true,
      markers: true,
      pin: true
    }
  }).to("#red", {
    x: () => window.innerWidth - document.querySelector("#red").offsetWidth - 18,
    rotate: 360,
  }).to("#yellow", {
    x: () => window.innerWidth - document.querySelector("#red").offsetWidth - 18,
    rotate: 360,
  }, "<")
})
*/

// todo ======== LESSON 17 ======== //
// ? quickSetter, quickTo [Mouse Follow]
/**
document.addEventListener("DOMContentLoaded", () => {
  // ده عشان الماوس يبقا في نص البوكس
  gsap.set("#box", { xPercent: -50, yPercent: -50 })

  // الطريقه الاولى ومينفعش استخدم فيها انيمشن وكمان البيرفورمنس مش بيكون احسن حاجه
  // window.addEventListener("mousemove", e => {
  //   gsap.set("#box", { x: e.pageX, y: e.pageY })
  // })

  // الطريقه التانيه والافضل بسبب انها بتحسن في اداء البيرفورمنس بس برضو مينفعش استخدم فيها انيميشن
  // const xSetter = gsap.quickSetter("#box", "x", "px") // "وحدة القياس" - "االخاصيه" - "العنصر"
  // const ySetter = gsap.quickSetter("#box", "y", "px") // "وحدة القياس" - "االخاصيه" - "العنصر"
  // window.addEventListener("mousemove", e => {
  //   xSetter(e.pageX)
  //   ySetter(e.pageY)
  // })

  // الطريقه التالته وبتحسن من البيرفورمنس وكمان اقدر اعمل انيميشن

  const xQuickTo = gsap.quickTo("#box", "x", { // gsap.to شبه ال
    duration: 0.5,
    ease: "power3"
  })
  const yQuickTo = gsap.quickTo("#box", "y", {
    duration: 0.5,
    ease: "power3"
  })
  window.addEventListener("mousemove", e => {
    xQuickTo(e.pageX)
    yQuickTo(e.pageY)
  })
})
*/

// todo ======== LESSON 18 ======== //
// ? SplitText
/**
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(SplitText)

  document.fonts.ready.then(() => { // ل فونت مثلا ميحصلش مشكله او لاج في النص ف انا بستني الفونت يحمل بعد كده يتنفذ الفانكشنimport ده عشان لو انا عامل
    const split = SplitText.create("h1", {
      // type: "lines,words,chars", // lines || words || chars
      // wordsClass: "word", // word هضيف كلاس علي كل كلمه باسم
      // wordsClass: "word++", // word كل كلمة بتاخد كلاس مختلف بيبقا جمبه رقم متغير وكمان الكلاس الي اسمه

      type: "words,chars",
      smartWrap: true, // ده مش هبخلي الكلمه ينفع تنزل علي سطرين
      ignore: "sub", // هنا هيتجاهل العنصر ده وكمان مش هيعمله انيميشن

      // type: "lines",
      // autoSplit: true, // بتهندل شكل السطور لما اجي اعمل ريسايز
      // onSplit: (self) => {
      //   console.log(self)
      //   return gsap.from(self.lines, { // حطيته هنا عشان يتشغل لما اعمل ريسايز
      //     opacity: 0,
      //     y: 100,
      //     stagger: { each: 0.05, from: "random" },
      //     ease: "power2.inOut",
      //     duration: 1
      //   })
      // }
    })

    // animation 1
    // gsap.from(split.words, {
    //   opacity: 0,
    //   y: 100,
    //   x: -100,
    //   stagger: .1,
    //   duration : 1
    // })

    // animation 2
    gsap.from(split.words, {
      opacity: 0, y: 100,
      stagger: { each: 0.05, from: "random" },
      ease: "power2.inOut", duration: 1,
      onComplete: () => {
        split.revert() // ده اول ما اخلص الانيمشن بتاعي هيمسح الزيادات الي عملها في العنصر
        // بينضف وراه من الاخر
      }
    })
  })
})
*/

// todo ======== LESSON 19 ======== //
// ? Cheat Sheet -- gspa صفحه في الدوك بتجمع اهم الخواص في

// todo ======== LESSON 20 ======== //
// ? KeyFrame
/**
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // object
  // gsap.to(".box", {
  //   // كلها keyframes لو كتبت اي خواص هنا هتتطبق علي
  //   // duration: 2, // دي كلها هتاخد ثايتين بس keyframesيعني ال 
  //   delay: 1,
  //   rotate: 360,
  //   transformOrigin: "center",
  //   duration: 3,
  //   keyframes: [
  //     { x: 300, ease: "power1.inOut", backgroundColor: "red" }, // ده بس frame هتطبق علي ال
  //     { y: 300 },
  //     { x: 0, backgroundColor: "#3b82f6" }, // -delay لو انا عايز اخليها تبدا مع الي فوق بحط 
  //     { y: 0 },
  //   ]
  // })

  // css نسبه مئويه زي 
  gsap.to(".box", {
    delay: 1,
    rotate: 360,
    transformOrigin: "center",
    duration: 3,
    keyframes: {
      "25%": { x: 300, y: 0 },
      "50%": { y: 300, x: 300 },
      "75%": { x: 0, y: 300 },
      "100%": { y: 0, y: 0 },
      // ودي الميزه الي في النسبه المئويه
      // easeEach: "elastic", // بتاعه ease ال keyframes الي لازم ادي لكل object ده بعكس ال ease هياخد ال keyframes ودي ببساطه معناها ان كل 
    },
    scrollTrigger: {
      trigger: ".trigger",
      start: "center center",
      end: "+=2000",
      scrub: 1,
      pin: true,
    }
  })
})
*/

// todo ======== LESSON 21 ======== //
// ? Svg - Skiped

// todo ======== LESSON 22 ======== //
// ? Observer
/**
  - فده بيكون متغير بسرعه جدا وبتعمل مئات المرات في الثانيه mousemove event والي لو انا مثلا عندي حاجه زي ال debounce بس الفكره ان ده بيكون احسن لل البيرفورمنس لو انا مستخدم EventListener بيستدم ال
  - في نفس في مره واحده Event ينفع استهدف عادي اكتر من
  - EventListener الي لازم تحسبها يدوي في  velocity , delta  بيديك معلومات جهزة زي 
  - وكمان بيدعم 

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(Observer);

  // Observer.create({
  //   target: ".pink",
  //   onClick: () => console.log("Clicked Pink"), // لما ادوس علي البوكس البينك الكود ده هيتنفذ
  //   // wheel,touch,pointer بيكون default type عشان يشتغل بس ال typeلازم احدد ال 
  //   type: "wheel,touch,pointer", // onMove مش هيشتغل ال pointerلو شيلت ال 
  //   onMove: () => console.log("Mouse move"), // لما ادوس علي البوكس البينك الكود ده هيتنفذ
  // })
  Observer.create({
    target: window,
    type: "wheel,touch,scroll,pointer",
    tolerance: 200, // ده معناه ان اي حركه سكرول اقل من متين بيسكل مش هينفذ ال الفانكشنز الي مكتوبه
    onUp: () => console.log("Scroll Up"),
    onDown: () => console.log("Scroll Down"),
  })
})
*/
