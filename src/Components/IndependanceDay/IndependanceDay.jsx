import React from "react";
import './IndependanceDay.css';
import call from "../../assets/images/call-mobile.png";
import ShareDetails from "../../assets/images/ShareDetails.png";
import OurVisit from "../../assets/images/Ourvisit.png";
import Reports from "../../assets/images/reports.png";
import ScheduleTest from "../../assets/images/Scheduletest.png";
import Samples from "../../assets/images/samples.png";
import tick from "../../assets/images/tick-lit.png";
import india from "../../assets/images/India.png";
import bindia from "../../assets/images/Bindia.png";
import addicon from "../../assets/images/addicon.png";
import addb from "../../assets/images/addb.png";
import orangeplus from "../../assets/images/orangeplus.png";
import boygirlflag from "../../assets/images/boygirlflag.png";
import by1get1 from "../../assets/images/buy1get1.png";






export default function IndependanceDay() {
    return (
        <div className="independance-day-page head-font">

            <div className="container pd-4 top-padding">

                <div className="row justify-content-center">
                    <p className="orange-color-text  ">INDEPENDENCE DAY OFFER:</p>
                </div>
                <div className="row justify-content-center">
                    <p className="violet-color-text top-2"> PRIORITIZE PREVENTIVE HEALTH CHECK</p>
                </div>
                <div className="row justify-content-center">
                    <p className="text-plain">
                        Celebrate Indepe-text-boxendence Day by prioritizing your health with Neuberg Anand’s exclusive offer.<br />
                        Embrace the freedom to take control of your well-being and make preventive health a priority.
                    </p>
                    
                </div>
                <div className="row  justify-content-center">
                    <button className="bg-orange button-flex">
                        <img className="callimg" src={call} alt="call" />
                        <h2 className="white-text">
                            8035&nbsp;28&nbsp;7579
                        </h2>
                    </button>
                </div>

            </div>
            <div className="container" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F7941D 100%)', borderRadius: '20px' }}>
                <div className="row">
                    <h2 className="violett-container">
                        <span className="text-background" style={{ background:'white'}}>
                            Enjoy the freedom to live healthy!
                        </span>
                        <img className="flag" src={boygirlflag} alt="flag" />
                        <img className="offer" src={by1get1} alt="flag" />
                    </h2>
                </div>

                <div className='for-m'>
                    <div className="f">
                        <form>
                            <h3 className='form-head'> Our partners in health are at your service. </h3> <br />
                            <div className='inputs-txt'>
                                <input className='text-input' type="textbox" placeholder="Name" name="name" /> <br /> <br />
                                <input className='text-input' type="textbox" placeholder="Mobile Number | + 91" name="mobile" /> <br /> <br />
                                <input className='text-input' type="textbox" placeholder="I'm not a robot " name="Robot" /> <br />
                            </div>
                            <button className="req-button">
                                Request A Call
                            </button>
        

                        </form>
                    </div>
                </div>

            </div>
            <div className="container pd-4">

            </div>

            <div className="container pd-4">
                <div className="basic-package">

                    <div className="row  justify-content-center">
                        <h2>
                            <span className="violet-color-text">INDEPENDENCE DAY-</span>
                            <span className="orange-color-text">BASIC PACKAGE</span>
                        </h2>

                    </div>

                    <div className="row  justify-content-center " >
                        <div>
                            <h2 className="white-text-box">
                                <span className="small-text"> PRICE</span> <br />
                                <span className="text-price">  &#8377; 1599</span>
                            </h2>
                        </div>

                    </div>

                    <div className="row  bg-linear-orange">
                        <div className="col-lg-5 ">
                            <p className="bullet-text"><img className="tick-img" src={tick} alt="bullet" />HbA1c</p>
                            <p className="bullet-text"><img className="tick-img" src={tick} alt="bullet" />Renal profile-Standard</p>
                            <p className="bullet-text"><img className="tick-img" src={tick} alt="bullet" />Lipid profile-Standard</p>

                        </div>
                        <div className="col-lg-5">
                            <p className="bullet-text"><img className="tick-img" src={tick} alt="bullet" />TSH</p>
                            <p className="bullet-text"><img className="tick-img" src={tick} alt="bullet" />Liver Function Test</p>
                        </div>
                        <img className="ind" src={india} alt="india" />
                        <img className="logo" src={bindia} alt="indian" />
                        <img className="add" src={addicon} alt="icon" />
                        <img className="addb" src={addb} alt="n" />


                    </div>
                </div>

            </div>

            <div className="container pd-4" >
                <div className="light-bg">

                    <div className="row  justify-content-center">
                        <h2>
                            <span className="violet-color-text">INDEPENDENCE DAY-</span>
                            <span className="orange-color-text">PLUS PACKAGE</span>
                        </h2>

                    </div>

                    <div className="row  justify-content-center" >
                        <div className="">
                            <h2 className="white-text-box" >
                                <span className="small-text"> PRICE</span> <br />
                                <span className="text-price">  &#8377; 2899</span>
                            </h2>
                        </div>
                    </div>

                    <div className="row violet-linear-bg">
                        <div className="col">
                            <p className="bullet-text"><img className="tick-img" src={tick} alt="bullet" />Complete Blood Count</p>
                            <p className="bullet-text"><img className="tick-img" src={tick} alt="bullet" />HbA1C, FBS</p>
                            <p className="bullet-text"><img className="tick-img" src={tick} alt="bullet" />Lipis Profile Standard</p>
                            <p className="bullet-text"><img className="tick-img" src={tick} alt="bullet" />Liver Function Test</p>
                            <p className="bullet-text"><img className="tick-img" src={tick} alt="bullet" />Thyroid Profile(Free T3, T4 & TSH)</p>

                        </div>
                        <div className="col">
                            <p className="bullet-text"><img className="tick-img" src={tick} alt="bullet" />Renal Profile Standard</p>
                            <p className="bullet-text"><img className="tick-img" src={tick} alt="bullet" />Urine Complete Examination</p>
                            <p className="bullet-text"><img className="tick-img" src={tick} alt="bullet" />Total Calcium</p>
                            <p className="bullet-text"><img className="tick-img" src={tick} alt="bullet" />Vitamin-D(25-OH)</p>
                        </div>
                        <img className="indian" src={india} alt="india" />
                        <img className="logo2" src={bindia} alt="indian" />
                        <img className="oplus" src={orangeplus} alt="indian" />

                    </div>
                </div>


            </div>

            <div className="container pd-4">
                <div className="row  justify-content-center">
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
        </div >
        

    );
}
