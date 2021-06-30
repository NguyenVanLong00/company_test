document.addEventListener("DOMContentLoaded", function(event) {
    collapse();
    collapse_fillter();
});


let nav_item = document.querySelectorAll(".nav_item");
let collapse_item = document.querySelectorAll(".nav_collapse_item");
let dot = document.querySelectorAll('.dot');
let menu_cancel = document.querySelector('.menu_cancel img');
let menu_icon = document.querySelector('.menu_icon');
let menu_mobile = document.querySelector('.mobile_menu');




function clearNavitem() {
    nav_item.forEach(element => {
        element.classList.remove("active");
    })
}

function clearDot(element) {
    let dot_list = element.parentElement.querySelectorAll('.dot');
    dot_list.forEach(element => {
        element.classList.remove("dot_active");
    })
    console.log(element.parentElement.previousElementSibling);
    element.parentElement.previousElementSibling.classList.add("active");
}

function collapse() {
    nav_item.forEach(element => {
        element.addEventListener("click", function() {
            clearNavitem();
            this.classList.toggle("active");

            if (this.querySelector(".collapse_togle") != null)
                this.querySelector(".collapse_togle").classList.toggle("rotage_180");


            let content = this.nextElementSibling;
            if (content != null) {
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            }
        });
    })
    collapse_item.forEach(element => {
        element.addEventListener("click", function() {
            clearNavitem();
            clearDot(element);
            this.querySelector(".dot").classList.add("dot_active");
        })
    });
}

let fillter_collapse = document.querySelectorAll('.fillter_collapse');

function collapse_fillter() {
    fillter_collapse.forEach(element => {
        element.addEventListener("click", function() {
            this.classList.toggle("active");

            if (this.querySelector(".collapse_togle") != null)
                this.querySelector(".collapse_togle").classList.toggle("fillter_toggle_active");

            let content = this.nextElementSibling;
            if (content != null) {
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            }
        });
    })
}

function showMenu() {
    menu_mobile.classList.add('mobile_menu_active');
}

function hideMenu() {
    menu_mobile.classList.remove('mobile_menu_active');
}

function scrollTo_element(element) {
    window.scrollTo(element.offsetLeft, element.offsetTop - 150);
}

function dangtin() {
    if (validate())
        document.querySelector('.form_submit_button').click();
}

function validate() {
    let textarea = document.querySelectorAll('textarea');
    for (let i = 0; i < textarea.length; i++) {
        let element = textarea[i];
        if (!element.classList.contains("not_require")) {
            if (element.value.length < 50) {
                alert("Nội dung cần lớn hơn 50 ký tự!");
                scrollTo_element(element);
                return false;
            }
        }
    }


    let date_input = document.querySelectorAll('input[type="date"]');
    for (let i = 0; i < date_input.length; i++) {
        let element = textarea[i];
        if (element.value == "") {
            scrollTo_element(element);
            alert("thời gian cần lớn hơn hoặc bằng hiện tại!");
            return false;
        }
        let today = new Date();
        let select_date = new Date(element.value);
        if (today.getFullYear() < select_date.getFullYear()) {
            if (today.getMonth() < select_date.getMonth()) {
                if (today.getDate() < select_date.getDate()) {
                    scrollTo_element(element);
                    alert("thời gian cần lớn hơn hoặc bằng hiện tại!");
                    return false;
                }
            }
        }
    }

    return true;

}