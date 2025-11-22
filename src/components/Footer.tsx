import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <img
                  src="/images/ocean-fresh-logo.png"
                  alt="Ocean Fresh Logo"
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="text-3xl font-thin">{t("footer.company")}</h3>
                  <p className="text-gray-400 font-light">
                    Premium Seafood Exports
                  </p>
                </div>
              </div>
              <p className="text-gray-300 mb-8 max-w-md font-light text-lg leading-relaxed">
                {t("footer.description")}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-gray-300 font-light">
                  <Mail className="h-5 w-5" />
                  <a
                    href="mailto:oceanfreesh@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    oceanfreesh@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4 text-gray-300 font-light">
                  <Phone className="h-5 w-5" />
                  <a
                    href="tel:+34625400711"
                    className="hover:text-white transition-colors"
                  >
                    (+34) 625400711
                  </a>
                </div>
                <div className="flex items-center space-x-4 text-gray-300 font-light">
                  <MapPin className="h-5 w-5" />
                  <span>Nouadhibou, Mauritania</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-light mb-8">Quick Links</h4>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("hero")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-gray-300 hover:text-white transition-colors font-light text-lg hover:scale-105 transition-transform duration-200"
                  >
                    {t("nav.home")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("products")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-gray-300 hover:text-white transition-colors font-light text-lg hover:scale-105 transition-transform duration-200"
                  >
                    {t("nav.products")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("quality")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-gray-300 hover:text-white transition-colors font-light text-lg hover:scale-105 transition-transform duration-200"
                  >
                    {t("nav.quality")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("logistics")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-gray-300 hover:text-white transition-colors font-light text-lg hover:scale-105 transition-transform duration-200"
                  >
                    {t("nav.logistics")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-gray-300 hover:text-white transition-colors font-light text-lg hover:scale-105 transition-transform duration-200"
                  >
                    {t("nav.contact")}
                  </button>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-xl font-light mb-8">Our Products</h4>
              <ul className="space-y-4">
                <li className="text-gray-300 font-light text-lg">
                  {t("products.crustaceans")}
                </li>
                <li className="text-gray-300 font-light text-lg">
                  {t("products.sharks")}
                </li>
                <li className="text-gray-300 font-light text-lg">
                  {t("products.fish")}
                </li>
                <li className="text-gray-300 font-light text-lg">
                  Fresh & Frozen
                </li>
                <li className="text-gray-300 font-light text-lg">
                  ONISPA Certified
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-16 pt-12 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-light text-lg">
              © {currentYear} Ocean Fresh Mauritania. {t("footer.rights")}
            </p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <a
                href="https://www.oceanfressh.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors font-light text-lg hover:scale-105 transition-transform duration-200"
              >
                www.oceanfressh.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
