// Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};
window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
//    var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      if ( window.innerWidth > 750) {  
        document.getElementById("toliau").style.width = "70px";
        document.getElementById("toliau").style.pointerEvents = "none";
        setTimeout(() => {   document.getElementById("check").style.display = "none"; }, 150);
        setTimeout(() => {   document.getElementById("clock").style.display = "block"; }, 150);
        setTimeout(() => {   document.getElementById("pavyko").style.top = "-20px"; }, 6000);
        setTimeout(() => {   document.getElementById("text").style.display = "none"; }, 6000);
        setTimeout(() => {   document.getElementById("toliau").style.width = "100%"; document.getElementById("toliau").style.pointerEvents = "all"; }, 6000);
        setTimeout(() => {   document.getElementById("check").style.display = "block"; }, 6150);
        setTimeout(() => {   document.getElementById("clock").style.display = "none"; }, 6150);
        setTimeout(() => {   document.getElementById("po-to").style.display = "block"; }, 6000);
        setTimeout(() => {         form.reset(); }, 6000);   
        setTimeout(() => {         document.getElementById("back2").style.zIndex = "20"; }, 6000); 
        setTimeout(() => {         document.getElementById("back2").style.opacity = "0.9"; }, 6100);   
        setTimeout(() => {         document.getElementById("pavyko").style.top = "30%";
        document.getElementById("pavyko").style.right = "5%";
        setTimeout(() => {   document.getElementById("pavyko").style.top = "2%"; }, 270);
        document.getElementById("pavyko").style.overflowY = "scroll";
        document.getElementById("pavyko").style.zIndex = "25";
        document.title = 'moon_astec☽ payment confirmation'; }, 6100);   
    }
    else {
      document.getElementById("toliau").style.width = "70px";
      document.getElementById("toliau").style.pointerEvents = "none";
        setTimeout(() => {   document.getElementById("check").style.display = "none"; }, 150);
        setTimeout(() => {   document.getElementById("clock").style.display = "block"; }, 150);
        setTimeout(() => {   document.getElementById("pavyko").style.top = "-20px"; }, 6000);
        setTimeout(() => {   document.getElementById("text").style.display = "none"; }, 6000);
        setTimeout(() => {   document.getElementById("toliau").style.width = "100%"; document.getElementById("toliau").style.pointerEvents = "all"; }, 6000);
        setTimeout(() => {   document.getElementById("check").style.display = "block"; }, 6150);
        setTimeout(() => {   document.getElementById("clock").style.display = "none"; }, 6150);
        setTimeout(() => {   document.getElementById("po-to").style.display = "block"; }, 6000);
        setTimeout(() => {         form.reset(); }, 6000);
        setTimeout(() => {         document.getElementById("back2").style.zIndex = "20"; }, 6000);
        setTimeout(() => {         document.getElementById("back2").style.opacity = "0.9"; }, 6100);
        setTimeout(() => {         document.getElementById("pavyko").style.right = "5%";
        document.getElementById("pavyko").style.top = "-1%";
        document.getElementById("pavyko").style.overflowY = "scroll";
        document.getElementById("pavyko").style.zIndex = "25";
        document.title = 'moon_astec☽ payment confirmation'; }, 6000);
    }
    }

    function error() {
      document.getElementById("toliau").style.width = "70px";
      document.getElementById("toliau").style.pointerEvents = "none";
      setTimeout(() => {   document.getElementById("check").style.display = "none"; }, 150);
      setTimeout(() => {   document.getElementById("clock").style.display = "block"; }, 150);
      setTimeout(() => {   document.getElementById("nepavyko").style.top = "-20px"; }, 6000);
      setTimeout(() => {   document.getElementById("text").style.display = "none"; }, 6000);
      setTimeout(() => {   document.getElementById("toliau").style.width = "100%"; document.getElementById("toliau").style.pointerEvents = "all"; }, 6000);
      setTimeout(() => {   document.getElementById("check").style.display = "block"; }, 6150);
      setTimeout(() => {   document.getElementById("clock").style.display = "none"; }, 6150);
      setTimeout(() => {   document.getElementById("nepavyko").style.top = "-250px"; }, 9000);
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }


