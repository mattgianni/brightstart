// import React from "react";

function School() {
    return (
        <div className="bg-orange-200 p-5 mt-10 pt-20 pb-20">
            <div className="flex flex-wrap mb-4 stanza mx-auto">
                <div className="flex-shrink">
                    <h2 className="text-5xl font-bold">
                        <p>Our</p>
                        <p>School</p>
                    </h2>
                </div>
                <div className="flex-1">
                    <div className="mr-4">
                        <div className="text-2xl ml-16 mr-15">
                            <p>
                                Thank you for your interest in our school! When
                                I began Bright Start Little School in 2004, my
                                inspiration was to create a place where children
                                would be inspired, have fun, learn, be loved and
                                feel respected. A place where parents would have
                                peace of mind knowing their children were not
                                just safe but happy.
                            </p>

                            <p className="mt-4">
                                The more I learn about children, the more I love
                                them and appreciate what they teach me every
                                day. My educational experience includes
                                Childhood Development coursework at the College
                                of Marin, teacher credentials from the State of
                                California, and over ten years working with
                                children. I have also taken workshops at Marin
                                Childcare and participate in various programs
                                for infant and toddlers care. Our school is
                                licensed by the State of California and our
                                staff has CPR training and fingerprint
                                clearance. Our entire staff is committed to
                                providing a loving, fun—and
                                bilingual—environment for children to learn and
                                grow. We help children in their first steps to
                                learning about our wonderful world and help them
                                to build a foundation for academic success and
                                valuable lifelong skills.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0 p-4">
                    <img
                        src="reading.jpg"
                        alt="girl painting a picture"
                        className="max-w-md object-cover rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}

export default School;
