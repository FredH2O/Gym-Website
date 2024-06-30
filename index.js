// javascript here
const reviewers = [
  {
    name: "Fiona Hughes",
    occupation: "Physician",
    img: "images/physician.png",
    stars: [4.5],
    text: "Focus on flexibility! Yoga, Pilates, and barre classes. Great for improving mobility and core strength.",
  },
  {
    name: "Alex Woodley",
    occupation: "Bartender",
    img: "images/bartender.png",
    stars: [4.5],
    text: "Welcoming gym for all! Cardio machines, group fitness classes (Zumba, Yoga), friendly staff. Great for beginners or social workouts.",
  },
  {
    name: "Ji-hoon Park",
    occupation: "Chef",
    img: "images/chef.png",
    stars: [2.5],
    text: "Affordable gym with decent equipment. Can get crowded during peak hours and intimidating too. Good option for basic workouts.",
  },
  {
    name: "Emily Grace Johnson",
    occupation: "Attorney",
    img: "images/attorney.png",
    stars: [5],
    text: "Get bendy! Yoga, Pilates, barre classes. Improve mobility and core strength.",
  },
  {
    name: "Dwight Aldridge",
    occupation: "Steelworker",
    img: "images/steelworker.png",
    stars: [5],
    text: "Absolutely love this gym! The trainers are so motivating, and the variety of classes keeps things interesting. Plus, the equipment is top-notch.",
  },
  {
    name: "Miguel Cruz",
    occupation: "Blogger",
    img: "images/blogger.png",
    stars: [5],
    text: "This gym is a hidden gem! It's smaller than some of the chain gyms, but the personal attention from the trainers makes all the difference. Plus, the classes are challenging and fun.",
  },
  {
    name: "Dr. Benjamin Stanley",
    occupation: "Doctor",
    img: "images/doctor.png",
    stars: [5],
    text: "The best gym in town! The facilities are always clean, and the trainers are incredibly knowledgeable. I've achieved amazing results thanks to their guidance.",
  },
  {
    name: "Chioma Adekunle",
    occupation: "Nurse",
    img: "images/nurse.png",
    stars: [5],
    text: "Love the community vibe at this gym. Everyone is so supportive, and there's a real sense of camaraderie among members. Plus, the classes are fantastic!",
  },
  {
    name: "Shanice Thompson",
    occupation: "Call Agent",
    img: "images/callAgent.png",
    stars: [2],
    text: "Not impressed with this gym. The equipment is often out of order, and it's always overcrowded during peak hours. Definitely not worth the membership fee.",
  },
  {
    name: "Derek Kelly",
    occupation: "Electrician",
    img: "images/electrician.png",
    stars: [5],
    text: "Fun & energetic! Zumba, Hip-Hop, dance fitness classes. Burn calories and have a blast!",
  },
  {
    name: "Josh Blessington",
    occupation: "Engineer",
    img: "images/engineer2.png",
    stars: [4.5],
    text: "Find your inner peace! Diverse yoga classes, experienced instructors, calming atmosphere. Perfect for relaxation and flexibility.",
  },
];

// make the review random

function autoReview() {
  let reviewContent = document.querySelector(".review__content");
  reviewContent.classList.remove("show"); //removes .review__content.show

  setTimeout(function () {
    let currentReviewIndex = Math.floor(Math.random() * reviewers.length);
    let name = reviewers[currentReviewIndex].name;
    let occupation = reviewers[currentReviewIndex].occupation;
    let img = reviewers[currentReviewIndex].img;
    let text = reviewers[currentReviewIndex].text;
    let star = reviewers[currentReviewIndex].stars[0];

    document.getElementById("reviewName").innerHTML = name;
    document.getElementById("reviewOccupation").innerHTML = occupation;
    document.getElementById("reviewImgPerson").src = img; //target the .src instead of innerHTML
    document.getElementById("reviewerText").innerHTML = text;

    let starContainer = document.querySelector(".review__star");
    starContainer.innerHTML = "";

    let fullStars = Math.floor(star);
    let halfStar;
    if (star % 1 !== 0) {
      halfStar = true;
    } else {
      halfStar = false;
    }
    let emptyStars = 5 - fullStars - halfStar;

    for (let i = 0; i < fullStars; i++) {
      let starElem = document.createElement("i");
      starElem.className = "ri-star-fill";
      starContainer.appendChild(starElem);
    }

    if (halfStar == true) {
      let starElem = document.createElement("i");
      starElem.className = "ri-star-half-line";
      starContainer.appendChild(starElem);
    }

    for (let i = 0; i < emptyStars; i++) {
      let starElem = document.createElement("i");
      starElem.className = "ri-star-line";
      starContainer.appendChild(starElem);
    }

    reviewContent.classList.add("show");
  }, 1000);
}
window.onload = autoReview;
setInterval(autoReview, 6000); // 5000 means 5 seconds