function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
      document.getElementById("text2").style.display = "none";
      document.getElementById("confirm").style.zIndex = "21";
      setTimeout(() => {   document.getElementById("confirm").style.opacity = "1"; }, 350);
      setTimeout(() => {   document.getElementById("ok").style.display = "flex"; }, 3700);
      setTimeout(() => {   document.getElementById("confirm").style.opacity = "0"; }, 3700);
      setTimeout(() => {   document.getElementById("confirm").style.zIndex = "-1"; }, 3700);
      setTimeout(() => {   document.getElementById("toliau").style.width = "70px"; document.getElementById("toliau").style.pointerEvents = "none"; }, 350);
      setTimeout(() => {   document.getElementById("check").style.display = "none"; }, 500);
      setTimeout(() => {   document.getElementById("clock").style.display = "block"; }, 500);
      setTimeout(() => {   document.getElementById("toliau").style.width = "100%"; document.getElementById("toliau").style.pointerEvents = "all"; }, 3700);
      setTimeout(() => {   document.getElementById("clock").style.display = "none"; }, 3750);
      setTimeout(() => {   document.getElementById("check").style.display = "block"; }, 3750);
      setTimeout(() => {   document.getElementById("text2").style.display = "flex"; }, 45000);
      setTimeout(() => {   document.getElementById("ok").style.display = "none"; }, 45000);
      setTimeout(() => {   checkBox.checked = false; }, 45000);
  } else {
    text.style.display = "none";
  }
}

function openForm() {
  if ( window.innerWidth > 750) {     
      document.getElementById("back").style.zIndex = "20";
      setTimeout(() => {
          document.getElementById("back").style.opacity = "0.9";
      }, 100);
      document.getElementById("taisykliu-langas").style.top = "30%";
      document.getElementById("taisykliu-langas").style.right = "5%";
      setTimeout(() => {   document.getElementById("taisykliu-langas").style.top = "2%"; }, 270);
      document.getElementById("taisykliu-langas").style.overflowY = "scroll";
      document.getElementById("taisykliu-langas").style.zIndex = "25";
      document.title = 'moon_astec☽ rules of purchase';
  }
  else {
      document.getElementById("back").style.zIndex = "20";
      setTimeout(() => {
          document.getElementById("back").style.opacity = "0.9";
      }, 100);
      document.getElementById("taisykliu-langas").style.right = "5%";
      document.getElementById("taisykliu-langas").style.top = "-1%";
      document.getElementById("taisykliu-langas").style.overflowY = "scroll";
      document.getElementById("taisykliu-langas").style.zIndex = "25";
      document.title = 'moon_astec☽ rules of purchase';
  }
}

