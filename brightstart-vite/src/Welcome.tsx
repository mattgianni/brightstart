// import React from "react";

function Welcome() {
    return (
        <div className="bg-white p-5">
            <div className="flex flex-wrap stanza mx-auto mt-10 mb-10">
                <div className="flex-1 p-4">
                    <h2 className="text-5xl font-bold">Welcome!</h2>

                    <div className="text-2xl mt-8 mr-20">
                        <p>
                            Here at Bright Start Little School, we do our very
                            best to take care of your child and show them that
                            they are important and loved. Your child’s day will
                            be filled with many fun activities that will
                            stimulate him or her socially, cognitively and
                            emotionally.
                        </p>

                        <p className="mt-5">
                            Our program helps children to become more
                            independent and self-confident. As they gain self
                            control, they are better able to relate to others
                            and communicate. These are key characteristics that
                            help children to develop lifelong learning skills.
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 p-4">
                    <img
                        src="painting.jpg"
                        alt="Logo"
                        className="w-full max-w-sm object-cover rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Welcome;
