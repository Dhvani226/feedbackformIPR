import React, { useState } from 'react';

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        institutionName: 'LDRP Institute of Technology and Research',
        website: '',
        visitDate: '',
        staffName: '',
        staffEmail: '',
        staffMobile: '',
        totalStudents: '',
        accompanyingStaff: '',
        sources: [],
        campuses: [],
        ratings: {
            iprRating: '',
            fciptRating: '',
            knowledge: '',
            explanationsIPR: '',
            explanationsFCIPT: '',
            knowledgeBefore: '',
            knowledgeAfter: '',
            technicalContents: '',
            easeOfUnderstanding: ''
        },
        best: '',
        worst: '',
        suggestions: '',
        comments: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                [name]: checked
                    ? [...prevData[name], value]
                    : prevData[name].filter((item) => item !== value)
            }));
        } else if (name in formData.ratings) {
            setFormData((prevData) => ({
                ...prevData,
                ratings: { ...prevData.ratings, [name]: value }
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add your form submission logic here
    };

    return (
        <div className="container mx-auto p-5 bg-white shadow-md rounded-md h-screen overflow-y-auto">
            <div className="form-section mb-5 bg-white text-black p-5 rounded-md">
                <h2 className="text-center text-2xl text-gray-800 mb-5 font-bold">FEEDBACK FORM:</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="institutionName" className="block mb-2 font-bold text-gray-800">
                        Name of the visiting Institution <span className="text-red-500">*</span>
                    </label>
                    <input type="text" id="institutionName" name="institutionName" value={formData.institutionName} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md mb-3" />

                    <label htmlFor="website" className="block mb-2 font-bold text-gray-800">
                        Website of the institution <span className="text-red-500">*</span>
                    </label>
                    <input type="text" id="website" name="website" value={formData.website} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md mb-3" />

                    <label htmlFor="visitDate" className="block mb-2 font-bold text-gray-800">
                        Date of visit <span className="text-red-500">*</span>
                    </label>
                    <input type="date" id="visitDate" name="visitDate" value={formData.visitDate} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md mb-3" />

                    <label htmlFor="staffName" className="block mb-2 font-bold text-gray-800">
                        Name of the in-charge staff member <span className="text-red-500">*</span>
                    </label>
                    <input type="text" id="staffName" name="staffName" value={formData.staffName} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md mb-3" />

                    <label htmlFor="staffEmail" className="block mb-2 font-bold text-gray-800">
                        Email of in-charge staff member <span className="text-red-500">*</span>
                    </label>
                    <input type="email" id="staffEmail" name="staffEmail" value={formData.staffEmail} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md mb-3" />

                    <label htmlFor="staffMobile" className="block mb-2 font-bold text-gray-800">
                        Mobile number of in-charge staff member <span className="text-red-500">*</span>
                    </label>
                    <input type="tel" id="staffMobile" name="staffMobile" pattern="[0-9]{10}" value={formData.staffMobile} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md mb-3" />

                    <label htmlFor="totalStudents" className="block mb-2 font-bold text-gray-800">
                        Total number of students <span className="text-red-500">*</span>
                    </label>
                    <input type="number" id="totalStudents" name="totalStudents" value={formData.totalStudents} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md mb-3" />

                    <label htmlFor="accompanyingStaff" className="block mb-2 font-bold text-gray-800">
                        Number of accompanying staff members <span className="text-red-500">*</span>
                    </label>
                    <input type="number" id="accompanyingStaff" name="accompanyingStaff" value={formData.accompanyingStaff} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md mb-3" />

                    <label className="block mb-2 font-bold text-gray-800">
                        How did you come to know about IPR? <span className="text-red-500">*</span>
                    </label>
                    <div className="mb-3">
                        <input type="checkbox" id="internet" name="sources" value="Internet" checked={formData.sources.includes("Internet")} onChange={handleChange} />
                        <label htmlFor="internet" className="ml-2 cursor-pointer">From the Internet</label>
                    </div>
                    <div className="mb-3">
                        <input type="checkbox" id="socialMedia" name="sources" value="Social Media" checked={formData.sources.includes("Social Media")} onChange={handleChange} />
                        <label htmlFor="socialMedia" className="ml-2 cursor-pointer">From Social Media</label>
                    </div>
                    <div className="mb-3">
                        <input type="checkbox" id="friends" name="sources" value="Friends" checked={formData.sources.includes("Friends")} onChange={handleChange} />
                        <label htmlFor="friends" className="ml-2 cursor-pointer">From friends/colleagues</label>
                    </div>
                    <div className="mb-3">
                        <input type="checkbox" id="other" name="sources" value="Other" checked={formData.sources.includes("Other")} onChange={handleChange} />
                        <label htmlFor="other" className="ml-2 cursor-pointer">Other</label>
                    </div>

                    <label className="block mb-2 font-bold text-gray-800">
                        IPR Campuses visited during the trip? <span className="text-red-500">*</span>
                    </label>
                    <div className="mb-3">
                        <input type="checkbox" id="iprMain" name="campuses" value="IPR Main" checked={formData.campuses.includes("IPR Main")} onChange={handleChange} />
                        <label htmlFor="iprMain" className="ml-2 cursor-pointer">IPR main campus</label>
                    </div>
                    <div className="mb-3">
                        <input type="checkbox" id="fcipt" name="campuses" value="FCIPT" checked={formData.campuses.includes("FCIPT")} onChange={handleChange} />
                        <label htmlFor="fcipt" className="ml-2 cursor-pointer">FCIPT</label>
                    </div>

                    {/* Ratings */}
                    {['iprRating', 'fciptRating', 'knowledge', 'explanationsIPR', 'explanationsFCIPT', 'knowledgeBefore', 'knowledgeAfter', 'technicalContents', 'easeOfUnderstanding'].map((field, index) => (
                        <div key={index} className="rating-group mb-5">
                            <label className="rating-label block mb-2 font-bold text-gray-800">How do you rate your experience? <span className="text-red-500">*</span></label>
                            <div className="rating-options flex items-center">
                                {[1, 2, 3, 4, 5].map((value) => (
                                    <label key={value} className="flex items-center mr-5 cursor-pointer">
                                        <input
                                            type="radio"
                                            name={field}
                                            value={value}
                                            checked={formData.ratings[field] === value.toString()}
                                            onChange={handleChange}
                                            className="mr-2"
                                        />
                                        {value}
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Comments */}
                    <label htmlFor="best" className="block mb-2 font-bold text-gray-800">What did you like best about the visit?</label>
                    <textarea id="best" name="best" value={formData.best} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md mb-3" />

                    <label htmlFor="worst" className="block mb-2 font-bold text-gray-800">What did you like the least about the visit?</label>
                    <textarea id="worst" name="worst" value={formData.worst} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md mb-3" />

                    <label htmlFor="suggestions" className="block mb-2 font-bold text-gray-800">Any suggestions for improvement?</label>
                    <textarea id="suggestions" name="suggestions" value={formData.suggestions} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md mb-3" />

                    <label htmlFor="comments" className="block mb-2 font-bold text-gray-800">Any additional comments?</label>
                    <textarea id="comments" name="comments" value={formData.comments} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md mb-3" />

                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit Feedback
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FeedbackForm;
