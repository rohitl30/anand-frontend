import React, { useEffect, useState } from "react";
import Sliders from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import labLocation from "../../assets/images/lab-location.jpg";
import howitworks1 from "../../assets/images/how-it-works-1.png";
import howitworks2 from "../../assets/images/how-it-works-2.png";
import howitworks3 from "../../assets/images/how-it-works-3.png";
import howitworks4 from "../../assets/images/how-it-works-4.png";
import dhoniimg from "../../assets/images/dhoni-img.png";
import { useForm } from "react-hook-form";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { FormResponse } from "../../Helpers/FormResponse";
import { useDispatch } from "react-redux";
import { setLoading } from "../../Redux/Actions/LoaderAction";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function LabShivajiNagarBranch() {
  const [open, setOpen] = useState(true);
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        name: Yup.string().required(),
        mobile: Yup.string()
          .matches(/^[6-9]\d{9}$/)
          .required(),
        message: Yup.string().required(),
      })
    ),
  });

  console.log("register", register);

  const contactUsFrom = (data) => {
    setLoading(true);
    data.page = "LAB SHIVAJINAGAR BRANCH";
    data.page_url = window.location.href;
    axios.post(API_URL.REACH_US, data).then((res) => {
      // FormResponse()
      navigate("/anand-at-home-thank-you");
      setLoading(false);
      reset();
      setOpen(!open);
    });
  };

  // const dispatch = useDispatch();

  // const onSubmit = (data) => {
  //   dispatch(setLoading(true));

  //   var formdata = new FormData();
  //   formdata.append("name", data.name);
  //   formdata.append("page_url", window.location.href);
  //   formdata.append("email", data.email);
  //   formdata.append("mobile", data.mobile);
  //   formdata.append("company_name", data.company_name);
  //   formdata.append("designation", data.designation);
  //   formdata.append("address", data.address);
  //   formdata.append("message", data.message);

  //   var requestOptions = {
  //     method: "POST",
  //     body: formdata,
  //     redirect: "follow",
  //   };

  //   fetch(API_URL.HEALTHCHECKUP_FOR_EMPLOYEES, requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       if (result.Errors === false) {
  //         reset();
  //         dispatch(setLoading(false));
  //         FormResponse();
  //       }
  //     })
  //     .catch((error) => console.log("error", error));
  // };

  useEffect(() => {
    document.title = "Health checkup";
    window.scroll(0, 0);
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    // gtag("config", "AW-10841898141");
    gtag("config", "G-8VQRMYBYFG");

    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Discover the convenience of Lab Testing at Home with Neuberg Anand. Our hassle-free and convenient Home Collection bring the lab to you, ensuring a stress-free and comfortable experience in the familiar surroundings of your home. Prioritise your health at home with Neuberg Anand. Lab Tests Anytime, Anywhere. ";
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content =
      "anand diagnostic, blood test, lab test home collection, anand lab bangalore, diagnostic centre near me open now, anand laboratory, full body test, health checkup bangalore, thyroid test price, allergy testing, cbc test price, allergy skin patch test, hcg test, immunology tests, blood sugar test, NST testing, NIPT testing, lipid profile test, diabetes tests, kidney test";
    document.head.appendChild(metaKeywords);
  }, []);

  const gtmScript1 = document.createElement("script");
  gtmScript1.async = true;
  gtmScript1.src = "https://www.googletagmanager.com/gtag/js?id=AW-10841898141";

  const gtmScript2 = document.createElement("script");
  gtmScript2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-10841898141');
    `;

  const gtmScript3 = document.createElement("script");
  gtmScript3.innerHTML = `
    gtag('config', 'AW-10841898141/GDwECMeVpv0YEJ356LEo', {
      'phone_conversion_number': '+918035287579'
    });
    `;

  // Append the script tags to the head of the document
  document.head.appendChild(gtmScript1);
  document.head.appendChild(gtmScript2);
  document.head.appendChild(gtmScript3);

  var consumeing = {
    slidesToScroll: 1,
    infinite: true,
    slidesToShow: 3,
    focusOnSelect: true,
    autoplay: true,
    dots: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div>
      <div className="book-captain-health-container">
        <div className="check-health-heading-container">
          <span className="book-our-heading">BOOK OUR</span>
          <span className="health-check-heading">
            &nbsp; CAPTAIN'S HEALTH CHECK
          </span>
        </div>
      </div>
      <div className="book-health-form-container">
        <div className="left-form h-100">
          <div className="left-side-form-container">
            <form onSubmit={handleSubmit(contactUsFrom)}>
              <div className="form-container">
                <h5 className="get-callback-heading">GET A CALLBACK</h5>
                {errors?.name ? (
                  <small className="text-danger">{errors?.name?.message}</small>
                ) : (
                  ""
                )}
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Enter Your Name"
                  className="name-number-inp"
                />
                {errors?.mobile ? (
                  <small className="text-danger">
                    {"Mobile is a invalid field"}
                  </small>
                ) : (
                  ""
                )}
                <input
                  {...register("mobile")}
                  type="tel"
                  placeholder="Enter Your Mobile Number"
                  className="name-number-inp"
                />
                <div className="radio-inputs-container">
                  <p>Please enter your details and we will reach out to you as soon as we can.</p>
                  {errors?.message ? (
                    <div>
                      <small className="text-danger">{"Choose any one!"}</small>
                    </div>
                  ) : (
                    ""
                  )}
                  {/* <label>
                    <input
                      type="radio"
                      id="test1"
                      value="Contact me by home visit"
                      name="radio-group"
                      {...register("message")}
                    />
                    Home Visit
                  </label>

                  <label>
                    <input
                      type="radio"
                      id="test2"
                      value="Contact me at lab test"
                      name="radio-group"
                      {...register("message")}
                    />
                    Lab Test
                  </label>

                  <label>
                    <input
                      type="radio"
                      id="test3"
                      value="Contact me by callback"
                      name="radio-group"
                      {...register("message")}
                    />
                    <span>Request Callback</span>
                  </label> */}
                </div>

                {Loading === true ? (
                  <button
                    type="submit"
                    disabled
                    className="btn-primary btn-flx-full"
                  >
                    <CgSpinner className="fa-spin mr-2" />
                    Loading ...
                  </button>
                ) : (
                  <button type="submit" className="submit-connect-form">
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="right-img">
          <img src={dhoniimg} alt="" className="dhoni-img-form" />
        </div>
      </div>

      <div className="how-it-works-container">
        <h4>How It Works</h4>
        <div className="howit-works-info-container">
          <div className="how-it-works-box">
            <img src={howitworks1} alt="" />
            <p>
              Share your <br />
              details with us
            </p>
          </div>
          <div className="how-it-works-box">
            <img src={howitworks2} alt="" />
            <p>
              Schedule the test <br />
              at your home
            </p>
          </div>
          <div className="how-it-works-box">
            <img src={howitworks3} alt="" />
            <p>
              Our representative <br />
              would visit your home
            </p>
          </div>
          <div className="how-it-works-box">
            <img src={howitworks4} alt="" />
            <p>
              Get your <br />
              reports online
            </p>
          </div>
        </div>
      </div>

      <div className="book-captain-health-container">
        <div className="check-health-heading-container">
          <span className="health-check-heading">
            Captain's Health Package{" "}
          </span>
        </div>
      </div>

      <div className="tax-saver-parent-container">
        <div className="tax-saver-check-container">
          <div>
            <ul>
              <li>CBC</li>
              <li>Lipid Profile</li>
              <li>Diabetes Profile (HbA1c, FBS)</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Thyroid Function Test (Free T3, Free T4 & TSH)</li>
              <li>Kidney Function</li>
              <li>Liver</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Function Test Urine Routine</li>
              <li>
                <span className="special-tests">Vitamin D</span>
              </li>
              <li>Calcium</li>
            </ul>
          </div>
        </div>

        <div className="price-section-container">
          <div className="actual-price-section-button">
            <span>
              Actual
              <br /> Price
            </span>
            <button className="actual-price-btn">₹5500 </button>
            <p className="empty-div-cut"></p>
          </div>
          <div className="offer-price-section-button">
            <span>
              Offer
              <br /> Price
            </span>
            <button className="offer-price-btn">₹1599 </button>
          </div>
        </div>
      </div>

      <div className="book-captain-health-container">
        <div className="check-health-heading-container">
          <span className="book-our-heading">Full Body </span>
          <span className="health-check-heading">Health Packages</span>
        </div>
      </div>

      <div className="book-captain-health-container">
        <div className="check-health-heading-container">
          <span className="health-check-heading">
            NEU Basic Health Package{" "}
          </span>
        </div>
      </div>

      <div className="tax-saver-parent-container">
        <div className="tax-saver-check-container">
          <div>
            <ul>
              <li>Thyroid Stimulating Hormone </li>
              <li>Free Thyroxine (FT4)</li>
              <li>Liver Function Test (Standard)</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Lipid Profile Standard</li>
              <li>Renal Profile - Standard</li>
              <li>C Reactive Protein</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>FBS</li>
              <li>HbA1c</li>
              <li>Complete Blood Count (Automated blood cell count)</li>
            </ul>
          </div>
        </div>

        <div className="price-section-container">
          <div className="price-section-dummy-box"></div>
          <div className="price-section-button">
            <button>Price ₹1199 </button>
          </div>
          <div className="price-section-dummy-box"></div>
        </div>
      </div>

      <div className="book-captain-health-container">
        <div className="check-health-heading-container">
          <span className="health-check-heading">
            NEU General Health Package{" "}
          </span>
        </div>
      </div>

      <div className="tax-saver-parent-container">
        <div className="tax-saver-check-container">
          <div>
            <ul>
              <li>Free Thyroxine (FT4) </li>
              <li>Thyroid Stimulating Hormone </li>
              <li>HbA1c</li>
              <li>FBS</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>C Reactive Protein</li>
              <li>Complete Blood Count (Automated blood cell count)</li>
              <li>Lipid Profile Standard</li>
              <li>Liver Function Test (Standard) </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Renal Profile - Standard</li>
              <li>Total Calcium</li>
              <li>
                <span className="special-tests">Vitamin B12 Assay</span>
              </li>
              <li>
                <span className="special-tests">Vitamin D (25-OH)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="price-section-container">
          <div className="price-section-dummy-box"></div>
          <div className="price-section-button">
            <button>Price ₹1999 </button>
          </div>
          <div className="price-section-dummy-box"></div>
        </div>
      </div>

      <div className="book-captain-health-container">
        <div className="check-health-heading-container">
          <span className="health-check-heading">
            NEU Advanced Health Package{" "}
          </span>
        </div>
      </div>

      <div className="tax-saver-parent-container">
        <div className="tax-saver-check-container">
          <div>
            <ul>
              <li>Thyroid Stimulating Hormone </li>
              <li>Free Thyroxine (FT4)</li>
              <li>Lipid Profile Standard</li>
              <li>Liver Function Test (Standard) </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Renal Profile - Standard</li>
              <li>HbA1c</li>
              <li>FBS</li>
              <li>C Reactive Protein</li>
              <li>
                <span className="special-tests">Iron Profile</span>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Complete Blood Count (Automated blood cell count)</li>
              <li>Total Calcium </li>
              <li>
                <span className="special-tests">Vitamin B12 Assay</span>
              </li>
              <li>
                <span className="special-tests">Vitamin D (25-OH)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="price-section-container">
          <div className="price-section-dummy-box"></div>
          <div className="price-section-button">
            <button>Price ₹2299 </button>
          </div>
          <div className="price-section-dummy-box"></div>
        </div>
      </div>

      <div className="location-lab-container">
        <div>
          <h4>Location</h4>
          <p>
            No.54, Anand Tower, Bowring Hospital Road, Shivajinagar,
            Bangalore-560001.
          </p>
        </div>
        <div>
          <a target="_blank" href="https://maps.app.goo.gl/JHLezXEYiSUWmb5q6">
            <img src={labLocation} alt="lab location" />
          </a>
        </div>
      </div>

      <div className="book-captain-health-container">
        <div className="check-health-heading-container">
          <span className="health-check-heading">Additional Services </span>
        </div>
      </div>

      <div className="tax-saver-parent-container m-b-set">
        <div className="tax-saver-check-container">
          <div>
            <ul>
              <li>Cardiologist Consultation / TMT / ECHO </li>
              <li>Sonology</li>
              <li>Eye Checkup </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>General Physician Consultation</li>
              <li>Dexa</li>
              <li>Mammogram</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Audiology </li>
              <li>X-Ray</li>
              <li>PFT</li>
              <li>ECG</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
