const express = require('express');
const bodyParser = require('body-parser');
const NodeCache = require('node-cache');
const router=express.Router();


// Initialize node-cache without expiration
const myCache = new NodeCache({ stdTTL: 0, checkperiod: 0 });



// Helper function to set data in cache
const setData = (key, data) => {
    myCache.set(key, data);
};

// Helper function to get data from cache
const getData = (key) => {
    return myCache.get(key);
};

// Routes for Personal Information
router.post('/Personal', async(req, res) => {
    const { name, contact, bio } = req.body;
    console.log(name);
    console.log(contact);
    console.log(bio);

    if (!name || !contact || !bio) {
        return res.status(400).json({ error: "Missing Fields in Personal Information." });
    }

    try {
        const personalInfo = { name, contact, bio };
        setData('personalInfo', personalInfo);
        console.log(`Stored Personal Info: ${JSON.stringify(personalInfo)}`);
        return res.status(200).json({ message: "Personal Information saved successfully!" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Something went wrong while saving Personal Information." });
    }
});

router.get('/Personal', (req, res) => {
    try {
        const personalInfo = getData('personalInfo');
        if (!personalInfo) {
            return res.status(404).json({ error: "No Personal Information found." });
        }
        return res.status(200).json(personalInfo);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Something went wrong while fetching Personal Information." });
    }
});

// Routes for Education
router.post('/Education', (req, res) => {
    const { educationDetails } = req.body;

    if (!educationDetails) {
        return res.status(400).json({ error: "Missing Education Details." });
    }

    try {
        setData('education', { educationDetails });
        console.log(`Stored Education Details: ${educationDetails}`);
        return res.status(200).json({ message: "Education Details saved successfully!" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Something went wrong while saving Education Details." });
    }
});

router.get('/Education', (req, res) => {
    try {
        const education = getData('education');
        if (!education) {
            return res.status(404).json({ error: "No Education Details found." });
        }
        return res.status(200).json(education);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Something went wrong while fetching Education Details." });
    }
});

// Routes for Work Experience
router.post('/WorkExperience', (req, res) => {
    const { workExperienceDetails } = req.body;

    if (!workExperienceDetails) {
        return res.status(400).json({ error: "Missing Work Experience Details." });
    }

    try {
        setData('workExperience', { workExperienceDetails });
        console.log(`Stored Work Experience Details: ${workExperienceDetails}`);
        return res.status(200).json({ message: "Work Experience Details saved successfully!" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Something went wrong while saving Work Experience Details." });
    }
});

router.get('/WorkExperience', (req, res) => {
    try {
        const workExperience = getData('workExperience');
        if (!workExperience) {
            return res.status(404).json({ error: "No Work Experience Details found." });
        }
        return res.status(200).json(workExperience);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Something went wrong while fetching Work Experience Details." });
    }
});

// Routes for Skills
router.post('/Skills', (req, res) => {
    const { skillsList } = req.body;

    if (!skillsList) {
        return res.status(400).json({ error: "Missing Skills List." });
    }

    try {
        setData('skills', { skillsList });
        console.log(`Stored Skills List: ${skillsList}`);
        return res.status(200).json({ message: "Skills List saved successfully!" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Something went wrong while saving Skills List." });
    }
});

router.get('/Skills', (req, res) => {
    try {
        const skills = getData('skills');
        if (!skills) {
            return res.status(404).json({ error: "No Skills List found." });
        }
        return res.status(200).json(skills);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Something went wrong while fetching Skills List." });
    }
});

// Routes for Projects
router.post('/Projects', (req, res) => {
    const { projectsDetails } = req.body;

    if (!projectsDetails) {
        return res.status(400).json({ error: "Missing Projects Details." });
    }

    try {
        setData('projects', { projectsDetails });
        console.log(`Stored Projects Details: ${projectsDetails}`);
        return res.status(200).json({ message: "Projects Details saved successfully!" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Something went wrong while saving Projects Details." });
    }
});

router.get('/Projects', (req, res) => {
    try {
        const projects = getData('projects');
        if (!projects) {
            return res.status(404).json({ error: "No Projects Details found." });
        }
        return res.status(200).json(projects);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Something went wrong while fetching Projects Details." });
    }
});

// Routes for Image
router.post('/Image', (req, res) => {
    const { imageData } = req.body; // Expecting Base64 string

    if (!imageData) {
        return res.status(400).json({ error: "Missing Image Data." });
    }

    try {
        setData('image', { imageData });
        console.log(`Stored Image Data.`);
        return res.status(200).json({ message: "Image saved successfully!" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Something went wrong while saving the Image." });
    }
});

router.get('/Image', (req, res) => {
    try {
        const image = getData('image');
        if (!image) {
            return res.status(404).json({ error: "No Image found." });
        }
        return res.status(200).json(image);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Something went wrong while fetching the Image." });
    }
});

module.exports = router;