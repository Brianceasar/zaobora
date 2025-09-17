import { FaLocationDot, FaPhone, FaEnvelope } from 'react-icons/fa6';

const ContactInfoSection = () => (
  <section id="contact-us" className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap g-4 justify-center">
        <div className="w-full md:w-6/12 lg:w-4/12 mb-8">
          <div className="flex items-start gap-4 p-6 bg-gray-100 rounded-lg shadow-sm h-full">
            <div className="text-green-700 text-3xl">
              <FaLocationDot />
            </div>
            <div className="flex flex-col">
              <h5 className="text-xl font-bold mb-1">Address</h5>
              <p className="text-gray-700">Mbeya, Tanzania</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-4/12 mb-8">
          <div className="flex items-start gap-4 p-6 bg-gray-100 rounded-lg shadow-sm h-full">
            <div className="text-green-700 text-3xl">
              <FaPhone />
            </div>
            <div className="flex flex-col">
              <h5 className="text-xl font-bold mb-1">Talk to Us</h5>
              <p className="text-gray-700">Phone number: (+255)752 563 361</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-4/12 mb-8">
          <div className="flex items-start gap-4 p-6 bg-gray-100 rounded-lg shadow-sm h-full">
            <div className="text-green-700 text-3xl">
              <FaEnvelope />
            </div>
            <div className="flex flex-col">
              <h5 className="text-xl font-bold mb-1">Send us email</h5>
              <p className="text-gray-700">info@zaobora.co.tz</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactInfoSection;