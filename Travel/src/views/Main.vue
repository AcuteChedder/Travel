<script>
export default {
    name: 'Main'
}
</script>

<template>
    <section class="welcome">
        <div class="container">
            <div class="welcome-content">
                <div class="inner-container">
                    <div class="note">Luxury Travel Redefined</div>
                    <h1 class="welcome-title">Your Passport to Global Glamour</h1>
                    <p class="welcome-desc">Personalized Travel Experiences <br> Expert Destination Knowledge <br> Exceptional Customer Service</p>
                    <div class="welcome-download">
                        <button class="download-btn"><img src="../assets/main/googleplay.png" alt=""></button>
                        <button class="download-btn"><img src="../assets/main/appstore.png" alt=""></button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="destinations">
        <div class="container">
            <div class="destination-content">
                <div class="destination-text">
                    <h1 class="dest-title">Popular Destinations</h1>
                    <p class="dest-desc">Navigate the Globe with Confidence</p>
                </div>
                <div class="destination-cards">
                    <button class="slider-btn"><img src="../assets/main/destinations/PreviousSlide.png" alt=""></button>

                    <div class="card">
                        <img src="../assets/main/destinations/eiffel-tower.png.png" alt="" class="card-img">
                        <h4 class="card-title">Eiffel Tower</h4>
                        <p class="card-desc">356 Tours</p>
                    </div>

                    <div class="card">
                        <img src="../assets/main/destinations/MachuPicchu.png.png" alt="" class="card-img">
                        <h4 class="card-title">Machu Picchu</h4>
                        <p class="card-desc">356 Tours</p>
                    </div>

                    <div class="card">
                        <img src="../assets/main/destinations/GreatWall.png.png" alt="" class="card-img">
                        <h4 class="card-title">Great Wall</h4>
                        <p class="card-desc">356 Tours</p>
                    </div>

                    <div class="card">
                        <img src="../assets/main/destinations/StatueofLiberty.png.png" alt="" class="card-img">
                        <h4 class="card-title">Statue of Liberty</h4>
                        <p class="card-desc">356 Tours</p>
                    </div>

                    <div class="card">
                        <img src="../assets/main/destinations/TajMahal.png.png" alt="" class="card-img">
                        <h4 class="card-title">Taj Mahal</h4>
                        <p class="card-desc">356 Tours</p>
                    </div>

                    <div class="card">
                        <img src="../assets/main/destinations/OperaHouse.png.png" alt="" class="card-img">
                        <h4 class="card-title">Opera House</h4>
                        <p class="card-desc">356 Tours</p>
                    </div>

                    <div class="card">
                        <img src="../assets/main/destinations/Colosseum.png.png" alt="" class="card-img">
                        <h4 class="card-title">Colosseum</h4>
                        <p class="card-desc">356 Tours</p>
                    </div>

                    <div class="card">
                        <img src="../assets/main/destinations/GrandCanyon.png.png" alt="" class="card-img">
                        <h4 class="card-title">Grand Canyon</h4>
                        <p class="card-desc">356 Tours</p>
                    </div>

                    <button class="slider-btn"><img src="../assets/main/destinations/NextSlide.png" alt=""></button>
                </div>
            </div>
        </div>
    </section>

    <section class="recommend">
        <div class="container">
            <div class="recommend-text">
                <h1 class="recommend-title">Recommended For You</h1>
                <p class="recommend-desc">The best booking platform you can trust</p>
            </div>
        </div>
    </section>
</template>

<style> 
    .welcome {
        padding-top: 80px;
    }

    .welcome-content {
        background-image: url(../assets/main/background.png);
        width: 1200px;
        height: 720px;
        border-radius: 16px;
    }

    .inner-container {
        padding: 150px 70px;
    }

    .note {
        padding: 14px 20px;
        background-color: #FEFA17;
        max-width: 230px;
        border-radius: 50px;
        font-weight: 700;
        margin-bottom: 20px;
        font-size: 16px;
    }

    .welcome-title {
        font-size: 52px;
        max-width: 430px;
        font-weight: 800;
        line-height: 1;
        margin-bottom: 20px;
    }

    .welcome-desc {
        margin-left: 20px;
        font-size: 16px;
        margin-bottom: 65px;
    }

    .download-btn {
        background: none;
        border: none;
    }

    .welcome-download {
        display: flex;
        gap: 10px;
        margin-bottom: 30px;
    }

    .destinations {
        margin-top: 100px;
    }

    .destination-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .dest-title {
        font-size: 36px;
        font-weight: 900;
    }

    .dest-desc {
        font-size: 20px;
        font-weight: 500;
        color: #737373;
    }

    .destination-cards {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
    }

    .slider-btn {
        width: 50px;
        height: 50px;
        background: none;
        border: none;
        margin-top: 46px;
    }

    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .card-img {
        border-radius: 1350px;
    }

    .card-title {
        font-size: 14px;
        font-weight: 800;
    }

    .card-desc {
        color: #737373;
        font-size: 12px;
    }
</style>