let adaugaHover = function (arrayMaterie) {
    arrayMaterie.forEach((cell) => {
        cell.addEventListener('mouseover', function (event) {
            arrayMaterie.forEach((cell) => { cell.classList.add("hovered") });
        });
        cell.addEventListener('mouseout', function (event) {
            arrayMaterie.forEach((cell) => { cell.classList.remove("hovered") });
        });
    });
}

let dataCurenta = function () {
    let data = new Date();
    document.getElementById("data").innerHTML = `${data.getDate()} / ${data.getMonth() + 1} / ${data.getFullYear()}`
}

let oraCurenta = function () {
    let ora = new Date();
    return ora.toLocaleTimeString("en-US", { hour12: false });
}

setInterval(function () {
    document.getElementById("ora").innerHTML = oraCurenta();
    const d = new Date();
    let ora = d.getHours();
    let minute = d.getMinutes();
    let ziuaSaptamanii = d.getDay();
    console.log(`ora: ${ora} ; minute: ${minute} ; ziuaSaptamanii: ${ziuaSaptamanii}`)
    switch (ziuaSaptamanii) {
        case 1:
            if (ora == 8 && minute < 50) {
                document.querySelector("tr:first-of-type td:first-of-type").classList.add('oraCurenta')
                document.querySelector('#display').classList.remove('revealed');
                document.querySelector('#displayContent').innerHTML = "";
                break;
            }
            else if (ora == 9 && minute < 50) {
                document.querySelector("tr:nth-of-type(2) td:first-of-type").classList.add('oraCurenta')
                document.querySelector('#display').classList.remove('revealed');
                document.querySelector('#displayContent').innerHTML = "";
                break;
            }
            else if (ora == 10 && minute < 50) {
                document.querySelector("tr:nth-of-type(3) td:first-of-type").classList.add('oraCurenta');
                document.querySelector('#display').classList.remove('revealed');
                document.querySelector('#displayContent').innerHTML = "";
                break;
            }
            else if (ora == 11 && (minute >= 10)) {
                document.querySelector("tr:nth-of-type(4) td:first-of-type").classList.add('oraCurenta')
                document.querySelector('#display').classList.remove('revealed');
                document.querySelector('#displayContent').innerHTML = "";
                break;
            }
            else if (ora == 12 && (minute >= 10)) {
                document.querySelector("tr:nth-of-type(5) td:first-of-type").classList.add('oraCurenta')
                document.querySelector('#display').classList.remove('revealed');
                document.querySelector('#displayContent').innerHTML = "";
                break;
            }
            else if (ora == 13 && (minute >= 10)) {
                document.querySelector("tr:nth-of-type(6) td:first-of-type").classList.add('oraCurenta')
                document.querySelector('#display').classList.remove('revealed');
                document.querySelector('#displayContent').innerHTML = "";
                break;
            }
            else {
                document.querySelector('#displayContent').innerHTML = "PAUZA";
                document.querySelector('#display').style.display = "block";
                document.querySelector('#display').classList.add('revealed');
                let oreParcuse = document.querySelectorAll(".oraCurenta");
                oreParcuse.forEach(cell => {
                    cell.classList.remove('oraCurenta');
                })
            }
        case 2:
            if (ora == 8 && minute < 50) {
                document.querySelector("tr:first-of-type td:nth-of-type(2)").classList.add('oraCurenta')
                document.querySelector('#display').classList.remove('revealed');
                document.querySelector('#displayContent').innerHTML = "";
                break;
            }
            else if (ora == 9 && minute < 50) {
                document.querySelector("tr:nth-of-type(2) td:nth-of-type(2)").classList.add('oraCurenta')
                document.querySelector('#display').classList.remove('revealed');
                document.querySelector('#displayContent').innerHTML = "";
                break;
            }
            else if (ora == 10 && minute < 50) {
                document.querySelector("tr:nth-of-type(3) td:nth-of-type(2)").classList.add('oraCurenta')
                document.querySelector('#display').classList.remove('revealed');
                document.querySelector('#displayContent').innerHTML = "";
                break;
            }
            else if (ora == 11 && (minute >= 10)) {
                document.querySelector("tr:nth-of-type(4) td:nth-of-type(2)").classList.add('oraCurenta')
                document.querySelector('#display').classList.remove('revealed');
                document.querySelector('#displayContent').innerHTML = "";
                break;
            }
            else if (ora == 12 && (minute >= 10)) {
                document.querySelector("tr:nth-of-type(5) td:nth-of-type(2)").classList.add('oraCurenta')
                document.querySelector('#display').classList.remove('revealed');
                document.querySelector('#displayContent').innerHTML = "";
                break;
            }
            else if (ora == 13 && (minute >= 10)) {
                document.querySelector("tr:nth-of-type(6) td:nth-of-type(2)").classList.add('oraCurenta')
                document.querySelector('#display').classList.remove('revealed');
                document.querySelector('#displayContent').innerHTML = "";
                break;
            }
            else {
                document.querySelector('#displayContent').innerHTML = "PAUZA";
                document.querySelector('#display').style.display = "block";
                document.querySelector('#display').classList.add("revealed");
                let oreParcuse = document.querySelectorAll(".oraCurenta");
                oreParcuse.forEach(cell => {
                    cell.classList.remove('oraCurenta');
                })
            }
        case 3:
            if (ora == 8 && minute < 50) {
                document.querySelector("tr:first-of-type td:nth-of-type(3)").classList.add('oraCurenta')
                document.querySelector('#display').classList.remove('revealed');
                document.querySelector('#displayContent').innerHTML = "";
                break;
            }
            else if (ora == 9 && minute < 50) {
                document.querySelector("tr:nth-of-type(2) td:nth-of-type(3)").classList.add('oraCurenta')
                document.querySelector('#display').classList.remove('revealed');
                document.querySelector('#displayContent').innerHTML = "";
                break;
            }
            else if (ora == 10 && minute < 50) {
                document.querySelector("tr:nth-of-type(3) td:nth-of-type(3)").classList.add('oraCurenta')
                document.querySelector('#display').classList.remove('revealed');
                document.querySelector('#displayContent').innerHTML = "";
                break;
            }
            else if (ora == 11 && (minute >= 10)) {
                document.querySelector("tr:nth-of-type(4) td:nth-of-type(3)").classList.add('oraCurenta')
                document.querySelector('#display').classList.remove('revealed');
                document.querySelector('#displayContent').innerHTML = "";
                break;
            }
            else if (ora == 12 && (minute >= 10)) {
                document.querySelector("tr:nth-of-type(5) td:nth-of-type(3)").classList.add('oraCurenta')
                document.querySelector('#display').classList.remove('revealed');
                document.querySelector('#displayContent').innerHTML = "";
                break;
            }
            else if (ora == 13 && (minute >= 10)) {
                document.querySelector("tr:nth-of-type(6) td:nth-of-type(3)").classList.add('oraCurenta')
                document.querySelector('#display').classList.remove('revealed');
                document.querySelector('#displayContent').innerHTML = "";
                break;
            }
            else {
                document.querySelector('#displayContent').innerHTML = "PAUZA";
                document.querySelector('#display').style.display = "block";
                document.querySelector('#display').classList.add("revealed");
                let oreParcuse = document.querySelectorAll(".oraCurenta");
                oreParcuse.forEach(cell => {
                    cell.classList.remove('oraCurenta');
                })
            }
        case 4:
            if (ora == 8 && minute < 50) {
                document.querySelector("tr:first-of-type td:nth-of-type(4)").classList.add('oraCurenta')
                document.querySelector('#display').classList.remove('revealed');
                document.querySelector('#displayContent').innerHTML = "";
                break;
            }
            else if (ora == 9 && minute < 50) {
                document.querySelector("tr:nth-of-type(2) td:nth-of-type(4)").classList.add('oraCurenta')
                document.querySelector('#display').classList.remove('revealed');
                document.querySelector('#displayContent').innerHTML = "";
                break;
            }
            else if (ora == 10 && minute < 50) {
                document.querySelector("tr:nth-of-type(3) td:nth-of-type(4)").classList.add('oraCurenta')
                document.querySelector('#display').classList.remove('revealed');
                document.querySelector('#displayContent').innerHTML = "";
                break;
            }
            else if (ora == 11 && (minute >= 10)) {
                document.querySelector("tr:nth-of-type(4) td:nth-of-type(4)").classList.add('oraCurenta')
                document.querySelector('#display').classList.remove('revealed');
                document.querySelector('#displayContent').innerHTML = "";
                break;
            }
            else if (ora == 12 && (minute >= 10)) {
                document.querySelector("tr:nth-of-type(5) td:nth-of-type(4)").classList.add('oraCurenta')
                document.querySelector('#display').classList.remove('revealed');
                document.querySelector('#displayContent').innerHTML = "";
                break;
            }
            else if (ora == 13 && (minute >= 10)) {
                document.querySelector("tr:nth-of-type(6) td:nth-of-type(4)").classList.add('oraCurenta')
                document.querySelector('#display').classList.remove('revealed');
                document.querySelector('#displayContent').innerHTML = "";
                break;
            }
            else {
                document.querySelector('#displayContent').innerHTML = "PAUZA";
                document.querySelector('#display').style.display = "block";
                document.querySelector('#display').classList.add('revealed');
                let oreParcuse = document.querySelectorAll(".oraCurenta");
                oreParcuse.forEach(cell => {
                    cell.classList.remove('oraCurenta');
                })
            }
        case 5:
            if (ora == 8 && minute < 50) {
                document.querySelector("tr:first-of-type td:nth-of-type(5)").classList.add('oraCurenta')
                document.querySelector('#display').classList.remove('revealed');
                document.querySelector('#displayContent').innerHTML = "";
                break;
            }
            else if (ora == 9 && minute < 50) {
                document.querySelector("tr:nth-of-type(2) td:nth-of-type(5)").classList.add('oraCurenta')
                document.querySelector('#display').classList.remove('revealed');
                document.querySelector('#displayContent').innerHTML = "";
                break;
            }
            else if (ora == 10 && minute < 50) {
                document.querySelector("tr:nth-of-type(3) td:nth-of-type(5)").classList.add('oraCurenta')
                document.querySelector('#display').classList.remove('revealed');
                document.querySelector('#displayContent').innerHTML = "";
                break;
            }
            else if (ora == 11 && (minute >= 10)) {
                document.querySelector("tr:nth-of-type(4) td:nth-of-type(5)").classList.add('oraCurenta')
                document.querySelector('#display').classList.remove('revealed');
                document.querySelector('#displayContent').innerHTML = "";
                break;
            }
            else if (ora == 12 && (minute >= 10)) {
                document.querySelector("tr:nth-of-type(5) td:nth-of-type(5)").classList.add('oraCurenta')
                document.querySelector('#display').classList.remove('revealed');
                document.querySelector('#displayContent').innerHTML = "";
                break;
            }
            else if (ora == 13 && (minute >= 10)) {
                document.querySelector("tr:nth-of-type(6) td:nth-of-type(5)").classList.add('oraCurenta')
                document.querySelector('#displayContent').innerHTML = "";
                document.querySelector('#display').classList.remove('revealed');

                break;
            }
            else {
                document.querySelector('#displayContent').innerHTML = "PAUZA";
                document.querySelector('#display').style.display = "block";
                document.querySelector('#display').classList.add('revealed');
                let oreParcuse = document.querySelectorAll(".oraCurenta");
                oreParcuse.forEach(cell => {
                    cell.classList.remove('oraCurenta');
                })
            }
        // case 6: 
        //     document.querySelector('#displayContent').innerHTML = "Weekend placut!";
        //     let oreParcuse = document.querySelectorAll(".oraCurenta");
        //     oreParcuse.forEach(cell => {
        //         cell.classList.remove('oraCurenta');
        //     })
        // case 7:
        //     document.querySelector('#displayContent').innerHTML = "Weekend placut!";
        //     let oreParcuse = document.querySelectorAll(".oraCurenta");
        //     oreParcuse.forEach(cell => {
        //         cell.classList.remove('oraCurenta');
        //     })
    }
}, 1000);

adaugaHover(Array.from(document.querySelectorAll('.materieInfo')));
adaugaHover(Array.from(document.querySelectorAll('.materieMate')));
adaugaHover(Array.from(document.querySelectorAll('.materieRO')));
adaugaHover(Array.from(document.querySelectorAll('.materieEN')));
adaugaHover(Array.from(document.querySelectorAll('.materieDE')));
adaugaHover(Array.from(document.querySelectorAll('.materieFizica')));
dataCurenta();
