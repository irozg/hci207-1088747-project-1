
// function createSeatMap() {
//     const map = document.querySelector("#map");

//     let seat = "<tbody>";
//     let counter = 0;

//     for (i = 1; i <= 10; i++) {
//         seat += "<tr>";
//         seat += "<th scope='row'><span>σειρά:</span> " + i + "</th>"
//         // counter++;
//         for (z = 1; z <= 50; z++) {
//             seat += "<td class='seat' title=" + z + " onclick='seatNumber(" + z + ", " + i + ",1);' id='S" + z + "L" + i + "'></td>"
//             // counter++;
//         }
//         seat += "</tr>"
//     }
//     seat += "</tbody>"
//     map.innerHTML = seat;

//     //second map 
//     const map2 = document.querySelector("#map2");
//     seat = "<tbody>";
//     counter = 0;

//     for (i = 1; i <= 5; i++) {
//         seat += "<tr>";
//         seat += "<th scope='row'><span>σειρά:</span> " + i + "</th>"
//         // counter++;
//         for (z = 1; z <= 50; z++) {
//             seat += "<td class='seat' title=" + z + " onclick='seatNumber(" + z + ", " + i + ",2);' id='E" + z + "L" + i + "'></td>"
//             // counter++;
//         }
//         seat += "</tr>"
//     }
//     seat += "</tbody>"
//     map2.innerHTML = seat;

// }


// function seatNumber(number, line, stage) {
//     const seatInput = document.querySelector("#seatSelection")
//     const input = document.querySelector('#stage');
//     const lineInput = document.querySelector("#lineSelection");
//     lineInput.value = line;

//     if (stage == 1) {
//         seatInput.value = number;
//         input.value = 'Πλατεία';
//         idLetter = "S"
//     } else {
//         seatInput.value = number;
//         input.value = 'Eξώστης';
//         idLetter = "E"
//     }


//     //βάζω ένα selected class για την επιλεγμενη θέση
//     let seatId = idLetter + number + "L" + line;
//     const seat = document.querySelectorAll('.seat');

//     for (i = 0; i < seat.length; i++) {
//         console.log(seat[i].id);
//         if (seat[i].id == seatId) {
//             seat[i].classList.add("selected");
//         } else {
//             seat[i].classList.remove("selected");
//         }

//     }

//     //εμφανίζω τα υπολοιπα στοιχεία της φορμας
//     const view = document.querySelector(".personalDetails");
//     view.style.display = "block";

// }

function seatNumber(number, line, stage) {
    const seatInput = document.querySelector("#seatSelection")
    const stageInput = document.querySelector('#stage');
    const lineInput = document.querySelector("#lineSelection");
    lineInput.value = line;

    if (stage == "platia") {
        seatInput.value = number;
        lineInput.value = line;
        stageInput.value = 'Πλατεία';
    } else {
        seatInput.value = number;
        lineInput.value = line;
        stageInput.value = 'Eξώστης';
    }

    //εμφανίζω τα υπολοιπα στοιχεία της φορμας
    const view = document.querySelector(".personalDetails");
    view.style.display = "block";

}

function createSeatMap2() {
    let ctx = document.querySelector("#canvas").getContext("2d");
    class Rect {
        constructor(size = "", coordinates = "", seat = "") {
            this.size = size;
            this.coordinates = coordinates;
            this.seat = seat;
            // this.rect = [ this.size, this.coordinates,this.seat];
        }
        set setSize(size) {
            [this.width, this.height] = [this.size[0], this.size[1]];
            this.size = size;
            // this.rect[0]=coordinates;
        }
        get getSize() {
            return [this.width, this.height] = [this.size[0], this.size[1]];
        }
        set setCoordinates(coordinates) {
            this.coordinates = coordinates;
            // this.rect[1]=coordinates;
            [this.x, this.y] = [this.coordinates[0], this.coordinates[1]];
        }
        get getCoordinates() {
            return [this.x, this.y] = [this.coordinates[0], this.coordinates[1]];
        }
        set setSeat(seat) {
            this.seat = seat;
            // this.rect[2]=seat;
            [this.number, this.series, this.stage] = [this.seat[0], this.seat[1], this.seat[2]];
        }
        get getSeat() {
            return [this.number, this.series, this.stage] = [this.seat[0], this.seat[1], this.seat[2]];
        }

        get getRect() {
            return [this.size, this.coordinates, this.seat];
        }

        draw = function () {
            this.getSeat;
            if (this.stage == "platia") {
                ctx.fillStyle = "#7602ce";
            } else ctx.fillStyle = "#10bbc7";
            this.getCoordinates;
            this.getSize;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }

        hasClick = function (x, y) {
            if (this.x <= x && x <= this.x + this.width && this.y <= y && y <= this.y + this.height) {
                this.isSelected(this.x,this.y);
                return true;
            } else return false;
        }

        isSelected = function (x, y) {
            if (localStorage.length != 0) {
                let previousCoo = localStorage.getItem("clickedItem").split(",");
                let previousSt = localStorage.getItem("clickedItemStage");
                console.log(previousCoo);
                ctx.clearRect(previousCoo[0], previousCoo[1], this.width, this.height);
                if (previousSt == "platia") {
                    ctx.fillStyle = "#7602ce";
                } else ctx.fillStyle = "#10bbc7";
                ctx.fillRect(previousCoo[0], previousCoo[1], this.width, this.height);
            }
            ctx.fillStyle = "#000";
            ctx.fillRect(x, y, this.width, this.height);
            localStorage.setItem ('clickedItem', [x,y]);
            localStorage.setItem ('clickedItemStage', this.stage);

        }

    }

    const size = [10, 20];
    let nextDrawX = 0;
    let nextDrawY = 0;
    let coordinates = [nextDrawX, nextDrawY];
    let rects = [];
    for (i = 1; i <= 10; i++) {
        for (z = 1; z <= 50; z++) {
            let seat = [z, i, "platia"];
            var r = new Rect(size, coordinates, seat);
            r.draw();
            rects.push(r);
            nextDrawX = r.x + r.width + 2;
            coordinates = [nextDrawX, nextDrawY];
        }
        nextDrawY = r.y + r.height + 2;
        nextDrawX = 0;
        coordinates = [nextDrawX, nextDrawY];
    }


    for (i = 1; i <= 5; i++) {
        for (z = 1; z <= 50; z++) {
            let seat = [z, i, "eksostis"];
            r = new Rect(size, coordinates, seat);
            r.draw();
            rects.push(r);
            nextDrawX = r.x + r.width + 2;
            coordinates = [nextDrawX, nextDrawY];
        }
        nextDrawY = r.y + r.height + 2;
        nextDrawX = 0;
        coordinates = [nextDrawX, nextDrawY];
    }
    return rects;
}

function getClickedSeat(x, y, rects) {
    rectClicked = rects.find((rect) => {
        return rect.hasClick(x, y);
    });

    return seat = rectClicked.seat;
}

let drawedRects = createSeatMap2();
//addEventListener to canvas 
let canvas = document.querySelector("#canvas");
localStorage.clear();
canvas.addEventListener("mousedown", (event) => {
    const clickedX = event.offsetX;
    const clickedY = event.offsetY;

    const clickedSeat = getClickedSeat(clickedX, clickedY, drawedRects);
    seatNumber(clickedSeat[0], clickedSeat[1], clickedSeat[2]);
})
