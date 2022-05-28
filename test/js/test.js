function redirect(){
    window.location.href="https://terrifictable.github.io/";
}

function changeIframe() {
    var iframe = document.getElementById("url-iframe");

    var url = document.getElementById("input").value;

    iframe.setAttribute("src", url);
}
