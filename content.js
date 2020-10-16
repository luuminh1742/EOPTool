function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
}
//var task = document.getElementById('dtasktitle').innerHTML;

var timeWait = 30000;

function vocabulary() {
    var clickAudio = document.getElementsByClassName('fa-play-circle');
    var i;
    async function load() {
        for (i = 0; i < clickAudio.length; i++) {
            clickAudio[i].click();
            await timer(5000);
        }
        //4
        document.getElementsByClassName("btn-info")[1].click();

        setTimeout(function() {
            window.location.reload();
        }, 5000);
    }
    load();
}


function mcq() {

    var click = document.getElementsByClassName('dtitle');
    async function load() {
        for (i = 0; i < click.length; i++) {
            click[i].click();
            await timer(2000);
        }

    }

    load();
    setTimeout(function() {
        window.location.reload();
    }, 4000 * click.length);
}

function checkRadio(radio) {
    var i;
    for (i = 0; i < radio.length; i++) {
        radio[i].checked = true;
    }
    setTimeout(function() {
        document.getElementsByClassName("btn-info")[1].click();
    }, timeWait + 3000);

    setTimeout(function() {
        document.getElementsByClassName("btn-danger")[0].click();
    }, timeWait + 6000);

    var results = [];
    setTimeout(function() {
        for (i = 0; i < radio.length; i++) {
            if (radio[i].checked) results[i] = true;
            else results[i] = false;
        }
    }, timeWait + 7000);
    setTimeout(function() {
        var lamLai = document.getElementsByClassName("btn-primary");
        if (lamLai) lamLai[0].click();
    }, timeWait + 8000);
    setTimeout(function() {
        for (i = 0; i < radio.length; i++) {
            radio[i].checked = results[i];
        }
    }, timeWait + 10000);
    //4
    setTimeout(function() {
        document.getElementsByClassName("btn-info")[1].click();
    }, timeWait + 13000);


    setTimeout(function() {
        window.location.reload();
    }, timeWait + 15000);
}

function checkWrite() {
    var writeAns = document.getElementsByClassName('danw dinline');
    //setTimeout(function () { }, 30000);
    var answer = [];
    var i;
    for (i = 0; i < writeAns.length; i++) {
        writeAns[i].value = "LMinh";
    }
    setTimeout(function() {
        document.getElementsByClassName("btn-info")[1].click();
    }, timeWait + 3000);
    //2
    setTimeout(function() {
        document.getElementsByClassName("btn-danger")[0].click();
    }, timeWait + 6000);
    setTimeout(function() {
        for (i = 0; i < writeAns.length; i++) {
            answer[i] = writeAns[i].value;
        }
    }, timeWait + 9000);
    //3
    setTimeout(function() {
        var lamLai = document.getElementsByClassName("btn-primary");
        if (lamLai.length > 0) lamLai[0].click();
    }, timeWait + 10000);

    setTimeout(function() {
        for (i = 0; i < writeAns.length; i++) {
            writeAns[i].value = answer[i];
        }
    }, timeWait + 13000);
    //4
    setTimeout(function() {
        document.getElementsByClassName("btn-info")[1].click();
    }, timeWait + 15000);
    setTimeout(function() {
        window.location.reload();
    }, timeWait + 18000);
}
var task = document.getElementById('dtasktitle').innerHTML;
if (task.indexOf('vocabulary') != -1) {
    vocabulary();
} else if (task.indexOf('mcq') != -1) {
    mcq();
} else if (task.indexOf('Listen') != -1 && task.indexOf('question') != -1) {

    var checkAudio = false;
    var audio = document.getElementsByClassName('aud-btn play');
    var writeAns = document.getElementsByClassName('danw dinline');
    if (audio.length > 0) {
        audio[0].click();
        setTimeout(function() { checkAudio = true; }, timeWait);
    }
    //setTimeout(function () {}, timeWait);
    var radio = document.getElementsByClassName('deck');
    //if(document.body.contains(radio))
    if (radio.length > 0) {
        checkRadio(radio);
    } else {
        checkWrite();
    }
} else {
    checkWrite();
}