// import React from "react";

function Footer() {
    return (
        <div className="bg-black text-white p-4">
            <div className="p-5 text-center">
                <p className="text-lg">
                    For more information about our program or to schedule a
                    visit please email{" "}
                    <a
                        href="mailto:vaniajudson@hotmail.com"
                        className="text-orange-300"
                    >
                        vaniajudson@hotmail.com
                    </a>{" "}
                    or call 415.924.0022
                </p>
                <p className="text-lg">2 Mohawk Ave, Corte Madera, CA 94925</p>{" "}
                <p className="text-lg">License # 214005034</p>{" "}
            </div>

            <div className="flex justify-center items-center">
                <div className="space-x-4">
                    {/* Facebook Button */}
                    <a
                        href="https://www.facebook.com"
                        className="text-black bg-white hover:bg-gray-200 p-4 rounded-full inline-flex items-center justify-center"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    {/* LinkedIn Button */}
                    <a
                        href="https://www.linkedin.com"
                        className="text-black bg-white hover:bg-gray-200 p-4 rounded-full inline-flex items-center justify-center"
                    >
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    {/* Instagram Button */}
                    <a
                        href="https://www.instagram.com"
                        className="text-black bg-white hover:bg-gray-200 p-4 rounded-full inline-flex items-center justify-center"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
