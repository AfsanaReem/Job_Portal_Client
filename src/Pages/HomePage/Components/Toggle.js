import React, { useState } from 'react';
const Toggle = () => {
    const [toggle, setToggle] = useState(true)

    return (
        <div>
            <div className="label form-control">
                <input onClick={() => setToggle(!toggle)} type="checkbox" className="toggle label-text justify-center" />
                <label className="label justify-center gap-5 cursor-pointer">
                    {toggle &&
                        <span className="label-text">Job Seeker</span>
                    }
                    {!toggle &&
                        <span className="label-text">Job Poster</span>

                    }
                </label>
            </div>
        </div>
    );
};

export default Toggle;