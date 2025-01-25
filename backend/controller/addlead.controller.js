const leadModel = require('../models/lead');
const leadpropertyModel = require('../models/leadproperty');
const leadkycModel = require('../models/leadkyc');
const mongoose = require('mongoose'); // Import mongoose

const leadController = {
    add: async (req, res) => {
        try {
            const { leadtype, loantype, loanamount, firstName, lastName, gender, mobile, email, dob, pincode } = req.body;

            if (!leadtype || !loantype || !loanamount || !firstName || !lastName || !gender || !mobile || !email || !dob || !pincode) {
                return res.status(400).json({
                    message: "Provide All Details",
                    error: true,
                    success: false
                });
            }

            const payload = req.body;
            const lead = new leadModel(payload); // Use leadModel here
            const savedlead = await lead.save();
            const leadid = savedlead._id;

            // Validate lead ID
            if (!mongoose.Types.ObjectId.isValid(leadid)) {
                return res.status(400).json({ message: "Invalid Lead ID", error: true, success: false });
            }

            const leadExists = await leadModel.findById(leadid); // Use leadModel here
            if (!leadExists) {
                return res.status(400).json({ message: "Application Id not found", error: true, success: false });
            }
            
            const payload2 = { ...req.body, leadid: leadid }; // Include leadId for association
            const leadproperty = new leadpropertyModel(payload2); // Use leadpropertyModel here
            const savedleadproperty = await leadproperty.save();

            const payload3 = { ...req.body, leadid: leadid }; // Include leadId for association
            const leadkyc = new leadkycModel(payload3); // Use leadkycModel here
            const savedleadkyc = await leadkyc.save();

           
            res.status(201).json({
                data: { lead: savedlead, leadProperty: savedleadproperty, leadkyc:savedleadkyc }, // Return both lead and leadproperty
                success: true,
                error: false,
                message: "New Application added successfully!",
            });

        } catch (error) {
            console.error("Error in add:", error); // Log the error for debugging
            return res.status(500).json({
                message: error.message || "Internal Server Error", // More informative error message
                error: true,
                success: false
            });
        }
    }
};

module.exports = leadController;