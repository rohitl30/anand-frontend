import React from "react";
import { Helmet } from "react-helmet";
import './SeniorCitizenCard.css';
import callM from "../../assets/images/Seniorcitizencardimages/callM.png";
// import ShareDetails from "../../assets/images/ShareDetails.png";
// import OurVisit from "../../assets/images/Ourvisit.png";
// import Reports from "../../assets/images/reports.png";
// import ScheduleTest from "../../assets/images/Scheduletest.png";
// import Samples from "../../assets/images/samples.png";
import LaughingCouple from "../../assets/images/Seniorcitizencardimages/LaughingCouple.png";
import recaptchalogo from "../../assets/images/Seniorcitizencardimages/recaptchalogo.png";
// import Personalconcierge from "../../assets/images/Senior citizen card images/Personalconcierge.png";
// import SafeAndSecured from "../../assets/images/Senior citizen card images/SafeAndSecured.png";
// import PersonalReminders from '../../assets/images/images/Senior citizen card images/PersonalReminders.png';
// import ElderCare from "../../assets/images/ElderCare.png";
// import BenifitsSC from "../../assets/images/BenifitsSC.png";


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

            <div class="main-container">
                <div class="image-container">
                    <img className="LaughingCouple.jpg" src={LaughingCouple} alt="Laughing Couple" class="couple-image" />
                </div>
                <div class="form-container">
                    <h3 class="form-head">Our partners in health are at your service.</h3>
                    <form>
                        <div class="input-group">
                            <input class="text-input" type="text" placeholder="Name" name="name" />
                        </div>
                        <div class="input-group">
                            <input class="text-input" type="text" placeholder="Mobile number | +91" name="mobile" />
                        </div>
                        <div class="input-group">
                            <div class="recaptcha-container">
                                <input type="checkbox" id="recaptcha" />
                                <label for="recaptcha">I'm not a robot</label>
                                <img className="recaptchalogo" src={recaptchalogo} alt="ReCAPTCHA" />
                            </div>
                        </div>
                        <button class="req-button">Request A Call</button>
                    </form>
                </div>
            </div>
            <div className="container pd-4 top-padding">
                <div className="row justify-content-center">
                    <p className="orange-col-text">XTRA CARE</p>
                </div>
                <div className="row justify-content-center">
                    <p className="violet-col-text">for Senior Citizens</p>
                </div>
            </div>

            <div className="container" >
                <div className="row justify-content-center">
                    <p className="Ben"> 
                        BENEFITS FOR SENIOR CITIZENS
                    </p>
                </div>
                <div className="row pd-4 top-padding">
                    {/* <div class="image-con">
                    <img className="PersonalC" src={Personalconcierge} alt="P" />
                </div>
                <div class="image-con">
                    <img className="PersonalC" src={Personalconcierge} alt="P" />
                </div>
                <div class="image-con">
                    <img className="PersonalC" src={Personalconcierge} alt="P" />
                </div> */}
                </div>
            </div>

        </div>
    );
}