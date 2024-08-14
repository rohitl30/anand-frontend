import React from "react";
import { Helmet } from "react-helmet";
import './SeniorCitizenCard.css';
import callM from "../../assets/images/SeniorCitizenCardImages/callM.png";
import ShareDetails from "../../assets/images/SeniorCitizenCardImages/ShareDetails.png";
import OurVisit from "../../assets/images/SeniorCitizenCardImages/OurVisit.png";
import Reports from "../../assets/images/SeniorCitizenCardImages/Reports.png";
import ScheduleTest from "../../assets/images/SeniorCitizenCardImages/ScheduleTest.png";
import Samples from "../../assets/images/SeniorCitizenCardImages/Samples.png";
import LaughingCouple from '../../assets/images/SeniorCitizenCardImages/LaughingCouple.png';
import recaptchalogo from "../../assets/images/SeniorCitizenCardImages/recaptchalogo.png";
import ElderCare from "../../assets/images/SeniorCitizenCardImages/ElderCare.png";
import PersonalConcierge from "../../assets/images/SeniorCitizenCardImages/PersonalConcierge.png";
import SafeAndSecured from "../../assets/images/SeniorCitizenCardImages/SafeAndSecured.png";
import PersonalReminders from "../../assets/images/SeniorCitizenCardImages/PersonalReminders.png";
import BenifitsSCImage from "../../assets/images/SeniorCitizenCardImages/BenifitsSC.png";


export default function SeniorCitizenCard() {
    return (
        <div className="SeniorCitizenCard">
            <Helmet>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-8VQRMYBYFG"></script>
            </Helmet>

            <div className="container pd-4 top-padding">
                <div className="row justify-content-center">
                    <p className="orange-col-text">PRIORITIZING ELDER CARE:</p>
                </div>
                <div className="row justify-content-center">
                    <p className="violet-col-text">ENHANCED CARE FOR SENIOR CITIZENS</p>
                </div>
                <div className="row justify-content-center">
                    <p className="Plain-text">
                        For Senior Citizen Day, we introduce a special card designed to meet the diagnostic needs of our esteemed<br />
                        elders in the community. This initiative underscores our commitment to providing exceptional care and<br />
                        support to our senior citizens.
                    </p>
                </div>
                <div className="row justify-content-center">
                    <button className="bg-orange button-flex">
                        <img className="calling" src={callM} alt="call" />
                        <h2 className="white-text">8035&nbsp;28&nbsp;7579</h2>
                    </button>
                </div>
            </div>

            <div className="main-container">
                <div className="image-container">
                    <img src={LaughingCouple} alt="Laughing Couple" className="couple-image" />
                </div>
                <div className="form-container">
                    <h3 className="form-head">Our partners in health are at your service.</h3>
                    <form>
                        <div className="input-group">
                            <input className="text-input" type="text" placeholder="Name" name="name" />
                        </div>
                        <div className="input-group">
                            <input className="text-input" type="text" placeholder="Mobile number | +91" name="mobile" />
                        </div>
                        <div className="input-group">
                            <div className="recaptcha-container">
                                <input type="checkbox" id="recaptcha" />
                                <label htmlFor="recaptcha">I'm not a robot</label>
                                <img className="recaptchalogo" src={recaptchalogo} alt="ReCAPTCHA" />
                            </div>
                        </div>
                        <button className="req-button">Request A Call</button>
                    </form>
                </div>
            </div>

                <div className="container pd-4 top-padding">
                    <div className="text-conatiner justify-content-center">
                        <p className="o-col">XTRA CARE</p> <p className="v-col">for Senior Citizens</p>
                    </div>
                </div>

                <div className="benefits-container">
                    <div className="benefits-header">
                        <p className="benefits-title">BENEFITS FOR SENIOR CITIZENS</p>
                    </div>
                    <div className="benefits-icons">
                        <div className="icon-item">
                            <img className="PersonalConcierge" src={PersonalConcierge} alt="PC" />
                            <p>Personal concierge <br /> for senior citizens</p>
                        </div>
                        <div className="icon-item">
                            <img className="SafeAndSecured" src={SafeAndSecured} alt="SC" />
                            <p>Safe & Secured <br /> Free Home Sample Collection</p>
                        </div>
                        <div className="icon-item">
                            <img className="PersonalReminders" src={PersonalReminders} alt="PC" />
                            <p>Personal reminders <br /> for repeat tests</p>
                        </div>
                    </div>
                    <div className="offers-discounts">
                        <p className="offers-title">XCLUSIVE OFFERS & DISCOUNTS</p>
                        <ul className="offers-list">
                            <li>5% OFF on Health Packages for Seniors</li>
                            <li>20% OFF on Routine Blood Tests</li>
                            <li>10% OFF on Ultrasound @ Shivajinagar, Kasturinagar</li>
                            <li>10% OFF on ECG @ Shivajinagar, Kasturinagar, Vijaynagar, Jayanagar</li>
                            <li>10% OFF on Dexa, Mammogram, Eye checkup, PFT @ Shivajinagar</li>
                        </ul>
                        <img className="elder-care-logo" src={ElderCare} alt="Elder Care" />
                    </div>
                </div>


                <div className="card-container">
                    <p className="offers-title">XCLUSIVE OFFERS & DISCOUNTS</p>
                    <div className="image-container">
                        <img className="elder-care-logo" src={ElderCare} alt="Elder Care" />
                        <img className="elder-care-logo" src={BenifitsSCImage} alt="BI" />
                    </div>BenifitsSCImage
                    <div className="cta-container">
                        <p>Your senior discount is just a download away.</p>
                        <p>Get your card and show it at the lab for easy savings.</p>
                        <button className="bg-orange">Download Your Card Now</button>
                    </div>
                </div>




            <div className="container pd-4">
                <div className="row justify-content-center">
                    <h2 className="pd-2">
                        <span className="orange-color-text">
                            BOOK A LAB TEST &nbsp;
                        </span>
                        <span className="violet-color-text">
                            FROM THE COMFORT OF YOUR HOME
                        </span>
                    </h2>
                </div>
                <div className="row justify-content-center">
                    <h4 className="violet-color-text pd-4">
                        How It Works
                    </h4>
                </div>

                <div className="row">
                    <div className="col">
                        <img className="works-img" src={ShareDetails} alt="Share Details" />
                        <p className="works-text">
                            Share your<br />
                            details with us
                        </p>
                    </div>
                    <div className="col">
                        <img className="works-img" src={ScheduleTest} alt="Schedule" />
                        <p className="works-text">
                            Schedule the test<br />
                            at your home
                        </p>
                    </div>
                    <div className="col">
                        <img className="works-img" src={OurVisit} alt="Home visit" />
                        <p className="works-text">
                            Our representative<br />
                            would visit your home
                        </p>
                    </div>
                    <div className="col">
                        <img className="works-img" src={Samples} alt="Lab Test" />
                        <p className="works-text">
                            We process your<br />
                            samples at our labs
                        </p>
                    </div>
                    <div className="col">
                        <img className="works-img" src={Reports} alt="Report" />
                        <p className="works-text">
                            Get your<br />
                            reports online
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
