// import React from "react";

function Header() {
    return (
        <header className="bg-orange-200 p-5">
            <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                    <img
                        src="logo_left.jpg"
                        alt="Logo"
                        className="h-48 object-cover"
                    />
                </div>
                <div className="flex-1">
                    <h1 className="text-5xl">Bright Start Little School</h1>
                    <h2 className="text-xl text-gray-600">
                        Building a Bright Future Through Play-Based Learning
                    </h2>
                </div>
            </div>
        </header>
    );
}

export default Header;
