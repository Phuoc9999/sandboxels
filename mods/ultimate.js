elements.ultimate = {
    color: "#b200ff",
    behavior: [
        "XX|XX|XX",
        "XX|CH|XX",
        "XX|XX|XX"
    ],
    category: "special",
    state: "solid",
    density: 9999,
    desc: "Vật phẩm tối thượng. Khi đặt vào, sẽ tạo ra 100 viên kim cương.",
    cooldown: 1,
    tick: function(pixel) {
        for (let i = 0; i < 100; i++) {
            let xOffset = Math.floor(Math.random() * 11) - 5;
            let yOffset = Math.floor(Math.random() * 11) - 5;
            let x = pixel.x + xOffset;
            let y = pixel.y + yOffset;
            if (isEmpty(x, y)) {
                createPixel("diamond", x, y);
            }
        }
        deletePixel(pixel.x, pixel.y); // Tự hủy sau khi tạo diamond
    }
};
