function onSignIn(googleUser) {
    console.log('User signed in!');
    var profile = googleUser.getBasicProfile();
    $(".userName").text(profile.getName());
    $(".email").text(profile.getEmail());
    $(".g-signin2").click(function(){
        window.location.href = $link.attr('href="profile.html"');
    });

}

function onSignOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.')
        $(".userName").text("USER_NAME");
        $("img").attr("src", "assets/placeholder.png");
        $(".email").text("example@example.com");
    });
}