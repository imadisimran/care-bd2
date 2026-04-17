import ServiceCard from "../card/ServiceCard";

export default function ServiceGrid() {
  const services = [
    {
      title: "Professional Nurse Service",
      description: "Expert medical assistance at home, including medication management, wound care, and health monitoring.",
      image: "AB6AXuBZACOWmY_ksmrmVd9oG8Ca8D1hJyV3MKjjQ3BxH3X80sVEhXf6gH3eV8Q5XBJJ_MPdyOf7NeU7wKNhj3X5jfCvnQa8OMxbw0ZzI4oUDKV-aXDAO6GMBIB-m4Ltp5VtpdFc0quaRyB4MkRc88iDD6oDZH7u4UlApJQcpAhTs0dyTMFWrIXWeRV2IWvssQbRLVfo2zLlTW_6PHm7VB1V0zAWXzXIeuUln1G0cbuOQ8GJX7bqo3vhaZUayTaVAApzjZBeaXm3PVJpdpw",
      tags: [
        { text: "Most Popular", type: "primary" },
        { text: "Care", type: "default" }
      ]
    },
    {
      title: "24/7 Emergency Ambulance",
      description: "Rapid response ACLS and BLS ambulance services equipped with life-support systems for critical transport.",
      image: "AB6AXuAjA2NUlbj2ZTODfj_7wsAcv9f9RZ0IA0Ab7EiRtfuh7Z5VV2wVvp2bYljqvSHfEBC9R6wA24t_tThhq6obTo-tjbaO_1f9MQx_lOB9OqAEJrgZZyp65TyOsNiGD9RdC4hoESmOvWt4THN2Z_R8v4lPVOfLxX5RylRSMKOy4ySdS_NVEz_D-klUI2C9lnUNx0S8BogMemRovCK26OSsebxEDLlMTz5OsnAqKWy-CwiHc9eZk9eqOUKtNsC3wAgQQTNpIEOHF241cyk",
      tags: [
        { text: "Emergency", type: "error" },
        { text: "Ambulance", type: "default" }
      ]
    },
    {
      title: "Physiotherapy at Home",
      description: "Specialized rehabilitation programs for stroke recovery, post-surgery, and chronic pain management.",
      image: "AB6AXuDN6uOrBApioYeH1B39_jM83xa1mYhcr1Vww7Beyc5TWskJ6gy9C5aDz2kaJun6uQHx373lHDIhE1nrPXE_qVyR3L3HpEbN4NV7b6MRFWurVYZrw7DkuD2qwFSX7o-36LZGgPDm0lkvDJz8lgtywXtnUCGSaZ4vFuUO5Adg8d-MfK3PpJ7jC5WZqCqiv61HgB9V1LuBBjPzd8f40oImy6VVwifvWLkHjOJQ_qJb2H6ZLa_SLBzYbSTguH1qbPX2wqPCMzP_lspwXXs",
      tags: [
        { text: "Care", type: "default" }
      ]
    },
    {
      title: "Medical Oxygen Service",
      description: "Home delivery and setup of medical-grade oxygen cylinders and concentrators with 24/7 support.",
      image: "AB6AXuBnHp9r9uskzfk6MxOzvDiRoE6EdhGW8igMWdL-EV_BiSKwk0MW0tua1QBfcZbTGRJJdoZyIUV0PBmNzsFXibVY84SHCFBkAifU_jWUib4JwFrqffDIJyFG5zLwMB82YmjyXKS0bmxyzvfgcw3qEq2aOyOStKvaeBUsOELliRQP3BRjJMtrTbKvXUTlm2YWFHfq0k364V_JKpegbbqNQEJyI2sssP44RUin4sbv-sUPBbPwiHAy0sx7RVpP4G_d6hJa0eWoWsshuyA",
      tags: [
        { text: "Medical", type: "default" }
      ]
    },
    {
      title: "Nanny & Childcare",
      description: "Professional child development specialists providing safe and nurturing care in your home.",
      image: "AB6AXuAo3xqpxpSSMQ_LxAycPsLZt7AS45WbVJmL_leUyAs9FH4lDHUaHEpIt_OrfH2P7V5tP8aDCkhJ0oT1aIVpEBf_VBWThGIqolgPN-oxYeuZ-imqIWsOui7vmflnSxpEE49tjCGzsrOYVcMRlTse9kKzJj41enGAMTU0322W5ke_Xwh4iYQVRrSscg_t70FbfXKj2tKR4TtaEEb3Jv3TxQ0R6aBYACVbT7RxFixV8uzXzwvbWdF5exQ57q03e9fVKDhsXYoD83JQaIA",
      tags: [
        { text: "Family", type: "default" }
      ]
    },
    {
      title: "Professional Caregiver",
      description: "Non-medical assistance with daily activities, companionship, and personal hygiene for seniors.",
      image: "AB6AXuAl0LuHGcL6p84egoPFh_NlB8BQbCAFy6EV6S_oJmPLoFojrajcTJZy8k3DNY_4lWlRJtBvy5rMlZJJh4iQ9cUyW2Uk_bYiMIXZvT8fc3iIffShpnj0hsiRU6ehw0fgRPu6_XCwSBdLWdja9nKP06P1RpvpdCjmbZu88MxQCnM0uwqRbfIIlHoVHTXQgsAe38IgesW1AJeu4FOuMOEDz0pn_E3fMmyYqOMG7dMV6p0udeAaxoQrVvDFjK2y6FEgiGcaGxHK74HWdOM",
      tags: [
        { text: "Companion", type: "default" }
      ]
    }
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </section>
  );
}
