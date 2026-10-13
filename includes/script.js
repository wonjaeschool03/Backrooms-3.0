
const messages = {
    "walking-person": [
        "CLUCK CLUCK! I'm the main character!",
        "Why am I walking forever?",
        "I think I'm lost...",
        "I crossed the road for THIS?"
    ],

    "figure-2": [
        "Stop smelling me!",
        "I'm not a Minecraft item!",
        "I'm blooming fabulous!"
    ],

    "figure-3": [
        "Photosynthesis is my full-time job.",
        "Please don't pick me!",
        "I believe I can flower!"
    ],

    "figure-4": [
        "Roses are red, I'm confused.",
        "Why is that chicken staring at me?",
        "I demand more sunlight!"
    ],

    "figure-5": [
        "BLUB BLUB! Send help!",
        "I'm drowning! Wait...",
        "Just keep swimming!",
        "Do fish ever get thirsty?"
    ],

    "figure-6": [
        "I forgot how to swim.",
        "Fish are friends, not food!",
        "Why is there a chicken underwater?",
        "Glub glub, human!"
    ]
};

const bubble = document.createElement("div");
bubble.className = "speech-bubble";
document.body.appendChild(bubble);

let currentObject = null;

function moveBubble(element) {
    const rect = element.getBoundingClientRect();

    const x = rect.left + rect.width / 2;
    const y = rect.top - 15;

    const halfWidth = bubble.offsetWidth / 2;

    bubble.style.left = Math.max(
        halfWidth + 10,
        Math.min(window.innerWidth - halfWidth - 10, x)
    ) + "px";

    bubble.style.top = Math.max(
        bubble.offsetHeight + 20,
        y
    ) + "px";
}

for (const id in messages) {
    const element = document.getElementById(id);

    if (element) {
        element.addEventListener("mouseenter", function() {
            currentObject = element;

            const choices = messages[id];
            const randomIndex = Math.floor(Math.random() * choices.length);

            bubble.textContent = choices[randomIndex];
            bubble.classList.add("show");

            moveBubble(element);
        });

        element.addEventListener("mouseleave", function() {
            if (currentObject === element) {
                bubble.classList.remove("show");
                currentObject = null;
            }
        });
    }
}

window.addEventListener("scroll", function() {
    if (currentObject) {
        moveBubble(currentObject);
    }
});

window.addEventListener("resize", function() {
    if (currentObject) {
        moveBubble(currentObject);
    }
});
