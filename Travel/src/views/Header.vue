<script>
export default {
    name: 'Header'
}
</script>

<template>
    <header>
        <div class="header-container">
            <div class="header-logo">
                <img src="../assets/logo.png" alt="">
            </div>

            <div class="navigation">
                <ul class="nav">
                    <li><a href="#" class="nav-el">Home</a></li>
                    <li><a href="#" class="nav-el">Tours</a></li>
                    <li><a href="#" class="nav-el">Destinations</a></li>
                    <li><a href="#" class="nav-el">Activities</a></li>
                    <li><a href="#" class="nav-el">Hotel</a></li>
                    <li><a href="#" class="nav-el">Rental</a></li>
                    <li><a href="#" class="nav-el">Tickets</a></li>
                    <li><a href="#" class="nav-el">Pages</a></li>
                    <li><a href="#" class="nav-el">Blog</a></li>
                    <li><a href="#" class="nav-el">Contact</a></li>
                </ul>
            </div>

            <div class="header-sign">
                <button class="login">Log In</button>
                <button class="register">Sign Up</button>
            </div>

        </div>
    </header>
</template>

<style> 

    a, button {
        cursor: pointer;
    }

    a:hover {
        opacity: 0.8;
    }

    .header-container {
        margin: 0 50px;
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
    }

    .header-logo {
        margin-top: 10px;
    }

    .nav {
        display: flex;
        gap: 40px;
        margin-top: 15px;
    }

    li {
        list-style: none;
    }

    .nav-el {
        text-decoration: none;
        font-size: 16px;
        color: #000;
        font-weight: 400;
    }

    .login {
        font-size: 16px;
        font-weight: 800;
        border: 2px solid #000;
        padding: 12px 20px;
        background: transparent;
        border-radius: 40px;
    }

    .login:hover {
        padding: 12px 20px;
        background: transparent;
        border-radius: 40px;
    }

    .register {
        font-size: 16px;
        font-weight: 800;
        border: 2px solid #000;
        background-color: #FEFA17;
        padding: 12px 20px;
        border-radius: 40px;
    }

    .header-sign {
        display: flex;
        gap: 10px;
    }

</style>