
import React, { useEffect, useState } from "react";
import "./AllServices.css";
import ServiceDetail from "./Servicedetails";

import hearingTestImg from "../../assets/hearingtest.png";
import hearingAidImg from "../../assets/hearingaid.png";
import speechTherapyImg from "../../assets/speechtherapy.png";
import hearingCareImg from "../../assets/hearingcare.png";

import pureToneAudiometryImg from "../../assets/PureToneAudiometory.png";
import speechAudiometryImg from "../../assets/SpeechAudiometry.png";
import abrTestImg from "../../assets/ABRTest.png";
import engTestImg from "../../assets/EngTest.png";
import ecogImg from "../../assets/ECOG.png";
import vempImg from "../../assets/VVEMP.png";
import oaeImg from "../../assets/OAE.png";

const SERVICES_DATA = [
  {
    id: 1,
    icon: "fas fa-microscope",
    title: "Hearing Test in Ranchi",
    category: "Diagnostic Service",
    image: hearingTestImg,
    description:
      "Comprehensive hearing tests in Ranchi using advanced audiometric equipment to identify the type and degree of hearing loss.",
  },
  {
    id: 2,
    icon: "fas fa-headphones",
    title: "Hearing Aid in Ranchi",
    category: "Device & Fitting",
    image: hearingAidImg,
    description:
      "Hearing aid consultation, trial, fitting, programming, and after-care with solutions from leading global hearing aid brands.",
  },
  {
    id: 3,
    icon: "fas fa-comments",
    title: "Speech Therapy in Ranchi",
    category: "Therapy Service",
    image: speechTherapyImg,
    description:
      "Personalized speech and language therapy for children and adults to support clearer communication, confidence, and everyday interaction.",
  },
  {
    id: 4,
    icon: "fas fa-heart-pulse",
    title: "Hearing Care in Ranchi",
    category: "Long-Term Care",
    image: hearingCareImg,
    description:
      "Complete hearing care support including counselling, hearing protection, tinnitus guidance, hearing aid support, and ongoing care.",
  },
  {
    id: 5,
    icon: "fas fa-wave-square",
    title: "Pure Tone Audiometry Test in Ranchi",
    category: "Diagnostic Service",
    image: pureToneAudiometryImg,
    description:
      "Pure Tone Audiometry measures hearing sensitivity across different frequencies and helps determine the degree and type of hearing loss.",
  },
  {
    id: 6,
    icon: "fas fa-comment-dots",
    title: "Speech Audiometry in Ranchi",
    category: "Diagnostic Service",
    image: speechAudiometryImg,
    description:
      "Speech Audiometry evaluates how clearly you can hear and understand spoken words during different listening conditions.",
  },
  {
    id: 7,
    icon: "fas fa-brain",
    title: "ABR Test in Ranchi",
    category: "Advanced Diagnostic",
    image: abrTestImg,
    description:
      "Auditory Brainstem Response (ABR) is an objective hearing test that measures how the hearing nerve and brainstem respond to sound.",
  },
  {
    id: 8,
    icon: "fas fa-eye",
    title: "ENG Test in Ranchi",
    category: "Balance & Vestibular Test",
    image: engTestImg,
    description:
      "Electronystagmography (ENG) records involuntary eye movements to help assess the balance and vestibular system.",
  },
  {
    id: 9,
    icon: "fas fa-bolt",
    title: "ECoG Test in Ranchi",
    category: "Advanced Diagnostic",
    image: ecogImg,
    description:
      "Electrocochleography (ECoG) is an advanced objective test used to evaluate electrical responses from the inner ear.",
  },
  {
    id: 10,
    icon: "fas fa-sliders",
    title: "VEMP Test in Ranchi",
    category: "Balance & Vestibular Test",
    image: vempImg,
    description:
      "Vestibular Evoked Myogenic Potential (VEMP) testing evaluates pathways associated with the balance organs of the inner ear.",
  },
  {
    id: 11,
    icon: "fas fa-volume-down",
    title: "OAE Test in Ranchi",
    category: "Diagnostic Service",
    image: oaeImg,
    description:
      "Otoacoustic Emission (OAE) testing evaluates cochlear function and can be used for hearing screening and assessment.",
  },
];

const ServiceCard = ({ service, onReadDetail }) => {
  const { icon, title, category, image, description } = service;

  return (
    <div className="all-service-card">
      <div className="all-service-card__img-wrap">
        {image ? (
          <img
            src={image}
            alt={`${title} at Indian Speech & Hearing Clinic`}
            className={`all-service-card__img ${
              title.includes("Pure Tone Audiometry")
                ? "all-service-card__img--contain"
                : ""
            }`}
          />
        ) : (
          <div className="all-service-card__icon-fallback">
            <i className={icon}></i>
          </div>
        )}
      </div>

      <div className="all-service-card__body">
        <span className="all-service-card__pill">
          <i className="fas fa-shield-heart"></i> {category}
        </span>

        <h2 className="all-service-card__title">{title}</h2>

        <p className="all-service-card__desc">{description}</p>

        <button
          className="all-service-card__btn"
          onClick={onReadDetail}
          aria-label={`Read details about ${title}`}
        >
          Read Service Detail <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

const AllServices = ({ onClose }) => {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.history.pushState({ allServices: true }, "");

    const handlePopState = () => {
      onClose();
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("popstate", handlePopState);
    };
  }, [onClose]);

  const handleClose = () => {
    if (window.history.state && window.history.state.allServices) {
      window.history.back();
    } else {
      onClose();
    }
  };

  const handleSelect = (service) => {
    setSelectedService(service);
  };

  return (
    <>
      <div className="all-services-page">
        <div className="all-services-header">
          <div className="all-services-header__inner">
            <button
              className="all-services-back"
              onClick={handleClose}
              aria-label="Go back to main services"
            >
              <i className="fas fa-arrow-left"></i> Back
            </button>

            <div className="all-services-header__content">
              <div className="all-services-header__icon">
                <i className="fas fa-stethoscope"></i>
              </div>

              <div>
                <h1 className="all-services-header__title">
                  Hearing & Speech Services in Ranchi
                </h1>

                <p className="all-services-header__sub">
                  Explore our complete range of hearing tests, hearing aids,
                  speech therapy, and diagnostic services in Ranchi.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="all-services-body">
          <div className="container">
            <div className="all-services-grid">
              {SERVICES_DATA.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onReadDetail={() => handleSelect(service)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedService && (
        <ServiceDetail
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </>
  );
};

export default AllServices;

