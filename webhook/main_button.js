$(function main() {
    $('#mbtn').click(function () {
        let i = 0;
        let inteval = setInterval(function () {
            $.post(link, { "content": content, "username": username, "avatar_url": avatar, });
        }, 50)
    });
});
