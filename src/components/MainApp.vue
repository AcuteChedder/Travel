<script>
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";
export default {
    data() {
        return {
            tours: [],
            selectedTour: null,
        }
    },

    methods: {
        async loadTours() {
            try {
                let response = await axios.get('/tours'); 
                console.log('Tours data:', response.data); 
                this.tours = response.data; 
            } catch (error) {
                console.error('Ошибка при загрузке туров:', error);  
            }
        },

        openModal(tour) {
            this.selectedTour = tour
        }
    },

    mounted() {
        this.loadTours()
    }
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
            <div class="recommend-blocks">

                <div class="recommend-block" v-for="tour in tours">
                    <div class="block-image">
                        <img :src="`/images/${tour.image}`" alt="" class="block-img">
                    </div>
                    
                    <div class="block-text">
                        <h1 class="block-title">{{ tour.name }}</h1>
                        <p class="block-duration"><img src="../assets/main/duration.png" class="duration-clock" alt="">{{ tour.duration }}</p>
                        <div class="cost-pay">
                            <h1 class="cost">{{ '$' + tour.cost }} <span class="individual">/ person</span></h1>
                            <button class="cost-btn" @click="openModal(tour)">Book now</button>
                        </div>
                    </div>
                    
                </div>

            </div>

            

        </div>
    </section>

    <section class="feedback">
        <div class="container">
            <div class="feedback-blocks">

                <div class="feedback-block">
                    <div class="feedback-text">
                        <h1 class="feedback-title">168k</h1>
                        <p class="feedback-desc">Happy Clients</p>
                    </div>
                    <hr class="feedback-line">
                </div>

                <div class="feedback-block">
                    <div class="feedback-text">
                        <h1 class="feedback-title">+45k</h1>
                        <p class="feedback-desc">Destinations</p>
                    </div>
                    <hr class="feedback-line">
                </div>

                <div class="feedback-block">
                    <div class="feedback-text">
                        <h1 class="feedback-title">+49</h1>
                        <p class="feedback-desc">Global Branch</p>
                    </div>
                    <hr class="feedback-line">
                </div>

                <div class="feedback-block">
                    <div class="feedback-text">
                        <h1 class="feedback-title">+26k</h1>
                        <p class="feedback-desc">Campaigns</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section class="services">
        <div class="container">
            <div class="services-image">
                <img src="../assets/main/img-love.png.png" alt="">
            </div>
            <div class="services-content">
                <div class="services-text">
                    <h1 class="services-title">You will love us</h1>
                    <p class="services-desc">Because more than 268 other customers have loved us too</p>
                </div>

                <div class="services-categories">

                    <div class="service">
                        <img src="../assets/main/secure.png" alt="" class="sevice-img">
                        <div class="service-text">
                            <h3 class="service-title">Security Assurance</h3>
                            <p class="service-desc">Demonstrates commitment to user data security through encryption and secure payment practices</p>
                            <a href="#!" class="service-link">Learn more →</a>
                        </div>
                    </div>

                    <div class="service">
                        <img src="../assets/main/customer.png" alt="" class="sevice-img">
                        <div class="service-text">
                            <h3 class="service-title">Security Assurance</h3>
                            <p class="service-desc">Demonstrates commitment to user data security through encryption and secure payment practices</p>
                            <a href="#!" class="service-link">Learn more →</a>
                        </div>
                    </div>

                    <div class="service">
                        <img src="../assets/main/transparent.png" alt="" class="sevice-img">
                        <div class="service-text">
                            <h3 class="service-title">Security Assurance</h3>
                            <p class="service-desc">Demonstrates commitment to user data security through encryption and secure payment practices</p>
                            <a href="#!" class="service-link">Learn more →</a>
                        </div>
                    </div>

                    <div class="service">
                        <img src="../assets/main/reputable.png" alt="" class="sevice-img">
                        <div class="service-text">
                            <h3 class="service-title">Security Assurance</h3>
                            <p class="service-desc">Demonstrates commitment to user data security through encryption and secure payment practices</p>
                            <a href="#!" class="service-link">Learn more →</a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>

    <section class="popular">
        <div class="container">
            <div class="popular-text">
                <h1 class="popular-title">Popular Destinations</h1>
                <p class="popular desc">Favorite destinations based on customer reviews</p>
            </div>
            <div class="popular-categories">
                <ul class="categories-list">
                    <li><a href="#">Categories</a>
                        <ul>
                            <li>Family Tour</li>
                            <li>Asian Tour</li>
                            <li>European Tour</li>
                        </ul>
                    </li>
                    <li><a href="#">Duration</a></li>
                    <li><a href="#">Review / Rating</a></li>
                    <li><a href="#">Price range</a></li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped> 



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




    
    .recommend {
        margin-top: 140px;
    }

    .recommend-title {
        font-size: 52px;
    }

    .recommend-desc {
        font-size: 20px;
        color: #737373;
        margin-top: -10px;
    }

    .recommend-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 60px;
    }

    .recommend-blocks {
        position: relative;
        display: flex;
        justify-content: space-between;
    }

    .block-image {
        position: relative;
        z-index: -1;
    }

    .block-img {
        border-radius: 30px;
    }

    .block-text {
        border: 1px solid #D6D7D8;
        background: #fff;
        border-radius: 30px;
        padding: 32px 30px;
        margin-top: -70px;
        z-index: 3233;
    }

    .block-title {
        font-size: 24px;
        font-weight: 800;
        max-width: 320px;
    }
    

    .block-duration {
        display: flex;
        font-size: 16px;
        color: #737373;
    }

    .duration-clock {
        display: block;
        margin-right: 5px;
        width: 20px;
        height: 20px;
    }

    .cost-pay {
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
    }

    .cost {
        font-size: 24px;
    }

    .individual {
        font-size: 16px;
        color: #737373;
        font-weight: 500;
    }

    .cost-btn {
        padding: 8px 20px;
        border: 1px solid #E4E6E8;
        background-color: #F2F4F6;
        border-radius: 50px;
        font-size: 14px;
        font-weight: 700;
    }



    .feedback {
        margin-top: 130px;
    }


    .feedback-blocks {
        background-color: #000;
        border-radius: 32px;
        display: flex;
        justify-content: space-between;
        padding: 90px 192px;
    }
    
    .feedback-block {
        color: #fff;
        
        display: flex;
    }

    .feedback-line {
        max-width: 100px;
    }

    .feedback-title {
        font-size: 52px;
    }

    .feedback-desc {
        font-size: 20px;
    }

    .feedback-text {
        display: flex;
        text-align: center;
        flex-direction: column;
        margin-right: 50px;
    }




    .services {
        background-image: url(../assets/main/background-pink.png);
        background-repeat: no-repeat;
        margin-top: 100px;
    }

    .services .container {
        display: flex;
        gap: 50px;
        padding-top: 100px;
        padding-bottom: 100px;
    }

    .service-text {
        max-width: 220px;
    }

    .services-categories {
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
    }

    .services-text {
        margin-left: 20px;
    }

    .services-title {
        font-size: 52px;
    }
    
    .services-desc {
        font-size: 20px;
        color: #737373;
        margin-bottom: 105px;
    }

    .service {
        display: flex;
    }

    .service-desc {
        font-size: 14px;
        color: #737373;
        margin-bottom: 12px;
    }

    .service-title {
        font-size: 20px;
    }

    .sevice-img {
        width: 100px;
        height: 100px;
        display: block;
        margin-top: -14px;
    }

    .service-link {
        text-decoration: none;
        color: #000;
        font-weight: 500;
    }



    
</style>