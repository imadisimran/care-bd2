/**
 * Central data source for all care services.
 * Each service has a slug used for dynamic routing: /services/[slug]
 */
export const services = [
  {
    slug: "physiotherapy-at-home",
    title: "Professional Physiotherapy at Home",
    desc: "Receive international standard physiotherapy services in the comfort of your own home by experts.",
    image:
      "AB6AXuDN6uOrBApioYeH1B39_jM83xa1mYhcr1Vww7Beyc5TWskJ6gy9C5aDz2kaJun6uQHx373lHDIhE1nrPXE_qVyR3L3HpEbN4NV7b6MRFWurVYZrw7DkuD2qwFSX7o-36LZGgPDm0lkvDJz8lgtywXtnUCGSaZ4vFuUO5Adg8d-MfK3PpJ7jC5WZqCqiv61HgB9V1LuBBjPzd8f40oImy6VVwifvWLkHjOJQ_qJb2H6ZLa_SLBzYbSTguH1qbPX2wqPCMzP_lspwXXs",
    tag1: "Care",
    tag2: "Most Popular",
    tags: [
      { text: "Care", type: "default" },
      { text: "Most Popular", type: "primary" },
    ],
    // Detail page content
    breadcrumb: "Professional Physiotherapy at Home",
    heroTitle: "Professional Physiotherapy at Your Home",
    heroDesc:
      "Restore mobility, manage pain, and recover in the sanctuary of your own home. Our registered specialists bring clinical expertise and empathetic care directly to your doorstep, ensuring your journey to wellness is comfortable and personal.",
    priceFrom: "$85",
    pricePer: "Session",
    rating: "4.9",
    features: [
      { icon: "event_available", label: "Availability: 24/7", sub: "Round-the-clock support" },
      { icon: "map", label: "Coverage: Nationwide", sub: "Available across all regions" },
      { icon: "medical_information", label: "Verified Professionals", sub: "Trained & board-certified" },
    ],
    treatments: [
      {
        icon: "neurology",
        title: "Post-Stroke Rehabilitation",
        desc: "Personalized recovery programs focused on neuroplasticity and regaining motor function.",
      },
      {
        icon: "person_search",
        title: "Pain Management",
        desc: "Advanced therapies for chronic back pain, arthritis, and musculoskeletal discomfort.",
      },
      {
        icon: "healing",
        title: "Post-Operative Recovery",
        desc: "Expert care following orthopedic surgeries to restore strength and range of motion.",
      },
      {
        icon: "child_care",
        title: "Pediatric Physiotherapy",
        desc: "Gentle and effective developmental support for children and infants in familiar surroundings.",
      },
      {
        icon: "elderly",
        title: "Physiotherapy for Elders",
        desc: "Maintaining independence and preventing falls through geriatric-specific strengthening.",
      },
    ],
    whyChooseTitle: "Why Choose AuraCare Home Physiotherapy?",
    whyChoosePoints: [
      {
        title: "Registered Physiotherapists",
        desc: "Every expert is background-checked and board-certified with years of clinical experience.",
      },
      {
        title: "Personalized Treatment Plans",
        desc: "Custom recovery blueprints tailored specifically to your medical history and lifestyle.",
      },
      {
        title: "Evidence-Based Approach",
        desc: "We utilize the latest therapeutic techniques and medical research for every patient.",
      },
      {
        title: "Convenience & Comfort",
        desc: "No travel time or waiting rooms. Your living room becomes your private rehab center.",
      },
      {
        title: "Transparent Monitoring",
        desc: "Track your progress through our digital portal with detailed session reports.",
      },
      {
        title: "Holistic Wellness",
        desc: "We address the root cause, not just the symptoms, for long-term health improvements.",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Book an Assessment",
        desc: "Schedule an initial consultation where our lead physiotherapist evaluates your condition and mobility limits in your home environment.",
      },
      {
        step: 2,
        title: "Receive Your Custom Plan",
        desc: "Within 24 hours, receive a comprehensive rehabilitation roadmap including exercise targets, session frequency, and expected milestones.",
      },
      {
        step: 3,
        title: "Start Your Therapy Sessions",
        desc: "Begin your guided sessions with our specialist. We bring all necessary portable equipment and provide hands-on clinical care.",
      },
    ],
    faqs: [
      {
        q: "What qualifications do your therapists have?",
        a: "All our therapists hold a minimum of a Bachelor's degree in Physiotherapy and are registered with the national health board. They undergo rigorous background checks and continuous clinical training.",
      },
      {
        q: "Will physiotherapy at home be painful?",
        a: "While some exercises may cause mild discomfort as you regain mobility, our goal is therapeutic progress within your comfort limits. We focus on gentle techniques and gradual progression.",
      },
      {
        q: "How many sessions will I need?",
        a: "The number of sessions depends entirely on your specific condition and recovery goals. After your initial assessment, your therapist will provide an estimated timeline.",
      },
      {
        q: "Do you provide the necessary equipment?",
        a: "Yes, our therapists bring portable professional equipment including resistance bands, TENS machines, and therapy mats as required for your specific treatment.",
      },
    ],
  },
  {
    slug: "mortuary-freezer-van",
    title: "Mortuary Freezer Van Service",
    desc: "We provide air-conditioned freezer van services for the transportation of your loved ones with dignity.",
    image:
      "AB6AXuAjA2NUlbj2ZTODfj_7wsAcv9f9RZ0IA0Ab7EiRtfuh7Z5VV2wVvp2bYljqvSHfEBC9R6wA24t_tThhq6obTo-tjbaO_1f9MQx_lOB9OqAEJrgZZyp65TyOsNiGD9RdC4hoESmOvWt4THN2Z_R8v4lPVOfLxX5RylRSMKOy4ySdS_NVEz_D-klUI2C9lnUNx0S8BogMemRovCK26OSsebxEDLlMTz5OsnAqKWy-CwiHc9eZk9eqOUKtNsC3wAgQQTNpIEOHF241cyk",
    tag1: "Ambulance",
    tag2: "Emergency",
    tags: [
      { text: "Emergency", type: "error" },
      { text: "Ambulance", type: "default" },
    ],
    breadcrumb: "Mortuary Freezer Van Service",
    heroTitle: "Safe & Dignified Mortuary Transport",
    heroDesc:
      "We understand that losing a loved one is one of life's most painful moments. Our mortuary freezer van service ensures safe, respectful, and dignified transportation with 24/7 availability across the country.",
    priceFrom: "Call",
    pricePer: "Quote",
    rating: "4.8",
    features: [
      { icon: "event_available", label: "Availability: 24/7", sub: "Always here when you need us" },
      { icon: "map", label: "Coverage: Nationwide", sub: "Available across all regions" },
      { icon: "medical_information", label: "Certified Staff", sub: "Trained & compassionate team" },
    ],
    treatments: [
      { icon: "directions_car", title: "Temperature-Controlled Transport", desc: "State-of-the-art refrigerated vans maintain the required conditions throughout the journey." },
      { icon: "handshake", title: "Dignified Handling", desc: "Our trained staff handle every case with the utmost care, compassion, and professionalism." },
      { icon: "schedule", title: "24/7 Rapid Response", desc: "We dispatch immediately upon request, ensuring minimal wait time during your difficult hour." },
    ],
    whyChooseTitle: "Why Choose AuraCare Mortuary Service?",
    whyChoosePoints: [
      { title: "Available Round-the-Clock", desc: "Our fleet is on standby 24 hours a day, 7 days a week including holidays." },
      { title: "Compassionate Staff", desc: "Our personnel are trained to handle sensitive situations with empathy and respect." },
      { title: "Modern Fleet", desc: "All vans are equipped with modern refrigeration systems and GPS tracking." },
      { title: "Nationwide Network", desc: "We have coverage across all major cities and surrounding areas." },
    ],
    howItWorks: [
      { step: 1, title: "Contact Us", desc: "Call our 24/7 helpline or fill in the request form and we will respond within minutes." },
      { step: 2, title: "Dispatch & Arrival", desc: "Our nearest team is immediately dispatched and arrives at the pickup location swiftly." },
      { step: 3, title: "Safe Transportation", desc: "Your loved one is transported safely and with full dignity to the designated location." },
    ],
    faqs: [
      { q: "Is the service available on weekends and holidays?", a: "Yes, our mortuary van service operates 24/7, including weekends and all public holidays." },
      { q: "How quickly can you dispatch a vehicle?", a: "In most urban areas, we can dispatch within 30 minutes of receiving your request." },
      { q: "Do you handle long-distance transport?", a: "Yes, we provide inter-city and inter-district transport with complete documentation support." },
    ],
  },
  {
    slug: "professional-nurse",
    title: "Professional Nurse Service",
    desc: "Our licensed and experienced nurses provide hospital-quality clinical care in the privacy of your home.",
    image:
      "AB6AXuBZACOWmY_ksmrmVd9oG8Ca8D1hJyV3MKjjQ3BxH3X80sVEhXf6gH3eV8Q5XBJJ_MPdyOf7NeU7wKNhj3X5jfCvnQa8OMxbw0ZzI4oUDKV-aXDAO6GMBIB-m4Ltp5VtpdFc0quaRyB4MkRc88iDD6oDZH7u4UlApJQcpAhTs0dyTMFWrIXWeRV2IWvssQbRLVfo2zLlTW_6PHm7VB1V0zAWXzXIeuUln1G0cbuOQ8GJX7bqo3vhaZUayTaVAApzjZBeaXm3PVJpdpw",
    tag1: "Care",
    tag2: "Most Popular",
    tags: [
      { text: "Most Popular", type: "primary" },
      { text: "Care", type: "default" },
    ],
    breadcrumb: "Professional Nurse Service",
    heroTitle: "Hospital-Quality Nursing in Your Home",
    heroDesc:
      "Our licensed nurses bring the highest standard of clinical care directly to you. From medication management to wound dressing and health monitoring, experience peace-of-mind healthcare from the comfort of your home.",
    priceFrom: "$60",
    pricePer: "Session",
    rating: "4.9",
    features: [
      { icon: "event_available", label: "Availability: 24/7", sub: "Round-the-clock nursing care" },
      { icon: "map", label: "Coverage: Nationwide", sub: "Serving all major regions" },
      { icon: "medical_information", label: "Licensed Nurses", sub: "Board-certified & experienced" },
    ],
    treatments: [
      { icon: "medication", title: "Medication Management", desc: "Accurate administration and monitoring of prescribed medications and IV therapy." },
      { icon: "vaccines", title: "Wound & Dressing Care", desc: "Professional wound cleaning, dressing changes, and post-surgical site monitoring." },
      { icon: "favorite", title: "Vital Signs Monitoring", desc: "Regular tracking of blood pressure, oxygen levels, heart rate, and temperature." },
      { icon: "elderly", title: "Senior Care", desc: "Compassionate personal care for elderly patients including hygiene and mobility support." },
    ],
    whyChooseTitle: "Why Choose AuraCare Nurse Service?",
    whyChoosePoints: [
      { title: "Licensed & Certified", desc: "All nurses hold valid licensure and are registered with the national nursing board." },
      { title: "Clinical Grade Equipment", desc: "We bring hospital-standard tools including IV stands, oxygen monitors, and diagnostic kits." },
      { title: "Personalized Care Plans", desc: "Your nurse collaborates with your doctor to follow a tailored care protocol." },
      { title: "Ongoing Progress Reports", desc: "Families receive regular updates on health status and care milestones via our digital portal." },
    ],
    howItWorks: [
      { step: 1, title: "Schedule a Consultation", desc: "Book an assessment to discuss the patient's needs, medical history, and care requirements." },
      { step: 2, title: "Match with a Nurse", desc: "We pair you with the most suitable registered nurse based on specialization and availability." },
      { step: 3, title: "Begin Home Care", desc: "Your dedicated nurse begins visits on your schedule, bringing all necessary clinical equipment." },
    ],
    faqs: [
      { q: "Are your nurses registered with national health boards?", a: "Yes, every nurse on our platform holds a valid license and is registered with the national nursing regulatory authority." },
      { q: "Can a nurse administer injections and IVs at home?", a: "Yes, our qualified nurses are trained for intravenous therapy, injections, and a wide range of medical procedures in home settings." },
      { q: "Can I request the same nurse for every visit?", a: "We do our best to assign a consistent nurse so they can build familiarity with the patient's needs and preferences." },
    ],
  },
  {
    slug: "nanny-childcare",
    title: "Professional Nanny & Childcare Service",
    desc: "Our trained and caring Nanny provide dedicated, in-home support for children of all ages.",
    image:
      "AB6AXuAo3xqpxpSSMQ_LxAycPsLZt7AS45WbVJmL_leUyAs9FH4lDHUaHEpIt_OrfH2P7V5tP8aDCkhJ0oT1aIVpEBf_VBWThGIqolgPN-oxYeuZ-imqIWsOui7vmflnSxpEE49tjCGzsrOYVcMRlTse9kKzJj41enGAMTU0322W5ke_Xwh4iYQVRrSscg_t70FbfXKj2tKR4TtaEEb3Jv3TxQ0R6aBYACVbT7RxFixV8uzXzwvbWdF5exQ57q03e9fVKDhsXYoD83JQaIA",
    tag1: "Care",
    tag2: "Most Popular",
    tags: [
      { text: "Family", type: "default" },
      { text: "Care", type: "primary" },
    ],
    breadcrumb: "Nanny & Childcare Service",
    heroTitle: "Loving, Professional Childcare at Home",
    heroDesc:
      "Our trained and nurturing nannies provide dedicated, in-home support for children of all ages — from newborns to school-aged kids. Give your child a safe, stimulating environment without leaving home.",
    priceFrom: "$45",
    pricePer: "Session",
    rating: "4.8",
    features: [
      { icon: "child_care", label: "All Age Groups", sub: "Newborns to school-age children" },
      { icon: "verified_user", label: "Background Checked", sub: "Thoroughly vetted caregivers" },
      { icon: "schedule", label: "Flexible Hours", sub: "Part-time and full-time available" },
    ],
    treatments: [
      { icon: "baby_changing_station", title: "Newborn & Infant Care", desc: "Safe feeding, bathing, sleeping routines, and developmental milestone tracking for infants." },
      { icon: "child_care", title: "Toddler Development", desc: "Age-appropriate play, language stimulation, and social skill building for toddlers." },
      { icon: "school", title: "Homework & Learning Support", desc: "Assistance with school assignments, reading, and creative learning activities for older children." },
      { icon: "favorite", title: "Special Needs Support", desc: "Compassionate nannies with specialized training for children requiring extra attention." },
    ],
    whyChooseTitle: "Why Choose AuraCare Nanny Service?",
    whyChoosePoints: [
      { title: "Trained Professionals", desc: "All nannies complete child development, safety, and first-aid training." },
      { title: "NSDA Certified", desc: "Our caregivers meet national skill development authority standards." },
      { title: "Flexible Scheduling", desc: "Book for a few hours, a full day, or recurring weekly sessions." },
      { title: "Parent Reporting", desc: "Receive daily activity logs and progress updates through our platform." },
    ],
    howItWorks: [
      { step: 1, title: "Share Your Needs", desc: "Tell us about your child's age, schedule, and any special requirements." },
      { step: 2, title: "Meet Your Nanny", desc: "We match you with a compatible nanny and arrange a meet-and-greet before committing." },
      { step: 3, title: "Start Care Sessions", desc: "Your nanny begins according to your agreed schedule, fully equipped and prepared." },
    ],
    faqs: [
      { q: "Are nannies trained in first aid?", a: "Yes, all our nannies hold valid first aid and CPR certifications, ensuring your child's safety at all times." },
      { q: "Can I hire a nanny for overnight care?", a: "Yes, we offer flexible plans including overnight, part-time, and live-in arrangements depending on your needs." },
      { q: "What age groups do you cater to?", a: "We support children from newborns all the way to 12 years old, with caregivers specialized for each age group." },
    ],
  },
  {
    slug: "medical-oxygen",
    title: "Medical Oxygen Service",
    desc: "Home delivery and setup of medical-grade oxygen cylinders and concentrators with 24/7 support.",
    image:
      "AB6AXuBnHp9r9uskzfk6MxOzvDiRoE6EdhGW8igMWdL-EV_BiSKwk0MW0tua1QBfcZbTGRJJdoZyIUV0PBmNzsFXibVY84SHCFBkAifU_jWUib4JwFrqffDIJyFG5zLwMB82YmjyXKS0bmxyzvfgcw3qEq2aOyOStKvaeBUsOELliRQP3BRjJMtrTbKvXUTlm2YWFHfq0k364V_JKpegbbqNQEJyI2sssP44RUin4sbv-sUPBbPwiHAy0sx7RVpP4G_d6hJa0eWoWsshuyA",
    tag1: "Medical",
    tag2: "Emergency",
    tags: [
      { text: "Medical", type: "default" },
      { text: "Emergency", type: "error" },
    ],
    breadcrumb: "Medical Oxygen Service",
    heroTitle: "Medical Oxygen Delivered to Your Door",
    heroDesc:
      "Fast, reliable delivery of medical-grade oxygen cylinders and concentrators directly to your home. Whether for post-hospitalization recovery or chronic respiratory conditions, we ensure you breathe easy — anytime, anywhere.",
    priceFrom: "From $30",
    pricePer: "Day",
    rating: "4.7",
    features: [
      { icon: "event_available", label: "Availability: 24/7", sub: "Emergency delivery round-the-clock" },
      { icon: "map", label: "Coverage: Nationwide", sub: "Broad delivery network" },
      { icon: "medical_information", label: "Certified Equipment", sub: "Medical-grade & ISO certified" },
    ],
    treatments: [
      { icon: "air", title: "Cylinder Delivery & Setup", desc: "We deliver, install, and configure oxygen cylinders at your home safely." },
      { icon: "device_hub", title: "Concentrator Rental", desc: "Rent hospital-grade oxygen concentrators for long-term home use." },
      { icon: "local_hospital", title: "CPAP & BiPAP Support", desc: "Supply and support for sleep apnea and respiratory therapy devices." },
    ],
    whyChooseTitle: "Why Choose AuraCare Oxygen Service?",
    whyChoosePoints: [
      { title: "Fast Delivery", desc: "Emergency oxygen delivered within 60 minutes in most service areas." },
      { title: "Medical-Grade Equipment", desc: "All devices are ISO certified and regularly maintained." },
      { title: "Safety Setup", desc: "Our technicians handle installation and educate caregivers on safe usage." },
      { title: "Refill on Demand", desc: "Request cylinder refills anytime via call or our mobile platform." },
    ],
    howItWorks: [
      { step: 1, title: "Place Your Order", desc: "Call us or book online with your oxygen requirements and delivery address." },
      { step: 2, title: "Delivery & Setup", desc: "Our certified technician delivers and safely installs the equipment at your location." },
      { step: 3, title: "Ongoing Support", desc: "We monitor your supply and handle refills or replacements on your schedule." },
    ],
    faqs: [
      { q: "Do I need a doctor's prescription for oxygen?", a: "For cylinders, a prescription is recommended for safety. For concentrators, we offer guided consultation to determine the right flow rate." },
      { q: "How quickly can you deliver oxygen in an emergency?", a: "In most covered urban areas, emergency oxygen delivery can arrive within 30–60 minutes." },
      { q: "Do you offer long-term rental plans?", a: "Yes, we have weekly and monthly rental plans for concentrators with reduced rates for long-term patients." },
    ],
  },
  {
    slug: "professional-caregiver",
    title: "Professional Caregiver Service",
    desc: "Non-medical assistance with daily activities, companionship, and personal hygiene for seniors.",
    image:
      "AB6AXuAl0LuHGcL6p84egoPFh_NlB8BQbCAFy6EV6S_oJmPLoFojrajcTJZy8k3DNY_4lWlRJtBvy5rMlZJJh4iQ9cUyW2Uk_bYiMIXZvT8fc3iIffShpnj0hsiRU6ehw0fgRPu6_XCwSBdLWdja9nKP06P1RpvpdCjmbZu88MxQCnM0uwqRbfIIlHoVHTXQgsAe38IgesW1AJeu4FOuMOEDz0pn_E3fMmyYqOMG7dMV6p0udeAaxoQrVvDFjK2y6FEgiGcaGxHK74HWdOM",
    tag1: "Companion",
    tag2: "Care",
    tags: [
      { text: "Companion", type: "default" },
      { text: "Care", type: "primary" },
    ],
    breadcrumb: "Professional Caregiver Service",
    heroTitle: "Compassionate Caregiver Support at Home",
    heroDesc:
      "Our professional caregivers provide non-medical personal assistance, companionship, and daily living support for seniors and individuals with disabilities — helping preserve dignity, independence, and quality of life.",
    priceFrom: "$40",
    pricePer: "Session",
    rating: "4.8",
    features: [
      { icon: "event_available", label: "Availability: 24/7", sub: "Flexible care schedules" },
      { icon: "handshake", label: "Companionship", sub: "Emotional & social support" },
      { icon: "verified_user", label: "Background Checked", sub: "Trained & vetted caregivers" },
    ],
    treatments: [
      { icon: "elderly", title: "Personal Hygiene Support", desc: "Assistance with bathing, dressing, grooming, and toileting with complete respect." },
      { icon: "restaurant", title: "Meal Preparation", desc: "Nutritious meal planning and preparation tailored to dietary requirements." },
      { icon: "directions_walk", title: "Mobility Assistance", desc: "Safe support for moving around the home, exercise, and preventing falls." },
      { icon: "favorite", title: "Companionship & Engagement", desc: "Conversation, hobbies, games, and social activities to support mental well-being." },
    ],
    whyChooseTitle: "Why Choose AuraCare Caregiver Service?",
    whyChoosePoints: [
      { title: "Empathy-First Approach", desc: "Our caregivers are selected not just for skill, but for genuine compassion and patience." },
      { title: "NSDA Certified", desc: "All caregivers complete nationally accredited training in elder care." },
      { title: "Family Communication", desc: "We keep families regularly updated on care activities and the patient's well-being." },
      { title: "Consistent Pairing", desc: "We aim to match you with the same caregiver each session for comfort and trust." },
    ],
    howItWorks: [
      { step: 1, title: "Assess Care Needs", desc: "Share details about the patient's daily routine, health status, and personal preferences." },
      { step: 2, title: "Meet Your Caregiver", desc: "We introduce a matched caregiver for a trial session to ensure compatibility." },
      { step: 3, title: "Consistent Home Support", desc: "Your caregiver arrives on your schedule and follows a personalized daily care plan." },
    ],
    faqs: [
      { q: "Is caregiver service the same as nursing?", a: "No — caregivers provide non-medical support like hygiene, meals, mobility, and companionship. Nurses handle clinical and medical tasks." },
      { q: "Can caregivers stay overnight?", a: "Yes, we offer 12-hour and 24-hour live-in arrangements for patients requiring round-the-clock non-medical support." },
      { q: "How is the caregiver matched to my family member?", a: "We consider the patient's personality, language preference, care needs, and caregiver specialization to ensure the best fit." },
    ],
  },
];

/**
 * Find a service by its slug.
 * Returns undefined if not found.
 */
export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}
