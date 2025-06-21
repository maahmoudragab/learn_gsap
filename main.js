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
