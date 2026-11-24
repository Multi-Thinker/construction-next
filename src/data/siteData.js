export const routes = [
  ["home", "Home"],
  ["services", "Services"],
  ["portfolio", "Portfolio"],
  ["work", "Our Work"],
  ["areas", "Service Areas"],
  ["contact", "Contact"],
  ["about", "About Us"],
];

export const navGroups = [
  { slug: "services", label: "Services", children: ["Patio Construction", "Pool Construction", "Hardscaping and Landscaping", "Roofing", "Kitchen Remodeling", "Bathroom Remodeling", "Home additions", "Flooring", "Siding", "General Construction", "Painting"] },
  { slug: "portfolio", label: "Portfolio", children: ["Pool and concrete work Davie FL", "Coral Springs FL project portfolio", "Plantation FL project portfolio"] },
  { slug: "work", label: "Our Work", children: ["New Pool Construction Project in West Palm Beach", "Coral Springs FL Home Renovation Before and After"] },
  { slug: "areas", label: "Service Areas", children: ["Coral Springs", "Plantation", "Davie", "Weston", "Cooper City", "Parkland", "Fort Lauderdale", "Hollywood"] },
  { slug: "contact", label: "Contact" },
  { slug: "about", label: "About Us", children: ["Blog"] },
];

export const pageData = {
  services: { title: "Remodeling Services", intro: "Explore the main service areas Top Construction and Design presents across Broward County.", cards: ["Kitchen Remodeling", "Bathroom Remodeling", "Home Additions", "Flooring", "Pool Construction", "General Construction"] },
  portfolio: { title: "Project Portfolio", intro: "A focused place for verified project stories, before-and-after evidence and finished-space photography.", cards: ["Plantation project portfolio", "Coral Springs project portfolio", "Pool and concrete work in Davie"] },
  work: { title: "Our Work", intro: "See how a thoughtful plan, clear scope and careful execution come together in a finished home.", cards: ["New pool construction project", "Coral Springs home renovation", "More project stories"] },
  areas: { title: "Service Areas", intro: "Top Construction and Design serves Broward County and nearby South Florida communities.", cards: ["Fort Lauderdale", "Weston", "Davie", "Plantation", "Coral Springs", "Cooper City", "Parkland", "Hollywood"] },
  contact: { title: "Contact Top Construction & Design", intro: "Tell us what you are planning and start the conversation about your home.", cards: [] },
  about: { title: "About Top Construction & Design", intro: "A local remodeling team centered on professionalism, permitting support and attention to detail.", cards: [] },
};

