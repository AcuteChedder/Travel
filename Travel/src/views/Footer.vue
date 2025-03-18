<script>
export default {
    name: 'Footer'
}
</script>

<template>
    <footer>
        <div class="footer-main">
            <div class="container">
                <div class="footer-content">
                    <div class="support">
                        <img class="footer-logo" src="../assets/logo.png" alt="">

                        <div class="footer-section">
                            <img class="icon" src="../assets/footer/location.png" alt="">
                            <p class="address">4517 Washington Ave. Manchester, Kentucky <span class="address-span">39495</span></p>
                        </div>

                        <div class="footer-section">
                            <img class="icon" src="../assets/footer/clock.png" alt="">
                            <p class="time">Hours: 8:00 - 17:00, Mon - Sat</p>
                        </div>

                        <div class="footer-section">
                            <img class="icon" src="../assets/footer/mail.png" alt="">
                            <p class="mail">support@travila.com</p>
                        </div>
                        
                    </div>
                    
                    <div class="services">
                        <ul class="services-list">
                            <h3 class="services-title">Services</h3>
                            <li class="service">Tour Guide</li>
                            <li class="service">Tour Booking</li>
                            <li class="service">Hotel Booking</li>
                        </ul>

                        <ul class="services-list-2">
                            <li class="service">Ticket Booking</li>
                            <li class="service">Rental Services</li>
                            <li class="service">Travel plane</li>
                        </ul>
                    </div>

                    <div class="newsletter-section">
                        <h3 class="newsletter-title">Subscribe For Newsletter</h3>
                        <form action="">
                            <input type="email" placeholder="Enter your email" class="form-input">
                            <button class="form-btn">Subscribe</button>
                        </form>
                        <p class="postscript">No ads. No trails. No commitments</p>
                    </div>

                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped> 
    .footer-main {
        background-image: url(../assets/footer/Footer.png);
        background-repeat: no-repeat;
        background-position: center;
        min-height: auto;
        background-size: cover;
        background-position: center bottom;
        padding: 180px 0;
        font-size: 16px;
    }

    .footer-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 60px;
    }

    .services {
        display: flex;
        gap: 130px;
    }

    .footer-section {
        display: flex;
        gap: 5px;
        margin-bottom: 16px;
        color: #8E8E8E;
    }
    
    .icon {
        width: 18px;
        height: 18px;
        margin-top: 4px;
    }

    .footer-logo {
        margin-bottom: 30px;
    }

    .services-title {
        margin-bottom: 20px;
        font-size: 18px;
    }

    .service {
        margin-bottom: 18px;
        color: #8E8E8E;
    }

    .services-list-2 {
        margin-top: 44px;
    }

    .newsletter-title {
        font-size: 18px;
    }

    .form-input {
        padding: 20px 50px;
        border-radius: 100px;
        border: 1px solid #737373;
    }

    .form-btn {
        padding: 18px 22px;
        background-color: #000;
        color: #fff;
        border-radius: 100px;
        border: none;
    }

    .postscript {
        color: #737373;
        font-size: 12px;
        margin-top: 16px;
    }

</style> 