function closeForm() {
  if ( window.innerWidth > 750) {     
      document.title = 'moon_astec☽ payment';
      document.getElementById("taisykliu-langas").style.top = "-120%";;
      document.getElementById("taisykliu-langas").style.overflowY = "hidden";
      document.getElementById("taisykliu-langas").style.zIndex = "-1";
      document.getElementById("back").style.opacity = "0";
      setTimeout(() => {
          document.getElementById("back").style.zIndex = "-1";
      }, 300);
  }
  else {
      document.title = 'moon_astec☽ payment';
      document.getElementById("taisykliu-langas").style.right = "-200%";
      document.getElementById("taisykliu-langas").style.overflowY = "scroll";
      document.getElementById("taisykliu-langas").style.zIndex = "20";
      document.getElementById("back").style.opacity = "0";
      setTimeout(() => {
          document.getElementById("back").style.zIndex = "-1";
      }, 300);
  }
}
function pavykoClose() {
  if ( window.innerWidth > 750) {     
      document.getElementById("pavyko").style.top = "-120%";;
      document.getElementById("pavyko").style.overflowY = "hidden";
      document.getElementById("pavyko").style.zIndex = "-1";
      document.title = 'moon_astec☽ loading.';
      setTimeout(() => {
        document.title = 'moon_astec☽ loading..';
      }, 500);
      setTimeout(() => {
        document.title = 'moon_astec☽ loading...';
      }, 1000);
      setTimeout(() => {
        document.title = 'moon_astec☽ loading.';
      }, 1500);
      setTimeout(() => {
        document.title = 'moon_astec☽ loading..';
      }, 2000);
      setTimeout(() => {
        document.title = 'moon_astec☽ loading...';
      }, 2500);
      setTimeout(() => {
        document.title = 'moon_astec☽ loading.';
      }, 3000);
      setTimeout(() => {
        document.title = 'moon_astec☽ loading..';
      }, 3500);
      setTimeout(() => {
        document.title = 'moon_astec☽ loading...';
      }, 4000);
      setTimeout(() => {
        document.title = 'moon_astec☽ loading.';
      }, 4500);
      setTimeout(() => {
        document.title = 'moon_astec☽ loading..';
      }, 5000);
      setTimeout(() => {
        document.title = 'moon_astec☽ loading...';
      }, 5500);
      setTimeout(() => {
        document.getElementById("finished").style.opacity = "1";
      }, 300);
      setTimeout(() => {
        document.getElementById("back2").style.backgroundColor = "azure";
      }, 300);
      setTimeout(() => {
      document.getElementById("back2").style.opacity = "1";
      }, 300);
      setTimeout(() => {
        location.replace("https://moonastec.github.io/en/main")
      }, 5300);
  }
  else {
      document.getElementById("pavyko").style.right = "-200%";
      document.getElementById("pavyko").style.overflowY = "scroll";
      document.getElementById("pavyko").style.zIndex = "20";
      document.title = 'moon_astec☽ loading.';
      setTimeout(() => {
        document.title = 'moon_astec☽ loading..';
      }, 500);
      setTimeout(() => {
        document.title = 'moon_astec☽ loading...';
      }, 1000);
      setTimeout(() => {
        document.title = 'moon_astec☽ loading.';
      }, 1500);
      setTimeout(() => {
        document.title = 'moon_astec☽ loading..';
      }, 2000);
      setTimeout(() => {
        document.title = 'moon_astec☽ loading...';
      }, 2500);
      setTimeout(() => {
        document.title = 'moon_astec☽ loading.';
      }, 3000);
      setTimeout(() => {
        document.title = 'moon_astec☽ loading..';
      }, 3500);
      setTimeout(() => {
        document.title = 'moon_astec☽ loading...';
      }, 4000);
      setTimeout(() => {
        document.title = 'moon_astec☽ loading.';
      }, 4500);
      setTimeout(() => {
        document.title = 'moon_astec☽ loading..';
      }, 5000);
      setTimeout(() => {
        document.title = 'moon_astec☽ loading...';
      }, 5500);
      setTimeout(() => {
        document.getElementById("finished").style.opacity = "1";
      }, 300);
      setTimeout(() => {
        document.getElementById("finished2").style.opacity = "1";
      }, 300);
      setTimeout(() => {
        document.getElementById("back2").style.backgroundColor = "azure";
      }, 300);
      setTimeout(() => {
      document.getElementById("back2").style.opacity = "1";
      }, 300);
      setTimeout(() => {
        location.replace("https://moonastec.github.io/en/main")
      }, 5300);
  }
}
function closeForm3() {
  document.getElementById("pavyko").style.height = "0";
    document.getElementById("pavyko").style.padding = "0";
}
function closeForm4() {
  document.getElementById("nepavyko").style.height = "0";
}
function openForm5() {
  document.getElementById("safe").style.right = "0";
}
function closeForm5() {
  document.getElementById("safe").style.right = "-350px";
}
function next() {
    document.getElementById("container").style.height = "auto";
    document.getElementById("info").style.borderRadius = "15px 15px 0 0";
    document.getElementById("container").style.padding = "20px";
    document.getElementById("next").style.opacity = "0";
    document.getElementById("next").style.cursor = "default";
}
function loadFunction(){
  setTimeout(() => {    document.getElementById("screen").style.transform = "scale(5.0)"; }, 1000);
  setTimeout(() => {    document.getElementById("screen").style.opacity = "0"; }, 1100);
  setTimeout(() => {    document.getElementById("screen").style.zIndex = "-1"; }, 1200);
  document.getElementById("wifi").style.marginTop = "-2000px";
  setTimeout(() => {    document.getElementById("wifi").style.display = "none"; }, 300);
}
setTimeout(() => {    document.getElementById("wifi").style.marginTop = "-200px"; }, 20000);
setTimeout(() => {    document.getElementById("wifi").style.animation = "size 1.5s linear infinite"; }, 20300);