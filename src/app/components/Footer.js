import { Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const socialIcons = {
    facebook: Facebook,
    twitter: Twitter,
    linkedin: Linkedin,
    instagram: Instagram,
  };

  return (
    <footer
      className="py-12 mt-16"
      style={{ backgroundColor: "rgba(4, 9, 47, 0.95)" }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1">
            <h4 className="text-xl font-bold mb-4" style={{ color: "#F4F5FB" }}>
              PT. Georgy Solusi Digital
            </h4>
            <p className="mb-4" style={{ color: "#F4F5FB" }}>
              Transformasi digital untuk bisnis modern yang inovatif dan
              berkelanjutan.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:contact@georgysolusidigital.com"
                className="flex items-center text-sm"
                style={{ color: "#A9E1E2" }}
              >
                <Mail className="h-4 w-4 mr-2" />
                contact@georgysolusidigital.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h5
              className="text-lg font-semibold mb-4"
              style={{ color: "#F4F5FB" }}
            >
              Quick Links
            </h5>
            <ul className="space-y-2">
              {["About Us", "Our Services", "Why Choose Us", "Our Team"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm hover:opacity-80 transition-opacity duration-300"
                      style={{ color: "#F4F5FB" }}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-span-1">
            <h5
              className="text-lg font-semibold mb-4"
              style={{ color: "#F4F5FB" }}
            >
              Our Services
            </h5>
            <ul className="space-y-2">
              {[
                "Digital Transformation",
                "Web Development",
                "Mobile Apps",
                "Cloud Solutions",
                "IT Consulting",
              ].map((service) => (
                <li key={service}>
                  <a
                    href={`/services#${service
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="text-sm hover:opacity-80 transition-opacity duration-300"
                    style={{ color: "#F4F5FB" }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-span-1">
            <h5
              className="text-lg font-semibold mb-4"
              style={{ color: "#F4F5FB" }}
            >
              Get in Touch
            </h5>
            <div className="mb-6">
              <p className="text-sm mb-2" style={{ color: "#F4F5FB" }}>
                Villa Estetika 11-12A
                <br />
                Yogyakarta, Indonesia
              </p>
              <p className="text-sm" style={{ color: "#A9E1E2" }}>
                Phone: +628179350817
              </p>
            </div>
            <div className="flex space-x-4">
              {["facebook", "twitter", "linkedin", "instagram"].map(
                (social) => {
                  const Icon = socialIcons[social];
                  return (
                    <a
                      key={social}
                      href={`https://${social}.com/georgysolusi`}
                      className="transition-opacity duration-300 hover:opacity-80"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "rgba(169, 225, 226, 0.2)" }}
                      >
                        <Icon className="h-4 w-4" color="#F4F5FB" />
                      </div>
                    </a>
                  );
                }
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 mt-8 border-t border-opacity-20"
          style={{ borderColor: "#CAE7FF" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0" style={{ color: "#F4F5FB" }}>
              &copy; {new Date().getFullYear()} PT. Georgy Solusi Digital. All
              rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="/privacy-policy"
                className="text-sm hover:opacity-80 transition-opacity duration-300"
                style={{ color: "#F4F5FB" }}
              >
                Privacy Policy
              </a>
              <a
                href="/terms-conditions"
                className="text-sm hover:opacity-80 transition-opacity duration-300"
                style={{ color: "#F4F5FB" }}
              >
                Terms & Conditions
              </a>
              <a
                href="/sitemap"
                className="text-sm hover:opacity-80 transition-opacity duration-300"
                style={{ color: "#F4F5FB" }}
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
